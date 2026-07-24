"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORDS = ["svatby", "promoce", "firemní večírky", "narozeniny", "smuteční hostiny"];

// Wipe along the seam-ridge contour: the reveal edge is Landek's silhouette.
const HIDDEN =
  "polygon(0% 100%, 0% 82%, 14% 74%, 28% 86%, 43% 72%, 57% 84%, 72% 70%, 86% 82%, 100% 76%, 100% 100%)";
const SHOWN =
  "polygon(0% 100%, 0% 6%, 14% -2%, 28% 10%, 43% -4%, 57% 8%, 72% -6%, 86% 6%, 100% 0%, 100% 100%)";

export function OccasionSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 2800);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="swap">
        <span className="swap-word">{WORDS[0]}</span>
      </span>
    );
  }

  return (
    <span className="swap" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={i}
          className="swap-word"
          initial={{ clipPath: HIDDEN, opacity: 0 }}
          animate={{ clipPath: SHOWN, opacity: 1 }}
          exit={{ clipPath: HIDDEN, opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
