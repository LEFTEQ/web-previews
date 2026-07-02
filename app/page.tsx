// Centrum Hastrmánci — bazény a wellness, Brno
// Koncept: „Hastrman" = vodník. Celá identita stojí na vodě jako materiálu:
// hladina, vlnovka, hloubka bazénu. Signature prvek = typografická hladina —
// nadpis hero je „ponořený" napůl pod vlnitou linku vody, spodní polovina
// písma se láme jako odraz. Paleta: hluboká bazénová modř + chlorová tyrkys
// + teplá písková (mokrý beton u bazénu), žádný krémový default.

const sluzby = [
  {
    stitek: "Stavba",
    nazev: "Bazén na míru zahradě",
    popis:
      "Zaměříme pozemek, navrhneme tvar i hloubku a postavíme skimmerový nebo přelivový bazén. Fólie, keramika i nerez — podle toho, jak má voda vypadat a kolik péče jí chcete věnovat.",
    detail: "Realizace 6–10 týdnů, Brno a okolí do 50 km",
  },
  {
    stitek: "Technologie",
    nazev: "Voda, která se stará sama",
    popis:
      "Filtrace, tepelné čerpadlo, solnička nebo UV lampa a automatické dávkování chemie. Nastavíme vše tak, abyste bazén hlavně užívali — ne obsluhovali.",
    detail: "Ovládání z telefonu, servis do 48 hodin",
  },
  {
    stitek: "Wellness",
    nazev: "Vířivka a sauna k domu",
    popis:
      "Venkovní vířivky, finské i infra sauny včetně přípravy elektro a odvětrání. Poradíme s umístěním, aby wellness fungovalo v létě i v lednu.",
    detail: "Vzorky a předváděcí vířivka u nás v Brně",
  },
  {
    stitek: "Servis",
    nazev: "Zazimování a jarní start",
    popis:
      "Na podzim bazén bezpečně uspíme, na jaře vyčistíme, doplníme chemii a zprovozníme techniku. Pravidelný servis hlídáme za vás — ozveme se sami.",
    detail: "Servisujeme i bazény, které jsme nestavěli",
  },
];

const duvody = [
  {
    cislo: "18 let",
    text: "stavíme a servisujeme bazény v Brně a okolí. Známe zdejší jíly, spodní vodu i to, jak tu mrzne.",
  },
  {
    cislo: "350+",
    text: "bazénů a vířivek, o které se průběžně staráme. Většina nových zákazníků k nám přijde na doporučení souseda.",
  },
  {
    cislo: "48 h",
    text: "je náš standard pro servisní výjezd v sezóně. Rozbité čerpadlo v červenci nepočká — a my to víme.",
  },
];

const reference = [
  {
    citace:
      "Bazén nám postavili za osm týdnů včetně terasy. Nejvíc oceňuju, že na jaře prostě přijedou, spustí ho a já řeším jen to, kdy skočím do vody.",
    jmeno: "Rodina Pokorných",
    misto: "Brno-Žebětín, skimmerový bazén 7 × 3,5 m",
  },
  {
    citace:
      "Vířivku jsme vybírali půl roku. U Hastrmánků jsme si ji mohli reálně vyzkoušet a poradili nám i s elektrikou. Žádný tlak, jen fakta.",
    jmeno: "Martina H.",
    misto: "Šlapanice, venkovní vířivka + infrasauna",
  },
];

export default function Page() {
  return (
    <main className="hs">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark" aria-label="Centrum Hastrmánci">
            <svg
              className="wm-vlnka"
              viewBox="0 0 40 12"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M1 6 Q6 1 11 6 T21 6 T31 6 T41 6"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
            </svg>
            <span className="wm-text">
              Hastrmánci<span className="wm-dot">.</span>
            </span>
          </span>
          <a className="hero-tel" href="tel:+420773998222">
            +420&nbsp;773&nbsp;998&nbsp;222
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Bazény · vířivky · sauny — Brno</p>

          {/* Signature: typografická hladina — nadpis napůl „pod vodou" */}
          <h1 className="hero-title" aria-label="Voda patří k domu.">
            <span className="ponor" aria-hidden="true">
              <span className="nad">Voda patří</span>
              <span className="pod">Voda patří</span>
            </span>
            <span className="ponor ponor-2" aria-hidden="true">
              <span className="nad">k domu.</span>
              <span className="pod">k domu.</span>
            </span>
          </h1>

          <div className="hladina" aria-hidden="true">
            <svg
              viewBox="0 0 1200 24"
              preserveAspectRatio="none"
              focusable="false"
            >
              <path
                className="hladina-vlna"
                d="M0 12 Q75 2 150 12 T300 12 T450 12 T600 12 T750 12 T900 12 T1050 12 T1200 12"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <p className="hero-perex">
            Stavíme bazény, instalujeme vířivky a sauny a pak se o vodu
            staráme dál — zazimování, jarní start i servis do 48 hodin.
            Hastrmánci hlídají vodu v Brně a okolí už 18 let.
          </p>

          <div className="hero-akce">
            <a className="btn btn-plna" href="tel:+420773998222">
              Zavolat Hastrmánkům
            </a>
            <a className="btn btn-linka" href="#sluzby">
              Co pro vás uděláme
            </a>
          </div>

          <dl className="hero-hloubka" aria-label="Základní údaje">
            <div>
              <dt>Hloubka zkušeností</dt>
              <dd>od r. 2007</dd>
            </div>
            <div>
              <dt>Servisní výjezd</dt>
              <dd>do 48 hodin</dd>
            </div>
            <div>
              <dt>Působíme</dt>
              <dd>Brno + 50 km</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Od výkopu po první skok do vody</p>
          <h2 id="sluzby-h">
            Čtyři věci, které pro vaši vodu děláme
          </h2>
        </div>

        <div className="sluzby-mrizka">
          {sluzby.map((s) => (
            <article className="karta" key={s.nazev}>
              <div className="karta-hlava">
                <span className="karta-stitek">{s.stitek}</span>
                <svg
                  className="karta-vlnka"
                  viewBox="0 0 32 10"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path
                    d="M1 5 Q5 1 9 5 T17 5 T25 5 T33 5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava sekce-hlava-svetla">
          <p className="sekce-eyebrow">Proč lidem hlídáme vodu roky</p>
          <h2 id="duvera-h">Hastrman u bazénu bydlí — neodjíždí</h2>
          <p className="duvera-perex">
            Bazén není zboží, je to voda, o kterou se někdo musí starat
            každou sezónu. My u toho zůstáváme: co postavíme, to taky
            servisujeme.
          </p>
        </div>

        <div className="duvera-cisla" role="list">
          {duvody.map((d) => (
            <div className="cislo-blok" role="listitem" key={d.cislo}>
              <span className="cislo">{d.cislo}</span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <div className="reference">
          {reference.map((r) => (
            <figure className="ref" key={r.jmeno}>
              <blockquote>
                <p>„{r.citace}“</p>
              </blockquote>
              <figcaption>
                <strong>{r.jmeno}</strong>
                <span>{r.misto}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
