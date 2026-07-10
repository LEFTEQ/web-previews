import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sonepar — fotovoltaika ze skladu v Hradci Králové",
  description:
    "Kompletní materiál pro fotovoltaiku: panely, měniče, baterie, kabeláž i jištění. Objednáte do 20:00, druhý den to máte na střeše. Sklad Hradec Králové.",
};

const kwSteps = [
  {
    no: "01",
    dc: "Panely a konstrukce",
    label: "Střecha",
    desc:
      "Monokrystalické panely, hliníkové nosné systémy na plech, tašku i plochou střechu. Skladem, ne na objednávku z Asie.",
    items: ["FV panely 400–450 Wp", "Nosné konstrukce", "Kabeláž solar 6 mm²", "MC4 konektory"],
  },
  {
    no: "02",
    dc: "Měniče a baterie",
    label: "Technická místnost",
    desc:
      "Střídače hybridní i síťové, bateriová úložiště, wallboxy. Značky, na které jsou lidé zvyklí a mají u nás podporu.",
    items: ["Hybridní střídače", "Bateriová úložiště", "Wallboxy pro elektromobily", "Optimizéry"],
  },
  {
    no: "03",
    dc: "Jištění a rozvaděč",
    label: "Rozvaděč",
    desc:
      "DC pojistky, přepěťové ochrany typu 1+2, odpínače, rozvodnice. Aby revizní technik podepsal bez řečí.",
    items: ["DC/AC ochrany", "Přepěťové ochrany T1+T2", "Odpínače a jističe", "Rozvodnice"],
  },
];

export default function Page() {
  return (
    <main className="sp">
      <header className="sp-nav" aria-label="Hlavní">
        <a className="sp-mark" href="#" aria-label="Sonepar fotovoltaika, domů">
          <span className="sp-mark__bolt" aria-hidden="true" />
          <span className="sp-mark__name">
            Sonepar<span className="sp-mark__sub">/ FV Hradec&nbsp;Králové</span>
          </span>
        </a>
        <nav className="sp-nav__links">
          <a href="#sortiment">Sortiment</a>
          <a href="#duvera">Proč my</a>
          <a className="sp-nav__cta" href="#sortiment">Do košíku k projektu</a>
        </nav>
      </header>

      <section className="sp-hero" aria-labelledby="hero-h">
        <div className="sp-hero__grid">
          <div className="sp-hero__copy">
            <p className="sp-eyebrow">
              <span className="sp-eyebrow__dot" aria-hidden="true" />
              Velkoobchod pro montážní firmy · sklad Hradec&nbsp;Králové
            </p>
            <h1 id="hero-h" className="sp-hero__h">
              Celá fotovoltaika
              <br />
              <span className="sp-hero__accent">z jedné palety.</span>
            </h1>
            <p className="sp-hero__lead">
              Od panelu přes měnič a baterii až po DC pojistku v rozvaděči.
              Objednáte dnes do 20:00, zítra to máte na stavbě — bez čekání na
              kontejner z druhého konce světa.
            </p>
            <div className="sp-hero__actions">
              <a className="sp-btn" href="#sortiment">Poskládat sestavu</a>
              <a className="sp-btn sp-btn--ghost" href="#duvera">Máme skladem</a>
            </div>
            <dl className="sp-hero__meter" aria-label="Klíčová čísla">
              <div>
                <dt>Položek skladem</dt>
                <dd>210&nbsp;000</dd>
              </div>
              <div>
                <dt>Objednávka do</dt>
                <dd>20:00</dd>
              </div>
              <div>
                <dt>Dodání</dt>
                <dd>druhý den</dd>
              </div>
            </dl>
          </div>
          <figure className="sp-hero__figure">
            <img
              src="/hero.webp"
              alt="Fotovoltaické panely na střeše zapojené do měniče a bateriového úložiště"
              className="sp-hero__img"
              width={880}
              height={1000}
            />
            <figcaption className="sp-hero__tag">
              <span className="sp-hero__tag-k">Sestava na klíč</span>
              <span className="sp-hero__tag-v">panel → měnič → baterie → jištění</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section id="sortiment" className="sp-flow" aria-labelledby="flow-h">
        <div className="sp-sec-head">
          <p className="sp-eyebrow sp-eyebrow--dark">Sortiment podle toku energie</p>
          <h2 id="flow-h" className="sp-sec-h">
            Sledujeme energii od střechy až do zásuvky
          </h2>
          <p className="sp-sec-sub">
            Instalaci neskládáte podle katalogových kategorií, ale podle toho,
            kudy poteče proud. Tak jsme srovnali i náš sklad — tři zastávky,
            žádný chybějící díl na stavbě.
          </p>
        </div>

        <ol className="sp-steps">
          {kwSteps.map((s) => (
            <li className="sp-step" key={s.no}>
              <div className="sp-step__head">
                <span className="sp-step__no">{s.no}</span>
                <span className="sp-step__label">{s.label}</span>
              </div>
              <h3 className="sp-step__h">{s.dc}</h3>
              <p className="sp-step__desc">{s.desc}</p>
              <ul className="sp-step__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <figure className="sp-flow__img">
          <img
            src="/section-1.webp"
            alt="Skladové regály s fotovoltaickým materiálem připraveným k expedici"
            width={1200}
            height={640}
          />
        </figure>
      </section>

      <section id="duvera" className="sp-trust" aria-labelledby="trust-h">
        <div className="sp-trust__grid">
          <figure className="sp-trust__img">
            <img
              src="/section-2.webp"
              alt="Pracovník výdejního skladu Sonepar předává objednávku montážní firmě"
              width={900}
              height={1040}
            />
          </figure>
          <div className="sp-trust__copy">
            <p className="sp-eyebrow sp-eyebrow--dark">Proč tady nakupují montéři</p>
            <h2 id="trust-h" className="sp-sec-h">
              Nejsme e-shop na jedno použití. Jsme sklad za rohem.
            </h2>
            <p className="sp-sec-sub">
              Fotovoltaiku umí objednat kdekdo. My k ní přidáme člověka, který
              vám zvedne telefon, zkontroluje dimenzování a když v pátek chybí
              jeden konektor, vyřeší to dřív, než zabalíte nářadí.
            </p>

            <dl className="sp-facts">
              <div className="sp-fact">
                <dt>Individuální ceny</dt>
                <dd>
                  Po přihlášení vidíte svoje velkoobchodní ceny, ne pultovky.
                </dd>
              </div>
              <div className="sp-fact">
                <dt>Konfigurátory FV</dt>
                <dd>
                  Návrh sestavy panelů, měniče a baterie s kontrolou
                  kompatibility.
                </dd>
              </div>
              <div className="sp-fact">
                <dt>Pobočka v Hradci</dt>
                <dd>
                  Osobní odběr i poradna přímo ve východních Čechách.
                </dd>
              </div>
              <div className="sp-fact">
                <dt>Značky s podporou</dt>
                <dd>
                  Schneider, Eaton, Siemens — a servis, když je potřeba.
                </dd>
              </div>
            </dl>

            <blockquote className="sp-quote">
              „Zavolám v osm večer, ráno je materiál na střeše. Za deset let
              montáží jsem lepší sklad na fotovoltaiku nenašel.“
              <cite>— Petr V., montážní firma FVE, Náchodsko</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
