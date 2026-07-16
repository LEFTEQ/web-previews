"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const trades = ["obkladače", "sádrokartonáře", "elektrikáře", "instalatéry"];

export function WordSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = window.setInterval(() => {
      setI((v) => (v + 1) % trades.length);
    }, 2200);
    return () => window.clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="swap-static">
        {trades.map((w, n) => (
          <span key={w} className="swap-word">
            {w}
            {n < trades.length - 1 ? <span className="swap-dot"> · </span> : null}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className="swap-wrap" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="swap-word"
          style={{ transformOrigin: "18% 60%" }}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ type: "spring", stiffness: 520, damping: 30 }}
        >
          {trades[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
