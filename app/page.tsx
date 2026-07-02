export default function Page() {
  return (
    <main className="ac-page">
      {/* ===== HERO ===== */}
      <header className="ac-hero">
        <div className="ac-hero-top">
          <div className="ac-wordmark" aria-label="Atelier Club, fotoateliér Liberec">
            <span className="ac-wordmark-main">Atelier</span>
            <span className="ac-wordmark-sub">Club</span>
          </div>
          <p className="ac-hero-loc">Pražská 21 · Liberec</p>
        </div>

        <div className="ac-hero-stage">
          {/* Signature: hledáček / rámeček kinofilmového políčka */}
          <div className="ac-frame" aria-hidden="true">
            <span className="ac-frame-corner ac-tl"></span>
            <span className="ac-frame-corner ac-tr"></span>
            <span className="ac-frame-corner ac-bl"></span>
            <span className="ac-frame-corner ac-br"></span>
            <span className="ac-frame-cross"></span>
          </div>

          <h1 className="ac-hero-title">
            <span className="ac-line ac-line-1">Světlo</span>
            <span className="ac-line ac-line-2">umíme</span>
            <span className="ac-line ac-line-3">nastavit<span className="ac-dot">.</span></span>
          </h1>

          <p className="ac-hero-sub">
            Fotoateliér v centru Liberce. Portréty, rodinné fotky i produktové
            snímky pro váš e‑shop — v ateliéru s profesionálním světlem,
            nebo u vás.
          </p>

          <div className="ac-hero-cta">
            <a className="ac-btn ac-btn-solid" href="#sluzby">Co fotíme</a>
            <a className="ac-btn ac-btn-ghost" href="#atelier">Jak to u nás vypadá</a>
          </div>
        </div>

        {/* pás perforace kinofilmu */}
        <div className="ac-filmstrip" aria-hidden="true">
          <div className="ac-film-holes ac-holes-top"></div>
          <div className="ac-film-labels">
            <span>PORTRÉT</span><span>36A</span>
            <span>RODINA</span><span>37</span>
            <span>PRODUKT</span><span>37A</span>
            <span>DOKUMENTY</span><span>38</span>
            <span>UDÁLOSTI</span><span>38A</span>
          </div>
          <div className="ac-film-holes ac-holes-bottom"></div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ac-section ac-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ac-section-head">
          <p className="ac-eyebrow">Co u nás nafotíte</p>
          <h2 id="sluzby-h" className="ac-h2">Přijdete, sednete si pod světla, odejdete s hotovými fotkami.</h2>
        </div>

        <ul className="ac-service-grid">
          <li className="ac-card">
            <span className="ac-card-tag">f/2.8 · měkké světlo</span>
            <h3 className="ac-card-title">Portrét &amp; rodina</h3>
            <p className="ac-card-text">
              Profilovka na LinkedIn, fotka pro kapelu nebo celá rodina včetně
              psa. Focení trvá 30–60 minut, upravené snímky posíláme do tří dnů.
            </p>
            <p className="ac-card-price">od 1 200 Kč</p>
          </li>
          <li className="ac-card">
            <span className="ac-card-tag">f/8 · stálé světlo</span>
            <h3 className="ac-card-title">Produktová fotografie</h3>
            <p className="ac-card-text">
              Fotky pro e‑shop na bílém i s aranžmá. Šperky, keramika, pivo
              z libereckých minipivovarů — sjednotíme celý katalog do jednoho stylu.
            </p>
            <p className="ac-card-price">od 90 Kč / snímek</p>
          </li>
          <li className="ac-card">
            <span className="ac-card-tag">f/5.6 · bleskové světlo</span>
            <h3 className="ac-card-title">Doklady na počkání</h3>
            <p className="ac-card-text">
              Fotka na občanku, pas, řidičák i víza — podle platných norem,
              vytištěná do deseti minut. Bez objednání, stačí přijít.
            </p>
            <p className="ac-card-price">od 250 Kč</p>
          </li>
          <li className="ac-card">
            <span className="ac-card-tag">f/4 · dostupné světlo</span>
            <h3 className="ac-card-title">Události a reportáž</h3>
            <p className="ac-card-text">
              Firemní večírek, ples, křtiny nebo koncert v Lidových sadech.
              Přijedeme kamkoli po Liberci a okolí, fotky dodáme do týdne.
            </p>
            <p className="ac-card-price">od 2 500 Kč</p>
          </li>
        </ul>
      </section>

      {/* ===== ATELIÉR / DŮVĚRA ===== */}
      <section className="ac-section ac-about" id="atelier" aria-labelledby="atelier-h">
        <div className="ac-about-grid">
          <div className="ac-about-copy">
            <p className="ac-eyebrow ac-eyebrow-light">Ateliér na Pražské 21</p>
            <h2 id="atelier-h" className="ac-h2 ac-h2-light">
              Dvě minuty pěšky od radnice, dvacet let za objektivem.
            </h2>
            <p className="ac-about-text">
              Ateliér vede fotograf Tomáš Ornst. Najdete nás v prvním patře domu
              na Pražské — na pěší zóně, kudy stejně chodíte. Uvnitř čeká 40 m²
              ateliéru, tři pozadí, softboxy i tvrdé bleskové světlo a kout
              s kávou, kde se nervózní modely uklidní dřív, než cvakneme první snímek.
            </p>
            <ul className="ac-facts">
              <li>
                <span className="ac-fact-num">40 m²</span>
                <span className="ac-fact-label">prostoru s denním i umělým světlem</span>
              </li>
              <li>
                <span className="ac-fact-num">3 dny</span>
                <span className="ac-fact-label">na dodání upravených fotografií</span>
              </li>
              <li>
                <span className="ac-fact-num">10 min</span>
                <span className="ac-fact-label">a máte v ruce fotky na doklady</span>
              </li>
            </ul>
          </div>

          <div className="ac-quotes">
            <figure className="ac-quote">
              <blockquote>
                „Syn se v ateliéru poprvé v životě usmál na fotce. Pan Ornst si
                s ním půl hodiny povídal o vlacích a fotil mezitím.“
              </blockquote>
              <figcaption>— Markéta H., rodinné focení</figcaption>
            </figure>
            <figure className="ac-quote">
              <blockquote>
                „Nafotili nám 180 produktů za dva dny a všechny vypadají,
                jako by je fotil jeden člověk jedním okem. Přesně to jsme potřebovali.“
              </blockquote>
              <figcaption>— e‑shop s keramikou, Liberec</figcaption>
            </figure>
            <figure className="ac-quote">
              <blockquote>
                „Přišla jsem v pátek ve čtyři, v půl páté jsem odcházela
                s fotkou na pas. Bez stresu, bez objednávání.“
              </blockquote>
              <figcaption>— Jana P., fotografie na doklady</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
