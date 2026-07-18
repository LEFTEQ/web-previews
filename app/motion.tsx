"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const WORDS = [
  { w: "rychle", lang: "česky" },
  { w: "schnell", lang: "Deutsch" },
  { w: "vite", lang: "français" },
  { w: "быстро", lang: "русština" },
  { w: "快", lang: "中文" },
  { w: "rápido", lang: "español" },
];

export function CyclingWord() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % WORDS.length), 1300);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="cycler">
        <span className="cycler-word">„{WORDS[0].w}“</span>
        <span className="cycler-lang">{WORDS[0].lang}</span>
      </span>
    );
  }

  const cur = WORDS[i];

  return (
    <span className="cycler">
      <AnimatePresence mode="wait">
        <motion.span
          key={cur.w}
          className="cycler-word"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.16, ease: "easeOut" }}
        >
          „{cur.w}“
        </motion.span>
      </AnimatePresence>

      <motion.span
        key={"streak-" + i}
        className="cycler-streak"
        aria-hidden="true"
        initial={{ scaleX: 0, opacity: 0, x: 0 }}
        animate={{ scaleX: [0, 1.6, 0], opacity: [0, 1, 0], x: [0, 24, 90] }}
        transition={{ duration: 0.45, ease: "easeIn" }}
      />

      <span className="cycler-lang" aria-live="polite">
        {cur.lang}
      </span>
    </span>
  );
}
