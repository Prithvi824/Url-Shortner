"""FastAPI application exposing the URL shortener API."""

# Standard library imports
import os
import secrets
import string
from typing import List

# 3rd party imports
from dotenv import load_dotenv
from sqlmodel import Session, select
from fastapi.responses import RedirectResponse
from fastapi.middleware.cors import CORSMiddleware
from fastapi import Depends, FastAPI, HTTPException, Request, status

# local party imports
from backend.database import create_db_and_tables, get_session
from backend.models import ClickEvent, ShortLink, User
from backend.schemas import (
    AccountUpdateRequest,
    LinkOut,
    LinkUpdateRequest,
    LoginRequest,
    PasswordUpdateRequest,
    ShortenRequest,
    ShortenResponse,
    SignupRequest,
    TokenResponse,
)
from backend.security import (
    create_access_token,
    get_current_user,
    hash_password,
    verify_password,
)

# Load environment variables from .env file
load_dotenv()

# Configuration constants
FRONTEND_URL = os.getenv("FRONTEND_URL", "http://localhost:5173")
CORS_ORIGINS = [
    origin.strip() for origin in os.getenv("CORS_ORIGINS", FRONTEND_URL).split(",")
]

# Constants for generating short codes
CODE_ALPHABET = string.ascii_letters + string.digits
CODE_LENGTH = 6


# create a lifespan event to initialize the database
def on_startup(app: FastAPI):
    """
    Create database tables on application startup.
    This function is called when the FastAPI application starts. It ensures that all
    necessary database tables are created before the application begins handling requests.
    """

    # create the tables
    create_db_and_tables()

    # yield control back to the application
    yield



# create the app
app = FastAPI(title="QuickLink API", lifespan=on_startup)

# add CORS middleware to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=CORS_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Helper function to generate a unique short code
def generate_unique_code(session: Session) -> str:
    """
    Generate a random short code that isn't already in use.

    Args:
        session (Session): The database session to check for existing codes.

    Returns:
        str: A unique short code.
    """
    while True:
        code = "".join(secrets.choice(CODE_ALPHABET) for _ in range(CODE_LENGTH))
        exists = session.exec(select(ShortLink).where(ShortLink.code == code)).first()
        if not exists:
            return code


# =============================================================
# =============================================================
# API Endpoints
# =============================================================
# =============================================================
@app.post("/signup", response_model=TokenResponse)
def signup(
    payload: SignupRequest, session: Session = Depends(get_session)
) -> TokenResponse:
    """
    Create a new user account and return an access token.
    """

    # check if the username or email is already taken
    existing = session.exec(
        select(User).where(
            (User.username == payload.username) | (User.email == payload.email)
        )
    ).first()
    if existing:
        raise HTTPException(
            status.HTTP_409_CONFLICT, "Username or email already registered"
        )

    # create the new user and store it in the database
    user = User(
        username=payload.username,
        email=payload.email,
        hashed_password=hash_password(payload.password),
    )

    # add the user to the session and commit the transaction
    session.add(user)
    session.commit()
    session.refresh(user)

    # generate an access token for the new user and return it
    token = create_access_token(user.username)
    return TokenResponse(access_token=token, username=user.username, email=user.email)


@app.post("/login", response_model=TokenResponse)
def login(
    payload: LoginRequest, session: Session = Depends(get_session)
) -> TokenResponse:
    """
    Authenticate a user and return an access token.
    """

    # retrieve the user from the database and verify the password
    user = session.exec(select(User).where(User.username == payload.username)).first()

    # if the user doesn't exist or the password is incorrect, raise an HTTP 401 error
    if not user or not verify_password(payload.password, user.hashed_password):
        raise HTTPException(
            status.HTTP_401_UNAUTHORIZED, "Invalid username or password"
        )

    # generate an access token for the authenticated user and return it
    token = create_access_token(user.username)
    return TokenResponse(access_token=token, username=user.username, email=user.email)


@app.post("/shorten", response_model=ShortenResponse)
def shorten(
    payload: ShortenRequest,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> ShortenResponse:
    """
    Create a short link for the given URL, owned by the current user.
    """

    # generate a unique short code and create a new ShortLink record in the database
    code = generate_unique_code(session)
    link = ShortLink(code=code, owner_id=current_user.id, target_url=payload.url)
    session.add(link)
    session.commit()

    # return the short code and the full short URL to the client
    return ShortenResponse(short_code=code)


@app.get("/links", response_model=List[LinkOut])
def list_links(
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> List[ShortLink]:
    """
    List all short links owned by the current user.
    """
    links = session.exec(
        select(ShortLink).where(ShortLink.owner_id == current_user.id)
    ).all()
    return links


@app.post("/update", response_model=LinkOut)
def update_link(
    payload: LinkUpdateRequest,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> ShortLink:
    """
    Update a short link's destination URL and/or active status.
    """

    # Retrieve the short link from the database and check ownership
    link = session.exec(select(ShortLink).where(ShortLink.code == payload.code)).first()
    if not link:
        raise HTTPException(status.HTTP_404_NOT_FOUND, "Short link not found")
    if link.owner_id != current_user.id:
        raise HTTPException(status.HTTP_403_FORBIDDEN, "You do not own this short link")

    # Update the link's target URL and active status if provided in the payload
    if payload.target_url is not None:
        link.target_url = payload.target_url
    if payload.is_active is not None:
        link.is_active = payload.is_active

    # Save the changes to the database and return the updated link
    session.add(link)
    session.commit()
    session.refresh(link)
    return link


@app.patch("/account", response_model=TokenResponse)
def update_account(
    payload: AccountUpdateRequest,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> TokenResponse:
    """
    Update the current user's username and/or email.
    """

    # Check if the new username is provided and different from the current one
    if payload.username and payload.username != current_user.username:
        taken = session.exec(
            select(User).where(User.username == payload.username)
        ).first()
        if taken:
            raise HTTPException(status.HTTP_409_CONFLICT, "Username already taken")
        current_user.username = payload.username

    # Check if the new email is provided and different from the current one
    if payload.email and payload.email != current_user.email:
        taken = session.exec(select(User).where(User.email == payload.email)).first()
        if taken:
            raise HTTPException(status.HTTP_409_CONFLICT, "Email already registered")
        current_user.email = payload.email

    # Save the updated user information to the database
    session.add(current_user)
    session.commit()
    session.refresh(current_user)

    # Generate a new access token for the updated user and return it
    token = create_access_token(current_user.username)
    return TokenResponse(
        access_token=token, username=current_user.username, email=current_user.email
    )


@app.post("/account/password")
def update_password(
    payload: PasswordUpdateRequest,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user),
) -> dict:
    """
    Change the current user's password after verifying the old one.
    """

    # Verify that the provided old password matches the current user's hashed password
    if not verify_password(payload.old_password, current_user.hashed_password):
        raise HTTPException(
            status.HTTP_401_UNAUTHORIZED, "Current password is incorrect"
        )

    # Update the user's password with the new hashed password and save to the database
    current_user.hashed_password = hash_password(payload.new_password)
    session.add(current_user)
    session.commit()
    return {"success": True}


@app.get("/{short_code}")
def redirect_short_code(
    short_code: str,
    request: Request,
    session: Session = Depends(get_session),
) -> RedirectResponse:
    """
    Log a click and redirect to the short link's target, or to the frontend if unknown.
    """

    # Retrieve the short link from the database using the provided short code
    link = session.exec(select(ShortLink).where(ShortLink.code == short_code)).first()
    if not link or not link.is_active:
        return RedirectResponse(FRONTEND_URL)

    # Log the click event with relevant information and update the click count
    event = ClickEvent(
        link_id=link.id,
        ip_address=request.client.host if request.client else None,
        user_agent=request.headers.get("user-agent"),
        referrer=request.headers.get("referer"),
    )

    # Add the click event to the session, increment the link's click count, and commit the changes to the database
    session.add(event)
    link.click_count += 1
    session.add(link)
    session.commit()
    return RedirectResponse(link.target_url, status_code=status.HTTP_302_FOUND)
