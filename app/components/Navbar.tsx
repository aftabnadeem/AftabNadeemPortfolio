"use client";
import { useState, useEffect } from "react";

const navLinks = ["stack", "projects", "services", "contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav
        style={{
          position: "sticky",
          top: 0,
          zIndex: 100,
          background: scrolled || menuOpen ? "rgba(9,9,9,0.97)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          padding: "1.1rem 0",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <div style={{ fontFamily: "var(--mono)", fontSize: 13, color: "var(--accent)", letterSpacing: "0.05em" }}>
            <span style={{ color: "var(--muted)" }}>~/</span>aftab
            <span style={{ color: "var(--muted)" }}>.dev</span>
          </div>

          {/* Desktop links */}
          <div className="nav-links-desktop" style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "var(--mono)", fontSize: 11, color: "var(--muted)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  background: "none", border: "none", cursor: "pointer", transition: "color 0.2s",
                }}
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--text)")}
                onMouseLeave={(e) => ((e.target as HTMLElement).style.color = "var(--muted)")}
              >
                {id}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontFamily: "var(--mono)", fontSize: 11, background: "var(--accent)",
                color: "#000", padding: "0.45rem 1.1rem", borderRadius: 2,
                fontWeight: 700, letterSpacing: "0.06em", border: "none", cursor: "pointer",
              }}
            >
              Hire Me →
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              background: "none",
              border: "1px solid var(--border2)",
              color: "var(--text)",
              padding: "0.4rem 0.7rem",
              borderRadius: 2,
              cursor: "pointer",
              fontFamily: "var(--mono)",
              fontSize: 12,
              letterSpacing: "0.05em",
            }}
            className="mobile-menu-btn"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div
            style={{
              background: "var(--bg2)",
              borderTop: "1px solid var(--border)",
              padding: "1rem 2rem",
              display: "flex",
              flexDirection: "column",
              gap: "0",
            }}
          >
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                style={{
                  fontFamily: "var(--mono)", fontSize: 12, color: "var(--muted)",
                  letterSpacing: "0.1em", textTransform: "uppercase",
                  background: "none", border: "none", borderBottom: "1px solid var(--border)",
                  cursor: "pointer", padding: "0.9rem 0", textAlign: "left",
                }}
              >
                {id}
              </button>
            ))}
            <button
              onClick={() => scrollTo("contact")}
              style={{
                fontFamily: "var(--mono)", fontSize: 12, background: "var(--accent)",
                color: "#000", padding: "0.75rem", borderRadius: 2,
                fontWeight: 700, letterSpacing: "0.06em", border: "none",
                cursor: "pointer", marginTop: "1rem",
              }}
            >
              Hire Me →
            </button>
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </>
  );
}
