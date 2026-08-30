"use client";

import { motion } from "framer-motion";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowRightLeft,
  ArrowUpRight,
  CircleCheck,
  CirclePause,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfigTall } from "@/animations";
import type { Engagement, WorkstreamStatus } from "@/content/professionalWork";

type PillTone = WorkstreamStatus | "past" | "accent";

const toneStyles: Record<PillTone, string> = {
  complete:
    "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]",
  delivered:
    "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]",
  active:
    "border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--graphite)]",
  paused: "status-dashed text-[color:var(--graphite)]",
  past: "border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink-soft)]",
  accent:
    "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]",
};

// Icons carry meaning here, so they are only attached where the status
// genuinely means "finished", "moving", or "stopped". Neutral statuses get a
// dot instead of a checkmark they haven't earned.
const toneIcon: Record<PillTone, LucideIcon | null> = {
  complete: CircleCheck,
  delivered: ArrowRight,
  active: null,
  paused: CirclePause,
  past: null,
  accent: null,
};

function StatusPill({ tone, label }: { tone: PillTone; label: string }) {
  const Icon = toneIcon[tone];
  return (
    <span
      className={`mono-label inline-flex w-fit shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[10px] uppercase ${toneStyles[tone]}`}
    >
      {Icon ? (
        <Icon size={12} aria-hidden="true" />
      ) : (
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-current opacity-60"
        />
      )}
      {label}
    </span>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mono-label mb-5 flex items-center gap-3 text-[11px] uppercase text-[color:var(--graphite)]">
      {children}
      <span aria-hidden="true" className="h-px flex-1 bg-[color:var(--line)]" />
    </p>
  );
}

export function EngagementBlock({ engagement }: { engagement: Engagement }) {
  const {
    id,
    index,
    kicker,
    company,
    status,
    past,
    period,
    roleLabel,
    role,
    positioning,
    summary,
    workstreams,
    responsibilities,
    tagsLabel,
    tags,
    impact,
    handover,
    caseStudyRef,
    links,
  } = engagement;

  const headingId = `engagement-${id}`;
  const headerTone: PillTone = past
    ? "past"
    : status.toLowerCase().includes("completed")
      ? "complete"
      : "accent";

  return (
    <motion.article
      id={id}
      aria-labelledby={headingId}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigTall}
      variants={staggerContainer}
      className="surface-card overflow-hidden rounded-[var(--radius-lg)] transition-shadow duration-500 hover:shadow-[var(--shadow-lift)] sm:rounded-[var(--radius-xl)]"
    >
      {/* ── Identity band ─────────────────────────────────────────── */}
      <header className="border-b border-[color:var(--line)] bg-[color:var(--bg-sunken)] px-5 py-8 sm:px-8 sm:py-10 md:px-12">
        <motion.div
          variants={fadeUp}
          className="flex flex-wrap items-center justify-between gap-3"
        >
          <span className="mono-label text-xs uppercase text-[color:var(--graphite)]">
            {index} — {kicker}
          </span>
          <StatusPill tone={headerTone} label={status} />
        </motion.div>

        <motion.h3
          variants={fadeUp}
          id={headingId}
          className="editorial-title mt-6 text-[clamp(2.1rem,7vw,4rem)] leading-[0.95] tracking-[-0.05em] text-[color:var(--ink)]"
        >
          {company}
        </motion.h3>

        <motion.p
          variants={fadeUp}
          className="mt-3 max-w-[46ch] text-[1.02rem] leading-snug text-[color:var(--ink-soft)] sm:text-[1.15rem]"
        >
          {positioning}
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="mono-label mt-7 flex flex-wrap items-center gap-x-3 gap-y-2 text-[11px] uppercase text-[color:var(--graphite)]"
        >
          <span>
            <span className="text-[color:var(--ink-soft)]">{roleLabel}</span>{" "}
            {role}
          </span>
          {period && (
            <>
              <span aria-hidden="true">·</span>
              <span>{period}</span>
            </>
          )}
          {links?.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-1 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3.5 normal-case text-[color:var(--ink-soft)] transition-colors duration-300 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
            >
              {link.label}
              <ArrowUpRight size={12} aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </header>

      <div className="px-5 py-9 sm:px-8 sm:py-11 md:px-12">
        <motion.p
          variants={fadeUp}
          className="max-w-[64ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)]"
        >
          {summary}
        </motion.p>

        {/* ── Products & systems ──────────────────────────────────── */}
        {workstreams.length > 0 && (
          <motion.div variants={fadeUp} className="mt-11">
            <SectionLabel>Products &amp; Systems</SectionLabel>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {workstreams.map((stream) => (
                <div
                  key={stream.name}
                  className="flex h-full flex-col rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--bg-sunken)] p-5 transition-colors duration-300 hover:border-[color:var(--accent-line)]"
                >
                  {/* Status leads the card so it reads at a glance and every
                      card aligns, regardless of how long the label is. */}
                  <StatusPill tone={stream.tone} label={stream.status} />

                  <h4 className="mt-3.5 text-[1.05rem] font-semibold text-[color:var(--ink)]">
                    {stream.name}
                  </h4>

                  <p className="mt-2.5 text-[0.92rem] leading-relaxed text-[color:var(--ink-soft)]">
                    {stream.summary}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-[0.88rem] leading-relaxed text-[color:var(--graphite)]">
                    {stream.points.map((point) => (
                      <li key={point} className="flex gap-2">
                        <span aria-hidden="true" className="select-none">
                          —
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  {stream.note && (
                    <div className="mt-auto pt-5">
                      <p className="status-dashed rounded-[var(--radius-sm)] px-3.5 py-3 text-[0.82rem] leading-relaxed text-[color:var(--graphite)]">
                        {stream.note}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* ── Technical contribution ──────────────────────────────── */}
        <motion.div variants={fadeUp} className="mt-11">
          <SectionLabel>Technical Contribution</SectionLabel>
          <ol className="border-t border-[color:var(--line)]">
            {responsibilities.map((item, i) => (
              <li
                key={item.title}
                className="grid gap-2 border-b border-[color:var(--line)] py-6 md:grid-cols-[7rem_1fr] md:gap-10"
              >
                <span className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h4 className="editorial-title text-lg text-[color:var(--ink)]">
                    {item.title}
                  </h4>
                  <p className="mt-2 max-w-[62ch] text-[0.95rem] leading-relaxed text-[color:var(--ink-soft)]">
                    {item.detail}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>

        {/* ── Handover ────────────────────────────────────────────── */}
        {handover && (
          <motion.div
            variants={fadeUp}
            className="mt-9 rounded-[var(--radius-md)] border border-[color:var(--accent-line)] bg-[color:var(--accent-soft)] p-5 sm:p-7"
          >
            <div className="flex items-start gap-4">
              <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[color:var(--accent-line)] bg-[color:var(--surface)] text-[color:var(--accent)]">
                <ArrowRightLeft size={17} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="mono-label text-[11px] uppercase text-[color:var(--accent)]">
                  {handover.title}
                </p>
                <p className="mt-2 max-w-[58ch] text-[0.98rem] leading-relaxed text-[color:var(--ink-soft)]">
                  {handover.detail}
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {handover.covered.map((entry) => (
                    <li
                      key={entry}
                      className="mono-label inline-flex items-center gap-1.5 rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 text-[10px] uppercase text-[color:var(--ink-soft)]"
                    >
                      <CircleCheck
                        size={11}
                        aria-hidden="true"
                        className="text-[color:var(--accent)]"
                      />
                      {entry}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── Featured case study cross-reference ─────────────────── */}
        {caseStudyRef && (
          <motion.a
            variants={fadeUp}
            href={caseStudyRef.href}
            className="group mt-6 flex items-center justify-between gap-4 rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--bg-sunken)] px-5 py-4 transition-colors duration-300 hover:border-[color:var(--accent-line)]"
          >
            <span className="min-w-0">
              <span className="mono-label block text-[10px] uppercase text-[color:var(--graphite)]">
                Featured case study
              </span>
              <span className="mt-1.5 block text-[0.98rem] font-semibold text-[color:var(--ink)]">
                {caseStudyRef.label}
              </span>
              <span className="mt-1 block text-[0.85rem] leading-relaxed text-[color:var(--graphite)]">
                {caseStudyRef.note}
              </span>
            </span>
            <ArrowDownRight
              size={18}
              aria-hidden="true"
              className="shrink-0 text-[color:var(--graphite)] transition-all duration-300 group-hover:translate-y-0.5 group-hover:text-[color:var(--accent)]"
            />
          </motion.a>
        )}

        {/* ── Tags + impact ───────────────────────────────────────── */}
        <motion.div
          variants={fadeUp}
          className="mt-10 grid gap-8 border-t border-[color:var(--line)] pt-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12"
        >
          <div>
            <p className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
              {tagsLabel}
            </p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => (
                <li
                  key={tag}
                  className="mono-label rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[11px] uppercase text-[color:var(--ink-soft)]"
                >
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          <div className="border-l-2 border-[color:var(--accent-line)] pl-5">
            <p className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
              Impact
            </p>
            <p className="mt-2 text-[0.98rem] leading-relaxed text-[color:var(--ink)]">
              {impact}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.article>
  );
}
