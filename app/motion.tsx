"use client";

import { useEffect, useState } from "react";

type State = { open: boolean; label: string } | null;

function compute(): State {
  const now = new Date();
  const day = now.getDay(); // 0 = neděle, 6 = sobota
  const mins = now.getHours() * 60 + now.getMinutes();

  const weekOpen = 450; // 7:30
  const weekClose = 1020; // 17:00
  const satClose = 720; // 12:00

  const fmt = (m: number) =>
    `${Math.floor(m / 60)}:${String(m % 60).padStart(2, "0")}`;

  if (day >= 1 && day <= 5 && mins >= weekOpen && mins < weekClose) {
    return { open: true, label: `zavíráme v ${fmt(weekClose)}` };
  }
  if (day === 6 && mins >= weekOpen && mins < satClose) {
    return { open: true, label: `zavíráme v ${fmt(satClose)}` };
  }

  let next = "zítra v 7:30";
  if (day === 6 && mins >= satClose) next = "v pondělí v 7:30";
  else if (day === 0) next = "zítra v 7:30";
  else if ((day >= 1 && day <= 5 && mins >= weekClose)) next = "zítra v 7:30";
  else next = "dnes v 7:30";

  return { open: false, label: `otevíráme ${next}` };
}

export function StatusBar() {
  const [state, setState] = useState<State>(null);

  useEffect(() => {
    const tick = () => setState(compute());
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="statusbar">
      <span className="brand">
        DM&nbsp;<em>servis</em>
      </span>
      <span
        className={"status-dot" + (state?.open ? " open" : "")}
        aria-hidden="true"
      />
      <span className="status-text">
        {state === null ? (
          "Pneuservis České Budějovice"
        ) : (
          <>
            <b>{state.open ? "Otevřeno" : "Zavřeno"}</b> · {state.label}
          </>
        )}
      </span>
    </div>
  );
}
