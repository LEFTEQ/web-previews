"use client";

import { motion, useReducedMotion, animate } from "motion/react";
import { useEffect, useState } from "react";

export function RingCounter() {
  const reduce = useReducedMotion();
  const [n, setN] = useState(reduce ? 15 : 0);

  useEffect(() => {
    if (reduce) {
      setN(15);
      return;
    }
    const controls = animate(0, 15, {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [reduce]);

  // concentric age-rings; outer ring draws clockwise once on load
  const radii = [140, 118, 96, 74, 52, 30];

  return (
    <div className="ring-figure">
      <svg viewBox="0 0 320 320" role="img" aria-label="Patnáct let zkušeností">
        <circle className="ring-pith" cx="160" cy="160" r="16" />
        {radii.map((r) => (
          <circle key={r} className="ring-static" cx="160" cy="160" r={r} />
        ))}
        <motion.circle
          className="ring-draw"
          cx="160"
          cy="160"
          r="152"
          transform="rotate(-90 160 160)"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
      <div className="ring-caption">
        <span className="ring-num">{n}</span>
        <span className="ring-label">let zkušeností</span>
      </div>
    </div>
  );
}
