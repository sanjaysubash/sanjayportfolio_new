"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

import { fadeUp, staggerContainer, viewportConfig } from "@/animations";
import { faq } from "@/content/faq";
import { sectionNumber } from "@/content/sections";

export function Faq() {
  // Single-open accordion: only one answer competes for attention at a time.
  const [open, setOpen] = useState<number | null>(0);
  const baseId = useId();

  return (
    <section
      id="faq"
      aria-labelledby="faq-heading"
      className="section-shell section-gap pt-0"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mb-10 max-w-[60ch] lg:mb-12"
      >
        <motion.p
          variants={fadeUp}
          className="mono-label text-xs uppercase text-[color:var(--graphite)]"
        >
          {sectionNumber("faq")} — FAQ
        </motion.p>
        <motion.h2
          id="faq-heading"
          variants={fadeUp}
          className="editorial-title mt-4 text-[clamp(1.9rem,4.2vw,3.2rem)] leading-[1.04]"
        >
          Questions, answered plainly.
        </motion.h2>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={viewportConfig}
        variants={staggerContainer}
        className="mx-auto max-w-[62rem] overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-[color:var(--surface)]"
      >
        {faq.map((item, i) => {
          const isOpen = open === i;
          const buttonId = `${baseId}-q-${i}`;
          const panelId = `${baseId}-a-${i}`;
          return (
            <motion.li
              key={item.question}
              variants={fadeUp}
              className="border-b border-[color:var(--line)] last:border-b-0"
            >
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left transition-colors duration-300 hover:bg-[color:var(--surface-2)] sm:px-7 sm:py-6"
                >
                  <span className="text-[0.98rem] font-medium text-[color:var(--ink)] sm:text-[1.05rem]">
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isOpen
                        ? "border-[color:var(--accent-line)] bg-[color:var(--accent-soft)] text-[color:var(--accent)]"
                        : "border-[color:var(--line)] text-[color:var(--graphite)]"
                    }`}
                  >
                    <ChevronDown size={15} aria-hidden="true" />
                  </motion.span>
                </button>
              </h3>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="panel"
                    id={panelId}
                    role="region"
                    aria-labelledby={buttonId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-[68ch] px-5 pb-6 text-[0.94rem] leading-relaxed text-[color:var(--ink-soft)] sm:px-7 sm:pb-7">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.li>
          );
        })}
      </motion.ul>
    </section>
  );
}
