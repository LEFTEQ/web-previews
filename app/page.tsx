import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ASTON CZ — elektroinstalační materiál, České Budějovice",
  description:
    "Prodejna elektroinstalačního materiálu v Českých Budějovicích. Legrand a další ověření výrobci, poradenství a katalogy k zapůjčení. Od roku 1995, Lidická 157.",
  openGraph: {
    title: "ASTON CZ — elektroinstalační materiál, České Budějovice",
    description:
      "Legrand a další ověření výrobci, poradenství u pultu, katalogy k zapůjčení. Prodejna na Lidické 157 s parkováním přímo přede dveřmi.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Prodejna ASTON CZ s elektroinstalačním materiálem" }],
  },
};

const rady = [
  {
    kod: "L1",
    znacka: "Legrand",
    nazev: "Niloé Step",
    popis: "Vypínače a zásuvky pro běžnou domácnost — rychle skladem, ve všech odstínech rámečků.",
    aktualizace: "katalog 4/2024",
  },
  {
    kod: "L2",
    znacka: "Legrand",
    nazev: "Valena Life",
    popis: "Oblíbená řada s USB a datovými prvky. Vzorník rámečků k zapůjčení domů.",
    aktualizace: "katalog 4/2024",
  },
  {
    kod: "L3",
    znacka: "Legrand",
    nazev: "Céliane",
    popis: "Designová řada do reprezentativních interiérů — kov, sklo, dřevo.",
    aktualizace: "katalog 8/2023",
  },
  {
    kod: "J1",
    znacka: "Legrand",
    nazev: "Jištění a distribuce",
    popis: "Rozváděče, jističe, chrániče a proudové ochrany do bytových i firemních rozvodů.",
    aktualizace: "brutto ceník 2026",
  },
  {
    kod: "P1",
    znacka: "Legrand",
    nazev: "Plexo IP55",
    popis: "Přístroje do vlhka a venku — dílny, sklepy, zahrady, fasády.",
    aktualizace: "skladem",
  },
  {
    kod: "M1",
    znacka: "kabely & materiál",
    nazev: "Kabely, hromosvody, VARTA",
    popis: "Kabeláž, hromosvodový materiál, baterie a svítilny, pomocný montážní materiál.",
    aktualizace: "metráž od ruky",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="top">
        <a className="wordmark" href="#" aria-label="ASTON CZ, úvod">
          <span className="wordmark__mark" aria-hidden="true">
            <span className="wordmark__phase wordmark__phase--l" />
            <span className="wordmark__phase wordmark__phase--n" />
            <span className="wordmark__phase wordmark__phase--pe" />
          </span>
          <span className="wordmark__text">
            ASTON<span className="wordmark__cz">CZ</span>
          </span>
        </a>
        <nav className="top__nav" aria-label="Hlavní">
          <a href="#sortiment">Sortiment</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">Elektroinstalační materiál · České Budějovice · od 1995</p>
          <h1 id="hero-title" className="hero__title">
            Za pultem, kde vám <span className="hl">spočítají svorku</span> i celý rozváděč.
          </h1>
          <p className="hero__lead">
            Kamenná prodejna na Lidické. Legrand a další ověření výrobci, poradenství od lidí,
            co materiál znají z montáže. Vy řeknete, co stavíte — my víme, co k tomu patří.
          </p>
          <div className="hero__actions">
            <a className="btn btn--solid" href="#sortiment">Prohlédnout sortiment</a>
            <a className="btn btn--ghost" href="#prodejna">Kde nás najdete</a>
          </div>
          <ul className="hero__phase" aria-label="Otevírací doba a adresa">
            <li><span className="dot dot--l1" aria-hidden="true" /> Po–Pá 7:00–16:45</li>
            <li><span className="dot dot--l2" aria-hidden="true" /> Lidická 157, České Budějovice</li>
            <li><span className="dot dot--l3" aria-hidden="true" /> Parkování přede dveřmi</li>
          </ul>
        </div>
        <figure className="hero__figure">
          <img
            className="hero__img"
            src="/hero.webp"
            alt="Regály prodejny ASTON CZ s elektroinstalačním materiálem"
            width={1200}
            height={1400}
            loading="eager"
          />
          <figcaption className="hero__tag">
            <span>živý sklad</span> Legrand · kabely · jištění · hromosvody
          </figcaption>
        </figure>
      </section>

      <section id="sortiment" className="rady" aria-labelledby="rady-title">
        <div className="rady__head">
          <p className="eyebrow eyebrow--dark">Sortiment</p>
          <h2 id="rady-title">Řady, které vytáhneme z regálu hned</h2>
          <p className="rady__intro">
            Zaměřujeme se na elektromontážní firmy i maloobchod. Ke každé řadě máme aktuální ceník
            a k designovým řadám vzorník rámečků k zapůjčení domů — ať se rozhodujete v klidu.
          </p>
        </div>
        <ul className="rady__grid">
          {rady.map((r) => (
            <li key={r.kod} className="karta">
              <span className="karta__kod" aria-hidden="true">{r.kod}</span>
              <p className="karta__znacka">{r.znacka}</p>
              <h3 className="karta__nazev">{r.nazev}</h3>
              <p className="karta__popis">{r.popis}</p>
              <p className="karta__meta">{r.aktualizace}</p>
            </li>
          ))}
        </ul>
        <p className="rady__note">
          Brutto ceník Legrand 2026 i katalogy jednotlivých řad máme na prodejně k prohlédnutí —
          stavte se, nebo zavolejte na <a href="tel:+420386466420">386 466 420</a>.
        </p>
      </section>

      <section id="prodejna" className="prodejna" aria-labelledby="prodejna-title">
        <figure className="prodejna__figure">
          <img
            className="prodejna__img"
            src="/section-1.webp"
            alt="Pult prodejny ASTON CZ, kde probíhá poradenství se zákazníky"
            width={1000}
            height={800}
            loading="lazy"
          />
        </figure>
        <div className="prodejna__copy">
          <p className="eyebrow eyebrow--dark">O prodejně</p>
          <h2 id="prodejna-title">Na trhu od roku 1995 — a pořád u pultu</h2>
          <p>
            ASTON CZ vede rodina Pernikářových. Za ty roky víme, že rychlost a konkrétní rada
            znamenají víc než nekonečný regál. Přijdete se seznamem, odejdete s materiálem,
            který sedne k tomu, co stavíte.
          </p>
          <dl className="prodejna__fakta">
            <div>
              <dt>Platba</dt>
              <dd>Hotově i kartou</dd>
            </div>
            <div>
              <dt>Katalogy</dt>
              <dd>K zapůjčení domů</dd>
            </div>
            <div>
              <dt>Přístup</dt>
              <dd>Ke každému individuálně</dd>
            </div>
          </dl>

          <div className="kontakt">
            <img
              className="kontakt__img"
              src="/section-2.webp"
              alt="Vchod do prodejny ASTON CZ na Lidické ulici s vyhrazeným parkováním"
              width={900}
              height={600}
              loading="lazy"
            />
            <div className="kontakt__body">
              <h3>Zastavte se</h3>
              <p className="kontakt__adresa">
                Lidická 157<br />České Budějovice 370 07
              </p>
              <ul className="kontakt__lidi">
                <li>
                  <span>Prodejna</span>
                  <a href="tel:+420386466420">386 466 420</a>
                </li>
                <li>
                  <span>Miroslav Pernikář</span>
                  <a href="tel:+420602451404">602 451 404</a>
                </li>
                <li>
                  <span>Martin Pernikář</span>
                  <a href="tel:+420721337054">721 337 054</a>
                </li>
              </ul>
              <a className="btn btn--solid" href="mailto:info@astoncz.cz">Napsat na info@astoncz.cz</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
