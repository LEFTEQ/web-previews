import type { CSSProperties } from "react";

export default function Page() {
  const channels = [
    {
      code: "PPC",
      name: "Správa PPC kampaní",
      desc: "AdWords, Sklik, Etarget i Facebook. Nastavíme cílení tak, aby každá stokoruna přinesla poptávku — ne jen prokliky.",
      metric: "cíl: nižší cena za konverzi",
    },
    {
      code: "SEO",
      name: "Optimalizace pro vyhledávače",
      desc: "Technické audity, obsah a odkazy. Vaše stránky se posunou tam, kde vás zákazníci opravdu hledají.",
      metric: "cíl: vyšší pozice v Seznamu i Googlu",
    },
    {
      code: "ANL",
      name: "Analýzy a audity",
      desc: "Detailně změříme, co funguje a co peníze jen odčerpává. Rozhodnutí opíráme o čísla, ne o pocit.",
      metric: "cíl: jasná data místo dohadů",
    },
  ];

  const proof = [
    { k: "605 908 070", v: "Zavoláte a mluvíte rovnou s tím, kdo kampaň vede." },
    { k: "Hradec Králové", v: "Sídlíme ve východních Čechách. Za klienty jezdíme osobně." },
    { k: "Váš marketing = náš", v: "Kampaně vedeme, jako bychom je platili z vlastní kapsy." },
  ];

  return (
    <main className="ni">
      <header className="ni-nav" aria-label="Hlavní">
        <a className="ni-logo" href="#uvod" aria-label="NET invenio, domů">
          <span className="ni-logo-net">NET</span>
          <span className="ni-logo-inv">invenio</span>
          <span className="ni-logo-caret" aria-hidden="true">_</span>
        </a>
        <nav className="ni-nav-links">
          <a href="#kanaly">Co umíme</a>
          <a href="#duvera">Kdo jsme</a>
          <a className="ni-nav-cta" href="tel:+420605908070">Zavolat</a>
        </nav>
      </header>

      <section className="ni-hero" id="uvod">
        <div className="ni-hero-grid">
          <div className="ni-hero-copy">
            <p className="ni-eyebrow">Reklamní agentura · Hradec Králové</p>
            <h1 className="ni-hero-title">
              Rozpočet, který
              <br />
              <em>vydělává</em> — ne jen
              <br />
              utrácí.
            </h1>
            <p className="ni-hero-lead">
              Vedeme PPC kampaně, SEO a analýzy pro firmy, které chtějí
              vidět, kam každá koruna z reklamy odešla a co přinesla zpět.
            </p>
            <div className="ni-hero-actions">
              <a className="ni-btn" href="tel:+420605908070">Zavolat 605 908 070</a>
              <a className="ni-btn ni-btn-ghost" href="mailto:info@netinvenio.cz">
                Napsat e-mail
              </a>
            </div>
          </div>

          <figure className="ni-hero-panel">
            <img
              src="/hero.webp"
              alt="Práce reklamní agentury NET invenio nad kampaněmi a daty"
              className="ni-hero-img"
              width={880}
              height={1040}
            />
            <figcaption className="ni-ledger" aria-label="Ukázka výsledku kampaně">
              <div className="ni-ledger-row">
                <span>Prokliky</span>
                <span className="ni-ledger-num">+</span>
              </div>
              <div className="ni-ledger-row">
                <span>Cena za konverzi</span>
                <span className="ni-ledger-num ni-neg">–</span>
              </div>
              <div className="ni-ledger-row ni-ledger-total">
                <span>Zisk klienta</span>
                <span className="ni-ledger-num">▲</span>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="ni-section" id="kanaly" aria-labelledby="kanaly-h">
        <div className="ni-section-head">
          <p className="ni-eyebrow">Co umíme</p>
          <h2 id="kanaly-h" className="ni-h2">
            Tři páky, kterými hýbeme vaším obratem.
          </h2>
          <p className="ni-section-sub">
            Nedáváme dohromady balíček „všechno trochu". Vybereme to, co u vás
            přinese peníze nejdřív — a měříme každý krok.
          </p>
        </div>

        <ol className="ni-channels">
          {channels.map((c) => (
            <li className="ni-channel" key={c.code}>
              <span className="ni-channel-code" aria-hidden="true">
                {c.code}
              </span>
              <div className="ni-channel-body">
                <h3 className="ni-channel-name">{c.name}</h3>
                <p className="ni-channel-desc">{c.desc}</p>
                <p className="ni-channel-metric">{c.metric}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="ni-section ni-duvera" id="duvera" aria-labelledby="duvera-h">
        <div className="ni-duvera-grid">
          <figure className="ni-duvera-media">
            <img
              src="/section-1.webp"
              alt="Tým NET invenio při plánování reklamních kampaní"
              className="ni-duvera-img"
              width={760}
              height={620}
            />
            <img
              src="/section-2.webp"
              alt="Vyhodnocování výsledků kampaní a analýz"
              className="ni-duvera-img ni-duvera-img-2"
              width={760}
              height={620}
            />
          </figure>

          <div className="ni-duvera-copy">
            <p className="ni-eyebrow">Kdo jsme</p>
            <h2 id="duvera-h" className="ni-h2">
              Marketing nás baví. A to je na výsledcích vidět.
            </h2>
            <p className="ni-duvera-lead">
              Jsme malá agentura z Hradce Králové. Kampaně klientů vedeme,
              jako bychom je dělali sami pro sebe: cílíme přesně, ořezáváme
              zbytečné výdaje a hlídáme, aby reklama vydělala víc, než spolkne.
            </p>
            <dl className="ni-proof">
              {proof.map((p) => (
                <div className="ni-proof-item" key={p.k}>
                  <dt className="ni-proof-k">{p.k}</dt>
                  <dd className="ni-proof-v">{p.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
