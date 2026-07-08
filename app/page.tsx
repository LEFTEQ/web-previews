import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "D",
      nadpis: "Demolice objektů",
      popis:
        "Bouráme strojně i ručně — od drážního domku po průmyslovou halu. Kompletní demolice, nebo jen vybourání a vyčištění vnitřku, když má zůstat skelet.",
      hmotnost: "11 000 t",
      hmotnostLabel: "bytový dům, sneseno bez okolní škody",
    },
    {
      kod: "R",
      nadpis: "Recyklace na místě",
      popis:
        "Suť nekončí na skládce. Beton a cihlu předrtíme přímo na stavbě k dalšímu použití — zbytek odvezeme a ekologicky uložíme.",
      hmotnost: "100 %",
      hmotnostLabel: "materiálu roztříděno a doloženo",
    },
    {
      kod: "S",
      nadpis: "Stavební a zemní práce",
      popis:
        "Když je plocha srovnaná, umíme na ni i stavět. Přípravné, zemní i stavební práce v návaznosti na demolici — jeden dodavatel od začátku do konce.",
      hmotnost: "20+ let",
      hmotnostLabel: "na stavbách po celém kraji",
    },
    {
      kod: "P",
      nadpis: "Půjčovna strojů s obsluhou",
      popis:
        "Bagr, demoliční nůžky, hydraulické kladivo — a k tomu operátora, který s nimi umí. Nasadíme techniku i na váš vlastní projekt.",
      hmotnost: "s obsluhou",
      hmotnostLabel: "stroj přijede připravený k práci",
    },
  ];

  const reference = [
    { misto: "Hradec Králové", akce: "Fotbalová tribuna", typ: "Bourací práce" },
    { misto: "Pardubice", akce: "Zimní stadion Dynamo", typ: "Bourání zpevněné plochy + likvidace" },
    { misto: "Vrchlabí", akce: "Sklady nádraží", typ: "Demolice" },
    { misto: "Špindlerův mlýn", akce: "Objekty + zemní práce", typ: "Demolice" },
    { misto: "Choceň", akce: "Drážní objekt", typ: "Demolice u koridoru" },
    { misto: "Svitavy", akce: "Rehabilitační budova nemocnice", typ: "Bourací + zemní práce" },
  ];

  return (
    <main className="rg">
      <header className="rg-top">
        <a className="rg-brand" href="#" aria-label="RENEGADE CR — demoliční práce Hradec Králové">
          <span className="rg-brand-mark" aria-hidden="true">▚</span>
          <span className="rg-brand-word">RENEGADE<span className="rg-brand-cr">CR</span></span>
        </a>
        <nav className="rg-nav" aria-label="Hlavní">
          <a href="#sluzby">Co bouráme</a>
          <a href="#reference">Reference</a>
          <a className="rg-nav-call" href="tel:+420776490847">776&nbsp;490&nbsp;847</a>
        </nav>
      </header>

      <section className="rg-hero" aria-labelledby="rg-hero-h">
        <img
          className="rg-hero-img"
          src="/hero.webp"
          alt="Bagr s demoličními nůžkami rozebírá betonovou konstrukci na stavbě"
          loading="eager"
        />
        <div className="rg-hero-scrim" aria-hidden="true" />
        <div className="rg-hero-inner">
          <p className="rg-eyebrow">Demoliční čety · Hradec Králové · od roku 2003</p>
          <h1 id="rg-hero-h" className="rg-hero-h">
            Rozebereme to,
            <br />
            co už dosloužilo.
            <span className="rg-hero-strike" aria-hidden="true" />
          </h1>
          <p className="rg-hero-sub">
            Drážní domek, panelák i průmyslová hala. Bouráme strojně i ručně,
            suť roztřídíme a odvezeme — a plochu vám předáme připravenou pro další stavbu.
          </p>
          <div className="rg-hero-cta">
            <a className="rg-btn" href="tel:+420776490847">Zavolat na stavbu</a>
            <a className="rg-btn rg-btn-ghost" href="#sluzby">Co umíme zbourat</a>
          </div>
        </div>
        <div className="rg-hero-tape" aria-hidden="true">
          <span>POZOR — PROBÍHÁ DEMOLICE</span>
          <span>POZOR — PROBÍHÁ DEMOLICE</span>
          <span>POZOR — PROBÍHÁ DEMOLICE</span>
          <span>POZOR — PROBÍHÁ DEMOLICE</span>
        </div>
      </section>

      <section id="sluzby" className="rg-sec rg-sluzby" aria-labelledby="rg-sluzby-h">
        <div className="rg-sec-head">
          <p className="rg-eyebrow rg-eyebrow-dark">Čtyři věci, které umíme naplno</p>
          <h2 id="rg-sluzby-h" className="rg-sec-h">
            Od prvního úderu kladiva<br />po srovnanou plochu
          </h2>
        </div>

        <div className="rg-sluzby-media">
          <img
            src="/section-1.webp"
            alt="Demolice zděné budovy — část stavby už je rozebraná, zbytek čeká na dokončení"
            loading="lazy"
          />
        </div>

        <ol className="rg-cards">
          {sluzby.map((s) => (
            <li key={s.kod} className="rg-card">
              <span className="rg-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="rg-card-h">{s.nadpis}</h3>
              <p className="rg-card-p">{s.popis}</p>
              <p className="rg-card-num">
                <span className="rg-card-num-big">{s.hmotnost}</span>
                <span className="rg-card-num-lab">{s.hmotnostLabel}</span>
              </p>
            </li>
          ))}
        </ol>
      </section>

      <section id="reference" className="rg-sec rg-onas" aria-labelledby="rg-onas-h">
        <div className="rg-onas-grid">
          <div className="rg-onas-text">
            <p className="rg-eyebrow">Kdo to bourá</p>
            <h2 id="rg-onas-h" className="rg-sec-h rg-sec-h-light">
              Dvacet let a žádná<br />budova nás nezaskočila
            </h2>
            <p className="rg-onas-p">
              Firmu jsme založili v roce 2003 a od roku 2007 se soustředíme hlavně
              na bourání a demolice všeho druhu. Malé, střední i velké objekty —
              rodinný dům, sokolovna, průmyslová hala i bytový dům o hmotnosti 11&nbsp;000
              tun. Poradíme si s kompletní demolicí i s citlivým vybouráním, kdy má
              zůstat zachovaný skelet.
            </p>
            <p className="rg-onas-p">
              Ekologická likvidace materiálu je samozřejmost — odvoz, uložení, nebo
              předrcení k dalšímu použití. Na demolici umíme navázat i stavebními
              a přípravnými pracemi.
            </p>
            <a className="rg-btn" href="tel:+420776490847">Domluvit prohlídku stavby</a>
          </div>

          <div className="rg-onas-media">
            <img
              src="/section-2.webp"
              alt="Rozebraná průmyslová konstrukce připravená k odvozu a recyklaci"
              loading="lazy"
            />
          </div>
        </div>

        <ul className="rg-refs" aria-label="Vybrané realizace">
          {reference.map((r, i) => (
            <li key={i} className="rg-ref">
              <span className="rg-ref-misto">{r.misto}</span>
              <span className="rg-ref-akce">{r.akce}</span>
              <span className="rg-ref-typ">{r.typ}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
