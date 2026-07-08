import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Účetnictví a daňová evidence",
      lead: "Vedeme kompletní účetnictví i jednoduchou daňovou evidenci. Máte pořádek v dokladech a přehled o číslech po celý rok, ne jen v březnu.",
      items: [
        "Vedení účetnictví a daňové evidence",
        "Daňová přiznání a přehledy pro OSVČ i s.r.o.",
        "Kontrola dokladů a měsíční uzávěrky",
      ],
    },
    {
      no: "02",
      title: "Mzdy a personalistika",
      lead: "Zpracujeme mzdy vašich zaměstnanců včas a bez chyb. Postaráme se o odvody, nemocenskou i komunikaci s úřady za vás.",
      items: [
        "Zpracování mezd a odvodů",
        "Personální agenda a smlouvy",
        "Komunikace s ČSSZ a zdravotními pojišťovnami",
      ],
    },
    {
      no: "03",
      title: "Dotace, fondy a granty",
      lead: "Provedeme vás žádostí o dotaci z EU i národních zdrojů. Od finanční analýzy projektu po dotační audit — bez zbytečné administrativy navíc.",
      items: [
        "Zpracování žádosti o dotaci",
        "Finanční analýza projektu",
        "Dotační audit",
      ],
    },
    {
      no: "04",
      title: "Kurzy a poradenství",
      lead: "Vzděláváme účetní i mzdové týmy a poradíme s kariérou lidem se zdravotním postižením. Konkrétní kroky, žádné obecné fráze.",
      items: [
        "Kurzy mzdového účetnictví",
        "Zajištění dotací na školení zaměstnanců",
        "Kariérní poradenství pro OZP",
      ],
    },
  ];

  const trust = [
    { k: "14+", v: "let vedeme účetnictví firmám v jižních Čechách" },
    { k: "120+", v: "klientů — OSVČ, s.r.o. i spolky" },
    { k: "12/12", v: "měsíců v roce máte čísla pod kontrolou" },
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="brand" href="#top" aria-label="SHARP solution — domů">
          <span className="brand-mark" aria-hidden="true">Σ</span>
          <span className="brand-name">
            SHARP<span className="brand-thin">solution</span>
          </span>
        </a>
        <nav className="nav-links">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="nav-cta" href="tel:+420775099006">Zavolat</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Účetní kancelář · České Budějovice</p>
            <h1 className="hero-title">
              Vaše čísla
              <br />
              <span className="hero-em">sedí na haléř.</span>
            </h1>
            <p className="hero-lead">
              Vedeme účetnictví, mzdy a daně pro živnostníky i firmy v jižních
              Čechách. Postaráme se o doklady, termíny i úřady — vy se věnujete
              svému podnikání.
            </p>
            <div className="hero-actions">
              <a className="btn btn-primary" href="tel:+420775099006">
                Zavolat +420 775 099 006
              </a>
              <a className="btn btn-ghost" href="mailto:info@sharpsolution.cz">
                Napsat e-mail
              </a>
            </div>
            <dl className="ledger" aria-label="Klíčové ukazatele">
              <div className="ledger-row">
                <dt>Uzávěrka</dt>
                <dd>měsíčně, ne jednou za rok</dd>
              </div>
              <div className="ledger-row">
                <dt>Odpověď</dt>
                <dd>do druhého pracovního dne</dd>
              </div>
              <div className="ledger-row">
                <dt>Sídlo</dt>
                <dd>České Budějovice</dd>
              </div>
            </dl>
          </div>
          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Účetní kancelář SHARP solution v Českých Budějovicích při práci s doklady a výkazy"
              className="hero-img"
              width={720}
              height={900}
            />
            <figcaption className="hero-tag">
              <span className="tag-dot" aria-hidden="true" />
              Účetnictví · Mzdy · Dotace
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <p className="eyebrow">Co pro vás vedeme</p>
          <h2 className="sec-title" id="sluzby-h">
            Řádky, ze kterých se skládá klid v podnikání
          </h2>
        </div>
        <ol className="svc-list">
          {services.map((s) => (
            <li className="svc" key={s.no}>
              <div className="svc-no" aria-hidden="true">
                {s.no}
              </div>
              <div className="svc-body">
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-lead">{s.lead}</p>
                <ul className="svc-items">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="about" id="o-nas" aria-labelledby="o-nas-h">
        <div className="about-grid">
          <figure className="about-figure">
            <img
              src="/section-1.webp"
              alt="Zpracování mezd a dokladů v kanceláři SHARP solution"
              className="about-img"
              width={640}
              height={760}
            />
          </figure>
          <div className="about-copy">
            <p className="eyebrow">O nás</p>
            <h2 className="sec-title" id="o-nas-h">
              Malá kancelář, která zvedá telefon
            </h2>
            <p className="about-lead">
              SHARP solution je účetní kancelář z Českých Budějovic. Vedeme
              účetnictví a mzdy tak, aby vám dávaly smysl — vysvětlíme, co která
              položka znamená, a upozorníme na termín dřív, než na něj narazíte.
              Kromě čísel pomáháme i s dotacemi a školíme mzdové účetní.
            </p>
            <dl className="stats">
              {trust.map((t) => (
                <div className="stat" key={t.k}>
                  <dt className="stat-k">{t.k}</dt>
                  <dd className="stat-v">{t.v}</dd>
                </div>
              ))}
            </dl>
            <blockquote className="quote">
              „Poprvé mám pocit, že účetní na mé straně opravdu hlídá termíny.
              Doklady předám a mám hlavu volnou.“
              <cite>— Jana K., e-shop s keramikou, České Budějovice</cite>
            </blockquote>
          </div>
        </div>
        <figure className="about-strip">
          <img
            src="/section-2.webp"
            alt="Konzultace k dotacím a projektům v kanceláři SHARP solution"
            className="strip-img"
            width={1280}
            height={520}
          />
          <figcaption className="strip-cap">
            Konzultace k dotacím — od finanční analýzy projektu po dotační audit.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
