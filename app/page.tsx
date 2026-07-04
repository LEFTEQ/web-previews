import type { CSSProperties } from "react";

export default function Page() {
  const kraje: { kraj: string; cena: string }[] = [
    { kraj: "Jihomoravský kraj", cena: "12 490 Kč" },
    { kraj: "Kraj Vysočina", cena: "12 490 Kč" },
    { kraj: "Pardubický kraj", cena: "13 990 Kč" },
    { kraj: "Zlínský kraj", cena: "13 990 Kč" },
    { kraj: "Olomoucký kraj", cena: "13 990 Kč" },
  ];

  const obsahuje: string[] = [
    "Veškerá administrativa spojená s kremací a zajištění úmrtního listu.",
    "Převoz zesnulého (do 100 kg) z místa úmrtí do našeho chladicího zařízení.",
    "Uložení zesnulého v chladicím, případně mrazicím zařízení do doby kremace.",
    "Úprava zesnulého dle normy ČSN 15 0176 — desinfekce, omytí a úprava vzhledu.",
    "Oblečení zesnulého do pohřebního rubáše.",
    "Eko kremační rakev vč. čalounění, polštáře a dečky.",
    "Doprava ke kremaci a samotná kremace.",
    "Převoz urny z krematoria do naší provozovny — k vyzvednutí nebo zaslání poštou.",
  ];

  const kroky: { cislo: string; nadpis: string; text: string }[] = [
    {
      cislo: "01",
      nadpis: "Vyplníte poptávku",
      text: "Online formulář vyplníte kdykoli, 365 dní v roce, z klidu domova. Nemusíte nikam jezdit.",
    },
    {
      cislo: "02",
      nadpis: "Zavoláme vám",
      text: "Náš pohřební specialista se ozve v pracovní době, projde s vámi objednávku a odpoví na otázky.",
    },
    {
      cislo: "03",
      nadpis: "Odsouhlasíte a uhradíte",
      text: "Zašleme objednávku a fakturu. Po úhradě dostanete potvrzení platby potřebné k notářskému řízení.",
    },
    {
      cislo: "04",
      nadpis: "Vše zařídíme",
      text: "Postaráme se o převoz, přípravu, kremaci i předání urny. Vy máte prostor truchlit.",
    },
  ];

  return (
    <main>
      <header className="ps-nav">
        <a className="ps-mark" href="#" aria-label="Pohřby bez obřadu, domů">
          <span className="ps-mark-line">pohřby</span>
          <span className="ps-mark-line ps-mark-quiet">bez&nbsp;obřadu</span>
        </a>
        <div className="ps-nav-meta">
          <span className="ps-nav-hours">Po–Pá 8–17 · So 9–13</span>
          <a className="ps-nav-tel" href="tel:+420725407032">
            +420 725 407 032
          </a>
        </div>
      </header>

      <section className="ps-hero" aria-labelledby="ps-hero-title">
        <img
          className="ps-hero-img"
          src="/hero.webp"
          alt="Tichý interiér pohřební služby v Brně — svíce a klidné světlo"
        />
        <div className="ps-hero-veil" aria-hidden="true" />
        <div className="ps-hero-inner">
          <p className="ps-eyebrow">Pohřební služba online · Brno, Koliště</p>
          <h1 id="ps-hero-title" className="ps-hero-title">
            Rozloučení,
            <br />
            které nemusíte
            <br />
            řešit ve frontě.
          </h1>
          <p className="ps-hero-lede">
            Kompletní pohřeb kremací bez obřadu vyřídíte online, z klidu domova.
            Bez skrytých poplatků, s garancí konečné ceny a při dodržení všech
            zákonných i etických norem.
          </p>
          <div className="ps-hero-actions">
            <a className="ps-btn ps-btn-primary" href="#poptavka">
              Nezávazně poptat
            </a>
            <a className="ps-btn ps-btn-ghost" href="tel:+420725407032">
              Zavolat specialistovi
            </a>
          </div>
          <p className="ps-hero-price">
            <span className="ps-price-label">Konečná cena od</span>
            <span className="ps-price-num">12 490 Kč</span>
            <span className="ps-price-note">včetně DPH · kompletní balíček</span>
          </p>
        </div>
      </section>

      <section className="ps-section ps-services" aria-labelledby="ps-services-title">
        <div className="ps-section-head">
          <p className="ps-eyebrow ps-eyebrow-dark">Co je v ceně</p>
          <h2 id="ps-services-title" className="ps-h2">
            Jeden balíček. Konečná cena. Nic navíc, co byste nečekali.
          </h2>
          <p className="ps-section-lede">
            Díky online administrativě a vlastním kamenným provozovnám držíme
            náklady nízko — a promítáme to do jediné, předem známé částky.
            Připlatíte si jen za věci, které si sami vyberete.
          </p>
        </div>

        <div className="ps-services-grid">
          <figure className="ps-figure">
            <img
              className="ps-figure-img"
              src="/section-1.webp"
              alt="Kremační eko rakev s čalouněním připravená k rozloučení"
            />
            <figcaption className="ps-figure-cap">
              Eko kremační rakev je součástí balíčku — vč. čalounění a dečky.
            </figcaption>
          </figure>

          <ul className="ps-includes" aria-label="Služby zahrnuté v ceně">
            {obsahuje.map((item, i) => (
              <li key={i} className="ps-includes-item">
                <span className="ps-includes-tick" aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="ps-prices" id="poptavka">
          <h3 className="ps-h3">Kde působíme a za kolik</h3>
          <table className="ps-price-table">
            <caption className="ps-visually-hidden">
              Konečná cena kompletního pohřbu bez obřadu podle kraje
            </caption>
            <thead>
              <tr>
                <th scope="col">Kraj</th>
                <th scope="col">Konečná cena</th>
              </tr>
            </thead>
            <tbody>
              {kraje.map((r) => (
                <tr key={r.kraj}>
                  <th scope="row">{r.kraj}</th>
                  <td>{r.cena}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="ps-price-foot">
            Ceny jsou konečné a včetně DPH. Sídlíme na Kolišti v Brně a obsluhujeme
            celý Jihomoravský kraj i okolí.
          </p>
        </div>
      </section>

      <section className="ps-section ps-trust" aria-labelledby="ps-trust-title">
        <div className="ps-trust-media">
          <img
            className="ps-trust-img"
            src="/section-2.webp"
            alt="Lesní pietní místo, kde probíhá rozptyl popela"
          />
        </div>
        <div className="ps-trust-body">
          <p className="ps-eyebrow ps-eyebrow-dark">Jak to u nás chodí</p>
          <h2 id="ps-trust-title" className="ps-h2">
            Vše zařídíte online. My se postaráme o zbytek.
          </h2>
          <p className="ps-section-lede">
            Patříme k nejstarším pohřebním službám s kamennými provozovnami
            v českých zemích. Zkušenost předků spojujeme s tím, co dnes lidem
            skutečně pomůže — s cenou, kterou zvládne i nenadálá situace.
          </p>

          <ol className="ps-steps">
            {kroky.map((k) => (
              <li key={k.cislo} className="ps-step">
                <span className="ps-step-num">{k.cislo}</span>
                <div>
                  <h3 className="ps-step-title">{k.nadpis}</h3>
                  <p className="ps-step-text">{k.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <p className="ps-trust-note">
            Doobjednat lze fotografii zesnulého, kytičku do ruky, květinovou
            výzdobu rakve i rozptyl popela na našem vlastním lesním pietním místě.
          </p>
        </div>
      </section>
    </main>
  );
}
