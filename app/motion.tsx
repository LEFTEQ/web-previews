"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function HeroWordCycle({ words }: { words: string[] }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((v) => (v + 1) % words.length);
    }, 2400);
    return () => clearInterval(id);
  }, [reduce, words.length]);

  if (reduce) {
    // Held, no motion — show the full breadth as a static, legible list end.
    return <span className="hero-cycle">{words[0]}</span>;
  }

  return (
    <span className="hero-cycle" aria-live="polite">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[i]}
          initial={{ y: "0.55em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.38, ease: [0.22, 0.9, 0.25, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
