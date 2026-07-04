import React from "react";

export default function Page() {
  const materials = [
    {
      no: "Nm 40/2",
      name: "Polyesterová šicí nit",
      spec: "z polyesterové střiže",
      use: "Oděvy, lůžkoviny, bytový textil — pevný, stálobarevný steh.",
    },
    {
      no: "Nm 20/3",
      name: "Silná nit na potahy",
      spec: "vysoká pevnost v tahu",
      use: "Matrace, automobilové potahy, kožená galanterie a boty.",
    },
    {
      no: "ø 2–8 mm",
      name: "Oděvní a technické šňůry",
      spec: "kulaté i ploché",
      use: "Kapuce, mikiny, sportovní a bytový textil.",
    },
  ];

  const trust = [
    {
      k: "1993",
      v: "Vyrábíme šicí nitě už od založení firmy — přes tři desetiletí zkušeností.",
    },
    {
      k: "OEKO-TEX®",
      v: "Certifikát STANDARD 100 zašleme na vyžádání. Surovina od předních výrobců splňuje evropské normy.",
    },
    {
      k: "do 24 hod",
      v: "Sortiment z katalogu máme skladem, expedujeme přepravní společností obvykle do druhého dne.",
    },
    {
      k: "Pantone",
      v: "Vyrábíme na zakázku v barevnosti dle zaslaného vzoru nebo vzorkovnice Pantone.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="HAGAL — výroba šicích nití, Liberec">
          <span className="wordmark__thread" aria-hidden="true" />
          <span className="wordmark__name">HAGAL</span>
          <span className="wordmark__tag">nitě &amp; šňůry · Liberec</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#firma">O výrobě</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Výroba šicích nití &amp; oděvních šňůr od 1993</p>
          <h1 id="hero-title">
            Nit, která<br />
            <span className="hero__accent">drží steh</span><br />
            i&nbsp;barvu.
          </h1>
          <p className="hero__lede">
            V Liberci navíjíme polyesterové šicí nitě a oděvní šňůry pro výrobce
            oděvů, matrací, lůžkovin i automobilových potahů. Katalog skladem,
            odstíny na míru podle Pantone.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="#sortiment">Prohlédnout sortiment</a>
            <a className="btn btn--ghost" href="#firma">Vyžádat vzorkovnici</a>
          </div>
        </div>
        <figure className="hero__media">
          <img
            src="/hero.webp"
            alt="Cívky barevných polyesterových šicích nití z výroby HAGAL"
            className="hero__img"
            width={880}
            height={880}
            loading="eager"
          />
          <figcaption className="hero__spool">
            <span>Nm 40/2</span>
            <span>polyesterová střiž</span>
          </figcaption>
        </figure>
      </section>

      <section id="sortiment" className="sortiment" aria-labelledby="sortiment-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co navíjíme</p>
          <h2 id="sortiment-title">Sortiment podle jemnosti a použití</h2>
          <p className="section-head__note">
            Nit značíme metrickým číslem (Nm) — čím vyšší číslo, tím jemnější nit.
            Kromě katalogu vyrábíme i na zakázku.
          </p>
        </div>

        <ul className="cards">
          {materials.map((m) => (
            <li className="card" key={m.name}>
              <span className="card__no">{m.no}</span>
              <h3 className="card__name">{m.name}</h3>
              <p className="card__spec">{m.spec}</p>
              <p className="card__use">{m.use}</p>
            </li>
          ))}
        </ul>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Detail navíjení šicích nití na cívky ve výrobě HAGAL v Liberci"
            width={1200}
            height={640}
            loading="lazy"
          />
        </figure>
      </section>

      <section id="firma" className="firma" aria-labelledby="firma-title">
        <figure className="firma__media">
          <img
            src="/section-2.webp"
            alt="Kontrola kvality vyrobených nití v laboratoři HAGAL"
            width={900}
            height={1000}
            loading="lazy"
          />
        </figure>
        <div className="firma__copy">
          <p className="eyebrow eyebrow--dark">O výrobě</p>
          <h2 id="firma-title">
            Od kvalitní suroviny po laboratorní kontrolu každé šarže.
          </h2>
          <p className="firma__text">
            Surovinu nakupujeme od předních výrobců a hlídáme, aby splňovala
            vstupní standardy dle evropských norem. Výroba je plně automatizovaná
            a v jednotlivých fázích ji provází laboratorní kontrola kvality.
            Naší předností je individuální přístup ke každému zákazníkovi.
          </p>
          <dl className="facts">
            {trust.map((t) => (
              <div className="fact" key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
          <p className="firma__foot">
            Dodáváme výrobcům oděvů, matrací, lůžkovin, bytového textilu,
            automobilových potahů, kožené galanterie i&nbsp;prodejnám textilu
            a&nbsp;galanterie.
          </p>
        </div>
      </section>
    </main>
  );
}
