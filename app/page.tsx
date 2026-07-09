import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Hrubá stavba na klíč",
      popis:
        "Základy, obvodové zdivo, stropy a krov. Zaměříme pozemek, založíme dům podle projektu a předáme vám hrubou stavbu pod střechou — připravenou na řemeslníky nebo na naši kompletní dostavbu.",
      detail: "Základová deska • Zdivo • Stropní systém • Krov a střecha",
    },
    {
      cislo: "02",
      nazev: "Rekonstrukce a přestavby",
      popis:
        "Bytová jádra, půdní vestavby i celé domy v Olomouci a okolí. Nejdřív bourání a statika, pak nové rozvody, omítky a povrchy. Termín i rozpočet dostanete písemně dopředu.",
      detail: "Bourací práce • Rozvody • Sádrokartony • Omítky a podlahy",
    },
    {
      cislo: "03",
      nazev: "Zateplení a fasády",
      popis:
        "Kontaktní zateplení, nové omítky a klempířské prvky. Sníží se vám náklady na topení a dům dostane novou tvář — bez trhlin a odchlípnutého polystyrenu za dva roky.",
      detail: "Zateplovací systém • Fasádní omítka • Klempířina • Nátěry",
    },
  ];

  const duvody = [
    {
      k: "22 let",
      v: "stavíme v Olomouci a Olomouckém kraji — víme, kde je jaké podloží a kdo dodá kvalitní materiál.",
    },
    {
      k: "Pevná cena",
      v: "rozpočet dostanete položkově a písemně. Vícepráce jen po vaší odsouhlasené změně, nikdy dodatečně.",
    },
    {
      k: "Jeden stavbyvedoucí",
      v: "od výkopu po předání máte jednoho člověka, kterému voláte. Žádné přehazování odpovědnosti mezi firmami.",
    },
  ];

  return (
    <main className="gv">
      <header className="gv-top">
        <a className="gv-mark" href="#uvod" aria-label="Gama G+V, stavební firma Olomouc">
          <span className="gv-mark-g">Gama</span>
          <span className="gv-mark-gv">G+V</span>
        </a>
        <span className="gv-loc">Stavební firma · Olomouc</span>
      </header>

      <section className="gv-hero" id="uvod">
        <div className="gv-hero-media">
          <img
            src="/hero.webp"
            alt="Rozestavěný rodinný dům od firmy Gama G+V — hrubá stavba pod střechou"
            className="gv-hero-img"
            width={1600}
            height={1100}
          />
          <div className="gv-hero-grid" aria-hidden="true" />
        </div>

        <div className="gv-hero-text">
          <p className="gv-eyebrow">Základy · Zdivo · Střecha · Předání</p>
          <h1 className="gv-title">
            Postavíme dům,<br />
            který <span className="gv-hl">vydrží</span> déle
            <br />než hypotéka.
          </h1>
          <p className="gv-lede">
            Rodinné domy, rekonstrukce a zateplení v Olomouci. Bez záloh na materiál,
            který nevidíte, bez schovaných víceprací. Pevný rozpočet, pevný termín,
            jeden stavbyvedoucí na telefonu.
          </p>
          <div className="gv-hero-cta">
            <a className="gv-btn" href="tel:+420585000000">Zavolat stavbyvedoucímu</a>
            <a className="gv-btn gv-btn-ghost" href="#sluzby">Co stavíme</a>
          </div>
        </div>

        <dl className="gv-hero-facts">
          <div>
            <dt>Kde stavíme</dt>
            <dd>Olomouc a kraj do 40 km</dd>
          </div>
          <div>
            <dt>Záruka</dt>
            <dd>60 měsíců na dílo</dd>
          </div>
          <div>
            <dt>Rozpočet</dt>
            <dd>Položkový, do 5 dnů</dd>
          </div>
        </dl>
      </section>

      <section className="gv-sec" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="gv-sec-head">
          <p className="gv-eyebrow">Nabídka — tři cesty, jak vám pomůžeme</p>
          <h2 id="sluzby-nadpis" className="gv-h2">
            Od výkopu po klíče v ruce
          </h2>
        </div>

        <div className="gv-sec-body">
          <img
            src="/section-1.webp"
            alt="Zedník firmy Gama G+V při zdění obvodové stěny"
            className="gv-sec-img"
            width={1200}
            height={900}
          />

          <ol className="gv-list">
            {sluzby.map((s) => (
              <li className="gv-item" key={s.cislo}>
                <span className="gv-item-num" aria-hidden="true">
                  {s.cislo}
                </span>
                <div className="gv-item-body">
                  <h3 className="gv-h3">{s.nazev}</h3>
                  <p className="gv-p">{s.popis}</p>
                  <p className="gv-item-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="gv-sec gv-sec-alt" aria-labelledby="duvera-nadpis">
        <div className="gv-sec-head">
          <p className="gv-eyebrow">Proč lidé v Olomouci volají zrovna nám</p>
          <h2 id="duvera-nadpis" className="gv-h2">
            Řemeslo, u kterého víte, s kým mluvíte
          </h2>
        </div>

        <div className="gv-trust">
          <div className="gv-trust-media">
            <img
              src="/section-2.webp"
              alt="Hotová stavba a fasáda rodinného domu realizovaná firmou Gama G+V"
              className="gv-sec-img"
              width={1200}
              height={900}
            />
          </div>

          <dl className="gv-trust-list">
            {duvody.map((d, i) => (
              <div className="gv-trust-row" key={i} style={{ "--i": i } as CSSProperties}>
                <dt>{d.k}</dt>
                <dd>{d.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <blockquote className="gv-quote">
          <p>
            „Přišli, kdy řekli, a odešli, když bylo hotovo. Rozpočet z jara seděl
            na korunu i na podzim.“
          </p>
          <cite>— Petr H., novostavba v Slavoníně</cite>
        </blockquote>
      </section>
    </main>
  );
}
