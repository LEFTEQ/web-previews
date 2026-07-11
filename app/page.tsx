import React from "react";

export default function Page() {
  const rooms = [
    {
      no: "01",
      name: "Pokoj Standard",
      desc: "Klidný pokoj s vlastní koupelnou pro jednoho i dva hosty. Ideální na krátký pracovní pobyt ve Vítkovicích.",
      price: "od 1 190 Kč / noc",
      meta: ["1–2 osoby", "Wi-Fi zdarma", "Snídaně možná"],
    },
    {
      no: "02",
      name: "Rodinný pokoj",
      desc: "Prostorný pokoj s přistýlkou a dětskou postýlkou na vyžádání. Blízko k ZOO Ostrava i Dolní oblasti Vítkovice.",
      price: "od 1 690 Kč / noc",
      meta: ["2–4 osoby", "Přistýlka", "Parkování"],
    },
    {
      no: "03",
      name: "Apartmán Max",
      desc: "Oddělená ložnice a obývací část s kuchyňským koutem pro delší pobyty i firemní hosty.",
      price: "od 2 290 Kč / noc",
      meta: ["2–3 osoby", "Kuchyňka", "Pracovní kout"],
    },
  ];

  return (
    <main className="mx">
      <header className="top">
        <a className="brand" href="#" aria-label="Hotel Max Ostrava — úvod">
          <span className="brand-mark" aria-hidden="true">M</span>
          <span className="brand-word">
            <span className="brand-hotel">HOTEL</span>
            <span className="brand-max">MAX</span>
          </span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#pokoje">Pokoje</a>
          <a href="#hotel">O hotelu</a>
          <a className="nav-cta" href="tel:+420596000000">Rezervovat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="hero-copy">
          <p className="eyebrow">Ostrava · Vítkovice · od roku 2003</p>
          <h1 id="hero-h">
            Přespěte v srdci<br />
            průmyslové Ostravy
          </h1>
          <p className="lede">
            Rodinný Hotel Max leží pár minut od Dolní oblasti Vítkovice a Bolt Areny.
            Klidné pokoje, ranní snídaně a parkování hned u vchodu — bez zbytečností,
            za férovou cenu.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420596000000">Zavolat a rezervovat</a>
            <a className="btn btn-ghost" href="#pokoje">Prohlédnout pokoje</a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Recepce</dt>
              <dd>nonstop</dd>
            </div>
            <div>
              <dt>Snídaně</dt>
              <dd>6:30–10:00</dd>
            </div>
            <div>
              <dt>Parkování</dt>
              <dd>u hotelu</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img src="/hero.webp" alt="Průčelí Hotelu Max v Ostravě-Vítkovicích za soumraku" width={1200} height={1400} />
          <figcaption>Hotel Max, Ostrava-Vítkovice</figcaption>
        </figure>
      </section>

      <section className="rooms" id="pokoje" aria-labelledby="rooms-h">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Nabídka ubytování</p>
          <h2 id="rooms-h">Vyberte si pokoj</h2>
          <p className="section-note">
            Všechny ceny jsou za pokoj a noc. Rezervaci potvrdíme telefonicky do několika minut.
          </p>
        </div>
        <ul className="room-grid">
          {rooms.map((r) => (
            <li className="room" key={r.no}>
              <span className="room-no" aria-hidden="true">{r.no}</span>
              <h3>{r.name}</h3>
              <p className="room-desc">{r.desc}</p>
              <ul className="room-meta">
                {r.meta.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
              <p className="room-price">{r.price}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="about" id="hotel" aria-labelledby="about-h">
        <figure className="about-media">
          <img src="/section-1.webp" alt="Interiér pokoje v Hotelu Max s ustlanou postelí" width={1000} height={1200} />
        </figure>
        <div className="about-copy">
          <p className="eyebrow eyebrow-dark">Proč k nám</p>
          <h2 id="about-h">Malý hotel, o který se staráme sami</h2>
          <p>
            Hotel Max vedeme jako rodinu už přes dvacet let. Znáte tu člověka na recepci
            jménem, poradíme s cestou na hokej i s dobrou hospodou v okolí. Žádné anonymní
            řetězce — jen čisté pokoje a lidský přístup.
          </p>
          <ul className="about-list">
            <li>
              <strong>7 minut</strong>
              <span>pěšky do Dolní oblasti Vítkovice</span>
            </li>
            <li>
              <strong>u dálnice D1</strong>
              <span>snadný příjezd i pro řidiče</span>
            </li>
            <li>
              <strong>psi vítáni</strong>
              <span>po domluvě a bez poplatku navíc</span>
            </li>
          </ul>
          <figure className="quote">
            <blockquote>
              „Přijeli jsme na koncert do Trojhalí a zůstali dvě noci. Čisto, klid a paní na
              recepci nám poradila, kam na guláš. Příště zase.“
            </blockquote>
            <figcaption>— Petra H., host z Brna</figcaption>
          </figure>
          <div className="about-band">
            <img src="/section-2.webp" alt="Snídaňový stůl v jídelně Hotelu Max" width={900} height={600} />
          </div>
        </div>
      </section>
    </main>
  );
}
