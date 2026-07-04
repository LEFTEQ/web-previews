import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NOSS – řeznictví a uzenářství Brno | poctivé maso z okolí",
  description:
    "Řeznictví NOSS na Haraštově v Brně. Bourané půlky, čerstvé maso, domácí uzeniny a jitrnice podle vlastní receptury. Přijďte k pultu, nebo si nechte připravit balíček na gril.",
  openGraph: {
    title: "NOSS – řeznictví a uzenářství Brno",
    description:
      "Poctivé maso a domácí uzeniny z brněnského řeznictví NOSS. U pultu vám poradíme s výběrem i s porcováním.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Řeznický pult NOSS v Brně" }],
  },
};

const pult = [
  {
    part: "Hovězí",
    desc: "Zadní i přední čtvrtě z okolních chovů. Naporcujeme na guláš, roštěnou, svíčkovou i na tatarák podle toho, na co máte chuť.",
    detail: "zrání až 21 dní",
  },
  {
    part: "Vepřové",
    desc: "Kotleta, krkovice, plec, panenka. Bouráme z celých půlek, takže víme, odkud každý kus je.",
    detail: "denně čerstvé",
  },
  {
    part: "Uzené a uzeniny",
    desc: "Domácí klobásy, špekáčky, tlačenka a jaternice z vlastní kuchyně. Udíme na bukovém dřevě, ne v páře.",
    detail: "vlastní receptura",
  },
  {
    part: "Na gril",
    desc: "Marinovaná krkovice, žebra, cigára i balíček pro celou partu. Řekněte, kolik vás bude, zbytek necháte na nás.",
    detail: "balíčky na objednávku",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#" aria-label="NOSS řeznictví, domů">
          <span className="wordmark__name">NOSS</span>
          <span className="wordmark__sub">řeznictví · Brno</span>
        </a>
        <nav className="nav__links" aria-label="Hlavní">
          <a href="#pult">U pultu</a>
          <a href="#dilna">Naše dílna</a>
          <a className="nav__cta" href="#pult">Otevírací doba</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Řeznický pult NOSS s čerstvým masem a domácími uzeninami"
            className="hero__img"
          />
          <div className="hero__grain" aria-hidden="true" />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Haraštova 401/18 · Brno-Židenice</p>
          <h1 id="hero-title" className="hero__title">
            Maso, které<br />
            poznáte<br />
            <em>podle chuti.</em>
          </h1>
          <p className="hero__lead">
            Bouráme celé půlky, udíme na dřevě a k pultu vám k tomu poradíme, jak
            to připravit doma. Žádné navážené tácky z regálu — jen řezník, nůž a
            poctivá porce.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#pult">Co je dnes na pultu</a>
            <a className="btn btn--ghost" href="tel:+420515000000">Zavolat řezníkovi</a>
          </div>
        </div>
      </section>

      <section id="pult" className="pult" aria-labelledby="pult-title">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Za sklem</p>
          <h2 id="pult-title" className="section-title">Co u nás najdete pod pultem</h2>
          <p className="section-intro">
            Nabídka se mění podle toho, co ráno přivezou. Tohle u nás bývá skoro
            vždycky — a když si chcete být jistí, stačí zavolat.
          </p>
        </div>

        <ul className="cuts">
          {pult.map((c) => (
            <li className="cut" key={c.part}>
              <div className="cut__top">
                <h3 className="cut__part">{c.part}</h3>
                <span className="cut__tag">{c.detail}</span>
              </div>
              <p className="cut__desc">{c.desc}</p>
            </li>
          ))}
        </ul>

        <figure className="pult__figure">
          <img
            src="/section-1.webp"
            alt="Detail bourání masa v řeznictví NOSS"
            className="pult__img"
          />
          <figcaption>Bouráme ráno, aby bylo maso na pultu čerstvé přes celý den.</figcaption>
        </figure>
      </section>

      <section id="dilna" className="dilna" aria-labelledby="dilna-title">
        <figure className="dilna__figure">
          <img
            src="/section-2.webp"
            alt="Domácí uzeniny z udírny řeznictví NOSS"
            className="dilna__img"
          />
        </figure>
        <div className="dilna__text">
          <p className="eyebrow eyebrow--dark">Naše dílna</p>
          <h2 id="dilna-title" className="section-title">
            Řeznictví, které v Brně stojí za jménem
          </h2>
          <p className="dilna__lead">
            NOSS je rodinné řeznictví na Haraštově. Přes den bouráme, večer udíme.
            Klobásy, tlačenku i jaternice děláme podle receptury, kterou u nás
            znají už léta — bez zbytečných náhražek.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt>Kde nás najdete</dt>
              <dd>Haraštova 401/18, 620 00 Brno</dd>
            </div>
            <div className="fact">
              <dt>Firma</dt>
              <dd>NOSS, s.r.o. · IČO 25314033</dd>
            </div>
            <div className="fact">
              <dt>Udíme</dt>
              <dd>na bukovém dřevě, ne v páře</dd>
            </div>
            <div className="fact">
              <dt>Objednávky na gril</dt>
              <dd>připravíme balíček podle počtu lidí</dd>
            </div>
          </dl>
          <a className="btn btn--solid" href="tel:+420515000000">Zavolat a objednat</a>
        </div>
      </section>
    </main>
  );
}
