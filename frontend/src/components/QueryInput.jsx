import { useState } from "react";
import api from "../services/api";

const QueryInput = () => {
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);

  const optimizeQuery = async () => {
    if (!query) return;

    try {
      setLoading(true);

      const res = await api.post("/optimize", {
        query,
      });

      setResult(res.data);

    } catch (err) {
      console.log(err);
      alert("Optimization failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">
      <h2 className="text-3xl font-bold mb-5">
        SQL Query Optimizer
      </h2>

      <textarea
        rows="8"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="SELECT * FROM users WHERE email='test@gmail.com'"
        className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none text-slate-200"
      />

      <button
        onClick={optimizeQuery}
        className="mt-5 bg-cyan-500 hover:bg-cyan-400 px-6 py-3 rounded-2xl font-bold transition-all"
      >
        {loading ? "Optimizing..." : "Optimize Query"}
      </button>

      {result && (
        <div className="mt-8 space-y-5">

          <div className="bg-black/30 p-5 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">
              Optimized Query
            </h3>

            <pre className="text-green-400 whitespace-pre-wrap">
              {result.optimized_query}
            </pre>
          </div>

          <div className="bg-black/30 p-5 rounded-2xl">
            <h3 className="text-xl font-bold mb-3">
              AI Explanation
            </h3>

            <p className="text-slate-300">
              {result.explanation}
            </p>
          </div>

        </div>
      )}
    </div>
  );
};

export default QueryInput;