export default function AddApplications() {
  return (
    <div className="w-full h-full bg-white rounded-2xl shadow-md p-6 mt-[1.5px] flex flex-col items-start gap-4">
      <h2 className="text-lg font-semibold text-gray-900">
        ➕ Add New Application
      </h2>
      <p className="text-sm text-gray-600">
        Track every internship and job application in one place.
      </p>
      <button className="self-start rounded-lg bg-blue-600 px-5 py-2 text-white font-medium hover:bg-blue-700 transition">
        Add Application
      </button>
    </div>
  );
}
