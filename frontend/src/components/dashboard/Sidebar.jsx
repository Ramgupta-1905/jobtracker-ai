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
import { NavLink, useNavigate } from "react-router-dom";

const navItems = [
  { title: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
  { title: "Applications", icon: Briefcase, path: "/applications" },
  { title: "Resume Vault", icon: FileText, path: "/resume-vault" },
  { title: "Interviews", icon: Calendar, path: "/interviews" },
  { title: "Analytics", icon: BarChart3, path: "/analytics" },
  { title: "Settings", icon: Settings, path: "/settings" },
  { title: "Profile", icon: CircleUser, path: "/profile" },
];

export default function Sidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Later:
    // localStorage.removeItem("token");
    // sessionStorage.clear();

    navigate("/login");
  };

  return (
    <div className="fixed left-0 top-0 flex h-screen w-64 flex-col border-r border-blue-700 bg-blue-800 text-white shadow-lg">
      {/* Branding */}
      <div className="flex items-center gap-3 border-b border-blue-700 p-6">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600 text-xl font-bold">
          J
        </div>

        <div>
          <h1 className="text-lg font-semibold">JobTrack AI</h1>
          <p className="text-sm text-gray-200">AI Career Tracker</p>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.title}
              to={item.path}
              className={({ isActive }) =>
                `mt-2 flex items-center gap-3 rounded-lg px-4 py-3 transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-200 hover:bg-blue-700 hover:text-white"
                }`
              }
            >
              <Icon size={20} />
              <span className="font-medium">{item.title}</span>
            </NavLink>
          );
        })}
      </div>

      {/* Logout */}
      <div className="border-t border-blue-700 p-4">
        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg px-4 py-3 text-gray-200 transition-all duration-200 hover:bg-red-600 hover:text-white"
        >
          <LogOut size={20} />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
}
