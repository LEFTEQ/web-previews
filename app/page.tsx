import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Patrik Vašků — rekonstrukce koupelen na klíč, Brno",
  description:
    "Rekonstrukce koupelen a bytových jader v Brně na klíč. Jeden dodavatel, pevný termín, pevná cena a záruka. Bourání, rozvody, obklady i finální úklid.",
};

const faze = [
  {
    c: "01",
    t: "Zaměření a nabídka",
    d: "Přijedu k vám do koupelny, změřím a zapíšu stav rozvodů. Do tří dnů máte v e-mailu rozpočet položku po položce — víte, za co platíte.",
  },
  {
    c: "02",
    t: "Bourání a jádro",
    d: "Vybouráme staré umakartové nebo zděné jádro, odvezeme suť. Nachystáme nové rozvody vody, odpadů a elektřiny přesně pod vaše zařizovací předměty.",
  },
  {
    c: "03",
    t: "Izolace a obklad",
    d: "Provedeme hydroizolaci pod sprchou i vanou, srovnáme podklad a klademe obklad a dlažbu. Spáry, silikony, přechody — dotažené do posledního rohu.",
  },
  {
    c: "04",
    t: "Osazení a předání",
    d: "Osadíme vanu, sprchu, umyvadlo, WC a baterie, zapojíme svícení. Uklidíme po sobě a předáme koupelnu připravenou k použití — i s papíry.",
  },
];

const duvody = [
  {
    t: "Jeden dodavatel na všechno",
    d: "Bourání, voda, topení, elektrika i obklady zvládneme sami. Nekoordinujete pět řemeslníků — voláte jednomu člověku.",
  },
  {
    t: "Pevný termín ve smlouvě",
    d: "Termín zahájení i předání máte černé na bílém. Běžná koupelna v paneláku bývá hotová za 10 až 14 pracovních dní.",
  },
  {
    t: "Rozpočet bez překvapení",
    d: "Cenu za práci i materiál znáte předem. Vícepráce řešíme jen po odsouhlasení — nikdy dodatečně na faktuře.",
  },
  {
    t: "Panelová jádra jsou náš chleba",
    d: "Brněnské paneláky, umakartová jádra i zděné byty. Známe typové rozvody a víme, kde bývá zádrhel.",
  },
  {
    t: "Záruka na řemeslo",
    d: "Na provedené práce ručíme písemně. Když se za rok něco ozve, přijedeme to dořešit.",
  },
  {
    t: "Uklidíme po sobě",
    d: "Suť odvezeme, prach po sobě setřeme. Byt vám nezůstane jako staveniště.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="nav" aria-label="Hlavní">
        <a className="mark" href="#" aria-label="Patrik Vašků, rekonstrukce koupelen">
          <span className="mark__pv" aria-hidden="true">PV</span>
          <span className="mark__name">
            Patrik Vašků
            <span className="mark__sub">koupelny na klíč · Brno</span>
          </span>
        </a>
        <a className="nav__cta" href="tel:+420777000000">Zavolat na zaměření</a>
      </header>

      <section className="hero" aria-labelledby="hero-nadpis">
        <div className="hero__grid" aria-hidden="true">
          {Array.from({ length: 48 }).map((_, i) => (
            <span key={i} className="tile" style={{ animationDelay: `${(i % 12) * 40 + Math.floor(i / 12) * 90}ms` }} />
          ))}
        </div>
        <div className="hero__inner">
          <p className="eyebrow">Rekonstrukce koupelen &amp; bytových jader · Brno</p>
          <h1 id="hero-nadpis" className="hero__title">
            Ze starého <span className="hl">jádra</span>
            <br />hotová koupelna<br />za <span className="hl">14 dní.</span>
          </h1>
          <p className="hero__lead">
            Vybouráme umakartové jádro, natáhneme nové rozvody, obložíme a osadíme —
            všechno jeden tým, pevný termín, pevná cena. V brněnských panelácích i zděných bytech.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="tel:+420777000000">Chci zaměřit koupelnu</a>
            <a className="btn btn--line" href="#postup">Jak to probíhá</a>
          </div>
          <dl className="hero__facts">
            <div><dt>let</dt><dd>18</dd></div>
            <div><dt>koupelen ročně</dt><dd>60+</dd></div>
            <div><dt>dní na paneláku</dt><dd>10–14</dd></div>
          </dl>
        </div>
      </section>

      <section className="postup" id="postup" aria-labelledby="postup-nadpis">
        <div className="section__head">
          <p className="eyebrow eyebrow--dark">Od bourání po klíče</p>
          <h2 id="postup-nadpis">Čtyři fáze, jasně oddělené</h2>
          <p className="section__lead">
            Rekonstrukci vedeme jako sled kroků, ne jako chaos na stavbě. U každé fáze víte,
            co se děje a co bude dál.
          </p>
        </div>
        <ol className="faze">
          {faze.map((f) => (
            <li key={f.c} className="faze__item">
              <span className="faze__num" aria-hidden="true">{f.c}</span>
              <h3>{f.t}</h3>
              <p>{f.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="section__head">
          <p className="eyebrow">Proč lidé v Brně volají mně</p>
          <h2 id="duvera-nadpis">Bez subdodavatelského řetězu</h2>
          <p className="section__lead">
            Osmnáct let dělám koupelny a bytová jádra po Brně a okolí — Líšeň, Bystrc, Královo Pole,
            Vinohrady. Zakázku vedu od zaměření po předání sám, aby za výsledek ručil jeden člověk.
          </p>
        </div>
        <ul className="duvody">
          {duvody.map((d) => (
            <li key={d.t} className="duvody__item">
              <h3>{d.t}</h3>
              <p>{d.d}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
