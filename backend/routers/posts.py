import random
import shutil
import string
from fastapi import APIRouter, Depends, Form, status, UploadFile, File
from fastapi.exceptions import HTTPException
from schemas import PostReq, PostRes, UserAuth
from sqlalchemy.orm import Session
from db.database import get_db
from db import post_query
from typing import List
from auth.oAuth2 import get_current_user
from utils.cloudinaryUtils import uploadToCloudinary



router = APIRouter(prefix='/post', tags=['post'])


@router.post('',response_model=PostRes,  status_code=status.HTTP_201_CREATED)
async def createPost(
    caption:str=Form(...),
    image:UploadFile= File(...), 
    db:Session = Depends(get_db),
    user:UserAuth = Depends(get_current_user)):
    
    letters = string.ascii_letters
    rand_str = ''.join(random.choice(letters) for i in range(6))
    new = f'_{rand_str}.'
    filename = new.join(image.filename.split('.',1))
    path = f'images/{filename}'

    with open(path, 'w+b') as buffer:
        shutil.copyfileobj(image.file, buffer)

    image_url = await uploadToCloudinary(imagePath=path,filename=filename)
    req_dict = {'image_url':image_url,'caption':caption,'user_id':user.id}
    return post_query.createPost(db,req=PostReq(**req_dict))

@router.get('', response_model=List[PostRes], status_code=status.HTTP_200_OK)
async def getAllPosts(db:Session = Depends(get_db)):
    return post_query.getAllPosts(db)


@router.get('/delete/{id}')
async def deletePost(id:int, db:Session = Depends(get_db), current_user:UserAuth=Depends(get_current_user)):
    return post_query.delete(db,id,current_user.id)