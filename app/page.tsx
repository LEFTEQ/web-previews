import type { CSSProperties } from "react";

export default function Page() {
  const fleet = [
    {
      code: "8,8 t",
      name: "Valník s hydraulickou rukou",
      detail:
        "Naložíme a přesně složíme těžké kusy — nosníky, palety lešení, betonové patky. Ruka dosáhne tam, kam se autem nedostanete.",
      spec: "do 8,8 tuny · hydraulická ruka",
    },
    {
      code: "3,3 t",
      name: "Menší valník do úzkých ulic",
      detail:
        "Pro rozvoz po městě, na dvory a stavby s omezeným příjezdem. Rychle tam, rychle zpátky.",
      spec: "do 3,3 tuny",
    },
    {
      code: "jeřáb",
      name: "Pojízdný dílenský jeřáb",
      detail:
        "Ramenem umístíme břemeno na centimetry přesně — třeba nosník na místo, kde ho potřebujete mít.",
      spec: "přesné umístění břemen",
    },
  ];

  const trust = [
    { k: "30", label: "let za volantem v oboru" },
    { k: "Ústí", label: "nad Labem a okolí — jsme místní" },
    { k: "rodinná", label: "firma, telefon zvedá majitel" },
  ];

  return (
    <main className="el">
      <header className="el-top">
        <a className="el-mark" href="#" aria-label="ELPA UL — autodoprava Ústí nad Labem">
          <span className="el-mark-word">ELPA</span>
          <span className="el-mark-ul">UL</span>
        </a>
        <a className="el-call" href="tel:+420604854985">
          Zavolat řidiči · 604 854 985
        </a>
      </header>

      <section className="el-hero">
        <div className="el-hero-media">
          <img
            src="/hero.webp"
            alt="Nákladní automobil ELPA UL s hydraulickou rukou při skládání materiálu na stavbě v Ústí nad Labem"
            className="el-hero-img"
          />
          <div className="el-hero-grid" aria-hidden="true" />
        </div>
        <div className="el-hero-copy">
          <p className="el-eyebrow">Autodoprava · Ústí nad Labem</p>
          <h1 className="el-h1">
            Přivezeme a <em>složíme</em> to přesně tam,
            kde to potřebujete mít.
          </h1>
          <p className="el-lead">
            Auto s hydraulickou rukou do 8,8 tuny. Těžké nosníky, palety lešení
            i betonové patky přeložíme rukou přímo na místo — ne jen k plotu.
          </p>
          <div className="el-hero-actions">
            <a className="el-btn" href="tel:+420604854985">Zavolat a domluvit odvoz</a>
            <a className="el-btn el-btn-ghost" href="mailto:tadeas.valenta@elpa.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="el-fleet" aria-labelledby="fleet-h">
        <div className="el-sec-head">
          <p className="el-eyebrow">Čím vozíme</p>
          <h2 id="fleet-h" className="el-h2">Vozový park podle tonáže</h2>
          <p className="el-sec-note">
            Řekněte nám, co a kam — vybereme auto, které se tam dostane a
            zvedne to.
          </p>
        </div>
        <ul className="el-fleet-list">
          {fleet.map((f) => (
            <li key={f.code} className="el-fleet-item">
              <span className="el-fleet-code">{f.code}</span>
              <div className="el-fleet-body">
                <h3 className="el-fleet-name">{f.name}</h3>
                <p className="el-fleet-detail">{f.detail}</p>
                <p className="el-fleet-spec">{f.spec}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="el-about" aria-labelledby="about-h">
        <div className="el-about-media">
          <img
            src="/section-1.webp"
            alt="Skládání stavebního materiálu hydraulickou rukou z valníku ELPA UL"
            className="el-about-img"
          />
        </div>
        <div className="el-about-copy">
          <p className="el-eyebrow">Kdo řídí</p>
          <h2 id="about-h" className="el-h2">
            Rodinná firma, která ví, co veze
          </h2>
          <p className="el-about-text">
            ELPA UL vozí stavební materiál po Ústecku už skoro třicet let. Nejsme
            dispečink s cizími čísly — telefon zvedne člověk, který pak přijede.
            Známe zdejší stavby, úzké ulice v Krásném Březně i příjezdy do
            průmyslové zóny Všebořice.
          </p>
          <ul className="el-trust">
            {trust.map((t) => (
              <li key={t.label} className="el-trust-item">
                <span className="el-trust-k">{t.k}</span>
                <span className="el-trust-l">{t.label}</span>
              </li>
            ))}
          </ul>
          <div className="el-contact-card">
            <img
              src="/section-2.webp"
              alt="Provozovna ELPA UL v Ústí nad Labem"
              className="el-contact-img"
            />
            <div className="el-contact-lines">
              <p className="el-contact-role">Tadeáš Valenta</p>
              <p>
                <a href="tel:+420604854985">604 854 985</a>
              </p>
              <p>
                <a href="mailto:tadeas.valenta@elpa.cz">tadeas.valenta@elpa.cz</a>
              </p>
              <p className="el-contact-addr">
                Provozovna: průmyslová zóna Všebořice, Ústí nad Labem — Podhoří
                <br />
                Kancelář: Pekařská 240/3, Ústí nad Labem — Krásné Březno
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

// keep import used for potential inline typing
const _ignore: CSSProperties | null = null;
void _ignore;
