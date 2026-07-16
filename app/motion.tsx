"use client";
import { motion, useReducedMotion } from "motion/react";
import { useId } from "react";

type Cfg = {
  W: number; H: number; count: number; arcH: number; baseFrac: number;
  lenBase: number; lenArc: number; tilt: number; wBase: number; wArc: number;
};

const HERO: Cfg = { W: 600, H: 122, count: 48, arcH: 47, baseFrac: 0.72, lenBase: 20, lenArc: 27, tilt: 0.8, wBase: 0.8, wArc: 0.95 };
const RULE: Cfg = { W: 600, H: 46, count: 36, arcH: 11, baseFrac: 0.68, lenBase: 14, lenArc: 8, tilt: 0.4, wBase: 0.7, wArc: 0.6 };
const DIVIDER: Cfg = { W: 600, H: 30, count: 62, arcH: 5, baseFrac: 0.58, lenBase: 10, lenArc: 4, tilt: 0.16, wBase: 0.55, wArc: 0.4 };

function makeStrokes(c: Cfg) {
  const out: { d: string; w: number }[] = [];
  for (let i = 0; i < c.count; i++) {
    const t = c.count === 1 ? 0.5 : i / (c.count - 1);
    const x = c.W * 0.06 + t * (c.W * 0.88);
    const arc = Math.sin(Math.pow(t, 0.9) * Math.PI);
    const baseY = c.H * c.baseFrac - arc * c.arcH;
    const len = c.lenBase + arc * c.lenArc;
    const ang = c.tilt * (0.5 - t) - 0.35;
    const dx = Math.cos(ang) * len;
    const dy = Math.sin(ang) * len;
    const x2 = x + dx;
    const y2 = baseY + dy;
    const cx = x + dx * 0.45 - 2;
    const cy = baseY + dy * 0.45 - 3.5;
    out.push({
      d: `M${x.toFixed(1)} ${baseY.toFixed(1)} Q${cx.toFixed(1)} ${cy.toFixed(1)} ${x2.toFixed(1)} ${y2.toFixed(1)}`,
      w: +(c.wBase + arc * c.wArc).toFixed(2),
    });
  }
  return out;
}

function Grad({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={id} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#a68a72" />
        <stop offset="46%" stopColor="#4a4f52" />
        <stop offset="100%" stopColor="#cf8592" />
      </linearGradient>
    </defs>
  );
}

export function HeroBrow() {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const strokes = makeStrokes(HERO);
  return (
    <svg className="brow" viewBox={`0 0 ${HERO.W} ${HERO.H}`} role="img"
      aria-label="Ručně kreslené tahy obočí ve tvaru oblouku">
      <Grad id={id} />
      {strokes.map((s, i) => (
        <motion.path
          key={i} d={s.d} fill="none" stroke={`url(#${id})`}
          strokeWidth={s.w} strokeLinecap="round" vectorEffect="non-scaling-stroke"
          initial={reduce ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reduce ? { duration: 0 } : { delay: 0.35 + i * 0.017, duration: 0.5, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}

export function Hairline({ variant = "rule" }: { variant?: "rule" | "divider" }) {
  const reduce = useReducedMotion();
  const id = useId().replace(/:/g, "");
  const cfg = variant === "divider" ? DIVIDER : RULE;
  const strokes = makeStrokes(cfg);
  return (
    <svg className={`hairline hairline--${variant}`} viewBox={`0 0 ${cfg.W} ${cfg.H}`} aria-hidden="true">
      <Grad id={id} />
      {strokes.map((s, i) => (
        <motion.path
          key={i} d={s.d} fill="none" stroke={`url(#${id})`}
          strokeWidth={s.w} strokeLinecap="round" vectorEffect="non-scaling-stroke"
          initial={reduce ? { pathLength: 1 } : { pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true, margin: "-8%" }}
          transition={reduce ? { duration: 0 } : { delay: i * 0.012, duration: 0.42, ease: "easeOut" }}
        />
      ))}
    </svg>
  );
}
