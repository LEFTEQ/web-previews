"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

export function UnrollStrip({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="kb-strip">{children}</div>;
  }

  return (
    <motion.div
      className="kb-strip"
      initial={{ clipPath: "inset(0 100% 0 0)" }}
      whileInView={{ clipPath: "inset(0 0% 0 0)" }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{
        duration: 0.95,
        ease: [0.16, 1, 0.3, 1],
        delay: index * 0.04,
      }}
    >
      {children}
    </motion.div>
  );
}
