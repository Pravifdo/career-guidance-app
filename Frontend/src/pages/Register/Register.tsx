import React from "react";

export default function Register() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center pt-20">
      <div className="w-full max-w-md p-6">
        <div className="rounded-2xl border border-slate-100 bg-white p-8 shadow-lg">
          <h2 className="text-3xl font-bold text-slate-900 mb-2 text-center">Create an Account</h2>
          <p className="text-sm text-slate-500 mb-8 text-center">Get started today with CareerHub.</p>
          
          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
              <input type="text" required className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="John Doe" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input type="email" required className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="your@email.com" />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Password</label>
              <input type="password" required className="w-full rounded-lg border border-slate-200 px-4 py-2.5 outline-none focus:border-blue-500" placeholder="••••••••" />
            </div>

            <button type="submit" className="w-full rounded-lg bg-blue-800 py-3 text-center font-semibold text-white hover:bg-blue-900 transition-colors">
              Sign Up
            </button>
          </form>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{" "}
            <a href="/login" className="text-blue-700 font-semibold hover:underline">Login</a>
          </p>
        </div>
      </div>
    </div>
  );
}
