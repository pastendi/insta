from schemas import PostReq
import datetime
from sqlalchemy.orm.session import Session
from models import Post
from fastapi import HTTPException, status

def createPost(db:Session, req:PostReq):
    new_post = Post(**req.model_dump(), timestamp = datetime.datetime.now())
    db.add(new_post)
    db.commit()
    db.refresh(new_post)
    return new_post
def getAllPosts(db:Session):
    return db.query(Post).order_by(Post.timestamp.desc()).all()

def delete( db:Session,id:int, user_id:int):
    post = db.query(Post).filter(Post.id == id).first()
    if not post:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id {id} not found")
    if(post.user_id != user_id):
        raise HTTPException(status_code=status.HTTP_403_FORBIDDEN, detail='Not authorized')
    db.delete(post)
    db.commit()
    return 'deleted'