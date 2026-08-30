"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

import { navItems } from "@/constants/data";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { useActiveSection } from "@/lib/use-active-section";

export function SiteHeader() {
  const { scrollY } = useScroll();
  const [condensed, setCondensed] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(navItems.map((i) => i.href.slice(1)));

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    setCondensed(latest > 24);
    // Reveal on any upward movement; hide only well past the hero.
    if (menuOpen) return;
    setHidden(latest > previous && latest > 320);
  });

  // Body scroll lock while the drawer is open.
  useEffect(() => {
    document.body.classList.toggle("is-locked", menuOpen);
    return () => document.body.classList.remove("is-locked");
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-130%" : "0%" }}
        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
        className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3 sm:px-5 sm:pt-4"
      >
        <div
          className={`flex w-full max-w-[1024px] items-center gap-2 rounded-full border px-2 py-2 transition-[background-color,border-color,box-shadow,padding] duration-400 sm:gap-3 sm:px-3 ${
            condensed
              ? "glass border-[color:var(--line)] shadow-[var(--shadow-soft)]"
              : "border-transparent bg-transparent"
          }`}
        >
          <Link
            href="#home"
            className="mono-label inline-flex h-10 shrink-0 items-center rounded-full px-2.5 text-[11px] uppercase tracking-[0.1em] text-[color:var(--ink)] sm:px-3 sm:text-xs"
          >
            Sanjay
            <span className="text-[color:var(--accent)]">.</span>
          </Link>

          {/* Desktop nav */}
          <nav aria-label="Primary" className="ml-auto hidden md:block">
            <ul className="flex items-center gap-0.5">
              {navItems.map((item) => {
                const id = item.href.slice(1);
                const isActive = active === id;
                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "true" : undefined}
                      className={`relative inline-flex rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors duration-300 lg:px-4 ${
                        isActive
                          ? "text-[color:var(--ink)]"
                          : "text-[color:var(--graphite)] hover:text-[color:var(--ink)]"
                      }`}
                    >
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          transition={{ type: "spring", stiffness: 380, damping: 32 }}
                          className="absolute inset-0 -z-10 rounded-full bg-[color:var(--bg-sunken)]"
                        />
                      )}
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1.5 md:ml-0">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="tap-target inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] bg-[color:var(--surface)] text-[color:var(--ink-soft)] transition-colors hover:text-[color:var(--ink)] md:hidden"
            >
              <Menu size={16} aria-hidden="true" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="drawer"
            className="fixed inset-0 z-[60] md:hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              onClick={() => setMenuOpen(false)}
              variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 h-full w-full cursor-default bg-[color:var(--bg)]/80 backdrop-blur-sm"
            />

            <motion.nav
              id="mobile-nav"
              aria-label="Mobile"
              variants={{
                open: { y: "0%", opacity: 1 },
                closed: { y: "3%", opacity: 0 },
              }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-3 overflow-hidden rounded-[var(--radius-lg)] border border-[color:var(--line)] bg-[color:var(--surface)] shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between border-b border-[color:var(--line)] px-5 py-4">
                <span className="mono-label text-[11px] uppercase tracking-[0.1em] text-[color:var(--graphite)]">
                  Navigation
                </span>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close navigation menu"
                  autoFocus
                  className="tap-target inline-flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--line)] text-[color:var(--ink)]"
                >
                  <X size={16} aria-hidden="true" />
                </button>
              </div>

              <ul className="p-2">
                {navItems.map((item, i) => {
                  const id = item.href.slice(1);
                  const isActive = active === id;
                  return (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.05 + i * 0.045, duration: 0.28 }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        aria-current={isActive ? "true" : undefined}
                        className="flex items-center justify-between rounded-[var(--radius-sm)] px-4 py-3.5 text-[1rem] font-medium text-[color:var(--ink)] transition-colors hover:bg-[color:var(--bg-sunken)]"
                      >
                        {item.label}
                        {isActive && (
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 rounded-full bg-[color:var(--accent)]"
                          />
                        )}
                      </Link>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
