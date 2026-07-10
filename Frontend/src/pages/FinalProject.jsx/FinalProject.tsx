import React, { useState, FormEvent, useRef } from "react";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  university: string;
  projectTitle: string;
  projectTopic: string;
  researchField: string;
  description: string;
}

const FinalProject: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    university: "",
    projectTitle: "",
    projectTopic: "",
    researchField: "",
    description: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Generate WhatsApp message with all form data
    const message = `Hello, I need help with my final year project report.%0A%0A📋 *Student Details:*%0A👤 Name: ${formData.fullName}%0A📧 Email: ${formData.email}%0A📱 Phone: ${formData.phone}%0A🏫 University: ${formData.university}%0A%0A📝 *Project Details:*%0A📌 Title: ${formData.projectTitle}%0A🔬 Topic: ${formData.projectTopic}%0A📚 Field: ${formData.researchField}%0A%0A📖 *Description:*%0A${formData.description || "Not provided"}%0A%0A🙏 Please assist me with my project report.`;

    // Open WhatsApp with the message
    const whatsappNumber = "94771234567";
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;
    
    // Open in new tab
    window.open(whatsappLink, "_blank");

    setTimeout(() => {
      setIsSubmitting(false);
    }, 1000);
  };

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Hero Section with Image */}
      <div className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent"></div>
        </div>

        {/* Hero Content */}
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6 max-w-4xl mx-auto animate-[fadeInUp_1s_ease-out]">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 mb-4">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-white/90 text-xs font-medium tracking-wider uppercase">
              Academic Excellence
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
            Final Year Project
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Report Writing
            </span>
          </h1>

          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            Complete your academic journey with a well-structured, research-driven
            final year project report. Expert assistance from planning to proofreading.
          </p>

          <button
            onClick={scrollToForm}
            className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 border border-white/30 hover:scale-105 active:scale-95 flex items-center gap-2"
          >
            <i className="fas fa-arrow-down"></i>
            Get Started
          </button>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-white/50 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Card */}
      <div ref={formRef} className="relative -mt-12 md:-mt-20 px-4 pb-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200/50 p-6 md:p-8 lg:p-10 border border-slate-100/60 animate-[slideUp_0.8s_ease-out]">
            {/* Stats/Features */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: "fa-users", label: "500+", sub: "Students Helped" },
                { icon: "fa-star", label: "4.9/5", sub: "Average Rating" },
                { icon: "fa-clock", label: "24/7", sub: "Support Available" },
                { icon: "fa-check-circle", label: "100%", sub: "Plagiarism Free" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-3 rounded-xl bg-gradient-to-br from-blue-50/50 to-purple-50/50 border border-slate-100/50 hover:shadow-md transition-all duration-300 hover:scale-105"
                >
                  <i className={`fas ${stat.icon} text-blue-600 text-xl mb-1`}></i>
                  <div className="font-bold text-slate-800 text-lg">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.sub}</div>
                </div>
              ))}
            </div>

            {/* Form Section */}
            <div className="border-t border-slate-100 pt-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white text-sm">
                  <i className="fas fa-pen-fancy"></i>
                </span>
                Project Information
              </h3>
              <p className="text-sm text-slate-500 mb-6">
                Fill in your details and we'll help you with your final year project report
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Personal Information */}
                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <i className="fas fa-user text-blue-500"></i>
                    Personal Details
                  </h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="fullName" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. john@example.com"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. +94 77 123 4567"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                    <div>
                      <label htmlFor="university" className="block text-sm font-medium text-slate-700 mb-1.5">
                        University / Institution <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="university"
                        name="university"
                        value={formData.university}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. University of Colombo"
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Details */}
                <div className="bg-slate-50/50 rounded-xl p-4 border border-slate-100">
                  <h4 className="text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
                    <i className="fas fa-project-diagram text-blue-500"></i>
                    Project Details
                  </h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="projectTitle" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="projectTitle"
                        name="projectTitle"
                        value={formData.projectTitle}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter your project title here..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400 text-lg font-medium"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="projectTopic" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Project Topic <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="projectTopic"
                          name="projectTopic"
                          value={formData.projectTopic}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. Distributed E-Commerce Backend"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                        />
                      </div>
                      <div>
                        <label htmlFor="researchField" className="block text-sm font-medium text-slate-700 mb-1.5">
                          Research Field <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="researchField"
                          name="researchField"
                          value={formData.researchField}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g. Computer Science"
                          className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-1.5">
                        Project Description
                      </label>
                      <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        rows={4}
                        placeholder="Briefly describe your project and what kind of assistance you need..."
                        className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all duration-200 text-slate-800 placeholder:text-slate-400 resize-none"
                      ></textarea>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-4 px-6 rounded-2xl transition-all duration-300 shadow-lg shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.01] active:scale-[0.97] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 text-lg"
                >
                  <i className="fab fa-whatsapp"></i>
                  {isSubmitting ? (
                    <>
                      <span className="inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                      Sending...
                    </>
                  ) : (
                    "Submit via WhatsApp"
                  )}
                </button>

                <p className="text-xs text-slate-400 text-center">
                  <i className="fas fa-lock mr-1"></i>
                  Your information is secure and will only be used for project assistance
                </p>
              </form>
            </div>

            {/* WhatsApp Contact - Icon Only with Tooltip */}
            <div className="mt-8 pt-6 border-t border-slate-100 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/30 relative group">
                  <i className="fab fa-whatsapp text-white text-2xl"></i>
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
                    Chat with us
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-800 rotate-45"></div>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-medium text-slate-800">Need quick help?</div>
                  <div className="text-xs text-slate-500">Available 24/7 on WhatsApp</div>
                </div>
              </div>
              <a
                href={`https://wa.me/94771234567`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-medium px-6 py-2.5 rounded-full transition-all duration-200 shadow-md shadow-green-500/25 hover:shadow-green-500/40 hover:scale-[1.02] active:scale-[0.95] flex items-center gap-2"
              >
                <i className="fab fa-whatsapp"></i>
                Contact
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
              <span className="flex items-center gap-1.5">
                <i className="fas fa-shield-alt text-blue-500"></i>
                Secure & Confidential
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-users text-blue-500"></i>
                500+ Happy Students
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-clock text-blue-500"></i>
                48hr Delivery
              </span>
              <span className="flex items-center gap-1.5">
                <i className="fas fa-award text-blue-500"></i>
                Expert Writers
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideUp {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
        
        .animate-slideUp {
          animation: slideUp 0.8s ease-out forwards;
        }
      `}</style>

      {/* Font Awesome */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </div>
  );
};

export default FinalProject;