export default function Page() {
  return (
    <main className="pk">
      {/* ===== HERO ===== */}
      <header className="pk-hero">
        <div className="pk-topbar">
          <div className="pk-wordmark" aria-label="Pardubický kurýr">
            <span className="pk-wm-arrow" aria-hidden="true">➔</span>
            <span className="pk-wm-text">
              PARDUBICKÝ<em>kurýr</em>
            </span>
          </div>
          <a className="pk-topcall" href="tel:+420466000000">
            <span className="pk-topcall-label">Dispečink</span>
            <span className="pk-topcall-num">466 000 000</span>
          </a>
        </div>

        <div className="pk-hero-grid">
          <div className="pk-hero-copy">
            <p className="pk-routeline" aria-hidden="true">
              <span className="pk-dot" /> VYZVEDNUTÍ <span className="pk-dash" /> PŘEPRAVA <span className="pk-dash" /> <span className="pk-dot pk-dot-fill" /> DORUČENO
            </p>
            <h1 className="pk-h1">
              Z Pardubic<br />
              kamkoliv.<br />
              <span className="pk-h1-accent">Ještě dnes.</span>
            </h1>
            <p className="pk-lede">
              Zásilku vyzvedneme do 60&nbsp;minut od zavolání — v&nbsp;Pardubicích,
              Chrudimi i&nbsp;Hradci. Dokumenty, balíky, palety. Řidič vám zavolá,
              když je pět minut od vás.
            </p>
            <div className="pk-hero-actions">
              <a className="pk-btn pk-btn-primary" href="tel:+420466000000">Zavolat dispečink</a>
              <a className="pk-btn pk-btn-ghost" href="#sluzby">Co vozíme a za kolik</a>
            </div>
            <dl className="pk-hero-stats">
              <div>
                <dt>Vyzvednutí ve městě</dt>
                <dd>do 60 min</dd>
              </div>
              <div>
                <dt>Jezdíme</dt>
                <dd>Po–So 6–20 h</dd>
              </div>
              <div>
                <dt>Doklad o doručení</dt>
                <dd>SMS + podpis</dd>
              </div>
            </dl>
          </div>
          <figure className="pk-hero-media">
            <img
              src="/hero.webp"
              alt="Kurýr Pardubického kurýra předává zásilku před dodávkou v ulicích Pardubic"
            />
            <figcaption className="pk-hero-tag">
              <span className="pk-tag-city">PARDUBICE</span>
              <span className="pk-tag-note">základna: Fáblovka, vjezd od S.K. Neumanna</span>
            </figcaption>
          </figure>
        </div>

        <div className="pk-ticker" aria-hidden="true">
          <div className="pk-ticker-track">
            <span>PARDUBICE → CHRUDIM 25 MIN&nbsp;&nbsp;·&nbsp;&nbsp;PARDUBICE → HRADEC KRÁLOVÉ 30 MIN&nbsp;&nbsp;·&nbsp;&nbsp;PARDUBICE → PRAHA 90 MIN&nbsp;&nbsp;·&nbsp;&nbsp;PARDUBICE → BRNO 120 MIN&nbsp;&nbsp;·&nbsp;&nbsp;</span>
            <span>PARDUBICE → CHRUDIM 25 MIN&nbsp;&nbsp;·&nbsp;&nbsp;PARDUBICE → HRADEC KRÁLOVÉ 30 MIN&nbsp;&nbsp;·&nbsp;&nbsp;PARDUBICE → PRAHA 90 MIN&nbsp;&nbsp;·&nbsp;&nbsp;PARDUBICE → BRNO 120 MIN&nbsp;&nbsp;·&nbsp;&nbsp;</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="pk-services" id="sluzby" aria-labelledby="pk-services-h">
        <div className="pk-section-head">
          <p className="pk-eyebrow">Ceník bez hvězdiček</p>
          <h2 className="pk-h2" id="pk-services-h">Řeknete adresu, my řekneme cenu. Platí.</h2>
        </div>

        <div className="pk-services-grid">
          <article className="pk-card">
            <h3>Expres po Pardubicích</h3>
            <p className="pk-card-price">od 149 Kč</p>
            <p>
              Obálka nebo balík do 15&nbsp;kg kamkoliv po městě.
              Vyzvednutí do hodiny, doručení tentýž den — většinou do dvou hodin.
            </p>
            <p className="pk-card-meta">Typicky: smlouvy k podpisu, klíče, náhradní díl do servisu</p>
          </article>

          <article className="pk-card">
            <h3>Kraj a okolí</h3>
            <p className="pk-card-price">od 12 Kč / km</p>
            <p>
              Chrudim, Hradec, Přelouč, Holice a celý Pardubický kraj.
              Přímá jízda bez překládky — zásilka je pořád v&nbsp;jednom autě.
            </p>
            <p className="pk-card-meta">Typicky: zboží pro e-shopy, vzorky, laboratorní materiál</p>
          </article>

          <article className="pk-card">
            <h3>Celá ČR do večera</h3>
            <p className="pk-card-price">cena předem po telefonu</p>
            <p>
              Praha za 90&nbsp;minut, Brno za dvě hodiny. Když to musí být
              dnes a spedice říká „zítra“, jedeme my.
            </p>
            <p className="pk-card-meta">Typicky: výrobní linka stojí, tiskoviny na akci, soudní lhůta</p>
          </article>

          <article className="pk-card pk-card-wide">
            <div className="pk-card-wide-text">
              <h3>Pravidelné rozvozy pro firmy</h3>
              <p>
                Každé ráno pošta a banka, každý pátek rozvoz zákazníkům.
                Stálý řidič, který zná vaši vrátnici, fakturace jednou měsíčně.
                Napíšeme vám rámcovou nabídku do druhého dne.
              </p>
              <p className="pk-card-meta">Jezdíme pro 40+ firem z Pardubicka — od advokátů po strojírny</p>
            </div>
            <img
              src="/section-1.webp"
              alt="Řidič nakládá pravidelnou firemní zásilku do dodávky Pardubického kurýra"
            />
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="pk-trust" aria-labelledby="pk-trust-h">
        <div className="pk-trust-grid">
          <figure className="pk-trust-media">
            <img
              src="/section-2.webp"
              alt="Dispečerka Pardubického kurýra koordinuje rozvozy nad mapou Pardubického kraje"
            />
          </figure>
          <div className="pk-trust-copy">
            <p className="pk-eyebrow pk-eyebrow-light">Proč nám firmy z Pardubic věří</p>
            <h2 className="pk-h2 pk-h2-light" id="pk-trust-h">
              Vaše zásilka nikdy nečeká na překladišti. Jede rovnou.
            </h2>
            <ul className="pk-trust-list">
              <li>
                <strong>Zvedáme telefon.</strong> Dispečink Po–So 6–20 h,
                mluvíte s člověkem, který ví, kde vaše zásilka právě je.
              </li>
              <li>
                <strong>Doklad o doručení hned.</strong> Po předání vám přijde
                SMS se jménem přebírajícího a časem — hodí se pro lhůty a reklamace.
              </li>
              <li>
                <strong>Pojištění do 500 000 Kč.</strong> Každá jízda je krytá,
                u cennějších zásilek pojistku navýšíme.
              </li>
              <li>
                <strong>Známe to tu.</strong> Řidiči z Pardubic — vědí, kudy se
                v pátek odpoledne nejezdí přes Palachovku.
              </li>
            </ul>
            <blockquote className="pk-quote">
              <p>
                „Ve tři odpoledne nám stála linka kvůli jednomu ložisku.
                V půl páté ho kurýr přivezl z Hradce. Od té doby nevoláme nikomu jinému.“
              </p>
              <cite>— vedoucí výroby, strojírenská firma, Pardubice-Černá za Bory</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
