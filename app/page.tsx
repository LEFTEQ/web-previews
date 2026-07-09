import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "Ø 130–200",
      nazev: "Nerezové vložkování",
      popis:
        "Vytáhneme starým komínem nerezovou vložku z jednoho kusu, těsnou a odolnou proti kondenzátu. Řeší dehtující dřevo i moderní kondenzační kotle.",
    },
    {
      kod: "LIAPOR",
      nazev: "Stavba nového komína",
      popis:
        "Kompletní komínové systémy do novostaveb i přístaveb. Lehký keramický Liapor, izolace, přesná dilatace — postavíme od základu po nadstřešní část.",
    },
    {
      kod: "TAH",
      nazev: "Ventilátory a regulátory",
      popis:
        "Spalinové ventilátory a tahové regulátory tam, kde komín nekouří, jak má. Doměříme tah a doladíme, aby kamna hřála a netáhla kouř do místnosti.",
    },
    {
      kod: "KRB",
      nazev: "Krbová kamna a vložky",
      popis:
        "Vybereme, dovezeme a napojíme krbová kamna i vložky. Poradíme s výkonem podle místnosti a s revizí ke kolaudaci.",
    },
  ];

  return (
    <main className="page">
      <header className="nav" aria-label="Hlavní">
        <a className="brand" href="#top" aria-label="Komitech — domů">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-flue" />
          </span>
          <span className="brand-word">
            Komi<span className="brand-word-strong">tech</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Sekce">
          <a href="#sluzby">Co děláme</a>
          <a href="#o-nas">O firmě</a>
        </nav>
        <a className="nav-call" href="tel:+420777995551">
          <span className="nav-call-label">Zavolat</span>
          <span className="nav-call-num">777 995 551</span>
        </a>
      </header>

      <section id="top" className="hero">
        <div className="hero-figure">
          <img
            src="/hero.webp"
            alt="Nadstřešní část komína s nerezovou vložkou nad krajinou Vysočiny"
            className="hero-img"
          />
          <span className="hero-scale" aria-hidden="true">
            <span className="hero-scale-tick" />
            <span className="hero-scale-tick" />
            <span className="hero-scale-tick" />
            <span className="hero-scale-tick" />
          </span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Komíny a vložkování · Pacov, Vysočina
          </p>
          <h1 className="hero-title">
            Vedeme kouř
            <br />
            <span className="hero-title-em">celou cestou</span>
            <br />
            ven nad střechu.
          </h1>
          <p className="hero-lead">
            Nerezové vložky z jednoho kusu, nové komíny z Liaporu a spalinové
            ventilátory. Od průduchu ke krbu vidíme přesně, kudy tah stoupá — a
            postaráme se, aby stoupal.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777995551">
              Zavolat na 777 995 551
            </a>
            <a className="btn btn-ghost" href="mailto:info@komitech.cz">
              Napsat na info@komitech.cz
            </a>
          </div>

          <dl className="hero-facts">
            <div className="hero-fact">
              <dt>Vložka z</dt>
              <dd>1 kusu</dd>
            </div>
            <div className="hero-fact">
              <dt>Materiál</dt>
              <dd>Nerez</dd>
            </div>
            <div className="hero-fact">
              <dt>Sídlo</dt>
              <dd>Pacov</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="section services">
        <div className="section-head">
          <p className="section-eyebrow">Řez komínem</p>
          <h2 className="section-title">
            Čtyři vrstvy jedné práce — od průduchu po nadstřešek
          </h2>
          <p className="section-intro">
            Komín čteme odspodu nahoru. Každá služba odpovídá jedné části té
            cesty, kterou kouř urazí.
          </p>
        </div>

        <ol className="stack">
          {sluzby.map((s, i) => (
            <li
              className="stack-row"
              key={s.nazev}
              style={{ "--i": String(i) } as CSSProperties}
            >
              <span className="stack-kod">{s.kod}</span>
              <div className="stack-text">
                <h3 className="stack-nazev">{s.nazev}</h3>
                <p className="stack-popis">{s.popis}</p>
              </div>
              <span className="stack-line" aria-hidden="true" />
            </li>
          ))}
        </ol>

        <figure className="services-photo">
          <img
            src="/section-1.webp"
            alt="Detail nerezové komínové vložky připravené k zatažení do komínu"
          />
          <figcaption>
            Nerezová vložka na míru průduchu — svařená, těsná, bez spár uvnitř
            zdiva.
          </figcaption>
        </figure>
      </section>

      <section id="o-nas" className="section about">
        <figure className="about-photo">
          <img
            src="/section-2.webp"
            alt="Technik Komitechu při montáži komínového systému"
          />
        </figure>

        <div className="about-body">
          <p className="section-eyebrow section-eyebrow--light">Na Blatech, Pacov</p>
          <h2 className="section-title section-title--light">
            Malá firma, u které víte, kdo vám komín stavěl
          </h2>
          <p className="about-lead">
            Komitech děláme kolem komínů dlouho a rádi — z Pacova vyjíždíme po
            celé Vysočině. Přijedeme se podívat, doměříme tah a řekneme rovnou,
            jestli stačí vložka, nebo je čas na nový komín. Bez řečí okolo.
          </p>

          <ul className="about-points">
            <li>
              <strong>Přijedeme a doměříme na místě.</strong> Než něco slíbíme,
              zkontrolujeme průduch a tah u vás doma.
            </li>
            <li>
              <strong>Revize a podklady ke kolaudaci.</strong> Papíry k novému
              komínu i kamnům vyřídíme za vás.
            </li>
            <li>
              <strong>Krby i keramické grily Big Green Egg.</strong> Zajdete si
              je k nám v Pacově prohlédnout a vyzkoušet.
            </li>
          </ul>

          <div className="about-contact">
            <a className="about-contact-item" href="tel:+420565442231">
              <span className="about-contact-key">Pevná</span>
              <span className="about-contact-val">565 442 231</span>
            </a>
            <a className="about-contact-item" href="tel:+420777995551">
              <span className="about-contact-key">Mobil</span>
              <span className="about-contact-val">777 995 551</span>
            </a>
            <a className="about-contact-item" href="mailto:info@komitech.cz">
              <span className="about-contact-key">E-mail</span>
              <span className="about-contact-val">info@komitech.cz</span>
            </a>
            <p className="about-contact-item about-contact-item--static">
              <span className="about-contact-key">Dílna</span>
              <span className="about-contact-val">Na Blatech 825, Pacov</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
