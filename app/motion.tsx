"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * The single ongoing motion after the CSS "power-on" boot sequence:
 * the "open now" status dot breathes. Everything else is CSS-first.
 */
export function StatusDot() {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <span
        aria-hidden="true"
        style={{
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "#86c06a",
          display: "inline-block",
          flex: "0 0 auto",
        }}
      />
    );
  }

  return (
    <motion.span
      aria-hidden="true"
      initial={{ opacity: 0.35 }}
      animate={{ opacity: [0.35, 1, 1, 0.35] }}
      transition={{
        duration: 2.4,
        times: [0, 0.15, 0.7, 1],
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        width: 9,
        height: 9,
        borderRadius: "50%",
        background: "#86c06a",
        boxShadow: "0 0 8px rgba(134,192,106,0.8)",
        display: "inline-block",
        flex: "0 0 auto",
      }}
    />
  );
}
