"use client";

import { motion } from "framer-motion";
import { Activity, Lightbulb, Rocket, Shield, Star, Trophy, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { achievements } from "@/content/achievements";
import { sectionNumber } from "@/content/sections";
import { AwardsByYear } from "@/components/charts/awards-by-year";

const ICONS: Record<string, LucideIcon> = {
  Rocket, Lightbulb, Shield, Users, Trophy, Star, Activity,
};

// "Winner" reads in accent; everything else stays neutral so a selection or
// a participation can never be mistaken for a win.
const OUTCOME_STYLE: Record<string, string> = {
  win: "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]",
  recognition: "border-[color:var(--line)] text-[color:var(--graphite)]",
  selection: "status-dashed text-[color:var(--graphite)]",
};

export function Achievements() {
  const wins = achievements.filter((a) => a.outcome === "win").length;

  return (
    <section
      id="achievements"
      aria-labelledby="achievements-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 grid gap-8 lg:mb-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-14"
      >
        <div className="min-w-0">
          <motion.p
            variants={fadeUp}
            className="mono-label text-xs uppercase text-[color:var(--graphite)]"
          >
            {`${sectionNumber("achievements")} — Awards & recognition`}
          </motion.p>
          <motion.h2
            id="achievements-heading"
            variants={fadeUp}
            className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
          >
            Competed, and placed.
          </motion.h2>
        </div>
        <motion.p
          variants={fadeUp}
          className="max-w-[52ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)] lg:pb-2"
        >
          {wins} outright wins across startup pitching, competitive coding and
          cryptic problem-solving, alongside academic, NCC and national sporting
          recognition. Where an entry was a selection rather than a win, it says
          so.
        </motion.p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-[1fr_20rem]">
        <motion.ul
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="hairline-grid grid overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] sm:grid-cols-2"
        >
          {achievements.map((item) => {
            const Icon = ICONS[item.icon];
            return (
              <motion.li
                key={`${item.year}-${item.title}`}
                variants={fadeUp}
                className="group flex min-w-0 flex-col bg-[color:var(--surface)] p-5 transition-colors duration-400 hover:bg-[color:var(--surface-2)] md:p-6"
              >
                <div className="flex items-start justify-between gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] text-[color:var(--ink-soft)] transition-[transform,color,background-color,border-color] duration-400 group-hover:-translate-y-0.5 group-hover:border-[color:var(--accent-line)] group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent)]">
                    {Icon ? <Icon size={16} aria-hidden="true" /> : null}
                  </span>
                  <span
                    className={`mono-label shrink-0 rounded-full border px-2.5 py-1 text-[10px] uppercase ${
                      OUTCOME_STYLE[item.outcome]
                    }`}
                  >
                    {item.outcome === "win"
                      ? "Winner"
                      : item.outcome === "selection"
                        ? "Selected"
                        : "Awarded"}
                  </span>
                </div>

                <h3 className="mt-5 text-[1rem] font-semibold leading-snug text-[color:var(--ink)]">
                  {item.title}
                </h3>
                {item.detail && (
                  <p className="mt-1.5 text-[0.86rem] leading-relaxed text-[color:var(--graphite)]">
                    {item.detail}
                  </p>
                )}

                <p className="mono-label mt-auto flex items-center gap-2 pt-4 text-[10px] uppercase text-[color:var(--graphite)]">
                  <span className="tabular-nums text-[color:var(--ink-soft)]">
                    {item.year}
                  </span>
                  <span aria-hidden="true">·</span>
                  {item.category}
                </p>
              </motion.li>
            );
          })}
        </motion.ul>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={fadeUp}
          className="surface-card h-fit rounded-[var(--radius-lg)] p-5 sm:p-6 lg:sticky lg:top-28"
        >
          <h3 className="mb-6 text-[0.95rem] font-semibold text-[color:var(--ink)]">
            Recognition by year
          </h3>
          <AwardsByYear />
          <p className="mt-6 border-t border-[color:var(--line)] pt-4 text-[0.78rem] leading-relaxed text-[color:var(--graphite)]">
            Counted from the entries listed here — {achievements.length} in
            total.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
