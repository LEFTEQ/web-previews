import type { CSSProperties } from "react";

export default function Page() {
  const wallLayers = [
    {
      no: "01",
      name: "Nosná stěna",
      detail: "Cihla, beton nebo pórobeton — to, co už stojí a co budeme zateplovat.",
    },
    {
      no: "02",
      name: "Lepicí a stěrková hmota",
      detail: "Celoplošné lepení a vyrovnaný podklad. Žádné dutiňky, kudy uchází teplo.",
    },
    {
      no: "03",
      name: "Izolant",
      detail: "Fasádní polystyren nebo minerální vata podle typu domu. Tloušťka počítána, ne odhadnutá.",
    },
    {
      no: "04",
      name: "Armaže s tkaninou",
      detail: "Stěrka s persínkou proti prasklinám. Rohy zpevněné lištami.",
    },
    {
      no: "05",
      name: "Omítka",
      detail: "Probarvená finální omítka — struktura a odstín, který si vyberete vy.",
    },
  ];

  const services = [
    {
      title: "Zateplení fasád",
      body:
        "Kontaktní zateplovací systém (ETICS) na rodinné domy i bytové domy. Navrhneme skladbu, tloušťku izolantu i řešení detailů kolem oken a soklu.",
    },
    {
      title: "Míchací zařízení na stavbě",
      body:
        "Vlastní strojní míchání a doprava směsí na fasádu. Rovnoměrná konzistence a tempo, které drží termín i u větších ploch.",
    },
    {
      title: "Prostupy a detaily",
      body:
        "Utěsněné prostupy potrubí, konzoly, sokl a napójení na okna. Pravě tady se rozhoduje, jestli fasáda vydrží nebo začne plesnivět.",
    },
    {
      title: "Rekonstrukce a novostavby",
      body:
        "Kompletní výstavba a rekonstrukce rodinných domů a bytů, sádrokartony, podhledy a úprava interiérů. Zateplení navážeme na zbytek stavby.",
    },
  ];

  return (
    <main className="empl">
      <header className="empl-topbar">
        <a className="empl-wordmark" href="#uvod" aria-label="EMPL Liberec, úvod">
          <span className="empl-wordmark__mark" aria-hidden="true">
            <span className="empl-wordmark__layer" />
            <span className="empl-wordmark__layer" />
            <span className="empl-wordmark__layer" />
          </span>
          <span className="empl-wordmark__text">
            EMPL<span className="empl-wordmark__sub">Liberec</span>
          </span>
        </a>
        <a className="empl-phone" href="tel:+420485160732">
          +420 485 160 732
        </a>
      </header>

      <section className="empl-hero" id="uvod" aria-labelledby="hero-title">
        <div className="empl-hero__grid">
          <p className="empl-eyebrow">
            <span className="empl-eyebrow__num">1993</span>
            <span>zateplování • Liberec &amp; Královéhradecko</span>
          </p>

          <h1 className="empl-hero__title" id="hero-title">
            <span className="empl-hero__line empl-hero__line--thin">Pět vrstev</span>
            <span className="empl-hero__line empl-hero__line--fat">mezi zimou</span>
            <span className="empl-hero__line empl-hero__line--thin">a vaším</span>
            <span className="empl-hero__line empl-hero__line--fat">obývacím pokojem.</span>
          </h1>

          <p className="empl-hero__lead">
            Zateplení není jedna deska na zdi. Je to skladba, kterou děláme
            správně vrstvu po vrstvě — aby fasáda držela teplo, nepraskala a vydržela
            desítky let. Podívejte se, z čeho se skládá.
          </p>

          <div className="empl-hero__actions">
            <a className="empl-btn empl-btn--solid" href="tel:+420485160732">
              Zavolat na fasádu
            </a>
            <a className="empl-btn empl-btn--ghost" href="#skladba">
              Rozklít skladbu stěny
            </a>
          </div>
        </div>

        <aside className="empl-wall" aria-label="Řez zateplenou stěnou">
          <ul className="empl-wall__stack">
            {wallLayers.map((layer, i) => (
              <li
                key={layer.no}
                className="empl-wall__layer"
                style={{ "--i": i } as CSSProperties}
              >
                <span className="empl-wall__no">{layer.no}</span>
                <span className="empl-wall__name">{layer.name}</span>
              </li>
            ))}
          </ul>
          <div className="empl-wall__axis" aria-hidden="true">
            <span>venku &minus;15 &deg;C</span>
            <span>uvnitř +22 &deg;C</span>
          </div>
        </aside>
      </section>

      <section className="empl-layers" id="skladba" aria-labelledby="skladba-title">
        <h2 className="empl-section-title" id="skladba-title">
          Co děláme — vrstvu po vrstvě
        </h2>
        <p className="empl-section-lead">
          Každá vrstva má svou práci. Když jednu odflaknete, fasáda to prozradí
          za pár zim. My děláme všechny.
        </p>

        <ol className="empl-layerlist">
          {wallLayers.map((layer) => (
            <li className="empl-layerlist__item" key={layer.no}>
              <span className="empl-layerlist__no">{layer.no}</span>
              <div className="empl-layerlist__body">
                <h3 className="empl-layerlist__name">{layer.name}</h3>
                <p className="empl-layerlist__detail">{layer.detail}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="empl-services">
          {services.map((s) => (
            <article className="empl-service" key={s.title}>
              <h3 className="empl-service__title">{s.title}</h3>
              <p className="empl-service__body">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="empl-trust" id="o-nas" aria-labelledby="trust-title">
        <div className="empl-trust__intro">
          <h2 className="empl-section-title" id="trust-title">
            Stavební firma z Liberecké Pobočné
          </h2>
          <p className="empl-trust__lead">
            EMPL staví a zatepluje od roku 1993, většinou v Libereckém a
            Královéhradeckém kraji. Nejsme velká anonymní společnost — na vaší
            fasádě bude stát stálý tým řemeslníků, kteří spolu dělají roky.
          </p>
        </div>

        <ul className="empl-facts">
          <li className="empl-fact">
            <span className="empl-fact__label">Zkušenosti</span>
            <span className="empl-fact__value">30+ let na fasádách</span>
          </li>
          <li className="empl-fact">
            <span className="empl-fact__label">Působnost</span>
            <span className="empl-fact__value">Liberecko &amp; Královéhradecko</span>
          </li>
          <li className="empl-fact">
            <span className="empl-fact__label">Tým</span>
            <span className="empl-fact__value">Stálí, školení řemeslníci</span>
          </li>
          <li className="empl-fact">
            <span className="empl-fact__label">Materiál</span>
            <span className="empl-fact__value">Jen prověřené systémy</span>
          </li>
        </ul>

        <div className="empl-promises">
          <h3 className="empl-promises__title">Na čem si zakládáme</h3>
          <ul className="empl-promises__list">
            <li>Cenu řekneme na rovinu už na začátku — férová nabídka, žádné překvapení na konci.</li>
            <li>Dodržujeme technologické postupy i termíny, na kterých se domluvíme.</li>
            <li>Každou zakázku řešíme individuálně, podle stavu domu a vašich přání.</li>
            <li>Pracujeme šetrně — úklid a pořádek na stavbě bereme jako součást práce.</li>
          </ul>
        </div>

        <div className="empl-visit">
          <p className="empl-visit__where">
            Pobočná 239, 463 11 Liberec
          </p>
          <p className="empl-visit__how">
            Zavolejte na <a href="tel:+420485160732">485 160 732</a> nebo napište na{" "}
            <a href="mailto:liberec@empl.cz">liberec@empl.cz</a> — domluvíme si prohlídku fasády.
          </p>
        </div>
      </section>
    </main>
  );
}
