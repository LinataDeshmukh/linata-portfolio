import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { projects, getProjectBySlug } from "@/data/projects";

// Statically pre-render all project pages at build time
export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} — Linata Deshmukh`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen pt-16">
      {/* Header nav */}
      <div className="border-b border-gray-900">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/projects"
            className="text-sm text-gray-500 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
          >
            ← All Projects
          </Link>
          <Link
            href="/"
            className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
        </div>
      </div>

      {/* Hero — background tinted with the project's image gradient */}
      <section
        className="py-14"
        style={{
          background: `${project.gradient}`,
          borderBottom: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-2 mb-6">
            <span className="text-xs font-medium text-blue-400 bg-blue-400/10 border border-blue-400/20 px-3 py-1 rounded-full">
              {project.category}
            </span>
            {project.featured && (
              <span className="text-xs font-medium text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1 rounded-full">
                Featured
              </span>
            )}
            <span className="text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1 rounded-full">
              Completed
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {project.title}
          </h1>

          <p className="text-gray-400 text-base mb-6">{project.date}</p>

          <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mb-8">
            {project.description}
          </p>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              GitHub
            </a>
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 19H5V5h7V3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z" />
                </svg>
                Live Demo
              </a>
            )}
          </div>
        </div>
      </section>

      {/* Main image */}
      <section className="pb-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative w-full h-64 sm:h-96 rounded-2xl overflow-hidden bg-gray-800 ring-1 ring-gray-700">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1200px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* Detail sections */}
      <section className="pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {/* Overview */}
            <div className="lg:col-span-2 bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                </div>
                <h2 className="text-base font-semibold text-white">Overview</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.overview}</p>
            </div>

            {/* Technologies */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#a78bfa" strokeWidth="2">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                </div>
                <h2 className="text-base font-semibold text-white">Technologies</h2>
              </div>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-gray-300 bg-gray-800 border border-gray-700 px-3 py-1.5 rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Challenge */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="2">
                    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                </div>
                <h2 className="text-base font-semibold text-white">Challenge</h2>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{project.challenge}</p>
            </div>

            {/* Impact */}
            <div className="bg-gray-900/40 border border-gray-800 rounded-2xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#4ade80" strokeWidth="2">
                    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
                    <polyline points="16 7 22 7 22 13" />
                  </svg>
                </div>
                <h2 className="text-base font-semibold text-white">Impact</h2>
              </div>
              <ul className="space-y-2.5">
                {project.impact.map((point) => (
                  <li key={point} className="flex items-start gap-2.5">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-green-400 shrink-0" />
                    <span className="text-gray-400 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
