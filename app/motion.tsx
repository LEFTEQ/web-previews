"use client";

import { motion, useReducedMotion } from "motion/react";

export function FocusHeading({ text }: { text: string }) {
  const reduce = useReducedMotion();
  const transition = { duration: 0.5, ease: [0.2, 0.85, 0.25, 1] as const };
  const viewport = { once: true, margin: "-12% 0px -12% 0px" } as const;

  return (
    <span className="mc-fh">
      <motion.span
        aria-hidden="true"
        className="mc-fh-ch mc-fh-c"
        initial={reduce ? { x: -3, opacity: 0.9 } : { x: -15, opacity: 0, filter: "blur(6px)" }}
        whileInView={{ x: -3, opacity: 0.9, filter: "blur(0px)" }}
        viewport={viewport}
        transition={transition}
      >
        {text}
      </motion.span>
      <motion.span
        aria-hidden="true"
        className="mc-fh-ch mc-fh-m"
        initial={reduce ? { x: 3, opacity: 0.9 } : { x: 15, opacity: 0, filter: "blur(6px)" }}
        whileInView={{ x: 3, opacity: 0.9, filter: "blur(0px)" }}
        viewport={viewport}
        transition={transition}
      >
        {text}
      </motion.span>
      <motion.span
        className="mc-fh-core"
        initial={reduce ? { opacity: 1 } : { opacity: 0, filter: "blur(7px)", y: 3 }}
        whileInView={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        viewport={viewport}
        transition={transition}
      >
        {text}
      </motion.span>
    </span>
  );
}
