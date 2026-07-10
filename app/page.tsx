import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "ST",
      nazev: "St\u011bhov\u00e1n\u00ed",
      popis:
        "Byty, domy, kancel\u00e1\u0159e, \u00fa\u0159ady i sklady po cel\u00e9 \u010cR. Zabal\u00edme, rozmontujeme a zase slo\u017e\u00edme n\u00e1bytek. N\u00e1klad chr\u00e1n\u00edme vlastn\u00edm obalov\u00fdm materi\u00e1lem.",
      detail: "sk\u0159\u00edn\u011b \u00b7 stoly \u00b7 elektronika \u00b7 sejfy \u00b7 pianina \u00b7 um\u011bleck\u00e1 d\u00edla",
    },
    {
      kod: "VY",
      nazev: "Vykl\u00edzen\u00ed",
      popis:
        "Byty, garby, panel\u00e1ky, poz\u016fstalosti i cel\u00e9 firmy. P\u0159istav\u00edme kontejnery, vykl\u00edd\u00edme a v\u0161echno nepot\u0159ebn\u00e9 ekologicky zlikvidujeme.",
      detail: "n\u00e1bytek \u00b7 koberce \u00b7 kuchy\u0148sk\u00e9 linky \u00b7 su\u0165 \u00b7 elektronika",
    },
    {
      kod: "V\u00dd",
      nazev: "V\u00fdkup",
      popis:
        "N\u00e1bytek, elektroniku, skladov\u00e9 z\u00e1soby i cel\u00e1 kancel\u00e1\u0159sk\u00e1 vybaven\u00ed. Technik zbo\u017e\u00ed prohl\u00e9dne na m\u00edst\u011b a plat\u00edme v hotovosti hned.",
      detail: "sedac\u00ed soupravy \u00b7 spot\u0159ebi\u010de \u00b7 gastro \u00b7 automobily",
    },
    {
      kod: "SK",
      nazev: "Uskladn\u011bn\u00ed",
      popis:
        "Kdy\u017e se st\u011bhov\u00e1n\u00ed nepotk\u00e1 s term\u00ednem, va\u0161e v\u011bci po\u010dkaj\u00ed u n\u00e1s. Bezpe\u010dn\u011b, such\u011b a p\u0159esn\u011b tak dlouho, jak pot\u0159ebujete.",
      detail: "kr\u00e1tkodob\u011b i dlouhodob\u011b \u00b7 pojist\u011bno",
    },
  ];

  const zaruky = [
    { velke: "24/7", male: "Ka\u017ed\u00fd den v roce, v\u010detn\u011b v\u00edkend\u016f a sv\u00e1tk\u016f \u2014 bez p\u0159\u00edplatk\u016f." },
    { velke: "1 cena", male: "Jednotn\u00e1 cena st\u011bhov\u00e1n\u00ed pro celou \u010cR. \u017d\u00e1dn\u00e9 kilometry nav\u00edc." },
    { velke: "Poji\u0161t\u011bno", male: "V\u0161echny pr\u00e1ce jsou poji\u0161t\u011bn\u00e9 \u2014 se z\u00e1rukou a bez rizika." },
  ];

  return (
    <main className="es">
      <header className="es-top">
        <a className="es-mark" href="#" aria-label="Extra st\u011bhov\u00e1n\u00ed, dom\u016f">
          <span className="es-mark-extra">EXTRA</span>
          <span className="es-mark-steh">ST\u011aHOV\u00c1N\u00cd</span>
        </a>
        <a className="es-tel" href="tel:800444448">
          <span className="es-tel-label">Volejte zdarma</span>
          <span className="es-tel-num">800 444 448</span>
        </a>
      </header>

      <section className="es-hero" aria-labelledby="es-hero-title">
        <div className="es-hero-grid" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties} />
          ))}
        </div>

        <p className="es-eyebrow">
          <span className="es-dot" aria-hidden="true" /> Plze\u0148 \u2192 kamkoli v \u010cR
        </p>

        <h1 id="es-hero-title" className="es-hero-title">
          <span className="es-line">Zabal\u00edme</span>
          <span className="es-line es-line--out">
            v\u00e1\u0161 <em>cel\u00fd</em>
          </span>
          <span className="es-line">\u017eivot</span>
          <span className="es-line es-line--in">
            a slo\u017e\u00edme ho <em>jinde</em>.
          </span>
        </h1>

        <p className="es-hero-lead">
          St\u011bhov\u00e1n\u00ed, vykl\u00edzen\u00ed a v\u00fdkup po cel\u00e9 \u010cesk\u00e9 republice. Rozmont\u00e1\u017e, obalov\u00fd materi\u00e1l
          i zp\u011btn\u00e1 mont\u00e1\u017e v cen\u011b. Bereme i trezory, pianina a staro\u017eitnosti.
        </p>

        <div className="es-hero-cta">
          <a className="es-btn" href="tel:800444448">Zavolat 800 444 448</a>
          <a className="es-btn es-btn--ghost" href="mailto:info@ex-stehovani.com">Napsat popt\u00e1vku</a>
        </div>
      </section>

      <section className="es-sluzby" aria-labelledby="es-sluzby-title">
        <div className="es-sec-head">
          <h2 id="es-sluzby-title">\u010cty\u0159i v\u011bci, kter\u00e9 pro v\u00e1s ud\u011bl\u00e1me</h2>
          <p>
            V\u011bt\u0161ina zak\u00e1zek za\u010d\u00edn\u00e1 st\u011bhov\u00e1n\u00edm a plynule p\u0159ejde ve vykl\u00edzen\u00ed nebo v\u00fdkup
            toho, co u\u017e nepot\u0159ebujete. Zvl\u00e1dneme cel\u00fd \u0159et\u011bzec jedn\u00edm t\u00fdmem.
          </p>
        </div>

        <ol className="es-cards">
          {sluzby.map((s) => (
            <li key={s.kod} className="es-card">
              <span className="es-card-kod" aria-hidden="true">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="es-card-detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="es-figure">
          <img
            src="/section-1.webp"
            alt="St\u011bhov\u00e1ci Extra st\u011bhov\u00e1n\u00ed nakl\u00e1daj\u00ed zabalen\u00fd n\u00e1bytek do st\u011bhovac\u00edho vozu"
            loading="lazy"
          />
          <figcaption>
            Vlastn\u00ed obalov\u00fd materi\u00e1l, vozy i lid\u00e9 \u2014 od zabalen\u00ed prvn\u00ed skleni\u010dky po
            zp\u011btnou mont\u00e1\u017e posledn\u00ed sk\u0159\u00edn\u011b.
          </figcaption>
        </figure>
      </section>

      <section className="es-duvera" aria-labelledby="es-duvera-title">
        <h2 id="es-duvera-title">Pro\u010d n\u00e1m lid\u00e9 sv\u011b\u0159\u00ed sv\u016fj domov</h2>

        <div className="es-zaruky">
          {zaruky.map((z) => (
            <div key={z.velke} className="es-zaruka">
              <span className="es-zaruka-velke">{z.velke}</span>
              <span className="es-zaruka-male">{z.male}</span>
            </div>
          ))}
        </div>

        <div className="es-adresa">
          <p className="es-adresa-label">Najdete n\u00e1s v Plzni</p>
          <address className="es-adresa-text">
            Slovansk\u00e1 alej 1861/32<br />
            V\u00fdchodn\u00ed P\u0159edm\u011bst\u00ed, 326 00 Plze\u0148 \u2013 Slovany
          </address>
          <p className="es-adresa-note">
            St\u011bhujeme ale kdekoli v \u010cR za stejnou cenu. Sta\u010d\u00ed zavolat na{" "}
            <a href="tel:800444448">800 444 448</a> nebo napsat na{" "}
            <a href="mailto:info@ex-stehovani.com">info@ex-stehovani.com</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
