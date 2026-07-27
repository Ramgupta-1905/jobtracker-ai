import {
  LayoutDashboard,
  Briefcase,
  FileText,
  Calendar,
  BarChart3,
  Settings,
  LogOut,
  CircleUser,
} from "lucide-react";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, active: true },
  { title: "Applications", icon: Briefcase, active: false },
  { title: "Resume Vault", icon: FileText, active: false },
  { title: "Interviews", icon: Calendar, active: false },
  { title: "Analytics", icon: BarChart3, active: false },
  { title: "Settings", icon: Settings, active: false },
  { title: "Profile", icon: CircleUser, active: false },
  { title: "Logout", icon: LogOut, active: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 min-h-screen bg-blue-800 text-white border-r border-blue-700">
      {/* Branding */}
      <div className="flex items-center gap-3 p-6 border-b border-blue-700">
        <div className="w-11 h-11 rounded-xl bg-blue-600 flex items-center justify-center text-xl font-bold">
          J
        </div>
        <div>
          <h1 className="text-lg font-semibold">JobTrack AI</h1>
          <p className="text-sm text-gray-200">AI Career Tracker</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg cursor-pointer mt-2 transition-colors ${
                item.active
                  ? "bg-blue-600 text-white"
                  : "text-gray-200 hover:bg-blue-700 hover:text-white"
              }`}
            >
              <Icon size={20} />
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
