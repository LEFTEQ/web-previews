"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORDS = [
  { text: "bistro", accent: "#c47b2c" },
  { text: "bar", accent: "#29348a" },
  { text: "Atelier", accent: "#1f5a4c" },
];

export function HeroSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) {
      setI(WORDS.length - 1);
      return;
    }
    if (i >= WORDS.length - 1) return;
    const t = setTimeout(() => setI((n) => n + 1), i === 0 ? 1400 : 1600);
    return () => clearTimeout(t);
  }, [i, reduce]);

  const word = WORDS[i];

  if (reduce) {
    return (
      <span className="hero__swap">
        <span
          className="hero__word"
          style={{ "--swap-accent": word.accent } as React.CSSProperties}
        >
          {word.text}
        </span>
      </span>
    );
  }

  return (
    <span className="hero__swap">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={word.text}
          className="hero__word"
          style={{ "--swap-accent": word.accent } as React.CSSProperties}
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          exit={{ clipPath: "inset(0 0 0 100%)" }}
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          {word.text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
