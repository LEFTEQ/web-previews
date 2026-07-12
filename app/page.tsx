import type { ReactNode } from "react";

const sluzby = [
  {
    kod: "L1",
    nazev: "Rodinné domy a byty",
    popis:
      "Kompletní rozvody od jističové skříně po zásuvky. Nový dům i rekonstrukce staré instalace, včetně revizní zprávy, kterou skutečně dostanete do ruky.",
  },
  {
    kod: "L2",
    nazev: "Komerční objekty",
    popis:
      "Obchody, drogerie, kanceláře a provozovny na klíč. Naprojektujeme rozvaděč, osvětlení i datové trasy tak, aby vám revizor nic nevrátil.",
  },
  {
    kod: "L3",
    nazev: "Průmyslové instalace",
    popis:
      "Silnoproud ve výrobních halách — od přívodu k technologii po zapojení strojů. Chlazení a rekuperace pro lisy, pece a linky.",
  },
  {
    kod: "L4",
    nazev: "Bezpečnostní systémy",
    popis:
      "Kamery a alarmy pro domy, haly i garáže. Systém, který vidíte v mobilu a který skutečně zavolá, když má.",
  },
  {
    kod: "L5",
    nazev: "Chytrá domácnost",
    popis:
      "Ovládání světel, topení a spotřebičů z jednoho místa. Šetří energii a nepřidělává starosti — nastavíme to podle vás, ne podle katalogu.",
  },
  {
    kod: "L6",
    nazev: "Klimatizace a vrata",
    popis:
      "Prodej, montáž a servis klimatizací. Garážová vrata, posuvné brány a jejich propojení s elektroinstalací a zabezpečením.",
  },
];

const reference = [
  {
    text:
      "Kompletní elektroinstalace v rodinném domě proběhla hladce, práce byla precizní a výsledek splnil naše očekávání. Oceňujeme spolehlivost a profesionální přístup.",
    autor: "Jan",
    misto: "Konice — rodinný dům",
  },
  {
    text:
      "Spolupracovali jsme na řadě projektů po celé Evropě — chlazení a rekuperace pro vstřikovací lisy a tavicí pece. Spokojenost s kvalitou i rychlostí realizace. Spolehlivý partner.",
    autor: "Blaukom CZ s.r.o.",
    misto: "průmyslové instalace",
  },
  {
    text:
      "Za poslední rok pro nás tým realizoval tři instalace radarového systému pro sledování letového provozu v Polsku, Maroku a Norsku. Preciznost, odbornost a spolehlivost.",
    autor: "Eldis Pardubice s.r.o.",
    misto: "radarové systémy",
  },
];

function Phase({ children }: { children: ReactNode }) {
  return <span className="phase">{children}</span>;
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Elektro Beránek, domovská stránka">
          <span className="wordmark-mark" aria-hidden="true">
            <span className="phase-dot phase-l" />
            <span className="phase-dot phase-n" />
          </span>
          <span className="wordmark-text">
            Elektro <b>Beránek</b>
          </span>
        </a>
        <a className="topbar-phone" href="tel:+420777173661">
          +420 777 173 661
        </a>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Rozvaděč a elektroinstalace od Elektro Beránek v Olomouci"
            className="hero-img"
          />
          <div className="hero-scale" aria-hidden="true">
            <span>L1</span>
            <span>L2</span>
            <span>L3</span>
            <span>N</span>
            <span>PE</span>
          </div>
        </div>

        <div className="hero-copy">
          <p className="eyebrow">
            <Phase>Elektroinstalace · Olomouc a okolí</Phase>
          </p>
          <h1 className="hero-title">
            Zapojeno<span className="title-accent">.</span> Zrevidováno<span className="title-accent">.</span> Připojeno<span className="title-accent">.</span>
          </h1>
          <p className="hero-lead">
            Elektrikář, kterému projde revize napoprvé. Rodinné domy, komerční
            provozy i průmyslové haly — od přívodu po poslední zásuvku, s
            papírem, který máte kam založit.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777173661">
              Zavolat
            </a>
            <a className="btn btn-ghost" href="mailto:beranek.elektroinstalace@gmail.com">
              Napsat e-mail
            </a>
          </div>
          <dl className="hero-facts">
            <div>
              <dt>Revize</dt>
              <dd>součástí každé zakázky</dd>
            </div>
            <div>
              <dt>Působnost</dt>
              <dd>Olomouc · celá ČR i zahraničí</dd>
            </div>
            <div>
              <dt>Obor</dt>
              <dd>slabo- i silnoproud</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">
            <Phase>Fáze L · Co zapojíme</Phase>
          </p>
          <h2 id="services-title">Šest okruhů, jeden elektrikář</h2>
          <p className="section-lead">
            Od zásuvky v obýváku po rozvaděč ve výrobní hale. Vezmeme to celé —
            návrh, montáž, revizi i servis — abyste neřešili tři různé firmy.
          </p>
        </div>

        <div className="panel">
          <ul className="service-list">
            {sluzby.map((s) => (
              <li className="service-row" key={s.kod}>
                <span className="service-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <div className="service-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                </div>
              </li>
            ))}
          </ul>
          <div className="panel-media">
            <img
              src="/section-1.webp"
              alt="Detail elektroinstalace a zapojení rozvaděče"
              className="panel-img"
            />
          </div>
        </div>
      </section>

      <section className="trust" aria-labelledby="trust-title">
        <div className="section-head">
          <p className="eyebrow">
            <Phase>Fáze N · Komu už svítí</Phase>
          </p>
          <h2 id="trust-title">Práce, za kterou se nestydíme</h2>
          <p className="section-lead">
            Od rodinného domu v Konici po radarové systémy v Norsku. Stejná
            preciznost bez ohledu na to, jak velký je rozvaděč.
          </p>
        </div>

        <div className="trust-grid">
          <figure className="trust-media">
            <img
              src="/section-2.webp"
              alt="Realizace elektroinstalace v objektu"
              className="panel-img"
            />
          </figure>
          <div className="quotes">
            {reference.map((r, i) => (
              <blockquote className="quote" key={i}>
                <p>{r.text}</p>
                <footer>
                  <span className="quote-author">{r.autor}</span>
                  <span className="quote-misto">{r.misto}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
