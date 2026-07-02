export const metadata = {
  title: "Elektro Štěpán s.r.o. — Elektroservis Františkovy Lázně",
  description:
    "Elektroservis ve Františkových Lázních. Opravy elektroinstalací, revize, rozvaděče, zásuvky, osvětlení i pohotovostní zásahy. J. Wolkra 106/7, Horní Lomany.",
  openGraph: {
    title: "Elektro Štěpán s.r.o. — Elektroservis Františkovy Lázně",
    description:
      "Opravy elektroinstalací, revize a rozvaděče ve Františkových Lázních a okolí. Rychle, čistě, pod proudem od první domluvy.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    okruh: "L1",
    nazev: "Opravy a poruchy",
    popis:
      "Nejde vám zásuvka, vypadává jistič, jiskří vypínač? Najdeme příčinu a opravíme ji na místě. Většinu poruch v bytě nebo domě vyřešíme při první návštěvě.",
    polozky: ["Zásuvky a vypínače", "Vypadávající jističe", "Poruchy osvětlení", "Prodlužování okruhů"],
  },
  {
    okruh: "L2",
    nazev: "Elektroinstalace",
    popis:
      "Nové rozvody při rekonstrukci bytu, domu nebo provozovny. Navrhneme okruhy tak, aby stačily i za deset let — na tepelné čerpadlo, indukci nebo wallbox.",
    polozky: ["Rozvody v novostavbách", "Rekonstrukce bytových jader", "Příprava pro wallbox", "Hromosvody"],
  },
  {
    okruh: "L3",
    nazev: "Rozvaděče a revize",
    popis:
      "Vyměníme starý rozvaděč s pojistkami za moderní s proudovými chrániči. Provádíme výchozí i pravidelné revize s protokolem — pro pojišťovnu i pro klidné spaní.",
    polozky: ["Výměny rozvaděčů", "Proudové chrániče", "Revizní zprávy", "Revize pro kolaudaci"],
  },
];

const duvody = [
  {
    stitek: "Místní",
    text:
      "Sídlíme v Horních Lomanech, J. Wolkra 106/7. Do kterékoli části Františkových Lázní, Chebu nebo Aše dojedeme do půl hodiny — žádné čekání na řemeslníka z kraje.",
  },
  {
    stitek: "Čistá práce",
    text:
      "Sekání drážek zvládáme s odsáváním, po práci po sobě uklidíme. Kabely značíme a v rozvaděči najdete popsané jističe — i za pět let budete vědět, co kam patří.",
  },
  {
    stitek: "Férová cena",
    text:
      "Cenu řekneme předem, po prohlídce na místě. Účtujeme skutečně odvedenou práci a použitý materiál — bez položek, kterým nerozumíte.",
  },
  {
    stitek: "S papírem",
    text:
      "Ke každé instalaci a revizi dostanete protokol. Pracujeme podle platných norem ČSN, takže dokumentaci přijme pojišťovna i stavební úřad.",
  },
];

export default function Page() {
  return (
    <main className="es">
      {/* ===== HERO ===== */}
      <header className="es-hero">
        <div className="es-hero-top">
          <span className="es-wordmark" aria-label="Elektro Štěpán">
            ELEKTRO<b>ŠTĚPÁN</b>
          </span>
          <span className="es-hero-loc">Františkovy Lázně · Horní Lomany</span>
        </div>

        <div className="es-hero-body">
          <p className="es-hero-eyebrow">Elektroservis · opravy · revize</p>
          <h1 className="es-hero-title">
            <span className="es-line es-line-1">Fáze.</span>
            <span className="es-line es-line-2">Nulák.</span>
            <span className="es-line es-line-3">
              Hotovo<span className="es-dot">.</span>
            </span>
          </h1>
          <p className="es-hero-sub">
            Rodinný elektroservis pro Františkovy Lázně a okolí. Od vypadávajícího
            jističe po kompletní rozvody — přijedeme, opravíme, předáme s protokolem.
          </p>
          <div className="es-hero-cta">
            <a className="es-btn es-btn-primary" href="tel:+420354000000">
              Zavolat elektrikáři
            </a>
            <a className="es-btn es-btn-ghost" href="#sluzby">
              Co opravíme
            </a>
          </div>
        </div>

        {/* signature: schéma třífázového vedení */}
        <div className="es-circuit" aria-hidden="true">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none" focusable="false">
            <path className="es-wire es-wire-l1" d="M0,40 H420 l24,-24 h96 l24,24 H1200" />
            <path className="es-wire es-wire-l2" d="M0,80 H320 l24,24 h96 l24,-24 H1200" />
            <path className="es-wire es-wire-l3" d="M0,120 H560 l24,-24 h96 l24,24 H1200" />
            <circle className="es-node" cx="420" cy="40" r="6" />
            <circle className="es-node" cx="464" cy="104" r="6" />
            <circle className="es-node" cx="704" cy="96" r="6" />
          </svg>
          <div className="es-circuit-labels">
            <span>L1 · opravy</span>
            <span>L2 · instalace</span>
            <span>L3 · revize</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="es-section es-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="es-section-head">
          <p className="es-eyebrow">Tři fáze naší práce</p>
          <h2 id="sluzby-h">Co pro vás zapojíme</h2>
          <p className="es-section-lead">
            Tři okruhy služeb, stejně jako tři fáze ve vašem rozvaděči. Každou
            zakázku vede pan Štěpán osobně — od prohlídky po předání.
          </p>
        </div>

        <div className="es-grid">
          {sluzby.map((s) => (
            <article className="es-card" key={s.okruh}>
              <div className="es-card-head">
                <span className="es-faze">{s.okruh}</span>
                <h3>{s.nazev}</h3>
              </div>
              <p className="es-card-text">{s.popis}</p>
              <ul className="es-card-list">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="es-note">
          <strong>Pohotovost:</strong> při výpadku proudu v bytě nebo provozovně
          zavolejte kdykoliv — havárie ve Františkových Lázních řešíme přednostně,
          zpravidla tentýž den.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="es-section es-duvera" aria-labelledby="duvera-h">
        <div className="es-section-head">
          <p className="es-eyebrow">Proč sousedi volají nám</p>
          <h2 id="duvera-h">Elektrikář, kterého potkáte i na náměstí</h2>
          <p className="es-section-lead">
            Ve Františkových Lázních pracujeme roky — na bytech, penzionech i
            lázeňských provozech. Naše jméno tu něco znamená, a podle toho pracujeme.
          </p>
        </div>

        <dl className="es-duvody">
          {duvody.map((d) => (
            <div className="es-duvod" key={d.stitek}>
              <dt>{d.stitek}</dt>
              <dd>{d.text}</dd>
            </div>
          ))}
        </dl>

        <figure className="es-quote">
          <blockquote>
            „Starý rozvaděč z osmdesátek nám vyměnili za den. Všechno popsané,
            uklizené a revizní zprávu jsme měli v ruce hned při předání.“
          </blockquote>
          <figcaption>— majitelé penzionu, Františkovy Lázně</figcaption>
        </figure>
      </section>
    </main>
  );
}
