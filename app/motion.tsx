"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const MODES = [
  { verb: "chladí", color: "#1f8ec9" },
  { verb: "topí", color: "#c26b38" },
];

export function ModeSwap() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => setI((v) => (v + 1) % MODES.length), 3200);
    return () => clearInterval(id);
  }, [reduce]);

  const active = reduce ? MODES[0] : MODES[i];

  useEffect(() => {
    document.documentElement.style.setProperty("--hero-accent", active.color);
  }, [active.color]);

  return (
    <span className="verb" style={{ color: active.color }}>
      <span className="verb__sizer" aria-hidden="true">
        chladí
      </span>
      {reduce ? (
        <span className="verb__word">{active.verb}</span>
      ) : (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={active.verb}
            className="verb__word"
            initial={{ opacity: 0, y: "0.42em" }}
            animate={{ opacity: 1, y: "0em" }}
            exit={{ opacity: 0, y: "-0.42em" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            {active.verb}
          </motion.span>
        </AnimatePresence>
      )}
    </span>
  );
}
