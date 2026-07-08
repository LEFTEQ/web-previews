import type { CSSProperties } from "react";

const departments = [
  { no: "01", name: "Psací potřeby", note: "Pilot, Schneider, Stabilo, Centropen — od plnicího pera po popisovač na sklo." },
  { no: "02", name: "Výtvarné potřeby", note: "Koh-i-Noor a Faber-Castell: pastelky, akvarel, tuše, uhly, plátna." },
  { no: "03", name: "Školní batohy", note: "Topgal a Bagmaster — vyzkoušíte přímo v obchodě, ať sedí do zad." },
  { no: "04", name: "Kancelář", note: "Pořadače, bloky, sešívačky, Donau a Herlitz pro celý stůl." },
  { no: "05", name: "Papíry", note: "Kancelářské balíky, barevné, kreslicí, tvrdé i čtvrtky." },
  { no: "06", name: "Kalendáře & diáře", note: "Filofax a stolní i nástěnné kalendáře na nový rok." },
  { no: "07", name: "Kreativní materiály", note: "Karton P+P, tvořítka, lepidla — vše na kreslení a tvoření." },
  { no: "08", name: "Dárky & párty", note: "Drobnosti pro radost, přání, svíčky, balicí papír a dekorace." }
];

const stores = [
  {
    tag: "Ládví",
    place: "Praha 8 · u metra Ládví",
    addr: ["OD Ládví, 1. patro", "Střelničná 1660", "182 00 Praha 8 – Kobylisy"],
    hours: "Po–Pá 9.00–19.00 · So 9.00–12.00",
    tel: "+420 246 059 103"
  },
  {
    tag: "Ohrada",
    place: "Praha 3 · zastávka Ohrada",
    addr: ["Hartigova 1927/126", "130 00 Praha 3 – Žižkov"],
    hours: "Po–Pá 9.00–19.00 · So 9.00–12.00",
    tel: "+420 604 793 953"
  }
];

const brands = ["Faber-Castell","Stabilo","Koh-i-Noor","Herlitz","Maped","Topgal","Bagmaster","Schneider","Filofax","Donau","Centropen","Pilot","Kores","Karton P+P","Bobo","Optys"];

export default function Page() {
  return (
    <main className="pp">
      <header className="pp-top">
        <a className="pp-mark" href="#" aria-label="Papírnictví Petruška — domů">
          <span className="pp-mark__p">P</span>
          <span className="pp-mark__word">apírnictví <em>Petruška</em></span>
        </a>
        <span className="pp-since">rodinné · od roku 1999</span>
      </header>

      <section className="pp-hero" aria-labelledby="hero-title">
        <div className="pp-hero__rule" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <p className="pp-hero__eyebrow">Papírnictví na Ládví a na Ohradě</p>
        <h1 id="hero-title" className="pp-hero__title">
          <span className="l1">Papírnictví,</span>
          <span className="l2">kde vám</span>
          <span className="l3">opravdu <span className="pp-ink">poradí.</span></span>
        </h1>
        <p className="pp-hero__lede">
          Ať sháníte výbavu do školy, potřeby do kanceláře nebo vše pro kreslení
          a tvoření — u nás si vyberete. Stavte se, rádi poradíme.
        </p>
        <div className="pp-hero__meta">
          <span className="pp-chip">Dvě prodejny v Praze</span>
          <span className="pp-chip">Batohy Topgal</span>
          <span className="pp-chip">Osobní poradenství</span>
        </div>
      </section>

      <section className="pp-depts" aria-labelledby="depts-title">
        <div className="pp-sec-head">
          <h2 id="depts-title">Co u nás koupíte</h2>
          <p>Osm oddělení pod jednou střechou — od prvního pera do školy po diář na celý rok.</p>
        </div>
        <ol className="pp-grid">
          {departments.map((d) => (
            <li key={d.no} className="pp-card">
              <span className="pp-card__no" aria-hidden="true">{d.no}</span>
              <h3>{d.name}</h3>
              <p>{d.note}</p>
            </li>
          ))}
        </ol>
        <figure className="pp-shelf">
          <img src="/section-2.webp" alt="Regály papírnictví Petruška plné psacích a výtvarných potřeb" loading="lazy" />
          <figcaption>Regály jsou vždy plné — a když něco nemáme skladem, doobjednáme.</figcaption>
        </figure>
      </section>

      <section className="pp-visit" aria-labelledby="visit-title">
        <div className="pp-sec-head pp-sec-head--light">
          <h2 id="visit-title">Kde nás najdete</h2>
          <p>Rodinné papírnictví se dvěma kamennými prodejnami. Přijďte se poradit osobně.</p>
        </div>

        <div className="pp-stores">
          {stores.map((s) => (
            <article key={s.tag} className="pp-store">
              <h3 className="pp-store__tag">{s.tag}</h3>
              <p className="pp-store__place">{s.place}</p>
              <address className="pp-store__addr">
                {s.addr.map((line) => <span key={line}>{line}</span>)}
              </address>
              <p className="pp-store__hours">{s.hours}</p>
              <a className="pp-store__tel" href={`tel:${s.tel.replace(/\s/g, "")}`}>Zavolat {s.tel}</a>
            </article>
          ))}
        </div>

        <div className="pp-holiday" role="note">
          <span className="pp-holiday__label">Prázdninová otevírací doba</span>
          <span className="pp-holiday__date">29. 6. – 29. 8. 2026</span>
          <span className="pp-holiday__hours">Po–Pá 9.00–18.00 · So 9.00–12.00</span>
        </div>

        <div className="pp-brands" aria-labelledby="brands-title">
          <h3 id="brands-title">Značky, kterým věříme</h3>
          <ul>
            {brands.map((b, i) => (
              <li key={b} style={{ "--i": i } as CSSProperties}>{b}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
