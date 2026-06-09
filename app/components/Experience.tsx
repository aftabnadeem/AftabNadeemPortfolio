"use client";
const experience = [
  {
    period: "2023 — Present",
    company: "Pegasus Consulting",
    role: "Full Stack Developer",
    desc: "// Building client-facing web applications and internal tools. React frontends, Django backends, REST APIs, careers portals with email-based application flows, and production deployments.",
  },
  {
    period: "Freelance",
    company: "Independent Projects",
    role: "Developer & Consultant",
    desc: "// E Commerce product site, corporate portals, AI research tooling, task management platforms. End-to-end ownership from architecture to deployment.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
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
        Experience
      </div>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: 800,
          letterSpacing: "-0.02em",
          marginBottom: "2.5rem",
        }}
      >
        Where I&apos;ve <span style={{ color: "var(--muted2)" }}>Worked</span>
      </h2>

      <div>
        {experience.map((e, i) => (
          <div
            key={e.company}
            className="exp-two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "160px 1fr",
              gap: "2rem",
              padding: "1.75rem 0",
              borderBottom:
                i < experience.length - 1
                  ? "1px solid var(--border)"
                  : "none",
            }}
          >
            <div
              className="exp-date-col"
              style={{
                fontFamily: "var(--mono)",
                fontSize: 11,
                color: "var(--muted)",
                letterSpacing: "0.05em",
                paddingTop: "0.2rem",
              }}
            >
              {e.period}
            </div>
            <div>
              <div
                style={{
                  fontSize: "1rem",
                  fontWeight: 700,
                  marginBottom: "0.2rem",
                }}
              >
                {e.company}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 11,
                  color: "var(--accent)",
                  letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  marginBottom: "0.6rem",
                }}
              >
                {e.role}
              </div>
              <div
                style={{
                  fontFamily: "var(--mono)",
                  fontSize: 12,
                  color: "var(--muted)",
                  lineHeight: 1.75,
                }}
              >
                {e.desc}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
