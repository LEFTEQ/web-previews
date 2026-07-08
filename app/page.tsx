import type { CSSProperties } from "react";

export default function Page() {
  const brands = [
    "Trek",
    "Transition",
    "Cane Creek",
    "OneUp",
    "Chris King",
    "DT Swiss",
    "Renthal",
    "Fox",
    "Intend",
    "Bontrager",
  ];

  const sluzby = [
    {
      cislo: "01",
      nazev: "Cykloservis",
      popis:
        "Kompletní servis kol a odpružení. Vidlice, tlumiče, brzdy, řazení — postavíme kolo tak, jak ho jezdíme sami. Objednání na telefon 731 121 323.",
      detail: "Servis odpružení · Servis kol",
    },
    {
      cislo: "02",
      nazev: "Bike Fitting",
      popis:
        "Nastavíme posez přesně na vaše tělo a styl jízdy. Méně bolavých zad, víc výkonu a pohodlí na dlouhé kilometry.",
      detail: "Profesionální nastavení posezu",
    },
    {
      cislo: "03",
      nazev: "Testovací centrum",
      popis:
        "Vyzkoušejte kolo dřív, než ho koupíte. Projeďte se na tom, co vás láká — od gravelu po trailová enduro.",
      detail: "Testovací kola k dispozici",
    },
    {
      cislo: "04",
      nazev: "Polep ochrannou fólií",
      popis:
        "RideWrap fólie ochrání rám před odřením od kabelů, bot i kamínků. Nové kolo zůstane nové mnohem déle.",
      detail: "RideWrap",
    },
  ];

  const fakta = [
    { velke: "19", label: "let stavíme kola v Praze" },
    { velke: "48", label: "hodin — běžné dodání skladem" },
    { velke: "2", label: "dílny — prodej i servis pod jednou střechou" },
  ];

  return (
    <main className="kc">
      <header className="kc-top">
        <a className="kc-wordmark" href="#" aria-label="Krab Cycles, domovská stránka">
          <span className="kc-claw" aria-hidden="true">
            <svg viewBox="0 0 44 34" width="44" height="34" fill="none">
              <path
                d="M4 17c0-6 5-10 10-8M40 17c0-6-5-10-10-8M13 12c-3 3-3 8 0 11l7 6 2-2-6-5c-2-2-2-5 0-7zM31 12c3 3 3 8 0 11l-7 6-2-2 6-5c2-2 2-5 0-7z"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle cx="22" cy="18" r="3" fill="currentColor" />
            </svg>
          </span>
          <span className="kc-wordmark-text">
            Krab<span className="kc-wordmark-accent">Cycles</span>
          </span>
        </a>
        <nav className="kc-nav" aria-label="Hlavní">
          <a href="#sluzby">Servis</a>
          <a href="#o-nas">O nás</a>
          <a className="kc-phone" href="tel:+420777827399">
            777 827 399
          </a>
        </nav>
      </header>

      <section className="kc-hero" aria-labelledby="hero-nadpis">
        <div className="kc-hero-copy">
          <p className="kc-eyebrow">Bikeshop &amp; dílna · Praha</p>
          <h1 id="hero-nadpis">
            Značky, které
            <br />
            <span className="kc-outline">jezdíme</span> i&nbsp;prodáváme.
          </h1>
          <p className="kc-lead">
            Devatenáct let stavíme, servisujeme a testujeme kola v Praze. Trek,
            Transition, Cane Creek, OneUp, Chris King — komponenty, které si sami
            montujeme na vlastní stroje. Víme, o čem mluvíme.
          </p>
          <div className="kc-hero-cta">
            <a className="kc-btn" href="#sluzby">
              Objednat servis
            </a>
            <a className="kc-btn kc-btn-ghost" href="#o-nas">
              Přijít do prodejny
            </a>
          </div>
        </div>
        <figure className="kc-hero-media">
          <img
            src="/hero.webp"
            alt="Detail jízdního kola připraveného v dílně Krab Cycles"
            className="kc-hero-img"
          />
          <figcaption className="kc-hero-tag">
            <span className="kc-dot" aria-hidden="true" /> Skladem &amp;
            připraveno na test
          </figcaption>
        </figure>
      </section>

      <div className="kc-ticker" aria-hidden="true">
        <div className="kc-ticker-track">
          {[...brands, ...brands].map((b, i) => (
            <span key={i} className="kc-ticker-item">
              {b}
              <span className="kc-ticker-sep">✕</span>
            </span>
          ))}
        </div>
      </div>

      <section className="kc-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="kc-section-head">
          <p className="kc-eyebrow">Co pro vaše kolo uděláme</p>
          <h2 id="sluzby-nadpis">Naše dílny</h2>
        </div>
        <div className="kc-sluzby-grid">
          <div className="kc-sluzby-list">
            {sluzby.map((s) => (
              <article className="kc-sluzba" key={s.cislo}>
                <span className="kc-sluzba-cislo">{s.cislo}</span>
                <div className="kc-sluzba-text">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                  <p className="kc-sluzba-detail">{s.detail}</p>
                </div>
              </article>
            ))}
          </div>
          <figure className="kc-sluzby-media">
            <img
              src="/section-1.webp"
              alt="Mechanik při práci na kole v servisní dílně Krab Cycles"
            />
          </figure>
        </div>
      </section>

      <section className="kc-onas" id="o-nas" aria-labelledby="onas-nadpis">
        <div className="kc-onas-inner">
          <figure className="kc-onas-media">
            <img
              src="/section-2.webp"
              alt="Prodejna Krab Cycles s vystavenými koly"
            />
          </figure>
          <div className="kc-onas-copy">
            <p className="kc-eyebrow">O nás</p>
            <h2 id="onas-nadpis">
              Nejlepší bikeshop na západě
              <br />
              východní Evropy.
            </h2>
            <p className="kc-onas-lead">
              Když jsme si před devatenácti lety otevřeli bikeshop se servisem,
              věděli jsme přesně co, jak a proč děláme. Chtěli jsme „dělat kola“
              — a dělat je tak, aby nás to bavilo. Proto u nás najdete jen
              značky, které dávají smysl. Kola i komponenty, které sami
              prodáváme i jezdíme. Věřte, že víme, o čem je řeč.
            </p>

            <dl className="kc-fakta">
              {fakta.map((f) => (
                <div className="kc-fakt" key={f.label}>
                  <dt style={{ "--i": 0 } as CSSProperties}>{f.velke}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>

            <p className="kc-onas-kontakt">
              Prodejna a servis v Praze ·{" "}
              <a href="mailto:info@krabcycles.cz">info@krabcycles.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
