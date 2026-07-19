"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "motion/react";

export function DispatchStrip() {
  const reduce = useReducedMotion();
  const [booted, setBooted] = useState(false);

  useEffect(() => {
    if (reduce) {
      setBooted(true);
      return;
    }
    const t = setTimeout(() => setBooted(true), 620);
    return () => clearTimeout(t);
  }, [reduce]);

  return (
    <p className="pc-readout" role="status" aria-live="polite">
      <span className="pc-readout-item">REGION: PRAHA</span>
      <span className="pc-readout-sep" aria-hidden="true">
        ·
      </span>
      <span className="pc-readout-item">
        STAV:{" "}
        <span className="pc-status">
          {booted ? (
            <span className="pc-status-on">AKTIVNÍ</span>
          ) : (
            <span className="pc-status-boot" aria-hidden="true">
              [ <span className="pc-cursor">▮</span> ]
            </span>
          )}
        </span>
      </span>
      <span className="pc-readout-sep" aria-hidden="true">
        ·
      </span>
      <span className="pc-readout-item">24/7</span>
    </p>
  );
}
