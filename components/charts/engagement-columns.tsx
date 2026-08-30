"use client";

import { useId } from "react";
import { motion } from "framer-motion";

import { useInView } from "@/lib/use-in-view";
import { engagementScope } from "@/content/metrics";

const SERIES = [
  { key: "workstreams" as const, label: "Products & systems", opacity: 1 },
  { key: "contributions" as const, label: "Technical contributions", opacity: 0.45 },
];

/** Grouped columns: how much was recorded against each engagement. */
export function EngagementColumns() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const titleId = useId();

  const max = Math.max(
    ...engagementScope.flatMap((e) => [e.workstreams, e.contributions]),
    1
  );

  return (
    <div ref={ref}>
      <p id={titleId} className="sr-only">
        Recorded scope per engagement.{" "}
        {engagementScope
          .map(
            (e) =>
              `${e.company}: ${e.workstreams} products and systems, ${e.contributions} technical contributions`
          )
          .join("; ")}
        .
      </p>

      <div
        role="img"
        aria-labelledby={titleId}
        className="flex h-[168px] items-end gap-3 sm:gap-5"
      >
        {engagementScope.map((entry, col) => (
          <div key={entry.company} className="flex min-w-0 flex-1 flex-col items-center">
            <div className="flex h-[140px] w-full items-end justify-center gap-1.5">
              {SERIES.map((series, s) => {
                const value = entry[series.key];
                const height = value === 0 ? 0 : (value / max) * 100;
                return (
                  <div
                    key={series.key}
                    className="group relative flex h-full w-full max-w-[34px] flex-col justify-end"
                  >
                    <span className="mono-label mb-1.5 text-center text-[10px] tabular-nums text-[color:var(--graphite)]">
                      {value}
                    </span>
                    {value === 0 ? (
                      // A real zero, drawn as a baseline dash rather than omitted.
                      <span
                        aria-hidden="true"
                        className="h-[3px] w-full rounded-full border-t border-dashed border-[color:var(--line-strong)]"
                      />
                    ) : (
                      <motion.span
                        initial={{ height: 0 }}
                        animate={{ height: inView ? `${height}%` : 0 }}
                        transition={{
                          duration: 0.8,
                          delay: 0.1 * col + 0.06 * s,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="w-full rounded-t-[5px] bg-[color:var(--accent)]"
                        style={{ opacity: series.opacity }}
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <span className="mono-label mt-3 w-full truncate text-center text-[10px] uppercase text-[color:var(--ink-soft)]">
              {entry.company}
            </span>
          </div>
        ))}
      </div>

      <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-[color:var(--line)] pt-4">
        {SERIES.map((series) => (
          <li key={series.key} className="flex items-center gap-2">
            <span
              aria-hidden="true"
              className="h-2.5 w-2.5 rounded-sm bg-[color:var(--accent)]"
              style={{ opacity: series.opacity }}
            />
            <span className="text-[0.8rem] text-[color:var(--graphite)]">
              {series.label}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
