import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "K.T.O. International — velkoobchod pro topení, vodu a plyn | Hradec Králové",
  description:
    "Specializovaný velkoobchod pro topenáře a instalatéry. Nerezové lisovací systémy, rozvody pitné vody, chlazení a klimatizace, čerpadla Wilo, technika Siemens. Skladem v Třebechovicích pod Orebem u Hradce Králové, na trhu od roku 1992.",
};

const sortiment = [
  {
    tlak: "6 bar",
    nazev: "Nerezové lisovací systémy",
    popis:
      "SANHA NiroTherm a hygienické rozvody pitné vody z nerezu. Slisujete a jdete dál — bez pájení, bez otevřeného ohně na stavbě.",
    znacky: "SANHA · Viega",
  },
  {
    tlak: "10 bar",
    nazev: "Čerpadla a čerpací technika",
    popis:
      "Oběhová a tlaková čerpadla Wilo pro topné okruhy i zásobování vodou. Akce Wilo 2026 skladem, výměna kus za kus.",
    znacky: "Wilo · Grundfos",
  },
  {
    tlak: "—",
    nazev: "Chlazení a klimatizace",
    popis:
      "Nový sortiment příslušenství pro chlazení a klima — měděné trubky, izolace, kondenzátní hospodářství. Doplníme celou sestavu.",
    znacky: "RONAL · KTO",
  },
  {
    tlak: "230 V",
    nazev: "Regulace a měření Siemens",
    popis:
      "Přehled vybraného sortimentu Siemens — ekvitermní regulace, ventily a pohony pro kotelny a výměníkové stanice.",
    znacky: "Siemens",
  },
];

const duvera = [
  { cislo: "1992", popis: "Rok založení firmy — přes tři desítky topných sezón zkušeností." },
  { cislo: "30+", popis: "Let na trhu specializovaných velkoobchodů v ČR i na Slovensku." },
  { cislo: "2", popis: "Republiky, kam denně expedujeme materiál řemeslníkům na stavby." },
];

export default function Page() {
  return (
    <main className="kto">
      <header className="kto-top">
        <a className="kto-mark" href="#" aria-label="K.T.O. International, úvodní strana">
          <span className="kto-mark__abbr">K·T·O</span>
          <span className="kto-mark__full">International</span>
        </a>
        <nav className="kto-nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#firma">Naše firma</a>
          <a className="kto-nav__cta" href="tel:+420495592415">495&nbsp;592&nbsp;415</a>
        </nav>
      </header>

      <section className="kto-hero" aria-labelledby="hero-nadpis">
        <div className="kto-hero__media">
          <img
            src="/hero.webp"
            alt="Slisovaný nerezový spoj potrubí z lisovacího systému skladem u K.T.O. International"
            width={1600}
            height={1100}
          />
        </div>
        <div className="kto-hero__panel">
          <p className="kto-eyebrow">Velkoobchod pro topení, vodu a plyn · Hradec Králové</p>
          <h1 id="hero-nadpis">
            Materiál na stavbu<br />
            <span className="kto-hero__accent">máme skladem,</span><br />
            když ho potřebujete.
          </h1>
          <p className="kto-hero__lead">
            Nerezové lisovací systémy, rozvody pitné vody, čerpadla i regulace pod
            jednou střechou v Třebechovicích pod Orebem. Topenáři a instalatéři u nás
            nakupují od roku 1992.
          </p>
          <div className="kto-hero__akce">
            <a className="kto-btn" href="#sortiment">Prohlédnout sortiment</a>
            <a className="kto-btn kto-btn--ghost" href="mailto:trebechovice@kto.cz">
              Poptat materiál
            </a>
          </div>
          <dl className="kto-hero__specs">
            <div>
              <dt>Výdej</dt>
              <dd>Po–Pá 7:00</dd>
            </div>
            <div>
              <dt>Sklad</dt>
              <dd>Orlická 245</dd>
            </div>
            <div>
              <dt>Dosah</dt>
              <dd>ČR i SK</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kto-section" id="sortiment" aria-labelledby="sortiment-nadpis">
        <div className="kto-section__head">
          <p className="kto-eyebrow">Sortiment</p>
          <h2 id="sortiment-nadpis">Vše pro topení, vodu a chlazení z&nbsp;jednoho skladu</h2>
          <p className="kto-section__intro">
            Neskládáte dodávku od pěti dodavatelů. U nás naložíte trubky, tvarovky,
            čerpadla i regulaci naráz — a jedete montovat.
          </p>
        </div>
        <ul className="kto-grid">
          {sortiment.map((s) => (
            <li className="kto-card" key={s.nazev}>
              <span className="kto-card__gauge" aria-hidden="true">
                {s.tlak}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="kto-card__znacky">{s.znacky}</p>
            </li>
          ))}
        </ul>
        <figure className="kto-figure">
          <img
            src="/section-1.webp"
            alt="Regály velkoobchodního skladu K.T.O. International s trubkami, tvarovkami a instalačním materiálem"
            width={1400}
            height={900}
          />
          <figcaption>Sklad v Třebechovicích pod Orebem — naskladněno na výdej hned ráno.</figcaption>
        </figure>
      </section>

      <section className="kto-firma" id="firma" aria-labelledby="firma-nadpis">
        <div className="kto-firma__media">
          <img
            src="/section-2.webp"
            alt="Zázemí a expedice velkoobchodu K.T.O. International u Hradce Králové"
            width={1200}
            height={1400}
          />
        </div>
        <div className="kto-firma__text">
          <p className="kto-eyebrow">Naše firma</p>
          <h2 id="firma-nadpis">Řemeslníci se k nám vracejí, protože se dá spolehnout</h2>
          <p>
            K.T.O. International působí na trhu specializovaných velkoobchodů více než
            třicet let — firmu jsme založili v roce 1992. Za tu dobu jsme vybavili
            nespočet kotelen, výměníkových stanic i rodinných domů od Hradce Králové
            po celou Českou a Slovenskou republiku.
          </p>
          <dl className="kto-stats">
            {duvera.map((d) => (
              <div key={d.cislo}>
                <dt>{d.cislo}</dt>
                <dd>{d.popis}</dd>
              </div>
            ))}
          </dl>
          <address className="kto-adresa">
            <strong>K.T.O. International spol. s r.o.</strong>
            <span>Orlická 245, Třebechovice pod Orebem, 503 46</span>
            <span>
              <a href="tel:+420495592415">+420 495 592 415</a> ·{" "}
              <a href="mailto:trebechovice@kto.cz">trebechovice@kto.cz</a>
            </span>
          </address>
        </div>
      </section>
    </main>
  );
}
