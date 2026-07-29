import { Routes, Route } from "react-router-dom";

import Hero from "./pages/Hero";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import MainLayout from "./layouts/MainLayout";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Hero
            title="JobTrack AI"
            subtitle="Track your job applications smarter."
            buttonText="Get Started"
          />
        }
      />

      <Route path="/login" element={<Login />} />

      <Route path="/signup" element={<Signup />} />

      {/* Protected Layout */}
      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;