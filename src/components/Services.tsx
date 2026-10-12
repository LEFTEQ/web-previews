import { mailto } from "../data";
import { SurfaceScene } from "./SurfaceScene";
import { LearnChevron } from "./Icons";

function AskLink({ subject, children }: { subject: string; children: string }) {
  return (
    <a href={mailto(subject)} className="t-learn text-link mt-6 inline-flex items-center gap-1.5 font-medium">
      {children} <LearnChevron />
    </a>
  );
}

export function Services() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
      {/* panDOMO */}
      <section id="pandomo" aria-labelledby="pandomo-title" className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="label">PD-01 / bezesparé / stěrka</p>
          <h2 id="pandomo-title" className="mt-2 text-4xl leading-tight sm:text-5xl">
            panDOMO — dekorativní podlahy a stěny
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            panDOMO je systém dekorativních stěrek pro podlahy i stěny. Výsledkem je souvislý povrch bez spár. Protože se
            stěrka nanáší ručně, nevzniknou dvě stejné plochy — každá podlaha a stěna je originál.
          </p>
          <p className="mt-4 leading-relaxed">
            Zda se systém hodí do vašeho prostoru, záleží hlavně na podkladu a na tom, jak se bude místnost používat.
            To spolu probereme ještě před rozhodnutím.
          </p>
          <p className="mt-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="ardex-tag">ARDEX</span>
            <span>Při práci používáme stavební chemii ARDEX.</span>
          </p>
          <AskLink subject="Dotaz: panDOMO podlahy a stěny">Zeptat se na panDOMO</AskLink>
        </div>
        <SurfaceScene />
      </section>

      <div className="seam" aria-hidden="true" />

      {/* Dřevěné podlahy */}
      <section id="drevene-podlahy" aria-labelledby="drevo-title" className="grid items-center gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <figure className="relative order-2 overflow-hidden lg:order-1">
          <img
            src="/section-1.webp"
            alt="Ilustrační AI vizualizace interiéru"
            loading="lazy"
            className="aspect-[4/3] w-full object-cover"
          />
          <figcaption className="stamp">Ilustrace č. 02 — AI vizualizace, nejde o realizaci firmy</figcaption>
        </figure>
        <div className="order-1 lg:order-2">
          <p className="label">DP-02 / dřevo / podlaha</p>
          <h2 id="drevo-title" className="mt-2 text-4xl leading-tight sm:text-5xl">
            Dřevěné podlahy
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Dřevěná podlaha dává interiéru teplo a klid. Materiál, barevné provedení i způsob pokládky se vybírají podle
            místnosti, stavu podkladu a toho, jak se bude prostor používat.
          </p>
          <p className="mt-4 leading-relaxed">
            Plánujete podlahové vytápění? Řekněte to hned na začátku — ovlivňuje výběr podlahy i postup pokládky.
          </p>
          <AskLink subject="Dotaz: dřevěné podlahy">Zeptat se na dřevěnou podlahu</AskLink>
        </div>
      </section>

      <div className="seam" aria-hidden="true" />

      {/* Dveře + truhlářská výroba */}
      <section id="dvere-a-vyroba" aria-labelledby="dvere-title" className="grid items-start gap-10 py-14 lg:grid-cols-2 lg:gap-16 lg:py-20">
        <div>
          <p className="label">DV-03 · TV-04</p>
          <h2 id="dvere-title" className="mt-2 text-4xl leading-tight sm:text-5xl">
            Dveře a truhlářská výroba na míru
          </h2>
          <p className="mt-5 text-lg leading-relaxed">
            Nová podlaha mění celý prostor. Dveře a nábytkové prvky je proto dobré řešit společně s ní, aby interiér
            působil jako jeden celek.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <article className="card p-5">
              <p className="label">DV-03</p>
              <h3 className="mt-1 text-2xl">Dveře</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed">Dveře, které ladí s podlahou i celkovým pojetím interiéru.</p>
            </article>
            <article className="card p-5">
              <p className="label">TV-04</p>
              <h3 className="mt-1 text-2xl">Truhlářská výroba</h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed">
                Truhlářské prvky vyrobené na míru vašemu prostoru — jako doplněk podlahy i samostatně.
              </p>
            </article>
          </div>
          <AskLink subject="Dotaz: dveře / truhlářská výroba na míru">Poptat dveře nebo výrobu na míru</AskLink>
        </div>
        <figure className="relative overflow-hidden">
          <img
            src="/section-2.webp"
            alt="Ilustrační AI vizualizace interiéru"
            loading="lazy"
            className="aspect-[4/5] w-full object-cover sm:aspect-[4/3] lg:aspect-[4/5]"
          />
          <figcaption className="stamp">Ilustrace č. 03 — AI vizualizace, nejde o realizaci firmy</figcaption>
        </figure>
      </section>
    </div>
  );
}
