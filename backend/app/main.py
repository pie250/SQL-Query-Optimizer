from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.routes.auth import router as auth_router
from app.routes.optimize import router as optimize_router

app = FastAPI()

origins = [
    "http://localhost:5173",
    "https://sql-query-optimizer-1.onrender.com",
]

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Routes
app.include_router(auth_router)
app.include_router(optimize_router)

@app.get("/")
def home():
    return {
        "message": "SQL Optimizer Backend Running"
    }