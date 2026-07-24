"use client";

import { animate, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function ParcelFrame({
  tag,
  className,
  id,
  children,
}: {
  tag?: string;
  className?: string;
  id?: string;
  children: React.ReactNode;
}) {
  const reduce = useReducedMotion();

  const draw = reduce
    ? undefined
    : {
        initial: { pathLength: 0 },
        whileInView: { pathLength: 1 },
        viewport: { once: true, amount: 0.35 },
        transition: { duration: 1.1, ease: "easeInOut" as const },
      };

  const corners = ["tl", "tr", "bl", "br"] as const;

  return (
    <div className={"pf" + (className ? " " + className : "")} id={id}>
      <svg
        className="pf-svg"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <motion.rect
          x={0.75}
          y={0.75}
          width={98.5}
          height={98.5}
          vectorEffect="non-scaling-stroke"
          {...draw}
        />
      </svg>

      {corners.map((c) => (
        <motion.span
          key={c}
          className={"pf-tick " + c}
          aria-hidden="true"
          initial={reduce ? undefined : { opacity: 0, scale: 0.4 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.22, delay: 1.05, ease: "backOut" }}
        />
      ))}

      {tag ? <span className="pf-tag">{tag}</span> : null}
      <div className="pf-body">{children}</div>
    </div>
  );
}

export function CountUp({ to }: { to: number }) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce) {
      setValue(to);
      return;
    }
    const controls = animate(0, to, {
      duration: 1.7,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [to, reduce]);

  return <>{value.toLocaleString("cs-CZ")}</>;
}
