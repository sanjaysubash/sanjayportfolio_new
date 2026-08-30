"use client";

import { motion } from "framer-motion";
import {
  ArrowRightLeft,
  Boxes,
  Compass,
  FlaskConical,
  Network,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { capabilities } from "@/content/professionalWork";
import { sectionNumber } from "@/content/sections";

const icons: Record<string, LucideIcon> = {
  Boxes,
  Network,
  Workflow,
  Compass,
  FlaskConical,
  ArrowRightLeft,
};

export function BeyondDevelopment() {
  return (
    <section
      id="capabilities"
      aria-label="Beyond Development"
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
          {sectionNumber("capabilities")} — Beyond Development
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.02]"
        >
          Beyond Development
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[54ch] text-[1.02rem] leading-relaxed text-[color:var(--ink-soft)]"
        >
          I worked across products, technology, engineering systems, and
          long-term technical planning.
        </motion.p>
      </motion.div>

      {/* A shared-hairline matrix, deliberately unlike the floating cards in
          the Expertise section — these are practices, not domains. */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="grid gap-px overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--line)] sm:grid-cols-2 sm:rounded-[var(--radius-lg)] lg:grid-cols-3"
      >
        {capabilities.map((capability) => {
          const Icon = icons[capability.icon];
          return (
            <motion.li
              key={capability.title}
              variants={fadeUp}
              className="group flex flex-col bg-[color:var(--surface)] p-7 transition-colors duration-300 hover:bg-[color:var(--bg-sunken)] md:p-9"
            >
              <div className="flex items-center justify-between gap-4">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] text-[color:var(--ink-soft)] transition-colors duration-300 group-hover:border-[color:var(--accent-line)] group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent)]">
                  {Icon ? <Icon size={18} aria-hidden="true" /> : null}
                </span>
                <span className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
                  {capability.index}
                </span>
              </div>

              <h3 className="editorial-title mt-7 text-xl text-[color:var(--ink)]">
                {capability.title}
              </h3>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-[color:var(--ink-soft)]">
                {capability.description}
              </p>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
