"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

/* The signature moment: the 608 mark spins up like a flicked wheel,
   decelerates with bearing inertia, then locks. */
export function SpinMark({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className="spin-host">{children}</div>;
  return (
    <motion.div
      className="spin-host"
      initial={{ rotate: -20, opacity: 0.2 }}
      animate={{ rotate: 1000, opacity: 1 }}
      transition={{ duration: 2.4, ease: [0.12, 0.62, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Catalog columns snap in — the lock "triggers" the grid. */
export function Snap({
  children,
  index = 0,
}: {
  children: ReactNode;
  index?: number;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y: 46, clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ opacity: 1, y: 0, clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.55, delay: index * 0.09, ease: [0.2, 0.7, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}
