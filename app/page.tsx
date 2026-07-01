import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A1 klimatizace — chlazení i topení, Brno | Montáž, servis, záruka 5 let",
  description:
    "Brněnská firma A1 klimatizace instaluje a servisuje klimatizace se zárukou 5 let. Multisplit, topení tepelným čerpadlem do −22 °C, předsezónní příprava. AZ Tower, Pražákova 1008.",
  openGraph: {
    title: "A1 klimatizace — chlazení i topení, Brno",
    description:
      "Montáž a servis klimatizací v Brně se zárukou 5 let. Topení tepelným čerpadlem do −22 °C, multisplit, předsezónní příprava.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vnitřní jednotka klimatizace nainstalovaná A1 klimatizace" }],
  },
};

const sluzby = [
  {
    kod: "−22",
    jednotka: "°C",
    nazev: "Topení tepelným čerpadlem",
    text: "Klimatizace neochlazuje jen v létě — topí i v mrazu. Naše jednotky s tepelným čerpadlem hřejí až do −22 °C a stojí míň na provoz i na pořízení než klasické vytápění.",
  },
  {
    kod: "1:5",
    jednotka: "jednotky",
    nazev: "Multisplit pro celý dům",
    text: "Jedna venkovní jednotka obslouží několik místností. Ideální do bytů, kanceláří i větších objektů, kde nechcete mít fasádu posetou krabicemi.",
  },
  {
    kod: "1",
    jednotka: "den",
    nazev: "Instalace na klíč",
    text: "Split i složitý multisplit včetně stavebních úprav, prostupů a lišt. Většinu domácností stihneme za jediný den — a uklidíme po sobě.",
  },
  {
    kod: "5",
    jednotka: "let",
    nazev: "Servis a záruční opravy",
    text: "Pravidelná údržba, čištění, kontrola chladiva i pozáruční opravy. Klimatizace je elektrospotřebič — s péčí vydrží roky bez výpadku.",
  },
  {
    kod: "IV",
    jednotka: "jaro",
    nazev: "Předsezónní příprava",
    text: "Nečekejte na první tropický den. Objednejte kontrolu a servis na jaře, ať v létě jen zapnete dálkový ovladač a je vám dobře.",
  },
];

const recenze = [
  {
    jmeno: "Petr Nejezchleb",
    kdy: "před měsícem",
    text: "Skvělá komunikace, rychlá domluva a termín realizace. Pánové montéři zkušení profíci, ochotní, odvedli velmi kvalitní a precizní práci s důrazem na detail.",
  },
  {
    jmeno: "Aleš Kříž",
    kdy: "před 4 měsíci",
    text: "Zaměření i instalace proběhly dokonale. Pracovníci stihli všechno v jeden den, pečlivě dbali na detaily a navíc nám jako bonus opravili padající garnýž.",
  },
  {
    jmeno: "Jan Holub",
    kdy: "před 5 měsíci",
    text: "Instalovali nám 5 klimatizačních jednotek a musím jen chválit — vše proběhlo rychle, přesně, kvalita práce a ochota nadstandardní. S cenou taky spokojenost.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="A1 klimatizace, domů">
          <span className="wordmark__badge">A1</span>
          <span className="wordmark__name">klimatizace</span>
        </a>
        <a className="topbar__call" href="tel:+420515541981">
          <span className="topbar__callLabel">Zavolejte</span>
          +420 515 541 981
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__scale" aria-hidden="true">
          <span className="hero__scaleTick hero__scaleTick--cold">−22°</span>
          <span className="hero__scaleBar" />
          <span className="hero__scaleTick hero__scaleTick--warm">+43°</span>
        </div>

        <div className="hero__grid">
          <div className="hero__copy">
            <p className="eyebrow">Klimatizace &middot; Brno &middot; od zaměření po servis</p>
            <h1 id="hero-title" className="hero__title">
              Jedna jednotka,
              <br />
              <span className="hero__titleAccent">celý rok pohodlí.</span>
            </h1>
            <p className="hero__lead">
              V zimě topí do −22&nbsp;°C, v létě chladí, celý rok je ticho.
              Namontujeme vám klimatizaci na míru bytu i domu — většinou za jediný
              den — a hlídáme ji dalších pět let.
            </p>
            <div className="hero__actions">
              <a className="btn btn--primary" href="tel:+420515541981">
                Zavolat a domluvit zaměření
              </a>
              <a className="btn btn--ghost" href="mailto:info@a1klimatizace.cz">
                Napsat e-mail
              </a>
            </div>
            <dl className="hero__facts">
              <div>
                <dt>Záruka</dt>
                <dd>5 let + výměna</dd>
              </div>
              <div>
                <dt>Hodnocení</dt>
                <dd>5,0 z 90 recenzí</dd>
              </div>
              <div>
                <dt>Kde nás najdete</dt>
                <dd>AZ Tower, Brno</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__media">
            <img
              src="/hero.webp"
              alt="Nová vnitřní jednotka klimatizace čistě nainstalovaná v místnosti"
              className="hero__img"
              width={900}
              height={1100}
            />
            <figcaption className="hero__caption">
              Čistá montáž bez zbytečných lišt — jak to dělá A1.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section__head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="services-title" className="section__title">
            Od chlazení po topení — v číslech, která rozhodují
          </h2>
        </div>

        <ul className="services__list">
          {sluzby.map((s) => (
            <li key={s.nazev} className="card">
              <p className="card__metric" aria-hidden="true">
                <span className="card__number">{s.kod}</span>
                <span className="card__unit">{s.jednotka}</span>
              </p>
              <h3 className="card__title">{s.nazev}</h3>
              <p className="card__text">{s.text}</p>
            </li>
          ))}
          <li className="card card--image">
            <img
              src="/section-1.webp"
              alt="Technik A1 klimatizace při montáži venkovní jednotky"
              className="card__img"
              width={800}
              height={600}
            />
            <p className="card__imageCaption">Zaměříme, poradíme model, nainstalujeme a uklidíme.</p>
          </li>
        </ul>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="eyebrow">Proč Brňané volají A1</p>
            <h2 id="trust-title" className="section__title">
              90 recenzí, průměr 5,0 — a příjemný hlas v telefonu
            </h2>
            <p className="trust__lead">
              Sídlíme v AZ Tower na Pražákově a děláme klimatizace pro Brno a okolí.
              Zvednete telefon, domluvíme zaměření, dojede profesionál, který vysvětlí
              každý detail. Pak už jen zapnete ovladač.
            </p>
            <img
              src="/section-2.webp"
              alt="Dálkový ovladač klimatizace v ruce zákazníka v příjemně vychlazeném pokoji"
              className="trust__img"
              width={800}
              height={600}
            />
            <dl className="trust__contact">
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420515541981">+420 515 541 981</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@a1klimatizace.cz">info@a1klimatizace.cz</a></dd>
              </div>
              <div>
                <dt>Adresa</dt>
                <dd>AZ Tower, Pražákova 1008, 639 00 Brno</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Čt 8:30–16:00, Pá 8:30–14:00</dd>
              </div>
            </dl>
          </div>

          <ul className="trust__reviews">
            {recenze.map((r) => (
              <li key={r.jmeno} className="review">
                <p className="review__stars" aria-label="Hodnocení 5 z 5 hvězd">
                  <span aria-hidden="true">★★★★★</span>
                </p>
                <p className="review__text">{r.text}</p>
                <p className="review__meta">
                  <span className="review__name">{r.jmeno}</span>
                  <span className="review__when">{r.kdy}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
