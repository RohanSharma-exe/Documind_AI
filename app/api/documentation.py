from fastapi import APIRouter

from app.schemas.documentation import (
    DocumentationRequest,
    DocumentationResponse,
)
from app.services.ai_service import AIService

router = APIRouter(prefix="/documentation", tags=["Documentation"])

service = AIService()


@router.post(
    "/generate",
    response_model=DocumentationResponse,
)
async def generate_documentation(
    request: DocumentationRequest,
):
    markdown = await service.generate_documentation(
        request.code
    )

    return DocumentationResponse(markdown=markdown)