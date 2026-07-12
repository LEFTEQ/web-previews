import React from "react";

const nabidka = [
  {
    kraj: "Tišnov · Brno-venkov",
    typ: "Rodinný dům 6+kk",
    popis:
      "Nadstandardní novostavba k dokončení, obytná plocha 219 m², pozemek 938 m². Ulice Černohorská — svah nad městem, klid a výhled.",
    plocha: "219 m²",
    pozemek: "938 m²",
    cena: "21 690 000",
  },
  {
    kraj: "Bukov · Žďár nad Sázavou",
    typ: "Rodinný dům po rekonstrukci",
    popis:
      "Špičková rekonstrukce hrubé stavby. Interiér si dokončíte podle sebe a nastěhujete se do nového.",
    plocha: "—",
    pozemek: "vlastní",
    cena: "4 650 000",
  },
  {
    kraj: "Tišnov · Brno-venkov",
    typ: "Byt 3+kk",
    popis:
      "Světlý byt 69 m² s prostorným balkonem na ulici Dlouhá. Zabydlený, dobrá dispozice, blízko centra.",
    plocha: "69 m²",
    pozemek: "balkon",
    cena: "7 280 000",
  },
  {
    kraj: "Brno-střed · Brno-město",
    typ: "Byt 4+kk",
    popis:
      "Prémiový byt 112 m² s lodžií i balkonem na ulici Placzkova. Reprezentativní bydlení v centru Brna.",
    plocha: "112 m²",
    pozemek: "lodžie",
    cena: "23 587 000",
  },
];

const projekty = [
  {
    misto: "Tišnov",
    nazev: "Hony za Kukýrnou",
    detail: "Stavební pozemky v klidné okrajové lokalitě.",
    stav: "v přípravě",
  },
  {
    misto: "Tišnov",
    nazev: "Kuthanova",
    detail: "Novostavby bytů, dokončený a prodaný projekt.",
    stav: "prodáno",
  },
  {
    misto: "Tišnov",
    nazev: "Dlouhá",
    detail: "Novostavby bytů v dosahu centra.",
    stav: "prodáno",
  },
  {
    misto: "Hustopeče u Brna",
    nazev: "Generála Peřiny",
    detail: "Bytový dům, úspěšně zprostředkovaný prodej.",
    stav: "prodáno",
  },
];

export default function Page() {
  return (
    <main className="sr">
      <header className="sr-top">
        <a className="sr-mark" href="#uvod" aria-label="Solid real — realitní kancelář Brno">
          <span className="sr-mark__solid">Solid</span>
          <span className="sr-mark__real">real</span>
        </a>
        <nav className="sr-nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#duvera">Reference</a>
          <a className="sr-nav__call" href="tel:+420739444126">739 444 126</a>
        </nav>
      </header>

      <section className="sr-hero" id="uvod">
        <div className="sr-hero__frame">
          <img
            className="sr-hero__img"
            src="/hero.webp"
            alt="Interiér nabízené nemovitosti v Brně a okolí zprostředkované kanceláří Solid real"
          />
          <div className="sr-hero__stamp" aria-hidden="true">
            <span>od 2006</span>
            <span>Příkop 6, Brno</span>
          </div>
        </div>

        <div className="sr-hero__text">
          <p className="sr-eyebrow">Realitní kancelář · Brno, Příkop 6</p>
          <h1 className="sr-hero__title">
            Prodáme váš dům
            <br />
            <em>klidně</em> a bez tlaku —
            <br />
            klienti se k nám vracejí.
          </h1>
          <p className="sr-hero__lead">
            Byty, domy a pozemky převážně v Jihomoravském kraji. Devatenáct let
            zkušeností, jméno, které v Brně něco znamená, a jednání, u kterého
            se dá dýchat.
          </p>
          <div className="sr-hero__cta">
            <a className="sr-btn" href="tel:+420739444126">Zavolat Martině Čechové</a>
            <a className="sr-btn sr-btn--ghost" href="#nabidka">Prohlédnout nabídku</a>
          </div>

          <dl className="sr-facts">
            <div>
              <dt>Let na trhu</dt>
              <dd>19</dd>
            </div>
            <div>
              <dt>Kde působíme</dt>
              <dd>Jihomoravský kraj</dd>
            </div>
            <div>
              <dt>Čtyři rodiny, jeden den</dt>
              <dd>podpis v kuse</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sr-offer" id="nabidka">
        <div className="sr-offer__head">
          <p className="sr-eyebrow">Z aktuální nabídky</p>
          <h2 className="sr-h2">Co teď máme na stole</h2>
          <p className="sr-offer__note">
            Výběr z prodeje. K prodeji i pronájmu, převážně Brno a okolí,
            Tišnovsko, Vysočina.
          </p>
        </div>

        <ul className="sr-list">
          {nabidka.map((n, i) => (
            <li className="sr-card" key={n.typ + i}>
              <div className="sr-card__rail">
                <span className="sr-card__idx">{String(i + 1).padStart(2, "0")}</span>
                <span className="sr-card__tag">Prodej</span>
              </div>
              <div className="sr-card__body">
                <p className="sr-card__place">{n.kraj}</p>
                <h3 className="sr-card__type">{n.typ}</h3>
                <p className="sr-card__desc">{n.popis}</p>
                <div className="sr-card__meta">
                  <span>
                    Plocha <strong>{n.plocha}</strong>
                  </span>
                  <span>
                    Venek <strong>{n.pozemek}</strong>
                  </span>
                </div>
              </div>
              <div className="sr-card__price">
                <span className="sr-card__czk">{n.cena}</span>
                <span className="sr-card__unit">Kč</span>
              </div>
            </li>
          ))}
        </ul>

        <div className="sr-projects">
          <div className="sr-projects__media">
            <img
              src="/section-1.webp"
              alt="Novostavba bytového domu zprostředkovaná kanceláří Solid real na Tišnovsku"
            />
          </div>
          <div className="sr-projects__text">
            <p className="sr-eyebrow">Novostavby, které jsme dotáhli</p>
            <h3 className="sr-h3">Od pozemku po předání klíčů</h3>
            <ul className="sr-proj-list">
              {projekty.map((p) => (
                <li key={p.nazev}>
                  <span className="sr-proj-list__place">{p.misto}</span>
                  <span className="sr-proj-list__name">{p.nazev}</span>
                  <span className="sr-proj-list__detail">{p.detail}</span>
                  <span className={"sr-proj-list__stav sr-proj-list__stav--" + (p.stav === "prodáno" ? "done" : "soon")}>
                    {p.stav}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="sr-trust" id="duvera">
        <div className="sr-trust__grid">
          <div className="sr-quote">
            <p className="sr-eyebrow">Reference · Veronika Blahová</p>
            <blockquote className="sr-quote__text">
              „Během šesti měsíců pan Cicvárek našel kupce na náš dům, kupce na
              byt mých rodičů a zároveň zprostředkoval koupi krásného bytu pro
              ně. Zainteresované byly čtyři rodiny a všechno se dokončilo
              <strong> v jediném dni při společném podpisu smluv.</strong>
              Děkuji i za klidné a přátelské vystupování, kterým nás celou dobu
              provázel.“
            </blockquote>
            <p className="sr-quote__by">— klientka po prodeji domu a koupi bytu</p>
          </div>

          <figure className="sr-trust__media">
            <img
              src="/section-2.webp"
              alt="Nemovitost k prodeji v nabídce realitní kanceláře Solid real v Brně a okolí"
            />
          </figure>
        </div>

        <div className="sr-about">
          <div className="sr-about__card">
            <p className="sr-eyebrow">Kdo to vede</p>
            <p className="sr-about__name">Martina Čechová</p>
            <p className="sr-about__role">jednatelka společnosti · 19 let v oboru</p>
            <div className="sr-about__contact">
              <a href="tel:+420739444126">739 444 126</a>
              <a href="mailto:martina.cechova@solidreal.cz">martina.cechova@solidreal.cz</a>
            </div>
            <p className="sr-about__addr">Kancelář: Příkop 6, 602 00 Brno</p>
          </div>
          <p className="sr-about__claim">
            „Děkujeme klientům, kteří se k nám rádi vracejí.“ Není to slogan —
            je to většina naší práce.
          </p>
        </div>
      </section>
    </main>
  );
}
