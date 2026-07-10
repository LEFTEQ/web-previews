import type { CSSProperties } from "react";

export const metadata = {
  title: "FRISCHBETON Pardubice — čerstvý beton z betonárny na místo stavby",
  description:
    "Betonárna v Pardubicích. Transportbeton, čerpání a doprava autodomíchávačem podle receptury. Zavolejte a domluvte si dodávku na konkrétní den.",
  openGraph: {
    title: "FRISCHBETON Pardubice — čerstvý beton na místo stavby",
    description:
      "Transportbeton z pardubické betonárny. Recepturu, čerpání i dopravu vyřešíme za vás.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

type Recipe = {
  trida: string;
  nazev: string;
  konzistence: string;
  pouziti: string;
};

const recipes: Recipe[] = [
  {
    trida: "C 12/15",
    nazev: "Podkladní beton",
    konzistence: "S3",
    pouziti: "Vyrovnávka pod základy, podkladní vrstvy, výplně.",
  },
  {
    trida: "C 20/25",
    nazev: "Základový beton",
    konzistence: "S3 / S4",
    pouziti: "Základové pasy, patky a desky rodinných domů.",
  },
  {
    trida: "C 25/30",
    nazev: "Konstrukční beton",
    konzistence: "S4",
    pouziti: "Stropy, věnce, monolitické stěny a schodiště.",
  },
  {
    trida: "C 30/37 XF",
    nazev: "Mrazuvzdorný beton",
    konzistence: "S4",
    pouziti: "Vjezdy, terasy a plochy vystavené vodě a mrazu.",
  },
];

const steps = [
  {
    n: "01",
    t: "Řekněte nám, co stavíte",
    d: "Zavoláte, popíšete konstrukci a kubaturu. Poradíme třídu betonu i konzistenci — nemusíte znát značení zpaměti.",
  },
  {
    n: "02",
    t: "Namícháme na míru",
    d: "Recepturu namícháme podle vaší zakázky přímo na betonárně v Pardubicích. Každá várka projde kontrolou.",
  },
  {
    n: "03",
    t: "Přivezeme a dočerpáme",
    d: "Autodomíchávač dorazí v domluvený čas. Kam se nedostane, tam beton dopraví čerpadlo — až za dům.",
  },
];

const facts = [
  { k: "od 1 m³", v: "Dodáme i menší dávky pro základy chaty nebo garáže." },
  { k: "do 40 km", v: "Rozvoz z Pardubic po celém okrese i do okolních obcí." },
  { k: "do 90 min", v: "Beton na stavbě dřív, než začne tuhnout — hlídáme čas." },
];

export default function Page() {
  return (
    <main className="fb">
      <header className="fb-top">
        <a className="fb-brand" href="#top" aria-label="FRISCHBETON Pardubice — domů">
          <span className="fb-brand-mark" aria-hidden="true" />
          <span className="fb-brand-word">
            FRISCH<span className="fb-brand-thin">BETON</span>
          </span>
          <span className="fb-brand-loc">Pardubice</span>
        </a>
        <a className="fb-phone" href="tel:+420222868264">
          <span className="fb-phone-label">Betonárna</span>
          +420 222 868 264
        </a>
      </header>

      <section className="fb-hero" id="top">
        <div className="fb-hero-grid">
          <div className="fb-hero-copy">
            <p className="fb-eyebrow">Transportbeton · Pardubicko</p>
            <h1 className="fb-h1">
              Čerstvý beton,
              <br />
              namíchaný přesně
              <br />
              <span className="fb-h1-accent">na vaši stavbu.</span>
            </h1>
            <p className="fb-lead">
              Namícháme, přivezeme a dočerpáme beton z pardubické betonárny.
              Od základů rodinného domu po monolitický strop — recepturu
              vybereme za vás a stihneme to, než beton začne tuhnout.
            </p>
            <div className="fb-hero-cta">
              <a className="fb-btn" href="tel:+420222868264">
                Zavolat na betonárnu
              </a>
              <a className="fb-btn fb-btn-ghost" href="#receptury">
                Vybrat třídu betonu
              </a>
            </div>
            <ul className="fb-facts">
              {facts.map((f) => (
                <li key={f.k}>
                  <span className="fb-facts-k">{f.k}</span>
                  <span className="fb-facts-v">{f.v}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="fb-hero-media">
            <img
              src="/hero.webp"
              alt="Autodomíchávač lije čerstvý beton do bednění základů"
              width={880}
              height={1040}
              loading="eager"
            />
            <figcaption className="fb-hero-cap">
              <span className="fb-slump" aria-hidden="true" />
              Konzistence S4 · zkouška sednutím kužele
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="fb-sec" id="receptury" aria-labelledby="receptury-nadpis">
        <div className="fb-sec-head">
          <p className="fb-eyebrow">Výrobní sortiment</p>
          <h2 className="fb-h2" id="receptury-nadpis">
            Receptury podle toho,<br /> co betonujete
          </h2>
          <p className="fb-sec-sub">
            Nevíte, jakou třídu potřebujete? Řekněte nám konstrukci — my
            přeložíme značení do praxe a namícháme přesně to, co drží.
          </p>
        </div>

        <div className="fb-recipes">
          {recipes.map((r) => (
            <article className="fb-recipe" key={r.trida}>
              <span className="fb-recipe-trida">{r.trida}</span>
              <h3 className="fb-recipe-name">{r.nazev}</h3>
              <dl className="fb-recipe-meta">
                <div>
                  <dt>Konzistence</dt>
                  <dd>{r.konzistence}</dd>
                </div>
              </dl>
              <p className="fb-recipe-use">{r.pouziti}</p>
            </article>
          ))}
        </div>

        <figure className="fb-sec-media">
          <img
            src="/section-1.webp"
            alt="Detail čerstvě ulité betonové plochy s hlazeným povrchem"
            width={1280}
            height={720}
            loading="lazy"
          />
        </figure>
      </section>

      <section className="fb-sec fb-sec-dark" aria-labelledby="jak-nadpis">
        <div className="fb-sec-head">
          <p className="fb-eyebrow fb-eyebrow-light">Jak to u nás chodí</p>
          <h2 className="fb-h2" id="jak-nadpis">
            Od telefonu k hotové<br /> desce ve třech krocích
          </h2>
        </div>

        <div className="fb-flow">
          <div className="fb-flow-media">
            <img
              src="/section-2.webp"
              alt="Betonárna v Pardubicích s domíchávači připravenými k rozvozu"
              width={720}
              height={900}
              loading="lazy"
            />
          </div>
          <ol className="fb-steps">
            {steps.map((s) => (
              <li className="fb-step" key={s.n}>
                <span className="fb-step-n" aria-hidden="true">
                  {s.n}
                </span>
                <div>
                  <h3 className="fb-step-t">{s.t}</h3>
                  <p className="fb-step-d">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <p className="fb-note" style={{ "--i": 3 } as CSSProperties}>
          Betonárna FRISCHBETON · Pardubice · součást sítě betonáren koncernu
          STRABAG. Objednávky bereme telefonicky každý všední den.
        </p>
      </section>
    </main>
  );
}
