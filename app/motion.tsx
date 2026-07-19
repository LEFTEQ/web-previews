"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type RailProps = { d: string; viewBox: string; variant: "yellow" | "steel" };

// The W-beam divider 'draws' left-to-right as each section enters — once, ~500ms.
export function Guardrail({ d, viewBox, variant }: RailProps) {
  const reduce = useReducedMotion();
  return (
    <svg
      className={`rail rail--${variant}`}
      viewBox={viewBox}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <motion.path
        className="rail__path"
        d={d}
        initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      />
    </svg>
  );
}

// Hazard-stripe band drifts horizontally in proportion to scroll — painted lane
// markings passing the driver's window. Static offset under reduced motion.
export function HazardBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const x = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-140, 140]);
  return (
    <div className="hazard" ref={ref} aria-hidden="true">
      <motion.div className="hazard__stripes" style={{ x }} />
    </div>
  );
}

type Service = { tag: string; name: string; body: string };

// Cards arrive on a short staggered sequence along the diagonal axis.
export function ServiceCards({ services }: { services: Service[] }) {
  const reduce = useReducedMotion();
  return (
    <div className="cards">
      {services.map((s, i) => (
        <motion.article
          className="card"
          key={s.name}
          initial={reduce ? { opacity: 1 } : { opacity: 0, x: -18, y: 26 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.45, delay: i * 0.1, ease: [0.4, 0, 0.2, 1] }}
        >
          <p className="card__tag">{s.tag}</p>
          <h3 className="card__name">{s.name}</h3>
          <p className="card__body">{s.body}</p>
        </motion.article>
      ))}
    </div>
  );
}
