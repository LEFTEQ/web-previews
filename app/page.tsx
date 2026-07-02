export default function Page() {
  return (
    <main className="zvc">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="hero-scrim" />
        </div>

        <div className="hero-top container">
          <a className="wordmark" href="#sluzby" aria-label="ZVČ, s.r.o. — na začátek stránky">
            <span className="wordmark-mono">ZVČ</span>
            <span className="wordmark-sub">zemní · vodohospodářská · demoliční</span>
          </a>
          <a className="hero-phone" href="tel:+420731180036">+420 731 180 036</a>
        </div>

        <div className="hero-body container">
          <p className="hero-eyebrow">Demoliční a zemní práce · Hradec Králové</p>
          <h1 className="hero-title">
            <span className="line line-1">Zbouráme,</span>
            <span className="line line-2">odvezeme,</span>
            <span className="line line-3 accent">srovnáme terén.</span>
          </h1>
          <p className="hero-lead">
            Demolice zděných i betonových staveb, odvoz a uložení suti, terénní
            úpravy pozemku pro další stavbu. Vlastní technika, vlastní lidé,
            jedna firma od první rány po čistý pozemek.
          </p>
          <div className="hero-ctas">
            <a className="btn btn-solid" href="tel:+420731180036">Zavolat jednateli</a>
            <a className="btn btn-ghost" href="#sluzby">Co všechno děláme</a>
          </div>
        </div>

        {/* signature: demoliční pásmo — šrafovaná výstražná linka */}
        <div className="hazard-band" role="presentation">
          <span className="hazard-label">DEMOLIČNÍ PÁSMO — VSTUP JEN V PŘILBĚ</span>
          <span className="hazard-label" aria-hidden="true">DEMOLIČNÍ PÁSMO — VSTUP JEN V PŘILBĚ</span>
          <span className="hazard-label" aria-hidden="true">DEMOLIČNÍ PÁSMO — VSTUP JEN V PŘILBĚ</span>
        </div>
      </header>

      {/* ===== SEKCE 1: POSTUP / SLUŽBY ===== */}
      <section className="section section-work" id="sluzby" aria-labelledby="sluzby-h">
        <div className="container">
          <p className="eyebrow">Jak zakázka probíhá</p>
          <h2 className="section-title" id="sluzby-h">
            Od stojící budovy k pozemku připravenému na stavbu
          </h2>
          <p className="section-lead">
            Demolice není jen bourání. Je to sled kroků, které na sebe musí
            navazovat — proto je u nás všechny děláme sami a ručíme za celek.
          </p>

          <ol className="steps">
            <li className="step">
              <div className="step-marker" aria-hidden="true">
                <span className="step-num">1</span>
                <span className="step-line" />
              </div>
              <div className="step-body">
                <h3>Obhlídka a nabídka</h3>
                <p>
                  Přijedeme na místo, posoudíme konstrukci, přístup techniky a
                  množství suti. Do týdne máte pevnou cenu — bez položek
                  „bude upřesněno“.
                </p>
              </div>
            </li>
            <li className="step">
              <div className="step-marker" aria-hidden="true">
                <span className="step-num">2</span>
                <span className="step-line" />
              </div>
              <div className="step-body">
                <h3>Demolice</h3>
                <p>
                  Zděné i betonové stavby — rodinné domy, hospodářské objekty,
                  průmyslové haly, základové desky. Bouráme strojně vlastními
                  bagry s hydraulickými kladivy a drapáky.
                </p>
              </div>
            </li>
            <li className="step">
              <div className="step-marker" aria-hidden="true">
                <span className="step-num">3</span>
                <span className="step-line" />
              </div>
              <div className="step-body">
                <h3>Odvoz a uložení suti</h3>
                <p>
                  Suť roztřídíme, naložíme a odvezeme vlastní autodopravou na
                  řízenou skládku nebo k recyklaci. Doklad o uložení dostanete
                  ke kolaudaci i pro úřady.
                </p>
              </div>
            </li>
            <li className="step">
              <div className="step-marker" aria-hidden="true">
                <span className="step-num">4</span>
                <span className="step-line step-line-end" />
              </div>
              <div className="step-body">
                <h3>Terénní úpravy a základy</h3>
                <p>
                  Pozemek srovnáme, zhutníme a připravíme — výkopy pro nové
                  základy, přípojky inženýrských sítí, příjezdovou cestu.
                  Předáváme parcelu, na které se dá hned stavět.
                </p>
              </div>
            </li>
          </ol>

          <aside className="work-more">
            <h3 className="work-more-title">Nejen demolice</h3>
            <ul className="work-more-list">
              <li><strong>Zemní práce</strong> — výkopy, hloubení základů, protipovodňové hráze a poldry, polní a lesní cesty.</li>
              <li><strong>Vodohospodářské stavby</strong> — revitalizace rybníků a říčních toků, vodní nádrže, jezy a kamenné zdi na tocích.</li>
              <li><strong>Autodoprava</strong> — doprava stavebního materiálu po celé ČR.</li>
            </ul>
          </aside>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / O NÁS ===== */}
      <section className="section section-trust" aria-labelledby="duvera-h">
        <div className="container trust-grid">
          <div className="trust-media">
            <img
              src="/section-1.webp"
              alt="Bagr ZVČ s hydraulickým kladivem při demolici zděné budovy"
            />
            <p className="trust-media-caption">Demolice hospodářského objektu, Královéhradecko</p>
          </div>

          <div className="trust-text">
            <p className="eyebrow eyebrow-light">Proč ZVČ</p>
            <h2 className="section-title" id="duvera-h">
              Firma ze Škodovky, která bourá po celém kraji
            </h2>
            <p>
              Sídlíme v Hradci Králové Za Škodovkou a většinu zakázek děláme
              v okruhu, kam náš bagr dojede na podvalníku za hodinu. Klienti nás
              znají z demolic pro obce, zemědělce i soukromé stavebníky —
              a hlavně z toho, že po nás zůstává uklizený pozemek, ne skládka.
            </p>

            <dl className="trust-facts">
              <div className="fact">
                <dt>Vlastní technika</dt>
                <dd>Bagry, hydraulická kladiva, nakladače i nákladní vozy. Nečekáte na cizí stroje.</dd>
              </div>
              <div className="fact">
                <dt>Doklady k suti</dt>
                <dd>Potvrzení o uložení odpadu ke každé zakázce — pro stavební úřad i kolaudaci.</dd>
              </div>
              <div className="fact">
                <dt>Zkušení strojníci</dt>
                <dd>Bourání vedle stojících objektů i v zástavbě. Bez škod na sousedních stavbách.</dd>
              </div>
              <div className="fact">
                <dt>Ověření partneři</dt>
                <dd>Na specializace mimo náš záběr (plynofikace, živice, elektro) máme prověřené firmy.</dd>
              </div>
            </dl>

            <div className="trust-contact">
              <p className="trust-contact-label">Domluvte si obhlídku zdarma</p>
              <div className="trust-people">
                <p><strong>Jakub Matoušek</strong> — jednatel<br /><a href="tel:+420731180036">+420 731 180 036</a></p>
                <p><strong>Lenka Klausová</strong> — obchodní referentka<br /><a href="tel:+420602209096">+420 602 209 096</a></p>
              </div>
              <p className="trust-address">Za Škodovkou 898, 503 11 Hradec Králové · <a href="mailto:zvc.hk@zvcsro.cz">zvc.hk@zvcsro.cz</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
