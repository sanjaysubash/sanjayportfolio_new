"use client";

import { useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function BackToTop() {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => setVisible(latest > 800));

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
                ? "auto"
                : "smooth",
            })
          }
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="tap-target glass fixed bottom-5 right-4 z-[55] inline-flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--ink)] shadow-[var(--shadow-lift)] transition-colors hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)] sm:bottom-7 sm:right-7 sm:h-12 sm:w-12"
        >
          <ArrowUp size={17} aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
