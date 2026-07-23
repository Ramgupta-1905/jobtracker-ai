import { useNavigate } from "react-router-dom";

function Hero(props) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white flex flex-col items-center justify-center px-6 py-16">

      {/* Logo */}
      <div className="w-20 h-20 rounded-2xl bg-blue-600 flex items-center justify-center text-4xl font-bold shadow-lg mb-6">
        J
      </div>

      {/* App Name */}
      <h1 className="text-5xl md:text-6xl font-bold">
        {props.title}
      </h1>

      {/* Tagline */}
      <h2 className="mt-4 text-xl md:text-2xl text-gray-300 font-medium text-center">
        {props.subtitle}
      </h2>

      {/* Short Description */}
      <p className="mt-6 max-w-2xl text-center text-gray-400 leading-8 text-lg">
        Organize every application, optimize your resume,
        track interviews, and land your dream job faster —
        all in one intelligent workspace.
      </p>

      {/* CTA Button */}
      <button
        onClick={() => navigate("/login")}
        className="mt-10 bg-blue-600 hover:bg-blue-700 transition-all duration-300 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105"
      >
        {props.buttonText} →
      </button>

      {/* Why JobTrack AI */}
      <div className="mt-24 max-w-4xl bg-[#111827] border border-gray-800 rounded-2xl p-10 text-center">

        <h3 className="text-3xl font-bold mb-6">
          Why JobTrack AI?
        </h3>

        <p className="text-lg leading-8 text-gray-400">
          Searching for jobs shouldn't feel chaotic.
          <br />
          <br />
          JobTrack AI helps you organize every application, prepare for interviews,
          improve your resume with AI-powered insights, and monitor your progress—
          all from one beautiful dashboard.
          <br />
          <br />
          Whether you're applying for your first internship or your next software
          engineering role, JobTrack AI keeps your entire journey in one place.
        </p>

      </div>

    </div>
  );
}

export default Hero;