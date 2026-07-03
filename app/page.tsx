export default function Page() {
  return (
    <main className="ag">
      {/* ===================== HERO ===================== */}
      <header className="ag-hero">
        <div className="ag-hero-topbar">
          <div className="ag-wordmark" aria-label="Autosklo P&M">
            <span className="ag-wordmark-main">AUTOSKLO</span>
            <span className="ag-wordmark-pm">P<em>&amp;</em>M</span>
          </div>
          <a className="ag-hero-phone" href="tel:+420541241241">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true" fill="currentColor"><path d="M3.4 1.2c.5-.3 1.1-.2 1.5.2l1.8 2.1c.4.4.4 1 .1 1.5l-.8 1.1c.7 1.3 1.7 2.4 3 3l1.1-.8c.5-.3 1.1-.3 1.5.1l2.1 1.8c.4.4.5 1 .2 1.5l-1 1.6c-.3.5-.9.8-1.5.7C7.6 13.4 2.6 8.4 2 3.6c-.1-.6.2-1.2.7-1.5l.7-.9Z"/></svg>
            <span>541&nbsp;241&nbsp;241</span>
          </a>
        </div>

        <div className="ag-hero-body">
          {/* Signature: crack line grafika — prasklina v čelním skle */}
          <svg
            className="ag-crack"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            aria-hidden="true"
          >
            <g className="ag-crack-lines" fill="none" stroke="currentColor">
              <path className="ag-crack-l ag-crack-l1" strokeWidth="2.5" d="M560 210 L470 260 L385 288 L290 340 L200 372 L110 430" />
              <path className="ag-crack-l ag-crack-l2" strokeWidth="1.8" d="M560 210 L600 300 L618 400 L650 500" />
              <path className="ag-crack-l ag-crack-l3" strokeWidth="1.6" d="M560 210 L640 160 L720 130" />
              <path className="ag-crack-l ag-crack-l4" strokeWidth="1.4" d="M470 260 L455 350 L430 430" />
              <path className="ag-crack-l ag-crack-l5" strokeWidth="1.2" d="M385 288 L360 220 L330 150" />
              <path className="ag-crack-l ag-crack-l6" strokeWidth="1" d="M290 340 L280 420 L255 480" />
              <path className="ag-crack-l ag-crack-l7" strokeWidth="1" d="M600 300 L660 320 L730 330" />
            </g>
            <circle className="ag-crack-hit" cx="560" cy="210" r="7" fill="currentColor" />
            <circle className="ag-crack-ring" cx="560" cy="210" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
          </svg>

          <p className="ag-hero-eyebrow">Autosklo &amp; pneuservis · Brno</p>
          <h1 className="ag-hero-title">
            <span className="ag-hero-line ag-hero-line-1">Prasklé sklo</span>
            <span className="ag-hero-line ag-hero-line-2">není konec.</span>
            <span className="ag-hero-line ag-hero-line-3 ag-hero-accent">Je to začátek opravy.</span>
          </h1>
          <p className="ag-hero-sub">
            Kamínek od kola, mráz, nebo jen smůla — čelní sklo scelíme od 500&nbsp;Kč,
            nebo vyměníme pro jakoukoli značku. Při splnění pojistných podmínek
            montujeme <strong>zdarma</strong>.
          </p>
          <div className="ag-hero-actions">
            <a className="ag-btn ag-btn-primary" href="tel:+420541241241">Zavolat servis</a>
            <a className="ag-btn ag-btn-ghost" href="#sluzby">Co umíme se sklem</a>
          </div>
          <ul className="ag-hero-facts" aria-label="Rychlá fakta">
            <li><strong>Oprava od 500 Kč</strong><span>scelování praskliny</span></li>
            <li><strong>Výměna zdarma</strong><span>na pojistnou událost</span></li>
            <li><strong>Všechny značky</strong><span>osobní, užitková, bus</span></li>
          </ul>
        </div>
      </header>

      {/* ===================== SLUŽBY ===================== */}
      <section className="ag-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ag-section-head">
          <h2 id="sluzby-h">Sklo, kola, pneu.<br />V jedné dílně.</h2>
          <p>
            Nemusíte objíždět půl Brna. Sklo opravíme nebo vyměníme, disky narovnáme,
            pneu přezujeme — na jedno přistavení vozu.
          </p>
        </div>

        <div className="ag-services-grid">
          <article className="ag-card ag-card-wide">
            <span className="ag-card-tag">Nejčastější zásah</span>
            <h3>Oprava praskliny scelováním</h3>
            <p>
              Malý zásah kamínkem do velikosti dvoukoruny scelíme pryskyřicí —
              prasklina se dál nešíří a sklo nemusíte měnit. Hotovo do hodiny.
            </p>
            <p className="ag-card-price">od 500 Kč</p>
          </article>

          <article className="ag-card">
            <h3>Výměna autoskla</h3>
            <p>
              Skla pro všechny značky osobních, užitkových i nákladních vozů
              a autobusů. Pojistnou událost vyřídíme za vás.
            </p>
            <p className="ag-card-price">montáž na pojistku zdarma</p>
          </article>

          <article className="ag-card">
            <h3>Tónování skel pokovením</h3>
            <p>
              Bezfóliové tónování v několika stupních ztmavení — vše v mezích
              povolení Ministerstva dopravy. Žádná fólie, která se loupe.
            </p>
            <p className="ag-card-price">trvanlivé, bez fólie</p>
          </article>

          <article className="ag-card">
            <h3>Měření propustnosti skel</h3>
            <p>
              Máte tónovaná skla a nejste si jistí, jestli projdou kontrolou?
              Změříme propustnost za pár minut — dřív, než to udělá policie.
            </p>
            <p className="ag-card-price">100 Kč bez DPH</p>
          </article>

          <article className="ag-card">
            <h3>Opravy litých kol</h3>
            <p>
              Poškozený nebo zkřivený hliníkový disk narovnáme speciální
              technologií. Nemusíte kupovat celou novou sadu elektronů.
            </p>
            <p className="ag-card-price">rovnání i opravy</p>
          </article>

          <article className="ag-card">
            <h3>Pneuservis</h3>
            <p>
              Opravy poškozených pneu, výměna a sezónní přezutí pro auto
              i motocykl. Objednejte se předem a nečekáte ve frontě.
            </p>
            <p className="ag-card-price">auto i moto</p>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA ===================== */}
      <section className="ag-trust" aria-labelledby="duvera-h">
        <div className="ag-trust-inner">
          <div className="ag-trust-text">
            <h2 id="duvera-h">Brněnská dílna,<br />kde sklo drží.</h2>
            <p>
              Autosklo P&amp;M děláme v Brně léta a pořád stejně: řekneme rovnou,
              jestli se prasklina dá scelit, nebo je potřeba nové sklo. Když jde
              oprava přes pojistku, papírování vyřídíme my — vy jen přistavíte auto.
            </p>
            <ul className="ag-trust-list">
              <li>
                <strong>Rovnou řekneme cenu.</strong>
                <span>Před zásahem víte, kolik zaplatíte. Žádné položky navíc při vyzvednutí.</span>
              </li>
              <li>
                <strong>Pojistku vyřídíme za vás.</strong>
                <span>Komunikaci s pojišťovnou bereme na sebe — při splnění podmínek platí montáž ona, ne vy.</span>
              </li>
              <li>
                <strong>Sklo pro každý vůz.</strong>
                <span>Od malého hatchbacku po autobus. Sklo seženeme a namontujeme obvykle do pár dní.</span>
              </li>
            </ul>
          </div>

          <div className="ag-trust-quotes">
            <figure className="ag-quote">
              <blockquote>
                „Kamínek na D1, ráno jsem volal, odpoledne bylo sceleno. Prasklina
                se za dva roky nepohnula ani o milimetr.“
              </blockquote>
              <figcaption>Martin K. — Škoda Octavia, Brno-Líšeň</figcaption>
            </figure>
            <figure className="ag-quote">
              <blockquote>
                „Výměna čelního skla přes pojistku — neplatil jsem nic a nemusel
                jsem řešit jediný papír. Při přezouvání mi ještě narovnali disk.“
              </blockquote>
              <figcaption>Petra V. — VW Transporter, firemní flotila</figcaption>
            </figure>
            <div className="ag-trust-badge">
              <span className="ag-trust-badge-num">6</span>
              <span className="ag-trust-badge-label">služeb pod jednou střechou — sklo, tónování, měření, disky, pneu, pojistky</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
