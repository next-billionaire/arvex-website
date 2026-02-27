import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "Services", "Portfolio", "Process", "Testimonials", "Contact"];

  return (
    <header className="fixed top-0 w-full bg-white/70 backdrop-blur-md border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        {/* Logo */}
        <a href="#home" className="text-xl font-bold tracking-wide">
          <span className="text-black">ARVEX</span>
          <span className="text-indigo-600">.</span>
        </a>

        {/* Desktop Nav */}
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
            href="#home"
            className="ml-4 px-4 py-2 rounded-xl bg-indigo-600 text-white hover:shadow-lg hover:scale-[1.03] transition"
          >
            Get Audit
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-lg"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-6 py-6 flex flex-col gap-5 text-center">

          {links.map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-gray-700 text-lg"
            >
              {l}
            </a>
          ))}

          {/* Mobile CTA */}
          <a
            href="#home"
            onClick={() => setOpen(false)}
            className="mt-2 px-4 py-3 rounded-xl bg-indigo-600 text-white"
          >
            Get Free Audit
          </a>

        </div>
      )}
    </header>
  );
}