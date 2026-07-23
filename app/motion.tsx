"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const WORDS = ["PÍSEK", "ŠTĚRK", "ZEMINA", "SUŤ"];

export function CargoSwap() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => {
      setI((v) => (v + 1) % WORDS.length);
    }, 1900);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="cargo-slot">
        <span className="cargo-word">PÍSEK</span>
      </span>
    );
  }

  return (
    <span className="cargo-slot" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={WORDS[i]}
          className="cargo-word"
          initial={{ y: "0.55em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
