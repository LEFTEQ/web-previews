"use client";

import { useScroll, useMotionValueEvent, useReducedMotion } from "motion/react";
import { useState } from "react";

const RAIL = 240; // px, keep in sync with .depth__rail height

export function DepthMeter() {
  const { scrollYProgress } = useScroll();
  const reduce = useReducedMotion();
  const [p, setP] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setP(Math.min(1, Math.max(0, v)));
  });

  const depth = (p * 3).toFixed(2).replace(".", ",");
  const y = reduce ? 0 : p * RAIL;

  return (
    <aside className="depth" aria-hidden="true">
      <div className="depth__rail">
        <span className="depth__tick" style={{ top: "0%" }}>±0,00</span>
        <span className="depth__tick" style={{ top: "50%" }}>−1,50</span>
        <span className="depth__tick" style={{ top: "100%" }}>−3,00</span>
        <span className="depth__marker" style={{ transform: `translateY(${y}px)` }} />
        <span className="depth__now" style={{ transform: `translateY(${y}px)` }}>
          −{depth}&nbsp;m
        </span>
      </div>
    </aside>
  );
}
