import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      krok: "Vyšetření",
      nazev: "Měření zraku",
      popis:
        "Optometrista projde vaše oči na moderních přístrojích a najde přesnou hodnotu dioptrií — bez tipování, bez zbytečného mžourání do dálky.",
    },
    {
      krok: "Zkouška",
      nazev: "Aplikace kontaktních čoček",
      popis:
        "Nasadíme první čočky přímo na optice, naučíme vás manipulaci a vybereme materiál, který sedne vašim očím i dennímu režimu.",
    },
    {
      krok: "Kontrola",
      nazev: "Kontrola čoček a druhá aplikace",
      popis:
        "Vrátíte se, my zkontrolujeme, jak čočky sedí, a doladíme parametry. Zrak i pohodlí hlídáme i po prvním nasazení.",
    },
    {
      krok: "Ochrana",
      nazev: "Měření zraku UVEX",
      popis:
        "Speciální měření pro brýle do provozu i na kolo — sklo, které chrání před UV i odlesky tam, kde na tom opravdu záleží.",
    },
  ];

  return (
    <main className="fx">
      <header className="fx-top">
        <a className="fx-mark" href="#" aria-label="FOKUS optik, úvod">
          <span className="fx-mark-eye" aria-hidden="true">
            <span className="fx-iris" />
          </span>
          <span className="fx-mark-text">
            FOKUS<span className="fx-mark-light">optik</span>
          </span>
        </a>
        <nav className="fx-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#optika">Optika Olympia</a>
          <a className="fx-nav-cta" href="#objednat">
            Objednat měření zraku
          </a>
        </nav>
      </header>

      <section className="fx-hero" aria-labelledby="hero-nadpis">
        <div className="fx-hero-text">
          <p className="fx-eyebrow">Oční optika · Olympia Olomouc</p>
          <h1 id="hero-nadpis">
            Zaostřeno na to,
            <br />
            <em>jak vidíte svět.</em>
          </h1>
          <p className="fx-lead">
            Přijďte si nechat změřit zrak k optometristům FOKUS v Centru
            Olympia ve Velkém Týnci. Vybereme dioptrie i obruby, které sednou
            přesně vašim očím — a doladíme je, dokud nevidíte ostře.
          </p>
          <div className="fx-hero-actions">
            <a className="fx-btn" href="#objednat">
              Objednat měření zraku
            </a>
            <a className="fx-link" href="#optika">
              Kde nás najdete
            </a>
          </div>
          <dl className="fx-hours">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Ne 9:00–21:00</dd>
            </div>
            <div>
              <dt>Objednání</dt>
              <dd>725 245 964</dd>
            </div>
          </dl>
        </div>
        <figure className="fx-hero-media">
          <img
            src="/hero.webp"
            alt="Detail dioptrických brýlí a měření zraku na optice FOKUS"
          />
          <figcaption className="fx-chip">Centrum Olympia · Velký Týnec</figcaption>
        </figure>
      </section>

      <section className="fx-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="fx-section-head">
          <p className="fx-eyebrow">Co u nás pořídíte</p>
          <h2 id="sluzby-nadpis">Od změření po ostrý pohled</h2>
          <p className="fx-section-lead">
            Nejste jen jedny dioptrie. Projdeme s vámi celou cestu — od prvního
            měření po kontrolu, že vám všechno opravdu sedí.
          </p>
        </div>
        <ol className="fx-cards">
          {sluzby.map((s, i) => (
            <li
              className="fx-card"
              key={s.nazev}
              style={{ "--i": i } as CSSProperties}
            >
              <span className="fx-card-step">{s.krok}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </li>
          ))}
        </ol>
        <p className="fx-note">
          Sortiment na pobočce: dioptrické brýle, sluneční brýle, kontaktní
          čočky a doplňky. Platit můžete kartou i benefity.
        </p>
      </section>

      <section className="fx-optika" id="optika" aria-labelledby="optika-nadpis">
        <figure className="fx-optika-media">
          <img
            src="/section-1.webp"
            alt="Prodejna oční optiky FOKUS s výběrem brýlových obrub"
          />
        </figure>
        <div className="fx-optika-text">
          <p className="fx-eyebrow">O nás</p>
          <h2 id="optika-nadpis">Optici, kteří vás poznají jménem</h2>
          <p>
            Na pobočce FOKUS v Centru Olympia se o vaše oči stará tým
            zkušených optiků a optometristů. Poradíme s výběrem obrub podle
            tvaru obličeje, doporučíme čočky na míru vašemu dni — a když bude
            něco potřeba doladit, jsme tu každý den do devíti večer.
          </p>
          <ul className="fx-facts">
            <li>
              <span className="fx-fact-k">Adresa</span>
              <span className="fx-fact-v">
                Centrum Olympia, Velký Týnec
              </span>
            </li>
            <li>
              <span className="fx-fact-k">Otevřeno</span>
              <span className="fx-fact-v">Po–Ne 9:00–21:00</span>
            </li>
            <li>
              <span className="fx-fact-k">Telefon</span>
              <span className="fx-fact-v">725 245 964</span>
            </li>
            <li>
              <span className="fx-fact-k">E-mail</span>
              <span className="fx-fact-v">
                velkytynec.olomoucka@fokusoptik.cz
              </span>
            </li>
          </ul>
          <a className="fx-btn fx-btn-ghost" href="#objednat">
            Navigovat na pobočku
          </a>
        </div>
      </section>

      <section className="fx-klub" id="objednat" aria-labelledby="klub-nadpis">
        <figure className="fx-klub-media">
          <img
            src="/section-2.webp"
            alt="Zákazník při zkoušce brýlí u optometristy FOKUS"
          />
        </figure>
        <div className="fx-klub-text">
          <p className="fx-eyebrow">FOKUS klub</p>
          <h2 id="klub-nadpis">Staňte se stálým zákazníkem</h2>
          <p>
            Členům FOKUS klubu držíme přehled o kontrolách zraku i výhodách při
            nákupu dalších brýlí. Zeptejte se na pobočce — přihlášení je zdarma a
            hodí se hlavně tehdy, když čočky nosíte každý den.
          </p>
          <a className="fx-btn" href="tel:725245964">
            Zavolat na 725 245 964
          </a>
        </div>
      </section>
    </main>
  );
}
