"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "motion/react";

const STATS = [
  { target: 2017, label: "od roku", sub: "začátek praxe" },
  { target: 90, label: "klientů", sub: "OSVČ i firem" },
  { target: 6, label: "účetních", sub: "v našem týmu" },
  { target: 18, label: "let praxe", sub: "v oboru" },
];

export function Reconciliation() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const reduce = useReducedMotion();
  const [vals, setVals] = useState<number[]>([0, 0, 0, 0]);
  const [balanced, setBalanced] = useState(false);

  useEffect(() => {
    if (!inView) return;

    if (reduce) {
      setVals(STATS.map((s) => s.target));
      setBalanced(true);
      return;
    }

    const controls = STATS.map((s, i) =>
      animate(0, s.target, {
        duration: 1 + i * 0.12,
        delay: 0.25 + i * 0.28,
        ease: [0.22, 0.61, 0.36, 1],
        onUpdate: (v) =>
          setVals((prev) => {
            const next = [...prev];
            next[i] = Math.round(v);
            return next;
          }),
      })
    );

    const last = controls[controls.length - 1];
    last.then(() => setBalanced(true)).catch(() => {});

    return () => controls.forEach((c) => c.stop());
  }, [inView, reduce]);

  return (
    <div
      ref={ref}
      className={"recon" + (balanced ? " recon--balanced" : "")}
      aria-label="Bilance firmy Guru Accounting"
    >
      <div className="recon__head">
        <span className="recon__title">Bilance firmy</span>
        <span className="recon__seal" aria-hidden="true">G</span>
      </div>

      <div className="recon__cols">
        <span>Položka</span>
        <span>Stav</span>
      </div>

      {STATS.map((s, i) => (
        <div className="recon__row" key={s.label}>
          <span className="recon__label">
            {s.label}
            <small>{s.sub}</small>
          </span>
          <span className="recon__val">{vals[i].toLocaleString("cs-CZ")}</span>
        </div>
      ))}

      <div className="recon__total">
        <span className="recon__total-label">Účetně vyrovnáno</span>
        <span className="recon__check" aria-hidden="true">
          {balanced ? "✓" : "…"}
        </span>
      </div>
    </div>
  );
}
