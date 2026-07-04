import type { CSSProperties } from "react";

const services = [
  {
    tag: "Zemní práce",
    title: "Zemní a stavební práce",
    body: "Výkopy, hrubé terénní úpravy, základové desky, opěrné zdi i inženýrské sítě. Stavíme komunikace, rybníky a vodohospodářské stavby — na klíč, s individuálním přístupem.",
    items: ["Inženýrské sítě", "Komunikace a demolice", "Základové desky, opěrné zdi", "Rybníky a vodohospodářské stavby"],
  },
  {
    tag: "Autodoprava",
    title: "Přeprava sypkého materiálu",
    body: "Vozy s nosností 9, 20 i 31 tun na jeden odvoz. Přistavíme kontejner podle vaší potřeby, převezeme stroje podvalníkem s nosností 20 t.",
    items: ["Kontejner dle potřeby", "Podvalník 20 t", "Hydraulická ruka 11 m, výsuv 1 t", "Malé i velké množství"],
  },
  {
    tag: "Kamenivo",
    title: "Recyklace a prodej kameniva",
    body: "Recyklujeme beton i cihelnou suť. Uložíte u nás zeminu, kamení i stavební materiál. Prodáváme recykláty, štěrky a písky všech frakcí a tříděnou zeminu.",
    items: ["Recykláty z betonu a suti", "Štěrky a písky všech frakcí", "Tříděná zemina", "Uložení zeminy a suti"],
  },
];

const depths = [
  { label: "Ornice", d: "0,0" },
  { label: "Podorničí", d: "0,3" },
  { label: "Základová spára", d: "1,2" },
  { label: "Pláň", d: "2,5" },
];

export default function Page() {
  return (
    <main className="saoch">
      <header className="nav" aria-label="Hlavní">
        <span className="wordmark" aria-label="S.A.O.CH.">
          <span>S</span><span>A</span><span>O</span><span>CH</span>
        </span>
        <span className="nav-loc">Planá u Mar. Lázní</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true">
          <div className="strata">
            {depths.map((s, i) => (
              <div className="stratum" key={i} style={{ "--i": i } as CSSProperties}>
                <span className="stratum-d">{s.d} m</span>
                <span className="stratum-l">{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-inner">
          <p className="eyebrow">Úprava terénu · od roku ve stavu, jaký chcete</p>
          <h1 id="hero-title">
            Srovnáme terén<br />
            <span className="hl">na milimetr.</span>
          </h1>
          <p className="lede">
            Zemní práce, autodoprava a kamenivo z jedné ruky. Pracujeme s 3D
            nivelací — od ornice po základovou spáru měříme každou vrstvu, ne odhadem.
          </p>
          <div className="hero-cta">
            <a className="btn" href="tel:+420">Zavolat na stavbu</a>
            <a className="btn ghost" href="#sluzby">Co umíme</a>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-title">
        <div className="sec-head">
          <h2 id="sluzby-title">Tři profese, jeden dvůr</h2>
          <p>Vše provádíme na klíč — kopeme, vozíme i dodáváme materiál sami.</p>
        </div>
        <div className="cards">
          {services.map((s, i) => (
            <article className="card" key={i}>
              <span className="card-num">{String(i + 1).padStart(2, "0")}</span>
              <span className="card-tag">{s.tag}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <ul>
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="about" aria-labelledby="about-title">
        <div className="about-media">
          <img src="/section-1.webp" alt="Stroje S.A.O.CH. při hrubých terénních úpravách staveniště" />
          <img src="/section-2.webp" alt="Nakládka a přeprava sypkého materiálu a kameniva" />
        </div>
        <div className="about-text">
          <p className="eyebrow">O firmě</p>
          <h2 id="about-title">Planá u Mariánských Lázní. A okolí, kam dojedeme s technikou.</h2>
          <p>
            S.A.O.CH. spol. s r.o. sídlí v Javorové 832. Kopeme, vozíme sypký
            materiál a recyklujeme suť — a díky vlastní technice zvládneme celou
            zakázku bez subdodavatelů. To znamená jednoho partnera od výkopu
            po dodání štěrku.
          </p>
          <dl className="facts">
            <div><dt>Sídlo</dt><dd>Javorová 832, Planá</dd></div>
            <div><dt>Nosnost vozů</dt><dd>9 · 20 · 31 t</dd></div>
            <div><dt>Podvalník</dt><dd>20 t</dd></div>
            <div><dt>Přesnost</dt><dd>3D nivelace</dd></div>
          </dl>
        </div>
      </section>
    </main>
  );
}
