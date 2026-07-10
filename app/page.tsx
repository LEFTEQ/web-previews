import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="chp">
      {/* ── HERO ─────────────────────────────────────────────── */}
      <header className="chp-top">
        <a className="chp-mark" href="#top" aria-label="Centrum hypotečního poradenství — domů">
          <span className="chp-mark-c" aria-hidden="true">CHP</span>
          <span className="chp-mark-name">
            Centrum hypotečního poradenství
            <em>Ostrava · od roku 2001</em>
          </span>
        </a>
        <nav className="chp-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#tym">Náš tým</a>
          <a className="chp-nav-cta" href="#kontakt">Domluvit schůzku</a>
        </nav>
      </header>

      <section className="chp-hero" id="top">
        <div className="chp-hero-copy">
          <p className="chp-eyebrow">Finanční poradenství pro rodiny z Ostravy a okolí</p>
          <h1 className="chp-h1">
            Ráno se probudíte <span>a bydlíte ve svém.</span>
          </h1>
          <p className="chp-lede">
            Provedeme vás celým financováním bydlení — od prvního propočtu až po
            schválení hypotéky v bance. K tomu pojistky bez zbytečných příplatků
            a plán, který dává smysl. Už 23 let, s více než 40 bankami a
            pojišťovnami za zády.
          </p>
          <div className="chp-hero-actions">
            <a className="chp-btn" href="#kontakt">Nezávazně si spočítat hypotéku</a>
            <a className="chp-btn-ghost" href="#sluzby">Co pro vás uděláme</a>
          </div>
          <dl className="chp-facts">
            <div>
              <dt>23 let</dt>
              <dd>vás provázíme financemi</dd>
            </div>
            <div>
              <dt>40+</dt>
              <dd>bank a pojišťoven porovnáváme</dd>
            </div>
            <div>
              <dt>Ostrava</dt>
              <dd>schůzka osobně i online</dd>
            </div>
          </dl>
        </div>
        <figure className="chp-hero-media">
          <img
            src="/hero.webp"
            alt="Poradci Centra hypotečního poradenství při konzultaci s klienty"
            className="chp-hero-img"
          />
          <figcaption>Konzultace v kanceláři v Ostravě</figcaption>
        </figure>
      </section>

      {/* ── SLUŽBY ───────────────────────────────────────────── */}
      <section className="chp-services" id="sluzby">
        <div className="chp-section-head">
          <p className="chp-eyebrow chp-eyebrow--dark">S čím vám pomůžeme</p>
          <h2 className="chp-h2">Čtyři díly jedné skládačky vašich financí</h2>
          <p className="chp-section-sub">
            Neprodáváme jednotlivé produkty. Skládáme je jako puzzle tak, aby na
            sebe navazovaly, nepřekrývaly se a vy neplatili za nic zbytečného.
          </p>
        </div>

        <ol className="chp-cards">
          {SLUZBY.map((s, i) => (
            <li
              className="chp-card"
              key={s.title}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="chp-card-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="chp-card-title">{s.title}</h3>
              <p className="chp-card-claim">{s.claim}</p>
              <ul className="chp-card-list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <span className="chp-card-cta">{s.cta}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* ── TÝM / DŮVĚRA ─────────────────────────────────────── */}
      <section className="chp-trust" id="tym">
        <figure className="chp-trust-media">
          <img
            src="/section-1.webp"
            alt="Tým specialistů Centra hypotečního poradenství"
            className="chp-trust-img"
          />
        </figure>
        <div className="chp-trust-copy">
          <p className="chp-eyebrow chp-eyebrow--dark">Náš tým</p>
          <h2 className="chp-h2">
            Jedinečný tým specialistů, který stojí za vámi
          </h2>
          <p className="chp-trust-lede">
            Poskytujeme dlouhodobé a komplexní poradenství — se specializací na
            financování bydlení, pojištění rizik a tvorbu finanční rezervy. Ze
            čtyřiceti partnerů pro vás pečlivě vybíráme ty nejvýhodnější produkty.
          </p>

          <blockquote className="chp-quote">
            „Máme velkou radost, že klienti díky nám lépe bydlí, jsou lépe
            zabezpečeni a víc se usmívají. Mít v osobních financích pořádek je
            prostě pecka.“
            <cite>
              <strong>Ing. Miroslav Pustelník, MBA</strong>
              Zakladatel společnosti
            </cite>
          </blockquote>

          <dl className="chp-stats">
            <div>
              <dt>23</dt>
              <dd>let s vámi</dd>
            </div>
            <div>
              <dt>40+</dt>
              <dd>produktových partnerů</dd>
            </div>
            <div>
              <dt>tisíce</dt>
              <dd>spokojených klientů</dd>
            </div>
            <div>
              <dt>Ostrava</dt>
              <dd>a celý Moravskoslezský kraj</dd>
            </div>
          </dl>

          <img
            src="/section-2.webp"
            alt="Klienti před vlastním bydlením, které pomohlo financovat Centrum hypotečního poradenství"
            className="chp-trust-strip"
          />
          <p className="chp-trust-note">
            <strong>Praktická rada z praxe:</strong> Jak nahlásit pojistnou
            událost po povodních? Škodu důkladně zdokumentujte dřív, než začnete
            uklízet — fotky a soupis rozhodují o výši plnění. Rádi poradíme i
            v takové situaci.
          </p>
        </div>
      </section>
    </main>
  );
}

const SLUZBY = [
  {
    title: "Hypotéky",
    claim: "Financování a refinancování vašeho bydlení.",
    items: [
      "Hypotéka na nákup vlastního bydlení",
      "Úvěr na rekonstrukci",
      "Refinancování současné hypotéky",
      "Konsolidace a optimalizace dluhů",
    ],
    cta: "Potřebuji financování",
  },
  {
    title: "Pojištění",
    claim: "Nastavíme ochranu vašeho života i majetku.",
    items: [
      "Životní pojištění",
      "Pojištění nemovitosti a domácnosti",
      "Pojištění vozidel a odpovědnosti",
      "Pravidelný servis pojistek",
    ],
    cta: "Potřebuji pojistit",
  },
  {
    title: "Investice",
    claim: "Bezpečná investice je jen ta, které rozumíte.",
    items: [
      "Spořicí účty a termínované vklady",
      "Penzijní a stavební spoření",
      "Fondy, OPF i ETF",
      "Nákup fyzického zlata",
    ],
    cta: "Chci investovat",
  },
  {
    title: "Finanční plán",
    claim: "Začátek zdravých rodinných financí.",
    items: [
      "Pojmenujeme rizika ztráty příjmu",
      "Analýza současných i budoucích dluhů",
      "Smysluplné spoření a investování",
      "Připravíme vás na krizové situace",
    ],
    cta: "Zjistit více o plánu",
  },
];
