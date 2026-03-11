import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects — Linata Deshmukh",
  description:
    "A collection of data platforms, analytics solutions, and intelligent systems built by Linata Deshmukh.",
};

export default function ProjectsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Page header */}
      <section className="py-16 border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6">
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1 mb-8"
          >
            ← Back to Home
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Projects
          </h1>
          <p className="text-gray-400 text-base max-w-xl">
            A collection of data platforms, analytics solutions, and intelligent
            systems I&apos;ve built.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
