import { BriefcaseBusiness } from "lucide-react";

export default function EmptyState() {
  return (
    <div className="mx-4 rounded-2xl border border-dashed border-slate-300 bg-white py-16 text-center shadow-sm">
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
        <BriefcaseBusiness
          size={30}
          className="text-blue-600"
        />
      </div>

      <h2 className="mt-5 text-2xl font-semibold text-slate-800">
        No Applications Found
      </h2>

      <p className="mt-2 text-slate-500">
        Try changing your search or filters.
      </p>
    </div>
  );
}