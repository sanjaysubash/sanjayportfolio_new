"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { projects } from "@/content/projects";
import { ProjectCaseStudy } from "@/components/project-case-study";
import { sectionNumber } from "@/content/sections";

export function FeaturedProjects() {
  return (
    <section id="work" aria-label="Featured Projects" className="section-shell section-gap pt-0">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-12 max-w-[62ch]"
      >
        <motion.p variants={fadeUp} className="mono-label text-xs uppercase text-[color:var(--graphite)]">
          {sectionNumber("work")} — Featured Projects
        </motion.p>
        <motion.h2
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.02]"
        >
          Featured projects
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[56ch] text-[1.02rem] leading-relaxed text-[color:var(--ink-soft)]"
        >
          Professional Experience covers the breadth of what I contributed.
          These are the depth — individual builds taken apart in full, from the
          problem through the architecture to what shipped.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCaseStudy key={project.slug} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
