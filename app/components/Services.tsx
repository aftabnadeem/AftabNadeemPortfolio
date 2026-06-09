"use client";
const services = [
  {
    icon: "⚡",
    name: "Landing Page",
    desc: "// Fast, SEO-optimized pages built with Next.js. Pixel-perfect design, mobile-first, Core Web Vitals optimised, deployed in days.",
    price: "From ₹15,000",
  },
  {
    icon: "🚀",
    name: "Web App MVP",
    desc: "// Full stack web applications — React frontend, Django/FastAPI backend, PostgreSQL, auth, REST APIs, and production deployment.",
    price: "From ₹50,000",
  },
  {
    icon: "📱",
    name: "Mobile App",
    desc: "// Cross-platform iOS & Android apps with React Native. Offline support, push notifications, and app store submission.",
    price: "From ₹60,000",
  },
  {
    icon: "🤖",
    name: "AI Integration",
    desc: "// Add LLM-powered features to your product — chatbots, RAG pipelines, autonomous agents, fine-tuning, semantic search.",
    price: "From ₹30,000",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      style={{ padding: "5rem 0", borderBottom: "1px solid var(--border)" }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--accent)",
          letterSpacing: "0.15em",
          textTransform: "uppercase",
          marginBottom: "0.75rem",
        }}
      >
        What I Offer
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        Services <span style={{ color: "var(--muted2)" }}>&amp; Pricing</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {services.map((s) => (
          <div
            key={s.name}
            style={{
              background: "var(--bg)",
              padding: "2rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            <div style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>
              {s.icon}
            </div>
            <div
              style={{
                fontSize: "1rem",
                fontWeight: 700,
                marginBottom: "0.5rem",
                letterSpacing: "-0.01em",
              }}
            >
              {s.name}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--muted)",
                lineHeight: 1.75,
                marginBottom: "1.5rem",
              }}
            >
              {s.desc}
            </div>
            <div
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--accent)",
                letterSpacing: "0.03em",
              }}
            >
              {s.price}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
