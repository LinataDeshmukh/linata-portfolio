import type { Metadata } from "next";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import ProjectsPreview from "@/components/ProjectsPreview";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Linata Deshmukh — Data Analyst & Data Engineer",
  description:
    "Portfolio of Linata Deshmukh. I love solving problems. Raw data in. Actionable insights out.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <ProjectsPreview />
      <Education />
      <Skills />
      <Contact />
    </>
  );
}
