"use client";
import Image from "next/image";

const stats = [
  { num: "2+", label: "Years Experience" },
  { num: "10+", label: "Projects Shipped" },
  { num: "5+", label: "Tech Domains" },
  { num: "12h", label: "Response Time" },
];

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ padding: "5rem 0 4rem", borderBottom: "1px solid var(--border)" }}
    >
      {/* Two column layout */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "3rem",
          alignItems: "flex-start",
          marginBottom: "3rem",
        }}
        className="hero-grid"
      >
        {/* Left — text */}
        <div>
          {/* Available tag */}
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1.5rem",
              display: "flex",
              alignItems: "center",
              gap: "0.6rem",
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                background: "var(--accent)",
                borderRadius: "50%",
                display: "inline-block",
                animation: "pulse 2s infinite",
                flexShrink: 0,
              }}
            />
            Available for freelance &amp; full-time
          </div>

          {/* Headline */}
          <h1
            style={{
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              marginBottom: "1.5rem",
            }}
          >
            Full Stack
            <br />
            <span style={{ color: "var(--muted)" }}>&amp; </span>
            <span style={{ color: "var(--accent)" }}>AI</span> Developer
            <span style={{ color: "var(--muted)" }}>.</span>
          </h1>

          {/* Subtext */}
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--muted)",
              maxWidth: 480,
              lineHeight: 1.9,
              marginBottom: "2.5rem",
            }}
          >
            // Django · React · Next.js · FastAPI · LLM/AI
            <br />
            // Bangalore, India · Remote friendly
          </p>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <button
              onClick={() =>
                document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "var(--accent)",
                color: "#000",
                padding: "0.8rem 1.8rem",
                fontFamily: "var(--mono)",
                fontSize: 12,
                fontWeight: 700,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 2,
                border: "none",
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = "var(--accent2)";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = "var(--accent)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              View Projects →
            </button>
            <button
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              style={{
                background: "transparent",
                color: "var(--text)",
                padding: "0.8rem 1.8rem",
                fontFamily: "var(--mono)",
                fontSize: 12,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                borderRadius: 2,
                border: "1px solid var(--border2)",
                cursor: "pointer",
                transition: "all 0.2s",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = "var(--muted)";
                (e.target as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = "var(--border2)";
                (e.target as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get In Touch
            </button>
          </div>
        </div>

        {/* Right — photo */}
        <div className="hero-photo-wrap">
          <div style={{ position: "relative", width: 200, height: 200 }}>

            {/* Rotating dashed ring */}
            <div style={{
              position: "absolute", inset: -8,
              borderRadius: "50%",
              border: "1px dashed var(--accent)",
              opacity: 0.4,
              animation: "spin 12s linear infinite",
            }} />

            {/* Static accent ring */}
            <div style={{
              position: "absolute", inset: -16,
              borderRadius: "50%",
              border: "1px solid var(--border2)",
            }} />

            {/* Accent dot orbiting */}
            <div style={{
              position: "absolute", inset: -8,
              borderRadius: "50%",
              animation: "spin 12s linear infinite",
            }}>
              <div style={{
                position: "absolute", top: "50%", right: -4,
                width: 7, height: 7,
                background: "var(--accent)",
                borderRadius: "50%",
                transform: "translateY(-50%)",
              }} />
            </div>

            {/* Photo circle */}
            <div style={{
              width: 200, height: 200,
              borderRadius: "50%",
              background: "var(--bg2)",
              border: "1px solid var(--border2)",
              overflow: "hidden",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "0.5rem",
              position: "relative",
              zIndex: 1,
            }}>
              <Image
                src="/portfolio.jpeg"          
                alt="Aftab Nadeem"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>

          </div>
        </div>
      </div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          gap: "2.5rem",
          paddingTop: "3rem",
          borderTop: "1px solid var(--border)",
          flexWrap: "wrap",
        }}
      >
        {stats.map((s) => (
          <div key={s.label}>
            <div style={{ fontSize: "2rem", fontWeight: 800, letterSpacing: "-0.02em" }}>
              {s.num}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--muted)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginTop: "0.2rem",
              }}
            >
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
