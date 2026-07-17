"use client";

import { motion, useReducedMotion } from "motion/react";

export function HeroTitle({ lines }: { lines: string[] }) {
  const reduce = useReducedMotion();

  return (
    <h1 className="hero-title">
      {lines.map((line, i) => (
        <span className="hero-line" key={line}>
          <motion.span
            className="hero-line-inner"
            initial={reduce ? false : { y: "-118%" }}
            animate={{ y: "0%" }}
            transition={{
              delay: i * 0.4,
              duration: 0.52,
              ease: [0.2, 0.9, 0.25, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
