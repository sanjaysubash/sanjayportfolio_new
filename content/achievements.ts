// ═══════════════════════════════════════════════════════════════════
// AWARDS & RECOGNITION — taken verbatim in substance from the résumé.
//
// Nothing is upgraded: SIH 2024 is recorded as waitlisted, not as a win,
// and no prize values, ranks or team sizes are added where the source
// doesn't state them.
//
// Delivery outcomes (systems completed, handover) deliberately live in the
// Professional Experience section instead, so nothing is said twice.
// ═══════════════════════════════════════════════════════════════════

export type Achievement = {
  year: string;
  title: string;
  category: string;
  detail?: string;
  icon: string;
  /** Recorded outcome — "win" is only used where the source says winner. */
  outcome: "win" | "recognition" | "selection";
};

export const achievements: Achievement[] = [
  {
    year: "2024",
    title: "Startup TN Pitch — Winner",
    category: "Startup",
    detail: "Winner of the Startup TN 2024 pitch.",
    icon: "Rocket",
    outcome: "win",
  },
  {
    year: "2024",
    title: "Smart India Hackathon — Waitlisted",
    category: "Hackathon",
    detail: "Reached the waitlist for SIH 2024.",
    icon: "Lightbulb",
    outcome: "selection",
  },
  {
    year: "2024",
    title: "NCC 'B' Certificate — A grade",
    category: "NCC",
    icon: "Shield",
    outcome: "recognition",
  },
  {
    year: "2024",
    title: "NCC Thal Sena Camp — Lead",
    category: "Leadership",
    icon: "Users",
    outcome: "recognition",
  },
  {
    year: "2023",
    title: "Cryptic Hunt — Winner",
    category: "Competition",
    icon: "Trophy",
    outcome: "win",
  },
  {
    year: "2023",
    title: "Code Connection — Winner",
    category: "Competition",
    icon: "Trophy",
    outcome: "win",
  },
  {
    year: "2023",
    title: "Best Performer of Department",
    category: "Academic",
    icon: "Star",
    outcome: "recognition",
  },
  {
    year: "2019",
    title: "SGFI Kabaddi — Nationals",
    category: "Sport",
    detail: "Competed at the SGFI kabaddi nationals.",
    icon: "Activity",
    outcome: "selection",
  },
];

/** Counts per year, for the recognition chart. Derived, not hand-written. */
export const awardsByYear = Array.from(
  achievements.reduce((map, a) => {
    map.set(a.year, (map.get(a.year) ?? 0) + 1);
    return map;
  }, new Map<string, number>())
)
  .map(([year, count]) => ({ year, count }))
  .sort((a, b) => Number(a.year) - Number(b.year));
