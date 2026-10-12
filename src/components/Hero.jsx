import { useEffect, useState } from 'react';
import { PHONES } from '../data.js';
import { AiNote, PhoneIcon } from './Icons.jsx';
import { SoilEdge } from './SoilEdge.jsx';

export function Hero() {
  const [shown, setShown] = useState(false);

  useEffect(() => {
    // jednorázové odhalení po načtení (texts reveal); bez JS je obsah viditelný
    const id = requestAnimationFrame(() => setShown(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="top" data-layer="top" aria-labelledby="hero-title" className="on-dark relative isolate overflow-hidden bg-loam text-stake">
      <img
        src="/hero.webp"
        alt="Ilustrační obrázek stavebního stroje v náročném terénu (vytvořeno AI)"
        className="absolute inset-0 -z-20 h-full w-full object-cover"
        fetchPriority="high"
        decoding="async"
      />
      <div className="hero-shade absolute inset-0 -z-10" aria-hidden="true" />

      <div className={`t-stagger mx-auto flex min-h-[min(84svh,760px)] max-w-6xl flex-col justify-end px-4 pb-14 pt-24 sm:px-6 md:pb-20 ${shown ? 'is-shown' : ''}`}>
        <p className="t-stagger-line t-stagger-line--1 font-mono text-xs uppercase tracking-[0.16em] text-stake/85">
          0,0 m · Stavební firma z Olomouce
        </p>
        <h1
          id="hero-title"
          className="t-stagger-line t-stagger-line--2 mt-4 max-w-3xl font-display text-[clamp(2.1rem,6.6vw,4.6rem)] font-extrabold leading-[1.03] tracking-tight"
        >
          Tam, kde jiní končí, my teprve začínáme.
        </h1>
        <p className="t-stagger-line t-stagger-line--3 mt-5 max-w-xl text-lg text-stake/90">
          Inženýrské sítě, výkopy, protlaky a práce kráčivým rypadlem ve svazích a v těžko dostupném terénu. Ozvěte se — připravíme nabídku na míru.
        </p>
        <div className="t-stagger-line t-stagger-line--4 mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch">
          <a href={PHONES[0].href} className="btn btn-cta !min-h-16 !px-6 text-left">
            <PhoneIcon className="h-6 w-6 shrink-0" />
            <span className="flex flex-col leading-tight">
              <span className="text-sm font-medium">Zavolat</span>
              <span className="whitespace-nowrap font-mono text-xl">{PHONES[0].label}</span>
            </span>
          </a>
          <a href="#poptavka" className="btn btn-ghost-dark !min-h-16 !px-6 text-lg">
            Nabídka na míru
          </a>
        </div>
        <p className="t-stagger-line t-stagger-line--5 mt-4 text-sm text-stake/85">
          Nebo volejte na{' '}
          <a href={PHONES[1].href} className="whitespace-nowrap font-mono text-stake underline underline-offset-4">
            {PHONES[1].label}
          </a>
        </p>
        <AiNote className="mt-10 self-start" />
      </div>
      <div className="relative">
        <SoilEdge variant={0} className="text-concrete" />
      </div>
    </section>
  );
}
