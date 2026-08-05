import { useState } from "react";
import { X } from "lucide-react";

export default function AddInterviewModal({ interview, onClose, onAdd }) {
 
  const [form, setForm] = useState(
  interview || {
    company: "",
    role: "",
    date: "",
    time: "",
    type: "Virtual",
    status: "Upcoming",
    outcome: "",
    notes: "",
  }
);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.company || !form.role || !form.date || !form.time) {
      alert("Please fill in all required fields.");
      return;
    }
    onAdd(form);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      {/* Smaller modal box with scroll */}
      <div className="w-full max-w-md max-h-[75vh] overflow-y-auto rounded-2xl bg-white p-6 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
  {interview ? "Edit Interview" : "Add Interview"}
</h2>
          <button
            onClick={onClose}
            className="rounded-full p-2 text-gray-500 hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Company */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Company name
            </label>
            <input
              type="text"
              name="company"
              value={form.company}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Role */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Job role
            </label>
            <input
              type="text"
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Date & Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Interview date
              </label>
              <input
                type="date"
                name="date"
                value={form.date}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Interview time
              </label>
              <input
                type="time"
                name="time"
                value={form.time}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
                required
              />
            </div>
          </div>

          {/* Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Interview type
            </label>
            <select
              name="type"
              value={form.type}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option>Virtual</option>
              <option>On-site</option>
              <option>Phone Screen</option>
              <option>HR</option>
              <option>Technical</option>
            </select>
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <select
              name="status"
              value={form.status}
              onChange={handleChange}
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            >
              <option>Upcoming</option>
              <option>Today</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>

          {/* Outcome (only relevant if Completed) */}
          {form.status === "Completed" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Outcome
              </label>
              <select
                name="outcome"
                value={form.outcome}
                onChange={handleChange}
                className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
              >
                <option value="">Select outcome</option>
                <option>Pending</option>
                <option>Offer Received</option>
                <option>Accepted</option>
                <option>Offer Declined</option>
                <option>Rejected</option>
              </select>
            </div>
          )}

          {/* Notes */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Notes (optional)
            </label>
            <textarea
              name="notes"
              value={form.notes}
              onChange={handleChange}
              rows={3}
              placeholder="Anything you want to remember about this interview..."
              className="mt-1 w-full rounded-xl border border-gray-300 px-3 py-2 text-sm outline-none focus:border-blue-500"
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              {interview ? "Save Changes" : "Add Interview"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
