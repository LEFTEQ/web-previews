import type { CSSProperties } from "react";

export default function Page() {
  const rooms = [
    {
      key: "01",
      name: "Pokoj Standard",
      beds: "1–2 lůžka",
      note: "Klidná strana do vnitrobloku, tichý spánek i uprostřed města.",
      price: "od 1 290 Kč / noc",
    },
    {
      key: "02",
      name: "Pokoj Komfort",
      beds: "2 lůžka + pracovní kout",
      note: "Prostor navíc pro služební cesty — velký stůl a rychlá Wi-Fi.",
      price: "od 1 690 Kč / noc",
    },
    {
      key: "03",
      name: "Apartmá",
      beds: "2–4 osoby",
      note: "Oddělená ložnice a obývací část pro rodiny i delší pobyty.",
      price: "od 2 490 Kč / noc",
    },
  ];

  const reasons = [
    {
      label: "Poloha",
      text: "10 minut od centra Ostravy a Dolní oblasti Vítkovice. Zaparkujete přímo u hotelu.",
    },
    {
      label: "Snídaně",
      text: "Teplá i studená kuchyně formou bufetu, čerstvé pečivo a káva do 10:30.",
    },
    {
      label: "Recepce 24/7",
      text: "Přijedete pozdě? Nevadí. Klíč i rada, kam večer, na vás čekají celou noc.",
    },
  ];

  return (
    <main className="iso">
      <a className="iso-skip" href="#nabidka">
        Přeskočit na obsah
      </a>

      <header className="iso-topbar">
        <div className="iso-wordmark" aria-label="Hotel Isora">
          <span className="iso-mark">ISORA</span>
          <span className="iso-mark-sub">hotel · Ostrava</span>
        </div>
        <nav className="iso-nav" aria-label="Hlavní">
          <a href="#nabidka">Pokoje</a>
          <a href="#hotel">O hotelu</a>
          <a className="iso-nav-cta" href="tel:+420596000000">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="iso-hero">
        <div className="iso-hero-media">
          <img
            src="/hero.webp"
            alt="Recepce a interiér Hotelu Isora v Ostravě"
            className="iso-hero-img"
          />
          <div className="iso-hero-key" aria-hidden="true">
            <span className="iso-key-row">204</span>
            <span className="iso-key-label">číslo vašeho klíče</span>
          </div>
        </div>

        <div className="iso-hero-body">
          <p className="iso-eyebrow">Přenocujte v Ostravě</p>
          <h1 className="iso-h1">
            Přijeďte pozdě.
            <br />
            <span className="iso-h1-em">Recepce svítí celou noc.</span>
          </h1>
          <p className="iso-lede">
            Rodinný hotel kousek od centra a Dolních Vítkovic. Vlastní
            parkování, teplá snídaně a klid do vnitrobloku — ať přijedete
            služebně, na koncert nebo za rodinou.
          </p>
          <div className="iso-hero-actions">
            <a className="iso-btn" href="#nabidka">
              Vybrat pokoj
            </a>
            <a className="iso-btn iso-btn-ghost" href="tel:+420596000000">
              Zavolat na recepci
            </a>
          </div>
        </div>
      </section>

      <section id="nabidka" className="iso-section">
        <div className="iso-section-head">
          <p className="iso-eyebrow">Kde budete spát</p>
          <h2 className="iso-h2">Tři typy pokojů, jeden klidný spánek</h2>
        </div>

        <ul className="iso-rooms">
          {rooms.map((r) => (
            <li className="iso-room" key={r.key}>
              <span className="iso-room-key" aria-hidden="true">
                {r.key}
              </span>
              <div className="iso-room-body">
                <h3 className="iso-room-name">{r.name}</h3>
                <p className="iso-room-beds">{r.beds}</p>
                <p className="iso-room-note">{r.note}</p>
              </div>
              <span className="iso-room-price">{r.price}</span>
            </li>
          ))}
        </ul>

        <figure className="iso-figure">
          <img
            src="/section-1.webp"
            alt="Ukázka pokoje v Hotelu Isora s ustlanou postelí"
            className="iso-figure-img"
          />
          <figcaption className="iso-figure-cap">
            Snídani i pozdní check-in domluvíme podle vás — stačí zavolat na
            recepci.
          </figcaption>
        </figure>
      </section>

      <section id="hotel" className="iso-section iso-section-alt">
        <div className="iso-about">
          <figure className="iso-about-media">
            <img
              src="/section-2.webp"
              alt="Prostor hotelu Isora — společenská část a snídaňová místnost"
              className="iso-about-img"
            />
          </figure>

          <div className="iso-about-body">
            <p className="iso-eyebrow">Proč zrovna Isora</p>
            <h2 className="iso-h2">Malý hotel, který si vás pamatuje</h2>
            <p className="iso-about-lede">
              Nejsme řetězec. Vede nás rodina a většinu hostů poznáme podle
              jména, když se vrátí. Postaráme se o parkování, poradíme s
              tramvají i s tím, kde v Ostravě dobře povečeřet.
            </p>

            <dl className="iso-reasons">
              {reasons.map((item) => (
                <div className="iso-reason" key={item.label}>
                  <dt className="iso-reason-label">{item.label}</dt>
                  <dd className="iso-reason-text">{item.text}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
