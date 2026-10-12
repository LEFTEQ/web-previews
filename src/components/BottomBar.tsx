import { PEOPLE } from "../data";

export default function BottomBar() {
  return (
    <nav
      aria-label="Rychlé volání"
      data-bottom-bar
      data-fixed-ui
      className="on-dark fixed inset-x-0 bottom-0 z-40 bg-ink text-loess md:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="hazard" aria-hidden="true" />
      <ul className="grid grid-cols-2 divide-x divide-loess/25">
        {PEOPLE.map((p) => (
          <li key={p.tel} className="min-w-0">
            <a
              href={p.tel}
              aria-label={`Zavolat – ${p.name}, ${p.role}: ${p.phone}`}
              className="flex min-h-[60px] flex-col justify-center px-3 py-2"
            >
              <span className="font-mono text-[10px] uppercase tracking-[0.06em] text-hazard">
                {p.short} · {p.roleShort}
              </span>
              <span className="tabular whitespace-nowrap text-[15px] font-semibold leading-tight">{p.phone}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
