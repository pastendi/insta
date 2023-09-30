from fastapi import APIRouter, Depends
from db.database import get_db
from db.db_user import create_user
from models.User import UserReq, UserRes
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/user", tags=["user"])


@router.post("", response_model=UserRes)
def signup(req: UserReq, db: Session = Depends(get_db)):
    return create_user(db, req)
