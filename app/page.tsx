export default function Page() {
  return (
    <main className="uk-page">
      {/* ===================== HERO ===================== */}
      <section className="uk-hero" aria-labelledby="uk-hero-title">
        <header className="uk-topbar">
          <a className="uk-wordmark" href="#" aria-label="Úklid Liberec – úvod">
            <span className="uk-wordmark-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="32" height="32" role="presentation" focusable="false">
                <rect x="1" y="1" width="30" height="30" rx="7" fill="var(--modr)" />
                <path d="M8 21c3-5 5-8 8-8s5 3 8 8" fill="none" stroke="var(--pena)" strokeWidth="2.4" strokeLinecap="round" />
                <circle cx="12" cy="11" r="1.7" fill="var(--citrus)" />
                <circle cx="20" cy="9" r="1.2" fill="var(--pena)" />
              </svg>
            </span>
            <span className="uk-wordmark-text">
              úklid<b>liberec</b>
            </span>
          </a>
          <a className="uk-topbar-tel" href="tel:+420485000000">
            <span className="uk-topbar-tel-label">Zavolat</span> 485 000 000
          </a>
        </header>

        <div className="uk-hero-grid">
          <div className="uk-hero-copy">
            <p className="uk-eyebrow">
              <span className="uk-eyebrow-dot" aria-hidden="true" />
              Úklidová firma · Liberec a okolí
            </p>
            <h1 id="uk-hero-title" className="uk-hero-title">
              Váš dům<br />
              a kanceláře.<br />
              <em>Pravidelně čisté.</em>
            </h1>
            <p className="uk-hero-sub">
              Uklízíme společné prostory bytových domů a nevýrobní prostory firem
              v&nbsp;Liberci. Stejná parta, stejný den v&nbsp;týdnu, žádné výmluvy.
            </p>
            <div className="uk-hero-actions">
              <a className="uk-btn uk-btn-primary" href="#sluzby">Co uklízíme</a>
              <a className="uk-btn uk-btn-ghost" href="tel:+420485000000">Zavolat hned</a>
            </div>
            <p className="uk-hero-note">Nezávazná prohlídka objektu a&nbsp;cena do&nbsp;48&nbsp;hodin.</p>
          </div>

          {/* Signature: „rozvrh úklidu" – týdenní mřížka jako z chodby paneláku */}
          <div className="uk-rozvrh" aria-hidden="true">
            <div className="uk-rozvrh-head">
              <span className="uk-rozvrh-title">Rozvrh úklidu</span>
              <span className="uk-rozvrh-obj">Vchod č. 1204 · Rochlice</span>
            </div>
            <div className="uk-rozvrh-body">
              <div className="uk-rozvrh-row uk-r1">
                <span className="uk-rozvrh-day">Po</span>
                <span className="uk-rozvrh-task">Schodiště + zábradlí</span>
                <span className="uk-check">✓</span>
              </div>
              <div className="uk-rozvrh-row uk-r2">
                <span className="uk-rozvrh-day">St</span>
                <span className="uk-rozvrh-task">Vestibul, výtah, zvonky</span>
                <span className="uk-check">✓</span>
              </div>
              <div className="uk-rozvrh-row uk-r3">
                <span className="uk-rozvrh-day">Pá</span>
                <span className="uk-rozvrh-task">Vytírání všech pater</span>
                <span className="uk-check">✓</span>
              </div>
              <div className="uk-rozvrh-row uk-r4 uk-rozvrh-row-mesic">
                <span className="uk-rozvrh-day">1×/měs</span>
                <span className="uk-rozvrh-task">Okna, parapety, sklepní chodba</span>
                <span className="uk-check">✓</span>
              </div>
            </div>
            <div className="uk-rozvrh-foot">Podepsáno: paní Křížová, Úklid Liberec s.r.o.</div>
          </div>
        </div>

        {/* linka mokré podlahy */}
        <div className="uk-wave" aria-hidden="true">
          <svg viewBox="0 0 1440 90" preserveAspectRatio="none" role="presentation" focusable="false">
            <path d="M0,55 C180,15 360,85 540,55 C720,25 900,80 1080,50 C1260,20 1380,60 1440,45 L1440,90 L0,90 Z" fill="var(--pena)" />
          </svg>
        </div>
      </section>

      {/* ===================== SLUŽBY ===================== */}
      <section className="uk-sluzby" id="sluzby" aria-labelledby="uk-sluzby-title">
        <div className="uk-container">
          <div className="uk-section-head">
            <p className="uk-eyebrow">
              <span className="uk-eyebrow-dot" aria-hidden="true" />
              Dvě věci, které umíme pořádně
            </p>
            <h2 id="uk-sluzby-title" className="uk-section-title">
              Pravidelný úklid, na který se dá spolehnout
            </h2>
          </div>

          <div className="uk-cards">
            <article className="uk-card">
              <div className="uk-card-tag">Bytové domy</div>
              <h3 className="uk-card-title">Společné prostory panelových a&nbsp;činžovních domů</h3>
              <p className="uk-card-text">
                Chodby, schodiště, výtahy, vestibuly i&nbsp;prostor u&nbsp;schránek.
                Domluvíme rozvrh s&nbsp;výborem SVJ a&nbsp;držíme ho — sousedé vidí,
                kdy jsme byli a&nbsp;co jsme udělali.
              </p>
              <ul className="uk-card-list">
                <li>Zametení a vytření všech pater</li>
                <li>Výtah — kabina, dveře, zrcadlo</li>
                <li>Zvonková tabla, schránky, madla zábradlí</li>
                <li>1× měsíčně okna na chodbách a sklepní prostory</li>
              </ul>
              <p className="uk-card-price">Cena podle počtu vchodů a pater — po prohlídce na místě.</p>
            </article>

            <article className="uk-card">
              <div className="uk-card-tag uk-card-tag-alt">Firmy a instituce</div>
              <h3 className="uk-card-title">Kanceláře, zasedačky, šatny a&nbsp;sociální zázemí</h3>
              <p className="uk-card-text">
                Uklízíme po pracovní době nebo brzy ráno, ať vaše lidi nerušíme.
                WC a&nbsp;umývárny dezinfikujeme při každém úklidu, ne jednou za&nbsp;měsíc.
              </p>
              <ul className="uk-card-list">
                <li>Kanceláře, zasedací místnosti, kuchyňky</li>
                <li>WC, umývárny, sprchové kouty, šatny</li>
                <li>Chodby, schodiště, vestibuly, výtahy</li>
                <li>Tělocvičny a společné prostory institucí</li>
              </ul>
              <p className="uk-card-price">Frekvence od 1× týdně po každý pracovní den.</p>
            </article>
          </div>

          <div className="uk-jak">
            <h3 className="uk-jak-title">Jak to u nás chodí</h3>
            <ol className="uk-jak-steps">
              <li className="uk-jak-step">
                <span className="uk-jak-num">Po</span>
                <strong>Zavoláte nebo napíšete</strong>
                <span>Řeknete nám, o jaký objekt jde a jak často chcete uklízet.</span>
              </li>
              <li className="uk-jak-step">
                <span className="uk-jak-num">St</span>
                <strong>Přijedeme se podívat</strong>
                <span>Projdeme prostory, spočítáme metry a patra. Zdarma, bez závazku.</span>
              </li>
              <li className="uk-jak-step">
                <span className="uk-jak-num">Pá</span>
                <strong>Dostanete rozvrh a cenu</strong>
                <span>Do 48 hodin. Když si plácneme, začínáme obvykle do týdne.</span>
              </li>
            </ol>
          </div>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="uk-duvera" aria-labelledby="uk-duvera-title">
        <div className="uk-container">
          <div className="uk-duvera-grid">
            <div className="uk-duvera-copy">
              <p className="uk-eyebrow uk-eyebrow-light">
                <span className="uk-eyebrow-dot" aria-hidden="true" />
                Proč nám Liberec věří
              </p>
              <h2 id="uk-duvera-title" className="uk-section-title uk-section-title-light">
                Malá firma z&nbsp;Liberce. Znáte nás jménem, my známe váš vchod.
              </h2>
              <p className="uk-duvera-text">
                Nejsme franšíza s&nbsp;call centrem. Do vašeho domu chodí pořád
                stejná dvojice — ví, kde skřípe výtah, které patro si zaslouží
                víc péče a&nbsp;že v&nbsp;pondělí bývá po&nbsp;víkendu nejvíc práce.
                Když něco nesedí, voláte přímo nám, ne na&nbsp;linku.
              </p>
              <ul className="uk-duvera-body">
                <li><strong>Pojištění odpovědnosti</strong> — kdyby se cokoli poškodilo, řešíme to my.</li>
                <li><strong>Vlastní úklidové prostředky</strong> — nic nechcete skladovat, vše vozíme s sebou.</li>
                <li><strong>Zápis po každém úklidu</strong> — v domě visí rozvrh s podpisem, výbor má přehled.</li>
              </ul>
            </div>

            <div className="uk-refs">
              <figure className="uk-ref">
                <blockquote>
                  „Náš vchod v&nbsp;Rochlici uklízí už čtvrtý rok. Rozvrh na nástěnce
                  sedí na den přesně — to u&nbsp;předchozí firmy nebývalo.“
                </blockquote>
                <figcaption>— předseda SVJ, Rochlice, 6 vchodů</figcaption>
              </figure>
              <figure className="uk-ref">
                <blockquote>
                  „Uklízejí nám kanceláře třikrát týdně po&nbsp;šesté večer.
                  Ráno je klid, čisto a&nbsp;nikdo o&nbsp;nich neví. Přesně tak to má být.“
                </blockquote>
                <figcaption>— vedoucí provozu, kancelářská budova, Liberec-centrum</figcaption>
              </figure>
              <div className="uk-fakta">
                <div className="uk-fakt">
                  <span className="uk-fakt-num">Liberec</span>
                  <span className="uk-fakt-label">a okolí do 20 km — Vratislavice, Stráž, Chrastava</span>
                </div>
                <div className="uk-fakt">
                  <span className="uk-fakt-num">Po–Pá</span>
                  <span className="uk-fakt-label">úklid podle rozvrhu, mimořádný úklid do 3 dnů</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
