import { Eyebrow, LearnChevron } from './Icons.jsx';
import { WalkingExcavator } from './Drawings.jsx';

const TASKS = [
  {
    n: '01',
    title: 'Připojit stavbu na sítě',
    text: 'Vodovod, kanalizace a kabely — přípojky i celé rozvody.',
    href: '#sluzba-site',
    link: 'Inženýrské sítě',
    accent: 'var(--color-water)',
  },
  {
    n: '02',
    title: 'Srovnat svah nebo pozemek',
    text: 'Terénní úpravy a výkopy i ve svahu a v těžko přístupném terénu.',
    href: '#teren',
    link: 'Náročný terén',
    accent: 'var(--color-clay)',
  },
  {
    n: '03',
    title: 'Vykopat základy, zbourat stavbu',
    text: 'Výkopy pro základy domů a plotů, demolice objektů, úprava povrchů.',
    href: '#sluzba-vykopy',
    link: 'Výkopy a demolice',
    accent: 'var(--color-loam)',
  },
];

export function Tasks() {
  return (
    <section id="potreby" data-layer="tasks" aria-labelledby="tasks-title" className="relative bg-concrete">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
        <div className="grid items-end gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,320px)]">
          <div>
            <Eyebrow depth="−0,5" name="Ornice" />
            <h2 id="tasks-title" className="mt-3 font-display text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
              Co potřebujete udělat?
            </h2>
            <p className="mt-3 max-w-xl text-loam/85">Vyberte, s čím přicházíte. Každá dlaždice vás zavede k odpovídající službě.</p>
          </div>
          <WalkingExcavator className="w-full max-w-[300px] text-loam md:justify-self-end" />
        </div>

        <ul className="mt-10 grid gap-4 md:grid-cols-3">
          {TASKS.map((t) => (
            <li key={t.n} className="relative flex flex-col rounded-lg border border-loam/15 bg-stake p-6 shadow-[0_1px_0_rgb(59_46_34/0.1)]">
              <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1.5 rounded-t-lg" style={{ background: t.accent }} />
              <span className="font-mono text-sm text-loam/70">{t.n}</span>
              <h3 className="mt-2 font-display text-xl font-extrabold leading-tight">{t.title}</h3>
              <p className="mt-2 flex-1 text-loam/85">{t.text}</p>
              <a href={t.href} className="t-learn mt-5 inline-flex items-center gap-1.5 self-start py-1 font-semibold text-loam underline decoration-clay decoration-2 underline-offset-4">
                {t.link}
                <LearnChevron />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
