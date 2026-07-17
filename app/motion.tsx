"use client";

import { motion, useReducedMotion } from "motion/react";

export function WipeLine() {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="wipe-line"
      aria-hidden="true"
      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.7 }}
      transition={{ duration: 0.62, ease: [0.66, 0, 0.34, 1] }}
    />
  );
}
