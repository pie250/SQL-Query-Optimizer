export default function StatsCard({
  title,
  value,
  color,
}) {
  return (
    <div className={`p-5 rounded-2xl ${color}`}>
      <h2 className="text-lg font-semibold">
        {title}
      </h2>

      <p className="text-3xl font-bold mt-2">
        {value}
      </p>
    </div>
  );
}