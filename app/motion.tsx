"use client";

import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

export function CalScale({ className }: { className?: string }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      aria-hidden="true"
      initial={reduce ? false : { clipPath: "inset(0 100% 0 0)" }}
      animate={{ clipPath: "inset(0 0% 0 0)" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    />
  );
}

export function StatusSwap() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (reduce) {
      setOpen(false);
      return;
    }
    const t = setTimeout(() => setOpen(false), 950);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <span className="status-swap">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? "open" : "accept"}
          className="status-word"
          initial={reduce ? false : { y: "0.55em", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={reduce ? undefined : { y: "-0.55em", opacity: 0 }}
          transition={{ duration: 0.34, ease: "easeOut" }}
        >
          {open ? "OTEVŘENA" : "PŘIJÍMÁME NOVÉ PACIENTY"}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export function CtaReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: reduce ? 0 : 1.35, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
