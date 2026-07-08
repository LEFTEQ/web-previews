import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Návrh a projekce",
      popis:
        "Spočítám výměnu vzduchu, dimenze potrubí i tlakové ztráty na míru vašemu prostoru — od rodinného domu po dílnu nebo restauraci v Plzni.",
      detail: "Výpočet průtoku · projekt · revize",
    },
    {
      cislo: "02",
      nazev: "Montáž rozvodů",
      popis:
        "Sestavím a zavěsím SPIRO potrubí, tvarovky i koncové elementy. Čisté spoje, těsné přechody, žádné pískání ani rachot.",
      detail: "SPIRO · čtyřhran · flexo",
    },
    {
      cislo: "03",
      nazev: "Rekuperace",
      popis:
        "Řízené větrání se zpětným ziskem tepla. Čerstvý vzduch bez otevřených oken — a účet za topení, který dává smysl.",
      detail: "jednotka · rozvody · seřízení",
    },
    {
      cislo: "04",
      nazev: "Odsávání a servis",
      popis:
        "Odtah par z kuchyní, odsání prachu z dílen, pravidelné čištění a měření. Postarám se i o techniku, kterou instaloval někdo jiný.",
      detail: "kuchyně · dílny · údržba",
    },
  ];

  return (
    <main className="vt">
      <header className="vt-nav" aria-label="Hlavní">
        <a className="vt-mark" href="#top" aria-label="Bruml Petr — vzduchotechnika, úvod">
          <span className="vt-mark__flow" aria-hidden="true">
            <span></span><span></span><span></span>
          </span>
          <span className="vt-mark__name">
            BRUML<span className="vt-mark__thin">·vzduchotechnika</span>
          </span>
        </a>
        <nav className="vt-menu">
          <a href="#sluzby">Co dělám</a>
          <a href="#duvera">O mně</a>
          <a className="vt-menu__cta" href="#poptavka">Nezávazná poptávka</a>
        </nav>
      </header>

      <section id="top" className="vt-hero">
        <div className="vt-hero__media">
          <img
            src="/hero.webp"
            alt="Zavěšené vzduchotechnické potrubí SPIRO pod stropem technické místnosti"
            className="vt-hero__img"
          />
          <div className="vt-hero__scrim" aria-hidden="true" />
        </div>

        <div className="vt-hero__body">
          <p className="vt-hero__eyebrow">Vzduchotechnika · Plzeň a okolí</p>
          <h1 className="vt-hero__title">
            Vzduch, který<br />
            <span className="vt-hero__accent">projde celým domem</span><br />
            a nikde nezasyčí.
          </h1>
          <p className="vt-hero__lede">
            Navrhuju, montuju a servisuju vzduchotechniku a rekuperaci —
            od trasy potrubí přes zavěšení až po seřízení průtoku.
            Tiše, těsně a s revizí v ruce.
          </p>
          <div className="vt-hero__actions">
            <a className="vt-btn vt-btn--solid" href="#poptavka">Chci nacenit rozvody</a>
            <a className="vt-btn vt-btn--ghost" href="#sluzby">Prohlédnout práce</a>
          </div>

          <dl className="vt-airline" aria-label="Jak jde vzduch domem">
            <div className="vt-airline__node">
              <dt>Sání</dt>
              <dd>čerstvý venkovní vzduch</dd>
            </div>
            <span className="vt-airline__pipe" aria-hidden="true" />
            <div className="vt-airline__node">
              <dt>Rekuperace</dt>
              <dd>zpětný zisk tepla</dd>
            </div>
            <span className="vt-airline__pipe" aria-hidden="true" />
            <div className="vt-airline__node">
              <dt>Rozvod</dt>
              <dd>do každé místnosti</dd>
            </div>
          </dl>
        </div>
      </section>

      <section id="sluzby" className="vt-sluzby">
        <div className="vt-sec-head">
          <p className="vt-sec-head__eyebrow">Řemeslo</p>
          <h2 className="vt-sec-head__title">Čtyři věci, které dělám pořádně</h2>
          <p className="vt-sec-head__note">
            Od výkresu po funkční, seřízenou soustavu. Vyberte, co řešíte —
            napíšu vám k tomu konkrétní postup i odhad.
          </p>
        </div>

        <ol className="vt-grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="vt-card">
              <span className="vt-card__num" aria-hidden="true">{s.cislo}</span>
              <h3 className="vt-card__title">{s.nazev}</h3>
              <p className="vt-card__text">{s.popis}</p>
              <p className="vt-card__tag">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="vt-figure">
          <img
            src="/section-1.webp"
            alt="Detail smontovaných vzduchotechnických rozvodů s tvarovkami a přechody"
            className="vt-figure__img"
          />
          <figcaption className="vt-figure__cap">
            Trasa vedená tak, aby se dala servisovat — ne aby jen prošla stropem.
          </figcaption>
        </figure>
      </section>

      <section id="duvera" className="vt-duvera">
        <div className="vt-duvera__grid">
          <div className="vt-duvera__media">
            <img
              src="/section-2.webp"
              alt="Řemeslník při montáži vzduchotechnické jednotky"
              className="vt-duvera__img"
            />
          </div>

          <div className="vt-duvera__text">
            <p className="vt-sec-head__eyebrow">O mně</p>
            <h2 className="vt-duvera__title">
              Petr Bruml. Jeden člověk, který u vaší zakázky zůstane
              od návrhu až po revizi.
            </h2>
            <p className="vt-duvera__lede">
              Vzduchotechnice se v Plzni věnuju roky — dřív společně se
              zámečnickou dílnou, dnes naplno u potrubí a rekuperace.
              Nepředávám vás partě subdodavatelů. Kdo přijede zaměřit,
              ten to i namontuje a seřídí.
            </p>

            <ul className="vt-facts">
              <li>
                <span className="vt-facts__k">Kde pracuju</span>
                <span className="vt-facts__v">Plzeň · Plzeňský kraj</span>
              </li>
              <li>
                <span className="vt-facts__k">Co po mně zůstane</span>
                <span className="vt-facts__v">revize, protokol o průtoku, zaškolení</span>
              </li>
              <li>
                <span className="vt-facts__k">Na čem si zakládám</span>
                <span className="vt-facts__v">tichý chod a těsné spoje</span>
              </li>
            </ul>

            <blockquote className="vt-quote">
              „Vzduchotechnika je dobrá tehdy, když si jí nikdo nevšimne.
              Slyšet má být ticho, cítit čerstvý vzduch.“
              <cite>— Petr Bruml</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
