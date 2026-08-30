"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { experience } from "@/content/experience";
import { sectionNumber } from "@/content/sections";

export function ExperienceTimeline() {
  const trackRef = useRef<HTMLDivElement>(null);
  // Progress is read from the list itself, so the rail fills exactly in step
  // with the entries rather than with the whole page.
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 65%", "end 55%"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 max-w-[60ch] lg:mb-14"
      >
        <motion.p
          variants={fadeUp}
          className="mono-label text-xs uppercase text-[color:var(--graphite)]"
        >
          {sectionNumber("journey")} — Journey
        </motion.p>
        <motion.h2
          id="journey-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          Four years, one direction.
        </motion.h2>
      </motion.div>

      <div ref={trackRef} className="relative max-w-[62rem]">
        {/* Rail */}
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[7px] top-2 w-px bg-[color:var(--line)] sm:left-[calc(5.5rem+7px)] md:left-[calc(7rem+7px)]"
        >
          <motion.div
            style={{ scaleY: progress, transformOrigin: "top" }}
            className="h-full w-px bg-[color:var(--accent)]"
          />
        </div>

        <ol className="flex flex-col">
          {experience.map((entry, index) => (
            <motion.li
              key={entry.year}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex gap-5 pb-10 last:pb-0 sm:gap-8"
            >
              {/* Year — inline on mobile, its own column from sm up */}
              <div className="hidden shrink-0 sm:block sm:w-[5.5rem] md:w-[7rem]">
                <span className="mono-label text-[1.05rem] tabular-nums text-[color:var(--graphite)] transition-colors duration-400 group-hover:text-[color:var(--ink)]">
                  {entry.year}
                </span>
              </div>

              {/* Node */}
              <span
                aria-hidden="true"
                className="relative z-10 mt-1.5 h-[15px] w-[15px] shrink-0 rounded-full border-2 border-[color:var(--bg)] bg-[color:var(--line-strong)] transition-colors duration-500 group-hover:bg-[color:var(--accent)]"
              />

              <div className="min-w-0 flex-1 pb-1">
                <span className="mono-label mb-1.5 block text-[0.95rem] tabular-nums text-[color:var(--graphite)] sm:hidden">
                  {entry.year}
                </span>
                <div className="rounded-[var(--radius-md)] border border-transparent px-0 py-0 transition-[border-color,background-color,transform] duration-400 sm:-mx-4 sm:px-4 sm:py-3.5 sm:group-hover:-translate-y-0.5 sm:group-hover:border-[color:var(--line)] sm:group-hover:bg-[color:var(--surface)]">
                  <h3 className="editorial-title text-[1.1rem] text-[color:var(--ink)]">
                    {entry.title}
                  </h3>
                  <p className="mt-2 max-w-[58ch] text-[0.93rem] leading-relaxed text-[color:var(--ink-soft)]">
                    {entry.description}
                  </p>
                </div>
              </div>

              {/* Ordinal, desktop only */}
              <span
                aria-hidden="true"
                className="mono-label hidden shrink-0 self-start pt-1.5 text-[11px] text-[color:var(--line-strong)] lg:block"
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
