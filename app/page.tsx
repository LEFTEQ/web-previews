export default function Page() {
  const stats = [
    { num: "2011", label: "Na trhu od roku 2011 — třináct let dodáváme, aniž bychom vypadli ze sortimentu." },
    { num: "50+", label: "Zemí, kam sahá naše síť odběratelů i dodavatelů." },
    { num: "500+", label: "Značek skladem — od sprchových gelů po žvýkačky." },
    { num: "100+", label: "Stálých B2B partnerů, kteří objednávají opakovaně." }
  ];

  const regaly = [
    {
      cislo: "01",
      nadpis: "Drogerie",
      popis: "Prací gely, aviváže, čisticí prostředky a hygiena značek, které zákazník pozná z regálu. Dodáváme v paletách i menších dávkách podle obratu vaší prodejny.",
      priklady: ["Prací a čisticí prostředky", "Papírová hygiena", "Ústní a tělová péče"]
    },
    {
      cislo: "02",
      nadpis: "Kosmetika",
      popis: "Značková kosmetika a péče z přímých zdrojů i evropských partnerů. Import i export — umíme dovézt sérii, kterou v Česku běžně neseženete.",
      priklady: ["Péče o pleť a vlasy", "Parfémy a dekorativní kosmetika", "Dárkové sety"]
    },
    {
      cislo: "03",
      nadpis: "Cukrovinky a nápoje",
      popis: "Čokoláda, bonbony, žvýkačky a nealko od výrobců napříč Evropou. Sezónní zboží řešíme s předstihem, aby vám dorazilo včas před sezonou.",
      priklady: ["Čokoláda a bonbony", "Žvýkačky a drobné sladkosti", "Nealko nápoje"]
    }
  ];

  return (
    <main className="ldp">
      <header className="ldp-nav">
        <a className="ldp-logo" href="#uvod" aria-label="LDP Trade Company, domů">
          <span className="ldp-logo-mark">LDP</span>
          <span className="ldp-logo-sub">Trade&nbsp;Company · Brno</span>
        </a>
        <nav className="ldp-nav-links" aria-label="Hlavní navigace">
          <a href="#nabidka">Nabídka</a>
          <a href="#kdojsme">Kdo jsme</a>
          <a className="ldp-nav-cta" href="tel:+420777721001">+420 777 721 001</a>
        </nav>
      </header>

      <section className="ldp-hero" id="uvod">
        <img className="ldp-hero-img" src="/hero.webp" alt="Regály velkoobchodního skladu LDP Trade v Brně plné značkové drogerie, kosmetiky a cukrovinek" />
        <div className="ldp-hero-veil" aria-hidden="true"></div>
        <div className="ldp-hero-inner">
          <p className="ldp-eyebrow">Velkoobchod &amp; distribuce · Brno-Líšeň</p>
          <h1 className="ldp-hero-title">
            <span>Značky, které</span>
            <span>zákazník zná —</span>
            <span className="ldp-hero-accent">z jednoho skladu.</span>
          </h1>
          <p className="ldp-hero-lead">
            Drogerie, kosmetika a cukrovinky pro obchody, které chtějí mít regál plný a objednávku vyřízenou bez čekání. Přes 500 značek, přímí výrobci i partneři po celé Evropě.
          </p>
          <div className="ldp-hero-actions">
            <a className="ldp-btn" href="tel:+420777721001">Zavolat obchodníkovi</a>
            <a className="ldp-btn-ghost" href="#nabidka">Prohlédnout sortiment</a>
          </div>
        </div>
        <dl className="ldp-ticker" aria-label="Firma v číslech">
          {stats.map((s) => (
            <div className="ldp-ticker-item" key={s.num}>
              <dt>{s.num}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="ldp-nabidka" id="nabidka">
        <div className="ldp-sec-head">
          <p className="ldp-eyebrow ldp-eyebrow-dark">Naše nabídka</p>
          <h2 className="ldp-sec-title">Tři regály, ze kterých skládáme vaši objednávku.</h2>
          <p className="ldp-sec-lead">
            Nemusíte objednávat u pěti dodavatelů. Drogerii, kosmetiku i sladkosti složíme na jednu paletu a pošleme dohromady.
          </p>
        </div>

        <div className="ldp-regaly">
          {regaly.map((r) => (
            <article className="ldp-regal" key={r.cislo}>
              <span className="ldp-regal-num" aria-hidden="true">{r.cislo}</span>
              <h3 className="ldp-regal-nadpis">{r.nadpis}</h3>
              <p className="ldp-regal-popis">{r.popis}</p>
              <ul className="ldp-regal-list">
                {r.priklady.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <img className="ldp-nabidka-img" src="/section-1.webp" alt="Naskladněné palety značkového zboží připravené k expedici ze skladu LDP Trade" />
      </section>

      <section className="ldp-onas" id="kdojsme">
        <div className="ldp-onas-grid">
          <div className="ldp-onas-text">
            <p className="ldp-eyebrow">Kdo jsme</p>
            <h2 className="ldp-onas-title">Nezávislý velkoobchod, který drží slovo i termín.</h2>
            <p className="ldp-onas-p">
              Od roku 2011 dovážíme a vyvážíme značkovou drogerii, kosmetiku a potraviny. Jsme napojeni přímo na výrobce a zároveň spolupracujeme s partnery napříč Evropou i světem — díky tomu seženeme i zboží, které jinde chybí.
            </p>
            <p className="ldp-onas-p">
              Sídlíme v Brně-Líšni, hlavní sklad máme v Přízřenicích. Osobní odběr, rozvoz i export řešíme z jednoho místa.
            </p>

            <div className="ldp-adresy">
              <div className="ldp-adresa">
                <span className="ldp-adresa-stitek">Prodejna &amp; sídlo</span>
                <p>
                  Masarova 2407/7<br />
                  Brno-Líšeň 628&nbsp;00
                </p>
                <a href="tel:+420777721001">+420 777 721 001</a>
              </div>
              <div className="ldp-adresa">
                <span className="ldp-adresa-stitek">Hlavní sklad</span>
                <p>
                  Staré náměstí 27<br />
                  Brno-Přízřenice 619&nbsp;00
                </p>
                <a href="mailto:info@ldptrade.cz">info@ldptrade.cz</a>
              </div>
            </div>
          </div>

          <figure className="ldp-onas-figure">
            <img src="/section-2.webp" alt="Sklad a expedice LDP Trade Company v Brně" />
            <figcaption>Expedice, Brno-Přízřenice</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
