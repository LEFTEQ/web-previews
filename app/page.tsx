export const metadata = {
  title: "Studio In — kadeřnictví Brno | Střih, barva, péče",
  description:
    "Kadeřnictví Studio In v Brně. Dámské i pánské střihy, barvení, melír, balayage a péče o vlasy. Objednejte se telefonicky — najdete nás v centru Brna.",
  openGraph: {
    title: "Studio In — kadeřnictví Brno",
    description:
      "Střih, barva a péče o vlasy v Brně. Objednejte se do Studia In.",
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    nazev: "Dámský střih",
    popis:
      "Konzultace, mytí, střih podle tvaru obličeje a struktury vlasů, foukaná a finální styling. Odejdete s účesem, který zvládnete i doma.",
    cas: "60–90 min",
    cena: "od 650 Kč",
  },
  {
    nazev: "Pánský střih",
    popis:
      "Klasika nůžkami i strojkem, úprava kontur a vousů. Rychle, přesně a bez zbytečných řečí — pokud je nechcete.",
    cas: "30–45 min",
    cena: "od 350 Kč",
  },
  {
    nazev: "Barvení a melír",
    popis:
      "Celoplošná barva, melír přes čepici i fólie. Míchání odstínu vždy na místě podle vašich vlasů, ne podle vzorníku na zdi.",
    cas: "90–150 min",
    cena: "od 1 200 Kč",
  },
  {
    nazev: "Balayage a tónování",
    popis:
      "Ručně malované prosvětlení, které odrůstá přirozeně. Součástí je tónování a ošetření po zesvětlení.",
    cas: "150–210 min",
    cena: "od 2 100 Kč",
  },
  {
    nazev: "Společenský účes",
    popis:
      "Ples, svatba, promoce. Přijďte na zkoušku předem, ať v den D víte přesně, co vás čeká.",
    cas: "45–75 min",
    cena: "od 700 Kč",
  },
  {
    nazev: "Regenerace a péče",
    popis:
      "Hloubková kúra pro vlasy namáhané barvením nebo žehličkou. Doporučíme i domácí péči, která dává smysl pro váš typ vlasů.",
    cas: "30–45 min",
    cena: "od 450 Kč",
  },
];

const zasady = [
  {
    cislo: "Konzultace vždy zdarma",
    text:
      "Než vezmeme do ruky nůžky, mluvíme. Přineste fotku, popište, co vám na vlasech vadí — a my řekneme na rovinu, co půjde a co ne.",
  },
  {
    cislo: "Čas jen pro vás",
    text:
      "Objednáváme tak, abyste neseděli ve frontě a my nepobíhali mezi třemi křesly. Jedno křeslo, jedna hlava, plná pozornost.",
  },
  {
    cislo: "Šetrné materiály",
    text:
      "Pracujeme s profesionálními barvami s nižším obsahem amoniaku a péčí, kterou používáme i na vlastní vlasy. Žádné anonymní kanystry.",
  },
];

const reference = [
  {
    jmeno: "Markéta, Brno-Žabovřesky",
    text:
      "Konečně kadeřnice, která poslouchá. Řekla jsem 'o trochu kratší' a odešla jsem o trochu kratší — ne o dvacet centimetrů.",
  },
  {
    jmeno: "Tomáš, Brno-střed",
    text:
      "Chodím sem rok, střih drží tvar i po šesti týdnech. A objednání po telefonu vyřídíme za minutu.",
  },
  {
    jmeno: "Ivana, Královo Pole",
    text:
      "Balayage přesně podle fotky, kterou jsem přinesla. Odrůstá tak hezky, že mezi návštěvami vydržím klidně čtvrt roku.",
  },
];

export default function Page() {
  return (
    <main className="si-page">
      {/* ===== HERO ===== */}
      <header className="si-hero">
        <div className="si-hero-top">
          <div className="si-wordmark" aria-label="Studio In">
            <span className="si-wordmark-studio">Studio</span>
            <span className="si-wordmark-in">In</span>
          </div>
          <p className="si-hero-loc">Kadeřnictví · Brno</p>
        </div>

        <div className="si-hero-main">
          <h1 className="si-hero-title">
            <span className="si-line si-line-1">Střih,</span>
            <span className="si-line si-line-2">
              který drží<span className="si-comb" aria-hidden="true"></span>
            </span>
            <span className="si-line si-line-3">
              tvar<span className="si-title-dot">.</span>
            </span>
          </h1>

          <div className="si-hero-aside">
            <p className="si-hero-lead">
              Dámské i pánské kadeřnictví v centru Brna. Nejdřív posloucháme,
              pak stříháme — a mezi návštěvami vydržíte déle, než jste zvyklí.
            </p>
            <div className="si-hero-actions">
              <a className="si-btn" href="tel:+420777000000">
                Objednat se na 777 000 000
              </a>
              <a className="si-btn si-btn-ghost" href="#sluzby">
                Prohlédnout ceník
              </a>
            </div>
          </div>
        </div>

        <ul className="si-hero-strip" aria-label="Základní informace">
          <li>
            <strong>Út–Pá</strong> 9–18, <strong>So</strong> 8–13
          </li>
          <li>Objednání telefonem, bez čekání ve frontě</li>
          <li>3 minuty pěšky od Zelného trhu</li>
        </ul>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="si-section si-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="si-section-head">
          <p className="si-eyebrow">Ceník a služby</p>
          <h2 id="sluzby-h" className="si-h2">
            Co pro vaše vlasy uděláme
          </h2>
          <p className="si-section-note">
            Ceny jsou orientační — přesnou částku vám řekneme při konzultaci,
            podle délky a hustoty vlasů. Bez překvapení u pokladny.
          </p>
        </div>

        <div className="si-grid">
          {sluzby.map((s) => (
            <article className="si-card" key={s.nazev}>
              <h3 className="si-card-title">{s.nazev}</h3>
              <p className="si-card-text">{s.popis}</p>
              <div className="si-card-meta">
                <span className="si-card-cas">{s.cas}</span>
                <span className="si-card-cena">{s.cena}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="si-section si-duvera" aria-labelledby="duvera-h">
        <div className="si-section-head">
          <p className="si-eyebrow si-eyebrow-light">Proč Studio In</p>
          <h2 id="duvera-h" className="si-h2 si-h2-light">
            Malé studio, jedno křeslo, žádný spěch
          </h2>
          <p className="si-section-note si-section-note-light">
            Nejsme salon o deseti křeslech. Právě proto si vás pamatujeme —
            vaše vlasy, poslední barvu i to, že nesnášíte příliš krátké ofiny.
          </p>
        </div>

        <div className="si-zasady">
          {zasady.map((z) => (
            <div className="si-zasada" key={z.cislo}>
              <h3 className="si-zasada-title">{z.cislo}</h3>
              <p className="si-zasada-text">{z.text}</p>
            </div>
          ))}
        </div>

        <div className="si-reference" role="list" aria-label="Reference zákazníků">
          {reference.map((r) => (
            <figure className="si-ref" role="listitem" key={r.jmeno}>
              <blockquote className="si-ref-text">„{r.text}“</blockquote>
              <figcaption className="si-ref-name">{r.jmeno}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
