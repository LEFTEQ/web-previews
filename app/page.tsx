import React from "react";

const prakticke = [
  {
    obor: "Občanské právo",
    poznamka: "Nemovitosti, byty, dědictví, rodina",
    body: [
      "Smlouvy k nemovitostem — kupní, nájemní, pachtovní, věcná břemena",
      "Bytové právo a vztahy ve společenství vlastníků",
      "Vymáhání pohledávek, náhrada škody, bezdůvodné obohacení",
      "Rodinné právo — výchova a výživa nezletilých dětí",
      "Vypořádání majetku manželů a dědické řízení",
    ],
  },
  {
    obor: "Obchodní právo",
    poznamka: "Společnosti, smlouvy, obchodní rejstřík",
    body: [
      "Kupní smlouvy, smlouvy o dílo, mandátní i o obchodním zastoupení",
      "Založení obchodních společností a změny v rejstříku",
      "Valné hromady, zvýšení či snížení základního kapitálu",
      "Vymáhání smluvních nároků a náhrady škody",
      "Likvidace společnosti a ochrana hospodářské soutěže",
    ],
  },
  {
    obor: "Pracovní právo",
    poznamka: "Zaměstnavatelé i zaměstnanci",
    body: [
      "Pracovní smlouvy, vnitropodnikové směrnice a řády",
      "Ukončení pracovního poměru a odstupné",
      "Pracovněprávní spory a odměňování",
      "Ochrana proti konkurenčnímu jednání zaměstnanců",
    ],
  },
  {
    obor: "Trestní právo",
    poznamka: "Obhajoba i zastupování poškozených",
    body: [
      "Obhajoba v celém trestním řízení",
      "Stížnosti, odvolání, odpory, dovolání, obnova řízení",
      "Zastupování v přípravné fázi a v řízení o vazbě",
      "Uplatňování nároků poškozeného",
    ],
  },
];

export default function Page() {
  return (
    <main className="ak">
      <header className="ak-nav" aria-label="Hlavní">
        <a className="ak-mark" href="#" aria-label="Advokátní kancelář Cvejn — domů">
          <span className="ak-mark-name">Cvejn</span>
          <span className="ak-mark-sub">advokátní kancelář</span>
        </a>
        <nav className="ak-links" aria-label="Sekce">
          <a href="#sluzby">Právní služby</a>
          <a href="#kancelar">Kancelář</a>
          <a className="ak-tel" href="tel:+420494900057">494&nbsp;900&nbsp;057</a>
        </nav>
      </header>

      <section className="ak-hero" aria-labelledby="hero-h">
        <div className="ak-hero-text">
          <p className="ak-eyebrow">Hradec Králové · Baťkovo náměstí</p>
          <h1 id="hero-h">
            Tři příkazy práva —
            <em>čestně žít, druhému neškodit, každému dát, co mu patří.</em>
          </h1>
          <p className="ak-lead">
            Mgr.&nbsp;Ing.&nbsp;Zdeněk&nbsp;Cvejn vede generální advokátní praxi.
            Zastoupím vás v občanských, obchodních, pracovních i trestních
            věcech — od první konzultace po soud.
          </p>
          <div className="ak-hero-cta">
            <a className="ak-btn" href="tel:+420494900057">Zavolat do kanceláře</a>
            <a className="ak-btn ak-btn-ghost" href="mailto:advokat@akcvejn.cz">Napsat e-mail</a>
          </div>
        </div>
        <figure className="ak-hero-fig">
          <img
            src="/hero.webp"
            width={880}
            height={1100}
            alt="Advokát Zdeněk Cvejn ve své kanceláři v Hradci Králové"
            className="ak-hero-img"
          />
        </figure>
      </section>

      <section id="sluzby" className="ak-sluzby" aria-labelledby="sluzby-h">
        <div className="ak-sec-head">
          <p className="ak-eyebrow">S čím vám pomůžu</p>
          <h2 id="sluzby-h">Právní služby</h2>
          <p className="ak-sec-note">
            Komplexní právní poradenství a zastupování fyzických i právnických
            osob v celé České republice.
          </p>
        </div>
        <ol className="ak-obory">
          {prakticke.map((o, i) => (
            <li className="ak-obor" key={o.obor}>
              <div className="ak-obor-top">
                <span className="ak-obor-num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{o.obor}</h3>
                  <p className="ak-obor-note">{o.poznamka}</p>
                </div>
              </div>
              <ul className="ak-obor-list">
                {o.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="ak-odmena">
          <img
            src="/section-1.webp"
            width={720}
            height={520}
            alt="Pracovní stůl advokátní kanceláře se spisy"
            className="ak-odmena-img"
          />
          <div className="ak-odmena-text">
            <h3>Odměna dohodou, předem a srozumitelně</h3>
            <p>
              Nejčastěji sjednávám hodinovou sazbu za poskytnutou právní pomoc.
              Domluvit lze i sazbu za jednotlivé úkony, podílovou nebo
              jednorázovou odměnu.
            </p>
            <p>
              Při dlouhodobé spolupráci nabízím paušál — předem sjednaný rozsah
              hodin za zvýhodněnou sazbu. Konkrétní podobu odměny domluvíme
              hned při převzetí věci, ať víte, na čem jste.
            </p>
          </div>
        </div>
      </section>

      <section id="kancelar" className="ak-kancelar" aria-labelledby="kancelar-h">
        <div className="ak-kancelar-media">
          <img
            src="/section-2.webp"
            width={760}
            height={640}
            alt="Budova bývalého hotelu Paříž na Baťkově náměstí v Hradci Králové"
            className="ak-kancelar-img"
          />
        </div>
        <div className="ak-kancelar-text">
          <p className="ak-eyebrow">Kde mě najdete</p>
          <h2 id="kancelar-h">Kancelář v centru Hradce</h2>
          <p>
            Sídlím v 1.&nbsp;patře administrativní budovy bývalého „hotelu
            Paříž“ na Baťkově náměstí — v pěší zóně v centru města. U vstupu
            zvolte na zvoncích číslo <strong>104</strong> nebo <strong>105</strong>.
          </p>
          <dl className="ak-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Kollárova 1114/5, 500&nbsp;02 Hradec&nbsp;Králové</dd>
            </div>
            <div>
              <dt>MHD</dt>
              <dd>Zastávka „Centrál“ (asi minuta chůze) — linky 2, 3, 6, 7, 11, 12, 13, 16</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420494900057">494&nbsp;900&nbsp;057</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href="mailto:advokat@akcvejn.cz">advokat@akcvejn.cz</a></dd>
            </div>
          </dl>
          <p className="ak-cak">
            Spory mezi advokátem a spotřebitelem řeší mimosoudně Česká advokátní
            komora — <a href="https://www.cak.cz">www.cak.cz</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
