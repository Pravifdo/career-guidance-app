import { useEffect, useRef, useState } from "react";

const services = [
  { label: "CV Writing", path: "/services/cv-writing", mark: "CV" },
  { label: "Cover Letter", path: "/services/cover-letter", mark: "CL" },
  { label: "Final Year Project Report", path: "/services/fyp-report", mark: "FYP" },
  { label: "Project Proposal", path: "/services/proposal", mark: "PP" },
  { label: "Assignment Writing", path: "/services/assignments", mark: "AW" },
];

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Internships", href: "/internships" },
  { label: "Contact", href: "/contact" },
];

function isActivePath(href, currentPath) {
  if (href === "/") {
    return currentPath === "/";
  }

  return currentPath === href || currentPath.startsWith(`${href}/`);
}

function MenuIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M4 6h16" />
      <path d="M4 12h16" />
      <path d="M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M6 6l12 12" />
      <path d="M18 6L6 18" />
    </svg>
  );
}

function ChevronIcon({ open = false }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M5 8l5 5 5-5" />
    </svg>
  );
}

function ActionIcon({ type }) {
  if (type === "bell") {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 17H9" />
        <path d="M18 16H6l1.2-1.8A7 7 0 0 0 8 11V9a4 4 0 1 1 8 0v2a7 7 0 0 0 .8 3.2L18 16Z" />
        <path d="M10 19a2 2 0 0 0 4 0" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 21a8 8 0 1 0-16 0" />
      <circle cx="12" cy="8" r="3" />
    </svg>
  );
}

export default function Navbar({ isLoggedIn = false }) {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [currentPath, setCurrentPath] = useState(() => window.location.pathname);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", onClickOutside);

    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onPopState = () => setCurrentPath(window.location.pathname);

    window.addEventListener("popstate", onPopState);

    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  const handleNavigate = () => {
    setCurrentPath(window.location.pathname);
    closeMobileMenu();
  };

  const navLinkClass = (href) =>
    `relative py-2 text-[15px] font-medium transition-colors after:absolute after:left-0 after:-bottom-0.5 after:h-[2px] after:bg-blue-600 after:transition-all after:duration-300 ${
      isActivePath(href, currentPath) ? "text-blue-800 after:w-full" : "text-slate-700 hover:text-blue-800 after:w-0 hover:after:w-full"
    }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm backdrop-blur-md transition-all duration-300">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="/" className="group flex items-center gap-2" onClick={handleNavigate}>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-blue-800 transition-transform group-hover:rotate-6">
            <span className="h-2.5 w-2.5 rounded-full bg-sky-400 transition-transform group-hover:scale-125" />
          </span>
          <span className="text-xl font-semibold tracking-tight text-slate-900">
            Career<span className="text-blue-700">Hub</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} className={navLinkClass(item.href)} onClick={handleNavigate}>
              {item.label}
            </a>
          ))}

          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setServicesOpen((value) => !value)}
              className="flex items-center gap-1 py-2 text-[15px] font-medium text-slate-700 transition-colors hover:text-blue-800"
              aria-expanded={servicesOpen}
            >
              Services
              <span className="h-4 w-4">
                <ChevronIcon open={servicesOpen} />
              </span>
            </button>

            {servicesOpen && (
              <div className="absolute left-1/2 top-full mt-3 w-72 -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl">
                {services.map((service) => (
                  <a
                    key={service.path}
                    href={service.path}
                    onClick={() => {
                      setServicesOpen(false);
                      handleNavigate();
                    }}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-800"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-50 text-xs font-semibold text-blue-700">
                      {service.mark}
                    </span>
                    {service.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          <a href="/internships" className={navLinkClass("/internships")} onClick={handleNavigate}>
            Internships
          </a>
          {!isLoggedIn && (
            <a href="/contact" className={navLinkClass("/contact")} onClick={handleNavigate}>
              Contact
            </a>
          )}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          {isLoggedIn ? (
            <>
              <button type="button" className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100" aria-label="Notifications">
                <span className="block h-5 w-5">
                  <ActionIcon type="bell" />
                </span>
              </button>
              <a
                href="/dashboard"
                className="rounded-full bg-blue-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-900"
                onClick={handleNavigate}
              >
                Dashboard
              </a>
              <button type="button" className="rounded-full p-2 text-slate-600 transition-colors hover:bg-slate-100" aria-label="Profile">
                <span className="block h-5 w-5">
                  <ActionIcon type="user" />
                </span>
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="rounded-full px-5 py-2 text-sm font-medium text-slate-700 transition-colors hover:text-blue-800" onClick={handleNavigate}>
                Login
              </a>
              <a href="/register" className="rounded-full bg-blue-800 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-900" onClick={handleNavigate}>
                Register
              </a>
            </>
          )}
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-slate-800 lg:hidden"
          onClick={() => setMobileOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          <span className="block h-7 w-7">{mobileOpen ? <CloseIcon /> : <MenuIcon />}</span>
        </button>
      </nav>

      <div
        className={`fixed inset-x-0 top-[64px] z-40 origin-top bg-white shadow-lg transition-all duration-300 lg:hidden ${
          mobileOpen ? "scale-y-100 opacity-100" : "pointer-events-none scale-y-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-6 py-4">
          {navItems.slice(0, 2).map((item) => (
            <a key={item.href} href={item.href} onClick={handleNavigate} className="rounded-lg px-3 py-3 text-slate-700 hover:bg-blue-50">
              {item.label}
            </a>
          ))}

          <details className="group rounded-lg px-3 py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-slate-700">
              Services
              <span className="h-4 w-4">
                <ChevronIcon />
              </span>
            </summary>
            <div className="ml-2 mt-1 flex flex-col gap-1 border-l border-slate-100 pl-3">
              {services.map((service) => (
                <a
                  key={service.path}
                  href={service.path}
                  onClick={handleNavigate}
                  className="flex items-center gap-2 py-2 text-sm text-slate-600 hover:text-blue-800"
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-[10px] font-semibold text-blue-700">
                    {service.mark}
                  </span>
                  {service.label}
                </a>
              ))}
            </div>
          </details>

          <a href="/internships" onClick={handleNavigate} className="rounded-lg px-3 py-3 text-slate-700 hover:bg-blue-50">
            Internships
          </a>

          {isLoggedIn ? (
            <a href="/dashboard" onClick={handleNavigate} className="mt-2 rounded-full bg-blue-800 px-4 py-3 text-center text-white">
              Dashboard
            </a>
          ) : (
            <div className="mt-2 flex flex-col gap-2">
              <a href="/login" onClick={handleNavigate} className="rounded-full border border-slate-200 px-4 py-3 text-center text-slate-700">
                Login
              </a>
              <a href="/register" onClick={handleNavigate} className="rounded-full bg-blue-800 px-4 py-3 text-center text-white">
                Register
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}