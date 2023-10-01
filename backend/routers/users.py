from fastapi import APIRouter, Depends
from db.database import get_db
from db.user_query import create_user
from schemas import UserReq, UserRes
from sqlalchemy.orm.session import Session

router = APIRouter(prefix="/user", tags=["user"])


@router.post("", response_model=UserRes)
def signup(req: UserReq, db: Session = Depends(get_db)):
    return create_user(db, req)
