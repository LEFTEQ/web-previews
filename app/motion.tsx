"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Layer = {
  material: string;
  depth: string;
  color: string;
  text: string;
};

const MAX_DEPTH = 12;
const TICKS = [0, 2, 4, 6, 8, 10, 12];

export function DepthRuler() {
  const [frac, setFrac] = useState(0);

  useEffect(() => {
    let raf = 0;
    const update = () => {
      const max =
        document.documentElement.scrollHeight - window.innerHeight;
      setFrac(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, []);

  const depth = (frac * MAX_DEPTH).toFixed(1).replace(".", ",");

  return (
    <div className="ruler" aria-hidden="true">
      {TICKS.map((t) => (
        <div
          className="ruler-tick"
          key={t}
          style={{ top: `${(t / MAX_DEPTH) * 100}%` }}
        >
          <span className="ruler-num">{t}</span>
        </div>
      ))}
      <div className="ruler-head" style={{ top: `${frac * 100}%` }}>
        <span className="ruler-head-num">{depth} m</span>
      </div>
      <span className="ruler-label">Hloubka výkopu</span>
    </div>
  );
}

export function CutEarth({ layers }: { layers: Layer[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="cut-stack">
      {layers.map((l, i) => (
        <motion.div
          className="strata"
          key={l.material}
          style={{ background: l.color, color: l.text }}
          initial={reduce ? false : { scaleY: 0, opacity: 0 }}
          animate={reduce ? undefined : { scaleY: 1, opacity: 1 }}
          transition={{
            delay: i * 0.09,
            duration: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <span className="strata-mat">{l.material}</span>
          <span className="strata-depth">{l.depth}</span>
        </motion.div>
      ))}
    </div>
  );
}
