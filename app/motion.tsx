"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORDS = ["radost", "poděkování", "Den matek", "vzpomínku"];

export function WordSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((v) => (v + 1) % WORDS.length);
    }, 2200);
    return () => clearInterval(id);
  }, [reduce]);

  if (reduce) {
    return <span className="swap swap-static">{WORDS[0]}</span>;
  }

  return (
    <span className="swap">
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          className="swap-word"
          initial={{ y: "0.5em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-0.4em", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.65, 0, 0.35, 1] }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
