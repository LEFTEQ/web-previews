"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

// Živý timestamp v surveillance HUD — tiká v reálném čase,
// při prefers-reduced-motion se zobrazí jednou a zůstane stát.
export function LiveClock() {
  const reduce = useReducedMotion();
  const [time, setTime] = useState<string | null>(null);

  useEffect(() => {
    const fmt = () =>
      new Date().toLocaleTimeString("cs-CZ", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });

    setTime(fmt());
    if (reduce) return;

    const id = window.setInterval(() => setTime(fmt()), 1000);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <time className="rec__time" suppressHydrationWarning>
      {time ?? "--:--:--"}
    </time>
  );
}
