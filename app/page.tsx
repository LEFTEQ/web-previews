export default function Page() {
  return (
    <main className="uc-page">
      {/* ===================== HERO ===================== */}
      <header className="uc-hero">
        <div className="uc-hero-top">
          <div className="uc-wordmark" aria-label="Josef Baláš, účetnictví">
            <span className="uc-wordmark-name">BALÁŠ</span>
            <span className="uc-wordmark-sub">účetnictví · Olomouc</span>
          </div>
          <a className="uc-hero-phone" href="tel:+420234694430">+420&nbsp;234&nbsp;694&nbsp;430</a>
        </div>

        <div className="uc-hero-body">
          <p className="uc-hero-eyebrow">Daňová evidence · podvojné účetnictví · mzdy</p>
          <h1 className="uc-hero-title">
            <span className="uc-line uc-line-1">Má dáti.</span>
            <span className="uc-line uc-line-2">Dal.</span>
            <span className="uc-line uc-line-3">Sedí to.</span>
          </h1>
          <p className="uc-hero-lead">
            Vedu účetnictví živnostníkům a malým firmám z&nbsp;Olomouce a&nbsp;okolí.
            Osobně, bez call centra — každý doklad projde mýma rukama
            a&nbsp;na konci roku víte přesně, co podepisujete.
          </p>
          <div className="uc-hero-actions">
            <a className="uc-btn uc-btn-solid" href="tel:+420234694430">Zavolat Josefu Balášovi</a>
            <span className="uc-hero-note">Po–Pá 8.00–16.30 · první konzultace zdarma</span>
          </div>
        </div>

        {/* Signature: účetní T-konto / hlavní kniha */}
        <div className="uc-ledger" aria-hidden="true">
          <div className="uc-ledger-head">
            <span>Má dáti</span>
            <span>Dal</span>
          </div>
          <div className="uc-ledger-rows">
            <div className="uc-ledger-row"><span>Faktury vydané</span><span>124 500,00</span></div>
            <div className="uc-ledger-row"><span>Faktury přijaté</span><span>87 320,00</span></div>
            <div className="uc-ledger-row"><span>Mzdy 3/2024</span><span>41 180,00</span></div>
            <div className="uc-ledger-row"><span>DPH — nadměrný odpočet</span><span>−4 000,00</span></div>
            <div className="uc-ledger-row uc-ledger-sum"><span>Zůstatek</span><span>0,00</span></div>
          </div>
          <p className="uc-ledger-stamp">ZAÚČTOVÁNO</p>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="uc-services" aria-labelledby="sluzby-h">
        <div className="uc-section-head">
          <h2 id="sluzby-h">Co pro vás povedu</h2>
          <p>
            Účtuji podle skutečné agendy, ne podle ceníku z&nbsp;webu. Sejdeme se,
            projdeme doklady a&nbsp;domluvíme paušál, který se nemění každý měsíc.
          </p>
        </div>

        <div className="uc-service-grid">
          <article className="uc-card">
            <p className="uc-card-account">účet 501–701</p>
            <h3>Podvojné účetnictví</h3>
            <p>
              Kompletní vedení pro s.r.o. — účetní deník, hlavní kniha, závěrka
              a&nbsp;přiznání k&nbsp;dani z&nbsp;příjmů. Doklady předáte osobně,
              poštou nebo naskenované e-mailem.
            </p>
          </article>

          <article className="uc-card">
            <p className="uc-card-account">§ 7b zákona o daních z příjmů</p>
            <h3>Daňová evidence pro OSVČ</h3>
            <p>
              Příjmy, výdaje, majetek a&nbsp;pohledávky pro živnostníky.
              Pohlídám, kdy se vám vyplatí paušál a&nbsp;kdy skutečné výdaje —
              a&nbsp;spočítám obě varianty.
            </p>
          </article>

          <article className="uc-card">
            <p className="uc-card-account">termín: 25. den v měsíci</p>
            <h3>DPH a kontrolní hlášení</h3>
            <p>
              Přiznání k&nbsp;DPH, kontrolní i&nbsp;souhrnné hlášení podávám
              datovou schránkou vždy s&nbsp;rezervou. Za celou praxi žádná pokuta
              za pozdní podání.
            </p>
          </article>

          <article className="uc-card">
            <p className="uc-card-account">výplatní termín dle vaší firmy</p>
            <h3>Mzdy a personalistika</h3>
            <p>
              Výplatní pásky, přehledy pro zdravotní pojišťovny a&nbsp;ČSSZ,
              přihlášky a&nbsp;odhlášky zaměstnanců. Vy podepíšete, já odešlu.
            </p>
          </article>

          <article className="uc-card">
            <p className="uc-card-account">1× ročně, bez stresu</p>
            <h3>Daňová přiznání</h3>
            <p>
              Daň z&nbsp;příjmů fyzických i&nbsp;právnických osob, silniční daň,
              daň z&nbsp;nemovitostí. Připomenu se vám sám — termíny hlídám já,
              ne vy.
            </p>
          </article>

          <article className="uc-card">
            <p className="uc-card-account">když přijde obálka s pruhem</p>
            <h3>Zastupování na úřadech</h3>
            <p>
              Na finanční úřad, OSSZ i&nbsp;zdravotní pojišťovnu chodím za vás.
              Kontrolu z&nbsp;berňáku řeším já — vy se věnujete své práci.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="uc-trust" aria-labelledby="duvera-h">
        <div className="uc-trust-inner">
          <div className="uc-trust-text">
            <h2 id="duvera-h">Účetní, kterému voláte přímo</h2>
            <p>
              Účetnictví dělám v&nbsp;Olomouci přes pětadvacet let. Nejsem
              kancelář s&nbsp;recepcí — jsem jeden člověk, který zná vaši firmu,
              vaše čísla a&nbsp;zvedne telefon, když si nevíte rady s&nbsp;fakturou
              nebo vám přijde výzva z&nbsp;úřadu.
            </p>
            <p>
              Většina mých klientů u&nbsp;mě účtuje déle než deset let. Noví
              přicházejí skoro výhradně na doporučení — a&nbsp;to je reference,
              která se nedá koupit.
            </p>
          </div>

          <ul className="uc-trust-facts">
            <li>
              <span className="uc-fact-value">25+ let</span>
              <span className="uc-fact-label">praxe v účetnictví a daních</span>
            </li>
            <li>
              <span className="uc-fact-value">0 Kč</span>
              <span className="uc-fact-label">na pokutách za pozdní podání za celou praxi</span>
            </li>
            <li>
              <span className="uc-fact-value">do 24 h</span>
              <span className="uc-fact-label">odpovídám na dotazy klientů, i mimo sezónu</span>
            </li>
            <li>
              <span className="uc-fact-value">Olomouc</span>
              <span className="uc-fact-label">doklady převezmu osobně, kdekoli ve městě</span>
            </li>
          </ul>
        </div>

        <figure className="uc-quote">
          <blockquote>
            „Pan Baláš mi před lety spočítal, že se mi vyplatí přejít na skutečné
            výdaje. Ušetřil mi tím desítky tisíc — a&nbsp;od té doby mu vozím
            šanon každý kvartál.“
          </blockquote>
          <figcaption>— truhlář, OSVČ, Olomouc-Holice, klient od roku 2011</figcaption>
        </figure>
      </section>
    </main>
  );
}
