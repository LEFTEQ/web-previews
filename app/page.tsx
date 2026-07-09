import type { CSSProperties } from "react";

export default function Page() {
  const pojistovny = ["111", "201", "205", "211", "213"];

  const sluzby = [
    {
      kod: "I.",
      nazev: "Klinická psychologie a psychoterapie",
      popis:
        "Ambulantní péče hrazená z veřejného zdravotního pojištění. Diagnostika, individuální psychoterapie a dlouhodobé provázení dospělých. Přijímáme na doporučení i bez něj — objednáváme telefonicky.",
      pro: "Pro klienty pojišťoven",
      detail: pojistovny,
    },
    {
      kod: "II.",
      nazev: "Předatestační příprava",
      popis:
        "Jsme akreditované školicí pracoviště pro získání specializované způsobilosti v oboru klinická psychologie. Vedeme kolegy a kolegyně na cestě k atestaci — supervize, praxe pod dohledem, odborné vedení.",
      pro: "Pro psychology v přípravě",
      detail: ["akreditace", "supervize", "praxe"],
    },
    {
      kod: "III.",
      nazev: "Skupiny, workshopy a kurzy",
      popis:
        "Příležitostně otevíráme skupinovou práci a vzdělávací i sebe­rozvojové akce. Menší skupiny, konkrétní téma, bezpečný prostor. Termíny hlásíme v kalendáři akcí.",
      pro: "Pro veřejnost i profesionály",
      detail: ["skupiny", "kurzy", "rozvoj"],
    },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="brand" href="#" aria-label="CERVOY — klinická psychologie Brno">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-dot" />
          </span>
          <span className="brand-word">
            CER<span className="brand-soft">VOY</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#sluzby">Péče</a>
          <a href="#o-nas">O nás</a>
          <a className="topnav-cta" href="#objednat">Objednat se</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Klidný interiér ambulance klinické psychologie CERVOY v Brně"
            className="hero-img"
          />
          <span className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">Ambulance klinické psychologie&nbsp;· Brno</p>
          <h1 id="hero-title" className="hero-title">
            Místo, kde se dá <em>mluvit</em>
            <br />
            beze spěchu.
          </h1>
          <p className="hero-lede">
            Klinická psychologie a psychoterapie pro dospělé. Pomáháme lidem
            v&nbsp;Brně vyznat se ve&nbsp;svém prožívání už&nbsp;více než dvacet pět let —
            v&nbsp;tichu, bez posuzování a&nbsp;bez zbytečných formulí.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#objednat">
              Objednat se telefonicky
            </a>
            <a className="btn btn-ghost" href="#sluzby">
              Jak péče probíhá
            </a>
          </div>
        </div>

        <dl className="hero-facts">
          <div className="fact">
            <dt>Praxe v&nbsp;Brně</dt>
            <dd>25+ let</dd>
          </div>
          <div className="fact">
            <dt>Hrazeno pojišťovnami</dt>
            <dd className="fact-codes">
              {pojistovny.map((p) => (
                <span key={p} className="code-chip">
                  {p}
                </span>
              ))}
            </dd>
          </div>
          <div className="fact">
            <dt>Akreditované pracoviště</dt>
            <dd>Předatestační příprava</dd>
          </div>
        </dl>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="section-eyebrow">Co u&nbsp;nás najdete</p>
          <h2 id="sluzby-title" className="section-title">
            Tři cesty, kterými k&nbsp;nám lidé přicházejí
          </h2>
          <p className="section-intro">
            Ať přicházíte kvůli sobě, kvůli atestaci, nebo se chcete jen posunout —
            začínáme vždycky rozhovorem a&nbsp;tempem, které unesete.
          </p>
        </div>

        <ol className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <div className="card-top">
                <span className="card-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <span className="card-pro">{s.pro}</span>
              </div>
              <h3 className="card-nazev">{s.nazev}</h3>
              <p className="card-popis">{s.popis}</p>
              <ul className="card-detail">
                {s.detail.map((d) => (
                  <li key={d} className="code-chip code-chip-quiet">
                    {d}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" id="o-nas" aria-labelledby="onas-title">
        <figure className="onas-media">
          <img
            src="/section-2.webp"
            alt="Detail pracovny psychoterapeuta — křesla proti sobě, přirozené světlo"
            className="onas-img"
          />
        </figure>

        <div className="onas-body">
          <p className="section-eyebrow">O&nbsp;nás</p>
          <h2 id="onas-title" className="section-title">
            Malá ambulance s&nbsp;dlouhou pamětí
          </h2>
          <p className="onas-text">
            CERVOY je brněnská ambulance klinické psychologie a&nbsp;psychoterapie.
            Pracujeme spolu čtvrt&nbsp;století a&nbsp;za&nbsp;tu&nbsp;dobu jsme se naučili
            jedno: na&nbsp;člověka se nedá spěchat. Proto vedeme malý tým a&nbsp;počet
            klientů držíme tak, aby na&nbsp;každého byl čas.
          </p>

          <dl className="onas-list">
            <div className="onas-item">
              <dt>Odbornost, na&nbsp;kterou dohlížíme</dt>
              <dd>
                Jako akreditované školicí pracoviště vedeme mladší kolegy
                k&nbsp;atestaci. Kvalitu tím udržujeme i&nbsp;u&nbsp;sebe.
              </dd>
            </div>
            <div className="onas-item">
              <dt>Diskrétnost jako samozřejmost</dt>
              <dd>
                Zabezpečené spojení, jasná pravidla GDPR a&nbsp;mlčenlivost.
                Co&nbsp;zazní v&nbsp;pracovně, tam&nbsp;zůstane.
              </dd>
            </div>
            <div className="onas-item">
              <dt>Bez čekání na&nbsp;doporučení</dt>
              <dd>
                Objednat se můžete i&nbsp;bez doporučení od&nbsp;lékaře. Stačí zvednout
                telefon a&nbsp;domluvíme první setkání.
              </dd>
            </div>
          </dl>

          <blockquote className="onas-quote" id="objednat">
            <p>
              „Nejdřív se prostě posadíme a&nbsp;řekneme si, s&nbsp;čím přicházíte.
              Nic víc nemusíte mít připravené.“
            </p>
            <cite>— tým ambulance CERVOY</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
