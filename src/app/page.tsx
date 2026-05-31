"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, MapPin } from "lucide-react";
import { personal } from "@/data/content";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.21, 0.47, 0.32, 0.98] } },
};

export default function HomePage() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-600/10" />
        <div className="absolute -right-32 bottom-1/4 h-96 w-96 rounded-full bg-violet-500/10 blur-3xl dark:bg-violet-600/10" />
      </div>

      <div className="section w-full pt-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.div variants={item} className="mb-5 flex items-center gap-2">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_2px_rgba(52,211,153,0.5)]" />
            <span className="text-sm text-[rgb(var(--muted))]">
              Open to opportunities · Starting at UCLA Fall 2026
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Hey, I&apos;m{" "}
            <span className="gradient-text">{personal.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mb-4 text-lg font-medium text-[rgb(var(--muted))] md:text-xl"
          >
            {personal.tagline}
          </motion.p>

          <motion.p
            variants={item}
            className="mb-10 max-w-2xl text-base leading-relaxed text-[rgb(var(--muted))] md:text-lg"
          >
            {personal.bio}
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap items-center gap-3"
          >
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-500/25 transition-all hover:bg-indigo-400 hover:shadow-indigo-400/30 hover:-translate-y-0.5"
            >
              View Projects <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] px-5 py-2.5 text-sm font-semibold transition-all hover:border-indigo-500/40 hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-12 flex flex-wrap items-center gap-5 text-sm text-[rgb(var(--muted))]"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {personal.location}
            </span>
            <Link
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[rgb(var(--fg))] transition-colors"
            >
              <Github size={14} /> PrestonJacks0n
            </Link>
            <Link
              href={personal.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-[rgb(var(--fg))] transition-colors"
            >
              <Linkedin size={14} /> prestoj24
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
