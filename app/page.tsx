export default function Page() {
  return (
    <main className="uk">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="Umakov CZ — ploty a oplocení, Hradec Králové">
        <div className="hero-top">
          <div className="wordmark" aria-label="Umakov CZ">
            <span className="wordmark-name">UMAKOV</span>
            <span className="wordmark-cz">CZ</span>
          </div>
          <p className="hero-loc">Hradec Králové · ploty a oplocení</p>
        </div>

        <div className="hero-body">
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Plot, který</span>
            <span className="hero-line hero-line-2">drží.</span>
            <span className="hero-line hero-line-3">Rovně. Roky.</span>
          </h1>

          <div className="hero-side">
            <p className="hero-lead">
              Pletivové, panelové i kované ploty na míru — od zaměření pozemku
              po poslední samořez. Montujeme v Hradci Králové a do 40 km okolo.
            </p>
            <ul className="hero-facts" aria-label="Rychlá fakta">
              <li><strong>Zdarma</strong> zaměření a cenový návrh do 3 dnů</li>
              <li><strong>Pozink + komaxit</strong> — materiál, který nerezaví</li>
              <li><strong>Vlastní montážní party</strong>, žádní subdodavatelé</li>
            </ul>
            <a className="hero-cta" href="#nabidka">Prohlédnout ploty</a>
          </div>
        </div>

        {/* Signature: plotové pole — svislé tyče z 3D panelu, vykreslené čistě v CSS */}
        <div className="fence" aria-hidden="true">
          <div className="fence-rail fence-rail-top"></div>
          <div className="fence-pickets">
            {Array.from({ length: 28 }).map((_, i) => (
              <span key={i} className="picket" style={{ animationDelay: `${0.04 * i}s` }}></span>
            ))}
          </div>
          <div className="fence-rail fence-rail-bottom"></div>
        </div>
      </header>

      {/* ===== SEKCE: NABÍDKA ===== */}
      <section className="offer" id="nabidka" aria-labelledby="offer-h">
        <div className="section-head">
          <p className="eyebrow">Co stavíme</p>
          <h2 id="offer-h">Tři typy plotů. Každý na jinou práci.</h2>
          <p className="section-lead">
            Neprodáváme katalog — poradíme, který plot dává smysl pro váš pozemek,
            terén a rozpočet. Cenu spočítáme na metr, ne „od–do“.
          </p>
        </div>

        <div className="offer-grid">
          <article className="offer-card">
            <div className="offer-tag">Nejrychlejší</div>
            <h3>Pletivové oplocení</h3>
            <p>
              Poplastované pletivo na napínacích drátech. Ideální kolem zahrady,
              pole nebo pozemku, kde chcete hranici, ne pevnost. Standardní výšky
              100–200 cm.
            </p>
            <p className="offer-price">od 690 Kč / bm s montáží</p>
          </article>

          <article className="offer-card offer-card-main">
            <div className="offer-tag">Nejžádanější</div>
            <h3>3D panelové ploty</h3>
            <p>
              Svařované panely s prolisem, sloupky kotvené do betonu, podhrabové
              desky proti podhrabání psa i sesuvu zeminy. Rovný, tuhý plot pro
              rodinné domy a firemní areály.
            </p>
            <p className="offer-price">od 1 290 Kč / bm s montáží</p>
          </article>

          <article className="offer-card">
            <div className="offer-tag">Na míru</div>
            <h3>Brány a branky</h3>
            <p>
              Křídlové i posuvné brány, samonosné pojezdy, příprava na pohon.
              Vyrobíme přesně na šířku vašeho vjezdu — včetně elektroinstalace
              pro videozvonek.
            </p>
            <p className="offer-price">cena podle zaměření</p>
          </article>
        </div>

        <div className="offer-steps" aria-label="Jak zakázka probíhá">
          <div className="step">
            <span className="step-n">1</span>
            <div>
              <h4>Zaměříme</h4>
              <p>Přijedeme na pozemek, změříme délky, spády a přístup pro techniku.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-n">2</span>
            <div>
              <h4>Naceníme</h4>
              <p>Do 3 pracovních dnů dostanete položkový rozpočet na metr plotu.</p>
            </div>
          </div>
          <div className="step">
            <span className="step-n">3</span>
            <div>
              <h4>Postavíme</h4>
              <p>Běžnou zahradu oplotíme za 2–4 dny. Staveniště předáme uklizené.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SEKCE: DŮVĚRA / O NÁS ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-grid">
          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Montáž 3D panelového plotu — kotvení sloupku do betonové patky, Hradec Králové"
              loading="lazy"
            />
            <figcaption>Montáž panelového plotu, Hradec Králové a okolí</figcaption>
          </figure>

          <div className="trust-copy">
            <p className="eyebrow">Proč Umakov</p>
            <h2 id="trust-h">Plot poznáte až po třetí zimě. My za ním stojíme dál.</h2>
            <p>
              Sloupky kotvíme do nezámrzné hloubky, panely žárově zinkované
              a komaxitované — proto si můžeme dovolit záruku, kterou jinde
              nedostanete. Když se něco pohne, přijedeme a srovnáme to.
            </p>

            <dl className="trust-stats">
              <div>
                <dt>Záruka na konstrukci</dt>
                <dd>10 let</dd>
              </div>
              <div>
                <dt>Dojezd z Hradce Králové</dt>
                <dd>40 km</dd>
              </div>
              <div>
                <dt>Postavených plotů ročně</dt>
                <dd>120+</dd>
              </div>
            </dl>

            <blockquote className="trust-quote">
              <p>
                „Oplotili nám 60 metrů pozemku v Třebechovicích za tři dny.
                Plot stojí rovně i ve svahu a po dvou zimách bez jediné skvrny rzi.“
              </p>
              <cite>— rodina Vackova, Třebechovice pod Orebem</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
