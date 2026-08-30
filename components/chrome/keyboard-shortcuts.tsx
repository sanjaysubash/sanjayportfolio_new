"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { useTheme } from "@/components/providers/theme-provider";
import { useToast } from "@/components/providers/toast-provider";

export const SHORTCUTS: { keys: string; action: string }[] = [
  { keys: "H", action: "Go to Home" },
  { keys: "A", action: "Go to About" },
  { keys: "E", action: "Go to Expertise" },
  { keys: "X", action: "Go to Experience" },
  { keys: "W", action: "Go to Work" },
  { keys: "C", action: "Go to Contact" },
  { keys: "M", action: "Toggle light / dark theme" },
  { keys: "B", action: "Back to top" },
  { keys: "?", action: "Open this dialog" },
  { keys: "Esc", action: "Close menu or dialog" },
];

const SECTION_KEYS: Record<string, string> = {
  h: "home",
  a: "about",
  e: "expertise",
  x: "experience",
  w: "work",
  c: "contact",
};

/** True when focus sits somewhere the user is genuinely typing. */
function isTyping(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName;
  return (
    tag === "INPUT" ||
    tag === "TEXTAREA" ||
    tag === "SELECT" ||
    target.isContentEditable
  );
}

export function KeyboardShortcuts() {
  const [open, setOpen] = useState(false);
  const { toggleTheme } = useTheme();
  const { toast, dismissAll } = useToast();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const restoreTo = useRef<HTMLElement | null>(null);

  const scrollToSection = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "auto"
        : "smooth",
    });
    // Move focus so keyboard users land where the page just scrolled.
    el.setAttribute("tabindex", "-1");
    el.focus({ preventScroll: true });
  }, []);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.metaKey || event.ctrlKey || event.altKey) return;

      if (event.key === "Escape") {
        setOpen(false);
        dismissAll();
        return;
      }

      if (isTyping(event.target)) return;

      if (event.key === "?") {
        event.preventDefault();
        restoreTo.current = document.activeElement as HTMLElement;
        setOpen((v) => !v);
        return;
      }

      if (open) return;

      const key = event.key.toLowerCase();

      if (SECTION_KEYS[key]) {
        event.preventDefault();
        scrollToSection(SECTION_KEYS[key]);
        return;
      }
      if (key === "m") {
        event.preventDefault();
        toggleTheme();
        toast("Theme updated");
        return;
      }
      if (key === "b") {
        event.preventDefault();
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        });
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, scrollToSection, toggleTheme, toast, dismissAll]);

  // Focus management + focus trap for the dialog.
  useEffect(() => {
    if (!open) {
      restoreTo.current?.focus?.();
      return;
    }
    closeRef.current?.focus();

    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || !dialogRef.current) return;
      const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onTab);
    return () => document.removeEventListener("keydown", onTab);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <button
            type="button"
            aria-label="Close keyboard shortcuts"
            onClick={() => setOpen(false)}
            className="absolute inset-0 h-full w-full cursor-default bg-[color:var(--bg)]/75 backdrop-blur-sm"
          />
          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="shortcuts-title"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.99 }}
            transition={{ duration: 0.26, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[30rem] overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[var(--shadow-lift)]"
          >
            <div className="flex items-center justify-between border-b border-[color:var(--line)] px-5 py-4">
              <h2
                id="shortcuts-title"
                className="text-[0.98rem] font-semibold text-[color:var(--ink)]"
              >
                Keyboard shortcuts
              </h2>
              <button
                ref={closeRef}
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close keyboard shortcuts"
                className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--ink)]"
              >
                <X size={14} aria-hidden="true" />
              </button>
            </div>

            <ul className="max-h-[60vh] overflow-y-auto p-2">
              {SHORTCUTS.map((s) => (
                <li
                  key={s.keys}
                  className="flex items-center justify-between gap-4 rounded-[var(--radius-sm)] px-3 py-2.5 text-[0.88rem] hover:bg-[color:var(--bg-sunken)]"
                >
                  <span className="text-[color:var(--ink-soft)]">{s.action}</span>
                  <kbd className="mono-label shrink-0 rounded-md border border-[color:var(--line-strong)] bg-[color:var(--bg-sunken)] px-2 py-1 text-[11px] text-[color:var(--ink)]">
                    {s.keys}
                  </kbd>
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
