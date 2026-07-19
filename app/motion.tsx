"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/**
 * The maják sweep: one warm amber cone travels across the dark hero once,
 * then the ambient pulse (CSS) takes over — the signal that someone is awake.
 */
export function BeaconSweep() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      className="beacon-sweep"
      aria-hidden="true"
      initial={{ x: "-45%", opacity: 0 }}
      animate={{ x: "135%", opacity: [0, 1, 1, 0] }}
      transition={{ duration: 2.8, ease: "easeInOut", times: [0, 0.15, 0.85, 1] }}
    />
  );
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
};

/** Content lifts into view as the beacon light passes over it. */
export function Reveal({ children, delay = 0, className }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) {
    return <div className={className}>{children}</div>;
  }
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
