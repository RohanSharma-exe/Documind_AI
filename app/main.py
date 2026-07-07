from fastapi import FastAPI
from app.api.documentation import router as documentation_router
from fastapi.middleware.cors import CORSMiddleware

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

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)