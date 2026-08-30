// Lighter-weight entries for initiatives without a documented case study yet.
// Kept honest and general rather than inventing specifics — expand these
// into full Project records in projects.ts once real detail is available.
export type AdditionalSystem = {
  title: string;
  description: string;
  tech: string[];
};

export const additionalSystems: AdditionalSystem[] = [
  {
    title: "Analytics Dashboards",
    description:
      "Internal reporting dashboards built on Power BI and custom data pipelines, built to track program and platform activity at Aaruchudar.",
    tech: ["Power BI", "Python", "PostgreSQL"],
  },
  {
    title: "Admin Portal",
    description:
      "Internal admin tooling for managing cohorts, users, and permissions across Aaruchudar's platforms.",
    tech: ["Next.js", "Node.js", "MongoDB"],
  },
  {
    title: "Certificate System",
    description:
      "Automated certificate generation and issuance workflow tied into the Human Intelligence Platform's certification process.",
    tech: ["Node.js", "MongoDB"],
  },
  {
    title: "ADRIN",
    description:
      "A sports information website built on the MERN stack — real-time news, event updates and game schedules behind a dynamic interface.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Minimalist Expense Splitter",
    description:
      "A MERN-stack tool for splitting expenses among friends, with real-time balance calculation and sharing for group expense management.",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "T-SWEAT",
    description:
      "A T-shirt carrying printed advertising alongside a tracker that monitors wearer movement, giving advertisers a read on ad visibility and engagement.",
    tech: ["Hardware", "Tracking"],
  },
  {
    title: "This Portfolio",
    description:
      "This site — a from-scratch Next.js build held to the same product bar as the platforms above.",
    tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
  },
];
