from app.services.explain_service import get_execution_plan

from app.analyzers.query_analyzer import analyze_plan

from app.recommenders.index_recommender import recommend_indexes

from app.ai.explain_generator import generate_explanation

def optimize_query(query):

    plan = get_execution_plan(query)

    issues = analyze_plan(plan)

    indexes = recommend_indexes(query)

    ai_explanation = generate_explanation(
        query,
        plan,
        issues,
        indexes
    )

    return {
        "query": query,
        "execution_plan": plan,
        "issues": issues,
        "recommended_indexes": indexes,
        "ai_analysis": ai_explanation
    }