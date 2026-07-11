import React from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "§ 01",
      nazev: "Daňová přiznání a garance",
      popis:
        "Zpracujeme přiznání ke všem daním, podáme je elektronicky správci daně a ručíme za jejich obsah. K tomu pravidelný servis u přímých i nepřímých daní po celý rok — ne jen v březnu.",
      pro: "přímé i nepřímé daně"
    },
    {
      cislo: "§ 02",
      nazev: "Účetnictví a controlling",
      popis:
        "Vedeme daňovou evidenci, jednoduché i podvojné účetnictví pro fyzické i právnické osoby. Postaráme se o mzdy, personální agendu i přehledy pro pojišťovny a úřady.",
      pro: "OSVČ i s.r.o."
    },
    {
      cislo: "§ 03",
      nazev: "Fúze a akvizice",
      popis:
        "Daňové a účetní posouzení sloučení, splynutí i rozdělení společností, převodu jmění, změny právní formy nebo prodeje podniku a obchodního podílu. Provedeme vás celou transakcí.",
      pro: "transakce a přeměny"
    },
    {
      cislo: "§ 04",
      nazev: "Neziskový a veřejný sektor",
      popis:
        "Komplexní poradenství pro obce, příspěvkové organizace i spolky. Přiznání k dani z příjmů veřejně prospěšných poplatníků řešíme se specifickými optimalizačními nástroji.",
      pro: "obce a organizace"
    }
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Daňové poradenství Tomáš Paclík — úvod">
          <span className="wordmark__sign">§</span>
          <span className="wordmark__text">
            <span className="wordmark__name">Paclík</span>
            <span className="wordmark__sub">daňové poradenství · Olomouc</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="topnav__phone" href="tel:+420583401980">+420 583 401 980</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__text">
            <p className="hero__eyebrow">Daňový poradce ve střední Moravě od roku 1992</p>
            <h1 id="hero-title" className="hero__title">
              Daně<br />bez<br /><span className="hero__title-accent">překvapení.</span>
            </h1>
            <p className="hero__lead">
              Přiznání zpracujeme, podáme za vás elektronicky a ručíme za jejich
              obsah. Ke každému klientovi v Olomouci, Zábřehu i Šumperku
              přistupujeme individuálně — podle toho, jak pracujete a komunikujete.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420583401980">Zavolat poradci</a>
              <a className="btn btn--ghost" href="mailto:posta@tomaspaclik.cz">Napsat e‑mail</a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>V oboru od</dt>
                <dd>1992</dd>
              </div>
              <div>
                <dt>Zapsáni v Komoře DP ČR od</dt>
                <dd>2009</dd>
              </div>
              <div>
                <dt>Pobočky</dt>
                <dd>Olomouc · Zábřeh · Šumperk</dd>
              </div>
            </dl>
          </div>
          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Kancelář daňového poradce Tomáše Paclíka v Olomouci"
              className="hero__img"
            />
            <figcaption className="hero__stamp">
              <span className="hero__stamp-line">Jeremenkova 1211/40b</span>
              <span className="hero__stamp-line">779 00 Olomouc</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-head__eyebrow">Nabídka služeb</p>
          <h2 id="services-title" className="section-head__title">
            Čtyři oblasti, jeden zodpovědný poradce
          </h2>
          <p className="section-head__note">
            K daňové problematice přistupujeme komplexně — ne jen z pohledu
            účetnictví, ale i firemních financí a ekonomického rozhodování.
          </p>
        </div>
        <ol className="services__list">
          {sluzby.map((s) => (
            <li className="card" key={s.cislo}>
              <div className="card__top">
                <span className="card__num">{s.cislo}</span>
                <span className="card__tag">{s.pro}</span>
              </div>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="onas" aria-labelledby="about-title">
        <div className="about__grid">
          <figure className="about__media">
            <img
              src="/section-1.webp"
              alt="Tým daňových poradců při práci nad podklady klienta"
              className="about__img"
            />
          </figure>
          <div className="about__text">
            <p className="section-head__eyebrow">O nás</p>
            <h2 id="about-title" className="section-head__title">
              Výsadní postavení ve střední Moravě
            </h2>
            <p>
              Služby daňového, účetního a ekonomického poradenství poskytujeme
              podnikatelům i neziskovým organizacím na celém území České republiky.
              Od 1. 1. 2005 pod hlavičkou <strong>Daňové poradenství Tomáš Paclík, a.s.</strong>,
              od roku 2009 zapsáni v seznamu právnických osob Komory daňových
              poradců ČR.
            </p>
            <p>
              Filozofie firmy je v určitých ohledech odlišná. Ke každému klientovi
              volíme individuální přístup, který zohledňuje jeho styl práce
              i vnitrofiremní způsob komunikace.
            </p>
            <ul className="about__points">
              <li>Garance za obsah podaných přiznání</li>
              <li>Systém daní řešíme z pohledu firemních financí</li>
              <li>Osobně dostupní na třech pobočkách kraje</li>
            </ul>
          </div>
        </div>

        <div className="branches">
          <figure className="branches__media">
            <img
              src="/section-2.webp"
              alt="Historická budova v centru Olomouce, kde firma působí"
              className="branches__img"
            />
          </figure>
          <div className="branches__list">
            <h3 className="branches__title">Kde nás najdete</h3>
            <address className="branch">
              <span className="branch__city">Olomouc</span>
              <span className="branch__addr">Jeremenkova 1211/40b, 779 00</span>
            </address>
            <address className="branch">
              <span className="branch__city">Zábřeh</span>
              <span className="branch__addr">Pobočka pro Šumperecko a okolí</span>
            </address>
            <address className="branch">
              <span className="branch__city">Šumperk</span>
              <span className="branch__addr">Pobočka pro sever regionu</span>
            </address>
            <a className="btn btn--primary branches__cta" href="tel:+420583401980">
              Domluvit konzultaci
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
