// Section numbering is derived, not hardcoded, so an optional section
// (Education) appearing or disappearing never leaves a gap in the sequence.

import { education } from "./education";

export const sectionSequence: string[] = [
  "about",
  "metrics",
  "expertise",
  "skills",
  "journey",
  "experience",
  "capabilities",
  "work",
  "achievements",
  ...(education.length > 0 ? ["education"] : []),
  "certifications",
  "faq",
  "contact",
];

export function sectionNumber(id: string): string {
  const index = sectionSequence.indexOf(id);
  return index === -1 ? "" : String(index + 1).padStart(2, "0");
}
