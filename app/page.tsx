const services = [
  {
    code: "FTL",
    name: "Kamionová doprava",
    desc: "Přeprava zboží po celé Evropě ve všech teplotních režimech — až 72 europalet na soupravu. Plachtové i chladírenské návěsy.",
    tag: "ČR + Evropa",
  },
  {
    code: "BUS",
    name: "Autobusová doprava",
    desc: "Komfortní přeprava osob po Evropě moderními autobusy — zájezdy, firemní přepravy, kyvadlová doprava.",
    tag: "osobní přeprava",
  },
  {
    code: "REG",
    name: "Regionální rozvoz",
    desc: "Rozvoz zboží po jižních Čechách s přesným dodržováním časových oken. Vaše zboží dorazí, kdy má.",
    tag: "časová okna",
  },
  {
    code: "MYT",
    name: "Mycí centrum",
    desc: "Profesionální mytí nákladních i užitkových vozů v Českých Budějovicích. Nepřetržitý provoz, sedm dní v týdnu.",
    tag: "nonstop",
  },
  {
    code: "PHM",
    name: "Čerpací stanice",
    desc: "Kvalitní paliva a rychlé odbavení nákladních vozidel — bez front, přímo v areálu na Hlinské.",
    tag: "areál Hlinská",
  },
  {
    code: "INT",
    name: "Čištění interiérů",
    desc: "Důkladné čištění kabiny i nákladního prostoru. Vůz předáte špinavý, převezmete připravený na další jízdu.",
    tag: "kabina + náklad",
  },
  {
    code: "SRV",
    name: "Servis vozidel",
    desc: "Autorizovaný servis a údržba nákladních vozidel DAF, Ford a Mercedes. Diagnostika, opravy, STK.",
    tag: "DAF · Ford · MB",
  },
  {
    code: "RENT",
    name: "Pronájem vozidel",
    desc: "Tahače a návěsy k pronájmu v plachtové i chladírenské variantě — krátkodobě i dlouhodobě.",
    tag: "tahače + návěsy",
  },
];

const stats = [
  { value: "1998", label: "na trhu od" },
  { value: "200+", label: "vozidel ve flotile" },
  { value: "72", label: "europalet na soupravu" },
  { value: "24/7", label: "dispečink i mycí centrum" },
];

export default function Page() {
  return (
    <main className="nt">
      {/* ---------- HERO ---------- */}
      <header className="nt-hero">
        <div className="nt-topbar">
          <div className="nt-wordmark" aria-label="Nicotrans">
            <span className="nt-wordmark-nico">NICO</span>
            <span className="nt-wordmark-trans">TRANS</span>
          </div>
          <a className="nt-topbar-tel" href="tel:+420725569569">
            <span className="nt-topbar-tel-label">Dispečink</span>
            +420 725 569 569
          </a>
        </div>

        <div className="nt-hero-inner">
          <p className="nt-hero-route" aria-hidden="true">
            <span>CZ · České Budějovice</span>
            <span className="nt-hero-route-line" />
            <span>EU · celá Evropa</span>
          </p>

          <h1 className="nt-hero-title">
            <span className="nt-hero-title-row nt-reveal-1">Naložíme.</span>
            <span className="nt-hero-title-row nt-reveal-2">Vytrasujeme.</span>
            <span className="nt-hero-title-row nt-hero-title-accent nt-reveal-3">
              Dovezeme včas.
            </span>
          </h1>

          <p className="nt-hero-lead nt-reveal-4">
            Vnitrostátní a mezinárodní kamionová doprava, spedice, skladování a
            logistika z Českých Budějovic. Od roku 1998, s flotilou přes 200
            vozidel DAF, Ford a Mercedes.
          </p>

          <div className="nt-hero-cta nt-reveal-4">
            <a className="nt-btn nt-btn-primary" href="tel:+420725569569">
              Zavolat dispečink
            </a>
            <a className="nt-btn nt-btn-ghost" href="mailto:info@nicotrans.cz">
              Poptat přepravu e-mailem
            </a>
          </div>
        </div>

        {/* Signature: pás dálnice s dělicí čárou, který nese statistiky */}
        <div className="nt-road" role="list" aria-label="Klíčová čísla firmy">
          <div className="nt-road-stripe" aria-hidden="true" />
          <div className="nt-road-stats">
            {stats.map((s) => (
              <div className="nt-road-stat" role="listitem" key={s.label}>
                <strong>{s.value}</strong>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* ---------- SLUŽBY ---------- */}
      <section className="nt-section nt-services" aria-labelledby="sluzby-h">
        <div className="nt-section-head">
          <p className="nt-eyebrow">Ložný list služeb</p>
          <h2 id="sluzby-h">
            Jedna adresa, celý servis kolem kamionu
          </h2>
          <p className="nt-section-lead">
            Od přepravy po Evropě až po mytí, tankování a servis — všechno
            vyřídíte v jednom areálu na Hlinské v Českých Budějovicích.
          </p>
        </div>

        <ul className="nt-cargo-list">
          {services.map((s) => (
            <li className="nt-cargo-row" key={s.code}>
              <span className="nt-cargo-code" aria-hidden="true">
                {s.code}
              </span>
              <div className="nt-cargo-body">
                <h3>{s.name}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="nt-cargo-tag">{s.tag}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- DŮVĚRA / SPOLUPRÁCE ---------- */}
      <section className="nt-section nt-trust" aria-labelledby="duvera-h">
        <div className="nt-trust-grid">
          <div className="nt-trust-copy">
            <p className="nt-eyebrow nt-eyebrow-light">Proč Nicotrans</p>
            <h2 id="duvera-h">
              27 let na silnici. Vaše zboží nesvěřujeme náhodě.
            </h2>
            <p>
              Jsme rodinná dopravní firma z Českých Budějovic. Vlastní
              dispečink plánuje trasy tak, aby vozy nejezdily prázdné a vaše
              zásilka dorazila v domluveném okně — v Česku i kdekoli v Evropě.
              Chladírenské návěsy hlídají teplotu od nakládky po vykládku.
            </p>
            <ul className="nt-trust-points">
              <li>
                <strong>Vlastní flotila 200+ vozidel</strong>
                <span>
                  Převážně DAF, doplněná o tahače Ford a Mercedes — nejsme
                  závislí na cizích kapacitách.
                </span>
              </li>
              <li>
                <strong>Všechny teplotní režimy</strong>
                <span>
                  Plachty i chladírny, až 72 europalet na soupravu. Potraviny,
                  farmacie i běžné zboží.
                </span>
              </li>
              <li>
                <strong>Dispečink, který zvedá telefon</strong>
                <span>
                  O zásilce víte průběžně. Když se na trase cokoli změní,
                  voláme my vám — ne naopak.
                </span>
              </li>
            </ul>
          </div>

          <aside className="nt-trust-join">
            <p className="nt-trust-join-eyebrow">Přidejte se do flotily</p>
            <div className="nt-join-card">
              <h3>Nábor řidičů se zaškolením</h3>
              <p>
                Moderní technika, pravidelná práce a férová mzda. Zaškolíme vás
                a posadíme do vozu, o který se staráme ve vlastním servisu.
              </p>
              <a className="nt-btn nt-btn-dark" href="tel:+420725569569">
                Zavolat ohledně práce řidiče
              </a>
            </div>
            <div className="nt-join-card">
              <h3>Spolupráce s dopravci</h3>
              <p>
                Stabilní objem zakázek, efektivní vytížení vozidel a minimální
                prostoje díky našemu dispečinku a obchodnímu zázemí.
              </p>
              <a
                className="nt-btn nt-btn-dark"
                href="mailto:info@nicotrans.cz?subject=Spolupráce dopravce"
              >
                Napsat obchodnímu oddělení
              </a>
            </div>
            <p className="nt-trust-address">
              Nicotrans a.s. · Hlinská 457/2a, 370 01 České Budějovice
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
