from fastapi import FastAPI
from models import User
from db.database import engine
from router import UserRoute

app = FastAPI()

app.include_router(UserRoute.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


User.Base.metadata.create_all(engine)
