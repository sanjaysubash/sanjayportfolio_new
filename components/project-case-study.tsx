"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfigTall } from "@/animations";
import { buttonVariants } from "@/components/ui/button";
import { AnimatedMetric } from "@/components/ui/count-up";
import type { Project } from "@/content/projects";

const detailBlocks: { key: keyof Project; label: string }[] = [
  { key: "problem", label: "Problem" },
  { key: "solution", label: "Solution" },
  { key: "architecture", label: "Architecture" },
  { key: "challenges", label: "Challenges" },
  { key: "impact", label: "Impact" },
];

export function ProjectCaseStudy({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const knownMetrics = project.metrics.filter((m) => m.value);

  return (
    <motion.article
      id={project.slug}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfigTall}
      variants={staggerContainer}
      className="surface-card rounded-[var(--radius-xl)] transition-shadow duration-500 hover:shadow-[var(--accent-glow)]"
    >
      <div className={`grid gap-0 lg:grid-cols-2 ${reversed ? "lg:[direction:rtl]" : ""}`}>
        <div
          className={`rounded-t-[36px] bg-[color:var(--bg-sunken)] p-6 sm:p-8 lg:self-start lg:sticky lg:top-24 lg:rounded-t-none ${
            reversed ? "lg:[direction:ltr] lg:rounded-r-[36px]" : "lg:rounded-l-[36px]"
          }`}
        >
          {project.gallery.length > 0 ? (
            <div className="overflow-x-auto snap-x snap-mandatory flex gap-3 touch-pan-x">
              {project.gallery.map((src) => (
                <div
                  key={src}
                  className="snap-center flex-shrink-0 w-[85%] sm:w-[70%] lg:w-full overflow-hidden rounded-[var(--radius-md)]"
                >
                  <Image
                    src={src}
                    alt={`${project.title} build photo`}
                    width={900}
                    height={640}
                    loading="lazy"
                    sizes="(max-width: 640px) 85vw, (max-width: 1024px) 70vw, 460px"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                  />
                </div>
              ))}
            </div>
          ) : (
            /* No screenshot yet — an intentional technical empty state, never a broken image. */
            <div className="tech-grid relative flex min-h-[320px] flex-col justify-between overflow-hidden rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--bg-sunken)] p-7">
              <span className="mono-label text-xs uppercase text-[color:var(--graphite)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="editorial-title text-[clamp(1.5rem,3vw,2.2rem)] leading-[1.06] text-[color:var(--ink)]">
                  {project.title}
                </p>
                <p className="mono-label mt-4 inline-flex items-center gap-2 rounded-full border border-dashed border-[color:var(--line-strong)] px-3 py-1.5 text-[10px] uppercase text-[color:var(--graphite)]">
                  Project preview coming soon
                </p>
              </div>
            </div>
          )}
        </div>

        <div className={`p-6 sm:p-8 md:p-10 ${reversed ? "lg:[direction:ltr]" : ""}`}>
          <motion.div variants={fadeUp} className="mono-label text-xs uppercase text-[color:var(--graphite)]">
            {project.eyebrow}
          </motion.div>
          <motion.h3
            variants={fadeUp}
            className="editorial-title mt-3 text-[clamp(1.8rem,3.4vw,2.8rem)] leading-[1.02]"
          >
            {project.title}
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="mt-3 max-w-[52ch] text-[1.02rem] leading-relaxed text-[color:var(--ink-soft)]"
          >
            {project.tagline}
          </motion.p>
          <motion.p variants={fadeUp} className="mt-4 max-w-[56ch] text-[0.95rem] leading-relaxed text-[color:var(--graphite)]">
            {project.overview}
          </motion.p>

          {/* Only metrics that actually have a value are shown. Unfilled ones
              stay in projects.ts as null and simply do not render — a visitor
              never sees an internal placeholder. */}
          {knownMetrics.length > 0 && (
            <motion.div variants={fadeUp} className="mt-7 grid gap-3 sm:grid-cols-2">
              {knownMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-[color:var(--surface-2)] px-4 py-3"
                >
                  <p className="mono-label text-[10px] uppercase text-[color:var(--graphite)]">
                    {metric.label}
                  </p>
                  <p className="mt-1 text-lg font-semibold text-[color:var(--accent)]">
                    <AnimatedMetric value={metric.value as string} />
                  </p>
                </div>
              ))}
            </motion.div>
          )}

          <motion.div variants={fadeUp} className="mt-8 space-y-5">
            {detailBlocks.map((block) => (
              <div key={block.label}>
                <p className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
                  {block.label}
                </p>
                <p className="mt-1.5 text-[0.95rem] leading-relaxed text-[color:var(--ink-soft)]">
                  {project[block.key] as string}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <p className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">Key Contributions</p>
            <ul className="mt-2 space-y-1.5 text-[0.95rem] leading-relaxed text-[color:var(--ink-soft)]">
              {project.contributions.map((item) => (
                <li key={item} className="flex gap-2">
                  <span aria-hidden="true">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="mono-label rounded-full border border-[color:var(--line)] px-3 py-1.5 text-[11px] uppercase text-[color:var(--ink-soft)]"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="mt-9 flex flex-wrap items-center gap-3">
            {project.links.live && (
              <a
                href={project.links.live}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ className: "gap-2" })}
              >
                Live Demo
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.links.caseStudy && (
              <a
                href={project.links.caseStudy}
                className={buttonVariants({ variant: "subtle", className: "gap-2" })}
              >
                Case Study
                <ArrowUpRight size={16} />
              </a>
            )}
            {project.links.github && (
              <a
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
                className={buttonVariants({ variant: "subtle", className: "gap-2" })}
              >
                <Code2 size={16} />
                GitHub
              </a>
            )}
            {!project.links.live && !project.links.github && !project.links.caseStudy && (
              <span className="mono-label rounded-full border border-dashed border-[color:var(--line-strong)] px-3 py-1.5 text-[10px] uppercase text-[color:var(--graphite)]">
                Private project
              </span>
            )}
            <span className="mono-label text-xs text-[color:var(--graphite)]">{project.timeframe}</span>
          </motion.div>
        </div>
      </div>
    </motion.article>
  );
}
