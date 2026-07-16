"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useReducedMotion,
} from "motion/react";

export function ProofSwatches() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 45%"],
  });

  // Aged layer wipes down over the natural board as the reader scrolls.
  const cover = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 0 ${cover}% 0)`;

  return (
    <div className="proof" ref={ref}>
      <figure className="board board--natural">
        <div className="board__grain" />
        <motion.div
          className="board__aged"
          style={reduce ? { clipPath: "inset(0 0 20% 0)" } : { clipPath }}
        />
        <figcaption className="board__tag">Přírodní dřevo</figcaption>
      </figure>

      <figure className="board board--resysta">
        <div className="board__grain" />
        <figcaption className="board__tag">Resysta</figcaption>
      </figure>
    </div>
  );
}
