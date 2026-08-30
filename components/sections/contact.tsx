"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, Check, FileDown, Loader2, Mail, Send } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { availability } from "@/content/contact";
import { siteConfig } from "@/content/site";
import { Button, buttonVariants } from "@/components/ui/button";
import { CopyButton } from "@/components/ui/copy-button";
import { useToast } from "@/components/providers/toast-provider";
import { sectionNumber } from "@/content/sections";

type FormState = "idle" | "opening" | "opened" | "error";

export function Contact() {
  const [state, setState] = useState<FormState>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { toast } = useToast();

  // This site has no backend. The form composes a message and hands it to the
  // visitor's own mail client — it never claims to have "sent" anything.
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setState("opening");
    try {
      const subject = encodeURIComponent(
        form.name ? `Portfolio enquiry from ${form.name}` : "Portfolio enquiry"
      );
      const body = encodeURIComponent(
        `${form.message}\n\n—\n${form.name}${form.email ? `\n${form.email}` : ""}`
      );
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
      setState("opened");
      toast("Your email client should now be open");
    } catch {
      setState("error");
      toast("Something went wrong. Please email me directly.", "error");
    }
  };

  const channels = [
    {
      label: "Email",
      meta: siteConfig.email,
      href: `mailto:${siteConfig.email}`,
      icon: Mail,
      copy: siteConfig.email,
    },
    {
      label: "LinkedIn",
      meta: "Professional updates",
      href: siteConfig.linkedin,
      icon: BriefcaseBusiness,
      copy: siteConfig.linkedin,
    },
    ...(siteConfig.github
      ? [
          {
            label: "GitHub",
            meta: "Code",
            href: siteConfig.github,
            icon: ArrowUpRight,
            copy: siteConfig.github,
          },
        ]
      : []),
    ...(siteConfig.resume.available
      ? [
          {
            label: "Resume",
            meta: "Download PDF",
            href: siteConfig.resume.href,
            icon: FileDown,
            copy: null,
          },
        ]
      : []),
  ];

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--line)] bg-[color:var(--bg-sunken)]"
      >
        <div className="grid gap-10 p-6 sm:p-9 md:p-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-14">
          {/* ── Left: pitch + channels ────────────────────────── */}
          <div className="min-w-0">
            <motion.p
              variants={fadeUp}
              className="mono-label text-xs uppercase text-[color:var(--graphite)]"
            >
              {sectionNumber("contact")} — Contact
            </motion.p>
            <motion.h2
              id="contact-heading"
              variants={fadeUp}
              className="editorial-title mt-4 max-w-[16ch] text-[clamp(1.9rem,4.6vw,3.2rem)] leading-[1.03]"
            >
              Let&apos;s build something meaningful.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 max-w-[44ch] text-[0.99rem] leading-relaxed text-[color:var(--ink-soft)]"
            >
              I&apos;m available for product engineering, full-stack work, and
              the architecture and process around it.
            </motion.p>

            <motion.dl
              variants={fadeUp}
              className="mt-8 space-y-3 rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--surface)] p-5"
            >
              {[
                { k: "Location", v: availability.location },
                { k: "Availability", v: availability.status },
                { k: "Current focus", v: availability.focus },
              ].map((row, i, arr) => (
                <div
                  key={row.k}
                  className={`flex flex-wrap items-baseline justify-between gap-3 ${
                    i < arr.length - 1 ? "border-b border-[color:var(--line)] pb-3" : ""
                  }`}
                >
                  <dt className="mono-label text-[10px] uppercase text-[color:var(--graphite)]">
                    {row.k}
                  </dt>
                  <dd className="text-right text-[0.86rem] font-medium text-[color:var(--ink)]">
                    {row.v}
                  </dd>
                </div>
              ))}
            </motion.dl>

            <motion.ul variants={fadeUp} className="mt-4 grid gap-2.5 sm:grid-cols-2">
              {channels.map((item) => {
                const Icon = item.icon;
                const external = item.href.startsWith("http");
                return (
                  <li key={item.label} className="relative min-w-0">
                    <a
                      href={item.href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      className="group flex h-full items-center gap-3 rounded-[var(--radius-md)] border border-[color:var(--line)] bg-[color:var(--surface)] p-4 pr-12 transition-[transform,border-color,box-shadow] duration-400 hover:-translate-y-0.5 hover:border-[color:var(--accent-line)] hover:shadow-[var(--shadow-soft)]"
                    >
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--bg-sunken)] text-[color:var(--ink-soft)] transition-colors duration-400 group-hover:bg-[color:var(--accent-soft)] group-hover:text-[color:var(--accent)]">
                        <Icon size={15} aria-hidden="true" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-[0.9rem] font-medium text-[color:var(--ink)]">
                          {item.label}
                        </span>
                        <span className="block truncate text-[0.78rem] text-[color:var(--graphite)]">
                          {item.meta}
                        </span>
                      </span>
                    </a>
                    {item.copy && (
                      <span className="absolute right-3 top-1/2 -translate-y-1/2">
                        <CopyButton value={item.copy} label={item.label} />
                      </span>
                    )}
                  </li>
                );
              })}
            </motion.ul>
          </div>

          {/* ── Right: mailto composer ─────────────────────────── */}
          <motion.div
            variants={fadeUp}
            className="surface-card min-w-0 rounded-[var(--radius-lg)] p-6 sm:p-8"
          >
            <h3 className="text-[1.05rem] font-semibold text-[color:var(--ink)]">
              Send a message
            </h3>
            <p className="mt-2 text-[0.85rem] leading-relaxed text-[color:var(--graphite)]">
              This site has no backend. Submitting opens your own email client
              with the message prefilled — nothing is stored or sent from here.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="mono-label mb-2 block text-[10px] uppercase text-[color:var(--graphite)]"
                >
                  Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="h-11 w-full rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-[color:var(--bg)] px-4 text-[0.92rem] text-[color:var(--ink)] outline-none transition-colors placeholder:text-[color:var(--graphite)] focus:border-[color:var(--accent-line)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-email"
                  className="mono-label mb-2 block text-[10px] uppercase text-[color:var(--graphite)]"
                >
                  Email
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="h-11 w-full rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-[color:var(--bg)] px-4 text-[0.92rem] text-[color:var(--ink)] outline-none transition-colors placeholder:text-[color:var(--graphite)] focus:border-[color:var(--accent-line)]"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label
                  htmlFor="contact-message"
                  className="mono-label mb-2 block text-[10px] uppercase text-[color:var(--graphite)]"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-y rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-[color:var(--bg)] px-4 py-3 text-[0.92rem] leading-relaxed text-[color:var(--ink)] outline-none transition-colors placeholder:text-[color:var(--graphite)] focus:border-[color:var(--accent-line)]"
                  placeholder="What are you building?"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                disabled={state === "opening"}
              >
                {state === "opening" ? (
                  <>
                    <Loader2 size={15} className="animate-spin" aria-hidden="true" />
                    Opening your email client…
                  </>
                ) : state === "opened" ? (
                  <>
                    <Check size={15} aria-hidden="true" />
                    Email client opened
                  </>
                ) : (
                  <>
                    <Send size={15} aria-hidden="true" />
                    Compose email
                  </>
                )}
              </Button>

              {/* Status is announced, never faked. */}
              <p aria-live="polite" className="min-h-[1.25rem] text-[0.82rem] text-[color:var(--graphite)]">
                {state === "opened" &&
                  "If nothing opened, your browser may block mail links — copy the address instead."}
                {state === "error" && "Something went wrong. Please email me directly."}
              </p>
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-[color:var(--line)] pt-5">
              <a
                href={`mailto:${siteConfig.email}`}
                className={buttonVariants({ variant: "subtle", size: "sm" })}
              >
                <Mail size={14} aria-hidden="true" />
                {siteConfig.email}
              </a>
              <CopyButton
                value={siteConfig.email}
                label="Email"
                toastMessage="Email copied to clipboard"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
