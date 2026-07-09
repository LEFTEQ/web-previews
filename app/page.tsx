import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__text">
            <div className="wordmark" aria-label="ELREV — revize elektro">
              <span className="wordmark__el">EL</span>
              <span className="wordmark__rev">REV</span>
              <span className="wordmark__dot" aria-hidden="true" />
            </div>

            <p className="hero__eyebrow">Revize elektro · Ústí nad Labem · nonstop</p>

            <h1 className="hero__title">
              Revizní zpráva,<br />
              která projde <span className="hl">na první</span> pohled.
            </h1>

            <p className="hero__lead">
              Výchozí i pravidelné revize elektroinstalací, hromosvodů,
              rozváděčů a spotřebičů. Měříme podle norem, píšeme srozumitelně
              a závady vám vysvětlíme dřív, než je podepíšete.
            </p>

            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420725877864">
                Zavolat reviznímu technikovi
              </a>
              <a className="btn btn--ghost" href="#sluzby">
                Co revidujeme
              </a>
            </div>

            <dl className="hero__meta">
              <div className="hero__meta-item">
                <dt>Praxe v oboru</dt>
                <dd>30+ let</dd>
              </div>
              <div className="hero__meta-item">
                <dt>Havárie</dt>
                <dd>24 / 7</dd>
              </div>
              <div className="hero__meta-item">
                <dt>Napětí</dt>
                <dd>NN · VN bez omezení</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Revizní technik ELREV při měření elektroinstalace v rozváděči"
              className="hero__img"
              width={1200}
              height={1500}
            />
            <figcaption className="hero__tag">
              <span className="hero__tag-led" aria-hidden="true" />
              Měření pod napětím — Špitálské náměstí, Ústí n. L.
            </figcaption>
          </figure>
        </div>

        {/* běžící lišta předmětů revize — vernacular oboru */}
        <div className="ticker" aria-hidden="true">
          <div className="ticker__track">
            {TICKER.concat(TICKER).map((t, i) => (
              <span className="ticker__item" key={i}>
                <span className="ticker__ohm">Ω</span> {t}
              </span>
            ))}
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="services" id="sluzby">
        <div className="section-head">
          <p className="section-head__kicker">Rozsah revizí</p>
          <h2 className="section-head__title">
            Šest okruhů, které u nás projdou měřením
          </h2>
          <p className="section-head__note">
            Od bytového domu po rozvodnu vysokého napětí. Ke každé revizi
            dostanete zprávu s termínem příští kontroly a jasným seznamem, co opravit.
          </p>
        </div>

        <ol className="cards">
          {SERVICES.map((s, i) => (
            <li className="card" key={s.title} style={{ "--i": i } as CSSProperties}>
              <span className="card__num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__desc">{s.desc}</p>
              <ul className="card__list">
                {s.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* ============ O NÁS / DŮVĚRA ============ */}
      <section className="about" id="o-nas">
        <div className="about__grid">
          <figure className="about__figure">
            <img
              src="/section-1.webp"
              alt="Vybavení a měřicí přístroje techniků ELREV pro práci na elektrických zařízeních"
              className="about__img"
              width={1000}
              height={1200}
            />
          </figure>

          <div className="about__body">
            <p className="section-head__kicker">O firmě ELREV</p>
            <h2 className="about__title">
              Silnoproud i slaboproud řešíme jedním týmem
            </h2>
            <p className="about__text">
              Jsme elektrotechnická firma z Ústí nad Labem. Bytovým domům,
              podnikatelům i výrobním provozům děláme instalace, rozváděče
              i revize — a když se něco stane, jezdíme na havárie nonstop.
              Používáme moderní měřicí techniku a držíme se platných norem
              a předpisů. Návrhy zákazníka i jeho dodavatele respektujeme.
            </p>

            <ul className="promise">
              <li>
                <strong>Zpráva, které rozumíte.</strong> Závady seřadíme podle
                naléhavosti, ne podle abecedy paragrafů.
              </li>
              <li>
                <strong>Termín příští revize hlídáme za vás.</strong> Ozveme se,
                než propadne platnost.
              </li>
              <li>
                <strong>Havarijní služba 24/7.</strong> Výpadek ve společných
                prostorách domu neřešíte sami ani v noci.
              </li>
            </ul>

            <div className="contact-card">
              <div className="contact-card__row">
                <span className="contact-card__label">Dispečink</span>
                <a href="tel:+420725877864">+420 725 877 864</a>
              </div>
              <div className="contact-card__row">
                <span className="contact-card__label">E-mail</span>
                <a href="mailto:info@elrev-ul.cz">info@elrev-ul.cz</a>
              </div>
              <div className="contact-card__row">
                <span className="contact-card__label">Kde nás najdete</span>
                <span>Špitálské náměstí 3511/8, Ústí nad Labem</span>
              </div>
            </div>
          </div>
        </div>

        <figure className="about__wide">
          <img
            src="/section-2.webp"
            alt="Rozváděč vyrobený firmou ELREV připravený k montáži"
            className="about__wide-img"
            width={1600}
            height={900}
          />
          <figcaption className="about__wide-cap">
            Vlastní výroba rozváděčů — domovní, průmyslové i pro fotovoltaiku.
          </figcaption>
        </figure>
      </section>
    </main>
  );
}

const TICKER = [
  "elektroinstalace",
  "hromosvody",
  "rozváděče",
  "transformátory",
  "kamerové systémy",
  "zabezpečení EZS",
  "požární systémy EPS",
  "přípojky NN",
  "revize spotřebičů",
];

const SERVICES = [
  {
    title: "Revize",
    desc: "Výchozí i pravidelné revize s protokolem a lhůtou pro příští kontrolu.",
    items: [
      "Bytové domy a jejich společné prostory",
      "Průmyslové objekty",
      "Hromosvody",
      "Pravidelné kontroly elektrospotřebičů",
    ],
  },
  {
    title: "Elektroservis bytových domů",
    desc: "Kompletní servis pro SVJ a správce včetně havarijních oprav.",
    items: [
      "Výměna a oprava osvětlení",
      "Výměna rozváděčů a přívodů do bytů",
      "Oprava zvonkových tabel a domácích telefonů",
      "Havarijní služba 24/7",
    ],
  },
  {
    title: "Elektroinstalace",
    desc: "Nové rozvody i rekonstrukce, domovní i průmyslové, s údržbou.",
    items: [
      "Domovní a průmyslové instalace",
      "Přípojky NN",
      "Rekonstrukce elektrických zařízení",
      "Montáž a opravy hromosvodů",
    ],
  },
  {
    title: "Vysoké napětí",
    desc: "Servis, údržba a revize zařízení VN bez omezení napětí.",
    items: [
      "Údržba transformátorů a VN rozvoden",
      "Revize transformátorů",
      "Revize zařízení VN",
      "Havarijní služba 24/7",
    ],
  },
  {
    title: "Výroba rozváděčů",
    desc: "Rozváděče na míru vyrobené a odzkoušené v naší dílně.",
    items: [
      "Domovní rozváděče",
      "Průmyslové rozváděče",
      "Rozváděče pro fotovoltaiku (FVE)",
      "Projektová dokumentace skutečného provedení",
    ],
  },
  {
    title: "Slaboproud a projekty",
    desc: "Zabezpečení, kamery a dokumentace pro stavební povolení i realizaci.",
    items: [
      "Domácí telefony a videotelefony",
      "Zabezpečení (EZS) a kamery (CCTV)",
      "Požární systémy (EPS)",
      "Projektová dokumentace a drobná stavební činnost",
    ],
  },
];
