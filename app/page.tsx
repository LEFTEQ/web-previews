import React from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Fasády a zateplení",
      img: "/section-1.webp",
      alt: "Zateplená fasáda rodinného domu realizovaná firmou STAVREKO v Hradci Králové",
      popis:
        "Systémové zateplení sníží tepelné ztráty obvodovou stěnou o více než 50 % a ztlumí hluk z ulice. Navrhneme skladbu, vybereme omítku a odvedeme čistou práci — od lešení po finální strukturu.",
      detaily: ["Kontaktní zateplení ETICS", "Silikonové a silikátové omítky", "Sanace a nátěry starých fasád"],
    },
    {
      kod: "02",
      nazev: "Rekonstrukce",
      img: "/section-2.webp",
      alt: "Rekonstrukce interiéru a jádra bytu v realizaci STAVREKO",
      popis:
        "Všechna řemesla objednáte na jednom místě. Za zedníky, elektrikáře i obkladače ručíme my a hlídáme, aby na sebe práce navazovaly. Vy řešíte jednoho člověka, ne deset firem.",
      detaily: ["Bytová jádra a koupelny", "Kompletní rekonstrukce bytů a domů", "Koordinace všech profesí"],
    },
  ];

  const cisla = [
    { hodnota: "30", jednotka: "let", popis: "praxe v hradeckém stavebnictví" },
    { hodnota: "400+", jednotka: "zakázek", popis: "dokončených fasád a rekonstrukcí" },
    { hodnota: "POROTHERM", jednotka: "HELUZ · YTONG", popis: "cihlové systémy pro stavby na klíč" },
  ];

  return (
    <main className="sr-page">
      <header className="sr-nav">
        <a className="sr-logo" href="#" aria-label="STAVREKO, stavební firma Hradec Králové">
          <span className="sr-logo-mark" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="sr-logo-word">STAV<b>REKO</b></span>
        </a>
        <nav className="sr-nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Fasády</a>
          <a href="#sluzby">Rekonstrukce</a>
          <a href="#stavby">Stavby na klíč</a>
        </nav>
        <a className="sr-nav-phone" href="tel:+420602644388">
          <span aria-hidden="true">→</span> +420 602 644 388
        </a>
      </header>

      <section className="sr-hero">
        <img className="sr-hero-img" src="/hero.webp" alt="Realizace stavby a fasády firmou STAVREKO v Hradci Králové" />
        <div className="sr-hero-scrim" aria-hidden="true" />
        <div className="sr-hero-inner">
          <p className="sr-eyebrow">Stavební firma · Hradec Králové · od roku 1994</p>
          <h1 className="sr-hero-title">
            Postavíme, zateplíme<br />a předáme <em>hotové</em>.
          </h1>
          <p className="sr-hero-lead">
            Fasády, rekonstrukce a domy na klíč z cihlových systémů POROTHERM, HELUZ a YTONG. Všechna
            řemesla od jedné firmy — s ručením za výsledek a bez papírové války mezi řemeslníky.
          </p>
          <div className="sr-hero-cta">
            <a className="sr-btn sr-btn-primary" href="tel:+420602644388">Zavolat na 602 644 388</a>
            <a className="sr-btn sr-btn-ghost" href="#sluzby">Co stavíme</a>
          </div>
        </div>
        <div className="sr-hero-ledger" aria-hidden="true">
          <span>50°12′ N · 15°50′ E</span>
          <span>Plotišťská 19/1, HK</span>
        </div>
      </section>

      <section className="sr-services" id="sluzby">
        <div className="sr-sec-head">
          <p className="sr-eyebrow">Co pro vás uděláme</p>
          <h2 className="sr-sec-title">Dvě věci, které umíme na milimetr.</h2>
        </div>
        <div className="sr-service-list">
          {sluzby.map((s) => (
            <article className="sr-service" key={s.kod}>
              <div className="sr-service-media">
                <img src={s.img} alt={s.alt} loading="lazy" />
                <span className="sr-service-kod" aria-hidden="true">{s.kod}</span>
              </div>
              <div className="sr-service-body">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
                <ul>
                  {s.detaily.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="sr-trust" id="stavby">
        <div className="sr-trust-grid">
          <div className="sr-trust-text">
            <p className="sr-eyebrow sr-eyebrow-dark">Stavby na klíč · O firmě</p>
            <h2 className="sr-trust-title">Jeden dodavatel, jedno ručení, jeden termín.</h2>
            <p className="sr-trust-lead">
              Rodinné a bytové domy stavíme podle vašeho projektu, nebo vám ho necháme zpracovat na
              míru. Zadáte zakázku nám a máte všechny profese pod jednou střechou — zedníky, střechu,
              instalace i finální fasádu. My hlídáme návaznost, vy sledujete, jak dům roste.
            </p>
            <p className="sr-trust-note">
              Sídlíme na Plotišťské v Hradci Králové a stavíme po celém Královéhradeckém kraji. Přijedeme,
              obhlédneme pozemek a řekneme rovnou, do čeho jdete.
            </p>
          </div>
          <ul className="sr-trust-numbers">
            {cisla.map((c) => (
              <li key={c.hodnota}>
                <span className="sr-num-value">{c.hodnota}</span>
                <span className="sr-num-unit">{c.jednotka}</span>
                <span className="sr-num-desc">{c.popis}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
