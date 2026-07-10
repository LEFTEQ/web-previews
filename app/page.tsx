import type { CSSProperties } from "react";

const languages = [
  "angličtina", "němčina", "polština", "slovenština", "ruština",
  "francouzština", "italština", "španělština", "ukrajinština", "čínština",
  "arabština", "maďarština", "rumunština", "bulharština", "chorvatština",
  "nizozemština", "portugalština", "švédština", "turečtina", "vietnamština",
  "japonština", "řečtina", "srbština", "latina",
];

const services: { field: string; note: string; items: string[] }[] = [
  {
    field: "Firmy a instituce",
    note: "Smlouvy, výkazy, manuály — s termínem, který dodržíme.",
    items: ["Právní překlady", "Ekonomické překlady", "Technické překlady", "Firemní korespondence"],
  },
  {
    field: "S kulatým razítkem",
    note: "Soudní překlady s doložkou, uznávané úřady doma i v zahraničí.",
    items: ["Soudní překlady", "Úřední překlady", "Ověřené dokumenty", "Matriční listiny"],
  },
  {
    field: "Lidé a studium",
    note: "Diplomy, abstrakty i osobní dopisy — bez zbytečné strojenosti.",
    items: ["Soukromé překlady", "Akademické překlady", "Překlady pro studenty", "Konsekutivní tlumočení"],
  },
];

const reasons: { label: string; text: string }[] = [
  { label: "Cena předem", text: "Od 210 Kč za normostranu. Nabídku dostanete dřív, než cokoli objednáte — žádné překvapení na faktuře." },
  { label: "Osobní kontakt", text: "Voláte a píšete lidem, ne formuláři. Domluvíme se na tom, co váš text opravdu potřebuje." },
  { label: "Dlouholetí klienti", text: "Většina zakázek přichází od zákazníků, kteří se k nám vracejí. Nejlepší reference, jakou známe." },
  { label: "Doručení kamkoli", text: "Hotové překlady posíláme poštou po celé ČR i do zahraničí. Sken obratem, originál za vámi." },
];

export default function Page() {
  return (
    <main className="pg">
      <header className="nav">
        <a className="brand" href="#top" aria-label="ABACK linguistic consulting — úvod">
          <span className="brand-mark" aria-hidden="true">á</span>
          <span className="brand-word">ABACK</span>
          <span className="brand-sub">linguistic consulting · Brno</span>
        </a>
        <a className="nav-cta" href="tel:+420604253671">Zavolat</a>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Překladatelská kancelář · Brno-Královo Pole</p>
          <h1 className="hero-title">
            Váš text<br />
            <span className="hero-em">v cizí řeči</span><br />
            zní jako doma.
          </h1>
          <p className="hero-lead">
            Od smlouvy s razítkem po diplomovou práci — překládáme tak, aby si na druhé straně
            nikdo neřekl „tohle překládal automat“. Nacenění dostanete zdarma a dopředu.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="#poptavka">Chci znát cenu</a>
            <a className="btn-ghost" href="mailto:aback@aback.cz">aback@aback.cz</a>
          </div>
          <p className="hero-price"><strong>210 Kč</strong> <span>za normostranu · od</span></p>
        </div>
        <figure className="hero-figure">
          <img src="/hero.webp" alt="Pracovní stůl překladatele s dokumenty a slovníky" className="hero-img" />
        </figure>
      </section>

      <section className="marquee" aria-label="Jazyky, se kterými pracujeme">
        <ul className="lang-list">
          {languages.map((lang, i) => (
            <li key={lang} className="lang-chip" style={{ "--i": i } as CSSProperties}>
              <span className="lang-num">{String(i + 1).padStart(2, "0")}</span>
              {lang}
            </li>
          ))}
        </ul>
        <p className="lang-note">a dalších <strong>10+</strong> jazyků na vyžádání — zeptejte se</p>
      </section>

      <section className="services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <h2 id="sluzby-h">Co překládáme</h2>
          <p>Tři světy, každý s vlastními pravidly. Řekněte, do kterého patří váš dokument.</p>
        </div>
        <div className="svc-grid">
          {services.map((s, i) => (
            <article key={s.field} className="svc-card">
              <span className="svc-index">0{i + 1}</span>
              <h3>{s.field}</h3>
              <p className="svc-note">{s.note}</p>
              <ul>
                {s.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
        <figure className="svc-figure">
          <img src="/section-1.webp" alt="Detail překládaného dokumentu s poznámkami" />
          <figcaption>Každý překlad čte druhá dvojice očí, než ho pošleme dál.</figcaption>
        </figure>
      </section>

      <section className="trust" id="o-nas" aria-labelledby="trust-h">
        <figure className="trust-figure">
          <img src="/section-2.webp" alt="Kancelář ABACK v Brně" />
        </figure>
        <div className="trust-copy">
          <p className="eyebrow eyebrow-light">Proč právě my</p>
          <h2 id="trust-h">Malá kancelář, která si pamatuje vaše jméno.</h2>
          <p className="trust-lead">
            ABACK linguistic consulting sídlí v Družstevní ulici v Brně už řadu let. Nejsme portál
            s tisícem anonymních dodavatelů — jsme lidé, se kterými se domluvíte na míru vaší zakázky.
          </p>
          <dl className="reason-list">
            {reasons.map((r) => (
              <div key={r.label} className="reason">
                <dt>{r.label}</dt>
                <dd>{r.text}</dd>
              </div>
            ))}
          </dl>
          <a className="btn-primary" id="poptavka" href="mailto:aback@aback.cz?subject=Nezávazná%20poptávka%20překladu">
            Poslat text k nacenění
          </a>
          <p className="trust-contact">
            Družstevní 10, 621 00 Brno · <a href="tel:+420604253671">+420 604 253 671</a>
          </p>
        </div>
      </section>
    </main>
  );
}
