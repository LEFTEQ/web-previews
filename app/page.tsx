import type { CSSProperties } from "react";

export default function Page() {
  const obory = [
    {
      cislo: "01",
      nazev: "Právo nemovitostí",
      popis:
        "Kupní a darovací smlouvy, převody bytů i pozemků, věcná břemena, zástavy a advokátní úschova kupní ceny. Ohlídám katastr i termíny.",
      body: ["Kupní a darovací smlouvy", "Advokátní úschova", "Věcná břemena a zástavy"],
    },
    {
      cislo: "02",
      nazev: "Náhrada škody a újmy na zdraví",
      popis:
        "Vymáhání odškodnění po úrazu, dopravní nehodě i pracovním úrazu. Jednám s pojišťovnou za Vás a hlídám, aby výplata odpovídala tomu, co jste opravdu prožili.",
      body: ["Bolestné a ztížení uplatnění", "Jednání s pojišťovnou", "Náhrady po dopravní nehodě"],
    },
    {
      cislo: "03",
      nazev: "Smluvní a závazkové právo",
      popis:
        "Sepis a kontrola smluv pro každodenní život i podnikání. Řeknu Vám dopředu, kde je riziko, a napíšu smlouvu tak, aby držela.",
      body: ["Sepis a revize smluv", "Vymáhání pohledávek", "Reklamace a odstoupení"],
    },
    {
      cislo: "04",
      nazev: "Obchodní společnosti a družstva",
      popis:
        "Založení s. r. o., změny ve společnosti, valné hromady, převody podílů a zápisy do obchodního rejstříku. Podpora od rozjezdu firmy dál.",
      body: ["Založení a změny s. r. o.", "Převody obchodních podílů", "Zápisy do rejstříku"],
    },
    {
      cislo: "05",
      nazev: "Dědické právo",
      popis:
        "Zastoupení v dědickém řízení, závěti a vypořádání mezi dědici. Provedu Vás řízením v době, kdy na papíry není nálada.",
      body: ["Zastoupení v řízení", "Závěti a dovětky", "Vypořádání dědiců"],
    },
    {
      cislo: "06",
      nazev: "Trestní právo — zastoupení poškozeného",
      popis:
        "Jste-li obětí trestného činu, uplatním Vaše práva i nárok na náhradu škody v trestním řízení. Stojím na Vaší straně.",
      body: ["Práva poškozeného", "Náhrada škody v řízení", "Zastoupení u soudu"],
    },
  ];

  return (
    <main className="ak">
      <header className="ak-nav">
        <a className="ak-mark" href="#uvod" aria-label="Advokátní kancelář Jaroslav Toman, úvod">
          <span className="ak-mark-mono">§</span>
          <span className="ak-mark-name">
            <span className="ak-mark-line1">Toman</span>
            <span className="ak-mark-line2">advokát · Hradec Králové</span>
          </span>
        </a>
        <nav className="ak-nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Právní služby</a>
          <a href="#omne">O mně</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
      </header>

      <section className="ak-hero" id="uvod">
        <div className="ak-hero-text">
          <p className="ak-eyebrow">ev. č. ČAK 16558 · Baťkovo náměstí, Hradec Králové</p>
          <h1 className="ak-hero-title">
            Právní pomoc,<br />
            u které jednáte<br />
            <em>přímo s advokátem.</em>
          </h1>
          <p className="ak-hero-lead">
            Mgr. Jaroslav Toman, LL.M. Advokátní kancelář v centru Hradce Králové pro
            lidi, živnostníky a menší firmy. Nemovitosti, náhrady škody, smlouvy
            a obchodní právo — bez rozsáhlého aparátu a bez střídání kolegů.
          </p>
          <div className="ak-hero-actions">
            <a className="ak-btn" href="tel:+420720288355">Zavolat: 720 288 355</a>
            <a className="ak-btn ak-btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
          <dl className="ak-hero-facts">
            <div>
              <dt>Vždy s Vámi</dt>
              <dd>já osobně, ne koncipient</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Baťkovo nám. 552/2, HK</dd>
            </div>
            <div>
              <dt>Datová schránka</dt>
              <dd>63saikf</dd>
            </div>
          </dl>
        </div>
        <figure className="ak-hero-figure">
          <img
            src="/hero.webp"
            alt="Advokátní kancelář Mgr. Jaroslava Tomana v centru Hradce Králové"
            className="ak-hero-img"
            width={1000}
            height={1200}
          />
          <figcaption className="ak-hero-cap">Kancelář v centru města</figcaption>
        </figure>
      </section>

      <section className="ak-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ak-section-head">
          <p className="ak-eyebrow ak-eyebrow-light">Právní služby</p>
          <h2 id="sluzby-nadpis" className="ak-section-title">
            S čím se na mě lidé v&nbsp;Hradci nejčastěji obracejí
          </h2>
          <p className="ak-section-sub">
            Zaměřuji se na oblasti, kde záleží na detailu smlouvy a na dodržení lhůt.
            U každé věci Vám dopředu řeknu, co bude následovat a kolik to bude stát.
          </p>
        </div>

        <ol className="ak-grid">
          {obory.map((o) => (
            <li className="ak-card" key={o.cislo}>
              <span className="ak-card-num" aria-hidden="true">
                {o.cislo}
              </span>
              <h3 className="ak-card-title">{o.nazev}</h3>
              <p className="ak-card-text">{o.popis}</p>
              <ul className="ak-card-list">
                {o.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="ak-about" id="omne" aria-labelledby="omne-nadpis">
        <figure className="ak-about-figure">
          <img
            src="/section-1.webp"
            alt="Pracovní stůl advokáta se spisy a smlouvami"
            className="ak-about-img"
            width={900}
            height={1000}
          />
        </figure>
        <div className="ak-about-text">
          <p className="ak-eyebrow">O mně</p>
          <h2 id="omne-nadpis" className="ak-section-title">
            Pravá ruka ví, co dělá levá.
          </h2>
          <p className="ak-about-lead">
            V mé kanceláři se Vám po celou dobu věnuji já osobně — nikoli student,
            koncipient nebo pokaždé jiný advokát. V ceně nehradíte náklady velkého
            administrativního aparátu a Vaši věc znám do detailu od první schůzky
            až po její konec.
          </p>
          <p className="ak-about-body">
            Právní službou je u mě právní <strong>pomoc</strong>. Poskytnu ji při řešení
            každodenních problémů i při rozjezdu a rozvoji Vašeho podnikání. Nejčastěji
            pomáhám spotřebitelům, živnostníkům a menším obchodním společnostem.
          </p>

          <figure className="ak-about-second">
            <img
              src="/section-2.webp"
              alt="Detail podpisu smlouvy v advokátní kanceláři"
              width={800}
              height={520}
            />
          </figure>

          <dl className="ak-contact" id="kontakt">
            <div>
              <dt>Telefon</dt>
              <dd>
                <a href="tel:+420720288355">720 288 355</a>
              </dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd>
                <a href="mailto:advokat@ak-toman.cz">advokat@ak-toman.cz</a>
              </dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Baťkovo náměstí 552/2, 500 02 Hradec Králové</dd>
            </div>
            <div>
              <dt>Evidence</dt>
              <dd>IČ 04442083 · ČAK 16558 · DS 63saikf</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
