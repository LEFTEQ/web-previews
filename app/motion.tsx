"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

export function LamelaCover() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // cover retracts left-to-right: left inset grows 0% -> 100%
  const clip = useTransform(
    scrollYProgress,
    [0, 0.85],
    ["inset(0 0 0 0)", "inset(0 0 0 100%)"]
  );

  return (
    <motion.div
      ref={ref}
      className="hero__cover"
      aria-hidden="true"
      style={reduce ? { clipPath: "inset(0 0 0 100%)" } : { clipPath: clip }}
    >
      <div className="slats" />
      {!reduce && (
        <span className="hero__coverlabel">Rolujte — kryt se odvine ↓</span>
      )}
    </motion.div>
  );
}
