"use client";

import { motion, useReducedMotion } from "motion/react";

/**
 * Načítací gesto značky: pěnově bílá obrazovka je jedním diagonálním
 * stěrem stěrky odhrnuta a odhalí wet-asphalt hero. Po dojetí stěru
 * (v CSS) doskočí chromová kapka jako tečka v MYJE.TO.
 */
export function LoadSweep() {
  const reduce = useReducedMotion();
  if (reduce) return null;

  const ease = [0.7, 0, 0.28, 1] as const;

  return (
    <div className="sweep-root" aria-hidden="true">
      <motion.div
        className="sweep-foam"
        initial={{ clipPath: "polygon(-40% 0, 200% 0, 200% 100%, -78% 100%)" }}
        animate={{ clipPath: "polygon(200% 0, 340% 0, 340% 100%, 162% 100%)" }}
        transition={{ duration: 1.0, ease, delay: 0.12 }}
      />
      <motion.div
        className="sweep-blade"
        initial={{ x: "-30vw", opacity: 1 }}
        animate={{ x: "128vw", opacity: [1, 1, 0] }}
        transition={{ duration: 1.0, ease, delay: 0.12, opacity: { times: [0, 0.85, 1] } }}
      />
    </div>
  );
}
