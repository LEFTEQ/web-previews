import type { CSSProperties } from "react";

const zoning: { code: string; nazev: string; popis: string }[] = [
  {
    code: "01",
    nazev: "Apex — nejvyšší bod",
    popis:
      "Klenba, která nese celý nehet. Modelovací gel CLEAR XTREME stavíme tak, aby apex seděl přesně tam, kam patří — proto drží týdny bez prasknutí.",
  },
  {
    code: "02",
    nazev: "Stress zone — namáhaná zóna",
    popis:
      "Místo, kde se nehty nejčastěji lámou. Rubber Base Gellak sem klademe v tenké vrstvě s tahem do stran — pružná základna, která pracuje s vaším nehtem.",
  },
  {
    code: "03",
    nazev: "Smile line — úsměvová linie",
    popis:
      "Ostrá hranice francie nebo barevného gelu. Tady se pozná mistr od začátečníka. Přesně tuhle linku učíme na rekvalifikaci celé dny.",
  },
];

const produkty: {
  nazev: string;
  objem: string;
  cena: string;
  poznamka: string;
}[] = [
  {
    nazev: "CLEAR XTREME modelovací UV gel",
    objem: "40 ml",
    cena: "629 Kč",
    poznamka: "Nosný gel na stavbu apexu. Samonivelační, nesteče.",
  },
  {
    nazev: "Rubber Base Gellak Clear",
    objem: "10 ml",
    cena: "229 Kč",
    poznamka: "Pružná báze do namáhané zóny. Bez opilování.",
  },
  {
    nazev: "TOP MATTE vrchní UV gel",
    objem: "10 ml",
    cena: "219 Kč",
    poznamka: "Sametový mat, který nechytá otisky.",
  },
  {
    nazev: "Sada štětců PROFI Black",
    objem: "9 ks",
    cena: "990 Kč",
    poznamka: "Kompletní řada na gel i zdobení. Kabelošm kaučuk.",
  },
];

const kroky: { cislo: string; nadpis: string; text: string }[] = [
  {
    cislo: "1",
    nadpis: "Rekvalifikační kurz",
    text:
      "Profesní kvalifikace Manikér/Manikérka. Od přípravy nehtového lůžka po hotovou modeláž. Zakončeno zkouškou uznávanou po celé ČR.",
  },
  {
    cislo: "2",
    nadpis: "Nail Art workshop",
    text:
      "Jednodenní intenziv na zdobení — Moyra desky, ombré, ruční malba. Pro ty, kdo už modeláž zvládají a chtějí přidat rukopis.",
  },
  {
    cislo: "3",
    nadpis: "Přístrojová pedikúra",
    text:
      "Kurz včetně gel laku na nohy. Práce s bruskou, frézami a nástavci tak, aby byla bezpečná pro klientku i pro vás.",
  },
];

export default function Page() {
  return (
    <main className="ne">
      <header className="ne-top">
        <a className="ne-brand" href="#" aria-label="Nail Expert — úvod">
          <span className="ne-brand__mark" aria-hidden="true">
            NE
          </span>
          <span className="ne-brand__word">
            Nail<span className="ne-brand__accent">Expert</span>
          </span>
        </a>
        <nav className="ne-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#kurzy">Kurzy</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
        <a className="ne-top__cta" href="#sortiment">
          Do e-shopu
        </a>
      </header>

      <section className="ne-hero" aria-labelledby="ne-hero-title">
        <div className="ne-hero__grid">
          <div className="ne-hero__copy">
            <p className="ne-eyebrow">Nehtová kosmetika · Brno, Josefská 25</p>
            <h1 id="ne-hero-title">
              Postavený nehet<br />
              <span className="ne-hero__accent">vrstvu po vrstvě.</span>
            </h1>
            <p className="ne-hero__lead">
              Gelový systém modeláže od lidí, kteří ho denně učí. UV gely,
              Gellaky, štětce, lampy a brusky — vybíráme jen to, co bychom
              sami dali klientce na ruku.
            </p>
            <div className="ne-hero__actions">
              <a className="ne-btn ne-btn--solid" href="#sortiment">
                Vybrat gely
              </a>
              <a className="ne-btn ne-btn--ghost" href="#kurzy">
                Přihlásit na kurz
              </a>
            </div>
            <dl className="ne-hero__facts">
              <div>
                <dt>Konzultant</dt>
                <dd>Mistr světa v nehtovém designu</dd>
              </div>
              <div>
                <dt>Prodejna</dt>
                <dd>Kamenný obchod v centru Brna</dd>
              </div>
            </dl>
          </div>
          <figure className="ne-hero__media">
            <img
              src="/hero.webp"
              alt="Detail modelovaných nehtů s lesklým gelovým povrchem"
              loading="eager"
            />
            <figcaption>
              Gelová modeláž — přesná klenba, čistá linie, výdrž na týdny.
            </figcaption>
          </figure>
        </div>

        <ol className="ne-zones" aria-label="Anatomie modelovaného nehtu">
          {zoning.map((z) => (
            <li key={z.code} className="ne-zone">
              <span className="ne-zone__code">{z.code}</span>
              <h2 className="ne-zone__title">{z.nazev}</h2>
              <p className="ne-zone__text">{z.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="sortiment" className="ne-shop" aria-labelledby="ne-shop-title">
        <div className="ne-shop__head">
          <p className="ne-eyebrow ne-eyebrow--accent">Z pracovního stolu</p>
          <h2 id="ne-shop-title">Co míchá naše nejvěrnější zákaznice</h2>
          <p className="ne-shop__intro">
            Ceny i skladem aktualizujeme každý den — žádná stará čísla. Když
            něco doporučíme, používáme to i my za pultem.
          </p>
        </div>

        <div className="ne-shop__body">
          <figure className="ne-shop__media">
            <img
              src="/section-1.webp"
              alt="Vyrovnané lahvičky UV gelů a Gellaků na pracovním stole nehtové designérky"
              loading="lazy"
            />
          </figure>
          <ul className="ne-products">
            {produkty.map((p) => (
              <li key={p.nazev} className="ne-product">
                <div className="ne-product__top">
                  <h3>{p.nazev}</h3>
                  <span className="ne-product__price">{p.cena}</span>
                </div>
                <p className="ne-product__note">{p.poznamka}</p>
                <div className="ne-product__foot">
                  <span className="ne-product__vol">{p.objem}</span>
                  <a className="ne-product__buy" href="#sortiment">
                    Přidat do košíku
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="kurzy" className="ne-trust" aria-labelledby="ne-trust-title">
        <div className="ne-trust__grid">
          <figure className="ne-trust__media">
            <img
              src="/section-2.webp"
              alt="Práce s UV lampou a štětcem při modeláži nehtů na kurzu v Brně"
              loading="lazy"
            />
          </figure>
          <div className="ne-trust__copy">
            <p className="ne-eyebrow ne-eyebrow--accent">Škola i pult, jedna adresa</p>
            <h2 id="ne-trust-title">
              Vede nás mistr světa. Naučí i vaše ruce.
            </h2>
            <p className="ne-trust__lead">
              Hlavním konzultantem obchodu je Tsonyu Petev — mistr světa
              v nehtovém designu z Düsseldorfu, několikanásobný mistr ČR
              v gelové modeláži a mezinárodní porotce. To, co učí na
              soutěžích, prodáváme za pultem na Josefské.
            </p>

            <ol className="ne-steps" id="prodejna">
              {kroky.map((k) => (
                <li key={k.cislo} className="ne-step">
                  <span className="ne-step__num" aria-hidden="true">
                    {k.cislo}
                  </span>
                  <div>
                    <h3>{k.nadpis}</h3>
                    <p>{k.text}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="ne-store">
              <p>
                <strong>Kamenná prodejna:</strong> Josefská 25, Brno. Přijďte
                si gely osahat — poradíme podle toho, s čím pracujete.
              </p>
              <a
                className="ne-btn ne-btn--solid"
                href="#prodejna"
                style={{ "--delay": "0ms" } as CSSProperties}
              >
                Zavolat do prodejny
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
