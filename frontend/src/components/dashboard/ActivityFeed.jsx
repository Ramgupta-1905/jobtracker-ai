import {
  Briefcase,
  FileText,
  CircleCheckBig,
  Clock3,
} from "lucide-react";

const activities = [
  {
    id: 1,
    icon: <Briefcase size={16} />,
    title: "Applied to Google",
    time: "10 min ago",
    color: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    icon: <CircleCheckBig size={16} />,
    title: "Interview Scheduled",
    time: "2 hrs ago",
    color: "bg-green-100 text-green-600",
  },
  {
    id: 3,
    icon: <FileText size={16} />,
    title: "Resume Updated",
    time: "Yesterday",
    color: "bg-purple-100 text-purple-600",
  },
];

export default function ActivityFeed() {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Activity Feed
          </h2>
          <p className="text-xs text-gray-500">
            Your latest activity
          </p>
        </div>

        <Clock3 className="text-gray-400" size={18} />
      </div>

      {/* Activities */}
      <div className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center gap-3"
          >
            <div
              className={`rounded-full p-2 ${activity.color}`}
            >
              {activity.icon}
            </div>

            <div className="flex-1">
              <p className="text-sm font-medium text-gray-800">
                {activity.title}
              </p>

              <p className="text-xs text-gray-500">
                {activity.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full rounded-xl border border-gray-200 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
        View All Activity
      </button>
    </div>
  );
}