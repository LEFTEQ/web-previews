export default function Page() {
  return (
    <main className="rondr">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-lamely" />
        </div>

        <div className="hero-inner">
          <div className="topbar">
            <div className="wordmark">
              <span className="wordmark-okna">OKNA</span>
              <span className="wordmark-rondr">RONDR</span>
            </div>
            <a className="topbar-tel" href="tel:+420548538991">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
                <path fill="currentColor" d="M3.5 1.5c.4-.4 1-.4 1.4 0l1.9 1.9c.4.4.4 1 0 1.4l-.9.9c.7 1.4 1.9 2.6 3.3 3.3l.9-.9c.4-.4 1-.4 1.4 0l1.9 1.9c.4.4.4 1 0 1.4l-1.1 1.1c-.5.5-1.3.7-2 .5-4-1.2-7.2-4.4-8.4-8.4-.2-.7 0-1.5.5-2l1.1-1.1z"/>
              </svg>
              548 538 991
            </a>
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">Žaluzie a rolety · Brno-Černovice</p>
            <h1 className="hero-title">
              <span className="hero-line">Stín</span>
              <span className="hero-line hero-line-accent">na jedno</span>
              <span className="hero-line">otočení.</span>
            </h1>
            <p className="hero-lead">
              Zaměříme, vyrobíme a namontujeme žaluzie, rolety i venkovní stínění
              přesně na vaše okna. Z vlastní vzorkovny na Řehořově — po celém Brně
              a okolí, obvykle do tří týdnů.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="tel:+420548538991">Zavolat a domluvit zaměření</a>
              <a className="btn btn-ghost" href="mailto:info@oknarondr.cz">Napsat e-mail</a>
            </div>
          </div>

          <div className="hero-strip" role="list" aria-label="Proč OknaRondr">
            <div className="strip-item" role="listitem">
              <span className="strip-key">Zaměření</span>
              <span className="strip-val">zdarma u vás doma</span>
            </div>
            <div className="strip-item" role="listitem">
              <span className="strip-key">Montáž</span>
              <span className="strip-val">vlastní technici, ne subdodávka</span>
            </div>
            <div className="strip-item" role="listitem">
              <span className="strip-key">Servis</span>
              <span className="strip-val">seřízení i po záruce</span>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SEKCE: STÍNĚNÍ ================= */}
      <section className="section section-shade" aria-labelledby="shade-h">
        <div className="section-head">
          <p className="section-eyebrow">Co u nás vyberete</p>
          <h2 id="shade-h" className="section-title">
            Stínění zevnitř i zvenku — od lamely po celou fasádu
          </h2>
        </div>

        <div className="shade-grid">
          <figure className="shade-media">
            <img
              src="/section-1.webp"
              alt="Detail hliníkových lamel venkovní žaluzie na okně brněnského bytu"
            />
            <figcaption>Venkovní žaluzie zastaví horko už před sklem — v létě uvnitř až o 8 °C méně.</figcaption>
          </figure>

          <ul className="shade-list">
            <li className="shade-item">
              <span className="shade-mark" aria-hidden="true" />
              <div>
                <h3>Vnitřní žaluzie</h3>
                <p>Hliníkové lamely do každého okna — plastového, dřevěného i střešního. Nejrychlejší cesta k soukromí, montáž do křídla bez vrtání do rámu.</p>
              </div>
            </li>
            <li className="shade-item">
              <span className="shade-mark" aria-hidden="true" />
              <div>
                <h3>Venkovní žaluzie a rolety</h3>
                <p>Lamely Z-90 a C-80 nebo předokenní rolety s motorem. Stín, ticho z ulice a v zimě méně úniku tepla. Ovládání klikou, vypínačem i z telefonu.</p>
              </div>
            </li>
            <li className="shade-item">
              <span className="shade-mark" aria-hidden="true" />
              <div>
                <h3>Látkové stínění</h3>
                <p>Rolety, plisé a japonské stěny ve stovkách látek — vybíráte naživo ve vzorkovně na Řehořově, ne z katalogu na monitoru.</p>
              </div>
            </li>
            <li className="shade-item">
              <span className="shade-mark" aria-hidden="true" />
              <div>
                <h3>Sítě proti hmyzu a doplňky</h3>
                <p>Pevné i rolovací sítě, parapety, samozavírače a madla. Doměříme při jedné návštěvě se žaluziemi, ať neplatíte dvě cesty.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= SEKCE: DŮVĚRA ================= */}
      <section className="section section-trust" aria-labelledby="trust-h">
        <div className="trust-grid">
          <div className="trust-copy">
            <p className="section-eyebrow section-eyebrow-light">Kdo vám to namontuje</p>
            <h2 id="trust-h" className="section-title section-title-light">
              Brněnská firma, která po montáži nezmizí
            </h2>
            <p className="trust-lead">
              OknaRondr stíní brněnské byty, domy i kanceláře přes dvacet let.
              Vedle žaluzií a rolet dodáváme plastová, hliníková a dřevěná okna
              z profilů VEKA a ALUPROF — takže víme, jak stínění s oknem opravdu
              sedne dohromady.
            </p>

            <dl className="trust-facts">
              <div className="fact">
                <dt>Vzorkovna</dt>
                <dd>Řehořova 1299/30, Brno-Černovice. Lamely, látky i pohony si osaháte naživo.</dd>
              </div>
              <div className="fact">
                <dt>Pozáruční servis</dt>
                <dd>Pohyblivé díly potřebují péči. Seřídíme a promažeme žaluzie i roky po montáži.</dd>
              </div>
              <div className="fact">
                <dt>Jeden dodavatel</dt>
                <dd>Zaměření, výroba, montáž i servis pod jednou střechou — jedno číslo na všechno.</dd>
              </div>
            </dl>

            <blockquote className="trust-quote">
              <p>
                „Venkovní žaluzie na celý dům v Líšni — zaměření ve čtvrtek, za tři
                týdny hotovo. Montéři po sobě uklidili a ukázali nám ovládání
                z telefonu.“
              </p>
              <cite>— rodina Havlových, Brno-Líšeň</cite>
            </blockquote>
          </div>

          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Technik OknaRondr seřizuje venkovní žaluzii při montáži v Brně"
            />
            <figcaption>Montujeme vlastními techniky — stejní lidé přijedou i na servis.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
