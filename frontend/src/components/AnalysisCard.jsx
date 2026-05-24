export default function AnalysisCard({ analysis }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-green-400">
        AI Analysis
      </h2>

      <pre className="whitespace-pre-wrap text-sm">
        {analysis}
      </pre>
    </div>
  );
}