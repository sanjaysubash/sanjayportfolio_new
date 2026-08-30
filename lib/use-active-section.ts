"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section owns the middle of the viewport. Uses
 * IntersectionObserver rather than a scroll handler so it costs nothing
 * per frame.
 */
export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState(ids[0] ?? "");
  // Callers pass a fresh array literal each render; depend on the contents
  // so the observer is not torn down and rebuilt on every render.
  const key = ids.join(",");

  useEffect(() => {
    const elements = key
      .split(",")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const visible = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) visible.set(entry.target.id, entry.intersectionRatio);
          else visible.delete(entry.target.id);
        });

        if (visible.size === 0) return;
        // Whichever tracked section is showing most wins.
        const best = [...visible.entries()].sort((a, b) => b[1] - a[1])[0];
        setActive(best[0]);
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);

  return active;
}
