import type { CSSProperties } from "react";

export const metadata = {
  title: "Koberce BRENO Hradec Králové — pokládka podlah na míru",
  description:
    "Metrážové koberce, vinylové podlahy, PVC a lino v prodejně na Pilnáčkově v Hradci Králové. Zaměříme, poradíme a položíme.",
};

type Krok = { c: string; nazev: string; text: string };

const kroky: Krok[] = [
  {
    c: "01",
    nazev: "Zaměření u vás doma",
    text: "Přijedeme s laserovým metrem, změříme každý kout i práh a spočítáme spáru na centimetry. Za zaměření po Hradci nic neplatíte.",
  },
  {
    c: "02",
    nazev: "Výběr v prodejně",
    text: "Vzorky vinylu, koberců i PVC si osaháte na Pilnáčkově vedle OBI. Ukážeme vám, jak dekor vypadá na ploše, ne jen na malém čtverečku.",
  },
  {
    c: "03",
    nazev: "Pokládka a lišty",
    text: "Podklad vyrovnáme, položíme, olištujeme a starou krytinu odvezeme. Po nás zůstane hotová místnost, do které se dá hned nastěhovat nábytek.",
  },
];

type Rez = { nazev: string; popis: string; detail: string };

const rezy: Rez[] = [
  {
    nazev: "Vinylové podlahy",
    popis: "Rigid i lepený vinyl v dekoru dřeva",
    detail: "Odolné vůči vodě i kolečkovým židlím. Do kuchyně, chodby i dětského pokoje.",
  },
  {
    nazev: "Metrážové koberce",
    popis: "Zátěžové i bytové, šíře 4 a 5 m",
    detail: "Nastříháme na míru místnosti, seříznem přechody a přilepíme na jistotu.",
  },
  {
    nazev: "PVC a lino",
    popis: "Praktická krytina za rozumné peníze",
    detail: "Rychlá pokládka, snadná údržba. Ideální do nájmu, dílny nebo na chalupu.",
  },
  {
    nazev: "Kusové koberce",
    popis: "Skladem i na objednávku",
    detail: "Ke gauči, pod jídelní stůl nebo do ložnice. Přiobjednáme rozměr přesně na váš prostor.",
  },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="mark" href="#" aria-label="Koberce BRENO, Hradec Králové">
          <span className="mark-b">BRENO</span>
          <span className="mark-sub">koberce &amp; podlahy · Hradec Králové</span>
        </a>
        <a className="nav-tel" href="tel:724375363">
          <span className="nav-tel-label">Prodejna Pilnáčkova</span>
          <span className="nav-tel-num">724 375 363</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-h">
        <div className="weave" aria-hidden="true">
          <div className="weave-warp" />
          <div className="weave-weft" />
        </div>
        <div className="hero-inner">
          <p className="eyebrow">Podlahářství · Pilnáčkova 537 · vedle OBI</p>
          <h1 id="hero-h" className="hero-h">
            <span className="hero-line hero-line--1">Od role</span>
            <span className="hero-line hero-line--2">k&nbsp;hotové</span>
            <span className="hero-line hero-line--3">podlaze.</span>
          </h1>
          <p className="hero-lead">
            Vybíráte krytinu do bytu v Hradci a okolí? Přijďte si vzorky osahat na
            Pilnáčkovu — a pokládku nechte na nás. Zaměříme, uřízneme na míru a starou
            podlahu odvezeme.
          </p>
          <div className="hero-cta">
            <a className="btn btn--solid" href="tel:724375363">Zavolat na prodejnu</a>
            <a className="btn btn--ghost" href="#nabidka">Co u nás najdete</a>
          </div>
          <dl className="hero-facts">
            <div className="fact">
              <dt>Otevřeno</dt>
              <dd>Po–Ne 9–19</dd>
            </div>
            <div className="fact">
              <dt>Zaměření po Hradci</dt>
              <dd>zdarma</dd>
            </div>
            <div className="fact">
              <dt>Parkování</dt>
              <dd>před prodejnou</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nab-h">
        <div className="sec-head">
          <p className="eyebrow eyebrow--dark">Co u nás pořídíte</p>
          <h2 id="nab-h" className="sec-h">Čtyři cesty k nové podlaze</h2>
          <p className="sec-note">
            Nemusíte vědět předem, co chcete. Řekněte nám, do jaké místnosti a jak ji
            používáte — zbytek vybereme společně u vzorků.
          </p>
        </div>
        <ul className="rez-grid">
          {rezy.map((r) => (
            <li className="rez" key={r.nazev}>
              <div className="rez-swatch" aria-hidden="true" />
              <h3 className="rez-nazev">{r.nazev}</h3>
              <p className="rez-popis">{r.popis}</p>
              <p className="rez-detail">{r.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="jak" aria-labelledby="jak-h">
        <div className="sec-head">
          <p className="eyebrow">Jak to u nás chodí</p>
          <h2 id="jak-h" className="sec-h sec-h--light">Tři kroky, žádné překvapení</h2>
          <p className="sec-note sec-note--light">
            Koberce BRENO tu na Pilnáčkově prodávají a pokládají podlahy roky. Víte
            dopředu, co se bude dít a co to bude stát.
          </p>
        </div>
        <ol className="kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.c}>
              <span className="krok-c" style={{ "--c": `"${k.c}"` } as CSSProperties}>
                {k.c}
              </span>
              <div className="krok-body">
                <h3 className="krok-nazev">{k.nazev}</h3>
                <p className="krok-text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="jak-adr">
          <p className="jak-adr-l">Kde nás najdete</p>
          <p className="jak-adr-t">
            Pilnáčkova 537, 500 03 Hradec Králové — v nákupním centru vedle hobbymarketu
            OBI. Autobus 19, zastávka Labský most.
          </p>
        </div>
      </section>
    </main>
  );
}
