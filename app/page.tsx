import React from "react";

export default function Page() {
  return (
    <main className="ptz">
      {/* HERO */}
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#" aria-label="Petlach TZB — domů">
          <span className="wordmark__air" aria-hidden="true">≋</span>
          <span className="wordmark__name">Petlach<span className="wordmark__thin">TZB</span></span>
        </a>
        <nav className="nav__links">
          <a href="#navrhy">Co navrhujeme</a>
          <a href="#stopy">Naše stopy</a>
          <a href="#obor">Péče o obor</a>
          <a className="nav__phone" href="tel:+420251552025">+420 251 552 025</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Projekce vzduchotechniky &amp; TZB · Praha · od 1991</p>
            <h1 id="hero-title">
              Vzduch, který<br />
              v budově<br />
              <span className="hl">nikdo nevnímá</span>.
            </h1>
            <p className="hero__lede">
              Navrhujeme vytápění, chlazení a vzduchotechniku pro budovy, kde na
              vnitřním prostředí opravdu záleží — od kanceláří Senátu po nemocnice
              a muzea. Tichý, úsporný provoz začíná dobrým projektem.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="#poptavka">Nezávazná poptávka</a>
              <a className="btn btn--ghost" href="#navrhy">Co pro vás vyřešíme</a>
            </div>
            <dl className="hero__facts">
              <div><dt>Od</dt><dd>1991</dd></div>
              <div><dt>Sídlo</dt><dd>Na Zlíchově 18, Praha 5</dd></div>
              <div><dt>Zaměření</dt><dd>Vnitřní prostředí staveb</dd></div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Vzduchotechnické rozvody a strojovna — realizace projektu Petlach TZB"
              width={900}
              height={1100}
              loading="eager"
            />
            <figcaption>Strojovna VZT — kde se projekt potkává s realitou.</figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 1 — CO NAVRHUJEME */}
      <section className="svc" id="navrhy" aria-labelledby="svc-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Tři věci, které řešíme</p>
          <h2 id="svc-title">Od koncepce úsporné budovy k tichému a spolehlivému provozu</h2>
        </div>

        <ol className="svc__list">
          <li className="svc__item">
            <span className="svc__air" aria-hidden="true">≋ 01</span>
            <h3>Koncepce energeticky úsporné budovy</h3>
            <p>
              Než se kreslí první potrubí, stanovíme, jak bude budova hospodařit
              s energií — a jak využít odpadní teplo z jejího provozu. Vysoký
              standard vnitřního prostředí, který přitom neprostaví rozpočet.
            </p>
          </li>
          <li className="svc__item">
            <span className="svc__air" aria-hidden="true">≋ 02</span>
            <h3>Projekce vytápění, chlazení, klimatizace a VZT</h3>
            <p>
              Kompletní projektová dokumentace techniky prostředí — vytápění,
              chlazení, klimatizace a vzduchotechnika. Respektujeme stavebně-
              architektonické řešení i to, kolik na stavbu skutečně je.
            </p>
          </li>
          <li className="svc__item">
            <span className="svc__air" aria-hidden="true">≋ 03</span>
            <h3>Analýza provozu systémů TZB</h3>
            <p>
              U stojících budov změříme, kde se plýtvá a proč je někde příliš teplo
              nebo dusno. Výstupem je konkrétní návrh úprav, ne obecná zpráva do
              šuplíku.
            </p>
          </li>
        </ol>

        <figure className="svc__wide">
          <img
            src="/section-1.webp"
            alt="Detail vzduchotechnického potrubí a technologie v budově"
            width={1400}
            height={720}
            loading="lazy"
          />
          <figcaption>
            <strong>Naše filosofie.</strong> Nejdřív se důkladně seznámíme se stavbou,
            pak navrhneme prostředí s možností individuálního přístupu — a hlídáme,
            aby řešení sedělo do architektury i do rozpočtu.
          </figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — NAŠE STOPY / REFERENCE + PÉČE O OBOR */}
      <section className="ref" id="stopy" aria-labelledby="ref-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Naše stopy od roku 1991</p>
          <h2 id="ref-title">Budovy, kde náš vzduch dýchá dodnes</h2>
          <p className="ref__lede">
            Přes tři desítky let projektujeme prostředí pro objekty, u kterých se
            chyba neodpouští. Několik z nich:
          </p>
        </div>

        <ul className="ref__list">
          <li className="ref__card">
            <span className="ref__tag">Administrativa</span>
            <h3>Kanceláře Senátu Parlamentu ČR</h3>
            <p>Feldovský dům — větrání jídelny a výměna zdroje chladu pro VZT jednotku.</p>
          </li>
          <li className="ref__card ref__card--top">
            <span className="ref__tag">Nemocnice · TOP</span>
            <h3>New Hospitals Ltd., Tbilisi (Gruzie)</h3>
            <p>Projektová dokumentace pro dostavbu nemocnice — technika prostředí pro provoz 24/7.</p>
          </li>
          <li className="ref__card">
            <span className="ref__tag">Kultura</span>
            <h3>Arcidiecézní muzeum Olomouc</h3>
            <p>Muzeum evropského významu — stabilní klima pro sbírky i pro návštěvníky.</p>
          </li>
          <li className="ref__card">
            <span className="ref__tag">Administrativa · Obchod</span>
            <h3>Václavské náměstí 21, Praha 1 — OD Družba</h3>
            <p>Polyfunkční objekt v centru Prahy — obchod i kanceláře pod jednou technikou.</p>
          </li>
        </ul>

        <div className="obor" id="obor">
          <figure className="obor__media">
            <img
              src="/section-2.webp"
              alt="Technická místnost s prvky vytápění, chlazení a vzduchotechniky"
              width={720}
              height={620}
              loading="lazy"
            />
          </figure>
          <div className="obor__copy">
            <p className="eyebrow eyebrow--dark">Péče o obor</p>
            <h3>Zkušenosti nedržíme pro sebe</h3>
            <p>
              Jsme profesní kancelář zaměřená na vnitřní prostředí staveb — a
              záleží nám na tom, aby obor rostl. Spolupracujeme s ČVUT (Ústav
              techniky prostředí FS a Katedra TZB FSv), publikujeme v odborných
              časopisech, přednášíme na kurzech i školách a působíme v oborových
              organizacích.
            </p>
            <ul className="obor__pills">
              <li>Publikační činnost</li>
              <li>Přednášky</li>
              <li>Spolupráce s ČVUT</li>
              <li>Oborové organizace</li>
            </ul>
            <p className="obor__contact">
              <a href="mailto:firma@petlach.cz">firma@petlach.cz</a>
              <span aria-hidden="true"> · </span>
              <a href="tel:+420251552025">+420 251 552 025</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
