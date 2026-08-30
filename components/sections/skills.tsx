"use client";

import { motion } from "framer-motion";
import {
  Atom, Box, Braces, ChartPie, Code, Container, Database, Flame,
  GitBranch, Hexagon, Leaf, Rocket, Triangle, Wind,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { skills, skillDomains, workingStrengths } from "@/content/skills";
import { sectionNumber } from "@/content/sections";
import { DomainBars } from "@/components/charts/domain-bars";

const ICONS: Record<string, LucideIcon> = {
  Atom, Triangle, Braces, Wind, Box, Hexagon, Code, Rocket,
  Leaf, Database, ChartPie, Container, Flame, GitBranch,
};

export function Skills() {
  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 max-w-[62ch] lg:mb-12"
      >
        <motion.p
          variants={fadeUp}
          className="mono-label text-xs uppercase text-[color:var(--graphite)]"
        >
          {`${sectionNumber("skills")} — Skills & technology`}
        </motion.p>
        <motion.h2
          id="skills-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          The tools, by layer.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[56ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)]"
        >
          Grouped by where each one sits in a system. No proficiency bars —
          those numbers would be made up, and a layer tells you more than a
          percentage does.
        </motion.p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-[1.35fr_0.65fr]">
        {/* ── Icon grid, grouped by domain ─────────────────────── */}
        <div className="min-w-0 space-y-4">
          {skillDomains.map((domain) => {
            const group = skills.filter((s) => s.domain === domain);
            return (
              <motion.div
                key={domain}
                initial="hidden"
                whileInView="visible"
                viewport={viewportConfig}
                variants={staggerContainer}
                className="surface-card rounded-[var(--radius-lg)] p-5 sm:p-6"
              >
                <div className="mb-4 flex items-baseline justify-between gap-3">
                  <motion.h3
                    variants={fadeUp}
                    className="text-[0.95rem] font-semibold text-[color:var(--ink)]"
                  >
                    {domain}
                  </motion.h3>
                  <motion.span
                    variants={fadeUp}
                    className="mono-label text-[11px] tabular-nums text-[color:var(--graphite)]"
                  >
                    {group.length}
                  </motion.span>
                </div>

                <motion.ul
                  variants={staggerContainer}
                  className="grid grid-cols-[repeat(auto-fit,minmax(104px,1fr))] gap-2"
                >
                  {group.map((skill) => {
                    const Icon = ICONS[skill.icon];
                    return (
                      <motion.li key={skill.name} variants={fadeUp}>
                        <div className="group flex h-full flex-col items-center gap-2.5 rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--bg-sunken)] px-2 py-4 text-center transition-[transform,border-color,background-color] duration-400 hover:-translate-y-1 hover:border-[color:var(--accent-line)] hover:bg-[color:var(--surface)]">
                          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink-soft)] transition-[transform,color,background-color] duration-400 group-hover:scale-105 group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent)]">
                            {Icon ? <Icon size={16} aria-hidden="true" /> : null}
                          </span>
                          <span className="w-full truncate text-[0.78rem] font-medium text-[color:var(--ink)]">
                            {skill.name}
                          </span>
                        </div>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </motion.div>
            );
          })}
        </div>

        {/* ── Distribution detail ──────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="surface-card h-fit rounded-[var(--radius-lg)] p-5 sm:p-6 lg:sticky lg:top-28"
        >
          <h3 className="mb-5 text-[0.95rem] font-semibold text-[color:var(--ink)]">
            Distribution
          </h3>
          <DomainBars />
          <p className="mt-6 border-t border-[color:var(--line)] pt-4 text-[0.78rem] leading-relaxed text-[color:var(--graphite)]">
            Counts of listed technologies per layer. Hover a row to see them.
          </p>
        </motion.div>
      </div>

      {/* ── Working strengths ─────────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
        className="surface-card mt-4 rounded-[var(--radius-lg)] p-5 sm:p-7"
      >
        <div className="mb-4 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-[0.95rem] font-semibold text-[color:var(--ink)]">
            Working strengths
          </h3>
          <span className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
            Traits, not ratings
          </span>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {workingStrengths.map((strength) => (
            <li
              key={strength}
              className="mono-label rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[10px] uppercase text-[color:var(--ink-soft)] transition-colors duration-300 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
            >
              {strength}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
