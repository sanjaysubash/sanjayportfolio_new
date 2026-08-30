"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { education } from "@/content/education";
import { sectionNumber } from "@/content/sections";

/**
 * Renders nothing while content/education.ts is empty, so the page never shows
 * a placeholder degree. Add an entry there and the section appears, numbered
 * automatically.
 */
export function Education() {
  if (education.length === 0) return null;

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
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
          {sectionNumber("education")} — Education
        </motion.p>
        <motion.h2
          id="education-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          Where the foundation was built.
        </motion.h2>
      </motion.div>

      <motion.ol
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="flex flex-col gap-3"
      >
        {education.map((entry) => (
          <motion.li key={`${entry.institution}-${entry.period}`} variants={fadeUp}>
            <article className="surface-card group rounded-[var(--radius-lg)] p-6 transition-[transform,border-color,box-shadow] duration-400 hover:-translate-y-0.5 hover:border-[color:var(--accent-line)] hover:shadow-[var(--shadow-soft)] md:p-8">
              <div className="flex flex-col gap-5 md:flex-row md:items-start md:gap-8">
                <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] text-[color:var(--ink-soft)] transition-colors duration-400 group-hover:border-[color:var(--accent-line)] group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent)]">
                  <GraduationCap size={18} aria-hidden="true" />
                </span>

                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
                    <h3 className="editorial-title text-[1.2rem] text-[color:var(--ink)]">
                      {entry.institution}
                    </h3>
                    <span className="mono-label shrink-0 text-[11px] tabular-nums text-[color:var(--graphite)]">
                      {entry.period}
                    </span>
                  </div>

                  <p className="mt-1.5 text-[0.98rem] text-[color:var(--ink-soft)]">
                    {entry.qualification}
                  </p>

                  {entry.location && (
                    <p className="mono-label mt-3 inline-flex items-center gap-1.5 text-[10px] uppercase text-[color:var(--graphite)]">
                      <MapPin size={11} aria-hidden="true" />
                      {entry.location}
                    </p>
                  )}

                  {entry.detail && (
                    <p className="mt-4 max-w-[62ch] text-[0.92rem] leading-relaxed text-[color:var(--graphite)]">
                      {entry.detail}
                    </p>
                  )}

                  {entry.highlights && entry.highlights.length > 0 && (
                    <ul className="mt-5 flex flex-wrap gap-1.5">
                      {entry.highlights.map((h) => (
                        <li
                          key={h}
                          className="mono-label rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] uppercase text-[color:var(--ink-soft)]"
                        >
                          {h}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </article>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  );
}
