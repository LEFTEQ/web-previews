export default function Page() {
  return (
    <main className="zl-page">
      {/* ============ HERO ============ */}
      <header className="zl-hero">
        <div className="zl-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" className="zl-hero-img" />
          <div className="zl-hero-scrim"></div>
        </div>

        <div className="zl-hero-inner">
          <div className="zl-topbar">
            <div className="zl-wordmark">
              <span className="zl-wordmark-main">LAKOVNA</span>
              <span className="zl-wordmark-sub">Žebětín · Brno</span>
            </div>
            <a className="zl-topbar-tel" href="tel:+420724721173">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.3 0 .7-.2 1l-2.3 2.2Z" fill="currentColor"/>
              </svg>
              724 721 173
            </a>
          </div>

          <div className="zl-hero-copy">
            <p className="zl-hero-eyebrow">Autoservis-lakovna Žebětín · rodinná firma od roku 2008</p>
            <h1 className="zl-hero-title">
              Barvu vašeho auta<br />
              namícháme <em className="zl-hero-em">na&nbsp;odstín&nbsp;přesně</em>
            </h1>
            <p className="zl-hero-lead">
              Lakování, klempířina a renovace v Brně-Žebětíně. Opravený díl poznáte
              jen podle toho, že vypadá líp než zbytek auta.
            </p>
            <div className="zl-hero-actions">
              <a className="zl-btn zl-btn-fill" href="tel:+420724721173">Zavolat a objednat se</a>
              <a className="zl-btn zl-btn-ghost" href="#sluzby">Co všechno lakujeme</a>
            </div>
            <p className="zl-hero-note">
              Cenový odhad opravy připravíme <strong>zdarma</strong>. Přijeďte po telefonické domluvě
              — bez objednání nás na dílně nemusíte zastihnout.
            </p>
          </div>

          {/* signature: vzorník odstínů — mixovací karta lakýrníka */}
          <div className="zl-swatchbar" aria-hidden="true">
            <div className="zl-swatch" style={{ background: '#8f1d22' }}><span>RAL 3003</span></div>
            <div className="zl-swatch" style={{ background: '#1c3f6e' }}><span>RAL 5010</span></div>
            <div className="zl-swatch" style={{ background: '#c8c8c4' }}><span>RAL 9006</span></div>
            <div className="zl-swatch" style={{ background: '#20211f' }}><span>RAL 9005</span></div>
            <div className="zl-swatch" style={{ background: '#e8e4d8' }}><span>RAL 9001</span></div>
            <div className="zl-swatch zl-swatch-mix"><span>váš odstín</span></div>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="zl-section zl-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="zl-section-inner">
          <div className="zl-section-head">
            <p className="zl-eyebrow">Od odhadu ceny po předání klíčů</p>
            <h2 className="zl-h2" id="sluzby-h">Auto k nám přivezete promáčklé.<br />Odvezete si ho v původním lesku.</h2>
          </div>

          <div className="zl-services-grid">
            <div className="zl-services-media">
              <img
                src="/section-1.webp"
                alt="Lakýrník stříká karoserii vozu ve stříkací kabině"
                className="zl-img"
              />
              <p className="zl-media-caption">Stříkací kabina, Ríšova 7a, Žebětín</p>
            </div>

            <ul className="zl-service-list">
              <li className="zl-service">
                <h3 className="zl-service-title">Lakování vozidel</h3>
                <p>Od jednoho blatníku po celý vůz. Odstín namícháme podle kódu barvy
                i podle skutečného stavu laku — vyblednutí sluncem umíme dorovnat.</p>
              </li>
              <li className="zl-service">
                <h3 className="zl-service-title">Klempířské práce</h3>
                <p>Promáčkliny, deformace po nehodě, výměny dílů. Karoserii srovnáme
                a připravíme tak, aby pod novým lakem nic nebylo poznat.</p>
              </li>
              <li className="zl-service">
                <h3 className="zl-service-title">Renovace motocyklů</h3>
                <p>Nádrže, blatníky, rámy. Vrátíme veteránovi původní barvu, nebo mu
                dáme úplně novou — podle vašeho vkusu, ne katalogu.</p>
              </li>
              <li className="zl-service">
                <h3 className="zl-service-title">Pojistné události</h3>
                <p>Jsme smluvní servis pojišťoven <strong>Uniqa</strong> a <strong>Generali</strong>.
                Papírování s pojišťovnou vyřídíme za vás — vy jen přistavíte auto.</p>
              </li>
              <li className="zl-service">
                <h3 className="zl-service-title">Náhradní vozidlo</h3>
                <p>Po dobu opravy vám půjčíme auto, abyste nezůstali stát.
                Domluvíme při objednání opravy.</p>
              </li>
            </ul>
          </div>

          <div className="zl-estimate">
            <p className="zl-estimate-text">
              <strong>Odhad ceny opravy zdarma.</strong> Zavolejte, domluvíme termín prohlídky
              a do pár dní víte, na čem jste.
            </p>
            <a className="zl-btn zl-btn-fill" href="tel:+420724721173">Zavolat: 724 721 173</a>
          </div>
        </div>
      </section>

      {/* ============ O NÁS / DŮVĚRA ============ */}
      <section className="zl-section zl-trust" aria-labelledby="duvera-h">
        <div className="zl-section-inner">
          <div className="zl-trust-grid">
            <div className="zl-trust-copy">
              <p className="zl-eyebrow zl-eyebrow-light">Rodinná dílna od roku 2008</p>
              <h2 className="zl-h2" id="duvera-h">V Žebětíně lakujeme přes patnáct let. Zákazníci se k nám vracejí — a přivážejí i druhé auto.</h2>
              <p className="zl-trust-p">
                Nejsme řetězec ani anonymní servis. Auto vám předá stejný člověk,
                který ho lakoval, a za práci ručí vlastním jménem. Kvalita odvedené
                práce a spokojený zákazník jsou u nás na prvním místě od prvního dne.
              </p>
              <blockquote className="zl-cert">
                <p className="zl-cert-quote">
                  „Certifikát Prověřená společnost se uděluje za bezchybnou pověst,
                  etiku při podnikání a spolehlivý přístup k závazkům vůči klientům
                  i dodavatelům.“
                </p>
                <footer className="zl-cert-src">
                  Certifikát <strong>Prověřená společnost 2024</strong> — díky recenzím našich zákazníků
                </footer>
              </blockquote>
              <dl className="zl-facts">
                <div className="zl-fact">
                  <dt>Kde nás najdete</dt>
                  <dd>
                    Ríšova 7a, Brno-Žebětín, 641 00
                    <a
                      className="zl-fact-link"
                      href="https://mapy.cz/zakladni?q=%C5%98%C3%AD%C5%A1ova%207a%2C%20Brno-%C5%BDeb%C4%9Bt%C3%ADn"
                    >
                      Navigovat do dílny
                    </a>
                  </dd>
                </div>
                <div className="zl-fact">
                  <dt>Objednání</dt>
                  <dd>
                    Vždy předem telefonicky
                    <a className="zl-fact-link" href="tel:+420724721173">+420 724 721 173</a>
                  </dd>
                </div>
                <div className="zl-fact">
                  <dt>Pojišťovny</dt>
                  <dd>Smluvní servis Uniqa a Generali — likvidaci vyřídíme za vás</dd>
                </div>
              </dl>
            </div>
            <div className="zl-trust-media">
              <img
                src="/section-2.webp"
                alt="Detail čerstvě nalakované kapoty auta v dílně v Žebětíně"
                className="zl-img"
              />
              <p className="zl-media-caption">Hotová zakázka před předáním zákazníkovi</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
