import type { CSSProperties } from "react";

export default function Page() {
  const rooms = [
    {
      key: "zahrada",
      label: "Výhled do zahrady",
      title: "Pokoje se zahradní stranou",
      text: "Ticho, zeleň a ranní světlo přes terasu. Vlastní lednička, televize a Wi-Fi zdarma — všechno, co potřebujete po dni na kole podél Vltavy.",
    },
    {
      key: "mesto",
      label: "Výhled na město",
      title: "Pokoje směrem k centru",
      text: "Střechy Budějovic na dosah. Deset minut chůze na náměstí Přemysla Otakara II., čtyři sta metrů k zastávce Husova.",
    },
    {
      key: "snidane",
      label: "Každé ráno",
      title: "Snídaně a bar s českou kuchyní",
      text: "Snídaně se podává každé ráno. Večer se u baru připravují typická česká jídla na požádání — bez rezervace, bez spěchu.",
    },
  ];

  const facts = [
    { k: "Parkování", v: "Vlastní, zdarma" },
    { k: "Wi-Fi", v: "Na každém pokoji" },
    { k: "K náměstí", v: "10 min pěšky" },
    { k: "Lázně s bazénem", v: "8 min pěšky" },
  ];

  return (
    <main className="lux">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Hotel Lux, České Budějovice">
          <span className="wordmark-lux">LUX</span>
          <span className="wordmark-sub">Hotel · České Budějovice</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#pokoje">Pokoje</a>
          <a href="#hotel">Hotel</a>
          <a className="topnav-call" href="tel:+420380000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Rodinný Hotel Lux v obytné čtvrti u Vltavy v Českých Budějovicích"
        />
        <div className="hero-veil" aria-hidden="true" />
        <div className="hero-inner">
          <p className="hero-eyebrow">Jiráskovo nábřeží 19 · pár kroků od Vltavy</p>
          <h1 className="hero-title">
            Rodinný hotel na<br />
            <em>dohled řeky.</em>
          </h1>
          <p className="hero-lede">
            Klidná čtvrť Českých Budějovic, deset minut chůze na hlavní náměstí.
            Vlastní parkoviště, zahradní terasa a snídaně, kterou máte v ceně.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420380000000">Zavolat a rezervovat</a>
            <a className="btn btn-ghost" href="#pokoje">Prohlédnout pokoje</a>
          </div>
        </div>
        <ul className="hero-strip" aria-label="Co je v ceně">
          {facts.map((f) => (
            <li key={f.k}>
              <span className="strip-k">{f.k}</span>
              <span className="strip-v">{f.v}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="pokoje" className="rooms">
        <div className="section-head">
          <p className="eyebrow">Ubytování</p>
          <h2>Tři způsoby, jak se u nás probudit</h2>
          <p className="section-note">
            Každý pokoj má televizi, ledničku a bezplatné Wi-Fi. Vyberte si výhled —
            do zahrady, na město, nebo si nechte poradit na recepci.
          </p>
        </div>
        <div className="rooms-grid">
          {rooms.map((r, i) => (
            <article key={r.key} className="room-card">
              <span className="room-num" style={{ "--i": i } as CSSProperties}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="room-label">{r.label}</p>
              <h3>{r.title}</h3>
              <p>{r.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="hotel" className="about">
        <div className="about-media">
          <img
            src="/section-1.webp"
            alt="Zahradní terasa Hotelu Lux"
            className="about-img"
          />
          <img
            src="/section-2.webp"
            alt="Pokoj Hotelu Lux s výhledem"
            className="about-img about-img--offset"
          />
        </div>
        <div className="about-text">
          <p className="eyebrow">O hotelu</p>
          <h2>Malý hotel, který si pamatuje vaše jméno</h2>
          <p>
            Hotel Lux vedeme jako rodinu. Stojíme v obytné čtvrti u břehu Vltavy,
            kousek od centra — dost daleko na klid, dost blízko na to, abyste
            všechno prošli pěšky.
          </p>
          <p>
            Přijedete autem? Zaparkujete na vlastním soukromém parkovišti zdarma.
            Jezdíte na kole podél řeky? Terasa v zahradě je přesně to místo, kde
            si po trase sednout. Veřejné lázně s vnitřním i venkovním bazénem
            máte osm minut pěšky.
          </p>
          <ul className="about-list">
            <li>Zahradní terasa a bar s českou kuchyní na požádání</li>
            <li>Snídaně každé ráno, restaurace a obchody kolem centra</li>
            <li>Zastávka Husova 400 m, náměstí 10 minut chůze</li>
          </ul>
          <div className="about-contact">
            <a href="tel:+420380000000">Zavolat na recepci</a>
            <a href="mailto:recepce@hotellux-cb.cz">Napsat e-mail</a>
          </div>
        </div>
      </section>
    </main>
  );
}
