"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  AnimatePresence,
  useInView,
  useReducedMotion,
} from "motion/react";

const CYCLE = ["fotovoltaika", "teplo", "zabezpečení", "energie"];

export function HeroWord() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) {
      setI(CYCLE.length - 1);
      return;
    }
    if (i >= CYCLE.length - 1) return;
    const t = setTimeout(() => setI((v) => v + 1), i === 0 ? 520 : 640);
    return () => clearTimeout(t);
  }, [i, reduce]);

  const word = CYCLE[i];

  return (
    <span className="hero-swap">
      <span className="sr-only" aria-live="polite">
        {word}
      </span>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.span
          key={word}
          className="hero-swap-word"
          aria-hidden="true"
          initial={reduce ? false : { y: "0.45em", opacity: 0, filter: "blur(6px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          exit={reduce ? undefined : { y: "-0.45em", opacity: 0, filter: "blur(6px)" }}
          transition={{ duration: 0.34, ease: [0.2, 0.7, 0.2, 1] }}
        >
          {word}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function CurrentSection({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });
  const reduce = useReducedMotion();
  return (
    <div ref={ref} className={className} data-live={reduce || inView ? "true" : "false"}>
      {children}
    </div>
  );
}
