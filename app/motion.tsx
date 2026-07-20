"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type Variants,
} from "motion/react";

const BLOOMS = [
  { name: "PIVOŇKY", latin: "Paeonia" },
  { name: "TULIPÁNY", latin: "Tulipa" },
  { name: "NARCISY", latin: "Narcissus" },
  { name: "RANUNKULY", latin: "Ranunculus" },
];

export function SeasonalHeadline() {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(() => {
      setI((n) => (n + 1) % BLOOMS.length);
    }, 2600);
    return () => clearInterval(id);
  }, [reduce]);

  const bloom = BLOOMS[i];

  if (reduce) {
    return (
      <span className="hero__bloom">
        <span className="hero__word">{BLOOMS[0].name}</span>
        <span className="hero__latin">{BLOOMS[0].latin}</span>
      </span>
    );
  }

  return (
    <span className="hero__bloom">
      <AnimatePresence mode="wait">
        <motion.span
          key={bloom.name}
          className="hero__word"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        >
          {bloom.name}
        </motion.span>
      </AnimatePresence>
      <AnimatePresence mode="wait">
        <motion.span
          key={bloom.latin}
          className="hero__latin"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.42 }}
        >
          {bloom.latin}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 130,
      damping: 17,
      when: "beforeChildren",
      delayChildren: 0.08,
    },
  },
};

const stringVariants: Variants = {
  hidden: { rotate: -8 },
  visible: {
    rotate: 0,
    transition: { type: "spring", stiffness: 90, damping: 5 },
  },
};

export function PressCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
    >
      {children}
    </motion.div>
  );
}

export function TagString({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className="spec__hang">{children}</div>;
  }

  return (
    <motion.div
      className="spec__hang"
      variants={stringVariants}
      style={{ originX: 0.5, originY: 0 }}
    >
      {children}
    </motion.div>
  );
}
