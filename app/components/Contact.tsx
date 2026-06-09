"use client";

// ── Replace these with your real details ──
const WHATSAPP_NUMBER = "918073803181"; // e.g. 919876543210
const EMAIL = "aftabnadeemnp@outlook.com";
const LINKEDIN = "https://www.linkedin.com/in/aftab-nadeem-b42772256";
const GITHUB = "https://github.com/aftabnadeem";

const links = [
  { label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { label: "LinkedIn", value: "www.linkedin.com/in/aftab-nadeem", href: LINKEDIN },
  { label: "GitHub", value: "github.com/aftabnadeem", href: GITHUB },
  { label: "Location", value: "Bangalore, India · Remote OK", href: undefined },
];

export default function Contact() {
  return (
    <section
      id="contact"
      style={{ padding: "5rem 0", borderBottom: "1px solid var(--border)" }}
    >
      <div
        className="contact-two-col"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left */}
        <div>
          <div
            style={{
              fontFamily: "var(--mono)",
              fontSize: 11,
              color: "var(--accent)",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              marginBottom: "1rem",
            }}
          >
            Contact
          </div>
          <h2
            style={{
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: "1rem",
            }}
          >
            Let&apos;s build
            <br />
            <span style={{ color: "var(--accent)" }}>something</span>
            <br />
            together.
          </h2>
          <p
            style={{
              fontFamily: "var(--mono)",
              fontSize: 12,
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: "2rem",
            }}
          >
            // Open to freelance projects, full-time AI roles,
            <br />
            // and interesting collaborations.
            <br />
            // Bangalore based · available remotely worldwide.
          </p>
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              background: "var(--accent)",
              color: "#000",
              padding: "1rem 1.5rem",
              fontFamily: "var(--mono)",
              fontSize: 12,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              borderRadius: 2,
              textAlign: "center",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) =>
              ((e.target as HTMLElement).style.background = "var(--accent2)")
            }
            onMouseLeave={(e) =>
              ((e.target as HTMLElement).style.background = "var(--accent)")
            }
          >
            💬 WhatsApp Me →
          </a>
        </div>

        {/* Right */}
        <div>
          {links.map((link, i) => (
            <div
              key={link.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "1rem 0",
                borderBottom:
                  i < links.length - 1
                    ? "1px solid var(--border)"
                    : "none",
                cursor: link.href ? "pointer" : "default",
                transition: "color 0.2s",
              }}
              onClick={() => link.href && window.open(link.href, "_blank")}
              onMouseEnter={(e) => {
                if (link.href)
                  (e.currentTarget as HTMLElement).style.color = "var(--text)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "var(--muted)";
              }}
            >
              <div style={{ color: "var(--muted)" }}>
                <div
                  style={{
                    fontFamily: "var(--mono)",
                    fontSize: 10,
                    color: "var(--muted2)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.25rem",
                  }}
                >
                  {link.label}
                </div>
                <div style={{ fontFamily: "var(--mono)", fontSize: 12 }}>
                  {link.value}
                </div>
              </div>
              {link.href && (
                <span style={{ color: "var(--accent)", fontSize: 14 }}>→</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
