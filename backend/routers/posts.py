from fastapi import APIRouter, Depends, status
from fastapi.exceptions import HTTPException
from schemas import PostReq, PostRes
from sqlalchemy.orm import Session
from db.database import get_db
from db import post_query


router = APIRouter(prefix='/post', tags=['post'])

image_url_types = ['absolute', 'relative']

@router.post('', response_model=PostRes, status_code=status.HTTP_201_CREATED)
async def createPost(req:PostReq, db:Session = Depends(get_db)):
    if not req.image_url_type in image_url_types:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Parameter image url type can only be of values 'absolute or relative' ")
    return post_query.createPost(db,req)