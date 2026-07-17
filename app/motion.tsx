"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTime,
  useTransform,
} from "motion/react";

type Hole = { x: number; y: number; r: number };

const C = 200;

function buildHoles(): Hole[] {
  const holes: Hole[] = [];
  const rings = [
    { radius: 66, r: 6.5 },
    { radius: 98, r: 6.5 },
    { radius: 130, r: 6 },
    { radius: 160, r: 5.5 },
  ];
  for (const ring of rings) {
    const count = Math.max(6, Math.round((2 * Math.PI * ring.radius) / 26));
    const offset = ring.radius / 40;
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2 + offset;
      holes.push({
        x: C + ring.radius * Math.cos(a),
        y: C + ring.radius * Math.sin(a),
        r: ring.r,
      });
    }
  }
  return holes;
}

const HOLES = buildHoles();

const BOLTS = Array.from({ length: 8 }, (_, i) => {
  const a = (i / 8) * Math.PI * 2 - Math.PI / 2;
  return { x: C + 188 * Math.cos(a), y: C + 188 * Math.sin(a) };
});

export function Porthole() {
  const reduce = useReducedMotion();
  const time = useTime();
  const { scrollYProgress } = useScroll();

  // The drum turns: a whisper of continuous rotation, coupled to scroll.
  const rotate = useTransform(() =>
    reduce ? 0 : time.get() / 150 + scrollYProgress.get() * 540
  );

  return (
    <div className="porthole">
      <svg viewBox="0 0 400 400" role="img" aria-label="Perforovaný buben pračky">
        <defs>
          <linearGradient id="bezel" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#c3c8cd" />
            <stop offset="0.5" stopColor="#8b929a" />
            <stop offset="1" stopColor="#5f666e" />
          </linearGradient>
          <radialGradient id="drumface" cx="0.38" cy="0.34" r="0.8">
            <stop offset="0" stopColor="#aeb4ba" />
            <stop offset="1" stopColor="#767d85" />
          </radialGradient>
          <radialGradient id="glass" cx="0.35" cy="0.3" r="0.9">
            <stop offset="0" stopColor="rgba(255,255,255,0.42)" />
            <stop offset="0.45" stopColor="rgba(255,255,255,0.05)" />
            <stop offset="1" stopColor="rgba(10,90,160,0.22)" />
          </radialGradient>
        </defs>

        {/* bezel */}
        <circle cx={C} cy={C} r="198" fill="url(#bezel)" />
        <circle
          cx={C}
          cy={C}
          r="198"
          fill="none"
          stroke="#4c525a"
          strokeWidth="2"
        />

        {/* bezel bolts */}
        {BOLTS.map((b, i) => (
          <circle key={i} cx={b.x} cy={b.y} r="4" fill="#2b3138" />
        ))}

        {/* drum surface */}
        <circle cx={C} cy={C} r="176" fill="url(#drumface)" />

        {/* rotating perforation */}
        <motion.g className="drum" style={{ rotate }}>
          {HOLES.map((h, i) => (
            <circle
              key={i}
              cx={h.x}
              cy={h.y}
              r={h.r}
              fill="#13181d"
              stroke="rgba(255,255,255,0.35)"
              strokeWidth="0.8"
            />
          ))}
          {/* three larger paddle vents near centre */}
          <circle cx={C} cy={C} r="9" fill="#13181d" />
        </motion.g>

        {/* glass overlay */}
        <circle cx={C} cy={C} r="176" fill="url(#glass)" />
        <circle
          cx={C}
          cy={C}
          r="176"
          fill="none"
          stroke="rgba(27,33,40,0.4)"
          strokeWidth="3"
        />
        {/* glass highlight arc */}
        <path
          d="M 96 96 A 148 148 0 0 1 250 62"
          fill="none"
          stroke="rgba(255,255,255,0.55)"
          strokeWidth="6"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
