import type { CSSProperties } from "react";

const services = [
  {
    key: "projekce",
    marker: "Krok 1",
    title: "Projekční činnost",
    lead: "Návrh zahrady na papíře i v 3D — než se kopne první rýč.",
    body: "Osazovací plány, kompozice záhonů, výběr dřevin do jihočeského klimatu a půdy. Dostanete výkres, který řemeslník i vy čtete stejně.",
    items: ["Studie a osazovací plán", "Výběr trvalek a dřevin", "Rozpočet a etapizace"],
  },
  {
    key: "realizace",
    marker: "Krok 2",
    title: "Realizace zahrad",
    lead: "Od terénních úprav po hotový trávníkový koberec.",
    body: "Modelace terénu mechanizací, výsadba stromů a dřevin, trvalkové i letničkové záhony, závlahové systémy a zahradní jezírka. Stavíme to, co jsme navrhli.",
    items: ["Trávník — koberec i osetím", "Výsadby a záhony", "Závlahy a jezírka"],
  },
  {
    key: "udrzba",
    marker: "Celoročně",
    title: "Údržba a péče",
    lead: "Zahrada zůstane taková, jak jsme ji předali.",
    body: "Pravidelná péče o zeleň u firemních, veřejných i soukromých objektů, rizikové i klasické kácení a zimní údržba zpevněných ploch.",
    items: ["Sezónní péče o zeleň", "Rizikové kácení stromů", "Zimní údržba ploch"],
  },
];

const refs = [
  { place: "Rodinná zahrada", town: "Rožnov, Č. Budějovice", note: "Trvalkové záhony, závlaha, trávníkový koberec" },
  { place: "Areál firmy", town: "Č. Budějovice — Nemanice", note: "Zeleň kolem provozovny a parkoviště" },
  { place: "Dětské hřiště", town: "Hluboká nad Vltavou", note: "Modelace terénu, výsadba stromů a keřů" },
];

export default function Page() {
  return (
    <main className="bt">
      <header className="bt-top">
        <a className="bt-mark" href="#uvod" aria-label="BO TREE zahradní ateliér — úvod">
          <span className="bt-mark-bo">Bo</span>
          <span className="bt-mark-tree">Tree</span>
          <span className="bt-mark-sub">zahradní ateliér</span>
        </a>
        <nav className="bt-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#reference">Reference</a>
          <a className="bt-call" href="tel:+420380420420">Zavolat</a>
        </nav>
      </header>

      <section className="bt-hero" id="uvod">
        <img className="bt-hero-img" src="/hero.webp" alt="Navržená zahrada od ateliéru BO TREE se vzrostlými dřevinami a trvalkovými záhony" />
        <div className="bt-hero-veil" aria-hidden="true" />
        <div className="bt-hero-inner">
          <p className="bt-eyebrow">Zahradní architektura · České Budějovice</p>
          <h1 className="bt-h1">
            Zahrada, která<br />
            <span className="bt-h1-em">roste podle plánu.</span>
          </h1>
          <p className="bt-hero-lead">
            Navrhujeme a zakládáme zahrady, firemní i veřejnou zeleň v Jihočeském kraji — od studie na papíře přes výsadby a závlahy až po údržbu, která je udrží.
          </p>
          <div className="bt-hero-cta">
            <a className="bt-btn" href="tel:+420380420420">Zavolat a domluvit se</a>
            <a className="bt-link" href="#sluzby">Co pro vaši zahradu uděláme →</a>
          </div>
          <dl className="bt-facts">
            <div><dt>Kde pracujeme</dt><dd>České Budějovice a okolí</dd></div>
            <div><dt>Od návrhu po údržbu</dt><dd>vše pod jednou střechou</dd></div>
            <div><dt>Zeleň</dt><dd>soukromá · firemní · veřejná</dd></div>
          </dl>
        </div>
      </section>

      <section className="bt-sec" id="sluzby">
        <div className="bt-sec-head">
          <p className="bt-eyebrow bt-eyebrow-dark">Jak to u nás probíhá</p>
          <h2 className="bt-h2">Od prvního náčrtu ke zralé zahradě</h2>
          <p className="bt-sec-intro">
            Zahradu vedeme celou cestou — nekreslíme jen hezký obrázek a nenecháváme vás v tom. Návrh, realizace a péče drží pohromadě.
          </p>
        </div>

        <ol className="bt-cards">
          {services.map((s, i) => (
            <li className="bt-card" key={s.key} style={{ "--i": i } as CSSProperties}>
              <span className="bt-card-marker">{s.marker}</span>
              <h3 className="bt-card-title">{s.title}</h3>
              <p className="bt-card-lead">{s.lead}</p>
              <p className="bt-card-body">{s.body}</p>
              <ul className="bt-card-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="bt-figure">
          <img src="/section-1.webp" alt="Čerstvě založený trávník a výsadba dřevin při realizaci zahrady" />
          <figcaption>Nový trávníkový koberec a výsadby — čistá práce mechanizací, ruční dosazení.</figcaption>
        </figure>
      </section>

      <section className="bt-sec bt-sec-dark" id="reference">
        <div className="bt-refs-grid">
          <div className="bt-refs-copy">
            <p className="bt-eyebrow">Reference z kraje</p>
            <h2 className="bt-h2 bt-h2-light">Zahrada, park, hřiště nebo prostor kolem firmy?</h2>
            <p className="bt-refs-intro">
              Zakládáme i udržujeme zeleň u soukromých domů, firemních areálů i veřejných prostranství. Řekněte nám, co máte za pozemek — my se o zbytek postaráme.
            </p>
            <ul className="bt-refs-list">
              {refs.map((r) => (
                <li key={r.place}>
                  <span className="bt-refs-place">{r.place}</span>
                  <span className="bt-refs-town">{r.town}</span>
                  <span className="bt-refs-note">{r.note}</span>
                </li>
              ))}
            </ul>
            <a className="bt-btn bt-btn-light" href="tel:+420380420420">Zavolat a probrat pozemek</a>
          </div>
          <figure className="bt-refs-figure">
            <img src="/section-2.webp" alt="Hotová zahrada s trvalkovými záhony a udržovaným trávníkem realizovaná ateliérem BO TREE" />
          </figure>
        </div>
      </section>
    </main>
  );
}
