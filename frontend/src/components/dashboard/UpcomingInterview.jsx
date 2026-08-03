import {
  CalendarDays,
  Video,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const interviews = [
  {
    id: 1,
    company: "Google",
    role: "Technical Round",
    date: "Tomorrow",
    time: "10:00 AM",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "HR Interview",
    date: "Friday",
    time: "2:30 PM",
  },
];

export default function UpcomingInterviews() {
  const navigate = useNavigate();

  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm border border-gray-100">
      {/* Header */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            Upcoming Interviews
          </h2>

          <p className="text-xs text-gray-500">
            Don't miss your schedule
          </p>
        </div>

        <CalendarDays
          size={18}
          className="text-gray-400"
        />
      </div>

      <div className="space-y-4">
        {interviews.map((item) => (
          <div
            key={item.id}
            onClick={() => navigate("/interviews")}
            className="cursor-pointer rounded-xl border border-gray-100 p-3 transition hover:border-blue-200 hover:bg-gray-50"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold text-gray-900">
                  {item.company}
                </h3>

                <p className="text-xs text-gray-500">
                  {item.role}
                </p>
              </div>

              <Video
                size={18}
                className="text-blue-500"
              />
            </div>

            <div className="mt-3 flex items-center justify-between text-xs">
              <span className="rounded-full bg-blue-100 px-2 py-1 text-blue-700">
                {item.date}
              </span>

              <span className="font-medium text-gray-600">
                {item.time}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button
  onClick={() => navigate("/interviews")}
  className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl border border-gray-200 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
>
  View Schedule
  <ArrowRight size={16} />
</button>
    </div>
  );
}