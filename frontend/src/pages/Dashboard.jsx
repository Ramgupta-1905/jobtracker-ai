import Sidebar from "../components/dashboard/Sidebar";

function Dashboard() {
  return (
    <div className="flex">
      <Sidebar />

      <div className="flex-1 bg-gray-950 text-white p-8">
        <div>
        <h1 className="text-3xl font-bold">
          Good Afternoon, Alex 👋
        </h1>

        <p className="text-gray-400 mt-2">
            Keep applying.
            You're closer than you think.
        </p>
      </div>
      </div>
    </div>
  );
}

export default Dashboard;