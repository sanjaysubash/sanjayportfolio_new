export type ExpertiseCard = {
  index: string;
  title: string;
  description: string;
};

export const expertise: ExpertiseCard[] = [
  {
    index: "01",
    title: "Frontend Engineering",
    description:
      "I build interfaces that hold up under real use — responsive layouts, componentized design systems, and motion that clarifies rather than decorates.",
  },
  {
    index: "02",
    title: "Backend Engineering",
    description:
      "APIs, databases, and services designed for the data they actually carry — from certificate workflows to analytics pipelines running at scale.",
  },
  {
    index: "03",
    title: "Artificial Intelligence",
    description:
      "Applying AI where it changes an outcome, not where it's fashionable — from workflow automation to interactive, model-driven visualization.",
  },
  {
    index: "04",
    title: "Data Analytics",
    description:
      "Turning raw operational data into dashboards and reports people actually use to make decisions, built with Power BI and custom pipelines.",
  },
  {
    index: "05",
    title: "Product Design",
    description:
      "Design that starts with the user's problem, not the component library — wireframes through to shipped, tested interfaces.",
  },
  {
    index: "06",
    title: "Cloud & Deployment",
    description:
      "Shipping and operating production systems — CI/CD, containerization, and infrastructure that stays boring under load.",
  },
];
