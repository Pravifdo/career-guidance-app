import React from "react";

export default function Internships() {
  const listings = [
    { title: "Frontend Developer Intern", company: "TechCorp", location: "Remote", duration: "3 Months" },
    { title: "Software Engineer Intern", company: "Innovate Solutions", location: "Hybrid", duration: "6 Months" },
    { title: "UI/UX Design Intern", company: "Creative Minds", location: "On-site", duration: "3 Months" },
    { title: "Data Analyst Intern", company: "Insight Analytics", location: "Remote", duration: "6 Months" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-4xl font-bold text-slate-900 mb-2">Internship Opportunities</h1>
        <p className="text-slate-600 mb-8">Kickstart your career with these verified internship positions.</p>
        
        <div className="grid gap-6 md:grid-cols-2">
          {listings.map((job, idx) => (
            <div key={idx} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-blue-50 text-blue-800 mb-4">{job.duration}</span>
              <h3 className="text-xl font-bold text-slate-900 mb-1">{job.title}</h3>
              <p className="text-blue-700 font-medium mb-3">{job.company}</p>
              <div className="flex items-center text-slate-500 text-sm gap-4 mb-6">
                <span>📍 {job.location}</span>
                <span>📅 Start Immediately</span>
              </div>
              <button className="w-full rounded-lg bg-blue-800 py-2.5 text-center font-medium text-white hover:bg-blue-900 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
