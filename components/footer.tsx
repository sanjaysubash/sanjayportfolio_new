"use client";

import { BriefcaseBusiness, Code2, FileDown, Mail, Send } from "lucide-react";

import { siteConfig } from "@/content/site";
import { CopyButton } from "@/components/ui/copy-button";

const builtWith = ["Next.js", "TypeScript", "Tailwind", "Framer Motion"];

export function Footer() {
  const links = [
    { icon: Mail, href: `mailto:${siteConfig.email}`, label: "Email" },
    { icon: BriefcaseBusiness, href: siteConfig.linkedin, label: "LinkedIn" },
    ...(siteConfig.github
      ? [{ icon: Code2, href: siteConfig.github, label: "GitHub" }]
      : []),
    { icon: Send, href: siteConfig.instagram, label: "Instagram" },
    ...(siteConfig.resume.available
      ? [{ icon: FileDown, href: siteConfig.resume.href, label: "Resume" }]
      : []),
  ];

  return (
    <footer className="section-shell pb-10">
      <div className="overflow-hidden rounded-[var(--radius-xl)] border border-[color:var(--line)] bg-[color:var(--surface)]">
        <div className="flex flex-col gap-8 p-7 sm:p-10 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <p className="editorial-title text-[1.35rem] text-[color:var(--ink)]">
              {siteConfig.name}
            </p>
            <p className="mono-label mt-1.5 text-[11px] uppercase text-[color:var(--graphite)]">
              {siteConfig.role}
            </p>

            <div className="mt-5 flex items-center gap-2">
              <span className="mono-label truncate text-[12px] text-[color:var(--ink-soft)]">
                {siteConfig.email}
              </span>
              <CopyButton
                value={siteConfig.email}
                label="Email"
                toastMessage="Email copied to clipboard"
              />
            </div>

            <p className="mt-6 inline-flex items-center gap-2.5 rounded-full border border-[color:var(--line)] bg-[color:var(--bg-sunken)] px-3.5 py-2">
              <span className="relative flex h-1.5 w-1.5 shrink-0">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[color:var(--accent)] opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]" />
              </span>
              <span className="text-[0.82rem] text-[color:var(--ink-soft)]">
                Available for meaningful engineering work.
              </span>
            </p>
          </div>

          <nav aria-label="Footer" className="shrink-0">
            <ul className="flex flex-wrap gap-2">
              {links.map(({ icon: Icon, href, label }) => {
                const external = href.startsWith("http");
                return (
                  <li key={label}>
                    <a
                      href={href}
                      target={external ? "_blank" : undefined}
                      rel={external ? "noreferrer" : undefined}
                      aria-label={label}
                      className="group inline-flex h-10 items-center gap-2 rounded-full border border-[color:var(--line)] px-4 text-[0.85rem] text-[color:var(--ink-soft)] transition-[transform,border-color,color] duration-300 hover:-translate-y-0.5 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]"
                    >
                      <Icon size={14} aria-hidden="true" />
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex flex-col gap-3 border-t border-[color:var(--line)] px-7 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
          <p className="text-[0.8rem] text-[color:var(--graphite)]">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="mono-label text-[10px] uppercase text-[color:var(--graphite)]">
            Built with {builtWith.join(" · ")} · Press ? for shortcuts
          </p>
        </div>
      </div>
    </footer>
  );
}
