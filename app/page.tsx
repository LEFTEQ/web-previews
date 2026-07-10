import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Polep vozů",
      popis:
        "Od návrhu grafiky přes tisk fólie až po instalaci přímo u nás v dílně. Celopolepy, dělené polepy i decentní firemní loga na dveřích dodávky.",
      materialy: ["řezaná fólie", "laminace", "tisk na míru"],
    },
    {
      cislo: "02",
      nazev: "Informační systémy",
      popis:
        "Venkovní i vnitřní orientační systémy pro budovy, prodejny a areály. Cedule, směrovky, čísla dveří — čitelné z dálky i zblízka.",
      materialy: ["dibond", "plexisklo", "broušený nerez"],
    },
    {
      cislo: "03",
      nazev: "Reklamní textil",
      popis:
        "Trička, dresy, plátěné tašky a pracovní oděvy s vaším potiskem. Sítotisk pro velké série, výšivka tam, kde má vydržet roky.",
      materialy: ["sítotisk", "výšivka", "transferový tisk"],
    },
    {
      cislo: "04",
      nazev: "Grafické práce",
      popis:
        "Kompletní grafika pod jednou střechou — loga, vizitky, tiskoviny, ilustrace i webdesign. Nejdřív návrh, pak výroba, žádné mezikroky u cizích.",
      materialy: ["logo", "tiskoviny", "ilustrace"],
    },
    {
      cislo: "05",
      nazev: "Reklamní předměty",
      popis:
        "Dárkové a reklamní předměty s potiskem, které lidem zůstanou na stole, ne v koši. Vybereme, potiskneme, dovezeme.",
      materialy: ["potisk", "gravírování", "kompletace"],
    },
  ];

  return (
    <main className="ok">
      <header className="ok-nav">
        <a className="ok-mark" href="#top" aria-label="O. K. reklama — domů">
          <span className="ok-mark-badge">O.K.</span>
          <span className="ok-mark-word">reklama</span>
        </a>
        <nav className="ok-nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#dilna">Dílna</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="ok-nav-cta" href="tel:+420777660806">777 660 806</a>
      </header>

      <section className="ok-hero" id="top">
        <div className="ok-hero-copy">
          <p className="ok-eyebrow">
            <span className="ok-dot" aria-hidden="true" /> Reklamní dílna · Ústí nad Labem · od roku 1992
          </p>
          <h1 className="ok-hero-title">
            Řežeme fólii,
            <br />
            tiskneme trička,
            <br />
            <span className="ok-hero-accent">polepíme vám auto.</span>
          </h1>
          <p className="ok-hero-lead">
            Malá reklamní agentura ve V podhájí, kde návrh i výroba vznikají
            pod jednou střechou. Přijdete s nápadem, odjíždíte s hotovou
            věcí — od vizitky po celopolep dodávky.
          </p>
          <div className="ok-hero-actions">
            <a className="ok-btn ok-btn-primary" href="tel:+420777660806">
              Zavolat do dílny
            </a>
            <a className="ok-btn ok-btn-ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
          <dl className="ok-hero-facts">
            <div>
              <dt>Návrh i výroba</dt>
              <dd>na jednom místě</dd>
            </div>
            <div>
              <dt>V podhájí 776/30</dt>
              <dd>Ústí nad Labem</dd>
            </div>
            <div>
              <dt>30+ let</dt>
              <dd>u řezaček a tiskáren</dd>
            </div>
          </dl>
        </div>
        <figure className="ok-hero-media">
          <img
            src="/hero.webp"
            alt="Detail práce v reklamní dílně O. K. reklama — polep a řezaná fólie"
            className="ok-hero-img"
          />
          <figcaption className="ok-hero-tag">Z naší dílny</figcaption>
        </figure>
      </section>

      <section className="ok-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ok-section-head">
          <h2 id="sluzby-h" className="ok-section-title">
            Pět věcí, které tady doopravdy vyrobíme
          </h2>
          <p className="ok-section-note">
            Ne katalog z internetu — každou položku připravíme, potiskneme
            a nainstalujeme sami v Ústí nad Labem.
          </p>
        </div>

        <ul className="ok-service-list">
          {sluzby.map((s) => (
            <li className="ok-service" key={s.cislo}>
              <span className="ok-service-num">{s.cislo}</span>
              <div className="ok-service-body">
                <h3 className="ok-service-name">{s.nazev}</h3>
                <p className="ok-service-desc">{s.popis}</p>
                <ul className="ok-chips">
                  {s.materialy.map((m) => (
                    <li key={m} className="ok-chip">
                      {m}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="ok-shop" id="dilna" aria-labelledby="dilna-h">
        <figure className="ok-shop-media">
          <img
            src="/section-1.webp"
            alt="Reklamní textil a potisk — ukázka práce O. K. reklama"
            className="ok-shop-img"
          />
        </figure>
        <div className="ok-shop-copy">
          <p className="ok-eyebrow ok-eyebrow-dark">
            <span className="ok-dot" aria-hidden="true" /> Proč k nám
          </p>
          <h2 id="dilna-h" className="ok-shop-title">
            Jsme lidi od řezačky, ne přeprodejci
          </h2>
          <p className="ok-shop-lead">
            Fólie se u nás řeže, textil tiskne a auta polepí ve stejné dílně,
            kde nakreslíme i logo. Díky tomu víme, jestli návrh na obrazovce
            půjde opravdu vyrobit — a řekneme vám to hned, ne až po záloze.
          </p>

          <ul className="ok-steps">
            <li>
              <span className="ok-step-num">1</span>
              <div>
                <strong>Sejdeme se nad zakázkou</strong>
                <p>Rozměry, materiál, termín — z jedné schůzky ven odchází jasný rozpočet.</p>
              </div>
            </li>
            <li>
              <span className="ok-step-num">2</span>
              <div>
                <strong>Navrhneme grafiku</strong>
                <p>Vidíte náhled dřív, než cokoli pošleme do tisku nebo na řezačku.</p>
              </div>
            </li>
            <li>
              <span className="ok-step-num">3</span>
              <div>
                <strong>Vyrobíme a nainstalujeme</strong>
                <p>Polep nalepíme, ceduli pověsíme, textil dovezeme zabalený.</p>
              </div>
            </li>
          </ul>

          <div className="ok-shop-card" id="kontakt">
            <img
              src="/section-2.webp"
              alt="Hotová realizace polepu a reklamy od O. K. reklama v Ústí nad Labem"
              className="ok-shop-card-img"
            />
            <div className="ok-shop-card-body">
              <p className="ok-shop-card-kicker">Zastavte se v dílně</p>
              <address className="ok-shop-card-addr">
                V podhájí 776/30, 400 01 Ústí nad Labem
              </address>
              <a className="ok-btn ok-btn-primary" href="mailto:info@ok-reklama.cz">
                Napsat na info@ok-reklama.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
