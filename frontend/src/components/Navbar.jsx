import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-[#0f172a] border-b border-slate-700">

      <Link to="/" className="text-2xl font-bold text-cyan-400">
        SQL Optimizer
      </Link>

      <div className="flex gap-4">

        <Link
          to="/signin"
          className="px-5 py-2 rounded-xl border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300"
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition-all duration-300"
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;