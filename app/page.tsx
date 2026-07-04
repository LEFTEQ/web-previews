import type { CSSProperties } from "react";

export const metadata = {
  title: "BYTEXPERT — rekonstrukce bytů a koupelen na klíč, Praha",
  description:
    "Kompletní rekonstrukce bytů, domů a koupelen v Praze. Od zaměření po předání klíčů. Poctivé řemeslo od roku 1993.",
};

type Phase = {
  num: string;
  title: string;
  body: string;
  meta: string;
};

const phases: Phase[] = [
  {
    num: "01",
    title: "Zaměření a rozpočet",
    body:
      "Přijedeme k vám domů, změříme každý kout a sepíšeme, co se bude dít. Rozpočet dostanete položku po položce — žádná čísla vytažená ze stropu.",
    meta: "nezávazně a zdarma",
  },
  {
    num: "02",
    title: "Bourání a rozvody",
    body:
      "Vytrháme staré umakartové jádro, srovnáme příčky, natáhneme novou elektriku a vodu. Prach zůstává za fólií, ne u vás v obýváku.",
    meta: "voda · elektro · zdivo",
  },
  {
    num: "03",
    title: "Obklady a povrchy",
    body:
      "Dlažba, obklady, štuk, podlahy. U koupelen umíme i panely ABITIBI — rychle, čistě a bez týdnů rozkopané koupelny.",
    meta: "ABITIBI · dlažba · štuk",
  },
  {
    num: "04",
    title: "Předání klíčů",
    body:
      "Uklidíme po sobě, projdeme byt s vámi metr po metru a odevzdáme záruční list. Přijdete si do hotového.",
    meta: "úklid · záruka · dokumentace",
  },
];

type Rating = {
  score: string;
  label: string;
};

const ratings: Rating[] = [
  { score: "4,7", label: "rekonstrukce bytu" },
  { score: "4,7", label: "rekonstrukce koupelny" },
  { score: "4,6", label: "celkový dojem klientů" },
];

export default function Page() {
  return (
    <main className="bx">
      <header className="bx-top">
        <a className="bx-wordmark" href="#top" aria-label="BYTEXPERT, úvod">
          <span className="bx-wordmark__byte">BYTE</span>
          <span className="bx-wordmark__x" aria-hidden="true">
            ×
          </span>
          <span className="bx-wordmark__pert">PERT</span>
        </a>
        <span className="bx-loc">Praha 10 · od 1993</span>
      </header>

      <section className="bx-hero" id="top">
        <div className="bx-hero__grid" aria-hidden="true">
          {Array.from({ length: 72 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <div className="bx-hero__inner">
          <p className="bx-eyebrow">
            <span className="bx-eyebrow__dot" aria-hidden="true" />
            Rekonstrukce bytů a koupelen na klíč
          </p>

          <h1 className="bx-hero__head">
            <span className="bx-line bx-line--1">Ze starého</span>
            <span className="bx-line bx-line--2">
              jádra <em>hotový</em>
            </span>
            <span className="bx-line bx-line--3">domov.</span>
          </h1>

          <p className="bx-hero__lede">
            Vytrháme umakart, srovnáme příčky, vyměníme rozvody a předáme vám
            byt, do kterého se hned nastěhujete. Jedna parta, jeden rozpočet,
            jeden termín — po celé Praze.
          </p>

          <div className="bx-hero__cta">
            <a className="bx-btn bx-btn--solid" href="tel:+420606071616">
              Zavolat 606 071 616
            </a>
            <a className="bx-btn bx-btn--ghost" href="#sluzby">
              Co všechno uděláme
            </a>
          </div>

          <dl className="bx-hero__facts">
            <div>
              <dt>Na trhu od</dt>
              <dd>1993</dd>
            </div>
            <div>
              <dt>Hotových rekonstrukcí</dt>
              <dd>116+</dd>
            </div>
            <div>
              <dt>Hodnocení klientů</dt>
              <dd>4,7/5</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="bx-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="bx-section-head">
          <p className="bx-eyebrow bx-eyebrow--dark">Jak to u vás proběhne</p>
          <h2 id="sluzby-h" className="bx-h2">
            Čtyři fáze od zaměření po klíče
          </h2>
          <p className="bx-section-lede">
            Děláme rekonstrukce na klíč — od bourání po úklid řešíme všechno my,
            vy nemusíte shánět party ani hlídat termíny.
          </p>
        </div>

        <ol className="bx-phases">
          {phases.map((p) => (
            <li className="bx-phase" key={p.num}>
              <span className="bx-phase__num" aria-hidden="true">
                {p.num}
              </span>
              <div className="bx-phase__body">
                <h3 className="bx-phase__title">{p.title}</h3>
                <p className="bx-phase__text">{p.body}</p>
                <p className="bx-phase__meta">{p.meta}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="bx-duvera" aria-labelledby="duvera-h">
        <div className="bx-duvera__intro">
          <p className="bx-eyebrow">Proč zrovna my</p>
          <h2 id="duvera-h" className="bx-h2 bx-h2--light">
            Řemeslo, které stojí za slovem od roku 1993
          </h2>
          <p className="bx-section-lede bx-section-lede--light">
            Za třicet let jsme přestavěli stovky pražských bytů. Víme, kde v
            panelácích vede voda, jak se chová umakartové jádro a proč se vyplatí
            udělat rozvody hned pořádně. Jsme jedni z mála v Česku, kdo koupelny
            zvládne i panely ABITIBI — rychle a s minimem nepořádku.
          </p>

          <ul className="bx-usp">
            <li>Pevná cena a termín předem, na papíře.</li>
            <li>Jedna parta na celou stavbu — ne pět subdodavatelů.</li>
            <li>Uklidíme po sobě a předáme byt připravený k bydlení.</li>
          </ul>
        </div>

        <div className="bx-ratings">
          <p className="bx-ratings__head">Hodnocení z 116 realizací</p>
          <div className="bx-ratings__grid">
            {ratings.map((r) => (
              <div className="bx-rating" key={r.label}>
                <span className="bx-rating__score">{r.score}</span>
                <span className="bx-rating__label">{r.label}</span>
              </div>
            ))}
          </div>
          <p className="bx-ratings__note">
            Sídlíme na Práčské 1881/14 v Praze 10 a jezdíme po celé Praze.
            Nezávazné zaměření domluvíme obvykle do pár dní.
          </p>
        </div>
      </section>
    </main>
  );
}
