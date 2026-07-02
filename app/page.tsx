export default function Page() {
  return (
    <main className="vp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Výškové práce České Budějovice">
            <span className="wm-x">VP</span>
            <span className="wm-text">
              <strong>Výškové práce</strong>
              <em>České Budějovice</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420601234567">601&nbsp;234&nbsp;567</a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Pokrývači, kteří se na střechu dostanou i bez lešení</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Střecha</span>
            <span className="ht-line ht-2">v pořádku.</span>
            <span className="ht-line ht-3">Ze&nbsp;země to<br />nepoznáte —</span>
            <span className="ht-line ht-4">my&nbsp;ano.</span>
          </h1>
          <p className="hero-sub">
            Pokrývačské a výškové práce v&nbsp;Českých Budějovicích a&nbsp;okolí.
            Pracujeme z&nbsp;lana, takže nemusíte platit lešení — a&nbsp;na střeše jsme
            často ještě ten den, kdy zavoláte.
          </p>
          <div className="hero-actions">
            <a className="btn-main" href="tel:+420601234567">Zavolat pokrývači</a>
            <span className="hero-note">Prohlídka střechy a&nbsp;odhad ceny zdarma</span>
          </div>
        </div>

        {/* Signature: šikmá střešní rovina s bobrovkovým rastrem a lanem s kotvením */}
        <div className="roofline" aria-hidden="true">
          <svg viewBox="0 0 1200 380" preserveAspectRatio="none" className="roof-svg">
            <defs>
              <pattern id="bobrovky" width="56" height="64" patternUnits="userSpaceOnUse">
                <path d="M0 0 h56 v40 a28 28 0 0 1 -56 0 z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" transform="translate(0,-8)" />
                <path d="M-28 32 h56 v40 a28 28 0 0 1 -56 0 z M28 32 h56 v40 a28 28 0 0 1 -56 0 z" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.5" transform="translate(0,-8)" />
              </pattern>
            </defs>
            <polygon points="0,380 1200,80 1200,380" fill="#B4402A" />
            <polygon points="0,380 1200,80 1200,380" fill="url(#bobrovky)" style={{ color: '#7A2718' }} />
            <line x1="0" y1="380" x2="1200" y2="80" stroke="#1B1F26" strokeWidth="6" />
          </svg>
          <div className="rope">
            <span className="rope-line" />
            <span className="rope-anchor" />
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co pro vaši střechu uděláme</h2>
          <p>
            Většinu zakázek zvládneme z&nbsp;lana. Bez lešení, bez záboru chodníku,
            bez týdnů čekání. U&nbsp;větších rekonstrukcí řekneme rovnou, kdy a&nbsp;za&nbsp;kolik.
          </p>
        </div>

        <ul className="sluzby-grid">
          <li className="sluzba">
            <span className="sl-vyska">do 2 dnů</span>
            <h3>Oprava po vichřici a&nbsp;zatékání</h3>
            <p>
              Uvolněné tašky, uražený hřebenáč, díra po větvi. Najdeme přesné místo,
              kudy zatéká, a&nbsp;opravíme ho dřív, než vám promokne krov.
            </p>
          </li>
          <li className="sluzba">
            <span className="sl-vyska">z lana</span>
            <h3>Výměna tašek a&nbsp;hřebenáčů</h3>
            <p>
              Prasklé bobrovky, betonové i&nbsp;pálené tašky, přezdění hřebene do&nbsp;malty
              nebo na&nbsp;suchou montáž. Doneseme materiál nahoru po&nbsp;laně.
            </p>
          </li>
          <li className="sluzba">
            <span className="sl-vyska">plech i tašky</span>
            <h3>Oplechování a&nbsp;komíny</h3>
            <p>
              Úžlabí, lemování komína, parapety a&nbsp;závětrné lišty z&nbsp;titanzinku
              nebo poplastovaného plechu. Přesně ohnuté, přesně usazené.
            </p>
          </li>
          <li className="sluzba">
            <span className="sl-vyska">2× ročně</span>
            <h3>Čištění žlabů a&nbsp;svodů</h3>
            <p>
              Listí z&nbsp;lip na&nbsp;Lannově třídě ucpe žlab za&nbsp;jeden podzim.
              Vyčistíme okapy, zkontrolujeme spády a&nbsp;háky, vyfotíme stav.
            </p>
          </li>
          <li className="sluzba">
            <span className="sl-vyska">nátěr + revize</span>
            <h3>Nátěry plechových střech</h3>
            <p>
              Odrezíme, napenetrujeme a&nbsp;natřeme falcovanou i&nbsp;trapézovou krytinu.
              Střecha vydrží dalších deset let místo výměny za&nbsp;statisíce.
            </p>
          </li>
          <li className="sluzba">
            <span className="sl-vyska">celé souvrství</span>
            <h3>Rekonstrukce střechy na&nbsp;klíč</h3>
            <p>
              Latě, fólie, krytina, klempířina i&nbsp;sněhové zábrany. Pevný rozpočet
              položku po&nbsp;položce — žádné „vícepráce" na&nbsp;konci.
            </p>
          </li>
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Proč nám Budějovičtí svěřují střechy</h2>
            <ul className="fakta">
              <li>
                <strong>Bez lešení = o&nbsp;desítky tisíc levněji.</strong>
                Certifikovaní lanoví technici (IRATA). Tam, kde jiní staví týden lešení,
                my ráno kotvíme lana a&nbsp;odpoledne je hotovo.
              </li>
              <li>
                <strong>Známe zdejší střechy.</strong>
                Bobrovky v&nbsp;centru, eternit na&nbsp;Suchém Vrbném, panelové domy na&nbsp;Máji.
                Každá chce jiný postup — a&nbsp;my ho známe z&nbsp;praxe, ne z&nbsp;katalogu.
              </li>
              <li>
                <strong>Fotíme před, během i&nbsp;po.</strong>
                Na střechu za&nbsp;námi nevylezete, tak vám ji přineseme dolů: fotodokumentaci
                dostanete ke&nbsp;každé zakázce, i&nbsp;k&nbsp;té za&nbsp;dva tisíce.
              </li>
              <li>
                <strong>Pojištění do&nbsp;10&nbsp;mil.&nbsp;Kč.</strong>
                Pracujeme nad vaší zahradou, autem i&nbsp;chodci. Odpovědnost máme krytou
                a&nbsp;smlouvu podepisujeme před začátkem práce.
              </li>
            </ul>
          </div>

          <div className="duvera-refs">
            <figure className="ref">
              <blockquote>
                „Po lednové vichřici mi chybělo dvacet tašek a&nbsp;pršelo do&nbsp;půdy.
                Volala jsem v&nbsp;osm ráno, ve&nbsp;dvě už měli hotovo. Bez lešení,
                bez rozkopané zahrady."
              </blockquote>
              <figcaption>Marie K., rodinný dům, Rožnov</figcaption>
            </figure>
            <figure className="ref">
              <blockquote>
                „Jako SVJ jsme dostali tři nabídky. Jediní oni přišli s&nbsp;fotkami
                z&nbsp;naší střechy a&nbsp;rozpočtem po&nbsp;položkách. Hřeben přezděný,
                žlaby čisté, cena dodržená na&nbsp;korunu."
              </blockquote>
              <figcaption>Výbor SVJ, Pražská tř., České Budějovice</figcaption>
            </figure>
            <div className="kryjeme">
              <span className="kryjeme-label">Kam vyjedeme</span>
              <p>
                České Budějovice · Hluboká nad Vltavou · Rudolfov · Lišov ·
                Kamenný Újezd · Zliv · Borovany — do&nbsp;30&nbsp;km bez příplatku za&nbsp;dopravu.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
