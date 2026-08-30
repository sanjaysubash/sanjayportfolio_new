"use client";

import { ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { cn } from "@/lib/utils";

const ACCENT_GLOW =
  "0 30px 70px rgba(79, 70, 229, 0.28), 0 8px 24px rgba(79, 70, 229, 0.16)";

type TiltCardProps = {
  children: ReactNode;
  className?: string;
};

export function TiltCard({ children, className }: TiltCardProps) {
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springX = useSpring(x, { stiffness: 200, damping: 22 });
  const springY = useSpring(y, { stiffness: 200, damping: 22 });

  const rotateX = useTransform(springY, [0, 1], [6, -6]);
  const rotateY = useTransform(springX, [0, 1], [-6, 6]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width;
    const py = (event.clientY - rect.top) / rect.height;
    x.set(px);
    y.set(py);
    event.currentTarget.style.setProperty("--spot-x", `${px * 100}%`);
    event.currentTarget.style.setProperty("--spot-y", `${py * 100}%`);
  };

  const handleMouseLeave = () => {
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      whileHover={{ scale: 1.02, boxShadow: ACCENT_GLOW }}
      whileTap={{ scale: 0.99 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={cn("spotlight-card", className)}
    >
      {children}
    </motion.div>
  );
}
