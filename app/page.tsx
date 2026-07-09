import type { CSSProperties } from "react";

export default function Page() {
  const measurements = [
    {
      code: "AT",
      name: "Akustický tomograf",
      reads: "Vnitřní dutiny a hniloby kmene",
      detail:
        "Externí diagnostika bez narušení kmene. Zvuk projde dřevem a ukáže, kde ubývá zdravé tkáně — dřív, než to pozná oko.",
    },
    {
      code: "TS",
      name: "Tahová zkouška",
      reads: "Odolnost proti vývratu a zlomu",
      detail:
        "Precizní měření síly, tlaku a náklonu. Zjistíme, kolik strom vydrží v prudkém větru, aniž bychom ho poškodili.",
    },
    {
      code: "VP",
      name: "Vizuální posudek",
      reads: "Zdraví, statika a provozní bezpečnost",
      detail:
        "Terénní hodnocení stromu v jeho okolí — koruna, kmen, kořenový náběh i cíl pádu. Základ každého znaleckého výstupu.",
    },
  ];

  const services = [
    {
      no: "01",
      title: "Hodnocení a diagnostika",
      body: "Přístrojové měření akustickým tomografem a tahovou zkouškou. Řekneme vám, který strom je bezpečný a který ne.",
    },
    {
      no: "02",
      title: "Ošetřování, řez a kácení",
      body: "Praktická péče o stromy podél komunikací, v parcích i v zahradách. Bezpečný řez i kácení v obtížných podmínkách.",
    },
    {
      no: "03",
      title: "Znalecké posudky",
      body: "Odborné a znalecké posudky stromů z naší znalecké kanceláře. Podklad pro úřady, správce zeleně i majitele pozemků.",
    },
    {
      no: "04",
      title: "Technický dozor a konzultace",
      body: "Odborný dohled nad zásahy do dřevin a poradenství při plánování výsadby i údržby v zástavbě.",
    },
    {
      no: "05",
      title: "Školení a vzdělávání",
      body: "Oborové kurzy pro techniky arboristy. Předáváme dál, co jsme se za roky v korunách naučili.",
    },
  ];

  return (
    <main className="arb">
      <header className="arb-nav">
        <a className="arb-brand" href="#uvod" aria-label="Arbonet — domů">
          <span className="arb-brand__rings" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span className="arb-brand__word">
            Arbonet<span className="arb-brand__dot">.</span>
          </span>
        </a>
        <nav className="arb-nav__links" aria-label="Hlavní navigace">
          <a href="#mereni">Diagnostika</a>
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O firmě</a>
        </nav>
        <a className="arb-nav__call" href="tel:+420000000000">Zavolat arboristu</a>
      </header>

      <section className="arb-hero" id="uvod">
        <div className="arb-hero__media">
          <img
            src="/hero.webp"
            alt="Arborista ve výškách provádí péči o korunu vzrostlého stromu"
            width={1600}
            height={1100}
          />
          <span className="arb-hero__scrim" aria-hidden="true" />
        </div>

        <div className="arb-hero__panel">
          <p className="arb-hero__eyebrow">
            Arboristika &nbsp;·&nbsp; Praha, Turnov, Nymburk, Mladá Boleslav
          </p>
          <h1 className="arb-hero__title">
            Vidíme<br />
            <em>dovnitř</em> stromu,<br />
            aniž bychom<br />
            do něj řízli.
          </h1>
          <p className="arb-hero__lead">
            Znalecká kancelář pro péči o stromy. Akustickým tomografem a tahovou
            zkouškou zjistíme, jestli strom u vaší cesty nebo zahrady vydrží
            další vichřici — dřív, než napíšeme posudek.
          </p>
          <div className="arb-hero__actions">
            <a className="arb-btn arb-btn--solid" href="tel:+420000000000">
              Objednat posudek
            </a>
            <a className="arb-btn arb-btn--ghost" href="#mereni">
              Jak měříme
            </a>
          </div>
        </div>

        <p className="arb-hero__caption" aria-hidden="true">
          <span className="arb-hero__caption-code">AT · řez A–A′</span>
          Tomogram kmene — červená značí ztrátu zdravé tkáně
        </p>
      </section>

      <section className="arb-mereni" id="mereni" aria-labelledby="mereni-h">
        <div className="arb-mereni__intro">
          <p className="arb-eyebrow">Tři přístroje, jeden výrok</p>
          <h2 id="mereni-h">
            Co změříme, než řekneme, že strom může zůstat stát
          </h2>
          <p className="arb-mereni__note">
            Nehádáme podle vzhledu. Každý znalecký posudek stavíme na terénním
            měření — proto mu úřady, správci zeleně i pojišťovny věří.
          </p>
        </div>

        <ol className="arb-mereni__grid">
          {measurements.map((m) => (
            <li className="arb-card" key={m.code}>
              <span className="arb-card__code" aria-hidden="true">
                {m.code}
              </span>
              <h3 className="arb-card__name">{m.name}</h3>
              <p className="arb-card__reads">{m.reads}</p>
              <p className="arb-card__detail">{m.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="arb-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="arb-sluzby__head">
          <p className="arb-eyebrow arb-eyebrow--light">Co pro vaše stromy uděláme</p>
          <h2 id="sluzby-h">Od diagnostiky přes řez až po posudek</h2>
        </div>

        <div className="arb-sluzby__body">
          <ol className="arb-list">
            {services.map((s) => (
              <li className="arb-list__row" key={s.no}>
                <span className="arb-list__no" aria-hidden="true">
                  {s.no}
                </span>
                <div className="arb-list__text">
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="arb-sluzby__figure">
            <img
              src="/section-1.webp"
              alt="Detail práce arboristy Arbonet při odborné péči o strom"
              width={900}
              height={1100}
            />
            <figcaption>
              Práce v koruně vzrostlého stromu podél pražské komunikace
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="arb-onas" id="o-nas" aria-labelledby="onas-h">
        <div className="arb-onas__grid">
          <div className="arb-onas__lead">
            <p className="arb-eyebrow">O firmě</p>
            <h2 id="onas-h">
              Staráme se o stromy, které rostou tam, kde žijí lidé.
            </h2>
            <p>
              Arbonet se zabývá komplexní péčí o stromy a dřeviny podél
              komunikací, v parcích i v zahradách u obytných domů. Hlídáme, aby
              stromy v průmyslové, veřejné i soukromé zástavbě zůstaly bezpečné
              pro lidi kolem i pro běžný provoz.
            </p>
            <p>
              Specializujeme se na znalecké posudky, přístrojovou diagnostiku,
              praktickou péči i oborové vzdělávání. Působíme zejména na
              Praze, Turnovsku, Nymbursku a Mladoboleslavsku.
            </p>
          </div>

          <ul className="arb-onas__facts">
            <li>
              <span className="arb-onas__k">Znalecká kancelář</span>
              <span className="arb-onas__v">
                Podle zákona 254/2019 Sb. od 1. 1. 2021
              </span>
            </li>
            <li>
              <span className="arb-onas__k">Autorizace MZe ČR</span>
              <span className="arb-onas__v">
                Technik arborista a Samostatný technik arborista v Národní
                soustavě kvalifikací
              </span>
            </li>
            <li>
              <span className="arb-onas__k">Region působení</span>
              <span className="arb-onas__v">
                Praha · Turnov · Nymburk · Mladá Boleslav
              </span>
            </li>
          </ul>
        </div>

        <p className="arb-onas__pull">
          „Chránit stromy znamená především o ně dobře pečovat.“
        </p>
      </section>
    </main>
  );
}
