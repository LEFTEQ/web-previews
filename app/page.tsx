import type { CSSProperties } from "react";

export const metadata = {
  title: "SIAD Czech — technické plyny, České Budějovice",
  description:
    "Průmyslové, potravinářské a medicinální plyny pro jižní Čechy. Rozvoz lahví, kryogenní cisterny, Total Gas Management. Zázemí SIAD v Českých Budějovicích.",
  openGraph: {
    title: "SIAD Czech — technické plyny, České Budějovice",
    description:
      "Nepřetržité zásobování plyny pro průmysl i zdravotnictví. Sklad a rozvoz z Českých Budějovic.",
    type: "website",
    images: [{ url: "/hero.webp" }],
  },
};

type Gas = {
  symbol: string;
  name: string;
  use: string;
};

const gases: Gas[] = [
  { symbol: "Ar", name: "Argon", use: "ochranná atmosféra při svařování" },
  { symbol: "O₂", name: "Kyslík", use: "řezání, medicinální rozvody" },
  { symbol: "N₂", name: "Dusík", use: "inertizace, potravinářství" },
  { symbol: "CO₂", name: "Oxid uhličitý", use: "svařování, čepování, suchý led" },
  { symbol: "C₂H₂", name: "Acetylen", use: "autogenní řezání a pájení" },
  { symbol: "H₂", name: "Vodík", use: "laboratoře, redukční atmosféry" },
  { symbol: "He", name: "Helium", use: "detekce netěsností, analytika" },
  { symbol: "CO₂", name: "Suchý led", use: "chlazení, čistění tryskáním" },
];

type Service = {
  index: string;
  title: string;
  body: string;
};

const services: Service[] = [
  {
    index: "01",
    title: "Rozvoz lahví a svazků",
    body: "Plné lahve přivezeme, prázdné odvezeme. Pravidelné jízdy po jižních Čechách i výjezd na zavolání, když vám plyn dojde uprostřed zakázky.",
  },
  {
    index: "02",
    title: "Kapalné plyny do zásobníku",
    body: "Kryogenní cisterny s kapalným kyslíkem, dusíkem nebo argonem přímo k vaší výrobě. Instalace zásobníku, odpar a doplňování řešíme za vás.",
  },
  {
    index: "03",
    title: "Total Gas Management",
    body: "Převezmeme celou plynovou infrastrukturu provozu — rozvody, sklad, spotřebu i evidenci. Vy platíte za plyn, ne za starosti okolo něj.",
  },
  {
    index: "04",
    title: "Laboratoř a analytická podpora",
    body: "Kalibrační směsi a čisté plyny pro laboratoře, měření emisí a rozbory. Certifikované složení s protokolem ke každé lahvi.",
  },
];

const sectors = [
  "Zpracování kovů",
  "Potravinářství",
  "Zdravotnictví",
  "Chemie a farmacie",
  "Chlazení a klima",
  "Sklářství",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SIAD Czech, úvodní strana">
          <span className="wordmark__s">SIAD</span>
          <span className="wordmark__tag">Czech · České Budějovice</span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#plyny">Plyny</a>
          <a href="#sluzby">Služby</a>
          <a href="#zazemi">Zázemí</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__image">
          <img
            src="/hero.webp"
            alt="Řady tlakových lahví s technickými plyny připravené k rozvozu ve skladu SIAD"
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="eyebrow">Technické plyny · od roku 1927 ve světě, u vás na dvoře</p>
          <h1 id="hero-title" className="hero__title">
            Plyn pod tlakem.
            <br />
            <span className="hero__title--accent">Dodávka bez tlaku.</span>
          </h1>
          <p className="hero__lead">
            Argon, kyslík, dusík, CO₂ i speciální směsi rozvážíme po jižních
            Čechách z budějovického skladu. Když plyn dojde uprostřed zakázky,
            neřešíte, kdy přijde další — přijede.
          </p>
          <div className="hero__cta">
            <a className="btn btn--solid" href="tel:+420235097520">
              Objednat plyn
            </a>
            <a className="btn btn--ghost" href="#plyny">
              Vybrat plyn
            </a>
          </div>
        </div>
      </section>

      <section className="gases" id="plyny" aria-labelledby="gases-title">
        <div className="section-head">
          <p className="eyebrow">Nabídka</p>
          <h2 id="gases-title">Co vozíme do jižních Čech</h2>
          <p className="section-lead">
            Osm plynů, se kterými se ve zdejších dílnách, provozech a
            laboratořích potkáte nejčastěji. Řazeno podle prvku, ne podle abecedy —
            tak, jak je hledáte u ventilu.
          </p>
        </div>
        <ul className="periodic">
          {gases.map((g, i) => (
            <li
              className="cell"
              key={g.name + i}
              style={{ ["--d" as keyof CSSProperties]: `${i * 45}ms` } as CSSProperties}
            >
              <span className="cell__symbol">{g.symbol}</span>
              <span className="cell__name">{g.name}</span>
              <span className="cell__use">{g.use}</span>
            </li>
          ))}
        </ul>

        <div className="services" id="sluzby">
          <h3 className="services__title">A tři věci navíc, které lahev sama neudělá</h3>
          <ol className="servicelist">
            {services.map((s) => (
              <li className="servicerow" key={s.index}>
                <span className="servicerow__num">{s.index}</span>
                <div className="servicerow__text">
                  <h4>{s.title}</h4>
                  <p>{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="trust" id="zazemi" aria-labelledby="trust-title">
        <div className="trust__media">
          <img
            src="/section-1.webp"
            alt="Kryogenní zásobník kapalného plynu u výrobní haly zákazníka"
            className="trust__img"
          />
        </div>
        <div className="trust__body">
          <p className="eyebrow">Proč zrovna my</p>
          <h2 id="trust-title">Nadnárodní síť, budějovický řidič</h2>
          <p>
            SIAD je jedna z předních italských plynárenských skupin s vlastní
            výrobou v Evropě. Do Českých Budějovic si z toho berete to podstatné:
            certifikovanou kvalitu plynu a člověka, kterého znáte jménem a který
            ví, kudy k vaší rampě couvnout.
          </p>
          <dl className="facts">
            <div className="fact">
              <dt>Jižní Čechy</dt>
              <dd>rozvozová oblast z jednoho skladu</dd>
            </div>
            <div className="fact">
              <dt>Dodávka nekončí</dt>
              <dd>slib nepřetržitého zásobování v jakémkoli množství</dd>
            </div>
            <div className="fact">
              <dt>Protokol k lahvi</dt>
              <dd>doložené složení u speciálních a medicinálních plynů</dd>
            </div>
          </dl>

          <div className="trust__sectors">
            <p className="sectors__label">Vozíme mimo jiné pro:</p>
            <ul className="chips">
              {sectors.map((s) => (
                <li className="chip" key={s}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          <figure className="trust__second">
            <img
              src="/section-2.webp"
              alt="Detail ventilu tlakové lahve s barevným kódem plynu"
              className="trust__img trust__img--wide"
            />
            <figcaption>
              Barevný kód hrdla poznáte na první pohled — my ho hlídáme za vás.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
