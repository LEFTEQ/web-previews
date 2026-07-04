import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "D-01",
      nazev: "Bourání staveb a objektů",
      popis:
        "Rodinné domy, průmyslové haly i celé bloky. Odbavíme staveniště v Ústí i po celém kraji — od ručního rozebrání po řízenou strojní demolici.",
    },
    {
      kod: "D-02",
      nazev: "Odstranění betonu a železobetonu",
      popis:
        "Bourací kladiva a nůžky na CAT bagrech si poradí s mosty, opěrnými zdmi i základovými deskami. Ocel oddělíme, beton podrtíme.",
    },
    {
      kod: "D-03",
      nazev: "Sanace a úprava území",
      popis:
        "Po demolici zůstane rovná, čistá plocha. Odvezeme suť, srovnáme terén a připravíme pozemek pro novou výstavbu.",
    },
    {
      kod: "D-04",
      nazev: "Zemní práce a odvoz suti",
      popis:
        "Výkopy, přesun hmot a recyklace stavebního materiálu. Vlastní vozový park MAN a DAF vyveze i objemné zakázky bez čekání.",
    },
  ];

  const stroje = ["CATERPILLAR", "MAN", "DAF", "WACKER", "STIHL"];

  return (
    <main className="kom">
      <header className="kom-nav">
        <a className="kom-mark" href="#top" aria-label="Komastav DS, domů">
          <span className="kom-mark__k">KOM</span>
          <span className="kom-mark__cut" aria-hidden="true" />
          <span className="kom-mark__rest">ASTAV</span>
          <span className="kom-mark__ds">DS</span>
        </a>
        <nav className="kom-nav__links" aria-label="Hlavní">
          <a href="#sluzby">Co bouráme</a>
          <a href="#duvera">O firmě</a>
          <a className="kom-nav__call" href="tel:+420475000000">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="kom-hero" id="top">
        <div className="kom-hero__grid" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <span
              key={i}
              className="kom-hero__col"
              style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties}
            />
          ))}
        </div>

        <div className="kom-hero__inner">
          <p className="kom-hero__eyebrow">
            Demoliční práce · Ústí nad Labem · od roku 1992
          </p>
          <h1 className="kom-hero__title">
            <span className="kom-hero__line">Když má</span>
            <span className="kom-hero__line kom-hero__line--wreck">
              něco
              <span className="kom-hero__crack" aria-hidden="true" />
            </span>
            <span className="kom-hero__line">zmizet.</span>
          </h1>
          <p className="kom-hero__lead">
            Bouráme domy, haly, mosty i beton — čistě, bezpečně a s papíry v
            pořádku. Přijedeme se podívat na místo a řekneme rovnou, co to
            obnáší a kolik to stojí.
          </p>
          <div className="kom-hero__actions">
            <a className="kom-btn kom-btn--solid" href="tel:+420475000000">
              Zavolat a domluvit prohlídku
            </a>
            <a className="kom-btn kom-btn--ghost" href="#sluzby">
              Co bouráme
            </a>
          </div>
        </div>

        <div className="kom-hero__ticker" aria-hidden="true">
          <span>
            železobeton · sanace · odvoz suti · recyklace · zemní práce ·
            železobeton · sanace · odvoz suti · recyklace · zemní práce ·
          </span>
        </div>
      </section>

      <section className="kom-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="kom-section-head">
          <span className="kom-tag">Rozsah prací</span>
          <h2 id="sluzby-h">
            Čtyři fáze, než je z domu
            <br /> volný pozemek
          </h2>
          <p>
            Většina zakázek projde všemi čtyřmi kroky — od prvního úderu kladiva
            po srovnaný terén připravený k předání.
          </p>
        </div>

        <ol className="kom-list">
          {sluzby.map((s) => (
            <li className="kom-card" key={s.kod}>
              <span className="kom-card__kod">{s.kod}</span>
              <h3 className="kom-card__nazev">{s.nazev}</h3>
              <p className="kom-card__popis">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="kom-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="kom-duvera__wrap">
          <div className="kom-duvera__text">
            <span className="kom-tag kom-tag--light">Proč zrovna my</span>
            <h2 id="duvera-h">
              Bourat umí každý. My to po sobě uklidíme a máme na to razítka.
            </h2>
            <p>
              Komastav DS působí v Ústeckém kraji od roku 1992. Za tu dobu jsme
              rozebrali stovky objektů — od garáží po opěrné zdi u silnic. Práce
              vedeme podle norem ČSN EN ISO 9001 (kvalita), ISO 14001
              (životní prostředí) a OHSAS 18001 (bezpečnost práce).
            </p>
            <ul className="kom-fakta">
              <li>
                <strong>1992</strong>
                <span> deme­lujeme v kraji od</span>
              </li>
              <li>
                <strong>3×</strong>
                <span>certifikace ISO</span>
              </li>
              <li>
                <strong>Ústecký</strong>
                <span>kraj a okolí</span>
              </li>
            </ul>
          </div>

          <aside className="kom-park" aria-label="Strojní vybavení">
            <p className="kom-park__label">Jezdíme s vlastní technikou</p>
            <ul className="kom-park__list">
              {stroje.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
            <p className="kom-park__note">
              Vlastní bagry, nákladní auta i ruční nářadí. Nečekáte na půjčovnu —
              přijedeme, kdy se domluvíme.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
