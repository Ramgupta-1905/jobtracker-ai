import { useState } from "react";
import { useNavigate } from "react-router-dom";

import WelcomeCard from "../components/dashboard/WelcomeCard";
import AddApplications from "../components/dashboard/AddApplications";
import MiniCalendar from "../components/dashboard/MiniCalendar";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import RecentApplication from "../components/dashboard/RecentApplication";
import UpcomingInterviews from "../components/dashboard/UpcomingInterview";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import AIAssistant from "../components/dashboard/AIAssistant";

function Dashboard() {
  const navigate = useNavigate();

  // Later this object will come from:
  // GET /api/dashboard
  const [dashboardData] = useState({
    user: {
      id: 1,
      name: "Ram",
    },

    recentApplications: [],
    upcomingInterviews: [],
    needsAttention: [],
    activities: [],
    calendarEvents: [],
  });

  const [loading] = useState(false);
  const [error] = useState(null);

  const handleAddApplication = () => {
    navigate("/applications");
  };

  const handleViewApplications = () => {
    navigate("/applications");
  };

  const handleViewInterviews = () => {
    navigate("/interviews");
  };

  if (loading) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p className="text-lg font-medium text-gray-600">
          Loading dashboard...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-[80vh] items-center justify-center">
        <p className="font-medium text-red-500">
          Failed to load dashboard.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6 lg:p-8">
      <div className="space-y-6">

        {/* Hero Section */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 shadow-xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.8fr_1fr] items-start">
            <div className="flex flex-col gap-6">
              <WelcomeCard user={dashboardData.user} />

              <AddApplications onClick={handleAddApplication} />
            </div>

            <MiniCalendar events={dashboardData.calendarEvents} />
          </div>
        </section>

        {/* Dashboard Highlights */}
        <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          <NeedsAttention
            tasks={dashboardData.needsAttention}
          />

          <UpcomingInterviews
            interviews={dashboardData.upcomingInterviews}
            onViewAll={handleViewInterviews}
            onInterviewClick={handleViewInterviews}
          />

          <ActivityFeed
            activities={dashboardData.activities}
          />

        </section>

        {/* Recent Applications */}
        <RecentApplication
          applications={dashboardData.recentApplications}
          onViewAll={handleViewApplications}
          onApplicationClick={handleViewApplications}
        />

        {/* AI Assistant */}
        <section>
          <AIAssistant />
        </section>

      </div>
    </div>
  );
}

export default Dashboard;