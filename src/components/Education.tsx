"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const educationData = [
  {
    school: "Northeastern University",
    location: "Boston, MA",
    degree: "Master of Science in Information Systems",
    period: "Sep 2023 – Dec 2025",
    gpa: "3.7",
    specializations: [
      "Business Intelligence",
      "Data Management",
      "Advanced Analytics",
    ],
  },
  {
    school: "Pune University",
    location: "Pune, India",
    degree: "Bachelor of Engineering in Computer Engineering",
    period: "Oct 2013 – May 2017",
    gpa: "3.6",
    specializations: [],
  },
];

export default function Education() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-10">
            Education
          </h2>

          <div className="space-y-6">
            {educationData.map((edu, i) => (
              <motion.div
                key={edu.school}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6 sm:p-8 hover:border-gray-700 transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {edu.school}
                    </h3>
                    <p className="text-gray-400 text-sm mt-0.5">{edu.degree}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-gray-500 text-sm">{edu.location}</span>
                    <p className="text-gray-600 text-xs mt-0.5">{edu.period}</p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 mt-4">
                  <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-3 py-1 rounded-full text-xs font-medium">
                    GPA {edu.gpa}
                  </span>
                  {edu.specializations.map((s) => (
                    <span
                      key={s}
                      className="bg-gray-800 text-gray-400 px-3 py-1 rounded-full text-xs"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
