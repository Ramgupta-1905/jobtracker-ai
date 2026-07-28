import { Eye, SquarePen, MoreHorizontal } from "lucide-react";

export default function RecentApplication() {
  function getStatusStyle(status) {
    switch (status) {
      case "Applied":
        return "bg-green-100 text-green-700";

      case "Interview":
        return "bg-blue-100 text-blue-700";

      case "Under Review":
        return "bg-yellow-100 text-yellow-700";

      case "Assessment":
        return "bg-purple-100 text-purple-700";

      case "Rejected":
        return "bg-red-100 text-red-700";

      case "Offer":
        return "bg-emerald-100 text-emerald-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  }

  const applications = [
    {
      id: 1,
      company: "Google",
      role: "Frontend Engineer Intern",
      platform: "LinkedIn",
      status: "Interview",
      applied: "Jul 12",
      updated: "2h ago",
    },
    {
      id: 2,
      company: "Stripe",
      role: "Frontend Engineer",
      platform: "Referral",
      status: "Under Review",
      applied: "Jul 10",
      updated: "Yesterday",
    },
    {
      id: 3,
      company: "Amazon",
      role: "SDE Intern",
      platform: "LinkedIn",
      status: "Applied",
      applied: "Jul 19",
      updated: "1d ago",
    },
    {
      id: 4,
      company: "Adobe",
      role: "Web Developer Intern",
      platform: "Career Portal",
      status: "Assessment",
      applied: "Jul 20",
      updated: "Today",
    },
    {
      id: 5,
      company: "Microsoft",
      role: "Software Engineer Intern",
      platform: "Referral",
      status: "Rejected",
      applied: "Jun 28",
      updated: "5d ago",
    },
  ];

  return (
    <div className="mt-6 rounded-2xl bg-white p-6 shadow-sm">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            Recent Applications
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Track and manage your latest job applications.
          </p>
        </div>

        <button className="text-sm font-medium text-blue-600 transition hover:text-blue-700">
          View All
        </button>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Table Header */}
      <div className="grid grid-cols-[2.8fr_1fr_1fr_0.8fr_0.8fr_0.7fr] items-center gap-4 pb-2 text-[11px] font-semibold uppercase tracking-wide text-gray-500">
        <p>Company / Role</p>
        <p className="text-center">Platform</p>
        <p className="text-center">Status</p>
        <p className="text-center">Applied</p>
        <p className="text-center">Updated</p>
        <p className="text-center">Actions</p>
      </div>

      {/* Applications */}
      <div>
        {applications.map((application) => (
          <div
            key={application.id}
            className="grid grid-cols-[2.8fr_1fr_1fr_0.8fr_0.8fr_0.7fr] items-center gap-4 border-b border-gray-100 py-2 hover:bg-gray-50 transition-colors"
          >
            {/* Company */}
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 text-xs font-semibold text-blue-700">
                {application.company.charAt(0)}
              </div>

              <div className="min-w-0">
                <h3 className="text-sm font-semibold leading-4 text-gray-900">
                  {application.company}
                </h3>

                <p className="truncate text-[11px] leading-4 text-gray-500">
                  {application.role}
                </p>
              </div>
            </div>

            {/* Platform */}
            <div className="flex justify-center">
              <p className="text-[13px] text-gray-600">
                {application.platform}
              </p>
            </div>

            {/* Status */}
            <div className="flex justify-center">
              <span
                className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${getStatusStyle(
                  application.status
                )}`}
              >
                {application.status}
              </span>
            </div>

            {/* Applied */}
            <div className="flex justify-center">
              <p className="text-[13px] text-gray-600">
                {application.applied}
              </p>
            </div>

            {/* Updated */}
            <div className="flex justify-center">
              <p className="text-[13px] text-gray-600">
                {application.updated}
              </p>
            </div>

            {/* Actions */}
            <div className="flex justify-center gap-2 text-gray-500">
              <button className="transition hover:text-blue-600">
                <Eye size={15} />
              </button>

              <button className="transition hover:text-green-600">
                <SquarePen size={15} />
              </button>

              <button className="transition hover:text-gray-700">
                <MoreHorizontal size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}