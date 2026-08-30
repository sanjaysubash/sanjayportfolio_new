// Workshops, certifications and courses listed on the résumé.
// Issuers are recorded exactly as written; no dates, grades or credential
// IDs are added, because the source doesn't state them.

export type Credential = {
  issuer: string;
  title: string;
  kind: "Workshop" | "Course";
};

export const credentials: Credential[] = [
  { issuer: "IIT Madras", title: "Tech for India", kind: "Workshop" },
  { issuer: "DRDO", title: "Quantum Computing", kind: "Workshop" },
  {
    issuer: "National Cyber Security Research Institute (NCSR)",
    title: "Cybersecurity",
    kind: "Workshop",
  },
  { issuer: "SNS Gen AI US", title: "Generative AI", kind: "Workshop" },
  { issuer: "NGI TBI", title: "Microcontrollers", kind: "Workshop" },
  { issuer: "Springboard", title: "Python Programming", kind: "Course" },
  { issuer: "Udemy", title: "Advanced HTML & CSS", kind: "Course" },
  { issuer: "Udemy", title: "Python Programming", kind: "Course" },
  { issuer: "Udemy", title: "C Programming", kind: "Course" },
  { issuer: "Udemy", title: "Photoshop CC", kind: "Course" },
  { issuer: "Udemy", title: "Figma", kind: "Course" },
];

export const workshopCount = credentials.filter((c) => c.kind === "Workshop").length;
export const courseCount = credentials.filter((c) => c.kind === "Course").length;
