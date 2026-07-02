export default function Page() {
  return (
    <main className="ss-page">
      {/* ================= HERO ================= */}
      <header className="ss-hero">
        <div className="ss-hero-inner">
          <div className="ss-topbar">
            <a href="#" className="ss-wordmark" aria-label="Sport Shop Pardubice — úvod">
              <span className="ss-wordmark-main">SPORT</span>
              <span className="ss-wordmark-sub">SHOP</span>
              <span className="ss-wordmark-city">Pardubice</span>
            </a>
            <nav className="ss-nav" aria-label="Hlavní navigace">
              <a href="#sortiment">Sortiment</a>
              <a href="#servis">Servis a služby</a>
              <a href="tel:+420466000000" className="ss-nav-tel">466 000 000</a>
            </nav>
          </div>

          <div className="ss-hero-grid">
            <div className="ss-hero-copy">
              <p className="ss-hero-eyebrow">Kamenná prodejna sportovních potřeb · Pardubice</p>
              <h1 className="ss-hero-title">
                <span className="ss-line ss-line-1">Vybavíme vás</span>
                <span className="ss-line ss-line-2">od bruslí</span>
                <span className="ss-line ss-line-3">po běžky.</span>
              </h1>
              <p className="ss-hero-lead">
                Hokejky, brusle, kola, běžecké boty i lyže — všechno si u nás
                vezmete do ruky, vyzkoušíte a odnesete ještě dnes. A když něco
                doslouží, nabrousíme, seřídíme a opravíme.
              </p>
              <div className="ss-hero-actions">
                <a href="#sortiment" className="ss-btn ss-btn-primary">Co u nás najdete</a>
                <a href="tel:+420466000000" className="ss-btn ss-btn-ghost">Zavolat prodejnu</a>
              </div>
              <ul className="ss-hero-facts" aria-label="Rychlá fakta o prodejně">
                <li><strong>Po–Pá 9–18</strong><span>So 9–12</span></li>
                <li><strong>Broušení bruslí</strong><span>na počkání</span></li>
                <li><strong>5 minut</strong><span>od enteria areny</span></li>
              </ul>
            </div>
            <figure className="ss-hero-media">
              <img
                src="/hero.webp"
                alt="Interiér prodejny Sport Shop Pardubice s hokejkami, bruslemi a sportovním vybavením"
                className="ss-hero-img"
              />
              <figcaption className="ss-hero-badge">
                <span className="ss-badge-big">Nabrousíme brusle</span>
                <span className="ss-badge-small">na počkání — hokej i krasobruslení</span>
              </figcaption>
            </figure>
          </div>
        </div>
        <div className="ss-track" aria-hidden="true">
          <div className="ss-track-lane" />
          <div className="ss-track-lane ss-track-lane-mid" />
          <div className="ss-track-lane" />
        </div>
      </header>

      {/* ================= SORTIMENT ================= */}
      <section className="ss-section ss-sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="ss-section-inner">
          <div className="ss-section-head">
            <p className="ss-eyebrow">Sortiment podle sezóny</p>
            <h2 id="sortiment-h" className="ss-h2">Pardubice žijí hokejem.<br />My taky — ale nejen jím.</h2>
            <p className="ss-section-lead">
              Sortiment točíme podle toho, co se ve městě zrovna hraje a jezdí.
              Zima patří ledu a běžkám, léto kolům a běhu.
            </p>
          </div>

          <div className="ss-season-grid">
            <article className="ss-season ss-season-winter">
              <span className="ss-season-tag">Zima · říjen–březen</span>
              <h3>Led a sníh</h3>
              <ul className="ss-list">
                <li><strong>Hokejová výstroj</strong> — hokejky, brusle, helmy a chrániče pro žáky i dospělé</li>
                <li><strong>Krasobruslení</strong> — dětské brusle s možností pozdější výměny za větší</li>
                <li><strong>Běžky a lyže</strong> — včetně montáže vázání a voskování</li>
              </ul>
            </article>

            <figure className="ss-season-media">
              <img
                src="/section-1.webp"
                alt="Stěna prodejny s hokejkami a bruslemi připravenými k vyzkoušení"
              />
            </figure>

            <article className="ss-season ss-season-summer">
              <span className="ss-season-tag">Léto · duben–září</span>
              <h3>Silnice a stezky</h3>
              <ul className="ss-list">
                <li><strong>Kola a koloběžky</strong> — složené, seřízené, připravené vyjet na Labskou stezku</li>
                <li><strong>Běh</strong> — boty vybíráme podle došlapu, ne podle katalogu</li>
                <li><strong>Míčové sporty</strong> — florbal, fotbal, tenis a badminton pro školy i kroužky</li>
              </ul>
            </article>
          </div>

          <p className="ss-note">
            Nemáme něco skladem? Objednáme a dáme vědět SMSkou — obvykle do tří
            pracovních dnů. <a href="mailto:info@sportshop-pardubice.cz">Napište nám, co sháníte</a>.
          </p>
        </div>
      </section>

      {/* ================= SERVIS / DŮVĚRA ================= */}
      <section className="ss-section ss-servis" id="servis" aria-labelledby="servis-h">
        <div className="ss-section-inner">
          <div className="ss-servis-grid">
            <figure className="ss-servis-media">
              <img
                src="/section-2.webp"
                alt="Broušení bruslí na brusce v dílně prodejny Sport Shop"
              />
              <figcaption className="ss-servis-caption">Dílna hned za pultem — vidíte, co s vaším vybavením děláme.</figcaption>
            </figure>

            <div className="ss-servis-copy">
              <p className="ss-eyebrow ss-eyebrow-light">Servis a poradna</p>
              <h2 id="servis-h" className="ss-h2 ss-h2-light">Prodat umí každý.<br />My se staráme i potom.</h2>
              <p className="ss-servis-lead">
                Za pultem stojíme sami — žádná brigáda z letáku. Brusle brousíme
                přes dvacet let a poznáme, jestli jezdíte rekreačně, nebo za
                žáky Dynama.
              </p>

              <dl className="ss-servis-list">
                <div className="ss-servis-item">
                  <dt>Broušení bruslí</dt>
                  <dd>Na počkání, hokej i kraso. Radius nastavíme podle vaší váhy a stylu jízdy.</dd>
                </div>
                <div className="ss-servis-item">
                  <dt>Cykloservis</dt>
                  <dd>Seřízení přehazovačky a brzd do druhého dne, garanční prohlídky kol od nás zdarma.</dd>
                </div>
                <div className="ss-servis-item">
                  <dt>Lyže a běžky</dt>
                  <dd>Montáž vázání, voskování, zabroušení hran — před sezónou objednávejte předem.</dd>
                </div>
                <div className="ss-servis-item">
                  <dt>Výplet raket</dt>
                  <dd>Tenis, badminton i squash. Struny vybereme podle toho, jak hrajete.</dd>
                </div>
              </dl>

              <blockquote className="ss-quote">
                <p>
                  „Klukovi brousí brusle před každým zápasem. Zavolám dopoledne,
                  odpoledne vyzvednu. Tohle vám e-shop neudělá.“
                </p>
                <cite>— Petra H., máma žákovského hokejisty, Pardubice-Polabiny</cite>
              </blockquote>

              <div className="ss-servis-contact">
                <a href="tel:+420466000000" className="ss-btn ss-btn-light">Zavolat 466 000 000</a>
                <a href="mailto:info@sportshop-pardubice.cz" className="ss-btn ss-btn-outline">info@sportshop-pardubice.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
