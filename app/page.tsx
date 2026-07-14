import type { ReactNode } from "react";

function Plate({ top, bot, size }: { top: string; bot: string; size?: string }) {
  return (
    <span className="plate" style={size ? { fontSize: size } : undefined} aria-hidden="true">
      <span className="plate__top">{top}</span>
      <span className="plate__rule" />
      <span className="plate__bot">{bot}</span>
    </span>
  );
}

const services = [
  {
    id: "cisterny",
    label: "Cisternová doprava",
    title: "Kapaliny v cisterně, ne v kanystrech",
    text: "Nerezové i běžné cisterny na potravinářské i technické kapaliny. Vnitrostátní i mezinárodní trasy a přeprava nebezpečných věcí v režimu ADR s vyškolenými řidiči.",
    img: "/section-1.webp",
    alt: "Nerezová cisterna návěsové soupravy Mediatrans připravená k nakládce kapalin.",
    list: [
      "ADR — nebezpečné věci",
      "Potravinářské kapaliny",
      "Čistá cisterna ke každé jízdě",
      "Vnitrostátní i zahraniční trasy",
    ],
  },
  {
    id: "servis",
    label: "Servis nákladních vozidel",
    title: "Vlastní dílna, kratší prostoje",
    text: "Opravy tahačů, návěsů i cisteren na jednom místě. Diagnostika, běžná údržba i příprava na technickou kontrolu — pro naši flotilu i pro vás.",
    img: "/section-2.webp",
    alt: "Dílna servisu nákladních vozidel Mediatrans s tahačem na opravě.",
    list: [
      "Opravy tahačů a návěsů",
      "Servis a čištění cisteren",
      "Příprava na STK",
      "Diagnostika a údržba",
    ],
  },
];

const contact: { k: string; v: ReactNode }[] = [
  { k: "Dispečink autodopravy", v: <a href="tel:+420475603190">+420 475 603 190</a> },
  { k: "Dispečink — mobil", v: <a href="tel:+420602133319">+420 602 133 319</a> },
  { k: "Servis vozidel", v: <a href="tel:+420702211052">+420 702 211 052</a> },
  { k: "Ekonomické oddělení", v: <a href="tel:+420475603373">+420 475 603 373</a> },
  { k: "E-mail", v: <a href="mailto:info@mediatrans.cz">info@mediatrans.cz</a> },
  { k: "Adresa", v: "Hrbovice 106, 403 39 Chlumec" },
  { k: "IČO / DIČ", v: "49901648 / CZ49901648" },
  { k: "GPS", v: "N 50°40.070′, E 13°57.633′" },
];

const points = [
  { h: "Od roku 1993", p: "Přes tři desetiletí na silnicích ústeckého kraje i daleko za ním." },
  { h: "ADR přeprava", p: "Vyškolení řidiči a vybavení pro převoz nebezpečných věcí." },
  { h: "Vlastní servis", p: "Techniku opravíme sami, takže na cestě stojí co nejméně." },
];

export default function Page() {
  return (
    <>
      <header className="head">
        <div className="head__wrap wrap">
          <a className="brand" href="#top" aria-label="Mediatrans — úvod">
            <Plate top="ADR" bot="1993" size="0.72rem" />
            <span className="brand__name">
              Mediatrans
              <small>cisternová doprava · Ústí n. L.</small>
            </span>
          </a>
          <nav className="nav" aria-label="Hlavní">
            <a href="#sluzby">Nabídka</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
          <a className="btn btn--adr head__cta" href="tel:+420475603190">
            Zavolat dispečink
          </a>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <img className="hero__media" src="/hero.webp" alt="Souprava Mediatrans s cisternovým návěsem na silnici u Ústí nad Labem." />
          <div className="hero__overlay" />
          <div className="hero__inner wrap">
            <p className="hero__eyebrow rise" style={{ animationDelay: "0ms" }}>
              Autodoprava Hrbovice · Ústí nad Labem · od roku 1993
            </p>
            <h1 className="hero__title rise" style={{ animationDelay: "90ms" }}>
              Vaše kapaliny vozíme v <span className="u-adr">cisternách</span>. Spolehlivě a načas.
            </h1>
            <p className="hero__sub rise" style={{ animationDelay: "180ms" }}>
              Dispečink v Hrbovicích u Ústí nad Labem sežene vůz klidně i na zítřek. Vozíme pod ADR i
              běžné kapaliny — a cisternu před každou nakládkou vyčistíme a přebereme.
            </p>
            <div className="hero__actions rise" style={{ animationDelay: "270ms" }}>
              <a className="btn btn--adr" href="tel:+420475603190">
                Zavolat dispečink · 475 603 190
              </a>
              <a className="btn btn--ghost" href="mailto:info@mediatrans.cz">
                Napsat poptávku
              </a>
            </div>
            <ul className="spec rise" style={{ animationDelay: "360ms" }}>
              <li>N 50°40.070′</li>
              <li>E 13°57.633′</li>
              <li>ADR přeprava</li>
              <li>Vlastní servis</li>
            </ul>
            <div className="hero__plate stamp">
              <Plate top="ADR" bot="1993" size="1.5rem" />
            </div>
          </div>
        </section>

        <section id="sluzby" className="section section--light">
          <div className="wrap">
            <div className="sec-head">
              <p className="sec-head__label">Nabídka</p>
              <h2 className="sec-head__title">Dvě věci, které umíme naplno</h2>
              <p className="sec-head__lead">
                Vozíme kapaliny a staráme se o techniku, která je veze. Obojí pod jednou střechou
                v Hrbovicích.
              </p>
            </div>

            <div className="rows">
              {services.map((s, i) => (
                <article className={"row" + (i % 2 ? " row--flip" : "")} key={s.id}>
                  <div className="row__media">
                    <img src={s.img} alt={s.alt} loading="lazy" />
                  </div>
                  <div className="row__body">
                    <p className="row__label">{s.label}</p>
                    <h3 className="row__title">{s.title}</h3>
                    <p className="row__text">{s.text}</p>
                    <ul className="row__list">
                      {s.list.map((li) => (
                        <li key={li}>{li}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="kontakt" className="section section--dark">
          <div className="wrap trust">
            <div className="sec-head sec-head--dark">
              <p className="sec-head__label">Kde nás najdete</p>
              <h2 className="sec-head__title">Dispečink zvedá telefon každý všední den</h2>
              <p className="sec-head__lead">
                Zavolejte a řekněte co a kam. Ozveme se s termínem a cenou — bez zbytečného
                papírování.
              </p>
            </div>

            <div className="trust__grid">
              <dl className="sheet">
                {contact.map((c) => (
                  <div className="sheet__row" key={c.k}>
                    <dt>{c.k}</dt>
                    <dd>{c.v}</dd>
                  </div>
                ))}
              </dl>

              <ul className="points">
                {points.map((p) => (
                  <li className="point" key={p.h}>
                    <span className="point__mark" aria-hidden="true" />
                    <h3>{p.h}</h3>
                    <p>{p.p}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
