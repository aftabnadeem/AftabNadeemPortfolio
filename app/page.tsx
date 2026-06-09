import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ maxWidth: 1200, margin: "0 auto", padding: "0 2rem" }}>
        <Hero />
        <Stack />
        <Projects />
        <Services />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
