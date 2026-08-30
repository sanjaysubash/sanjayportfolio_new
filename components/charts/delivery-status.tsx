"use client";

import { motion } from "framer-motion";

import { useInView } from "@/lib/use-in-view";
import { deliveryStatus, totalWorkstreams } from "@/content/metrics";

// Colour carries meaning: solid accent = finished, hatched = paused.
const TONE_STYLE: Record<string, string> = {
  complete: "bg-[color:var(--accent)]",
  delivered: "bg-[color:var(--accent)] opacity-70",
  active: "bg-[color:var(--accent)] opacity-40",
  paused: "bg-[color:var(--line-strong)]",
};

export function DeliveryStatus() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <div ref={ref}>
      <div className="mb-4 flex items-baseline justify-between gap-4">
        <span className="mono-label text-[11px] uppercase text-[color:var(--graphite)]">
          Delivery status
        </span>
        <span className="mono-label text-[11px] tabular-nums text-[color:var(--graphite)]">
          {totalWorkstreams} total
        </span>
      </div>

      {/* Segmented bar */}
      <div
        role="img"
        aria-label={`Delivery status of ${totalWorkstreams} products and systems: ${deliveryStatus
          .map((s) => `${s.count} ${s.label.toLowerCase()}`)
          .join(", ")}.`}
        className="flex h-2.5 w-full gap-1 overflow-hidden rounded-full"
      >
        {deliveryStatus.map((slice, i) => (
          <motion.div
            key={slice.label}
            initial={{ flexGrow: 0, opacity: 0 }}
            animate={
              inView
                ? { flexGrow: slice.count, opacity: 1 }
                : { flexGrow: 0, opacity: 0 }
            }
            transition={{
              duration: 0.8,
              delay: 0.08 * i,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`h-full rounded-full ${
              TONE_STYLE[slice.tone] ?? "bg-[color:var(--line-strong)]"
            } ${slice.tone === "paused" ? "status-dashed !border-0" : ""}`}
            style={{ flexBasis: 0 }}
          />
        ))}
      </div>

      <ul className="mt-5 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
        {deliveryStatus.map((slice) => (
          <li key={slice.label} className="flex items-center gap-2.5">
            <span
              aria-hidden="true"
              className={`h-2 w-2 shrink-0 rounded-full ${
                TONE_STYLE[slice.tone] ?? "bg-[color:var(--line-strong)]"
              }`}
            />
            <span className="min-w-0 flex-1 truncate text-[0.85rem] text-[color:var(--ink-soft)]">
              {slice.label}
            </span>
            <span className="mono-label text-[11px] tabular-nums text-[color:var(--ink)]">
              {slice.count}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
