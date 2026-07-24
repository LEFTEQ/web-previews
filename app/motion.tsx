"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type Props = { children: ReactNode; className?: string; id?: string };

export function Grid({ children, className, id }: Props) {
  const reduce = useReducedMotion();
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.09, delayChildren: 0.02 },
    },
  };
  return (
    <motion.div
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {children}
    </motion.div>
  );
}

export function Tile({ children, className, id }: Props) {
  const reduce = useReducedMotion();
  const item = reduce
    ? {
        hidden: { opacity: 0 },
        show: { opacity: 1, transition: { duration: 0.3 } },
      }
    : {
        hidden: { opacity: 0, scale: 0.98 },
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.34, ease: [0.22, 0.61, 0.36, 1] as const },
        },
      };
  return (
    <motion.div id={id} className={className} variants={item}>
      {children}
    </motion.div>
  );
}
