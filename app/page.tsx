import type { CSSProperties } from "react";

export default function Page() {
  const disciplines = [
    {
      code: "01",
      label: "EVENTS",
      title: "Firemní a společenské akce",
      items: [
        "Firemní večírky a společenské akce",
        "Akce v obchodních centrech",
        "Sportovní turnaje a golfové dny",
        "Veletrhy a výstavy",
      ],
    },
    {
      code: "02",
      label: "PRODUCTION",
      title: "Produkční zajištění",
      items: [
        "Kompletní produkce akcí",
        "Příprava a harmonogram",
        "Scénář a dramaturgie",
        "Režie na místě",
      ],
    },
    {
      code: "03",
      label: "ADVERTISING",
      title: "Reklama a grafika",
      items: [
        "Reklamní kampaně",
        "Grafické studio a tisk",
        "Foto, video, film",
        "PR servis",
      ],
    },
    {
      code: "04",
      label: "ENTERTAINMENT",
      title: "Program a zábava",
      items: [
        "Moderátoři a kapely",
        "Vystoupení a show",
        "Zábavné atrakce a trenažéry",
        "Hostesky po celé ČR",
      ],
    },
    {
      code: "05",
      label: "SUPPORT",
      title: "Technika a vybavení",
      items: [
        "Pódia a jejich stavba",
        "Ozvučení a osvětlení",
        "Party stany",
        "Kompletní vybavení akcí",
      ],
    },
  ];

  const projects = [
    { n: "100 let", name: "HC Dynamo Pardubice", kind: "Výročí hokejového klubu" },
    { n: "20 let", name: "Foxconn", kind: "Firemní oslava + street food festival" },
    { n: "tour", name: "Noc na Karlštejně", kind: "Turné po celé ČR" },
    { n: "koncert", name: "Kryštof", kind: "Produkce koncertu" },
    { n: "sport", name: "Olympiáda dětí a mládeže", kind: "Sportovní event" },
    { n: "série", name: "Vlakem na hokej", kind: "Den železnice" },
  ];

  return (
    <main className="ma">
      <header className="ma-top">
        <a className="ma-word" href="#top" aria-label="Máša agency, úvod">
          <span className="ma-word-a">MÁŠA</span>
          <span className="ma-word-b">agency</span>
        </a>
        <nav className="ma-nav" aria-label="Hlavní">
          <a href="#obor">Co umíme</a>
          <a href="#reference">Reference</a>
          <a className="ma-nav-call" href="tel:+420731441340">+420 731 441 340</a>
        </nav>
      </header>

      <section className="ma-hero" id="top">
        <img
          className="ma-hero-img"
          src="/hero.webp"
          alt="Nasvícené pódium během večerní akce produkované agenturou Máša v Pardubicích"
        />
        <div className="ma-hero-scrim" aria-hidden="true" />
        <div className="ma-hero-inner">
          <p className="ma-kicker">Eventová produkce · Pardubice, Pernerova 441</p>
          <h1 className="ma-title">
            <span className="l1">Od prázdné</span>
            <span className="l2">haly po</span>
            <span className="l3">vyprodaný</span>
            <span className="l4">večer.</span>
          </h1>
          <p className="ma-lede">
            Připravíme, vyrežírujeme a odbavíme celou vaši akci — ples, konferenci,
            firemní výročí i sportovní event. Scénář, pódium, ozvučení i program
            na jednom telefonním čísle.
          </p>
          <div className="ma-hero-cta">
            <a className="ma-btn" href="tel:+420731441340">Zavolat produkci</a>
            <a className="ma-btn ghost" href="mailto:produkce@masa-agency.cz">
              Napsat na produkce@masa-agency.cz
            </a>
          </div>
        </div>
        <div className="ma-runsheet" aria-hidden="true">
          <span>19:00 · dveře</span>
          <span>19:30 · nástup</span>
          <span>20:15 · hlavní program</span>
          <span>23:00 · afterparty</span>
        </div>
      </section>

      <section className="ma-section ma-obor" id="obor">
        <div className="ma-sec-head">
          <p className="ma-eyebrow">Cue sheet · co pro vás zajistíme</p>
          <h2 className="ma-h2">Pět profesí, jeden štáb</h2>
          <p className="ma-sec-note">
            Každou akci skládáme z těchto pěti oborů. Berete si celý balík,
            nebo jen tu část, kterou zrovna potřebujete.
          </p>
        </div>

        <ol className="ma-grid">
          {disciplines.map((d) => (
            <li className="ma-card" key={d.code}>
              <div className="ma-card-top">
                <span className="ma-card-code">{d.code}</span>
                <span className="ma-card-label">{d.label}</span>
              </div>
              <h3 className="ma-card-title">{d.title}</h3>
              <ul className="ma-card-list">
                {d.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
          <li className="ma-card ma-card-cta">
            <p>Nevíte, kde začít?</p>
            <p className="ma-card-cta-big">Připravíme nezávaznou nabídku na míru.</p>
            <a className="ma-btn small" href="tel:+420731441340">Zavolat produkci</a>
          </li>
        </ol>
      </section>

      <section className="ma-section ma-ref" id="reference">
        <div className="ma-ref-media">
          <img
            src="/section-2.webp"
            alt="Momentka z jedné z realizovaných akcí agentury Máša"
            className="ma-ref-img"
          />
        </div>
        <div className="ma-ref-body">
          <p className="ma-eyebrow light">Naposledy realizováno</p>
          <h2 className="ma-h2 light">Akce, které za nás mluví</h2>
          <p className="ma-sec-note light">
            Od stovky let Dynama přes koncerty Kryštofa po Noc na Karlštejně
            napříč republikou. Jsme součástí české eventové asociace a v Pardubicích
            děláme produkci od roku, kdy hala ještě neměla novou střechu.
          </p>

          <dl className="ma-projects">
            {projects.map((p, i) => (
              <div
                className="ma-proj-row"
                key={p.name}
                style={{ "--i": i } as CSSProperties}
              >
                <dt className="ma-proj-n">{p.n}</dt>
                <dd className="ma-proj-meta">
                  <span className="ma-proj-name">{p.name}</span>
                  <span className="ma-proj-kind">{p.kind}</span>
                </dd>
              </div>
            ))}
          </dl>

          <p className="ma-ref-foot">
            Máša agency s.r.o. · Pernerova 441, 530 02 Pardubice · IČ 25288881
          </p>
        </div>
      </section>
    </main>
  );
}
