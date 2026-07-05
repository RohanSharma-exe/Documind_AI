import unittest


class PromptImportTest(unittest.TestCase):
    def test_ai_service_imports_prompt_module(self):
        import app.services.ai_service as ai_service

        self.assertTrue(hasattr(ai_service, "AIService"))


if __name__ == "__main__":
    unittest.main()
