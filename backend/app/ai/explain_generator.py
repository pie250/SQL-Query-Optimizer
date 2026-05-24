from app.ai.prompts import build_prompt
from app.ai.llm_service import ask_llm

def generate_explanation(
    query,
    plan,
    issues,
    indexes
):

    prompt = build_prompt(
        query,
        plan,
        issues,
        indexes
    )

    response = ask_llm(prompt)

    return response