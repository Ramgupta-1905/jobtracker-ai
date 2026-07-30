import { useState, useMemo, useRef } from "react";
import {
  Search,
  Upload,
  FileText,
} from "lucide-react";

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
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-700">Resume Vault</h1>
          <p className="text-gray-600 mt-2">
            Manage and organize multiple resumes tailored for different job roles.
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-medium transition"
        >
          <Upload size={18} />
          Upload Resume
        </button>
      </div>

      {/* Search + Sort */}
      <div className="flex justify-between items-center mb-8">
        <div className="relative w-96">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search resumes..."
            className="w-full bg-white border border-slate-300 rounded-xl py-3 pl-10 pr-4 outline-none focus:border-blue-500"
          />
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="bg-white border border-slate-300 px-5 py-3 rounded-xl hover:bg-gray-50 transition"
        >
          <option value="newest">Sort by Newest</option>
          <option value="oldest">Sort by Oldest</option>
          <option value="title">Sort by Title</option>
        </select>
      </div>

      {/* Resume Grid */}
      {sortedResumes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {sortedResumes.map((resume) => (
            <div
              key={resume.id}
              className="bg-white border border-slate-300 rounded-2xl p-5 hover:border-blue-500 hover:-translate-y-1 hover:shadow-lg transition duration-300"
            >
              <div className="flex justify-center my-4">
                <FileText size={70} className="text-red-500" />
              </div>

              <h2 className="font-semibold text-lg text-center text-gray-800">
                {resume.title}
              </h2>

              <p className="text-gray-500 text-sm text-center mt-2">
                {resume.fileName}
              </p>

              <p className="text-xs text-gray-400 text-center mt-5">
                Uploaded •{" "}
                {resume.uploaded.toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                })}
              </p>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 text-gray-500">
          <FileText size={50} className="mx-auto mb-4 text-gray-400" />
          <p className="font-medium">No resumes found</p>
          <p className="text-sm">Try changing your search or upload a new resume.</p>
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
                className="px-5 py-2 rounded-lg border border-slate-300 hover:bg-gray-100 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleUpload}
                className="px-5 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
