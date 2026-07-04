import type { CSSProperties } from "react";

export default function Page() {
  const trades = [
    {
      id: "voda",
      no: "H₂O",
      title: "Voda a kanalizace",
      lead: "Domovní přípojky, rozvody vody i odpadu.",
      body: "Projdeme s vámi, co potřebujete, a navrhneme praktické řešení za rozumné peníze. Vybereme armatury, materiál i zařizovací předměty, rozvody kompletně namontujeme a natlakujeme.",
      items: ["Vodovodní přípojky", "Rozvody vody v domě i bytě", "Kanalizace a odpady"],
    },
    {
      id: "topeni",
      no: "°C",
      title: "Topení a zdroje tepla",
      lead: "Od výběru kotle po poslední radiátor.",
      body: "Poradíme s nejvhodnějším zdrojem tepla a navrhneme varianty vytápění — rozvody i tělesa. Děláme nové instalace i rekonstrukce, opravy a montáže. Starý spotřebič odvezeme a zlikvidujeme.",
      items: ["Tepelná čerpadla", "Kotle na plyn i biomasu", "Solární systémy"],
    },
    {
      id: "plyn",
      no: "CH₄",
      title: "Plyn a přípojky",
      lead: "Kompletní plynofikace rodinných domů.",
      body: "Montáž i opravy plynovodních rozvodů včetně přípojek. Pracujeme s plastem, ocelí i mědí, svařujeme autogenem. Vše podle norem a s papíry, které při kolaudaci uznají.",
      items: ["Plynovodní přípojky", "Rozvody plynu", "Svářečské práce autogenem"],
    },
  ];

  const stats = [
    { value: "25", unit: "let", label: "na plzeňských stavbách" },
    { value: "360", unit: "zdrojů", label: "namontovaných topení" },
    { value: "700", unit: "zakázek", label: "dotažených do konce" },
  ];

  return (
    <main className="pj">
      <header className="pj-top">
        <a className="pj-mark" href="#uvod" aria-label="PJ Bohemia servis">
          <span className="pj-mark-pj">PJ</span>
          <span className="pj-mark-rest">Bohemia servis</span>
        </a>
        <nav className="pj-nav" aria-label="Hlavní">
          <a href="#prace">Co děláme</a>
          <a href="#firma">O firmě</a>
          <a className="pj-call" href="tel:+420602479528">Zavolat 602&nbsp;479&nbsp;528</a>
        </nav>
      </header>

      <section className="pj-hero" id="uvod">
        <div className="pj-hero-media">
          <img
            src="/hero.webp"
            alt="Instalatér při montáži topných rozvodů — měděné trubky a armatury"
            className="pj-hero-img"
            width={1600}
            height={1200}
          />
          <div className="pj-hero-veil" aria-hidden="true" />
        </div>

        <div className="pj-hero-copy">
          <p className="pj-eyebrow">Instalatéři z Plzně · Domažlická 200</p>
          <h1 className="pj-h1">
            Voda, topení a plyn.
            <span className="pj-h1-line">Uděláme to tak,</span>
            <span className="pj-h1-line">aby drželo.</span>
          </h1>
          <p className="pj-hero-lead">
            Pavel Jakubčík dělá instalace v Plzni a okolí přes dvacet pět let.
            Rodinné i bytové domy, komerční i výrobní objekty — od přípojky po
            poslední radiátor.
          </p>
          <div className="pj-hero-cta">
            <a className="pj-btn" href="tel:+420602479528">Zavolat na 602&nbsp;479&nbsp;528</a>
            <a className="pj-btn pj-btn-ghost" href="mailto:pjakubcik@seznam.cz">Napsat e-mail</a>
          </div>
        </div>

        <dl className="pj-gauge">
          {stats.map((s) => (
            <div className="pj-gauge-cell" key={s.label}>
              <dt className="pj-gauge-num">
                {s.value}
                <span className="pj-gauge-unit">{s.unit}</span>
              </dt>
              <dd className="pj-gauge-label">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pj-prace" id="prace">
        <div className="pj-sec-head">
          <p className="pj-eyebrow">Tři řemesla, jedna parta</p>
          <h2 className="pj-h2">Co u nás poznáte podle materiálu</h2>
          <p className="pj-sec-lead">
            Instalatérské, topenářské a plynařské práce zajistíme kompletně —
            včetně dodávky materiálu a papírů, které potřebujete ke kolaudaci.
          </p>
        </div>

        <ol className="pj-trades">
          {trades.map((t) => (
            <li className="pj-trade" id={t.id} key={t.id}>
              <span className="pj-trade-no" aria-hidden="true">{t.no}</span>
              <div className="pj-trade-body">
                <h3 className="pj-trade-title">{t.title}</h3>
                <p className="pj-trade-lead">{t.lead}</p>
                <p className="pj-trade-text">{t.body}</p>
                <ul className="pj-trade-list">
                  {t.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="pj-figure">
          <img
            src="/section-1.webp"
            alt="Nová kotelna s tepelným čerpadlem a rozvody topení"
            width={1400}
            height={900}
          />
          <figcaption>Kotelna s tepelným čerpadlem — od návrhu po zprovoznění.</figcaption>
        </figure>
      </section>

      <section className="pj-firma" id="firma">
        <div className="pj-firma-grid">
          <div className="pj-firma-copy">
            <p className="pj-eyebrow">Proč zrovna my</p>
            <h2 className="pj-h2 pj-h2-light">
              Firma z roku 2015. Řemeslo o pětadvacet let starší.
            </h2>
            <p className="pj-firma-text">
              PJ Bohemia servis vznikla jako pokračování „Instalatérství a
              topenářství Pavel Jakubčík Plzeň“, které stojí za spokojenými
              zákazníky už přes čtvrt století. Doporučení od nich je pro nás ta
              nejlepší reference — proto děláme svědomitě a poctivě.
            </p>
            <p className="pj-firma-text">
              Máme certifikáty na prodej a montáž solárních systémů, tepelných
              čerpadel i kotlů na plyn a biomasu. Co navrhneme, to i namontujeme
              a odzkoušíme.
            </p>

            <div className="pj-contact">
              <a className="pj-contact-row" href="tel:+420602479528">
                <span className="pj-contact-k">Pavel</span>
                <span className="pj-contact-v">602 479 528</span>
              </a>
              <a className="pj-contact-row" href="tel:+420601345099">
                <span className="pj-contact-k">Dispečink</span>
                <span className="pj-contact-v">601 345 099</span>
              </a>
              <a className="pj-contact-row" href="mailto:pjakubcik@seznam.cz">
                <span className="pj-contact-k">E-mail</span>
                <span className="pj-contact-v">pjakubcik@seznam.cz</span>
              </a>
              <div className="pj-contact-row pj-contact-static">
                <span className="pj-contact-k">Dílna</span>
                <span className="pj-contact-v">Domažlická 830/200, 318 00 Plzeň</span>
              </div>
            </div>
          </div>

          <figure className="pj-firma-figure">
            <img
              src="/section-2.webp"
              alt="Pavel Jakubčík při instalatérské práci na rozvodech"
              width={1200}
              height={1500}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
