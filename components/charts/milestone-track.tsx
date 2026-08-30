"use client";

import { useId, useState } from "react";
import { motion } from "framer-motion";

import { useInView } from "@/lib/use-in-view";
import { milestones } from "@/content/metrics";

/**
 * Horizontal year axis with one node per recorded milestone. Same source as
 * the Journey section, shown as a compact strip rather than a list.
 */
export function MilestoneTrack() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const [active, setActive] = useState(milestones.length - 1);
  const titleId = useId();

  return (
    <div ref={ref}>
      <p id={titleId} className="sr-only">
        Milestones by year:{" "}
        {milestones.map((m) => `${m.year}, ${m.title}`).join("; ")}.
      </p>

      <div className="relative pt-1" aria-labelledby={titleId}>
        {/* Axis */}
        <div className="absolute left-0 right-0 top-[13px] h-px bg-[color:var(--line)]" />
        <motion.div
          aria-hidden="true"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: inView ? 1 : 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "left" }}
          className="absolute left-0 right-0 top-[13px] h-px bg-[color:var(--accent)]"
        />

        <ul className="relative flex justify-between">
          {milestones.map((m, i) => {
            const isActive = active === i;
            return (
              <li key={m.year} className="flex min-w-0 flex-col items-center">
                <button
                  type="button"
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  onClick={() => setActive(i)}
                  aria-label={`${m.year}: ${m.title}`}
                  aria-pressed={isActive}
                  className="tap-target flex flex-col items-center"
                >
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: inView ? 1 : 0 }}
                    transition={{
                      duration: 0.4,
                      delay: 0.15 + i * 0.09,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className={`relative z-10 block rounded-full border-2 border-[color:var(--surface)] transition-[width,height,background-color] duration-300 ${
                      isActive
                        ? "h-[13px] w-[13px] bg-[color:var(--accent)]"
                        : "h-2.5 w-2.5 bg-[color:var(--line-strong)]"
                    }`}
                  />
                  <span
                    className={`mono-label mt-3 text-[10px] tabular-nums transition-colors duration-300 sm:text-[11px] ${
                      isActive
                        ? "text-[color:var(--ink)]"
                        : "text-[color:var(--graphite)]"
                    }`}
                  >
                    {m.year}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Readout for the selected node — keeps the strip compact */}
      <div className="mt-5 min-h-[3.25rem] rounded-[var(--radius-sm)] border border-[color:var(--line)] bg-[color:var(--surface-2)] px-4 py-3">
        <motion.p
          key={active}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
          className="text-[0.88rem] text-[color:var(--ink)]"
        >
          <span className="mono-label mr-2 text-[11px] tabular-nums text-[color:var(--accent)]">
            {milestones[active].year}
          </span>
          {milestones[active].title}
        </motion.p>
      </div>
    </div>
  );
}
