import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const links = [
    { name: "Home", id: "home" },
    { name: "Solutions", id: "solutions" },
    { name: "Portfolio", id: "portfolio" },
    { name: "Process", id: "process" },
    { name: "Contact", id: "contact" },
  ];

  // Navbar background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Active section highlight on scroll
  useEffect(() => {
    const sections = links.map(link => document.getElementById(link.id));

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach(sec => sec && observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`fixed top-4 left-0 right-0 z-50 px-4 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-xl rounded-xl"
            : "bg-white/70 backdrop-blur-lg rounded-2xl"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

          {/* LOGO */}
          <a
            href="#home"
            className="text-xl font-extrabold tracking-tight text-slate-900"
          >
            ARVEX<span className="text-indigo-600">.</span>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map(link => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`text-sm font-medium transition ${
                  active === link.id
                    ? "text-indigo-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.name}
              </a>
            ))}

            <a
              href="#contact"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:scale-105 transition shadow-lg"
            >
              Get Free Audit →
            </a>
          </nav>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden flex flex-col gap-1"
            aria-label="Open menu"
          >
            <span className="w-6 h-0.5 bg-slate-800"></span>
            <span className="w-6 h-0.5 bg-slate-800"></span>
            <span className="w-6 h-0.5 bg-slate-800"></span>
          </button>
        </div>
      </header>

      {/* OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      {/* MOBILE DRAWER */}
      <div
        className={`fixed top-0 right-0 h-full w-72 bg-white shadow-2xl z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-5 border-b">
          <span className="font-bold text-lg text-slate-900">
            ARVEX<span className="text-indigo-600">.</span>
          </span>
          <button onClick={() => setOpen(false)}>✕</button>
        </div>

        <div className="flex flex-col px-6 py-6 gap-6">
          {links.map(link => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-gray-700 hover:text-indigo-600 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center py-3 rounded-xl font-semibold shadow-lg"
          >
            Get Free Audit →
          </a>
        </div>
      </div>
    </>
  );
}