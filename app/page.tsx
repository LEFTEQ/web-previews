import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "D",
      nazev: "Dekarbonizace motoru",
      popis:
        "Vyčistíme spalovací prostor, ventily i vstřikování od karbonu vodíkem. Motor lépe táhne, míň kouří a klesne spotřeba. Teď akce: 120 minut za cenu 60.",
      akce: true,
    },
    {
      kod: "CH",
      nazev: "Chiptuning",
      popis:
        "Úprava řídicí jednotky na míru vašemu vozu — víc síly a točivého momentu, nebo naopak úsporný režim. Vždy s ohledem na životnost motoru.",
    },
    {
      kod: "S",
      nazev: "Autoservis a diagnostika",
      popis:
        "Kompletní opravy, diagnostika motorů a řídicích jednotek, pneuservis, geometrie i klimatizace. Poradíme dřív, než se malá závada prodraží.",
    },
    {
      kod: "E",
      nazev: "Emise, STK a karoserie",
      popis:
        "Připravíme a zajistíme emise i STK, opravíme karoserii ve vlastní lakovně a vyřídíme za vás pojistnou událost. Po dobu opravy zapůjčíme náhradní vůz.",
    },
  ];

  const vozy = [
    { model: "Ford Tourneo Custom L2", detail: "2.0 EcoBlue 125 kW, 4×4 AWD, r.v. 7/2024", stav: "odpočet DPH" },
    { model: "Ford S-Max", detail: "2.0 EcoBlue 140 kW, odpočet DPH", stav: "rezervace" },
    { model: "Audi A5", detail: "2.0 TDI 125 kW, 175 000 km", stav: "skladem" },
    { model: "Peugeot 5008", detail: "2.0 HDi 110 kW, 99 000 km, max. výbava", stav: "TOP" },
  ];

  return (
    <main className="ap">
      <header className="nav">
        <a className="wm" href="#top" aria-label="Pozdník David — autoelektrika a autoservis Pardubice">
          <span className="wm-mark" aria-hidden="true">+−</span>
          <span className="wm-name">
            Pozdník <b>David</b>
            <em>autoelektrika · Pardubice</em>
          </span>
        </a>
        <a className="nav-call" href="tel:+420608482480">
          <span aria-hidden="true">☎</span> 608 482 480
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail práce na autoelektrice — servis vozu v dílně Pozdník David v Pardubicích"
            className="hero-img"
          />
          <span className="hero-badge">Rosice nad Labem</span>
        </div>
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-dot" aria-hidden="true" /> Dílna od roku, kdy elektroniky v autech přibývalo
          </p>
          <h1 className="hero-h1">
            Když auto <span className="lit">svítí chybou</span>, čteme ho z&nbsp;řídicí jednotky.
          </h1>
          <p className="hero-lead">
            Autoelektrika, diagnostika a servis v&nbsp;Pardubicích. Připojíme se k&nbsp;autu, najdeme skutečnou
            příčinu závady a řekneme rovnou, co to bude stát — bez nafouknutých faktur.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420466413255">Zavolat do dílny</a>
            <a className="btn btn-ghost" href="#sluzby">Co opravíme</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Gen. Svobody 108, Pardubice</dd>
            </div>
            <div>
              <dt>Náhradní vůz</dt>
              <dd>na dobu opravy</dd>
            </div>
            <div>
              <dt>Emise &amp; STK</dt>
              <dd>zařídíme za vás</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sec sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow eyebrow-dark">
            <span className="eyebrow-dot" aria-hidden="true" /> Co u nás projede přes zvedák
          </p>
          <h2 id="sluzby-h" className="sec-h">
            Od karbonu ve válcích po úpravu jednotky
          </h2>
        </div>
        <ul className="cards">
          {sluzby.map((s) => (
            <li className={"card" + (s.akce ? " card-akce" : "")} key={s.nazev}>
              <span className="card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="card-h">{s.nazev}</h3>
              <p className="card-p">{s.popis}</p>
              {s.akce && <span className="card-tag">Akce 120 → 60 min</span>}
            </li>
          ))}
        </ul>
        <figure className="sec-fig">
          <img
            src="/section-1.webp"
            alt="Dekarbonizace motoru — čištění spalovacího prostoru v servisu Pozdník David"
            className="sec-img"
          />
          <figcaption>Dekarbonizace: motor nasadíme na přístroj a spálený karbon jde ven, ne do vaší peněženky.</figcaption>
        </figure>
      </section>

      <section className="sec duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <div className="duvera-copy">
            <p className="eyebrow">
              <span className="eyebrow-dot" aria-hidden="true" /> Proč sem lidi jezdí
            </p>
            <h2 id="duvera-h" className="sec-h light">
              Malá dílna, kde vám auto předá ten, kdo ho opravil
            </h2>
            <p className="duvera-lead">
              Nejsme řetězec. Auto přebírá i vydává stejný člověk, který mu rozuměl na zvedáku. K servisu prodáváme
              i prověřené vozy — mnohé s možností odpočtu DPH — a co je prodané, to na webu i&nbsp;zůstane označené.
            </p>
            <ul className="vozy">
              {vozy.map((v) => (
                <li className="voz" key={v.model}>
                  <span className="voz-model">{v.model}</span>
                  <span className="voz-detail">{v.detail}</span>
                  <span className="voz-stav">{v.stav}</span>
                </li>
              ))}
            </ul>
            <a className="btn btn-primary" href="tel:+420608480482">Zeptat se na konkrétní vůz</a>
          </div>
          <figure className="duvera-fig">
            <img
              src="/section-2.webp"
              alt="Vozy k prodeji před dílnou Pozdník David v Pardubicích – Rosicích nad Labem"
              className="sec-img"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
