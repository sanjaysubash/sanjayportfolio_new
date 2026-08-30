"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Presentation } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { credentials, workshopCount, courseCount } from "@/content/certifications";
import { sectionNumber } from "@/content/sections";

export function Certifications() {
  const workshops = credentials.filter((c) => c.kind === "Workshop");
  const courses = credentials.filter((c) => c.kind === "Course");

  const groups = [
    { label: "Workshops", items: workshops, icon: Presentation, count: workshopCount },
    { label: "Courses", items: courses, icon: BadgeCheck, count: courseCount },
  ];

  return (
    <section
      id="certifications"
      aria-labelledby="certifications-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 max-w-[62ch] lg:mb-12"
      >
        <motion.p
          variants={fadeUp}
          className="mono-label text-xs uppercase text-[color:var(--graphite)]"
        >
          {`${sectionNumber("certifications")} — Certifications & workshops`}
        </motion.p>
        <motion.h2
          id="certifications-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          Where the range came from.
        </motion.h2>
        <motion.p
          variants={fadeUp}
          className="mt-5 max-w-[58ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)]"
        >
          {workshopCount} workshops and {courseCount} courses, spanning quantum
          computing, cybersecurity, generative AI and microcontrollers alongside
          the everyday stack.
        </motion.p>
      </motion.div>

      <div className="grid gap-4 lg:grid-cols-2">
        {groups.map((group) => {
          const Icon = group.icon;
          return (
            <motion.div
              key={group.label}
              initial="hidden"
              whileInView="visible"
              viewport={viewportConfig}
              variants={staggerContainer}
              className="surface-card rounded-[var(--radius-lg)] p-5 sm:p-7"
            >
              <motion.div
                variants={fadeUp}
                className="mb-5 flex items-center justify-between gap-3 border-b border-[color:var(--line)] pb-4"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] text-[color:var(--ink-soft)]">
                    <Icon size={16} aria-hidden="true" />
                  </span>
                  <h3 className="text-[0.98rem] font-semibold text-[color:var(--ink)]">
                    {group.label}
                  </h3>
                </div>
                <span className="mono-label text-[11px] tabular-nums text-[color:var(--graphite)]">
                  {group.count}
                </span>
              </motion.div>

              <ul className="space-y-0">
                {group.items.map((item, i) => (
                  <motion.li
                    key={`${item.issuer}-${item.title}`}
                    variants={fadeUp}
                    className={`group flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 transition-colors duration-300 ${
                      i < group.items.length - 1
                        ? "border-b border-[color:var(--line)]"
                        : ""
                    }`}
                  >
                    <span className="min-w-0 text-[0.92rem] text-[color:var(--ink)]">
                      {item.title}
                    </span>
                    <span className="mono-label min-w-0 break-words text-[10px] uppercase leading-relaxed text-[color:var(--graphite)] transition-colors duration-300 group-hover:text-[color:var(--accent)] sm:text-right">
                      {item.issuer}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
