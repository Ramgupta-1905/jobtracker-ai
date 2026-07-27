import Sidebar from "../components/dashboard/Sidebar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import AddApplications from "../components/dashboard/AddApplications";
import MiniCalendar from "../components/dashboard/MiniCalendar";
import NeedsAttention from "../components/dashboard/NeedsAttention";
import QuickStats from "../components/dashboard/QuickStats";

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar stays fixed */}
      <div className="sticky top-0 h-screen">
        <Sidebar />
      </div>

      {/* Dashboard content scrolls */}
      <div className="flex-1 overflow-y-auto bg-gray-100 text-gray-900 p-8">
        {/* Top Row: Welcome + Add Application + Calendar */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Left side: Welcome + Add Application stacked */}
          <div className="col-span-2 flex flex-col gap-6">
            <WelcomeCard name="Ram" />
            <AddApplications />
          </div>

          {/* Right side: Calendar */}
          <div>
            <MiniCalendar />
          </div>
        </div>

        {/* Bottom Row: Needs Attention (wide) + Quick Stats (compact) */}
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <NeedsAttention />
          </div>
          <div>
            <QuickStats />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
