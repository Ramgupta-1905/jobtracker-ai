const tasks = [
  { id: 1, title: "Application Deadline", company: "Google", time: "Tomorrow", priority: "bg-red-500" },
  { id: 2, title: "Follow-up Required", company: "Microsoft", time: "Today", priority: "bg-orange-500" },
  { id: 3, title: "Technical Interview", company: "Amazon", time: "2:00 PM", priority: "bg-green-500" },
  { id: 4, title: "Online Assessment", company: "Adobe", time: "Due Tonight", priority: "bg-blue-500" },
];

export default function NeedsAttention() {
  return (
    <div className="w-full h-full rounded-2xl bg-white p-6 shadow-md">
      {/* Header with View All */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-900">Needs Attention</h2>
        <button className="text-sm text-blue-600 hover:underline">View All</button>
      </div>

      <div>
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className={`flex items-center justify-between gap-4 py-3 transition-colors duration-200 hover:bg-gray-50 ${
              index !== tasks.length - 1 ? "border-b border-gray-200" : ""
            }`}
          >
            {/* Left side: dot + task info */}
            <div className="flex items-center gap-4">
              <div className={`h-3 w-3 rounded-full ${task.priority}`}></div>
              <div>
                <h3 className="text-sm font-semibold text-gray-900">{task.title}</h3>
                <p className="mt-1 text-xs text-gray-500">{task.company} • {task.time}</p>
              </div>
            </div>

            {/* Right side: Resolve button */}
            <button className="rounded-md bg-blue-600 px-3 py-1 text-xs text-white hover:bg-blue-700 transition">
              Resolve
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
