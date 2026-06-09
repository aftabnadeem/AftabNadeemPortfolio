"use client";
const projects = [
  {
    num: "01",
    name: "AI Research Intelligence Platform",
    desc: "Multi-agent research platform that autonomously crawls, embeds, and synthesizes academic content using vector search and LLM reasoning chains. Zero-cost dev setup with local sentence-transformers.",
    tags: [
      { label: "CrewAI", type: "ai" },
      { label: "LangChain", type: "ai" },
      { label: "Gemini 2.5 Flash", type: "ai" },
      { label: "pgvector", type: "default" },
      { label: "FastAPI", type: "default" },
      { label: "Next.js", type: "default" },
      { label: "Docker", type: "default" },
    ],
    live: "#",
    github: "#",
  },
  {
    num: "02",
    name: "PitchOS — Mobile Sales CRM",
    desc: "Production mobile CRM for field sales teams. Offline-first architecture with real-time sync, pipeline tracking, automated deadline notifications and proof-of-work file uploads.",
    tags: [
      { label: "React Native", type: "accent" },
      { label: "Django", type: "default" },
      { label: "PostgreSQL", type: "default" },
      { label: "REST API", type: "default" },
      { label: "Push Notifications", type: "default" },
    ],
    live: "#",
    github: "#",
  },
  {
    num: "03",
    name: "IssueHub — Project Management",
    desc: "Jira alternative built for lean teams. Kanban boards, sprint planning, time tracking with Monday-only edit windows, and real-time updates via Supabase subscriptions.",
    tags: [
      { label: "React", type: "accent" },
      { label: "Django", type: "default" },
      { label: "TypeScript", type: "default" },
      { label: "Supabase", type: "default" },
      { label: "Real-time", type: "default" },
    ],
    live: "#",
    github: "#",
  },
  {
    num: "04",
    name: "Pegasus Consulting — Corporate Site",
    desc: "Full corporate website with dynamic careers page, job listings, email-based application flow, hero image carousel, toast notifications, and SEO-optimised single-page architecture.",
    tags: [
      { label: "React", type: "accent" },
      { label: "Django", type: "default" },
      { label: "Email Integration", type: "default" },
      { label: "SEO", type: "default" },
    ],
    live: "#",
    github: undefined,
  },
];

const tagStyles: Record<string, React.CSSProperties> = {
  ai: {
    color: "var(--cyan)",
    borderColor: "rgba(71,255,232,0.25)",
    background: "rgba(71,255,232,0.05)",
  },
  accent: {
    color: "var(--accent)",
    borderColor: "rgba(232,255,71,0.25)",
    background: "rgba(232,255,71,0.05)",
  },
  default: {
    color: "var(--muted2)",
    borderColor: "var(--border)",
    background: "var(--bg3)",
  },
};

export default function Projects() {
  return (
    <section
      id="projects"
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
        Selected Work
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        Projects <span style={{ color: "var(--muted2)" }}>I&apos;ve Built</span>
      </h2>

      <div
        style={{
          display: "grid",
          gap: "1px",
          background: "var(--border)",
          border: "1px solid var(--border)",
        }}
      >
        {projects.map((p) => (
          <div
            key={p.num}
            style={{
              background: "var(--bg)",
              padding: "2rem",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background =
                "var(--bg2)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "var(--bg)")
            }
          >
            {/* Header row */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                marginBottom: "1rem",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--muted2)",
                  letterSpacing: "0.1em",
                }}
              >
                {p.num}
              </span>
              <div style={{ display: "flex", gap: "0.6rem" }}>
                {p.live && (
                  <a
                    href={p.live}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--muted)",
                      border: "1px solid var(--border2)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: 2,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--accent)";
                      (e.target as HTMLElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--muted)";
                      (e.target as HTMLElement).style.borderColor =
                        "var(--border2)";
                    }}
                  >
                    Live ↗
                  </a>
                )}
                {p.github && (
                  <a
                    href={p.github}
                    style={{
                      fontFamily: "var(--mono)",
                      fontSize: 10,
                      color: "var(--muted)",
                      border: "1px solid var(--border2)",
                      padding: "0.25rem 0.6rem",
                      borderRadius: 2,
                      letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.color = "var(--accent)";
                      (e.target as HTMLElement).style.borderColor =
                        "var(--accent)";
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.color = "var(--muted)";
                      (e.target as HTMLElement).style.borderColor =
                        "var(--border2)";
                    }}
                  >
                    GitHub ↗
                  </a>
                )}
              </div>
            </div>

            <h3
              style={{
                fontSize: "1.35rem",
                fontWeight: 700,
                letterSpacing: "-0.02em",
                marginBottom: "0.5rem",
              }}
            >
              {p.name}
            </h3>
            <p
              style={{
                fontFamily: "var(--mono)",
                fontSize: 12,
                color: "var(--muted)",
                lineHeight: 1.75,
                marginBottom: "1.25rem",
                maxWidth: 680,
              }}
            >
              {p.desc}
            </p>

            {/* Tags */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
              {p.tags.map((t) => (
                <span
                  key={t.label}
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    padding: "0.2rem 0.55rem",
                    borderRadius: 2,
                    border: "1px solid",
                    textTransform: "uppercase",
                    letterSpacing: "0.05em",
                    ...tagStyles[t.type],
                  }}
                >
                  {t.label}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
