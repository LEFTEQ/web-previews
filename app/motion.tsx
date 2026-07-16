"use client";

import { motion, useReducedMotion } from "motion/react";

export function Coat({ color, bare }: { color: string; bare?: boolean }) {
  const reduce = useReducedMotion();

  // Tryskání stays raw steel — no coat pass. Render nothing but a faint sheen.
  if (bare) {
    return (
      <span
        className="chip-coat"
        aria-hidden="true"
        style={{ background: "transparent" }}
      />
    );
  }

  return (
    <motion.span
      className="chip-coat"
      aria-hidden="true"
      style={{ background: color }}
      initial={reduce ? { scaleX: 1 } : { scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 0.85, ease: [0.2, 0.7, 0.2, 1] }
      }
    />
  );
}
