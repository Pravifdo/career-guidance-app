import React from "react";

export default function Dashboard() {
  const stats = [
    { label: "Submitted Requests", value: "3", color: "bg-blue-50 text-blue-700" },
    { label: "Pending Reviews", value: "1", color: "bg-yellow-50 text-yellow-700" },
    { label: "Completed Documents", value: "2", color: "bg-green-50 text-green-700" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="mx-auto max-w-7xl px-6">
        <h1 className="text-3xl font-bold text-slate-900 mb-6">User Dashboard</h1>
        
        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-3 mb-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-slate-500 mb-2">{stat.label}</p>
              <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Details Section */}
        <div className="rounded-xl border border-slate-100 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Recent Submissions</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-400 font-medium">
                  <th className="py-3">Service</th>
                  <th className="py-3">Date</th>
                  <th className="py-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 text-slate-700">
                <tr>
                  <td className="py-3.5 font-medium">Professional CV Writing</td>
                  <td className="py-3.5">July 5, 2026</td>
                  <td className="py-3.5 text-green-600 font-semibold">Completed</td>
                </tr>
                <tr>
                  <td className="py-3.5 font-medium">Project Proposal Review</td>
                  <td className="py-3.5">July 3, 2026</td>
                  <td className="py-3.5 text-yellow-600 font-semibold">Under Review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
