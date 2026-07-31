import { useState } from "react";
import {
  Plus,
  Search,
  SlidersHorizontal,
  ArrowUpDown,
  LayoutGrid,
  CalendarDays,
  CalendarCheck,
  CheckCircle2,
  XCircle,
  Clock3,
  Monitor,
  FileText,
  MoreVertical,
} from "lucide-react";
import AddInterviewModal from "../components/AddInterviewModal";
const initialInterviews = [
  {
    id: 1,
    company: "Google",
    role: "Software Engineer Intern",
    date: "12 Aug 2026",
    time: "10:00 AM",
    type: "Virtual",
    status: "Scheduled",
    outcome: null,
    notes: "Revise Graphs and OOP concepts.",
  },
  {
    id: 2,
    company: "Microsoft",
    role: "Frontend Developer Intern",
    date: "15 Aug 2026",
    time: "2:00 PM",
    type: "On-site",
    status: "Completed",
    outcome: "Pending",
    notes: "Waiting for HR response.",
  },
  {
    id: 3,
    company: "Amazon",
    role: "SDE Intern",
    date: "20 Jul 2026",
    time: "11:00 AM",
    type: "Virtual",
    status: "Completed",
    outcome: "Offer Declined",
    notes: "Accepted another opportunity.",
  },
];

export default function InterviewTracker() {
  const [search, setSearch] = useState("");
  const [view, setView] = useState("grid");
  const [sortOrder, setSortOrder] = useState("asc");
  const [filter, setFilter] = useState("All");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [interviews, setInterviews] = useState(initialInterviews);



  // 🔍 Search filter
  const filteredInterviews = interviews.filter((i) => {
  const matchesSearch = [i.company, i.role, i.notes]
    .join(" ")
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesFilter =
    filter === "All" ? true : i.status === filter;

  return matchesSearch && matchesFilter;
});


  // 📅 Sort by date/time
  const sortedInterviews = [...filteredInterviews].sort((a, b) => {
    const dateA = new Date(`${a.date} ${a.time}`);
    const dateB = new Date(`${b.date} ${b.time}`);
    return sortOrder === "asc" ? dateA - dateB : dateB - dateA;
  });

  // 📊 Dynamic stats
  const stats = [
    {
      title: "Upcoming",
      value: interviews.filter((i) => i.status === "Scheduled").length,
      icon: CalendarDays,
      color: "text-blue-600",
      bg: "bg-blue-50",
    },
    {
      title: "Today",
      value: interviews.filter(
        (i) =>
          i.date ===
          new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })
      ).length,
      icon: CalendarCheck,
      color: "text-amber-600",
      bg: "bg-amber-50",
    },
    {
      title: "Completed",
      value: interviews.filter((i) => i.status === "Completed").length,
      icon: CheckCircle2,
      color: "text-green-600",
      bg: "bg-green-50",
    },
    {
      title: "Cancelled",
      value: interviews.filter((i) => i.status === "Cancelled").length,
      icon: XCircle,
      color: "text-red-600",
      bg: "bg-red-50",
    },
  ];



  return (
    <div className="space-y-8 px-8 py-8">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Interview Tracker</h1>
          <p className="mt-1 text-gray-500">
            Track every interview, stay organized, and never miss an opportunity.
          </p>
        </div>
        <button 
        onClick={() => setIsModalOpen(true)}
        className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-medium text-white transition hover:bg-blue-700">
          <Plus size={18} />
          Add Interview
        </button>
      </div>
    

      {/* Stats Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div>
                <p className="text-sm text-gray-500">{item.title}</p>
                <h2 className="mt-1 text-2xl font-bold text-gray-900">
                  {item.value}
                </h2>
              </div>
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}
              >
                <Icon className={item.color} size={22} />
              </div>
            </div>
          );
        })}
      </div>

      {/* Search Toolbar */}
      <div className="flex flex-col gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative w-full md:max-w-lg">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search interviews..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-gray-200 py-3 pl-11 pr-4 outline-none transition focus:border-blue-500"
          />
        </div>
        <div className="flex items-center gap-2">
  {/* Filter Dropdown */}
  <select
    value={filter}
    onChange={(e) => setFilter(e.target.value)}
    className="rounded-xl border px-3 py-2 text-sm text-gray-700 transition focus:border-blue-500"
  >
    <option value="All">All</option>
    <option value="Scheduled">Upcoming</option>
    <option value="Today">Today</option>
    <option value="Completed">Completed</option>
    <option value="Cancelled">Cancelled</option>
  </select>

  {/* Sort Button */}
  <button
    onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
    className="rounded-xl border p-3 transition hover:bg-gray-100"
  >
    <ArrowUpDown size={18} />
  </button>

  {/* Grid Toggle */}
  <button
    onClick={() => setView("grid")}
    className={`rounded-xl border p-3 transition ${
      view === "grid" ? "bg-blue-600 text-white" : "hover:bg-gray-100"
    }`}
  >
    <LayoutGrid size={18} />
  </button>
</div>

      </div>

      {/* Interview List/Grid */}
     <div className="grid grid-cols-1 gap-6 xl:grid-cols-3 items-stretch">
  {sortedInterviews.map((interview) => (
    <div
      key={interview.id}
      className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50 p-5 shadow-sm transition hover:-translate-y-1 hover:scale-[1.01] hover:shadow-xl duration-300"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-blue-100 text-xl font-bold text-blue-600 shadow-sm">
          {interview.company.charAt(0)}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {interview.company}
          </h3>
          <p className="text-sm leading-5 text-gray-500 line-clamp-2">
            {interview.role}
          </p>
        </div>
      </div>

      {/* Details */}
      <div className="mt-4 flex flex-wrap gap-2 text-xs">
        <span className="flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-sm border px-3 py-1 text-gray-700 shadow-sm">
          <CalendarDays className="h-4 w-4" /> 
          {new Date(interview.date).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
                })}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-sm border px-3 py-1 text-gray-700 shadow-sm">
          <Clock3 className="h-4 w-4" /> {interview.time}
        </span>
        <span className="flex items-center gap-1 rounded-full bg-white/70 backdrop-blur-sm border px-3 py-1 text-gray-700 shadow-sm">
          <Monitor className="h-4 w-4" /> {interview.type}
        </span>
      </div>

      {/* Notes */}
      <div className="mt-4 border-l-4 border-blue-200 bg-blue-50/50 p-3 text-sm text-gray-700">
        <div className="flex items-start gap-2">
          <FileText className="h-4 w-4 text-blue-500 mt-0.5" />
          <p className="line-clamp-2">{interview.notes}</p>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="mt-4 flex items-center justify-between">
        {/* Category Badge */}
        <div className="flex flex-wrap gap-2 text-xs">
          <span
            className={`flex items-center gap-1 rounded-full px-3 py-1 font-medium shadow-sm ${
              interview.status === "Scheduled"
                ? "bg-blue-100 text-blue-700"
                : interview.status === "Completed"
                ? "bg-green-100 text-green-700"
                : interview.status === "Cancelled"
                ? "bg-red-100 text-red-700"
                : "bg-orange-100 text-orange-700"
            }`}
          >
            {interview.status}
          </span>

          {/* Outcome Badge (only if Completed) */}
          {interview.status === "Completed" && (
            <span
              className={`flex items-center gap-1 rounded-full px-3 py-1 font-medium shadow-sm ${
                interview.outcome === "Pending"
                  ? "bg-yellow-100 text-yellow-700"
                  : interview.outcome === "Offer Received"
                  ? "bg-purple-100 text-purple-700"
                  : interview.outcome === "Accepted"
                  ? "bg-green-100 text-green-700"
                  : interview.outcome === "Offer Declined"
                  ? "bg-orange-100 text-orange-700"
                  : interview.outcome === "Rejected"
                  ? "bg-red-100 text-red-700"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
               {interview.outcome}
            </span>
          )}
        </div>

        {/* Three-dot menu at bottom-right */}
        <button className="rounded-full p-2 text-gray-500 hover:bg-gray-100">
          <MoreVertical className="h-5 w-5" />
        </button>
      </div>
    </div>
  ))}
</div>

{isModalOpen && (
  <AddInterviewModal
    onClose={() => setIsModalOpen(false)}
  />
)}
{isModalOpen && (
  <AddInterviewModal
    onClose={() => setIsModalOpen(false)}
    onAdd={(newInterview) =>
      setInterviews((prev) => [
        ...prev,
        { id: prev.length + 1, ...newInterview },
      ])
    }
  />
)}
    </div>
  );
}