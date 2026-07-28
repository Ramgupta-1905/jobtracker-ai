
import WelcomeCard from "../components/dashboard/WelcomeCard";
import AddApplications from "../components/dashboard/AddApplications";
import MiniCalendar from "../components/dashboard/MiniCalendar";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import QuickStats from "../components/dashboard/QuickStats";
import RecentApplication from "../components/dashboard/RecentApplication";
import UpcomingInterviews from "../components/dashboard/UpcomingInterview";
import ActivityFeed from "../components/dashboard/ActivityFeed";
import AIAssistant from "../components/dashboard/AIAssistant";

function Dashboard() {
  return (
    <div>
     
      {/* Dashboard content scrolls */}
      <div className="flex-1 overflow-y-auto bg-gray-100 text-gray-900 p-8">
        {/* Top Row: Welcome + Add Application + Calendar */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2 flex flex-col gap-6">
            <WelcomeCard name="Ram" />
            <AddApplications />
          </div>
          <div>
            <MiniCalendar />
          </div>
        </div>

        {/* Bottom Row: Needs Attention (wide) + Quick Stats (compact) */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="col-span-2">
            <NeedsAttention />
          </div>
          <div>
            <QuickStats />
          </div>
        </div>

        {/* Applications Table */}
        <div>
          <RecentApplication />
        </div>

        <div className="mt-6 grid grid-cols-3 gap-6">
          <ActivityFeed />

          <UpcomingInterviews />

          <AIAssistant />
      </div>
      </div>
    </div>
  );
}

export default Dashboard;
