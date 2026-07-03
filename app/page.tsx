const auta = [
  {
    model: "Škoda Octavia Combi 2.0 TDI",
    rok: "2019",
    km: "124 000 km",
    puvod: "Dovoz Německo",
    cena: "389 000 Kč",
    vybava: "DSG · LED · tažné · servisní kniha",
  },
  {
    model: "VW Passat Variant 2.0 TDI",
    rok: "2020",
    km: "98 500 km",
    puvod: "Dovoz Německo",
    cena: "459 000 Kč",
    vybava: "ACC · Matrix LED · kůže · 1. majitel",
  },
  {
    model: "BMW 320d Touring xDrive",
    rok: "2018",
    km: "142 000 km",
    puvod: "Dovoz Německo",
    cena: "499 000 Kč",
    vybava: "4×4 · navigace · zimní paket",
  },
  {
    model: "Audi A4 Avant 40 TDI",
    rok: "2019",
    km: "115 000 km",
    puvod: "Dovoz Německo",
    cena: "529 000 Kč",
    vybava: "S-tronic · virtual cockpit · záruka původu",
  },
];

const sluzby = [
  {
    tag: "PRODEJ",
    nazev: "Prodej dovezených vozů z EU",
    text: "Vozy vybíráme sami, převážně v Německu. Každé auto má doloženou historii, ověřený stav tachometru a záruku původu. Co nabízíme, to jsme sami viděli a projeli.",
  },
  {
    tag: "VÝKUP",
    nazev: "Výkup a protiúčet",
    text: "Vaše auto oceníme na místě a peníze dostanete ihned. Vůz můžete dát i na protiúčet — rozdíl doplatíte, papíry vyřídíme my.",
  },
  {
    tag: "POJIŠTĚNÍ",
    nazev: "Autopojištění na míru",
    text: "Povinné i havarijní pojištění srovnáme u více pojišťoven a sjednáme rovnou při koupi. Odjíždíte pojištění, bez obíhání poboček.",
  },
  {
    tag: "SERVIS",
    nazev: "Servis v prověřených dílnách",
    text: "Servis vozu zprostředkujeme u partnerů, které známe roky. Férové ceny, kvalitní práce — ručíme za ně vlastním jménem.",
  },
  {
    tag: "STK",
    nazev: "STK a emise v ceně vozu",
    text: "Dovozovou STK a emise máte u nás v ceně vozidla. Neplatíte nic navíc — na rozdíl od většiny konkurence.",
  },
  {
    tag: "REGISTR",
    nazev: "Registr vozidel bez front",
    text: "Přepis vlastníka, dovoz, vývoz, duplikáty TP i registrační značky na přání. Vy podepíšete plnou moc, my stojíme fronty za vás.",
  },
];

export default function Page() {
  return (
    <main className="sl">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            SL<span className="wordmark-slash">/</span>CARS
          </span>
          <span className="hero-loc">Pardubice · S. K. Neumanna 797</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Autobazar · dovoz z Německa</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">AUTA</span>
            <span className="hero-line hero-line-2">
              S&nbsp;JASNOU<span className="hero-km"> km</span>
            </span>
            <span className="hero-line hero-line-3">MINULOSTÍ</span>
          </h1>
          <p className="hero-sub">
            Vozy z&nbsp;EU vybíráme sami, s&nbsp;doloženou historií a&nbsp;zárukou
            původu. Dovozová STK je v&nbsp;ceně — a&nbsp;papíry na registru
            vyřídíme za vás.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420739145000">
              Zavolat +420 739 145 000
            </a>
            <a className="btn btn-ghost" href="#nabidka">
              Prohlédnout nabídku
            </a>
          </div>
        </div>

        {/* signature: odometr / tachometrový pás */}
        <div className="odo" aria-hidden="true">
          <div className="odo-track">
            <span>VÝKUP IHNED</span>
            <span className="odo-dot">●</span>
            <span>DOVOZ NĚMECKO</span>
            <span className="odo-dot">●</span>
            <span>STK V CENĚ</span>
            <span className="odo-dot">●</span>
            <span>PŘEPIS ZA VÁS</span>
            <span className="odo-dot">●</span>
            <span>PROTIÚČET</span>
            <span className="odo-dot">●</span>
            <span>VÝKUP IHNED</span>
            <span className="odo-dot">●</span>
            <span>DOVOZ NĚMECKO</span>
            <span className="odo-dot">●</span>
            <span>STK V CENĚ</span>
            <span className="odo-dot">●</span>
            <span>PŘEPIS ZA VÁS</span>
            <span className="odo-dot">●</span>
            <span>PROTIÚČET</span>
            <span className="odo-dot">●</span>
          </div>
        </div>
      </header>

      {/* ===== NABÍDKA ===== */}
      <section className="stock" id="nabidka" aria-labelledby="stock-h">
        <div className="section-head">
          <h2 id="stock-h">Aktuální nabídka</h2>
          <p className="section-lead">
            Každý vůz uvidíte na place na S.&nbsp;K.&nbsp;Neumanna — otevřeno po
            telefonické domluvě, klidně i&nbsp;večer.
          </p>
        </div>

        <ul className="stock-list">
          {auta.map((a) => (
            <li className="card" key={a.model}>
              <div className="card-plate" aria-hidden="true">
                <span className="plate-eu">CZ</span>
                <span className="plate-num">{a.rok}</span>
              </div>
              <h3 className="card-model">{a.model}</h3>
              <dl className="card-specs">
                <div>
                  <dt>Najeto</dt>
                  <dd>{a.km}</dd>
                </div>
                <div>
                  <dt>Původ</dt>
                  <dd>{a.puvod}</dd>
                </div>
              </dl>
              <p className="card-vybava">{a.vybava}</p>
              <p className="card-cena">{a.cena}</p>
            </li>
          ))}
        </ul>

        <p className="stock-note">
          Nenašli jste svůj vůz? Zavolejte — konkrétní auto vám dovezeme
          z&nbsp;Německa na přání.
        </p>
      </section>

      {/* ===== SLUŽBY / DŮVĚRA ===== */}
      <section className="services" aria-labelledby="services-h">
        <div className="section-head">
          <h2 id="services-h">Auto koupíte, zbytek zařídíme</h2>
          <p className="section-lead">
            Od výkupu po registrační značky na přání — všechno pod jednou
            střechou v&nbsp;Pardubicích.
          </p>
        </div>

        <div className="services-grid">
          {sluzby.map((s) => (
            <article className="service" key={s.tag}>
              <span className="service-tag">{s.tag}</span>
              <h3>{s.nazev}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>

        <div className="trust">
          <div className="trust-item">
            <span className="trust-num">100&nbsp;%</span>
            <span className="trust-label">vozů s&nbsp;doloženou historií a&nbsp;zárukou původu</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">0&nbsp;Kč</span>
            <span className="trust-label">za dovozovou STK — je vždy v&nbsp;ceně vozu</span>
          </div>
          <div className="trust-item">
            <span className="trust-num">Ihned</span>
            <span className="trust-label">peníze na ruku při výkupu vašeho auta</span>
          </div>
        </div>
      </section>
    </main>
  );
}
