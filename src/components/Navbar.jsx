import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = ["Home", "Solutions", "Portfolio", "Process", "Testimonials", "Contact"];

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar container */}
      <header className="fixed top-4 left-0 right-0 z-50 px-4">
        <div
          className={`max-w-7xl mx-auto flex justify-between items-center transition-all duration-300
          ${scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg py-3 rounded-2xl"
              : "bg-white/60 backdrop-blur-lg py-4 rounded-3xl"}
          border`}
        >
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-wide px-4">
            <span className="text-black">ARVEX</span>
            <span className="text-indigo-600">.</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="relative text-gray-700 hover:text-black transition group"
              >
                {l}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 transition-all group-hover:w-full"></span>
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="ml-4 px-5 py-2 rounded-xl bg-indigo-600 text-white hover:shadow-lg hover:scale-[1.05] transition"
            >
              Get Audit
            </a>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-lg px-4"
          >
            <FaBars />
          </button>
        </div>
      </header>

      {/* Mobile slide panel */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-50 transition
        ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[80%] max-w-sm bg-white shadow-2xl z-50 p-6 flex flex-col gap-6 transition-transform duration-300
        ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Close */}
        <div className="flex justify-end">
          <button onClick={() => setOpen(false)}>
            <FaTimes />
          </button>
        </div>

        {/* Links */}
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="text-lg font-medium text-gray-800"
          >
            {l}
          </a>
        ))}

        {/* CTA */}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-4 px-4 py-3 rounded-xl bg-indigo-600 text-white text-center"
        >
          Get Free Audit
        </a>
      </div>
    </>
  );
}