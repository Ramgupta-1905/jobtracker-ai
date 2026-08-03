export default function AddApplications({ onClick }) {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl bg-white p-6 shadow-md">
      <div>
        <h2 className="text-xl font-semibold text-gray-900">
          ➕ Add New Application
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Start tracking a new internship or job application. Keep every
          opportunity organized from application to offer.
        </p>
      </div>

      <button
        onClick={onClick}
        className="mt-6 w-fit rounded-lg bg-blue-600 px-5 py-2.5 font-medium text-white transition hover:bg-blue-700"
      >
        Add Application
      </button>
    </div>
  );
}