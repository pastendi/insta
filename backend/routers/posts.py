import random
import shutil
import string
from fastapi import APIRouter, Depends, status, UploadFile, File
from fastapi.exceptions import HTTPException
from schemas import PostReq, PostRes, UserAuth
from sqlalchemy.orm import Session
from db.database import get_db
from db import post_query
from typing import List
from auth.oAuth2 import get_current_user



router = APIRouter(prefix='/post', tags=['post'])

image_url_types = ['absolute', 'relative']

@router.post('', response_model=PostRes, status_code=status.HTTP_201_CREATED)
async def createPost(req:PostReq, db:Session = Depends(get_db), user:UserAuth = Depends(get_current_user)):
    if not req.image_url_type in image_url_types:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Parameter image url type can only be of values 'absolute or relative' ")
    return post_query.createPost(db,req)

@router.get('', response_model=List[PostRes], status_code=status.HTTP_200_OK)
async def getAllPosts(db:Session = Depends(get_db)):
    return post_query.getAllPosts(db)

@router.post('/image')
async def uploadImage(image: UploadFile= File(...),user:UserAuth = Depends(get_current_user)):
    letters = string.ascii_letters
    rand_str = ''.join(random.choice(letters) for i in range(6))
    new = f'_{rand_str}.'
    filename = new.join(image.filename.split('.',1))
    path = f'images/{filename}'

    with open(path, 'w+b') as buffer:
        shutil.copyfileobj(image.file, buffer)

    return {'filename':path}