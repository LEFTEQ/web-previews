import type { ReactNode } from "react";

export default function Page(): ReactNode {
  const okna = [
    {
      cislo: "01",
      nazev: "Špaletová okna",
      popis: "Kopie a repliky původních historických oken, které projdou u památkářů. Vzhled zůstane, teplo a ticho přibude.",
      body: ["Schvalováno památkovým úřadem", "Zvuková těsnost do rušné ulice", "Přesná replika stávajícího profilu"],
    },
    {
      cislo: "02",
      nazev: "Dřevěná eurookna",
      popis: "Pro ty, kdo mají rádi vůni a kresbu dřeva. Lepený hranol, který se nekroutí a drží rozměr.",
      body: ["Tvarová a rozměrová stálost", "Výborná tepelná izolace", "Smrk, borovice, dub i meranti"],
    },
    {
      cislo: "03",
      nazev: "Dřevohliníková okna",
      popis: "Dřevo uvnitř, hliník do počasí. Interiér voní přírodou, fasáda odolá dešti i slunci na desítky let.",
      body: ["Bezúdržbová venkovní strana", "Špičkové izolační parametry", "Moderní, čistá linka"],
    },
    {
      cislo: "04",
      nazev: "Hliníková okna",
      popis: "Velké prosklené plochy, subtilní rámy, minimum údržby. Volba pro novostavby i kanceláře.",
      body: ["Vysoká odolnost a životnost", "Elegantní úzký profil", "Prakticky bez údržby"],
    },
  ];

  const kroky = [
    { k: "01", t: "Zaměření na místě", d: "Přijedeme k vám, změříme každý otvor a poradíme materiál k domu i interiéru." },
    { k: "02", t: "Návrh a smlouva", d: "Dostanete cenu na míru, u památek i výkresovou dokumentaci pro úřad." },
    { k: "03", t: "Výroba", d: "Okna vyrobíme z lepeného hranolu s prvotřídním kováním a zasklením." },
    { k: "04", t: "Montáž a dozor", d: "Osadíme, zkontrolujeme a předáme. Celou zakázku hlídáme od začátku do konce." },
  ];

  return (
    <main className="oc">
      <header className="oc-bar">
        <a className="oc-logo" href="#" aria-label="CREATIVE okna–dveře, domů">
          <span className="oc-logo-mark">◫</span>
          <span className="oc-logo-text">
            CREATIVE<span className="oc-logo-sub">okna &amp; dveře · Praha</span>
          </span>
        </a>
        <a className="oc-phone" href="tel:+420777874899">+420 777 874 899</a>
      </header>

      <section className="oc-hero">
        <img
          className="oc-hero-img"
          src="/hero.webp"
          alt="Detail dřevěného okna osazeného v pražském činžovním domě"
        />
        <div className="oc-hero-scrim" aria-hidden="true" />
        <div className="oc-hero-inner">
          <p className="oc-eyebrow">Výroba a montáž oken · Praha 8 – Libeň · od roku 2006</p>
          <h1 className="oc-hero-title">
            Rám, který drží<br />
            <span className="oc-hero-em">osmnáct pater příběhů.</span>
          </h1>
          <p className="oc-hero-lead">
            Špaletová, dřevěná i hliníková okna na míru pražským domům — od památkově
            chráněných fasád po novostavby. Zaměříme, vyrobíme, osadíme a dozorujeme celou zakázku.
          </p>
          <div className="oc-hero-cta">
            <a className="oc-btn" href="tel:+420777874899">Zavolat a domluvit zaměření</a>
            <a className="oc-btn oc-btn-ghost" href="#okna">Prohlédnout typy oken</a>
          </div>
          <dl className="oc-hero-facts">
            <div><dt>18+ let</dt><dd>praxe v oboru</dd></div>
            <div><dt>4,8 ★</dt><dd>hodnocení na Google</dd></div>
            <div><dt>Libeň</dt><dd>vlastní showroom</dd></div>
          </dl>
        </div>
      </section>

      <section className="oc-okna" id="okna" aria-labelledby="okna-h">
        <div className="oc-sec-head">
          <p className="oc-eyebrow oc-eyebrow-dark">Co u nás vyberete</p>
          <h2 id="okna-h" className="oc-sec-title">Čtyři materiály, jeden standard práce.</h2>
          <p className="oc-sec-lead">
            Poradíme materiál podle domu i rozpočtu. U všech typů platí totéž: vlastní zaměření,
            výroba z certifikovaného hranolu a montáž s dozorem.
          </p>
        </div>
        <ul className="oc-grid">
          {okna.map((o) => (
            <li className="oc-card" key={o.cislo}>
              <span className="oc-card-num">{o.cislo}</span>
              <h3 className="oc-card-title">{o.nazev}</h3>
              <p className="oc-card-desc">{o.popis}</p>
              <ul className="oc-card-list">
                {o.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <div className="oc-pamatka">
          <img
            className="oc-pamatka-img"
            src="/section-1.webp"
            alt="Výkresová dokumentace špaletového okna pro památkový úřad"
          />
          <div className="oc-pamatka-text">
            <p className="oc-eyebrow oc-eyebrow-dark">Máte dům pod památkovou ochranou?</p>
            <h3 className="oc-pamatka-title">Vyřídíme papíry za vás.</h3>
            <p>
              Zpracujeme projekt pro památkáře: výkresy stávajícího i navrhovaného stavu,
              odborný posudek oken včetně barevnosti a fotodokumentace, žádost o závazné
              stanovisko. Komunikaci s úřady vedeme sami — vy dostanete povolení k výměně.
            </p>
            <a className="oc-btn oc-btn-dark" href="tel:+420777874899">Objednat dokumentaci</a>
          </div>
        </div>
      </section>

      <section className="oc-onas" aria-labelledby="onas-h">
        <div className="oc-onas-media">
          <img
            className="oc-onas-img"
            src="/section-2.webp"
            alt="Osazování nového okna do pražského činžovního domu"
          />
        </div>
        <div className="oc-onas-body">
          <p className="oc-eyebrow">Jak spolupráce vypadá</p>
          <h2 id="onas-h" className="oc-onas-title">
            Jedna firma od zaměření po předání klíče.
          </h2>
          <p className="oc-onas-lead">
            Jsme česká rodinná firma s více než 18 lety praxe. Zakázku nepředáváme dál —
            dozorujeme ji celou, od prvního metru po finální předání.
          </p>
          <ol className="oc-kroky">
            {kroky.map((s) => (
              <li className="oc-krok" key={s.k}>
                <span className="oc-krok-num">{s.k}</span>
                <div>
                  <h3 className="oc-krok-title">{s.t}</h3>
                  <p className="oc-krok-desc">{s.d}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="oc-owner">
            <div className="oc-owner-name">
              <strong>Ing. Josef Liška</strong>
              <span>majitel — rád zodpovím vaše dotazy</span>
            </div>
            <div className="oc-owner-links">
              <a href="tel:+420777874899">+420 777 874 899</a>
              <a href="mailto:info@oknacreative.cz">info@oknacreative.cz</a>
            </div>
          </div>
          <p className="oc-showroom">
            Showroom: Sokolovská 551/131, 180 00 Praha 8 – Libeň · Po–Pá 8:00–16:30
          </p>
        </div>
      </section>
    </main>
  );
}
