"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check, Copy } from "lucide-react";

import { useToast } from "@/components/providers/toast-provider";
import { cn } from "@/lib/utils";

type CopyButtonProps = {
  value: string;
  label: string;
  toastMessage?: string;
  className?: string;
};

export function CopyButton({
  value,
  label,
  toastMessage,
  className,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => { if (timer.current) clearTimeout(timer.current); }, []);

  const copy = async (event: React.MouseEvent) => {
    // These buttons often sit inside links/cards — don't trigger the parent.
    event.preventDefault();
    event.stopPropagation();
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      toast(toastMessage ?? `${label} copied to clipboard`);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      toast("Couldn't copy — your browser blocked clipboard access", "error");
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? `${label} copied` : `Copy ${label.toLowerCase()}`}
      className={cn(
        "tap-target inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--graphite)] transition-colors duration-300 hover:border-[color:var(--accent-line)] hover:text-[color:var(--accent)]",
        className
      )}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={copied ? "done" : "idle"}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          transition={{ duration: 0.16 }}
          className="flex"
        >
          {copied ? (
            <Check size={13} className="text-[color:var(--accent)]" />
          ) : (
            <Copy size={13} />
          )}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}
