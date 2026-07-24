"use client";

import { useEffect, useState } from "react";
import { animate, useReducedMotion } from "motion/react";

type Props = {
  target: number;
  suffix?: string;
  label: string;
  note?: string;
  index: number;
};

export function LedgerFigure({ target, suffix, label, note, index }: Props) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);
  const [ruled, setRuled] = useState(!!reduce);

  useEffect(() => {
    if (reduce) {
      setValue(target);
      setRuled(true);
      return;
    }
    setRuled(false);
    const controls = animate(0, target, {
      duration: 0.55,
      delay: index * 0.12,
      ease: [0.2, 0.8, 0.2, 1],
      onUpdate: (v) => setValue(Math.round(v)),
      onComplete: () => setRuled(true),
    });
    return () => controls.stop();
  }, [target, index, reduce]);

  return (
    <div className="figure">
      <div className="figure__num">
        {value}
        {suffix ? <span className="figure__suffix">{suffix}</span> : null}
      </div>
      <div className={ruled ? "figure__rule is-ruled" : "figure__rule"} />
      <div className="figure__label">{label}</div>
      {note ? <div className="figure__note">{note}</div> : null}
    </div>
  );
}
