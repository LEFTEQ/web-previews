import type { CSSProperties } from "react";

export default function Page() {
  const lekce = [
    {
      cas: "07:00",
      nazev: "Ranní probuzení",
      typ: "Mobilita & dech",
      popis: "Pomalé rozhýbání, než začne den. Kloubní mobilita, protažení a dechová cvičení pro každého — i pro úplné začátečníky.",
    },
    {
      cas: "12:15",
      nazev: "Polední náboj",
      typ: "Funkční kruhový trénink",
      popis: "Padesát minut, které se vejdou do polední pauzy. Vlastní váha, kettlebelly, švihadla — odejdete rozproudění a včas zpět do práce.",
    },
    {
      cas: "17:30",
      nazev: "Silová po práci",
      typ: "Činky & technika",
      popis: "Trenér vás provede správným provedením dřepu, mrtvého tahu a tlaků. Malá skupina, individuální korekce, žádné cvičení naslepo.",
    },
    {
      cas: "18:45",
      nazev: "Zklidnění",
      typ: "Jóga & regenerace",
      popis: "Zpomalíme tělo i hlavu. Protažení, rovnováha a chvíle ticha na konci dne. Deka a lektorka připraveny.",
    },
  ];

  return (
    <main className="gm">
      <header className="gm-nav" aria-label="Hlavní navigace">
        <a className="gm-brand" href="#top" aria-label="GoMango — domů">
          <span className="gm-brand-go">Go</span>
          <span className="gm-brand-mango">Mango</span>
          <span className="gm-brand-slice" aria-hidden="true" />
        </a>
        <nav className="gm-links">
          <a href="#rozvrh">Lekce</a>
          <a href="#vyziva">Výživa</a>
          <a href="#o-nas">O nás</a>
        </nav>
        <a className="gm-nav-cta" href="#rozvrh">Rezervovat lekci</a>
      </header>

      <section className="gm-hero" id="top">
        <div className="gm-hero-media">
          <img
            src="/hero.webp"
            alt="Sportovní studio GoMango v Hradci Králové — prostor pro skupinové lekce a trénink"
            className="gm-hero-img"
          />
          <div className="gm-hero-veil" aria-hidden="true" />
        </div>

        <div className="gm-hero-inner">
          <p className="gm-eyebrow">
            <span>Přátelství</span>
            <span className="gm-dot" aria-hidden="true">·</span>
            <span>Radost</span>
            <span className="gm-dot" aria-hidden="true">·</span>
            <span>Zdraví</span>
          </p>
          <h1 className="gm-hero-title">
            Sport chutná<br />
            nejlíp <em>čerstvý.</em>
          </h1>
          <p className="gm-hero-lede">
            Sportovní studio a výživová poradna v Hradci Králové. Malé skupiny,
            trenéři, kteří vás znají jménem, a nálada, do které se budete chtít vracet.
          </p>
          <div className="gm-hero-actions">
            <a className="gm-btn gm-btn-primary" href="#rozvrh">Rezervovat lekci</a>
            <a className="gm-btn gm-btn-ghost" href="tel:+420725412063">
              Zavolat 725 412 063
            </a>
          </div>
        </div>

        <dl className="gm-hero-strip">
          <div>
            <dt>Otevřeno</dt>
            <dd>Po–Pá 8–19 · Ne 15–19</dd>
          </div>
          <div>
            <dt>Kde nás najdete</dt>
            <dd>Hradečnice 995, Hradec Králové</dd>
          </div>
          <div>
            <dt>Skupiny</dt>
            <dd>max. 12 lidí na lekci</dd>
          </div>
        </dl>
      </section>

      <section className="gm-schedule" id="rozvrh" aria-labelledby="rozvrh-nadpis">
        <div className="gm-section-head">
          <p className="gm-section-eyebrow">Denní rozvrh</p>
          <h2 id="rozvrh-nadpis">Čtyři chvíle dne,<br />kdy patří tělo vám</h2>
          <p className="gm-section-lede">
            Neděláme donekonečna dlouhý ceník cvičení, kterým nikdo nerozumí.
            Máme čtyři lekce navázané na váš den — od probuzení až po zklidnění
            před spaním. Vyberte si tu svou.
          </p>
        </div>

        <ol className="gm-slots">
          {lekce.map((l) => (
            <li className="gm-slot" key={l.cas}>
              <span className="gm-slot-time">{l.cas}</span>
              <div className="gm-slot-body">
                <h3>{l.nazev}</h3>
                <p className="gm-slot-typ">{l.typ}</p>
                <p className="gm-slot-popis">{l.popis}</p>
              </div>
              <span className="gm-slot-arrow" aria-hidden="true">→</span>
            </li>
          ))}
        </ol>

        <figure className="gm-schedule-figure">
          <img
            src="/section-1.webp"
            alt="Skupinová lekce v GoMango — cvičenci při funkčním tréninku"
          />
          <figcaption>
            První lekce je u nás zdarma. Přijďte si vyzkoušet atmosféru, teprve pak
            se rozhodujete.
          </figcaption>
        </figure>
      </section>

      <section className="gm-about" id="o-nas" aria-labelledby="o-nas-nadpis">
        <div className="gm-about-grid">
          <figure className="gm-about-media">
            <img
              src="/section-2.webp"
              alt="Tým GoMango a výživová poradna v Hradci Králové"
            />
          </figure>

          <div className="gm-about-copy">
            <p className="gm-section-eyebrow" id="vyziva">My jsme GoMango</p>
            <h2 id="o-nas-nadpis">Tým přátel, který vás nenechá cvičit ve zlém světle</h2>
            <p>
              Jsme parta lidí, které baví sport, dobrá nálada a hlavně zdraví.
              Každý den se snažíme, aby u nás bylo příjemně — abyste se ve studiu
              cítili jako doma, ne jako číslo na kartě permanentky.
            </p>
            <p>
              Ke cvičení patří i to, co máte na talíři. Naše výživová poradkyně
              vám sestaví jídelníček, který zvládnete v běžném týdnu, a ukáže
              recepty, které opravdu uvaříte. Žádné hladovky, žádné zázraky —
              jen udržitelné změny.
            </p>

            <ul className="gm-offer">
              <li>
                <h3>Sportovní lekce</h3>
                <p>Skupinové i individuální tréninky s trenérem, který hlídá techniku.</p>
              </li>
              <li>
                <h3>Výživové poradenství</h3>
                <p>Osobní jídelníček na míru a konzultace, které vydrží.</p>
              </li>
              <li>
                <h3>Recepty &amp; tipy</h3>
                <p>Chytré recepty pro sportovce, které stihnete i po práci.</p>
              </li>
            </ul>

            <div className="gm-contact-card">
              <p className="gm-contact-label">Recepce &amp; rezervace</p>
              <a className="gm-contact-tel" href="tel:+420725412063">+420 725 412 063</a>
              <a className="gm-contact-mail" href="mailto:gomango@gomango.cz">gomango@gomango.cz</a>
              <p className="gm-contact-addr">Hradečnice 995, Hradec Králové 9, 500 09</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
