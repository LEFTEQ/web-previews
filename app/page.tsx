import type { CSSProperties } from "react";

export const metadata = {
  title: "TOMRA stav — rekonstrukce koupelen v Brně",
  description:
    "Kompletní rekonstrukce koupelen v Brně a okolí. Bourání, rozvody, obklady a dlažba, zednické i instalatérské práce — jeden tým, pevný termín, čistý úklid. Firma s praxí od roku 2018.",
  openGraph: {
    title: "TOMRA stav — rekonstrukce koupelen v Brně",
    description:
      "Stará koupelna vně, nová uvnitř. Vedeme rekonstrukci od demolice po poslední spáru — spolehlivě a v termínu.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

type Step = {
  phase: string;
  title: string;
  body: string;
  days: string;
};

const kroky: Step[] = [
  {
    phase: "01",
    title: "Zaměření a rozpočet",
    body:
      "Přijedeme, změříme, poslechneme si, co vás na staré koupelně štve. Do tří dnů máte položkový rozpočet — bez schovaných příplatků na konci.",
    days: "1 den u vás",
  },
  {
    phase: "02",
    title: "Bourání a rozvody",
    body:
      "Vybouráme starý obklad i vaničku, přeložíme vodu a odpady tam, kam patří. Sádrokarton, jádro, elektrika — vše připravíme pod obklad.",
    days: "3–5 dní",
  },
  {
    phase: "03",
    title: "Hydroizolace a obklad",
    body:
      "Sprchový kout stěrkujeme dvojitou hydroizolací, teprve pak lepíme dlažbu. Spárujeme do roviny, silikon do koutů táhneme v jedné lince.",
    days: "4–6 dní",
  },
  {
    phase: "04",
    title: "Montáž a úklid",
    body:
      "Osadíme baterie, umyvadlo, WC a osvětlení, zapojíme a odzkoušíme. Odvezeme suť, koupelnu předáme uklizenou a připravenou k mytí.",
    days: "2 dny",
  },
];

type Proof = {
  value: string;
  label: string;
};

const duvera: Proof[] = [
  { value: "od 2018", label: "stavíme a rekonstruujeme v Brně" },
  { value: "14 dní", label: "běžná koupelna na klíč, jeden tým" },
  { value: "1 parta", label: "obkladač, instalatér i elektrikář" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#uvod" aria-label="TOMRA stav, úvod">
          <span className="wordmark__t">TOMRA</span>
          <span className="wordmark__s">stav</span>
        </a>
        <nav className="topnav" aria-label="Hlavní navigace">
          <a href="#postup">Jak to probíhá</a>
          <a href="#duvera">Proč my</a>
          <a className="topnav__cta" href="tel:+420776123456">
            Zavolat
          </a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Rekonstrukce koupelen · Brno a okolí
            </p>
            <h1 className="hero__title">
              Stará koupelna ven.
              <br />
              <span className="hero__title--accent">Nová do čtrnácti dnů.</span>
            </h1>
            <p className="hero__lead">
              Vedeme celou přestavbu jádra od prvního úderu kladiva po poslední
              spáru silikonu. Bourání, voda, elektrika, obklady i montáž zařídí
              jeden sehraný tým — vy nesháníte pět řemeslníků, jednáte s námi.
            </p>
            <div className="hero__actions">
              <a className="btn btn--solid" href="tel:+420776123456">
                Zavolat a domluvit zaměření
              </a>
              <a className="btn btn--ghost" href="#postup">
                Podívat se, jak to probíhá
              </a>
            </div>
            <dl className="hero__meta">
              <div>
                <dt>Termín</dt>
                <dd>písemně, s penále za zdržení na naší straně</dd>
              </div>
              <div>
                <dt>Cena</dt>
                <dd>položkový rozpočet předem, žádné doplatky navíc</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Nově zrekonstruovaná koupelna s obklady, sprchovým koutem a nasvícením od TOMRA stav"
              width={1200}
              height={1400}
              loading="eager"
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-line" aria-hidden="true" />
              Koupelna na klíč — Brno-Líšeň
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section postup" id="postup" aria-labelledby="postup-nadpis">
        <div className="section__head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Čtyři fáze jedné přestavby
          </p>
          <h2 id="postup-nadpis" className="section__title">
            Od vybouraného jádra k hotové koupelně
          </h2>
          <p className="section__lead">
            Rekonstrukce koupelny je sled řemesel, které musí navazovat ve
            správném pořadí. Tady je, čím u nás projdete — a kolik dní každá fáze
            reálně zabere.
          </p>
        </div>

        <div className="postup__layout">
          <ol className="steps">
            {kroky.map((k) => (
              <li className="step" key={k.phase}>
                <span className="step__phase" aria-hidden="true">
                  {k.phase}
                </span>
                <div className="step__body">
                  <div className="step__topline">
                    <h3 className="step__title">{k.title}</h3>
                    <span className="step__days">{k.days}</span>
                  </div>
                  <p>{k.body}</p>
                </div>
              </li>
            ))}
          </ol>

          <figure className="postup__media">
            <img
              src="/section-1.webp"
              alt="Rozpracovaná rekonstrukce koupelny — nové rozvody a připravené stěny pod obklad"
              loading="lazy"
            />
            <figcaption>
              Práce ve fázi rozvodů. Pod každou dlaždicí je poctivá
              hydroizolace, ne jen lepidlo.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="duvera__grid">
          <figure className="duvera__media">
            <img
              src="/section-2.webp"
              alt="Detail hotových obkladů a spár v koupelně zrekonstruované firmou TOMRA stav"
              loading="lazy"
            />
          </figure>

          <div className="duvera__copy">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Proč lidé v Brně volají nám
            </p>
            <h2 id="duvera-nadpis" className="section__title">
              Malá parta, na kterou se dá spolehnout
            </h2>
            <p className="section__lead">
              Jsme TOMRA stav — brněnská firma, která od roku 2018 přestavuje
              koupelny a bytová jádra. Neděláme deset zakázek najednou. Když
              začneme u vás, chodí k vám pořád stejní lidé a víte, kdo za prací
              stojí.
            </p>

            <dl className="proofs">
              {duvera.map((p) => (
                <div className="proof" key={p.label}>
                  <dt className="proof__value">{p.value}</dt>
                  <dd className="proof__label">{p.label}</dd>
                </div>
              ))}
            </dl>

            <ul className="promises">
              <li>
                Rozpočet dostanete na papíře předem — co je v něm, to platí.
              </li>
              <li>
                Byt vám nezaneseme prachem: chráníme podlahy a denně uklízíme.
              </li>
              <li>
                Na hotovou koupelnu a odvedenou práci dáváme písemnou záruku.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
