import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Farmářský obchod Domažlice — čerstvé od místních farmářů, uzenářů a řezníků",
  description:
    "Kvalitní potraviny přímo od místních dodavatelů na Kostelní 182 v Domažlicích. Čerství pstruzi a kapři ve čtvrtek, drůbež a králíci ve středu — na objednávku. Regionální potravina Plzeňského kraje.",
  openGraph: {
    title: "Farmářský obchod Domažlice",
    description:
      "Čerstvé potraviny od místních farmářů, uzenářů a řezníků. Ryby na objednávku každý čtvrtek, drůbež každou středu.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Farmářský obchod Domažlice" }],
  },
};

const objednavky = [
  {
    den: "Čtvrtek",
    zbozi: "Čerství pstruzi a kapři",
    uzaverka: "Objednávky do středy 9:00",
  },
  {
    den: "Středa",
    zbozi: "Slepice, kuřata, kachny, králíci",
    uzaverka: "Objednávky do pondělí",
  },
];

const pult = [
  {
    nazev: "Maso a uzeniny",
    popis:
      "Od řezníků a uzenářů, které známe jménem. Poctivé bůčky, klobásy a domácí paštiky podle tradičních i nových receptur.",
  },
  {
    nazev: "Ovoce a zelenina",
    popis:
      "Čerstvá sezónní úroda z okolních polí a sadů. Sklizeno nedaleko, na pultě za pár hodin.",
  },
  {
    nazev: "Med a domácí džemy",
    popis:
      "Med od místních včelařů a zavařeniny vařené po domácku — sladká zásoba do spíže na celý rok.",
  },
  {
    nazev: "Byliny, čaje a doplňky",
    popis:
      "Bylinné extrakty, zdravotní čaje a doplňky stravy — přírodní podpora pro tělo i mysl.",
  },
];

const otevreno = [
  ["Pondělí", "8:30 – 16:30"],
  ["Úterý", "8:30 – 16:30"],
  ["Středa", "8:30 – 16:30"],
  ["Čtvrtek", "8:30 – 16:30"],
  ["Pátek", "8:30 – 16:30"],
  ["Sobota", "zavřeno"],
  ["Neděle", "zavřeno"],
];

export default function Page() {
  return (
    <main className="fo">
      <header className="fo-top">
        <a className="fo-brand" href="#" aria-label="Farmářský obchod Domažlice">
          <span className="fo-brand-mark">FO</span>
          <span className="fo-brand-name">
            <strong>Farmářský obchod</strong>
            <em>Domažlice</em>
          </span>
        </a>
        <div className="fo-top-info">
          <a href="tel:+420776092204" className="fo-top-tel">+420 776 092 204</a>
          <span className="fo-top-addr">Kostelní 182, Domažlice</span>
        </div>
      </header>

      <section className="fo-hero">
        <div className="fo-hero-media">
          <img
            src="/hero.webp"
            alt="Pult farmářského obchodu s čerstvými potravinami od místních dodavatelů"
            className="fo-hero-img"
            width={1600}
            height={1200}
          />
        </div>
        <div className="fo-hero-body">
          <p className="fo-eyebrow">Kostelní 182 · Domažlice · od místních farmářů</p>
          <h1 className="fo-hero-title">
            Naše farmáře,
            <br />
            uzenáře a řezníky
            <br />
            <span>známe jménem.</span>
          </h1>
          <p className="fo-hero-lead">
            Každý kousek na našem pultě má původ a příběh. Vybíráme dodavatele,
            kteří dělají potraviny poctivě — a s oceněním Regionální potravina
            Plzeňského kraje.
          </p>
          <div className="fo-hero-actions">
            <a href="tel:+420776092204" className="fo-btn fo-btn-primary">Zavolat a objednat</a>
            <a href="mailto:info@farmarskyobchod.eu" className="fo-btn fo-btn-ghost">Napsat e-mail</a>
          </div>
        </div>
      </section>

      <section className="fo-order" aria-labelledby="order-title">
        <div className="fo-order-head">
          <p className="fo-eyebrow fo-eyebrow-dark">Čerstvé na objednávku</p>
          <h2 id="order-title" className="fo-h2">Dva dny v týdnu vozíme na objednávku</h2>
          <p className="fo-order-note">
            Ryby i drůbež dorážejí čerstvé přesně na den. Stačí zavolat do
            uzávěrky a mít připraveno.
          </p>
        </div>
        <ol className="fo-order-list">
          {objednavky.map((o) => (
            <li key={o.den} className="fo-order-item">
              <span className="fo-order-day">{o.den}</span>
              <span className="fo-order-goods">{o.zbozi}</span>
              <span className="fo-order-deadline">{o.uzaverka}</span>
            </li>
          ))}
        </ol>
        <a href="tel:+420776092204" className="fo-btn fo-btn-primary fo-order-cta">
          Objednat telefonicky
        </a>
      </section>

      <section className="fo-shelf" aria-labelledby="shelf-title">
        <div className="fo-shelf-grid">
          <div className="fo-shelf-media">
            <img
              src="/section-1.webp"
              alt="Regionální potraviny — ovoce, zelenina, med a domácí džemy"
              className="fo-shelf-img"
              width={1200}
              height={1200}
              loading="lazy"
            />
          </div>
          <div className="fo-shelf-body">
            <p className="fo-eyebrow fo-eyebrow-dark">Co najdete na pultě</p>
            <h2 id="shelf-title" className="fo-h2">Od masa po byliny — pod jednou střechou</h2>
            <ul className="fo-shelf-list">
              {pult.map((p) => (
                <li key={p.nazev} className="fo-shelf-item">
                  <h3 className="fo-shelf-name">{p.nazev}</h3>
                  <p className="fo-shelf-desc">{p.popis}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="fo-trust" aria-labelledby="trust-title">
        <figure className="fo-quote">
          <blockquote>
            „Denně děláme jednu ze dvou věcí: buď upevňujeme své zdraví, nebo
            podporujeme nemoc.“
          </blockquote>
          <figcaption>— Adelle Davisová</figcaption>
        </figure>
        <div className="fo-trust-grid">
          <div className="fo-trust-media">
            <img
              src="/section-2.webp"
              alt="Interiér farmářského obchodu Domažlice"
              className="fo-trust-img"
              width={1200}
              height={900}
              loading="lazy"
            />
          </div>
          <div className="fo-trust-body">
            <p className="fo-eyebrow fo-eyebrow-dark">Proč k nám chodit</p>
            <h2 id="trust-title" className="fo-h2">Podpora místní komunity je součást každého nákupu</h2>
            <p className="fo-trust-lead">
              Každý dodavatel u nás prošel výběrem podle závazku kvalitě a
              etickému podnikání. Nakupujete-li u nás, podporujete tradiční
              zemědělství i udržitelnou výrobu potravin v okolí Domažlic.
            </p>
            <div className="fo-hours">
              <h3 className="fo-hours-title">Otevírací doba</h3>
              <dl className="fo-hours-list">
                {otevreno.map(([den, cas]) => (
                  <div key={den} className={cas === "zavřeno" ? "fo-hours-row is-closed" : "fo-hours-row"}>
                    <dt>{den}</dt>
                    <dd>{cas}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="fo-trust-meta">
              IČO 19921233 · Kostelní 182, 344 01 Domažlice
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
