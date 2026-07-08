import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A1 lešení s.r.o. — pronájem a montáž lešení Ringer | České Budějovice",
  description:
    "Systémové lešení Ringer na míru vaší stavbě. 12 000 m² materiálu, montáž i demontáž vlastní partou, mobilní oplocení. České Budějovice a okolí.",
};

const sluzby = [
  {
    marka: "01",
    nazev: "Fasádní lešení Ringer",
    text: "Systémové rámové lešení pro zateplení, omítky, klempířinu i střechy. Postavíme ho tam, kde ho potřebujete — na rodinný dům i na patrový bytový blok.",
    detail: "12 000 m² materiálu skladem",
  },
  {
    marka: "02",
    nazev: "Montáž a demontáž",
    text: "Přijedeme, postavíme, po dokončení díla zase odvezeme. Konstrukci navrhneme tak, aby seděla na vaši budovu i na váš rozpočet — bez zbytečných dílů navíc.",
    detail: "vlastní vyškolená parta",
  },
  {
    marka: "03",
    nazev: "Mobilní oplocení",
    text: "Plotové dílce 3,5 × 2 m na oplocení staveniště, akce nebo záboru. Rychlá montáž, žádné kopání do země, kdykoli přemístíte.",
    detail: "dílce 3,5 × 2 m",
  },
];

export default function Page() {
  return (
    <main className="a1">
      <header className="a1-nav" aria-label="Hlavní">
        <a className="a1-wordmark" href="#" aria-label="A1 lešení, domů">
          <span className="a1-wordmark__mark" aria-hidden="true">
            A1
          </span>
          <span className="a1-wordmark__text">
            lešení<span className="a1-wordmark__sub">s.r.o.</span>
          </span>
        </a>
        <nav className="a1-nav__links">
          <a href="#sluzby">Co půjčujeme</a>
          <a href="#firma">O firmě</a>
          <a className="a1-nav__call" href="tel:+420739593769">
            739 593 769
          </a>
        </nav>
      </header>

      <section className="a1-hero">
        <div className="a1-hero__frame">
          <img
            className="a1-hero__img"
            src="/hero.webp"
            alt="Fasádní lešení postavené kolem domu na stavbě v Českých Budějovicích"
            loading="eager"
            width={1600}
            height={1000}
          />
          <div className="a1-hero__scale" aria-hidden="true">
            <span>0 m</span>
            <span>4 m</span>
            <span>8 m</span>
            <span>12 m</span>
            <span>16 m</span>
          </div>
        </div>

        <div className="a1-hero__copy">
          <p className="a1-eyebrow">
            <span className="a1-eyebrow__tag">Ringer</span>
            Pronájem lešení · České Budějovice
          </p>
          <h1 className="a1-hero__title">
            Postavíme vám
            <br />
            <span className="a1-hero__accent">pevnou zem</span>
            <br />
            do výšky.
          </h1>
          <p className="a1-hero__lead">
            Systémové lešení Ringer na fasády, střechy i zateplení. Máme skladem
            12 000 m² materiálu a partu, která ho postaví i sundá za vás.
          </p>
          <div className="a1-hero__actions">
            <a className="a1-btn a1-btn--primary" href="tel:+420739593769">
              Zavolat 739 593 769
            </a>
            <a
              className="a1-btn a1-btn--ghost"
              href="mailto:info@a1leseni.cz?subject=Popt%C3%A1vka%20le%C5%A1en%C3%AD"
            >
              Napsat poptávku
            </a>
          </div>
        </div>
      </section>

      <section className="a1-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="a1-section-head">
          <p className="a1-eyebrow">Nabídka</p>
          <h2 id="sluzby-nadpis" className="a1-h2">
            Tři věci, které od nás dostanete
          </h2>
        </div>

        <ol className="a1-grid">
          {sluzby.map((s) => (
            <li className="a1-card" key={s.marka}>
              <span className="a1-card__marka" aria-hidden="true">
                {s.marka}
              </span>
              <h3 className="a1-card__nazev">{s.nazev}</h3>
              <p className="a1-card__text">{s.text}</p>
              <p className="a1-card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="a1-figure">
          <img
            src="/section-1.webp"
            alt="Montáž rámového lešení Ringer na fasádě budovy"
            loading="lazy"
            width={1600}
            height={1000}
          />
          <figcaption>
            Rámový systém Ringer — každé pole nese svou váhu, montáž jde
            patro po patře.
          </figcaption>
        </figure>
      </section>

      <section className="a1-firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="a1-firma__grid">
          <div className="a1-firma__copy">
            <p className="a1-eyebrow">O firmě</p>
            <h2 id="firma-nadpis" className="a1-h2">
              Dvanáct let stavíme lešení kolem
              jižních Čech.
            </h2>
            <p className="a1-firma__text">
              A1 lešení je českobudějovická firma, která žije montáží a
              pronájmem systémového lešení Ringer. Nezáleží, jestli máte
              chalupu v Rudolfově nebo bytový dům v centru — přijedeme,
              zaměříme a navrhneme konstrukci, na které se vašim řemeslníkům
              bude dobře stát.
            </p>

            <dl className="a1-fakta">
              <div>
                <dt>Materiál skladem</dt>
                <dd>
                  12 000 <span>m²</span>
                </dd>
              </div>
              <div>
                <dt>Tradice</dt>
                <dd>
                  12 <span>let</span>
                </dd>
              </div>
              <div>
                <dt>Systém</dt>
                <dd>Ringer</dd>
              </div>
            </dl>

            <address className="a1-kontakt">
              <p>
                <strong>A1 lešení s.r.o.</strong>
                <br />
                Jivno 101, 373 71 Rudolfov
              </p>
              <p className="a1-kontakt__links">
                <a href="tel:+420739593769">+420 739 593 769</a>
                <a href="mailto:info@a1leseni.cz">info@a1leseni.cz</a>
              </p>
              <p className="a1-kontakt__ic">IČ 28105346 · DIČ CZ28105346</p>
            </address>
          </div>

          <figure className="a1-firma__foto">
            <img
              src="/section-2.webp"
              alt="Skladované díly lešení Ringer připravené k rozvozu"
              loading="lazy"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
