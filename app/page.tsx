import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cvrček, s.r.o. — plyn, voda, topení v Ústí nad Labem",
  description:
    "Plynaři, topenáři a instalatéři z Ústí nad Labem. Montáže rozvodů plynu, kotelen do 50 kW, tepelná čerpadla i vodoinstalace. Na trhu přes 30 let, záruka 24 měsíců.",
  openGraph: {
    title: "Cvrček, s.r.o. — plyn, voda, topení v Ústí nad Labem",
    description:
      "Rozvody plynu, kotelny, topení a vodoinstalace na klíč. Ústecká firma s praxí přes 30 let.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Montáž plynového rozvodu" }],
  },
};

const obory = [
  {
    kod: "CH₄",
    nazev: "Plynařské práce",
    popis:
      "Montujeme rozvody plynu z oceli, mědi i polypropylenu, děláme domovní přípojky a stavíme plynové kotelny o výkonu do 50 kW. Vše s revizí a papíry, které obstojí.",
  },
  {
    kod: "°C",
    nazev: "Topenářské práce",
    popis:
      "Kotelny a předávací stanice různých výkonů, rozvody ÚT z oceli, mědi i plastu, podlahové i radiátorové topení. Instalujeme kotle, bojlery, tepelná čerpadla a solární systémy na klíč.",
  },
  {
    kod: "H₂O",
    nazev: "Instalatérské práce",
    popis:
      "Rozvody vody z plastu, pozinku i polypropylenu, vnitřní i venkovní kanalizace, domovní přípojky. Materiál vybíráte vy, my ho namontujeme tak, aby vydržel.",
  },
  {
    kod: "Fe",
    nazev: "Zámečnické práce",
    popis:
      "Kovové konstrukce, mříže a další zámečnina. K tomu čištění kanalizací a kamerové prohlídky potrubí — vidíme, kde je problém, dřív než začneme kopat.",
  },
];

const znacky = ["Immergas", "Viessmann", "Samsung"];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Cvrček, s.r.o. — úvod">
          <span className="wordmark__flame" aria-hidden="true" />
          <span className="wordmark__name">Cvrček</span>
          <span className="wordmark__sro">s.r.o.</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#obory">Co umíme</a>
          <a href="#duvera">Proč my</a>
          <a className="nav__call" href="tel:+420475000000">Zavolat</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Plynař při montáži měděného rozvodu plynu"
            width={1600}
            height={1000}
            className="hero__img"
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Plyn · voda · topení — Ústí nad Labem</p>
          <h1 id="hero-title" className="hero__title">
            Když otočíte
            <br />
            <span className="hero__accent">ventilem</span>, musí
            <br />
            všechno těsnit.
          </h1>
          <p className="hero__lead">
            Jsme plynaři, topenáři a instalatéři z Ústí nad Labem. Přes třicet
            let stavíme kotelny, rozvody a přípojky, které si po nás nemusíte
            hlídat.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#poptavka">
              Poptat práci
            </a>
            <a className="btn btn--ghost" href="tel:+420475000000">
              475 00 00 00
            </a>
          </div>
          <dl className="hero__meta">
            <div>
              <dt>Praxe</dt>
              <dd>30+ let</dd>
            </div>
            <div>
              <dt>Kotelny do</dt>
              <dd>50 kW</dd>
            </div>
            <div>
              <dt>Záruka</dt>
              <dd>24 měsíců</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="obory" id="obory" aria-labelledby="obory-title">
        <div className="obory__head">
          <p className="eyebrow">Čtyři profese, jedna parta</p>
          <h2 id="obory-title" className="section-title">
            Co pro vás na klíč zajistíme
          </h2>
          <p className="section-lead">
            V bytech, rodinných domech i průmyslových objektech. Ostatní práce
            řešíme přes prověřené subdodavatele, takže máte jednu firmu na vše.
          </p>
        </div>
        <ul className="obory__grid">
          {obory.map((o) => (
            <li className="card" key={o.nazev}>
              <span className="card__kod" aria-hidden="true">
                {o.kod}
              </span>
              <h3 className="card__title">{o.nazev}</h3>
              <p className="card__popis">{o.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="duvera" id="duvera" aria-labelledby="duvera-title">
        <div className="duvera__media">
          <img
            src="/section-1.webp"
            alt="Nová plynová kotelna s rozvody a kotlem"
            width={1200}
            height={900}
            className="duvera__img"
          />
          <img
            src="/section-2.webp"
            alt="Detail připojení tepelného zdroje"
            width={1200}
            height={900}
            className="duvera__img duvera__img--b"
          />
        </div>
        <div className="duvera__body">
          <p className="eyebrow">Proč lidem v Ústí stojíme za zavolání</p>
          <h2 id="duvera-title" className="section-title">
            Papíry v pořádku, práce natvrdo
          </h2>
          <ul className="duvera__list">
            <li>
              <strong>Školení přímo u výrobců.</strong> Naši topenáři chodí na
              pravidelná školení, skládají zkoušky a nosí odtud certifikáty —
              montáž kotle vám tak nikdo nezpochybní.
            </li>
            <li>
              <strong>Přímé zastoupení značek.</strong> Dodáváme{" "}
              {znacky.join(", ")}{" "}a další — kotle, bojlery, průtokové ohřívače,
              termostaty, tepelná čerpadla i solár.
            </li>
            <li>
              <strong>Zelená úsporám bez papírování navíc.</strong> Jsme v
              Seznamu odborných dodavatelů. Projekt, konzultaci i dotaci vyřídíme
              za vás.
            </li>
            <li>
              <strong>Ceny podle ceníku, ne od oka.</strong> Kalkulujeme dle RTS
              Brno a ÚRS Praha: 650 Kč bez DPH za hodinu a pracovníka, doprava 15
              Kč/km. Materiál dle dodacích listů.
            </li>
          </ul>
          <a className="btn btn--primary" href="#poptavka" id="poptavka">
            Nezávazně poptat
          </a>
        </div>
      </section>
    </main>
  );
}
