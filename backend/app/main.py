from fastapi import FastAPI
from app.routes.chat import router as chat_router

app = FastAPI(title="OnePiece Chatbot API")

app.include_router(chat_router, prefix="/api")


@app.get("/health")
def health_check() -> dict[str, str]:
    return {"status": "ok"}
