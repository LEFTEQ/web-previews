import React from "react";

const filtry = [
  { code: "F7", name: "Kapsový filtr", note: "samonosný, na míru rámu" },
  { code: "G4", name: "Z-filtr / papírový", note: "skládaná vložka" },
  { code: "M5", name: "Plošný filtr", note: "do klimajednotek" },
  { code: "—", name: "Filtrační tkaniny", note: "metráž i formáty" },
  { code: "FC", name: "Fan-coil rukávec", note: "na jednotku" },
  { code: "H13", name: "HEPA / ULPA", note: "čisté provozy" },
  { code: "AC", name: "Aktivní uhlí", note: "proti pachům" },
  { code: "G2", name: "Tukový / vstupní", note: "gastro a kuchyně" },
];

const rezimy = [
  {
    tag: "Léto",
    temp: "−7 °C",
    title: "Chlazení",
    body:
      "Split i multisplit Daikin uklidí vedro z ložnice i kanceláře. Jedna venkovní jednotka, víc místností.",
  },
  {
    tag: "Zima",
    temp: "+24 °C",
    title: "Vytápění",
    body:
      "Tepelné čerpadlo vzduch-voda tahá teplo zvenku dovnitř. Topí levněji než elektrokotel, chladí v létě.",
  },
  {
    tag: "Celoročně",
    temp: "čistý",
    title: "Filtrace vzduchu",
    body:
      "Vzduchotechnika mění vydýchaný vzduch za čerstvý a odchytává prach i alergeny dřív, než je nadechnete.",
  },
];

export default function Page() {
  return (
    <main className="vzt">
      <header className="vzt-topbar">
        <a className="vzt-wordmark" href="#hero" aria-label="Brabec vzduchotechnika, úvod">
          <span className="vzt-wordmark__b">Brabec</span>
          <span className="vzt-wordmark__sub">vzduchotechnika · Praha</span>
        </a>
        <a className="vzt-topcall" href="tel:+420733651554">+420 733 651 554</a>
      </header>

      <section className="vzt-hero" id="hero">
        <img
          className="vzt-hero__img"
          src="/hero.webp"
          alt="Nástěnná klimatizační jednotka v obytném prostoru"
        />
        <div className="vzt-hero__scrim" aria-hidden="true" />
        <div className="vzt-hero__inner">
          <p className="vzt-eyebrow">Vzduch, který v místnosti neslyšíte</p>
          <h1 className="vzt-hero__title">
            Nastavíme vám vzduch<br />
            <span className="vzt-hero__accent">na správnou teplotu.</span>
          </h1>
          <p className="vzt-hero__lede">
            Klimatizace, tepelná čerpadla a vzduchotechnika pro pražské byty,
            kanceláře i haly. Od návrhu přes filtry na míru až po servis.
          </p>

          <div className="vzt-dial" role="img" aria-label="Rozsah, který pokryjeme: od minus sedmi do dvaceti čtyř stupňů Celsia">
            <span className="vzt-dial__cold">−7&nbsp;°C</span>
            <span className="vzt-dial__track" aria-hidden="true">
              <span className="vzt-dial__fill" />
            </span>
            <span className="vzt-dial__hot">+24&nbsp;°C</span>
          </div>
          <p className="vzt-dial__label">jeden systém chladí i topí — po celý rok</p>

          <div className="vzt-hero__cta">
            <a className="vzt-btn vzt-btn--solid" href="tel:+420733651554">Zavolat technikovi</a>
            <a className="vzt-btn vzt-btn--ghost" href="#showroom">Přijít do showroomu</a>
          </div>
        </div>
      </section>

      <section className="vzt-modes" aria-labelledby="modes-h">
        <div className="vzt-sec-head">
          <span className="vzt-sec-num">01</span>
          <h2 className="vzt-sec-title" id="modes-h">Co pro váš prostor umíme</h2>
          <p className="vzt-sec-sub">
            Tři věci, které řešíme každý týden — pro rodinné domy, byty i
            průmyslové objekty v Praze a okolí.
          </p>
        </div>

        <div className="vzt-modes__grid">
          {rezimy.map((r) => (
            <article className="vzt-mode" key={r.title}>
              <div className="vzt-mode__gauge">
                <span className="vzt-mode__tag">{r.tag}</span>
                <span className="vzt-mode__temp">{r.temp}</span>
              </div>
              <h3 className="vzt-mode__title">{r.title}</h3>
              <p className="vzt-mode__body">{r.body}</p>
            </article>
          ))}
        </div>

        <div className="vzt-filters">
          <div className="vzt-filters__intro">
            <img
              className="vzt-filters__img"
              src="/section-1.webp"
              alt="Vzduchový filtr do klimatizační a vzduchotechnické jednotky"
            />
            <div>
              <h3 className="vzt-filters__h">Filtry vyrábíme na míru</h3>
              <p className="vzt-filters__p">
                Filtr je srdce jednotky — proto ho neřežeme z katalogu, ale
                děláme přesně na váš rám. Dodáme od pěti pracovních dnů a
                skladování máte u nás zdarma.
              </p>
            </div>
          </div>
          <ul className="vzt-filters__list">
            {filtry.map((f) => (
              <li className="vzt-filters__item" key={f.name}>
                <span className="vzt-filters__code">{f.code}</span>
                <span className="vzt-filters__name">{f.name}</span>
                <span className="vzt-filters__note">{f.note}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="vzt-trust" id="showroom" aria-labelledby="trust-h">
        <div className="vzt-sec-head">
          <span className="vzt-sec-num">02</span>
          <h2 className="vzt-sec-title" id="trust-h">Přijďte se na to podívat</h2>
          <p className="vzt-sec-sub">
            Jsme partner značky Daikin. Než něco kupujete, sedneme si nad
            půdorys a řekneme, co má a nemá smysl. Doporučujeme se objednat
            předem telefonicky.
          </p>
        </div>

        <div className="vzt-trust__grid">
          <img
            className="vzt-trust__img"
            src="/section-2.webp"
            alt="Venkovní jednotka tepelného čerpadla u domu"
          />

          <div className="vzt-cards">
            <article className="vzt-place">
              <h3 className="vzt-place__city">Showroom Praha</h3>
              <p className="vzt-place__addr">Jeseniova 1555/174<br />Žižkov, 130 00 Praha 3</p>
              <dl className="vzt-place__meta">
                <div><dt>Otevřeno</dt><dd>Po–Pá, 8:00–16:30</dd></div>
                <div><dt>Kontakt</dt><dd>Bc. Hana Kopecká</dd></div>
              </dl>
              <a className="vzt-btn vzt-btn--solid vzt-btn--sm" href="tel:+420733651554">Zavolat 733 651 554</a>
            </article>

            <article className="vzt-place">
              <h3 className="vzt-place__city">Showroom Veletice</h3>
              <p className="vzt-place__addr">Veletice 11<br />Holedeč, 438 01</p>
              <dl className="vzt-place__meta">
                <div><dt>Otevřeno</dt><dd>Dle domluvy</dd></div>
                <div><dt>Kontakt</dt><dd>František Nechanický</dd></div>
              </dl>
              <a className="vzt-btn vzt-btn--solid vzt-btn--sm" href="tel:+420739283217">Zavolat 739 283 217</a>
            </article>
          </div>
        </div>

        <div className="vzt-news">
          <span className="vzt-news__flag">Aktuálně</span>
          <p className="vzt-news__text">
            <strong>Vnitřní jednotka Daikin zdarma.</strong> Jako partner Daikin
            nabízíme multisplit — jedna venkovní jednotka chladí i topí ve více
            místnostech najednou. Rádi propočítáme i dotace.
          </p>
          <a className="vzt-news__more" href="tel:+420733651554">Chci propočet</a>
        </div>
      </section>
    </main>
  );
}
