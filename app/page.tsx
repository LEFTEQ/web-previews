import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postavené na charakteristickém: sluneční panel a energie z Ještědu */}
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#uvod" aria-label="AE Energie, domů">
          <span className="wordmark__ae">AE</span>
          <span className="wordmark__rest">Energie</span>
          <span className="wordmark__sun" aria-hidden="true" />
        </a>
        <nav className="nav__links" aria-label="Sekce webu">
          <a href="#reseni">Co montujeme</a>
          <a href="#duvera">O firmě</a>
          <a className="nav__cta" href="tel:+420601000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Fotovoltaika &middot; tepelná čerpadla &middot; Liberecký kraj</p>
            <h1 className="hero__title">
              Slunce nad Ještědem<br />
              proměníme ve váš proud.
            </h1>
            <p className="hero__lead">
              Navrhneme, namontujeme a servisujeme fotovoltaiku i tepelná čerpadla
              pro domy, byty i provozovny na Liberecku. Ve „štábní" kvalitě,
              s dlouhou zárukou a lidmi, kteří vám zvednou telefon i po realizaci.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="#reseni">
                Spočítat úsporu
              </a>
              <a className="btn btn--ghost" href="tel:+420601000000">
                Zavolat na dispečink
              </a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Montujeme od</dt>
                <dd>2006</dd>
              </div>
              <div>
                <dt>Kde jsme doma</dt>
                <dd>Liberecký kraj</dd>
              </div>
              <div>
                <dt>Záruka na práci</dt>
                <dd>+ servis</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__panel" aria-hidden="false">
            <img
              src="/hero.webp"
              alt="Fotovoltaické panely na střeše rodinného domu v podhůří Ještědu"
              className="hero__img"
            />
            <figcaption className="hero__badge">
              <span className="hero__badge-line" />
              Reálná instalace, Liberecko
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 1 — Co montujeme (skutečné technologie firmy) */}
      <section className="work" id="reseni" aria-labelledby="reseni-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co pro vás postavíme</p>
          <h2 id="reseni-h" className="section-title">
            Jeden dodavatel na celý ekosystém energie v domě.
          </h2>
          <p className="section-intro">
            Systémy umíme i chytře zkombinovat — panely na střeše, čerpadlo na
            vytápění, rekuperace pro čerstvý vzduch. Od posouzení potřeb přes
            schéma až po uvedení do provozu a zaškolení.
          </p>
        </div>

        <div className="work__layout">
          <ul className="trades">
            {[
              {
                k: "FV",
                t: "Fotovoltaické instalace",
                d: "Panely, měnič, baterie i wallbox. Napojení na spotřebu domu, aby slunce topilo do bojleru i nabíjelo auto.",
              },
              {
                k: "TČ",
                t: "Tepelná čerpadla",
                d: "Vzduch–voda i země–voda pro vytápění a ohřev vody. S fotovoltaikou dělají ze střechy topení skoro zadarmo.",
              },
              {
                k: "SOL",
                t: "Solární ohřev vody",
                d: "Termické kolektory tam, kde dávají větší smysl než panely. Ověřená klasika na teplou vodu.",
              },
              {
                k: "REK",
                t: "Rekuperace a vzduchotechnika",
                d: "Řízené větrání, které v zimě vrací teplo z odpadního vzduchu zpět do domu. Čerstvo bez tepelných ztrát.",
              },
              {
                k: "TOP",
                t: "Podlahové topení a radiátory",
                d: "Rozvody tepla na míru zdroji. Aby čerpadlo i kotel jely v nejúspornějším režimu.",
              },
              {
                k: "SRV",
                t: "Servis a revize",
                d: "Kontroly, čištění, výměny. Zvedneme telefon i roky po montáži — proto s námi zůstáváte.",
              },
            ].map((item, i) => (
              <li className="trade" key={item.k}>
                <span className="trade__idx">{item.k}</span>
                <div className="trade__body">
                  <h3 className="trade__title">{item.t}</h3>
                  <p className="trade__desc">{item.d}</p>
                </div>
                <span className="trade__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </li>
            ))}
          </ul>

          <aside className="work__aside">
            <img
              src="/section-1.webp"
              alt="Detail montáže fotovoltaického systému a rozvaděče technikem AE Energie"
              className="work__img"
            />
            <div className="work__note">
              <p className="work__note-title">Nová zelená úsporám</p>
              <p className="work__note-text">
                Zranitelným domácnostem pomůžeme s dotací, ostatním s výhodným
                financováním. Papírování bereme na sebe.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* SEKCE 2 — Důvěra / O nás */}
      <section className="trust" id="duvera" aria-labelledby="duvera-h">
        <div className="trust__grid">
          <figure className="trust__media">
            <img
              src="/section-2.webp"
              alt="Dokončená realizace vytápění a fotovoltaiky v rodinném domě na Liberecku"
              className="trust__img"
            />
          </figure>

          <div className="trust__copy">
            <p className="eyebrow eyebrow--dark">Firma, jakou hledáte</p>
            <h2 id="duvera-h" className="section-title">
              Rodinná energetika z Rochlice, na kterou je spolehnutí.
            </h2>
            <p className="trust__text">
              Firmu založil v roce 2006 Jindřich Šimon; jako s.r.o. běží bez
              přerušení od roku 2008. Působíme hlavně v Libereckém kraji — od
              Varnsdorfu přes severní Mladoboleslavsko až po Vrchlabí. Poptávky
              z okolí včetně Prahy rádi zpracujeme obratem.
            </p>

            <ol className="principles" aria-label="Naše zásady">
              <li>
                <span className="principles__k">01</span>
                <p>
                  <strong>Nasloucháme.</strong> Nejdřív pochopíme vaši situaci a
                  skutečné potřeby, teprve pak radíme.
                </p>
              </li>
              <li>
                <span className="principles__k">02</span>
                <p>
                  <strong>Návrh na míru.</strong> Ukážeme varianty i s
                  vysvětlením — ať rozhodujete vy, ne my za vás.
                </p>
              </li>
              <li>
                <span className="principles__k">03</span>
                <p>
                  <strong>Kvalitní komponenty.</strong> Používáme díly, které
                  nezradí v nevhodnou chvíli.
                </p>
              </li>
              <li>
                <span className="principles__k">04</span>
                <p>
                  <strong>Dlouhá záruka a servis.</strong> Odborná montáž se
                  zkouškami a podpora dlouho po předání.
                </p>
              </li>
            </ol>

            <p className="trust__return">
              Cílíme na návratnost investice zhruba do poloviny životnosti
              instalovaných zařízení — za rozumnou cenu.
            </p>

            <address className="trust__contact">
              <span>AE Energie s.r.o.</span>
              <span>Dr. Milady Horákové 340/120, Liberec VI&nbsp;–&nbsp;Rochlice</span>
              <a href="mailto:info@ae-energie.cz">info@ae-energie.cz</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
