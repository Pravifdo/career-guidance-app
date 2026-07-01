import { useState, useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ChevronDown, FileText, PenLine, GraduationCap, BookOpen, ClipboardList } from "lucide-react";

// ---- Types ----
interface ServiceItem {
  label: string;
  path: string;
  icon: React.ReactNode;
}

interface NavbarProps {
  isLoggedIn?: boolean;
}

// ---- Static data ----
const services: ServiceItem[] = [
  { label: "CV Writing", path: "/services/cv-writing", icon: <FileText size={18} /> },
  { label: "Cover Letter", path: "/services/cover-letter", icon: <PenLine size={18} /> },
  { label: "Final Year Project Report", path: "/services/fyp-report", icon: <GraduationCap size={18} /> },
  { label: "Project Proposal", path: "/services/proposal", icon: <ClipboardList size={18} /> },
  { label: "Assignment Writing", path: "/services/assignments", icon: <BookOpen size={18} /> },
];

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative py-2 text-[15px] font-medium transition-colors ${
    isActive ? "text-blue-800" : "text-slate-700 hover:text-blue-800"
  } after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
    isActive ? "after:w-full" : "after:w-0 hover:after:w-full"
  }`;

export default function Navbar({ isLoggedIn = false }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Sticky navbar: transparent -> white+blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close services dropdown on outside click
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2">
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-blue-800 transition-transform group-hover:rotate-6">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 transition-transform group-hover:scale-125" />
          </span>
          <span className="font-['Sora'] text-xl font-semibold tracking-tight text-slate-900">
            Career<span className="text-blue-700">Hub</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 lg:flex">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/about" className={navLinkClass}>About</NavLink>

          {/* Services dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen((v) => !v)}
              className="flex items-center gap-1 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-blue-800"
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                {services.map((s) => (
                  <Link
                    key={s.path}
                    to={s.path}
                    onClick={() => setServicesOpen(false)}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-800"
                  >
                    <span className="text-blue-700">{s.icon}</span>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <NavLink to="/internships" className={navLinkClass}>Internships</NavLink>
          {!isLoggedIn && <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>}
        </div>

        {/* Right side actions */}
        <div className="hidden items-center gap-3 lg:flex">
          {isLoggedIn ? (
            <>
              <button className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100">
                🔔
              </button>
              <Link
                to="/dashboard"
                className="rounded-full bg-blue-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-900"
              >
                Dashboard
              </Link>
              <button className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100">
                👤
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-full px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-800"
              >
                Login
              </Link>
              <Link
                to="/register"
                className="rounded-full bg-blue-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-900"
              >
                Register
              </Link>
            </>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="p-2 text-slate-800 lg:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`fixed inset-x-0 top-[64px] z-40 origin-top bg-white shadow-lg transition-all duration-300 lg:hidden ${
          mobileOpen ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          <Link to="/" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-slate-700 hover:bg-blue-50">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-slate-700 hover:bg-blue-50">About</Link>

          <details className="group rounded-lg px-3 py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-slate-700">
              Services
              <ChevronDown size={16} className="transition-transform group-open:rotate-180" />
            </summary>
            <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-slate-100 pl-3">
              {services.map((s) => (
                <Link
                  key={s.path}
                  to={s.path}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-2 py-2 text-sm text-slate-600 hover:text-blue-800"
                >
                  {s.icon} {s.label}
                </Link>
              ))}
            </div>
          </details>

          <Link to="/internships" onClick={() => setMobileOpen(false)} className="rounded-lg px-3 py-3 text-slate-700 hover:bg-blue-50">Internships</Link>

          {isLoggedIn ? (
            <Link to="/dashboard" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-blue-800 px-4 py-3 text-center text-white">Dashboard</Link>
          ) : (
            <div className="mt-2 flex flex-col gap-2">
              <Link to="/login" onClick={() => setMobileOpen(false)} className="rounded-full border border-slate-200 px-4 py-3 text-center text-slate-700">Login</Link>
              <Link to="/register" onClick={() => setMobileOpen(false)} className="rounded-full bg-blue-800 px-4 py-3 text-center text-white">Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}