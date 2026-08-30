import { Variants } from "framer-motion";

export const viewportConfig = {
  once: true,
  amount: 0.25,
};

// For blocks taller than the viewport. `amount` is a fraction of the *element*,
// so a 25% threshold on a 3000px article needs 750px on screen at once — on a
// short phone viewport that is never satisfied and the content stays invisible.
// Trigger on first contact instead.
export const viewportConfigTall = {
  once: true,
  amount: 0,
  margin: "0px 0px -80px 0px",
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 180,
      damping: 16,
      mass: 0.9,
    },
  },
};

export const liftOnHover = {
  whileHover: {
    y: -8,
    scale: 1.015,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 18,
    },
  },
  whileTap: {
    scale: 0.98,
  },
};

export const floatMotion = {
  animate: {
    y: [0, -10, 0],
  },
  transition: {
    duration: 7,
    repeat: Infinity,
    ease: "easeInOut" as const,
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};
