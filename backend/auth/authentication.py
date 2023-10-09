from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm.session import Session
from db.database import get_db
from models import User
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from db.hashing import Hash
from auth.oAuth2 import create_access_token


router = APIRouter(tags=['auth'])
@router.post('/login')
async def login(req:OAuth2PasswordRequestForm = Depends(), db:Session= Depends(get_db)):
 user = db.query(User).filter(User.username == req.username).first()
 if not user or not Hash.verify(user.password, req.password):
  raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Invalid credentials')
 access_token = create_access_token(data={'username':user.username})
 return{
  "token":access_token,
  'user_id':user.id,
  'username':user.username
 }