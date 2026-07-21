"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "motion/react";

type Wall = { d: string; glass?: boolean };

// Řez profilem K 90 MD — rám vlevo, křídlo + zasklení vpravo.
const WALLS: Wall[] = [
  { d: "M40 50 H250 V410 H40 Z" },          // rám vnější
  { d: "M62 72 H228 V388 H62 Z" },          // rám vnitřní
  { d: "M145 72 V388" },                    // svislá komora
  { d: "M62 180 H228" },                    // vodorovná komora
  { d: "M62 280 H228" },                    // vodorovná komora
  { d: "M108 200 H182 V262 H108 Z" },       // ocelová výztuha
  { d: "M250 96 H360 V314 H250" },          // křídlo vnější
  { d: "M272 118 H338 V292 H272 Z" },       // křídlo vnitřní
  { d: "M305 118 V292" },                   // komora křídla
  { d: "M338 132 V278", glass: true },      // sklo
  { d: "M350 132 V278", glass: true },      // sklo
  { d: "M338 132 H350 M338 278 H350", glass: true }, // hrany skla
];

type Seal = { x: number; y: number; n: string; label: string };
const SEALS: Seal[] = [
  { x: 250, y: 140, n: "1", label: "vnější" },
  { x: 250, y: 238, n: "2", label: "střední" },
  { x: 331, y: 205, n: "3", label: "vnitřní" },
];

function Stroke({
  progress,
  d,
  from,
  to,
  glass,
  reduce,
}: {
  progress: MotionValue<number>;
  d: string;
  from: number;
  to: number;
  glass?: boolean;
  reduce: boolean;
}) {
  const pathLength = useTransform(progress, [from, to], [0, 1]);
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={glass ? "#3a6f66" : "#f2f3ef"}
      strokeWidth={glass ? 2 : 1.6}
      strokeLinejoin="round"
      strokeLinecap="round"
      style={{ pathLength: reduce ? 1 : pathLength }}
    />
  );
}

function SealMark({
  progress,
  seal,
  from,
  to,
  reduce,
}: {
  progress: MotionValue<number>;
  seal: Seal;
  from: number;
  to: number;
  reduce: boolean;
}) {
  const mid = from + (to - from) * 0.55;
  const scale = useTransform(progress, [from, mid, to], [0, 1.18, 1]);
  const opacity = useTransform(progress, [from, mid], [0, 1]);
  return (
    <motion.g
      style={{
        scale: reduce ? 1 : scale,
        opacity: reduce ? 1 : opacity,
        transformOrigin: `${seal.x}px ${seal.y}px`,
      }}
    >
      <rect
        x={seal.x - 7}
        y={seal.y - 9}
        width={14}
        height={18}
        rx={4}
        fill="#17191b"
        stroke="#c68a34"
        strokeWidth={1.4}
      />
      <circle cx={seal.x} cy={seal.y} r={9} fill="none" stroke="#c68a34" strokeWidth={1} opacity={0.5} />
    </motion.g>
  );
}

export function ProfileDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion() ?? false;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "center 45%"],
  });

  // Kroky slidují k zarovnání na konci sekvence.
  const tickShift = useTransform(scrollYProgress, [0.82, 1], [12, 0]);
  const tickOpacity = useTransform(scrollYProgress, [0.8, 1], [0.25, 1]);

  const wallSpan = 0.62;
  const per = wallSpan / WALLS.length;

  return (
    <div ref={ref}>
      <svg className="kn-profile-svg" viewBox="0 0 420 460" role="img" aria-label="Řez šestikomorovým profilem K 90 MD se třemi úrovněmi těsnění">
        {/* svislé měřítko / kalibrační pravítko */}
        <motion.g style={{ x: reduce ? 0 : tickShift, opacity: reduce ? 1 : tickOpacity }}>
          <line x1={22} y1={50} x2={22} y2={410} stroke="#c68a34" strokeWidth={1} />
          {Array.from({ length: 19 }).map((_, i) => {
            const y = 50 + i * 20;
            const long = i % 5 === 0;
            return (
              <line
                key={i}
                x1={22}
                y1={y}
                x2={long ? 34 : 28}
                y2={y}
                stroke="#c68a34"
                strokeWidth={1}
              />
            );
          })}
          <text x={38} y={54} fill="#c68a34" fontSize={9} letterSpacing="0.05em">90 mm</text>
        </motion.g>

        {WALLS.map((w, i) => (
          <Stroke
            key={i}
            progress={scrollYProgress}
            d={w.d}
            glass={w.glass}
            from={i * per}
            to={(i + 1) * per + per * 0.4}
            reduce={reduce}
          />
        ))}

        {SEALS.map((s, i) => (
          <SealMark
            key={s.n}
            progress={scrollYProgress}
            seal={s}
            from={0.66 + i * 0.09}
            to={0.82 + i * 0.09}
            reduce={reduce}
          />
        ))}

        {/* popisky těsnění */}
        <g fill="#f2f3ef" fontSize={11} fontWeight={600}>
          <text x={SEALS[0].x + 16} y={SEALS[0].y - 2}>1 · vnější</text>
          <text x={SEALS[1].x + 16} y={SEALS[1].y + 4}>2 · střední</text>
          <text x={SEALS[2].x + 16} y={SEALS[2].y + 30}>3 · vnitřní</text>
        </g>
      </svg>
    </div>
  );
}
