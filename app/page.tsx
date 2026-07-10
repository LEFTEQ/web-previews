import type { CSSProperties } from "react";

export default function Page() {
  const vysetreni = [
    {
      cislo: "01",
      nazev: "Vyšetření optometristou",
      cena: "1 000 Kč",
      poznamka: "Sleva 50 % při koupi brýlí či skel",
      popis:
        "Kompletní změření dioptrií i ostatních zrakových funkcí — nejen ostrost, ale i to, jak vaše oči spolupracují a jak zvládají celý den u obrazovek.",
    },
    {
      cislo: "02",
      nazev: "Vyšetření očním lékařem",
      cena: "1 200 Kč",
      poznamka: "Zdravotní prohlídka bez stanovení dioptrií",
      popis:
        "Odborná zdravotní kontrola očí. Vhodné, když chcete mít jistotu o zdraví svého zraku, ne jen novou dioptrii.",
    },
    {
      cislo: "03",
      nazev: "Zpomalení růstu dioptrií u dětí",
      cena: "na míru",
      poznamka: "Ve spolupráci s MUDr. Martinou Krotilovou",
      popis:
        "Rostou vašemu dítěti dioptrie? Poradíme, jak nastavit mobil, doporučíme čočky proti růstu dioptrií a v určitých případech nasadíme zrakový trénink.",
    },
  ];

  return (
    <main className="op">
      <a className="op-skip" href="#obsah">
        Přeskočit na hlavní obsah
      </a>

      <header className="op-topbar">
        <div className="op-brand" aria-label="Optika Policar">
          <span className="op-brand-eye" aria-hidden="true">
            <span className="op-brand-iris" />
          </span>
          <span className="op-brand-word">
            Optika <em>Policar</em>
          </span>
        </div>
        <nav className="op-nav" aria-label="Hlavní">
          <a href="#vysetreni">Vyšetření</a>
          <a href="#o-nas">O nás</a>
          <a href="#kontakt">Kontakt</a>
        </nav>
        <a className="op-cta-top" href="tel:+420607627677">
          Objednat na vyšetření
        </a>
      </header>

      <section className="op-hero" id="obsah">
        <div className="op-hero-copy">
          <p className="op-eyebrow">Oční optika a optometrie · Vinohrady, Praha 2 · od 2007</p>
          <h1 className="op-hero-title">
            Pomůžeme vám vidět
            <span className="op-hero-accent"> ten krásný svět.</span>
          </h1>
          <p className="op-hero-lead">
            Rodinná optika Jaroslava Policara na Bruselské. Optometrii se věnujeme od roku 1983 —
            a poznáte to na tom, jak pečlivě vám změříme zrak i jak dlouho vám vydrží brýle.
          </p>
          <div className="op-hero-actions">
            <a className="op-btn op-btn--primary" href="tel:+420607627677">
              Objednat na vyšetření
            </a>
            <a className="op-btn op-btn--ghost" href="#vysetreni">
              Co mě čeká na vyšetření
            </a>
          </div>
          <dl className="op-hero-facts">
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 10–18, středa 9–20</dd>
            </div>
            <div>
              <dt>Kde nás najdete</dt>
              <dd>Bruselská 635/2, Vinohrady</dd>
            </div>
          </dl>
        </div>
        <figure className="op-hero-figure">
          <img
            src="/hero.webp"
            alt="Interiér oční optiky Policar s vystavenými brýlovými obroučkami"
            className="op-hero-img"
            width={880}
            height={1040}
            loading="eager"
          />
          <figcaption className="op-hero-cap">Jaroslav Policar · optometrista</figcaption>
        </figure>
      </section>

      <section className="op-section op-section--services" id="vysetreni">
        <div className="op-section-head">
          <p className="op-eyebrow op-eyebrow--dark">Naše péče o zrak</p>
          <h2 className="op-section-title">
            To nejpečlivější oční vyšetření v Praze
          </h2>
          <p className="op-section-intro">
            Digitální doba klade na zrak ohromné nároky — i malá skrytá oční vada dokáže nadělat
            velké potíže. Když míváte rozmazané vidění, bolesti okolo očí, rychlou únavu nebo dokonce
            dvojité vidění, nestačí změřit jen dioptrie. Podíváme se na celý zrak.
          </p>
        </div>

        <ol className="op-cards">
          {vysetreni.map((v) => (
            <li className="op-card" key={v.cislo}>
              <span className="op-card-num" aria-hidden="true">
                {v.cislo}
              </span>
              <h3 className="op-card-title">{v.nazev}</h3>
              <p className="op-card-price">{v.cena}</p>
              <p className="op-card-note">{v.poznamka}</p>
              <p className="op-card-desc">{v.popis}</p>
            </li>
          ))}
        </ol>

        <figure className="op-band">
          <img
            src="/section-1.webp"
            alt="Detail vyšetření zraku a měřicího přístroje v optice Policar"
            className="op-band-img"
            width={1200}
            height={620}
            loading="lazy"
          />
          <figcaption className="op-band-cap">
            Brýle jako zdravotní pomůcku lze uhradit i z fondu FKSP.
          </figcaption>
        </figure>
      </section>

      <section className="op-section op-section--about" id="o-nas">
        <figure className="op-about-figure">
          <img
            src="/section-2.webp"
            alt="Rodinný tým oční optiky Policar"
            className="op-about-img"
            width={720}
            height={860}
            loading="lazy"
          />
        </figure>
        <div className="op-about-copy">
          <p className="op-eyebrow op-eyebrow--dark">O nás</p>
          <h2 className="op-section-title">Rodinná optika, kde je váš zrak jako doma</h2>
          <p className="op-about-text">
            „Oční optice a optometrii se věnuji od roku 1983. V roce 2007 jsem se rozhodl dělat
            optiku po svém a založil Optiku Policar. Moje děti se rozhodly, že chtějí lidem taky
            pomáhat vidět svět lépe — a jak děti rostly, rostla i naše firma.“
          </p>
          <p className="op-about-sign">— Jaroslav Policar</p>

          <div className="op-evenings">
            <h3 className="op-evenings-title">Koncerty, přednášky, cestopisy</h3>
            <p>
              Optikou žijeme, ale milujeme taky hudbu a cestování. Jsou večery, kdy se naše optika
              promění v koncertní sál nebo přednáškovou místnost.
            </p>
          </div>

          <div className="op-contact" id="kontakt">
            <div className="op-contact-row">
              <span className="op-contact-label">Telefon</span>
              <a href="tel:+420607627677">+420 607 627 677</a>
            </div>
            <div className="op-contact-row">
              <span className="op-contact-label">E-mail</span>
              <a href="mailto:info@optika-policar.cz">info@optika-policar.cz</a>
            </div>
            <div className="op-contact-row">
              <span className="op-contact-label">Adresa</span>
              <span>Bruselská 635/2, Praha 2 – Vinohrady</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
