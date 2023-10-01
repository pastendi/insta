from fastapi import FastAPI
import models
from db.database import engine
from routers import users

app = FastAPI()

app.include_router(users.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


models.Base.metadata.create_all(engine)
