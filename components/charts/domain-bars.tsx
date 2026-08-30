"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";

import { useInView } from "@/lib/use-in-view";
import { techDomains } from "@/content/metrics";

/**
 * Horizontal bars. The value plotted is a COUNT of technologies listed in
 * techStack.ts for that layer — never a proficiency score, which this
 * repository has no data for.
 */
export function DomainBars() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const [active, setActive] = useState<string | null>(null);
  const titleId = useId();
  const max = Math.max(...techDomains.map((d) => d.items.length));

  return (
    <div ref={ref}>
      <p id={titleId} className="sr-only">
        Technologies used, grouped by layer. Values are counts of listed
        technologies, not proficiency ratings.
      </p>

      <ul aria-labelledby={titleId} className="flex flex-col gap-5">
        {techDomains.map((domain, i) => {
          const isActive = active === domain.domain;
          return (
            <li
              key={domain.domain}
              onMouseEnter={() => setActive(domain.domain)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(domain.domain)}
              onBlur={() => setActive(null)}
              tabIndex={0}
              className="group rounded-[var(--radius-sm)] outline-none focus-visible:outline-2 focus-visible:outline-[color:var(--accent)]"
            >
              <div className="mb-2 flex items-baseline justify-between gap-4">
                <span className="text-[0.92rem] font-medium text-[color:var(--ink)]">
                  {domain.domain}
                </span>
                <span className="mono-label text-[11px] tabular-nums text-[color:var(--graphite)]">
                  {domain.items.length}
                </span>
              </div>

              {/* Track */}
              <div className="h-2 w-full overflow-hidden rounded-full bg-[color:var(--bg-sunken)]">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: domain.items.length / max } : { scaleX: 0 }}
                  transition={{
                    duration: 0.85,
                    delay: 0.06 * i,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  style={{ transformOrigin: "left" }}
                  className="h-full rounded-full bg-[color:var(--accent)] opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>

              {/* Tooltip-on-interaction: the actual technologies behind the bar */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-wrap gap-1.5 pt-2.5">
                  {domain.items.map((item) => (
                    <span
                      key={item}
                      className="mono-label rounded-full border border-[color:var(--line)] px-2 py-0.5 text-[10px] uppercase text-[color:var(--graphite)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
