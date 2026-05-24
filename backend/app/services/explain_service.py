from sqlalchemy import text

from app.services.db import engine

def get_execution_plan(query):

    explain_query = f"EXPLAIN ANALYZE {query}"

    with engine.connect() as conn:

        result = conn.execute(
            text(explain_query)
        )

        rows = result.fetchall()

    plan = [row[0] for row in rows]

    return plan