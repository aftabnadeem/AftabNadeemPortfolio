"use client";
const stack = [
  { cat: "Frontend", name: "React" },
  { cat: "Frontend", name: "Next.js" },
  { cat: "Mobile", name: "React Native" },
  { cat: "Backend", name: "Django" },
  { cat: "Backend", name: "FastAPI" },
  { cat: "Backend", name: "Spring Boot" },
  { cat: "Language", name: "TypeScript" },
  { cat: "Language", name: "Python" },
  { cat: "Database", name: "PostgreSQL" },
  { cat: "Database", name: "Supabase" },
  { cat: "AI / LLM", name: "Gemini 2.5 Flash" },
  { cat: "AI / LLM", name: "LangChain" },
  { cat: "AI / LLM", name: "CrewAI" },
  { cat: "AI / LLM", name: "Fine-tuning" },
  { cat: "Vector DB", name: "pgvector" },
  { cat: "DevOps", name: "Docker" },
  { cat: "Deploy", name: "Vercel" },
  { cat: "Deploy", name: "Linux / Cron" },
];

export default function Stack() {
  return (
    <section
      id="stack"
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
        Technical Stack
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        What I{" "}
        <span style={{ color: "var(--muted2)" }}>Build With</span>
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
          gap: "0.6rem",
        }}
      >
        {stack.map((item) => (
          <div
            key={item.name}
            style={{
              background: "var(--bg2)",
              border: "1px solid var(--border)",
              padding: "0.875rem 1rem",
              borderRadius: 3,
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--muted)",
              transition: "all 0.2s",
              cursor: "default",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--accent)";
              el.style.color = "var(--accent)";
              el.style.background = "rgba(232,255,71,0.04)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget;
              el.style.borderColor = "var(--border)";
              el.style.color = "var(--muted)";
              el.style.background = "var(--bg2)";
            }}
          >
            <span
              style={{
                display: "block",
                fontSize: 10,
                color: "var(--muted2)",
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "0.3rem",
              }}
            >
              {item.cat}
            </span>
            {item.name}
          </div>
        ))}
      </div>
    </section>
  );
}
