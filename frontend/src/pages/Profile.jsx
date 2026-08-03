import { useState } from "react";

function Profile() {
  const allSkills = [
    "Java",
    "React",
    "Spring Boot",
    "SQL",
    "Git",
    "DSA",
    "Python",
    "C++",
    "JavaScript",
    "Node.js",
  ];

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [search, setSearch] = useState("");

  const filteredSkills = allSkills.filter(
    (skill) =>
      skill.toLowerCase().includes(search.toLowerCase()) &&
      !selectedSkills.includes(skill)
  );

  const addSkill = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
    setSearch("");
  };

  const removeSkill = (skill) => {
    setSelectedSkills(selectedSkills.filter((s) => s !== skill));
  };

  return (
    <main className="min-h-screen bg-blue-50 p-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Heading */}
        {/* Hero Section */}
<div className="mb-8 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-6 shadow-lg">
  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
        Account Management
      </p>

      <h1 className="mt-2 text-5xl font-bold text-white">
        👤 My Profile
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-blue-100">
        Manage your personal, academic, and professional information to keep your JobTrack AI profile up to date.
      </p>
    </div>

  </div>
</div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Profile Card */}
            <div className="overflow-hidden rounded-2xl bg-white shadow-md">
              <div className="h-28 bg-gradient-to-r from-blue-600 to-blue-500"></div>

              <div className="-mt-14 flex flex-col items-center px-6 pb-6">
                <div className="flex h-28 w-28 items-center justify-center rounded-full border-4 border-white bg-blue-100">
                  {/* Avatar placeholder */}
                  <span className="text-blue-600 text-4xl font-bold">R</span>
                </div>

                <h2 className="mt-4 text-2xl font-bold text-gray-800">
                  Ram Gupta
                </h2>

                <p className="text-gray-500">@ram_gupta1905</p>

                <p className="mt-1 text-sm text-gray-400">
                  Profile ID • JT-001284
                </p>

                <button className="mt-6 rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
                  Change Photo
                </button>
              </div>
            </div>

            {/* Skills */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-4 text-xl font-semibold text-gray-800">
                Skills
              </h3>

              {/* Selected Skills */}
              <div className="flex flex-wrap gap-3 mb-4">
                {selectedSkills.map((skill) => (
                  <span
                    key={skill}
                    className="flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700"
                  >
                    {skill}
                    <button
                      onClick={() => removeSkill(skill)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ✕
                    </button>
                  </span>
                ))}
              </div>

              {/* Search + Dropdown */}
              <div className="relative">
                <label className="mb-2 block text-sm font-medium text-gray-700">
                  Search Skill
                </label>
                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search and add your skills..."
                  className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
                />

                {search && filteredSkills.length > 0 && (
                  <ul className="absolute z-10 mt-2 w-full rounded-lg border border-gray-300 bg-white shadow-md">
                    {filteredSkills.map((skill) => (
                      <li
                        key={skill}
                        onClick={() => addSkill(skill)}
                        className="cursor-pointer px-4 py-2 hover:bg-blue-100"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Personal Information */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                Personal Information
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Full Name
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Username
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    City
  </label>
  <input
    type="text"
    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
  />
</div>

<div>
  <label className="mb-2 block text-sm font-medium text-gray-700">
    State
  </label>
  <input
    type="text"
    className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
  />
</div>
              </div>
            </div>

            {/* Academic Information */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                Academic Information
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    College
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Degree
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Branch
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    Graduation Year
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-700">
                    CGPA
                  </label>
                  <input type="text" className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none" />
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="rounded-2xl bg-white p-6 shadow-md">
              <h3 className="mb-6 text-2xl font-semibold text-gray-800">
                About Me
              </h3>
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea rows={5} 
              placeholder="Tell recruiters about yourself, your skills, projects, achievements, and career goals..."
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"></textarea>
            </div>

           {/* Social Links */}
<div className="rounded-2xl bg-white p-6 shadow-md">
  <h3 className="mb-6 text-2xl font-semibold text-gray-800">
    Social & Portfolio
  </h3>

  <div className="grid gap-5">
    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        GitHub
      </label>
      <input
        type="url"
        placeholder="https://github.com/username"
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        LinkedIn
      </label>
      <input
        type="url"
        placeholder="https://linkedin.com/in/username"
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        LeetCode
      </label>
      <input
        type="url"
        placeholder="https://leetcode.com/u/username"
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        GeeksforGeeks
      </label>
      <input
        type="url"
        placeholder="https://geeksforgeeks.org/profile/username"
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
    </div>

    <div>
      <label className="mb-2 block text-sm font-medium text-gray-700">
        Portfolio Website
      </label>
      <input
        type="url"
        placeholder="https://yourportfolio.com"
        className="w-full rounded-lg border border-gray-300 p-3 focus:border-blue-500 focus:outline-none"
      />
    </div>
  </div>
</div>

{/* Save Button */}
<div className="flex justify-end">
  <button className="rounded-xl bg-blue-600 px-8 py-3 font-semibold text-white transition duration-200 hover:bg-blue-700">
    Save Changes
  </button>
</div>

</div>
</div>
</div>
</main>
);
}

export default Profile;