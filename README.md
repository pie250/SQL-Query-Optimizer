# 🚀 SQL AI Optimizer

An AI-powered SQL Query Optimization platform that analyzes SQL queries, detects performance bottlenecks, recommends indexes, and provides intelligent optimization insights using the **Gemini API**.

---
 Deployment Links

### 🚀 Live Application

- Frontend: :[https://sql-query-optimizer-1.onrender.com](url)
- Backend: :[https://sql-query-optimizer-gstd.onrender.com](url)
- 
## 📌 Overview

SQL AI Optimizer helps developers and data engineers understand and improve SQL query performance by combining:

- Execution plan analysis
- AI-generated optimization suggestions
- Index recommendations
- Bottleneck detection

Built with a modern full-stack architecture using **React + FastAPI + PostgreSQL + MongoDB + Gemini AI**.

---

## ✨ Key Features

### 🔍 SQL Intelligence
- SQL query parsing and analysis
- Performance bottleneck detection
- Query structure breakdown

### ⚡ AI Optimization (Gemini Powered)
- Smart query optimization suggestions
- Index recommendations
- Query rewriting improvements

### 📊 Execution Insights
- Execution plan visualization
- Query performance analysis
- Cost and efficiency insights

### 🔐 Authentication System
- Secure user authentication
- MongoDB-based user storage

### 🧠 Database Support
- PostgreSQL integration for query execution
- Support for multiple query workloads (extendable)

---

## 🛠 Tech Stack

### Frontend
- React.js (Vite)
- Tailwind CSS
- Axios
- React Router DOM

### Backend
- FastAPI
- Gemini API (Google AI)
- PostgreSQL (psycopg2)
- MongoDB (PyMongo)

---

SQL-AI-Optimizer/
│
├── frontend/
│ ├── src/
│ ├── public/
│ └── package.json
│
├── backend/
│ ├── app/
│ ├── routes/
│ ├── services/
│ └── requirements.txt
│
└── README.md

API Endpoints
🧠 Optimize SQL Query

POST /optimize

Request Body:
{
  "query": "SELECT * FROM orders WHERE customer_id = 5"
}

Response:
{
  "optimized_query": "...",
  "suggestions": [
    "Add index on customer_id",
    "Avoid SELECT * for better performance"
  ],
  "execution_insight": "Query can be optimized using index scan"
}


📊 Future Enhancements
📈 Query Performance Dashboard
🧾 Query History Tracking
🤖 AI Chat Assistant for SQL help
🗂 Multi-Database Support (MySQL, SQLite, etc.)
🔐 JWT Authentication
⚡ Real-time query execution monitoring


🧠 Use Cases
Database optimization learning tool
Backend performance tuning assistant
SQL education platform
DevOps query monitoring tool

👨‍💻 Author

Rohit Parashar
Passionate about Data Science, Machine Learning, and Backend Engineering.

