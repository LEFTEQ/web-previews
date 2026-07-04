import type { CSSProperties } from "react";

const services = [
  {
    id: "kontrola",
    marker: "§ 43",
    title: "Kontrola a čištění spalinové cesty",
    body: "Vymeteme sadze i dehet, prohlédneme celý průduch a na místě vystavíme revizní zprávu, kterou po vás chce pojišťovna i hasiči.",
    detail: "Zpráva do ruky ještě týž den.",
  },
  {
    id: "vlozkovani",
    marker: "Ø",
    title: "Vložkování komína",
    body: "Starý zdivový komín dostane nerezovou nebo plastovou vložku na míru průměru. Řešení pro plyn, tuhá paliva i kondenzační kotle.",
    detail: "Materiál i montáž na klíč.",
  },
  {
    id: "frezovani",
    marker: "↻",
    title: "Frézování a rozšíření průduchu",
    body: "Když je průduch úzký nebo popraskaný, rotační hlavicí ho rozšíříme na potřebný rozměr, aby komín zase táhl a byl bezpečný.",
    detail: "Bez bourání zdi.",
  },
  {
    id: "vypal",
    marker: "°C",
    title: "Odstranění dehtu vypalováním",
    body: "Zanesený komín od vlhkého dřeva čistíme řízeným vypálením nebo mechanicky. Zabráníme nebezpečnému požáru sazí.",
    detail: "Vždy s dohledem technika.",
  },
];

const proofFacts = [
  { value: "do 24 h", label: "přijedeme na kontrolu i objednávku" },
  { value: "739 649 025", label: "servisní linka, kterou zvedáme" },
  { value: "Praha", label: "a celý okolní kraj bez příplatku za dojezd" },
];

const heroStats: { k: string; v: string }[] = [
  { k: "revizní zpráva", v: "na místě" },
  { k: "komíny · kotle · topení", v: "pod jednou střechou" },
];

export default function Page() {
  return (
    <main className="rt">
      <header className="rt-topbar">
        <a className="rt-brand" href="#uvod" aria-label="Rychlé teplo, domovská stránka">
          <span className="rt-brand__mark" aria-hidden="true">
            <span className="rt-brand__flue" />
          </span>
          <span className="rt-brand__word">
            RYCHLÉ<span className="rt-brand__accent">TEPLO</span>
          </span>
        </a>
        <nav className="rt-nav" aria-label="Hlavní">
          <a href="#sluzby">Kominické práce</a>
          <a href="#o-nas">O firmě</a>
          <a className="rt-nav__call" href="tel:+420739649025">
            Zavolat 739 649 025
          </a>
        </nav>
      </header>

      <section className="rt-hero" id="uvod">
        <div className="rt-hero__media">
          <img
            src="/hero.webp"
            alt="Kominík na střeše pražského domu při čištění komína"
            className="rt-hero__img"
            width={1600}
            height={1100}
          />
          <div className="rt-hero__scrim" aria-hidden="true" />
        </div>

        <div className="rt-hero__inner">
          <p className="rt-eyebrow">Kominictví · Praha · od půdy až nad hřeben</p>
          <h1 className="rt-hero__title">
            Sazí ubude,
            <br />
            <span className="rt-hero__title--big">tah se vrátí.</span>
          </h1>
          <p className="rt-hero__lead">
            Vyčistíme komín, změříme spalinovou cestu a odjíždíme s podepsanou
            revizní zprávou. Aby vám v zimě topilo bezpečně a papíry seděly.
          </p>
          <div className="rt-hero__cta">
            <a className="rt-btn rt-btn--solid" href="tel:+420739649025">
              Objednat čištění komína
            </a>
            <a className="rt-btn rt-btn--ghost" href="#sluzby">
              Co všechno umíme
            </a>
          </div>
          <dl className="rt-hero__stats">
            {heroStats.map((s) => (
              <div key={s.k} className="rt-hero__stat">
                <dt>{s.k}</dt>
                <dd>{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="rt-section rt-services" id="sluzby">
        <div className="rt-section__head">
          <p className="rt-eyebrow rt-eyebrow--dark">Kominické práce na klíč</p>
          <h2 className="rt-section__title">
            Od kontroly po vložkování — jeden tým, jedna faktura.
          </h2>
          <p className="rt-section__intro">
            Nejsme jen na komíny: servisujeme plynové, elektrické i kotle na tuhá
            paliva, montujeme tepelná čerpadla a děláme topenářské, instalatérské
            a plynařské práce. Komín ale bereme jako řemeslo samo o sobě.
          </p>
        </div>

        <ol className="rt-cards">
          {services.map((s) => (
            <li key={s.id} className="rt-card">
              <span className="rt-card__marker" aria-hidden="true">
                {s.marker}
              </span>
              <h3 className="rt-card__title">{s.title}</h3>
              <p className="rt-card__body">{s.body}</p>
              <p className="rt-card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>

        <figure className="rt-services__figure">
          <img
            src="/section-1.webp"
            alt="Nerezová komínová vložka připravená k montáži"
            width={1400}
            height={900}
          />
          <figcaption>
            Vložku vybíráme podle paliva i průměru průduchu — nerez pro tuhá
            paliva, plast pro kondenzační kotle.
          </figcaption>
        </figure>
      </section>

      <section className="rt-section rt-about" id="o-nas">
        <div className="rt-about__grid">
          <div className="rt-about__text">
            <p className="rt-eyebrow rt-eyebrow--dark">O firmě RYCHLÉ TEPLO</p>
            <h2 className="rt-section__title">
              „Rychlé teplo pro vás a vaše nejbližší.“
            </h2>
            <p className="rt-about__lead">
              Jsme pražská parta řemeslníků, která k topení přistupuje celostně —
              komín, kotel i rozvody spolu souvisí. Když přijedeme čistit komín,
              rovnou vidíme, jestli kotel netáhne špatně nebo neuniká plyn.
            </p>
            <ul className="rt-about__list">
              <li>Revizní zprávy platné pro pojišťovnu i pravidelnou kontrolu.</li>
              <li>Vložkování a frézování bez zbytečného bourání.</li>
              <li>Revize plynu, montáž radiátorů i podlahového topení.</li>
              <li>Servis kotlů na plyn, elektřinu i tuhá paliva.</li>
            </ul>
            <div className="rt-about__facts">
              {proofFacts.map((f) => (
                <div key={f.label} className="rt-fact">
                  <span className="rt-fact__value">{f.value}</span>
                  <span className="rt-fact__label">{f.label}</span>
                </div>
              ))}
            </div>
          </div>

          <figure className="rt-about__figure">
            <img
              src="/section-2.webp"
              alt="Kominík kontroluje spalinovou cestu a zapisuje revizní zprávu"
              width={1200}
              height={1400}
            />
            <figcaption>
              Servisní linka <a href="tel:+420739649025">739 649 025</a> — voláme
              zpět a domluvíme termín do druhého dne.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
