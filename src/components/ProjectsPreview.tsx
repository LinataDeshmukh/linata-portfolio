"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Show first 4 projects on the home page
  const preview = projects.slice(0, 4);

  return (
    <section id="projects" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-end justify-between mb-4">
            <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase">
              Projects
            </h2>
            <Link
              href="/projects"
              className="text-sm text-gray-500 hover:text-blue-400 transition-colors"
            >
              View all →
            </Link>
          </div>

          <p className="text-gray-500 text-sm mb-10">
            Data-driven solutions that solve real business problems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
            {preview.map((project, i) => (
              <motion.div
                key={project.slug}
                className="h-full"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 border border-gray-700 hover:border-blue-500 text-gray-300 hover:text-blue-400 px-6 py-3 rounded-lg text-sm font-medium transition-all"
            >
              View All Projects →
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
