from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
import models
from db.database import engine
from routers import users, posts

app = FastAPI()

app.include_router(users.router)
app.include_router(posts.router)


@app.get("/")
async def root():
    return {"message": "Hello World"}


models.Base.metadata.create_all(engine)

app.mount('/images', StaticFiles(directory='./images'), name='images')
