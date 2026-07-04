import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Radovan Chromý — kamerové systémy Brno",
  description:
    "Instalace kamerových systémů na míru v Brně a okolí. Poradíme, kam mají kamery mířit, a napojíme je na pult centralizované ochrany. Přes 25 let zkušeností.",
  openGraph: {
    title: "Radovan Chromý — kamerové systémy Brno",
    description:
      "Kamery, které opravdu vidí, co potřebujete. Instalace na míru v Brně a okolí, napojení na PCO, servis až 7 let.",
    type: "website",
    locale: "cs_CZ",
  },
};

const zabery = [
  {
    kod: "CAM 01",
    misto: "Vjezd a brána",
    popis:
      "Kamera se čtením SPZ u vjezdu. Poznáte, kdo přijel, i za tmy — přisvícení infračerveným světlem do 30 metrů.",
  },
  {
    kod: "CAM 02",
    misto: "Vchod a zvonek",
    popis:
      "Domovní kamera u dveří s obousměrným zvukem. Otevřete z mobilu, i když jste v práci nebo na chatě.",
  },
  {
    kod: "CAM 03",
    misto: "Dvůr a garáž",
    popis:
      "Přehledová kamera nad celý dvůr. Detekce pohybu vám pošle upozornění jen tehdy, když se skutečně něco děje.",
  },
  {
    kod: "CAM 04",
    misto: "Sklad a provozovna",
    popis:
      "Záznam z více kamer na jeden síťový rekordér s napojením na pult centralizované ochrany — hlídač, který nikdy neusne.",
  },
];

const kroky = [
  {
    n: "01",
    nadpis: "Přijedu se podívat",
    text: "Obejdeme dům nebo firmu spolu a najdeme slepá místa. Řeknu vám na rovinu, kolik kamer stačí a kam nemá cenu je dávat.",
  },
  {
    n: "02",
    nadpis: "Namontuji a natáhnu kabely",
    text: "Vrtám, tahám kabely, nastavuji rekordér. Po sobě uklidím. Uvidíte živý obraz na mobilu ještě týž den.",
  },
  {
    n: "03",
    nadpis: "Napojím a předám",
    text: "Systém napojím na pult centralizované ochrany a ukážu vám, jak vše ovládat. Servis a údržba pak až sedm let.",
  },
];

const cisla = [
  { hodnota: "25+", label: "let za kabelem a vrtačkou" },
  { hodnota: "500+", label: "instalací v Brně a okolí" },
  { hodnota: "7", label: "let servisní podpory" },
];

export default function Page() {
  return (
    <main className="rc">
      <header className="rc-topbar">
        <a className="rc-wordmark" href="#" aria-label="Radovan Chromý, kamerové systémy">
          <span className="rc-wordmark__eye" aria-hidden="true">
            <span className="rc-wordmark__iris" />
          </span>
          <span className="rc-wordmark__text">
            <span className="rc-wordmark__name">CHROMÝ</span>
            <span className="rc-wordmark__sub">kamerové systémy · Brno</span>
          </span>
        </a>
        <a className="rc-topbar__tel" href="tel:+420602717528">
          602 717 528
        </a>
      </header>

      <section className="rc-hero" aria-labelledby="rc-hero-title">
        <div className="rc-hero__grid" aria-hidden="true">
          <span className="rc-recdot" />
          <span className="rc-rectext">REC · CAM 01</span>
          <span className="rc-timecode">21:47:03</span>
          <span className="rc-crosshair rc-crosshair--tl" />
          <span className="rc-crosshair rc-crosshair--tr" />
          <span className="rc-crosshair rc-crosshair--bl" />
          <span className="rc-crosshair rc-crosshair--br" />
          <span className="rc-scan" />
          <span className="rc-frame" />
        </div>

        <div className="rc-hero__inner">
          <p className="rc-hero__eyebrow">Zlatý montážní partner · zabezpečovací technika</p>
          <h1 id="rc-hero-title" className="rc-hero__title">
            Vidím to,
            <br />
            co <span className="rc-hero__hl">vám</span> uteče.
          </h1>
          <p className="rc-hero__lead">
            Kamerové systémy pro domy, byty a firmy v Brně a okolí. Namontuji je
            tak, aby mířily přesně tam, kde na tom záleží — a napojím je na pult
            centralizované ochrany.
          </p>
          <div className="rc-hero__actions">
            <a className="rc-btn rc-btn--primary" href="tel:+420602717528">
              Zavolat Radovanovi
            </a>
            <a className="rc-btn rc-btn--ghost" href="#zabery">
              Kam kamery mířit
            </a>
          </div>
        </div>
      </section>

      <section className="rc-shots" id="zabery" aria-labelledby="rc-shots-title">
        <div className="rc-section-head">
          <p className="rc-eyebrow">Co hlídám</p>
          <h2 id="rc-shots-title" className="rc-section-title">
            Každý dům má svá slepá místa. Najdu je.
          </h2>
          <p className="rc-section-lead">
            Nemontuji kamery od oka. Projdu s vámi objekt a rozhodneme, které
            záběry dávají smysl — a které jen svítí červenou diodou pro nic za nic.
          </p>
        </div>

        <ul className="rc-cams">
          {zabery.map((z) => (
            <li className="rc-cam" key={z.kod}>
              <div className="rc-cam__viewport" aria-hidden="true">
                <span className="rc-cam__kod">{z.kod}</span>
                <span className="rc-cam__live">● LIVE</span>
                <span className="rc-cam__reticle rc-crosshair--tl" />
                <span className="rc-cam__reticle rc-crosshair--br" />
              </div>
              <h3 className="rc-cam__misto">{z.misto}</h3>
              <p className="rc-cam__popis">{z.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="rc-trust" aria-labelledby="rc-trust-title">
        <div className="rc-trust__head">
          <p className="rc-eyebrow rc-eyebrow--light">Kdo vám to montuje</p>
          <h2 id="rc-trust-title" className="rc-trust__title">
            Radovan Chromý. Přijede jeden člověk, kterého si zapamatujete.
          </h2>
          <p className="rc-trust__lead">
            Žádné call centrum a žádné cizí party montérů. Systém navrhnu,
            namontuji a servisuji já — a když za dva roky přidáte kameru do garáže,
            volat budete zase mně.
          </p>
        </div>

        <ol className="rc-steps">
          {kroky.map((k) => (
            <li className="rc-step" key={k.n}>
              <span className="rc-step__n">{k.n}</span>
              <h3 className="rc-step__nadpis">{k.nadpis}</h3>
              <p className="rc-step__text">{k.text}</p>
            </li>
          ))}
        </ol>

        <dl className="rc-stats">
          {cisla.map((c) => (
            <div className="rc-stat" key={c.label}>
              <dt className="rc-stat__value">{c.hodnota}</dt>
              <dd className="rc-stat__label">{c.label}</dd>
            </div>
          ))}
        </dl>

        <p className="rc-trust__note">
          Certifikovaný montážní partner · Klecandova 10, Brno ·{" "}
          <a href="mailto:radovan@brno-alarm.cz">radovan@brno-alarm.cz</a>
        </p>
      </section>
    </main>
  );
}
