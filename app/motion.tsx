"use client";

import { motion, useScroll, useTransform, useSpring, useReducedMotion } from "motion/react";

export function TrailRail() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const yRaw = useTransform(scrollYProgress, [0, 1], ["5vh", "90vh"]);
  const y = useSpring(yRaw, { stiffness: 70, damping: 22, mass: 0.5 });

  return (
    <div className="trail" aria-hidden="true">
      <div className="trail__line" />
      {reduce ? (
        <span className="trail__marker" style={{ top: "5vh" }} />
      ) : (
        <motion.span className="trail__marker" style={{ top: y }} />
      )}
    </div>
  );
}

export function PaintBlaze({ color }: { color: string }) {
  const reduce = useReducedMotion();
  const vp = { once: true, margin: "-12% 0px" } as const;

  return (
    <span className="pblaze" style={{ ["--c" as string]: color }} aria-hidden="true">
      <motion.span
        className="pblaze__base"
        initial={reduce ? false : { scaleX: 0 }}
        whileInView={reduce ? undefined : { scaleX: 1 }}
        viewport={vp}
        transition={{ duration: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
      />
      <motion.span
        className="pblaze__band"
        initial={reduce ? false : { scaleY: 0 }}
        whileInView={reduce ? undefined : { scaleY: 1 }}
        viewport={vp}
        transition={{ duration: 0.35, delay: 0.32, ease: [0.2, 0.7, 0.2, 1] }}
      />
    </span>
  );
}
