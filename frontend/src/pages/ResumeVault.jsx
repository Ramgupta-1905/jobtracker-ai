import { useState, useMemo, useRef } from "react";
import {
  Search,
  Upload,
  FileText,
  Pencil,
  Trash2,
} from "lucide-react";
import RenameResumeModal from "../components/resume/RenameResumeModal";

export default function ResumeVault() {
  const [resumes, setResumes] = useState([
    {
      id: 1,
      title: "Frontend Developer Resume",
      fileName: "resume_frontend.pdf",
      uploaded: new Date("2026-07-29"),
    },
    {
      id: 2,
      title: "Software Engineer Resume",
      fileName: "software_resume.pdf",
      uploaded: new Date("2026-07-24"),
    },
    {
      id: 3,
      title: "Java Backend Resume",
      fileName: "java_backend.pdf",
      uploaded: new Date("2026-07-18"),
    },
    {
      id: 4,
      title: "Internship Resume",
      fileName: "internship_resume.pdf",
      uploaded: new Date("2026-07-10"),
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [resumeTitle, setResumeTitle] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [showRenameModal, setShowRenameModal] = useState(false);
const [selectedResume, setSelectedResume] = useState(null);
  const fileInputRef = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("newest"); // newest | oldest | title

  const handleUpload = () => {
    if (!resumeTitle || !selectedFile) {
      alert("Please enter a resume title and choose a file.");
      return;
    }
    const newResume = {
      id: Date.now(),
      title: resumeTitle,
      fileName: selectedFile.name,
      uploaded: new Date(),
    };

    setResumes([...resumes, newResume]);

    setResumeTitle("");
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = ""; // reset file input
    setShowModal(false);
  };

  const handleRenameResume = (newTitle) => {
  setResumes((prev) =>
    prev.map((resume) =>
      resume.id === selectedResume.id
        ? {
            ...resume,
            title: newTitle,
          }
        : resume
    )
  );

  setShowRenameModal(false);
  setSelectedResume(null);
};

const handleDeleteResume = (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this resume?"
  );

  if (!confirmed) return;

  setResumes((prev) =>
    prev.filter((resume) => resume.id !== id)
  );
};



  // ✅ Efficient search + sort with useMemo
  const sortedResumes = useMemo(() => {
    const filtered = resumes.filter(
      (resume) =>
        resume.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        resume.fileName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return filtered.sort((a, b) => {
      if (sortOrder === "title") {
        return a.title.localeCompare(b.title);
      } else if (sortOrder === "oldest") {
        return a.uploaded - b.uploaded;
      } else {
        return b.uploaded - a.uploaded;
      }
    });
  }, [resumes, searchQuery, sortOrder]);

  return (
    <div className="p-8">
      {/* Hero Section */}
<div className="mb-2 rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 p-8 shadow-lg">
  <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
    <div>
     
      <h1 className="mt-2 text-5xl font-bold text-white">
        📄 Resume Vault
      </h1>

      <p className="mt-4 max-w-2xl text-lg text-blue-100">
        Organize multiple resume versions, prepare role-specific resumes, and
        keep every application ready with your personal resume library.
      </p>
    </div>

    <button
      onClick={() => setShowModal(true)}
      className="flex items-center justify-center gap-2 rounded-2xl bg-white px-6 py-4 font-semibold text-blue-600 shadow-md transition hover:scale-105"
    >
      <Upload size={20} />
      Upload Resume
    </button>
  </div>
</div>
      
      {/* Search Toolbar */}
<div className="mb-3 rounded-2xl bg-white p-2 shadow-md">
  <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

    <div className="relative w-full lg:max-w-lg">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
      />

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by title, filename or job role..."
        className="w-full rounded-xl border border-slate-300 bg-gray-50 py-1 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:bg-white"
      />
    </div>

    <select
      value={sortOrder}
      onChange={(e) => setSortOrder(e.target.value)}
      className="rounded-xl border border-slate-300 bg-gray-50 px-5 py-1 outline-none transition hover:bg-white"
    >
      <option value="newest">Newest First</option>
      <option value="oldest">Oldest First</option>
      <option value="title">A → Z</option>
    </select>

  </div>
</div>

      {/* Resume Grid */}
{sortedResumes.length > 0 ? (
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
    {sortedResumes.map((resume) => (
      <div
        key={resume.id}
        className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-xl"
      >
        {/* Resume Icon */}
        <div className="mb-5 flex justify-center">
          <div className="rounded-2xl bg-red-50 p-5 transition group-hover:bg-red-100">
            <FileText size={70} className="text-red-500" />
          </div>
        </div>

        {/* Title */}
        <h2 className="text-center text-lg font-semibold text-gray-800">
          {resume.title}
        </h2>

        {/* File Name */}
        <p className="mt-2 truncate text-center text-sm text-gray-500">
          {resume.fileName}
        </p>
        <div className="mt-4 flex justify-center gap-2">

  <button
    onClick={() => {
      setSelectedResume(resume);
      setShowRenameModal(true);
    }}
    className="rounded-lg p-2 text-blue-600 transition hover:bg-blue-50"
  >
    <Pencil size={18} />
  </button>

  <button
  onClick={() => handleDeleteResume(resume.id)}
  className="rounded-lg p-2 text-red-600 transition hover:bg-red-50"
>
  <Trash2 size={18} />
</button>

</div>
        {/* Upload Date */}
        <div className="mt-5 border-t border-gray-100 pt-4">
          <p className="text-center text-xs text-gray-400">
            Uploaded •{" "}
            {resume.uploaded.toLocaleDateString("en-GB", {
              day: "2-digit",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>
    ))}
  </div>
) : (
  <div className="mt-10 text-center text-gray-500">
    <FileText size={50} className="mx-auto mb-4 text-gray-400" />
    <p className="font-medium">No resumes found</p>
    <p className="text-sm">
      Try changing your search or upload a new resume.
    </p>
  </div>
)}


      {/* Upload Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl w-full max-w-lg p-8 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Upload Resume</h2>

            <div className="space-y-5">
              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Resume Title
                </label>
                <input
                  type="text"
                  value={resumeTitle}
                  onChange={(e) => setResumeTitle(e.target.value)}
                  placeholder="e.g. Frontend Developer Resume"
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium text-gray-700">
                  Upload Resume
                </label>
                <input
                  type="file"
                  ref={fileInputRef}
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                  className="w-full border border-slate-300 rounded-xl p-3"
                />
                {selectedFile && (
                  <p className="text-sm text-gray-500 mt-2">
                    Selected: {selectedFile.name}
                  </p>
                )}
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-8">
              <button
  onClick={() => setShowModal(false)}
  className="rounded-xl border border-slate-300 px-6 py-3 transition hover:bg-gray-100"
>
  Cancel
</button>
              <button
  onClick={handleUpload}
  className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
>
  Upload Resume
</button>
            </div>
          </div>
        </div>
      )}
{showRenameModal && (
  <RenameResumeModal
    resume={selectedResume}
    onClose={() => {
      setShowRenameModal(false);
      setSelectedResume(null);
    }}
    onRename={handleRenameResume}
  />
)}

    </div>
  );
}
