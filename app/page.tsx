import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <img
          className="hero-photo"
          src="/hero.webp"
          alt="Klimatizační jednotka Dusol chladí interiér domu na Plzeňsku"
        />
        <div className="hero-veil" aria-hidden="true" />

        <div className="topbar">
          <a className="wordmark" href="#uvod" aria-label="Dusol — domů">
            DUSOL<span className="deg">°</span>
          </a>
          <a className="topphone" href="tel:+420739029016">
            +420 739 029 016
          </a>
        </div>

        <div className="hero-inner" id="uvod">
          <div className="hero-copy">
            <p className="eyebrow reveal">
              Klimatizace · Fotovoltaika · Tepelná čerpadla — Plzeňsko
            </p>
            <h1 className="reveal">
              Ideální teplota u&nbsp;vás doma.{" "}
              <span className="warm">Po&nbsp;celý rok.</span>
            </h1>
            <p className="lede reveal">
              Nainstalujeme klimatizaci, která v&nbsp;létě chladí a&nbsp;v&nbsp;zimě
              topí — tiše, úsporně a&nbsp;s&nbsp;termínem montáže do&nbsp;14&nbsp;dnů.
            </p>

            <div className="cta-row reveal">
              <a className="btn btn-primary" href="tel:+420739029016">
                Domluvit zaměření zdarma
              </a>
              <a className="btn btn-ghost" href="mailto:info@dusol.cz">
                Napsat e-mail
              </a>
            </div>

            <p className="hero-trust reveal">
              Konzultace a&nbsp;zaměření zdarma · Záruční i&nbsp;pozáruční servis
            </p>
          </div>

          <aside className="thermostat reveal" aria-label="Jedna jednotka pro celý rok">
            <p className="thermo-head">Jedna jednotka, dva režimy</p>
            <div className="thermo-modes">
              <div className="mode">
                <span className="mode-label cool">Léto · chlazení</span>
                <span className="mode-temp">
                  24<span className="unit">°C</span>
                </span>
              </div>
              <div className="mode-split" aria-hidden="true" />
              <div className="mode">
                <span className="mode-label warm">Zima · topení</span>
                <span className="mode-temp">
                  22<span className="unit">°C</span>
                </span>
              </div>
            </div>
            <p className="thermo-foot">
              Nastavíte na dálku, jednotka drží teplotu sama.
            </p>
          </aside>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="services" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Co u&nbsp;vás zařídíme</p>
          <h2 id="sluzby-nadpis">
            Tři systémy, jedna firma. Postaráme se o&nbsp;teplo i&nbsp;chlad.
          </h2>
        </div>

        <div className="services-grid">
          <figure className="service-photo">
            <img
              src="/section-1.webp"
              alt="Nástěnná klimatizační jednotka Dusol nainstalovaná v obytné místnosti"
            />
          </figure>

          <ul className="cards">
            <li className="card">
              <span className="tag cool">chladí + topí</span>
              <h3>Klimatizace</h3>
              <p>
                Chlazení i&nbsp;topení jedním zařízením. Nástěnné i&nbsp;multisplit
                jednotky předních značek, tichý provoz a&nbsp;filtrace vzduchu.
              </p>
            </li>
            <li className="card">
              <span className="tag cool">vyrábí proud</span>
              <h3>Fotovoltaika</h3>
              <p>
                Vlastní elektřina ze&nbsp;slunce. Navrhneme panely i&nbsp;baterii tak,
                aby vám klimatizace jela z&nbsp;vlastního proudu.
              </p>
            </li>
            <li className="card">
              <span className="tag warm">topí levně</span>
              <h3>Tepelná čerpadla</h3>
              <p>
                Komfortní vytápění celého domu s&nbsp;nízkou spotřebou. Vzduch
                i&nbsp;voda — poradíme, co&nbsp;se&nbsp;vám u&nbsp;vás vyplatí.
              </p>
            </li>
          </ul>
        </div>

        <p className="dotace-note">
          <span className="dot" aria-hidden="true" />
          K&nbsp;fotovoltaice i&nbsp;tepelnému čerpadlu vám pomůžeme vyřídit dotaci —
          papírování vezmeme za&nbsp;vás.
        </p>
      </section>

      {/* PROČ DUSOL */}
      <section className="about" aria-labelledby="proc-nadpis">
        <div className="about-grid">
          <figure className="about-photo">
            <img
              src="/section-2.webp"
              alt="Technik Dusol při montáži venkovní jednotky klimatizace"
            />
          </figure>

          <div className="about-copy">
            <p className="eyebrow eyebrow-dark">Proč Dusol</p>
            <h2 id="proc-nadpis">Naše práce je náš koníček.</h2>
            <p className="about-lede">
              Sídlíme v&nbsp;Kaznějově kousek od&nbsp;Plzně a&nbsp;jezdíme po&nbsp;celém
              Plzeňském kraji. Přijedeme, zaměříme, poradíme — a&nbsp;montáž zvládneme
              rychle a&nbsp;čistě.
            </p>

            <ul className="reasons">
              <li>Lokální spolehlivá firma z&nbsp;Plzeňska</li>
              <li>Rychlé termíny — montáž od&nbsp;14&nbsp;dní</li>
              <li>Transparentní a&nbsp;příznivé ceny</li>
              <li>Záruční i&nbsp;pozáruční servis</li>
              <li>Po&nbsp;montáži po&nbsp;sobě vždy uklidíme</li>
              <li>Spokojení zákazníci a&nbsp;reference</li>
            </ul>

            <div className="contact-strip">
              <a href="tel:+420739029016">
                <span className="cs-label">Zavolejte</span>
                <span className="cs-value">+420 739 029 016</span>
              </a>
              <a href="mailto:info@dusol.cz">
                <span className="cs-label">Napište</span>
                <span className="cs-value">info@dusol.cz</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
