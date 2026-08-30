// Answers are drawn from content already on this site (about.ts,
// expertise.ts, techStack.ts, professionalWork.ts, contact.ts).
export type FaqItem = { question: string; answer: string };

export const faq: FaqItem[] = [
  {
    question: "What do you actually build?",
    answer:
      "Full-stack products, end to end — the schema, the API, the dashboard that makes the data legible, and the interface people actually trust. Recently that has meant assessment and management platforms, an admin portal and certificate workflows, analytics dashboards, and an interactive 3D neural mapping tool.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "React, Next.js and TypeScript on the frontend; Node.js, Python and FastAPI on the backend; MongoDB and PostgreSQL for data, with Power BI for reporting. Docker, Firebase, Git and Vercel round out deployment. Three.js when the problem is spatial.",
  },
  {
    question: "You describe yourself as a product engineer — what does that add?",
    answer:
      "I build software products, but the contribution extends past implementation: software architecture, engineering processes and Agile methodology, technology roadmaps covering both software and hardware, and R&D direction. I think about the system and the process around it, not only the feature in front of me.",
  },
  {
    question: "What kind of work are you looking for?",
    answer:
      "Product engineering where one point of view can hold the whole thing — engineering, design and data together rather than handed between departments. I'm equally interested in the architecture underneath a product and the process a team runs within.",
  },
  {
    question: "Are you available right now?",
    answer:
      "Yes — open to freelance and full-time work, based in India. My most recent engagement was Aaruchudar Pvt Ltd, May 2025 to August 2026, which closed with a complete technical handover.",
  },
  {
    question: "How do I get in touch?",
    answer:
      "Email is the fastest route, and there's a copy button next to the address throughout this site. LinkedIn works too. The contact form opens your own email client with the message prefilled — this site has no backend, so nothing is submitted anywhere.",
  },
];
