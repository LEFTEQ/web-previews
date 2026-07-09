import type { CSSProperties } from "react";

export const metadata = {
  title: "Moana s.r.o. — polepy aut České Budějovice",
  description:
    "Celopolepy, řezaná grafika i tuningové přebarvení vozů v Českých Budějovicích. Tiskneme, řežeme a laminujeme na vlastních strojích v zateplené hale. Moana s.r.o.",
};

type Sluzba = {
  kod: string;
  nazev: string;
  popis: string;
  detail: string;
};

const sluzby: Sluzba[] = [
  {
    kod: "01",
    nazev: "Řezaná grafika",
    popis:
      "Nejúspornější způsob, jak označit firemní vozy. Vyřežeme logo, kontakt i číslo z barevných fólií a nalepíme přesně tam, kam patří.",
    detail: "Od jednoho auta po celou flotilu",
  },
  {
    kod: "02",
    nazev: "Kompletní celopolep",
    popis:
      "Auto, které nepřehlédnete. Velkoplošný tisk přes celou karoserii — vyšší náklad, ale reklama, která jezdí po celém kraji za vás.",
    detail: "Návrh, tisk, laminace i montáž",
  },
  {
    kod: "03",
    nazev: "Tuningové přebarvení",
    popis:
      "Nová barva vozu bez přelakování. Změníme odstín fólií, přidáme rychlé pruhy, ztmavíme skla nebo obalíme střechu karbonem.",
    detail: "Vratné, šetrné k laku",
  },
  {
    kod: "04",
    nazev: "Tabule, plachty, světelná reklama",
    popis:
      "Reklamní tabule na míru z PVC, Dibondu i plechu, tištěné bannery s oky a kusově vyráběné světelné 3D reklamy.",
    detail: "Včetně montáže na místě",
  },
];

type Stroj = {
  nazev: string;
  role: string;
  puvod: string;
};

const stroje: Stroj[] = [
  {
    nazev: "Epson SureColor SC-S60610",
    role: "Velkoplošný tisk s inkousty UltraChrome GS3 — čisté, přesné barvy v režimu Precision Dot.",
    puvod: "Tisk",
  },
  {
    nazev: "Summa D60R + OPOS X",
    role: "Profesionální řezací plotr pro sériové samolepky s tvarovým ořezem.",
    puvod: "Belgie · Řez",
  },
  {
    nazev: "Flexilam 160 ECO",
    role: "Laminátor s automatickým přítlakem a nízkoteplotním vyhříváním do 70 °C.",
    puvod: "Laminace",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Moana s.r.o. — domů">
          <span className="wordmark__peel">M</span>oana
          <span className="wordmark__ext">s.r.o.</span>
        </a>
        <a className="topbar__tel" href="tel:+420387423767">
          +420 387 423 767
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Vůz s celopolepem vyrobeným ve firmě Moana v Českých Budějovicích"
            className="hero__img"
          />
          <div className="hero__grade" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="tick" aria-hidden="true" />
            Polepy vozidel · České Budějovice
          </p>
          <h1 className="hero__title">
            Vaše auto se stane
            <span className="hero__title-em"> pojízdným billboardem.</span>
          </h1>
          <p className="hero__lead">
            Fólii nalepíme rovně, bez bublin a přesně na tvar. Řezaná
            grafika, celopolepy i tuningové přebarvení — vše z vlastní
            zateplené haly u výstaviště, ať venku mrzne nebo praží.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420387423767">
              Zavolat a domluvit polep
            </a>
            <a className="btn btn--ghost" href="mailto:reklama@moana.cz">
              Napsat na reklama@moana.cz
            </a>
          </div>

          <dl className="hero__strip">
            <div>
              <dt>Materiál</dt>
              <dd>Litá fólie na míru</dd>
            </div>
            <div>
              <dt>Termín</dt>
              <dd>Krátký, na vlastních strojích</dd>
            </div>
            <div>
              <dt>Rozsah</dt>
              <dd>Od loga po celopolep</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Co polepíme</p>
          <h2 id="services-title" className="section-head__title">
            Čtyři způsoby, jak vás uvidí i za jízdy
          </h2>
          <p className="section-head__note">
            Od jednoduchého výřezu z fólie po náročný celopolep — vyberte
            podle rozpočtu a toho, jak moc chcete být vidět.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li key={s.kod} className="card">
              <span className="card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <div className="card__body">
                <h3 className="card__title">{s.nazev}</h3>
                <p className="card__text">{s.popis}</p>
                <p className="card__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="services__figure">
          <img
            src="/section-1.webp"
            alt="Detail aplikace reklamní fólie na karoserii vozu"
            className="services__img"
          />
          <figcaption className="services__cap">
            Aplikace fólie v zateplené hale — bez ohledu na počasí venku.
          </figcaption>
        </figure>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="section-head__eyebrow">Vlastní výroba</p>
            <h2 id="trust-title" className="section-head__title">
              Netiskneme přes prostředníky. Stroje stojí u nás v hale.
            </h2>
            <p className="trust__text">
              Tiskneme, řežeme i laminujeme na vlastních zařízeních v
              Českých Budějovicích. Díky tomu držíme krátké termíny,
              rozumnou cenu a kvalitu si hlídáme od návrhu až po montáž.
              A jak říkáme — je s námi legrace.
            </p>

            <ul className="trust__machines">
              {stroje.map((m) => (
                <li key={m.nazev} className="machine">
                  <span className="machine__tag">{m.puvod}</span>
                  <div>
                    <p className="machine__name">{m.nazev}</p>
                    <p className="machine__role">{m.role}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Velkoplošná tiskárna a řezací plotr ve výrobní hale Moana"
              className="trust__img"
            />
            <figcaption className="trust__cap">
              <span>U Výstaviště 506/4</span>
              <span>České Budějovice</span>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
