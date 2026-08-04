import { useNavigate } from "react-router-dom";
import {
  Sparkles,
  BriefcaseBusiness,
  FileText,
  CalendarDays,
  Bot,
} from "lucide-react";

function Hero(props) {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-900 via-blue-700 to-cyan-600 text-white">

      {/* Background Glow */}
      <div className="absolute -left-40 -top-32 h-[450px] w-[450px] rounded-full bg-blue-500/30 blur-[120px]" />

      <div className="absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-400/30 blur-[120px]" />

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:50px_50px]" />

      <div className="relative flex min-h-screen flex-col items-center justify-center px-6 py-20">

        {/* Logo */}
        <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-400 text-4xl font-bold shadow-2xl shadow-blue-500/40">
          J
        </div>

        {/* App Name */}
        <h1 className="text-center text-6xl font-extrabold tracking-tight md:text-7xl">
          {props.title}
        </h1>

        {/* Tagline */}
        <h2 className="mt-5 max-w-3xl text-center text-2xl font-medium leading-relaxed text-blue-100 md:text-3xl">
          {props.subtitle}
        </h2>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-center text-lg leading-9 text-blue-100/90">
          Organize every application, optimize your resume, prepare for
          interviews, and land your dream job faster—all from one intelligent
          workspace designed for students, fresh graduates, and job seekers.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-5">

          <button
            onClick={() => navigate("/login")}
            className="rounded-2xl bg-white px-8 py-4 text-lg font-semibold text-blue-700 shadow-xl transition duration-300 hover:-translate-y-1 hover:shadow-2xl"
          >
            {props.buttonText} →
          </button>

          <button
            className="rounded-2xl border border-white/30 bg-white/10 px-8 py-4 text-lg font-semibold backdrop-blur-md transition duration-300 hover:bg-white/20"
          >
            Learn More
          </button>

        </div>

        {/* Feature Pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-4">

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <BriefcaseBusiness size={18} />
            <span>Application Tracker</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <FileText size={18} />
            <span>Resume Vault</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <CalendarDays size={18} />
            <span>Interview Manager</span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-md">
            <Bot size={18} />
            <span>AI Assistant</span>
          </div>

        </div>

        {/* Why JobTrack AI */}
        <div className="mt-24 grid max-w-6xl gap-6 md:grid-cols-2">
                    {/* Feature Card 1 */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-500/20">
              <BriefcaseBusiness className="text-cyan-200" size={28} />
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              Smart Application Tracking
            </h3>

            <p className="leading-8 text-blue-100">
              Organize every internship and job application in one place,
              monitor progress, manage deadlines, and never miss an
              opportunity again.
            </p>
          </div>

          {/* Feature Card 2 */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/20">
              <Bot className="text-cyan-200" size={28} />
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              AI Career Assistant
            </h3>

            <p className="leading-8 text-blue-100">
              Receive intelligent resume suggestions, interview guidance,
              cover letter generation, and career insights—all powered by AI.
            </p>
          </div>

          {/* Feature Card 3 */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-500/20">
              <CalendarDays className="text-cyan-200" size={28} />
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              Interview Planner
            </h3>

            <p className="leading-8 text-blue-100">
              Schedule interviews, assessments, and important milestones with
              reminders so you always stay prepared.
            </p>
          </div>

          {/* Feature Card 4 */}
          <div className="group rounded-3xl border border-white/20 bg-white/10 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/15 hover:shadow-2xl">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500/20">
              <FileText className="text-cyan-200" size={28} />
            </div>

            <h3 className="mb-3 text-2xl font-bold">
              Resume Vault
            </h3>

            <p className="leading-8 text-blue-100">
              Keep multiple resume versions organized for different job roles
              and access the perfect resume whenever you apply.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Hero;