"use client";
export default function Footer() {
  return (
    <footer
      style={{
        padding: "2rem 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--muted2)",
        }}
      >
        © {new Date().getFullYear()} Aftab Nadeem · Built with Next.js
      </div>
      <div
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          color: "var(--accent)",
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
        }}
      >
        <span
          style={{
            width: 5,
            height: 5,
            background: "var(--accent)",
            borderRadius: "50%",
            display: "inline-block",
            animation: "pulse 2s infinite",
          }}
        />
        Available for new projects
      </div>
    </footer>
  );
}
