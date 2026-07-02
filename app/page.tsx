// CK MÁJ — cestovní kancelář, České Budějovice
// Náhledový redesign: hero + 2 obsahové sekce (výlety / důvěra & služby)

const vylety = [
  {
    nazev: "Krimmelské vodopády",
    popis: "Největší vodopády v Rakousku, pěší okruh podél kaskád",
    cena: "1 490 Kč",
    zeme: "AT",
    typ: "Příroda",
  },
  {
    nazev: "Berchtesgaden — Orlí hnízdo",
    popis: "Kehlstein, vyhlídka nad Alpami a jezero Königssee",
    cena: "1 750 Kč",
    zeme: "DE",
    typ: "Hory",
  },
  {
    nazev: "Zubačkou na Schafberg",
    popis: "Historická zubačka a výhled na Solnohradská jezera",
    cena: "895 Kč",
    zeme: "AT",
    typ: "Vlak",
  },
  {
    nazev: "Pasov a Linec lodí",
    popis: "Plavba po modrém Dunaji, dvě města za jeden den",
    cena: "1 890 Kč",
    zeme: "AT",
    typ: "Plavba",
  },
  {
    nazev: "Caorle — víkendové koupání",
    popis: "Jadran na skok: ráno odjezd, večer zpátky v Budějovicích",
    cena: "1 750 Kč",
    zeme: "IT",
    typ: "Moře",
  },
  {
    nazev: "Solnohradská jezera",
    popis: "Traunsee, Wolfgangsee a Mondsee během jednoho výletu",
    cena: "1 390 Kč",
    zeme: "AT",
    typ: "Jezera",
  },
];

const duvody = [
  {
    cislo: "32",
    jednotka: "let",
    text: "plníme cestovatelské sny z jižních Čech. Od roku 1992, stále stejná firma, stejní lidé.",
  },
  {
    cislo: "2",
    jednotka: "pobočky",
    text: "v Českých Budějovicích — Česká 44 v centru a V. Volfa 19 na sídlišti Máj. Přijďte, poradíme osobně.",
  },
  {
    cislo: "65",
    jednotka: "zájezdů",
    text: "v aktuální nabídce: moře, lázně, poznávací zájezdy i jednodenní výlety autobusem od nás z Budějovic.",
  },
];

const sluzby = [
  {
    titul: "Zájezdy velkých CK za stejné ceny",
    text: "Prodáváme dovolené od EXIM, FISCHER, ČEDOK, BLUE STYLE, TUI a dalších — za úplně stejných podmínek, jako kdybyste kupovali přímo u nich. Navíc vám s výběrem poradíme.",
  },
  {
    titul: "Vlastní autobusové výlety",
    text: "Jednodenní výlety do Alp, k jezerům i k moři pořádáme sami, vlastními autobusy s odjezdem z Českých Budějovic. Žádné přestupy, žádné noční přejezdy navíc.",
  },
  {
    titul: "Lázně v Česku i zahraničí",
    text: "Jednodenní lázeňské výlety i pobyty s ubytováním. Vybereme lázně podle toho, co potřebujete — odpočinek, léčbu, nebo obojí.",
  },
  {
    titul: "Dárkové poukázky a benefity",
    text: "Poukázky na částku i na konkrétní zájezd, platnost 1 rok. Do 50 % ceny zájezdu přijímáme Sodexo, Benefit Plus a další zaměstnanecké benefity.",
  },
];

export default function Page() {
  return (
    <main className="mj">
      {/* ============ HERO ============ */}
      <header className="mj-hero">
        <div className="mj-hero-top">
          <div className="mj-wordmark" aria-label="CK Máj, cestovní kancelář">
            <span className="mj-wordmark-ck">CK</span>
            <span className="mj-wordmark-maj">MÁJ</span>
            <span className="mj-wordmark-sub">cestovní kancelář · České Budějovice</span>
          </div>
          <nav className="mj-hero-nav" aria-label="Rychlý kontakt">
            <a href="tel:+420602370665" className="mj-nav-link">
              +420 602 370 665
            </a>
            <a href="mailto:ckmaj@ckmaj.cz" className="mj-nav-link mj-nav-link--mail">
              ckmaj@ckmaj.cz
            </a>
          </nav>
        </div>

        <div className="mj-hero-main">
          <p className="mj-hero-eyebrow">Odjezd z Českých Budějovic</p>
          <h1 className="mj-hero-title">
            <span className="mj-line mj-line-1">Ráno u&nbsp;nás,</span>
            <span className="mj-line mj-line-2">
              odpoledne u&nbsp;<em>moře</em>.
            </span>
          </h1>
          <p className="mj-hero-lead">
            Jednodenní výlety do Alp a&nbsp;na Jadran vlastními autobusy, dovolené
            u&nbsp;moře, lázně i&nbsp;poznávací zájezdy. Už 32&nbsp;let, pořád ze
            stejného města.
          </p>
          <div className="mj-hero-actions">
            <a href="#vylety" className="mj-btn mj-btn-solid">
              Vybrat výlet
            </a>
            <a href="tel:+420602370665" className="mj-btn mj-btn-ghost">
              Zavolat do CK
            </a>
          </div>
        </div>

        {/* Signature: jízdní řád / itinerář dne — vodorovná trasa s časy */}
        <div className="mj-route" aria-hidden="true">
          <div className="mj-route-line" />
          <div className="mj-route-stop mj-stop-1">
            <span className="mj-route-dot" />
            <span className="mj-route-time">6:00</span>
            <span className="mj-route-place">České Budějovice</span>
          </div>
          <div className="mj-route-stop mj-stop-2">
            <span className="mj-route-dot" />
            <span className="mj-route-time">8:30</span>
            <span className="mj-route-place">Linec / Salzburg</span>
          </div>
          <div className="mj-route-stop mj-stop-3">
            <span className="mj-route-dot" />
            <span className="mj-route-time">12:00</span>
            <span className="mj-route-place">Alpy / Jadran</span>
          </div>
          <div className="mj-route-stop mj-stop-4">
            <span className="mj-route-dot mj-route-dot--end" />
            <span className="mj-route-time">22:00</span>
            <span className="mj-route-place">…a zpátky doma</span>
          </div>
        </div>
      </header>

      {/* ============ SEKCE 1: VÝLETY ============ */}
      <section className="mj-section mj-section-vylety" id="vylety" aria-labelledby="vylety-h">
        <div className="mj-section-head">
          <h2 id="vylety-h" className="mj-section-title">
            Jednodenní výlety<span className="mj-title-dot">.</span>
          </h2>
          <p className="mj-section-sub">
            Pořádáme je sami, vlastními autobusy. Nastoupíte v&nbsp;Budějovicích,
            večer vás tam zase vysadíme.
          </p>
        </div>

        <ul className="mj-trips" role="list">
          {vylety.map((v) => (
            <li key={v.nazev} className="mj-trip">
              <div className="mj-trip-meta">
                <span className="mj-trip-tag">{v.typ}</span>
                <span className="mj-trip-zeme">{v.zeme}</span>
              </div>
              <h3 className="mj-trip-nazev">{v.nazev}</h3>
              <p className="mj-trip-popis">{v.popis}</p>
              <p className="mj-trip-cena">
                <span className="mj-trip-od">od</span> {v.cena}
              </p>
            </li>
          ))}
        </ul>

        <p className="mj-trips-note">
          V&nbsp;nabídce máme přes 65&nbsp;zájezdů a&nbsp;výletů — advent, hrady
          a&nbsp;zámky, plavby po Dunaji, Řecko autobusem i&nbsp;letecky, výlety pro
          děti. Celý katalog 2026 vám ukážeme na pobočce nebo pošleme e-mailem.
        </p>
      </section>

      {/* ============ SEKCE 2: DŮVĚRA + SLUŽBY ============ */}
      <section className="mj-section mj-section-onas" aria-labelledby="onas-h">
        <div className="mj-section-head">
          <h2 id="onas-h" className="mj-section-title mj-section-title--light">
            Proč k&nbsp;nám<span className="mj-title-dot">?</span>
          </h2>
          <p className="mj-section-sub mj-section-sub--light">
            Nejsme anonymní web. Jsme dvě kanceláře v&nbsp;Budějovicích, kde vám
            dovolenou vybere člověk, který tam sám byl.
          </p>
        </div>

        <div className="mj-duvody">
          {duvody.map((d) => (
            <div key={d.jednotka} className="mj-duvod">
              <p className="mj-duvod-cislo">
                {d.cislo}
                <span className="mj-duvod-jednotka"> {d.jednotka}</span>
              </p>
              <p className="mj-duvod-text">{d.text}</p>
            </div>
          ))}
        </div>

        <div className="mj-sluzby">
          {sluzby.map((s) => (
            <article key={s.titul} className="mj-sluzba">
              <h3 className="mj-sluzba-titul">{s.titul}</h3>
              <p className="mj-sluzba-text">{s.text}</p>
            </article>
          ))}
        </div>

        <div className="mj-pobocky">
          <div className="mj-pobocka">
            <p className="mj-pobocka-label">Pobočka centrum</p>
            <p className="mj-pobocka-adresa">Česká 44, 370 01 České Budějovice</p>
          </div>
          <div className="mj-pobocka">
            <p className="mj-pobocka-label">Pobočka sídliště Máj</p>
            <p className="mj-pobocka-adresa">V. Volfa 19, 370 05 České Budějovice</p>
          </div>
          <div className="mj-pobocka mj-pobocka--kontakt">
            <p className="mj-pobocka-label">Zavolejte nebo napište</p>
            <p className="mj-pobocka-adresa">
              <a href="tel:+420602370665" className="mj-inline-link">
                +420 602 370 665
              </a>
              {" · "}
              <a href="mailto:ckmaj@ckmaj.cz" className="mj-inline-link">
                ckmaj@ckmaj.cz
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
