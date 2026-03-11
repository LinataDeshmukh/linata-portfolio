"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

/* ─── Journey data — chronological order (oldest → newest) ──────── */
const journey = [
  {
    side: "left" as const,
    type: "edu",
    org: "Savitribai Phule Pune University",
    location: "Pune, India",
    role: "Bachelor of Engineering",
    sub: "Computer Engineering · GPA 3.6",
    period: "Oct 2013",
    periodEnd: "May 2017",
    logo: "/images/logos/pune_university.png",
    color: "#7c3aed", // purple
  },
  {
    side: "right" as const,
    type: "work",
    org: "Accenture",
    location: "India",
    role: "Data Engineer / Analyst",
    sub: "ETL pipelines · 1M+ records · Insurance analytics",
    period: "Dec 2017",
    periodEnd: "Jun 2023",
    logo: "/images/logos/accenture.png",
    color: "#2563eb", // blue
  },
  {
    side: "left" as const,
    type: "edu",
    org: "Northeastern University",
    location: "Boston, MA",
    role: "Master of Science",
    sub: "Information Systems · GPA 3.7",
    period: "Sep 2023",
    periodEnd: "Dec 2025",
    logo: "/images/logos/neu.png",
    color: "#c8102e", // NU red
  },
  {
    side: "right" as const,
    type: "work",
    org: "Virtual, Inc.",
    location: "Boston, MA",
    role: "Data Engineer",
    sub: "Co-op during MS · Microsoft Fabric · PySpark",
    period: "Jan 2025",
    periodEnd: "Aug 2025",
    logo: "/images/logos/virtual_inc.png",
    color: "#0891b2", // teal
  },
];

/* ─── Main component ─────────────────────────────────────────────── */
export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 border-t border-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-sm font-semibold text-blue-400 tracking-widest uppercase mb-8">
            About
          </h2>

          {/* ── Bio ── */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">
            <div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                Give me a problem.
                <br />
                <span className="text-gray-400">
                  I&apos;ll hand you back a solution.
                </span>
              </h3>
              <div className="space-y-3 text-gray-400 text-sm leading-relaxed">
                <p>
                  I&apos;m a Data Analyst and Data Engineer with 5+ years of
                  experience transforming raw data into actionable insights. I
                  love solving problems and building end-to-end data solutions —
                  from ETL pipelines to interactive dashboards.
                </p>
                <p>
                  At Virtual, Inc., I reduced data integrity errors by{" "}
                  <span className="text-white font-semibold">40%</span> through
                  PySpark validation and improved analytics reliability by{" "}
                  <span className="text-white font-semibold">30%</span> across
                  Microsoft Fabric. At Accenture, I built Talend ETL pipelines
                  processing{" "}
                  <span className="text-white font-semibold">1M+ records</span>{" "}
                  and designed star schema warehouses for insurance analytics.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 content-start">
              {[
                { value: "5+", label: "Years of Experience" },
                { value: "1M+", label: "Records Processed" },
                { value: "40%", label: "Error Reduction" },
                { value: "6+", label: "Data Projects" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-gray-900/60 border border-gray-800 rounded-xl p-4"
                >
                  <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                  <p className="text-gray-500 text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Center-spine timeline ── */}
          <div>
            <p className="text-center text-sm text-gray-500 mb-10 tracking-widest uppercase">
              My Journey
            </p>

            <div className="relative">
              {/* Gradient vertical spine */}
              <div
                className="absolute left-1/2 -translate-x-1/2 w-0.5 top-0 bottom-0"
                style={{
                  background:
                    "linear-gradient(to bottom, #7c3aed, #2563eb, #c8102e, #0891b2)",
                }}
              />

              <div className="flex flex-col gap-0">
                {journey.map((item, i) => (
                  <motion.div
                    key={item.org + item.period}
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: i * 0.18 + 0.3, duration: 0.5 }}
                    className={`relative flex items-center gap-0 ${
                      i < journey.length - 1 ? "mb-10" : ""
                    }`}
                  >
                    {/* ── LEFT SIDE ── */}
                    <div className="flex-1 flex justify-end pr-6">
                      {item.side === "left" ? (
                        <TimelineCard item={item} align="right" />
                      ) : (
                        /* Date label on the empty side */
                        <div className="text-right">
                          <p className="text-xs text-gray-600 tabular-nums">
                            {item.period}
                          </p>
                          <p className="text-xs text-gray-700 tabular-nums">
                            – {item.periodEnd}
                          </p>
                        </div>
                      )}
                    </div>

                    {/* ── Center dot ── */}
                    <div
                      className="relative z-10 shrink-0 w-4 h-4 rounded-full border-2 border-black shadow-lg"
                      style={{ backgroundColor: item.color }}
                    />

                    {/* ── RIGHT SIDE ── */}
                    <div className="flex-1 flex justify-start pl-6">
                      {item.side === "right" ? (
                        <TimelineCard item={item} align="left" />
                      ) : (
                        /* Date label on the empty side */
                        <div className="text-left">
                          <p className="text-xs text-gray-600 tabular-nums">
                            {item.period}
                          </p>
                          <p className="text-xs text-gray-700 tabular-nums">
                            – {item.periodEnd}
                          </p>
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                {/* ── End cap ── */}
                <div className="relative flex justify-center mt-2">
                  <div className="z-10 w-3 h-3 rounded-full bg-gray-600 border-2 border-black" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Timeline card ──────────────────────────────────────────────── */
type JourneyItem = {
  type: string;
  org: string;
  location: string;
  role: string;
  sub: string;
  period: string;
  periodEnd: string;
  logo: string;
  color: string;
};

function TimelineCard({
  item,
  align,
}: {
  item: JourneyItem;
  align: "left" | "right";
}) {
  return (
    <div
      className={`flex items-center gap-3 bg-gray-900/70 border border-gray-800 rounded-xl px-4 py-3 max-w-xs w-full hover:border-gray-600 transition-colors ${
        align === "right" ? "flex-row-reverse text-right" : "flex-row text-left"
      }`}
    >
      {/* Logo */}
      <div className="shrink-0 w-12 h-12 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-1.5 overflow-hidden">
        <Image
          src={item.logo}
          alt={item.org}
          width={40}
          height={40}
          className="object-contain w-full h-full"
        />
      </div>

      {/* Text */}
      <div className="flex-1 min-w-0">
        <p className="text-white text-xs font-semibold leading-tight truncate">
          {item.role}
        </p>
        <p className="text-gray-400 text-xs mt-0.5 truncate">{item.org}</p>
        <p className="text-gray-600 text-xs mt-0.5 truncate">{item.sub}</p>
        <div className="flex items-center gap-1 mt-1.5 flex-wrap">
          <span
            className="text-xs font-medium px-1.5 py-0.5 rounded-full"
            style={{
              backgroundColor: `${item.color}18`,
              color: item.color,
              border: `1px solid ${item.color}30`,
            }}
          >
            {item.type === "work" ? "Work" : "Education"}
          </span>
          <span className="text-gray-700 text-xs tabular-nums">
            {item.period} – {item.periodEnd}
          </span>
        </div>
      </div>
    </div>
  );
}
