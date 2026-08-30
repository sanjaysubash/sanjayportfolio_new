"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { engagements } from "@/content/professionalWork";
import { EngagementBlock } from "@/components/engagement-block";
import { sectionNumber } from "@/content/sections";

export function ProfessionalExperience() {
  return (
    <section
      id="experience"
      aria-label="Professional Experience"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16"
      >
        <div className="min-w-0">
          <motion.p
            variants={fadeUp}
            className="mono-label text-xs uppercase text-[color:var(--graphite)]"
          >
            {sectionNumber("experience")} — Professional Experience
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="editorial-title mt-4 max-w-[16ch] text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.02]"
          >
            Three engagements, one way of working.
          </motion.h2>
        </div>

        <motion.p
          variants={fadeUp}
          className="max-w-[52ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)] lg:pb-2"
        >
          I build software products, but my contribution extends beyond
          implementation — into architecture, product engineering, engineering
          processes, technology strategy, and R&amp;D thinking. Each engagement
          below states the status of its work exactly as it stands.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-6 lg:gap-8">
        {engagements.map((engagement) => (
          <EngagementBlock key={engagement.id} engagement={engagement} />
        ))}
      </div>
    </section>
  );
}
