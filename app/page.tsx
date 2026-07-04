import type { CSSProperties } from "react";

export const metadata = {
  title: "VARTOP — Plynoservis a kominictví Brno | Mora, Gorenje, Baxi",
  description:
    "Servis a montáž varné a topné techniky, revize plynových zařízení a kominictví pro Brno a okolí. Autorizovaný servis Mora, Gorenje, Baxi. Táborská 98, Brno.",
};

type Service = {
  no: string;
  title: string;
  lead: string;
  items: string[];
  brands: string[];
};

const services: Service[] = [
  {
    no: "01",
    title: "Plynoservis",
    lead: "Sporák nehřeje, hořák nechytá, deska škrtá naprázdno? Přijedeme, změříme a spravíme.",
    items: [
      "Servis a montáž sporáků, topidel a varných desek",
      "Záruční i pozáruční opravy varné a topné techniky",
      "Preventivní prohlídky pro delší životnost spotřebiče",
    ],
    brands: ["Mora", "Gorenje", "Moratop"],
  },
  {
    no: "02",
    title: "Revize plynových zařízení",
    lead: "Kotel a ohřívač vody potřebují jednou ročně kontrolu — s protokolem, který uznají pojišťovna i revizní technik.",
    items: [
      "Pravidelné roční prohlídky kotlů a ohřívačů vody",
      "Montáže a opravy plynových kotlů",
      "Protokol o kontrole a doporučení pro provoz",
    ],
    brands: ["Mora Top", "Baxi", "Brano"],
  },
  {
    no: "03",
    title: "Kominictví",
    lead: "Bez čisté spalinové cesty nespálíte nic bezpečně. Zkontrolujeme, vymeteme a v případě potřeby vyvložkujeme.",
    items: [
      "Pravidelné roční prohlídky komínů",
      "Kontrola a čištění spalinové cesty",
      "Vložkování komínů",
    ],
    brands: [],
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="VARTOP — plynoservis a kominictví Brno">
          <span className="wordmark__flame" aria-hidden="true" />
          <span className="wordmark__name">
            VAR<span className="wordmark__top">TOP</span>
          </span>
          <span className="wordmark__sub">plynoservis · kominictví</span>
        </a>
        <a className="call" href="tel:+420548216658">
          <span className="call__label">Zavolat servis</span>
          <span className="call__num">548 216 658</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Modrý plamen plynového hořáku ve sporáku během servisu"
            className="hero__img"
            width={1600}
            height={1200}
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="eyebrow">Brno a okolí · od plamene po komín</p>
          <h1 id="hero-title" className="hero__title">
            Když plamen zhasne,
            <br />
            <span className="hero__accent">jsme u vás.</span>
          </h1>
          <p className="hero__lead">
            Servis a montáž varné a topné techniky, revize plynových kotlů
            a kominictví. Spotřebiče Mora, Gorenje a Baxi vám prodáme,
            přivezeme, namontujeme — a staráme se o ně dál.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420548216658">
              Zavolat 548 216 658
            </a>
            <a className="btn btn--ghost" href="mailto:vartop@centrum.cz">
              Napsat na e-mail
            </a>
          </div>
          <dl className="hero__facts">
            <div className="fact">
              <dt>Kde</dt>
              <dd>Táborská 98, Brno</dd>
            </div>
            <div className="fact">
              <dt>Pohotovost</dt>
              <dd>602 745 716</dd>
            </div>
            <div className="fact">
              <dt>Značky</dt>
              <dd>Mora · Gorenje · Baxi</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás objednáte</p>
          <h2 id="services-title" className="section-title">
            Tři řemesla, jedna návštěva
          </h2>
          <p className="section-intro">
            Kvalifikovaný technik nejdřív poradí s výběrem, pak závadu
            změří a zvolí řešení, které dává smysl — bez zbytečné výměny
            dílů, které ještě slouží.
          </p>
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li key={s.no} className="card">
              <div className="card__top">
                <span className="card__no" aria-hidden="true">
                  {s.no}
                </span>
                <h3 className="card__title">{s.title}</h3>
              </div>
              <p className="card__lead">{s.lead}</p>
              <ul className="card__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              {s.brands.length > 0 && (
                <div className="card__brands">
                  {s.brands.map((b) => (
                    <span key={b} className="chip">
                      {b}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            src="/section-1.webp"
            alt="Technik VARTOP při servisu plynového kotle"
            className="trust__img"
            width={1200}
            height={900}
          />
          <img
            src="/section-2.webp"
            alt="Kontrola a čištění spalinové cesty komína"
            className="trust__img trust__img--offset"
            width={1200}
            height={900}
          />
        </div>

        <div className="trust__body">
          <p className="eyebrow eyebrow--dark">O nás</p>
          <h2 id="trust-title" className="section-title">
            Lidé, kteří vaše zařízení už znají
          </h2>
          <p className="trust__text">
            VARTOP s.r.o. dělá plynoservis a kominictví v Brně a okolí.
            Neprodáme vám nový spotřebič, když stačí ventil za pár korun —
            a když už měníme, přivezeme, namontujeme a staráme se dál,
            v záruce i po ní.
          </p>

          <dl className="trust__stats">
            <div className="stat">
              <dt className="stat__label">Prohlídka kotle</dt>
              <dd className="stat__value">1× ročně, s protokolem</dd>
            </div>
            <div className="stat">
              <dt className="stat__label">Autorizovaný servis</dt>
              <dd className="stat__value">Mora · Baxi · Brano</dd>
            </div>
            <div className="stat">
              <dt className="stat__label">Působnost</dt>
              <dd className="stat__value">Brno a okolí</dd>
            </div>
          </dl>

          <div className="trust__contact" role="group" aria-label="Kontakt">
            <a className="contact-line" href="tel:+420548216658">
              <span className="contact-line__k">Telefon</span>
              <span className="contact-line__v">548 216 658 · 602 745 716</span>
            </a>
            <a className="contact-line" href="mailto:vartop@centrum.cz">
              <span className="contact-line__k">E-mail</span>
              <span className="contact-line__v">vartop@centrum.cz</span>
            </a>
            <div className="contact-line">
              <span className="contact-line__k">Dílna</span>
              <span className="contact-line__v">Táborská 98, 615 00 Brno</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
