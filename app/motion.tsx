"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

// One continuous ECG trace: long flat baseline, one clean QRS heartbeat,
// then flat again. Shared by hero + every band divider.
const ECG =
  "M0 60 H452 L468 60 L480 52 L491 66 L503 16 L518 104 L530 50 L542 60 H560 H1000";

export function HeroPulse() {
  const reduced = useReducedMotion();
  return (
    <svg
      className="hero-pulse"
      viewBox="0 0 1000 120"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path className="pulse-track" d={ECG} />
      <motion.path
        className="pulse-live"
        d={ECG}
        initial={{ pathLength: reduced ? 1 : 0, opacity: reduced ? 1 : 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{
          duration: reduced ? 0 : 1.7,
          ease: "easeInOut",
          delay: reduced ? 0 : 0.35,
        }}
      />
    </svg>
  );
}

export function PulseDivider({ tone }: { tone: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.95", "start 0.4"],
  });
  const drawn = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const pathLength = reduced ? 1 : drawn;

  return (
    <div className="pulse-divider" data-tone={tone} ref={ref}>
      <svg viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
        <path className="pulse-track" d={ECG} />
        <motion.path className="pulse-live" d={ECG} style={{ pathLength }} />
      </svg>
    </div>
  );
}
