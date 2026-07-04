import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      hloubka: "0–8 m",
      nazev: "Výkopy základů a inženýrských sítí",
      popis:
        "Vytyčíme, odkopeme a začistíme rýhy pro základové pasy, vodu, kanalizaci i elektřinu. Pracujeme podle projektu a hlídáme spád na milimetry.",
    },
    {
      hloubka: "přes plnou plochu",
      nazev: "Skrývka ornice a terénní úpravy",
      popis:
        "Sejmeme svrchní vrstvu, uložíme ji stranou pro pozdější rozprostření a srovnáme pozemek do roviny nebo do navrženého spádu.",
    },
    {
      hloubka: "jáma i násyp",
      nazev: "Výkop bazénů, jímek a retenčních nádrží",
      popis:
        "Přesná jáma s rovnými stěnami a zhutněným dnem. Přebytečnou zeminu odvezeme, štěrkové lože urovnáme na hotovo.",
    },
    {
      hloubka: "do 100 %",
      nazev: "Hutnění, zásypy a dokončovací práce",
      popis:
        "Zpětný zásyp po vrstvách, hutnění vibrační deskou a příprava podloží pod dlažbu, zámkovou dlažbu i příjezdové cesty.",
    },
  ];

  return (
    <main className="dz">
      {/* HERO */}
      <header className="dz-hero">
        <div className="dz-hero__bar">
          <a className="dz-logo" href="#" aria-label="DOZAPO – zemní práce Plzeň">
            <span className="dz-logo__mark" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="dz-logo__word">
              DOZAPO<span className="dz-logo__sub">zemní práce · Plzeň</span>
            </span>
          </a>
          <a className="dz-tel" href="tel:+420602416216">
            +420 602 416 216
          </a>
        </div>

        <div className="dz-hero__grid">
          <div className="dz-hero__copy">
            <p className="dz-eyebrow">
              <span className="dz-eyebrow__depth">▾</span> Kopeme na Plzeňsku od základu
            </p>
            <h1 className="dz-hero__title">
              Než vyroste stavba,
              <br />
              <em>musí sednout terén.</em>
            </h1>
            <p className="dz-hero__lede">
              DOZAPO srovná pozemek, vykope základy i sítě a připraví podloží,
              na kterém se dá stavět bez překvapení. Bagr, technika i lidé
              přijedou tam, kam ukážete.
            </p>
            <div className="dz-hero__cta">
              <a className="dz-btn dz-btn--solid" href="tel:+420602416216">
                Zavolat a domluvit výjezd
              </a>
              <a className="dz-btn dz-btn--ghost" href="mailto:info@dozapo.cz">
                Napsat na info@dozapo.cz
              </a>
            </div>
          </div>

          <figure className="dz-hero__figure">
            <img
              src="/hero.webp"
              alt="Bagr při zemních pracích na plzeňském pozemku – čerstvě vykopaná rýha pro základy"
              className="dz-hero__img"
            />
            <figcaption className="dz-hero__strata" aria-hidden="true">
              <span>ornice</span>
              <span>hlína</span>
              <span>štěrk</span>
              <span>skalní podloží</span>
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 – SLUŽBY jako vrstvy */}
      <section className="dz-services" aria-labelledby="sluzby-nadpis">
        <div className="dz-section__head">
          <p className="dz-eyebrow">Co pro vás vykopeme</p>
          <h2 id="sluzby-nadpis" className="dz-section__title">
            Od skrývky ornice až po zhutněné podloží
          </h2>
        </div>

        <ol className="dz-layers">
          {sluzby.map((s, i) => (
            <li className="dz-layer" key={s.nazev} style={{ "--i": i } as CSSProperties}>
              <span className="dz-layer__depth">{s.hloubka}</span>
              <div className="dz-layer__body">
                <h3 className="dz-layer__name">{s.nazev}</h3>
                <p className="dz-layer__desc">{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="dz-services__figure">
          <img
            src="/section-1.webp"
            alt="Detail práce bagru – lžíce nabírá zeminu z vykopané jámy"
            className="dz-fluid-img"
          />
        </figure>
      </section>

      {/* SEKCE 2 – DŮVĚRA / O NÁS */}
      <section className="dz-trust" aria-labelledby="onas-nadpis">
        <figure className="dz-trust__figure">
          <img
            src="/section-2.webp"
            alt="Technika DOZAPO na srovnaném pozemku připraveném pro stavbu"
            className="dz-fluid-img"
          />
        </figure>

        <div className="dz-trust__copy">
          <p className="dz-eyebrow">Proč zrovna DOZAPO</p>
          <h2 id="onas-nadpis" className="dz-section__title">
            Přijedeme, kopeme, uklidíme po sobě
          </h2>
          <p className="dz-trust__lede">
            Jsme parta ze Plzně, která zemní práce dělá pořádně a dorazí,
            když se domluvíme. Nedáváme mlhavé odhady – řekneme, co je potřeba,
            kolik toho bude a kdy máme volno.
          </p>

          <ul className="dz-facts">
            <li>
              <strong>Plzeň a okolí do 40 km</strong>
              <span>Krátký dojezd, technika u vás bez zbytečného čekání.</span>
            </li>
            <li>
              <strong>Vlastní bagr i doprava zeminy</strong>
              <span>Odvoz i navezení materiálu řešíme sami, nespoléháme na cizí.</span>
            </li>
            <li>
              <strong>Pevná domluva, žádná překvapení</strong>
              <span>Termín i rozsah potvrdíme dopředu, ceny říkáme narovinu.</span>
            </li>
          </ul>

          <a className="dz-btn dz-btn--solid" href="tel:+420602416216">
            Domluvit si prohlídku pozemku
          </a>
        </div>
      </section>
    </main>
  );
}
