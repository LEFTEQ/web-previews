import type { CSSProperties } from "react";

type Swatch = {
  name: string;
  stone: string;
  material: "granite" | "travertin" | "marfil" | "slate";
};

const swatches: Swatch[] = [
  { name: "Dlažby", stone: "žula · tmavá i světlá", material: "granite" },
  { name: "Obklady", stone: "italský travertin", material: "travertin" },
  { name: "Pracovní desky", stone: "Crema Marfil", material: "marfil" },
  { name: "Krby", stone: "pískovec · mramor", material: "slate" },
  { name: "Schody", stone: "leštěná žula", material: "granite" },
  { name: "Kašny a památníky", stone: "masivní žulový blok", material: "travertin" },
  { name: "Koupelny", stone: "mramor · vaničky na míru", material: "marfil" },
  { name: "Hřbitovní architektura", stone: "leštěná i broušená žula", material: "slate" },
];

type Work = {
  title: string;
  place: string;
  text: string;
};

const works: Work[] = [
  {
    title: "Památník Arisaig",
    place: "Skotsko",
    text: "Žulový památník československým vojákům, cvičeným za druhé světové války pro operace v týlu nepřítele. Kotvený přímo do skály na břehu moře. Výtvarný návrh ak. soch. Josef Vajce — technické řešení, výrobu a montáž jsme provedli my.",
  },
  {
    title: "Bytový dům",
    place: "Poděbrady",
    text: "U kolonády jsme demontovali původní obklady balkonů ze spišského travertinu v dezolátním stavu a nahradili je novými kusy z italského travertinu. Vyměnili jsme poškozené prvky fasády a celou fasádu vyčistili.",
  },
  {
    title: "Byt",
    place: "Praha",
    text: "Kompletní kamenické práce: dlažby v koupelnách, sprchové vaničky a umyvadlové desky z mramoru Crema Marfil. Kuchyňské desky jsme dodali z kamene Labrador Antique.",
  },
];

export default function Page() {
  return (
    <main className="km">
      <header className="km-top">
        <a className="km-mark" href="#top">
          <span className="km-mark__k">KÁMEN</span>
          <span className="km-mark__p">PEČKY</span>
        </a>
        <nav className="km-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#realizace">Realizace</a>
          <a href="tel:+420731221000">+420 731 221 000</a>
        </nav>
      </header>

      <section className="km-hero" id="top">
        <span className="km-hero__light" aria-hidden="true" />
        <p className="km-eyebrow km-reveal" style={delay(0)}>
          Kamenictví · Pečky · od 1900
        </p>
        <h1 className="km-hero__title">
          <span className="km-incised km-reveal" style={delay(1)}>TVOŘÍME</span>
          <span className="km-incised km-reveal" style={delay(2)}>Z KAMENE</span>
        </h1>
        <p className="km-hero__lead km-reveal" style={delay(3)}>
          Přírodní kámen zpracováváme v Pečkách už přes 120 let. Dlažby, obklady,
          pracovní desky, schody i památníky — od prvního zaměření po montáž u vás.
        </p>
        <p className="km-datum km-reveal" style={delay(4)}>
          <span className="km-datum__cut">Pátá generace rodiny Svobodovy</span>
          <span className="km-datum__sub">Tř. Jana Švermy 714, 289 11 Pečky</span>
        </p>
      </section>

      <section className="km-section km-section--light" id="nabidka">
        <div className="km-head">
          <p className="km-kicker">Vzorník</p>
          <h2 className="km-incised km-incised--dark">Co pro vás vyrobíme</h2>
          <p className="km-head__note">
            Osm okruhů kamenických prací — každý na svém kameni, jako vzorky na
            ponku. Zpracováváme veškeré druhy přírodního kamene.
          </p>
        </div>
        <ul className="km-board">
          {swatches.map((s) => (
            <li key={s.name} className={`km-slab km-slab--${s.material}`}>
              <span className="km-slab__name">{s.name}</span>
              <span className="km-slab__stone">{s.stone}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="km-section km-section--dark" id="realizace">
        <div className="km-head km-head--dark">
          <p className="km-kicker km-kicker--brass">Řemeslo předávané z otce na syna</p>
          <h2 className="km-incised">Vzorové realizace</h2>
          <p className="km-head__note km-head__note--dark">
            Firmu založil Antonín Svoboda a dnes ji vede už pátá generace. Tradice,
            zkušenost a spolehlivost — na těchto zakázkách je to vidět.
          </p>
        </div>

        <ol className="km-works">
          {works.map((w, i) => (
            <li key={w.title} className="km-work">
              <span className="km-work__no" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="km-work__body">
                <h3 className="km-work__title">
                  {w.title} <span className="km-work__place">— {w.place}</span>
                </h3>
                <p className="km-work__text">{w.text}</p>
                <a className="km-work__cta" href="mailto:kamen@kamen-pecky.cz">
                  Poptat podobné
                </a>
              </div>
            </li>
          ))}
        </ol>

        <p className="km-values">
          <span>Tradice</span>
          <span>Zkušenost</span>
          <span>Spolehlivost</span>
          <span>Skvělý tým</span>
        </p>
      </section>
    </main>
  );
}

function delay(step: number): CSSProperties {
  return { ["--i" as string]: String(step) } as CSSProperties;
}
