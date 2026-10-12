import { PHONES } from '../data.js';
import { Eyebrow, LearnChevron, PhoneIcon } from './Icons.jsx';
import { ProtlakSection } from './Drawings.jsx';
import { SoilEdge } from './SoilEdge.jsx';

export function Terrain({ onPick }) {
  return (
    <section id="teren" data-layer="terrain" aria-labelledby="terrain-title" className="on-dark relative mt-8 bg-loam text-stake">
      <SoilEdge variant={1} className="text-loam" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <Eyebrow depth="−2,0" name="Svah" dark />
        <div className="mt-6 grid items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <figure className="min-w-0">
            <div className="relative overflow-hidden rounded-lg">
              <img
                src="/section-1.webp"
                alt="Ilustrační obrázek rypadla ve svahu (vytvořeno AI)"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <figcaption className="mt-2 text-sm text-stake/75">Ilustrační obrázek vytvořený AI — nejde o snímek z realizace firmy.</figcaption>
          </figure>
          <div>
            <h2 id="terrain-title" className="font-display text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
              Kráčivé rypadlo pro náročný terén
            </h2>
            <p className="mt-4 text-stake/90">
              Kráčivé rypadlo se nepřesouvá po pásech, ale na výsuvných nohách s koly a opěrami. Díky tomu se hodí do svahů, na nerovné a těžko přístupné pozemky a všude tam, kam běžný bagr nevyjede.
            </p>
            <ul className="mt-5 grid gap-2 text-stake/90">
              {['Výkopy pro sítě ve svahu', 'Terénní úpravy na nerovném pozemku', 'Práce v místech s omezeným přístupem'].map((t) => (
                <li key={t} className="flex gap-3">
                  <span aria-hidden="true" className="mt-2.5 h-0.5 w-4 shrink-0 bg-clay" />
                  {t}
                </li>
              ))}
            </ul>
            <p className="mt-5 text-stake/90">
              Zda se technika na váš pozemek hodí, nejrychleji probereme po telefonu nebo nad fotkami poslanými e-mailem.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={PHONES[0].href} className="btn btn-cta">
                <PhoneIcon />
                <span className="whitespace-nowrap font-mono">{PHONES[0].label}</span>
              </a>
              <a
                href="#poptavka"
                onClick={() => onPick('Práce kráčivým rypadlem v náročném terénu')}
                className="t-learn btn btn-ghost-dark"
              >
                Poptat práci ve svahu <LearnChevron />
              </a>
            </div>
          </div>
        </div>

        <article id="protlaky" aria-labelledby="protlak-heading" className="mt-20 grid items-center gap-8 border-t border-dashed border-clay/70 pt-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          <div>
            <h2 id="protlak-heading" className="font-display text-[clamp(1.6rem,3.6vw,2.4rem)] font-extrabold leading-[1.08] tracking-tight">
              Protlak: síť pod silnicí bez rozkopání
            </h2>
            <p className="mt-4 text-stake/90">
              Když musí vodovod, kanalizace nebo kabel vést pod silnicí, chodníkem či vjezdem, protlak umožní protáhnout vedení pod povrchem ze startovací do cílové jámy. Komunikace zůstane neporušená.
            </p>
            <a
              href="#poptavka"
              onClick={() => onPick('Protlaky pod komunikací')}
              className="t-learn mt-6 inline-flex items-center gap-1.5 py-1 font-semibold text-stake underline decoration-clay decoration-2 underline-offset-4"
            >
              Poptat protlak <LearnChevron />
            </a>
          </div>
          <figure className="min-w-0 rounded-lg bg-stake p-4">
            <ProtlakSection className="h-auto w-full" />
            <figcaption className="mt-2 text-sm text-loam/75">Zjednodušený řez — vedení prochází pod komunikací.</figcaption>
          </figure>
        </article>
      </div>
    </section>
  );
}
