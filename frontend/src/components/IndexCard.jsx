export default function IndexCard({ index }) {
  return (
    <div className="bg-black p-4 rounded-xl overflow-auto">
      <code>{index}</code>
    </div>
  );
}