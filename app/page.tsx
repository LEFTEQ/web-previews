import type { CSSProperties } from "react";

export default function Page() {
  const products: { name: string; note: string }[] = [
    { name: "Venkovní žaluzie", note: "Nastavitelné lamely — světlo řídíte, teplo necháte venku." },
    { name: "Screenové rolety", note: "Průhled ven zůstává, slunce dovnitř ne." },
    { name: "Vnitřní žaluzie", note: "Do každého okna, i střešního. Dřevo i hliník." },
    { name: "Předokenní rolety", note: "Zatemnění a klid navíc — přes noc i přes den." },
    { name: "Plisé a látkové rolety", note: "Barvy a průsvity na míru interiéru." },
    { name: "Sítě proti hmyzu", note: "Posuvné i rámečkové, prakticky neviditelné." },
    { name: "Markýzy a pergoly", note: "Stín na terasu a do zimní zahrady." },
    { name: "Chytré ovládání Somfy", note: "Žaluzie reagují na slunce, vítr i váš telefon." },
  ];

  const reviews: { name: string; text: string; product: string }[] = [
    {
      name: "Pavel Šlambora",
      product: "venkovní rolety",
      text: "Řešili jsme přehřívání v rodinném domě. Od zaměření až po montáž pracovali profesionálně, rychle a spolehlivě. Rolety opravdu slouží — vřele doporučuji.",
    },
    {
      name: "Tereza Gluzová",
      product: "venkovní zatemňovací roleta",
      text: "Komunikace rychlá a transparentní, instalace v řádu týdnů — a to v létě, kdy se na stínění obvykle čeká. Roleta splňuje přesně to, co jsem si slibovala.",
    },
    {
      name: "Vit Spíšek",
      product: "venkovní žaluzie + sítě",
      text: "Vše vysvětlili a předvedli v showroomu, technik přijel na zaměření, po výrobě instalace. Termíny i ceny dodrženy. Sítě proti hmyzu jsou téměř neviditelné.",
    },
  ];

  return (
    <main className="pk">
      {/* HERO */}
      <header className="pk-nav" aria-label="Hlavní">
        <a className="pk-wordmark" href="#" aria-label="PROKLIMA, stínicí technika, Brno">
          <span className="pk-wordmark__pro">PRO</span>
          <span className="pk-wordmark__klima">KLIMA</span>
        </a>
        <span className="pk-nav__tag">stínicí technika · Brno</span>
      </header>

      <section className="pk-hero" aria-label="Úvod">
        <div className="pk-hero__slats" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              className="pk-slat"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <div className="pk-hero__inner">
          <div className="pk-hero__copy">
            <p className="pk-eyebrow">Venkovní stínění pro brněnské teploty</p>
            <h1 className="pk-hero__title">
              Zavřete lamely.
              <br />
              <em>Léto zůstane venku.</em>
            </h1>
            <p className="pk-hero__lede">
              Přehřáté patro pod plochou střechou, jižní okna, panelák
              v Bystrci — venkovní žaluzie zastaví slunce dřív, než ohřeje
              sklo. Zaměříme, vyrobíme, namontujeme. V Brně a okolí.
            </p>
            <div className="pk-hero__actions">
              <a className="pk-btn pk-btn--solid" href="#nabidka">
                Poradit s výběrem stínění
              </a>
              <a className="pk-btn pk-btn--ghost" href="#reference">
                Přijít do showroomu v Brně
              </a>
            </div>
          </div>

          <figure className="pk-hero__figure">
            <img
              src="/hero.webp"
              alt="Venkovní žaluzie se skloněnými lamely na fasádě rodinného domu"
              className="pk-hero__img"
              width={960}
              height={1200}
            />
            <figcaption className="pk-hero__caption">
              Sklon lamel 45° — světlo dovnitř, přímé slunce ne.
            </figcaption>
          </figure>
        </div>

        <dl className="pk-facts">
          <div className="pk-fact">
            <dt>20 let</dt>
            <dd>rodinná firma na českém trhu</dd>
          </div>
          <div className="pk-fact">
            <dt>4 roky</dt>
            <dd>záruka na výrobky Climax</dd>
          </div>
          <div className="pk-fact">
            <dt>3 mil.</dt>
            <dd>zastíněných oken po celé ČR</dd>
          </div>
        </dl>
      </section>

      {/* SEKCE 1 — NABÍDKA */}
      <section className="pk-section pk-offer" id="nabidka" aria-labelledby="offer-h">
        <div className="pk-section__head">
          <p className="pk-eyebrow pk-eyebrow--dark">Co pro vás vyrobíme na míru</p>
          <h2 id="offer-h" className="pk-section__title">
            Od jednoho okna po celý dům
          </h2>
          <p className="pk-section__intro">
            Jako největší český partner značky Climax dodáváme stínění, které
            se vyrábí na váš rozměr — ne z regálu. Nevíte, co potřebujete?
            Řekneme vám, co dává smysl u vašeho okna.
          </p>
        </div>

        <div className="pk-offer__layout">
          <ul className="pk-offer__list">
            {products.map((p, i) => (
              <li key={p.name} className="pk-offer__item">
                <span className="pk-offer__idx">{String(i + 1).padStart(2, "0")}</span>
                <div className="pk-offer__text">
                  <h3 className="pk-offer__name">{p.name}</h3>
                  <p className="pk-offer__note">{p.note}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="pk-offer__figure">
            <img
              src="/section-1.webp"
              alt="Detail venkovních žaluzií na moderním domě"
              className="pk-offer__img"
              width={800}
              height={1000}
              loading="lazy"
            />
            <figcaption className="pk-offer__cap">
              Chytré ovládání Somfy — žaluzie samy zareagují na slunce i vítr.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA / REFERENCE */}
      <section className="pk-section pk-trust" id="reference" aria-labelledby="trust-h">
        <div className="pk-trust__grid">
          <div className="pk-trust__left">
            <p className="pk-eyebrow pk-eyebrow--dark">Rodinná firma, ne montážní parta</p>
            <h2 id="trust-h" className="pk-section__title">
              Zaměříme, vyrobíme,
              <br />
              přijedeme namontovat
            </h2>
            <p className="pk-section__intro">
              Každý výrobek projde výstupní kontrolou a montují ho naši
              technici — ne subdodavatel, který zmizí. Do showroomu v Brně
              zajděte s rozměry i bez nich, ukážeme rozdíly mezi typy stínění
              a materiály na vzornících.
            </p>
            <img
              src="/section-2.webp"
              alt="Interiér s vnitřními žaluziemi tlumícími odpolední světlo"
              className="pk-trust__img"
              width={900}
              height={620}
              loading="lazy"
            />
          </div>

          <div className="pk-trust__right">
            <p className="pk-reviews__label">Co říkají zákazníci</p>
            <ul className="pk-reviews">
              {reviews.map((r) => (
                <li key={r.name} className="pk-review">
                  <p className="pk-review__text">{r.text}</p>
                  <p className="pk-review__meta">
                    <span className="pk-review__name">{r.name}</span>
                    <span className="pk-review__product">{r.product}</span>
                  </p>
                </li>
              ))}
            </ul>
            <p className="pk-trust__contact">
              Napište nám na{" "}
              <a href="mailto:info@proklima.cz">info@proklima.cz</a> — ozveme
              se s termínem zaměření.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
