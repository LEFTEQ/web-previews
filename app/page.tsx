import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Zasklívání výkladců",
      popis:
        "Prasklá tabule ve výloze na Vinohradech dokáže zavřít obchod na celý den. Přijedeme, přeměříme a vsadíme nové bezpečnostní sklo tak, aby výkladec zase držel a světlo šlo dovnitř bez zkreslení.",
    },
    {
      kod: "02",
      nazev: "Celoskleněné příčky",
      popis:
        "Kancelář, ordinace i byt rozdělíme čirou příčkou z kaleného skla. Kování a spáry řešíme tak, aby prostor zůstal prosvětlený a přitom akusticky oddělený.",
    },
    {
      kod: "03",
      nazev: "Sprchové zástěny na míru",
      popis:
        "Zaměříme atypickou koupelnu do milimetru a vyrobíme zástěnu, která sedne i do šikmin a starých pražských dispozic. Sklo s úpravou proti vodnímu kameni.",
    },
    {
      kod: "04",
      nazev: "Zrcadlové stěny",
      popis:
        "Lepené zrcadlové stěny opticky zvětší chodbu, posilovnu i taneční sál. Lepíme na rovný podklad tak, aby obraz nikde nezvlnil.",
    },
    {
      kod: "05",
      nazev: "Barevné obklady kuchyní",
      popis:
        "Lakované sklo za kuchyňskou linku v odstínu, který si vyberete. Jeden kus bez spár, snadno se stírá a vydrží roky mastnoty i páry.",
    },
    {
      kod: "06",
      nazev: "Celoskleněná zábradlí",
      popis:
        "Schodiště a francouzská okna zajistíme kaleným sklem v nerezovém úchytu. Bezpečné, průhledné a bez viditelných sloupků.",
    },
  ];

  return (
    <main className="gm">
      <header className="gm-top">
        <a className="gm-mark" href="#top" aria-label="GLASSMAT — sklenářství Praha">
          <span className="gm-mark__glass">GLASS</span>
          <span className="gm-mark__mat">MAT</span>
        </a>
        <nav className="gm-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#dilna">O dílně</a>
          <a className="gm-nav__call" href="tel:+420603865125">603&nbsp;865&nbsp;125</a>
        </nav>
      </header>

      <section className="gm-hero" id="top">
        <div className="gm-hero__frame">
          <img
            className="gm-hero__img"
            src="/hero.webp"
            alt="Čerstvě vsazená skleněná tabule odráží pražskou ulici — práce sklenářství Glassmat"
            width={1600}
            height={1100}
          />
          <span className="gm-hero__cut" aria-hidden="true" />
        </div>

        <div className="gm-hero__text">
          <p className="gm-eyebrow">Sklenářství na Vinohradech · od roku 1998</p>
          <h1 className="gm-h1">
            Řežeme sklo<br />
            <span className="gm-h1__thin">na milimetr</span>
          </h1>
          <p className="gm-lede">
            Plochá tabule, kalené sklo, zrcadlo i lakovaný obklad. Zaměříme,
            uřízneme a vsadíme přímo u vás v Praze — od prasklého výkladce po
            celoskleněnou příčku.
          </p>
          <div className="gm-hero__cta">
            <a className="gm-btn" href="tel:+420603865125">Zavolat sklenáři</a>
            <a className="gm-btn gm-btn--ghost" href="mailto:glassmat@glassmat.cz">
              Poslat rozměry mailem
            </a>
          </div>
          <dl className="gm-facts">
            <div>
              <dt>Zaměření v Praze</dt>
              <dd>do 3 dnů</dd>
            </div>
            <div>
              <dt>Tloušťky skla</dt>
              <dd>4–19 mm</dd>
            </div>
            <div>
              <dt>Montážní firma</dt>
              <dd>bez podomního prodeje</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="gm-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="gm-sec-head">
          <p className="gm-eyebrow gm-eyebrow--dark">Co uřízneme a vsadíme</p>
          <h2 className="gm-h2" id="sluzby-nadpis">
            Šest věcí, které se sklem zvládneme každý týden
          </h2>
        </div>

        <ol className="gm-grid">
          {sluzby.map((s) => (
            <li className="gm-card" key={s.kod}>
              <span className="gm-card__kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="gm-card__nazev">{s.nazev}</h3>
              <p className="gm-card__popis">{s.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="gm-shot">
          <img
            src="/section-1.webp"
            alt="Detail vsazené skleněné příčky s nerezovým kováním v pražském interiéru"
            width={1400}
            height={900}
          />
          <figcaption>
            Celoskleněná příčka v bytě na Žižkově — kalené sklo 10 mm,
            broušené hrany, montáž za jeden den.
          </figcaption>
        </figure>
      </section>

      <section className="gm-dilna" id="dilna" aria-labelledby="dilna-nadpis">
        <div className="gm-dilna__img">
          <img
            src="/section-2.webp"
            alt="Skladované skleněné tabule na stojanech ve sklenářské dílně"
            width={1200}
            height={1400}
          />
        </div>
        <div className="gm-dilna__text">
          <p className="gm-eyebrow gm-eyebrow--dark">O dílně</p>
          <h2 className="gm-h2" id="dilna-nadpis">
            Malá sklenářská firma, kterou znáte jménem
          </h2>
          <p className="gm-body">
            Glassmat je montážní sklenářství se skladem a řezacím stolem na
            Nitranské ulici na Vinohradech. Nejsme řetězec — přijede k vám ten,
            kdo sklo řeže i vsazuje, a ten také ručí za to, že spára sedí.
          </p>
          <ul className="gm-checks">
            <li>Zaměříme na místě a řekneme cenu předem, ne až po montáži.</li>
            <li>Pracujeme s plochým tabulovým sklem v interiéru i exteriéru.</li>
            <li>Havarijní zasklení výloh po celé Praze bereme přednostně.</li>
          </ul>

          <div className="gm-kontakt">
            <div>
              <span className="gm-kontakt__lab">Nejlíp mailem</span>
              <a href="mailto:glassmat@glassmat.cz">glassmat@glassmat.cz</a>
            </div>
            <div>
              <span className="gm-kontakt__lab">Když hoří termín</span>
              <a href="tel:+420603865125">603 865 125</a>
            </div>
            <div>
              <span className="gm-kontakt__lab">Dílna</span>
              <p>Nitranská 22, Praha 3 – Vinohrady</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
