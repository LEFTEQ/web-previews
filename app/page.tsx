import type { CSSProperties } from "react";

export const metadata = {
  title: "Optic Shop — oční optika na Žižkově | měření zraku, brýle, kontaktní čočky",
  description:
    "Rodinná oční optika na Koněvově na Žižkově. Precizní měření zraku, zhotovení dioptrických brýlí, aplikace kontaktních čoček a zábrus i do vlastních obrub. Objednejte se do Optic Shopu v Praze 3.",
  openGraph: {
    title: "Optic Shop — oční optika na Žižkově",
    description:
      "Precizní měření zraku, dioptrické brýle na míru, kontaktní čočky a zábrus do vlastních obrub. Rodinná optika bratra a sestry, Koněvova 1685/110, Praha 3.",
    type: "website",
    locale: "cs_CZ",
    images: ["/hero.webp"],
  },
};

type Dioptrie = {
  cislo: string;
  nazev: string;
  popis: string;
  detail: string;
};

const sluzby: Dioptrie[] = [
  {
    cislo: "−4,25",
    nazev: "Měření zraku",
    popis:
      "Sedneme si k němu bez spěchu. Vyměříme dioptrie, poradíme s tím, co čtete i jak dlouho sedíte u obrazovky, a dáme vám hodnoty, kterým rozumíte.",
    detail: "cca 30 min · po objednání",
  },
  {
    cislo: "+1,50",
    nazev: "Brýle na míru",
    popis:
      "Vybereme obrubu, která vám sedne k obličeji i k tomu, jak brýle nosíte. Čočky zabrousíme přesně na střed vašich očí — i do obruby, kterou už máte doma a máte ji rádi.",
    detail: "zábrus i do vlastních obrub",
  },
  {
    cislo: "BC 8.6",
    nazev: "Kontaktní čočky",
    popis:
      "Naučíme vás čočky nasadit i sundat, vybereme typ podle vašich očí a životního stylu a zůstaneme s vámi na příjmu, když se něco přihodí.",
    detail: "první aplikace i nácvik",
  },
  {
    cislo: "∞",
    nazev: "Servis a péče",
    popis:
      "Rovnáme, dotahujeme, měníme nosníky a stranice. Přijďte, i když jste brýle kupovali jinde — dáme je do pořádku.",
    detail: "drobný servis obvykle na počkání",
  },
];

const duvera = [
  {
    k: "2009",
    v: "Rok, kdy jsme spolu — bratr a sestra — začali studovat oční optiku s jediným plánem: mít jednou vlastní optiku.",
  },
  {
    k: "Po–Pá",
    v: "Otevřeno 9:00–18:00. Na měření zraku se objednejte, ať se vám můžeme věnovat naplno.",
  },
  {
    k: "Žižkov",
    v: "Najdete nás na Koněvově 1685/110, Praha 3. Platíte hotově, kartou i na fakturu.",
  },
];

export default function Page() {
  return (
    <main className="os">
      <header className="os-top">
        <a className="os-brand" href="#" aria-label="Optic Shop, oční optika Praha">
          <span className="os-brand-mark" aria-hidden="true">
            <span className="os-lens" />
            <span className="os-lens" />
          </span>
          <span className="os-brand-word">
            Optic<span className="os-brand-thin">Shop</span>
          </span>
        </a>
        <nav className="os-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#o-nas">O nás</a>
          <a className="os-nav-cta" href="tel:+420737094601">Objednat se</a>
        </nav>
      </header>

      <section className="os-hero">
        <div className="os-hero-copy">
          <p className="os-eyebrow">Oční optika · Žižkov, Praha 3</p>
          <h1 className="os-title">
            Vidět ostře
            <br />
            je řemeslo.
          </h1>
          <p className="os-lead">
            Rodinná optika, kterou vedou bratr se sestrou. Změříme vám zrak,
            zabrousíme čočky přesně na střed vašich očí a poradíme s brýlemi,
            se kterými budete vidět líp — a bude vám v nich dobře.
          </p>
          <div className="os-hero-actions">
            <a className="os-btn" href="tel:+420737094601">Zavolat a objednat</a>
            <a className="os-btn os-btn-ghost" href="#sluzby">Co u nás uděláme</a>
          </div>
          <dl className="os-hero-facts">
            <div>
              <dt>Zábrus</dt>
              <dd>i do vlastních obrub</dd>
            </div>
            <div>
              <dt>Měření</dt>
              <dd>bez spěchu, po objednání</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Koněvova 1685/110</dd>
            </div>
          </dl>
        </div>
        <figure className="os-hero-figure">
          <img
            src="/hero.webp"
            alt="Interiér oční optiky Optic Shop s vystavenými brýlovými obrubami"
            width={1200}
            height={1400}
            loading="eager"
          />
          <figcaption className="os-hero-cap">
            <span className="os-refract" aria-hidden="true" />
            Zkušební obruba na měření — než uvidíte svět naostřeno.
          </figcaption>
        </figure>
      </section>

      <section className="os-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="os-section-head">
          <p className="os-eyebrow">Naše služby</p>
          <h2 id="sluzby-h" className="os-h2">
            Čtyři věci, kvůli kterým za námi chodíte
          </h2>
          <p className="os-section-sub">
            Každá začíná u vašich očí a končí tím, že líp vidíte. Čísla u nadpisů
            jsou z našeho světa — dioptrie, poloměr zakřivení čočky, znak pro „bez
            omezení“.
          </p>
        </div>
        <ul className="os-cards">
          {sluzby.map((s) => (
            <li className="os-card" key={s.nazev}>
              <span className="os-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="os-card-h">{s.nazev}</h3>
              <p className="os-card-p">{s.popis}</p>
              <p className="os-card-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
        <div className="os-strip">
          <img
            src="/section-1.webp"
            alt="Detail brýlových obrub a čoček v optice Optic Shop"
            loading="lazy"
          />
          <div className="os-strip-copy">
            <p className="os-eyebrow">Na co se spolehnete</p>
            <ul className="os-list">
              <li>Precizní měření zraku</li>
              <li>Aplikace kontaktních čoček</li>
              <li>Zhotovení dioptrických brýlí</li>
              <li>Individuální přístup, žádný spěch</li>
              <li>Zábrus i do vašich vlastních obrub</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="os-about" id="o-nas" aria-labelledby="o-nas-h">
        <div className="os-about-grid">
          <figure className="os-about-figure">
            <img
              src="/section-2.webp"
              alt="Optik při práci v oční optice Optic Shop na Žižkově"
              loading="lazy"
            />
          </figure>
          <div className="os-about-copy">
            <p className="os-eyebrow">O nás</p>
            <h2 id="o-nas-h" className="os-h2">
              Bratr a sestra, kteří si vzali do hlavy vlastní optiku
            </h2>
            <p className="os-about-lead">
              V roce 2009 jsme spolu začali studovat oční optiku s jediným cílem —
              jednou mít vlastní optiku a pomáhat lidem lépe vidět. Po letech praxe
              tu jsme pro vás na Koněvově a víme, že za brýlemi je vždycky konkrétní
              člověk a jeho den.
            </p>
            <dl className="os-facts">
              {duvera.map((d) => (
                <div className="os-fact" key={d.k}>
                  <dt>{d.k}</dt>
                  <dd>{d.v}</dd>
                </div>
              ))}
            </dl>
            <div className="os-contact">
              <a href="tel:+420737094601">+420 737 094 601</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:info@optic-shop.cz">info@optic-shop.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
