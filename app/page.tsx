import React from "react";

export default function Page() {
  const parcely = [
    {
      cislo: "01",
      ctvrt: "Moravská Ostrava a Přívoz",
      typ: "Byt 3+1, cihla",
      plocha: "96 m²",
      cena: "7 400 000 Kč",
      stav: "K prodeji",
    },
    {
      cislo: "02",
      ctvrt: "Ostrava-Jih",
      typ: "Byt 2+kk, novostavba",
      plocha: "58 m²",
      cena: "3 890 000 Kč",
      stav: "K prodeji",
    },
    {
      cislo: "03",
      ctvrt: "Moravská Ostrava a Přívoz",
      typ: "Byt 2+1, po rekonstrukci",
      plocha: "54 m²",
      cena: "12 000 Kč / měsíc",
      stav: "K pronájmu",
    },
  ];

  const kroky = [
    {
      cislo: "1",
      nadpis: "Sejdeme se u vás",
      text: "Přijdeme na prohlídku, změříme, vyfotíme a řekneme vám na rovinu, za kolik se ve vaší lokalitě reálně prodá. Bez příkras.",
    },
    {
      cislo: "2",
      nadpis: "Připravíme a inzerujeme",
      text: "Home staging, profi fotky a půdorys, energetický štítek, právní kontrola. Nemovitost pustíme do inzerce až připravenou.",
    },
    {
      cislo: "3",
      nadpis: "Dovedeme k podpisu",
      text: "Prohlídky vedeme za vás, vyjednáme cenu, ohlídáme úschovu i katastr. Vy podepíšete a dostanete peníze.",
    },
  ];

  return (
    <main className="m-page">
      <header className="m-top">
        <a className="m-wordmark" href="#" aria-label="MONET reality, Ostrava">
          <span className="m-wordmark-name">MONET</span>
          <span className="m-wordmark-sub">reality · Ostrava</span>
        </a>
        <nav className="m-nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#prodej">Chci prodat</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="m-call" href="tel:+420596111234">596 111 234</a>
      </header>

      <section className="m-hero" id="nabidka">
        <div className="m-hero-frame">
          <img
            className="m-hero-img"
            src="/hero.webp"
            alt="Bytový dům v centru Ostravy, kde MONET prodává a pronajímá byty"
            width={1600}
            height={1100}
          />
          <div className="m-hero-tag">
            <span className="m-hero-tag-loc">Nádražní 1815/92</span>
            <span className="m-hero-tag-city">702 00 Ostrava</span>
          </div>
        </div>

        <div className="m-hero-copy">
          <p className="m-eyebrow">Realitní kancelář · Moravská Ostrava</p>
          <h1 className="m-hero-h1">
            Známe každou<br />
            <span className="m-hero-accent">ostravskou čtvrť</span><br />
            podle jména.
          </h1>
          <p className="m-hero-lead">
            Přívoz, Jih, Poruba i Slezská. Prodáváme a pronajímáme byty,
            domy a komerční prostory tam, kde bydlíme sami — a víme, za kolik
            se který dům reálně prodá.
          </p>
          <div className="m-hero-cta">
            <a className="m-btn m-btn-solid" href="tel:+420596111234">Zavolat 596&nbsp;111&nbsp;234</a>
            <a className="m-btn m-btn-ghost" href="mailto:info@rkmonet.cz">Napsat e-mail</a>
          </div>
          <dl className="m-hero-stats">
            <div>
              <dt>Působíme v Ostravě</dt>
              <dd>od roku 1997</dd>
            </div>
            <div>
              <dt>Odhad ceny</dt>
              <dd>zdarma do 48 h</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="m-listings" aria-labelledby="listings-nadpis">
        <div className="m-section-head">
          <h2 id="listings-nadpis">Z aktuální nabídky</h2>
          <p>Vybrané byty, které teď máme v Ostravě volné. Kompletní seznam vám pošleme na míru.</p>
        </div>
        <ul className="m-cards">
          {parcely.map((p) => (
            <li className="m-card" key={p.cislo}>
              <div className="m-card-top">
                <span className="m-card-num">{p.cislo}</span>
                <span className={p.stav === "K pronájmu" ? "m-badge m-badge-rent" : "m-badge"}>{p.stav}</span>
              </div>
              <h3 className="m-card-typ">{p.typ}</h3>
              <p className="m-card-ctvrt">{p.ctvrt}</p>
              <dl className="m-card-meta">
                <div>
                  <dt>Plocha</dt>
                  <dd>{p.plocha}</dd>
                </div>
                <div>
                  <dt>Cena</dt>
                  <dd className="m-card-cena">{p.cena}</dd>
                </div>
              </dl>
              <a className="m-card-link" href="tel:+420596111234">
                Domluvit prohlídku <span aria-hidden="true">→</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="m-sell" id="prodej" aria-labelledby="sell-nadpis">
        <div className="m-sell-media">
          <img
            className="m-sell-img"
            src="/section-1.webp"
            alt="Makléř MONET předává klíče při prodeji bytu v Ostravě"
            width={1200}
            height={1400}
          />
        </div>
        <div className="m-sell-copy">
          <p className="m-eyebrow m-eyebrow-light">Chci prodat</p>
          <h2 id="sell-nadpis" className="m-sell-h2">Prodej vedeme od odhadu až ke klíčům.</h2>
          <p className="m-sell-lead">
            Tři kroky, jeden makléř, který u toho zůstane celou dobu s vámi.
            Žádné předávání mezi lidmi, které neznáte.
          </p>
          <ol className="m-steps">
            {kroky.map((k) => (
              <li className="m-step" key={k.cislo}>
                <span className="m-step-num">{k.cislo}</span>
                <div>
                  <h3>{k.nadpis}</h3>
                  <p>{k.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className="m-btn m-btn-solid" href="tel:+420596111234">Nezávazný odhad ceny</a>
        </div>
      </section>

      <section className="m-trust" id="kontakt" aria-labelledby="trust-nadpis">
        <div className="m-trust-copy">
          <p className="m-eyebrow">O kanceláři</p>
          <h2 id="trust-nadpis" className="m-trust-h2">
            Malá kancelář na Nádražní, ve které se domluvíte s člověkem, ne s callcentrem.
          </h2>
          <p className="m-trust-text">
            MONET je ostravská realitní kancelář se sídlem na Nádražní ulici
            v Moravské Ostravě. Prodáváme byty, domy, pozemky i komerční
            prostory po celém městě a nejbližším okolí. Spolupracujeme
            s Hypoteční bankou, takže financování vyřešíme rovnou u nás.
          </p>
          <ul className="m-trust-list">
            <li>Smluvní partner Hypoteční banky — hypotéku vyřídíme na místě</li>
            <li>Právní servis, úschova kupní ceny i katastr pod jednou střechou</li>
            <li>Znalost lokalit Přívoz, Jih, Poruba, Vítkovice, Slezská Ostrava</li>
          </ul>
        </div>
        <aside className="m-trust-card" aria-label="Kontakt na kancelář">
          <img
            className="m-trust-img"
            src="/section-2.webp"
            alt="Sídlo realitní kanceláře MONET na Nádražní ulici v Ostravě"
            width={1000}
            height={800}
          />
          <div className="m-trust-info">
            <p className="m-trust-adr">
              Realitní kancelář MONET s.r.o.<br />
              Nádražní 1815/92<br />
              702 00 Ostrava
            </p>
            <a className="m-trust-tel" href="tel:+420596111234">596 111 234</a>
            <a className="m-trust-mail" href="mailto:info@rkmonet.cz">info@rkmonet.cz</a>
            <p className="m-trust-hours">Po–Pá 9–17 · nebo kdykoli po domluvě</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
