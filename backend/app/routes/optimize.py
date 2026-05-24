from fastapi import APIRouter
from pydantic import BaseModel

from app.services.optimizer_service import optimize_query
router = APIRouter()

class QueryRequest(BaseModel):
    query: str

@router.post("/optimize")
def optimize(request: QueryRequest):

    result = optimize_query(request.query)

    return result