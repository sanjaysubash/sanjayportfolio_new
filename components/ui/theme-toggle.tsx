"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { useToast } from "@/components/providers/toast-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { toast } = useToast();
  const [tipOpen, setTipOpen] = useState(false);

  const next = theme === "dark" ? "light" : "dark";
  const label = `Switch to ${next} mode`;

  const handle = () => {
    toggleTheme();
    toast(`${next === "dark" ? "Dark" : "Light"} mode enabled`);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={handle}
        onMouseEnter={() => setTipOpen(true)}
        onMouseLeave={() => setTipOpen(false)}
        onFocus={() => setTipOpen(true)}
        onBlur={() => setTipOpen(false)}
        aria-label={label}
        aria-describedby="theme-toggle-tip"
        className={cn(
          "tap-target inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink-soft)] transition-colors duration-300 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]",
          className
        )}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ opacity: 0, rotate: -70, scale: 0.6 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 70, scale: 0.6 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
            className="flex"
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </motion.span>
        </AnimatePresence>
      </button>

      <AnimatePresence>
        {tipOpen && (
          <motion.span
            id="theme-toggle-tip"
            role="tooltip"
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16 }}
            className="mono-label glass pointer-events-none absolute left-1/2 top-full z-50 mt-2 -translate-x-1/2 whitespace-nowrap rounded-full border border-[color:var(--line)] px-2.5 py-1 text-[10px] uppercase text-[color:var(--ink-soft)] shadow-[var(--shadow-soft)]"
          >
            {label} · M
          </motion.span>
        )}
      </AnimatePresence>
    </div>
  );
}
