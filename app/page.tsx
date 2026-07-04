import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "David Albrecht — Parkety Brno | Pokládka a renovace dřevěných podlah",
  description:
    "Pokládám a renovuji dřevěné parkety v Brně a okolí. Vlysy, prkna i mozaika, broušení bez prachu, olej i lak. Přes 20 let řemesla. Ozvěte se: 602 565 930.",
  openGraph: {
    title: "David Albrecht — Parkety Brno",
    description:
      "Pokládka a renovace dřevěných parket v Brně. Broušení bez prachu, olejování, lakování. Řemeslo, které přežije generace.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

export default function Page() {
  return (
    <main className="grain">
      {/* HERO — the wood itself is the thesis */}
      <header className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Detail čerstvě položených dubových vlysů s viditelnou kresbou dřeva"
            width={1600}
            height={1100}
          />
          <span className="hero__caption">Dub, kladeno do rybí kosti — Brno-střed</span>
        </div>

        <div className="hero__text">
          <div className="wordmark" aria-label="David Albrecht, parkety">
            <span className="wordmark__name">Albrecht</span>
            <span className="wordmark__grain" aria-hidden="true">
              <i /><i /><i /><i /><i />
            </span>
            <span className="wordmark__trade">parkety · Brno</span>
          </div>

          <h1 className="hero__title">
            Podlaha se pozná<br />
            <em>za deset let.</em>
          </h1>

          <p className="hero__lead">
            Kladu a renovuji dřevěné parkety tak, aby se neošoupaly za sezónu.
            Dub, jasan, buk — z fošny až po naolejovaný povrch, na kterém
            se dá bosky stát.
          </p>

          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420602565930">
              Zavolat 602&nbsp;565&nbsp;930
            </a>
            <a className="btn btn--ghost" href="mailto:albrecht.david@volny.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>
      </header>

      {/* SECTION 1 — the work, as a grain map */}
      <section className="work" aria-labelledby="work-h">
        <div className="section-head">
          <span className="eyebrow">Od holé podlahy k hotovému povrchu</span>
          <h2 id="work-h">Co u vás doma udělám</h2>
        </div>

        <div className="work__grid">
          <article className="card">
            <span className="card__ring" aria-hidden="true">01</span>
            <h3>Pokládka nových parket</h3>
            <p>
              Vlysy, prkna i mozaika — lepené na podklad nebo plovoucí.
              Vyberu vzor (rybí kost, paluba, francouzský vzor) k prostoru,
              ne z katalogu. Připravím podklad, aby podlaha nepracovala.
            </p>
          </article>

          <article className="card">
            <span className="card__ring" aria-hidden="true">02</span>
            <h3>Renovace a přebroušení</h3>
            <p>
              Staré parkety po babičce nezahazujte. Přebrousím bez prachu,
              vyspravím vypadlé vlysy, doplním chybějící kusy stejným dřevem.
              Z ošlapané podlahy je zase nová.
            </p>
          </article>

          <article className="card">
            <span className="card__ring" aria-hidden="true">03</span>
            <h3>Olej, vosk nebo lak</h3>
            <p>
              Povrch podle toho, jak žijete. Tvrdý olej pro rodiny se psem
              a dětmi, mat lak do bytu, vosk tam, kde má dřevo dýchat.
              Poradím, čím se bude nejlíp žít.
            </p>
          </article>
        </div>

        <figure className="work__figure">
          <img
            src="/section-1.webp"
            alt="Broušení dřevěné podlahy — přechod mezi zašlým a čerstvě obnaženým dřevem"
            width={1400}
            height={900}
          />
          <figcaption>
            Rozhraní mezi ošlapaným a přebroušeným dubem. Pravá strana čeká na olej.
          </figcaption>
        </figure>
      </section>

      {/* SECTION 2 — trust, spoken plainly */}
      <section className="about" aria-labelledby="about-h">
        <div className="about__media">
          <img
            src="/section-2.webp"
            alt="David Albrecht při ruční pokládce parketových vlysů"
            width={1200}
            height={1400}
          />
        </div>

        <div className="about__body">
          <span className="eyebrow">O řemesle</span>
          <h2 id="about-h">Jeden člověk, jedna odpovědnost</h2>
          <p>
            Jmenuju se David Albrecht a parketám se věnuju přes dvacet let.
            Ke každé zakázce chodím sám — žádná parta, která se u vás vystřídá.
            Co domluvíme, to udělám, a stojím si za tím i po letech.
          </p>

          <dl className="facts">
            <div>
              <dt>Kde pracuju</dt>
              <dd>Brno a okolí do 40 km — byty, vily i rekonstrukce činžáků</dd>
            </div>
            <div>
              <dt>Materiál</dt>
              <dd>Masivní dřevo i vícevrstvé parkety od českých dodavatelů</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>Prach z broušení odsávám — nábytek i vzduch zůstanou čisté</dd>
            </div>
          </dl>

          <p className="about__note">
            Přijedu se podívat, změřím a spočítám cenu předem. Prohlídka je zdarma.
          </p>

          <div className="about__contact">
            <a className="btn btn--solid" href="tel:+420602565930">
              602&nbsp;565&nbsp;930
            </a>
            <span className="about__ic">IČ 42587255 · DIČ CZ7302043958</span>
          </div>
        </div>
      </section>
    </main>
  );
}
