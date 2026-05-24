def build_prompt(query, plan, issues, indexes):

    return f"""
You are an expert PostgreSQL query optimizer.

Analyze the following SQL query.

SQL Query:
{query}

Execution Plan:
{plan}

Detected Issues:
{issues}

Recommended Indexes:
{indexes}

Tasks:
1. Explain why the query is slow
2. Explain detected bottlenecks
3. Suggest optimizations
4. Provide estimated improvements
5. Rewrite the optimized SQL query

Return response in clear JSON format.
"""