import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      <header className="masthead">
        <a className="wordmark" href="#top" aria-label="Dřevostavby Kučera — domů">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="ring ring--a" />
            <span className="ring ring--b" />
            <span className="ring ring--c" />
          </span>
          <span className="wordmark__text">
            <span className="wordmark__name">Dřevostavby&nbsp;Kučera</span>
            <span className="wordmark__place">České Budějovice</span>
          </span>
        </a>
        <a className="masthead__call" href="tel:+420602353454">
          <span aria-hidden="true">☎</span> 602&nbsp;353&nbsp;454
        </a>
      </header>

      <section className="hero" id="top">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Difuzně otevřená dřevostavba Kučera zasazená do jihočeské krajiny"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="hero__eyebrow">Difuzně otevřené dřevostavby na klíč — Diffuwall® / ISOCELL</p>
          <h1 className="hero__title">
            <span className="hero__line">Domy, které</span>
            <span className="hero__line hero__line--accent">dýchají.</span>
          </h1>
          <p className="hero__lead">
            Stavíme jen ze dřeva a celulózy — žádný polystyren. Stěna, která
            řízeně pouští teplo i vlhkost ven, drží zdravé mikroklima uvnitř
            a šetří na topení. Postaveno v jižních Čechách, od Šumavy po Lipno.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420602353454">Zavolat Kučerovým</a>
            <a className="btn btn--ghost" href="#domy">Prohlédnout, co jsme postavili</a>
          </div>
        </div>

        <ul className="hero__wall" aria-label="Skladba difuzně otevřené stěny">
          <li><span className="hero__wallNo">01</span> Dřevěná nosná konstrukce</li>
          <li><span className="hero__wallNo">02</span> Foukaná celulóza jako izolace</li>
          <li><span className="hero__wallNo">03</span> Difuzně otevřená obálka — žádný polystyren</li>
        </ul>
      </section>

      <section className="domy" id="domy" aria-labelledby="domy-title">
        <div className="section__head">
          <p className="eyebrow">Postavili jsme</p>
          <h2 id="domy-title" className="section__title">
            Osm domů, osm pozemků, jeden respekt k místu
          </h2>
          <p className="section__note">
            Každý dům reaguje na tvar parcely, výhled a orientaci ke slunci.
            Vyberte si prostředí, ne katalogový typ.
          </p>
        </div>

        <div className="domy__grid">
          <article className="domCard domCard--wide">
            <img
              src="/section-1.webp"
              alt="Realizovaná dřevostavba Kučera s výhledem do jihočeské krajiny"
              className="domCard__img"
            />
            <div className="domCard__body">
              <p className="domCard__place">Borová Lada</p>
              <p className="domCard__desc">Žití v srdci Šumavy</p>
            </div>
          </article>

          {domy.map((d, i) => (
            <article className="domCard" key={d.place} style={{ "--i": i } as CSSProperties}>
              <div className="domCard__body">
                <p className="domCard__place">{d.place}</p>
                <p className="domCard__desc">{d.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="jistoty" id="jistoty" aria-labelledby="jistoty-title">
        <div className="jistoty__media">
          <img
            src="/section-2.webp"
            alt="Detail dřevěné konstrukce dřevostavby při realizaci"
            className="jistoty__img"
          />
        </div>

        <div className="jistoty__content">
          <div className="section__head">
            <p className="eyebrow">Proč Kučerovi</p>
            <h2 id="jistoty-title" className="section__title">
              Cenu i termín dáme na papír. Zbytek si bereme na triko.
            </h2>
          </div>

          <dl className="jistoty__list">
            {jistoty.map((j) => (
              <div className="jistoty__row" key={j.term}>
                <dt>
                  <span className="jistoty__num">{j.num}</span>
                  {j.term}
                </dt>
                <dd>{j.text}</dd>
              </div>
            ))}
          </dl>

          <figure className="founders">
            <blockquote>
              „Věříme, že slušnost a kvalitní práce dělá svět lepším místem
              k životu. Chceme moderní firmu, která dělá skvělé řemeslo a je
              spolehlivým partnerem.“
            </blockquote>
            <figcaption>Lukáš a Kamil Kučerovi</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

const domy = [
  { place: "Habří", desc: "Respekt k tvaru pozemku" },
  { place: "Vrané nad Vltavou", desc: "V přírodě u Prahy" },
  { place: "Křemže", desc: "V údolí pod Kletí" },
  { place: "Hůrka", desc: "S výhledem na Lipno" },
  { place: "Planá nad Lužnicí", desc: "V symbióze se zahradou" },
  { place: "Lipanovice", desc: "Prostor a naprosté soukromí" },
  { place: "Staňkov", desc: "Na samotě u lesa" },
];

const jistoty = [
  {
    num: "25 let",
    term: "Záruka na konstrukci",
    text: "Na konstrukční systém dřevostavby dáváme 25 let, na provedené práce 5 let. Materiály podle záruk jejich výrobců.",
  },
  {
    num: "9 měs.",
    term: "Od základů po klíč",
    text: "Hrubá stavba za 2 měsíce, kompletní dům na klíč do 9 měsíců. Technologie dřevostavby a zkušený tým — čas jsou peníze.",
  },
  {
    num: "0 Kč",
    term: "Skryté náklady navíc",
    text: "Cena ve smlouvě platí. Rozpočty jsou podrobné a případné výkyvy cen materiálu během stavby bereme na sebe.",
  },
  {
    num: "30 mil.",
    term: "Nadstandardní pojištění",
    text: "Stavební a montážní pojištění kryje celou stavbu i materiál a řemeslníky, které si dodáte sami — až do předání.",
  },
  {
    num: "Test",
    term: "Blower-door automaticky",
    text: "Vzduchotěsnost obálky měří certifikovaná firma ještě během stavby, kdy jde netěsnosti opravit. Máte to černé na bílém.",
  },
];
