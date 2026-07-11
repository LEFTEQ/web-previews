import React from "react";

const services = [
  {
    tag: "Firmy",
    title: "Teambuilding, konference, večírky",
    body: "Dostaneme vaše lidi na místo srovnaně a včas — od ranního svozu na konferenci po odvoz z vánočního večírku, kdy už nikdo nechce řešit taxíky.",
  },
  {
    tag: "Školy",
    title: "Třída, ročník i celá škola",
    body: "Jeden autobus nebo pět — kolik dětí, tolik míst. Řidiči, kteří jezdí se školními výpravami roky a vědí, jak to na exkurzi chodí.",
  },
  {
    tag: "Svatby",
    title: "Hosty svezeme, vy si užijete den",
    body: "Z hotelu na obřad, z obřadu na hostinu. Vy neřešíte, kdo koho veze a kdo je po přípitku ještě schopný řídit.",
  },
  {
    tag: "Kluby",
    title: "Zápasy, výjezdy, mistrovství",
    body: "Se sportovními týmy máme najeté stovky kilometrů. Místo na bagáž, výstroj i dobrou náladu na cestu zpátky.",
  },
  {
    tag: "Svozy",
    title: "Pravidelné linky zaměstnanců",
    body: "Individuální plán svozu na pracoviště — i do hůř dostupných periferií Prahy. Cenový návrh vypracujeme zdarma.",
  },
  {
    tag: "Transfery",
    title: "Letiště a jízdy po Praze",
    body: "Letiště Václava Havla, Mnichov, Vídeň, Lipsko — i okružní jízda Prahou pro skupinu. Vyzvedneme tam, kde stojíte.",
  },
];

const fleet = [
  { name: "Mercedes-Benz", note: "dálkové autokary" },
  { name: "Setra", note: "komfort pro delší trasy" },
  { name: "Temsa", note: "pružné midibusy" },
];

export default function Page() {
  return (
    <main className="fb-main">
      <header className="fb-topbar">
        <a className="fb-wordmark" href="#" aria-label="FurraBus, pronájem autobusů Praha">
          Furra<span className="fb-wordmark-accent">Bus</span>
        </a>
        <a className="fb-phone" href="tel:+420702996099">
          <span className="fb-phone-label">Dispečink</span>
          702 99 60 99
        </a>
      </header>

      <section className="fb-hero">
        <img
          className="fb-hero-img"
          src="/hero.webp"
          alt="Autobus FurraBus připravený na skupinovou cestu"
          loading="eager"
          decoding="async"
        />
        <div className="fb-hero-scrim" aria-hidden="true" />
        <div className="fb-hero-inner">
          <p className="fb-eyebrow">Pronájem autobusů s řidičem — Praha</p>
          <h1 className="fb-hero-title">
            Řekněte <span className="fb-mark-odkud">odkud</span> a <span className="fb-mark-kam">kam</span>.
            <br />
            Zbytek je na nás.
          </h1>
          <p className="fb-hero-lede">
            Odvezeme 20 i 200 lidí — na teambuilding, svatbu, zápas nebo letiště.
            Čisté, moderní autokary Mercedes-Benz, Setra a Temsa s řidiči,
            kteří skupiny vozí každý den.
          </p>
          <div className="fb-hero-actions">
            <a className="fb-btn fb-btn-primary" href="tel:+420702996099">Zavolat na dispečink</a>
            <a className="fb-btn fb-btn-ghost" href="#poptavka">Nezávazně poptat cestu</a>
          </div>
        </div>

        <div className="fb-ticker" aria-hidden="true">
          <div className="fb-ticker-track">
            <span>Praha 1 · Malá Strana</span><span className="fb-dot">◦</span>
            <span>Euro 6</span><span className="fb-dot">◦</span>
            <span>20–200 osob</span><span className="fb-dot">◦</span>
            <span>Letiště V. Havla</span><span className="fb-dot">◦</span>
            <span>Svatby · Školy · Firmy</span><span className="fb-dot">◦</span>
            <span>Praha 1 · Malá Strana</span><span className="fb-dot">◦</span>
            <span>Euro 6</span><span className="fb-dot">◦</span>
            <span>20–200 osob</span><span className="fb-dot">◦</span>
            <span>Letiště V. Havla</span><span className="fb-dot">◦</span>
            <span>Svatby · Školy · Firmy</span><span className="fb-dot">◦</span>
          </div>
        </div>
      </section>

      <section className="fb-services" id="poptavka" aria-labelledby="sluzby-nadpis">
        <div className="fb-section-head">
          <p className="fb-eyebrow fb-eyebrow-dark">Kam s vámi zajedeme</p>
          <h2 className="fb-section-title" id="sluzby-nadpis">
            Jedna posádka, spousta důvodů proč vyjet
          </h2>
          <p className="fb-section-lede">
            Řekněte nám cíl a počet lidí. Do jízdního řádu vejde skoro cokoliv —
            od jednorázového výletu po pravidelný svoz do práce.
          </p>
        </div>

        <ul className="fb-cards">
          {services.map((s) => (
            <li className="fb-card" key={s.tag}>
              <span className="fb-card-tag">{s.tag}</span>
              <h3 className="fb-card-title">{s.title}</h3>
              <p className="fb-card-body">{s.body}</p>
            </li>
          ))}
        </ul>

        <div className="fb-services-media">
          <img
            src="/section-1.webp"
            alt="Skupina cestujících nastupuje do autobusu FurraBus"
            loading="lazy"
            decoding="async"
          />
          <div className="fb-services-note">
            <p className="fb-note-big">„Není skupina, kterou bychom neodvezli.“</p>
            <p className="fb-note-small">
              Potřebujete víc autobusů najednou? Ozvěte se — sladíme celý konvoj
              na jeden čas a jedno místo srazu.
            </p>
          </div>
        </div>
      </section>

      <section className="fb-trust" aria-labelledby="onas-nadpis">
        <div className="fb-trust-grid">
          <div className="fb-trust-text">
            <p className="fb-eyebrow fb-eyebrow-dark">Za volantem</p>
            <h2 className="fb-section-title" id="onas-nadpis">
              Vítejte na palubě. Jsem Lukáš Strnad.
            </h2>
            <p className="fb-trust-para">
              Zakládám si na jednom: bezpečí, pohodlí a klient, který dojede v pohodě.
              Proto jezdíme s autokary Mercedes-Benz, Setra a Temsa s motory Euro 5 a Euro 6 —
              ne s tím, co zrovna zbylo v depu.
            </p>
            <p className="fb-trust-para">
              Cestovat sám je zážitek, ve dvou se to lépe táhne — ale s dobrou partou
              a FurraBusem je to nejlepší. O logistiku se postaráme my, vy si užijete cestu.
            </p>

            <dl className="fb-facts">
              <div className="fb-fact">
                <dt>Sídlo</dt>
                <dd>Tržiště 1, Praha 1<br />Malá Strana</dd>
              </div>
              <div className="fb-fact">
                <dt>Kapacita</dt>
                <dd>20 až 200 osob<br />na jednu akci</dd>
              </div>
              <div className="fb-fact">
                <dt>E-mail</dt>
                <dd><a href="mailto:info@furrabus.cz">info@furrabus.cz</a></dd>
              </div>
            </dl>

            <div className="fb-fleet">
              <p className="fb-fleet-label">Vozový park</p>
              <ul className="fb-fleet-list">
                {fleet.map((f) => (
                  <li key={f.name}>
                    <span className="fb-fleet-name">{f.name}</span>
                    <span className="fb-fleet-note">{f.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <figure className="fb-trust-figure">
            <img
              src="/section-2.webp"
              alt="Interiér a exteriér autobusu FurraBus"
              loading="lazy"
              decoding="async"
            />
            <figcaption>Vozidla čistá a moderně vybavená, připravená vyrazit.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
