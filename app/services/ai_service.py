from google import genai

from app.core.config import settings
from app.api.prompts.api_doc_prompt import SYSTEM_PROMPT


class AIService:
    def __init__(self):
        self.client = genai.Client(api_key=settings.GEMINI_API_KEY)

    async def generate_documentation(self, code: str) -> str:
        response = self.client.models.generate_content(
            model="gemini-2.5-flash",
            contents=f"""
{SYSTEM_PROMPT}

Here is the code:

{code}
""",
        )

        return response.text