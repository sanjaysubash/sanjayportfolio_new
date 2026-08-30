"use client";

import { motion } from "framer-motion";
import { Briefcase, Compass, MapPin, UserRound } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { aboutFacts, aboutStory } from "@/content/about";
import { sectionNumber } from "@/content/sections";

const FACT_ICONS: Record<string, LucideIcon> = {
  Role: UserRound,
  "Most recently": Briefcase,
  "Based in": MapPin,
  Specialization: Compass,
};

export function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="section-shell section-gap"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16"
      >
        <div className="min-w-0">
          <motion.p
            variants={fadeUp}
            className="mono-label text-xs uppercase text-[color:var(--graphite)]"
          >
            {sectionNumber("about")} — About
          </motion.p>

          <motion.h2
            id="about-heading"
            variants={fadeUp}
            className="editorial-title mt-5 max-w-[20ch] text-[clamp(1.9rem,4.6vw,3.1rem)] leading-[1.06] text-[color:var(--ink)]"
          >
            I build systems that solve real problems.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-8 space-y-5">
            {aboutStory.map((paragraph, index) => (
              <p
                key={index}
                className="max-w-[62ch] text-[0.99rem] leading-relaxed text-[color:var(--ink-soft)]"
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>

        {/* Personal information card */}
        <motion.aside
          variants={fadeUp}
          aria-label="Personal details"
          className="surface-card h-fit rounded-[var(--radius-lg)] p-6 md:p-7 lg:sticky lg:top-28"
        >
          <div className="mb-6 flex items-center gap-2.5 border-b border-[color:var(--line)] pb-5">
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[color:var(--accent)]" />
            </span>
            <span className="mono-label text-[11px] uppercase text-[color:var(--ink)]">
              Available for work
            </span>
          </div>

          <dl className="space-y-5">
            {aboutFacts.map((fact) => {
              const Icon = FACT_ICONS[fact.label] ?? Compass;
              return (
                <div
                  key={fact.label}
                  className="flex gap-3.5 border-b border-[color:var(--line)] pb-5 last:border-0 last:pb-0"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] text-[color:var(--graphite)]">
                    <Icon size={14} aria-hidden="true" />
                  </span>
                  <div className="min-w-0">
                    <dt className="mono-label text-[10px] uppercase text-[color:var(--graphite)]">
                      {fact.label}
                    </dt>
                    <dd className="mt-1 text-[0.95rem] leading-snug text-[color:var(--ink)]">
                      {fact.value}
                    </dd>
                  </div>
                </div>
              );
            })}
          </dl>
        </motion.aside>
      </motion.div>
    </section>
  );
}
