import type { CSSProperties } from "react";

export default function Page() {
  const openingHours = [
    { day: "Pondělí", hours: "9:00–21:00" },
    { day: "Úterý", hours: "9:00–21:00" },
    { day: "Středa", hours: "9:00–21:00" },
    { day: "Čtvrtek", hours: "9:00–21:00" },
    { day: "Pátek", hours: "9:00–21:00" },
    { day: "Sobota", hours: "9:00–21:00" },
    { day: "Neděle", hours: "9:00–21:00" },
  ];

  const services = [
    {
      tag: "Ušetřete čas",
      title: "Scan & Go",
      desc: "Naskenujte zboží mobilem přímo v regálu a zaplaťte bez fronty u pokladny.",
    },
    {
      tag: "Do 60 minut",
      title: "Expresní vyzvednutí",
      desc: "Objednávku vám v prodejně na Nise připravíme do hodiny. Vyzvednutí je zdarma.",
    },
    {
      tag: "Rozšířený sortiment",
      title: "Dekorativní kosmetika",
      desc: "NYX Professional Makeup, miss sporty, péče o nehty Essie a Sally Hansen.",
    },
    {
      tag: "Rozšířený sortiment",
      title: "Péče o pleť",
      desc: "Ziaja, Dermacol, Aknelot, Dr. Pawpaw a Geek & Gorgeous na jednom místě.",
    },
    {
      tag: "Zdravá výživa",
      title: "Potraviny a Alpro",
      desc: "Rostlinné nápoje a dezerty Alpro v rozšířeném výběru, bio potraviny.",
    },
    {
      tag: "Pro celou rodinu",
      title: "Hrací koutek & Wi-Fi",
      desc: "Balicí pult, bezbariérový přístup a koutek pro děti — nakoupíte v klidu.",
    },
  ];

  const nearby = [
    { addr: "nám. Soukenné 669/2a", zip: "460 07 Liberec", dist: "2,7 km", until: "20 hod." },
    { addr: "Liliová 172/14", zip: "460 01 Liberec", dist: "3,3 km", until: "19 hod." },
    { addr: "Sousedská 599", zip: "460 11 Liberec", dist: "4,2 km", until: "20 hod." },
    { addr: "Jateční 5203/2", zip: "466 01 Jablonec n. N.", dist: "8,3 km", until: "20 hod." },
  ];

  const today = "Čtvrtek";

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="dm drogerie markt Liberec, úvod">
          <span className="wordmark__dm">dm</span>
          <span className="wordmark__loc">Liberec · OC Nisa</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Služby</a>
          <a href="#prodejna">Prodejna</a>
          <a href="#okoli">V okolí</a>
        </nav>
      </header>

      <section className="hero" id="prodejna">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Prodejna dm drogerie markt v obchodním centru Nisa v Liberci"
            className="hero__img"
            width={1200}
            height={800}
          />
          <span className="hero__badge" aria-hidden="true">dm</span>
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Prodejna · OC Nisa</p>
          <h1 className="hero__title">
            Vaše drogerie<br />
            <span className="hero__title-accent">v Liberci</span>
          </h1>
          <p className="hero__addr">
            České Mládeže 456, OC Nisa · 460 03 Liberec
          </p>

          <div className="hero__status" role="status">
            <span className="dot" aria-hidden="true" />
            <span>
              Dnes ({today}) máme otevřeno <strong>do 21 hod.</strong>
            </span>
          </div>

          <div className="hero__cta">
            <a className="btn btn--primary" href="tel:+420482322766">
              Zavolat na prodejnu
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.google.com/maps/dir/?api=1&destination=%C4%8Cesk%C3%A9%20ml%C3%A1de%C5%BEe%20456%20Liberec"
            >
              Navigovat
            </a>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420482322766">+420 482 322 766</a></dd>
            </div>
            <div>
              <dt>Otevřeno každý den</dt>
              <dd>9:00–21:00</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="hours" aria-labelledby="hours-h">
        <h2 id="hours-h" className="sr-only">Otevírací doba</h2>
        <ul className="hours__row">
          {openingHours.map((o) => (
            <li
              key={o.day}
              className={"hours__cell" + (o.day === today ? " is-today" : "")}
            >
              <span className="hours__day">{o.day.slice(0, 2)}</span>
              <span className="hours__val">{o.hours}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="section-head__eyebrow">Co u nás na Nise najdete</p>
          <h2 id="nabidka-h" className="section-head__title">
            Služby této prodejny
          </h2>
          <p className="section-head__lead">
            Rozšířený sortiment kosmetiky, zdravá výživa i chytré nakupování bez
            fronty. Vybíráme to, co lidé v Liberci na téhle prodejně opravdu
            hledají.
          </p>
        </div>

        <ul className="cards">
          {services.map((s) => (
            <li className="card" key={s.title}>
              <span className="card__tag">{s.tag}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
            </li>
          ))}
        </ul>

        <div className="payways">
          <span className="payways__label">Zaplatíte:</span>
          <span className="pill">Hotově</span>
          <span className="pill">Kartou</span>
          <span className="pill">Body active beauty</span>
          <span className="pill">Dárkové poukázky</span>
        </div>
      </section>

      <section className="trust" id="okoli" aria-labelledby="trust-h">
        <div className="trust__intro">
          <p className="section-head__eyebrow">O prodejně &amp; okolí</p>
          <h2 id="trust-h" className="section-head__title">
            Nakoupíte pohodlně, ať jste kdekoli v Liberci
          </h2>
          <p className="trust__text">
            Prodejna v OC Nisa je bezbariérová, má balicí pult, Wi-Fi i hrací
            koutek pro děti. Máte to blíž jinam? V okolí najdete další čtyři
            prodejny dm — všechny s běžným sortimentem drogerie, kosmetiky a
            péče o domácnost.
          </p>
          <img
            src="/section-2.webp"
            alt="Interiér prodejny dm s regály drogerie a kosmetiky"
            className="trust__img"
            width={800}
            height={600}
          />
        </div>

        <div className="nearby">
          <img
            src="/section-1.webp"
            alt="Police s produkty péče o pleť a dekorativní kosmetiky"
            className="nearby__img"
            width={800}
            height={600}
          />
          <h3 className="nearby__title">Prodejny dm v okolí</h3>
          <ol className="nearby__list">
            {nearby.map((n, i) => (
              <li className="nearby__item" key={n.addr}>
                <span className="nearby__num" style={{ "--i": i } as CSSProperties}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="nearby__body">
                  <span className="nearby__addr">{n.addr}</span>
                  <span className="nearby__zip">{n.zip}</span>
                </span>
                <span className="nearby__meta">
                  <span className="nearby__dist">{n.dist}</span>
                  <span className="nearby__until">dnes do {n.until}</span>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
