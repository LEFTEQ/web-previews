import type { CSSProperties } from "react";

const projekty = [
  {
    misto: "Olomouc",
    nazev: "Novostavba KOPIS — operační středisko HZS",
    typ: "Občanská stavba na klíč",
    rok: "2016",
  },
  {
    misto: "Olomouc, Zíkova 14",
    nazev: "Energeticky úsporné opatření domova pro seniory",
    typ: "Zateplení a úspory energie",
    rok: "2015",
  },
  {
    misto: "Černovír, Olomouc",
    nazev: "Novostavba hasičské zbrojnice",
    typ: "Generální dodávka",
    rok: "2015",
  },
  {
    misto: "Červenka",
    nazev: "Rekonstrukce fasády domova důchodců",
    typ: "Fasáda a sanace",
    rok: "2014",
  },
  {
    misto: "Přerov, Hranická",
    nazev: "Zateplení a výměna oken bytového domu",
    typ: "Revitalizace panelu",
    rok: "2014",
  },
  {
    misto: "Olomouc, U Letiště",
    nazev: "Zateplení, okna a rekonstrukce balkonů",
    typ: "Revitalizace panelu",
    rok: "2013",
  },
];

const obory = [
  {
    kod: "01",
    nadpis: "Občanské a bytové stavby",
    text: "Novostavby na klíč — od hasičských zbrojnic přes operační střediska až po bytové domy. Vedeme stavbu jako generální dodavatel, takže máte jednoho partnera od výkopu po kolaudaci.",
  },
  {
    kod: "02",
    nadpis: "Průmyslové stavby",
    text: "Haly, provozy a technické objekty pro firmy z Olomouckého kraje. Držíme termíny a pružně řešíme změny v průběhu — to je to, proč se k nám zakázky vracejí.",
  },
  {
    kod: "03",
    nadpis: "Zateplení a fasády",
    text: "Revitalizace panelových a bytových domů, výměna oken, sanace balkonů. Jsme v seznamu odborných dodavatelů programu Zelená úsporám — dotaci vyřídíme s vámi.",
  },
];

export default function Page() {
  return (
    <main className="sp">
      <header className="sp-top">
        <a className="sp-brand" href="#" aria-label="Stavitelství Pospíšil, domů">
          <span className="sp-brand-mark" aria-hidden="true">SP</span>
          <span className="sp-brand-name">
            Stavitelství <strong>Pospíšil</strong>
            <span className="sp-brand-sub">Olomouc · od 1999</span>
          </span>
        </a>
        <nav className="sp-nav" aria-label="Hlavní">
          <a href="#obory">Co stavíme</a>
          <a href="#reference">Reference</a>
          <a className="sp-nav-call" href="tel:+420777666576">777 666 576</a>
        </nav>
      </header>

      <section className="sp-hero">
        <img
          className="sp-hero-img"
          src="/hero.webp"
          alt="Rozestavěná stavba realizovaná firmou Stavitelství Pospíšil v Olomouckém kraji"
        />
        <div className="sp-hero-veil" aria-hidden="true" />
        <div className="sp-hero-grid" aria-hidden="true" />
        <div className="sp-hero-inner">
          <p className="sp-eyebrow">Generální dodavatel staveb · Olomoucký kraj</p>
          <h1 className="sp-hero-title">
            S námi<br />
            <span className="sp-hero-em">postavíte.</span>
          </h1>
          <p className="sp-hero-lede">
            Občanské, bytové a průmyslové stavby na klíč. Držíme termíny,
            řešíme změny za pochodu a předáváme hotové dílo — od základů po fasádu.
          </p>
          <div className="sp-hero-cta">
            <a className="sp-btn" href="tel:+420777666576">Zavolat na stavbu</a>
            <a className="sp-btn sp-btn-ghost" href="mailto:pospisil@stpospisil.cz">Napsat poptávku</a>
          </div>
        </div>
        <dl className="sp-facts">
          <div>
            <dt>Od roku</dt>
            <dd>1999</dd>
          </div>
          <div>
            <dt>Ocenění</dt>
            <dd>Fasáda roku 2014</dd>
          </div>
          <div>
            <dt>Zelená úsporám</dt>
            <dd>Odborný dodavatel</dd>
          </div>
        </dl>
      </section>

      <section className="sp-section sp-obory" id="obory">
        <div className="sp-sec-head">
          <p className="sp-eyebrow sp-eyebrow-dark">Co pro vás postavíme</p>
          <h2 className="sp-sec-title">Tři obory, jeden dodavatel</h2>
          <p className="sp-sec-lede">
            Ať jde o novostavbu, halu, nebo revitalizaci panelového domu — vedeme celou
            zakázku sami. Vy komunikujete s jedním člověkem, ne s deseti řemesly.
          </p>
        </div>
        <div className="sp-obory-grid">
          <ol className="sp-obory-list">
            {obory.map((o) => (
              <li key={o.kod} className="sp-obor">
                <span className="sp-obor-kod" aria-hidden="true">{o.kod}</span>
                <div>
                  <h3>{o.nadpis}</h3>
                  <p>{o.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <figure className="sp-obory-fig">
            <img
              src="/section-1.webp"
              alt="Detail stavebních prací — konstrukce a fasáda rozestavěného objektu"
              loading="lazy"
            />
            <figcaption>Revitalizace bytového domu, Olomoucký kraj</figcaption>
          </figure>
        </div>
      </section>

      <section className="sp-section sp-ref" id="reference">
        <div className="sp-ref-media">
          <img
            src="/section-2.webp"
            alt="Dokončená stavba realizovaná firmou Stavitelství Pospíšil"
            loading="lazy"
          />
        </div>
        <div className="sp-ref-body">
          <p className="sp-eyebrow sp-eyebrow-dark">Reference · vybrané zakázky</p>
          <h2 className="sp-sec-title">Postaveno v kraji, ve kterém žijeme</h2>
          <p className="sp-sec-lede">
            Dynamická stavební firma se zázemím v Olomouci a rostoucí působností po celé ČR.
            Získali jsme 1. místo Stavotechu v Olomouci a ocenění Fasáda roku 2014 od města Přerova.
          </p>
          <ul className="sp-ref-list">
            {projekty.map((p, i) => (
              <li key={i} className="sp-ref-row" style={{ "--i": i } as CSSProperties}>
                <span className="sp-ref-rok">{p.rok}</span>
                <span className="sp-ref-main">
                  <strong>{p.nazev}</strong>
                  <span className="sp-ref-meta">{p.typ} · {p.misto}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="sp-ref-note">
            Na Zákopě 636/2b, 779&nbsp;00 Olomouc · Po–Pá 8:00–16:00 ·{" "}
            <a href="tel:+420777666576">777&nbsp;666&nbsp;576</a>
          </p>
        </div>
      </section>
    </main>
  );
}
