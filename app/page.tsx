import { HeroWordCycle } from "./motion";

/* — Bespoke redraw of the ISO textile-care symbols (GALTOP's 'prací symboly') —
   deployed as the whole site's pictogram DNA. */
function IconWash() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="care">
      <path d="M5 11.5 L27 11.5 L24.4 26 A2.6 2.6 0 0 1 21.8 28 H10.2 A2.6 2.6 0 0 1 7.6 26 Z" />
      <path d="M7.5 13.6 q3 -2.4 6 0 t6 0 t6 0" />
    </svg>
  );
}
function IconBleach() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="care">
      <path d="M16 5 L28 27 H4 Z" />
    </svg>
  );
}
function IconTumble() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="care">
      <rect x="5.5" y="5.5" width="21" height="21" rx="1" />
      <circle cx="16" cy="16" r="7.2" />
    </svg>
  );
}
function IconSquareDry() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="care">
      <rect x="5.5" y="5.5" width="21" height="21" rx="1" />
      <path d="M16 5.5 V26.5" />
    </svg>
  );
}
function IconIron() {
  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" className="care">
      <path d="M4 21 H28 L25 12.5 C24.4 10.9 22.7 10.1 21 10.6 L6 15 C4.9 15.3 4.1 16.3 4.2 17.6 Z" />
      <path d="M6.5 24.6 H25.5" />
    </svg>
  );
}

const worlds = ["HOTELOVÝ", "ZDRAVOTNICKÝ", "BALNEO", "BYTOVÝ"];

const sortiment = [
  {
    n: "01",
    Icon: IconWash,
    title: "Hotelový textil",
    lead: "Kompletní vybavení pokojů i restaurací.",
    items: [
      "Ložní prádlo, přikrývky, polštáře a deky",
      "Ručníky, osušky, koupelnové předložky, župany",
      "Stolní prádlo, ubrusy a naperony",
      "Záclony, závěsy, přehozy",
      "Potisky a výšivky s logem provozu",
    ],
  },
  {
    n: "02",
    Icon: IconBleach,
    title: "Zdravotnický textil",
    lead: "Prádlo, které vydrží nemocniční prádelnu.",
    items: [
      "Rovné prádlo pro lůžková oddělení",
      "Pacientské a personální prádlo",
      "Operační prádlo a roušky",
      "Ostatní výrobky pro zdravotnictví",
    ],
  },
  {
    n: "03",
    Icon: IconTumble,
    title: "Balneo a wellness",
    lead: "Textil pro lázně, sauny a bazénové provozy.",
    items: [
      "Prostěradla a podložky pro procedury",
      "Osušky a předložky do mokrého provozu",
      "Wellness župany a saunové prostěradlo",
    ],
  },
  {
    n: "04",
    Icon: IconSquareDry,
    title: "Bytový textil",
    lead: "Kusový textil pro domácnost i drobný prodej.",
    items: [
      "Pro stolování a do kuchyně",
      "Pro užití v ložnici",
      "Pro užití v koupelně",
      "Ostatní kusový textil",
    ],
  },
  {
    n: "05",
    Icon: IconIron,
    title: "Textilní galanterie",
    lead: "Drobný metrážní i kusový materiál pro šičky i výrobu.",
    items: [
      "Tvrdá galanterie — knoflíky, zipy, přezky, patenty",
      "Měkká galanterie — nitě, stuhy, gumy, lemovky",
      "Doplňková galanterie a spojovací materiál",
    ],
  },
];

const trust = [
  {
    Icon: IconTumble,
    title: "Skladem v Ostravě",
    body: "Sortiment držíme na skladě v Ostravě-Radvanicích. Menší objednávky vychystáme obratem, na velkoobjemové zakázky připravíme kalkulaci.",
  },
  {
    Icon: IconIron,
    title: "Vlastní potisky a výšivky",
    body: "Prádlo označíme logem hotelu, kliniky nebo wellness — potisk i strojová výšivka přímo u nás, včetně vzorku před výrobou.",
  },
  {
    Icon: IconBleach,
    title: "Náhradní plnění",
    body: "Odebíráte-li od nás jako zaměstnavatel, můžeme část dodávek vykázat v režimu náhradního plnění. Podklady doložíme ke každé faktuře.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="GALTOP — úvod">
          <span className="wordmark__stamp" aria-hidden="true">
            <IconWash />
          </span>
          <span className="wordmark__text">GALTOP</span>
          <span className="wordmark__reg">velkoobchod textilem</span>
        </a>
        <p className="topbar__loc">Ostrava&nbsp;· od&nbsp;roku&nbsp;1990</p>
      </header>

      {/* HERO — the care label is the thesis */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__grid">
          <div className="hero__lead">
            <p className="eyebrow">Textil a galanterie · velkoobchod pro celý region</p>
            <h1 id="hero-title" className="hero__title">
              Jeden dodavatel
              <br /> pro každý
              <span className="hero__slot">
                <HeroWordCycle words={worlds} />
              </span>
              provoz.
            </h1>
            <p className="hero__sub">
              Od ložního prádla a ručníků přes operační sety až po knoflíky,
              zipy a nitě. Kompletní sortiment na jednu poptávku, skladem
              v Ostravě.
            </p>
            <div className="hero__actions">
              <a className="btn" href="#sortiment">Prohlédnout sortiment</a>
              <a className="btn btn--ghost" href="#kontakt">Poslat poptávku</a>
            </div>
          </div>

          {/* The sewn-in care label */}
          <div className="label" role="img" aria-label="Etiketa s pracími symboly GALTOP">
            <p className="label__brand">GALTOP<span>®</span></p>
            <p className="label__care">Symboly péče, které nese každý náš výrobek</p>
            <div className="label__row">
              <IconWash />
              <IconBleach />
              <IconTumble />
              <IconSquareDry />
              <IconIron />
            </div>
            <div className="label__foot">
              <span>100% servis</span>
              <span>MADE FOR · CZ</span>
            </div>
          </div>
        </div>
      </section>

      {/* SORTIMENT */}
      <section className="section" id="sortiment" aria-labelledby="sortiment-title">
        <div className="section__head">
          <p className="eyebrow">Sortiment · pět světů textilu</p>
          <h2 id="sortiment-title" className="section__title">
            Co vychystáme na jednu objednávku
          </h2>
          <p className="section__intro">
            Každá kategorie má v katalogu svůj symbol — stejný, jaký najdete
            našitý na etiketě. Vyberte provoz a my připravíme nabídku na míru.
          </p>
        </div>

        <ol className="cards">
          {sortiment.map(({ n, Icon, title, lead, items }) => (
            <li className="card" key={n}>
              <div className="card__top">
                <span className="card__num">{n}</span>
                <span className="card__glyph" aria-hidden="true">
                  <Icon />
                </span>
              </div>
              <h3 className="card__title">{title}</h3>
              <p className="card__lead">{lead}</p>
              <ul className="card__list">
                {items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section className="section section--trust" id="kontakt" aria-labelledby="trust-title">
        <div className="section__head">
          <p className="eyebrow">Proč GALTOP</p>
          <h2 id="trust-title" className="section__title">
            Systematický velkoobchod, ne obchod přes noc
          </h2>
          <p className="section__intro">
            Zásobujeme hotely, zdravotnická zařízení, lázně i prodejny
            metrového textilu z Moravskoslezského kraje už přes třicet let.
            Sídlíme v Opavě, sklad máme v Ostravě-Radvanicích.
          </p>
        </div>

        <div className="trust">
          <ul className="trust__grid">
            {trust.map(({ Icon, title, body }) => (
              <li className="trust__item" key={title}>
                <span className="trust__glyph" aria-hidden="true">
                  <Icon />
                </span>
                <h3 className="trust__title">{title}</h3>
                <p className="trust__body">{body}</p>
              </li>
            ))}
          </ul>

          <aside className="contact" aria-label="Kontakt a provozní doba">
            <p className="contact__eyebrow">Sklad Ostrava-Radvanice</p>
            <dl className="contact__list">
              <div>
                <dt>Telefon</dt>
                <dd><a href="tel:+420777111222">+420 777 111 222</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:info@example.cz">info@example.cz</a></dd>
              </div>
              <div>
                <dt>Provozní doba</dt>
                <dd>Pondělí – pátek 7.00–15.00<br />So, ne a svátky zavřeno</dd>
              </div>
            </dl>
            <p className="contact__note">
              Poptávku pošlete e-mailem — ozveme se do dvou pracovních dnů
              s nabídkou a dostupností.
            </p>
          </aside>
        </div>

        <div className="watermark" aria-hidden="true">
          <IconWash />
        </div>
      </section>
    </main>
  );
}
