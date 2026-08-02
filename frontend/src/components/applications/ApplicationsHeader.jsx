import { Plus } from "lucide-react";

export default function ApplicationsHeader({
  onAddApplication,
}) {
  return (
    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h1 className="mt-2 text-4xl font-bold">
          Applications
        </h1>

        <p className="mt-3 max-w-2xl text-blue-100">
          Track every application, monitor progress, and stay organized
          throughout your job search journey.
        </p>
      </div>

      <button
  onClick={onAddApplication}
  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 font-semibold text-blue-700 shadow transition duration-200 hover:scale-105 hover:bg-blue-50"
>
  <Plus size={20} />
  New Application
</button>
    </div>
  );
}