"use client";

import { motion, useReducedMotion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export function HeroReveal({ children }: { children: ReactNode }) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial="hidden"
      animate="shown"
      variants={{
        hidden: {},
        shown: { transition: { staggerChildren: 0.12, delayChildren: 0.05 } }
      }}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 18 },
                shown: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
                }
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

export function SpotlightPlate({
  children,
  label,
  title,
  desc
}: {
  children: ReactNode;
  label: string;
  title: string;
  desc: string;
}) {
  const reduce = useReducedMotion();

  const frameVariants: Variants | undefined = reduce
    ? undefined
    : {
        dark: { opacity: 0.18, filter: "brightness(0.4)" },
        lit: {
          opacity: 1,
          filter: "brightness(1)",
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
        }
      };

  const capVariants: Variants | undefined = reduce
    ? undefined
    : {
        dark: { opacity: 0, y: 12 },
        lit: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: "easeOut", delay: 0.18 }
        }
      };

  return (
    <motion.figure
      className="nest-plate"
      initial={reduce ? false : "dark"}
      whileInView={reduce ? undefined : "lit"}
      viewport={{ once: true, amount: 0.35 }}
    >
      <motion.div className="nest-plate__frame" variants={frameVariants}>
        {children}
      </motion.div>
      <motion.figcaption className="nest-plate__cap" variants={capVariants}>
        <p className="nest-plate__label">{label}</p>
        <h3 className="nest-plate__title">{title}</h3>
        <p className="nest-plate__desc">{desc}</p>
      </motion.figcaption>
    </motion.figure>
  );
}
