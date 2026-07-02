// Obuv Svoboda — opravna obuvi a koženého zboží, Brno
// Návrh: řemeslný, typografický, bez fotek. Signature prvek: „steh" — přerušovaná
// sedlářská linka, která prošívá celou stránku jako nit botu.

const opravy = [
  {
    nazev: "Podpatky a patníky",
    popis:
      "Sešlapané podpatky vyměníme za nové — gumové, kožené i kombinované. Na počkání, pokud máme materiál skladem.",
    cas: "na počkání až 2 dny",
  },
  {
    nazev: "Podrážky a podešve",
    popis:
      "Prošoupané podešve, uvolněné špičky, nové polopodrážky. Lepíme i šijeme — podle konstrukce boty, ne podle toho, co je rychlejší.",
    cas: "2–5 dnů",
  },
  {
    nazev: "Šití a lepení svršků",
    popis:
      "Prasklý šev, odlepený svršek, roztržená kůže. Prošijeme sedlářskou nití, která vydrží déle než původní strojový steh.",
    cas: "do 3 dnů",
  },
  {
    nazev: "Zipy a zapínání",
    popis:
      "Výměna zipů u kozaček, bot i kabelek. Vsadíme kvalitní zip včetně jezdce — nejčastější oprava, kterou u nás lidé nechávají.",
    cas: "2–4 dny",
  },
  {
    nazev: "Kabelky, tašky, opasky",
    popis:
      "Utržená ucha, prodření, nové dírky do opasku, výměna karabin a přezek. Kožené zboží opravujeme stejně pečlivě jako boty.",
    cas: "podle rozsahu",
  },
  {
    nazev: "Napínání a roztažení",
    popis:
      "Tlačí bota přes nárt nebo v prstech? Roztáhneme ji na kopytě — šetrně, bez poškození kůže.",
    cas: "2–3 dny",
  },
];

const sortiment = [
  {
    kategorie: "Obuv",
    polozky: "Vycházková, společenská, domácí, zdravotní — letní i zimní kolekce.",
  },
  {
    kategorie: "Kožená galanterie",
    polozky:
      "Dámské kabelky a psaníčka, pánské aktovky, peněženky, opasky, kožené rukavice, batohy i brašny.",
  },
  {
    kategorie: "Péče o obuv",
    polozky:
      "Krémy, impregnace, balzámy na kůži, stélky, tkaničky všech druhů, napínáky, kartáče i regenerační olej na ztvrdlou useň.",
  },
];

export default function Page() {
  return (
    <main className="os">
      {/* ===== HERO ===== */}
      <header className="os-hero">
        <div className="os-hero-inner">
          <div className="os-brand">
            <span className="os-brand-mark" aria-hidden="true">
              {/* wordmark: ševcovská "kramflek" značka */}
              <svg viewBox="0 0 40 40" width="40" height="40" role="presentation">
                <path
                  d="M8 6 L8 22 Q8 32 18 32 L32 32 L32 26 Q32 22 26 22 L16 22 L16 6 Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 25 Q11 29 17 29 L29 29"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeDasharray="3 3"
                />
              </svg>
            </span>
            <span className="os-brand-name">
              Obuv <em>Svoboda</em>
            </span>
          </div>

          <p className="os-eyebrow">Opravna obuvi a koženého zboží · Brno</p>

          <h1 className="os-h1">
            <span className="os-h1-line os-h1-line--1">Boty, které</span>
            <span className="os-h1-line os-h1-line--2">vám sedí,</span>
            <span className="os-h1-line os-h1-line--3">
              si zaslouží <span className="os-h1-stitch">druhý život.</span>
            </span>
          </h1>

          <p className="os-lead">
            Rodinná opravna v Brně. Podpatky vyměníme často na počkání, zip do
            kozaček do pár dnů. Šijeme sedlářskou nití, lepíme tak, aby to
            drželo — a poradíme, kdy se oprava vyplatí a kdy už ne.
          </p>

          <div className="os-hero-actions">
            <a className="os-btn os-btn--primary" href="tel:+420">
              Zavolat do dílny
            </a>
            <a className="os-btn os-btn--ghost" href="#opravy">
              Co opravíme
            </a>
          </div>

          <dl className="os-hero-facts">
            <div>
              <dt>Podpatky</dt>
              <dd>často na počkání</dd>
            </div>
            <div>
              <dt>Platba</dt>
              <dd>kartou i hotově</dd>
            </div>
            <div>
              <dt>Vedeme</dt>
              <dd>rodinnou dílnu</dd>
            </div>
          </dl>
        </div>

        {/* signature: velká silueta podešve prošitá stehem */}
        <div className="os-hero-sole" aria-hidden="true">
          <svg viewBox="0 0 300 640" role="presentation" preserveAspectRatio="xMidYMid meet">
            <path
              className="os-sole-fill"
              d="M150 18
                 C 230 18 262 90 258 178
                 C 255 248 214 300 208 360
                 C 203 410 226 448 228 500
                 C 230 570 196 622 148 622
                 C 100 622 70 574 72 506
                 C 74 452 96 412 92 360
                 C 87 298 46 250 42 178
                 C 38 90 70 18 150 18 Z"
            />
            <path
              className="os-sole-stitch"
              d="M150 40
                 C 216 40 240 100 236 176
                 C 233 242 194 296 188 358
                 C 183 412 206 450 208 502
                 C 210 562 182 600 148 600
                 C 114 600 88 566 90 504
                 C 92 452 114 414 110 358
                 C 105 294 66 240 64 176
                 C 61 100 84 40 150 40 Z"
            />
            <line className="os-sole-stitch os-sole-heel" x1="84" y1="456" x2="216" y2="456" />
          </svg>
        </div>
      </header>

      {/* šicí linka — předěl */}
      <div className="os-seam" aria-hidden="true" />

      {/* ===== SEKCE 1: OPRAVY ===== */}
      <section className="os-section" id="opravy">
        <div className="os-section-head">
          <p className="os-eyebrow">Opravna</p>
          <h2 className="os-h2">Co u nás necháte spravit</h2>
          <p className="os-section-lead">
            Přineste botu, kabelku nebo opasek na prodejnu — na místě řekneme,
            co s tím uděláme, kolik to bude stát a kdy si to vyzvednete.
          </p>
        </div>

        <ul className="os-grid">
          {opravy.map((o) => (
            <li className="os-card" key={o.nazev}>
              <h3 className="os-card-title">{o.nazev}</h3>
              <p className="os-card-text">{o.popis}</p>
              <p className="os-card-tag">
                <span aria-hidden="true">⌚&nbsp;</span>
                {o.cas}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <div className="os-seam" aria-hidden="true" />

      {/* ===== SEKCE 2: PRODEJNA + DŮVĚRA ===== */}
      <section className="os-section os-section--shop">
        <div className="os-shop-cols">
          <div className="os-shop-about">
            <p className="os-eyebrow os-eyebrow--light">Prodejna Svobodovi</p>
            <h2 className="os-h2 os-h2--light">
              Vedle dílny máme i obchod — a víme, co prodáváme
            </h2>
            <p className="os-shop-text">
              Kdo boty denně opravuje, pozná, které vydrží. Proto v prodejně
              najdete obuv a koženou galanterii, za kterou si stojíme — a ke
              každému páru poradíme správnou péči, aby k nám do dílny musel co
              nejpozději.
            </p>
            <p className="os-shop-text">
              Stélky, tkaničky, krémy a impregnace vybereme přesně k vaší botě.
              Ne podle regálu, ale podle materiálu.
            </p>
            <p className="os-shop-note">Platit můžete kartou i hotově.</p>
          </div>

          <ul className="os-shop-list">
            {sortiment.map((s) => (
              <li className="os-shop-item" key={s.kategorie}>
                <h3 className="os-shop-item-title">{s.kategorie}</h3>
                <p className="os-shop-item-text">{s.polozky}</p>
              </li>
            ))}
          </ul>
        </div>

        <blockquote className="os-quote">
          <p>
            „Nejlepší bota je ta rozchozená. Než ji vyhodíte, přineste ji nám —
            většinou se dá zachránit.“
          </p>
          <cite>— Svobodovi, vaši ševci z Brna</cite>
        </blockquote>
      </section>
    </main>
  );
}
