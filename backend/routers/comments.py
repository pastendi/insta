from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from auth.oAuth2 import get_current_user
from schemas import CommentReq, CommentRes, UserAuth
from db.database import get_db
from db import comment_query

router = APIRouter(prefix='/comment', tags=['comment'])

@router.get('/all/{post_id}')
async def getAllComments(post_id:int, db:Session = Depends(get_db)):
   return comment_query.getAllComments(db, post_id)

@router.post('')
async def createComment(req:CommentReq, db:Session = Depends(get_db), current_user: UserAuth = Depends(get_current_user)):
    return comment_query.createComment(db, req)