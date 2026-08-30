// ═══════════════════════════════════════════════════════════════════
// SKILLS
//
// Every entry in techStack.ts, given a layer and a semantic icon.
// lucide-react v1 ships no brand marks, so these are meaning-based
// glyphs (Wind for Tailwind, Flame for Firebase, Coffee for Java)
// rather than fake logos.
//
// NO proficiency level is attached to any entry — the résumé states
// none, so none is implied. The only qualifier is the layer.
// ═══════════════════════════════════════════════════════════════════

import { techStack } from "./techStack";

export type Skill = { name: string; domain: string; icon: string };

export const skills: Skill[] = [
  { name: "React", domain: "Frontend", icon: "Atom" },
  { name: "Next.js", domain: "Frontend", icon: "Triangle" },
  { name: "TypeScript", domain: "Frontend", icon: "Braces" },
  { name: "Tailwind", domain: "Frontend", icon: "Wind" },
  { name: "Three.js", domain: "Frontend", icon: "Box" },

  { name: "Node.js", domain: "Backend", icon: "Hexagon" },
  { name: "Express.js", domain: "Backend", icon: "Route" },
  { name: "Python", domain: "Backend", icon: "Code" },
  { name: "Java", domain: "Backend", icon: "Coffee" },
  { name: "C", domain: "Backend", icon: "Terminal" },
  { name: "FastAPI", domain: "Backend", icon: "Rocket" },

  { name: "MongoDB", domain: "Data", icon: "Leaf" },
  { name: "PostgreSQL", domain: "Data", icon: "Database" },
  { name: "SQL", domain: "Data", icon: "Table" },
  { name: "Power BI", domain: "Data", icon: "ChartPie" },
  { name: "Excel", domain: "Data", icon: "Sheet" },

  { name: "Docker", domain: "Cloud & Tooling", icon: "Container" },
  { name: "Firebase", domain: "Cloud & Tooling", icon: "Flame" },
  { name: "Git", domain: "Cloud & Tooling", icon: "GitBranch" },

  { name: "Computer Hardware", domain: "Systems & Design", icon: "Cpu" },
  { name: "Computer Networks", domain: "Systems & Design", icon: "Network" },
  { name: "UI/UX", domain: "Systems & Design", icon: "PenTool" },
  { name: "Graphics Design", domain: "Systems & Design", icon: "Palette" },
];

/** Working strengths listed on the résumé — shown as traits, never rated. */
export const workingStrengths = [
  "Communication",
  "Teamwork & Collaboration",
  "Problem-Solving",
  "Time Management",
  "Leadership",
  "Adaptability",
  "Creativity",
  "Critical Thinking",
  "Conflict Resolution",
  "Emotional Intelligence",
];

/** Build-time guard: the skill list must mirror techStack.ts exactly. */
export const skillsMatchTechStack =
  skills.length === techStack.length &&
  techStack.every((t) => skills.some((s) => s.name === t));

export const skillDomains = Array.from(new Set(skills.map((s) => s.domain)));
