"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const LANGS = ["Česky", "English", "Deutsch", "Українською"];

export function LanguageCycler() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % LANGS.length), 2200);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="lang-static">Česky · English · Deutsch · Українською</span>
    );
  }

  return (
    <span className="lang-slot">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="lang-word"
          initial={{ y: "0.55em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.34, ease: [0.22, 1, 0.36, 1] }}
        >
          {LANGS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
