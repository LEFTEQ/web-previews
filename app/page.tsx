import React from "react";

const zasilky = [
  {
    kod: "SVÁ",
    nazev: "Sváča z kola",
    popis:
      "Oběd, snídaně nebo večeře z vašich oblíbených budějovických restaurací. Na kole nebo koloběžce jsme u vás do 30 minut i v těch nejzazších uličkách — teplé a ve vlastních recyklovatelných obalech.",
    okno: "po–ne · celý den",
    akce: "Objednat jídlo",
  },
  {
    kod: "KVĚ",
    nazev: "Vezemti květiny",
    popis:
      "Vyberte kytici online, my ji připravíme a doručíme na čas — vám i obdarovanému. Přidáme osobní vzkaz a doprovodné emoce. Pro recepce a provozovny vozíme květiny pravidelně.",
    okno: "8:00–20:00 · CB + 10 km",
    akce: "Objednat květinu",
  },
  {
    kod: "NÁK",
    nazev: "Nákladní kola",
    popis:
      "Doručení na poslední míli, které nezahustí město dodávkami. Denně vozíme stovky zásilek expresně, ekologicky a za každého počasí — s maximální orientací na koncového zákazníka.",
    okno: "denně · centrum CB",
    akce: "Poptat rozvoz",
  },
  {
    kod: "EXP",
    nazev: "Expresní přeprava",
    popis:
      "Když je cíl za hranicí centra, nasedáme do aut. ŠKODA CityGo, Fabia combi nebo dodávka odveze zásilku kamkoliv po České republice — od obálky po paletu.",
    okno: "CB → celá ČR",
    akce: "Objednat přepravu",
  },
];

const cisla = [
  { hodnota: "2018", label: "Rok, kdy jsme sedli na kola" },
  { hodnota: "500 000", label: "Doručených objednávek" },
  { hodnota: "33", label: "Kurýrů v týmu" },
  { hodnota: "68", label: "Spolupracujících podniků" },
];

export default function Page() {
  return (
    <main className="vt">
      <header className="vt-top">
        <a className="vt-mark" href="#top" aria-label="vezemti.to — úvod">
          <span className="vt-mark-vezem">vezemti</span>
          <span className="vt-mark-dot">.to</span>
        </a>
        <nav className="vt-nav" aria-label="Hlavní">
          <a href="#sluzby">Co vozíme</a>
          <a href="#onas">O nás</a>
          <a className="vt-nav-cta" href="tel:+420382223333">382 223 333</a>
        </nav>
      </header>

      <section className="vt-hero" id="top" aria-labelledby="hero-nadpis">
        <div className="vt-hero-grid" aria-hidden="true">
          <span className="vt-spoke vt-spoke-1" />
          <span className="vt-spoke vt-spoke-2" />
          <span className="vt-spoke vt-spoke-3" />
          <span className="vt-hub" />
        </div>

        <p className="vt-eyebrow">Cyklokurýři · České Budějovice</p>
        <h1 className="vt-hero-nadpis" id="hero-nadpis">
          <span className="vt-line vt-l1">Přivezeme</span>
          <span className="vt-line vt-l2">cokoliv,</span>
          <span className="vt-line vt-l3">kamkoliv.</span>
        </h1>
        <p className="vt-hero-lead">
          Od obálky po paletu. Jídlo, květiny, zapomenuté klíče i firemní zásilky
          — po Budějovicích šlapeme za vámi do 30 minut, po zbytku republiky
          dojedeme autem. Za každého počasí a s úsměvem.
        </p>
        <div className="vt-hero-akce">
          <a className="vt-btn vt-btn-primar" href="#sluzby">
            Objednat rozvoz
          </a>
          <a className="vt-btn vt-btn-sekun" href="#onas">
            Jak fungujeme
          </a>
        </div>
      </section>

      <section className="vt-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="vt-sekce-hlava">
          <p className="vt-eyebrow">Čtyři způsoby, jak vozíme</p>
          <h2 className="vt-h2" id="sluzby-nadpis">
            Vyberte si zásilku, o zbytek se postaráme
          </h2>
        </div>

        <ul className="vt-karty">
          {zasilky.map((z) => (
            <li className="vt-karta" key={z.kod}>
              <span className="vt-karta-kod" aria-hidden="true">
                {z.kod}
              </span>
              <h3 className="vt-karta-nazev">{z.nazev}</h3>
              <p className="vt-karta-popis">{z.popis}</p>
              <div className="vt-karta-pata">
                <span className="vt-karta-okno">{z.okno}</span>
                <a className="vt-karta-akce" href="tel:+420382223333">
                  {z.akce}
                </a>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="vt-onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="vt-onas-text">
          <p className="vt-eyebrow">O nás</p>
          <h2 className="vt-h2" id="onas-nadpis">
            Parta kamarádů, co ve městě vozí líp než dodávky
          </h2>
          <p className="vt-onas-lead">
            Jsme kolegové a nadšení cyklokurýři. Doručíme zboží vašim zákazníkům
            za pár minut a navíc ekologicky — místo aut plníme ulice koly a
            koloběžkami. Šetříme vám čas, který můžete věnovat sobě a svým
            blízkým.
          </p>
          <p className="vt-onas-lok">
            Kancelář najdete na Rudolfovské třídě v Českých Budějovicích.
            Vyrážíme každý den — od nákupu přes lékárnu až po firemní rozvoz.
          </p>
        </div>

        <dl className="vt-cisla">
          {cisla.map((c) => (
            <div className="vt-cislo" key={c.label}>
              <dt className="vt-cislo-hodnota">{c.hodnota}</dt>
              <dd className="vt-cislo-label">{c.label}</dd>
            </div>
          ))}
        </dl>
      </section>
    </main>
  );
}
