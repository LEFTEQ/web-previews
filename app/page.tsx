export default function Page() {
  const selections = [
    {
      category: "Mechanické hodinky",
      name: "Breitling Superocean Heritage B31",
      detail: "Automatický strojek · 40 mm",
      price: "od 152 500 Kč",
    },
    {
      category: "Český granát",
      name: "Šperk s kamenem z české země",
      detail: "Prsteny, náušnice a přívěsky",
      price: "výběr na prodejně",
    },
    {
      category: "Diamantové šperky",
      name: "Klenot pro jeden konkrétní okamžik",
      detail: "Osobní konzultace a výběr kamene",
      price: "dle provedení",
    },
  ];

  return (
    <main className="provaznik-page">
      <header className="site-header" aria-label="Hlavní navigace">
        <a className="wordmark" href="#zacatek" aria-label="Provazník Klenoty — úvod">
          <span className="wordmark-mark" aria-hidden="true">P</span>
          <span>
            <strong>Provazník</strong>
            <small>Klenoty · Ústí nad Labem</small>
          </span>
        </a>

        <nav className="site-nav" aria-label="Navigace na stránce">
          <a href="#vyber">Hodinky a šperky</a>
          <a href="#pece">Naše péče</a>
        </nav>

        <a className="header-action" href="#vyber">Prohlédnout výběr</a>
      </header>

      <section className="hero" id="zacatek" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Klenotnictví v Ústí nad Labem</p>
          <h1 id="hero-title">
            Čas, který<br />
            <span>má váhu.</span>
          </h1>
          <p className="hero-lead">
            Mechanické hodinky, české granáty a diamantové šperky vybíráme tak,
            aby obstály dnes i za jednu generaci.
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#vyber">Vybrat hodinky nebo šperk</a>
            <a className="text-link" href="#pece">Jak vám poradíme <span aria-hidden="true">↘</span></a>
          </div>
        </div>

        <div className="hero-jewel" aria-label="Detail šperku v brusu českého granátu">
          <div className="hero-image-wrap">
            <img
              src="/hero.webp"
              alt="Detail precizně zpracovaného šperku z nabídky Klenoty Provazník"
              width="960"
              height="1120"
              fetchPriority="high"
            />
          </div>
          <span className="facet facet-one" aria-hidden="true" />
          <span className="facet facet-two" aria-hidden="true" />
          <p className="jewel-caption"><span>Výběr</span> s okem klenotníka</p>
        </div>

        <p className="hero-note">Hodinky · šperky · osobní odběr</p>
      </section>

      <section className="selection" id="vyber" aria-labelledby="selection-title">
        <div className="section-heading">
          <p className="eyebrow">Právě u Provazníka</p>
          <h2 id="selection-title">Tři cesty k výjimečnému kusu</h2>
          <p>
            Nezačínejte filtrem. Začněte tím, komu má klenot patřit a co má připomínat.
            Konkrétní provedení pak vybereme společně.
          </p>
        </div>

        <div className="selection-layout">
          <figure className="selection-visual">
            <img
              src="/section-1.webp"
              alt="Luxusní hodinky z nabídky klenotnictví Provazník"
              width="900"
              height="1080"
              loading="lazy"
            />
            <figcaption>Pečlivě vybrané kusy si můžete prohlédnout osobně v Ústí nad Labem.</figcaption>
          </figure>

          <div className="selection-list">
            {selections.map((item) => (
              <article className="selection-item" key={item.category}>
                <p className="item-category">{item.category}</p>
                <h3>{item.name}</h3>
                <div className="item-meta">
                  <span>{item.detail}</span>
                  <strong>{item.price}</strong>
                </div>
                <a href="#pece" aria-label={`Zjistit více: ${item.name}`}>
                  Zjistit více <span aria-hidden="true">→</span>
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="care" id="pece" aria-labelledby="care-title">
        <div className="care-image">
          <img
            src="/section-2.webp"
            alt="Klenotnická práce a kontrola detailu šperku u Provazníka"
            width="1100"
            height="900"
            loading="lazy"
          />
          <div className="care-seal" aria-hidden="true">
            <span>Ústí</span>
            <strong>P</strong>
            <span>nad Labem</span>
          </div>
        </div>

        <div className="care-copy">
          <p className="eyebrow">Jistota před nákupem i po něm</p>
          <h2 id="care-title">Klenot se nevybírá naslepo.</h2>
          <p className="care-intro">
            V prodejně vidíte odstín kamene, cítíte váhu hodinek a můžete se zeptat na vše,
            co z fotografie nepoznáte. Dostanete doporučení, ne prodejní tlak.
          </p>

          <dl className="care-points">
            <div>
              <dt>Osobní výběr</dt>
              <dd>Porovnáte velikosti, materiály i zpracování přímo na ruce.</dd>
            </div>
            <div>
              <dt>Ověřené značky</dt>
              <dd>Breitling, Zenith, Hamilton, Tissot a další značky s doloženým původem.</dd>
            </div>
            <div>
              <dt>Vyzvednutí bez čekání</dt>
              <dd>Zboží označené skladem připravíme k osobnímu odběru na prodejně.</dd>
            </div>
          </dl>

          <a className="primary-button dark-button" href="mailto:eshop@klenotyprovaznik.cz">
            Napsat do klenotnictví
          </a>
        </div>
      </section>
    </main>
  );
}
