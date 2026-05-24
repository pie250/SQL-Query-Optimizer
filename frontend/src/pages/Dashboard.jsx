import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Database,
  Sparkles,
  LogOut,
  Search,
} from "lucide-react";

import api from "../services/api";

function Dashboard() {

  const navigate = useNavigate();

  const [query, setQuery] = useState("");

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const optimizeQuery = async () => {

    try {

      setLoading(true);

      const response = await api.post(
        "/optimize",
        { query }
      );

      setResult(response.data);

    } catch (err) {

      console.log(err);

    } finally {

      setLoading(false);
    }
  };

  const logout = () => {

    localStorage.removeItem("token");

    navigate("/signin");
  };

  return (

    <div className="min-h-screen bg-[#f8fafc]">

      {/* NAVBAR */}

      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div className="bg-blue-100 p-3 rounded-2xl">
              <Database className="text-blue-600" />
            </div>

            <div>

              <h1 className="text-xl font-bold text-slate-800">
                SQL Optimizer
              </h1>

              <p className="text-sm text-slate-500">
                AI Powered Analysis
              </p>

            </div>

          </div>

          <button
            onClick={logout}
            className="
              flex
              items-center
              gap-2
              bg-red-50
              hover:bg-red-100
              text-red-500
              px-4
              py-2
              rounded-xl
              transition-all
            "
          >
            <LogOut size={18} />
            Logout
          </button>

        </div>

      </nav>

      {/* MAIN */}

      <div className="max-w-6xl mx-auto px-6 py-12">

        {/* HERO */}

        <div className="text-center mb-14">

          <div className="
            inline-flex
            items-center
            gap-2
            bg-blue-50
            text-blue-600
            px-4
            py-2
            rounded-full
            mb-6
            font-medium
          ">
            <Sparkles size={18} />
            AI SQL Optimization
          </div>

          <h1 className="
            text-5xl
            font-black
            text-slate-900
            leading-tight
          ">
            Optimize Queries <br />
            in Seconds
          </h1>

          <p className="
            text-slate-500
            text-lg
            mt-6
            max-w-2xl
            mx-auto
          ">
            Detect slow queries, identify bottlenecks,
            and receive AI-generated optimization insights.
          </p>

        </div>

        {/* QUERY BOX */}

        <div className="
          bg-white
          rounded-3xl
          shadow-sm
          border
          border-slate-200
          p-8
        ">

          <div className="flex items-center gap-3 mb-5">

            <Search className="text-slate-400" />

            <h2 className="text-2xl font-bold text-slate-800">
              Analyze Query
            </h2>

          </div>

          <textarea
            rows={10}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Paste your SQL query here..."
            className="
              w-full
              border
              border-slate-300
              rounded-2xl
              p-5
              outline-none
              resize-none
              text-slate-700
              focus:border-blue-500
              focus:ring-4
              focus:ring-blue-100
              transition-all
            "
          />

          <button
            onClick={optimizeQuery}
            className="
              mt-6
              bg-blue-600
              hover:bg-blue-700
              text-white
              px-8
              py-4
              rounded-2xl
              font-semibold
              transition-all
            "
          >
            {
              loading
                ? "Analyzing..."
                : "Optimize Query"
            }
          </button>

        </div>

        {/* RESULTS */}

        {
          result && (

            <div className="mt-10 space-y-8">

              {/* AI ANALYSIS */}

              <div className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
              ">

                <h2 className="
                  text-3xl
                  font-bold
                  text-slate-800
                  mb-6
                ">
                  AI Explanation
                </h2>

                <div className="
                  bg-slate-50
                  rounded-2xl
                  p-6
                  overflow-auto
                ">

                  <pre className="
                    whitespace-pre-wrap
                    text-slate-700
                    text-sm
                    leading-7
                  ">
                    {result.ai_analysis}
                  </pre>

                </div>

              </div>

              {/* ISSUES */}

              <div className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
              ">

                <h2 className="
                  text-3xl
                  font-bold
                  text-slate-800
                  mb-6
                ">
                  Issues Found
                </h2>

                <div className="space-y-5">

                  {
                    result.issues?.map((issue, index) => (

                      <div
                        key={index}
                        className="
                          bg-red-50
                          border
                          border-red-100
                          rounded-2xl
                          p-5
                        "
                      >

                        <h3 className="
                          text-lg
                          font-bold
                          text-red-600
                        ">
                          {issue.type}
                        </h3>

                        <p className="text-slate-600 mt-2">
                          {issue.problem}
                        </p>

                        <p className="text-green-600 mt-3 font-medium">
                          {issue.solution}
                        </p>

                      </div>
                    ))
                  }

                </div>

              </div>

              {/* INDEXES */}

              <div className="
                bg-white
                rounded-3xl
                border
                border-slate-200
                p-8
              ">

                <h2 className="
                  text-3xl
                  font-bold
                  text-slate-800
                  mb-6
                ">
                  Recommended Indexes
                </h2>

                {
                  result.recommended_indexes?.map((index, i) => (

                    <div
                      key={i}
                      className="
                        bg-slate-50
                        border
                        border-slate-200
                        rounded-2xl
                        p-5
                        mb-4
                      "
                    >

                      <pre className="text-blue-700">
                        {index}
                      </pre>

                    </div>
                  ))
                }

              </div>

            </div>
          )
        }

      </div>

    </div>
  );
}

export default Dashboard;