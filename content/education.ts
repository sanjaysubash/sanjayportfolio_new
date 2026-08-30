// Sourced from Sanjay's résumé (sanjay_Resume.pdf), most recent first.
export type EducationEntry = {
  institution: string;
  qualification: string;
  period: string;
  location?: string;
  detail?: string;
  highlights?: string[];
};

export const education: EducationEntry[] = [
  {
    institution: "KIT — Kalaignar Karunanidhi Institute of Technology",
    qualification: "B.Tech, Computer Science and Business Systems",
    period: "2022 — 2026",
    location: "Coimbatore, Tamil Nadu",
    detail:
      "A computer science degree with a business systems core — the same pairing of engineering and product thinking the rest of this site runs on. I built freelance and professional work alongside it throughout.",
    highlights: [
      "Computer Science",
      "Business Systems",
      "Best performer of department, 2023",
    ],
  },
  {
    institution: "Sindhi Vidyalaya Matriculation Higher Secondary School",
    qualification: "Higher Secondary Certificate (HSC)",
    period: "2020 — 2022",
    location: "Coimbatore, Tamil Nadu",
  },
];
