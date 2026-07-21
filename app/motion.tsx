"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

type RevealProps = { children: ReactNode; className?: string };

export function Reveal({ children, className }: RevealProps) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.62, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}

type StrataProps = { prev: string; next: string };

// topsoil -> loam -> clay -> crushed aggregate
const BANDS = ["#1e1811", "#a06a33", "#565a5e", "#cbc4b6"];

export function StrataCut({ prev, next }: StrataProps) {
  const reduce = useReducedMotion();
  return (
    <div
      className="strata"
      aria-hidden="true"
      style={{ ["--prev" as string]: prev, ["--next" as string]: next }}
    >
      <div className="strata__fill strata__fill--top" />
      <div className="strata__fill strata__fill--bot" />
      <div className="strata__bands">
        {BANDS.map((c, i) => (
          <motion.span
            key={c}
            className="strata__band"
            style={{ background: c }}
            initial={reduce ? false : { x: i % 2 === 0 ? "-7%" : "7%", opacity: 0.2 }}
            whileInView={{ x: "0%", opacity: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{
              duration: 0.5,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        ))}
      </div>
    </div>
  );
}
