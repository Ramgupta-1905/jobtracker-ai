import {
  MapPin,
  Calendar,
  FileText,
  Pencil,
  Trash2,
} from "lucide-react";

const statusStyles = {
  Applied: "bg-blue-100 text-blue-700",
  "In Review": "bg-amber-100 text-amber-700",
  Shortlisted: "bg-cyan-100 text-cyan-700",
  "Interview Scheduled": "bg-purple-100 text-purple-700",
  "Offer Received": "bg-green-100 text-green-700",
  Rejected: "bg-red-100 text-red-700",
};

export default function ApplicationCard({ application ,onDelete,onEdit}) {
  return (
    <div className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition">
      
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* Logo */}
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-lg font-semibold text-blue-700 shadow-sm">
            {application.company.charAt(0)}
          </div>

          {/* Company + Role */}
          <div>
            <h3 className="text-base font-semibold text-slate-900 leading-snug">
              {application.company}
            </h3>
            <p className="text-xs text-slate-500">{application.role}</p>
          </div>
        </div>

        {/* Status Badge */}
        <span
          className={`inline-flex items-center justify-center rounded-full px-2.5 py-0.5 text-[11px] font-medium shadow-sm ${statusStyles[application.status]}`}
        >
          {application.status}
        </span>
      </div>

      {/* Information */}
      <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-slate-700">
        <div className="flex items-center gap-2">
          <MapPin size={14} className="text-blue-500" />
          <span>{application.city}, {application.state}</span>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-sm">
            {application.jobType}
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-700 shadow-sm">
            {application.workMode}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FileText size={14} className="text-blue-500" />
          <span>{application.role}</span>
        </div>

        <div className="flex items-center gap-2">
          <Calendar size={14} className="text-blue-500" />
          <span>
  Applied{" "}
  {new Date(application.appliedDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      day: "numeric",
      year: "numeric",
    }
  )}
</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-slate-200"></div>

      {/* Footer */}
      <div className="flex items-center justify-between mt-auto">
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700">
          View Details
        </button>

        <div className="flex items-center gap-2">
          <button
  onClick={() => onEdit(application)}
  className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-blue-600"
>
  <Pencil size={16} />
</button>
         <button
  onClick={() => onDelete(application.id)}
  className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-red-600"
>
  <Trash2 size={16} />
</button>
        </div>
      </div>
    </div>
  );
}
