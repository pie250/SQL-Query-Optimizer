import google.generativeai as genai
import os

GEMINI_API_KEY = os.getenv("GEMINI_API_KEY")

genai.configure(api_key=GEMINI_API_KEY)

model = genai.GenerativeModel("gemini-2.5-flash")


def ask_llm(prompt):
    try:
        response = model.generate_content(prompt)

        if response and response.text:
            return response.text

        return "No AI response generated."

    except Exception as e:
        print("Gemini Error:", str(e))

        return f"""
AI explanation unavailable.

Reason:
{str(e)}
"""