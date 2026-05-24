def analyze_plan(plan):

    issues = []

    plan_text = " ".join(plan)

    if "Seq Scan" in plan_text:
        issues.append({
            "type": "Sequential Scan",
            "problem": "Full table scan detected",
            "solution": "Consider adding an index"
        })

    if "Sort" in plan_text:
        issues.append({
            "type": "Sort Operation",
            "problem": "Expensive sorting detected",
            "solution": "Consider indexing ORDER BY columns"
        })

    if "Nested Loop" in plan_text:
        issues.append({
            "type": "Nested Loop Join",
            "problem": "Potentially expensive join detected",
            "solution": "Consider proper indexing on JOIN columns"
        })

    return issues