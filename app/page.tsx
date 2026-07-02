export default function Page() {
  return (
    <main className="cp">
      {/* ================= HERO ================= */}
      <header className="hero">
        <nav className="hero__nav" aria-label="Hlavní navigace">
          <div className="wordmark">
            <span className="wordmark__badge" aria-hidden="true">CP</span>
            <span className="wordmark__text">
              Cestářské práce<span className="wordmark__suffix"> s.r.o.</span>
            </span>
          </div>
          <a className="hero__call" href="tel:+420485100100">
            <span className="hero__call-dot" aria-hidden="true"></span>
            Zavolat dispečink
          </a>
        </nav>

        <div className="hero__body">
          <p className="hero__eyebrow">
            <span className="eyebrow-chip">Autodoprava &amp; zemní práce</span>
            <span className="eyebrow-loc">Liberec a Liberecký kraj</span>
          </p>
          <h1 className="hero__title">
            <span className="hero__line hero__line--1">Naložíme.</span>
            <span className="hero__line hero__line--2">Odvezeme.</span>
            <span className="hero__line hero__line--3">
              Za&shy;skládkujeme<span className="hero__dot">.</span>
            </span>
          </h1>
          <p className="hero__lead">
            Sklápěče, bagry a nakladače pro stavby, rekonstrukce a zemní práce.
            Odvoz suti a výkopku včetně skládkovného — jedna faktura, žádné dohadování.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420485100100">Zavolat: 485 100 100</a>
            <a className="btn btn--ghost" href="#sluzby">Co odvezeme a vykopeme</a>
          </div>
        </div>

        {/* Signature: vodorovné dopravní značení jako grafický systém */}
        <div className="road" aria-hidden="true">
          <div className="road__edge road__edge--top"></div>
          <div className="road__dash"></div>
          <div className="road__edge road__edge--bottom"></div>
          <div className="road__meta">
            <span>km 0,0 — Liberec</span>
            <span>nosnost do 18 t</span>
            <span>provoz po–so</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-kicker">Služby</p>
          <h2 id="sluzby-h" className="section-title">
            Od výkopu po skládku.<br />Všechno pod jednou střechou.
          </h2>
        </div>

        <div className="services__grid">
          <article className="card">
            <div className="card__sign" aria-hidden="true">E13</div>
            <h3 className="card__title">Autodoprava a odvoz</h3>
            <p className="card__text">
              Sklápěče 3–18 t pro odvoz suti, výkopku, zeminy a štěrku. Dovezeme
              písek, recyklát nebo kačírek přímo na vaši stavbu v Liberci a okolí.
            </p>
            <ul className="card__list">
              <li>Kontejnery 3, 5 a 9 m³ — přistavíme i na den</li>
              <li>Odvoz suti včetně naložení bagrem</li>
              <li>Doprava sypkých materiálů z pískoven v kraji</li>
            </ul>
          </article>

          <article className="card">
            <div className="card__sign" aria-hidden="true">Z4a</div>
            <h3 className="card__title">Zemní a výkopové práce</h3>
            <p className="card__text">
              Výkopy základů, přípojek a bazénů, terénní úpravy a srovnání pozemku.
              Bagr s obsluhou, která na liberecké žule a jílu pracuje dvacet let.
            </p>
            <ul className="card__list">
              <li>Minibagr i pásové rypadlo — projedeme i úzkou branou</li>
              <li>Výkopy pro sítě, drenáže a vsakování</li>
              <li>Hutnění a příprava plání pod zámkovou dlažbu</li>
            </ul>
          </article>

          <article className="card">
            <div className="card__sign" aria-hidden="true">B20a</div>
            <h3 className="card__title">Skládkovné v ceně</h3>
            <p className="card__text">
              Suť a zeminu uložíme legálně na smluvních skládkách. Skládkovné
              naceníme předem do jedné faktury — bez skrytých položek a doplatků.
            </p>
            <ul className="card__list">
              <li>Vážní lístky ke každé fuře na vyžádání</li>
              <li>Třídění suti = nižší cena za uložení</li>
              <li>Doklad o ekologické likvidaci pro kolaudaci</li>
            </ul>
          </article>
        </div>

        <p className="services__note">
          Cenu řekneme do druhého dne. Stačí zavolat, popsat stavbu a poslat pár fotek —
          na menší zakázky nepotřebujeme výjezd ani projektovou dokumentaci.
        </p>
      </section>

      {/* ================= DŮVĚRA / STROJE ================= */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="section-head section-head--light">
          <p className="section-kicker">Proč Cestářské práce</p>
          <h2 id="trust-h" className="section-title">
            Rodinná firma z Liberce.<br />Stroje vlastní, termíny držíme.
          </h2>
        </div>

        <div className="trust__grid">
          <div className="trust__col">
            <dl className="machines">
              <div className="machines__row">
                <dt>Sklápěč Tatra 8×8</dt>
                <dd>18 t · suť, výkopek, kámen</dd>
              </div>
              <div className="machines__row">
                <dt>Sklápěč MAN 6×4</dt>
                <dd>12 t · štěrk, písek, recyklát</dd>
              </div>
              <div className="machines__row">
                <dt>Pásové rypadlo JCB</dt>
                <dd>14 t · základy, kanalizace</dd>
              </div>
              <div className="machines__row">
                <dt>Minibagr Kubota</dt>
                <dd>2,6 t · přípojky, zahrady</dd>
              </div>
              <div className="machines__row">
                <dt>Smykový nakladač</dt>
                <dd>UNC · úklid a nakládka staveniště</dd>
              </div>
            </dl>
            <p className="machines__caption">
              Vlastní mechanizace — nečekáte, až nám půjčovna uvolní stroj.
            </p>
          </div>

          <div className="trust__col">
            <blockquote className="quote">
              <p>
                „Výkop pro základovou desku v Ruprechticích včetně odvozu zeminy
                zvládli za dva dny. Dorazili přesně, cena seděla na korunu s nabídkou.“
              </p>
              <footer className="quote__author">— pan Dvořák, novostavba RD, Liberec-Ruprechtice</footer>
            </blockquote>
            <blockquote className="quote">
              <p>
                „Berou telefon i v sobotu ráno. Kontejner na suť stál před domem
                do dvou hodin od zavolání.“
              </p>
              <footer className="quote__author">— paní Hejlová, rekonstrukce bytu, Vratislavice</footer>
            </blockquote>

            <ul className="trust__facts">
              <li><strong>Liberec, Jablonec, Frýdlantsko</strong> — dojezd do 45 minut</li>
              <li><strong>Pojištění odpovědnosti</strong> do 10 mil. Kč na každou zakázku</li>
              <li><strong>Subdodávky pro stavební firmy</strong> — reference doložíme na vyžádání</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
