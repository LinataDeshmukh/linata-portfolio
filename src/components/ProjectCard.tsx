import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const visibleTags = project.techStack.slice(0, 6);
  const extraCount = project.techStack.length - visibleTags.length;

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl h-full"
      style={{ background: project.gradient }}
    >
      {/* Fixed-height image */}
      <div className="relative w-full h-52 shrink-0 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        {/* Fade from image into card gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(to bottom, transparent 40%, ${getBottomColor(project.gradient)} 100%)`,
          }}
        />
      </div>

      {/* Content — grows to fill remaining card height */}
      <div className="flex flex-col flex-1 px-6 pb-6 pt-4">
        {/* Badges */}
        <div className="flex items-center gap-2 mb-3 flex-wrap">
          <span className="text-xs font-medium text-blue-300 bg-white/10 border border-white/10 px-2.5 py-1 rounded-full">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-xs font-medium text-yellow-300 bg-yellow-400/10 border border-yellow-400/20 px-2.5 py-1 rounded-full">
              Featured
            </span>
          )}
        </div>

        <h2 className="text-base font-semibold text-white mb-2 group-hover:text-blue-200 transition-colors line-clamp-2">
          {project.title}
        </h2>

        {/* Description grows to push tech stack to the bottom */}
        <p className="text-white/50 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
          {project.description}
        </p>

        {/* Tech stack pinned to the bottom */}
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {visibleTags.map((tag) => (
            <span
              key={tag}
              className="text-xs text-white/60 bg-white/10 border border-white/10 px-2.5 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
          {extraCount > 0 && (
            <span className="text-xs text-white/40 bg-white/5 px-2.5 py-1 rounded-md">
              +{extraCount} more
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

/**
 * Extract the last color stop from a CSS linear-gradient string
 * so the image can fade seamlessly into the card background.
 */
function getBottomColor(gradient: string): string {
  const match = gradient.match(/#[0-9a-fA-F]{6}(?=\s+100%)/);
  return match ? match[0] : "#000000";
}
