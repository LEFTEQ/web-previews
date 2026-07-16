"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

/**
 * Hero keyword that cross-fades between its Czech word and the English twin,
 * on a slow 3.5s loop with a gentle vertical nudge — the way a child repeats
 * the same word in both languages. Reduced motion freezes to the Czech term.
 */
export function SwapWord({ cz, en }: { cz: string; en: string }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % 2), 3500);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="swap">
        <span className="swap-word">{cz}</span>
      </span>
    );
  }

  const words = [cz, en];
  const langs = ["česky", "in English"];

  return (
    <span className="swap" aria-label={`${cz} (${en})`}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="swap-word"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.65, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {words[i]}
          <span className="swap-lang" aria-hidden="true">
            {langs[i]}
          </span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
