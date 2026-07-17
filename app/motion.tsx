"use client";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "motion/react";

/**
 * The dashed lane-line spine. As you scroll, the dashes stream upward
 * (the road passing under a moving car), velocity smoothed by a spring so
 * it eases to a stop like pulling up at an intersection.
 * Reduced motion: dashes hold static.
 */
export function LaneSpine() {
  const reduce = useReducedMotion();
  const { scrollY } = useScroll();
  const smooth = useSpring(scrollY, { stiffness: 80, damping: 22, mass: 0.6 });
  const bgY = useTransform(smooth, (v) => `${-(v * 0.5)}px`);

  if (reduce) {
    return <div className="spine" aria-hidden="true" />;
  }

  return (
    <motion.div
      className="spine"
      aria-hidden="true"
      style={{ backgroundPositionY: bgY }}
    />
  );
}
