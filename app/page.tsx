import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="rx">
      {/* HERO */}
      <header className="rx-top">
        <a className="rx-mark" href="#uvod" aria-label="Lékárna Medipont Plus, České Budějovice">
          <span className="rx-cross" aria-hidden="true">
            <span />
            <span />
          </span>
          <span className="rx-mark-text">
            <strong>Medipont</strong>
            <em>Plus</em>
          </span>
        </a>
        <nav className="rx-nav" aria-label="Hlavní">
          <a href="#pece">Naše péče</a>
          <a href="#recept">e‑Recept</a>
          <a href="#lekarnici">Lékárníci</a>
        </nav>
        <a className="rx-hours" href="#kontakt">
          <span>Otevřeno</span>
          <strong>Po–Pá 8.30–15.30</strong>
        </a>
      </header>

      <section className="rx-hero" id="uvod">
        <div className="rx-hero-copy">
          <p className="rx-eyebrow">Lékárna &amp; poradna · Dr. Stejskala 15, České Budějovice</p>
          <h1 className="rx-title">
            Přijďte si nechat
            <span className="rx-title-em"> změřit tlak</span>
            <br />a poradit s léky.
          </h1>
          <p className="rx-lede">
            Rodinná lékárna kousek od centra, kde s vámi nad receptem opravdu
            promluvíme. Odborné konzultace k léku i životosprávě dáváme zdarma —
            klidně i po telefonu.
          </p>
          <div className="rx-hero-actions">
            <a className="rx-btn" href="#recept">Objednat lék z e‑receptu</a>
            <a className="rx-btn rx-btn-ghost" href="tel:+420386322172">
              Zavolat 386 322 172
            </a>
          </div>
          <p className="rx-free">
            <span className="rx-dot" aria-hidden="true" />
            Měření krevního tlaku a tepové frekvence zdarma — bez objednání.
          </p>
        </div>

        <figure className="rx-hero-figure">
          <img
            src="/hero.webp"
            alt="Interiér lékárny Medipont Plus v Českých Budějovicích"
            className="rx-hero-img"
          />
          <figcaption className="rx-hero-tag">
            <span className="rx-hero-tag-k">Bezbariérový přístup</span>
            <span className="rx-hero-tag-v">Dr. Stejskala 426/15</span>
          </figcaption>
        </figure>
      </section>

      {/* PÉČE — služby */}
      <section className="rx-care" id="pece">
        <div className="rx-section-head">
          <p className="rx-eyebrow">Co u nás vyřídíte</p>
          <h2 className="rx-h2">Lékárna, kde se personálu vyplatí ptát</h2>
        </div>

        <ol className="rx-slips">
          {SLUZBY.map((s, i) => (
            <li className="rx-slip" key={s.title} style={{ "--i": i } as CSSProperties}>
              <span className="rx-slip-no">{String(i + 1).padStart(2, "0")}</span>
              <div className="rx-slip-body">
                <h3 className="rx-slip-title">{s.title}</h3>
                <p className="rx-slip-text">{s.text}</p>
              </div>
              <span className="rx-slip-tag">{s.tag}</span>
            </li>
          ))}
        </ol>

        <div className="rx-recept" id="recept">
          <img
            src="/section-1.webp"
            alt="Připravené léky k vyzvednutí v lékárně Medipont Plus"
            className="rx-recept-img"
          />
          <div className="rx-recept-copy">
            <p className="rx-eyebrow rx-eyebrow-dark">Ušetřete jednu cestu</p>
            <h3 className="rx-h3">Lék z e‑receptu vám nachystáme na druhý den</h3>
            <p className="rx-recept-text">
              Pošlete nám naskenovaný nebo vyfocený e‑recept e‑mailem. Ověříme
              sklad, případně lék doobjednáme — a vy si druhý den odnesete
              všechno najednou. Žádné čekání, žádná zbytečná cesta pro nic.
            </p>
            <a className="rx-btn" href="mailto:objednavky-lekarna@medipontplus.cz">
              Poslat recept e‑mailem
            </a>
            <p className="rx-recept-mail">objednavky-lekarna@medipontplus.cz</p>
          </div>
        </div>
      </section>

      {/* DŮVĚRA — lékárníci */}
      <section className="rx-team" id="lekarnici">
        <div className="rx-team-grid">
          <div className="rx-team-intro">
            <p className="rx-eyebrow">Jsme vám k službám</p>
            <h2 className="rx-h2">Za pultem lidé, které znáte jménem</h2>
            <p className="rx-team-lede">
              Konzultace k vašemu léku i zdravotnímu stavu poskytujeme zdarma —
              včetně rady, jak upravit životosprávu. Vybavíme vám domácí
              lékárničku a poradíme s kosmetikou i homeopatiky.
            </p>
            <img
              src="/section-2.webp"
              alt="Lékárník z Medipont Plus při konzultaci u výdejního pultu"
              className="rx-team-img"
            />
          </div>

          <ul className="rx-people">
            {TYM.map((p) => (
              <li className="rx-person" key={p.name}>
                <p className="rx-person-role">{p.role}</p>
                <p className="rx-person-name">{p.name}</p>
                <a className="rx-person-link" href={`mailto:${p.mail}`}>
                  {p.mail}
                </a>
              </li>
            ))}
            <li className="rx-person rx-person-contact" id="kontakt">
              <p className="rx-person-role">Lékárna</p>
              <a className="rx-person-name rx-person-tel" href="tel:+420386322172">
                386 322 172
              </a>
              <a className="rx-person-link" href="tel:+420601569225">
                mobil 601 569 225
              </a>
              <p className="rx-person-hours">Po–Pá 8.30–15.30</p>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}

const SLUZBY = [
  {
    title: "Změříme tlak zdarma",
    text: "Krevní tlak i tepovou frekvenci vám změříme na počkání. Stačí přijít a požádat personál.",
    tag: "bez objednání",
  },
  {
    title: "Poradíme s léky i po telefonu",
    text: "Vybavíme domácí lékárničku a pomůžeme s výběrem léků i kosmetiky — klidně z domova.",
    tag: "konzultace zdarma",
  },
  {
    title: "Homeopatika a životospráva",
    text: "Odborně poradíme se zdravotními potížemi, výběrem homeopatik a úpravou životosprávy.",
    tag: "na míru",
  },
];

const TYM = [
  {
    role: "Vedoucí lékárník",
    name: "PharmDr. Blanka Vovesná",
    mail: "blanka.vovesna@medipontplus.cz",
  },
  {
    role: "Lékárník",
    name: "PharmDr. Denisa Volková",
    mail: "denisa.volkova@medipontplus.cz",
  },
  {
    role: "Farmaceutický asistent",
    name: "Michaela Vejvodová",
    mail: "michaela.vejvodova@medipontplus.cz",
  },
];
