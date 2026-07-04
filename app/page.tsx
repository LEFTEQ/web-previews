import type { CSSProperties } from "react";

export default function Page() {
  const kytice = [
    {
      cislo: "01",
      nazev: "Kytice na počkání",
      popis:
        "Přijdete, řeknete pro koho a proč — a odejdete s vázanou kyticí. Sezónní květiny z ranní aukce, svázané na místě za pár minut.",
      cena: "od 350 Kč",
    },
    {
      cislo: "02",
      nazev: "Předplacené úterky",
      popis:
        "Čerstvá kytice každý týden, vždy jiná, vždy podle toho, co zrovna nejlíp kvete. Vyzvednete si ji na Zelném trhu cestou z práce.",
      cena: "590 Kč / týden",
    },
    {
      cislo: "03",
      nazev: "Svatby a smutek",
      popis:
        "Od svatební vazby po smuteční věnec. Sedneme si nad tím osobně, ať to sedne barvou i náladou. Rozvoz po Brně domluvíme.",
      cena: "dle domluvy",
    },
  ];

  const sezona = [
    { mesic: "Teď kvete", kvetina: "Pivoňky, čechrava, máta" },
    { mesic: "Furt máme", kvetina: "Eukalyptus, růže, čertík" },
    { mesic: "Blíží se", kvetina: "Jiřiny, slunečnice, chrpy" },
  ];

  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Kytky od Pepy, domovská stránka">
          <span className="wordmark__od">kytky od</span>
          <span className="wordmark__pepy">Pepy</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#nabidka">Co vážeme</a>
          <a href="#krcek">O krámku</a>
          <a className="topnav__cta" href="https://objednavky.kytkyodpepy.com">
            Objednat kytku
          </a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Ranní pult květinářství Kytky od Pepy, čerstvě vázaná sezónní kytice"
            className="hero__img"
          />
          <span className="hero__stamp">Zelný trh · Brno</span>
        </div>
        <div className="hero__text">
          <p className="eyebrow">Květinářství na Zelňáku od roku 2009</p>
          <h1 id="hero-nadpis" className="hero__nadpis">
            Vážeme kytky<br />
            <em>tak, jak dneska ráno</em><br />
            přijely z aukce.
          </h1>
          <p className="hero__lead">
            Žádný chlaďák plný týden starých růží. Nakupujeme malé
            množství, každý den jiné, a co se do večera neprodá, jde domů
            s námi. Přijďte si vybrat, nebo objednejte a vyzvedněte na pobočce.
          </p>
          <div className="hero__akce">
            <a className="btn btn--plna" href="https://objednavky.kytkyodpepy.com">
              Objednat s vyzvednutím
            </a>
            <a className="btn btn--linka" href="tel:+420533445566">
              Zavolat: 533 445 566
            </a>
          </div>
          <dl className="hero__fakta">
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Zelný trh 12, Brno-střed</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 8–18 · So 8–13</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="sekce-hlava">
          <p className="eyebrow">Co u nás pořídíte</p>
          <h2 id="nabidka-nadpis">Tři způsoby, jak od nás odejít s kytkou</h2>
        </div>
        <div className="nabidka__grid">
          <div className="nabidka__media">
            <img
              src="/section-1.webp"
              alt="Ruce květinářky vázající kytici u pracovního stolu"
              className="nabidka__img"
            />
          </div>
          <ul className="karty">
            {kytice.map((k) => (
              <li className="karta" key={k.cislo}>
                <span className="karta__cislo">{k.cislo}</span>
                <div className="karta__telo">
                  <h3 className="karta__nazev">{k.nazev}</h3>
                  <p className="karta__popis">{k.popis}</p>
                </div>
                <span className="karta__cena">{k.cena}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="krcek" id="krcek" aria-labelledby="krcek-nadpis">
        <div className="krcek__media">
          <img
            src="/section-2.webp"
            alt="Výloha květinářství Kytky od Pepy s kbelíky sezónních květin"
            className="krcek__img"
          />
        </div>
        <div className="krcek__text">
          <p className="eyebrow">O krámku</p>
          <h2 id="krcek-nadpis">
            Za pultem stojí Pepa. Vážně tak se jmenuje.
          </h2>
          <p>
            Začínal jako dodavatel na aukci v Holandsku a před patnácti lety
            si otevřel krámek na Zelňáku, tři metry od kašny. Kupuje ráno,
            váže odpoledne a na jméno zná půlku okolních kanceláří.
          </p>
          <p>
            Nemáme sto druhů v ceníku. Máme to, co je zrovna nejhezčí — a
            řekneme vám na rovinu, když se něco nehodí. Radši prodáme míň a
            čerstvé, než hodně a povadlé.
          </p>

          <div className="sezona" aria-label="Co právě kvete">
            {sezona.map((s) => (
              <div className="sezona__radek" key={s.mesic}>
                <span className="sezona__mesic">{s.mesic}</span>
                <span className="sezona__kvet">{s.kvetina}</span>
              </div>
            ))}
          </div>

          <blockquote className="citace">
            „Objednala jsem kytici na dálku k mámině narozeninám a Pepa mi
            poslal fotku, než ji zabalil. Takhle to má vypadat.“
            <cite>— Markéta H., stálá zákaznice</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
