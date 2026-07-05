from fastapi import FastAPI
from app.api.documentation import router as documentation_router

app = FastAPI(
    title="DocuMind AI",
    description="Generate API documentation from Python code using AI",
    version="0.1.0",
)

app.include_router(documentation_router)


@app.get("/")
async def root():
    return {
        "project": "DocuMind AI",
        "status": "running",
        "version": "0.1.0",
    }


@app.get("/health")
async def health():
    return {"status": "healthy"}