from pydantic import BaseModel
from datetime import datetime

class UserReq(BaseModel):
    username: str
    email: str
    password: str


class UserRes(BaseModel):
    username: str
    email: str
    class config():
        orm=True

class PostReq(BaseModel):
    image_url: str
    image_url_type: str
    caption: str
    user_id:int

class PostRes(PostReq):
    id:int
    user:UserRes
    timestamp: datetime
    class config():
        orm=True