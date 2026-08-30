"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

import { heroRoles } from "@/constants/data";
import { siteConfig } from "@/content/site";
import { buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";

// Load choreography: background → eyebrow → headline lines → paragraph →
// pills → CTAs → portrait. Transform/opacity only.
const rise = {
  hidden: { opacity: 0, y: 22 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.12 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const HEADLINE = [
  { text: "Building ", accent: false },
  { text: "AI\u2011powered products", accent: true },
  { text: " where engineering, design and data meet.", accent: false },
];

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const glowY = useTransform(scrollYProgress, [0, 0.3], [0, prefersReducedMotion ? 0 : 60]);

  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="section-shell relative pb-16 pt-28 sm:pb-20 sm:pt-32 md:pt-36 lg:pt-40"
    >
      {/* Background: technical grid + a single soft accent bloom. */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[720px] overflow-hidden"
      >
        <div className="tech-grid absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
        <motion.div
          style={{ y: glowY }}
          className="absolute left-1/2 top-[-16%] h-[520px] w-[min(90vw,900px)] -translate-x-1/2 rounded-full opacity-[0.5] blur-[110px]"
        >
          <div className="h-full w-full bg-[radial-gradient(circle_at_50%_50%,var(--accent-soft),transparent_65%)]" />
        </motion.div>
      </motion.div>

      <div className="grid items-center gap-12 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
        {/* ── Copy column ──────────────────────────────────────── */}
        <div className="min-w-0">
          <motion.p
            custom={0}
            initial="hidden"
            animate="visible"
            variants={rise}
            className="mono-label flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[11px] uppercase text-[color:var(--graphite)] sm:text-xs"
          >
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
            </span>
            {siteConfig.name} — {siteConfig.role}
          </motion.p>

          <h1
            id="hero-heading"
            className="editorial-title mt-6 text-[clamp(2rem,5vw,3.5rem)] leading-[1.04] text-[color:var(--ink)]"
          >
            {/* Revealed as one block per clause so the line break reads intentionally. */}
            {HEADLINE.map((part, i) => (
              <motion.span
                key={part.text}
                custom={1 + i * 0.35}
                initial="hidden"
                animate="visible"
                variants={rise}
                className={part.accent ? "text-accent-grade" : undefined}
              >
                {part.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={rise}
            className="mt-6 max-w-[54ch] text-[1rem] leading-relaxed text-[color:var(--ink-soft)] sm:text-[1.06rem]"
          >
            I build full-stack products end to end — the schema, the API, the
            dashboard that makes data legible, and the interface that makes
            someone trust it. My contribution extends past implementation into
            architecture, engineering process and technology strategy.
          </motion.p>

          <motion.ul
            custom={4}
            initial="hidden"
            animate="visible"
            variants={rise}
            className="mono-label mt-7 flex flex-wrap gap-1.5 text-[10px] uppercase text-[color:var(--ink-soft)] sm:text-[11px]"
          >
            {heroRoles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] px-3 py-1.5 transition-colors duration-300 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
              >
                {role}
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={rise}
            className="mt-9 flex flex-wrap items-center gap-2.5"
          >
            <a href="#work" className={buttonVariants({ size: "lg" })}>
              View projects
              <ArrowDown
                size={15}
                aria-hidden="true"
                className="transition-transform duration-300 group-hover/btn:translate-y-0.5"
              />
            </a>

            {siteConfig.resume.available ? (
              <a
                href={siteConfig.resume.href}
                download
                className={buttonVariants({ variant: "subtle", size: "lg" })}
              >
                Download resume
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ) : null}

            <a
              href={`mailto:${siteConfig.email}`}
              className={buttonVariants({ variant: "subtle", size: "lg" })}
            >
              <Mail size={15} aria-hidden="true" />
              Get in touch
            </a>
          </motion.div>

          <motion.div
            custom={6}
            initial="hidden"
            animate="visible"
            variants={rise}
            className="mt-7 flex items-center gap-2"
          >
            <span className="mono-label truncate text-[11px] text-[color:var(--graphite)]">
              {siteConfig.email}
            </span>
            <CopyButton value={siteConfig.email} label="Email" toastMessage="Email copied to clipboard" />
          </motion.div>
        </div>

        {/* ── Portrait column ──────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-[420px] lg:max-w-none"
        >
          {/* Orbital rings — slow, subtle, disabled under reduced motion. */}
          {!prefersReducedMotion && (
            <motion.div
              aria-hidden="true"
              animate={{ rotate: 360 }}
              transition={{ duration: 58, repeat: Infinity, ease: "linear" }}
              className="pointer-events-none absolute inset-[-6%] -z-10 hidden sm:block"
            >
              <div className="h-full w-full rounded-full border border-dashed border-[color:var(--line-strong)] opacity-60" />
            </motion.div>
          )}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[-3%] -z-10 hidden rounded-full border border-[color:var(--line)] sm:block"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-[6%] -z-10 rounded-[38%] bg-[radial-gradient(circle_at_50%_45%,var(--accent-soft),transparent_70%)] blur-2xl"
          />

          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--line)] bg-[color:var(--bg-sunken)]">
            <Image
              src="/bandwp.png"
              alt="Portrait of Sanjay Subash"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 460px"
              className="portrait-media object-cover object-center transition-[filter] duration-700"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[color:var(--bg)] via-[color:var(--bg)]/50 to-transparent" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
