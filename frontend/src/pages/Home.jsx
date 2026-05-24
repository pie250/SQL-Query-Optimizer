import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {

  return (

    <div className="
      min-h-screen
      bg-[#334155]
      text-white
    ">

      <Navbar />

      {/* HERO SECTION */}

      <section className="
        max-w-7xl
        mx-auto
        px-6
        py-24
      ">

        <div className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
        ">

          {/* LEFT SIDE */}

          <div>

            <div className="
              inline-block
              px-5
              py-2.5
              rounded-full
              bg-cyan-400/10
              border
              border-cyan-300/20
              text-cyan-200
              text-sm
              font-medium
              mb-8
              backdrop-blur-lg
            ">
              AI Powered Database Performance Optimization
            </div>

            <h1 className="
              text-5xl
              lg:text-7xl
              font-black
              leading-tight
              tracking-tight
            ">
              Optimize SQL Queries with{" "}

              <span className="
                bg-gradient-to-r
                from-cyan-300
                to-blue-300
                bg-clip-text
                text-transparent
              ">
                AI Intelligence
              </span>

            </h1>

            <p className="
              text-slate-200
              text-lg
              mt-8
              leading-relaxed
              max-w-2xl
            ">
              Analyze execution plans, detect bottlenecks,
              identify slow queries, and generate intelligent
              optimization recommendations instantly using AI.
            </p>

            <div className="
              flex
              flex-wrap
              gap-5
              mt-12
            ">

              <Link
                to="/dashboard"
                className="
                  bg-gradient-to-r
                  from-cyan-500
                  to-blue-500
                  hover:from-cyan-400
                  hover:to-blue-400
                  text-white
                  font-semibold
                  px-9
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  shadow-xl
                  shadow-cyan-500/20
                "
              >
                Start Optimizing
              </Link>

              <Link
                to="/signin"
                className="
                  bg-white/10
                  border
                  border-white/10
                  hover:bg-white/20
                  px-9
                  py-4
                  rounded-2xl
                  transition-all
                  duration-300
                  backdrop-blur-lg
                "
              >
                Sign In
              </Link>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="relative">

            <div className="
              absolute
              inset-0
              bg-cyan-400/20
              blur-3xl
              rounded-full
            "></div>

            <div className="
              relative
              bg-[#1e293b]
              border
              border-white/10
              backdrop-blur-xl
              rounded-[32px]
              p-8
              shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            ">

              {/* TERMINAL DOTS */}

              <div className="
                flex
                gap-3
                mb-8
              ">

                <div className="
                  w-4
                  h-4
                  rounded-full
                  bg-red-400
                "></div>

                <div className="
                  w-4
                  h-4
                  rounded-full
                  bg-yellow-400
                "></div>

                <div className="
                  w-4
                  h-4
                  rounded-full
                  bg-green-400
                "></div>

              </div>

              <pre className="
                text-sm
                text-cyan-200
                leading-8
                overflow-x-auto
              ">
{`SELECT * FROM orders
WHERE customer_id = 5;

Execution Plan:
Seq Scan on orders
Rows Removed: 99884

AI Suggestion:
CREATE INDEX idx_customer_id
ON orders(customer_id);`}
              </pre>

            </div>

          </div>

        </div>

      </section>

      {/* FEATURES SECTION */}

      <section className="
        max-w-7xl
        mx-auto
        px-6
        pb-28
      ">

        <h2 className="
          text-5xl
          font-black
          text-center
          mb-20
        ">
          Powerful Features
        </h2>

        <div className="
          grid
          md:grid-cols-3
          gap-8
        ">

          {/* CARD 1 */}

          <div className="
            bg-[#1e293b]
            border
            border-white/10
            backdrop-blur-xl
            rounded-[28px]
            p-9
            hover:-translate-y-2
            hover:border-cyan-300/30
            transition-all
            duration-300
            shadow-xl
          ">

            <div className="text-6xl mb-6">
              ⚡
            </div>

            <h3 className="
              text-2xl
              font-bold
              mb-5
            ">
              Query Optimization
            </h3>

            <p className="
              text-slate-200
              leading-relaxed
              text-[16px]
            ">
              Detect slow SQL queries and optimize them using
              intelligent indexing recommendations powered by AI.
            </p>

          </div>

          {/* CARD 2 */}

          <div className="
            bg-[#1e293b]
            border
            border-white/10
            backdrop-blur-xl
            rounded-[28px]
            p-9
            hover:-translate-y-2
            hover:border-cyan-300/30
            transition-all
            duration-300
            shadow-xl
          ">

            <div className="text-6xl mb-6">
              🧠
            </div>

            <h3 className="
              text-2xl
              font-bold
              mb-5
            ">
              AI Analysis
            </h3>

            <p className="
              text-slate-200
              leading-relaxed
              text-[16px]
            ">
              Generate human-readable explanations for complex
              execution plans using Gemini AI integration.
            </p>

          </div>

          {/* CARD 3 */}

          <div className="
            bg-[#1e293b]
            border
            border-white/10
            backdrop-blur-xl
            rounded-[28px]
            p-9
            hover:-translate-y-2
            hover:border-cyan-300/30
            transition-all
            duration-300
            shadow-xl
          ">

            <div className="text-6xl mb-6">
              📊
            </div>

            <h3 className="
              text-2xl
              font-bold
              mb-5
            ">
              Performance Insights
            </h3>

            <p className="
              text-slate-200
              leading-relaxed
              text-[16px]
            ">
              Understand bottlenecks, execution costs,
              sequential scans, and indexing opportunities clearly.
            </p>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Home;