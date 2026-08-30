// Company-level professional contributions.
//
// HONESTY RULES for this file — please keep them when editing:
//  - Nothing here claims founding, ownership, or sole authorship.
//  - `kicker` states the nature of each engagement. Only Aaruchudar is
//    employment; the others are described as an initiative and a product so
//    neither can be read as a job.
//  - `tags` are technologies ONLY where the stack is already documented
//    elsewhere in this repo (see content/projects.ts). Riaura and Lumivex have
//    no documented stack, so they carry contribution-area tags instead — never
//    labelled "Tech Stack".
//  - `links` only ever point at URLs that are already public on this site.
//  - Statuses are stated plainly, including the incomplete one.

export type WorkstreamStatus = "complete" | "delivered" | "active" | "paused";

export type Workstream = {
  name: string;
  status: string;
  tone: WorkstreamStatus;
  summary: string;
  points: string[];
  /** Rendered as an explicit transparency note under the workstream. */
  note?: string;
};

export type Responsibility = {
  title: string;
  detail: string;
};

export type Handover = {
  title: string;
  detail: string;
  covered: string[];
};

export type Engagement = {
  id: string;
  index: string;
  /** What kind of engagement this was — employment, initiative, product. */
  kicker: string;
  company: string;
  /** Short status line shown as the block's headline badge. */
  status: string;
  /** Past engagements render in a visually quieter, archival register. */
  past: boolean;
  period?: string;
  /** "Role" only where a role existed; "Contribution" everywhere else. */
  roleLabel: string;
  role: string;
  positioning: string;
  summary: string;
  workstreams: Workstream[];
  responsibilities: Responsibility[];
  /** "Technologies" only where documented; otherwise contribution areas. */
  tagsLabel: string;
  tags: string[];
  impact: string;
  handover?: Handover;
  /** Points at the in-depth case study for this work, further down the page. */
  caseStudyRef?: { label: string; href: string; note: string };
  links?: { label: string; href: string }[];
};

export const engagements: Engagement[] = [
  {
    id: "aaruchudar",
    index: "01",
    kicker: "Previous employment",
    company: "Aaruchudar",
    status: "Previous Professional Experience",
    past: true,
    period: "May 2025 – Aug 2026",
    roleLabel: "Role",
    role: "Full-Stack Developer & Data Analyst → Software Engineer",
    positioning:
      "Technical development and execution across the company's products, platforms, and engineering practice.",
    summary:
      "I contributed to the technical development and execution of Aaruchudar's products and internal systems — building and debugging applications, shaping the product experience, and working on the engineering process the software team ran within. The engagement ended with a complete technical handover, leaving every system I worked on documented and maintainable without me.",
    workstreams: [
      {
        name: "Assessment Application",
        status: "Advanced to delivery",
        tone: "delivered",
        summary:
          "Contributed to the development and implementation of the assessment application.",
        points: [
          "Application functionality and technical implementation",
          "Debugging and product-level improvements",
          "Helped move the application toward completion and delivery",
        ],
      },
      {
        name: "Aaruchudar Website",
        status: "Contributed",
        tone: "active",
        summary:
          "Contributed to the website's development and implementation.",
        points: [
          "Frontend development and product presentation",
          "Technical integration with the surrounding systems",
        ],
      },
      {
        name: "Management System",
        status: "Completed",
        tone: "complete",
        summary:
          "Contributed to the management and administration platform, which was completed as part of my contribution.",
        points: [
          "Administration workflows and system functionality",
          "Implementation and debugging across the platform",
          "Carried through to a completed state",
        ],
      },
    ],
    responsibilities: [
      {
        title: "UI / Product Experience",
        detail:
          "I treated interfaces as product surfaces rather than markup — building structured, functional screens around how work actually moves through them, instead of only writing the frontend that sat on top of the backend.",
      },
      {
        title: "Engineering Process",
        detail:
          "Worked on introducing a more structured Agile methodology for the software team, and planned the engineering principles, development standards, and working conditions intended to make the team's execution more consistent and scalable.",
      },
      {
        title: "Technology Roadmap",
        detail:
          "Contributed to planning the company's future technology roadmap across both software and hardware projects — thinking each one through from concept to architecture to development to implementation rather than scoping it feature by feature.",
      },
    ],
    tagsLabel: "Technologies",
    tags: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "REST APIs",
      "Vercel",
      "Power BI",
    ],
    impact:
      "A completed management system, an assessment application carried toward delivery, a documented engineering process, and a full technical handover — the work is transferable, and the team could keep running after I moved on.",
    handover: {
      title: "Technical Handover",
      detail:
        "I prepared a complete technical handover as the engagement closed, so nothing depended on my continued presence to stay maintainable.",
      covered: [
        "Repositories",
        "Applications",
        "Websites",
        "Management systems",
        "Current status of each system",
        "Ongoing technical work",
      ],
    },
    caseStudyRef: {
      label: "Human Intelligence Platform",
      href: "#human-intelligence-platform",
      note: "The platform build is covered in depth further down as a featured case study.",
    },
    links: [{ label: "Aaruchudar platform", href: "https://aaruchudar.vercel.app/" }],
  },
  {
    id: "riaura",
    index: "02",
    kicker: "Technology & product initiative",
    company: "Riaura",
    status: "Product Engineering & Technology",
    past: false,
    roleLabel: "Contribution",
    role: "Product engineering, architecture & technology planning",
    positioning: "Human Intelligence + Neuroscience",
    summary:
      "Riaura is a technology and product initiative I contributed to as a product engineer rather than on a single deliverable — application and platform development, software architecture and implementation, and the engineering standards and technology planning underneath them.",
    workstreams: [
      {
        name: "Riaura Application",
        status: "Major development contribution",
        tone: "active",
        summary:
          "The primary software product of the initiative — application development carried alongside the architecture decisions behind it.",
        points: [
          "Application development and technical implementation",
          "Software architecture and product structure",
          "UI and product experience",
        ],
      },
      {
        name: "Management Platform",
        status: "Completed",
        tone: "complete",
        summary:
          "The management platform was completed as part of my contribution.",
        points: [
          "Platform development and system functionality",
          "Administration workflows",
          "Carried through to completion",
        ],
      },
      {
        name: "Riaura Website",
        status: "~70% · Paused",
        tone: "paused",
        summary:
          "Website development and product presentation, taken to roughly 70% completion.",
        points: [
          "Frontend development and product presentation",
          "Paused by prioritisation, not abandoned",
        ],
        note: "Work stopped at approximately 70% when the assessment application was prioritised. I'd rather state that figure plainly than present the site as finished.",
      },
    ],
    responsibilities: [
      {
        title: "Software Architecture & Implementation",
        detail:
          "Architected the products at system level — how the parts fit and hold under change — and implemented against that structure rather than designing each feature in isolation.",
      },
      {
        title: "UI / Product Experience",
        detail:
          "Built the product experience as a structured surface over the systems underneath, so the interface reflected how the product actually worked.",
      },
      {
        title: "Engineering Standards & Agile Methodology",
        detail:
          "Established engineering principles and development standards, and planned the Agile software development methodology for how the work was scoped and run.",
      },
      {
        title: "Technology Roadmap",
        detail:
          "Planned the longer-term technology direction, covering both software and hardware project planning and the growth the roadmap had to survive.",
      },
      {
        title: "R&D Direction",
        detail:
          "Worked on Human Intelligence + Neuroscience as a technology and product direction, translating it into concrete architecture and project plans instead of leaving it as positioning.",
      },
    ],
    tagsLabel: "Contribution areas",
    tags: [
      "Application Development",
      "Website Development",
      "Management Platform",
      "UI / Product Experience",
      "Software Architecture",
      "Agile Methodology",
      "Engineering Standards",
      "Technology Roadmap",
      "Software & Hardware Planning",
    ],
    impact:
      "A completed management platform, an application carrying the product forward, and a documented methodology and roadmap that set the technical direction for what comes next.",
  },
  {
    id: "lumivex",
    index: "03",
    kicker: "Product",
    company: "Lumivex",
    status: "Completed Product",
    past: false,
    roleLabel: "Contribution",
    role: "Product development & software engineering",
    positioning:
      "Product development carried through implementation to a delivered product.",
    summary:
      "I worked on Lumivex across product development, technical implementation, and software engineering. The product was completed and delivered — the contribution covers the full arc, from requirements through engineering to a finished build.",
    workstreams: [],
    responsibilities: [
      {
        title: "Product Development",
        detail:
          "Worked on the product from requirements through to implementation.",
      },
      {
        title: "Technical Implementation",
        detail: "Built and integrated the functionality the product needed to work.",
      },
      {
        title: "Software Engineering",
        detail: "Engineering execution across the product's codebase.",
      },
      {
        title: "Completion & Delivery",
        detail: "Carried the product through completion to delivery.",
      },
    ],
    tagsLabel: "Contribution areas",
    tags: [
      "Product Development",
      "Technical Implementation",
      "Software Engineering",
      "Product Completion & Delivery",
    ],
    impact:
      "Completed and delivered. Lumivex is a finished product — not a paused or partial one.",
  },
];

export type Capability = {
  index: string;
  icon: string;
  title: string;
  description: string;
};

export const capabilities: Capability[] = [
  {
    index: "01",
    icon: "Boxes",
    title: "Product Engineering",
    description: "Building products from requirements to implementation.",
  },
  {
    index: "02",
    icon: "Network",
    title: "Software Architecture",
    description:
      "Thinking beyond individual features toward scalable technical systems.",
  },
  {
    index: "03",
    icon: "Workflow",
    title: "Engineering Processes",
    description:
      "Introducing structured Agile practices and development standards.",
  },
  {
    index: "04",
    icon: "Compass",
    title: "Technology Strategy",
    description: "Planning software and hardware roadmaps for future growth.",
  },
  {
    index: "05",
    icon: "FlaskConical",
    title: "R&D Thinking",
    description:
      "Exploring Human Intelligence + Neuroscience as a technology and product direction.",
  },
  {
    index: "06",
    icon: "ArrowRightLeft",
    title: "Technical Handover",
    description:
      "Documenting systems and transferring technical knowledge for continuity.",
  },
];
