import type { CSSProperties } from "react";

export default function Page() {
  const cinnosti = [
    {
      id: "01",
      nazev: "Zakázkové truhlářství",
      popis:
        "Kuchyně, vestavěné skříně, stoly a police na míru vašeho bytu. Přijedu zaměřit, poradím s materiálem i kováním a vyrobím kus, který sedne do prostoru na milimetr.",
    },
    {
      id: "02",
      nazev: "Tesařství",
      popis:
        "Krovy, přístřešky, pergoly a dřevěné konstrukce. Poctivé spoje a dřevo ošetřené tak, aby vydrželo liberecké počasí i za dvacet let.",
    },
    {
      id: "03",
      nazev: "Půdní vestavby",
      popis:
        "Z nevyužité půdy uděláme obytný pokoj — od nosné konstrukce přes zateplení až po hotový povrch. Jeden člověk, jedna zodpovědnost.",
    },
    {
      id: "04",
      nazev: "Sádrokartonové systémy",
      popis:
        "Příčky, podhledy a zákoutí, které srovnají starý byt do roviny. Rovné hrany, čisté spáry, připraveno k malování.",
    },
    {
      id: "05",
      nazev: "Pokládka podlah",
      popis:
        "Dřevěné podlahy, plovoučky i palubky. Podklad srovnám, prkna doladím k dřevu nábytku, aby to v pokoji ladilo dohromady.",
    },
    {
      id: "06",
      nazev: "Včelařství",
      popis:
        "Ano, i med. Vlastní úly kousek za Libercem — vosk z nich používám na finální ošetření některých kusů nábytku. Řemeslo a příroda k sobě patří.",
    },
  ];

  return (
    <main className="zw">
      <header className="zw-nav" aria-label="Hlavní">
        <a className="zw-mark" href="#uvod" aria-label="Zástěra, truhlářství Liberec — úvod">
          <span className="zw-mark-name">Zástěra</span>
          <span className="zw-mark-sub">truhlářství · Liberec</span>
        </a>
        <nav className="zw-links">
          <a href="#cinnosti">Co dělám</a>
          <a href="#ofirme">O dílně</a>
          <a className="zw-nav-call" href="tel:+420602000000">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="zw-hero" id="uvod">
        <div className="zw-hero-media">
          <img
            src="/hero.webp"
            alt="Ruční hoblování dřevěného dílce v truhlářské dílně Miloše Zástěry v Liberci"
            className="zw-hero-img"
          />
        </div>
        <div className="zw-hero-copy">
          <p className="zw-eyebrow">Dílna Miloše Zástěry · od roku 1996</p>
          <h1 className="zw-hero-title">
            <span className="zw-grain">Řez.</span>
            <span className="zw-grain">Spoj.</span>
            <span className="zw-grain">Nábytek,</span>
            <span className="zw-hero-line">který přežije vaše děti.</span>
          </h1>
          <p className="zw-hero-lead">
            Zakázkové truhlářství v Liberci. Přijdu k vám domů, zaměřím prostor a
            vyrobím kuchyň, skříň nebo schody na míru — bez zprostředkovatelů, s
            dřevem, které si sami vyberete.
          </p>
          <div className="zw-hero-cta">
            <a className="zw-btn zw-btn-solid" href="tel:+420602000000">
              Zavolat na dílnu
            </a>
            <a className="zw-btn zw-btn-ghost" href="#cinnosti">
              Prohlédnout práce
            </a>
          </div>
        </div>
        <p className="zw-motto" aria-hidden="false">
          „Neříkej, že to nejde, ukaž, že to zvládneš.“
        </p>
      </section>

      <section className="zw-services" id="cinnosti" aria-labelledby="cinnosti-nadpis">
        <div className="zw-section-head">
          <p className="zw-eyebrow">Co u mě objednáte</p>
          <h2 id="cinnosti-nadpis" className="zw-section-title">
            Šest řemesel, jedny ruce
          </h2>
          <p className="zw-section-note">
            Všechno vede jeden truhlář. Žádné předávání zakázky mezi firmami —
            mluvíte pořád se mnou, od prvního náčrtu po poslední šroub.
          </p>
        </div>

        <ol className="zw-list">
          {cinnosti.map((c) => (
            <li className="zw-item" key={c.id}>
              <span className="zw-item-num" aria-hidden="true">
                {c.id}
              </span>
              <div className="zw-item-body">
                <h3 className="zw-item-name">{c.nazev}</h3>
                <p className="zw-item-text">{c.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="zw-services-figure">
          <img
            src="/section-1.webp"
            alt="Detail zakázkové kuchyňské linky z masivního dřeva vyrobené v dílně Zástěra"
            className="zw-figure-img"
          />
          <figcaption className="zw-figure-cap">
            Kuchyň z dubového masivu — Vratislavice nad Nisou, 2023
          </figcaption>
        </figure>
      </section>

      <section className="zw-about" id="ofirme" aria-labelledby="ofirme-nadpis">
        <figure className="zw-about-figure">
          <img
            src="/section-2.webp"
            alt="Miloš Zástěra ve své truhlářské dílně mezi nářadím a rozpracovaným nábytkem"
            className="zw-figure-img"
          />
        </figure>
        <div className="zw-about-copy">
          <p className="zw-eyebrow">O dílně</p>
          <h2 id="ofirme-nadpis" className="zw-section-title">
            Truhlář, ne prostředník
          </h2>
          <p className="zw-about-text">
            Jmenuji se Miloš Zástěra a truhlařím v Liberci a okolí. Firmu jsem
            postavil na jedné věci — na osobním vztahu se zákazníkem. Sednu si s
            vámi, poslechnu, co potřebujete, a společně dojdeme k řešení, které
            se vám vejde do prostoru i do rozpočtu.
          </p>
          <p className="zw-about-text">
            Když jednám přímo s vámi, nevznikají žádné šumy o tom, jak má věc
            vypadat. A když se v průběhu něco změní, zareaguju hned. Snažím se,
            aby honba za ziskem nikdy nešla přes kvalitu — dřevo si to pamatuje
            dlouho.
          </p>

          <blockquote className="zw-quote">
            <p>Ať děláme cokoli, pořád jsme jen nástroje.</p>
            <cite>Miloš Zástěra</cite>
          </blockquote>

          <dl className="zw-facts">
            <div className="zw-fact">
              <dt>Kde pracuji</dt>
              <dd>Liberec a blízké okolí</dd>
            </div>
            <div className="zw-fact">
              <dt>Jak to vedu</dt>
              <dd>Přímo, bez zprostředkovatelů</dd>
            </div>
            <div className="zw-fact">
              <dt>Vyučen</dt>
              <dd>SOU nábytkářské, Liberec</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
