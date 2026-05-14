"use client";

import Image from "next/image";
import {
  AtSign,
  ArrowUpRight,
  BriefcaseBusiness,
  Send,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

import {
  fadeUp,
  floatMotion,
  liftOnHover,
  staggerContainer,
  viewportConfig,
} from "@/animations";
import { achievements, skillPills } from "@/constants/data";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/magnetic-button";

export function PortfolioPage() {
  const { scrollYProgress } = useScroll();
  const heroParallax = useTransform(scrollYProgress, [0, 1], [0, -80]);

  const pcImages = [
    "/pc-build/0DA5F8DC-057A-4C90-B406-6DB19D66ADB9_1_105_c.jpeg",
    "/pc-build/228364BF-D5D0-4F48-BDD2-7199AACA3409_1_105_c.jpeg",
    "/pc-build/37491C6B-82A5-47C4-B0AE-9CC19C4681A2_1_105_c.jpeg",
    "/pc-build/37E11621-9AB4-445B-B55E-F971F984E0FA_1_105_c.jpeg",
  ];

  return (
    <main className="relative overflow-clip pb-20 text-[#0a0a0a]">
      <div className="noise-overlay" />

      <div className="pointer-events-none absolute -top-36 left-[-120px] h-[360px] w-[360px] rounded-full bg-[#d5e2ff] blur-[130px]" />
      <div className="pointer-events-none absolute right-[-100px] top-[760px] h-[320px] w-[320px] rounded-full bg-[#ffd9b4] blur-[130px]" />

      <section id="home" className="section-shell section-gap relative pt-28 md:pt-32">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-col items-center gap-8"
        >
          <motion.div variants={fadeUp} className="space-y-2 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[clamp(1.8rem,4vw,3.8rem)] font-light tracking-wider text-[#7b7b7b] uppercase"
            >
              SANJAY SUBASH
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a] to-[#3b82f6] bg-clip-text text-[clamp(3rem,7vw,7.2rem)] font-black leading-[0.88] tracking-tighter text-transparent"
            >
              is Software
              <br />
              Engineer
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-[clamp(2.2rem,5vw,4.2rem)] font-bold tracking-tight text-[#0a0a0a]"
            >
              &amp; Experience Designer
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} style={{ y: heroParallax }} className="w-full">
            <motion.div {...floatMotion} className="relative isolate mx-auto w-full max-w-[560px]">
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-screen -translate-x-1/2 -translate-y-1/2 overflow-hidden whitespace-nowrap opacity-15 md:opacity-20">
                <motion.div
                  aria-hidden="true"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                  className="flex w-max items-center gap-8 text-[clamp(1.1rem,2.4vw,2.5rem)] font-semibold uppercase tracking-[0.3em] text-[#0a0a0a]"
                >
                  <div className="flex items-center gap-8 pr-8">
                    <span>software developer</span>
                    <span>uiux designer</span>
                    <span>fullstack developer</span>
                    <span>pc assembler</span>
                    <span>data analyst</span>
                  </div>
                  <div className="flex items-center gap-8 pr-8">
                    <span>software developer</span>
                    <span>uiux designer</span>
                    <span>fullstack developer</span>
                    <span>pc assembler</span>
                    <span>data analyst</span>
                  </div>
                </motion.div>
              </div>

              <div className="relative z-10 h-[420px] w-full overflow-hidden rounded-[28px] md:h-[520px]">
                <Image
                  src="/bandwp.png"
                  alt="Portrait of Sanjay Subash"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 560px"
                  className="object-cover object-center"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#f5f5f3] via-[#f5f5f3]/80 to-transparent" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.ul
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {skillPills.map((skill) => (
            <motion.li
              key={skill}
              variants={fadeUp}
              className="rounded-full border border-black/10 bg-white/70 px-5 py-2.5 text-sm font-medium tracking-[-0.015em]"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </section>

      <section id="highlights" className="section-shell section-gap">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="mb-10"
        >
          <motion.h2
            variants={fadeUp}
            className="editorial-title text-[clamp(2rem,4.3vw,3.8rem)] font-semibold"
          >
            Works &amp; Projects
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
          className="grid gap-6 lg:grid-cols-2"
        >
          <motion.article
            variants={fadeUp}
            {...liftOnHover}
            className="glass-card rounded-[34px] p-8 md:p-10"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">Full-Stack Developer</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">Data Analyst</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">Live Platform</span>
            </div>

            <h3 className="editorial-title max-w-[14ch] text-[clamp(2rem,4.6vw,4.4rem)] font-semibold leading-[0.96]">
              Aaruchudar Human Intelligence Platform
            </h3>

            <p className="muted-copy mt-5 max-w-[58ch] text-[1.02rem] leading-relaxed md:text-[1.08rem]">
              Built and contributed to a scalable full-stack platform focused on Human Intelligence Labs, student engagement, certification workflows, and organizational digital experiences.
            </p>

            <p className="mt-5 max-w-[62ch] text-[0.98rem] leading-relaxed text-black/75">
              Worked as a Full-Stack Developer and Data Analyst at Aaruchudar, contributing to the development of internal platforms, UI systems, analytics workflows, certificate management systems, and interactive web experiences. Collaborated on frontend architecture, deployment workflows, dashboard features, and optimization of user-facing applications.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React.js",
                    "Tailwind CSS",
                    "Node.js",
                    "MongoDB",
                    "Vercel",
                    "REST APIs",
                    "Power BI",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-black/75">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Key Contributions</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/75">
                  <li>Developed responsive and modern UI components</li>
                  <li>Worked on dashboard and admin portal features</li>
                  <li>Implemented certificate generation workflows</li>
                  <li>Assisted in deployment and production updates</li>
                  <li>Improved performance and frontend user experience</li>
                  <li>Supported analytics and reporting workflows</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://aaruchudar.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-6 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
              >
                View Work
              </a>
              <p className="text-sm text-black/50">May 2025 – Present</p>
            </div>
          </motion.article>

          <motion.article
            variants={fadeUp}
            {...liftOnHover}
            className="glass-card rounded-[34px] p-8 md:p-10"
          >
            <div className="mb-8 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-black/45">
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">3D Visualization</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">Neural Mapping</span>
              <span className="rounded-full border border-black/10 bg-white/70 px-4 py-2">Live Demo</span>
            </div>

            <h3 className="editorial-title max-w-[14ch] text-[clamp(2rem,4.2vw,4rem)] font-semibold leading-[0.96]">
              Brain — Interactive 3D Neural Mapping Platform
            </h3>

            <p className="muted-copy mt-5 max-w-[58ch] text-[1.02rem] leading-relaxed md:text-[1.08rem]">
              Built an advanced interactive 3D neural mapping platform focused on brain region visualization, human intelligence analysis, and lab-based cognitive exploration.
            </p>

            <p className="mt-5 max-w-[62ch] text-[0.98rem] leading-relaxed text-black/75">
              Developed a futuristic interactive 3D brain visualization platform with neural region mapping, cortex isolation, lab exploration systems, real-time neural analysis interfaces, dynamic brain region highlighting, responsive dashboard UI, human intelligence report systems, and analytics modules.
            </p>

            <p className="mt-5 text-sm leading-relaxed text-black/70">
              Interactive AI-inspired 3D neural mapping and human intelligence visualization platform with immersive analytical dashboard experiences.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Tech Stack</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React.js",
                    "Three.js / React Three Fiber",
                    "Tailwind CSS",
                    "TypeScript",
                    "Framer Motion",
                    "Vercel Deployment",
                  ].map((item) => (
                    <span key={item} className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-black/75">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-black/45">Key Contributions</p>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-black/75">
                  <li>Designed and developed futuristic neuroscience-inspired UI</li>
                  <li>Implemented interactive 3D brain visualization system</li>
                  <li>Built neural mapping and cortex interaction modules</li>
                  <li>Developed reusable scalable frontend components</li>
                  <li>Optimized rendering performance and responsiveness</li>
                  <li>Integrated dynamic analytics and reporting sections</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://brain-seven-chi.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-6 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Brain Platform Live Demo
                </a>
                <p className="text-sm text-black/50">Interactive 3D Platform</p>
              </div>
            </motion.article>
          </motion.div>
        </section>

        <section className="section-shell section-gap pt-8">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[36px] border border-white/20 bg-gradient-to-br from-[#0d4fd6] via-[#0f63f3] to-[#0d48bc] px-8 py-14 text-white shadow-[0_34px_80px_rgba(22,76,200,0.35)] md:px-14"
          >
            <div className="absolute -left-16 top-12 h-48 w-48 rounded-full bg-white/20 blur-2xl" />
            <div className="absolute right-10 top-14 h-24 w-24 rounded-[24px] border border-white/30 bg-white/20 backdrop-blur" />
            <motion.div
              animate={{ y: [0, -16, 0], rotate: [0, 7, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute right-24 bottom-16 h-20 w-20 rounded-full border border-white/35 bg-white/20"
            />
            <h3 className="editorial-title mx-auto max-w-[16ch] text-center text-[clamp(2rem,4.8vw,4.8rem)] font-semibold leading-[1.02]">
              The power of visual in product design
            </h3>
            <p className="mx-auto mt-5 max-w-[60ch] text-center text-[1.07rem] leading-relaxed text-white/85">
              How visual systems affect perception, interaction and digital
              experiences.
            </p>
            <div className="mt-10 flex justify-center">
              <MagneticButton>
                <Button variant="subtle" size="lg" className="gap-2 bg-white text-black">
                  Read article
                  <ArrowUpRight size={17} />
                </Button>
              </MagneticButton>
            </div>
          </motion.article>
        </section>

        <section className="section-shell section-gap pt-8">
          <motion.article
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="relative overflow-hidden rounded-[36px] border border-black/10 bg-white p-8 shadow-[0_34px_80px_rgba(10,10,10,0.06)] md:p-14"
          >
            <div className="grid items-center gap-10 lg:grid-cols-2">
              <div>
                <h3 className="editorial-title max-w-[18ch] text-[clamp(1.9rem,3.8vw,3.8rem)] font-semibold leading-[0.96]">
                  Custom High-Performance Workstation Build
                </h3>

                <p className="mt-5 max-w-[56ch] text-[1.02rem] leading-relaxed text-black/75">
                  Designed and assembled a custom high-performance workstation optimized for full-stack development, AI experimentation, 3D rendering, gaming, and multitasking workflows. Built with RTX graphics, liquid cooling, RGB airflow optimization, and a modern performance-focused architecture.
                </p>

                <p className="mt-5 text-sm text-black/65">
                  Short: Built a custom RTX-powered workstation for development, AI workloads, rendering, and high-performance multitasking.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="flex flex-wrap gap-2">
                    {[
                      "NVIDIA GeForce RTX",
                      "ASUS GPU",
                      "Liquid CPU Cooler",
                      "Cooler Master MWE Gold 750W",
                      "RGB Cooling",
                      "High-Airflow Cabinet",
                    ].map((t) => (
                      <span key={t} className="rounded-full border border-black/10 bg-white/70 px-3 py-2 text-sm text-black/75">
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="mt-4 list-disc pl-5 text-sm text-black/75 space-y-2">
                    <li>RTX-powered graphics setup</li>
                    <li>Liquid cooling with RGB thermal management</li>
                    <li>High airflow optimized cabinet and multi-fan architecture</li>
                    <li>Development + gaming hybrid workstation tuned for AI and rendering</li>
                  </ul>
                </div>

                <div className="mt-8">
                  <MagneticButton>
                    <a
                      href="/pc-build"
                      className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-6 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5 gap-2"
                    >
                      View Case Study
                      <ArrowUpRight size={17} />
                    </a>
                  </MagneticButton>
                </div>
              </div>

              <div>
                <div className="relative max-w-[520px]">
                  <div className="overflow-x-auto snap-x snap-mandatory -mx-4 px-4 flex gap-4 touch-pan-x">
                    {pcImages.map((src) => (
                      <div key={src} className="snap-center flex-shrink-0 w-[320px] md:w-[420px] rounded-[18px] overflow-hidden">
                        <Image src={src} alt="PC build" width={1280} height={800} className="h-auto w-full object-cover rounded-[18px]" />
                      </div>
                    ))}
                  </div>
                  <p className="mt-3 text-sm text-black/55">Swipe to view build photos (from /public/pc-build)</p>
                </div>
              </div>
            </div>

            <div className="glass-card mt-10 flex flex-wrap items-center justify-between gap-4 rounded-full px-5 py-4 md:px-8">
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Sparkles size={15} />
                Custom PC Build
              </span>
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <Star size={15} />
                7 Components
              </span>
              <Button variant="subtle" className="gap-2">
                Case study
                <ArrowUpRight size={16} />
              </Button>
            </div>
          </motion.article>
        </section>

        <section id="contact" className="section-shell section-gap pt-10">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeUp}
            className="mx-auto grid max-w-[1100px] gap-6 rounded-[36px] border border-black/10 bg-[#efefec] px-6 py-10 shadow-[0_24px_64px_rgba(20,20,20,0.06)] md:px-10 md:py-12 lg:grid-cols-[0.9fr_1.1fr]"
          >
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-black/45">
                  Contact
                </p>
                <h3 className="editorial-title mt-4 text-[clamp(2rem,4.6vw,4.5rem)] font-semibold leading-[0.95]">
                  Want to connect?
                  <br />
                  Let&apos;s build something premium.
                </h3>
              </div>

              <p className="max-w-[40ch] text-[1.05rem] leading-relaxed text-black/70">
                I’m available for product design, frontend engineering, data-driven dashboards, and collaborative startup work.
              </p>

              <div className="space-y-3 rounded-[28px] border border-black/10 bg-white/70 p-5">
                <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-4">
                  <span className="text-sm font-medium text-black/55">Location</span>
                  <span className="text-sm font-semibold">India</span>
                </div>
                <div className="flex items-center justify-between gap-4 border-b border-black/5 pb-4">
                  <span className="text-sm font-medium text-black/55">Availability</span>
                      <span className="text-sm font-semibold">Open for freelance &amp; full-time</span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-medium text-black/55">Primary Focus</span>
                  <span className="text-sm font-semibold">Frontend, UX, Data, AI Systems</span>
                </div>
              </div>

              <MagneticButton>
                <a
                  href="https://www.linkedin.com/in/sanjaysubash/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-12 items-center justify-center rounded-full bg-[#0a0a0a] px-6 text-sm font-medium text-white transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Open LinkedIn
                </a>
              </MagneticButton>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "LinkedIn", href: "https://www.linkedin.com/in/sanjaysubash/", meta: "Professional updates", icon: BriefcaseBusiness },
                { label: "Instagram", href: "#", meta: "Visual stories", icon: Send },
                { label: "Phone", href: "tel:+910000000000", meta: "Add your number", icon: AtSign },
                { label: "Email", href: "mailto:hello@example.com", meta: "Add your email", icon: Sparkles },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="group rounded-[28px] border border-black/10 bg-white/80 p-5 transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(10,10,10,0.08)]"
                  >
                    <div className="mb-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-black/5">
                      <Icon size={18} />
                    </div>
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h4 className="text-lg font-semibold">{item.label}</h4>
                        <p className="mt-1 text-sm text-black/55">{item.meta}</p>
                      </div>
                      <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </div>
                  </a>
                );
              })}
            </div>
          </motion.div>
        </section>

        <footer className="section-shell pb-8 pt-20">
          <div className="flex flex-col items-center gap-6 rounded-[32px] border border-black/10 bg-white/60 px-6 py-10 text-center">
            <div className="flex items-center gap-3">
              {[AtSign, BriefcaseBusiness, Send].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ y: -4, scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
            <p className="editorial-title text-2xl font-semibold">Thanks for watching!</p>
            <p className="text-sm text-black/50">Copyright 2026 Sanjay Subash. All rights reserved.</p>
          </div>
        </footer>
      </main>
  );
}
