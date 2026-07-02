export default function Page() {
  return (
    <main className="hs">
      {/* ================= HERO ================= */}
      <section className="hs-hero" aria-label="Hal servis group — zemní práce Ostrava">
        <div className="hs-hero-inner">
          <header className="hs-topbar">
            <div className="hs-wordmark" aria-label="Hal servis group, a.s.">
              <span className="hs-wordmark-main">HAL&nbsp;SERVIS</span>
              <span className="hs-wordmark-sub">group, a.s.</span>
            </div>
            <a className="hs-topbar-tel" href="tel:+420596600100">
              <span className="hs-topbar-tel-label">Dispečink</span>
              <span className="hs-topbar-tel-num">596 600 100</span>
            </a>
          </header>

          <div className="hs-hero-body">
            <p className="hs-hero-eyebrow">
              <span className="hs-eyebrow-tick" aria-hidden="true"></span>
              Zemní práce · Ostrava-Vítkovice · od roku 1996
            </p>
            <h1 className="hs-hero-title">
              <span className="hs-line hs-line-1">Kopeme,</span>
              <span className="hs-line hs-line-2">rovnáme,</span>
              <span className="hs-line hs-line-3">
                zakládáme<span className="hs-title-dot">.</span>
              </span>
            </h1>
            <p className="hs-hero-lead">
              Výkopy, terénní úpravy a příprava staveniště pro rodinné domy i
              průmyslové haly. Vlastní bagry, nakladače a řidiči, kteří znají
              ostravské podloží — včetně navážek a hlušiny.
            </p>
            <div className="hs-hero-actions">
              <a className="hs-btn hs-btn-primary" href="tel:+420596600100">
                Zavolat dispečink
              </a>
              <a className="hs-btn hs-btn-ghost" href="mailto:poptavka@halservis.cz">
                Poslat poptávku e-mailem
              </a>
            </div>
          </div>
        </div>

        {/* Signature: profil výkopu — vrstvy zeminy jako řez terénem */}
        <div className="hs-cut" aria-hidden="true">
          <div className="hs-cut-layer hs-cut-topsoil">
            <span className="hs-cut-label">ornice · 0,3 m</span>
          </div>
          <div className="hs-cut-layer hs-cut-clay">
            <span className="hs-cut-label">jíl a navážka · 1,2 m</span>
          </div>
          <div className="hs-cut-layer hs-cut-rock">
            <span className="hs-cut-label">skalní podloží</span>
          </div>
          <div className="hs-cut-tooth">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="hs-section hs-services" aria-labelledby="sluzby-title">
        <div className="hs-section-inner">
          <div className="hs-section-head">
            <p className="hs-section-eyebrow">Co pro vás uděláme</p>
            <h2 id="sluzby-title" className="hs-section-title">
              Od skrývky ornice po hotovou pláň
            </h2>
            <p className="hs-section-lead">
              Pořadí není náhodné — takhle jde po sobě práce na každé stavbě.
              Můžete si objednat celý postup, nebo jen jeden krok.
            </p>
          </div>

          <ol className="hs-service-list">
            <li className="hs-service">
              <div className="hs-service-depth">skrývka<br />0–0,3&nbsp;m</div>
              <div className="hs-service-body">
                <h3>Skrývka ornice a příprava pozemku</h3>
                <p>
                  Sejmeme ornici, uložíme ji na deponii pro pozdější terénní
                  úpravy a vyčistíme pozemek od náletů a starých základů.
                </p>
              </div>
            </li>
            <li className="hs-service">
              <div className="hs-service-depth">výkop<br />do&nbsp;4&nbsp;m</div>
              <div className="hs-service-body">
                <h3>Výkopy základů a inženýrských sítí</h3>
                <p>
                  Základové pásy, rýhy pro vodu, kanalizaci a elektro, jímky a
                  bazény. Kopeme přesně podle projektu, s pažením tam, kde je
                  potřeba.
                </p>
              </div>
            </li>
            <li className="hs-service">
              <div className="hs-service-depth">odvoz<br />t&nbsp;/&nbsp;den</div>
              <div className="hs-service-body">
                <h3>Odvoz a uložení zeminy a sutě</h3>
                <p>
                  Vlastní sklápěče Tatra a smluvní skládky v okolí Ostravy.
                  Vyřídíme i evidenci odpadů — doklady dostanete bez ptaní.
                </p>
              </div>
            </li>
            <li className="hs-service">
              <div className="hs-service-depth">pláň<br />±2&nbsp;cm</div>
              <div className="hs-service-body">
                <h3>Terénní úpravy a hutněná pláň</h3>
                <p>
                  Srovnáme terén do roviny nebo spádu, zhutníme podklad pod
                  zámkovou dlažbu, halu i příjezdovou cestu. Předáváme s
                  protokolem o hutnění.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </section>

      {/* ================= DŮVĚRA / O NÁS ================= */}
      <section className="hs-section hs-trust" aria-labelledby="duvera-title">
        <div className="hs-section-inner">
          <div className="hs-trust-grid">
            <div className="hs-trust-text">
              <p className="hs-section-eyebrow hs-section-eyebrow-light">
                Proč Hal servis group
              </p>
              <h2 id="duvera-title" className="hs-section-title hs-section-title-light">
                Ostravské podloží známe zpaměti
              </h2>
              <p className="hs-trust-lead">
                Sídlíme ve Vítkovicích na Syllabově ulici a většinu zakázek
                děláme do půl hodiny jízdy — Ostrava, Havířov, Frýdek-Místek,
                Opava. Víme, kde čekat navážku po staré zástavbě a kde hlušinu
                z dolů, takže rozpočet nepřekvapí ani vás, ani nás.
              </p>
              <ul className="hs-trust-points">
                <li>
                  <strong>Vlastní stroje i lidé.</strong> Pásová rypadla,
                  traktorbagry, smykové nakladače a sklápěče Tatra — žádné
                  čekání na cizí techniku.
                </li>
                <li>
                  <strong>Pevná cena předem.</strong> Přijedeme, změříme,
                  pošleme rozpočet po položkách. Vícepráce jen po domluvě.
                </li>
                <li>
                  <strong>Pojištění do 20 mil. Kč.</strong> Odpovědnost za
                  škody na sítích i sousedních pozemcích máme kryté.
                </li>
              </ul>
            </div>
            <dl className="hs-trust-stats">
              <div className="hs-stat">
                <dt>Na trhu od</dt>
                <dd>1996</dd>
              </div>
              <div className="hs-stat">
                <dt>Strojů ve vlastním parku</dt>
                <dd>14</dd>
              </div>
              <div className="hs-stat">
                <dt>Dokončených staveb ročně</dt>
                <dd>120+</dd>
              </div>
              <div className="hs-stat">
                <dt>Dojezd po Ostravě</dt>
                <dd>do 30 min</dd>
              </div>
            </dl>
          </div>

          <figure className="hs-quote">
            <blockquote>
              „Základy pro halu v Hrabové vykopali za tři dny včetně odvozu.
              Pláň předali zhutněnou s protokolem — statik neměl jedinou
              připomínku.“
            </blockquote>
            <figcaption>
              — stavbyvedoucí, výstavba skladové haly, Ostrava-Hrabová (2024)
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
