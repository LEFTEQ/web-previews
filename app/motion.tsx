"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

function Counter({
  to,
  delay,
  onDone,
}: {
  to: number;
  delay: number;
  onDone: () => void;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fmt = (v: number) => Math.round(v).toLocaleString("cs-CZ");

    if (reduce) {
      el.textContent = fmt(to);
      onDone();
      return;
    }

    el.textContent = fmt(0);
    const controls = animate(0, to, {
      duration: 1.7,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = fmt(v);
      },
      onComplete: onDone,
    });
    return () => controls.stop();
  }, [to, delay, reduce, onDone]);

  return <span ref={ref} aria-hidden="true">0</span>;
}

export function OdometerFigure({
  pre,
  to,
  suf,
  label,
  aria,
  delay,
}: {
  pre?: string;
  to: number;
  suf?: string;
  label: string;
  aria: string;
  delay: number;
}) {
  const [done, setDone] = useState(false);

  return (
    <div className="fig">
      <div className="fig__val" aria-label={aria} role="text">
        {pre ? <span className="fig__pre" aria-hidden="true">{pre}</span> : null}
        <span className="fig__num">
          <Counter to={to} delay={delay} onDone={() => setDone(true)} />
        </span>
        {suf ? <span className="fig__suf" aria-hidden="true">{suf}</span> : null}
        <span
          className={"fig__dot" + (done ? " is-on" : "")}
          aria-hidden="true"
        />
      </div>
      <div className="fig__label" aria-hidden="true">{label}</div>
    </div>
  );
}
