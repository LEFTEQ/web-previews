import type { ReactNode } from "react";

export default function Page() {
  const sluzby: { kod: string; nazev: string; popis: string; body: string[] }[] = [
    {
      kod: "DIAG",
      nazev: "Diagnostika a oprava PC a notebooků",
      popis:
        "Nestartuje, zamrzá, hučí větrák nebo se přehřívá? Změříme, kde je chyba, a řekneme cenu dřív, než se pustíme do práce.",
      body: [
        "výměna disku za SSD a zrychlejší start",
        "čištění, výměna teplovodivé pasty, tichý chod",
        "oprava napájení a konektorů notebooku",
      ],
    },
    {
      kod: "DATA",
      nazev: "Záchrana dat a zálohování",
      popis:
        "Spadlý disk nebo smazané složky. Data se snažíme dostat zpět a nastavíme zálohu, aby se to už neopakovalo.",
      body: [
        "obnova z poškozených disků a SSD",
        "automatické zálohy do NAS i do cloudu",
        "přenos dat do nového počítače beze ztrát",
      ],
    },
    {
      kod: "NET",
      nazev: "Sítě, servery a správa firem",
      popis:
        "Navrhneme a zapojíme síť, postavíme server a hlídáme, aby firemní technika běžela. Vy řešíte byznys, my ajťáka.",
      body: [
        "návrh a instalace počítačové sítě",
        "servery, sdílené složky, tiskárny",
        "paušální správa a vzdálená pomoc",
      ],
    },
    {
      kod: "SOS",
      nazev: "Rychlý servis a odvirování",
      popis:
        "Vylétlo okno s výhrůžkou, počítač se plazí. Odstraníme viry, přeinstalujeme systém a vrátíme stroj do formy.",
      body: [
        "odvirování a vyčištění systému",
        "reinstalace Windows včetně programů",
        "servis na počkání i výjezd k vám",
      ],
    },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#" aria-label="Top Digital Group, opravy počítačů Ostrava">
          <span className="brand-mark" aria-hidden="true">
            <span className="brand-blink" />
          </span>
          <span className="brand-word">
            Top<span className="brand-dim">Digital</span>Group
          </span>
        </a>
        <nav className="top-nav" aria-label="Hlavní">
          <a href="#sluzby">Servis</a>
          <a href="#duvera">O nás</a>
          <a className="top-call" href="tel:+420596000000">596 000 000</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero-text">
          <p className="eyebrow">
            <span className="led" aria-hidden="true" /> Servisní dílna · Ostrava-Poruba
          </p>
          <h1 id="hero-nadpis">
            Zasloužíte si <span className="hl">lepšího ajťáka</span> — a rychlejší počítač.
          </h1>
          <p className="lead">
            Opravíme PC i notebooky, zachráníme data a postaráme se o techniku vaší firmy.
            Nejdřív diagnostika a cena, pak teprve šroubovák.
          </p>
          <div className="hero-cta">
            <a className="btn" href="tel:+420596000000">Zavolat do dílny</a>
            <a className="btn ghost" href="#sluzby">Co opravujeme</a>
          </div>
          <dl className="hero-stats">
            <div>
              <dt>Diagnostika</dt>
              <dd>zdarma</dd>
            </div>
            <div>
              <dt>Běžná oprava</dt>
              <dd>do 48 h</dd>
            </div>
            <div>
              <dt>Nefunguje?</dt>
              <dd>neplatíte</dd>
            </div>
          </dl>
        </div>
        <figure className="hero-media">
          <img
            src="/hero.webp"
            alt="Technik opravuje otevřený notebook na servisním stole"
            width={880}
            height={720}
          />
          <figcaption className="ticket" aria-hidden="true">
            <span className="ticket-row">
              <span>ZAKÁZKA</span>
              <span className="mono">#4821</span>
            </span>
            <span className="ticket-row big">Notebook nestartuje</span>
            <span className="ticket-status">
              <span className="dot" /> Hotovo — vyměněn SSD
            </span>
          </figcaption>
        </figure>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sec-head">
          <p className="eyebrow">
            <span className="led" aria-hidden="true" /> Ceník na míru zakázce
          </p>
          <h2 id="sluzby-nadpis">Co u nás na stole nejčastěji leží</h2>
          <p className="sec-sub">
            Ať přinesete domácí počítač, nebo řešíte techniku pro celou firmu — přiřadíme
            zakázce štítek a víte, na čem jste.
          </p>
        </div>

        <div className="cards">
          {sluzby.map((s) => (
            <article className="card" key={s.kod}>
              <span className="card-tag mono">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <ul>
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <figure className="strip">
          <img
            src="/section-1.webp"
            alt="Detail servisního stolu s nářadím, disky a rozebranou technikou"
            width={1400}
            height={620}
          />
        </figure>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera-grid">
          <figure className="duvera-media">
            <img
              src="/section-2.webp"
              alt="Jednatel firmy Top Digital Group u pracovního stolu s technikou"
              width={760}
              height={760}
            />
          </figure>
          <div className="duvera-text">
            <p className="eyebrow">
              <span className="led" aria-hidden="true" /> Ostravská dílna od roku 2011
            </p>
            <h2 id="duvera-nadpis">Malá dílna, na kterou se dá spolehnout</h2>
            <p>
              Nejsme anonymní řetězec. Techniku si u nás převezme člověk, který ji taky opraví
              a zavolá vám, když najde něco navíc. Záruční i pozáruční servis vedeme na všechna
              svěřená zařízení.
            </p>
            <blockquote className="quote">
              „Nebojíme se práce a rádi čelíme novým výzvám. Vy se věnujte svému podnikání —
              a starost o počítače nechte na nás.“
              <cite>
                <strong>Martin Hulva</strong>
                <span>jednatel Top Digital Group s.r.o.</span>
              </cite>
            </blockquote>
            <ul className="badges">
              <li>Certifikovaní technici</li>
              <li>Výjezd po Ostravě i okolí</li>
              <li>Faktura i pro firmy</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  ) as ReactNode;
}
