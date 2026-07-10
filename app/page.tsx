import type { CSSProperties } from "react";

export default function Page() {
  const cruises = [
    {
      ship: "Costa Deliziosa",
      title: "Po Jaderském moři na Maltu a zpět",
      route: "Itálie · Řecko · Malta · Chorvatsko",
      embark: "Vylodění: Terst, Itálie",
      nights: 8,
      date: "2. – 10. října",
      priceCzk: "29 270 Kč",
      priceEur: "1 190 €",
    },
    {
      ship: "MSC Magnifica",
      title: "Cesta kolem Evropy",
      route: "Německo · Nizozemsko · Francie · Španělsko · Portugalsko · Itálie",
      embark: "Autobusová doprava od nás z Prahy",
      nights: 14,
      date: "4. – 18. října",
      priceCzk: "41 080 Kč",
      priceEur: "1 670 €",
    },
    {
      ship: "Costa Toscana",
      title: "Západním Středomořím",
      route: "Itálie · Francie · Španělsko",
      embark: "Uskutečnění plavby garantujeme",
      nights: 9,
      date: "22. – 31. října",
      priceCzk: "27 060 Kč",
      priceEur: "1 100 €",
    },
  ];

  const seas = [
    { name: "Středozemní moře", count: 1753, from: "1 480 Kč", nights: "1 noc" },
    { name: "Karibské moře", count: 1527, from: "2 680 Kč", nights: "3 noci" },
    { name: "Severní Amerika", count: 1535, from: "—", nights: "7 nocí" },
    { name: "Atlantský oceán", count: 727, from: "—", nights: "7 nocí" },
    { name: "Severní Evropa", count: 629, from: "—", nights: "5 nocí" },
    { name: "Kanárské ostrovy a Madeira", count: 419, from: "—", nights: "7 nocí" },
  ];

  const reasons = [
    "Každé ráno se probudíte v jiném přístavu.",
    "Jedna platba pokryje ubytování, plnou penzi i zábavu.",
    "Kajuta luxusního hotelu, který se za vás přesune.",
    "Gurmánské zážitky od snídaně po pozdní večeři.",
    "Animační a sportovní program pro každý věk.",
    "Český delegát na palubě — s češtinou si vystačíte.",
    "Doprava z Prahy zajištěná, na letiště nemusíte.",
  ];

  return (
    <main className="pt">
      <header className="pt-nav">
        <a className="pt-brand" href="#top" aria-label="PT Tours International, domů">
          <span className="pt-brand-mark" aria-hidden="true">≈</span>
          <span className="pt-brand-word">
            PT&nbsp;Tours
            <em>plavby s českým průvodcem</em>
          </span>
        </a>
        <nav className="pt-links" aria-label="Hlavní">
          <a href="#plavby">Plavby</a>
          <a href="#destinace">Destinace</a>
          <a href="#duvody">Proč na loď</a>
        </nav>
        <a className="pt-call" href="tel:+420257225467">257 225 467</a>
      </header>

      <section className="pt-hero" id="top">
        <img
          className="pt-hero-img"
          src="/hero.webp"
          alt="Zaoceánská výletní loď na klidné hladině při západu slunce"
        />
        <div className="pt-hero-veil" aria-hidden="true" />
        <div className="pt-hero-inner">
          <p className="pt-eyebrow">Cestovní kancelář · Praha · od roku 2003</p>
          <h1 className="pt-hero-title">
            Ráno v Terstu,<br />
            večer už<br />
            <span>u břehů Malty.</span>
          </h1>
          <p className="pt-hero-lead">
            Zapomeňte na letiště i noční přejezdy. Nastoupíte v Praze, doveze
            vás český delegát a zbytek už jen vyhlížíte z paluby. Prodáváme
            plavby za oficiální cenu — bez skrytých poplatků.
          </p>
          <div className="pt-hero-cta">
            <a className="pt-btn" href="#plavby">Najít svou plavbu</a>
            <a className="pt-btn pt-btn-ghost" href="tel:+420257225467">
              Zavolat do kanceláře
            </a>
          </div>
        </div>
        <dl className="pt-hero-strip">
          <div>
            <dt>Vyplouváme do</dt>
            <dd>14 moří</dd>
          </div>
          <div>
            <dt>Delegát mluví</dt>
            <dd>česky</dd>
          </div>
          <div>
            <dt>Odjezd z</dt>
            <dd>Prahy</dd>
          </div>
        </dl>
      </section>

      <section className="pt-section" id="plavby" aria-labelledby="plavby-h">
        <div className="pt-head">
          <p className="pt-kicker">Vypluje na podzim</p>
          <h2 id="plavby-h" className="pt-h2">
            Plavby s českým delegátem a dopravou
          </h2>
          <p className="pt-sub">
            Autobus z Prahy, průvodce po celou dobu a garance, že se vyplouvá.
            Ceny za osobu ve dvoulůžkové kajutě.
          </p>
        </div>

        <ol className="pt-cruises">
          {cruises.map((c) => (
            <li className="pt-card" key={c.ship}>
              <div className="pt-card-top">
                <span className="pt-card-ship">{c.ship}</span>
                <span className="pt-card-nights">
                  <b>{c.nights}</b> nocí
                </span>
              </div>
              <h3 className="pt-card-title">{c.title}</h3>
              <p className="pt-card-route">{c.route}</p>
              <p className="pt-card-note">{c.embark}</p>
              <div className="pt-card-foot">
                <span className="pt-card-date">{c.date}</span>
                <span className="pt-card-price">
                  {c.priceCzk}
                  <em>{c.priceEur}</em>
                </span>
              </div>
              <a className="pt-card-link" href="#plavby">
                Zobrazit detail plavby
              </a>
            </li>
          ))}
        </ol>

        <div className="pt-seas">
          <img
            className="pt-seas-img"
            src="/section-1.webp"
            alt="Paluba výletní lodi s bazénem a lehátky za slunečného dne"
          />
          <div className="pt-seas-body">
            <h3 className="pt-h3">Kam se z paluby díváte nejčastěji</h3>
            <p className="pt-seas-lead">
              V nabídce máme přes osm tisíc konkrétních odjezdů. Tady jsou moře,
              o která je mezi našimi klienty největší zájem.
            </p>
            <ul className="pt-seas-list">
              {seas.map((s) => (
                <li key={s.name}>
                  <span className="pt-seas-name">{s.name}</span>
                  <span className="pt-seas-meta">
                    {s.nights} od {s.from}
                    <em>{s.count} plaveb</em>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-section pt-trust" id="duvody" aria-labelledby="duvody-h">
        <div className="pt-trust-grid">
          <div className="pt-trust-copy">
            <p className="pt-kicker">Proč zrovna loď</p>
            <h2 id="duvody-h" className="pt-h2">
              Sedm důvodů, proč naši klienti pořád vyplouvají znovu
            </h2>
            <ol className="pt-reasons">
              {reasons.map((r, i) => (
                <li key={r}>
                  <span className="pt-reasons-n">{String(i + 1).padStart(2, "0")}</span>
                  <span>{r}</span>
                </li>
              ))}
            </ol>
          </div>

          <figure className="pt-quote" id="destinace">
            <img
              className="pt-quote-img"
              src="/section-2.webp"
              alt="Výletní loď kotvící u historického přístavu ve Středomoří"
            />
            <blockquote>
              <p>
                „Paní Lenka byla skvělá průvodkyně. Vyprávěla zajímavé věci,
                nikde jsme nestresovali a poradila nám i skvělá místa, kam se
                jít najíst. Cestovce i paní Lence patří velká vděčnost za
                vydařený zájezd.“
              </p>
              <footer>
                <span>A. Sijeričová</span>
                <em>okruh Středomořím na MSC Seaview</em>
              </footer>
            </blockquote>
          </figure>
        </div>

        <div className="pt-promise">
          <p>
            Individuální plavby prodáváme za oficiální cenu — žádné skryté
            poplatky. A když v nabídce nenajdete přesně to své, sestavíme vám
            plavbu na míru.
          </p>
          <a className="pt-btn" href="mailto:poptavky@pttours.cz">
            Napsat na poptavky@pttours.cz
          </a>
        </div>
      </section>
    </main>
  );
}
