import { useEffect, useRef } from "react";
import { EMAIL, MAIN_PHONE, SHOWROOM, mailto } from "../data";
import { MailIcon, PhoneIcon } from "./Icons";

export function Hero() {
  const reveal = useRef<HTMLDivElement>(null);

  // Recept „texts reveal“: jediný orchestrovaný moment stránky.
  useEffect(() => {
    const block = reveal.current;
    if (!block) return;
    block.classList.remove("is-shown");
    void block.offsetHeight;
    const id = requestAnimationFrame(() => block.classList.add("is-shown"));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section aria-labelledby="hero-title" className="grid lg:grid-cols-12">
      <figure className="relative aspect-[4/3] overflow-hidden bg-beton/20 lg:col-span-7 lg:aspect-auto lg:min-h-[calc(100svh-6rem)]">
        <img
          src="/hero.webp"
          alt="AI ilustrace interiéru s bezesparou dekorativní podlahou"
          className="absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <figcaption className="stamp">Ilustrace č. 01 — AI vizualizace, nejde o realizaci firmy</figcaption>
      </figure>

      <div className="flex flex-col justify-center px-5 py-10 sm:px-8 lg:col-span-5 lg:px-12 lg:py-16 xl:px-16">
        <p className="label mb-5">Praha · podlahy · stěny · dveře</p>
        <div ref={reveal} className="t-stagger">
          <h1 id="hero-title" className="text-[2.5rem] leading-[1.04] tracking-tight sm:text-6xl xl:text-7xl">
            <span className="t-stagger-line t-stagger-line--1">Harmonie spojení</span>
            <span className="t-stagger-line t-stagger-line--2">
              <em className="not-italic text-orech">moderního</em> designu.
            </span>
          </h1>
          <p className="t-stagger-line t-stagger-line--3 mt-6 max-w-md text-lg leading-relaxed text-beton">
            panDOMO dekorativní podlahy a stěny, dřevěné podlahy, dveře a truhlářská výroba na míru.
          </p>
        </div>

        <div className="card mt-9 p-5">
          <p className="label">Showroom</p>
          <p className="mt-1 font-display text-2xl text-grafit">{SHOWROOM.street}</p>
          <p className="text-beton">{SHOWROOM.city}</p>
          <p className="mt-2 text-sm text-beton">{SHOWROOM.note} Bez pevné otevírací doby.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`tel:${MAIN_PHONE.tel}`} className="btn-primary">
              <PhoneIcon className="h-4 w-4" />
              <span>Zavolat {MAIN_PHONE.display}</span>
            </a>
            <a href={mailto("Dotaz z webu – návštěva showroomu")} className="btn-ghost">
              <MailIcon className="h-4 w-4" />
              <span className="break-all">{EMAIL}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
