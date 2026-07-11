import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Podlahové studio Pardubice — plovoucí, dřevěné a vinylové podlahy",
  description:
    "Kamenné podlahové studio v Pardubicích s 18 lety praxe. Vybereme, spočítáme a položíme podlahu, kterou umíme z vlastní ruky. Jindřišská 785, Pardubice.",
  openGraph: {
    title: "Podlahové studio Pardubice — skuteční podlaháři",
    description:
      "Byli jsme první, kdo v ČR položil plovoucí podlahu. Vybereme, dovezeme i uložíme — přijďte do studia na Jindřišské 785.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Podlahové studio Pardubice" }],
  },
};

const services = [
  {
    kod: "01",
    nazev: "Plovoucí podlahy",
    popis:
      "Laminát i vinyl, které jsme sami tisíckrát pokládali. Poradíme třídu zátěže podle toho, jestli jde o ložnici, nebo obývák plný dětí a psa.",
    detail: "Byli jsme první v ČR",
  },
  {
    kod: "02",
    nazev: "Dřevěné podlahy",
    popis:
      "Masiv i vícevrstvá prkna z dubu, jasanu a ořechu. Broušení, olej nebo lak — a údržba, po které vydrží desítky let.",
    detail: "Dub · jasan · ořech",
  },
  {
    kod: "03",
    nazev: "Doplňky a spočítání spotřeby",
    popis:
      "Lišty, přechodové profily, podložky, parozábrana. Podle vašeho plánku spočítáme praktickou spotřebu, ať nekupujete zbytečné metry navíc.",
    detail: "Dle plánku",
  },
];

const duvery = [
  { cislo: "18", jednotka: "let", popis: "praxe kamenného studia" },
  { cislo: "1.", jednotka: "v ČR", popis: "položená plovoucí podlaha" },
  { cislo: "1×", jednotka: "osobně", popis: "vše vezeme a předáváme sami" },
];

export default function Page() {
  return (
    <main className="ps">
      <header className="ps-nav">
        <a className="ps-brand" href="#top" aria-label="Podlahové studio Pardubice — domů">
          <span className="ps-brand-grain" aria-hidden="true" />
          <span className="ps-brand-text">
            <span className="ps-brand-line1">Podlahové studio</span>
            <span className="ps-brand-line2">Pardubice</span>
          </span>
        </a>
        <nav className="ps-links" aria-label="Hlavní navigace">
          <a href="#podlahy">Podlahy</a>
          <a href="#prodejna">Prodejna</a>
          <a href="tel:+420775608861" className="ps-call">
            Zavolat 775&nbsp;608&nbsp;861
          </a>
        </nav>
      </header>

      <section className="ps-hero" id="top">
        <div className="ps-hero-media">
          <img
            src="/hero.webp"
            alt="Detail pokládky dřevěné podlahy v podlahovém studiu Pardubice"
            width={1600}
            height={1000}
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="ps-hero-inner">
          <p className="ps-eyebrow">Jindřišská 785 · Pardubice 530&nbsp;02</p>
          <h1 className="ps-hero-title">
            Podlahu, kterou
            <br />
            <span className="ps-hero-accent">jsme sami pokládali.</span>
          </h1>
          <p className="ps-hero-lead">
            Jsme <strong>skuteční podlaháři</strong> s kamenným studiem, ne katalog. Každé prkno,
            které vám nabídneme, máme prošlapané z vlastní práce — a za jeho položení ručíme.
          </p>
          <div className="ps-hero-cta">
            <a href="tel:+420775608861" className="ps-btn ps-btn-primary">
              Zavolat 775&nbsp;608&nbsp;861
            </a>
            <a href="#prodejna" className="ps-btn ps-btn-ghost">
              Přijít do studia
            </a>
          </div>
        </div>
        <div className="ps-plank-scale" aria-hidden="true">
          <span /><span /><span /><span /><span />
        </div>
      </section>

      <section className="ps-section ps-services" id="podlahy">
        <div className="ps-section-head">
          <p className="ps-eyebrow ps-eyebrow-dark">Co u nás vyberete a co položíme</p>
          <h2 className="ps-section-title">
            Tři řemesla pod jednou lištou
          </h2>
          <p className="ps-section-note">
            Podlahy zpravidla neposíláme zásilkovou službou — z vlastní zkušenosti víme, že přepravci
            je nechají přes noc venku. Vezeme je k vám sami.
          </p>
        </div>

        <ol className="ps-cards">
          {services.map((s) => (
            <li className="ps-card" key={s.kod}>
              <div className="ps-card-kod">{s.kod}</div>
              <h3 className="ps-card-nazev">{s.nazev}</h3>
              <p className="ps-card-popis">{s.popis}</p>
              <p className="ps-card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="ps-figure">
          <img
            src="/section-1.webp"
            alt="Vzorky podlah a materiálů v prodejně podlahového studia"
            width={1400}
            height={900}
            loading="lazy"
            decoding="async"
          />
          <figcaption>Vzorník ve studiu — sáhnete si na materiál dřív, než se rozhodnete.</figcaption>
        </figure>
      </section>

      <section className="ps-section ps-about" id="prodejna">
        <div className="ps-about-grid">
          <div className="ps-about-copy">
            <p className="ps-eyebrow ps-eyebrow-dark">Proč zrovna my</p>
            <h2 className="ps-section-title">
              Osmnáct let v Pardubicích, ne v e-shopu
            </h2>
            <p className="ps-about-text">
              Máme kamenné podlahové studio na Jindřišské a tradici osmnácti let. Byli jsme první,
              kdo v Česku položil plovoucí podlahu — a od té doby jsme pokládku i servis dotáhli do
              detailu. Vybereme, dodáme a spočítáme veškeré komponenty k podlaze a podle plánku
              určíme praktickou spotřebu.
            </p>

            <dl className="ps-stats">
              {duvery.map((d) => (
                <div className="ps-stat" key={d.popis}>
                  <dt>
                    <span className="ps-stat-num">{d.cislo}</span>{" "}
                    <span className="ps-stat-unit">{d.jednotka}</span>
                  </dt>
                  <dd>{d.popis}</dd>
                </div>
              ))}
            </dl>

            <div className="ps-contact-card">
              <p className="ps-contact-line">
                <span>Volejte</span>
                <a href="tel:+420775608861">775 608 861</a>
              </p>
              <p className="ps-contact-line">
                <span>Mailujte</span>
                <a href="mailto:europefloors@seznam.cz">europefloors@seznam.cz</a>
              </p>
              <p className="ps-contact-line">
                <span>Navštivte</span>
                <a
                  href="https://mapy.cz/?q=Jindřišská+785+Pardubice"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jindřišská 785, Pardubice 530 02
                </a>
              </p>
            </div>
          </div>

          <figure className="ps-about-figure">
            <img
              src="/section-2.webp"
              alt="Podlahář při pokládce podlahy v pardubickém studiu"
              width={1000}
              height={1200}
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
