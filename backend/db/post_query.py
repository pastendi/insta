from schemas import PostReq
import datetime
from sqlalchemy.orm.session import Session
from models import Post
def createPost(db:Session, req:PostReq):
    new_post = Post(**req.model_dump(), timestamp = datetime.datetime.now())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post
def getAllPosts(db:Session):
    return db.query(Post).all()
