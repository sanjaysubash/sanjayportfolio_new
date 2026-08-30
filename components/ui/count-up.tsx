"use client";

import { useEffect, useRef, useState } from "react";

import { useInView } from "@/lib/use-in-view";

/**
 * Counts an integer up when it scrolls into view.
 *
 * The true value is always exposed to assistive tech via aria-label, so the
 * animation is purely visual and never hides the real number.
 */
export function CountUp({
  value,
  suffix = "",
  duration = 900,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.4);
  const [display, setDisplay] = useState(0);
  const frame = useRef<number | null>(null);

  useEffect(() => {
    if (!inView) return;

    // Both branches schedule their first state write on a frame callback, so
    // nothing is set synchronously while the effect is running.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const start = performance.now();

    const step = (now: number) => {
      if (reduced) {
        setDisplay(value);
        return;
      }
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) frame.current = requestAnimationFrame(step);
    };

    frame.current = requestAnimationFrame(step);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [inView, value, duration]);

  return (
    <span ref={ref} aria-label={`${value}${suffix}`}>
      <span aria-hidden="true">
        {display}
        {suffix}
      </span>
    </span>
  );
}

/** Non-numeric values (e.g. "Custom", "60fps") pass straight through. */
export function AnimatedMetric({ value }: { value: string }) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return <span>{value}</span>;
  return <CountUp value={parseInt(match[1], 10)} suffix={match[2]} />;
}
