import type { CSSProperties } from "react";

const services = [
  {
    tag: "VELKÝ FORMÁT",
    title: "Velkoplošná reklama",
    lead: "Billboardy, plachty, panely a bannery — od návrhu po montáž.",
    body: "Připravíme reklamu, která je vidět z dálky: grafický návrh na míru, tisk ve velkém formátu i odbornou montáž na plochu, štít nebo lešení.",
    items: ["Billboardy a bigboardy", "Plachty a bannery", "Cedule, plakáty, panely"],
  },
  {
    tag: "NÁVRH A TISK",
    title: "Grafika a design",
    lead: "Vizitky, loga, katalogy, letáky, inzeráty — vše čitelné a nápadité.",
    body: "Navrhneme firemní identitu i jednotlivé tiskoviny tak, aby vaše značka držela pohromadě od vizitky po katalog. Návrh, sazba i tisk pod jednou střechou.",
    items: ["Loga a firemní identita", "Katalogy, letáky, inzeráty", "Vizitky a formuláře"],
  },
  {
    tag: "ŘEZANÁ FÓLIE",
    title: "Polepy aut a řezaná reklama",
    lead: "Texty a poutače ze samolepící fólie na téměř libovolný povrch.",
    body: "Grafiku vyřežeme ze samolepící fólie nebo polystyrenu a nalepíme na auta, výlohy, štíty i cedule. Přesně, natvrdo, aby to vydrželo v ostravském počasí.",
    items: ["Polepy vozidel", "Výlohy a vývěsní štíty", "Reklamní poutače"],
  },
];

export default function Page() {
  return (
    <main className="is-main">
      <header className="is-topbar">
        <a className="is-wordmark" href="#top" aria-label="Image Studio Ostrava — domů">
          <span className="is-wordmark__image">Image</span>
          <span className="is-wordmark__studio">Studio</span>
          <span className="is-wordmark__place">Ostrava · od 1993</span>
        </a>
        <nav className="is-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#onas">O nás</a>
          <a className="is-nav__call" href="tel:+420777792474">+420 777 792 474</a>
        </nav>
      </header>

      <section className="is-hero" id="top">
        <div className="is-hero__frame">
          <img
            className="is-hero__img"
            src="/hero.webp"
            alt="Velkoplošná reklama a polepy od Image Studia v Ostravě"
            width={1600}
            height={1000}
          />
          <div className="is-hero__scrim" aria-hidden="true" />
        </div>

        <div className="is-hero__body">
          <p className="is-eyebrow">Reklamní &amp; marketingová agentura · Ostrava</p>
          <h1 className="is-hero__head">
            <span className="is-hero__line">Ať je vaše</span>
            <span className="is-hero__line is-hero__line--mark">značka vidět</span>
            <span className="is-hero__line">z druhého konce ulice.</span>
          </h1>
          <p className="is-hero__sub">
            Od billboardu přes polep auta až po vizitku — děláme reklamu, která
            zabere velký formát i malý detail. Severní Morava a Slezsko od roku 1993.
          </p>
          <div className="is-hero__cta">
            <a className="is-btn is-btn--primary" href="#sluzby">Co pro vás uděláme</a>
            <a className="is-btn is-btn--ghost" href="tel:+420777792474">Zavolat rovnou</a>
          </div>
        </div>

        <dl className="is-hero__meta">
          <div>
            <dt>V oboru od</dt>
            <dd>1993</dd>
          </div>
          <div>
            <dt>Působíme</dt>
            <dd>Morava &amp; Slezsko</dd>
          </div>
          <div>
            <dt>Od návrhu po</dt>
            <dd>montáž</dd>
          </div>
        </dl>
      </section>

      <section className="is-services" id="sluzby">
        <div className="is-section-head">
          <p className="is-eyebrow">Výběr z našich služeb</p>
          <h2 className="is-h2">Kompletní reklamní servis pod jednou střechou</h2>
          <p className="is-section-lead">
            Nemusíte to skládat z pěti dodavatelů. Návrh, tisk, řezání i montáž
            zvládneme sami — a tím pádem ručíme za výsledek od začátku do konce.
          </p>
        </div>

        <ol className="is-cards">
          {services.map((s, i) => (
            <li
              className="is-card"
              key={s.title}
              style={{ "--i": String(i) } as CSSProperties}
            >
              <div className="is-card__top">
                <span className="is-card__num">{String(i + 1).padStart(2, "0")}</span>
                <span className="is-card__tag">{s.tag}</span>
              </div>
              <h3 className="is-card__title">{s.title}</h3>
              <p className="is-card__lead">{s.lead}</p>
              <p className="is-card__body">{s.body}</p>
              <ul className="is-card__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="is-about" id="onas">
        <div className="is-about__media">
          <img
            src="/section-1.webp"
            alt="Práce ostravského grafického a reklamního studia Image Studio"
            width={1200}
            height={900}
          />
        </div>

        <div className="is-about__text">
          <p className="is-eyebrow">Kdo jsme</p>
          <h2 className="is-h2">Ostravská reklamka, která to dělá řemeslně.</h2>
          <p className="is-about__p">
            Jsme reklamní a marketingová agentura z Ostravy s působností na severní
            Moravě a ve Slezsku. Naše práce je ale vidět po celé Moravě i Česku.
          </p>
          <p className="is-about__p">
            Sázíme na dlouhodobou spolupráci. Nechceme být jednorázový dodavatel —
            chceme být společník, který vaší značce dlouhodobě pomáhá růst. Ke každé
            zakázce máme individuální přístup a nabídku přizpůsobíme vašim produktům
            i tomu, kde má reklama zabrat.
          </p>

          <ul className="is-facts">
            <li>
              <span className="is-facts__k">30+ let</span>
              <span className="is-facts__v">zkušeností v reklamě i marketingu</span>
            </li>
            <li>
              <span className="is-facts__k">Vše u nás</span>
              <span className="is-facts__v">návrh · tisk · řezání · montáž</span>
            </li>
            <li>
              <span className="is-facts__k">Ostrava</span>
              <span className="is-facts__v">domácí region, jistá ruka</span>
            </li>
          </ul>

          <figure className="is-about__figure">
            <img
              src="/section-2.webp"
              alt="Ukázka reklamní realizace Image Studia"
              width={1200}
              height={800}
            />
            <figcaption>Chceme, aby naši klienti byli vidět.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
