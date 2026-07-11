import React from "react";

const zapasy = [
  {
    kolo: "Titul",
    domaci: "SSC Bolevec",
    hoste: "TJ Sokol Raková",
    skore: "6:1",
    hlaska: "Rozlučka Pelnyho hattrickem — a pohár za postup do 6. ligy.",
    strelci: "Pelnář 3×, Wood, Šedivec, Poliščuk",
  },
  {
    kolo: "Venku",
    domaci: "Senco Doubravka B",
    hoste: "SSC Bolevec",
    skore: "1:1",
    hlaska: "Poslední zápas sezóny. Trnka srovnal v 72. minutě.",
    strelci: "Trnka",
  },
  {
    kolo: "Dorost",
    domaci: "SSC Bolevec",
    hoste: "Slovan / VS Plzeň",
    skore: "5:4",
    hlaska: "Starší dorost otočil zápas na přírodní trávě na Vodních stavbách.",
    strelci: "Trnka 2×, Mottl, Šťastný, Vyzrál",
  },
];

const kategorie = [
  {
    cislo: "01",
    nazev: "„A“ tým",
    rocnik: "Muži",
    popis:
      "Mistři 7. ligy a čerství nováčci 6. ligy. Domácí zápasy hrajeme na Prokopávce, tréninky v týdnu.",
  },
  {
    cislo: "02",
    nazev: "Dorost",
    rocnik: "15–19 let",
    popis:
      "Starší i mladší dorost. Kluci, kteří už nakukují mezi muže — Trnka, Šroub, Korelus si zahráli za áčko.",
  },
  {
    cislo: "03",
    nazev: "Starší žáci",
    rocnik: "12–15 let",
    popis:
      "Dva týmy A i B. Poslední kolo: Zruč 7:2, Union 3:0. Hraje se naplno až do posledního hvizdu.",
  },
  {
    cislo: "04",
    nazev: "Mladší žáci",
    rocnik: "9–12 let",
    popis:
      "Věk, kdy se z kopání do balónu stává fotbal. Zápasy A i B týmu, derby i remízy s Letnou.",
  },
  {
    cislo: "05",
    nazev: "Starší přípravka",
    rocnik: "7–9 let",
    popis:
      "První dresy, první branky, první radost z gólu. Trénink hrou, žádné dřiny na výsledek.",
  },
  {
    cislo: "06",
    nazev: "Mladší přípravka",
    rocnik: "5–7 let",
    popis:
      "Nábor otevřený celoročně. Stačí přijít, tenisky a chuť běhat za balónem. Zbytek zařídíme my.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SSC Bolevec, domovská stránka">
          <span className="wordmark__crest" aria-hidden="true">
            <span className="wordmark__year">1921</span>
          </span>
          <span className="wordmark__text">
            <span className="wordmark__ssc">SSC</span>
            <span className="wordmark__name">Bolevec</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#tymy">Týmy</a>
          <a href="#klub">O klubu</a>
          <a href="#nabor" className="topnav__cta">Přijít na nábor</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Fotbalisté SSC Bolevec při domácím zápase na hřišti na Prokopávce v Plzni"
            className="hero__img"
            width={1600}
            height={1000}
          />
          <span className="hero__scarf" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">
            <span className="dot" aria-hidden="true" /> Fotbalový klub · Plzeň-Bolevec · od roku 1921
          </p>
          <h1 className="hero__title">
            Bílá,<br />
            černá<br />
            <span className="hero__title-em">a 6. liga.</span>
          </h1>
          <p className="hero__lead">
            Áčko vykopalo titul a postup, ultras „Black &amp; White Fanatics“ chystali
            choreo a děti z přípravky měly vlastní branku. Tohle je Bolevec —
            klub, kde se fotbal dědí z otce na syna.
          </p>
          <div className="hero__actions">
            <a href="#nabor" className="btn btn--primary">Přihlásit dítě na nábor</a>
            <a href="#tymy" className="btn btn--ghost">Naše týmy</a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>Založeno</dt>
              <dd>1921</dd>
            </div>
            <div>
              <dt>Družstev</dt>
              <dd>6</dd>
            </div>
            <div>
              <dt>Nová soutěž</dt>
              <dd>6. liga</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="tymy" id="tymy" aria-labelledby="tymy-h">
        <div className="section-head">
          <p className="eyebrow">Od pěti let po muže</p>
          <h2 id="tymy-h">Šest družstev, jeden dres</h2>
          <p className="section-lead">
            U nás dítě neskončí na lavičce. Každou kategorii vede vlastní trenér,
            hraje se okresní i krajská soutěž a přechod mezi věky je plynulý — od
            mladší přípravky až po áčko v 6. lize.
          </p>
        </div>

        <ol className="teams">
          {kategorie.map((k) => (
            <li className="team" key={k.cislo}>
              <span className="team__num" aria-hidden="true">{k.cislo}</span>
              <div className="team__body">
                <h3 className="team__name">{k.nazev}</h3>
                <span className="team__age">{k.rocnik}</span>
                <p className="team__desc">{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="teams__figure">
          <img
            src="/section-1.webp"
            alt="Mladí hráči SSC Bolevec na tréninku"
            width={1400}
            height={900}
          />
          <figcaption>
            Nábor máme otevřený celoročně. Přijďte se podívat na trénink — nezávazně,
            klidně jen okouknout.
          </figcaption>
        </figure>
      </section>

      <section className="klub" id="klub" aria-labelledby="klub-h">
        <div className="klub__grid">
          <div className="klub__text">
            <p className="eyebrow eyebrow--light">Sezóna, na kterou se nezapomíná</p>
            <h2 id="klub-h">
              V sobotu jsme zvedali pohár. V pátek dohrávali sezónu.
            </h2>
            <p className="klub__lead">
              Áčko získalo mistrovský titul v 7. lize a postoupilo do 6. ligy.
              Michal Pelnář se rozloučil hattrickem, „patnáctka“ dostala choreo
              od ultras. Pak přišlo šampaňské, fotky a oslavy do noci. A hned poté
              se pokorně dohrával poslední zápas venku. Tak se to u nás dělá.
            </p>

            <ul className="matches">
              {zapasy.map((z, i) => (
                <li className="match" key={i}>
                  <div className="match__tag">{z.kolo}</div>
                  <div className="match__row">
                    <span className="match__team">{z.domaci}</span>
                    <span className="match__score">{z.skore}</span>
                    <span className="match__team match__team--away">{z.hoste}</span>
                  </div>
                  <p className="match__note">{z.hlaska}</p>
                  <p className="match__scorers">
                    <span aria-hidden="true">⚽ </span>{z.strelci}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <figure className="klub__figure" id="nabor">
            <img
              src="/section-2.webp"
              alt="Oslavy postupu SSC Bolevec s pohárem"
              width={1200}
              height={1500}
            />
            <figcaption className="klub__card">
              <p className="klub__card-k">Kde nás najdete</p>
              <p className="klub__card-v">Hřiště na Prokopávce, Plzeň-Bolevec</p>
              <p className="klub__card-note">
                Domácí zápasy, tréninky všech kategorií i nábor nováčků.
              </p>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
