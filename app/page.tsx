import React from "react";

export default function Page() {
  return (
    <main className="pl">
      {/* HERO */}
      <header className="pl-hero">
        <div className="pl-hero__frame" aria-hidden="true">
          <img src="/hero.webp" alt="" className="pl-hero__img" />
          <div className="pl-hero__scrim" />
        </div>

        <nav className="pl-nav" aria-label="Hlavní">
          <a className="pl-wordmark" href="#">
            <span className="pl-wordmark__mark" aria-hidden="true">
              <span className="pl-picket" />
              <span className="pl-picket" />
              <span className="pl-picket" />
            </span>
            <span className="pl-wordmark__text">
              Ploty <b>Pardubice</b>
            </span>
          </a>
          <ul className="pl-nav__links">
            <li><a href="#nabidka">Materiály</a></li>
            <li><a href="#duvera">Rodinná firma</a></li>
            <li><a href="tel:+420466030287" className="pl-nav__call">466 030 287</a></li>
          </ul>
        </nav>

        <div className="pl-hero__body">
          <p className="pl-eyebrow">Ploty a brány · Pardubice a Východní Čechy</p>
          <h1 className="pl-hero__title">
            Plot, který <span className="pl-hl">drží linii</span> —
            od prvního sloupku po pohon brány.
          </h1>
          <p className="pl-hero__lede">
            Rodinná firma z Průmyslové ulice. Neděláme zedničinu — děláme
            oplocení poctivě až po poslední šroubek. Zaměříme, navrhneme,
            postavíme a bránu rozjedeme na dálkové ovládání.
          </p>
          <div className="pl-hero__cta">
            <a className="pl-btn pl-btn--solid" href="tel:+420466030287">Zavolat 466&nbsp;030&nbsp;287</a>
            <a className="pl-btn pl-btn--ghost" href="mailto:info@ploty-pardubice.cz">Napsat na e‑mail</a>
          </div>
          <dl className="pl-hero__facts">
            <div><dt>Vzorkovna</dt><dd>Průmyslová 344, Pardubice — přijďte si sáhnout.</dd></div>
            <div><dt>Půjčovna</dt><dd>Nářadí a mechanizace pro šikovné ruce.</dd></div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — MATERIÁLY */}
      <section className="pl-sec pl-mat" id="nabidka" aria-labelledby="mat-h">
        <div className="pl-sec__head">
          <p className="pl-kicker">Čtyři materiály, jedna linie</p>
          <h2 id="mat-h">Vyberte plot podle toho, co od něj čekáte</h2>
          <p className="pl-sec__lede">
            Každý materiál řeší něco jiného — soukromí, vzhled, bezúdržbovost
            nebo cenu. Poradíme na míru vašemu pozemku i rozpočtu.
          </p>
        </div>

        <ul className="pl-mat__grid">
          <li className="pl-mat__card">
            <span className="pl-mat__no">01</span>
            <h3>Hliníkové ploty a brány</h3>
            <p>Elegantní, odolné a prakticky bez údržby. Do nich sedí i pohon brány.</p>
            <span className="pl-tag">Bez rzi · na desítky let</span>
          </li>
          <li className="pl-mat__card">
            <span className="pl-mat__no">02</span>
            <h3>Betonové ploty</h3>
            <p>Když chcete klid, soukromí a pevnost. Neprofoukne, neprohlédne, vydrží.</p>
            <span className="pl-tag">Maximální soukromí</span>
          </li>
          <li className="pl-mat__card">
            <span className="pl-mat__no">03</span>
            <h3>WPC ploty</h3>
            <p>Vzhled dřeva, ale počasí ho nerozhodí. Teplý dojem bez natírání.</p>
            <span className="pl-tag">Dřevo, které nešediví</span>
          </li>
          <li className="pl-mat__card">
            <span className="pl-mat__no">04</span>
            <h3>Pletiva a panely</h3>
            <p>Praktická klasika na zahradu, ohradu i stavbu. Rychle a rozumně.</p>
            <span className="pl-tag">Nejlepší cena za metr</span>
          </li>
        </ul>

        <div className="pl-mat__band">
          <img src="/section-1.webp" alt="Ukázka realizovaného oplocení od Ploty Pardubice" className="pl-mat__img" />
          <div className="pl-mat__list">
            <h3>A k tomu všechno okolo</h3>
            <ul>
              <li><span>✓</span> Poradenství a návrh na míru vašemu pozemku</li>
              <li><span>✓</span> Profesionální montáž bran, branek i celého plotu</li>
              <li><span>✓</span> Pohony a dálkové ovládání vjezdových bran</li>
              <li><span>✓</span> Půjčovna nářadí, když si část chcete udělat sami</li>
              <li><span>✓</span> Návody, údržba a opravy — od A do Z</li>
            </ul>
            <a className="pl-btn pl-btn--solid" href="mailto:info@ploty-pardubice.cz?subject=Pop%C3%ADtávka%20oplocení">Poslat poptávku</a>
          </div>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA */}
      <section className="pl-sec pl-trust" id="duvera" aria-labelledby="trust-h">
        <div className="pl-trust__grid">
          <div className="pl-trust__text">
            <p className="pl-kicker">Rodinná firma z Pardubic</p>
            <h2 id="trust-h">Malý tým, o to víc nám záleží na výsledku</h2>
            <p className="pl-trust__lede">
              Známe Pardubice jako svoje vlastní oplocení. Lokální zkušenosti,
              rychlá dostupnost a férové jednání — lidský přístup a termíny,
              které platí. Postavíme vám plot, za který se nebudete muset stydět.
            </p>

            <ul className="pl-trust__pillars">
              <li>
                <strong>Rodinný přístup</strong>
                <span>Neschováme se za call centrum — mluvíte přímo s těmi, kdo plot postaví.</span>
              </li>
              <li>
                <strong>Známe Pardubice</strong>
                <span>Východní Čechy máme na dosah. Přijedeme zaměřit rychle.</span>
              </li>
              <li>
                <strong>Sklad a vzorkovna</strong>
                <span>Na Průmyslové 344 si na materiály nejdřív sáhnete a porovnáte je.</span>
              </li>
              <li>
                <strong>Montáž je naše doména</strong>
                <span>Od plotových sloupků až po pohony bran — všechno v jedné partě.</span>
              </li>
            </ul>
          </div>

          <aside className="pl-trust__card" aria-label="Kontakt a vzorkovna">
            <img src="/section-2.webp" alt="Vzorkovna a sklad Ploty Pardubice na Průmyslové ulici" className="pl-trust__img" />
            <div className="pl-trust__contact">
              <p className="pl-trust__kick">Přijďte se podívat</p>
              <p className="pl-trust__addr">Průmyslová 344, Pardubice</p>
              <a className="pl-trust__row" href="tel:+420466030287">
                <span>Telefon</span><b>466 030 287</b>
              </a>
              <a className="pl-trust__row" href="mailto:info@ploty-pardubice.cz">
                <span>E‑mail</span><b>info@ploty-pardubice.cz</b>
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
