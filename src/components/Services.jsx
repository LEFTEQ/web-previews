import { SERVICES } from '../data.js';
import { Eyebrow, LearnChevron } from './Icons.jsx';
import { GroundScene } from './GroundScene.jsx';

const LEGEND = [
  { c: 'var(--color-water)', t: 'modrá — vodovod' },
  { c: 'var(--color-sewer)', t: 'hnědá — kanalizace' },
  { c: 'var(--color-cable)', t: 'červená — kabely' },
];

export function Services({ onPick }) {
  return (
    <section id="sluzby" data-layer="services" aria-labelledby="services-title" className="relative border-t border-dashed border-clay/60 bg-concrete">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <Eyebrow depth="−1,2" name="Podloží" />
            <h2 id="services-title" className="mt-3 font-display text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
              Co děláme pod povrchem i na něm
            </h2>
            <p className="mt-4 max-w-xl text-loam/85">
              Hlavní náplní je kompletní dodávka inženýrských sítí. K ní patří výkopy, protlaky, terénní úpravy, povrchy a demolice. Každá služba níže je vedena jako „potrubí“ v barvě, jakou se sítě v zemi běžně značí.
            </p>
            <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-sm" aria-label="Barevné značení">
              {LEGEND.map((l) => (
                <li key={l.t} className="flex items-center gap-2">
                  <span aria-hidden="true" className="h-1.5 w-6 rounded-full" style={{ background: l.c }} />
                  {l.t}
                </li>
              ))}
            </ul>
          </div>
          <GroundScene />
        </div>

        <ol className="mt-14">
          {SERVICES.map((s) => (
            <li key={s.id} id={`sluzba-${s.id}`} className="relative py-6">
              <span aria-hidden="true" className={`pipe-line rounded-full ${s.thick ? 'h-2.5' : 'h-1.5'}`} style={{ background: s.color }} />
              <div className="grid gap-2 pt-2 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)_auto] md:items-baseline md:gap-6">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-loam/70">{s.tag}</p>
                  <h3 className="font-display text-xl font-extrabold leading-tight md:text-2xl">{s.title}</h3>
                </div>
                <p className="text-loam/85">{s.text}</p>
                <a
                  href="#poptavka"
                  onClick={() => onPick(s.title)}
                  className="t-learn inline-flex items-center gap-1.5 self-start justify-self-start whitespace-nowrap py-1 font-semibold text-loam underline decoration-clay decoration-2 underline-offset-4"
                >
                  Poptat<span className="sr-only">: {s.title}</span>
                  <LearnChevron />
                </a>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
