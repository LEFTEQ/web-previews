import type { CSSProperties } from "react";

const pravniOblasti = [
  {
    paragraf: "§ 1",
    nazev: "Občanské a bytové právo",
    popis:
      "Smlouvy k nemovitostem, převody, zástavy a věcná břemena. Bytové a družstevní právo, SVJ, vymáhání pohledávek, výkon rozhodnutí a exekuce.",
  },
  {
    paragraf: "§ 2",
    nazev: "Rodinné právo",
    popis:
      "Rozvody a opatrovnická řízení, úprava poměrů nezletilých, střídavá i společná výchova, výživné, určení otcovství, vypořádání společného jmění manželů.",
  },
  {
    paragraf: "§ 3",
    nazev: "Trestní právo",
    popis:
      "Obhajoba v přípravném i hlavním řízení, asistence u úkonů, návrhy na propuštění z vazby, odklony a narovnání, zastupování poškozených v adhezním řízení.",
  },
  {
    paragraf: "§ 4",
    nazev: "Pracovní právo",
    popis:
      "Ochrana zaměstnavatelů i zaměstnanců, pracovní smlouvy a jejich ukončení, dohody, náhrada škody z úrazu, interní pracovněprávní předpisy.",
  },
  {
    paragraf: "§ 5",
    nazev: "Obchodní právo",
    popis:
      "Příprava a posuzování obchodních smluv a dohod, smluvní vztahy mezi podnikateli, vymáhání peněžních pohledávek.",
  },
  {
    paragraf: "§ 6",
    nazev: "Správní právo",
    popis:
      "Zastupování před správními úřady i soudy. Spolu s úschovou prostředků a ověřováním podpisů přímo v kanceláři.",
  },
];

const zasady = [
  {
    nazev: "Osobní přístup",
    popis:
      "Každý klient má jiný příběh i zájmy. Řešení hledám podle nich — ne podle šablony.",
  },
  {
    nazev: "Komplexnost",
    popis:
      "Případ vedu od první porady po výsledek, včetně procesní taktiky a možnosti smíru.",
  },
  {
    nazev: "Profesionalita",
    popis:
      "Advokacii vykonávám odborně, odpovědně a s plným nasazením za vaše práva.",
  },
];

export default function Page() {
  return (
    <main className="ak">
      <header className="ak-top">
        <a className="ak-mark" href="#uvod" aria-label="Mgr. Petra Žáková, advokátní kancelář">
          <span className="ak-mark-sign" aria-hidden="true">§</span>
          <span className="ak-mark-name">
            <strong>Žáková</strong>
            <em>advokátní kancelář · Olomouc</em>
          </span>
        </a>
        <nav className="ak-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#advokatka">Advokátka</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="ak-hero" id="uvod">
        <div className="ak-hero-text">
          <p className="ak-eyebrow">ev. č. ČAK 15483 · Olomouc</p>
          <h1>
            Právo, ve kterém se<br />
            <span className="ak-hero-accent">vyznáte i vy.</span>
          </h1>
          <p className="ak-lead">
            Mgr. Petra Žáková vede advokátní kancelář v Olomouci. Zastupuji
            jednotlivce i rodiny v občanských, rodinných a trestních věcech —
            srozumitelně, bez právnické mlhy a vždy na vaší straně stolu.
          </p>
          <div className="ak-hero-cta">
            <a className="ak-btn" href="#kontakt">Domluvit konzultaci</a>
            <a className="ak-btn-ghost" href="#sluzby">Co řeším nejčastěji</a>
          </div>
        </div>
        <figure className="ak-hero-figure">
          <span className="ak-hero-glyph" aria-hidden="true">§</span>
          <img
            src="/hero.webp"
            alt="Advokátka Mgr. Petra Žáková ve své kanceláři v Olomouci"
            width={900}
            height={1100}
          />
        </figure>
      </section>

      <section className="ak-sluzby" id="sluzby">
        <div className="ak-section-head">
          <p className="ak-eyebrow">Šest paragrafů, kterým rozumím</p>
          <h2>Oblasti, ve kterých vás zastoupím</h2>
          <p className="ak-section-sub">
            Od smlouvy k bytu po obhajobu u soudu. Vyberte téma, které řešíte —
            první rozhovor o možnostech je vždy bez závazku.
          </p>
        </div>
        <ol className="ak-grid">
          {pravniOblasti.map((o) => (
            <li className="ak-card" key={o.paragraf}>
              <span className="ak-card-par" aria-hidden="true">
                {o.paragraf}
              </span>
              <h3>{o.nazev}</h3>
              <p>{o.popis}</p>
            </li>
          ))}
        </ol>
        <figure className="ak-band">
          <img
            src="/section-1.webp"
            alt="Pracovní stůl advokátní kanceláře se spisy a právními předpisy"
            width={1400}
            height={600}
          />
        </figure>
      </section>

      <section className="ak-advokatka" id="advokatka">
        <figure className="ak-portret">
          <img
            src="/section-2.webp"
            alt="Mgr. Petra Žáková, advokátka v Olomouci"
            width={900}
            height={1100}
          />
        </figure>
        <div className="ak-bio">
          <p className="ak-eyebrow">O advokátce</p>
          <h2>Mgr. Petra Žáková</h2>
          <p>
            Právnickou fakultu Univerzity Palackého v Olomouci jsem dokončila
            v roce 2009. Praxí jsem prošla na exekutorském úřadě v Přerově,
            poté jako koncipientka a zaměstnaná advokátka v olomoucké kanceláři
            JUDr. Petry Langerové, Ph.D.
          </p>
          <p>
            Specializuji se zejména na občanské a bytové právo, rodinné a
            trestní věci, výkon rozhodnutí a exekuce. Přednášela jsem na
            Lékařské fakultě UP v Olomouci a na Panevropské vysoké škole
            v Ostravě.
          </p>
          <ul className="ak-zasady">
            {zasady.map((z, i) => (
              <li key={z.nazev}>
                <span className="ak-zasady-num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3>{z.nazev}</h3>
                  <p>{z.popis}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="ak-kontakt" id="kontakt">
            <p>
              <span>Telefon</span>
              <a href="tel:+420846022569">846 022 569</a>
            </p>
            <p>
              <span>E‑mail</span>
              <a href="mailto:zakova@ak-zakova.cz">zakova@ak-zakova.cz</a>
            </p>
            <p>
              <span>Kancelář</span>
              <span>Olomouc · ev. č. ČAK 15483</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
