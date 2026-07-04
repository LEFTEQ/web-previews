import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Adam & Roman Střechy — klempířství Ostrava",
  description:
    "Klempířství a stavba střech v Ostravě. Falcovaná krytina, okapy, oplechování, rekonstrukce i rodinné domy na klíč. 20 let praxe, Stará Bělá.",
  openGraph: {
    title: "Adam & Roman Střechy — klempířství Ostrava",
    description:
      "Falcovaná krytina, okapy a oplechování na míru. 20 let praxe v Ostravě. Zavolejte na +420 608 960 439.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const remesla = [
  {
    kod: "FALC",
    nazev: "Falcovaná krytina",
    popis:
      "Plechová střecha spojovaná na stojatou drážku. Bez viditelných šroubů, těsná v každém úžlabí. Titanzinek, měď i hliník.",
  },
  {
    kod: "OKAP",
    nazev: "Okapy a svody",
    popis:
      "Odvod vody od střechy až do dešťovky. Půlkulaté i hranaté žlaby, kotlíky a svody spádované tak, aby fasáda zůstala suchá.",
  },
  {
    kod: "OPLECH",
    nazev: "Oplechování a lemování",
    popis:
      "Komíny, atiky, parapety, prostupy. Detaily, kde voda nejčastěji zatéká — děláme je ručně na míru každé střeše.",
  },
  {
    kod: "STŘECHA",
    nazev: "Střecha na klíč",
    popis:
      "Od krovu a laťování přes krytinu až po hromosvod. Rekonstrukce staré střechy i nová stavba rodinného domu.",
  },
];

const materialy = [
  { zn: "Zn", nazev: "Titanzinek", vyd: "matně šedý, sám se hojí" },
  { zn: "Cu", nazev: "Měď", vyd: "časem zelená patina" },
  { zn: "Al", nazev: "Hliník", vyd: "lehký, v barvě RAL" },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Adam a Roman Střechy, domů">
          <span className="wm-line">A&amp;R</span>
          <span className="wm-sub">Střechy · klempířství Ostrava</span>
        </a>
        <a className="call-pill" href="tel:+420608960439">
          Zavolat 608 960 439
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Falcovaná plechová střecha se stojatou drážkou a novým oplechováním"
            className="hero-img"
          />
          <div className="seam" aria-hidden="true">
            <span></span><span></span><span></span><span></span><span></span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Ostrava · Stará Bělá — od roku 2004</p>
          <h1 id="hero-title">
            Drážku po drážce
            <br />
            <em>utěsníme celou střechu.</em>
          </h1>
          <p className="lede">
            Klempíři Adam a Roman. Falcovaná krytina, okapy a oplechování,
            které nepustí vodu ani po dvaceti zimách. Stavíme i rekonstruujeme
            střechy po celém Ostravsku.
          </p>
          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420608960439">
              Zavolat klempíře
            </a>
            <a className="btn btn-ghost" href="mailto:arstrechy@email.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="trade" aria-labelledby="trade-title">
        <div className="trade-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="trade-title">Řemeslo na střeše, ne jen prodej krytiny</h2>
          <p className="trade-note">
            Každou zakázku vedeme od prvního zaměření po poslední kotlík.
            Bez subdodávek naslepo — na střeše stojí ti, kdo ji navrhli.
          </p>
        </div>

        <ul className="trade-grid">
          {remesla.map((r) => (
            <li className="trade-card" key={r.kod}>
              <span className="trade-code">{r.kod}</span>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
            </li>
          ))}
        </ul>

        <div className="materials" aria-label="Materiály, které zpracováváme">
          <p className="materials-label">Plech, který ohýbáme</p>
          <ul className="materials-row">
            {materialy.map((m) => (
              <li key={m.zn}>
                <span className="m-symbol">{m.zn}</span>
                <span className="m-name">{m.nazev}</span>
                <span className="m-note">{m.vyd}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust-media">
          <img
            src="/section-2.webp"
            alt="Dokončená rekonstrukce střechy rodinného domu na Ostravsku"
            className="trust-img"
          />
        </div>
        <div className="trust-copy">
          <p className="eyebrow">Proč zrovna my</p>
          <h2 id="trust-title">Dva klempíři, jedno jméno na papíře</h2>
          <p>
            Firmu vedou Adam a Roman — a to jméno najdete i na smlouvě i na
            střeše. Za dvacet let jsme pokryli rodinné domy, přehodili staré
            eternity a spravili zatékající komíny po celé Ostravě a okolí.
          </p>
          <dl className="trust-facts">
            <div>
              <dt>Praxe</dt>
              <dd>20 let na střechách Ostravska</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Na Peřeji 209/3, Ostrava&nbsp;–&nbsp;Stará Bělá</dd>
            </div>
            <div>
              <dt>Navíc umíme</dt>
              <dd>
                Krovy, sádrokartony i školení lešenářů s průkazem platným po
                celé ČR
              </dd>
            </div>
          </dl>
          <div className="trust-actions">
            <a className="btn btn-solid" href="tel:+420608960439">
              Domluvit prohlídku střechy
            </a>
            <a className="btn btn-ghost" href="mailto:arstrechy@email.cz">
              arstrechy@email.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
