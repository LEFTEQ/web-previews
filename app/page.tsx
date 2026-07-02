export default function Page() {
  return (
    <main className="em">
      {/* ===== HERO ===== */}
      <header className="em-hero">
        <div className="em-hero-top">
          <div className="em-wordmark" aria-label="Em Studio, kadeřnictví Pardubice">
            <span className="em-wordmark-em">em</span>
            <span className="em-wordmark-dot" aria-hidden="true"></span>
            <span className="em-wordmark-studio">studio</span>
          </div>
          <p className="em-hero-loc">kadeřnictví · Pardubice</p>
        </div>

        <div className="em-hero-grid">
          <div className="em-hero-text">
            <h1 className="em-hero-title">
              <span className="em-line em-line-1">Střih,</span>
              <span className="em-line em-line-2">který drží tvar</span>
              <span className="em-line em-line-3">
                i&nbsp;bez <em>fénu.</em>
              </span>
            </h1>
            <p className="em-hero-sub">
              Malé kadeřnictví v&nbsp;centru Pardubic. Jedno křeslo, žádná fronta,
              hodina jen pro vás. Střiháme podle toho, jak vlasy skutečně rostou —
              ne podle katalogu.
            </p>
            <div className="em-hero-actions">
              <a className="em-btn" href="#sluzby">Prohlédnout ceník</a>
              <a className="em-btn em-btn-ghost" href="#studio">Jak to u&nbsp;nás vypadá</a>
            </div>
          </div>

          <figure className="em-hero-media">
            <img
              src="/hero.webp"
              alt="Kadeřnice v Em Studiu dokončuje střih klientky, v zrcadle je vidět útulný interiér salonu"
            />
            <figcaption className="em-hero-caption">
              Sladkovského ulice, Pardubice — po&nbsp;domluvě i&nbsp;po&nbsp;18.00
            </figcaption>
          </figure>
        </div>

        <div className="em-hero-strip" aria-hidden="true">
          <span>střih</span><span className="em-strip-dot"></span>
          <span>barvení</span><span className="em-strip-dot"></span>
          <span>melír</span><span className="em-strip-dot"></span>
          <span>foukaná</span><span className="em-strip-dot"></span>
          <span>péče</span>
        </div>
      </header>

      {/* ===== SLUŽBY / CENÍK ===== */}
      <section className="em-section" id="sluzby">
        <div className="em-section-head">
          <p className="em-eyebrow">Co u&nbsp;nás pořídíte</p>
          <h2>Ceník bez hvězdiček</h2>
          <p className="em-section-lede">
            Cena, kterou vidíte, je cena, kterou zaplatíte. Delší nebo hustší vlasy
            řešíme rovnou při objednání, ne až u&nbsp;pokladny.
          </p>
        </div>

        <ul className="em-services">
          <li className="em-service">
            <div className="em-service-name">
              <h3>Dámský střih</h3>
              <p>Konzultace, mytí, střih nůžkami, foukaná a&nbsp;finální styling. Poradíme, jak účes udržet doma.</p>
            </div>
            <div className="em-service-meta">
              <span className="em-price">od&nbsp;650&nbsp;Kč</span>
              <span className="em-time">60&nbsp;min</span>
            </div>
          </li>
          <li className="em-service">
            <div className="em-service-name">
              <h3>Pánský střih</h3>
              <p>Nůžky i&nbsp;strojek, úprava kontur a&nbsp;obočí. Rychlé, přesné, bez zbytečných řečí — nebo s&nbsp;nimi, jak chcete.</p>
            </div>
            <div className="em-service-meta">
              <span className="em-price">od&nbsp;350&nbsp;Kč</span>
              <span className="em-time">30&nbsp;min</span>
            </div>
          </li>
          <li className="em-service">
            <div className="em-service-name">
              <h3>Barvení a&nbsp;tónování</h3>
              <p>Celohlavové barvení nebo odrosty. Barvy volíme podle pleti a&nbsp;toho, kolik času péči chcete věnovat.</p>
            </div>
            <div className="em-service-meta">
              <span className="em-price">od&nbsp;1&nbsp;100&nbsp;Kč</span>
              <span className="em-time">120&nbsp;min</span>
            </div>
          </li>
          <li className="em-service">
            <div className="em-service-name">
              <h3>Melír a&nbsp;airtouch</h3>
              <p>Prosvětlení, které vypadá přirozeně i&nbsp;po&nbsp;třech měsících. Vždy s&nbsp;ochrannou péčí Olaplex v&nbsp;ceně.</p>
            </div>
            <div className="em-service-meta">
              <span className="em-price">od&nbsp;1&nbsp;800&nbsp;Kč</span>
              <span className="em-time">180&nbsp;min</span>
            </div>
          </li>
          <li className="em-service">
            <div className="em-service-name">
              <h3>Dětský střih</h3>
              <p>Do&nbsp;12&nbsp;let. Trpělivost máme, pohádku pustíme, vlásky posbíráme na&nbsp;památku, když budete chtít.</p>
            </div>
            <div className="em-service-meta">
              <span className="em-price">od&nbsp;250&nbsp;Kč</span>
              <span className="em-time">25&nbsp;min</span>
            </div>
          </li>
          <li className="em-service">
            <div className="em-service-name">
              <h3>Svatební a&nbsp;společenský účes</h3>
              <p>Včetně zkoušky předem. V&nbsp;den svatby přijedeme i&nbsp;za&nbsp;vámi po&nbsp;Pardubicích a&nbsp;okolí.</p>
            </div>
            <div className="em-service-meta">
              <span className="em-price">od&nbsp;1&nbsp;500&nbsp;Kč</span>
              <span className="em-time">90&nbsp;min</span>
            </div>
          </li>
        </ul>
      </section>

      {/* ===== STUDIO / DŮVĚRA ===== */}
      <section className="em-section em-section-studio" id="studio">
        <div className="em-studio-grid">
          <figure className="em-studio-media">
            <img
              src="/section-1.webp"
              alt="Pracovní místo v Em Studiu — nůžky, hřebeny a barvy připravené na kadeřnickém pultu"
            />
          </figure>

          <div className="em-studio-text">
            <p className="em-eyebrow">Proč jedno křeslo</p>
            <h2>Jste tu vždycky jediný host</h2>
            <p>
              Em Studio vede jedna kadeřnice — Míša. Žádné přebíhání mezi třemi
              zákazníky, žádné čekání s&nbsp;barvou na&nbsp;hlavě, než na&nbsp;vás
              zbude čas. Objednaný termín patří jen vám, od&nbsp;první konzultace
              po&nbsp;poslední pramen.
            </p>

            <ul className="em-facts">
              <li>
                <strong>Objednání předem</strong>
                <span>Termín si domluvíte telefonicky nebo zprávou. Připomeneme vám ho den předem.</span>
              </li>
              <li>
                <strong>Centrum Pardubic</strong>
                <span>Pět minut pěšky od&nbsp;třídy Míru, parkování na&nbsp;Karlovině za&nbsp;rohem.</span>
              </li>
              <li>
                <strong>Poctivá konzultace</strong>
                <span>Než vezmeme nůžky, probereme, co vlasy snesou. Když něco nedoporučíme, řekneme proč.</span>
              </li>
            </ul>

            <blockquote className="em-quote">
              <p>
                „Konečně kadeřnice, která se nejdřív ptá a&nbsp;pak střihá. Chodím
                sem přes rok a&nbsp;střih vypadá dobře i&nbsp;šest týdnů po&nbsp;návštěvě.“
              </p>
              <cite>— Petra&nbsp;K., stálá zákaznice z&nbsp;Polabin</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
