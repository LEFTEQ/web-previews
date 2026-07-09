import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "R",
      typ: "Rámové lešení",
      popis:
        "Nejrychlejší montáž pro fasády, zateplení a nátěry. Ustavíme, zaměříme a předáme často už do druhého dne.",
    },
    {
      kod: "T",
      typ: "Trubkové lešení",
      popis:
        "Pro atypické tvary, arkýře, věže a členité objekty, kde běžný systém nestačí. Stavíme přesně na míru stavbě.",
    },
    {
      kod: "P",
      typ: "Prostorové a speciální konstrukce",
      popis:
        "Podpěrná lešení, výškové práce a speciální sestavy pro průmysl. Řešíme i to, co jinde odmítnou.",
    },
    {
      kod: "V",
      typ: "Schodišťové věže",
      popis:
        "Bezpečný přístup do výšek pro lidi i materiál. Ideální ke staveništím i k dočasným akcím.",
    },
    {
      kod: "H",
      typ: "Hliníkové pojízdné lešení",
      popis:
        "Lehké, rychlé, mobilní. Pronájem i montáž pro krátké zásahy uvnitř i venku.",
    },
    {
      kod: "S",
      typ: "Stavební výtahy, vrátka a shozy na suť",
      popis:
        "Doprava materiálu nahoru a suti dolů. Kompletní vybavení, které drží stavbu v pohybu.",
    },
  ];

  const postup = [
    {
      c: "01",
      nadpis: "Zavoláte, my přijedeme",
      text:
        "Řeknete, co stavíte. Technik přijede na stavbu, zaměří objekt a navrhne nejlepší variantu lešení — i jejich kombinaci.",
    },
    {
      c: "02",
      nadpis: "Cenová nabídka nadruhý den",
      text:
        "Dostanete konkrétní nabídku v krátkém termínu. Žádné čekání týdny, žádné skryté položky.",
    },
    {
      c: "03",
      nadpis: "Namontujeme a předáme",
      text:
        "Díky vlastním skladovým kapacitám reagujeme rychle i v hlavní sezoně. Postavíme, předáme a je hotovo.",
    },
  ];

  return (
    <main className="page">
      {/* HERO */}
      <header className="hero">
        <div className="hero__frame" aria-hidden="true">
          <img className="hero__img" src="/hero.webp" alt="" />
          <div className="hero__scrim" />
        </div>

        <nav className="topbar" aria-label="Hlavní">
          <a className="wordmark" href="#">
            <span className="wordmark__mark" aria-hidden="true">
              <span className="wordmark__bar" />
              <span className="wordmark__bar" />
              <span className="wordmark__bar" />
            </span>
            <span className="wordmark__text">
              Montáže&nbsp;lešení
              <em>s.r.o. — České Budějovice</em>
            </span>
          </a>
          <a className="topbar__call" href="tel:+420605335555">
            +420 605 335 555
          </a>
        </nav>

        <div className="hero__inner">
          <p className="hero__eyebrow">
            <span className="tick" aria-hidden="true" /> Pronájem a montáž lešení · po celé ČR
          </p>
          <h1 className="hero__title">
            Postavíme vám
            <span className="hero__title-accent"> cestu do&nbsp;výšky.</span>
          </h1>
          <p className="hero__lead">
            Rámové, trubkové, prostorové i speciální lešení. Zaměříme, navrhneme
            a postavíme — rychle a bezpečně. Firma vyrostlá z velké stavební
            společnosti, s dlouholetou praxí ve stavitelství a průmyslu.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420605335555">
              Zavolat technika
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co montujeme
            </a>
          </div>

          <dl className="hero__stats">
            <div>
              <dt>Nabídka do</dt>
              <dd>
                2. dne <span>od zaměření</span>
              </dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>
                po celé ČR <span>ze základny v Budějovicích</span>
              </dd>
            </div>
            <div>
              <dt>Sklad</dt>
              <dd>
                vlastní <span>rychlá reakce v sezoně</span>
              </dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-eyebrow">Co postavíme</p>
          <h2 id="sluzby-nadpis" className="section-title">
            Šest systémů. Jedna parta.
          </h2>
          <p className="section-intro">
            Od jednoduché fasády po podpěrné konstrukce v průmyslu. Kde stačí
            rám, ušetříme čas. Kde nestačí nic běžného, svaříme řešení z trubek.
          </p>
        </div>

        <ul className="grid">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__typ">{s.typ}</h3>
              <p className="card__popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="sluzby__foto">
          <img
            src="/section-1.webp"
            alt="Namontované lešení na fasádě budovy"
            loading="lazy"
          />
          <figcaption>
            Trubka po trubce — každé pole zajištěné, zavětrované a připravené
            unést lidi i materiál.
          </figcaption>
        </figure>
      </section>

      {/* O NÁS / POSTUP */}
      <section className="onas" id="onas" aria-labelledby="onas-nadpis">
        <div className="onas__grid">
          <div className="onas__text">
            <p className="section-eyebrow">Jak to u nás chodí</p>
            <h2 id="onas-nadpis" className="section-title">
              Vy zadáte, my se postaráme o zbytek.
            </h2>
            <ol className="steps">
              {postup.map((p) => (
                <li className="step" key={p.c}>
                  <span className="step__num" aria-hidden="true">
                    {p.c}
                  </span>
                  <div>
                    <h3 className="step__nadpis">{p.nadpis}</h3>
                    <p className="step__text">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="pledge">
              <p>
                <strong>Kdo staví vaše lešení.</strong> Zaměstnáváme jen
                pracovníky s dlouholetou praxí — stavění lešení, speciální
                konstrukce, výškové práce. Všichni jsou pravidelně a
                profesionálně školení.
              </p>
              <p className="pledge__note">
                Máme i vzor smlouvy o montáži a nájmu — pošleme na vyžádání.
              </p>
            </div>
          </div>

          <aside className="onas__side">
            <figure className="onas__foto">
              <img
                src="/section-2.webp"
                alt="Detail smontované lešeňové konstrukce"
                loading="lazy"
              />
            </figure>
            <div className="kontakt">
              <h3>Rovnou k věci</h3>
              <dl>
                <div>
                  <dt>Telefon</dt>
                  <dd>
                    <a href="tel:+420605335555">+420 605 335 555</a>
                  </dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd>
                    <a href="mailto:montazelesenisro@seznam.cz">
                      montazelesenisro@seznam.cz
                    </a>
                  </dd>
                </div>
                <div>
                  <dt>Kde nás najdete</dt>
                  <dd>České Budějovice · montujeme po celé ČR</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
