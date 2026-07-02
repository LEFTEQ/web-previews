export default function Page() {
  return (
    <main className="cb">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Chleba Brno — kvasové pekařství">
        <header className="hero-top">
          <div className="wordmark" aria-label="Chleba Brno">
            <span className="wordmark-main">CHLEBA</span>
            <span className="wordmark-sub">BRNO</span>
          </div>
          <p className="hero-hours">
            Pečeme út–so <span className="hours-strong">od 6.30</span>
          </p>
        </header>

        <div className="hero-body">
          <h1 className="hero-title">
            <span className="line line-1">Kvas,</span>
            <span className="line line-2">mouka,</span>
            <span className="line line-3">voda, sůl.</span>
            <span className="line line-4">
              A <em>čas</em>.
            </span>
          </h1>

          {/* Signature: nářezový vzor bochníku — tři tahy pekařské žiletky */}
          <div className="score-marks" aria-hidden="true">
            <svg viewBox="0 0 320 420" className="score-svg" role="presentation">
              <path className="score score-a" d="M60 40 C 140 120, 150 210, 100 390" />
              <path className="score score-b" d="M150 20 C 230 110, 240 220, 185 400" />
              <path className="score score-c" d="M240 45 C 305 130, 300 240, 262 380" />
            </svg>
          </div>
        </div>

        <div className="hero-foot">
          <p className="hero-lede">
            Poctivý kvasový chleba z pece v Brně. Žádné droždí, žádné směsi,
            žádné zkratky — těsto zraje přes noc a vy ho poznáte po chuti.
          </p>
          <dl className="hero-facts">
            <div className="fact">
              <dt>Zrání těsta</dt>
              <dd>18 hodin</dd>
            </div>
            <div className="fact">
              <dt>Ingrediencí</dt>
              <dd>čtyři</dd>
            </div>
            <div className="fact">
              <dt>Konzervantů</dt>
              <dd>nula</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===== SEKCE: CO PEČEME ===== */}
      <section className="bake" aria-labelledby="bake-title">
        <div className="section-head">
          <p className="eyebrow">Z pece</p>
          <h2 id="bake-title">Co dnes vytahujeme z pece</h2>
          <p className="section-lede">
            Pečeme málo druhů a pořádně. Každý bochník jde z ruky —
            tvarovaný, naříznutý žiletkou a pečený na kameni.
          </p>
        </div>

        <ul className="bake-list">
          <li className="loaf">
            <div className="loaf-head">
              <h3>Brněnský kvasák</h3>
              <p className="loaf-price">89 Kč / 900 g</p>
            </div>
            <p className="loaf-desc">
              Náš základ. Pšenično-žitný chleba na žitném kvasu, tmavá
              křupavá kůrka, vláčná střída. Vydrží čtyři dny, nejlepší je druhý.
            </p>
            <p className="loaf-note">každý pečicí den</p>
          </li>
          <li className="loaf">
            <div className="loaf-head">
              <h3>Celožitný stoprocent</h3>
              <p className="loaf-price">95 Kč / 800 g</p>
            </div>
            <p className="loaf-desc">
              Hutný, kyselejší, jen žitná mouka a kvas. Chleba pro ty, kdo
              chtějí chuť žita bez kompromisu. Skvělý k sýru a k máslu.
            </p>
            <p className="loaf-note">středa a sobota</p>
          </li>
          <li className="loaf">
            <div className="loaf-head">
              <h3>Semínkový se slunečnicí</h3>
              <p className="loaf-price">99 Kč / 900 g</p>
            </div>
            <p className="loaf-desc">
              Kvasák s praženou slunečnicí a lněným semínkem zapracovaným
              do těsta i na kůrce. Nejrychleji vyprodaný — přijďte dopoledne.
            </p>
            <p className="loaf-note">pátek a sobota</p>
          </li>
          <li className="loaf">
            <div className="loaf-head">
              <h3>Sobotní bageta</h3>
              <p className="loaf-price">45 Kč / kus</p>
            </div>
            <p className="loaf-desc">
              Bílá pšeničná na kvasu, otevřená střída, kůrka co praská.
              Pečeme jen v sobotu ráno a jen omezený počet.
            </p>
            <p className="loaf-note">jen sobota, do vyprodání</p>
          </li>
        </ul>

        <p className="bake-reserve">
          Chcete mít jistotu? Napište nám den předem a bochník vám odložíme
          za pult — stačí jméno a druh.
        </p>
      </section>

      {/* ===== SEKCE: JAK PEČEME / DŮVĚRA ===== */}
      <section className="craft" aria-labelledby="craft-title">
        <div className="section-head section-head--light">
          <p className="eyebrow eyebrow--light">Od kvasu po pult</p>
          <h2 id="craft-title">Jeden bochník, dva dny práce</h2>
          <p className="section-lede section-lede--light">
            Náš chleba nevzniká ráno. Začíná den předem — a přesně proto
            chutná jinak než ten z regálu.
          </p>
        </div>

        <ol className="craft-steps">
          <li className="step">
            <span className="step-time">Den 1 · ráno</span>
            <h3>Krmíme kvas</h3>
            <p>
              Náš žitný kvas vedeme nepřetržitě od otevření pekárny.
              Ráno ho nakrmíme moukou a vodou a necháme pracovat.
            </p>
          </li>
          <li className="step">
            <span className="step-time">Den 1 · odpoledne</span>
            <h3>Mísíme a překládáme</h3>
            <p>
              Mouka z moravských mlýnů, voda, sůl, kvas. Těsto během
              odpoledne několikrát překládáme rukama, aby získalo sílu.
            </p>
          </li>
          <li className="step">
            <span className="step-time">Den 1 · večer → noc</span>
            <h3>Necháme zrát v chladu</h3>
            <p>
              Vytvarované bochníky zrají přes noc v ošatkách v chladu.
              Pomalé kvašení dává chlebu chuť, vůni i stravitelnost.
            </p>
          </li>
          <li className="step">
            <span className="step-time">Den 2 · od 4.00</span>
            <h3>Řežeme a pečeme</h3>
            <p>
              Každý bochník nařízneme žiletkou — náš trojitý řez poznáte
              na kůrce. Pečeme na kameni v páře, v 6.30 otevíráme.
            </p>
          </li>
        </ol>

        <figure className="craft-quote">
          <blockquote>
            <p>
              „Kupuju u nich kvasák každou sobotu už třetí rok. Děcka ho
              sní ještě teplý cestou domů, takže beru rovnou dva.“
            </p>
          </blockquote>
          <figcaption>— Markéta, stálá zákaznice z Veveří</figcaption>
        </figure>

        <div className="craft-contact">
          <p className="craft-contact-label">Najdete nás v Brně</p>
          <p className="craft-contact-line">
            Pekárna a pult v centru Brna · út–so 6.30–13.00 nebo do vyprodání
          </p>
          <div className="craft-contact-actions">
            <a className="btn btn--solid" href="tel:+420777000000">
              Zavolat do pekárny
            </a>
            <a className="btn btn--ghost" href="mailto:pekarna@chlebabrno.cz">
              Odložit chleba e-mailem
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
