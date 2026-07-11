import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MVF Servis — zámečnictví a kovovýroba Olomouc",
  description:
    "Zámečnická výroba a kovoobrábění v Olomouci-Holici. Ploty, brány, zábradlí, schodiště, svařované ocelové konstrukce a přesné práce na míru. Od roku 2009.",
};

const kovovyroba = [
  { stroj: "Soustruh", popis: "Přesné soustružení hřídelí, čepů a přírub na míru." },
  { stroj: "Vrtačko-frézka", popis: "Frézování a vrtání dílců podle výkresu i podle vzoru." },
  { stroj: "Vrtačka", popis: "Přesné otvory, závity, drobné úpravy hotových dílů." },
  { stroj: "Pásová pila", popis: "Dělení profilů a trubek s čistým, kolmým řezem." },
  { stroj: "Svařování MIG", popis: "Sváry na přesném svařovacím stole, metoda MIG." },
];

const zamecnictvi = [
  "Ploty",
  "Brány a branky",
  "Zábradlí",
  "Schodiště",
  "Svařované ocelové konstrukce",
  "Posilovací konstrukce",
];

const prace = [
  {
    nazev: "Nájezd pro invalidy",
    popis:
      "Svařovaná ocelová konstrukce s podlahovými rošty, žárově zinkováno. Bezpečný sklon a pevný povrch do každého počasí.",
    material: "Ocel · žárový zinek",
  },
  {
    nazev: "Branka mezi sloupky",
    popis:
      "Svařovaná branka osazená mezi původní zděné sloupky, doplněná automatickým zavíračem.",
    material: "Ocel · zavírač",
  },
  {
    nazev: "Mříže z tahokovu",
    popis:
      "Okenní mříže s výplní z tahokovu, žárově zinkováno a práškově lakováno. Pevné a přitom vzdušné.",
    material: "Tahokov · komaxit",
  },
  {
    nazev: "Láhev v kleci",
    popis:
      "Dárek k narozeninám — oslavenec se k láhvi dostane teprve po povolení pěkné řádky matiček. Zakázka pro radost.",
    material: "Ocel · šroubení",
  },
];

export default function Page() {
  return (
    <main className="mvf">
      <header className="mvf-topbar">
        <a className="mvf-wordmark" href="#top" aria-label="MVF Servis, úvod">
          <span className="mvf-wordmark__mark" aria-hidden="true">
            <span className="mvf-wordmark__weld" />MVF
          </span>
          <span className="mvf-wordmark__sub">servis · zámečnictví Olomouc</span>
        </a>
        <nav className="mvf-nav" aria-label="Hlavní">
          <a href="#kovovyroba">Kovovýroba</a>
          <a href="#zamecnictvi">Zámečnictví</a>
          <a href="#nase-prace">Naše práce</a>
        </nav>
      </header>

      <section className="mvf-hero" id="top">
        <img
          className="mvf-hero__img"
          src="/hero.webp"
          alt="Svařování oceli metodou MIG v dílně MVF Servis v Olomouci"
          width={1600}
          height={1000}
          loading="eager"
        />
        <div className="mvf-hero__panel">
          <p className="mvf-hero__eyebrow">Od roku 2009 · Olomouc–Holice</p>
          <h1 className="mvf-hero__title">
            Zlaté české ruce<br />
            <span>na ocel i přesnou práci.</span>
          </h1>
          <p className="mvf-hero__lead">
            Jsme malá dílna zručných řemeslníků. Svaříme plot i schodiště,
            osoustružíme čep na míru a vyrobíme konstrukci, která drží. S chutí
            a poctivě — jak stojí v našem heslu.
          </p>
          <div className="mvf-hero__cta">
            <a className="mvf-btn" href="tel:+420777010657">Zavolat 777 010 657</a>
            <a className="mvf-btn mvf-btn--ghost" href="#kovovyroba">Co umíme</a>
          </div>
          <p className="mvf-hero__motto" aria-hidden="true">
            „S&nbsp;chutí a poctivě.“
          </p>
        </div>
      </section>

      <section className="mvf-section" id="kovovyroba">
        <div className="mvf-section__head">
          <p className="mvf-kicker">01 — U stroje</p>
          <h2 className="mvf-h2">Kovovýroba a obrábění</h2>
          <p className="mvf-section__intro">
            Kovoobráběcí stroje jsme přidali do dílny s postupem let. Díky nim
            zvládneme jak sériový dílec podle výkresu, tak jeden kus na míru,
            když je potřeba dorobit chybějící součástku.
          </p>
        </div>

        <div className="mvf-machines">
          <ul className="mvf-machine-list">
            {kovovyroba.map((m, i) => (
              <li className="mvf-machine" key={m.stroj}>
                <span className="mvf-machine__no" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mvf-machine__body">
                  <span className="mvf-machine__name">{m.stroj}</span>
                  <span className="mvf-machine__desc">{m.popis}</span>
                </span>
              </li>
            ))}
          </ul>
          <figure className="mvf-figure">
            <img
              src="/section-1.webp"
              alt="Kovoobráběcí práce v dílně — dělení a obrábění ocelových profilů"
              width={900}
              height={1100}
              loading="lazy"
            />
            <figcaption>Dílna, Partyzánská 36, Olomouc–Holice</figcaption>
          </figure>
        </div>
      </section>

      <section className="mvf-section mvf-section--dark" id="zamecnictvi">
        <div className="mvf-section__head">
          <p className="mvf-kicker mvf-kicker--light">02 — Na míru domu i dílu</p>
          <h2 className="mvf-h2">Zámečnická výroba</h2>
          <p className="mvf-section__intro">
            Naše podnikatelské dobrodružství začalo právě u zámečnických dílců.
            Od plotu k schodišti, od branky k robustní ocelové konstrukci —
            navrhneme, svaříme a osadíme.
          </p>
        </div>

        <div className="mvf-locksmith">
          <ul className="mvf-tags">
            {zamecnictvi.map((z) => (
              <li className="mvf-tag" key={z}>
                {z}
              </li>
            ))}
          </ul>
          <figure className="mvf-figure mvf-figure--wide">
            <img
              src="/section-2.webp"
              alt="Svařovaná ocelová konstrukce od MVF Servis — ukázka zámečnické práce"
              width={1200}
              height={800}
              loading="lazy"
            />
          </figure>
        </div>

        <div className="mvf-works" id="nase-prace">
          <h3 className="mvf-h3">Vybrané zakázky</h3>
          <div className="mvf-works__grid">
            {prace.map((p) => (
              <article className="mvf-work" key={p.nazev}>
                <span className="mvf-work__mat">{p.material}</span>
                <h4 className="mvf-work__title">{p.nazev}</h4>
                <p className="mvf-work__desc">{p.popis}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="mvf-hours">
          <p className="mvf-hours__label">Pracovní doba</p>
          <p className="mvf-hours__text">
            Nemáme pevnou otevírací dobu — a je to záměr. Díky tomu se
            přizpůsobíme času, který se hodí právě vám. Stačí zavolat a
            domluvíme schůzku.
          </p>
        </div>
      </section>
    </main>
  );
}
