export default function Page() {
  return (
    <>
      <a className="skip-link" href="#nabidka">Přeskočit na obsah</a>

      <header className="top-bar">
        <div className="top-bar-inner">
          <span className="wordmark" aria-label="PROKLIMA stínicí technika">
            <span className="wordmark-mark" aria-hidden="true">
              <svg viewBox="0 0 48 32" width="34" height="23">
                <rect x="0" y="2" width="48" height="3.4" fill="currentColor" />
                <rect x="0" y="9.2" width="48" height="3.4" fill="currentColor" />
                <rect x="0" y="16.4" width="36" height="3.4" fill="currentColor" />
                <rect x="0" y="23.6" width="24" height="3.4" fill="currentColor" />
              </svg>
            </span>
            <span>
              PRO<strong>KLIMA</strong>
              <em>stínicí technika s.r.o.</em>
            </span>
          </span>
          <span className="top-bar-loc">Jesenice u Prahy · od 2003</span>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Detail lamel venkovní hliníkové žaluzie na fasádě rodinného domu"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-content">
          <p className="eyebrow">Stínicí technika · Jesenice u Prahy · 11 poboček v ČR</p>
          <h1 className="hero-title">
            Slunce si <span className="hero-title-accent">necháte</span><br />
            naklopit na míru.
          </h1>
          <p className="hero-sub">
            Venkovní a vnitřní žaluzie, rolety, plisé a markýzy, které navrhneme,
            vyrobíme a namontujeme přesně na vaše okna. Přes 3 miliony zastíněných
            oken, 4letá záruka a servis i po ní.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#showroomy">Najít nejbližší showroom</a>
            <a className="btn btn-ghost" href="#nabidka">Chci pomoct s výběrem</a>
          </div>

          <dl className="hero-stats">
            <div className="hero-stat">
              <dt>Zkušenosti</dt>
              <dd>20 let na trhu, 3 mil.+ oken</dd>
            </div>
            <div className="hero-stat">
              <dt>Záruka kvality</dt>
              <dd>4 roky na výrobky</dd>
            </div>
            <div className="hero-stat">
              <dt>Jsme v místě</dt>
              <dd>11 poboček po ČR</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="nabidka" className="section products">
        <div className="section-head">
          <p className="eyebrow">Nabídka produktů</p>
          <h2>Stínění na každé okno, terasu i zimní zahradu</h2>
          <p className="section-lead">
            Jsme největší partner české značky Climax. Poradíme, co dává na vašem
            domě smysl, a od zaměření po montáž vše zajistíme sami.
          </p>
        </div>

        <div className="products-layout">
          <div className="products-media">
            <img
              src="/section-1.webp"
              alt="Showroom Proklima se vzorky venkovních žaluzií a látek pro stínění"
              className="products-img"
            />
          </div>

          <ul className="products-list" role="list">
            <li><span className="products-index">01</span><span>Venkovní žaluzie</span></li>
            <li><span className="products-index">02</span><span>Vnitřní žaluzie</span></li>
            <li><span className="products-index">03</span><span>Venkovní rolety</span></li>
            <li><span className="products-index">04</span><span>Vnitřní rolety</span></li>
            <li><span className="products-index">05</span><span>Plisé žaluzie</span></li>
            <li><span className="products-index">06</span><span>Sítě proti hmyzu</span></li>
            <li><span className="products-index">07</span><span>Závěsy a záclony</span></li>
            <li><span className="products-index">08</span><span>Screenové rolety</span></li>
            <li><span className="products-index">09</span><span>Markýzy</span></li>
            <li><span className="products-index">10</span><span>Pergoly a stínění zimních zahrad</span></li>
          </ul>
        </div>

        <div className="smart-strip">
          <div className="smart-text">
            <p className="eyebrow eyebrow-light">Chytrá domácnost</p>
            <h3>Napojíme stínění na Somfy — a ovládáte ho z mobilu i podle slunce</h3>
            <p>Ráno se rolety samy vytáhnou, večer stáhnou, žaluzie se sklopí, když
              slunce zrovna práskne do fasády. Nabízíme i solární pohon bez
              nutnosti kabeláže.</p>
          </div>
          <span className="smart-tag">Solární pohon</span>
        </div>

        <div id="showroomy" className="showroom-block">
          <p className="eyebrow">11 showroomů po celé ČR</p>
          <h3>Přijďte se podívat na stínění naživo</h3>
          <p className="section-lead">
            Ukážeme rozdíly mezi typy stínění, sáhnete si na vzorníky materiálů
            a poradíme podle konkrétního domu.
          </p>
          <ul className="showroom-grid" role="list">
            <li>Praha 5</li>
            <li>Praha 6</li>
            <li>Praha 8</li>
            <li className="is-hq">Jesenice u Prahy</li>
            <li>Brno</li>
            <li>Plzeň</li>
            <li>Liberec</li>
            <li>Mladá Boleslav</li>
            <li>Český Brod</li>
            <li>Prostějov</li>
            <li>Olomouc</li>
          </ul>
        </div>
      </section>

      <section className="section trust">
        <div className="trust-layout">
          <div className="trust-media">
            <img
              src="/section-2.webp"
              alt="Technik Proklima při montáži venkovní žaluzie na rodinném domě"
              className="trust-img"
            />
            <p className="trust-caption">20 let montujeme stínění po celé ČR</p>
          </div>

          <div className="trust-content">
            <p className="eyebrow">O nás</p>
            <h2>Rodinná firma, na kterou se dá spolehnout</h2>
            <p className="section-lead">
              Na českém trhu působíme přes 20 let. Za tu dobu jsme zastínili víc
              než 3 miliony oken po celé republice. Každý výrobek prochází
              testováním a výstupní kontrolou, než se dostane k vám domů.
            </p>

            <blockquote className="testimonial">
              <p>
                „Firma od zaměření, nabídky, objednávky až po samotnou
                realizaci pracovala velmi profesionálně, kvalitně, rychle a
                spolehlivě. Výsledkem jsou perfektní venkovní rolety.“
              </p>
              <footer>Pavel Šlambora, rodinný dům se venkovními roletami</footer>
            </blockquote>

            <blockquote className="testimonial">
              <p>
                „Rychlá dodávka venkovních žaluzií, velmi zkušení technici si
                při montáži poradili i se všemi obtížemi na místě. Nic pro ně
                nebyl problém.“
              </p>
              <footer>Kateřina Šilhánová, venkovní žaluzie do bytu</footer>
            </blockquote>

            <blockquote className="testimonial">
              <p>
                „Sítě proti hmyzu jsou téměř neviditelné, ale přesto perfektně
                fungují. Vše proběhlo přesně podle domluvených termínů i cen.“
              </p>
              <footer>Vít Spíšek, venkovní žaluzie a sítě proti hmyzu</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </>
  );
}
