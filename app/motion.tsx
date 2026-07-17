"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function LoadCounter({
  to,
  suffix = "",
}: {
  to: number;
  suffix?: string;
}) {
  const reduce = useReducedMotion();
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setVal(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.7,
      delay: 0.7,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setVal(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, reduce]);

  return (
    <span className="counter">
      {val}
      {suffix}
    </span>
  );
}

export function HeroHeadline({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.h1
      id="hero-title"
      className="hero__title"
      initial={reduce ? false : { opacity: 0, y: 26, filter: "blur(6px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ delay: 1.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.h1>
  );
}
