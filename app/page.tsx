export default function Page() {
  return (
    <main className="page">
      {/* HERO — the drill log: depth is the subject's whole world */}
      <header className="nav">
        <a className="brand" href="#top" aria-label="Jaroslav Bečvář — vrtání studní">
          <span className="brand-mark" aria-hidden="true">▽</span>
          <span className="brand-name">Bečvář<span className="brand-sub">vrtané studny · Řepice</span></span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="nav-call" href="tel:+420739075999">Zavolat 739 075 999</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Řepice 121 · jižní Čechy · vrtáme přes 20 let</p>
          <h1 className="hero-title">Kvalitní voda<br/>bývá hluboko.<br/><em>Dostaneme se k ní.</em></h1>
          <p className="hero-lede">Vrtané studny na klíč a vrty pro tepelná čerpadla — od dokumentace přes vrt až po kolaudaci. Rotačně příklepové vrtání zvládne i tvrdou skálu a stísněný pozemek.</p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420739075999">Zavolat a poradit se</a>
            <a className="btn btn-ghost" href="#sluzby">Co vrtáme</a>
          </div>
        </div>

        <figure className="hero-figure">
          <img src="/hero.webp" alt="Vrtná souprava Jaroslava Bečváře při vrtání studny na pozemku" width={880} height={1040} loading="eager" />
          {/* Signature: the depth log running down the vrt */}
          <aside className="log" aria-label="Profil vrtu">
            <ol className="log-list">
              <li><b>0 m</b><span>ornice a jíl</span></li>
              <li><b>25 m</b><span>zvětralá skála</span></li>
              <li><b>60 m</b><span>první přítok</span></li>
              <li><b>110 m</b><span>čistý pramen</span></li>
              <li className="log-max"><b>250 m</b><span>naše maximum</span></li>
            </ol>
          </aside>
        </figure>
      </section>

      {/* SECTION 1 — services as a real sequence of the job */}
      <section className="sluzby" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2>Tři obory, jeden vrták</h2>
        </div>

        <div className="cards">
          <article className="card">
            <span className="card-depth">až 80 m</span>
            <h3>Studny na klíč</h3>
            <p>Komplet od začátku do konce: přijedeme na pozemek, zpracujeme projektovou dokumentaci, vyřídíme povolení, vrtáme a předáme zkolaudovanou studnu. Vodu z vrtu garantujeme čistou.</p>
          </article>
          <article className="card">
            <span className="card-depth">až 250 m</span>
            <h3>Vrty pro tepelná čerpadla</h3>
            <p>Teplo z hloubky zemského masivu — stabilní topný faktor i v mrazech a chlazení v létě. Návratnost bývá rychlá díky úsporám na vytápění. Najdeme řešení přesně pro váš dům.</p>
          </article>
          <article className="card">
            <span className="card-depth">na míru</span>
            <h3>Další vrtné práce</h3>
            <p>Monitorovací, pilotní i sanační vrty, čerpací zkoušky, instalatérské a výkopové práce, projektová dokumentace. Poradíme si i s hůře přístupným, prostorově omezeným místem.</p>
          </article>
        </div>

        <div className="materials">
          <figure className="materials-img">
            <img src="/section-1.webp" alt="Pažnice a roury připravené pro výstroj vrtané studny" width={720} height={520} loading="lazy" />
          </figure>
          <div className="materials-copy">
            <p className="eyebrow">Čím studnu vystrojíme</p>
            <h3>Materiál s atestem na pitnou vodu</h3>
            <ul className="spec">
              <li><b>PVC roury</b><span>Ø 140 a 160 mm · stěna 4,5–9 mm · atest na pitnou vodu</span></li>
              <li><b>Polyetylen</b><span>Ø 200 mm · stěna 9 mm · atest na pitnou vodu</span></li>
              <li><b>Ocelové pažnice</b><span>Ø 155 · 194 · 219 · 244 · 274 mm</span></li>
              <li><b>Technologie</b><span>vzduchové rotačně příklepové vrtání i do tvrdých hornin, metoda TUBEX s dopažováním</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION 2 — trust: slovo majitele */}
      <section className="duvera" id="duvera">
        <div className="duvera-grid">
          <figure className="duvera-img">
            <img src="/section-2.webp" alt="Hotová vrtaná studna s hlavicí na pozemku rodinného domu" width={640} height={720} loading="lazy" />
          </figure>

          <div className="duvera-copy">
            <p className="eyebrow">Slovo majitele</p>
            <blockquote className="quote">
              „Studny vrtáme přes dvacet let. Za tu dobu jsme udělali vrty pro rodinné domy, chaty i zahrady, ale i pro obce, družstva a průmysl — pro každého, kdo řeší nedostatek kvalitní vody. Z našich vrtů garantuji čistou vodu a záruku pět let. A o zákazníky se staráme i po ní.“
            </blockquote>
            <p className="sign">— Jaroslav Bečvář</p>

            <dl className="facts">
              <div><dt>20+</dt><dd>let vrtání studní</dd></div>
              <div><dt>5 let</dt><dd>záruka na dílo</dd></div>
              <div><dt>250 m</dt><dd>maximální hloubka vrtu</dd></div>
            </dl>
          </div>
        </div>

        <div className="faq">
          <p className="eyebrow">Často se ptáte</p>
          <div className="faq-list">
            <details>
              <summary>Vrtá se i v zimě?</summary>
              <p>Ano. Vrtná souprava jede po celý rok, mráz jí nevadí. Termín domluvíme podle vydání stavebního povolení a kapacity.</p>
            </details>
            <details>
              <summary>Čím nejlépe začít?</summary>
              <p>Zavolejte. Přijedeme na pozemek, posoudíme geologii a přístup a navrhneme postup — dokumentaci a povolení vyřídíme za vás.</p>
            </details>
            <details>
              <summary>Dostane se souprava na můj pozemek?</summary>
              <p>Vrtáme i na hůře přístupných a prostorově omezených místech. Přístup posoudíme na místě předem, ať nejsou překvapení.</p>
            </details>
            <details>
              <summary>Do jaké horniny umíte vrtat?</summary>
              <p>Prakticky do jakékoli. Rotačně příklepová technika zvládne i tvrdou skálu, v nesoudržných horninách použijeme metodu TUBEX s dopažováním.</p>
            </details>
          </div>
        </div>
      </section>
    </main>
  );
}
