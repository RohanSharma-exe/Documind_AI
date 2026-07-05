from pydantic import BaseModel


class DocumentationRequest(BaseModel):
    code: str


class DocumentationResponse(BaseModel):
    markdown: str