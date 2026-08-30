"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";

import { useInView } from "@/lib/use-in-view";
import { techDomains } from "@/content/metrics";

const RADIUS = 62;
const STROKE = 18;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const GAP = 3; // degrees of breathing room between arcs

// Opacity ladder off the single accent — no second hue introduced.
const SHADES = [1, 0.72, 0.48, 0.28];

/**
 * Share of listed technologies per layer. Values are COUNTS of entries in
 * techStack.ts — not proficiency, which this repository has no data for.
 */
export function TechDonut() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const [active, setActive] = useState<number | null>(null);
  const titleId = useId();

  const total = techDomains.reduce((sum, d) => sum + d.items.length, 0);

  // Built with a fold rather than a mutable cursor, so nothing is reassigned
  // during render.
  const arcs = techDomains.reduce<
    { domain: (typeof techDomains)[number]; i: number; length: number; offset: number; fraction: number }[]
  >((acc, domain, i) => {
    const consumed = acc.reduce((sum, a) => sum + a.fraction, 0);
    const fraction = domain.items.length / total;
    acc.push({
      domain,
      i,
      fraction,
      length: Math.max(CIRCUMFERENCE * fraction - GAP, 2),
      offset: -(CIRCUMFERENCE * consumed),
    });
    return acc;
  }, []);

  const shown = active !== null ? arcs[active] : null;

  return (
    <div ref={ref} className="flex flex-col items-center gap-6 sm:flex-row sm:gap-8">
      <p id={titleId} className="sr-only">
        Share of listed technologies by layer:{" "}
        {techDomains.map((d) => `${d.domain}, ${d.items.length}`).join("; ")}. Values
        are counts, not proficiency ratings.
      </p>

      <div className="relative shrink-0">
        <svg
          width="160"
          height="160"
          viewBox="0 0 160 160"
          role="img"
          aria-labelledby={titleId}
          className="-rotate-90"
        >
          <circle
            cx="80"
            cy="80"
            r={RADIUS}
            fill="none"
            stroke="var(--bg-sunken)"
            strokeWidth={STROKE}
          />
          {arcs.map(({ domain, i, length, offset }) => (
            <motion.circle
              key={domain.domain}
              cx="80"
              cy="80"
              r={RADIUS}
              fill="none"
              stroke="var(--accent)"
              strokeOpacity={SHADES[i % SHADES.length]}
              strokeWidth={active === i ? STROKE + 5 : STROKE}
              strokeLinecap="butt"
              strokeDasharray={`${length} ${CIRCUMFERENCE}`}
              initial={{ strokeDashoffset: CIRCUMFERENCE }}
              animate={{ strokeDashoffset: inView ? offset : CIRCUMFERENCE }}
              transition={{
                duration: 1,
                delay: 0.12 * i,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transition: "stroke-width 250ms ease" }}
            />
          ))}
        </svg>

        {/* Centre readout follows the hovered arc */}
        <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
          <span className="editorial-title text-[1.7rem] leading-none tabular-nums text-[color:var(--ink)]">
            {shown ? shown.domain.items.length : total}
          </span>
          <span className="mono-label mt-1 max-w-[5.5rem] text-center text-[9px] uppercase leading-tight text-[color:var(--graphite)]">
            {shown ? shown.domain.domain : "Technologies"}
          </span>
        </div>
      </div>

      <ul className="w-full min-w-0 space-y-2">
        {arcs.map(({ domain, i, fraction }) => (
          <li key={domain.domain}>
            <button
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              aria-label={`${domain.domain}: ${domain.items.length} of ${total} technologies`}
              className={`tap-target flex w-full items-center gap-2.5 rounded-[var(--radius-sm)] px-2 py-2.5 text-left transition-colors duration-200 ${
                active === i ? "bg-[color:var(--bg-sunken)]" : ""
              }`}
            >
              <span
                aria-hidden="true"
                className="h-2.5 w-2.5 shrink-0 rounded-full bg-[color:var(--accent)]"
                style={{ opacity: SHADES[i % SHADES.length] }}
              />
              <span className="min-w-0 flex-1 truncate text-[0.86rem] text-[color:var(--ink-soft)]">
                {domain.domain}
              </span>
              <span className="mono-label shrink-0 text-[11px] tabular-nums text-[color:var(--graphite)]">
                {Math.round(fraction * 100)}%
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
