"""SQLite database engine setup and session dependency for the app."""

# Standard library imports
import os
from typing import Iterator

# 3rd party imports
from dotenv import load_dotenv
from sqlmodel import Session, SQLModel, create_engine

# Load environment variables from a .env file if it exists
load_dotenv()

# constants
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./urlshortener.db")

# Configure the database engine with appropriate connection arguments based on the database type
connect_args = {"check_same_thread": False} if DATABASE_URL.startswith("sqlite") else {}
engine = create_engine(DATABASE_URL, connect_args=connect_args)


def create_db_and_tables() -> None:
    """Create all tables defined on SQLModel metadata if they don't exist."""
    SQLModel.metadata.create_all(engine)


def get_session() -> Iterator[Session]:
    """Yield a database session for use as a FastAPI dependency."""
    with Session(engine) as session:
        yield session
