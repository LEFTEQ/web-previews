export const metadata = {
  title: "ZVÁNOVEC a.s. — stavební společnost, České Budějovice",
  description:
    "Stavební firma Zvánovec a.s. z Českých Budějovic. Vodohospodářské, ekologické, občanské a průmyslové stavby od roku 1992. Čistírny odpadních vod, rekonstrukce, inženýrské sítě.",
  openGraph: {
    title: "ZVÁNOVEC a.s. — stavíme na vodě, betonu a třiceti letech praxe",
    description:
      "Vodohospodářské, ekologické, občanské a průmyslové stavby v jižních Čechách. České Budějovice, od roku 1992.",
    locale: "cs_CZ",
    type: "website",
  },
};

const obory = [
  {
    kod: "VH",
    nazev: "Vodohospodářské a zemědělské stavby",
    popis:
      "Úpravny vody, vodojemy, kanalizační sběrače, rybníky a protipovodňová opatření. Voda je obor, ze kterého firma vzešla — stavíme ji od roku 1992.",
    detail: "úpravny vody · vodojemy · kanalizace · rybníky",
  },
  {
    kod: "EK",
    nazev: "Ekologické stavby a čistírny odpadních vod",
    popis:
      "Výstavba a intenzifikace ČOV pro obce i průmysl. V projektu TAČR vyvíjíme technologii, která mění sedimenty z nádrží na druhotnou surovinu.",
    detail: "ČOV · intenzifikace · sanace · sedimenty",
  },
  {
    kod: "OB",
    nazev: "Občanské stavby a rekonstrukce",
    popis:
      "Školy, sportoviště, obecní úřady a bytové domy. Rekonstrukce vedeme za provozu tak, aby budova sloužila lidem i během stavby.",
    popisKratky: "Školy, sportoviště, obecní budovy.",
    detail: "novostavby · rekonstrukce · zateplení",
  },
  {
    kod: "PR",
    nazev: "Průmyslové a inženýrské stavby",
    popis:
      "Haly, zemědělské provozy, komunikace a zpevněné plochy. Vlastní technika a party zvyklé na těžké zakládání a betonáže velkých objemů.",
    detail: "haly · komunikace · zakládání · betonáže",
  },
];

const cisla = [
  { hodnota: "1992", popisek: "založeno vyčleněním ze Zemědělských staveb Č. Budějovice" },
  { hodnota: "120+", popisek: "vlastních lidí — stavbyvedoucí, mistři, řemeslníci" },
  { hodnota: "3×", popisek: "certifikace ISO 9001, 14001 a 45001" },
  { hodnota: "2025", popisek: "běžící výzkumný projekt TAČR Prostředí pro život" },
];

export default function Page() {
  return (
    <main className="zv">
      {/* ====== HLAVIČKA ====== */}
      <header className="zv-top">
        <a href="#" className="zv-mark" aria-label="Zvánovec a.s. — úvod">
          <span className="zv-mark-z" aria-hidden="true">Z</span>
          <span className="zv-mark-text">
            ZVÁNOVEC<span className="zv-mark-as">a.s.</span>
          </span>
        </a>
        <nav className="zv-nav" aria-label="Hlavní navigace">
          <a href="#obory">Co stavíme</a>
          <a href="#firma">Firma</a>
          <a href="tel:+420387221549" className="zv-nav-tel">
            387 221 549
          </a>
        </nav>
      </header>

      {/* ====== HERO ====== */}
      <section className="zv-hero" aria-label="Zvánovec a.s. — stavební společnost">
        <div className="zv-hero-grid" aria-hidden="true">
          {/* vodní hladina — signature prvek: hladina ve vodojemu */}
          <div className="zv-water">
            <svg
              className="zv-water-svg"
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
              focusable="false"
              aria-hidden="true"
            >
              <path
                className="zv-water-path"
                d="M0,60 C180,20 360,100 540,60 C720,20 900,100 1080,60 C1260,20 1380,80 1440,60 L1440,120 L0,120 Z"
              />
            </svg>
          </div>
        </div>

        <div className="zv-hero-inner">
          <p className="zv-eyebrow zv-load-1">
            Stavební společnost · České Budějovice · od 14.&nbsp;10.&nbsp;1992
          </p>
          <h1 className="zv-h1">
            <span className="zv-h1-line zv-load-2">Stavíme tam,</span>
            <span className="zv-h1-line zv-load-3">
              kde teče <em className="zv-h1-voda">voda</em>
            </span>
            <span className="zv-h1-line zv-h1-small zv-load-4">
              — a všude, kde drží beton.
            </span>
          </h1>
          <p className="zv-hero-perex zv-load-5">
            Čistírny odpadních vod, vodojemy, školy i průmyslové haly po celých
            jižních Čechách. Vlastní lidé, vlastní technika, přes třicet let
            jedno jméno.
          </p>
          <div className="zv-hero-actions zv-load-6">
            <a className="zv-btn" href="#obory">
              Co stavíme
            </a>
            <a className="zv-btn zv-btn-ghost" href="tel:+420387221549">
              Zavolat: 387 221 549
            </a>
          </div>
        </div>

        {/* vodočet — svislá měrná lať jako u přehrad a ČOV */}
        <div className="zv-gauge" aria-hidden="true">
          <span className="zv-gauge-num">4</span>
          <span className="zv-gauge-tick"></span>
          <span className="zv-gauge-num">3</span>
          <span className="zv-gauge-tick"></span>
          <span className="zv-gauge-num">2</span>
          <span className="zv-gauge-tick"></span>
          <span className="zv-gauge-num">1</span>
        </div>
      </section>

      {/* ====== OBORY ====== */}
      <section className="zv-obory" id="obory" aria-labelledby="obory-h">
        <div className="zv-section-head">
          <p className="zv-eyebrow">Čtyři obory, jeden dodavatel</p>
          <h2 className="zv-h2" id="obory-h">
            Od vodojemu po tělocvičnu
          </h2>
          <p className="zv-section-perex">
            Nejsme specialisté na jedno razítko. Obec u nás poptá čistírnu,
            rekonstrukci školy i novou komunikaci — a jedná pořád se stejnými
            lidmi.
          </p>
        </div>

        <ul className="zv-obory-list">
          {obory.map((o) => (
            <li key={o.kod} className="zv-obor">
              <span className="zv-obor-kod" aria-hidden="true">
                {o.kod}
              </span>
              <div className="zv-obor-body">
                <h3 className="zv-h3">{o.nazev}</h3>
                <p>{o.popis}</p>
                <p className="zv-obor-detail">{o.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ====== FIRMA / DŮVĚRA ====== */}
      <section className="zv-firma" id="firma" aria-labelledby="firma-h">
        <div className="zv-firma-inner">
          <div className="zv-firma-text">
            <p className="zv-eyebrow zv-eyebrow-light">Kdo za tím stojí</p>
            <h2 className="zv-h2" id="firma-h">
              Firma nese jméno svého zakladatele. To zavazuje.
            </h2>
            <p>
              Jaroslav Zvánovec založil firmu v říjnu 1992 a vzal si s sebou ty
              nejlepší lidi ze Zemědělských staveb České Budějovice. Od roku
              2000 jsme akciová společnost — ale pořád platí, že stavbyvedoucí,
              mistři a řemeslníci jsou naši vlastní zaměstnanci, ne najaté
              party.
            </p>
            <p>
              Kvalitu nedokládáme slovy: držíme certifikace ISO pro kvalitu,
              životní prostředí i bezpečnost práce a s Technologickou agenturou
              ČR vyvíjíme způsob, jak proměnit bahno z rybníků a nádrží na
              využitelnou surovinu.
            </p>
            <ul className="zv-iso" aria-label="Certifikace">
              <li>
                <strong>ISO 9001:2015</strong>
                <span>kvalita staveb</span>
              </li>
              <li>
                <strong>ISO 14001:2015</strong>
                <span>životní prostředí</span>
              </li>
              <li>
                <strong>ISO 45001:2018</strong>
                <span>bezpečnost práce</span>
              </li>
            </ul>
          </div>

          <dl className="zv-cisla">
            {cisla.map((c) => (
              <div key={c.hodnota} className="zv-cislo">
                <dt className="zv-cislo-popisek">{c.popisek}</dt>
                <dd className="zv-cislo-hodnota">{c.hodnota}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
