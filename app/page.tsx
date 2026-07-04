import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Foto Orita — fotoateliér a fotolab, Hradec Králové",
  description:
    "Fotoateliér v Hradci Králové. Portréty a průkazové fotky na počkání, velkoplošný fototisk, renovace starých fotografií, fotoknihy, potisk triček a hrnků. Klasika i digitál.",
  openGraph: {
    title: "Foto Orita — fotoateliér a fotolab, Hradec Králové",
    description:
      "Portréty na počkání, velkoplošný fototisk, renovace starých snímků, fotoknihy a potisky. Foto Orita, Hradec Králové.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const sluzby = [
  {
    cislo: "01",
    nazev: "Ateliér a portréty",
    popis:
      "Portrétní i průkazové fotografie na počkání. Přijďte se vyfotit na doklady, pro rodinné album nebo do životopisu — hotové snímky si odnesete hned.",
    detaily: ["Průkazové foto na počkání", "Portréty a rodinné focení", "Digitální i klasické zpracování"],
  },
  {
    cislo: "02",
    nazev: "Velkoplošný fototisk",
    popis:
      "Fototisk až do velkých formátů s adjustací — na plátno, do rámu i na desku. Vyvoláme barevné i černobílé filmy a pomůžeme s výběrem formátu.",
    detaily: ["Fototisk + adjustace", "Vyvolání barevných i ČB filmů", "Kopírování a tisk dokumentů"],
  },
  {
    cislo: "03",
    nazev: "Renovace a digitalizace",
    popis:
      "Vrátíme život starým fotografiím — retušujeme trhliny a skvrny. Naskenujeme snímky, převedeme filmy a video na DVD, uložíme data.",
    detaily: ["Renovace starých fotografií", "Skenování a ukládání dat", "Převod filmů a videa na DVD"],
  },
  {
    cislo: "04",
    nazev: "Fotoknihy a potisky",
    popis:
      "Fotoknihy na pravý fotopapír, kalendáře, vazby a laminace. Potiskneme trička, hrnky i další předměty a vyrobíme puzzle až do 78×102 cm.",
    detaily: ["Fotoknihy na fotopapír", "Potisk triček a hrnků", "Puzzle až 78×102 cm"],
  },
];

export default function Page() {
  return (
    <main className="fo-page">
      <header className="fo-topbar">
        <a className="fo-wordmark" href="#" aria-label="Foto Orita, úvod">
          <span className="fo-wordmark__mark" aria-hidden="true">
            <span className="fo-wordmark__aperture" />
          </span>
          <span className="fo-wordmark__text">
            <span className="fo-wordmark__foto">Foto</span>
            <span className="fo-wordmark__orita">Orita</span>
          </span>
        </a>
        <p className="fo-topbar__place">fotoateliér · Hradec Králové</p>
      </header>

      <section className="fo-hero" aria-labelledby="fo-hero-title">
        <div className="fo-hero__frame">
          <img
            className="fo-hero__img"
            src="/hero.webp"
            alt="Interiér fotoateliéru Foto Orita v Hradci Králové s portrétním osvětlením"
            width={1600}
            height={1000}
          />
          <div className="fo-hero__corner fo-hero__corner--tl" aria-hidden="true" />
          <div className="fo-hero__corner fo-hero__corner--tr" aria-hidden="true" />
          <div className="fo-hero__corner fo-hero__corner--bl" aria-hidden="true" />
          <div className="fo-hero__corner fo-hero__corner--br" aria-hidden="true" />
        </div>

        <div className="fo-hero__copy">
          <p className="fo-hero__eyebrow">Od filmu k fotoknize · Hradec Králové</p>
          <h1 id="fo-hero-title" className="fo-hero__title">
            Vaše vzpomínky <em>vyvoláme</em>, vytiskneme a&nbsp;zarámujeme.
          </h1>
          <p className="fo-hero__lead">
            Průkazové a portrétní fotky na počkání, velkoplošný fototisk,
            renovace starých snímků i fotoknihy. Klasický film i digitál pod
            jednou střechou.
          </p>
          <div className="fo-hero__actions">
            <a className="fo-btn fo-btn--primary" href="mailto:info@fotoorita.cz">
              Napsat nám
            </a>
            <a className="fo-btn fo-btn--ghost" href="#sluzby">
              Co u nás pořídíte
            </a>
          </div>
          <dl className="fo-hero__specs">
            <div>
              <dt>Na počkání</dt>
              <dd>průkazové foto</dd>
            </div>
            <div>
              <dt>Až 78×102 cm</dt>
              <dd>puzzle a tisk</dd>
            </div>
            <div>
              <dt>Film → DVD</dt>
              <dd>digitalizace</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="fo-services" id="sluzby" aria-labelledby="fo-services-title">
        <div className="fo-section__head">
          <p className="fo-eyebrow">Nabídka ateliéru</p>
          <h2 id="fo-services-title" className="fo-section__title">
            Čtyři kroky, kterými projde vaše fotka
          </h2>
          <p className="fo-section__intro">
            Od snímku po hotový výtisk. Vyberte si, s čím vám máme pomoct —
            většinu domluvíme na místě, na Foto Orita v centru Hradce.
          </p>
        </div>

        <ol className="fo-cards">
          {sluzby.map((s) => (
            <li className="fo-card" key={s.cislo}>
              <span className="fo-card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="fo-card__title">{s.nazev}</h3>
              <p className="fo-card__text">{s.popis}</p>
              <ul className="fo-card__list">
                {s.detaily.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="fo-services__figure">
          <img
            src="/section-1.webp"
            alt="Ukázka fototisku a adjustovaných fotografií z Foto Orita"
            width={1600}
            height={900}
          />
          <figcaption>Velkoplošný fototisk s adjustací — z filmu i z digitálu.</figcaption>
        </figure>
      </section>

      <section className="fo-about" id="o-nas" aria-labelledby="fo-about-title">
        <div className="fo-about__media">
          <img
            src="/section-2.webp"
            alt="Zázemí fotolabu Foto Orita s minilabem a vybavením pro vyvolávání"
            width={1400}
            height={1000}
          />
        </div>
        <div className="fo-about__copy">
          <p className="fo-eyebrow">Kdo za tím stojí</p>
          <h2 id="fo-about-title" className="fo-about__title">
            Fotolab, který rozumí filmu i&nbsp;pixelu
          </h2>
          <p className="fo-about__text">
            Foto Orita je rodinný fotoateliér a fotolab v Hradci Králové.
            Vyvoláváme klasické filmy, tiskneme z digitálu a staráme se o vlastní
            minilaby — proto známe každý krok od negativu po hotový snímek.
          </p>
          <p className="fo-about__text">
            Kromě focení pro zákazníky provádíme i servis digitálních minilabů
            DKS a dodáváme lepidla a náhradní díly dalším laborantům po celém
            regionu.
          </p>
          <ul className="fo-about__points">
            <li>
              <span className="fo-about__k">Klasika i digitál</span>
              <span className="fo-about__v">vyvolání filmů i tisk ze souborů</span>
            </li>
            <li>
              <span className="fo-about__k">Vlastní minilab</span>
              <span className="fo-about__v">servis a díly DKS pro další laby</span>
            </li>
            <li>
              <span className="fo-about__k">Hradec Králové</span>
              <span className="fo-about__v">vyzvednutí a poradenství na místě</span>
            </li>
          </ul>
          <a className="fo-btn fo-btn--primary" href="mailto:info@fotoorita.cz">
            info@fotoorita.cz
          </a>
        </div>
      </section>
    </main>
  );
}
