import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      className="
        flex
        items-center
        justify-between
        px-8
        py-5
        bg-[#0f172a]
        border-b
        border-slate-700
        sticky
        top-0
        z-50
        backdrop-blur-lg
      "
    >
      {/* LOGO */}

      <Link
        to="/"
        className="
          flex
          items-center
          gap-3
          text-3xl
          font-black
          tracking-tight
          bg-gradient-to-r
          from-cyan-300
          to-blue-400
          bg-clip-text
          text-transparent
          hover:scale-105
          transition-all
          duration-300
        "
      >
        ⚡ SQL Optimizer
      </Link>

      {/* BUTTONS */}

      <div className="flex gap-4">
        <Link
          to="/signin"
          className="
            px-5
            py-2
            rounded-xl
            border
            border-cyan-400
            text-cyan-400
            hover:bg-cyan-400
            hover:text-black
            transition-all
            duration-300
            font-medium
          "
        >
          Sign In
        </Link>

        <Link
          to="/signup"
          className="
            px-5
            py-2
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-400
            text-white
            hover:text-black
            transition-all
            duration-300
            font-medium
            shadow-lg
            shadow-cyan-500/20
          "
        >
          Sign Up
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;