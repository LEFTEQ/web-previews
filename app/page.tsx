import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="cl-page">
      {/* HERO */}
      <header className="cl-hero">
        <nav className="cl-nav" aria-label="Hlavní">
          <a className="cl-mark" href="#top" aria-label="CLONÍK — žaluzie a rolety Brno">
            <span className="cl-mark-word">CLON</span>
            <span className="cl-mark-slats" aria-hidden="true">
              <i></i><i></i><i></i>
            </span>
            <span className="cl-mark-word">ÍK</span>
          </a>
          <span className="cl-nav-place">Brno &amp; okolí</span>
        </nav>

        <div className="cl-hero-grid">
          <div className="cl-hero-copy">
            <p className="cl-eyebrow">Žaluzie · rolety · sítě proti hmyzu</p>
            <h1 className="cl-h1">
              Světlo si
              <br />
              <span className="cl-h1-accent">nastavíte</span>
              <br />
              po lamele.
            </h1>
            <p className="cl-lede">
              Zaměříme, vyrobíme na míru a namontujeme stínění do bytu,
              domu i kanceláře. V Brně jezdíme na zaměření zdarma —
              a pokud vám okno nesedne do standardu, vyřešíme atyp.
            </p>
            <div className="cl-cta-row">
              <a className="cl-btn cl-btn-primary" href="tel:+420515000000">
                Objednat zaměření
              </a>
              <a className="cl-btn cl-btn-ghost" href="#nabidka">
                Co stíníme
              </a>
            </div>
          </div>

          <figure className="cl-hero-media">
            <img
              src="/hero.webp"
              alt="Interiérové žaluzie s vodorovnými lamelami filtrující ranní světlo do místnosti"
              className="cl-hero-img"
              width={1200}
              height={1500}
            />
            <figcaption className="cl-hero-tag">
              Lamely 25 mm · odstín na přání
            </figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — NABÍDKA */}
      <section className="cl-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="cl-section-head">
          <p className="cl-eyebrow cl-eyebrow-dark">Co pro vás uděláme</p>
          <h2 className="cl-h2" id="nabidka-h">
            Od okna k hotovému stínění
          </h2>
        </div>

        <div className="cl-offer">
          <ul className="cl-offer-list">
            {offer.map((o, i) => (
              <li className="cl-offer-item" key={o.title}>
                <span className="cl-offer-slat" aria-hidden="true" />
                <span className="cl-offer-no">{String(i + 1).padStart(2, "0")}</span>
                <div className="cl-offer-body">
                  <h3 className="cl-offer-title">{o.title}</h3>
                  <p className="cl-offer-text">{o.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <figure className="cl-offer-media">
            <img
              src="/section-1.webp"
              alt="Detail výroby a montáže rolety na míru"
              className="cl-offer-img"
              width={900}
              height={1100}
            />
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — DŮVĚRA */}
      <section className="cl-section cl-section-trust" aria-labelledby="onas-h">
        <div className="cl-trust-grid">
          <figure className="cl-trust-media">
            <img
              src="/section-2.webp"
              alt="Montér Cloníku při zaměření okna v brněnském bytě"
              className="cl-trust-img"
              width={900}
              height={1100}
            />
          </figure>

          <div className="cl-trust-copy">
            <p className="cl-eyebrow cl-eyebrow-dark">Proč lidé v Brně volají nám</p>
            <h2 className="cl-h2" id="onas-h">
              Malá dílna, která vás nenechá čekat týdny
            </h2>
            <p className="cl-trust-lede">
              Cloník děláme v pár lidech, takže s vámi mluví ten, kdo
              přijede zaměřit i namontovat. Žádné call centrum, žádné
              přeposílání mezi odděleními.
            </p>

            <dl className="cl-facts">
              {facts.map((f) => (
                <div className="cl-fact" key={f.label}>
                  <dt className="cl-fact-label">{f.label}</dt>
                  <dd className="cl-fact-value">{f.value}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="cl-quote">
              <p>
                „Přijeli v domluvený čas, lamely sedly na milimetr a
                v ložnici je konečně tma i v létě. Doporučuju.“
              </p>
              <cite>— Petra H., Brno-Žabovřesky</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

const offer: { title: string; text: string }[] = [
  {
    title: "Zaměření u vás",
    text: "Přijedeme, změříme každé okno a poradíme typ stínění i odstín. V Brně bez poplatku.",
  },
  {
    title: "Interiérové žaluzie",
    text: "Horizontální hliníkové i dřevěné, plisé a látkové rolety. Ovládání šňůrou i řetízkem.",
  },
  {
    title: "Venkovní rolety a screeny",
    text: "Předokenní rolety proti horku a hluku, screenové rolety na velké prosklení a terasy.",
  },
  {
    title: "Sítě proti hmyzu",
    text: "Pevné rámečky i rolovací sítě do oken a dveří. Vyrobíme i na atypické rozměry.",
  },
  {
    title: "Montáž a servis",
    text: "Namontujeme, seřídíme a když časem něco zaskřípe, přijedeme spravit — ne prodat nové.",
  },
];

const facts: { label: string; value: string }[] = [
  { label: "Zaměření v Brně", value: "zdarma" },
  { label: "Běžná dodací lhůta", value: "7–14 dní" },
  { label: "Záruka na mechaniku", value: "5 let" },
];

// eslint hint: umožní budoucí inline styly, pokud budou potřeba
export const dynamic = "force-static";
void (0 as unknown as CSSProperties);
