from schemas import UserReq
from models import User
from db.hashing import Hash
from sqlalchemy.orm.session import Session
from fastapi import HTTPException, status


def create_user(db: Session, req: UserReq):
    new_user = User(
        username=req.username,
        email=req.email,
        password=Hash.bcrypt(req.password),
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def get_user_by_username(db:Session, username:str):
    user = db.query(User).filter(User.username == username).first()
    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail=f"User with username {username} not found")
    return user