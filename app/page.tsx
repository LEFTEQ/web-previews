const sluzby = [
  {
    kod: "NN",
    nazev: "Elektromontáže",
    popis:
      "Kompletní elektroinstalace pro rodinné domy, bytové domy, haly i průmyslové provozy. Silnoproud, rozvaděče, hromosvody — od první zásuvky po revizní zprávu.",
    detail: "Nová instalace i rekonstrukce starých hliníkových rozvodů.",
  },
  {
    kod: "VN",
    nazev: "Přípojky a práce pro ČEZ",
    popis:
      "Jsme smluvní kontaktní místo ČEZ. Vyřídíme přípojku, přeložku vedení nebo navýšení jističe — včetně papírování, které byste jinak řešili sami.",
    detail: "Trafostanice, kabelová vedení NN/VN, veřejné osvětlení.",
  },
  {
    kod: "PD",
    nazev: "Projekce",
    popis:
      "Vlastní projektanti kreslí dokumentaci, podle které se pak opravdu montuje. Žádné dohady mezi projektem a stavbou — obojí je pod jednou střechou.",
    detail: "Projektová dokumentace pro stavební povolení i realizaci.",
  },
  {
    kod: "ZP",
    nazev: "Zemní práce a doprava",
    popis:
      "Výkop pro kabel, protlak pod cestou, autojeřáb na sloup. Máme vlastní techniku, takže na stavbě nečekáte na třetí firmu.",
    detail: "Výkopy, protlaky, autodoprava, montážní plošina.",
  },
  {
    kod: "ŠS",
    nazev: "Školicí středisko",
    popis:
      "Školíme elektrikáře podle vyhlášky č. 50/1978 Sb. i nového NV 194/2022. Termíny vypisujeme celoročně přímo v Olomouci.",
    detail: "Zkoušky a přezkoušení odborné způsobilosti v elektrotechnice.",
  },
];

const duvody = [
  {
    cislo: "30+",
    text: "let táhneme kabely po Olomoucku — od paneláků po průmyslové areály",
  },
  {
    cislo: "ČEZ",
    text: "smluvní partner a kontaktní místo distribuce — přípojku vyřídíme za vás",
  },
  {
    cislo: "24 h",
    text: "poruchová služba pro smluvní zákazníky — když vypadne proud, jedeme",
  },
];

export default function Page() {
  return (
    <main className="el">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Elektromontér společnosti ELPREMONT při práci na rozvaděči"
            className="hero-img"
          />
          <div className="hero-shade" aria-hidden="true"></div>
        </div>

        <div className="hero-top">
          <div className="wordmark" aria-label="ELPREMONT elektromontáže">
            <span className="wordmark-bolt" aria-hidden="true">
              <svg viewBox="0 0 24 32" width="20" height="27" role="presentation">
                <path d="M14 0 2 18h7L8 32 22 12h-8L14 0z" fill="currentColor" />
              </svg>
            </span>
            <span className="wordmark-text">
              EL<em>PRE</em>MONT
            </span>
            <span className="wordmark-sub">elektromontáže · Olomouc</span>
          </div>
          <a className="hero-tel" href="tel:+420585311999">
            <span className="hero-tel-label">Poruchy i poptávky</span>
            <span className="hero-tel-num">585 311 999</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="live-dot" aria-hidden="true"></span>
            Pod napětím od roku 1992
          </p>
          <h1 className="hero-title">
            Elektrika, která drží.
            <br />
            <span className="hero-title-accent">Od projektu po revizi.</span>
          </h1>
          <p className="hero-lead">
            Elektromontáže, přípojky, projekce i výkopy — jedna olomoucká parta,
            jedna odpovědnost. Nemusíte koordinovat tři firmy, stačí zavolat nám.
          </p>
          <div className="hero-cta">
            <a className="btn btn-volt" href="tel:+420585311999">
              Zavolat elektrikáře
            </a>
            <a className="btn btn-ghost" href="mailto:info@elpremont.cz">
              Poslat poptávku e-mailem
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>L1</span>
          <span>L2</span>
          <span>L3</span>
          <span>N</span>
          <span>PE</span>
          <span className="strip-note">TN-C-S · 3×400/230 V · 50 Hz</span>
        </div>
      </header>

      {/* ===== SLUŽBY — ROZVADĚČ ===== */}
      <section className="panel" aria-labelledby="sluzby-h">
        <div className="panel-head">
          <p className="section-eyebrow">Co pro vás uděláme</p>
          <h2 id="sluzby-h" className="section-title">
            Pět okruhů, jeden rozvaděč
          </h2>
          <p className="section-lead">
            Každou zakázku jistíme celou — proto máme vedle montérů i vlastní
            projektanty, bagr a školicí středisko.
          </p>
        </div>

        <div className="panel-grid">
          <ul className="breaker-list">
            {sluzby.map((s) => (
              <li key={s.kod} className="breaker">
                <span className="breaker-switch" aria-hidden="true">
                  <span className="breaker-kod">{s.kod}</span>
                  <span className="breaker-lever"></span>
                </span>
                <div className="breaker-body">
                  <h3 className="breaker-title">{s.nazev}</h3>
                  <p className="breaker-text">{s.popis}</p>
                  <p className="breaker-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="panel-figure">
            <img
              src="/section-1.webp"
              alt="Otevřený elektrický rozvaděč s vyvázanými kabely a jističi"
              className="panel-img"
            />
            <figcaption className="panel-caption">
              Rozvaděč po naší montáži poznáte: vyvázané kabely, popsané okruhy,
              revizní zpráva v deskách.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ===== DŮVĚRA / REFERENCE ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-inner">
          <div className="trust-text">
            <p className="section-eyebrow section-eyebrow--light">
              Proč ELPREMONT
            </p>
            <h2 id="trust-h" className="section-title section-title--light">
              V Olomouci nás potkáte u výkopu i&nbsp;na sloupu
            </h2>
            <p className="trust-lead">
              Nejsme překupník práce — na stavbu přijedou naši lidé s naší
              technikou. Proto za dílem můžeme stát i po letech, kdy jiní už
              nezvedají telefon.
            </p>

            <dl className="trust-stats">
              {duvody.map((d) => (
                <div key={d.cislo} className="trust-stat">
                  <dt className="trust-num">{d.cislo}</dt>
                  <dd className="trust-desc">{d.text}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="trust-quote">
              <p>
                „Přípojku k novostavbě v Samotiškách vyřídili včetně jednání
                s ČEZ. Jediná firma, kde mi montér zvedl telefon i v sobotu.“
              </p>
              <cite>— pan Novotný, rodinný dům, Samotišky</cite>
            </blockquote>
          </div>

          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Montážní plošina ELPREMONT při práci na venkovním vedení v Olomouci"
              className="trust-img"
            />
            <figcaption className="trust-caption">
              Vlastní plošina a autojeřáb — na venkovní vedení nečekáme na
              subdodavatele.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
