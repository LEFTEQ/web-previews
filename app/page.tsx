import type { CSSProperties } from "react";

export default function Page() {
  const professions = [
    { code: "01", name: "Zedníci", note: "Nosné konstrukce, příčky, dozdívky a začišťování po bourání." },
    { code: "02", name: "Elektrikáři", note: "Odpojení a přepojení rozvodů dřív, než se sáhne na zeď." },
    { code: "03", name: "Instalatéři", note: "Voda, odpady a topení — bezpečně odstaveno a nové zapojeno." },
    { code: "04", name: "Tesaři", note: "Krovy, bednění a dřevěné konstrukce ke snesení i nové." },
    { code: "05", name: "Fasádníci", note: "Sundání staré fasády i finální zateplení a povrch." },
  ];

  const steps = [
    {
      phase: "Před bouráním",
      title: "Prohlídka a statika na místě",
      body: "Přijedeme do Brna a okolí, změříme, prověříme nosné prvky a rozvody. Řekneme rovnou, co jde dolů a co musí zůstat stát.",
    },
    {
      phase: "Demolice",
      title: "Řízené bourání bez prachu všude",
      body: "Vlastní stroje, odsávání a plachtování. Bouráme po částech, aby se dům držel, a suť rovnou třídíme na odvoz.",
    },
    {
      phase: "Po bourání",
      title: "Odvoz suti a čistá předávka",
      body: "Kontejnery, recyklace a zameteno. Předáme prostor připravený pro další profese — nebo rovnou stavíme dál sami.",
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#top" aria-label="SBP holding, bourací práce Brno">
          <span className="wordmark__sbp">SBP</span>
          <span className="wordmark__sub">holding · bourací práce</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#profese">Profese pod jednou střechou</a>
          <a href="#postup">Jak bouráme</a>
          <a href="#kontakt" className="topnav__call">602 519 915</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Řízená demolice zděné stavby technikou SBP holding v Brně"
            className="hero__img"
            width={1600}
            height={1000}
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Brno · Geislerova 280/3 · od roku 2017</p>
          <h1 className="hero__title">
            Nejdřív musí něco
            <span className="hero__strike">spadnout</span>
            <span className="hero__then">, než postavíme lepší.</span>
          </h1>
          <p className="hero__lede">
            Bourací práce od statické prohlídky přes řízenou demolici až po odvoz suti. Vlastní stroje,
            vlastní parta — žádné čekání na subdodavatele.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#kontakt">Poptat bourání</a>
            <a className="btn btn--ghost" href="#postup">Jak to probíhá</a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>Vlastní</dt>
              <dd>technika i parta</dd>
            </div>
            <div>
              <dt>5 profesí</dt>
              <dd>pod jednou střechou</dd>
            </div>
            <div>
              <dt>Brno</dt>
              <dd>a okolí</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="profese" id="profese">
        <div className="section-head">
          <p className="eyebrow">Co bouráme a čím</p>
          <h2 className="section-title">
            Všechny klíčové profese máme doma —<br />
            proto se stavba po bourání nezasekne.
          </h2>
          <p className="section-note">
            Než přijde bagr, musí se dům odpojit a zbavit rozvodů. To u nás dělají naši lidé, ne cizí
            firma na telefonu. Díky tomu bouráme rychle a bezpečně a hned navazujeme dál.
          </p>
        </div>

        <ul className="prof-grid">
          {professions.map((p) => (
            <li className="prof-card" key={p.code}>
              <span className="prof-card__code" aria-hidden="true">{p.code}</span>
              <h3 className="prof-card__name">{p.name}</h3>
              <p className="prof-card__note">{p.note}</p>
            </li>
          ))}
          <li className="prof-card prof-card--wide">
            <img
              src="/section-1.webp"
              alt="Technické zázemí a stroje SBP holding připravené na bourací práce"
              className="prof-card__img"
              width={900}
              height={600}
            />
          </li>
        </ul>
      </section>

      <section className="postup" id="postup">
        <div className="postup__media">
          <img
            src="/section-2.webp"
            alt="Odvoz a třídění stavební suti po demolici v Brně"
            className="postup__img"
            width={1000}
            height={1200}
          />
        </div>

        <div className="postup__body">
          <p className="eyebrow">Jak bouráme</p>
          <h2 className="section-title">Od prohlídky po zametenou plochu ve třech krocích.</h2>

          <ol className="steps">
            {steps.map((s, i) => (
              <li className="step" key={s.title} style={{ "--i": i } as CSSProperties}>
                <span className="step__phase">{s.phase}</span>
                <h3 className="step__title">{s.title}</h3>
                <p className="step__body">{s.body}</p>
              </li>
            ))}
          </ol>

          <div className="contact-card" id="kontakt">
            <p className="contact-card__lead">Máte co bourat? Ozvěte se, přijedeme se podívat.</p>
            <div className="contact-card__rows">
              <a href="tel:+420602519915">+420 602 519 915</a>
              <a href="mailto:info@sbp-stavby.cz">info@sbp-stavby.cz</a>
              <span>Geislerova 280/3, 615 00 Brno</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
