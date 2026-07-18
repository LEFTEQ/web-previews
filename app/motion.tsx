"use client";

import { motion, useReducedMotion } from "motion/react";

// The VEKTOR arrow arriving: three velocity-orange vector strokes streak in
// from off-canvas along the 24° diagonal and lock precisely behind the wordmark.
export function HeroMark() {
  const reduce = useReducedMotion();

  const strokes = [
    { top: "18%", w: "58%", delay: 0 },
    { top: "46%", w: "72%", delay: 0.1 },
    { top: "74%", w: "46%", delay: 0.2 },
  ];

  return (
    <div className="mark" aria-label="VEKTOR">
      <div className="mark-strokes" aria-hidden="true">
        {strokes.map((s, i) => (
          <motion.span
            key={i}
            className="mark-stroke"
            style={{ top: s.top, width: s.w }}
            initial={
              reduce
                ? { opacity: 0.9 }
                : { x: "-160%", opacity: 0 }
            }
            animate={
              reduce
                ? { opacity: 0.9 }
                : { x: "0%", opacity: 0.9 }
            }
            transition={
              reduce
                ? { duration: 0 }
                : {
                    duration: 0.7,
                    delay: s.delay,
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          />
        ))}
      </div>

      <motion.span
        className="mark-word"
        initial={reduce ? { opacity: 1 } : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={
          reduce ? { duration: 0 } : { duration: 0.5, delay: 0.42, ease: "easeOut" }
        }
      >
        VEKTOR
      </motion.span>
    </div>
  );
}
