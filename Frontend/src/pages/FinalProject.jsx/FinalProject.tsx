import React from "react";

export default function FinalProject() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
          <span className="text-sm font-semibold tracking-wider text-blue-700 uppercase">Academic Support</span>
          <h1 className="text-4xl font-bold text-slate-900 mt-2 mb-4">Final Year Project Report Writing</h1>
          <p className="text-slate-600 mb-8 leading-8">
            Complete your academic journey with a well-structured, research-driven final year project report. We assist with planning, methodology, literature reviews, and proofreading.
          </p>

          <div className="border-t border-slate-100 pt-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Project Information</h3>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Project Topic</label>
                <input type="text" className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="e.g. Distributed E-Commerce Backend in Rust" />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Research Field / Major</label>
                <input type="text" className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="e.g. Computer Science, Mechanical Engineering" />
              </div>

              <button type="submit" className="w-full rounded-lg bg-blue-800 py-3 text-center font-semibold text-white hover:bg-blue-900 transition-colors">
                Request Report Assistance
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
