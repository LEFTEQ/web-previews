import type { CSSProperties } from "react";

const services = [
  {
    n: "01",
    title: "Koupelny",
    text: "Velkoformátové italské dlažby, které srazí počet spár na minimum. Vybereme obklad, dlažbu i mozaiku tak, aby ladily s baterií i světlem.",
    tags: ["Velkoformáty", "Mozaiky", "Protiskluz"],
  },
  {
    n: "02",
    title: "Kuchyně",
    text: "Odolné povrchy za linku i na podlahu — matné, snadno omyvatelné, v dekorech kamene, betonu i teraca. Poradíme s formátem i spárou.",
    tags: ["Zástěny", "Slinuté desky", "Dekory kamene"],
  },
  {
    n: "03",
    title: "Venkovní prostory",
    text: "Mrazuvzdorná dlažba 20 mm na terasy a chodníky — pokládka do štěrku i na terče. Stejný dekor uvnitř i venku, plynulý přechod prahu.",
    tags: ["Tloušťka 20 mm", "Mrazuvzdornost", "Terče"],
  },
];

const trust = [
  { k: "Praha – Vysočany", v: "Showroom Pod Harfou" },
  { k: "Italská výroba", v: "Slinuté a glazované dlaždice" },
  { k: "Interiéry i developeři", v: "Návrh, dodávka, realizace" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="nav">
        <a className="wordmark" href="#top" aria-label="INDEDE showroom, úvod">
          <span className="wordmark__in">IN</span>
          <span className="wordmark__dede">DEDE</span>
          <span className="wordmark__dot" aria-hidden="true" />
        </a>
        <nav className="nav__links" aria-label="Hlavní">
          <a href="#nabidka">Obklady a dlažby</a>
          <a href="#showroom">Showroom</a>
          <a href="#poptavka">Poptávka</a>
        </nav>
        <a className="nav__cta" href="#showroom">Přijít do showroomu</a>
      </header>

      <section className="hero" id="top">
        <div className="hero__grid" aria-hidden="true">
          <span /><span /><span /><span />
          <span /><span /><span /><span />
          <span /><span /><span /><span />
        </div>
        <div className="hero__copy">
          <p className="eyebrow">Showroom obkladů a dlažeb · Praha</p>
          <h1 className="hero__title">
            Italská dlažba,
            <br />
            <span className="hero__title--em">položená bez rušivé spáry.</span>
          </h1>
          <p className="hero__lead">
            Vybíráme velkoformátové obklady pro koupelny, kuchyně i terasy — a doprovodíme je
            od návrhu prostoru až po hotovou realizaci. Přijďte si sáhnout na povrch, který
            nakonec budete mít doma.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#showroom">Domluvit prohlídku</a>
            <a className="btn btn--ghost" href="#nabidka">Co dodáváme</a>
          </div>
          <dl className="hero__facts">
            <div><dt>Formáty až</dt><dd>120×278 cm</dd></div>
            <div><dt>Tloušťka na terasy</dt><dd>20 mm</dd></div>
            <div><dt>Adresa</dt><dd>Pod Harfou, Vysočany</dd></div>
          </dl>
        </div>
        <figure className="hero__figure">
          <img src="/hero.webp" alt="Interiér s velkoformátovou italskou dlažbou ze showroomu INDEDE" loading="eager" width={960} height={1200} />
          <figcaption>Vzorník ve showroomu — Vysočany</figcaption>
        </figure>
      </section>

      <section className="nabidka" id="nabidka">
        <div className="section-head">
          <p className="eyebrow">Kam dlažbu volíme</p>
          <h2 className="section-title">Tři prostředí, jeden materiál</h2>
          <p className="section-sub">
            Stejný dekor umíme dotáhnout do koupelny, kuchyně i na terasu — liší se jen
            povrch a tloušťka. Vyberte, kde řešíte podlahu nebo stěnu.
          </p>
        </div>
        <ol className="cards">
          {services.map((s) => (
            <li className="card" key={s.n}>
              <span className="card__n" aria-hidden="true">{s.n}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__text">{s.text}</p>
              <ul className="card__tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
        <figure className="nabidka__figure">
          <img src="/section-1.webp" alt="Detail italského obkladu s jemnou strukturou ve showroomu INDEDE" loading="lazy" width={1400} height={780} />
        </figure>
      </section>

      <section className="showroom" id="showroom">
        <figure className="showroom__figure">
          <img src="/section-2.webp" alt="Showroom INDEDE v pražských Vysočanech s vystavenými dlažbami a obklady" loading="lazy" width={1200} height={900} />
        </figure>
        <div className="showroom__copy">
          <p className="eyebrow">O nás · proč INDEDE</p>
          <h2 className="section-title">Vzorky velké jako stěna, ne jako dlaň</h2>
          <p className="showroom__lead">
            Značku INDEDE stavíme na letech realizací interiérů, návrhu prostor a spolupráci
            s developery. Ve showroomu ve Vysočanech uvidíte celé formáty položené vedle sebe —
            design, kvalitu i styl na jednom místě, ne v miniatuře v katalogu.
          </p>
          <dl className="showroom__facts">
            {trust.map((t) => (
              <div className="fact" key={t.k}>
                <dt>{t.k}</dt>
                <dd>{t.v}</dd>
              </div>
            ))}
          </dl>
          <div className="showroom__where" id="poptavka">
            <p className="showroom__where-h">Kde nás najdete</p>
            <address className="showroom__addr">
              INDEDE showroom · Pod Harfou 981/25<br />
              190 00 Praha – Vysočany
            </address>
            <a className="btn btn--solid" href="#poptavka">Poslat nezávaznou poptávku</a>
          </div>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";
export type _NoOp = CSSProperties;
