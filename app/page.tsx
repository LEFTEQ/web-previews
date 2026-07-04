import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FC Viktoria Plzeň — Doubravka, západ Čech",
  description:
    "Fotbalový klub z Plzně. Zápasy v Doubravce, mládežnická akademie a tradice od roku 1911. Kup lístky, přijď na tribunu, hraj za Viktorku.",
};

const nextMatch = {
  competition: "Chance Liga · 18. kolo",
  home: "Viktoria Plzeň",
  away: "Slavia Praha",
  date: "So 15. 2.",
  kickoff: "18:00",
  venue: "Doosan Arena, Plzeň-Doubravka",
};

const standingsSnippet = [
  { pos: "1.", club: "Sparta Praha", pts: 42 },
  { pos: "2.", club: "Viktoria Plzeň", pts: 39, us: true },
  { pos: "3.", club: "Slavia Praha", pts: 38 },
];

const offer = [
  {
    kick: "90'",
    title: "Permanentka na jaro",
    body:
      "Osm domácích zápasů v Doubravce za cenu šesti. Tvoje sedačka, tvoje parta, tvoje kotel. Sektor si vybereš sám.",
    action: "Koupit permanentku",
  },
  {
    kick: "1×",
    title: "Lístek na jeden zápas",
    body:
      "Přijď se podívat, jak se hraje evropský fotbal na západě Čech. Vstupenky online nebo v pokladně u stadionu.",
    action: "Vybrat zápas",
  },
  {
    kick: "U9–U19",
    title: "Fotbalová akademie",
    body:
      "Trénujeme kluky i holky z Plzeňska od přípravky po dorost. Přijď na nábor, kopačky si vezmi s sebou.",
    action: "Přihlásit dítě",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#" aria-label="FC Viktoria Plzeň, úvod">
          <span className="wordmark__fc">FC</span>
          <span className="wordmark__v">VIKTORIA</span>
          <span className="wordmark__city">PLZEŇ</span>
        </a>
        <nav className="nav__links">
          <a href="#zapas">Zápasy</a>
          <a href="#klub">Klub</a>
          <a href="#vstupenky" className="nav__cta">Vstupenky</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <img
          className="hero__img"
          src="/hero.webp"
          alt="Hráči Viktorie Plzeň v modrém dresu na trávníku Doosan Areny v Doubravce"
        />
        <div className="hero__scrim" aria-hidden="true" />
        <div className="hero__inner">
          <p className="hero__eyebrow">Plzeň-Doubravka · od roku 1911</p>
          <h1 id="hero-h" className="hero__title">
            Modrá je<br />
            <span className="hero__accent">jenom&nbsp;jedna.</span>
          </h1>
          <p className="hero__lead">
            Fotbal, jak se hraje na západě Čech. Domácí zápasy, mládežnická
            akademie a tribuna, kde se řve od první minuty.
          </p>

          <div className="fixture" id="zapas">
            <div className="fixture__meta">{nextMatch.competition}</div>
            <div className="fixture__teams">
              <span className="fixture__home">{nextMatch.home}</span>
              <span className="fixture__vs">–</span>
              <span className="fixture__away">{nextMatch.away}</span>
            </div>
            <div className="fixture__when">
              <span>{nextMatch.date}</span>
              <span className="fixture__time">{nextMatch.kickoff}</span>
            </div>
            <div className="fixture__venue">{nextMatch.venue}</div>
            <a className="btn btn--primary" href="#vstupenky">
              Kup lístek na Slavii
            </a>
          </div>
        </div>
      </section>

      <section className="offer" id="vstupenky" aria-labelledby="offer-h">
        <div className="section-head">
          <p className="section-head__eyebrow">Přijď na Doubravku</p>
          <h2 id="offer-h" className="section-head__title">
            Tvoje místo na tribuně
          </h2>
        </div>
        <ul className="cards">
          {offer.map((o) => (
            <li className="card" key={o.title}>
              <span className="card__kick" aria-hidden="true">
                {o.kick}
              </span>
              <h3 className="card__title">{o.title}</h3>
              <p className="card__body">{o.body}</p>
              <a className="card__link" href="#">
                {o.action}
                <span aria-hidden="true"> →</span>
              </a>
            </li>
          ))}
        </ul>
      </section>

      <section className="club" id="klub" aria-labelledby="club-h">
        <div className="club__media">
          <img
            src="/section-2.webp"
            alt="Kotel fanoušků Viktorie Plzeň s modro-červenými šálami na stadionu"
          />
        </div>
        <div className="club__text">
          <p className="section-head__eyebrow">Klub</p>
          <h2 id="club-h" className="section-head__title">
            Přes sto let<br />
            modrá krev
          </h2>
          <p className="club__para">
            Viktorka vznikla v Plzni v roce 1911. Z klubu z Petřína je dnes
            stálý účastník evropských pohárů — a pořád klub, kde místní chodí
            na fotbal celé rodiny.
          </p>

          <div className="table" aria-label="Aktuální pořadí v tabulce">
            <div className="table__cap">Chance Liga · aktuálně</div>
            {standingsSnippet.map((r) => (
              <div
                className={"table__row" + (r.us ? " is-us" : "")}
                key={r.club}
              >
                <span className="table__pos">{r.pos}</span>
                <span className="table__club">{r.club}</span>
                <span className="table__pts">{r.pts} b.</span>
              </div>
            ))}
          </div>

          <dl className="facts">
            <div>
              <dt>Stadion</dt>
              <dd>Doosan Arena, 11 700 diváků</dd>
            </div>
            <div>
              <dt>Titulů v lize</dt>
              <dd>4× mistr České republiky</dd>
            </div>
            <div>
              <dt>Domov</dt>
              <dd>Plzeň-Doubravka, Štruncovy sady</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
