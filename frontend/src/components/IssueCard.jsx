export default function IssueCard({ issue }) {
  return (
    <div className="bg-slate-900 p-5 rounded-2xl">
      <h3 className="text-xl font-semibold text-red-400">
        {issue.type}
      </h3>

      <p className="mt-2">
        <strong>Problem:</strong> {issue.problem}
      </p>

      <p className="mt-2">
        <strong>Solution:</strong> {issue.solution}
      </p>
    </div>
  );
}