"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/providers/toast-provider";

const STORAGE_KEY = "sanjay-cookie-choice";
type Choice = "accepted" | "declined" | "essential-only";

export function CookieBanner() {
  const [open, setOpen] = useState(false);
  const [showPrefs, setShowPrefs] = useState(false);
  const { toast } = useToast();
  const firstBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        // Let the page settle before interrupting.
        const t = setTimeout(() => setOpen(true), 1200);
        return () => clearTimeout(t);
      }
    } catch {
      /* storage blocked — stay silent rather than nagging every load */
    }
  }, []);

  const decide = useCallback(
    (choice: Choice) => {
      try {
        localStorage.setItem(STORAGE_KEY, choice);
      } catch {
        /* choice still applies for this session */
      }
      setOpen(false);
      toast(
        choice === "accepted"
          ? "Cookie preferences saved"
          : "Only essential cookies will be used"
      );
    },
    [toast]
  );

  useEffect(() => {
    if (!open) return;
    firstBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") decide("declined");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, decide]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="false"
          aria-labelledby="cookie-title"
          aria-describedby="cookie-desc"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 16 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-3 bottom-3 z-[65] sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-w-[24rem]"
        >
          <div className="glass overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] p-5 shadow-[var(--shadow-lift)]">
            <div className="flex items-start gap-3">
              <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[color:var(--accent-soft)] text-[color:var(--accent)]">
                <Cookie size={15} aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <h2
                  id="cookie-title"
                  className="text-[0.95rem] font-semibold text-[color:var(--ink)]"
                >
                  Cookies
                </h2>
                <p
                  id="cookie-desc"
                  className="mt-1.5 text-[0.85rem] leading-relaxed text-[color:var(--ink-soft)]"
                >
                  This website uses cookies to improve your experience.
                </p>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {showPrefs && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <dl className="mt-4 space-y-2.5 border-t border-[color:var(--line)] pt-4 text-[0.82rem]">
                    <div className="flex justify-between gap-3">
                      <dt className="text-[color:var(--ink)]">Essential</dt>
                      <dd className="text-[color:var(--graphite)]">
                        Theme &amp; consent — always on
                      </dd>
                    </div>
                    <div className="flex justify-between gap-3">
                      <dt className="text-[color:var(--ink)]">Analytics</dt>
                      <dd className="text-[color:var(--graphite)]">
                        Vercel Analytics — cookieless
                      </dd>
                    </div>
                  </dl>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-5 flex flex-wrap gap-2">
              <Button
                ref={firstBtnRef}
                size="sm"
                onClick={() => decide("accepted")}
                className="flex-1"
              >
                Accept
              </Button>
              <Button size="sm" variant="subtle" onClick={() => decide("declined")}>
                Decline
              </Button>
              <Button
                size="sm"
                variant="ghost"
                aria-expanded={showPrefs}
                onClick={() => setShowPrefs((v) => !v)}
              >
                {showPrefs ? "Hide" : "Preferences"}
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
