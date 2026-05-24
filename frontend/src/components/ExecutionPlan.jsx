export default function ExecutionPlan({ plan }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-yellow-400">
        Execution Plan
      </h2>

      <div className="space-y-2">
        {plan.map((line, index) => (
          <div
            key={index}
            className="bg-slate-800 p-2 rounded-lg text-sm"
          >
            {line}
          </div>
        ))}
      </div>
    </div>
  );
}