// Single source of truth for links whose asset may or may not exist yet.
// Nothing here is invented — an unavailable link is marked unavailable so
// the UI can degrade honestly instead of rendering a 404.

export const siteConfig = {
  name: "Sanjay Subash",
  role: "Software Engineer / Product Engineer",
  email: "sanjaysubash038@gmail.com",
  location: "Coimbatore, Tamil Nadu, India",
  linkedin: "https://www.linkedin.com/in/sanjaysubash/",

  // From the résumé. Deliberately NOT rendered — publishing a personal
  // number on a public page is your call, not a default. Flip showPhone
  // to true and it appears in the contact section.
  phone: "+91 8680976152",
  showPhone: false,
  instagram: "https://www.instagram.com/mr._funguy/",

  // Verified against the live account: its repos include this very
  // portfolio, plus the Riaura, Aaruchudar, Brain, ADRIN and T-SWEAT work.
  github: "https://github.com/sanjaysubash" as string | null,

  resume: {
    href: "/resume.pdf",
    // Generated from resume/sanjay-subash-resume.html (edit that, re-print
    // to public/resume.pdf). All download CTAs key off this flag.
    available: true,
  },
} as const;
