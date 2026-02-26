// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);

    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.theme = next ? "dark" : "light";
  };

  const links = [
    "Home",
    "Services",
    "Portfolio",
    "Process",
    "Pricing",
    "Contact",
  ];

  return (
    <header className="fixed top-0 w-full z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="flex items-center justify-between rounded-2xl border border-white/20 dark:border-white/10 backdrop-blur-xl bg-white/40 dark:bg-white/5 px-6 py-3 shadow-lg">

          {/* Logo */}
          <Link
            href="#home"
            className="text-lg font-semibold tracking-wide"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ORVION
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm">
            {links.map((l) => (
              <Link
                key={l}
                href={`#${l.toLowerCase()}`}
                className="relative group text-neutral-700 dark:text-neutral-300"
              >
                {l}
                <span className="absolute left-0 -bottom-1 w-0 h-[1.5px] bg-neutral-900 dark:bg-white group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </nav>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl bg-white/60 dark:bg-white/10 backdrop-blur-md hover:scale-105 transition"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 rounded-xl bg-white/60 dark:bg-white/10"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden mt-3 rounded-2xl backdrop-blur-xl bg-white/70 dark:bg-white/10 border border-white/20 dark:border-white/10 p-6 space-y-4"
            >
              {links.map((l) => (
                <Link
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block"
                >
                  {l}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}