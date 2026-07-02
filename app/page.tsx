export default function Page() {
  return (
    <main className="klemp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Klempíř pokládá plechovou střešní krytinu na střeše rodinného domu v Ostravě"
          />
          <div className="hero-shade" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <div className="brandline">
            <span className="wordmark">
              ŠICHNÁREK<span className="wm-fold" aria-hidden="true" />
            </span>
            <span className="brand-sub">klempířství &amp; střechy · Ostrava</span>
          </div>

          <h1 className="hero-title">
            <span className="ht-row ht-1">Plech na střeše</span>
            <span className="ht-row ht-2">drží, když ho ohne</span>
            <span className="ht-row ht-3">správná ruka.</span>
          </h1>

          <p className="hero-lead">
            Prodáváme a montujeme lehké ocelové krytiny Evertile a Evertech G2,
            stavíme krovy a děláme okapy tak, aby přežily ostravskou zimu i letní
            kroupy. Cenovou nabídku vám spočítáme zdarma — z projektu, nebo přijedeme
            a střechu zaměříme sami.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420596000000">
              Zavolat klempíři
            </a>
            <a className="btn btn-line" href="mailto:info@sichnarek.cz">
              Poslat poptávku e-mailem
            </a>
          </div>

          <ul className="hero-facts" aria-label="Základní fakta o firmě">
            <li>
              <strong>30 let</strong>
              <span>záruka na krytinu</span>
            </li>
            <li>
              <strong>od 10°</strong>
              <span>sklonu střechy</span>
            </li>
            <li>
              <strong>od 2002</strong>
              <span>zastoupení Bramac</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SEKCE 1 — CO DĚLÁME ===== */}
      <section className="work" aria-labelledby="work-h">
        <div className="section-head">
          <span className="seam" aria-hidden="true" />
          <p className="eyebrow">Řemeslo</p>
          <h2 id="work-h">Od krovu po okapový svod</h2>
          <p className="section-lead">
            Střechu bereme jako celek. Když ji děláme my, nemusíte shánět tesaře,
            pokrývače a klempíře zvlášť — všechno na sebe navazuje a za všechno
            ručí jedna firma.
          </p>
        </div>

        <div className="work-grid">
          <article className="work-card">
            <h3>
              <span className="card-gauge" aria-hidden="true">0,5&nbsp;mm</span>
              Plechové krytiny Evertile &amp; Evertech G2
            </h3>
            <p>
              Lehké ocelové tašky se vzhledem klasické krytiny. Váží zlomek betonu,
              takže nezatěžují starší krovy, a snesou sníh, vichřici i krupobití.
              Dvě povrchové úpravy, dva tvary, přes dvacet barev.
            </p>
          </article>

          <article className="work-card">
            <h3>
              <span className="card-gauge" aria-hidden="true">beton</span>
              Betonová krytina Bramac
            </h3>
            <p>
              Pro těžké střechy máme od roku 2002 přímé obchodní zastoupení Bramac.
              Poradíme, kdy se beton vyplatí a kdy je lepší jít do plechu — podle
              krovu, sklonu a rozpočtu.
            </p>
          </article>

          <article className="work-card">
            <h3>
              <span className="card-gauge" aria-hidden="true">dřevo</span>
              Krovy a střešní okna
            </h3>
            <p>
              Nové krovy i opravy stávajících, výměny poškozených prvků a osazení
              střešních oken včetně oplechování a napojení na krytinu, aby nikde
              nezatékalo.
            </p>
          </article>

          <article className="work-card">
            <h3>
              <span className="card-gauge" aria-hidden="true">falc</span>
              Okapy, žlaby a klempířské detaily
            </h3>
            <p>
              Okapové systémy, oplechování komínů, úžlabí, závětrné lišty. Detaily,
              které rozhodují o tom, jestli střecha vydrží třicet let, nebo tři zimy.
            </p>
          </article>
        </div>

        <figure className="work-figure">
          <img
            src="/section-1.webp"
            alt="Detail lehké ocelové střešní tašky s tradičním profilem na hotové střeše"
          />
          <figcaption>
            Profil tašky Evertile: vzhled pálené krytiny, nosnost oceli. Použitelná
            už od 10° sklonu střechy.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE 2 — PROČ NÁM VĚŘIT ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-copy">
            <div className="section-head section-head--left">
              <span className="seam" aria-hidden="true" />
              <p className="eyebrow">Proč Šichnárek</p>
              <h2 id="trust-h">Střecha se dělá jednou za generaci. My u toho jsme celou dobu.</h2>
            </div>

            <p>
              Jsme ostravská klempířská firma — na střechách v Moravskoslezském
              kraji pracujeme desítky let a víme, co tady počasí umí. Proto
              montujeme krytiny, které prošly zkouškami na sněhovou zátěž, vichřici
              i krupobití, a na materiál dáváme záruku 30 let.
            </p>

            <ul className="trust-list">
              <li>
                <strong>Nabídka zdarma.</strong> Pošlete projektovou dokumentaci,
                nebo přijedeme a střechu zaměříme přímo na domě.
              </li>
              <li>
                <strong>Poradenství bez prodejního tlaku.</strong> Řekneme vám
                narovinu, jestli váš krov unese beton, nebo potřebuje lehký plech.
              </li>
              <li>
                <strong>Rychlá montáž.</strong> Velkoformátové tašky pokládáme
                rychleji než kusovou krytinu — dům je dřív pod střechou.
              </li>
              <li>
                <strong>Kompletní sortiment doplňků.</strong> Hřebenáče, sněhové
                zábrany, prostupy — všechno v barvě krytiny, nic se nedokupuje jinde.
              </li>
            </ul>
          </div>

          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Dokončená střecha rodinného domu s plechovou krytinou a novými okapy"
            />
            <figcaption>
              Hotová střecha s krytinou Evertech G2 a kompletním okapovým systémem.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
