"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

function dovetailPath(width = 1200, mid = 20, up = 6, down = 34, period = 150): string {
  let d = `M0 ${mid}`;
  for (let x = 0; x + period <= width; x += period) {
    d += ` L${x + 15} ${mid} L${x + 30} ${up} L${x + 60} ${up} L${x + 75} ${mid}`;
    d += ` L${x + 90} ${down} L${x + 120} ${down} L${x + 135} ${mid} L${x + 150} ${mid}`;
  }
  d += ` L${width} ${mid}`;
  return d;
}

// Hero seam draws once on load — the joint locks home left-to-right.
export function DovetailSeam() {
  const reduce = useReducedMotion();
  const d = dovetailPath();
  return (
    <svg className="seam" viewBox="0 0 1200 40" preserveAspectRatio="none" aria-hidden="true">
      <motion.path
        d={d}
        fill="none"
        stroke="#a8823f"
        strokeWidth={1.4}
        strokeLinejoin="round"
        initial={{ pathLength: reduce ? 1 : 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: reduce ? 0 : 0.75, delay: reduce ? 0 : 0.35, ease: "easeInOut" }}
      />
    </svg>
  );
}

// Polished-surface reveal: image sunk in walnut-ink, a light band sweeps across on scroll-in.
export function PolishedReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="reveal">{children}</div>;
  }

  return (
    <div className="reveal">
      {children}
      <motion.div
        className="reveal-shade"
        initial={{ opacity: 1 }}
        whileInView={{ opacity: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1] }}
      />
      <motion.div
        className="reveal-band"
        initial={{ x: "0%" }}
        whileInView={{ x: "280%" }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
      />
    </div>
  );
}
