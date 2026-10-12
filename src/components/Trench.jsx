const TICKS = ['0,0', '−0,5', '−1,0', '−1,5', '−2,0', '−2,5', '−3,0'];

/** Svislá výkopová rýha s hloubkovým měřítkem (pouze desktop, dekorativní). */
export function Trench({ current }) {
  return (
    <div aria-hidden="true" className="trench pointer-events-none fixed inset-y-0 left-0 z-30 hidden w-16 lg:block">
      <span className="trench-line" style={{ '--c': 'var(--color-water)', left: '14px' }} />
      <span className="trench-line" style={{ '--c': 'var(--color-sewer)', left: '20px', filter: 'brightness(1.6)' }} />
      <span className="trench-line" style={{ '--c': 'var(--color-cable)', left: '26px' }} />

      <div className="absolute inset-x-1 top-[calc(var(--header-h)+14px)] rounded bg-stake px-1 py-1.5 text-center text-loam shadow">
        <div key={current.id} className="depth-swap">
          <div className="font-mono text-[13px] font-medium leading-none">{current.depth}</div>
          <div className="font-mono text-[10px] leading-none text-loam/70">m</div>
          <div className="mt-1 text-[9px] font-semibold uppercase leading-tight tracking-wide">{current.name}</div>
        </div>
      </div>

      <ol>
        {TICKS.map((t, i) => (
          <li
            key={t}
            className="trench-tick"
            style={{ top: `calc(var(--header-h) + 120px + (100% - var(--header-h) - 150px) * ${i / (TICKS.length - 1)})` }}
          >
            {t}
          </li>
        ))}
      </ol>
    </div>
  );
}
