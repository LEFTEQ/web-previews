export default function Page() {
  return (
    <main className="ql">
      {/* ================= HERO ================= */}
      <header className="ql-hero">
        <div className="ql-hero-top">
          <span className="ql-wordmark" aria-label="Q-lit">
            Q<span className="ql-wordmark-dash">—</span>LIT
          </span>
          <span className="ql-hero-loc">Karolíny Světlé 540/6 · České Budějovice</span>
        </div>

        <div className="ql-hero-body">
          <p className="ql-hero-eyebrow">Polepy aut · řezaná grafika · UV tisk</p>
          <h1 className="ql-hero-title">
            <span className="ql-line ql-line-1">Vaše auto</span>
            <span className="ql-line ql-line-2">
              je <em className="ql-stripe-word">reklama,</em>
            </span>
            <span className="ql-line ql-line-3">která jezdí městem.</span>
          </h1>
          <p className="ql-hero-sub">
            Navrhneme a nalepíme polep, který za vás pracuje na každé cestě po
            Budějovicích i mimo ně. Od dodávky přes flotilu až po výlohu — grafika,
            fólie i montáž pod jednou střechou.
          </p>
          <div className="ql-hero-actions">
            <a className="ql-btn ql-btn-solid" href="tel:+420733793055">
              Zavolat 733 793 055
            </a>
            <a className="ql-btn ql-btn-ghost" href="mailto:dlouhy@qlit.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: „bok dodávky" — pás řezané fólie táhnoucí se přes hero */}
        <div className="ql-stripes" aria-hidden="true">
          <div className="ql-stripe ql-stripe-a" />
          <div className="ql-stripe ql-stripe-b" />
          <div className="ql-stripe ql-stripe-c" />
        </div>
        <p className="ql-hero-caption" aria-hidden="true">
          řez fólie / 60°, plotr Roland — takhle vypadá polep, než ho nalepíme na bok vašeho auta
        </p>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="ql-services" aria-labelledby="sluzby-h">
        <div className="ql-section-head">
          <h2 id="sluzby-h">Co polepíme a vytiskneme</h2>
          <p>
            Každou zakázku vedeme od návrhu po montáž. Přijedete autem, odjedete
            reklamou.
          </p>
        </div>

        <div className="ql-grid">
          <article className="ql-card ql-card-main">
            <span className="ql-card-tag">Nejčastější zakázka</span>
            <h3>Polep firemního auta</h3>
            <p>
              Dodávka, osobák nebo celá flotila. Zaměříme vůz, připravíme grafický
              návrh na míru karoserie a nalepíme litou nebo řezanou fólií — bez
              bublin, s garancí držení i v myčce.
            </p>
            <ul className="ql-card-list">
              <li>Řezaná grafika — logo, kontakty, web</li>
              <li>Částečný i celopolep (celoplošný tisk)</li>
              <li>Sjednocení vzhledu více vozů</li>
              <li>Odstranění starého polepu a příprava laku</li>
            </ul>
          </article>

          <article className="ql-card">
            <h3>Reklama na prodejnu</h3>
            <p>
              Polepy výloh, 3D nápisy na fasádu, plachty a bannery. Vaše provozovna
              bude vidět z ulice — a bude ladit s auty.
            </p>
          </article>

          <article className="ql-card">
            <h3>Přímý UV tisk</h3>
            <p>
              Tiskneme rovnou na desku, sklo i dřevo. Fotoskla, obrazy na plátno,
              cedule a značení, které vydrží venku.
            </p>
          </article>

          <article className="ql-card">
            <h3>Tisk na dřevo</h3>
            <p>
              Dřevěné obrazy, pohlednice, boxy a firemní PF. Dárek nebo reklamní
              předmět, který nikdo nevyhodí.
            </p>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA / JAK PRACUJEME ================= */}
      <section className="ql-trust" aria-labelledby="duvera-h">
        <div className="ql-trust-inner">
          <div className="ql-trust-text">
            <h2 id="duvera-h">Dílna v Budějovicích, ne e-shop s fóliemi</h2>
            <p>
              Q-lit vede Marek Dlouhý a polepy tu děláme od roku 2009. Návrh
              kreslíme přesně na váš vůz — na plánek karoserie, ne do obecné
              šablony. Fólii řežeme a tiskneme u nás v dílně v ulici Karolíny
              Světlé, takže vidíte, co lepíme, dřív než to lepíme.
            </p>
            <p>
              Auto nám necháte typicky na jeden den. U flotil se domluvíme tak,
              aby vám vozy nechyběly v provozu.
            </p>
            <a className="ql-btn ql-btn-solid" href="tel:+420733793055">
              Domluvit termín polepu
            </a>
          </div>

          <ol className="ql-steps">
            <li className="ql-step">
              <span className="ql-step-num">1</span>
              <div>
                <h3>Zaměření vozu</h3>
                <p>Přijedete k nám, nebo pracujeme podle typu vozu. Do dvou dnů máte návrh a cenu.</p>
              </div>
            </li>
            <li className="ql-step">
              <span className="ql-step-num">2</span>
              <div>
                <h3>Tisk a řez fólie</h3>
                <p>Grafiku tiskneme a řežeme v naší dílně. Před lepením vám ji ukážeme naživo.</p>
              </div>
            </li>
            <li className="ql-step">
              <span className="ql-step-num">3</span>
              <div>
                <h3>Montáž a předání</h3>
                <p>Lepíme na očištěný lak, bez bublin. Odjíždíte s autem, které si všimnou.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="ql-refs" aria-label="Reference">
          <p className="ql-refs-label">Polepili jsme auta pro</p>
          <ul className="ql-refs-list">
            <li>řemeslníky a instalatéry z Budějovicka</li>
            <li>rozvozové dodávky</li>
            <li>autoškoly</li>
            <li>stavební firmy</li>
            <li>místní e-shopy</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
