"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.2, 0.7, 0.2, 1] as const;

export function Reveal({
  children,
  className,
  as = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = as === "li" ? motion.li : motion.div;
  return (
    <Comp
      className={className}
      initial={reduce ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.5, ease: EASE }}
    >
      {children}
    </Comp>
  );
}

/* Specimen registers onto the grid, then its label block stamps in. */
export function Specimen({
  children,
  index,
}: {
  children: ReactNode;
  index: number;
}) {
  const reduce = useReducedMotion();
  const delay = (index % 3) * 0.08;
  return (
    <motion.article
      className="specimen"
      initial={reduce ? false : { opacity: 0, y: 26, scale: 0.985 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-6% 0px" }}
      transition={{ duration: 0.5, ease: EASE, delay }}
    >
      {children}
    </motion.article>
  );
}
