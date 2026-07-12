export default function Page() {
  return (
    <>
      <header className="jk-top">
        <div className="jk-topinner">
          <a className="jk-mark" href="#uvod" aria-label="Jaromír Kolář – žaluzie a rolety Ostrava">
            <b>Kolář</b>
            <span>Žaluzie&nbsp;·&nbsp;Ostrava</span>
          </a>
          <nav className="jk-nav" aria-label="Hlavní navigace">
            <a href="#produkty">Žaluzie</a>
            <a href="#onas">O dílně</a>
            <a className="jk-tel" href="tel:+420602000000">Zavolat</a>
          </nav>
        </div>
      </header>

      <main id="uvod">
        {/* HERO */}
        <section className="hero" aria-labelledby="hero-nadpis">
          <div className="hero-grid">
            <div className="hero-copy">
              <span className="hero-eyebrow reveal">Stínicí technika na míru · Ostravsko</span>
              <h1 id="hero-nadpis" className="reveal d1">
                Lamela po lamele,<br />
                přesně na <em>vaše okno</em>.
              </h1>
              <p className="hero-lead reveal d2">
                Zaměřím, vyrobím a namontuji horizontální žaluzie ISOLINE i rolety
                přímo u vás doma. Bez mezikroků, bez zbytečných řečí — jen čistě
                seřízené lamely, které drží tvar i po letech.
              </p>
              <div className="hero-cta reveal d3">
                <a className="btn btn-primary" href="tel:+420602000000">Domluvit zaměření</a>
                <a className="btn btn-ghost" href="#produkty">Prohlédnout žaluzie</a>
              </div>
              <dl className="hero-meta reveal d3">
                <div>
                  <dt>51+</dt>
                  <dd>odstínů lamel Al&nbsp;25&nbsp;mm</dd>
                </div>
                <div>
                  <dt>2,4 m²</dt>
                  <dd>max. plocha jednoho křídla</dd>
                </div>
                <div>
                  <dt>Petřvald</dt>
                  <dd>vlastní dílna u Ostravy</dd>
                </div>
              </dl>
            </div>
            <div className="hero-visual">
              <img
                src="/hero.webp"
                alt="Horizontální žaluzie ISOLINE nasazená v okně, lamely stažené do poloviny"
              />
              <div className="hero-slats" aria-hidden="true" />
            </div>
          </div>
        </section>

        {/* PRODUKTY */}
        <section className="produkty" id="produkty" aria-labelledby="produkty-nadpis">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-kicker">Řada ISOLINE</div>
              <h2 id="produkty-nadpis">Tři modely žaluzií, jeden vzorník</h2>
              <p>
                Od nejjednodušší žaluzie do plastových oken až po eurookna s krycí
                lištou. Poradím, který model sedí k vašim rámům — a co dá nejlepší
                smysl cenově.
              </p>
            </div>

            <div className="prod-grid">
              <article className="card">
                <div className="card-no">Model 01 · nejžádanější</div>
                <h3>ISOLINE</h3>
                <p>
                  Základní horizontální žaluzie do plastových, hliníkových i euro
                  oken. Rychlá montáž, minimální údržba, ovládání řetízkem.
                </p>
                <ul className="spec">
                  <li><span>Max. rozměr</span><span>220 × 240 cm</span></li>
                  <li><span>Min. rozměr</span><span>30 × 30 cm</span></li>
                  <li><span>Lamela</span><span>Al 25 / 16 mm</span></li>
                  <li><span>Rám</span><span>pozink RAL / hliník</span></li>
                </ul>
              </article>

              <article className="card">
                <div className="card-no">Model 02 · pro eurookna</div>
                <h3>ISOLINE Loco</h3>
                <p>
                  Špičkový model s krycí lištou Loco nebo hliníkovou Arco. Rámy
                  olepené fólií v imitaci dřeva dotvoří moderní interiér.
                </p>
                <ul className="spec">
                  <li><span>Lišta</span><span>Loco / Arco</span></li>
                  <li><span>Povrch</span><span>renolit — imitace dřeva</span></li>
                  <li><span>Krytky</span><span>v barvě lišty</span></li>
                  <li><span>Hodí se pro</span><span>eurookna</span></li>
                </ul>
              </article>

              <article className="card">
                <div className="card-no">Model 03 · zaoblený profil</div>
                <h3>ISOLINE Prim</h3>
                <p>
                  Nová generace se zaobleným horním profilem a domykavými lamelami
                  bez příplatku. Sladíte horní i dolní profil s odstínem lamel.
                </p>
                <ul className="spec">
                  <li><span>Profil</span><span>zaoblený, kompaktní</span></li>
                  <li><span>Lamely</span><span>domykavé v ceně</span></li>
                  <li><span>Fólie profilů</span><span>8 odstínů dřeva</span></li>
                  <li><span>Ovládání</span><span>řetízek</span></li>
                </ul>
              </article>
            </div>

            <div className="prod-note">
              <span>Vyrobím i atypické:</span>
              <span className="chip">Meziokenní žaluzie</span>
              <span className="chip">Interiérové s bovdenem</span>
              <span className="chip">Domykavé Al 25 mm</span>
              <span className="chip">Rolety</span>
            </div>
          </div>
        </section>

        {/* O NAS */}
        <section className="onas" id="onas" aria-labelledby="onas-nadpis">
          <div className="wrap">
            <div className="sec-head">
              <div className="sec-kicker">Dílna Kolář · Petřvald</div>
              <h2 id="onas-nadpis">Řemeslo, ne montáž z e-shopu</h2>
              <p>
                Žaluzie u nás nekupujete jako krabici z regálu — přijedu za vámi,
                změřím okno na milimetr a lamely seřídím tak, aby se domykaly po
                celé ploše.
              </p>
            </div>

            <div className="onas-grid">
              <figure className="onas-visual">
                <img
                  src="/section-2.webp"
                  alt="Detail seřízených lamel žaluzie s ovládacím řetízkem"
                />
                <figcaption>Detail domykavých lamel Al 25 mm — bez světelných spár.</figcaption>
              </figure>

              <div>
                <ol className="trust">
                  <li>
                    <span className="trust-no">01</span>
                    <div>
                      <h4>Zaměření u vás doma</h4>
                      <p>Přijedu po Ostravsku, změřím okna a doporučím model podle typu rámu i světové strany.</p>
                    </div>
                  </li>
                  <li>
                    <span className="trust-no">02</span>
                    <div>
                      <h4>Vlastní výroba v Petřvaldě</h4>
                      <p>Žaluzie skládám ve své dílně z komponentů ISOLINE — vy si vybíráte z více než 51 odstínů lamel.</p>
                    </div>
                  </li>
                  <li>
                    <span className="trust-no">03</span>
                    <div>
                      <h4>Montáž a seřízení</h4>
                      <p>Nasadím, vyladím náklon lamel i chod řetízku a poradím s údržbou. Vždy si po sobě uklidím.</p>
                    </div>
                  </li>
                </ol>

                <div className="onas-cta">
                  <a className="btn btn-primary" href="tel:+420602000000">Zavolat Jaromíru Kolářovi</a>
                  <a className="btn btn-ghost" href="#produkty">Zpět na žaluzie</a>
                </div>
              </div>
            </div>

            <figure className="onas-visual" style={{ marginTop: "48px" }}>
              <img
                src="/section-1.webp"
                alt="Realizace horizontálních žaluzií v obytném interiéru na Ostravsku"
              />
              <figcaption>Realizace ISOLINE Loco — eurookna, imitace dřeva.</figcaption>
            </figure>
          </div>
        </section>
      </main>
    </>
  );
}
