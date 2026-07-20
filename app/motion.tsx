"use client";

import { motion, useReducedMotion } from "motion/react";

type Props = { lines: string[] };

const LAYERS = [
  { cls: "wm-cyan", ox: 15, oy: -11, delay: 0 },
  { cls: "wm-rose", ox: -12, oy: 9, delay: 0.16 },
  { cls: "wm-ink", ox: 0, oy: 0, delay: 0.32 },
];

export function SeparationWordmark({ lines }: Props) {
  const reduce = useReducedMotion();

  const glyphs = (
    <>
      {lines.map((l, i) => (
        <span className="wm-line" key={i}>
          {l}
        </span>
      ))}
    </>
  );

  return (
    <h1 className="wm" aria-label={lines.join(" ")}>
      {LAYERS.map((layer) => {
        const isBase = layer.cls === "wm-ink";
        return (
          <motion.span
            key={layer.cls}
            className={`wm-layer ${layer.cls}${isBase ? "" : " wm-abs"}`}
            aria-hidden="true"
            initial={reduce ? false : { opacity: 0, x: layer.ox, y: layer.oy }}
            animate={
              reduce
                ? { opacity: 1, x: 0, y: 0 }
                : {
                    opacity: [0, 0.9, 1],
                    x: [layer.ox, layer.ox * 0.14, 0],
                    y: [layer.oy, layer.oy * 0.14, 0],
                  }
            }
            transition={
              reduce
                ? { duration: 0 }
                : {
                    delay: layer.delay,
                    duration: 0.72,
                    times: [0, 0.62, 1],
                    ease: [0.16, 1, 0.3, 1],
                  }
            }
          >
            {glyphs}
          </motion.span>
        );
      })}
    </h1>
  );
}
