"use client";

import { useEffect } from "react";
import { useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";

/**
 * "The system heats up as you scroll."
 * Writes a single --heat scalar (0 cold → 1 up to temperature) onto :root.
 * Every warming accent (pipe colour, hero glow, fitting glow) reads from it
 * in CSS. Reduced motion settles straight to the warm end.
 */
export function Heat() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      document.documentElement.style.setProperty("--heat", "1");
    }
  }, [reduce]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    if (reduce) return;
    // ease so the first bit of scroll already lights the burner
    const heat = Math.min(1, Math.max(0, v * 1.15));
    document.documentElement.style.setProperty("--heat", heat.toFixed(3));
  });

  return null;
}
