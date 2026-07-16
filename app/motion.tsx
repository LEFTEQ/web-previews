"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const LINES = [
  { pre: "Zatímco ještě spíte, ", em: "naši pekaři", post: " už připravují těsto…" },
  { pre: "…aby na vás ráno mohly čekat ", em: "první voňavé bochníky", post: "." },
  { pre: "Pečeme ", em: "přímo před vašima očima", post: "." },
];

function Score() {
  const cuts = [
    "M14 44 L74 12",
    "M70 44 L130 12",
    "M126 44 L186 12",
    "M182 44 L242 12",
    "M238 44 L298 12",
  ];
  return (
    <svg className="hero__score" viewBox="0 0 312 56" fill="none" aria-hidden="true">
      {cuts.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.42, delay: 0.35 + i * 0.11, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export function Curtain() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      className="hero__curtain"
      aria-hidden="true"
      initial={{ y: 0 }}
      animate={{ y: "-103%" }}
      transition={{ duration: 1.15, delay: 0.35, ease: [0.72, 0, 0.16, 1] }}
    />
  );
}

export function HeroHeadline() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % LINES.length), 4200);
    return () => clearInterval(t);
  }, [reduce]);

  if (reduce) {
    return (
      <div className="hero__lines hero__lines--static">
        {LINES.map((l, idx) => (
          <h1 className="hero__line" key={idx}>
            {l.pre}
            <em>{l.em}</em>
            {l.post}
          </h1>
        ))}
      </div>
    );
  }

  const l = LINES[i];
  return (
    <div className="hero__lines">
      <AnimatePresence mode="wait">
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <h1 className="hero__line">
            {l.pre}
            <em>{l.em}</em>
            {l.post}
          </h1>
          <div className="hero__scorewrap">
            <Score />
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
