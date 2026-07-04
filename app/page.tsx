import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Servis Fišer — autoservis, STK, pneuservis a čerpací stanice | České Budějovice",
  description:
    "Autodoprava a kompletní servis vozidel v Českých Budějovicích. Autoservis, příprava a přistavení na STK, pneuservis a vlastní čerpací stanice. Jedno místo, kde se o auto postaráme.",
  openGraph: {
    title: "Servis Fišer — vše pro vaše auto na jednom místě",
    description:
      "Autoservis, STK, pneuservis a čerpací stanice v Českých Budějovicích. Objednejte se telefonicky.",
    images: ["/hero.webp"],
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "01",
    nazev: "Autoservis",
    popis:
      "Mechanika, diagnostika, brzdy, výfuky i příprava před dovolenou. Řekneme rovnou, co je nutné teď a co počká.",
    detail: "Osobní i užitkové vozy",
  },
  {
    kod: "02",
    nazev: "STK",
    popis:
      "Auto na technickou připravíme a přistavíme za vás. Vy nemusíte nikam — vozidlo vrátíme s platnou známkou.",
    detail: "Příprava i přistavení",
  },
  {
    kod: "03",
    nazev: "Pneuservis",
    popis:
      "Přezutí, vyvážení, oprava defektu i uskladnění gum přes sezónu. V přezouvací špičce jedeme dlouho.",
    detail: "Sezónní i mimo termín",
  },
  {
    kod: "04",
    nazev: "Čerpací stanice",
    popis:
      "Vlastní pumpa přímo v areálu. Natankujete a rovnou vyřídíte servis — bez zajíždění jinam.",
    detail: "Nafta i benzin",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Servis Fišer, úvodní strana">
          <span className="wordmark__servis">SERVIS</span>
          <span className="wordmark__fiser">FIŠER</span>
          <span className="wordmark__place">České Budějovice</span>
        </a>
        <a className="topbar__call" href="tel:+420387000000">
          <span className="topbar__calllabel">Objednat</span>
          <span className="topbar__callnum">387 000 000</span>
        </a>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Areál Servisu Fišer v Českých Budějovicích — dílna autoservisu s čerpací stanicí"
            className="hero__img"
            width={1600}
            height={1000}
          />
        </div>

        <div className="hero__panel">
          <p className="hero__eyebrow">Autoservis · STK · Pneuservis · Pumpa</p>
          <h1 className="hero__title">
            Auto necháte tady,
            <br />
            <em>o zbytek se postaráme.</em>
          </h1>
          <p className="hero__lead">
            Čtyři věci pod jednou střechou v Českých Budějovicích. Servis, technická, přezutí
            i tankování — bez pobíhání po městě z místa na místo.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420387000000">
              Zavolat a objednat
            </a>
            <a className="btn btn--ghost" href="mailto:servis@fiser-cb.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="hero__strip" aria-hidden="true">
          <span>ČESKÉ BUDĚJOVICE</span>
          <span className="dot" />
          <span>OTEVŘENO PO–PÁ 7–17</span>
          <span className="dot" />
          <span>SO 8–12</span>
          <span className="dot" />
          <span>PUMPA V AREÁLU</span>
        </div>
      </section>

      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="section-head">
          <p className="section-head__kicker">Co u nás vyřídíte</p>
          <h2 id="sluzby-nadpis" className="section-head__title">
            Jeden areál, čtyři stání.
          </h2>
          <p className="section-head__note">
            Přijedete jednou a odjedete se vším hotovým. Číslujeme podle toho, jak si zákazníci
            práce nejčastěji objednávají za sebou.
          </p>
        </div>

        <ol className="bays">
          {sluzby.map((s) => (
            <li className="bay" key={s.kod}>
              <div className="bay__num" aria-hidden="true">
                {s.kod}
              </div>
              <div className="bay__body">
                <h3 className="bay__name">{s.nazev}</h3>
                <p className="bay__desc">{s.popis}</p>
                <p className="bay__detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="onas" aria-labelledby="onas-nadpis">
        <div className="onas__media">
          <img
            src="/section-1.webp"
            alt="Mechanik Servisu Fišer při práci na voze v dílně"
            className="onas__img"
            width={1400}
            height={1000}
          />
        </div>
        <div className="onas__text">
          <p className="section-head__kicker">Kdo vám auto opravuje</p>
          <h2 id="onas-nadpis" className="section-head__title">
            Rodinný servis, kde vás znají jménem.
          </h2>
          <p className="onas__p">
            Fišerovi točí klíčem v Budějovicích už řadu let. Nejsme řetězec — auto vám
            převezme ten, kdo ho pak i opraví, a před fakturou vysvětlí, co a proč se dělalo.
          </p>
          <ul className="pledge">
            <li>
              <span className="pledge__mark">→</span> Cenu řekneme dopředu, ne až u pokladny.
            </li>
            <li>
              <span className="pledge__mark">→</span> STK vyřídíme za vás — auto vyzvedneme i vrátíme.
            </li>
            <li>
              <span className="pledge__mark">→</span> Když to počká, řekneme to. Zbytečně vás nedoženeme.
            </li>
          </ul>
          <dl className="contact">
            <div>
              <dt>Zavolejte</dt>
              <dd>
                <a href="tel:+420387000000">387 000 000</a>
              </dd>
            </div>
            <div>
              <dt>Napište</dt>
              <dd>
                <a href="mailto:servis@fiser-cb.cz">servis@fiser-cb.cz</a>
              </dd>
            </div>
            <div>
              <dt>Zajeďte</dt>
              <dd>České Budějovice</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
