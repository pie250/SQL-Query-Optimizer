import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import api from "../services/api";

function SignUp() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await api.post(
        "/auth/signup",
        formData
      );

      setMessage(response.data.message);

      setTimeout(() => {
        navigate("/signin");
      }, 1000);

    } catch (err) {

      setMessage(
        err.response?.data?.detail ||
        err.response?.data?.message ||
        "Signup failed"
      );
    }
  };

  return (

    <div className="
      min-h-screen
      bg-[#334155]
      flex
      items-center
      justify-center
      px-6
    ">

      <div className="
        w-full
        max-w-5xl
        min-h-[650px]
        bg-[#1e293b]
        backdrop-blur-xl
        border
        border-white/10
        rounded-[32px]
        overflow-hidden
        grid
        md:grid-cols-2
        shadow-[0_20px_80px_rgba(0,0,0,0.45)]
      ">

        {/* LEFT SIDE */}

        <div className="
          hidden
          md:flex
          flex-col
          justify-center
          bg-gradient-to-br
          from-cyan-500
          via-blue-500
          to-indigo-600
          px-14
          text-white
          relative
        ">

          <div className="
            absolute
            w-72
            h-72
            bg-white/10
            rounded-full
            top-[-60px]
            left-[-60px]
          " />

          <div className="
            absolute
            w-60
            h-60
            bg-white/10
            rounded-full
            bottom-[-40px]
            right-[-40px]
          " />

          <div className="relative z-10">

            <h1 className="
              text-5xl
              font-black
              leading-tight
            ">
              Join
              <br />
              AI Optimizer
            </h1>

            <p className="
              mt-6
              text-lg
              text-cyan-100
              leading-relaxed
            ">
              Create your account and start
              optimizing SQL queries with AI.
            </p>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="
          flex
          items-center
          justify-center
          px-10
          py-12
        ">

          <div className="
            w-full
            max-w-[380px]
          ">

            <h2 className="
              text-4xl
              font-bold
              text-white
              text-center
            ">
              Sign Up
            </h2>

            <p className="
              text-slate-200
              text-center
              mt-3
              mb-10
              text-base
            ">
              Create your new account
            </p>

            <form
              onSubmit={handleSubmit}
              className="space-y-5"
            >

              <input
                type="text"
                name="name"
                placeholder="Full Name"
                required
                onChange={handleChange}
                className="
                  w-full
                  bg-[#334155]
                  border
                  border-slate-400
                  rounded-xl
                  px-5
                  py-3.5
                  text-white
                  placeholder:text-slate-300
                  outline-none
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-500/10
                  transition-all
                "
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                onChange={handleChange}
                className="
                  w-full
                  bg-[#334155]
                  border
                  border-slate-400
                  rounded-xl
                  px-5
                  py-3.5
                  text-white
                  placeholder:text-slate-300
                  outline-none
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-500/10
                  transition-all
                "
              />

              <input
                type="password"
                name="password"
                placeholder="Password"
                required
                onChange={handleChange}
                className="
                  w-full
                  bg-[#334155]
                  border
                  border-slate-400
                  rounded-xl
                  px-5
                  py-3.5
                  text-white
                  placeholder:text-slate-300
                  outline-none
                  focus:border-cyan-400
                  focus:ring-4
                  focus:ring-cyan-500/10
                  transition-all
                "
              />

              <button
                type="submit"
                className="
                  w-full
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  hover:from-cyan-400
                  hover:to-blue-400
                  text-white
                  py-3.5
                  rounded-xl
                  font-semibold
                  text-base
                  transition-all
                  shadow-lg
                  shadow-cyan-500/20
                "
              >
                Create Account
              </button>

            </form>

            {
              message && (

                <p className="
                  text-center
                  text-cyan-200
                  mt-5
                  text-sm
                ">
                  {message}
                </p>
              )
            }

            <p className="
              text-center
              text-slate-200
              mt-8
            ">

              Already have an account?{" "}

              <Link
                to="/signin"
                className="
                  text-cyan-300
                  hover:underline
                  font-medium
                "
              >
                Sign In
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default SignUp;