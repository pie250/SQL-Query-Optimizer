SQL AI Optimizer 

An AI-powered SQL Query Optimization platform that analyzes SQL queries, detects performance bottlenecks, recommends indexes, and generates AI-based optimization insights using Gemini API.

🌟 Features

🔍 SQL Query Analysis
⚡ Execution Plan Visualization
🧠 AI-Powered Optimization Suggestions
📈 Performance Bottleneck Detection
🗂️ Index Recommendations
🔐 User Authentication (MongoDB)
🐘 PostgreSQL Integration
🎨 Modern React + Tailwind Frontend


🛠️ Tech Stack
Frontend
React.js
Vite
Tailwind CSS
Axios
React Router DOM
Backend
FastAPI
Gemini API
PostgreSQL
MongoDB
PyMongo
Psycopg2
📂 Project Structure
SQL-AI-Optimizer
│
├── backend
│   ├── app
│   │   ├── ai
│   │   ├── analyzers
│   │   ├── recommenders
│   │   ├── routes
│   │   ├── services
│   │   ├── db
│   │   ├── utils
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
│   │   ├── services
│   │   └── App.jsx
│   │
│   └── package.json
⚙️ Environment Variables

Create a .env file inside backend folder:

GEMINI_API_KEY=your_gemini_api_key

DATABASE_URL=your_postgresql_url

MONGO_URL=your_mongodb_url
▶️ Run Frontend
cd frontend

npm install

npm run dev
▶️ Run Backend
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
🌐 Deployment Links
Frontend (Render/Vercel)
[https://your-frontend-link.onrender.com](url)
Backend API
[https://your-backend-link.onrender.com](url)
🔗 API Endpoint
Optimize Query
POST /optimize
Request Body
{
  "query": "SELECT * FROM orders WHERE customer_id = 5"
}
📊 Sample Output
Sequential Scan Detection
Missing Index Suggestions
AI Performance Analysis
Optimized Query Recommendations
🔐 Authentication
Signup/Login stored in MongoDB
SQL analysis handled using PostgreSQL
🚀 Future Enhancements
Query History
Dashboard Analytics
Query Cost Graphs
AI Chat Assistant
Multi-Database Support
JWT Authentication
👨‍💻 Author

Developed by Rohit Parashar
