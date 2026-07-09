import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      okruh: "Tepelná čerpadla",
      popis:
        "Autorizovaná montáž čerpadel STIEBEL ELTRON — od návrhu výkonu přes vrty a rozvody až po zaregulování. Vytápíme rodinné domy i celé bytovky.",
      detail: ["vzduch–voda", "země–voda", "servis a záruka"],
    },
    {
      cislo: "02",
      okruh: "Topení a rozvody",
      popis:
        "Kompletní otopné soustavy — podlahové vytápění, radiátory, kotelny. Napojení na plyn i na obnovitelné zdroje pod jednou partou.",
      detail: ["podlahovka", "plyn", "kotelny"],
    },
    {
      cislo: "03",
      okruh: "Voda, kanalizace, VZT",
      popis:
        "Vnitřní rozvody vody a kanalizace, vzduchotechnika a klimatizace. To, co drží dům v provozu a nebývá vidět — děláme, aby vydrželo.",
      detail: ["rozvody vody", "kanalizace", "klimatizace"],
    },
    {
      cislo: "04",
      okruh: "Solární systémy",
      popis:
        "Solární ohřev a fotovoltaika napojená na topení. Kombinujeme zdroje tak, aby dům topil sám za sebe co nejvíc měsíců v roce.",
      detail: ["ohřev vody", "FV", "akumulace"],
    },
  ];

  return (
    <main className="tt">
      <header className="tt-top">
        <a className="tt-mark" href="#" aria-label="TECHTHERM — domů">
          <span className="tt-mark-tech">TECH</span>
          <span className="tt-mark-therm">THERM</span>
          <span className="tt-mark-tail">°C</span>
        </a>
        <div className="tt-top-right">
          <span className="tt-loc">Olomouc</span>
          <a className="tt-call" href="tel:+420585000000">Zavolat topenáři</a>
        </div>
      </header>

      <section className="tt-hero">
        <div className="tt-hero-media">
          <img
            src="/hero.webp"
            alt="Montáž tepelného čerpadla a rozvodů topení firmou TECHTHERM"
            className="tt-hero-img"
          />
          <div className="tt-hero-scrim" aria-hidden="true" />
        </div>

        <div className="tt-hero-body">
          <p className="tt-eyebrow">Topenáři z Olomouce · od roku 2006</p>
          <h1 className="tt-h1">
            Teplo, které<br />
            <span className="tt-h1-accent">postavíme celé</span><br />
            od vrtu po radiátor.
          </h1>
          <p className="tt-lede">
            Tepelná čerpadla, podlahovka, plyn i voda — jedna parta, jeden
            projekt, jedna odpovědnost. Autorizovaná montáž STIEBEL ELTRON.
          </p>
          <div className="tt-hero-cta">
            <a className="tt-btn" href="tel:+420585000000">Zavolat topenáři</a>
            <a className="tt-btn-ghost" href="#sluzby">Co umíme</a>
          </div>

          <dl className="tt-gauge" aria-label="Firma v číslech">
            <div className="tt-gauge-item">
              <dt>Provozní teplota důvěry</dt>
              <dd>
                <span className="tt-temp">55</span>
                <span className="tt-temp-unit">°C</span>
              </dd>
              <p>ideál pro podlahové vytápění z čerpadla</p>
            </div>
            <div className="tt-gauge-item">
              <dt>Předaných bytů</dt>
              <dd><span className="tt-temp">400+</span></dd>
              <p>topení a rozvody v nových bytových domech</p>
            </div>
            <div className="tt-gauge-item">
              <dt>Let v oboru</dt>
              <dd><span className="tt-temp">18</span></dd>
              <p>montáže topení, plynu, vody a VZT bez pauzy</p>
            </div>
          </dl>
        </div>
      </section>

      <section className="tt-sluzby" id="sluzby">
        <div className="tt-sec-head">
          <p className="tt-eyebrow tt-eyebrow-dark">Celý okruh pod jednou střechou</p>
          <h2 className="tt-h2">Čtyři okruhy jedné soustavy</h2>
          <p className="tt-sec-note">
            Zdroj tepla, rozvody, voda i solár na sebe musí sedět. Proto to
            neděláme po částech s pěti firmami — vedeme celou soustavu my.
          </p>
        </div>

        <ol className="tt-grid">
          {sluzby.map((s) => (
            <li className="tt-card" key={s.cislo}>
              <span className="tt-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="tt-card-title">{s.okruh}</h3>
              <p className="tt-card-desc">{s.popis}</p>
              <ul className="tt-tags">
                {s.detail.map((d) => (
                  <li key={d} className="tt-tag">{d}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="tt-sluzby-fig">
          <img
            src="/section-1.webp"
            alt="Detail kotelny a rozvodů topení připravených k zapojení"
            className="tt-fig-img"
          />
          <figcaption>
            Vrty, čerpadlo, akumulace, regulace — sestava, kterou po nás
            převezme kdokoli, protože je v ní pořádek.
          </figcaption>
        </figure>
      </section>

      <section className="tt-onas" id="onas">
        <div className="tt-onas-inner">
          <div className="tt-onas-text">
            <p className="tt-eyebrow">Kdo Vám to postaví</p>
            <h2 className="tt-h2 tt-h2-light">
              Olomoucká firma, která u zdroje tepla zůstává i po montáži.
            </h2>
            <p className="tt-onas-p">
              TECHTHERM jsme založili v roce 2006 a od začátku děláme jednu
              věc — vytápíme domy a staráme se, aby topily levně a dlouho.
              Postavili jsme topení a rozvody ve stovkách bytů a k tepelným
              čerpadlům STIEBEL ELTRON jsme jednou z hlavních autorizovaných
              montážních firem v regionu.
            </p>
            <p className="tt-onas-p">
              Dnes se soustředíme na obnovitelné zdroje — tepelná čerpadla a
              solární systémy pro rodinné i bytové domy. Přijedeme, změříme,
              navrhneme a hlavně zůstaneme na telefonu, i když je hotovo.
            </p>

            <ul className="tt-trust">
              <li>
                <span className="tt-trust-k">Autorizace</span>
                <span className="tt-trust-v">Montáže STIEBEL ELTRON</span>
              </li>
              <li>
                <span className="tt-trust-k">Certifikace</span>
                <span className="tt-trust-v">Důvěryhodná firma</span>
              </li>
              <li>
                <span className="tt-trust-k">Působíme</span>
                <span className="tt-trust-v">Olomouc a okolí</span>
              </li>
            </ul>
          </div>

          <figure className="tt-onas-fig">
            <img
              src="/section-2.webp"
              alt="Realizace vytápění a technického zázemí v novém bytovém domě"
              className="tt-fig-img"
            />
            <figcaption>Realizace vytápění v novostavbě bytového domu.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
