import React, { useState } from "react";

export default function Internships() {
  const listings = [
    {
      role: "Frontend",
      title: "Frontend Developer Intern",
      company: "Google",
      logo: "/logos/google.png",
      location: "Remote",
      duration: "3 Months",
      salary: "LKR 45,000/month",
      skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
      role: "Backend",
      title: "Software Engineer Intern",
      company: "Microsoft",
      logo: "/logos/microsoft.png",
      location: "Hybrid",
      duration: "6 Months",
      salary: "LKR 60,000/month",
      skills: ["Node.js", "Express", "MongoDB"],
    },
    {
      role: "UI/UX",
      title: "UI/UX Designer Intern",
      company: "Adobe",
      logo: "/logos/adobe.png",
      location: "On-site",
      duration: "3 Months",
      salary: "LKR 40,000/month",
      skills: ["Figma", "Adobe XD", "Photoshop"],
    },
    {
      role: "Data",
      title: "Data Analyst Intern",
      company: "IBM",
      logo: "/logos/ibm.png",
      location: "Remote",
      duration: "6 Months",
      salary: "LKR 55,000/month",
      skills: ["Python", "SQL", "Power BI"],
    },
    {
      role: "Mobile",
      title: "Flutter Developer Intern",
      company: "Virtusa",
      logo: "/logos/virtusa.png",
      location: "Hybrid",
      duration: "6 Months",
      salary: "LKR 50,000/month",
      skills: ["Flutter", "Dart", "Firebase"],
    },
    {
      role: "Frontend",
      title: "React Developer Intern",
      company: "WSO2",
      logo: "/logos/wso2.png",
      location: "Remote",
      duration: "3 Months",
      salary: "LKR 45,000/month",
      skills: ["React", "TypeScript", "Tailwind CSS"],
    },
  ];

  const roles = ["All", ...new Set(listings.map((job) => job.role))];
  const [selectedRole, setSelectedRole] = useState("All");

  const filteredJobs =
    selectedRole === "All"
      ? listings
      : listings.filter((job) => job.role === selectedRole);

  return (
    <div className="min-h-screen bg-slate-100 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="mb-10">
          <h1 className="text-4xl font-bold text-slate-900">
            Internship Opportunities
          </h1>
          <p className="text-slate-600 mt-2">
            Discover verified internship opportunities from top companies.
          </p>
        </div>

        {/* Role Filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setSelectedRole(role)}
              className={`px-5 py-2 rounded-full font-medium transition ${selectedRole === role
                  ? "bg-blue-700 text-white"
                  : "bg-white border border-slate-300 hover:bg-slate-100"
                }`}
            >
              {role}
            </button>
          ))}
        </div>

        {/* Internship Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredJobs.map((job, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 p-6"
            >
              {/* Header */}
              <div className="flex justify-between items-start">
                <div className="flex gap-4">
                  <img
                    src={job.logo}
                    alt={job.company}
                    className="w-16 h-16 rounded-xl border bg-white p-2 object-contain"
                  />

                  <div>
                    <h2 className="text-lg font-bold text-slate-900">
                      {job.title}
                    </h2>

                    <p className="text-blue-700 font-semibold">
                      {job.company}
                    </p>
                  </div>
                </div>

                <span className="bg-green-100 text-green-700 text-xs font-semibold px-3 py-1 rounded-full">
                  ✓ Verified
                </span>
              </div>

              {/* Job Details */}
              <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-slate-600">
                <div>📍 {job.location}</div>
                <div>💼 {job.role}</div>
                <div>⏳ {job.duration}</div>
                <div>💰 {job.salary}</div>
              </div>

              {/* Skills */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-slate-700 mb-3">
                  Skills Required
                </h4>

                <div className="flex flex-wrap gap-2">
                  {job.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 pt-5 border-t flex justify-between items-center">
                <span className="text-sm text-slate-500">
                  🚀 Start Immediately
                </span>

                <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-lg font-semibold transition">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}