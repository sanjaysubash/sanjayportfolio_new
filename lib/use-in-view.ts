"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fires once when the element first intersects. Used for chart draw-in and
 * counters so nothing animates off-screen.
 *
 * `amount` is intentionally small — it is a fraction of the *element*, so a
 * large threshold on a block taller than the viewport can never be satisfied.
 */
export function useInView<T extends HTMLElement>(amount = 0.2) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // No IntersectionObserver (very old browser): reveal on the next frame
    // rather than synchronously, so this stays out of the render path.
    if (typeof IntersectionObserver === "undefined") {
      const id = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(id);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: amount }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [amount]);

  return { ref, inView };
}
