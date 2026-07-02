export default function Page() {
  return (
    <main className="kv">
      {/* ===== HERO ===== */}
      <header className="kv-hero">
        <div className="kv-hero__topbar">
          <div className="kv-wordmark" aria-label="Vobecký — klempířství a pokrývačství">
            <span className="kv-wordmark__fold" aria-hidden="true"></span>
            <span className="kv-wordmark__name">VOBECKÝ</span>
            <span className="kv-wordmark__sub">klempířství · pokrývačství</span>
          </div>
          <a className="kv-callpill" href="tel:+420777890550">
            <span className="kv-callpill__label">Zavolat</span>
            <span className="kv-callpill__num">777 890 550</span>
          </a>
        </div>

        <div className="kv-hero__grid">
          <div className="kv-hero__text">
            <p className="kv-eyebrow">Ostrava a Karvinsko · od roku 1993</p>
            <h1 className="kv-hero__title">
              Plech se ohýbá.
              <br />
              <em>Kvalita ne.</em>
            </h1>
            <p className="kv-hero__lead">
              Střechy, okapy a oplechování děláme přes třicet let vlastníma
              rukama a na vlastních strojích. Na klempířskou práci dáváme
              záruku 3–5 let — písemně, ve smlouvě o dílo.
            </p>
            <div className="kv-hero__actions">
              <a className="kv-btn kv-btn--solid" href="tel:+420777890550">
                Zavolat Tomáše Vobeckého
              </a>
              <a className="kv-btn kv-btn--line" href="mailto:vobeckytomas@seznam.cz">
                Napsat e‑mail
              </a>
            </div>
            <p className="kv-hero__note">
              Zaměření střechy, výpočet ceny i doporučení materiálu — zdarma a nezávazně.
            </p>
          </div>

          <figure className="kv-hero__media">
            <img
              src="/hero.webp"
              alt="Klempíř při pokládce plechové střešní krytiny na šikmé střeše"
              className="kv-img"
            />
            <figcaption className="kv-hero__caption">
              <span className="kv-seam" aria-hidden="true"></span>
              Dvojitá stojatá drážka — spoj, který drží desítky let
            </figcaption>
          </figure>
        </div>

        {/* signature: falcovaný pás — profil plechu jako dělicí linka */}
        <div className="kv-falc" aria-hidden="true">
          <svg viewBox="0 0 1200 28" preserveAspectRatio="none" focusable="false">
            <path
              d="M0 24 L60 24 L66 8 L72 24 L180 24 L186 8 L192 24 L300 24 L306 8 L312 24 L420 24 L426 8 L432 24 L540 24 L546 8 L552 24 L660 24 L666 8 L672 24 L780 24 L786 8 L792 24 L900 24 L906 8 L912 24 L1020 24 L1026 8 L1032 24 L1140 24 L1146 8 L1152 24 L1200 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </header>

      {/* ===== SEKCE 1: CO DĚLÁME ===== */}
      <section className="kv-section kv-section--work" aria-labelledby="prace">
        <div className="kv-section__head">
          <p className="kv-eyebrow">Kompletní práce na střeše</p>
          <h2 id="prace" className="kv-h2">
            Od latí po hřeben.
            <br />Jedna parta, jedna odpovědnost.
          </h2>
        </div>

        <div className="kv-work__grid">
          <figure className="kv-work__media">
            <img
              src="/section-1.webp"
              alt="Detail okapového systému a oplechování na rodinném domě"
              className="kv-img"
            />
          </figure>

          <div className="kv-work__list">
            <article className="kv-card">
              <h3 className="kv-card__title">Šikmé střechy</h3>
              <p>
                Pokládka jakékoli krytiny — Bramac, Tondach, KM‑Beta, Satjam,
                Lindab a další. Laťování, fóliování, oplechování, demontáž a
                likvidace staré krytiny v ceně.
              </p>
            </article>
            <article className="kv-card">
              <h3 className="kv-card__title">Ploché střechy</h3>
              <p>
                Penetrace, natavení modifikovaných pásů Vedag, Elastek nebo
                Bitumat, opravy a izolace. Přijedeme, posoudíme stav a řekneme
                na rovinu, co střecha potřebuje.
              </p>
            </article>
            <article className="kv-card">
              <h3 className="kv-card__title">Okapy a oplechování</h3>
              <p>
                Montáž okapových systémů Lindab, Satjam a Rannila, oplechování
                komínů, atik a parapetů. Klempířinu ohýbáme na vlastních
                strojích — díl sedí na milimetr.
              </p>
            </article>
            <article className="kv-card">
              <h3 className="kv-card__title">Vše okolo střechy</h3>
              <p>
                Střešní okna Velux a Fakro, opravy a vyzdění komínů,
                hromosvody, zateplení podkroví, sádrokartony, stavba krovů i
                výměna bednění. Materiál dodáme a dovezeme.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="kv-section kv-section--trust" aria-labelledby="duvera">
        <div className="kv-trust__grid">
          <div className="kv-trust__text">
            <p className="kv-eyebrow kv-eyebrow--light">Proč Vobecký</p>
            <h2 id="duvera" className="kv-h2 kv-h2--light">
              Třicet let na střechách Ostravska
            </h2>
            <p className="kv-trust__lead">
              Firmu založil Tomáš Vobecký v roce 1993 v Ostravě‑Radvanicích.
              Dnes sídlíme v Petřvaldě u Karviné a děláme střechy rodinných
              domů i větší celky pro stavební firmy v celém regionu.
            </p>

            <dl className="kv-facts">
              <div className="kv-fact">
                <dt>Záruka na práci</dt>
                <dd>36–60 měsíců na klempířské práce, 60 měsíců na krytinu. Vždy písemně ve smlouvě o dílo.</dd>
              </div>
              <div className="kv-fact">
                <dt>Vlastní lidé, vlastní stroje</dt>
                <dd>Žádní najatí subdodavatelé na vaší střeše. Pracují naši zaměstnanci s naším vybavením.</dd>
              </div>
              <div className="kv-fact">
                <dt>Zdarma a nezávazně</dt>
                <dd>Zaměření střechy, výpočet ceny, posouzení stavu i doporučení vhodného materiálu.</dd>
              </div>
              <div className="kv-fact">
                <dt>Kde nás najdete</dt>
                <dd>
                  Bučinská 287, 735 41 Petřvald u Karviné. Jezdíme po Ostravě,
                  Karviné, Havířově a okolí.
                </dd>
              </div>
            </dl>
          </div>

          <figure className="kv-trust__media">
            <img
              src="/section-2.webp"
              alt="Hotová střecha rodinného domu s taškovou krytinou a novými okapy"
              className="kv-img"
            />
            <figcaption className="kv-trust__caption">
              Hotová práce mluví za nás — střechy, ke kterým se vracíme jen na kontrolu.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
