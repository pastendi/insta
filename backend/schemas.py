from pydantic import BaseModel


class UserReq(BaseModel):
    username: str
    email: str
    password: str


class UserRes(BaseModel):
    username: str
    email: str
