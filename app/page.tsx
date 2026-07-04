import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Klimatik — topenářství a projekce v Českých Budějovicích",
  description:
    "Klimatik, spol. s r.o. — návrh, dodávka a montáž topení v Českých Budějovicích. Tepelná čerpadla, plynové kotle, podlahové vytápění i regulace. Vlastní projekce i montážní tým.",
  openGraph: {
    title: "Klimatik — topenářství České Budějovice",
    description:
      "Topení navrhneme, dodáme i namontujeme. Tepelná čerpadla, kotle, podlahové vytápění. Vltavské nábřeží, České Budějovice.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Kotelna od Klimatiku" }],
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Tepelná čerpadla",
    popis:
      "Vzduch–voda i země–voda. Spočítáme tepelnou ztrátu domu, navrhneme výkon a zapojíme čerpadlo tak, aby topilo levně i v budějovických mrazech.",
  },
  {
    kod: "02",
    nazev: "Plynové kotle",
    popis:
      "Kondenzační kotle s montáží, revizí i připojením na komín. Vyměníme starý kotel za nový za jeden den a odneseme ho k likvidaci.",
  },
  {
    kod: "03",
    nazev: "Podlahové vytápění",
    popis:
      "Rozvody v podlaze pro novostavby i rekonstrukce. Tichá, rovnoměrná teplota bez radiátorů pod okny.",
  },
  {
    kod: "04",
    nazev: "Regulace a rozvody",
    popis:
      "Ekvitermní regulace, oběhová čerpadla, rozdělovače. Topení, které se řídí počasím a vy o něm nevíte.",
  },
];

const kroky = [
  {
    faze: "Projekce",
    text:
      "Přijedeme, změříme, spočítáme tepelnou ztrátu a nakreslíme projekt. Dostanete rozpočet, ve kterém se vyznáte — položku po položce.",
  },
  {
    faze: "Dodávka a montáž",
    text:
      "Naše vlastní montážní oddělení všechno přiveze a zapojí. Nesídlíme přes tři subdodavatele — kdo měřil, ten i montuje.",
  },
  {
    faze: "Spuštění a servis",
    text:
      "Systém napustíme, odvzdušníme, nastavíme regulaci a předáme s revizí. Pak zůstáváme na telefonu, kdyby bylo potřeba.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Klimatik, spol. s r.o.">
          <span className="wordmark__k">Klima</span>
          <span className="wordmark__tik">tik</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <span className="topbar__loc">Topenářství · České Budějovice</span>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Kotelna s rozvody topení namontovaná firmou Klimatik"
            className="hero__img"
            width={1600}
            height={1200}
          />
          <div className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="hero__body">
          <p className="eyebrow">Vltavské nábřeží 526/7 · od projektu po první zatopení</p>
          <h1 className="hero__title">
            Topení, které<br />
            <span className="hero__accent">drží teplotu</span><br />
            i&nbsp;rozpočet.
          </h1>
          <p className="hero__lede">
            Klimatik navrhne, dodá a namontuje vytápění pro domy i provozy na
            Českobudějovicku. Tepelná čerpadla, kotle, podlahové vytápění — vlastní
            projekce i montážní parta pod jednou střechou.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420387000000">
              Zavolat topenáři
            </a>
            <a className="btn btn--ghost" href="#sluzby">
              Co umíme namontovat
            </a>
          </div>
        </div>

        <dl className="gauge" aria-label="Provozní teploty">
          <div className="gauge__item">
            <dt>Přívod</dt>
            <dd>55&nbsp;°C</dd>
          </div>
          <div className="gauge__item">
            <dt>Zpátečka</dt>
            <dd>45&nbsp;°C</dd>
          </div>
          <div className="gauge__item gauge__item--live">
            <dt>V domě</dt>
            <dd>21&nbsp;°C</dd>
          </div>
        </dl>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Naše činnost</p>
          <h2 id="sluzby-h" className="section-title">
            Od tepelné ztráty<br /> k teplé podlaze
          </h2>
          <p className="section-sub">
            Neprodáváme krabice. Navrhneme celý topný systém tak, aby seděl na váš
            dům, vaše zvyky a to, kolik chcete platit za zimu.
          </p>
        </div>

        <ul className="cards">
          {sluzby.map((s) => (
            <li className="card" key={s.kod}>
              <span className="card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="card__nazev">{s.nazev}</h3>
              <p className="card__popis">{s.popis}</p>
            </li>
          ))}
        </ul>

        <figure className="figband">
          <img
            src="/section-1.webp"
            alt="Montáž rozvodů topení a tepelného čerpadla technikem Klimatiku"
            className="figband__img"
            width={1600}
            height={900}
          />
          <figcaption className="figband__cap">
            Vlastní montážní oddělení — kdo topení navrhne, ten ho i zapojí.
          </figcaption>
        </figure>
      </section>

      <section className="onas" aria-labelledby="onas-h">
        <div className="onas__grid">
          <div className="onas__text">
            <p className="eyebrow eyebrow--dark">O nás</p>
            <h2 id="onas-h" className="section-title">
              Dvě oddělení,<br /> jedna zodpovědnost
            </h2>
            <p className="section-sub">
              Klimatik má vlastní <strong>oddělení projekce</strong> i
              <strong> dodavatelské a montážní oddělení</strong>. Díky tomu nikdy
              neuslyšíte „to dělal někdo jiný“. Sídlíme na Vltavském nábřeží
              v&nbsp;Českých Budějovicích a topíme po celém kraji.
            </p>

            <ol className="steps">
              {kroky.map((k, i) => (
                <li className="step" key={k.faze}>
                  <span className="step__num" aria-hidden="true">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="step__faze">{k.faze}</h3>
                    <p className="step__text">{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="onas__aside">
            <figure className="portrait">
              <img
                src="/section-2.webp"
                alt="Technik Klimatiku u nainstalovaného kotle"
                className="portrait__img"
                width={900}
                height={1100}
              />
            </figure>
            <div className="factbox">
              <p className="factbox__q">
                „Přijeli, kdy slíbili, a kotel běžel do večera.“
              </p>
              <p className="factbox__a">— zákazník, rekonstrukce v Rožnově, Č. Budějovice</p>
              <dl className="factbox__meta">
                <div>
                  <dt>Kde</dt>
                  <dd>Vltavské nábřeží 526/7</dd>
                </div>
                <div>
                  <dt>Působíme</dt>
                  <dd>Českobudějovicko a okolí</dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
