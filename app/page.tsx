import type { CSSProperties } from "react";

export default function Page() {
  const routes: { city: string; km: string; note: string }[] = [
    { city: "Liberec → Praha", km: "110 km", note: "denně, ranní i odpolední svozy" },
    { city: "Liberec → Drážďany", km: "140 km", note: "přes Frýdlantský výběžek, EU doklady" },
    { city: "Liberec → Brno", km: "280 km", note: "celorepublikové rozvozy" },
    { city: "Liberec → Vídeň", km: "420 km", note: "pravidelná linka do Rakouska" },
  ];

  const services: { n: string; title: string; body: string }[] = [
    {
      n: "01",
      title: "Vnitrostátní kamionová doprava",
      body: "Návěsy a soupravy do 24 tun po celé ČR. Naložíme u vás v Liberci ráno, vykládka druhý den ráno na druhém konci republiky.",
    },
    {
      n: "02",
      title: "Mezinárodní přeprava po EU",
      body: "Německo, Rakousko, Polsko, Slovensko. Blízko k hranicím z Liberce — do Drážďan jsme za dvě hodiny, papíry i celní odbavení řešíme za vás.",
    },
    {
      n: "03",
      title: "Spedice a plánování tras",
      body: "Naše dispečink v Rochlici složí i menší zakázky do jedné jízdy. Zavoláme řidiče, ohlídáme dobu na cestě a dáme vám čas příjezdu, ne odhad.",
    },
    {
      n: "04",
      title: "Pronájem skladových prostor",
      body: "Krytá plocha na překládku a krátkodobé uskladnění palet přímo u dálničního nájezdu na Liberec. Ptejte se na volnou kapacitu.",
    },
  ];

  return (
    <main className="cs">
      <header className="cs-top">
        <a className="cs-mark" href="#uvod" aria-label="C.S.Transport — úvod">
          <span className="cs-mark-plate">CS</span>
          <span className="cs-mark-word">
            <b>C.S.Transport</b>
            <em>autodoprava &middot; spedice &middot; Liberec</em>
          </span>
        </a>
        <nav className="cs-nav" aria-label="Hlavní">
          <a href="#sluzby">Co vozíme</a>
          <a href="#duvera">O firmě</a>
          <a className="cs-nav-call" href="tel:+420775662382">+420 775 662 382</a>
        </nav>
      </header>

      <section className="cs-hero" id="uvod">
        <div className="cs-hero-media">
          <img
            src="/hero.webp"
            alt="Kamion C.S.Transport na silnici u Liberce"
            width={1600}
            height={1000}
            loading="eager"
          />
          <div className="cs-hero-scrim" aria-hidden="true" />
        </div>

        <div className="cs-hero-inner">
          <p className="cs-eyebrow">Ostašovská 34 &middot; 460 01 Liberec — Růžodol 1</p>
          <h1 className="cs-hero-h">
            Náklad z&nbsp;Liberce,
            <br />
            <span className="cs-hero-accent">na místě ráno.</span>
          </h1>
          <p className="cs-hero-lead">
            Rodinná autodoprava a spedice pod Ještědem. Vezeme palety, kusové
            zásilky i celé návěsy po Česku a do celé Evropské unie — a vždycky
            vám řekneme, kdy tam vůz doopravdy bude.
          </p>
          <div className="cs-hero-cta">
            <a className="cs-btn" href="tel:+420775662382">Zavolat dispečink</a>
            <a className="cs-btn cs-btn-ghost" href="#sluzby">
              Co dokážeme odvézt
            </a>
          </div>
        </div>

        <dl className="cs-ledger" aria-label="Pravidelné trasy z Liberce">
          {routes.map((r) => (
            <div className="cs-ledger-row" key={r.city}>
              <dt>{r.city}</dt>
              <dd className="cs-ledger-km">{r.km}</dd>
              <dd className="cs-ledger-note">{r.note}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="cs-services" id="sluzby">
        <div className="cs-sec-head">
          <span className="cs-tag">Nákladní list</span>
          <h2>Co pro vás naložíme</h2>
          <p>
            Čtyři věci, které děláme každý den. Bez podmínek psaných malým
            písmem — zavoláte, řekneme cenu a termín.
          </p>
        </div>

        <div className="cs-grid">
          {services.map((s) => (
            <article className="cs-card" key={s.n}>
              <span className="cs-card-n" aria-hidden="true">
                {s.n}
              </span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </article>
          ))}
        </div>

        <figure className="cs-figure">
          <img
            src="/section-1.webp"
            alt="Vozový park C.S.Transport připravený k nakládce"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption>
            Vlastní vozový park — soupravy pravidelně na STK a v servisu, ne
            půjčené na jednu jízdu.
          </figcaption>
        </figure>
      </section>

      <section className="cs-trust" id="duvera">
        <div className="cs-trust-media">
          <img
            src="/section-2.webp"
            alt="Řidič C.S.Transport u kabiny kamionu"
            width={1200}
            height={1400}
            loading="lazy"
          />
        </div>

        <div className="cs-trust-text">
          <span className="cs-tag cs-tag-light">O firmě</span>
          <h2>
            Za volantem sedí lidé,
            <br />
            se kterými mluvíte po telefonu.
          </h2>
          <p>
            C.S.Transport vozí náklad z Liberecka od roku 2011. Nejsme velká
            síť s call centrem — dispečink v Rochlici a řidiči se znají jménem,
            takže když se něco na cestě zdrží, dozvíte se to hned a od člověka,
            který u toho je.
          </p>

          <ul className="cs-facts">
            <li>
              <span className="cs-fact-k">Sídlo</span>
              <span className="cs-fact-v">
                Ostašovská 34/25, Liberec — Růžodol 1
              </span>
            </li>
            <li>
              <span className="cs-fact-k">Spedice</span>
              <span className="cs-fact-v">
                České mládeže 992/34, Liberec — Rochlice
              </span>
            </li>
            <li>
              <span className="cs-fact-k">IČO</span>
              <span className="cs-fact-v">28714903</span>
            </li>
            <li>
              <span className="cs-fact-k">Telefon</span>
              <span className="cs-fact-v">
                <a href="tel:+420775662382">+420 775 662 382</a>
              </span>
            </li>
            <li>
              <span className="cs-fact-k">E-mail</span>
              <span className="cs-fact-v">
                <a href="mailto:cstransport@seznam.cz">
                  cstransport@seznam.cz
                </a>
              </span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
