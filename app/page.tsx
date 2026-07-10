import type { CSSProperties } from "react";

export default function Page() {
  const znacky = [
    {
      jmeno: "alpha innotec",
      typ: "Tepelná čerpadla",
      puvod: "Německá výroba · ait-deutschland",
      popis:
        "Jsme dceřinou společností výrobce. Čerpadla vzduch–voda i země–voda dodáme, navrhneme a servisujeme přímo od zdroje — bez mezičlánků.",
    },
    {
      jmeno: "Samsung",
      typ: "Klimatizace a tepelná čerpadla",
      puvod: "Největší distributor v ČR",
      popis:
        "Nástěnné i kanálové jednotky, multisplity a čerpadla EHS. Tichý chod, chlazení v létě, přitápění v zimě — jeden systém pro celý dům.",
    },
    {
      jmeno: "RHOSS",
      typ: "Topení · větrání · klimatizace",
      puvod: "Novinka v nabídce",
      popis:
        "Řešení pro komerční objekty a větší stavby: chillery, vzduchotechnika a rekuperace tam, kde běžný split nestačí.",
    },
  ];

  const kroky = [
    {
      c: "01",
      t: "Zavolejte na infolinku",
      d: "800 888 101 zdarma. Řekneme, co se pro váš dům hodí, a domluvíme prohlídku.",
    },
    {
      c: "02",
      t: "Projekce na míru",
      d: "Naši technici spočítají tepelnou ztrátu a navrhnou zdroj přesně na vaši stavbu — novostavbu i rekonstrukci.",
    },
    {
      c: "03",
      t: "Montáž a spuštění",
      d: "Instalujeme, zaregulujeme a zaškolíme vás v ovládání. Zůstáváme na příjmu pro servis.",
    },
  ];

  return (
    <main className="page">
      <a className="skip" href="#obsah">
        Přeskočit na obsah
      </a>

      <header className="top">
        <a className="wordmark" href="#" aria-label="ait-česko, domů">
          <span className="wm-ait">ait</span>
          <span className="wm-dash" aria-hidden="true">—</span>
          <span className="wm-cesko">česko</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#znacky">Značky</a>
          <a href="#jak">Jak to probíhá</a>
          <a href="#duvera">O nás</a>
        </nav>
        <a className="nav-cta" href="tel:800888101">
          800 888 101
        </a>
      </header>

      <section className="hero" id="obsah">
        <div className="hero-copy">
          <p className="eyebrow">Topenářství · České Budějovice</p>
          <h1 className="hero-title">
            Teplo z venkovního
            <br />
            vzduchu do
            <span className="hl"> celého domu</span>.
          </h1>
          <p className="hero-lede">
            Tepelná čerpadla <strong>alpha innotec</strong> přímo od výrobce,
            klimatizace <strong>Samsung</strong> a vzduchotechnika{" "}
            <strong>RHOSS</strong>. Navrhneme, namontujeme a servisujeme —
            od Vrbenské ulice po celé jižní Čechy.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:800888101">
              Zavolat zdarma
            </a>
            <a className="btn btn-ghost" href="#znacky">
              Prohlédnout značky
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Výrobce</dt>
              <dd>Dceřiná firma ait-deutschland</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Vrbenská 2044/6, Č. Budějovice</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Venkovní jednotka tepelného čerpadla u rodinného domu"
            width={880}
            height={1040}
            loading="eager"
          />
          <figcaption>Zdroj tepla, který v zimě topí a v létě chladí.</figcaption>
        </figure>
      </section>

      <section className="znacky" id="znacky" aria-labelledby="znacky-nadpis">
        <div className="sec-head">
          <p className="eyebrow">Naše značky</p>
          <h2 id="znacky-nadpis">
            Tři systémy, jedno teplé řešení pro každý objekt
          </h2>
          <p className="sec-lede">
            Nemontujeme, co zrovna leží ve skladu. Ke každé stavbě volíme
            značku, která se k ní hodí — od malé novostavby po komerční halu.
          </p>
        </div>

        <ol className="znacky-list">
          {znacky.map((z, i) => (
            <li
              className="znacka"
              key={z.jmeno}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="znacka-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="znacka-jmeno">{z.jmeno}</h3>
              <p className="znacka-typ">{z.typ}</p>
              <p className="znacka-popis">{z.popis}</p>
              <p className="znacka-puvod">{z.puvod}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="jak" id="jak" aria-labelledby="jak-nadpis">
        <div className="jak-head">
          <p className="eyebrow">Jak to probíhá</p>
          <h2 id="jak-nadpis">Od telefonu ke spuštěnému čerpadlu</h2>
        </div>
        <ol className="kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.c}>
              <span className="krok-num">{k.c}</span>
              <div>
                <h3>{k.t}</h3>
                <p>{k.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <figure className="duvera-media">
          <img
            src="/section-1.webp"
            alt="Technik ait-česko při instalaci tepelného čerpadla"
            width={760}
            height={620}
            loading="lazy"
          />
        </figure>
        <div className="duvera-copy">
          <p className="eyebrow">Kdo jsme</p>
          <h2 id="duvera-nadpis">
            Zastoupení výrobce, ne přeprodejce
          </h2>
          <p>
            <strong>ait-česko s.r.o.</strong> je dceřinou společností{" "}
            německého výrobce tepelných čerpadel alpha innotec (ait-deutschland
            GmbH). Zároveň jsme největším distributorem klimatizací a tepelných
            čerpadel Samsung v Česku.
          </p>
          <p>
            To znamená odborné know-how přímo od zdroje, energeticky úsporná
            řešení a servis, na který se dovoláte i po letech provozu. Poradíme,
            naprojektujeme a technicky vás podržíme.
          </p>
          <div className="kontakt-karta">
            <img
              className="kontakt-img"
              src="/section-2.webp"
              alt="Sídlo firmy ait-česko v Českých Budějovicích"
              width={520}
              height={360}
              loading="lazy"
            />
            <div className="kontakt-udaje">
              <h3>Ozvěte se nám</h3>
              <p className="adresa">
                Vrbenská 2044/6
                <br />
                370 01 České Budějovice
              </p>
              <p className="linka">
                <a href="tel:800888101">Infolinka zdarma 800 888 101</a>
              </p>
              <p className="mail">
                <a href="mailto:info@ait-cesko.cz">info@ait-cesko.cz</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
