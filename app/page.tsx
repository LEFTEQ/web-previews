import React from "react";

export default function Page() {
  const readouts = [
    { code: "P0300", label: "Vynechávání zapalování", live: "3 válec" },
    { code: "P0420", label: "Účinnost katalyzátoru", live: "pod limitem" },
    { code: "P0171", label: "Chudá směs", live: "banka 1" },
  ];

  const services = [
    {
      no: "01",
      name: "Kompletní diagnostika před koupí",
      desc: "Přijdete s ojetinou, kterou zvažujete. Vyčteme všechny řídicí jednotky, zkontrolujeme historii chyb, počet stažených nájezdů a stav baterie u elektro. Řekneme vám, co auto tají — než podepíšete kupní smlouvu.",
      price: "od 890 Kč",
      time: "cca 60 min",
    },
    {
      no: "02",
      name: "Čtení a mazání chybových kódů",
      desc: "Svítí kontrolka motoru, airbagu nebo ABS? Napojíme se přes OBD-II, přečteme paměť závad a vysvětlíme, co který kód znamená v řeči, které rozumíte. Bez mazání naslepo — nejdřív příčina.",
      price: "od 390 Kč",
      time: "cca 30 min",
    },
    {
      no: "03",
      name: "Prověrka najetých kilometrů",
      desc: "Porovnáme hodnoty v tachometru, řídicí jednotce motoru, převodovce a klíči. Stočený tachometr pozná náš tester i tam, kde displej ukazuje čísla jako z výroby.",
      price: "od 590 Kč",
      time: "cca 40 min",
    },
    {
      no: "04",
      name: "Měření emisí a stavu DPF",
      desc: "Zkontrolujeme naplnění filtru pevných částic, teploty regenerace a hodnoty lambda sond. Zjistíte, jestli auto projde emisemi na STK dřív, než tam pojedete.",
      price: "od 490 Kč",
      time: "cca 35 min",
    },
  ];

  return (
    <main className="pv">
      <header className="pv-nav" aria-label="Hlavní navigace">
        <a className="pv-brand" href="#" aria-label="AUTO PROVĚRKA Ostrava — domů">
          <span className="pv-brand-dot" aria-hidden="true" />
          <span className="pv-brand-text">
            AUTO&nbsp;PROVĚRKA<span className="pv-brand-city">Ostrava</span>
          </span>
        </a>
        <nav className="pv-nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Proč my</a>
          <a className="pv-nav-cta" href="#objednat">Objednat termín</a>
        </nav>
      </header>

      <section className="pv-hero">
        <div className="pv-hero-grid">
          <div className="pv-hero-copy">
            <p className="pv-eyebrow">
              <span className="pv-eyebrow-live" aria-hidden="true" />
              Diagnostika vozidel · Ostrava-Vítkovice
            </p>
            <h1 className="pv-h1">
              Zjistíme, co vám auto
              <span className="pv-h1-accent"> zatajilo.</span>
            </h1>
            <p className="pv-lede">
              Napojíme se na řídicí jednotky vašeho vozu a přečteme, co se v něm
              opravdu děje — chybové kódy, stočený tachometr, ucpaný filtr,
              vybitou trakční baterii. Než koupíte ojetinu nebo vyrazíte na STK,
              víte přesně, na čem jste.
            </p>
            <div className="pv-hero-actions">
              <a className="pv-btn" href="#objednat">Objednat diagnostiku</a>
              <a className="pv-btn-ghost" href="#sluzby">Co všechno vyčteme</a>
            </div>
          </div>

          <figure className="pv-hero-media">
            <img
              src="/hero.webp"
              alt="Diagnostický tester připojený k OBD-II konektoru vozidla v ostravské dílně"
              className="pv-hero-img"
              width={1200}
              height={900}
            />
            <figcaption className="pv-scan" aria-label="Ukázka živého čtení z řídicí jednotky">
              <span className="pv-scan-head">ŽIVÉ ČTENÍ · OBD-II</span>
              <ul className="pv-scan-list">
                {readouts.map((r) => (
                  <li key={r.code} className="pv-scan-row">
                    <span className="pv-scan-code">{r.code}</span>
                    <span className="pv-scan-label">{r.label}</span>
                    <span className="pv-scan-live">{r.live}</span>
                  </li>
                ))}
              </ul>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="pv-section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="pv-section-head">
          <p className="pv-kicker">Nabídka</p>
          <h2 className="pv-h2" id="sluzby-nadpis">
            Čtyři věci, které za vás přečteme z konektoru
          </h2>
          <p className="pv-section-lede">
            Každé auto od roku 2001 má diagnostickou zásuvku. My víme, kde ji
            najít a jak jí rozumět — u benzínu, dieselu i elektromobilu.
          </p>
        </div>

        <div className="pv-service-media">
          <img
            src="/section-1.webp"
            alt="Technik AUTO PROVĚRKA Ostrava vyčítá data z řídicí jednotky vozidla"
            width={1200}
            height={700}
          />
        </div>

        <ol className="pv-services">
          {services.map((s) => (
            <li key={s.no} className="pv-service">
              <span className="pv-service-no" aria-hidden="true">{s.no}</span>
              <div className="pv-service-body">
                <h3 className="pv-service-name">{s.name}</h3>
                <p className="pv-service-desc">{s.desc}</p>
                <p className="pv-service-meta">
                  <span className="pv-tag">{s.price}</span>
                  <span className="pv-tag pv-tag-time">{s.time}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="pv-section pv-trust" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="pv-trust-grid">
          <div className="pv-trust-copy">
            <p className="pv-kicker">Proč nám lidé věří</p>
            <h2 className="pv-h2" id="duvera-nadpis">
              Řekneme vám i to nepříjemné. Zvlášť to nepříjemné.
            </h2>
            <p className="pv-section-lede">
              Nejsme autobazar ani servis, který má zájem na tom, aby oprava
              vyšla draho. Neprodáváme auta ani díly. Platíte nám za jedno —
              za pravdu o voze černé na bílém, s výtiskem z testeru.
            </p>

            <dl className="pv-facts">
              <div className="pv-fact">
                <dt>Nezávislí na prodejcích</dt>
                <dd>Nemáme provizi z prodeje. Zajímá nás jen skutečný stav vozu.</dd>
              </div>
              <div className="pv-fact">
                <dt>Výtisk protokolu ke každé prověrce</dt>
                <dd>Odjíždíte s tištěným záznamem závad — podklad při vyjednávání o ceně.</dd>
              </div>
              <div className="pv-fact">
                <dt>Přijedeme i k autu</dt>
                <dd>Ojetinu prohlédneme i u prodávajícího po Ostravě a okolí.</dd>
              </div>
            </dl>
          </div>

          <figure className="pv-trust-media">
            <img
              src="/section-2.webp"
              alt="Tištěný protokol z diagnostiky vozidla s přehledem chybových kódů"
              width={900}
              height={1100}
            />
            <figcaption className="pv-quote">
              <blockquote>
                „Bazar tvrdil 120 tisíc najeto. Řídicí jednotka ukázala přes
                220. Ušetřili mi den, který bych propálil u notáře.“
              </blockquote>
              <cite>— Radek H., kupoval Octavii, Ostrava-Poruba</cite>
            </figcaption>
          </figure>
        </div>

        <div className="pv-where" id="objednat">
          <div>
            <p className="pv-kicker">Kde nás najdete</p>
            <p className="pv-where-line">
              Dílna v Ostravě-Vítkovicích, pár minut od výjezdu z D1. Termín si
              domluvte předem — diagnostiku děláme na objednávku, bez fronty.
            </p>
          </div>
          <a className="pv-btn" href="#objednat">Domluvit termín</a>
        </div>
      </section>
    </main>
  );
}
