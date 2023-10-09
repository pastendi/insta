from fastapi.security.oauth2 import OAuth2PasswordBearer
from typing import Optional
from datetime import datetime, timedelta
from jose import jwt, JWTError
from fastapi import HTTPException, Depends, status
from sqlalchemy.orm import Session
from db.database import get_db
from db import user_query

oauth2_schema = OAuth2PasswordBearer(tokenUrl='login')

SECRET_KEY = 'lksadjflkadsjfladslfjlkadf'
ALGORITHM = 'HS256'
ACCESS_TOKEN_LIFETIME = 30

def create_access_token(data: dict, expires_delta: Optional[timedelta]=None):
    to_encode = data.copy()
    if expires_delta:
        expire = datetime.utcnow() + expires_delta
    else:
        expire = datetime.utcnow() + timedelta(minutes=15)
    to_encode.update({"exp":expire})
    token = jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)
    return token

def get_current_user(token: str = Depends(oauth2_schema), db:Session = Depends(get_db)):
    credentials_exception = HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Could not validate credentials",headers={'WWW-Authenticate':'Bearer'})
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        username: str = payload.get('username')
        if username is None:
            raise credentials_exception
    except JWTError:
        raise credentials_exception
    user = user_query.get_user_by_username(db, username=username)
    if user is None:
        raise credentials_exception
    return user