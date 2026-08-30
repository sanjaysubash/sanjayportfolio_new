"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Database, GitBranch, Layers, Sparkles } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { counters, contributionAreas } from "@/content/metrics";
import { sectionNumber } from "@/content/sections";
import { CountUp } from "@/components/ui/count-up";
import { TechDonut } from "@/components/charts/tech-donut";
import { EngagementColumns } from "@/components/charts/engagement-columns";
import { MilestoneTrack } from "@/components/charts/milestone-track";
import { DeliveryStatus } from "@/components/charts/delivery-status";

const COUNTER_ICONS = [Layers, GitBranch, Database, Sparkles, Award, BadgeCheck];

function Panel({
  title,
  meta,
  footnote,
  children,
  className = "",
}: {
  title: string;
  meta?: string;
  footnote?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={fadeUp}
      className={`surface-card flex flex-col rounded-[var(--radius-lg)] p-6 md:p-7 ${className}`}
    >
      <div className="mb-6 flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="text-base font-semibold text-[color:var(--ink)]">{title}</h3>
        {meta && (
          <span className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
            {meta}
          </span>
        )}
      </div>
      {children}
      {footnote && (
        <p className="mt-auto border-t border-[color:var(--line)] pt-4 text-[0.78rem] leading-relaxed text-[color:var(--graphite)] [margin-top:1.5rem]">
          {footnote}
        </p>
      )}
    </motion.div>
  );
}

export function Metrics() {
  return (
    <section
      id="metrics"
      aria-labelledby="metrics-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 max-w-[62ch] lg:mb-14"
      >
        <motion.p
          variants={fadeUp}
          className="mono-label text-xs uppercase text-[color:var(--graphite)]"
        >
          {sectionNumber("metrics")} — Engineering at a glance
        </motion.p>
        <motion.h2
          id="metrics-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          The work, counted honestly.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[58ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)]"
        >
          Every figure here is a count of something documented on this site —
          case studies, systems, technologies, engagements. No proficiency
          scores, no business metrics, nothing estimated.
        </motion.p>
      </motion.div>

      {/* ── Counters ─────────────────────────────────────────────── */}
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="hairline-grid grid overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] sm:grid-cols-2 lg:grid-cols-3"
      >
        {counters.map((counter, i) => {
          const Icon = COUNTER_ICONS[i % COUNTER_ICONS.length];
          return (
            <motion.li
              key={counter.label}
              variants={fadeUp}
              className="group bg-[color:var(--surface)] p-6 transition-colors duration-300 hover:bg-[color:var(--surface-2)] md:p-7"
            >
              <Icon
                size={16}
                aria-hidden="true"
                className="text-[color:var(--graphite)] transition-colors duration-300 group-hover:text-[color:var(--accent)]"
              />
              <p className="editorial-title mt-5 text-[clamp(2rem,4vw,2.9rem)] leading-none tabular-nums text-[color:var(--ink)]">
                <CountUp value={counter.value} suffix={counter.suffix} />
              </p>
              <p className="mt-3 text-[0.92rem] font-medium text-[color:var(--ink)]">
                {counter.label}
              </p>
              <p className="mt-1 text-[0.82rem] leading-relaxed text-[color:var(--graphite)]">
                {counter.note}
              </p>
            </motion.li>
          );
        })}
      </motion.ul>

      {/* ── Row 1: share + scope ─────────────────────────────────── */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel
          title="Technology share"
          meta="by layer"
          footnote="Share of the technologies listed on this site, by the layer each sits in. Counts, not proficiency."
        >
          <TechDonut />
        </Panel>

        <Panel
          title="Scope per engagement"
          meta="recorded entries"
          footnote="Lumivex records no separate workstreams — that zero is shown rather than hidden."
        >
          <EngagementColumns />
        </Panel>
      </div>

      {/* ── Row 2: status + milestones ───────────────────────────── */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <Panel
          title="Products &amp; systems contributed to"
          footnote="Counted from the workstreams recorded against each engagement."
        >
          <DeliveryStatus />
        </Panel>

        <Panel
          title="Milestones"
          meta="2022 — 2026"
          footnote="One node per year recorded in the journey. Select a node to read it."
        >
          <MilestoneTrack />
        </Panel>
      </div>

      {/* ── Contribution areas ───────────────────────────────────── */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
        className="surface-card mt-4 rounded-[var(--radius-lg)] p-6 md:p-8"
      >
        <div className="mb-5 flex flex-wrap items-baseline justify-between gap-2">
          <h3 className="text-base font-semibold text-[color:var(--ink)]">
            Contribution areas
          </h3>
          <span className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
            {contributionAreas.length} categories
          </span>
        </div>
        <ul className="flex flex-wrap gap-1.5">
          {contributionAreas.map((area) => (
            <li
              key={area}
              className="mono-label rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[10px] uppercase text-[color:var(--ink-soft)] transition-colors duration-300 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="mt-5 border-t border-[color:var(--line)] pt-4 text-[0.8rem] leading-relaxed text-[color:var(--graphite)]">
          Shown as categories rather than percentages — the weighting data
          doesn&apos;t exist, so none is implied.
        </p>
      </motion.div>
    </section>
  );
}
