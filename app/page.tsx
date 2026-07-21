import { AiImage } from "./_ui";

const services = [
  {
    name: "Kadeřnictví",
    desc: "Střih, barva, melír i regenerace vlasů pro dámy i pány. Poradíme s tvarem i odstínem, který vám opravdu sedne.",
  },
  {
    name: "Manikúra",
    desc: "Úprava nehtů, gel lak i japonská manikúra pro pěstěné ruce, na které se budete rády dívat.",
  },
  {
    name: "Pedikúra",
    desc: "Mokrá i přístrojová pedikúra, která uleví nohám i po celém dni na podpatcích.",
  },
  {
    name: "Kosmetika",
    desc: "Čištění, hydratace a ošetření pleti na míru vašemu typu — bez jednoho univerzálního receptu na všechno.",
  },
  {
    name: "Depilace",
    desc: "Šetrné odstranění chloupků teplým voskem i cukrovou pastou.",
  },
  {
    name: "Řasy a obočí",
    desc: "Lifting řas, barvení a úprava obočí do tvaru, který podtrhne pohled.",
  },
  {
    name: "Microblading",
    desc: "Permanentní obočí vlásek po vlásku — přirozený tvar, který vydrží měsíce.",
  },
  {
    name: "PHI-ION",
    desc: "Neinvazivní ošetření víček a řas metodou PHI-ION, bez skalpelu a bez dlouhé rekonvalescence.",
  },
];

function TendrilDivider() {
  return (
    <div className="divider" aria-hidden="true">
      <svg viewBox="0 0 900 70" className="divider__svg" preserveAspectRatio="xMidYMid meet">
        <path
          className="divider__path"
          d="M10 40 C 200 40 320 42 470 38 C 560 35 600 12 604 30 C 608 46 574 50 566 34 C 558 20 588 12 650 24 C 740 42 812 40 890 34"
        />
      </svg>
    </div>
  );
}

export default function Page() {
  return (
    <main id="top">
      <header className="hero">
        <div className="wrap hero__grid">
          <nav className="nav" aria-label="Hlavní">
            <a className="brand" href="#top">
              <span className="brand__small">SALON</span>
              <span className="brand__big">Sarah</span>
            </a>
            <div className="nav__meta">
              <a href="#sluzby">Služby</a>
              <a href="#salon">O salonu</a>
              <span className="nav__hours">Po–Pá 9–19 · So–Ne 9–18</span>
            </div>
          </nav>

          <div className="hero__text">
            <p className="hero__eyebrow">Kadeřnictví &amp; péče o krásu · Vinohrady, Praha 2</p>
            <h1 className="hero__title">
              Střih a barva
              <br />
              <em>s vinohradským klidem.</em>
            </h1>
            <p className="hero__sub">
              Salon Sarah je kadeřnictví a kompletní péče o krásu kousek od
              Náměstí Míru. Objednejte se online — rychle, kdykoli a bez
              zdlouhavého telefonování.
            </p>
            <div className="hero__tags">
              <span>Střih</span>
              <span>Barvení</span>
              <span>Manikúra</span>
              <span>Microblading</span>
            </div>
          </div>

          <div className="hero__media">
            <AiImage
              src="/hero.webp"
              alt="Kadeřnice dokončuje střih klientce v salonu Sarah"
              className="hero__img"
            />
            <svg
              className="tendril"
              viewBox="0 0 400 320"
              aria-hidden="true"
              preserveAspectRatio="xMaxYMin meet"
            >
              <path
                className="tendril__path"
                pathLength={1}
                d="M392 8 C 320 30 262 70 220 108 C 178 146 150 190 112 206 C 74 222 40 206 42 168 C 44 136 78 120 100 138 C 120 154 112 186 86 190"
              />
            </svg>
          </div>
        </div>
      </header>

      <TendrilDivider />

      <section className="section" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="wrap">
          <div className="lead">
            <div className="lead__text">
              <p className="eyebrow">Nabídka</p>
              <h2 id="sluzby-nadpis" className="section__title">
                Celá vaše krása pod jednou střechou.
              </h2>
              <p className="section__intro">
                Nemusíte objíždět půl Prahy. Od mytí a střihu přes barvu a
                melír až po nehty, pleť a permanentní obočí — všechno vyřídíte
                u nás na Mánesově během jedné návštěvy.
              </p>
            </div>
            <div className="lead__media">
              <AiImage
                src="/section-1.webp"
                alt="Detail práce kadeřnice se štětcem a barvou na vlasy"
                className="lead__img"
              />
            </div>
          </div>

          <ul className="tiles" role="list">
            {services.map((s) => (
              <li key={s.name} className="tile" tabIndex={0}>
                <h3 className="tile__name">{s.name}</h3>
                <p className="tile__desc">{s.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TendrilDivider />

      <section className="section section--salon" id="salon" aria-labelledby="salon-nadpis">
        <div className="wrap salon">
          <div className="salon__media">
            <AiImage
              src="/section-2.webp"
              alt="Interiér salonu Sarah s křesly a zrcadly"
              className="salon__img"
            />
          </div>

          <div className="salon__body">
            <p className="eyebrow">O salonu</p>
            <h2 id="salon-nadpis" className="section__title">
              Kadeřnictví, kam se lidé z Vinohrad vracejí.
            </h2>
            <p className="section__intro">
              Vinohrady kdysi bývaly královské vinice — a jméno nesou dodnes.
              My v tom duchu pečujeme o každou návštěvu: v klidu, bez spěchu a
              s tím, aby výsledek držel tvar dávno po tom, co odejdete od
              zrcadla.
            </p>

            <dl className="facts">
              <div className="facts__row">
                <dt>Otevřeno</dt>
                <dd>
                  Po–Pá 9:00–19:00
                  <br />
                  So–Ne 9:00–18:00
                </dd>
              </div>
              <div className="facts__row">
                <dt>Kde nás najdete</dt>
                <dd>Praha 2 — Vinohrady</dd>
              </div>
              <div className="facts__row">
                <dt>Recepce</dt>
                <dd>
                  <a href="tel:+420777111222">777 111 222</a>
                </dd>
              </div>
              <div className="facts__row">
                <dt>Dárek</dt>
                <dd>
                  <a href="#rezervace">Koupit dárkový poukaz</a>
                </dd>
              </div>
            </dl>

            <div className="quotes">
              <blockquote className="quote">
                <p>
                  „Konečně kadeřnictví, kde poradí s barvou a nechají mě přijít,
                  jak potřebuju. Chodím sem roky.“
                </p>
                <cite>Tereza K., Vinohrady</cite>
              </blockquote>
              <blockquote className="quote">
                <p>
                  „Objednání online zabere minutu a mám to kousek. Střih vždycky
                  sedí.“
                </p>
                <cite>Martin P., Praha 2</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <a className="book" id="rezervace" href="tel:+420777111222">
        <span className="book__label">Rezervovat termín</span>
        <span className="book__sub">online · kdykoli</span>
      </a>
    </main>
  );
}
