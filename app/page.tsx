import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "§ 1",
      title: "Daňová evidence a účetnictví",
      body: "Vedu daňovou evidenci i plné účetnictví pro živnostníky, s. r. o. i spolky. Papíry přebírám osobně v Hradci nebo elektronicky — vy podnikáte, čísla nechte na mně.",
    },
    {
      code: "§ 2",
      title: "Daňová přiznání a optimalizace",
      body: "Přiznání k dani z příjmů, DPH i silniční dani sestavím tak, aby seděla na korunu. Najdu, kde legálně ušetříte, a naplánuji odpisy dopředu na celý rok.",
    },
    {
      code: "§ 3",
      title: "Mzdy a personální agenda",
      body: "Zpracuji mzdy, přehledy pro pojišťovny i OSSZ a hlídám termíny za vás. Při kontrole z finančního úřadu nebo správy sociálního zabezpečení stojím vedle vás.",
    },
    {
      code: "§ 4",
      title: "Zastupování před úřady",
      body: "Jako zapsaná daňová poradkyně vás zastoupím při jednání i kontrole a získám odklad přiznání do července. Za své výpočty ručím svým razítkem.",
    },
  ];

  const facts = [
    { label: "V oboru od", value: "2009" },
    { label: "Ev. číslo poradce", value: "3564" },
    { label: "Ručím", value: "razítkem" },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní">
        <a className="mark" href="#" aria-label="Jitka Květenská, daňová poradkyně">
          <span className="mark-line">Jitka</span>
          <span className="mark-line mark-em">Květenská</span>
          <span className="mark-sub">daňová poradkyně · Hradec Králové</span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#o-mne">O mně</a>
          <a className="nav-cta" href="tel:+420602583150">Zavolat 602 583 150</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Odst. 1 — proč to řešit se mnou</p>
          <h1 className="hero-h1">
            Vaše daně<br />
            <span className="hero-em">v pořádku</span>,<br />
            termíny pod dozorem.
          </h1>
          <p className="hero-lead">
            Jsem Jitka Květenská, zapsaná daňová poradkyně z Hradce Králové.
            Vedu účetnictví a daně živnostníkům i firmám po celé ČR — přehledně,
            v termínu a s odkladem přiznání až do července.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420602583150">Zavolat 602 583 150</a>
            <a className="btn btn-ghost" href="#sluzby">Co pro vás udělám</a>
          </div>
          <dl className="hero-facts">
            {facts.map((f) => (
              <div className="fact" key={f.label}>
                <dt>{f.label}</dt>
                <dd>{f.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <figure className="hero-fig">
          <img
            src="/hero.webp"
            alt="Pracovní stůl daňové poradkyně s přiznáním, razítkem a kalkulačkou"
            className="hero-img"
            loading="eager"
          />
          <figcaption className="stamp" aria-hidden="true">
            <span className="stamp-top">DAŇOVÁ PORADKYNĚ</span>
            <span className="stamp-mid">ev. č. 3564</span>
            <span className="stamp-bot">HRADEC KRÁLOVÉ</span>
          </figcaption>
        </figure>
      </section>

      <section className="sec sluzby" id="sluzby">
        <div className="sec-head">
          <p className="eyebrow">Odst. 2 — co pro vás vyřídím</p>
          <h2 className="sec-h2">Čtyři paragrafy, které vám vezmu z hlavy</h2>
        </div>
        <ol className="srv-list">
          {services.map((s) => (
            <li className="srv" key={s.code}>
              <span className="srv-code" aria-hidden="true">{s.code}</span>
              <div className="srv-body">
                <h3 className="srv-title">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <img
          src="/section-1.webp"
          alt="Rozložené účetní doklady a formuláře přiznání k dani"
          className="srv-img"
          loading="lazy"
        />
      </section>

      <section className="sec o-mne" id="o-mne">
        <div className="about-grid">
          <img
            src="/section-2.webp"
            alt="Jitka Květenská ve své kanceláři v Hradci Králové"
            className="about-img"
            loading="lazy"
          />
          <div className="about-copy">
            <p className="eyebrow">Odst. 3 — komu svěřujete čísla</p>
            <h2 className="sec-h2">Poradkyně, ne anonymní kancelář</h2>
            <p className="about-lead">
              Přes patnáct let sedím nad daněmi hradeckých podnikatelů. Jsem
              zapsaná v Komoře daňových poradců pod evidenčním číslem 3564 —
              to znamená složené zkoušky, pojištění odpovědnosti a to, že
              za každý výpočet ručím.
            </p>
            <p className="about-lead">
              Nedostanete tabulku k proklikání. Dostanete jednoho člověka,
              který zvedne telefon, přijde s vámi na finanční úřad a řekne
              vám dopředu, kolik a kdy zaplatíte. Bez překvapení v březnu.
            </p>
            <ul className="tags">
              <li>Živnostníci</li>
              <li>Malé s. r. o.</li>
              <li>Spolky</li>
              <li>Pronájem nemovitostí</li>
            </ul>
            <address className="office">
              <span className="office-line">Kancelář: Březová 482, 500 03 Hradec Králové</span>
              <a href="tel:+420602583150">+420 602 583 150</a>
            </address>
          </div>
        </div>
      </section>
    </main>
  );
}
