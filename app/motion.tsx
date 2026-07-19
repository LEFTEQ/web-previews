"use client";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";

const EASE = [0.16, 1, 0.3, 1] as const;

export function LoadItem({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 16 }}
      animate={reduce ? undefined : { opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Rise({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y: 12 }}
      whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Stamp({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.span
      className="stamp-wrap"
      initial={reduce ? false : { scale: 1.7, opacity: 0, rotate: -12 }}
      animate={reduce ? undefined : { scale: 1, opacity: 1, rotate: -5 }}
      transition={{ type: "spring", stiffness: 340, damping: 17, delay: 0.9 }}
    >
      {children}
    </motion.span>
  );
}

export function Seam({
  mode = "scroll",
  delay = 0,
}: {
  mode?: "load" | "scroll";
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const shown = { clipPath: "inset(0 0% 0 0)" };
  const hidden = reduce ? false : { clipPath: "inset(0 100% 0 0)" };

  if (mode === "load") {
    return (
      <motion.div
        className="seam"
        aria-hidden="true"
        initial={hidden}
        animate={shown}
        transition={{ duration: 0.6, ease: EASE, delay }}
      />
    );
  }
  return (
    <motion.div
      className="seam"
      aria-hidden="true"
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, ease: EASE }}
    />
  );
}
