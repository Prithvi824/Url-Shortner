"""Pydantic request/response models used by the API routes."""

# Standard library imports
from datetime import datetime
from typing import Optional

# 3rd party imports
from pydantic import BaseModel


class SignupRequest(BaseModel):
    """Payload for creating a new account."""

    username: str
    email: str
    password: str


class LoginRequest(BaseModel):
    """Payload for authenticating an existing account."""

    username: str
    password: str


class TokenResponse(BaseModel):
    """JWT issued after a successful signup or login."""

    access_token: str
    token_type: str = "bearer"
    username: str
    email: str


class ShortenRequest(BaseModel):
    """Payload for creating a new short link."""

    url: str


class ShortenResponse(BaseModel):
    """The short link created for a submitted URL."""

    short_code: str


class LinkOut(BaseModel):
    """A short link as returned to its owner."""

    code: str
    target_url: str
    is_active: bool
    click_count: int
    created_at: datetime


class LinkUpdateRequest(BaseModel):
    """Payload for updating a short link's destination or status."""

    code: str
    target_url: Optional[str] = None
    is_active: Optional[bool] = None


class AccountUpdateRequest(BaseModel):
    """Payload for updating a user's username and/or email."""

    username: Optional[str] = None
    email: Optional[str] = None


class PasswordUpdateRequest(BaseModel):
    """Payload for changing a user's password."""

    old_password: str
    new_password: str
