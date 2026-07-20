"use client";

import { motion, useReducedMotion } from "motion/react";

type Trigger = "mount" | "view";

function Digit({ d, delay, trigger }: { d: number; delay: number; trigger: Trigger }) {
  const SPINS = 2;
  const strip: number[] = [];
  for (let s = 0; s < SPINS; s++) for (let i = 0; i < 10; i++) strip.push(i);
  for (let i = 0; i <= d; i++) strip.push(i);
  const target = SPINS * 10 + d;

  const transition = {
    duration: 1.5,
    delay,
    ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
  };

  const anim =
    trigger === "view"
      ? { whileInView: { y: `-${target}em` }, viewport: { once: true, amount: 0.4 } }
      : { animate: { y: `-${target}em` } };

  return (
    <span className="od-window" aria-hidden="true">
      <motion.span
        className="od-col"
        initial={{ y: "0em" }}
        {...anim}
        transition={transition}
      >
        {strip.map((n, i) => (
          <span key={i}>{n}</span>
        ))}
      </motion.span>
    </span>
  );
}

export function Odometer({
  value,
  className,
  trigger = "mount",
  delayBase = 0,
  suffix = "",
}: {
  value: number;
  className?: string;
  trigger?: Trigger;
  delayBase?: number;
  suffix?: string;
}) {
  const reduce = useReducedMotion();
  const digits = String(value).split("");

  if (reduce) {
    return (
      <span className={className}>
        {value}
        {suffix}
      </span>
    );
  }

  return (
    <span className={`od ${className ?? ""}`} role="text" aria-label={`${value}${suffix}`}>
      {digits.map((ch, i) => (
        <Digit key={i} d={Number(ch)} delay={delayBase + i * 0.09} trigger={trigger} />
      ))}
      {suffix ? (
        <span className="od-sep" aria-hidden="true">
          {suffix}
        </span>
      ) : null}
    </span>
  );
}
