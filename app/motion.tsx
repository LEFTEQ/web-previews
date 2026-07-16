"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "motion/react";

export function DepthGauge() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const top = useTransform(scrollYProgress, [0, 1], ["2%", "98%"]);
  const depth = useTransform(scrollYProgress, [0, 1], [0, 30]);
  const [m, setM] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const unsub = depth.on("change", (v) => setM(v));
    return () => unsub();
  }, [depth, reduce]);

  return (
    <div className="gauge" aria-hidden="true">
      <div className="gauge-read">
        <span className="gauge-lab">Hloubka sondy</span>
        <span className="gauge-val">{m.toFixed(1)} m</span>
      </div>
      <div className="gauge-track">
        <span className="gauge-tick" style={{ top: "0%" }}>0</span>
        <span className="gauge-tick" style={{ top: "48%" }}>15</span>
        <span className="gauge-tick" style={{ top: "96%" }}>30</span>
        {reduce ? (
          <span className="gauge-marker" style={{ top: "2%" }} />
        ) : (
          <motion.span className="gauge-marker" style={{ top }} />
        )}
      </div>
    </div>
  );
}

export function Reveal({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12%" }}
      transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
