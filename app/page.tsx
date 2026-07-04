import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Odborný posudek domu",
      popis:
        "Přijedeme za vámi, projdeme obvodový plášť a řekneme rovnou, co dům potřebuje. Bez prodejních řečí — jen návrh řešení, které dává smysl pro vaše peníze.",
    },
    {
      cislo: "02",
      nazev: "Projekt a energetické hodnocení",
      popis:
        "Vypracujeme projektovou dokumentaci, energetický posudek a vyřídíme vyjádření úřadů pro stavební povolení nebo ohlášení. Papírování necháte na nás.",
    },
    {
      cislo: "03",
      nazev: "Financování a dotace NZÚ",
      popis:
        "Navrhneme způsob financování a najdeme vhodný dotační titul — nejčastěji Novou zelenou úsporám. Celou administraci dotace vyřídíme za vás.",
    },
    {
      cislo: "04",
      nazev: "Výběrové řízení na zhotovitele",
      popis:
        "Kompletně zajistíme výběrové řízení. Porovnáme nabídky, ohlídáme ceny a vyberete si dodavatele, který skutečně umí.",
    },
    {
      cislo: "05",
      nazev: "Technický dozor a BOZP",
      popis:
        "Po celou dobu realizace jsme na stavbě jako váš člověk. Odborný dozor investora a koordinace bezpečnosti práce — kvalita se hlídá na místě, ne na papíře.",
    },
  ];

  const reference = [
    {
      datum: "11. května 2025",
      misto: "Rodinný dům, Hradec Králové",
      text:
        "Investor zvolil zateplení systémem PUR THERM v tloušťce 10 cm místo EPS nebo minerální vaty v 16–18 cm. Bonusem je záruka proti plísním a řasám na fasádě na 10 let. Samozřejmě s dotací NZÚ.",
    },
    {
      datum: "25. března 2025",
      misto: "Bytový dům",
      text:
        "Dokončena komplexní regenerace bytového domu s financováním z programu Nová zelená úsporám. Zateplení obvodového pláště v systému PUR THERM, minimální tloušťka izolace 12 cm.",
    },
    {
      datum: "18. března 2025",
      misto: "Bytový dům",
      text:
        "Dotace NZÚ vyplacena. Investor chytře nahradil izolaci EPS 20 cm izolací PUR o tloušťce 12 cm — stejný výsledek, tenčí souvrství, více místa.",
    },
  ];

  return (
    <main className="tpt">
      <header className="tpt-nav">
        <a className="tpt-mark" href="#top" aria-label="TPT — regenerace bytových domů">
          <span className="tpt-mark-t">TPT</span>
          <span className="tpt-mark-sub">regenerace bytových domů</span>
        </a>
        <nav className="tpt-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="tpt-hero" id="top">
        <div className="tpt-hero-media">
          <img
            src="/hero.webp"
            alt="Zateplená fasáda bytového domu v Hradci Králové po komplexní regeneraci"
            className="tpt-hero-img"
          />
        </div>
        <div className="tpt-hero-body">
          <p className="tpt-eyebrow">TPT s.r.o. · Hradec Králové</p>
          <h1 className="tpt-h1">
            Zatepleme váš dům<br />
            <span className="tpt-h1-thin">o vrstvu tenčí, o starost lehčí.</span>
          </h1>
          <p className="tpt-lead">
            Kompletní regenerace bytových domů — od posudku přes dotaci
            Nová zelená úsporám až po dozor na stavbě. Systém PUR THERM
            zvládne v&nbsp;12&nbsp;cm to, co EPS potřebuje ve 20.
          </p>
          <div className="tpt-hero-cta">
            <a className="tpt-btn" href="#kontakt">Chci posoudit svůj dům</a>
            <a className="tpt-btn tpt-btn-ghost" href="#sluzby">Co všechno zařídíme</a>
          </div>

          <dl className="tpt-spec">
            <div>
              <dt>Izolace PUR THERM</dt>
              <dd>12 cm<span>= EPS 20 cm</span></dd>
            </div>
            <div>
              <dt>Záruka na fasádu</dt>
              <dd>10 let<span>proti plísním a řasám</span></dd>
            </div>
            <div>
              <dt>Dotace</dt>
              <dd>NZÚ<span>vyřídíme za vás</span></dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tpt-section" id="sluzby">
        <div className="tpt-section-head">
          <p className="tpt-eyebrow">Jak to u nás běží</p>
          <h2 className="tpt-h2">Pět kroků od prohlídky ke kolaudaci</h2>
          <p className="tpt-section-note">
            Vedeme vás celou regenerací v pořadí, ve kterém se opravdu
            dělá. Vy rozhodujete, my zařizujeme — administrativu,
            řemeslo i peníze.
          </p>
        </div>

        <ol className="tpt-steps">
          {sluzby.map((s) => (
            <li className="tpt-step" key={s.cislo}>
              <span className="tpt-step-num">{s.cislo}</span>
              <div className="tpt-step-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="tpt-trust" id="reference">
        <div className="tpt-trust-grid">
          <div className="tpt-trust-media">
            <img
              src="/section-1.webp"
              alt="Realizace zateplení obvodového pláště bytového domu systémem PUR THERM"
              className="tpt-trust-img"
            />
            <img
              src="/section-2.webp"
              alt="Detail hotové zateplené fasády po regeneraci bytového domu"
              className="tpt-trust-img tpt-trust-img-2"
            />
          </div>

          <div className="tpt-trust-body" id="kontakt">
            <p className="tpt-eyebrow">Z našeho deníku staveb</p>
            <h2 className="tpt-h2">Domy, které už dýchají líp</h2>
            <p className="tpt-section-note">
              Komplexní služby pro investory s nároky na kvalitu.
              Zakládáme si na profesionalitě a na tom, že za odvedenou
              práci ručíme.
            </p>

            <ul className="tpt-refs">
              {reference.map((r, i) => (
                <li className="tpt-ref" key={i}>
                  <p className="tpt-ref-meta">
                    <span className="tpt-ref-misto">{r.misto}</span>
                    <time className="tpt-ref-datum">{r.datum}</time>
                  </p>
                  <p className="tpt-ref-text">{r.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
