"use client";

import { motion, useReducedMotion } from "motion/react";

const PX = 74;
const PY = 372;
const R = 262;

function pt(a: number, r: number): [number, number] {
  const rad = (a * Math.PI) / 180;
  return [PX + r * Math.cos(rad), PY - r * Math.sin(rad)];
}

export function HeroHeadline() {
  const reduce = useReducedMotion();
  return (
    <h1 className="kx-h1">
      <span className="kx-eyebrow">Rehabilitace v Plzni</span>
      <span className="kx-h1-stage">
        <motion.span
          className="kx-h1-pre"
          initial={reduce ? { opacity: 0 } : { opacity: 0.42, rotate: 0, y: 0 }}
          animate={{ opacity: 0, rotate: -5, y: -10 }}
          transition={{ delay: reduce ? 0 : 1.35, duration: 0.55, ease: [0.4, 0, 0.2, 1] }}
          style={{ transformOrigin: "left bottom" }}
        >
          Nemůžeš se pohnout?
        </motion.span>
        <motion.span
          className="kx-h1-post"
          initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: reduce ? 0 : 1.75, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          Zase <em>v pohybu.</em>
        </motion.span>
      </span>
    </h1>
  );
}

export function HeroGoniometer() {
  const reduce = useReducedMotion();

  const ticks: number[] = [];
  for (let a = 0; a <= 90; a += 5) ticks.push(a);

  const [ax0, ay0] = pt(0, R);
  const [ax1, ay1] = pt(90, R);
  const [nx, ny] = pt(0, R - 20);

  return (
    <div className="kx-hero-figure" aria-hidden="true">
      <svg className="kx-gonio" viewBox="0 0 440 440" role="presentation" focusable="false">
        <path
          className="kx-gonio-arc"
          d={`M ${ax0.toFixed(1)} ${ay0.toFixed(1)} A ${R} ${R} 0 0 0 ${ax1.toFixed(1)} ${ay1.toFixed(1)}`}
        />
        {ticks.map((a) => {
          const major = a % 15 === 0;
          const [ox, oy] = pt(a, R);
          const [ix, iy] = pt(a, R - (major ? 26 : 15));
          return (
            <line
              key={a}
              className={major ? "kx-gonio-tick-major" : "kx-gonio-tick"}
              x1={ix.toFixed(1)}
              y1={iy.toFixed(1)}
              x2={ox.toFixed(1)}
              y2={oy.toFixed(1)}
            />
          );
        })}
        {[0, 45, 90].map((a) => {
          const [lx, ly] = pt(a, R + 22);
          return (
            <text
              key={a}
              className="kx-gonio-label"
              x={lx.toFixed(1)}
              y={ly.toFixed(1)}
              textAnchor={a === 0 ? "start" : a === 90 ? "middle" : "middle"}
            >
              {a}°
            </text>
          );
        })}

        <motion.g
          initial={reduce ? { rotate: -84 } : { rotate: -6 }}
          animate={{ rotate: -84 }}
          transition={{ delay: reduce ? 0 : 0.5, duration: reduce ? 0 : 1.6, ease: [0.34, 1.2, 0.4, 1] }}
          style={{ transformOrigin: `${PX}px ${PY}px`, transformBox: "view-box" }}
        >
          <line className="kx-gonio-needle" x1={PX} y1={PY} x2={nx.toFixed(1)} y2={ny.toFixed(1)} />
        </motion.g>

        <circle className="kx-gonio-pivot-ring" cx={PX} cy={PY} r={17} />
        <circle className="kx-gonio-pivot" cx={PX} cy={PY} r={9} />
      </svg>
    </div>
  );
}
