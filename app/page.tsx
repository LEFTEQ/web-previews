import type { CSSProperties } from "react";

const rooms = [
  {
    key: "1953",
    name: "Business Room",
    note: "Dvoulůžkový pokoj se stylovým interiérem a výhledem na Špilberk nebo historické centrum.",
    view: "Špilberk",
  },
  {
    key: "apt",
    name: "Suite s kuchyňkou",
    note: "Elegantní apartmá s designovým dřevěným nábytkem ve světlých, sladěných tónech.",
    view: "Staré Brno",
  },
  {
    key: "top",
    name: "Executive Suite",
    note: "Výjimečně řešená apartmá v privátním nejvyšším patře, s výhledem přes střechy města.",
    view: "nejvyšší patro",
  },
  {
    key: "spa",
    name: "Wellness Suite",
    note: "Apartmá s privátní Mini Spa — soukromí, klid a wellness jen pro vás dva.",
    view: "privátní lázeň",
  },
];

const restaurants = [
  {
    name: "Siesta",
    line: "Sezónní menu z místních surovin, večer víno z prosklené vinotéky.",
  },
  {
    name: "Gusto",
    line: "Denní kuchyně s mezinárodním přesahem v srdci hotelu.",
  },
  {
    name: "Lucullus",
    line: "Klasika pro slavnostní příležitosti a večeře o více chodech.",
  },
  {
    name: "Siesta Bar",
    line: "Sklenka vína z prosklené vinotéky nebo drink po setmění.",
  },
];

export default function Page() {
  return (
    <main className="intr">
      <header className="intr-nav" aria-label="Hlavní">
        <a className="intr-mark" href="#top">
          <span className="intr-mark-line">Hotel</span>
          <span className="intr-mark-big">International</span>
          <span className="intr-mark-sub">Brno · Husova 16 · od 1962</span>
        </a>
        <nav className="intr-links">
          <a href="#pokoje">Pokoje</a>
          <a href="#stul">Restaurace</a>
          <a href="#tel" className="intr-nav-cta">Rezervovat</a>
        </nav>
      </header>

      <section className="intr-hero" id="top">
        <img
          className="intr-hero-img"
          src="/hero.webp"
          alt="Hotel International Brno na Husově ulici v historickém centru města"
        />
        <div className="intr-hero-veil" aria-hidden="true" />
        <div className="intr-hero-inner">
          <p className="intr-kicker">Historické centrum · Husova 16</p>
          <h1 className="intr-title">
            <span>Pobyt na</span>
            <span className="intr-title-em">nejlepší adrese</span>
            <span>v&nbsp;Brně.</span>
          </h1>
          <p className="intr-lead">
            Pár kroků od Špilberku, katedrály i divadel. Ubytování,
            gastronomie a konferenční sály pod jednou střechou —
            místo, kde se rodí zážitky.
          </p>
          <div className="intr-hero-actions">
            <a href="#tel" className="intr-btn">Rezervovat pobyt</a>
            <a href="#pokoje" className="intr-btn-ghost">Prohlédnout pokoje</a>
          </div>
          <dl className="intr-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Husova 16, 602&nbsp;00 Brno</dd>
            </div>
            <div>
              <dt>Konferenční sály</dt>
              <dd>15 sálů s denním světlem</dd>
            </div>
            <div>
              <dt>Restaurace</dt>
              <dd>Siesta · Gusto · Lucullus</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="intr-rooms" id="pokoje">
        <div className="intr-rooms-head">
          <p className="intr-eyebrow">Ubytování</p>
          <h2>Pokoje a apartmá<br />s výhledem na historii</h2>
          <p className="intr-rooms-intro">
            Snídaně na pokoj, návštěva privátní Mini Spa i okna
            otočená k památkám Brna. Vyberte si podle toho, na co
            se chcete dívat.
          </p>
        </div>

        <ol className="intr-room-grid">
          {rooms.map((r, i) => (
            <li
              className="intr-room"
              key={r.key}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="intr-room-view">{r.view}</span>
              <h3>{r.name}</h3>
              <p>{r.note}</p>
              <a href="#tel" className="intr-room-link">
                Rezervovat
              </a>
            </li>
          ))}
        </ol>

        <figure className="intr-room-figure">
          <img
            src="/section-1.webp"
            alt="Interiér pokoje Hotelu International Brno se stylovým nábytkem"
          />
        </figure>
      </section>

      <section className="intr-table" id="stul">
        <figure className="intr-table-figure">
          <img
            src="/section-2.webp"
            alt="Restaurace hotelu se sezónním menu a prosklenou vinotékou"
          />
        </figure>
        <div className="intr-table-body">
          <p className="intr-eyebrow">U stolu</p>
          <h2>Tradice se tu potká<br />s moderním tahem</h2>
          <p className="intr-table-intro">
            Restaurace Siesta a Gusto stojí na sezónním menu z
            místních surovin. Večer se posaďte k Siesta Baru se
            sklenkou vína z prosklené vinotéky.
          </p>
          <ul className="intr-menu">
            {restaurants.map((it) => (
              <li key={it.name}>
                <span className="intr-menu-name">{it.name}</span>
                <span className="intr-menu-line">{it.line}</span>
              </li>
            ))}
          </ul>
          <div className="intr-table-call" id="tel">
            <div>
              <p className="intr-call-label">Rezervace a dotazy</p>
              <a href="tel:+420542122111" className="intr-phone">
                +420&nbsp;542&nbsp;122&nbsp;111
              </a>
              <a
                href="mailto:reservation@hotelinternational.cz"
                className="intr-mail"
              >
                reservation@hotelinternational.cz
              </a>
            </div>
            <p className="intr-call-note">
              Recepce hotelu, Husova 16, Brno — otevřeno nonstop.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
