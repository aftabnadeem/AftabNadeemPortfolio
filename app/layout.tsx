import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aftab Nadeem — Full Stack & AI Developer | Bangalore",
  description:
    "Full Stack Developer specializing in Django, React, Next.js, FastAPI and AI/LLM integration. Available for freelance projects and full-time roles. Based in Bangalore, India.",
  keywords: [
    "full stack developer bangalore",
    "django developer india",
    "react developer for hire",
    "ai integration developer",
    "next.js developer bangalore",
    "freelance developer india",
    "llm developer",
    "crewai langchain developer",
  ],
  authors: [{ name: "Aftab Nadeem" }],
  creator: "Aftab Nadeem",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://aftabnadeem.dev",
    title: "Aftab Nadeem — Full Stack & AI Developer",
    description:
      "Building intelligent web and mobile applications with Django, React, Next.js and AI/LLM tooling.",
    siteName: "Aftab Nadeem Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aftab Nadeem — Full Stack & AI Developer",
    description:
      "Building intelligent web and mobile applications. Available for freelance.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
