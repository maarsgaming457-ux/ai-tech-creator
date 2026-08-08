from pydantic import BaseModel, EmailStr
from typing import Optional

class UserCreate(BaseModel):
    email: EmailStr
    password: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str

class Token(BaseModel):
    access_token: str
    token_type: str

class PersonaRequest(BaseModel):
    name: str
    domain: str

class AgentInitRequest(BaseModel):
    persona: PersonaRequest

class OnboardRequest(BaseModel):
    niche: str
    goal: str

class GenerateRequest(BaseModel):
    category: Optional[str] = None
    series_topic: Optional[str] = None

class ReplyRequest(BaseModel):
    comment: str

class FeedbackRequest(BaseModel):
    post_id: int
    is_useful: bool
    comments: str = ""
