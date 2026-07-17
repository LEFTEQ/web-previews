"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import { useState } from "react";

const MARKS = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90];

export function MeasureRail() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [cm, setCm] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (!reduce) setCm(Math.round(v * 372));
  });

  return (
    <aside className="rail" aria-hidden="true">
      {MARKS.map((m) => (
        <span key={m} className="rail-num" style={{ top: `${m}%` }}>
          {m}
        </span>
      ))}
      <motion.div
        className="rail-cursor"
        style={{ top: reduce ? "0%" : top }}
      >
        <span className="rail-readout">
          {cm}
          <i>cm</i>
        </span>
      </motion.div>
    </aside>
  );
}
