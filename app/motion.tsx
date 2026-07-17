"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

type Status = { open: boolean; label: string; clock: string };

function compute(): Status {
  const now = new Date();
  const day = now.getDay(); // 0 = neděle
  const mins = now.getHours() * 60 + now.getMinutes();
  const clock = now.toLocaleTimeString("cs-CZ", {
    hour: "2-digit",
    minute: "2-digit",
  });

  // Po–Pá 6:00–16:00, So 7:00–11:00
  if (day >= 1 && day <= 5) {
    if (mins >= 360 && mins < 960)
      return { open: true, label: "Betonárna otevřeno", clock };
    if (mins < 360)
      return { open: false, label: "Otevře dnes v 6:00", clock };
    return { open: false, label: "Otevře zítra v 6:00", clock };
  }
  if (day === 6) {
    if (mins >= 420 && mins < 660)
      return { open: true, label: "Betonárna otevřeno", clock };
    return { open: false, label: "Sobota 7:00–11:00", clock };
  }
  return { open: false, label: "Otevře v pondělí v 6:00", clock };
}

export function BatchStatus() {
  const [status, setStatus] = useState<Status | null>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    setStatus(compute());
    const id = setInterval(() => setStatus(compute()), 30000);
    return () => clearInterval(id);
  }, []);

  const open = status?.open ?? false;

  return (
    <div className="status" role="status" aria-live="polite">
      <motion.span
        className={"status__dot" + (open ? "" : " status__dot--closed")}
        aria-hidden="true"
        animate={open && !reduce ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <span className="status__label">
        {status ? status.label : "Provozní doba betonárny"}
      </span>
      {status && <span className="status__clock">{status.clock}</span>}
    </div>
  );
}
