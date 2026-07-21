"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

// The headline "sharpens": resolves from a soft 2px blur into razor focus.
export function SharpenHeadline({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <h1 className={className}>{children}</h1>;
  return (
    <motion.h1
      className={className}
      initial={{ filter: "blur(2px)", opacity: 0.45 }}
      animate={{ filter: "blur(0px)", opacity: 1 }}
      transition={{ duration: 1.05, delay: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.h1>
  );
}

// The blade passing over the whetstone: a single amber hairline drawn once
// along the hero's 17° bevel edge.
export function BevelStroke({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      aria-hidden="true"
      className={className}
      style={{ rotate: "-17deg", transformOrigin: "left center" }}
      initial={reduce ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0.9 }}
      animate={{ scaleX: 1, opacity: 1 }}
      transition={{ duration: 0.95, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}
