"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, type Variants, useMotionValue, useSpring, animate } from "framer-motion";
import { useState, useEffect } from "react";

/* ── Tech logos ─────────────────────────────────────────────────── */
const techLogos = [
  { name: "Python",         src: "/images/tech/python.svg" },
  { name: "SQL / MySQL",    src: "/images/tech/mysql.svg" },
  { name: "pandas",         src: "/images/tech/pandas.svg" },
  { name: "NumPy",          src: "/images/tech/numpy.svg" },
  { name: "Power BI",       src: "/images/tech/powerbi.svg" },
  { name: "Tableau",        src: "/images/tech/tableau.svg" },
  { name: "Snowflake",      src: "/images/tech/snowflake.svg" },
  { name: "dbt",            src: "/images/tech/dbt.svg" },
  { name: "Apache Airflow", src: "/images/tech/airflow.svg" },
  { name: "Alteryx",        src: "/images/tech/alteryx.svg" },
  { name: "PySpark",        src: "/images/tech/apachespark.svg" },
  { name: "Azure",          src: "/images/tech/azure.svg" },
  { name: "Docker",         src: "/images/tech/docker.svg" },
  { name: "scikit-learn",   src: "/images/tech/scikitlearn.svg" },
  { name: "OpenAI",         src: "/images/tech/openai.svg" },
  { name: "LangChain",      src: "/images/tech/langchain.svg" },
  { name: "Pinecone",       src: "/images/tech/pinecone.svg" },
  { name: "Streamlit",      src: "/images/tech/streamlit.svg" },
];

/* ── Roles that cycle in the typewriter ────────────────────────── */
const roles = ["Data Analyst", "Data Engineer", "AI Builder", "Problem Solver"];

/* ── Stats that count up ────────────────────────────────────────── */
const stats = [
  { label: "Records Processed", value: 500, suffix: "K+" },
  { label: "Years Experience",  value: 5,   suffix: "+" },
  { label: "Projects Shipped",  value: 5,   suffix: "" },
  { label: "GPA (MS @ NEU)",    value: 3.7, suffix: "" },
];

/* ── Animation variants ──────────────────────────────────────────── */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.12, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

/* ── Animated counter ────────────────────────────────────────────── */
function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const controls = animate(0, target, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(parseFloat(v.toFixed(1))),
    });
    return controls.stop;
  }, [target]);

  return (
    <span>
      {display % 1 === 0 ? Math.round(display) : display}
      {suffix}
    </span>
  );
}

/* ── Typewriter ───────────────────────────────────────────────────── */
function Typewriter() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const full = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < full.length) {
      timeout = setTimeout(() => setDisplayed(full.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === full.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((i) => (i + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  return (
    <span className="text-blue-400">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

/* ── Main Component ──────────────────────────────────────────────── */
export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">

      {/* Ambient background glow orbs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-600/8 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-16">

          {/* ── Left: Text ─────────────────────────────────────────── */}
          <div className="flex-1 max-w-xl">

            {/* Available badge */}
            <motion.div custom={0} variants={fadeUp} initial="hidden" animate="show" className="mb-4">
              <span className="inline-flex items-center gap-2 text-xs text-green-400 bg-green-400/10 border border-green-400/20 px-3 py-1.5 rounded-full font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Available for full-time roles
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              custom={1} variants={fadeUp} initial="hidden" animate="show"
              className="text-5xl sm:text-6xl font-bold text-white mb-3 tracking-tight"
            >
              Linata{" "}
              <span className="text-blue-400">Deshmukh</span>
            </motion.h1>

            {/* Typewriter role */}
            <motion.p
              custom={2} variants={fadeUp} initial="hidden" animate="show"
              className="text-gray-300 text-xl mb-4 font-medium h-8"
            >
              <Typewriter />
            </motion.p>

            {/* Creative tagline */}
            <motion.div
              custom={3} variants={fadeUp} initial="hidden" animate="show"
              className="mb-5"
            >
              <p className="text-sm font-semibold tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400">
                From raw data to boardroom insights.
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              custom={4} variants={fadeUp} initial="hidden" animate="show"
              className="text-gray-400 text-base leading-relaxed mb-8"
            >
              I own the <span className="text-white font-medium">pipeline</span>,
              the <span className="text-white font-medium">infrastructure</span>,
              and the <span className="text-white font-medium">product</span>.
              I turn complex, messy datasets into decisions that move businesses forward.
              I love solving problems — the harder, the better.
            </motion.p>

            {/* CTAs + Social */}
            <motion.div
              custom={5} variants={fadeUp} initial="hidden" animate="show"
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-medium px-6 py-3 rounded-lg transition-all hover:shadow-lg hover:shadow-blue-500/25"
              >
                View My Work →
              </Link>
              <Link
                href="/#contact"
                className="inline-flex items-center gap-2 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-white font-medium px-6 py-3 rounded-lg transition-all"
              >
                Let&apos;s Talk
              </Link>

              <div className="flex items-center gap-3 ml-1">
                <a href="https://github.com/LinataDeshmukh" target="_blank" rel="noopener noreferrer"
                  aria-label="GitHub" className="text-gray-500 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.82-.26.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.825.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/linata004" target="_blank" rel="noopener noreferrer"
                  aria-label="LinkedIn" className="text-gray-500 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="mailto:deshmukh.li@northeastern.edu"
                  aria-label="Email" className="text-gray-500 hover:text-white transition-colors">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Animated stat counters */}
            <motion.div
              custom={6} variants={fadeUp} initial="hidden" animate="show"
              className="grid grid-cols-4 gap-3"
            >
              {stats.map((s) => (
                <div key={s.label} className="flex flex-col items-center bg-white/[0.03] border border-white/[0.06] rounded-xl py-3 px-2">
                  <span className="text-xl font-bold text-white tabular-nums">
                    <Counter target={s.value} suffix={s.suffix} />
                  </span>
                  <span className="text-gray-600 text-xs text-center mt-0.5 leading-tight">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── Right: Photo + tech logos ───────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center gap-4 md:mr-12"
          >
            {/* Glowing ring around photo */}
            <div className="relative">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-blue-500/30 via-purple-500/20 to-cyan-500/30 blur-md" />
              <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl bg-gray-900">
                {!imgError ? (
                  <Image
                    src="/images/profile-photo.jpg"
                    alt="Linata Deshmukh"
                    fill
                    className="object-cover"
                    priority
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-900/40 to-gray-900">
                    <span className="text-5xl md:text-6xl font-bold text-blue-400 select-none">LD</span>
                  </div>
                )}
              </div>
            </div>

            {/* Tech stack logos */}
            <div className="w-72 md:w-80">
              <p className="text-gray-600 text-xs text-center mb-2 tracking-widest uppercase">
                Tech Stack
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                {techLogos.map((t) => (
                  <div
                    key={t.name}
                    title={t.name}
                    className="w-8 h-8 rounded-lg bg-gray-900 border border-gray-800 hover:border-blue-500/50 flex items-center justify-center p-1.5 transition-all hover:scale-110 hover:bg-gray-800 cursor-default"
                  >
                    <Image src={t.src} alt={t.name} width={20} height={20} className="object-contain w-full h-full" />
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
