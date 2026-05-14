"use client";

import Link from "next/link";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

import { navItems } from "@/constants/data";

export function FloatingNavbar() {
  const { scrollY } = useScroll();
  const [isShrunk, setIsShrunk] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsShrunk(latest > 40);
  });

  return (
    <motion.nav
      animate={{ scale: isShrunk ? 0.96 : 1, y: isShrunk ? -4 : 0 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className="fixed left-1/2 top-5 z-50 w-[calc(100%-2rem)] max-w-[760px] -translate-x-1/2 rounded-full border border-black/10 bg-white/80 px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] backdrop-blur-xl"
    >
      <ul className="flex items-center justify-between gap-1 text-sm font-medium tracking-[-0.02em] md:gap-2">
        {navItems.map((item) => {
          const isExternal = item.href.startsWith("http");
          return (
            <li key={item.label}>
              <Link
                href={item.href}
                target={isExternal ? "_blank" : undefined}
                rel={isExternal ? "noreferrer" : undefined}
                className="inline-flex rounded-full px-4 py-2.5 text-[#262626] transition-all duration-300 hover:-translate-y-0.5 hover:bg-black hover:text-white"
              >
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </motion.nav>
  );
}
