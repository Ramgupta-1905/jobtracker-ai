import { Search } from "lucide-react";

export default function SearchFilters({ filters, setFilters }) {
  const handleFilterChange = (field, value) => {
    setFilters((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const filterConfig = [
    {
      field: "status",
      value: filters.status,
      options: [
        "All Status",
        "Applied",
        "In Review",
        "Shortlisted",
        "Interview Scheduled",
        "Offer Received",
        "Rejected",
      ],
    },
    {
      field: "jobType",
      value: filters.jobType,
      options: [
        "All Job Types",
        "Internship",
        "Full-time",
        "Part-time",
        "Contract",
      ],
    },
    {
      field: "workMode",
      value: filters.workMode,
      options: [
        "All Work Modes",
        "Remote",
        "Hybrid",
        "On-site",
      ],
    },
    {
      field: "sortBy",
      value: filters.sortBy,
      options: [
        "Newest",
        "Oldest",
        "Company Name (A-Z)",
        "Status",
      ],
    },
  ];

  return (
    <section className="relative p-4">
      <div className="rounded-3xl border border-slate-200 bg-white px-6 py-5 shadow-lg">

        {/* Search */}

        <div className="relative">
          <Search
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            type="text"
            placeholder="Search by company, role, or location..."
            value={filters.search}
            onChange={(e) =>
              handleFilterChange("search", e.target.value)
            }
            className="w-full rounded-xl border border-slate-200 py-2 pl-12 pr-4 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Filters */}

        <div className="mt-2 flex flex-wrap gap-3">
          {filterConfig.map((filter) => (
            <FilterSelect
              key={filter.field}
              value={filter.value}
              options={filter.options}
              onChange={(e) =>
                handleFilterChange(filter.field, e.target.value)
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}

function FilterSelect({ value, options, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="inline-flex w-auto min-w-fit max-w-max rounded-md border border-slate-200 bg-white px-2 py-1 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
    >
      {options.map((option) => (
        <option
          key={option}
          value={option}
          className="truncate"
        >
          {option}
        </option>
      ))}
    </select>
  );
}
