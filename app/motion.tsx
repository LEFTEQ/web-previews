"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORDS = ["DESIGN", "CI", "LOGA", "PACKAGING", "BANNERY"];

export function WordSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2400);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return <span className="swap-word">DESIGN</span>;
  }

  return (
    <span className="swap">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          className="swap-word"
          initial={{ y: "105%" }}
          animate={{ y: "0%" }}
          exit={{ y: "-105%" }}
          transition={{ duration: 0.46, ease: [0.16, 0.84, 0.24, 1] }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
