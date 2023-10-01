from schemas import UserReq
from models import User
from db.hashing import Hash
from sqlalchemy.orm.session import Session


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
