import type { CSSProperties } from "react";

export const metadata = {
  title: "Cukrárna PéCé — Náchodské dorty a zákusky | Hradec Králové",
  description:
    "Cukrárna Pekáren a cukráren Náchod v Hradci Králové. Dorty na objednávku, čerstvé zákusky, věnečky a laskonky pečené každé ráno. Zavolejte 800 403 403.",
  openGraph: {
    title: "Cukrárna PéCé — Náchodské dorty a zákusky",
    description:
      "Dorty na objednávku, čerstvé zákusky a jemné cukrářské pečivo. Cukrárna PéCé v Hradci Králové.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const vitrina = [
  {
    kod: "C-01",
    nazev: "Dorty na objednávku",
    popis:
      "Piškotové, ořechové i ovocné korpusy s máslovým krémem. Nápis a číslo píšeme rukou přímo v cukrárně den před vyzvednutím.",
    detail: "od 380 Kč · objednávka 3 dny předem",
  },
  {
    kod: "C-02",
    nazev: "Věnečky a laskonky",
    popis:
      "Odpalované těsto plněné vanilkovým krémem a poctivé laskonky slepené čokoládou. Pečeme je každé ráno, ne z mrazáku.",
    detail: "denně čerstvé · 22 Kč / kus",
  },
  {
    kod: "C-03",
    nazev: "Řezy a poháry",
    popis:
      "Marlenka, punčový řez, tvarohové kostky a smetanové poháry k posezení. Ke kávě nebo domů v krabičce.",
    detail: "vitrína · výběr podle dne",
  },
];

export default function Page() {
  return (
    <main className="pc">
      <header className="pc-nav" aria-label="Hlavní">
        <a className="pc-brand" href="#uvod" aria-label="Cukrárna PéCé, domů">
          <span className="pc-brand-mark">Pé</span>
          <span className="pc-brand-mark pc-brand-mark--2">Cé</span>
          <span className="pc-brand-sub">cukrárna · Hradec Králové</span>
        </a>
        <a className="pc-nav-tel" href="tel:800403403">
          800&nbsp;403&nbsp;403
        </a>
      </header>

      <section className="pc-hero" id="uvod">
        <div className="pc-hero-media">
          <img
            src="/hero.webp"
            alt="Ozdobený dort z cukrárny PéCé s čerstvým ovocem a máslovým krémem"
            className="pc-hero-img"
            width={1200}
            height={1500}
          />
        </div>
        <div className="pc-hero-text">
          <p className="pc-eyebrow">Pečeme každé ráno v Hradci Králové</p>
          <h1 className="pc-hero-title">
            Dort, který si
            <br />
            <span className="pc-hero-accent">pamatujete</span>
            <br />
            z dětství.
          </h1>
          <p className="pc-hero-lead">
            Máslový krém, ruční nápis, žádné náhražky. Dorty a zákusky pod
            značkou PéCé děláme tak, jak se to dělá u nás v Náchodě už přes
            padesát let — chutná celé rodině.
          </p>
          <div className="pc-hero-cta">
            <a className="pc-btn" href="tel:800403403">
              Zavolat a objednat dort
            </a>
            <a className="pc-btn pc-btn--ghost" href="#vitrina">
              Prohlédnout vitrínu
            </a>
          </div>
          <p className="pc-hero-note">
            Objednávka zdarma na lince 800&nbsp;403&nbsp;403 · info@pekarnynachod.cz
          </p>
        </div>
      </section>

      <section className="pc-vitrina" id="vitrina" aria-labelledby="vitrina-nadpis">
        <div className="pc-sec-head">
          <p className="pc-eyebrow">Z vitríny</p>
          <h2 id="vitrina-nadpis" className="pc-sec-title">
            Co dnes stojí za sklem
          </h2>
          <p className="pc-sec-lead">
            Sortiment se mění podle dne a ročního období. Tohle u nás najdete
            skoro vždycky.
          </p>
        </div>

        <ol className="pc-cards">
          {vitrina.map((v) => (
            <li className="pc-card" key={v.kod}>
              <span className="pc-card-tag" aria-hidden="true">
                {v.kod}
              </span>
              <h3 className="pc-card-title">{v.nazev}</h3>
              <p className="pc-card-text">{v.popis}</p>
              <p className="pc-card-detail">{v.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="pc-vitrina-foto">
          <img
            src="/section-1.webp"
            alt="Vitrína cukrárny PéCé plná čerstvých zákusků, věnečků a řezů"
            className="pc-foto-img"
            width={1200}
            height={800}
          />
          <figcaption className="pc-foto-cap">
            Ranní vitrína — než se otevře, je plná. Odpoledne už toho tolik nebývá.
          </figcaption>
        </figure>
      </section>

      <section className="pc-onas" aria-labelledby="onas-nadpis">
        <figure className="pc-onas-foto">
          <img
            src="/section-2.webp"
            alt="Cukrář z PéCé zdobí dort máslovým krémem přímo v provozovně"
            className="pc-foto-img"
            width={1000}
            height={1200}
          />
        </figure>
        <div className="pc-onas-text">
          <p className="pc-eyebrow">O nás</p>
          <h2 id="onas-nadpis" className="pc-sec-title">
            Jedna značka, poctivé řemeslo
          </h2>
          <p className="pc-onas-lead">
            PéCé je zkratka Pekáren a cukráren Náchod. V hradecké cukrárně
            děláme to, co se od velkého provozu nečeká: dorty skládáme ručně a
            krém šleháme z pravého másla.
          </p>

          <ul className="pc-fakta">
            <li className="pc-fakt">
              <span className="pc-fakt-cislo">4.30</span>
              <span className="pc-fakt-popis">
                Ráno, kdy se rozpéká první plech odpalovaného těsta.
              </span>
            </li>
            <li className="pc-fakt">
              <span className="pc-fakt-cislo">3 dny</span>
              <span className="pc-fakt-popis">
                Stačí na objednávku dortu na oslavu, svatbu i do práce.
              </span>
            </li>
            <li className="pc-fakt">
              <span className="pc-fakt-cislo">0 Kč</span>
              <span className="pc-fakt-popis">
                Za objednávku po telefonu — linka 800&nbsp;403&nbsp;403 je bezplatná.
              </span>
            </li>
          </ul>

          <blockquote className="pc-cit">
            „Objednávala jsem k narozeninám dceři dort s malinami. Přesně podle
            přání, s napsaným jménem — a hlavně to nebyla ta obvyklá tuková
            náhražka. Půjdeme zase.“
            <cite className="pc-cit-autor">— Lenka H., Hradec Králové</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
