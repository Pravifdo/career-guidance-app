import React from "react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-md">
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Get in Touch</h1>
          <p className="text-slate-600 mb-8 text-center">Have any questions? We would love to hear from you.</p>
          
          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">First Name</label>
                <input type="text" className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="John" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Last Name</label>
                <input type="text" className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="Doe" />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input type="email" className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="john@example.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea rows={4} className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="Write your message here..."></textarea>
            </div>

            <button type="submit" className="w-full rounded-lg bg-blue-800 py-3 text-center font-semibold text-white hover:bg-blue-900 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
