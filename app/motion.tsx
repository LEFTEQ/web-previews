"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useReducedMotion,
} from "motion/react";

export function OrderNo() {
  const count = useMotionValue(0);
  const text = useTransform(count, (v) =>
    String(Math.round(v)).padStart(2, "0")
  );
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      count.set(7);
      return;
    }
    const controls = animate(count, 7, {
      duration: 0.9,
      delay: 0.4,
      ease: [0.2, 0.8, 0.2, 1],
    });
    return () => controls.stop();
  }, [reduce, count]);

  return <motion.span>{text}</motion.span>;
}

export function Stamp() {
  const reduce = useReducedMotion();

  return (
    <motion.span
      className="stamp"
      initial={reduce ? false : { opacity: 0, scale: 1.7, rotate: -26 }}
      animate={{ opacity: 0.92, scale: 1, rotate: -11 }}
      transition={
        reduce
          ? { duration: 0 }
          : { delay: 0.95, type: "spring", stiffness: 720, damping: 20, mass: 0.8 }
      }
    >
      V POŘADÍ
    </motion.span>
  );
}
