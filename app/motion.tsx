"use client";

import { motion, useReducedMotion } from "motion/react";

export function SqueegeeWipe() {
  const reduce = useReducedMotion();

  // Reduced motion: no fog, no swipe — the headline is simply already clear.
  if (reduce) return null;

  return (
    <div className="wipe" aria-hidden="true">
      <motion.div
        className="wipe-frost"
        initial={{ clipPath: "polygon(-25% 0, 200% 0, 200% 100%, 5% 100%)" }}
        animate={{ clipPath: "polygon(125% 0, 200% 0, 200% 100%, 155% 100%)" }}
        transition={{ duration: 0.75, ease: [0.7, 0, 0.2, 1], delay: 0.15 }}
      />
      <motion.div
        className="wipe-edge"
        initial={{ left: "-10%", opacity: 0 }}
        animate={{ left: ["-10%", "-10%", "132%", "132%"], opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 0.95,
          ease: [0.7, 0, 0.2, 1],
          delay: 0.05,
          times: [0, 0.16, 0.9, 1],
        }}
      />
    </div>
  );
}
