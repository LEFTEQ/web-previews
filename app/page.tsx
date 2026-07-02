export default function Page() {
  return (
    <main className="as-page">
      {/* ================= HERO ================= */}
      <section className="as-hero" aria-label="Autosklo Speed Mělník">
        <div className="as-hero-inner">
          <header className="as-topbar">
            <div className="as-wordmark" aria-label="Autosklo Speed s.r.o.">
              <span className="as-wm-auto">AUTOSKLO</span>
              <span className="as-wm-speed">SPEED</span>
            </div>
            <div className="as-topbar-contact">
              <span className="as-nonstop-badge">NON-STOP</span>
              <a className="as-phone" href="tel:+420776757797">776 757 797</a>
            </div>
          </header>

          <div className="as-hero-main">
            <p className="as-hero-eyebrow">Autosklo · Mělník, Nůšařská 3386</p>
            <h1 className="as-hero-title">
              <span className="as-line as-line-1">Prasklé čelní sklo?</span>
              <span className="as-line as-line-2">
                Za <em className="as-hours">4 hodiny</em>
              </span>
              <span className="as-line as-line-3">zase jedete.</span>
            </h1>
            <p className="as-hero-sub">
              Vyměníme nebo opravíme sklo na osobním autě, dodávce, náklaďáku i
              autobusu. Pojistnou událost vyřídíme za vás — a když je to škoda
              z pojistky, <strong>neplatíte nic</strong>.
            </p>
            <div className="as-hero-cta">
              <a className="as-btn as-btn-primary" href="tel:+420776757797">
                Zavolat non-stop linku
              </a>
              <a className="as-btn as-btn-ghost" href="mailto:info@autosklospeed.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          {/* Signature: prasklina ve skle — SVG odvozené z řemesla */}
          <svg
            className="as-crack"
            viewBox="0 0 600 600"
            aria-hidden="true"
            focusable="false"
          >
            <g className="as-crack-lines" fill="none" strokeLinecap="round">
              <path className="as-crack-path p1" d="M300 300 L470 120" />
              <path className="as-crack-path p2" d="M300 300 L560 260" />
              <path className="as-crack-path p3" d="M300 300 L520 430" />
              <path className="as-crack-path p4" d="M300 300 L340 560" />
              <path className="as-crack-path p5" d="M300 300 L120 500" />
              <path className="as-crack-path p6" d="M300 300 L60 320" />
              <path className="as-crack-path p7" d="M300 300 L140 100" />
              <path className="as-crack-path p8" d="M380 215 L430 235" />
              <path className="as-crack-path p9" d="M420 375 L400 430" />
              <path className="as-crack-path p10" d="M195 405 L235 445" />
              <path className="as-crack-path p11" d="M225 195 L185 215" />
              <circle className="as-crack-core" cx="300" cy="300" r="14" />
              <circle className="as-crack-ring" cx="300" cy="300" r="34" />
            </g>
          </svg>

          <ul className="as-hero-strip" aria-label="Rychlá fakta">
            <li>
              <strong>4 h</strong>
              <span>výměna čelního skla</span>
            </li>
            <li>
              <strong>90 min</strong>
              <span>boční sklo na počkání</span>
            </li>
            <li>
              <strong>0 Kč</strong>
              <span>při pojistné události</span>
            </li>
            <li>
              <strong>Přijedeme</strong>
              <span>mobilní servis zdarma</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="as-services" aria-labelledby="sluzby-h">
        <div className="as-container">
          <p className="as-eyebrow">Co pro vaše auto uděláme</p>
          <h2 id="sluzby-h" className="as-h2">
            Tři řemesla, jedna dílna
          </h2>
          <p className="as-lead">
            Děláme jen sklo, světla a fólie — a děláme je pořád dokola. Proto
            víme, jak dlouho co trvá a co vám rovnou říct po telefonu.
          </p>

          <div className="as-service-grid">
            <article className="as-card">
              <div className="as-card-tag">Autosklo</div>
              <h3>Výměna a oprava autoskel</h3>
              <ul className="as-card-list">
                <li>Homologovaná skla pro osobní vozy, dodávky, náklaďáky i autobusy</li>
                <li>Malou prasklinku opravíme na počkání — bez výměny celého skla</li>
                <li>Při výměně vám půjčíme auto na 30 km zdarma</li>
              </ul>
              <p className="as-card-time">Čelní sklo ≈ 4 hodiny · boční do 90 minut</p>
            </article>

            <article className="as-card">
              <div className="as-card-tag">Světla</div>
              <h3>Renovace světlometů</h3>
              <ul className="as-card-list">
                <li>Zmatněná světla vrátíme do čirého stavu — levněji než nový světlomet</li>
                <li>Lépe uvidíte v noci a auto projde technickou</li>
                <li>Vůz vypadá o roky mladší, což se hodí i před prodejem</li>
              </ul>
              <p className="as-card-time">Zlomek ceny nového světlometu</p>
            </article>

            <article className="as-card">
              <div className="as-card-tag">Fólie</div>
              <h3>Autofólie 3M</h3>
              <ul className="as-card-list">
                <li>Tónování skel v odstínech podle vašeho výběru — vždy v mezích zákona</li>
                <li>Ochrana proti UV záření a přehřívání interiéru</li>
                <li>Víc soukromí a bezpečnosti při rozbití skla</li>
              </ul>
              <p className="as-card-time">Profesionální instalace v dílně</p>
            </article>
          </div>

          <div className="as-mobile-banner">
            <div className="as-mobile-banner-text">
              <h3>Nemůžete přijet? Přijedeme my.</h3>
              <p>
                Máme plně vybavenou pojízdnou dílnu pro osobní, nákladní i
                autobusové výměny. Výjezd je <strong>zdarma, bez příplatku</strong> —
                stačí zavolat a domluvit místo.
              </p>
            </div>
            <a className="as-btn as-btn-primary" href="tel:+420776757797">
              Domluvit výjezd
            </a>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA / POJISTKA ================= */}
      <section className="as-trust" aria-labelledby="duvera-h">
        <div className="as-container as-trust-grid">
          <div className="as-trust-copy">
            <p className="as-eyebrow as-eyebrow-light">Pojistná událost bez papírování</p>
            <h2 id="duvera-h" className="as-h2 as-h2-light">
              Kamínek od náklaďáku? Škodu vyřídíme my, vy jen podepíšete.
            </h2>
            <p className="as-trust-lead">
              Jsme smluvním servisem pojišťoven včetně Hasičské vzájemné
              pojišťovny a AXA Assistance. Poradíme vám i s připojištěním skel,
              ať příště neřešíte spoluúčast.
            </p>
            <ol className="as-steps">
              <li>
                <span className="as-step-n">1</span>
                <div>
                  <strong>Zavoláte nám</strong>
                  <p>Non-stop linka 776 757 797. Řeknete, co se stalo a čím jezdíte.</p>
                </div>
              </li>
              <li>
                <span className="as-step-n">2</span>
                <div>
                  <strong>Nahlásíme škodu pojišťovně</strong>
                  <p>Celou pojistnou událost vyřídíme za vás — jako viník i poškozený.</p>
                </div>
              </li>
              <li>
                <span className="as-step-n">3</span>
                <div>
                  <strong>Vyměníme sklo a odjíždíte</strong>
                  <p>Při pojistné události neplatíte nic. Ani korunu, ani spoluúčast navíc.</p>
                </div>
              </li>
            </ol>
          </div>

          <aside className="as-trust-side">
            <div className="as-side-block">
              <h3>Bezpečnostní značení skel</h3>
              <p>
                Jako partner Cebia nabízíme značení <strong>SBZ OCIS</strong>,
                <strong> EUROVIN OCIS</strong> (VIN kód do skel) a fotodokumentaci
                <strong> VINFOTO</strong>. Označené auto zloděje nezajímá — a
                pojišťovny to vědí.
              </p>
            </div>
            <div className="as-side-block">
              <h3>Kde nás najdete</h3>
              <p className="as-address">
                Nůšařská 3386<br />
                276 01 Mělník
              </p>
              <dl className="as-hours-list">
                <div>
                  <dt>Po–Pá</dt>
                  <dd>8:00–17:00</dd>
                </div>
                <div>
                  <dt>So–Ne</dt>
                  <dd>po dohodě</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href="tel:+420311249434">311 249 434</a>
                  </dd>
                </div>
                <div>
                  <dt>Non-stop</dt>
                  <dd>
                    <a href="tel:+420776757797">776 757 797</a>
                  </dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
