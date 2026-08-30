// ═══════════════════════════════════════════════════════════════════
// DERIVED METRICS — every value below is COUNTED from data that already
// exists in this repository. Nothing is estimated, projected, weighted
// or invented, and no proficiency percentages are claimed anywhere,
// because no such data exists.
//
// If you add a project, system or workstream elsewhere in /content, the
// charts here update themselves.
// ═══════════════════════════════════════════════════════════════════

import { additionalSystems } from "./additionalSystems";
import { experience } from "./experience";
import { expertise } from "./expertise";
import { engagements } from "./professionalWork";
import { projects } from "./projects";
import { techStack } from "./techStack";
import { credentials } from "./certifications";
import { achievements } from "./achievements";
import { skills, skillDomains } from "./skills";

/* ── Technology distribution ──────────────────────────────────────
   Derived straight from skills.ts, so the grouping can never drift out
   of sync with the technology list. Bar values are counts of real
   entries — not skill levels, which the résumé does not state. */
export type TechDomain = { domain: string; items: string[] };

export const techDomains: TechDomain[] = skillDomains.map((domain) => ({
  domain,
  items: skills.filter((s) => s.domain === domain).map((s) => s.name),
}));

// Guard: the grouping must account for every technology listed, no more
// and no less. Surfaces drift at build time rather than shipping a lie.
const grouped = techDomains.flatMap((d) => d.items);
export const techGroupingIsComplete =
  grouped.length === techStack.length &&
  techStack.every((t) => grouped.includes(t));

/* ── Delivery status of the products & systems contributed to ──────
   Counted directly from the workstreams declared in professionalWork.ts. */
export type StatusSlice = { label: string; count: number; tone: string };

const allWorkstreams = engagements.flatMap((e) => e.workstreams);

export const deliveryStatus: StatusSlice[] = [
  {
    label: "Completed",
    count: allWorkstreams.filter((w) => w.tone === "complete").length,
    tone: "complete",
  },
  {
    label: "Advanced to delivery",
    count: allWorkstreams.filter((w) => w.tone === "delivered").length,
    tone: "delivered",
  },
  {
    label: "Contributed",
    count: allWorkstreams.filter((w) => w.tone === "active").length,
    tone: "active",
  },
  {
    label: "Paused",
    count: allWorkstreams.filter((w) => w.tone === "paused").length,
    tone: "paused",
  },
].filter((s) => s.count > 0);

export const totalWorkstreams = allWorkstreams.length;

/* ── Contribution areas ───────────────────────────────────────────
   Presented as capability categories, NOT percentages — the repository
   holds no weighting data and none is invented. */
export const contributionAreas = Array.from(
  new Set(
    engagements
      .filter((e) => e.tagsLabel === "Contribution areas")
      .flatMap((e) => e.tags)
  )
);

/* ── Headline counters ────────────────────────────────────────────
   Plain counts of entries that exist on this site. Labels say exactly
   what is being counted so no number can be read as a business metric. */
export type Counter = { value: number; suffix?: string; label: string; note: string };

const firstYear = Number(experience[0].year);
const lastYear = Number(experience[experience.length - 1].year);

export const counters: Counter[] = [
  {
    value: projects.length,
    label: "Featured case studies",
    note: "Documented in depth on this site",
  },
  {
    value: totalWorkstreams,
    label: "Products & systems",
    note: "Contributed to across three engagements",
  },
  {
    value: additionalSystems.length,
    label: "Additional systems",
    note: "Shipped alongside the featured work",
  },
  {
    value: lastYear - firstYear,
    label: "Years building",
    note: `${firstYear} — ${lastYear}`,
  },
  {
    value: achievements.length,
    label: "Awards & recognition",
    note: "Competitions, academic, NCC and sport",
  },
  {
    value: credentials.length,
    label: "Workshops & courses",
    note: "IIT Madras, DRDO, NCSR and others",
  },
];

/* ── Scope per engagement ─────────────────────────────────────────
   Two comparable counts per engagement, both plain counts of entries
   declared in professionalWork.ts. Lumivex genuinely records no separate
   workstreams — that zero is shown rather than hidden. */
export type EngagementScope = {
  company: string;
  workstreams: number;
  contributions: number;
};

export const engagementScope: EngagementScope[] = engagements.map((e) => ({
  company: e.company,
  workstreams: e.workstreams.length,
  contributions: e.responsibilities.length,
}));

/* ── Milestones ───────────────────────────────────────────────────
   Straight from experience.ts, one node per recorded year. */
export const milestones = experience.map((e) => ({
  year: e.year,
  title: e.title,
}));

export const domainCount = expertise.length;
export const technologyCount = techStack.length;
