export default function Page() {
  return (
    <main className="ar-page">
      {/* ===== HERO ===== */}
      <header className="ar-hero">
        <div className="ar-topbar">
          <div className="ar-wordmark">
            <span className="ar-wordmark-auto">AUTOSKLO</span>
            <span className="ar-wordmark-roger">ROGER</span>
          </div>
          <a className="ar-topbar-tel" href="tel:+420495218189">
            <span className="ar-topbar-tel-label">Hradec Králové</span>
            <span className="ar-topbar-tel-num">495 218 189</span>
          </a>
        </div>

        <div className="ar-hero-inner">
          <p className="ar-hero-eyebrow">Tónování autoskel · fólie 3M · Hradec Králové</p>

          <h1 className="ar-hero-title">
            <span className="ar-hero-line ar-hero-line-1">Vaše auto,</span>
            <span className="ar-hero-line ar-hero-line-2">o&nbsp;pár odstínů</span>
            <span className="ar-hero-line ar-hero-line-3">tmavší.</span>
          </h1>

          <p className="ar-hero-sub">
            Profesionální tónování skel atestovanými fóliemi 3M. Chrání interiér
            před sluncem, drží teplotu v&nbsp;kabině a&nbsp;projde na STK. Hotovo
            zpravidla do&nbsp;jednoho dne.
          </p>

          <div className="ar-hero-actions">
            <a className="ar-btn ar-btn-primary" href="tel:+420724816201">
              Zavolat 724 816 201
            </a>
            <a className="ar-btn ar-btn-ghost" href="#odstiny">
              Vybrat odstín fólie
            </a>
          </div>
        </div>

        {/* Signature: pás propustnosti — okno auta od čirého skla po limuzínovou fólii */}
        <div className="ar-tintband" id="odstiny" aria-label="Škála odstínů autofólií podle propustnosti světla">
          <div className="ar-tint ar-tint-70">
            <span className="ar-tint-vlt">70&nbsp;%</span>
            <span className="ar-tint-name">čiré sklo</span>
          </div>
          <div className="ar-tint ar-tint-50">
            <span className="ar-tint-vlt">50&nbsp;%</span>
            <span className="ar-tint-name">lehké tónování</span>
          </div>
          <div className="ar-tint ar-tint-35">
            <span className="ar-tint-vlt">35&nbsp;%</span>
            <span className="ar-tint-name">standard</span>
          </div>
          <div className="ar-tint ar-tint-20">
            <span className="ar-tint-vlt">20&nbsp;%</span>
            <span className="ar-tint-name">tmavá</span>
          </div>
          <div className="ar-tint ar-tint-5">
            <span className="ar-tint-vlt">5&nbsp;%</span>
            <span className="ar-tint-name">limuzína</span>
          </div>
        </div>
        <p className="ar-tintband-note">
          Propustnost světla (VLT) — čím nižší číslo, tím tmavší fólie. Na přední boční skla montujeme jen odstíny povolené zákonem.
        </p>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ar-section ar-services" aria-labelledby="sluzby-h">
        <div className="ar-section-head">
          <h2 id="sluzby-h" className="ar-section-title">Co pro vaše auto uděláme</h2>
          <p className="ar-section-lead">
            Fólie jsou naše hlavní práce — ale jsme autoskláři, takže si poradíme
            se sklem od opravy odštipu až po kompletní výměnu.
          </p>
        </div>

        <div className="ar-services-grid">
          <article className="ar-card ar-card-featured">
            <p className="ar-card-tag">Nejčastější zakázka</p>
            <h3 className="ar-card-title">Tónování skel fóliemi 3M</h3>
            <p className="ar-card-text">
              Atestované fólie s&nbsp;homologací — projdete STK bez řečí. Blokují
              až 99&nbsp;% UV záření, v&nbsp;létě snižují teplotu v&nbsp;autě
              a&nbsp;při rozbití drží střepy pohromadě. Odstín vybereme přímo
              na vašem autě.
            </p>
            <p className="ar-card-meta">Osobní auto zpravidla za 3–4 hodiny</p>
          </article>

          <article className="ar-card">
            <h3 className="ar-card-title">Protisluneční fólie na čelní sklo</h3>
            <p className="ar-card-text">
              Čirý pruh nebo celoplošná čirá fólie s&nbsp;tepelnou izolací.
              Méně oslnění, méně horka — beze změny výhledu.
            </p>
          </article>

          <article className="ar-card">
            <h3 className="ar-card-title">Opravy čelních skel</h3>
            <p className="ar-card-text">
              Odštip od kamínku opravíme pryskyřicí dřív, než se rozjede
              v&nbsp;prasklinu. Oprava je respektována STK.
            </p>
          </article>

          <article className="ar-card">
            <h3 className="ar-card-title">Výměna autoskla z&nbsp;pojistky</h3>
            <p className="ar-card-text">
              Pojistnou událost vyřídíme za vás — s&nbsp;pojišťovnou komunikujeme
              my. Při splnění podmínek platíte 0&nbsp;Kč.
            </p>
          </article>

          <article className="ar-card">
            <h3 className="ar-card-title">Kódování a&nbsp;vyhřívání skel</h3>
            <p className="ar-card-text">
              Bezpečnostní kódování CEBIA proti krádeži a&nbsp;opravy vyhřívání
              včetně lepení kontaktů.
            </p>
          </article>

          <article className="ar-card">
            <h3 className="ar-card-title">Mobilní servis</h3>
            <p className="ar-card-text">
              Nemůžete k&nbsp;nám? Po domluvě přijedeme a&nbsp;sklo vyměníme
              u&nbsp;vás — doma i&nbsp;ve firmě.
            </p>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="ar-section ar-trust" aria-labelledby="duvera-h">
        <div className="ar-trust-grid">
          <div className="ar-trust-copy">
            <h2 id="duvera-h" className="ar-section-title">
              Autoskláři z&nbsp;Hradce, ne montážní řetězec
            </h2>
            <p className="ar-trust-text">
              Autosklo Roger pracuje se sklem a&nbsp;fóliemi přes dvacet let.
              V&nbsp;Hradci Králové nás najdete osobně — sklo i&nbsp;fólii vám
              ukážeme v&nbsp;ruce, odstín vyzkoušíme přiložením na vaše okno
              a&nbsp;řekneme na rovinu, co je povolené a&nbsp;co ne.
            </p>
            <p className="ar-trust-text">
              Kromě Hradce nás najdete také v&nbsp;Pardubicích, Brně, Olomouci,
              Šumperku, Zlíně a&nbsp;Znojmě — náhradní sklo tak máme skladem
              rychle, i&nbsp;když zrovna není v&nbsp;Hradci.
            </p>

            <ul className="ar-trust-points">
              <li className="ar-trust-point">
                <strong>Fólie 3M s&nbsp;atestem.</strong> Na fólii dostanete
                homologační štítek — na STK ani při kontrole nic neřešíte.
              </li>
              <li className="ar-trust-point">
                <strong>Pojistku vyřídíme my.</strong> Prohlídku, dokumentaci
                i&nbsp;likvidaci pojistné události zařídíme bez vašeho běhání.
              </li>
              <li className="ar-trust-point">
                <strong>Záruka na práci i&nbsp;materiál.</strong> Fólie nesmí
                bublat ani fialovět — když se něco pokazí, opravíme to.
              </li>
            </ul>
          </div>

          <aside className="ar-visit" aria-label="Pobočka Hradec Králové">
            <p className="ar-visit-eyebrow">Pobočka</p>
            <p className="ar-visit-city">Hradec Králové</p>
            <dl className="ar-visit-list">
              <div className="ar-visit-row">
                <dt>Pevná linka</dt>
                <dd><a href="tel:+420495218189">495 218 189</a></dd>
              </div>
              <div className="ar-visit-row">
                <dt>Mobil</dt>
                <dd><a href="tel:+420724816201">724 816 201</a></dd>
              </div>
              <div className="ar-visit-row">
                <dt>Objednání</dt>
                <dd>Telefonicky, termín obvykle do&nbsp;týdne</dd>
              </div>
              <div className="ar-visit-row">
                <dt>Na počkání</dt>
                <dd>Oprava odštipu čelního skla</dd>
              </div>
            </dl>
            <a className="ar-btn ar-btn-primary ar-visit-btn" href="tel:+420495218189">
              Zavolat pobočku
            </a>
          </aside>
        </div>
      </section>
    </main>
  );
}
