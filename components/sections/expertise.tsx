"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  ChartNoAxesColumn,
  Cloud,
  PenTool,
  Server,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { expertise } from "@/content/expertise";
import { sectionNumber } from "@/content/sections";

const ICONS: LucideIcon[] = [
  Boxes,
  Server,
  BrainCircuit,
  ChartNoAxesColumn,
  PenTool,
  Cloud,
];

export function Expertise() {
  return (
    <section
      id="expertise"
      aria-labelledby="expertise-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 max-w-[60ch] lg:mb-14"
      >
        <motion.p
          variants={fadeUp}
          className="mono-label text-xs uppercase text-[color:var(--graphite)]"
        >
          {sectionNumber("expertise")} — Expertise
        </motion.p>
        <motion.h2
          id="expertise-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          What I build, not what I know.
        </motion.h2>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
      >
        {expertise.map((card, i) => {
          const Icon = ICONS[i % ICONS.length];
          return (
            <motion.li key={card.title} variants={fadeUp}>
              <article className="spotlight-card group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-[color:var(--surface)] p-6 transition-[transform,border-color,box-shadow] duration-400 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 hover:border-[color:var(--accent-line)] hover:shadow-[var(--shadow-lift)] md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] text-[color:var(--ink-soft)] transition-[transform,color,background-color,border-color] duration-400 group-hover:-translate-y-0.5 group-hover:border-[color:var(--accent-line)] group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent)]">
                    <Icon size={17} aria-hidden="true" />
                  </span>
                  <span className="mono-label text-[11px] text-[color:var(--graphite)]">
                    {card.index}
                  </span>
                </div>

                <h3 className="editorial-title mt-6 text-[1.15rem] text-[color:var(--ink)]">
                  {card.title}
                </h3>
                <p className="mt-2.5 text-[0.92rem] leading-relaxed text-[color:var(--graphite)] transition-colors duration-400 group-hover:text-[color:var(--ink-soft)]">
                  {card.description}
                </p>

                <ArrowUpRight
                  size={16}
                  aria-hidden="true"
                  className="mt-6 text-[color:var(--line-strong)] transition-[transform,color] duration-400 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--accent)]"
                />
              </article>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
