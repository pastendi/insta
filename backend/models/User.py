from db.database import Base
from sqlalchemy import Column, Integer, String
from pydantic import BaseModel


class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True, index=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)


class UserReq(BaseModel):
    username: str
    email: str
    password: str


class UserRes(BaseModel):
    username: str
    email: str
