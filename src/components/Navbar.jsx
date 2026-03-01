import { useState, useEffect } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = ["Home", "Solutions", "Portfolio", "Process", "Contact"];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@700;800&display=swap');

        .nav-link {
          position: relative;
          font-size: 14px;
          font-weight: 500;
          color: #374151;
          text-decoration: none;
          padding: 4px 0;
          transition: color 0.2s ease;
          font-family: 'DM Sans', sans-serif;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0;
          width: 0; height: 2px;
          background: linear-gradient(90deg, #6366f1, #8b5cf6);
          border-radius: 999px;
          transition: width 0.25s ease;
        }
        .nav-link:hover { color: #111; }
        .nav-link:hover::after, .nav-link.active::after { width: 100%; }
        .nav-link.active { color: #6366f1; }

        .cta-btn {
          background: linear-gradient(135deg, #6366f1, #8b5cf6);
          color: white;
          border: none;
          border-radius: 12px;
          padding: 10px 22px;
          font-size: 14px;
          font-weight: 600;
          font-family: 'DM Sans', sans-serif;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          box-shadow: 0 4px 14px #6366f130;
        }
        .cta-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 6px 20px #6366f145;
        }

        .mobile-link {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 16px;
          font-weight: 500;
          color: #1e293b;
          text-decoration: none;
          padding: 14px 0;
          border-bottom: 1px solid #f1f5f9;
          font-family: 'DM Sans', sans-serif;
          transition: color 0.2s ease;
        }
        .mobile-link:hover { color: #6366f1; }
        .mobile-link:last-of-type { border-bottom: none; }

        .hamburger-bar {
          display: block;
          width: 22px;
          height: 2px;
          background: #1e293b;
          border-radius: 999px;
          transition: all 0.3s ease;
          transform-origin: center;
        }
        .bar-top.open { transform: translateY(6px) rotate(45deg); }
        .bar-mid.open { opacity: 0; transform: scaleX(0); }
        .bar-bot.open { transform: translateY(-6px) rotate(-45deg); }

        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes slideOutRight {
          from { transform: translateX(0); }
          to { transform: translateX(100%); }
        }
        .drawer-enter { animation: slideInRight 0.3s cubic-bezier(.4,0,.2,1) forwards; }
        .drawer-exit { animation: slideOutRight 0.3s cubic-bezier(.4,0,.2,1) forwards; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        .overlay-enter { animation: fadeIn 0.25s ease forwards; }
        .overlay-exit { animation: fadeOut 0.25s ease forwards; }
      `}</style>

      {/* Navbar */}
      <header style={{ position: "fixed", top: 16, left: 0, right: 0, zIndex: 50, padding: "0 16px" }}>
        <div style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: scrolled ? "10px 20px" : "14px 20px",
          borderRadius: scrolled ? 18 : 24,
          background: scrolled ? "rgba(255,255,255,0.85)" : "rgba(255,255,255,0.65)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          boxShadow: scrolled ? "0 8px 32px rgba(0,0,0,0.10)" : "0 2px 16px rgba(0,0,0,0.06)",
          border: "1px solid rgba(255,255,255,0.8)",
          transition: "all 0.3s ease",
        }}>

          {/* Logo */}
          <a href="#home" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 2 }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 20, color: "#0f172a", letterSpacing: "-0.5px" }}>
              ARVEX
            </span>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 22, color: "#6366f1", lineHeight: 1 }}>.</span>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
            <style>{`.desktop-nav { display: none; } @media(min-width: 768px){ .desktop-nav { display: flex !important; } } .hamburger-btn { display: flex; } @media(min-width: 768px){ .hamburger-btn { display: none !important; } }`}</style>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className={`nav-link${activeLink === l.toLowerCase() ? " active" : ""}`}
                onClick={() => setActiveLink(l.toLowerCase())}
              >
                {l}
              </a>
            ))}

            {/* Spots indicator */}
            <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#fef3c7", border: "1px solid #fde68a", borderRadius: 999, padding: "4px 10px" }}>
              <span style={{ width: 7, height: 7, background: "#f59e0b", borderRadius: "50%", display: "inline-block", animation: "ping 1.5s infinite" }} />
              <span style={{ fontSize: 12, fontWeight: 600, color: "#92400e", fontFamily: "'DM Sans', sans-serif" }}>3 spots left</span>
            </div>
            <style>{`@keyframes ping { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:.5;transform:scale(1.4)} }`}</style>

            <a href="#contact" className="cta-btn">
              Get Free Audit <span style={{ fontSize: 16 }}>→</span>
            </a>
          </nav>

          {/* Hamburger */}
          <button
            className="hamburger-btn"
            onClick={() => setOpen(!open)}
            style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 4, padding: 4 }}
            aria-label="Toggle menu"
          >
            <span className={`hamburger-bar bar-top${open ? " open" : ""}`} />
            <span className={`hamburger-bar bar-mid${open ? " open" : ""}`} />
            <span className={`hamburger-bar bar-bot${open ? " open" : ""}`} />
          </button>
        </div>
      </header>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{
            position: "fixed", inset: 0,
            background: "rgba(15,23,42,0.45)",
            backdropFilter: "blur(4px)",
            zIndex: 60,
          }}
          className="overlay-enter"
        />
      )}

      {/* Mobile Drawer */}
      {open && (
        <div
          className="drawer-enter"
          style={{
            position: "fixed", top: 0, right: 0,
            height: "100%", width: "80%", maxWidth: 320,
            background: "#fff",
            zIndex: 70,
            padding: "28px 24px",
            display: "flex",
            flexDirection: "column",
            boxShadow: "-8px 0 40px rgba(0,0,0,0.12)",
          }}
        >
          {/* Drawer header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
            <span style={{ fontFamily: "'Sora', sans-serif", fontWeight: 800, fontSize: 18, color: "#0f172a" }}>
              ARVEX<span style={{ color: "#6366f1" }}>.</span>
            </span>
            <button
              onClick={() => setOpen(false)}
              style={{ background: "#f1f5f9", border: "none", borderRadius: 10, width: 36, height: 36, cursor: "pointer", fontSize: 16, display: "flex", alignItems: "center", justifyContent: "center" }}
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Links */}
          <div style={{ flex: 1 }}>
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                onClick={() => setOpen(false)}
                className="mobile-link"
              >
                {l}
                <span style={{ fontSize: 14, color: "#cbd5e1" }}>→</span>
              </a>
            ))}
          </div>

          {/* Drawer footer */}
          <div style={{ marginTop: 24, display: "flex", flexDirection: "column", gap: 12 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, background: "#fef3c7", borderRadius: 12, padding: "10px 14px" }}>
              <span style={{ fontSize: 16 }}>⚡</span>
              <span style={{ fontSize: 13, fontWeight: 600, color: "#92400e", fontFamily: "'DM Sans', sans-serif" }}>Only 3 spots left this month</span>
            </div>
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              style={{
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "white",
                borderRadius: 14,
                padding: "14px 20px",
                textAlign: "center",
                fontWeight: 700,
                fontSize: 15,
                textDecoration: "none",
                fontFamily: "'DM Sans', sans-serif",
                boxShadow: "0 6px 20px #6366f135",
              }}
            >
              Get Free Audit →
            </a>
          </div>
        </div>
      )}
    </>
  );
}