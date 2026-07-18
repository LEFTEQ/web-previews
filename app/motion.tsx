"use client";

import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";

// Signature gesture: 'tilting the slats'.
// Scroll rotates the louver bands and opens/shuts the warm daylight.
// Lightweight CSS transform on background gradients — no other motion.
export function LouverRake() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [-7, 7]);
  const glow = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    [0.35, 0.92, 0.42, 0.95, 0.3]
  );

  if (reduce) {
    return (
      <div className="rake" aria-hidden="true">
        <div className="rake__slats" style={{ transform: "rotate(3deg)" }} />
        <div
          className="rake__glow"
          style={{ transform: "rotate(3deg)", opacity: 0.5 }}
        />
      </div>
    );
  }

  return (
    <div className="rake" aria-hidden="true">
      <motion.div className="rake__slats" style={{ rotate }} />
      <motion.div className="rake__glow" style={{ rotate, opacity: glow }} />
    </div>
  );
}
