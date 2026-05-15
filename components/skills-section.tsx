"use client";

import React, { useState } from "react";

export function SkillsSection() {
  const categories = [
    {
      title: "Programming Languages",
      items: [
        { name: "Python", logo: "https://cdn.simpleicons.org/python/3776AB?size=64" },
        { name: "C", logo: "https://cdn.simpleicons.org/c/A8B9CC?size=64" },
        { name: "JavaScript", logo: "https://cdn.simpleicons.org/javascript/F7DF1E?size=64" },
        { name: "TypeScript", logo: "https://cdn.simpleicons.org/typescript/3178C6?size=64" },
        { name: "SQL", logo: "https://cdn.simpleicons.org/mysql/4479A1?size=64" },
        { name: "HTML5", logo: "https://cdn.simpleicons.org/html5/E34F26?size=64" },
        { name: "CSS3", logo: "https://cdn.simpleicons.org/css3/1572B6?size=64" },
      ],
    },
    {
      title: "Web Development",
      items: [
        { name: "React.js", logo: "https://cdn.simpleicons.org/react/61DAFB?size=64" },
        { name: "Next.js", logo: "https://cdn.simpleicons.org/nextdotjs/000000?size=64" },
        { name: "Node.js", logo: "https://cdn.simpleicons.org/nodedotjs/339933?size=64" },
        { name: "Express.js", logo: "https://cdn.simpleicons.org/express/000000?size=64" },
        { name: "REST APIs" },
        { name: "Tailwind CSS", logo: "https://cdn.simpleicons.org/tailwindcss/06B6D4?size=64" },
        { name: "Bootstrap", logo: "https://cdn.simpleicons.org/bootstrap/7952B3?size=64" },
      ],
    },
    {
      title: "Databases",
      items: [
        { name: "MySQL", logo: "https://cdn.simpleicons.org/mysql/4479A1?size=64" },
        { name: "PostgreSQL", logo: "https://cdn.simpleicons.org/postgresql/336791?size=64" },
        { name: "MongoDB", logo: "https://cdn.simpleicons.org/mongodb/47A248?size=64" },
        { name: "Firebase", logo: "https://cdn.simpleicons.org/firebase/FFCA28?size=64" },
      ],
    },
    {
      title: "Development Tools",
      items: [
        { name: "Git", logo: "https://cdn.simpleicons.org/git/F05032?size=64" },
        { name: "GitHub", logo: "https://cdn.simpleicons.org/github/181717?size=64" },
        { name: "VS Code", logo: "https://cdn.simpleicons.org/visualstudiocode/0078D7?size=64" },
        { name: "Postman", logo: "https://cdn.simpleicons.org/postman/FF6C37?size=64" },
        { name: "Docker", logo: "https://cdn.simpleicons.org/docker/2496ED?size=64" },
        { name: "npm", logo: "https://cdn.simpleicons.org/npm/CB3837?size=64" },
        { name: "Yarn", logo: "https://cdn.simpleicons.org/yarn/2C8EBB?size=64" },
        { name: "Vercel", logo: "https://cdn.simpleicons.org/vercel/000000?size=64" },
        { name: "Netlify", logo: "https://cdn.simpleicons.org/netlify/00C7B7?size=64" },
        { name: "Render", logo: "https://cdn.simpleicons.org/render/ffffff?size=64" },
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        { name: "AWS (Basics)", logo: "https://cdn.simpleicons.org/amazonaws/FF9900?size=64" },
        { name: "CI/CD Basics", logo: "https://cdn.simpleicons.org/githubactions/2088FF?size=64" },
        { name: "GitHub Actions", logo: "https://cdn.simpleicons.org/githubactions/2088FF?size=64" },
        { name: "Linux Commands", logo: "https://cdn.simpleicons.org/linux/FCC624?size=64" },
        { name: "Azure", logo: "https://cdn.simpleicons.org/microsoftazure/0089D6?size=64" },
        { name: "Google Cloud", logo: "https://cdn.simpleicons.org/googlecloud/4285F4?size=64" },
      ],
    },
    {
      title: "Data Analytics & BI",
      items: [
        { name: "Microsoft Excel", logo: "https://cdn.simpleicons.org/microsoftexcel/217346?size=64" },
        { name: "Power BI", logo: "https://cdn.simpleicons.org/microsoftpowerbi/F2C811?size=64" },
        { name: "Tableau", logo: "https://cdn.simpleicons.org/tableau/E97627?size=64" },
        { name: "Pandas", logo: "https://cdn.simpleicons.org/pandas/150458?size=64" },
        { name: "NumPy", logo: "https://cdn.simpleicons.org/numpy/013243?size=64" },
        { name: "Google Analytics", logo: "https://cdn.simpleicons.org/googleanalytics/EA4335?size=64" },
      ],
    },
    {
      title: "Design & Collaboration Tools",
      items: [
        { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E?size=64" },
        { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC?size=64" },
        { name: "Notion", logo: "https://cdn.simpleicons.org/notion/000000?size=64" },
        { name: "Photoshop", logo: "https://cdn.simpleicons.org/adobephotoshop/31A8FF?size=64" },
        { name: "Microsoft Teams", logo: "https://cdn.simpleicons.org/microsoftteams/6264A7?size=64" },
        { name: "Google Drive", logo: "https://cdn.simpleicons.org/googledrive/0F9D58?size=64" },
      ],
    },
    {
      title: "Operating Systems",
      items: [
        { name: "Windows", logo: "https://cdn.simpleicons.org/windows/00A4EF?size=64" },
        { name: "Linux", logo: "https://cdn.simpleicons.org/linux/FCC624?size=64" },
        { name: "macOS", logo: "https://cdn.simpleicons.org/apple/000000?size=64" },
      ],
    },
    {
      title: "AI Chatbots & Assistants",
      items: [
        { name: "ChatGPT", logo: "https://cdn.simpleicons.org/openai/412991?size=64" },
        { name: "Google Gemini" },
        { name: "Claude" },
        { name: "Microsoft Copilot" },
        { name: "Perplexity AI" },
      ],
    },
    {
      title: "AI Coding Tools",
      items: [
        { name: "GitHub Copilot", logo: "https://cdn.simpleicons.org/github/181717?size=64" },
        { name: "Cursor" },
        { name: "Codeium" },
        { name: "Tabnine" },
        { name: "Replit", logo: "https://cdn.simpleicons.org/replit/FF3A3A?size=64" },
      ],
    },
    {
      title: "AI for Design & Content",
      items: [
        { name: "Canva", logo: "https://cdn.simpleicons.org/canva/00C4CC?size=64" },
        { name: "Adobe Firefly" },
        { name: "Figma", logo: "https://cdn.simpleicons.org/figma/F24E1E?size=64" },
        { name: "Notion AI" },
      ],
    },
  ];

  function SkillIcon({ src, name }: { src?: string; name: string }) {
    const [failed, setFailed] = useState(false);

    if (!src || failed) {
      const initials = name
        .split(" ")
        .map((s) => s[0])
        .slice(0, 2)
        .join("");
      return (
        <div className="flex h-7 w-7 items-center justify-center rounded bg-black/5 text-xs font-semibold text-black/75">
          {initials}
        </div>
      );
    }

    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={src}
        alt={name}
        width={28}
        height={28}
        onError={() => setFailed(true)}
        className="h-7 w-7 rounded bg-white p-0.5 object-contain"
      />
    );
  }

  const [selectedFilter, setSelectedFilter] = useState("All");
  const allSkills = categories.flatMap((cat) =>
    cat.items.map((it) => ({ ...it, category: cat.title }))
  );
  const filteredCategories =
    selectedFilter === "All"
      ? categories
      : categories.filter((cat) => cat.title === selectedFilter);

  return (
    <section id="skills" className="section-shell section-gap relative">
      <div className="mx-auto max-w-[1100px]">
        <h2 className="editorial-title mb-6 text-[clamp(1.6rem,3.8vw,2.6rem)] font-semibold">Skills</h2>

        {/* Filter chips */}
        <div className="flex flex-wrap gap-3">
          {[
            "All",
            ...categories.map((c) => c.title),
          ].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-medium backdrop-blur-md transition-all ${
                selectedFilter === filter
                  ? "border border-black/20 bg-black text-white shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
                  : "border border-white/70 bg-white/45 text-black shadow-[0_8px_20px_rgba(0,0,0,0.06)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-6">
          {selectedFilter === "All" ? (
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {filteredCategories.map((cat, catIndex) => (
                <article
                  key={cat.title}
                  className="group relative overflow-hidden rounded-[22px] border border-white/65 bg-white/35 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_44px_rgba(20,20,20,0.14)]"
                >
                  <div className="pointer-events-none absolute -left-10 -top-14 h-28 w-28 rounded-full bg-white/60 blur-2xl" />
                  <div className="pointer-events-none absolute -right-10 bottom-0 h-20 w-20 rounded-full bg-[#b6e3ff]/55 blur-2xl" />
                  <div className="mb-4 flex items-center justify-between gap-3">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.04em] text-black/60">
                      {cat.title}
                    </h3>
                    <span className="rounded-full border border-white/70 bg-white/65 px-2.5 py-1 text-xs font-semibold text-black/55 backdrop-blur">
                      {cat.items.length}
                    </span>
                  </div>

                  <div className="grid grid-cols-1 gap-2.5">
                    {cat.items.map((item) => (
                      <div
                        key={item.name}
                        className="flex items-center gap-3 rounded-xl border border-white/70 bg-white/55 px-3 py-2.5 backdrop-blur-md transition-colors duration-200 group-hover:bg-white/70"
                      >
                        <SkillIcon src={item.logo} name={item.name} />
                        <span className="text-sm font-medium text-black/80">{item.name}</span>
                      </div>
                    ))}
                  </div>

                  <div
                    className="mt-4 h-1.5 rounded-full"
                    style={{
                      background:
                        catIndex % 3 === 0
                          ? "linear-gradient(90deg,#2563eb,#06b6d4)"
                          : catIndex % 3 === 1
                            ? "linear-gradient(90deg,#7c3aed,#ec4899)"
                            : "linear-gradient(90deg,#f59e0b,#ef4444)",
                    }}
                  />
                </article>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
              {allSkills
                .filter((skill) => skill.category === selectedFilter)
                .map((skill, idx) => (
                  <article
                    key={`${skill.name}-${skill.category}`}
                    className="group relative overflow-hidden rounded-2xl border border-white/70 bg-white/40 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_38px_rgba(0,0,0,0.14)]"
                  >
                    <div className="pointer-events-none absolute -left-8 -top-8 h-20 w-20 rounded-full bg-white/60 blur-xl" />
                    <div
                      className="absolute inset-x-0 top-0 h-1.5"
                      style={{
                        background:
                          idx % 3 === 0
                            ? "linear-gradient(90deg,#0ea5e9,#22d3ee)"
                            : idx % 3 === 1
                              ? "linear-gradient(90deg,#8b5cf6,#ec4899)"
                              : "linear-gradient(90deg,#f59e0b,#f97316)",
                      }}
                    />
                    <div className="mt-2 flex flex-col items-center gap-3 text-center">
                      <div className="rounded-xl border border-white/70 bg-white/70 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.08)] backdrop-blur">
                        <SkillIcon src={skill.logo} name={skill.name} />
                      </div>
                      <h4 className="text-sm font-semibold text-black/85">{skill.name}</h4>
                      <p className="text-[11px] font-medium uppercase tracking-[0.06em] text-black/45">
                        {skill.category}
                      </p>
                    </div>
                  </article>
                ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
