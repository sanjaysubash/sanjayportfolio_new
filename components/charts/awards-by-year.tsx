"use client";

import { useId } from "react";
import { motion } from "framer-motion";

import { useInView } from "@/lib/use-in-view";
import { awardsByYear } from "@/content/achievements";

/** Vertical columns: how many recognitions fall in each recorded year. */
export function AwardsByYear() {
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const titleId = useId();
  const max = Math.max(...awardsByYear.map((a) => a.count), 1);

  return (
    <div ref={ref}>
      <p id={titleId} className="sr-only">
        Recognitions per year:{" "}
        {awardsByYear.map((a) => `${a.year}, ${a.count}`).join("; ")}.
      </p>

      <div
        role="img"
        aria-labelledby={titleId}
        className="flex h-[132px] items-end justify-between gap-3"
      >
        {awardsByYear.map((entry, i) => (
          <div key={entry.year} className="flex min-w-0 flex-1 flex-col items-center">
            <span className="mono-label mb-1.5 text-[11px] tabular-nums text-[color:var(--ink)]">
              {entry.count}
            </span>
            <div className="flex h-[86px] w-full max-w-[42px] items-end">
              <motion.span
                initial={{ height: 0 }}
                animate={{ height: inView ? `${(entry.count / max) * 100}%` : 0 }}
                transition={{
                  duration: 0.75,
                  delay: 0.1 * i,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full rounded-t-[5px] bg-[color:var(--accent)]"
              />
            </div>
            <span className="mono-label mt-2.5 text-[10px] tabular-nums text-[color:var(--graphite)]">
              {entry.year}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
