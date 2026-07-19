"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

const CRACKS = [
  "M610 250 L560 180 L545 120 L500 60 L482 12",
  "M610 250 L690 210 L760 172 L852 132",
  "M610 250 L678 322 L720 410 L710 502 L742 606",
  "M610 250 L520 270 L420 256 L322 286 L210 270 L86 302",
  "M610 250 L590 342 L560 430 L576 522 L540 622",
  "M545 120 L610 92 L662 44",
  "M420 256 L400 190 L360 132",
  "M720 410 L800 400 L872 420",
];

export function HeroCrack() {
  const reduce = useReducedMotion();

  return (
    <svg
      className="hero-crack"
      viewBox="0 0 900 700"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      {CRACKS.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          fill="none"
          stroke="var(--led)"
          strokeWidth={1.4}
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
          initial={
            reduce
              ? { pathLength: 1, opacity: 0.16 }
              : { pathLength: 0, opacity: 0.9 }
          }
          animate={
            reduce
              ? { pathLength: 1, opacity: 0.16 }
              : { pathLength: [0, 1, 1, 1], opacity: [0.9, 0.9, 0.9, 0.16] }
          }
          transition={
            reduce
              ? { duration: 0 }
              : {
                  duration: 3,
                  times: [0, 0.22, 0.52, 1],
                  ease: "easeOut",
                  delay: i * 0.05,
                }
          }
        />
      ))}
      <motion.circle
        cx={610}
        cy={250}
        r={4}
        fill="var(--majak)"
        initial={reduce ? { opacity: 0.5 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: reduce ? 0.5 : [0, 1, 1, 0.5], scale: 1 }}
        transition={reduce ? { duration: 0 } : { duration: 3, times: [0, 0.15, 0.5, 1] }}
      />
    </svg>
  );
}

export function HeroHeadline() {
  const reduce = useReducedMotion();
  const [resolved, setResolved] = useState(false);

  useEffect(() => {
    if (reduce) {
      setResolved(true);
      return;
    }
    const t = setTimeout(() => setResolved(true), 2500);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <h1 className="hero-title">
      <AnimatePresence mode="wait" initial={false}>
        {resolved ? (
          <motion.span
            key="answer"
            initial={reduce ? false : { opacity: 0, y: 14, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            Vyřešíme to za vás.
          </motion.span>
        ) : (
          <motion.span
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10, filter: "blur(6px)" }}
            transition={{ duration: 0.4 }}
          >
            Máte rozbité autosklo?
          </motion.span>
        )}
      </AnimatePresence>
    </h1>
  );
}
