import { AiImage } from "./_ui";
import { ChevronDivider } from "./motion";

const sluzby = [
  {
    nazev: "Deskové výměníky tepla",
    popis:
      "Rozebíratelné výměníky s těsněním pro otopné soustavy, ohřev TUV i technologické okruhy. Vybereme desky a dimenzování na váš přesný výkon.",
    spec: "0,2–2 500 kW",
    side: "hot" as const,
  },
  {
    nazev: "Pájené výměníky",
    popis:
      "Kompaktní měděné pájené výměníky do kotelen, tepelných čerpadel a chladicích okruhů. Malé rozměry, vysoký přenos tepla.",
    spec: "do 30 bar · 200 °C",
    side: "cold" as const,
  },
  {
    nazev: "Předávací stanice a topenářství",
    popis:
      "Kompletní topenářství: rozvody, regulace a předávací stanice na klíč — od návrhu přes montáž po uvedení do provozu.",
    spec: "na klíč",
    side: "hot" as const,
  },
  {
    nazev: "Servis, čištění a přetěsnění",
    popis:
      "Chemické čištění desek, výměna těsnění a rozbor skutečného výkonu — i pro výměníky jiných značek. Náhradní těsnění držíme skladem.",
    spec: "servis do 48 h",
    side: "cold" as const,
  },
];

const fakta = [
  { k: "Sídlo", v: "Riegrova 1756/51, 370 01 České Budějovice" },
  { k: "IČO", v: "06935206" },
  { k: "Telefon", v: "+420 739 569 585" },
  { k: "E-mail", v: "info@enertainex.eu" },
  { k: "Revize nabídky", v: "průběžně, naposledy 2025" },
  { k: "Zabezpečení", v: "web běží plně na HTTPS" },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="hero__media">
          <AiImage
            src="/hero.webp"
            alt="Deskový výměník tepla z nerezové oceli s chevronovým žebrováním desek"
            className="hero__img"
          />
          <span className="hero__scrim" aria-hidden="true" />
        </div>

        <div className="topbar">
          <span className="wordmark">
            <svg className="wordmark__mark" viewBox="0 0 40 24" aria-hidden="true">
              <path d="M2 3 L13 12 L2 21" fill="none" stroke="var(--ember)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M14 3 L25 12 L14 21" fill="none" stroke="var(--copper)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M26 3 L37 12 L26 21" fill="none" stroke="var(--coolant)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="wordmark__text">Enertainex</span>
          </span>
          <a className="topbar__tel" href="tel:+420739569585">+420 739 569 585</a>
        </div>

        <div className="hero__inner">
          <p className="eyebrow eyebrow--light">Výměníky tepla · České Budějovice</p>
          <h1 className="hero__title">
            Teplo předané přesně tam,
            <br />
            <span className="hero__title-accent">kam patří.</span>
          </h1>
          <p className="hero__lead">
            Navrhujeme, dodáváme a servisujeme deskové a pájené výměníky tepla —
            pro otopné soustavy, ohřev vody i technologie. Spočítáme výkon,
            vybereme desky a postaráme se o ně i po letech provozu.
          </p>
          <ul className="hero__meta">
            <li>Deskové</li>
            <li>Pájené</li>
            <li>Předávací stanice</li>
            <li>Servis</li>
          </ul>
        </div>
      </header>

      <ChevronDivider label="teplá strana → studená strana" />

      <section className="section section--light" aria-labelledby="sluzby-nadpis">
        <div className="wrap">
          <div className="lead-row">
            <div>
              <p className="eyebrow">Co pro vás uděláme</p>
              <h2 id="sluzby-nadpis" className="h2">
                Výměník je jen tak dobrý, jak dobře je navržený a udržovaný.
              </h2>
            </div>
            <p className="lead-row__note">
              Každá zakázka začíná výpočtem přenosu tepla a končí funkčním
              zařízením — ne katalogovým odhadem. Poradíme i s výběrem, když si
              nejste jistí, co potřebujete.
            </p>
          </div>

          <div className="banner">
            <AiImage
              src="/section-1.webp"
              alt="Rozložené desky deskového výměníku s chevronovým reliéfem připravené k montáži"
              className="banner__img"
            />
          </div>

          <ul className="cards">
            {sluzby.map((s) => (
              <li key={s.nazev} className={`card card--${s.side}`}>
                <span className="card__ridge" aria-hidden="true" />
                <div className="card__body">
                  <h3 className="card__title">{s.nazev}</h3>
                  <p className="card__text">{s.popis}</p>
                </div>
                <span className="card__spec">{s.spec}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ChevronDivider flip label="studená strana → teplá strana" />

      <section className="section section--dark" aria-labelledby="onas-nadpis">
        <div className="wrap wrap--split">
          <div className="about">
            <p className="eyebrow eyebrow--light">Proč Enertainex</p>
            <h2 id="onas-nadpis" className="h2 h2--light">
              Partner, který u výměníku zůstane i po předání.
            </h2>
            <p className="about__text">
              Od roku 2018 dodáváme výměníky tepla z Českých Budějovic po celé
              Česko. Nejsme obchod s krabicemi — počítáme výkon, řešíme provozní
              podmínky a k zákazníkovi se vracíme, když je potřeba desky vyčistit
              nebo přetěsnit.
            </p>
            <p className="about__text">
              Náhradní těsnění a desky pro běžné typy držíme skladem, takže
              odstávka netrvá déle, než musí. Servisujeme i výměníky, které jsme
              nedodali my.
            </p>

            <dl className="facts">
              {fakta.map((f) => (
                <div key={f.k} className="facts__row">
                  <dt className="facts__k">{f.k}</dt>
                  <dd className="facts__v">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <figure className="about__figure">
            <AiImage
              src="/section-2.webp"
              alt="Technik Enertainexu při servisu výměníku tepla v kotelně"
              className="about__img"
            />
            <figcaption className="about__cap">
              Servis a proměření výkonu přímo v provozu — Riegrova, České
              Budějovice.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
