from datetime import datetime
from sqlalchemy.orm import Session
from models import Comment
from schemas import CommentReq


def createComment(db:Session, req: CommentReq):
  new_comment = Comment(
    text = req.text,
    username = req.username,
    post_id = req.post_id,
    timestamp = datetime.now()
  )
  db.add(new_comment)
  db.commit()
  db.refresh(new_comment)
  return new_comment

def getAllComments(db:Session, post_id: int):
  return db.query(Comment).filter(Comment.post_id == post_id).all()