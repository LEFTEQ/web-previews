import React from "react";

const sluzby = [
  {
    kod: "KRT",
    nazev: "Krtkování a čištění potrubí",
    popis:
      "Ucpaná kanalizace, odpad ve dřezu, WC nebo dešťová svodovka? Přijedeme s vysokotlakým i mechanickým krtkem a průchodnost obnovíme na místě.",
  },
  {
    kod: "TLK",
    nazev: "Vysokotlaké tlakové čištění",
    popis:
      "Zanesené domovní i uliční přípojky pročistíme tlakovou vodou. Rozpustíme tuky, kořeny i usazeniny, které mechanika nezvládne.",
  },
  {
    kod: "FKL",
    nazev: "Fekální vůz a odvoz odpadu",
    popis:
      "Vyvezeme jímky, septiky i lapoly. Vy spláchnete, my odvezeme — s dokladem o likvidaci na schválené čistírně.",
  },
  {
    kod: "KAM",
    nazev: "Kamerová prohlídka potrubí",
    popis:
      "Nevíte, kde je závada? Projedeme potrubí kamerou, najdeme prasklinu, propad nebo nájezd kořenů a ukážeme vám záznam.",
  },
];

export default function Page() {
  return (
    <main className="mr">
      <header className="mr-top">
        <a className="mr-mark" href="#" aria-label="Miroslav Rus — odpady a kanalizace">
          <span className="mr-mark-line">MIROSLAV</span>
          <span className="mr-mark-line mr-mark-rus">RUS</span>
          <span className="mr-mark-sub">odpady &amp; kanalizace · Ústí n. L.</span>
        </a>
        <a className="mr-call" href="tel:+420728657222">
          <span className="mr-call-label">Nonstop výjezd</span>
          <span className="mr-call-num">728 657 222</span>
        </a>
      </header>

      <section className="mr-hero">
        <div className="mr-hero-media">
          <img
            src="/hero.webp"
            alt="Vysokotlaké čištění kanalizace vozem firmy Miroslav Rus v Ústí nad Labem"
            className="mr-hero-img"
          />
          <span className="mr-hero-tag">Ø 40–600 mm · tlak až 200 bar</span>
        </div>
        <div className="mr-hero-copy">
          <p className="mr-eyebrow">Kanalizace · jímky · odpady</p>
          <h1 className="mr-h1">
            Vy spláchnete.
            <br />
            <span className="mr-h1-accent">My odvezeme.</span>
          </h1>
          <p className="mr-lead">
            Ucpaný odpad neřeší chemie z drogerie. Přijedeme s krtkem, tlakovou
            vodou a fekálním vozem — a průchodnost obnovíme ještě dnes. Ústí nad
            Labem a okolí, i o víkendu po domluvě.
          </p>
          <div className="mr-hero-cta">
            <a className="mr-btn" href="tel:+420728657222">
              Zavolat 728 657 222
            </a>
            <a className="mr-btn mr-btn-ghost" href="#sluzby">
              Co umíme vyřešit
            </a>
          </div>
        </div>
      </section>

      <section className="mr-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="mr-sec-head">
          <p className="mr-eyebrow">Služby</p>
          <h2 className="mr-h2" id="sluzby-nadpis">
            Od ucpaného dřezu po vyvezenou jímku
          </h2>
          <p className="mr-sec-note">
            Vyjedeme s vlastní technikou — nic nesubdodáváme. Řekněte, co
            neteče, a vybereme, co na to platí.
          </p>
        </div>

        <ul className="mr-grid">
          {sluzby.map((s) => (
            <li className="mr-card" key={s.kod}>
              <span className="mr-card-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="mr-card-nazev">{s.nazev}</h3>
              <p className="mr-card-popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mr-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="mr-about-media">
          <img
            src="/section-2.webp"
            alt="Technika Miroslav Rus s.r.o. — silniční nákladní doprava a čištění kanalizace"
            className="mr-about-img"
          />
        </div>
        <div className="mr-about-copy">
          <p className="mr-eyebrow">O nás</p>
          <h2 className="mr-h2" id="o-nas-nadpis">
            Miroslav Rus s.r.o. — kanalizaci máme jako řemeslo
          </h2>
          <p className="mr-about-text">
            Jsme rodinná firma z Ústí nad Labem. Vedle silniční nákladní dopravy
            čistíme a vyvážíme kanalizaci pro domácnosti, bytové domy i provozy.
            Poradíme, jakou službu i techniku na váš problém objednat — a
            nenaúčtujeme, co nepotřebujete.
          </p>

          <dl className="mr-facts">
            <div className="mr-fact">
              <dt>Provozní doba</dt>
              <dd>Po–Pá 7.00–15.30</dd>
            </div>
            <div className="mr-fact">
              <dt>Víkend</dt>
              <dd>Po domluvě, s příplatkem</dd>
            </div>
            <div className="mr-fact">
              <dt>Působíme</dt>
              <dd>Ústí nad Labem a okolí</dd>
            </div>
            <div className="mr-fact">
              <dt>Dispečink</dt>
              <dd>
                <a href="tel:+420728657222">728 657 222</a> ·{" "}
                <a href="tel:+420475200370">475 200 370</a>
              </dd>
            </div>
          </dl>

          <blockquote className="mr-quote">
            „Máte problém s kanalizací a nevíte jak na něj? Zavolejte — a
            společně ho vyřešíme.“
          </blockquote>
        </div>
      </section>
    </main>
  );
}
