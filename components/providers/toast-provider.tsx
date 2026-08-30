"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Info, TriangleAlert, X } from "lucide-react";

type ToastTone = "success" | "error" | "info";

type Toast = {
  id: number;
  message: string;
  tone: ToastTone;
};

type ToastContextValue = {
  toast: (message: string, tone?: ToastTone) => void;
  dismissAll: () => void;
};

const ToastContext = createContext<ToastContextValue | null>(null);

const TONE_ICON = { success: Check, error: TriangleAlert, info: Info } as const;
const AUTO_DISMISS_MS = 2600;

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const nextId = useRef(0);
  const timers = useRef(new Map<number, ReturnType<typeof setTimeout>>());

  const dismiss = useCallback((id: number) => {
    setToasts((list) => list.filter((t) => t.id !== id));
    const timer = timers.current.get(id);
    if (timer) {
      clearTimeout(timer);
      timers.current.delete(id);
    }
  }, []);

  const toast = useCallback(
    (message: string, tone: ToastTone = "success") => {
      const id = nextId.current++;
      // Cap the stack so rapid-fire actions can't bury the page.
      setToasts((list) => [...list.slice(-2), { id, message, tone }]);
      timers.current.set(
        id,
        setTimeout(() => dismiss(id), AUTO_DISMISS_MS)
      );
    },
    [dismiss]
  );

  const dismissAll = useCallback(() => {
    timers.current.forEach(clearTimeout);
    timers.current.clear();
    setToasts([]);
  }, []);

  // Clean up every pending timer on unmount.
  const timersRef = timers;
  useEffect(() => () => timersRef.current.forEach(clearTimeout), [timersRef]);

  const value = useMemo(() => ({ toast, dismissAll }), [toast, dismissAll]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      {/* Polite live region: announced by screen readers without stealing focus. */}
      <div
        aria-live="polite"
        aria-atomic="false"
        className="pointer-events-none fixed inset-x-0 bottom-4 z-[70] flex flex-col items-center gap-2 px-4 sm:bottom-6"
      >
        <AnimatePresence initial={false}>
          {toasts.map((t) => {
            const Icon = TONE_ICON[t.tone];
            return (
              <motion.div
                key={t.id}
                layout
                initial={{ opacity: 0, y: 14, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.97 }}
                transition={{ type: "spring", stiffness: 340, damping: 28 }}
                className="glass pointer-events-auto flex w-full max-w-[26rem] items-center gap-3 rounded-full border border-[color:var(--line)] px-4 py-2.5 shadow-[var(--shadow-lift)]"
              >
                <span
                  className={`inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                    t.tone === "error"
                      ? "bg-[color:var(--bg-sunken)] text-[color:var(--ink)]"
                      : "bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
                  }`}
                >
                  <Icon size={13} aria-hidden="true" />
                </span>
                <p className="min-w-0 flex-1 truncate text-[0.86rem] text-[color:var(--ink)]">
                  {t.message}
                </p>
                <button
                  type="button"
                  onClick={() => dismiss(t.id)}
                  aria-label={`Dismiss notification: ${t.message}`}
                  className="shrink-0 rounded-full p-1 text-[color:var(--graphite)] transition-colors hover:text-[color:var(--ink)]"
                >
                  <X size={13} aria-hidden="true" />
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside <ToastProvider>");
  return ctx;
}
