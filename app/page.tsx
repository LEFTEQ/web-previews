import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mgr. Vlasta Ulrichová — překlady a tlumočení (němčina), Hradec Králové",
  description:
    "Překlady a tlumočení v němčině s dlouholetou praxí. Včasnost, odborná správnost a diskrétnost. Hradec Králové.",
  openGraph: {
    title: "Mgr. Vlasta Ulrichová — němčina ⇄ čeština",
    description:
      "Překlady a tlumočení v německém jazyce. Hradec Králové. Včas, přesně, diskrétně.",
    images: ["/hero.webp"],
    type: "website",
  },
};

const sluzby = [
  {
    cs: "Překlady",
    de: "Übersetzungen",
    text:
      "Smlouvy, technická dokumentace, web i korespondence. Překládám tak, aby text v němčině zněl jako originál — ne jako překlad.",
  },
  {
    cs: "Tlumočení",
    de: "Dolmetschen",
    text:
      "Jednání se zahraničními partnery, výrobní porady, návštěvy ve firmě. Doprovázím vás od přivítání po podpis.",
  },
  {
    cs: "Korektury a redakce",
    de: "Korrektorat",
    text:
      "Projdu vaši německou verzi po jazykové i odborné stránce, než ji pošlete dál. Drobnost, na které stojí dojem.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="brand" href="#uvod" aria-label="Mgr. Vlasta Ulrichová, úvod">
          <span className="brand-name">Vlasta&nbsp;Ulrichová</span>
          <span className="brand-sub">němčina&nbsp;⇄&nbsp;čeština</span>
        </a>
        <span className="top-loc">Hradec&nbsp;Králové</span>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-text">
          <p className="eyebrow">Překlady &amp; tlumočení · od roku 1998</p>
          <div className="parallel hero-parallel">
            <div className="col de" lang="de">
              <span className="lang-tag">DE</span>
              <p className="line-de">Das Wort, das in beiden Sprachen gilt.</p>
            </div>
            <div className="seam" aria-hidden="true" />
            <div className="col cs">
              <span className="lang-tag">CS</span>
              <h1 className="line-cs">Slovo, které platí v obou jazycích.</h1>
            </div>
          </div>
          <p className="hero-claim">
            Kvalitní němčina podložená studiem germanistiky a léty spolupráce
            se zahraničními firmami. Včas, přesně a diskrétně.
          </p>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Pracovní stůl překladatelky — dokumenty v němčině a češtině"
            className="hero-img"
          />
        </figure>
      </section>

      <section className="block" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="block-head">
          <span className="lang-tag">DE</span>
          <span className="head-de" lang="de">Leistungen</span>
          <span className="seam-h" aria-hidden="true" />
          <span className="lang-tag">CS</span>
          <h2 id="sluzby-nadpis" className="head-cs">S čím za mnou chodíte</h2>
        </div>

        <ol className="sluzby">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.cs}>
              <p className="sluzba-de" lang="de">{s.de}</p>
              <h3 className="sluzba-cs">{s.cs}</h3>
              <p className="sluzba-text">{s.text}</p>
            </li>
          ))}
        </ol>

        <figure className="block-figure">
          <img
            src="/section-1.webp"
            alt="Detail překládaného dokumentu s poznámkami"
            className="block-img"
          />
        </figure>
      </section>

      <section className="block about" id="o-mne" aria-labelledby="o-mne-nadpis">
        <figure className="block-figure about-figure">
          <img
            src="/section-2.webp"
            alt="Mgr. Vlasta Ulrichová při práci"
            className="block-img"
          />
        </figure>

        <div className="about-text">
          <div className="block-head">
            <span className="lang-tag">DE</span>
            <span className="head-de" lang="de">Über mich</span>
            <span className="seam-h" aria-hidden="true" />
            <span className="lang-tag">CS</span>
            <h2 id="o-mne-nadpis" className="head-cs">Kdo překládá</h2>
          </div>

          <p>
            Kvalifikaci jsem získala vysokoškolským studiem germanistiky,
            praxi pak při realizaci projektů se zahraničními firmami. Vím, jak
            zní němčina v jednací místnosti i ve smlouvě.
          </p>
          <ul className="zasady">
            <li><strong>Včasnost.</strong> Termín, na kterém se domluvíme, platí.</li>
            <li><strong>Správnost.</strong> Jazyková i odborná — text obstojí před partnerem.</li>
            <li><strong>Diskrétnost.</strong> Co projde mým stolem, zůstává u mě.</li>
          </ul>

          <div className="kontakt">
            <p className="kontakt-label">Ozvěte se — odpovím obvykle do dne:</p>
            <a className="kontakt-link tel" href="tel:+420495000000">
              Zavolat: +420 495 000 000
            </a>
            <a className="kontakt-link mail" href="mailto:ulrichova@preklady-hk.cz">
              Napsat: ulrichova@preklady-hk.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
