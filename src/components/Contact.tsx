"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "deshmukh.li@northeastern.edu",
    href: "mailto:deshmukh.li@northeastern.edu",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/linata004",
    href: "https://www.linkedin.com/in/linata004",
  },
  {
    label: "GitHub",
    value: "github.com/LinataDeshmukh",
    href: "https://github.com/LinataDeshmukh",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-8">
            Contact
          </h2>

          <h3 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Always happy to
            <br />
            <span className="text-gray-400">talk.</span>
          </h3>

          <p className="text-gray-500 text-base mb-10">
            Ideas, projects, or just saying hi — I&apos;m here for it.
          </p>

          <div className="space-y-4 max-w-md">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("mailto") ? undefined : "_blank"}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.1 + 0.2, duration: 0.4 }}
                className="flex items-center justify-between p-4 bg-gray-900/40 border border-gray-800 rounded-xl hover:border-gray-600 hover:bg-gray-900/70 transition-all group"
              >
                <span className="text-gray-500 text-sm">{link.label}</span>
                <span className="text-gray-300 group-hover:text-blue-400 text-sm transition-colors">
                  {link.value} →
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
