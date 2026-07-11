import type { ReactNode } from "react";

type Novinka = {
  cislo: string;
  nazev: string;
  detail: string;
  cena: string;
  jednotka: string;
};

type Kategorie = {
  nazev: string;
  popis: string;
  vzorek: string;
};

const novinky: Novinka[] = [
  {
    cislo: "01",
    nazev: "Plastový box na šití",
    detail: "Přehledná kazeta s přihrádkami na nitě, špendlíky a knoflíky.",
    cena: "277,33",
    jednotka: "balení · 1 ks",
  },
  {
    cislo: "02",
    nazev: "Průchodky s podložkou",
    detail: "Kovové kroužky Ø8/13 mm pro záclony, plachty i ruční tvoření.",
    cena: "2,90",
    jednotka: "balení · 1 pár",
  },
  {
    cislo: "03",
    nazev: "Náušnice z nerezové oceli",
    detail: "Broušené kamínky v nerezovém lůžku, hypoalergenní materiál.",
    cena: "201,83",
    jednotka: "balení · 1 pár",
  },
];

const bestsellery: Novinka[] = [
  {
    cislo: "04",
    nazev: "Špendlíky čalounické 60 mm",
    detail: "Dlouhé ocelové špendlíky, které drží i těžkou dekorační látku.",
    cena: "2,36",
    jednotka: "balení · 1 ks",
  },
  {
    cislo: "05",
    nazev: "Imitace juty s vlizelínem",
    detail: "Podlepená juta, co se netřepí — ideální na aranžování a obaly.",
    cena: "109,97",
    jednotka: "balení · 1 m",
  },
  {
    cislo: "06",
    nazev: "Dekorační látka žinylka",
    detail: "Hustá žinylková struktura na polštáře, závěsy i čalounění.",
    cena: "131,77",
    jednotka: "balení · 1 m",
  },
];

const kategorie: Kategorie[] = [
  { nazev: "Látky", popis: "Bavlna, len, voál i silk popelín na metry", vzorek: "vzor-latky" },
  { nazev: "Korálky a komponenty", popis: "Skleněné, kovové a přírodní na vlastní šperky", vzorek: "vzor-koralky" },
  { nazev: "Tvoření a aranžování", popis: "Stuhy, provázky na macramé, floristika", vzorek: "vzor-tvoreni" },
  { nazev: "Módní doplňky", popis: "Spony, přezky, knoflíky a zipy", vzorek: "vzor-doplnky" },
  { nazev: "Bižuterie", popis: "Hotové náušnice, řetízky a přívěsky", vzorek: "vzor-bizu" },
  { nazev: "Obaly a vybavení", popis: "Krabičky, dárkové sáčky a organizéry", vzorek: "vzor-obaly" },
];

function Radek({ item }: { item: Novinka }): ReactNode {
  return (
    <li className="radek">
      <span className="radek-cislo">{item.cislo}</span>
      <span className="radek-telo">
        <span className="radek-nazev">{item.nazev}</span>
        <span className="radek-detail">{item.detail}</span>
      </span>
      <span className="radek-cena">
        <span className="radek-castka">{item.cena} Kč</span>
        <span className="radek-jednotka">{item.jednotka}</span>
      </span>
    </li>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="stranka">
      <header className="masthead">
        <a className="wordmark" href="#" aria-label="Stoklasa — textilní galanterie">
          <span className="wordmark-znak">S</span>
          <span className="wordmark-text">
            <span className="wordmark-nazev">Stoklasa</span>
            <span className="wordmark-podnadpis">textilní galanterie · Ostrava</span>
          </span>
        </a>
        <nav className="masthead-nav" aria-label="Hlavní">
          <a href="#kategorie">Sortiment</a>
          <a href="#novinky">Novinky</a>
          <a href="#o-nas">O galanterii</a>
        </nav>
        <p className="masthead-linka">
          <span>Zákaznická linka</span>
          <a href="tel:+420228229395">228 229 395</a>
        </p>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-obraz">
          <img
            src="/hero.webp"
            alt="Cívky nití, stuhy a korálky na pracovním stole galanterie Stoklasa"
            className="hero-img"
          />
        </div>
        <div className="hero-panel">
          <p className="hero-eyebrow">Galanterie z Ostravy · již 36 let</p>
          <h1 id="hero-nadpis" className="hero-nadpis">
            Nitě, stuhy,
            <span className="hero-zvyr">korálky</span>
            a všechno, co drží tvoření pohromadě.
          </h1>
          <p className="hero-text">
            Přes 40&nbsp;000 položek skladem — od látek na metry přes špendlíky
            a knoflíky až po komponenty na šperky. Připraveno k odeslání ještě
            dnes, ať šijete, háčkujete nebo aranžujete.
          </p>
          <div className="hero-akce">
            <a className="tlacitko tlacitko-plne" href="#kategorie">
              Procházet sortiment
            </a>
            <a className="tlacitko tlacitko-linka" href="#navody">
              Návody krok za krokem
            </a>
          </div>
          <dl className="hero-fakta">
            <div>
              <dt>Položek skladem</dt>
              <dd>40 000+</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne 8–20</dd>
            </div>
            <div>
              <dt>Doporučí nás</dt>
              <dd>98 %</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kategorie" id="kategorie" aria-labelledby="kat-nadpis">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Sortiment</p>
          <h2 id="kat-nadpis">Šest zásuvek galanterního pultu</h2>
          <p className="sekce-uvod">
            Uspořádané tak, jak si je vytahujete z krabiček doma — od látek
            po hotovou bižuterii. Vyberte, s čím právě tvoříte.
          </p>
        </div>
        <ul className="kat-mrizka">
          {kategorie.map((k) => (
            <li key={k.nazev} className={`kat-karta ${k.vzorek}`}>
              <span className="kat-nazev">{k.nazev}</span>
              <span className="kat-popis">{k.popis}</span>
              <span className="kat-sipka" aria-hidden="true">→</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="pult" id="novinky" aria-labelledby="pult-nadpis">
        <img
          src="/section-1.webp"
          alt="Detail barevných stuh a korálků z nabídky galanterie"
          className="pult-img"
        />
        <div className="pult-obsah">
          <div className="sekce-hlava">
            <p className="sekce-eyebrow">Z pultu tento týden</p>
            <h2 id="pult-nadpis">Novinky a nejprodávanější</h2>
            <p className="sekce-uvod">
              Přihlášeným zákazníkům dáváme 10&nbsp;% na zboží s ikonou
              bestselleru. Ceny jsou za balení uvedené u položky.
            </p>
          </div>

          <h3 className="pult-podnadpis">Novinky</h3>
          <ul className="radky">
            {novinky.map((item) => (
              <Radek key={item.cislo} item={item} />
            ))}
          </ul>

          <h3 className="pult-podnadpis">Nejprodávanější</h3>
          <ul className="radky">
            {bestsellery.map((item) => (
              <Radek key={item.cislo} item={item} />
            ))}
          </ul>
        </div>
      </section>

      <section className="o-nas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="onas-text">
          <p className="sekce-eyebrow">O galanterii</p>
          <h2 id="onas-nadpis">Rodinná galanterie, co ví, kde co leží</h2>
          <p>
            Prodáváme galanterii už 36 let. Za tu dobu jsme naskladnili
            desítky tisíc drobností, které jinde marně hledáte — od jednoho
            konkrétního knoflíku po metry dekorační látky. Objednávku
            vyřídíme rychle, a když něco nesedí, vracíme peníze bez řečí.
          </p>
          <ul className="onas-body">
            <li>Obrovské skladové zásoby — přes 40&nbsp;000 položek</li>
            <li>Odesíláme rychle, problémy řešíme okamžitě</li>
            <li>Garance vrácení zboží</li>
            <li>98&nbsp;% zákazníků nás doporučí</li>
          </ul>
          <p className="onas-adresa">
            Stoklasa textilní galanterie s.r.o. · zákaznická linka
            Po–Ne&nbsp;8–20 · <a href="tel:+420228229395">228 229 395</a> ·{" "}
            <a href="mailto:eshop@stoklasa.cz">eshop@stoklasa.cz</a>
          </p>
        </div>
        <figure className="onas-figura" id="navody">
          <img
            src="/section-2.webp"
            alt="Ruční tvoření z galanterie — macramé a šití z materiálů Stoklasa"
            className="onas-img"
          />
          <figcaption>
            <strong>Návody krok za krokem.</strong> Macramé lodička, růže
            ze stuhy nebo háčkovaný obal na skleničku — nápady i materiál
            na jednom místě.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
