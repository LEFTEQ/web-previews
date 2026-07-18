import type { CSSProperties } from "react";

type Tick = { i: number; long: boolean; anchor: boolean; style: CSSProperties };

const TICKS: Tick[] = Array.from({ length: 60 }, (_, i) => ({
  i,
  long: i % 5 === 0,
  anchor: i === 0,
  style: {
    transform: `rotate(${i * 6}deg)`,
    animationDelay: `${(i * 11).toFixed(0)}ms`,
  } as CSSProperties,
}));

type Product = {
  kind: string;
  name: string;
  ref: string;
  price: string;
  old?: string;
  badge?: string;
  badgeKind?: "sale" | "new";
  stock: string;
};

const PRODUCTS: Product[] = [
  {
    kind: "Šperky",
    name: "Náramek howlit & achát",
    ref: "MINK23",
    price: "350 Kč",
    stock: "skladem",
  },
  {
    kind: "Hodinky",
    name: "DKNY dámské",
    ref: "NY2130",
    price: "2 120 Kč",
    old: "5 300 Kč",
    badge: "\u221260 %",
    badgeKind: "sale",
    stock: "skladem",
  },
  {
    kind: "Hodinky",
    name: "Bentime pánské",
    ref: "H27-HM-H019",
    price: "1 065 Kč",
    badge: "novinka",
    badgeKind: "new",
    stock: "skladem",
  },
  {
    kind: "Šperky",
    name: "ZUZU náramek",
    ref: "ZBR018",
    price: "85 Kč",
    old: "290 Kč",
    badge: "\u221271 %",
    badgeKind: "sale",
    stock: "skladem",
  },
  {
    kind: "Hodinky",
    name: "Skyben chronograf",
    ref: "SBPAGS010/47",
    price: "1 075 Kč",
    stock: "skladem",
  },
  {
    kind: "Hodinky",
    name: "Bulova automatik",
    ref: "96R228",
    price: "9 600 Kč",
    stock: "na dotaz",
  },
];

const FACTS: { label: string; value: string; note: string }[] = [
  { label: "Doprava zdarma", value: "1 500 Kč", note: "a výš, po celé ČR" },
  { label: "TOP TIME Club", value: "10 %", note: "sleva pro registrované" },
  { label: "Infolinka", value: "777 111 222", note: "po–pá, poradíme s výběrem" },
  { label: "Reklamace", value: "777 111 222", note: "autorizovaný servis" },
];

export default function Page() {
  return (
    <main className="tt">
      {/* ---------- HERO ---------- */}
      <section className="band band--hero" aria-labelledby="hero-title">
        <div className="wrap">
          <div className="brand">
            <span className="brand__mark">
              TOP<span className="brand__tick" aria-hidden="true" />TIME
            </span>
            <span className="brand__sub">hodinářství · České Budějovice</span>
          </div>

          <div className="hero">
            <div className="hero__text">
              <p className="eyebrow">Hodinky · šperky · hodiny</p>
              <h1 id="hero-title" className="hero__title">
                Přesnost, kterou
                <br /> si můžete dovolit.
              </h1>
              <p className="hero__lede">
                Od minerálního náramku za{" "}
                <span className="num">85 Kč</span> po automat od Bulovy za{" "}
                <span className="num">9 600 Kč</span>. Jedno hodinářství
                v centru Českých Budějovic — kde si čas vyzkoušíte na ruku,
                ne jen na fotce.
              </p>
              <div className="hero__actions">
                <a className="btn" href="#nabidka">
                  Prohlédnout nabídku
                </a>
                <span className="hero__phone">
                  Infolinka <span className="num">777 111 222</span>
                </span>
              </div>
            </div>

            <div className="hero__dial" aria-hidden="true">
              <div className="ring">
                {TICKS.map((t) => (
                  <span
                    key={t.i}
                    className={
                      "tick" +
                      (t.long ? " tick--long" : "") +
                      (t.anchor ? " tick--anchor" : "")
                    }
                    style={t.style}
                  />
                ))}
                <div className="ring__center">
                  <span className="ring__eyebrow">Doporučujeme</span>
                  <span className="ring__brand">BULOVA</span>
                  <span className="ring__ref num">96R228</span>
                  <span className="ring__spec">Automatik · 21 kamenů</span>
                  <span className="ring__price num">9 600 Kč</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- NABÍDKA ---------- */}
      <section
        className="band band--graphite"
        id="nabidka"
        aria-labelledby="nabidka-title"
      >
        <div className="index-track index-track--brass" aria-hidden="true" />
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow--brass">Sortiment</p>
            <h2 id="nabidka-title" className="sec-title">
              Co u nás najdete
            </h2>
            <span className="title-index" aria-hidden="true" />
            <p className="sec-lede">
              Hodinky pánské, dámské i dětské, minerální šperky a hodiny
              do bytu i budíky. Vybíráme značky, které vydrží — a ceny,
              které dávají smysl.
            </p>
          </header>

          <ul className="chips" aria-label="Kategorie">
            {[
              "Pánské hodinky",
              "Dámské hodinky",
              "Dětské hodinky",
              "Minerální šperky",
              "Hodiny a budíky",
              "Výprodej",
            ].map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>

          <div className="grid">
            {PRODUCTS.map((p) => (
              <article className="card" key={p.ref}>
                <div className="card__index" aria-hidden="true" />
                <div className="card__top">
                  <span className="card__kind">{p.kind}</span>
                  {p.badge ? (
                    <span
                      className={
                        "card__badge" +
                        (p.badgeKind === "new"
                          ? " card__badge--new"
                          : " card__badge--sale")
                      }
                    >
                      {p.badge}
                    </span>
                  ) : null}
                </div>
                <h3 className="card__name">{p.name}</h3>
                <p className="card__ref num">{p.ref}</p>
                <div className="card__price">
                  {p.old ? (
                    <span className="card__old num">{p.old}</span>
                  ) : null}
                  <span className="card__now num">{p.price}</span>
                </div>
                <p className="card__stock">
                  <span className="dot" aria-hidden="true" />
                  {p.stock}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- DŮVĚRA / O NÁS ---------- */}
      <section className="band band--light" aria-labelledby="onas-title">
        <div className="index-track index-track--steel" aria-hidden="true" />
        <div className="wrap">
          <div className="about">
            <div className="about__text">
              <p className="eyebrow">Proč Top Time</p>
              <h2 id="onas-title" className="sec-title">
                Kamenné hodinářství, ne anonymní sklad
              </h2>
              <span className="title-index" aria-hidden="true" />
              <p className="sec-lede">
                Přijďte do prodejny v centru Českých Budějovic. Hodinky
                vám podáme přes pult, seřídíme řemínek na míru a poradíme,
                jestli má smysl quartz, nebo automat. V nabídce máme
                světové značky{" "}
                <strong>
                  Adidas, Daniel Klein, Diesel, DKNY, Festina, Puma
                </strong>{" "}
                a další — a ke každému kousku autorizovaný servis.
              </p>
            </div>

            <dl className="facts">
              {FACTS.map((f) => (
                <div className="fact" key={f.label}>
                  <dt className="fact__label">{f.label}</dt>
                  <dd className="fact__value num">{f.value}</dd>
                  <p className="fact__note">{f.note}</p>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
