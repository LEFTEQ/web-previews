"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useInView, useReducedMotion } from "motion/react";

function formatCz(n: number, group: boolean) {
  if (!group) return String(n);
  return n.toLocaleString("cs-CZ");
}

export function Tally({
  value,
  group = true,
}: {
  value: number;
  group?: boolean;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState<number>(reduce ? value : 0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(0, value, {
      duration: 1.05,
      ease: [0.2, 0.7, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, value, reduce]);

  return (
    <span ref={ref} className="tally">
      {formatCz(display, group)}
    </span>
  );
}

export function BalanceRule({
  className = "",
  label,
}: {
  className?: string;
  label?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  const reduce = useReducedMotion();
  const shown = reduce || inView;

  const line = {
    initial: reduce ? { scaleX: 1 } : { scaleX: 0 },
    animate: shown ? { scaleX: 1 } : { scaleX: 0 },
  };

  return (
    <span ref={ref} className={`rule2-anim ${className}`}>
      <span className="rule2-anim-inner">
        <motion.span
          className="rule2-anim-line"
          initial={line.initial}
          animate={line.animate}
          transition={{ duration: 0.5, delay: reduce ? 0 : 0.9, ease: "easeInOut" }}
        />
        <motion.span
          className="rule2-anim-line"
          initial={line.initial}
          animate={line.animate}
          transition={{ duration: 0.5, delay: reduce ? 0 : 1.05, ease: "easeInOut" }}
        />
      </span>
      {label ? (
        <motion.span
          className="rule2-anim-label"
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={shown ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.4, delay: reduce ? 0 : 1.35 }}
        >
          {label}
        </motion.span>
      ) : null}
    </span>
  );
}
