import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "PROFISERVIS Liberec — pneuservis a autoservis, opravy termopresem",
  description:
    "Rodinný pneuservis a autoservis v Liberci s praxí přes 20 let. Přezutí, vyvážení, opravy pneumatik termopresem — jediní v Libereckém kraji. Vilová 367, objednejte se telefonicky.",
  openGraph: {
    title: "PROFISERVIS Liberec — pneuservis a autoservis",
    description:
      "Obujeme vše od kočárku po jeřáb. Rodinný pneuservis v Liberci, opravy pneumatik termopresem. Přes 20 let praxe.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Přezutí a vyvážení",
    popis:
      "Sezónní přezutí osobních i nákladních vozů, vyvážení kol na moderní vyvažovačce a kontrola tlaku. Přijedete s letními, odjedete se zimními — a naopak.",
  },
  {
    kod: "02",
    nazev: "Oprava termopresem",
    popis:
      "Vulkanizace poškozené pneumatiky teplem a tlakem. Jako jediní v Libereckém kraji opravujeme pneu termopresem — často levněji než koupě nové.",
    signature: true,
  },
  {
    kod: "03",
    nazev: "Autoservis",
    popis:
      "Běžná údržba i opravy osobních vozů. Výměny, kontroly a příprava na cestu, aby vůz jel spolehlivě a bezpečně.",
  },
  {
    kod: "04",
    nazev: "Prodej nafty",
    popis:
      "Motorová nafta pro naše zákazníky přímo v areálu na Vilové. Doplníte při návštěvě servisu, bez zajížďky.",
  },
];

export default function Page() {
  return (
    <main className="ps-main">
      <header className="ps-topbar">
        <a className="ps-wordmark" href="#" aria-label="PROFISERVIS Liberec — úvodní strana">
          <span className="ps-wordmark__mark" aria-hidden="true">
            <span className="ps-tread" />
          </span>
          <span className="ps-wordmark__text">
            <strong>PROFISERVIS</strong>
            <span>Liberec</span>
          </span>
        </a>
        <a className="ps-topbar__phone" href="tel:+420777314317">
          +420&nbsp;777&nbsp;314&nbsp;317
        </a>
      </header>

      <section className="ps-hero" aria-labelledby="ps-hero-title">
        <div className="ps-hero__media">
          <img
            src="/hero.webp"
            alt="Pneumatika na vyvažovačce v dílně pneuservisu PROFISERVIS Liberec"
            className="ps-hero__img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="ps-hero__panel">
          <p className="ps-hero__eyebrow">Pneuservis · autoservis · Liberec, Vilová 367</p>
          <h1 id="ps-hero-title" className="ps-hero__title">
            Obujeme vše<br />
            <span className="ps-hero__from">od kočárku</span>
            <span className="ps-hero__to">po jeřáb.</span>
          </h1>
          <p className="ps-hero__lead">
            Rodinný pneuservis, kde se řemeslo dědí z generace na generaci. Na
            velikosti kola nám nezáleží — spravíme, přezujeme, vyvážíme.
          </p>
          <div className="ps-hero__actions">
            <a className="ps-btn ps-btn--primary" href="tel:+420777314317">
              Zavolat a objednat termín
            </a>
            <a className="ps-btn ps-btn--ghost" href="mailto:servis@profiservislbc.cz">
              Napsat na servis
            </a>
          </div>
          <dl className="ps-hero__stats">
            <div>
              <dt>V Liberci</dt>
              <dd>přes 20 let</dd>
            </div>
            <div>
              <dt>Termopres</dt>
              <dd>jediní v kraji</dd>
            </div>
            <div>
              <dt>Rozsah</dt>
              <dd>osobní i nákladní</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ps-services" aria-labelledby="ps-services-title">
        <div className="ps-section-head">
          <p className="ps-eyebrow">Co u nás pořídíte</p>
          <h2 id="ps-services-title">Servis pro každé kolo, které dorazí na dvůr</h2>
        </div>
        <ul className="ps-services__grid">
          {sluzby.map((s) => (
            <li
              key={s.kod}
              className={
                "ps-card" + (s.signature ? " ps-card--signature" : "")
              }
            >
              <span className="ps-card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="ps-card__nazev">{s.nazev}</h3>
              <p className="ps-card__popis">{s.popis}</p>
              {s.signature && (
                <span className="ps-card__flag">Naše specialita</span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="ps-about" aria-labelledby="ps-about-title">
        <div className="ps-about__media">
          <img
            src="/section-1.webp"
            alt="Práce v dílně rodinného pneuservisu PROFISERVIS Liberec"
            className="ps-about__img"
            width={1400}
            height={1050}
          />
        </div>
        <div className="ps-about__body">
          <p className="ps-eyebrow">Rodinný servis · záruka kvality</p>
          <h2 id="ps-about-title">
            Zkušenosti si předáváme<br />po generaci
          </h2>
          <p className="ps-about__text">
            Jsme rodinný pneuservis a v Liberci působíme přes dvacet let.
            Zručnost, znalosti a chuť do práce si předáváme z otce na syna — a
            děti se přiučují už od útlého věku. Díky tomu odvádíme vždy plný
            servis a za svou práci ručíme.
          </p>
          <ul className="ps-about__list">
            <li>Praxe v oboru přes 20 let</li>
            <li>Ceny dostupné opravdu pro každého</li>
            <li>Opravy pneumatik termopresem — jinde v kraji nenajdete</li>
          </ul>
          <div className="ps-about__contact">
            <a href="tel:+420777314317">+420&nbsp;777&nbsp;314&nbsp;317</a>
            <a href="mailto:servis@profiservislbc.cz">servis@profiservislbc.cz</a>
            <span>Vilová 367, 460&nbsp;10 Liberec</span>
          </div>
        </div>
      </section>
    </main>
  );
}
