"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Reporting & Visualization",
    skills: ["Power BI", "Power Query", "Tableau", "Excel (Advanced)", "DAX"],
  },
  {
    title: "Languages & Querying",
    skills: ["SQL (Advanced)", "Python", "pandas", "NumPy", "matplotlib", "seaborn"],
  },
  {
    title: "Data Engineering",
    skills: [
      "Talend",
      "Alteryx",
      "Snowflake",
      "dbt",
      "Apache Airflow",
      "PySpark",
      "Microsoft Fabric",
      "Docker",
      "MySQL",
      "Medallion Architecture",
    ],
  },
  {
    title: "AI & GenAI Tools",
    skills: [
      "LangChain",
      "OpenAI",
      "Pinecone",
      "Streamlit",
      "RAG Pipelines",
      "scikit-learn",
    ],
  },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-10">
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-gray-900/40 border border-gray-800 rounded-2xl p-6"
              >
                <h3 className="text-sm font-semibold text-gray-300 mb-4">
                  {cat.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs text-gray-400 bg-gray-800 hover:bg-gray-700 hover:text-gray-200 transition-colors px-3 py-1.5 rounded-lg cursor-default"
                    >
                      {skill}
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
