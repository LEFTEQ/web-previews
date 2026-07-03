export default function Page() {
  return (
    <main className="pk">
      {/* ===== HERO ===== */}
      <section className="pk-hero" aria-labelledby="pk-hero-h">
        <header className="pk-topbar">
          <div className="pk-wordmark" aria-label="Pekařství Majka">
            <span className="pk-wordmark-pe">Pekařství</span>
            <span className="pk-wordmark-majka">MAJKA</span>
          </div>
          <p className="pk-topbar-note">Ostrava-Přívoz · Dobrovského 29 · po–so od 5.30</p>
        </header>

        <div className="pk-hero-grid">
          <div className="pk-hero-copy">
            <p className="pk-eyebrow">Kvasový chleba pečený každou noc v Přívoze</p>
            <h1 id="pk-hero-h" className="pk-hero-title">
              <span className="pk-line pk-line-1">Ve tři ráno</span>
              <span className="pk-line pk-line-2">sázíme do pece.</span>
              <span className="pk-line pk-line-3 pk-accent">V šest voní celá ulice.</span>
            </h1>
            <p className="pk-hero-sub">
              Žitný kvas si vedeme čtrnáctým rokem. Žádné směsi, žádná zlepšovadla —
              mouka ze mlýna v Herálci, voda, sůl a čas. Chleba, který vydrží
              na lince celý týden a chutná i ve čtvrtek.
            </p>
            <div className="pk-hero-actions">
              <a className="pk-btn pk-btn-solid" href="#nabidka">Co dnes pečeme</a>
              <a className="pk-btn pk-btn-line" href="#pekarna">Naše pekárna</a>
            </div>
          </div>

          {/* Signature: „nářez" — grafický průřez bochníkem s hodinami pečení */}
          <div className="pk-loaf" aria-hidden="true">
            <svg className="pk-loaf-svg" viewBox="0 0 420 420" role="presentation">
              <circle cx="210" cy="210" r="196" className="pk-crust" />
              <circle cx="210" cy="210" r="172" className="pk-crumb" />
              {/* póry střídy */}
              <circle cx="150" cy="150" r="16" className="pk-pore" />
              <circle cx="250" cy="120" r="10" className="pk-pore" />
              <circle cx="300" cy="200" r="20" className="pk-pore" />
              <circle cx="200" cy="250" r="26" className="pk-pore" />
              <circle cx="120" cy="240" r="12" className="pk-pore" />
              <circle cx="270" cy="290" r="14" className="pk-pore" />
              <circle cx="170" cy="320" r="9" className="pk-pore" />
              <circle cx="235" cy="180" r="8" className="pk-pore" />
              <circle cx="110" cy="180" r="7" className="pk-pore" />
              <circle cx="310" cy="260" r="8" className="pk-pore" />
              {/* nářez kůrky */}
              <path d="M96 96 Q 210 40 324 96" className="pk-score" />
              <path d="M80 150 Q 210 96 340 150" className="pk-score" />
            </svg>
            <div className="pk-loaf-badge">
              <span className="pk-loaf-badge-num">24 h</span>
              <span className="pk-loaf-badge-txt">zrání kvasu</span>
            </div>
          </div>
        </div>

        {/* Časová osa noci v pekárně — struktura, která je skutečnou sekvencí */}
        <ol className="pk-nightline" aria-label="Jak probíhá noc v pekárně">
          <li><span className="pk-nl-time">22.00</span><span className="pk-nl-what">vedeme kvas</span></li>
          <li><span className="pk-nl-time">01.30</span><span className="pk-nl-what">tvarujeme bochníky</span></li>
          <li><span className="pk-nl-time">03.00</span><span className="pk-nl-what">sázíme do pece</span></li>
          <li><span className="pk-nl-time">05.30</span><span className="pk-nl-what">otevíráme krám</span></li>
        </ol>
      </section>

      {/* ===== NABÍDKA ===== */}
      <section className="pk-section pk-offer" id="nabidka" aria-labelledby="pk-offer-h">
        <div className="pk-section-head">
          <h2 id="pk-offer-h" className="pk-h2">Co u nás koupíte</h2>
          <p className="pk-section-sub">
            Pečeme v menších dávkách a odpoledne bývá vyprodáno.
            Chleba a koláče na víkend si zamluvte telefonicky den dopředu.
          </p>
        </div>

        <div className="pk-offer-grid">
          <article className="pk-card">
            <h3 className="pk-card-title">Kvasové chleby</h3>
            <p className="pk-card-text">
              Přívozský žitno-pšeničný (1 200 g), celožitný formový
              a světlý pšeničný s opečenou kůrkou. Krájíme na počkání.
            </p>
            <p className="pk-card-meta">od 62 Kč · denně, dokud je</p>
          </article>
          <article className="pk-card">
            <h3 className="pk-card-title">Ranní pečivo</h3>
            <p className="pk-card-text">
              Máslové rohlíky, kaiserky se solí a kmínem, žitné dalamánky.
              První várka je na pultě v 5.30, druhá kolem osmé.
            </p>
            <p className="pk-card-meta">od 6 Kč · po–so</p>
          </article>
          <article className="pk-card">
            <h3 className="pk-card-title">Koláče a buchty</h3>
            <p className="pk-card-text">
              Frgály s hruškovými povidly, tvarohové šátečky, makovec
              po babičce. Svatební koláčky pečeme na objednávku od 60 kusů.
            </p>
            <p className="pk-card-meta">od 18 Kč · frgály pá + so</p>
          </article>
          <article className="pk-card">
            <h3 className="pk-card-title">Pro restaurace a kavárny</h3>
            <p className="pk-card-text">
              Rozvážíme po Ostravě každé ráno do 7.00 — chleba, bagety
              i burgerové bulky podle vaší receptury. První závoz na zkoušku zdarma.
            </p>
            <p className="pk-card-meta">ceník na vyžádání · tel. dohoda</p>
          </article>
        </div>
      </section>

      {/* ===== PEKÁRNA / DŮVĚRA ===== */}
      <section className="pk-section pk-about" id="pekarna" aria-labelledby="pk-about-h">
        <div className="pk-about-grid">
          <div className="pk-about-copy">
            <h2 id="pk-about-h" className="pk-h2">Pekárna, kterou znáte po čichu</h2>
            <p>
              Pečeme na Dobrovského ulici v Přívoze od roku 2011. Majka začínala
              se dvěma plechy a jednou pecí; dnes nás v noci u díže stojí pět
              a kvas máme pořád ten samý — dostal jméno Bohouš a nikdy nespí.
            </p>
            <p>
              Mouku bereme z rodinného mlýna, máslo z mlékárny v Kuníně.
              Co ráno neprodáme, odpoledne odváží Potravinová banka Ostrava —
              u nás chleba nekončí v koši.
            </p>
            <dl className="pk-facts">
              <div className="pk-fact"><dt>2011</dt><dd>pečeme v Přívoze</dd></div>
              <div className="pk-fact"><dt>380</dt><dd>bochníků každou noc</dd></div>
              <div className="pk-fact"><dt>14 let</dt><dd>stejný žitný kvas</dd></div>
            </dl>
          </div>

          <div className="pk-quotes">
            <figure className="pk-quote">
              <blockquote>
                „Chodím sem od otevření. Ten kmínový chleba je jediný,
                který doma zmizí dřív, než stihne ztvrdnout.“
              </blockquote>
              <figcaption>— paní Věra, Přívoz</figcaption>
            </figure>
            <figure className="pk-quote">
              <blockquote>
                „Odebíráme denně 40 bochníků do bistra. Za tři roky
                jediné ráno nepřijeli — a to napadl metr sněhu.“
              </blockquote>
              <figcaption>— Tomáš, bistro v centru Ostravy</figcaption>
            </figure>
            <figure className="pk-quote">
              <blockquote>
                „Frgály objednávám na každou rodinnou oslavu.
                Hruškové jsou lepší než na Valašsku, ale to jim neříkejte.“
              </blockquote>
              <figcaption>— pan Karel, Moravská Ostrava</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
