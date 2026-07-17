import { HeroTitle } from "./motion";

const menu = [
  {
    name: "Kebab",
    desc: "Maso rovnou z rožně. Vyber si pitu, tortilu nebo box, k tomu zeleninu a omáčku podle sebe.",
    tags: ["v pitě", "v tortile", "v boxu"],
  },
  {
    name: "Pizza",
    desc: "Vlastní těsto, vlastní rajčatový základ. Od Margherity po Hawaii — ananas na pizze u nás nikdo neodsuzuje.",
    tags: ["vlastní těsto", "Quattro Formaggi", "Hawaii"],
  },
  {
    name: "Burgery & sýry",
    desc: "Šťavnaté hamburgery a smažené sýry za cenu, u které se nemračíš. Ideální parťák k hranolkám.",
    tags: ["hovězí", "sýrové", "s hranolky"],
  },
];

const duvery = [
  {
    h: "Čerstvé suroviny každý den",
    p: "Maso, zeleninu i omáčky chystáme přímo na místě — ne den dopředu.",
  },
  {
    h: "Vlastní těsto i pomodoro",
    p: "Základ na pizzu si děláme sami. Od těsta po rajčatový základ.",
  },
  {
    h: "Přes 30 poboček v ČR a SR",
    p: "Kousek dobrého jídla do ruky najdeš skoro všude cestou.",
  },
  {
    h: "Hotové do ruky",
    p: "S sebou nebo na cestu. Rychle, bez zbytečného čekání.",
  },
];

const pobocky = [
  { misto: "Brno-střed", pop: "V centru, pár kroků od pěší zóny.", hodiny: "NONSTOP" },
  { misto: "U hlavního nádraží", pop: "Cestou na vlak i z vlaku, kdykoli.", hodiny: "NONSTOP" },
  { misto: "Veveří", pop: "Klidnější pobočka pro studentskou čtvrť.", hodiny: "Po–Ne 10–23" },
];

export default function Page() {
  return (
    <main className="page">
      <div className="spit" aria-hidden="true" />

      <header className="top">
        <a className="wordmark" href="#top" aria-label="Big Food Point — úvod">
          <span className="wm-1">BIG</span>
          <span className="wm-2">FOOD</span>
          <span className="wm-3">POINT</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#pobocky">Pobočky</a>
        </nav>
        <a className="btn btn-red top-cta" href="#nabidka">Objednat online</a>
      </header>

      <section className="hero" id="top">
        <p className="eyebrow eyebrow-light">Brno · Rychlé občerstvení · NONSTOP</p>

        <HeroTitle lines={["FRESH", "& TASTY", "FOOD"]} />

        <p className="hero-lede">
          Kebab, pizza a burgery z čerstvých surovin — připravené přímo
          před tebou. Nabereš cestou, sníš do ruky.
        </p>

        <div className="hero-cta">
          <a className="btn btn-red" href="#nabidka">Zobrazit nabídku</a>
          <a className="btn btn-ghost" href="#pobocky">Kde nás najdeš</a>
        </div>

        <div className="isic" role="note">
          <span className="isic-pct">15%</span>
          <span className="isic-text">
            <strong>Sleva pro studenty</strong>
            s platnou kartou ISIC
          </span>
        </div>
      </section>

      <section className="band menu" id="nabidka">
        <p className="eyebrow">Naše nabídka</p>
        <h2 className="h-sec">
          Vyber si — a my ti to<br />naservírujeme z rožně
        </h2>

        <ul className="menu-list">
          {menu.map((m, i) => (
            <li className="menu-item" key={m.name}>
              {i > 0 && <span className="slice-rule" aria-hidden="true" />}
              <div className="menu-row">
                <h3 className="menu-name">{m.name}</h3>
                <p className="menu-desc">{m.desc}</p>
                <ul className="chips">
                  {m.tags.map((t) => (
                    <li className="chip" key={t}>{t}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="band trust" id="pobocky">
        <p className="eyebrow eyebrow-light">Proč zrovna k nám</p>
        <h2 className="h-sec h-sec-light">
          Pouze čerstvé suroviny.<br />Připravujeme přímo před tebou.
        </h2>

        <ul className="trust-grid">
          {duvery.map((d) => (
            <li className="trust-card" key={d.h}>
              <span className="trust-mark" aria-hidden="true" />
              <h3 className="trust-h">{d.h}</h3>
              <p className="trust-p">{d.p}</p>
            </li>
          ))}
        </ul>

        <span className="slice-rule slice-rule-wide" aria-hidden="true" />

        <h3 className="pob-h">Navštiv jednu z brněnských poboček</h3>
        <ul className="pob-grid">
          {pobocky.map((p) => (
            <li className="pob-card" key={p.misto}>
              <span className="pob-city">Brno</span>
              <span className="pob-name">{p.misto}</span>
              <span className="pob-pop">{p.pop}</span>
              <span className="pob-hours">{p.hodiny}</span>
            </li>
          ))}
        </ul>

        <p className="note">
          Ukázková provozovna: Ukázková 123, Brno · tel — · e-mail —
          <span className="note-dim"> (nezávazný náhled — kontakt doplníme)</span>
        </p>
      </section>
    </main>
  );
}
