import { Odometer } from "./motion";

const cars = [
  {
    year: "2002",
    model: "Porsche 911 Carrera 3.6i",
    km: "121 000 km",
    owners: "3 majitelé",
    fuel: "benzín",
    stk: "04/2026",
    price: "890 000 Kč",
  },
  {
    year: "2021",
    model: "BMW 320d xDrive M-Paket",
    km: "78 400 km",
    owners: "1 majitel",
    fuel: "nafta",
    stk: "09/2027",
    price: "749 000 Kč",
  },
  {
    year: "2020",
    model: "Mercedes-Benz GLS 400d 4Matic",
    km: "96 200 km",
    owners: "2 majitelé",
    fuel: "nafta",
    stk: "05/2026",
    price: "1 690 000 Kč",
  },
];

const services = [
  {
    label: "Výkup vozu",
    text: "Objektivně posoudíme cenu a váš vůz vykoupíme, obvykle do jednoho dne.",
  },
  {
    label: "Komisní prodej",
    text: "Chcete jezdit, než se auto prodá? Nabídneme ho našim zákazníkům za vás.",
  },
  {
    label: "Financování",
    text: "Splátky přes prověřené partnery spočítáme na místě podle konkrétního vozu.",
  },
  {
    label: "Pojištění",
    text: "Povinné ručení i havarijní pojištění sjednáme rovnou při prodeji.",
  },
  {
    label: "Převody vozidel",
    text: "Papírování na úřadech vyřídíme za vás — včetně dovozů z EU i mimo ni.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <section className="hero section">
        <div className="wrap">
          <div className="brand">
            <span className="brand-plate">RPD</span>
            <span className="brand-name">
              AUTO CZ<span className="brand-dot" aria-hidden="true">•</span>
            </span>
          </div>

          <p className="eyebrow">Autobazar • Praha • od roku 1994</p>

          <h1 className="hero-title">
            Vozy s <span className="hero-title-em">jasnou historií</span>
          </h1>

          <p className="hero-lead">
            Ojeté vozy s doloženým původem: najeté kilometry, počet majitelů,
            servisní knížka a platná STK. Papíry ukážeme dřív, než se zeptáte.
          </p>

          <div className="plate hero-plate">
            <div className="gauge">
              <Odometer value="25" />
              <span className="gauge-unit">let na trhu</span>
            </div>
            <div className="ledger">
              <span>1994</span>
              <span>dříve Autobazar Diesel</span>
              <span>přes 3 000 prodaných vozů</span>
              <span className="ledger-stk">Praha 8</span>
            </div>
          </div>

          <div className="hero-actions">
            <a className="btn" href="#nabidka">Prohlédnout nabídku</a>
            <p className="hero-hours">Otevřeno PO–PÁ 9:00–17:00, o víkendu po domluvě.</p>
          </div>
        </div>
      </section>

      <section id="nabidka" className="catalog section">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow-amber">Nabídka vozů</p>
            <h2 className="sec-title">Každé auto jako čtený spec-list</h2>
            <p className="sec-lead">
              Vybíráme a připravujeme vozy denně. Vyberte si online a přijeďte se
              podívat osobně — data na štítku odpovídají tomu, co uvidíte v knížce.
            </p>
          </header>

          <div className="car-grid">
            {cars.map((car) => (
              <article className="car plate" key={car.model}>
                <div className="car-slot">
                  <span className="car-year">{car.year}</span>
                  <span className="car-slot-tag">rok výroby</span>
                </div>
                <div className="car-body">
                  <h3 className="car-model">{car.model}</h3>
                  <p className="car-ledger">
                    {car.km} · {car.owners} · {car.fuel}
                  </p>
                  <div className="car-foot">
                    <span className="stk-stamp">STK do {car.stk}</span>
                    <span className="price">{car.price}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about section">
        <div className="wrap about-grid">
          <div className="about-plate-col">
            <div className="plate about-plate">
              <div className="gauge gauge-dark">
                <span className="gauge-num">1994</span>
                <span className="gauge-unit">rok, kdy jsme začali</span>
              </div>
              <div className="ledger ledger-dark">
                <span>Autobazar Diesel</span>
                <span>od 2016 RPD Auto CZ, a.s.</span>
                <span className="ledger-stk">Roman Průša</span>
              </div>
            </div>

            <address className="contact-plate">
              <span className="contact-label">Kde nás najdete</span>
              <span className="contact-line">Ukázková 123, Praha</span>
              <span className="contact-line">+420 777 111 222</span>
              <span className="contact-line">info@example.cz</span>
            </address>
          </div>

          <div className="about-text-col">
            <p className="eyebrow eyebrow-green">O nás • Proč nám věřit</p>
            <h2 className="sec-title">Auta, u kterých víme, odkud přijela</h2>
            <p className="about-para">
              Začínali jsme v roce 1994 jako Autobazar Diesel. Od roku 2016 jedeme
              dál jako RPD Auto CZ, a.s. Za tu dobu prošly našima rukama tisíce
              vozů — a u každého známe jeho příběh.
            </p>
            <p className="about-para">
              Prodáváme jen auta, u kterých doložíme historii: najeté kilometry,
              počet majitelů, servisní záznamy i platnou technickou. Přijeďte se
              na vůz podívat osobně, papíry vytáhneme dřív, než o ně požádáte.
            </p>

            <ul className="service-list">
              {services.map((s) => (
                <li className="service" key={s.label}>
                  <span className="service-stamp" aria-hidden="true">✓</span>
                  <div>
                    <span className="service-label">{s.label}</span>
                    <span className="service-text">{s.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
