import { useState } from "react";

import ApplicationsHeader from "../components/applications/ApplicationsHeader";
import ApplicationsStats from "../components/applications/ApplicationsStats";
import SearchFilters from "../components/applications/SearchFilters";
import ApplicationsGrid from "../components/applications/ApplicationsGrid";
import EmptyState from "../components/applications/EmptyState";
import AddApplicationModal from "../components/applications/AddApplicationModal";

export default function Applications() {
          const [applications, setApplications] = useState([
  {
    id: 1,
    company: "Google",
    role: "Frontend Developer Intern",
    city: "Bangalore",
    state: "Karnataka",
    jobType: "Internship",
    workMode: "Hybrid",
    appliedDate: "2026-07-08",
    status: "Applied",

    source: "LinkedIn",
    jobLink: "https://careers.google.com/",
    stipend: "₹50,000/month",
    experience: "0-1 Years",

    skills: [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Git",
],

    description:
      "Work with Google's frontend engineering team to build responsive user interfaces, collaborate with designers, and improve product performance.",

    notes:
      "Applied through LinkedIn. Need to revise React Hooks and System Design before interview.",
  },

  {
    id: 2,
    company: "Microsoft",
    role: "Software Engineer",
    city: "Hyderabad",
    state: "Telangana",
    jobType: "Full-time",
    workMode: "Remote",
    appliedDate: "2026-07-25",
    status: "Interview Scheduled",

    source: "Company Website",
    jobLink: "https://careers.microsoft.com/",
    stipend: "₹18 LPA",
    experience: "0-2 Years",

    skills: [
  "Java",
  "Spring Boot",
  "SQL",
  "DSA",
],

    description:
      "Develop scalable backend services, build REST APIs, optimize databases, and collaborate with cross-functional teams.",

    notes:
      "Technical interview scheduled next week. Focus on Java and DBMS revision.",
  },

  {
    id: 3,
    company: "Amazon",
    role: "Backend Engineer",
    city: "Chennai",
    state: "Tamil Nadu",
    jobType: "Full-time",
    workMode: "On-site",
    appliedDate: "2026-07-18",
    status: "Rejected",

    source: "Referral",
    jobLink: "https://amazon.jobs/",
    stipend: "₹20 LPA",
    experience: "1+ Years",

    skills: [
  "Java",
  "Spring Boot",
  "SQL",
  "DSA",
],

    description:
      "Build highly available backend systems, APIs, and cloud-native applications using AWS technologies.",

    notes:
      "Rejected after OA. Need to improve DSA speed.",
  },

  {
    id: 4,
    company: "Netflix",
    role: "UI/UX Designer",
    city: "Mumbai",
    state: "Maharashtra",
    jobType: "Full-time",
    workMode: "Hybrid",
    appliedDate: "2026-07-23",
    status: "In Review",

    source: "Wellfound",
    jobLink: "https://jobs.netflix.com/",
    stipend: "₹16 LPA",
    experience: "1-2 Years",

skills: [
  "Figma",
  "UX Research",
  "Prototyping",
],
    description:
      "Design engaging user experiences, create prototypes, collaborate with product teams, and improve accessibility.",

    notes:
      "Waiting for recruiter response.",
  },

  {
    id: 5,
    company: "Adobe",
    role: "Product Designer Intern",
    city: "Pune",
    state: "Maharashtra",
    jobType: "Internship",
    workMode: "Remote",
    appliedDate: "2026-07-15",
    status: "Shortlisted",

    source: "Internshala",
    jobLink: "https://careers.adobe.com/",
    stipend: "₹40,000/month",
    experience: "Freshers",

skills: [
  "Figma",
  "Adobe XD",
  "UI Design",
],
    description:
      "Create product mockups, collaborate with developers, conduct usability testing, and improve product interfaces.",

    notes:
      "Portfolio shortlisted. Prepare design case study presentation.",
  },
]);

  const [filters, setFilters] = useState({
    search: "",
    status: "All Status",
    jobType: "All Job Types",
    workMode: "All Work Modes",
    sortBy: "Newest",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingApplication, setEditingApplication] = useState(null);

  const filteredApplications = applications
    .filter((application) => {
      const search = filters.search.toLowerCase();

      const matchesSearch =
        application.company.toLowerCase().startsWith(search) ||
        application.role.toLowerCase().startsWith(search) ||
        application.city.toLowerCase().startsWith(search) ||
        application.state.toLowerCase().startsWith(search);

      const matchesStatus =
        filters.status === "All Status" ||
        application.status === filters.status;

      const matchesJobType =
        filters.jobType === "All Job Types" ||
        application.jobType === filters.jobType;

      const matchesWorkMode =
        filters.workMode === "All Work Modes" ||
        application.workMode === filters.workMode;

      return (
        matchesSearch &&
        matchesStatus &&
        matchesJobType &&
        matchesWorkMode
      );
    })
    .sort((a, b) => {
      switch (filters.sortBy) {
        case "Oldest":
          return new Date(a.appliedDate) - new Date(b.appliedDate);

        case "Company Name (A-Z)":
          return a.company.localeCompare(b.company);

        case "Status":
          return a.status.localeCompare(b.status);

        case "Newest":
        default:
          return new Date(b.appliedDate) - new Date(a.appliedDate);
      }
    });

  const stats = {
    total: applications.length,

    applied: applications.filter(
      (application) => application.status === "Applied"
    ).length,

    interviews: applications.filter(
      (application) =>
        application.status === "Interview Scheduled"
    ).length,

    offers: applications.filter(
      (application) =>
        application.status === "Offer Received"
    ).length,
  };

 const handleDeleteApplication = (id) => {
  const confirmed = window.confirm(
    "Are you sure you want to delete this application?"
  );

  if (!confirmed) return;

  setApplications((prev) =>
    prev.filter((application) => application.id !== id)
  );
};

const handleEditApplication = (application) => {
  setEditingApplication(application);
  setIsModalOpen(true);
};

  return (
  <div>
    {/* Hero Section */}
    <section className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 p-6 text-white shadow-lg">
      <ApplicationsHeader
  onAddApplication={() => {
    setEditingApplication(null);
    setIsModalOpen(true);
  }}
/>
      <ApplicationsStats stats={stats} />
    </section>

    {/* Search & Filters */}
    <SearchFilters
      filters={filters}
      setFilters={setFilters}
    />

    {/* Applications Grid / Empty State */}
    {filteredApplications.length > 0 ? (
      <ApplicationsGrid applications={filteredApplications}
      onDelete={handleDeleteApplication} 
      onEdit={handleEditApplication}
 />
    ) : (
      <EmptyState />
    )}

    {/* Add Application Modal */}
{isModalOpen && (
  <AddApplicationModal
    application={editingApplication}
    onClose={() => {
      setIsModalOpen(false);
      setEditingApplication(null);
    }}
   onAdd={(applicationData) => {
  if (editingApplication) {
    setApplications((prev) =>
      prev.map((application) =>
        application.id === editingApplication.id
          ? {
              ...applicationData,
              id: editingApplication.id,
            }
          : application
      )
    );
  } else {
    const duplicate = applications.some(
  (application) =>
    application.company.toLowerCase() ===
      applicationData.company.toLowerCase() &&
    application.role.toLowerCase() ===
      applicationData.role.toLowerCase()
);

if (duplicate) {
  alert("This application already exists.");
  return;
}

setApplications((prev) => [
  ...prev,
  {
    ...applicationData,
    id: Date.now(),
  },
]);
  }

  setEditingApplication(null);
  setIsModalOpen(false);
}}
  />
)}

  </div>
);
}