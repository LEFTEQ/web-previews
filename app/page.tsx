import React from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Kompletní rekonstrukce bytu",
      desc: "Od bouracích prací po malování. Vedeme celou stavbu, koordinujeme řemesla a hlídáme termíny za vás.",
    },
    {
      no: "02",
      title: "Koupelny a bytová jádra",
      desc: "Nové rozvody, hydroizolace, obklady na míru. Panelákové jádro vyměníme za zděnou koupelnu, která vydrží desítky let.",
    },
    {
      no: "03",
      title: "Kuchyně a dispozice",
      desc: "Bourání příček, nové rozvody vody i elektřiny, sladění kuchyně s obývacím prostorem. Otevřeme byt světlu.",
    },
    {
      no: "04",
      title: "Podlahy a dokončovací práce",
      desc: "Nivelace, vinyl, dřevo i dlažba. Finální detaily, které rozhodují o tom, jak byt po předání skutečně vypadá.",
    },
    {
      no: "05",
      title: "Návrh interiéru a vizualizace",
      desc: "Než se začne bourat, ukážeme vám výsledek. Realistické vizualizace a pomoc s výběrem materiálů i barev.",
    },
  ];

  const steps = [
    { k: "Konzultace", v: "Projdeme byt, vaše představy i rozpočet. Nezávazně a zdarma." },
    { k: "Zaměření", v: "Zhodnotíme stav bytu a upřesníme rozsah prací." },
    { k: "Kalkulace", v: "Připravíme řešení a orientační rozpočet na papíře." },
    { k: "Realizace", v: "Koordinujeme všechna řemesla. Vy máte jeden kontakt." },
    { k: "Předání", v: "Uklizený byt připravený k nastěhování." },
  ];

  const projects = [
    { img: "/section-1.webp", loc: "Praha 3 — Vinohrady", type: "Obývací pokoj", note: "Sloučení kuchyně a obývacího pokoje, nová dubová podlaha." },
    { img: "/section-2.webp", loc: "Praha 5 — Smíchov", type: "Kuchyně a jádro", note: "Zděná koupelna místo panelového jádra, kuchyň na míru." },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Lusso Rekonstrukce, úvod">
          <span className="wordmark__lusso">Lusso</span>
          <span className="wordmark__sub">Rekonstrukce · Praha</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co děláme</a>
          <a href="#realizace">Realizace</a>
          <a className="topnav__cta" href="tel:+420776123456">Zavolat</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Zrekonstruovaný pražský byt s otevřenou dispozicí a novou podlahou"
            className="hero__img"
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__inner">
          <p className="eyebrone">Rekonstrukce bytů · Praha a okolí</p>
          <h1 className="hero__title">
            Předáme vám byt<br />
            <em>hotový ke stěhování.</em>
          </h1>
          <p className="hero__lead">
            Jedna firma od prvního návrhu po poslední lištu. Neřešíte, kdo přijde
            zítra a jestli dorazí obkladač — koordinaci řemesel bereme na sebe.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420776123456">Zavolat 776 123 456</a>
            <a className="btn btn--ghost" href="#sluzby">Jak to probíhá</a>
          </div>

          <dl className="hero__facts">
            <div>
              <dt>Praha 1–10</dt>
              <dd>místo, kde stavíme</dd>
            </div>
            <div>
              <dt>Jeden kontakt</dt>
              <dd>na celý projekt</dd>
            </div>
            <div>
              <dt>Návrh · vizualizace · stavba</dt>
              <dd>vše pod jednou střechou</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrone eyebrone--dark">Co pro vás uděláme</p>
          <h2 className="section-title" id="sluzby-h">
            Od bouračky po klíče v ruce
          </h2>
          <p className="section-intro">
            Rekonstrukce bytů, koupelen, kuchyní i celých bytových jader. Vyberte
            si rozsah — zbytek už je naše starost.
          </p>
        </div>

        <ol className="services">
          {services.map((s) => (
            <li className="service" key={s.no}>
              <span className="service__no" aria-hidden="true">{s.no}</span>
              <div className="service__body">
                <h3 className="service__title">{s.title}</h3>
                <p className="service__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="process">
          <h3 className="process__title">Jak spolupráce probíhá</h3>
          <ol className="process__list">
            {steps.map((st, i) => (
              <li className="process__step" key={st.k}>
                <span className="process__num">{i + 1}</span>
                <span className="process__k">{st.k}</span>
                <span className="process__v">{st.v}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="realizace" id="realizace" aria-labelledby="realizace-h">
        <div className="section-head section-head--light">
          <p className="eyebrone">Vybrané realizace</p>
          <h2 className="section-title" id="realizace-h">
            Důkaz je v hotovém bytě
          </h2>
          <p className="section-intro">
            Každou stavbu vedeme od návrhu po předání. Tady jsou dva pražské byty,
            kde jsme měnili dispozici i jádro.
          </p>
        </div>

        <div className="projects">
          {projects.map((p) => (
            <figure className="project" key={p.loc}>
              <img
                src={p.img}
                alt={`${p.type}, realizace ${p.loc}`}
                className="project__img"
              />
              <figcaption className="project__cap">
                <span className="project__type">{p.type}</span>
                <span className="project__loc">{p.loc}</span>
                <span className="project__note">{p.note}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="trust">
          <p className="trust__lead">Proč lidé v Praze volají právě nám</p>
          <ul className="trust__list">
            <li>Jedna firma pro celý projekt — konec obvolávání řemesel.</li>
            <li>Nezávazná kalkulace, než cokoli podepíšete.</li>
            <li>Zděné koupelny místo panelových jader, které vydrží.</li>
            <li>Návrh a vizualizace, abyste výsledek viděli předem.</li>
            <li>Individuální přístup podle stavu i stáří bytu.</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
