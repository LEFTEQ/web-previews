"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";

const WORDS = ["DERATIZACE", "DEZINSEKCE", "DEZINFEKCE"];

export function TargetCycle() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((p) => (p + 1) % WORDS.length), 2200);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <span className="fc-target-stack">
        {WORDS.map((w) => (
          <span key={w} className="fc-target-word fc-target-static">
            {w}
          </span>
        ))}
      </span>
    );
  }

  return (
    <span className="fc-target-frame" aria-live="polite" aria-label={WORDS[i]}>
      <AnimatePresence mode="wait">
        <motion.span
          key={WORDS[i]}
          className="fc-target-word"
          aria-hidden="true"
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(100% 0 0 0)", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.7, 0, 0.3, 1] }}
        >
          {WORDS[i]}
        </motion.span>
      </AnimatePresence>
      <motion.span
        className="fc-scanline"
        key={"scan-" + i}
        aria-hidden="true"
        initial={{ top: "-4%", opacity: 0 }}
        animate={{ top: "104%", opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.46, ease: "linear" }}
      />
    </span>
  );
}
