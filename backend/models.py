"""SQLModel table models for users, short links, and click metrics."""

# Standard library imports
from datetime import datetime, timezone
from typing import Optional

# 3rd party imports
from sqlmodel import Field, SQLModel


def utcnow() -> datetime:
    """Return the current UTC timestamp."""
    return datetime.now(timezone.utc)


class User(SQLModel, table=True):
    """A registered account that owns short links."""

    id: Optional[int] = Field(default=None, primary_key=True)
    username: str = Field(unique=True, index=True)
    email: str = Field(unique=True, index=True)
    hashed_password: str
    created_at: datetime = Field(default_factory=utcnow)


class ShortLink(SQLModel, table=True):
    """A shortened URL owned by a user."""

    id: Optional[int] = Field(default=None, primary_key=True)
    code: str = Field(unique=True, index=True)
    owner_id: int = Field(foreign_key="user.id")
    target_url: str
    is_active: bool = Field(default=True)
    click_count: int = Field(default=0)
    created_at: datetime = Field(default_factory=utcnow)


class ClickEvent(SQLModel, table=True):
    """A single redirect/click recorded against a short link for monitoring."""

    id: Optional[int] = Field(default=None, primary_key=True)
    link_id: int = Field(foreign_key="shortlink.id")
    clicked_at: datetime = Field(default_factory=utcnow)
    ip_address: Optional[str] = None
    user_agent: Optional[str] = None
    referrer: Optional[str] = None
