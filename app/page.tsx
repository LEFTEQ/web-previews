import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      idx: "01",
      title: "Klasická léčebná masáž",
      body: "Uvolní ztuhlá záda, šíji i ramena. Používá se ve zdravotnictví při potížích pohybového aparátu, v rekonvalescenci i po zátěži.",
      meta: "záda · šíje · ramena",
    },
    {
      idx: "02",
      title: "Rekondice a regenerace",
      body: "Pro tělo po sportu, dlouhém sezení nebo namáhavé práci. Vrátí svaly do klidu a rozproudí krev tam, kde to potřebujete.",
      meta: "po sportu · po práci",
    },
    {
      idx: "03",
      title: "Relaxační masáž",
      body: "Když si potřebujete jen vydechnout. Pomalé, vnímavé tempo a klidná čekárna, kde na vás nikdo nespěchá.",
      meta: "klid · uvolnění",
    },
    {
      idx: "04",
      title: "Masáže ve firmách",
      body: "Přijedeme za vámi na pracoviště. Krátká masáž šíje a zad mezi poradami dokáže víc než další káva.",
      meta: "po domluvě · u vás",
    },
  ];

  const trust = [
    "nevidomí a zrakově postižení maséři",
    "certifikovaní, s dlouholetou praxí",
    "vysoká kvalifikace a odbornost",
    "individuální přístup ke každému tělu",
    "vnímavé ruce a citlivější hmat",
    "vždy s úsměvem a dobrou náladou",
  ];

  return (
    <main className="page">
      {/* HERO */}
      <header className="hero" role="banner">
        <nav className="nav" aria-label="Hlavní navigace">
          <a className="wordmark" href="#top" aria-label="Nevidomí maséři Olomouc — domů">
            <span className="wordmark__dots" aria-hidden="true">
              <b></b><b></b><b></b>
              <b></b><b></b><b></b>
            </span>
            <span className="wordmark__text">
              Nevidomí&nbsp;maséři
              <em>Olomouc</em>
            </span>
          </a>
          <a className="nav__call" href="tel:+420608939646">
            608&nbsp;939&nbsp;646
          </a>
        </nav>

        <div className="hero__inner" id="top">
          <p className="hero__eyebrow">Masérna v Olomouci-Hodolanech</p>
          <h1 className="hero__title">
            <span className="line line--1">Masáž,</span>
            <span className="line line--2">kterou</span>
            <span className="line line--3">
              <span className="touch">nevidíte<span className="touch__cut" aria-hidden="true">,</span></span>
            </span>
            <span className="line line--4">jen&nbsp;cítíte.</span>
          </h1>
          <p className="hero__lead">
            Naši maséři nevidí — a proto jejich ruce vědí o vašich zádech
            víc než oči. Citlivější hmat najde ztuhlé místo dřív, než ho
            stačíte popsat.
          </p>
          <div className="hero__actions">
            <a className="btn" href="tel:+420608939646">Objednat masáž</a>
            <a className="btn btn--ghost" href="mailto:masaze@maseriolomouc.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <p className="hero__braille" aria-hidden="true">
          <span>⠍</span><span>⠁</span><span>⠎</span><span>⠰</span>
          <span>⠎</span><span>⠽</span>
        </p>
      </header>

      {/* SLUŽBY */}
      <section className="services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="section-head__eyebrow">Co u nás projdou vaše ruce</p>
          <h2 id="services-h" className="section-head__title">Masáže</h2>
        </div>

        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.idx}>
              <span className="card__idx" aria-hidden="true">{s.idx}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
              <p className="card__meta">{s.meta}</p>
            </li>
          ))}
        </ol>

        <figure className="figure">
          <img
            src="/section-1.webp"
            alt="Masér při klasické masáži zad v masérně v Olomouci"
            width={1200}
            height={800}
            loading="lazy"
          />
          <figcaption>
            Klasická masáž zad — tam, kde nejčastěji ztuhne celý den práce.
          </figcaption>
        </figure>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="about" aria-labelledby="about-h">
        <div className="about__grid">
          <div className="about__text">
            <p className="section-head__eyebrow">O nás</p>
            <h2 id="about-h" className="about__title">
              Ruce, které umí<br />naslouchat tělu
            </h2>
            <p className="about__lead">
              Zveme vás do masérny v Olomouci-Hodolanech. Specializujeme se
              na klasické léčebné masáže — na potíže pohybového aparátu,
              rekonvalescenci, rekondici i prostou relaxaci. V klidné
              čekárně se vám vždy někdo příjemný a ochotný osobně věnuje.
            </p>
            <p className="about__lead">
              Naši maséři jsou nevidomí a zrakově postižení. To, co druhým
              chybí v očích, mají navíc v dlaních — vnímavější hmat a
              soustředění jen na vás.
            </p>

            <ul className="quals">
              {trust.map((t) => (
                <li className="qual" key={t}>
                  <span className="qual__mark" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <figure className="about__figure">
            <img
              src="/section-2.webp"
              alt="Vnímavé ruce maséra při masáži šíje"
              width={900}
              height={1100}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="contact-strip">
          <div className="contact-strip__item">
            <span className="contact-strip__label">Kde nás najdete</span>
            <span className="contact-strip__value">Olomouc-Hodolany</span>
          </div>
          <div className="contact-strip__item">
            <span className="contact-strip__label">Objednávky</span>
            <a className="contact-strip__value" href="tel:+420608939646">
              608&nbsp;939&nbsp;646
            </a>
          </div>
          <div className="contact-strip__item">
            <span className="contact-strip__label">E-mail</span>
            <a className="contact-strip__value" href="mailto:masaze@maseriolomouc.cz">
              masaze@maseriolomouc.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
