import { useNavigate } from "react-router-dom";
function Hero(props) {
  <div className="hero-logo">
    <p>logo</p>
  </div>
  const navigate = useNavigate();
  return (
    <div className="container">
      <h1>{props.title}</h1>
      <h2> Your AI-Powered Job Search Companion </h2>

      <p>
        Organize every application, optimize your resume,
        track interviews, and land your dream job faster —
        all in one intelligent workspace.
      </p>

      <button onClick = {() => navigate("/login")}>
        {props.buttonText}</button>

    <div className="features">

      <h3>Why JobTrack AI?</h3>
      <div>
        <p>Searching for jobs shouldn't feel chaotic.

JobTrack AI helps you organize every application, prepare for interviews, improve your resume with AI-powered insights, and monitor your progress—all from one beautiful dashboard.

Whether you're applying to your first internship or your next software engineering role, JobTrack AI keeps your entire journey in one place.</p>
      </div>
  </div>

    </div>
  );
}

export default Hero;