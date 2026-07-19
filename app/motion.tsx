"use client";

import { motion, useReducedMotion } from "motion/react";

/* ---- one orchestrated moment: hazard stripe wipes across like a passing trailer ---- */
export function HazardWipe() {
  const reduce = useReducedMotion();
  return (
    <div className="wipe-track" aria-hidden="true">
      <motion.div
        className="wipe-band"
        initial={reduce ? { x: "0%" } : { x: "-115%" }}
        whileInView={{ x: "0%" }}
        viewport={{ once: true, margin: "-18%" }}
        transition={
          reduce
            ? { duration: 0 }
            : { duration: 0.85, ease: [0.16, 0.84, 0.3, 1] }
        }
      />
    </div>
  );
}

/* ---- odometer-style digit roll, settles with a slight overshoot ---- */
function group(n: number) {
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "\u00A0");
}

function Digit({ target, delay, reduce }: { target: number; delay: number; reduce: boolean }) {
  const finalY = `-${target * 10}%`;
  return (
    <span className="odo-digit">
      <motion.span
        className="odo-col"
        initial={reduce ? { y: finalY } : { y: "0%" }}
        whileInView={{ y: finalY }}
        viewport={{ once: true, margin: "-18%" }}
        transition={
          reduce
            ? { duration: 0 }
            : { type: "spring", stiffness: 85, damping: 11, delay }
        }
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((d) => (
          <span key={d} className="odo-num">
            {d}
          </span>
        ))}
      </motion.span>
    </span>
  );
}

export function Odometer({ value }: { value: number }) {
  const reduce = useReducedMotion() ?? false;
  const chars = group(value).split("");
  let digitIndex = 0;
  return (
    <span className="odo" aria-hidden="true">
      {chars.map((ch, i) => {
        if (ch >= "0" && ch <= "9") {
          const idx = digitIndex++;
          return (
            <Digit
              key={i}
              target={Number(ch)}
              delay={0.35 + idx * 0.08}
              reduce={reduce}
            />
          );
        }
        return (
          <span key={i} className="odo-sep" />
        );
      })}
    </span>
  );
}
