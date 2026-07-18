"use client";

import { useEffect, useState, type ReactNode } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const WORDS = ["okrasné", "ovocné", "trvalky", "dekorace"];
// nejširší slovo drží šířku štítku – nulový reflow (fix CLS)
const WIDEST = WORDS.reduce((a, b) => (b.length > a.length ? b : a));

export function RotatingLabel() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  return (
    <span className="stake-swap" aria-live="polite">
      <span className="stake-sizer" aria-hidden="true">{WIDEST}</span>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={WORDS[i]}
          className="stake-word"
          initial={reduce ? { opacity: 0 } : { opacity: 0, rotate: 4, y: -8 }}
          animate={reduce ? { opacity: 1 } : { opacity: 1, rotate: 0, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, rotate: -2, y: 4 }}
          transition={
            reduce
              ? { duration: 0.2 }
              : { type: "spring", stiffness: 320, damping: 16, mass: 0.6 }
          }
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function Settle({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, rotate: -1.5, y: 14 }}
      whileInView={{ opacity: 1, rotate: 0, y: 0 }}
      viewport={{ once: true, margin: "-8%" }}
      transition={
        reduce
          ? { duration: 0 }
          : { type: "spring", stiffness: 210, damping: 22, delay }
      }
    >
      {children}
    </motion.div>
  );
}
