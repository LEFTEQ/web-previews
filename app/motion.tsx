"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

type LineDef = {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay: number;
  dur: number;
  color: string;
  width: number;
};

// Erection order: verticals rise first, ledgers cross, orange brace last.
const LINES: LineDef[] = [
  { x1: 2, y1: 98, x2: 2, y2: 2, delay: 0.0, dur: 0.55, color: "#8b9299", width: 2 },
  { x1: 98, y1: 98, x2: 98, y2: 2, delay: 0.12, dur: 0.55, color: "#8b9299", width: 2 },
  { x1: 2, y1: 98, x2: 98, y2: 98, delay: 0.5, dur: 0.45, color: "#8b9299", width: 2 },
  { x1: 2, y1: 2, x2: 98, y2: 2, delay: 0.62, dur: 0.45, color: "#8b9299", width: 2 },
  { x1: 2, y1: 98, x2: 98, y2: 2, delay: 1.05, dur: 0.7, color: "#e35722", width: 3 },
];

export function BayFrame({ className }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      {LINES.map((l, i) => (
        <motion.line
          key={i}
          x1={l.x1}
          y1={l.y1}
          x2={l.x2}
          y2={l.y2}
          stroke={l.color}
          strokeWidth={l.width}
          strokeLinecap="square"
          vectorEffect="non-scaling-stroke"
          initial={{ pathLength: reduce ? 1 : 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={
            reduce
              ? { duration: 0 }
              : { duration: l.dur, delay: l.delay, ease: "easeInOut" }
          }
        />
      ))}
    </svg>
  );
}

export function DateStamp() {
  const reduce = useReducedMotion();
  const [today, setToday] = useState<string | null>(null);

  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("cs-CZ", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    );
  }, []);

  return (
    <motion.p
      className="bks-stamp"
      initial={{ opacity: reduce ? 1 : 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={reduce ? { duration: 0 } : { duration: 0.5, delay: 0.3 }}
    >
      <span className="bks-stamp-dot" aria-hidden="true" />
      Dostupnost lešení aktuální k dnešnímu dni{today ? ` · ${today}` : ""}
    </motion.p>
  );
}
