import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SunGarden — zahradní architektura Liberec | návrhy, realizace, údržba",
  description:
    "Od roku 1997 tvoříme zahrady na klíč v Liberci a okolí. Návrh, realizace i dlouhodobá péče pod jedním týmem. Přes 280 hotových zahrad, osobní dohled Stanislava Šťastného.",
  openGraph: {
    title: "SunGarden — zahradní architektura Liberec",
    description:
      "Návrh, realizace a údržba zahrad v Liberci. Jeden tým od prvního nápadu po poslední detail. Od roku 1997.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const kroky = [
  {
    faze: "Kořen",
    nazev: "Návrh zahrady",
    veta: "Zahrada začíná myšlenkou. Proměníme ji v plán, který drží pohromadě.",
    telo: "Přijedeme za vámi na pozemek, přečteme si orientaci ke slunci, půdu i okolí. Návrh dělá smysl esteticky i funkčně — s ohledem na rozpočet, budoucí údržbu a to, jak zahrada poroste za deset let.",
    body: [
      "Osobní konzultace přímo na pozemku",
      "Analýza prostoru, orientace, půdy a okolí",
      "Studie dispozičního řešení zahrady",
      "Osazovací plán rostlin — projekt výsadby",
      "Návrh materiálů a rozpočet realizace",
    ],
  },
  {
    faze: "Kmen",
    nazev: "Realizace na klíč",
    veta: "Proměníme návrh ve skutečnost. Jedna odpovědnost, jeden tým.",
    telo: "Postaráme se o celý proces — od přípravných prací přes terénní úpravy až po finální výsadbu a předání hotové zahrady. Žádné dohadování mezi projektantem a realizační firmou; všechno řešíme uvnitř jednoho týmu.",
    body: [
      "Přípravné a terénní práce",
      "Zpevněné plochy, cesty a vodní prvky",
      "Výsadba stromů, keřů a trvalek",
      "Trávníky a automatická závlaha",
      "Předání hotového díla s dokumentací",
    ],
  },
  {
    faze: "Koruna",
    nazev: "Údržba zahrady",
    veta: "Zahrada je živý organismus. Péče rozhoduje o výsledku.",
    telo: "Naší realizací práce nekončí. Aby si zahrada udržela vzhled i funkci, potřebuje pravidelnou odbornou péči. Nabízíme dlouhodobou i jednorázovou údržbu — s respektem k původnímu návrhu, ne proti němu.",
    body: [
      "Pravidelný sezónní řez a tvarování",
      "Péče o trávník a hnojení",
      "Kontrola a servis závlahy",
      "Odplevelení a mulčování záhonů",
      "Jednorázový úklid i celoroční paušál",
    ],
  },
];

const cisla = [
  { n: "1997", l: "rok, kdy jsme zasadili první zahradu" },
  { n: "280+", l: "realizovaných zahrad v Liberci a okolí" },
  { n: "100 %", l: "osobní dohled jednatele nad každou zakázkou" },
];

export default function Page() {
  return (
    <main className="sg">
      <header className="sg-top">
        <a className="sg-mark" href="#" aria-label="SunGarden, zahradní architektura Liberec">
          <span className="sg-mark-sun" aria-hidden="true" />
          <span className="sg-mark-text">
            Sun<span className="sg-mark-green">Garden</span>
          </span>
        </a>
        <span className="sg-loc">Liberec — Ruprechtice · od 1997</span>
      </header>

      <section className="sg-hero" aria-labelledby="sg-hero-h">
        <div className="sg-hero-media">
          <img
            src="/hero.webp"
            alt="Realizovaná zahrada od SunGarden s vytvarovanými záhony, trávníkem a zpevněnými cestami"
            className="sg-hero-img"
          />
        </div>
        <div className="sg-hero-copy">
          <p className="sg-eyebrow">Zahradní architektura · Liberecko</p>
          <h1 id="sg-hero-h" className="sg-hero-h">
            Zahrada, kterou<br />
            <em>necháme zakořenit</em><br />
            a doroste s vámi.
          </h1>
          <p className="sg-hero-sub">
            Návrh, realizaci i pozdější péči vede jeden tým — od prvního nápadu
            na papíře až po den, kdy si na trávníku sednete s kávou. Bez
            překladatelů mezi projektantem a firmou.
          </p>
          <div className="sg-hero-actions">
            <a className="sg-btn" href="tel:+420603454239">
              Zavolat Stanislavu Šťastnému
            </a>
            <a className="sg-btn-ghost" href="mailto:stastny@sungarden.cz">
              Napsat o konzultaci
            </a>
          </div>
        </div>
      </section>

      <section className="sg-cesta" aria-labelledby="sg-cesta-h">
        <div className="sg-sec-head">
          <p className="sg-eyebrow">Co pro vaši zahradu uděláme</p>
          <h2 id="sg-cesta-h" className="sg-sec-h">
            Tři fáze, jak roste strom — a jak rosteme s vaší zahradou.
          </h2>
          <p className="sg-sec-lead">
            Zahradu netvoříme za vás, ale s vámi. Stává se naším společným dílem
            — vaše představy a naše zkušenosti z terénu, kde vidíme, co v praxi
            skutečně funguje.
          </p>
        </div>

        <ol className="sg-strom">
          {kroky.map((k) => (
            <li className="sg-vetev" key={k.nazev}>
              <div className="sg-vetev-tag">
                <span className="sg-vetev-faze">{k.faze}</span>
              </div>
              <div className="sg-vetev-body">
                <h3 className="sg-vetev-h">{k.nazev}</h3>
                <p className="sg-vetev-veta">{k.veta}</p>
                <p className="sg-vetev-telo">{k.telo}</p>
                <ul className="sg-vetev-list">
                  {k.body.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>

        <figure className="sg-figure">
          <img
            src="/section-1.webp"
            alt="Detail hotové výsadby SunGarden — trvalky a okrasné traviny podél cesty"
            className="sg-figure-img"
          />
          <figcaption>
            Osazovací plán z papíru přeneseme do půdy rostlinu po rostlině.
          </figcaption>
        </figure>
      </section>

      <section className="sg-onas" aria-labelledby="sg-onas-h">
        <div className="sg-onas-grid">
          <div className="sg-onas-media">
            <img
              src="/section-2.webp"
              alt="Zahrada realizovaná firmou SunGarden se vzrostlou zelení a upraveným trávníkem"
              className="sg-onas-img"
            />
          </div>
          <div className="sg-onas-copy">
            <p className="sg-eyebrow">Kdo za zahradou stojí</p>
            <h2 id="sg-onas-h" className="sg-sec-h">
              Skoro třicet let stojím u zrodu nových zahrad.
            </h2>
            <p className="sg-onas-p">
              SunGarden působí v zahradní a krajinné architektuře nepřetržitě od
              roku 1997. Každého zákazníka znám osobně a rád vás navštívím při
              úvodní konzultaci. Rozumím realizacím, mám dlouholeté zkušenosti z
              terénu a celým procesem vás provedu od prvního nápadu až po
              poslední detail hotové zahrady.
            </p>
            <p className="sg-onas-p">
              Přebírám a nesu odpovědnost za to, že sen o nové zahradě dostane
              tvar. Osobně dohlížím na návrh i realizaci. Těším se na setkání u
              vás na zahradě.
            </p>
            <p className="sg-podpis">
              Stanislav Šťastný
              <span>zakladatel a jednatel SunGarden.cz</span>
            </p>
          </div>
        </div>

        <dl className="sg-cisla">
          {cisla.map((c) => (
            <div className="sg-cislo" key={c.n}>
              <dt>{c.n}</dt>
              <dd>{c.l}</dd>
            </div>
          ))}
        </dl>

        <p className="sg-ref">
          Přes 280 hotových zahrad je naše nejlepší vizitka. Na požádání vám rádi
          zprostředkujeme kontakt na naše klienty nebo vás vezmeme na prohlídku
          vybraných realizací na Liberecku.
        </p>
      </section>
    </main>
  );
}
