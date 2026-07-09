import type { CSSProperties } from "react";

const nabidka = [
  {
    kod: "38",
    jednotka: "°C",
    nazev: "Vířivky HotSpring",
    popis:
      "Zastupujeme největšího světového výrobce vířivých van HotSpring USA. Slaná voda Fresh Water System, odnímatelný dotykový panel i pohyblivé trysky Moto‑Massage — do interiéru i na zahradu s nízkými provozními náklady.",
    detail: "Made in USA · design BMW Group",
  },
  {
    kod: "90",
    jednotka: "°C",
    nazev: "Finské sauny a infrakabiny",
    popis:
      "Luxusní finské sauny, saunové domky, parní kabiny i infrakabiny na míru. Spolupracujeme s architekty a hlídáme každý detail — od dřeva po osvětlení.",
    detail: "Design Timo Nakari",
  },
  {
    kod: "28",
    jednotka: "m/s",
    nazev: "Swim Spa — Endless Pools",
    popis:
      "Plavací vany s protiproudem pro kondiční plavání, rehabilitaci a podvodní cvičení. Volitelný podvodní běžecký pás promění zahradu i interiér v celoroční oázu.",
    detail: "Endless Pools, USA",
  },
];

const pece = [
  {
    stitek: "Showroom",
    text:
      "Vyzkoušejte si ergonomii a design vířivek naživo v našem pražském showroomu na Kodaňské. Rezervaci termínu domluvíme telefonicky.",
  },
  {
    stitek: "Servis všech značek",
    text:
      "Servisujeme vířivky i bazény napříč všemi značkami — ne jen ty, které jsme dodali. Pravidelná péče prodlouží životnost vaší vany o roky.",
  },
  {
    stitek: "Realizace i na chatě",
    text:
      "Dopravu a montáž zvládneme i na těžko přístupná místa. Od zaměření přes usazení jeřábem až po první napuštění řešíme kompletně za vás.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Spa & Wellness, Praha">
          <span className="wordmark__spa">spa</span>
          <span className="wordmark__amp">&amp;</span>
          <span className="wordmark__well">wellness</span>
        </a>
        <span className="topbar__loc">Kodaňská 73 · Praha 10</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__ripple" aria-hidden="true">
          {Array.from({ length: 7 }).map((_, i) => (
            <span
              key={i}
              className="ring"
              style={{ "--i": i } as CSSProperties}
            />
          ))}
        </div>

        <p className="hero__eyebrow">Vířivky · Sauny · Bazény · Swim Spa</p>
        <h1 id="hero-title" className="hero__title">
          <span className="hero__line hero__line--soft">Teplá voda,</span>
          <span className="hero__line hero__line--big">celý rok</span>
          <span className="hero__line hero__line--big hero__line--fill">
            u vás doma
          </span>
        </h1>
        <p className="hero__lede">
          Prožijte masáž a klid ve vířivce HotSpring — na zahradě, v interiéru,
          s rodinou i o samotě. Od showroomu po montáž jeřábem na chatě
          Beneška. Praha, řemeslo a technologie, kterým rozumíme.
        </p>
        <div className="hero__actions">
          <a className="btn btn--solid" href="tel:+420605440544">
            Zavolat 605 440 544
          </a>
          <a className="btn btn--ghost" href="#nabidka">
            Prohlédnout nabídku
          </a>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-title">
        <div className="section-head">
          <h2 id="nabidka-title" className="section-head__title">
            Co u nás vyberete
          </h2>
          <p className="section-head__note">
            Tři světy tepla a vody — každý s vlastní ideální teplotou.
          </p>
        </div>

        <ul className="cards">
          {nabidka.map((item) => (
            <li key={item.nazev} className="card">
              <div className="card__temp" aria-hidden="true">
                <span className="card__num">{item.kod}</span>
                <span className="card__unit">{item.jednotka}</span>
              </div>
              <h3 className="card__title">{item.nazev}</h3>
              <p className="card__text">{item.popis}</p>
              <p className="card__detail">{item.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" aria-labelledby="duvera-title">
        <div className="duvera__grid">
          <figure className="duvera__media">
            <img
              src="/section-1.webp"
              alt="Vířivá vana HotSpring připravená k relaxaci"
              loading="lazy"
            />
          </figure>

          <div className="duvera__body">
            <h2 id="duvera-title" className="duvera__title">
              Ve vodě se vyznáme přes dvacet let
            </h2>
            <p className="duvera__lede">
              Nejsme e‑shop bez tváře. Máme showroom v Praze, kde si vířivku
              osaháte a vyzkoušíte, a tým, který ji přiveze, usadí a naučí vás
              se o ni starat. Dodáváme značky, za kterými si stojíme.
            </p>

            <ul className="pece">
              {pece.map((p) => (
                <li key={p.stitek} className="pece__item">
                  <span className="pece__stitek">{p.stitek}</span>
                  <p className="pece__text">{p.text}</p>
                </li>
              ))}
            </ul>

            <figure className="duvera__media duvera__media--inline">
              <img
                src="/section-2.webp"
                alt="Finská sauna s dřevěným obkladem"
                loading="lazy"
              />
            </figure>

            <p className="duvera__contact">
              Showroom &amp; servis · Kodaňská 1509/73, 101 00 Praha 10 ·{" "}
              <a href="mailto:office@virivkysauny.cz">office@virivkysauny.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
