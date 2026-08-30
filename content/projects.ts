export type Metric = {
  label: string;
  value: string | null; // null = PLACEHOLDER, render as "add metric"
};

export type Project = {
  slug: string;
  eyebrow: string;
  title: string;
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  challenges: string;
  impact: string;
  role: string;
  timeframe: string;
  techStack: string[];
  contributions: string[];
  metrics: Metric[];
  gallery: string[];
  links: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
};

// Metrics marked `value: null` are intentional placeholders — replace with
// real figures before this ships. Everything else here is drawn directly
// from the existing project descriptions already on the site.
export const projects: Project[] = [
  {
    slug: "human-intelligence-platform",
    eyebrow: "Full-Stack Platform · Aaruchudar (previous)",
    title: "Human Intelligence Platform",
    tagline:
      "The system behind Aaruchudar's Human Intelligence Labs — cohorts, certification, and analytics in one place.",
    overview:
      "A scalable full-stack platform built for Human Intelligence Labs, covering student engagement, certification workflows, and organizational digital experiences — from admin tooling to the reporting layer leadership reads.",
    problem:
      "Aaruchudar needed a single platform for Human Intelligence Labs that could handle cohort and student engagement, certificate issuance, and reporting as the program scaled — without every team building its own one-off tool.",
    solution:
      "Contributed as a Full-Stack Developer and Data Analyst: frontend architecture, an admin portal, certificate generation workflows, deployment pipelines, and the analytics layer that turns platform activity into something leadership can act on.",
    architecture:
      "Next.js and React on the frontend, a Node.js service layer, MongoDB for platform data, and REST APIs connecting the admin portal, certificate system, and analytics dashboards. Power BI sits on top for reporting. Deployed and iterated on Vercel.",
    challenges:
      "Balancing a platform used daily by internal teams with the analytics and certificate workflows that only run in bursts — every screen had to work for both patterns without becoming two different products.",
    impact:
      "Reduced manual work around certification and reporting by giving staff a single system instead of spreadsheets and ad-hoc tools, while keeping the interface responsive as usage grew.",
    role: "Full-Stack Developer & Data Analyst",
    timeframe: "May 2025 – Aug 2026",
    techStack: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Vercel",
      "REST APIs",
      "Power BI",
    ],
    contributions: [
      "Developed responsive and modern UI components",
      "Built dashboard and admin portal features",
      "Implemented certificate generation workflows",
      "Owned deployment and production updates",
      "Improved performance and frontend user experience",
      "Supported analytics and reporting workflows",
    ],
    metrics: [
      { label: "In Development", value: "1 Year+" },
      { label: "Users", value: null },
      { label: "Dashboards", value: null },
      { label: "Internal Teams", value: null },
    ],
    gallery: [],
    links: {
      live: "https://aaruchudar.vercel.app/",
    },
  },
  {
    slug: "brain-3d-neural-mapping",
    eyebrow: "3D Visualization · Interactive Platform",
    title: "Brain — Interactive 3D Neural Mapping Platform",
    tagline:
      "An interactive 3D brain visualization platform for neural region mapping and human intelligence analysis.",
    overview:
      "An interactive 3D neural mapping platform focused on brain region visualization, human intelligence analysis, and lab-based cognitive exploration — built to make a genuinely dense subject explorable.",
    problem:
      "Neural and cognitive data is hard to explore through tables and static charts — the platform needed a spatial, interactive way to move through brain regions and the data attached to them.",
    solution:
      "Built a 3D visualization platform with neural region mapping, cortex isolation, lab exploration, real-time analysis interfaces, dynamic region highlighting, and a reporting layer on top of the 3D scene.",
    architecture:
      "Next.js and React with Three.js / React Three Fiber driving the 3D scene, TypeScript throughout, Tailwind CSS for the surrounding dashboard UI, and Framer Motion for interface transitions. Deployed on Vercel.",
    challenges:
      "Keeping a real-time 3D scene responsive alongside a full analytics dashboard — rendering performance and interaction latency had to hold up on ordinary hardware, not just a dev machine.",
    impact:
      "Turned a dense, specialist dataset into something explorable in the browser — region highlighting and cortex isolation let users navigate by direct interaction instead of menus and tables.",
    role: "Frontend & 3D Developer",
    timeframe: "Interactive 3D Platform",
    techStack: [
      "Next.js",
      "React.js",
      "Three.js / React Three Fiber",
      "Tailwind CSS",
      "TypeScript",
      "Framer Motion",
      "Vercel",
    ],
    contributions: [
      "Designed and developed the 3D neuroscience-inspired UI",
      "Implemented the interactive 3D brain visualization system",
      "Built neural mapping and cortex interaction modules",
      "Developed reusable, scalable frontend components",
      "Optimized rendering performance and responsiveness",
      "Integrated analytics and reporting sections",
    ],
    metrics: [
      { label: "Regions Mapped", value: null },
      { label: "Frame Rate Target", value: "60fps" },
      { label: "Platform", value: "Web (3D)" },
      { label: "Users", value: null },
    ],
    gallery: [],
    links: {
      live: "https://www.aaruchudar.com/hi-labs",
    },
  },
  {
    slug: "custom-ai-workstation",
    eyebrow: "Hardware · Systems Build",
    title: "Custom AI Workstation",
    tagline:
      "A custom high-performance workstation built for development, AI experimentation, and rendering.",
    overview:
      "Designed and assembled a custom high-performance workstation optimized for full-stack development, AI experimentation, 3D rendering, and multitasking workflows — RTX graphics, liquid cooling, and airflow-tuned architecture.",
    problem:
      "Running local AI experiments, 3D rendering, and a full development environment side by side needs sustained GPU and thermal headroom that off-the-shelf machines aren't built for.",
    solution:
      "Specced and built a workstation around an RTX GPU, liquid CPU cooling, and a high-airflow cabinet, tuned specifically for the mix of development, AI workloads, and rendering it needed to carry.",
    architecture:
      "NVIDIA GeForce RTX GPU, ASUS graphics card, liquid CPU cooler, Cooler Master MWE Gold 750W PSU, RGB-managed thermal system, and a high-airflow, multi-fan cabinet layout.",
    challenges:
      "Balancing sustained thermal load from AI and rendering workloads against noise and airflow constraints inside a standard-size case.",
    impact:
      "A single machine that replaced separate rendering and development setups — sustained multitasking across AI experimentation, 3D rendering, and daily development work.",
    role: "Builder & Systems Designer",
    timeframe: "Personal Build",
    techStack: [
      "NVIDIA GeForce RTX",
      "ASUS GPU",
      "Liquid CPU Cooler",
      "Cooler Master MWE Gold 750W",
      "RGB Cooling",
      "High-Airflow Cabinet",
    ],
    contributions: [
      "Specced every component for the target workload mix",
      "Assembled and cable-managed the full build",
      "Tuned liquid cooling and fan curves for sustained load",
      "Validated thermals under AI and rendering workloads",
    ],
    metrics: [
      { label: "Components", value: "7" },
      { label: "Build Type", value: "Custom" },
      { label: "Cooling", value: "Liquid" },
      { label: "Workload", value: "Dev + AI + Render" },
    ],
    gallery: [
      "/pc-build/0DA5F8DC-057A-4C90-B406-6DB19D66ADB9_1_105_c.jpeg",
      "/pc-build/228364BF-D5D0-4F48-BDD2-7199AACA3409_1_105_c.jpeg",
      "/pc-build/37491C6B-82A5-47C4-B0AE-9CC19C4681A2_1_105_c.jpeg",
      "/pc-build/37E11621-9AB4-445B-B55E-F971F984E0FA_1_105_c.jpeg",
    ],
    links: {
      caseStudy: "/pc-build",
    },
  },
];
