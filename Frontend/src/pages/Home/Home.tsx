import React, { useRef } from "react";
import heroImage from "./images/images (10).jpeg";
import ServicesBox from "./box/box";
import HomeThird from "./Hometherd";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  const servicesRef = useRef<HTMLDivElement>(null);

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <main className="bg-white text-slate-900">
      {/* Hero Section */}
      <section className="pt-20">
        <div className="relative min-h-[calc(100vh-5rem)] w-full overflow-hidden bg-white">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="Hero"
              className="h-full w-full object-cover"
            />
            {/* Gradient Overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-white/50 to-transparent"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col justify-center items-start px-6 md:px-12 lg:px-20 text-slate-900 max-w-3xl animate-[fadeInUp_1s_ease-out]">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200/50 shadow-sm mb-4">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-medium text-slate-600 tracking-wider uppercase">
                Your Career Journey Starts Here
              </span>
            </div>

            <h1 className="mt-2 text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              Build Your Future
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                With Confidence
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base md:text-lg text-slate-700 leading-relaxed">
              Request professional career documents and explore internship opportunities all in one place.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button 
                onClick={scrollToServices}
                className="group relative overflow-hidden rounded-full bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-3.5 font-medium text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] flex items-center gap-2"
              >
                <span>Get Started</span>
                <i className="fas fa-arrow-right group-hover:translate-x-1 transition-transform"></i>
              </button>

              <button className="group rounded-full border-2 border-slate-800 px-8 py-3.5 font-medium text-slate-800 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all duration-300 hover:scale-[1.02] active:scale-[0.97] flex items-center gap-2">
                <span>Explore Services</span>
                <i className="fas fa-search group-hover:scale-110 transition-transform"></i>
              </button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 md:gap-12">
              {[
                { number: "500+", label: "Students Helped" },
                { number: "4.9/5", label: "Average Rating" },
                { number: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900">{stat.number}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce hidden md:block">
            <div className="w-6 h-10 rounded-full border-2 border-slate-400/50 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 bg-slate-500/50 rounded-full animate-[scrollDown_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Ref */}
      <div ref={servicesRef}>
        <ServicesBox />
      </div>

      <HomeThird />
      <Footer />

      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scrollDown {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(16px); opacity: 0; }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 1s ease-out forwards;
        }
      `}</style>

      {/* Font Awesome for Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
      />
    </main>
  );
}