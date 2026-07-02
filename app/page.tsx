export default function Page() {
  const cars = [
    {
      name: "Škoda Octavia Combi 2.0 TDI",
      year: "2019",
      km: "98 000 km",
      fuel: "Diesel",
      price: "329 000 Kč",
      note: "1. majitel, servisní knížka, DPH",
    },
    {
      name: "VW Passat Variant 2.0 TDI DSG",
      year: "2018",
      km: "124 000 km",
      fuel: "Diesel",
      price: "359 000 Kč",
      note: "Původ ČR, tažné zařízení",
    },
    {
      name: "Hyundai i30 1.5 T-GDI",
      year: "2021",
      km: "41 000 km",
      fuel: "Benzín",
      price: "389 000 Kč",
      note: "V záruce, 1. majitel",
    },
    {
      name: "Kia Sportage 1.6 CRDi 4×4",
      year: "2020",
      km: "76 000 km",
      fuel: "Diesel",
      price: "479 000 Kč",
      note: "Plná výbava, zimní kola",
    },
  ];

  const checks = [
    { label: "Prověření VIN", desc: "Historie vozu v registrech ČR i zahraničí — nehody, stočené kilometry, leasing." },
    { label: "Diagnostika motoru", desc: "Každý vůz projde diagnostikou řídicích jednotek před naskladněním." },
    { label: "Kontrola karoserie", desc: "Měření tloušťky laku na všech dílech. Lakované díly přiznáváme v inzerátu." },
    { label: "Zkušební jízda", desc: "Vyzkoušíte si vůz v běžném brněnském provozu i na dálnici D1." },
  ];

  return (
    <main>
      {/* ================= HERO ================= */}
      <section className="hero" aria-label="EUROCARS Brno — autobazar">
        <div className="hero-inner">
          <header className="topbar">
            <div className="wordmark" aria-label="EUROCARS Brno">
              <span className="wm-euro">EURO</span>
              <span className="wm-cars">CARS</span>
              <span className="wm-city">BRNO</span>
            </div>
            <a className="topbar-phone" href="tel:+420777000000">
              Zavolat prodejci
            </a>
          </header>

          <div className="hero-plate" role="img" aria-label="Stylizovaná registrační značka s textem Brno-město">
            <span className="plate-eu">CZ</span>
            <span className="plate-text">B·RNO 2024</span>
          </div>

          <h1 className="hero-title">
            <span className="ht-line ht-1">Ojeté vozy</span>
            <span className="ht-line ht-2">s doloženou</span>
            <span className="ht-line ht-3">historií.</span>
          </h1>

          <p className="hero-lead">
            Autobazar v&nbsp;Brně, kde ke každému vozu dostanete výpis kilometrů,
            servisní historii a&nbsp;protokol o&nbsp;technickém stavu — ještě před zkušební jízdou.
          </p>

          <div className="hero-actions">
            <a className="btn btn-primary" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn-ghost" href="tel:+420777000000">
              +420 777 000 000
            </a>
          </div>

          <ul className="hero-facts" aria-label="Rychlá fakta">
            <li><strong>Původ ČR / EU</strong> u&nbsp;každého vozu</li>
            <li><strong>Výkup na místě</strong> platba ihned</li>
            <li><strong>Protiúčet</strong> odečteme z&nbsp;ceny</li>
          </ul>
        </div>

        <div className="hero-lane" aria-hidden="true">
          <div className="lane-dash" />
        </div>
      </section>

      {/* ================= NABÍDKA ================= */}
      <section className="stock" id="nabidka" aria-labelledby="stock-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Skladem v Brně</p>
            <h2 id="stock-h">Aktuální nabídka vozů</h2>
            <p className="section-sub">
              Vozy máme fyzicky na place — přijeďte, porovnejte a&nbsp;vyzkoušejte.
              Ceny jsou konečné, bez skrytých poplatků za „přípravu vozu“.
            </p>
          </div>

          <figure className="stock-photo">
            <img
              src="/section-1.webp"
              alt="Vozy připravené k prodeji na ploše autobazaru EUROCARS Brno"
            />
            <figcaption>Prodejní plocha EUROCARS Brno — každý vůz umytý, nafocený a&nbsp;připravený ke zkušební jízdě.</figcaption>
          </figure>

          <ul className="car-list">
            {cars.map((car) => (
              <li className="car-row" key={car.name}>
                <div className="car-main">
                  <h3>{car.name}</h3>
                  <p className="car-note">{car.note}</p>
                </div>
                <dl className="car-specs">
                  <div><dt>Rok</dt><dd>{car.year}</dd></div>
                  <div><dt>Nájezd</dt><dd>{car.km}</dd></div>
                  <div><dt>Palivo</dt><dd>{car.fuel}</dd></div>
                </dl>
                <p className="car-price">{car.price}</p>
              </li>
            ))}
          </ul>

          <p className="stock-more">
            Sháníte konkrétní model? Zavolejte — vůz vám do&nbsp;14&nbsp;dnů najdeme a&nbsp;prověříme.
          </p>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="section-inner trust-grid">
          <div className="trust-copy">
            <p className="eyebrow eyebrow-light">Než podepíšete</p>
            <h2 id="trust-h">Co u&nbsp;nás projde každý vůz</h2>
            <p className="section-sub section-sub-light">
              Nekupujete zajíce v&nbsp;pytli. Tohle je náš standardní postup u&nbsp;každého
              vozu, který naskladníme — a&nbsp;výsledky vám ukážeme černé na bílém.
            </p>

            <ol className="check-list">
              {checks.map((c, i) => (
                <li key={c.label}>
                  <span className="check-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{c.label}</h3>
                    <p>{c.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="trust-side">
            <figure className="trust-photo">
              <img
                src="/section-2.webp"
                alt="Technik EUROCARS Brno kontroluje vůz diagnostikou před prodejem"
              />
            </figure>
            <blockquote className="trust-quote">
              <p>
                „Octavii jsem si přijel jen prohlédnout. Dostal jsem k&nbsp;ní protokol
                z&nbsp;diagnostiky a&nbsp;výpis kilometrů — nikde jinde v&nbsp;Brně mi to
                nedali bez ptaní. Odjížděl jsem s&nbsp;ní ještě ten den.“
              </p>
              <cite>— Martin K., Brno-Líšeň</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
