import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — the mould, the cast, the profile of a cornice */}
      <header className="hero">
        <div className="hero__frame">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Detail ručně taženého sádrového fabionu a štukové římsy v pražském interiéru"
          />
          <div className="hero__grain" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="eyebrow">Umělecké štukatérství &middot; Praha &middot; od 1997</p>
          <h1 className="wordmark">
            <span className="wordmark__line">Sýkora</span>
            <span className="wordmark__sub">Štukatérství</span>
          </h1>
          <p className="hero__lead">
            Táhneme římsy z čerstvé sádry, odléváme rozety podle původních
            forem a vracíme pražským fasádám jejich profily. „Ze sádry se dá
            zhotovit téměř cokoliv“ — a my to už přes pětadvacet let děláme.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420777055070">
              Zavolat 777&nbsp;055&nbsp;070
            </a>
            <a className="btn btn--ghost" href="mailto:info@stukaterstvisykora.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* profile section — the signature: a cornice drawn as a running profile */}
        <svg className="cornice" viewBox="0 0 1200 60" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,60 L0,42 Q40,42 40,30 Q40,18 80,18 L120,18 Q140,18 140,8 Q140,0 170,0 L1030,0 Q1060,0 1060,8 Q1060,18 1080,18 L1120,18 Q1160,18 1160,30 Q1160,42 1200,42 L1200,60 Z"
            fill="currentColor"
          />
        </svg>
      </header>

      {/* SECTION 1 — the repertoire, named by the plasterer's own vernacular */}
      <section className="work" aria-labelledby="work-title">
        <div className="work__intro">
          <p className="eyebrow eyebrow--dark">Co táhneme, lijeme a renovujeme</p>
          <h2 id="work-title" className="section-title">
            Řemeslo v sádře, od drobného ornamentu po celou fasádu
          </h2>
          <p className="section-lead">
            Každý kus začíná u profilu a formy. Renovujeme původní štuky,
            navrhujeme nové a odléváme kopie tam, kde už originál chybí.
          </p>
        </div>

        <div className="work__grid">
          <dl className="repertoire">
            <div className="repertoire__row">
              <dt className="repertoire__term">Interiér</dt>
              <dd className="repertoire__desc">
                Fabiony, římsy, rozety pod lustr, stropní sufity a štuková
                svítidla. Nové návrhy i věrné doplnění chybějících částí.
              </dd>
            </div>
            <div className="repertoire__row">
              <dt className="repertoire__term">Fasády</dt>
              <dd className="repertoire__desc">
                Oprava a výzdoba fasádních prvků, celková rekonstrukce
                historických objektů a sgrafita.
              </dd>
            </div>
            <div className="repertoire__row">
              <dt className="repertoire__term">Sochařství</dt>
              <dd className="repertoire__desc">
                Sloupy, sádrové dekorace a kopie soch — včetně figur podle
                Matyáše Brauna z Alegorie Ctností a Neřestí.
              </dd>
            </div>
            <div className="repertoire__row">
              <dt className="repertoire__term">Zahrada</dt>
              <dd className="repertoire__desc">
                Zahradní vázy a kopie soch z umělého pískovce pro exteriér.
              </dd>
            </div>
          </dl>

          <figure className="work__figure">
            <img
              className="work__img"
              src="/section-1.webp"
              alt="Ruční tažení štukové římsy šablonou v čerstvé sádře"
            />
            <figcaption className="work__caption">
              Profil taháme šablonou přímo na místě — jako se to dělalo vždycky.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SECTION 2 — trust: dílna, praxe, kde nás najdete */}
      <section className="about" aria-labelledby="about-title">
        <figure className="about__figure">
          <img
            className="about__img"
            src="/section-2.webp"
            alt="Sádrové odlitky a formy připravené v dílně štukatérství Sýkora"
          />
        </figure>

        <div className="about__panel">
          <p className="eyebrow">O dílně</p>
          <h2 id="about-title" className="section-title section-title--light">
            Praha, čtvrt století u sádry
          </h2>
          <p className="about__text">
            Dílnu jsme založili v roce 1997. Začínali jsme u drobných
            interiérových úprav a fasádních prvků, dnes zvládneme celou
            rekonstrukci historického objektu i sgrafito. Štukatéři, kteří
            pro nás pracují, mají dlouholetou praxi v oboru umělecký štukatér.
          </p>

          <ul className="facts">
            <li className="facts__item">
              <span className="facts__mark">1997</span>
              <span className="facts__label">Rok založení dílny</span>
            </li>
            <li className="facts__item">
              <span className="facts__mark">Praha</span>
              <span className="facts__label">Domovské město a okolí</span>
            </li>
            <li className="facts__item">
              <span className="facts__mark">Šanghaj</span>
              <span className="facts__label">Kopie Braunových soch v zahraničí</span>
            </li>
          </ul>

          <p className="about__note">
            Naši práci vidíte hlavně v Praze a okolí — ale i v Šanghaji, kam
            jsme dodali několik kopií soch z kukského souboru.
          </p>

          <a className="btn btn--solid" href="tel:+420777055070">
            Domluvit prohlídku &middot; 777&nbsp;055&nbsp;070
          </a>
        </div>
      </section>
    </main>
  );
}
