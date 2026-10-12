import { useState } from "react";
import type { Stratum } from "../data";
import StratumDivider from "./StratumDivider";

export default function StratumBand({ s }: { s: Stratum }) {
  const [open, setOpen] = useState(false);
  const collapsible = s.items.length > 2;
  const panelId = `${s.id}-seznam`;

  const list = (
    <ul className={`ruled grid border-t ${s.items.length > 1 ? "sm:grid-cols-2 sm:gap-x-8" : ""}`} style={{ borderTopColor: "currentColor" }}>
      {s.items.map((i) => (
        <li key={i.code} className="flex gap-4 py-3.5">
          <span className="w-14 shrink-0 pt-1 font-mono text-[11px] uppercase opacity-80">{i.code}</span>
          <span className="text-[17px] leading-snug">{i.label}</span>
        </li>
      ))}
    </ul>
  );

  return (
    <section
      id={s.id}
      aria-labelledby={`${s.id}-h`}
      className={s.dark ? "on-dark" : ""}
      style={{ background: s.bg, color: s.fg }}
    >
      <StratumDivider
        id={s.id}
        variant={s.divider.variant}
        from={s.divider.from}
        to={s.bg}
        stroke={s.divider.stroke}
        hatch={s.divider.hatch}
      />
      <div className="mx-auto max-w-[1440px] px-5 pb-14 pt-4 md:px-10 md:pb-24 md:pt-6">
        <div className="flex flex-wrap justify-between gap-2 font-mono text-[11px] uppercase tracking-[0.14em]">
          <span>
            {s.index} · {s.label}
          </span>
          <span className="opacity-80">{s.stake}</span>
        </div>

        <div className="mt-6 grid gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-5">
            {s.id === "autodoprava" && <div className="mb-5 h-1.5 w-24 bg-hazard" aria-hidden="true" />}
            <h2 id={`${s.id}-h`} className="font-display text-[clamp(1.5rem,6vw,4.25rem)] font-extrabold uppercase leading-[0.98]">
              {s.title}
            </h2>
            <p className="mt-4 max-w-[46ch] text-lg leading-relaxed">{s.intro}</p>
            {s.image && (
              <figure className="mt-8">
                <img src={s.image.src} alt={s.image.alt} loading="lazy" decoding="async" className="aspect-[4/3] w-full object-cover" />
                <figcaption className="mt-2 font-mono text-[10px] uppercase tracking-[0.1em] opacity-85">
                  AI ilustrace · nejde o realizaci firmy
                </figcaption>
              </figure>
            )}
          </div>

          <div className="lg:col-span-7">
            <h3 className="mb-3 font-mono text-[11px] uppercase tracking-[0.14em] opacity-85">Zveřejněná nabídka</h3>
            {collapsible ? (
              <div className="t-acc" data-open={String(open)}>
                <button
                  type="button"
                  className="t-acc-head mb-3 min-h-[48px] w-full items-center justify-between gap-3 border px-4 text-left text-[16px] font-semibold"
                  style={{ borderColor: "currentColor" }}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpen((o) => !o)}
                >
                  <span>{open ? "Skrýt seznam činností" : `Zobrazit ${s.items.length} činností`}</span>
                  <span className="t-acc-chevron" aria-hidden="true">
                    <svg viewBox="0 0 16 16" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 6.5L8 10.5L12 6.5" />
                    </svg>
                  </span>
                </button>
                <div className="t-acc-panel" id={panelId}>
                  <div className="t-acc-panel-inner">{list}</div>
                </div>
              </div>
            ) : (
              list
            )}
            <a
              href="#poptavka"
              className="mt-6 inline-flex items-center gap-2 font-semibold underline underline-offset-4"
            >
              Poptat: {s.label.toLowerCase()}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
