"use client";

import { motion } from "framer-motion";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { additionalSystems } from "@/content/additionalSystems";
import { TiltCard } from "@/components/tilt-card";

export function AdditionalSystems() {
  return (
    <section aria-label="Additional Systems" className="section-shell pb-20">
      <motion.p
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={fadeUp}
        className="mono-label mb-6 text-xs uppercase text-[color:var(--graphite)]"
      >
        Also shipped
      </motion.p>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
      >
        {additionalSystems.map((system) => (
          <motion.div key={system.title} variants={fadeUp} className="h-full">
            <TiltCard className="h-full rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--surface)] p-6">
              <h3 className="text-base font-semibold text-[color:var(--ink)]">{system.title}</h3>
              <p className="mt-2 text-[0.9rem] leading-relaxed text-[color:var(--ink-soft)]">
                {system.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {system.tech.map((tech) => (
                  <span
                    key={tech}
                    className="mono-label rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] uppercase text-[color:var(--graphite)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </TiltCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
