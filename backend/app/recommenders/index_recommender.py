import re

def recommend_indexes(query):

    recommendations = []

    where_match = re.search(
        r"WHERE\s+(.+)",
        query,
        re.IGNORECASE
    )

    if where_match:

        where_clause = where_match.group(1)

        columns = re.findall(
            r"(\w+)\s*=",
            where_clause
        )

        for column in columns:

            recommendations.append(
                f"CREATE INDEX idx_{column} ON table_name({column});"
            )

    return recommendations