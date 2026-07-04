"use client";

import useScrollReveal from "@/hooks/useScrollReveal";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Resume from "@/components/Resume";
import Blog from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  useScrollReveal();
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Blog />
      </main>
      <Footer />
    </>
  );
}
