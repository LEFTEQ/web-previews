import type { ReactNode } from 'react';

export default function Page() {
  const stroje: { cislo: string; nazev: string; popis: string; znacky: string }[] = [
    {
      cislo: '01',
      nazev: 'Sekačky a zahradní traktory',
      popis: 'Od ruční sekačky po sekací traktor pro velký pozemek. Vyzkoušíme, nastavíme výšku a poradíme, co zvládne váš svah.',
      znacky: 'Stiga · Kubota',
    },
    {
      cislo: '02',
      nazev: 'Motorové pily a křovinořezy',
      popis: 'Řetězové pily, křovinořezy a vyžínače. Nabrousíme řetěz, seřídíme karburátor a dáme dohromady i vyžínací hlavu.',
      znacky: 'Oregon · Briggs & Stratton',
    },
    {
      cislo: '03',
      nazev: 'AKU program bez šňůry',
      popis: 'Aku plotostřihy, foukače a nůžky na jednu baterii. Ukážeme, kolik toho jedno nabití opravdu zvládne.',
      znacky: 'Fiskars · Segway',
    },
    {
      cislo: '04',
      nazev: 'Dieselové stroje Kubota',
      popis: 'Malotraktory a komunální technika pro obce i profíky. Autorizovaný servis, originální díly, sezónní prohlídky.',
      znacky: 'Kubota · Dakr',
    },
    {
      cislo: '05',
      nazev: 'Úklid a zimní technika',
      popis: 'Vysavače a foukače listí, zametací technika, sněhové frézy. Připravíme stroj na sezónu dřív, než přijde.',
      znacky: 'Limpar · Vares',
    },
    {
      cislo: '06',
      nazev: 'Bazar a příslušenství',
      popis: 'Prověřené stroje z druhé ruky, přívěsné vozíky za traktor, oleje, řetězy a náhradní díly skladem.',
      znacky: 'Bison · Aspen',
    },
  ];

  const znacky: string[] = [
    'Stiga', 'Kubota', 'Dakr', 'Segway', 'Fiskars', 'Oregon',
    'Bison', 'Aspen', 'Vares', 'Briggs & Stratton', 'Limpar', 'Raymo',
  ];

  return (
    <main className="kp">
      <header className="kp-top">
        <a className="kp-mark" href="#" aria-label="Kostelecký Pardubice, domovská stránka">
          <span className="kp-mark-k">K</span>
          <span className="kp-mark-word">
            <span className="kp-mark-name">Kostelecký</span>
            <span className="kp-mark-sub">Pardubice · zahradní technika</span>
          </span>
        </a>
        <a className="kp-tel" href="tel:+420466262032">+420 466 262 032</a>
      </header>

      <section className="kp-hero">
        <div className="kp-hero-media">
          <img
            src="/hero.webp"
            alt="Prodejna a servis zahradní techniky Kostelecký v Pardubicích"
            className="kp-hero-img"
          />
          <div className="kp-hero-plate" aria-hidden="true">SERVIS · PRODEJ</div>
        </div>

        <div className="kp-hero-text">
          <p className="kp-eyebrow">Železářství &amp; zahradní technika · Pardubice</p>
          <h1 className="kp-h1">
            Nastartuje.
            <br />
            <span className="kp-h1-accent">Řeže. Sekne. Fouká.</span>
          </h1>
          <p className="kp-lead">
            U nás si stroj nejdřív vyzkoušíte, pak ho odvezete připravený k práci — a když se něco pokazí, servis
            máme za pultem, ne v cizí zemi. Autorizovaný prodej a servis Kubota, Stiga a dalších značek už přes
            dvě dekády na jednom místě v Pardubicích.
          </p>
          <div className="kp-hero-actions">
            <a className="kp-btn kp-btn-primary" href="tel:+420466262032">Zavolat na prodejnu</a>
            <a className="kp-btn kp-btn-ghost" href="#stroje">Co máme skladem</a>
          </div>

          <dl className="kp-hours">
            <div className="kp-hours-row">
              <dt>Po–Pá</dt>
              <dd>8–12 &nbsp;·&nbsp; 13–18</dd>
            </div>
            <div className="kp-hours-row">
              <dt>Sobota</dt>
              <dd>9–12</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="kp-section" id="stroje" aria-labelledby="stroje-nadpis">
        <div className="kp-section-head">
          <p className="kp-eyebrow">Prodej a servis</p>
          <h2 className="kp-h2" id="stroje-nadpis">Šest regálů, od trávy po sníh</h2>
          <p className="kp-section-lead">
            Neprodáváme z katalogu, který jsme nikdy nedrželi v ruce. Každý stroj tady rozjedeme, seřídíme a
            po sezóně opravíme. Vyberte podle práce, kterou máte před sebou.
          </p>
        </div>

        <ol className="kp-grid">
          {stroje.map((s) => (
            <li className="kp-card" key={s.cislo}>
              <span className="kp-card-num" aria-hidden="true">{s.cislo}</span>
              <h3 className="kp-card-title">{s.nazev}</h3>
              <p className="kp-card-text">{s.popis}</p>
              <p className="kp-card-brands">{s.znacky}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="kp-trust" aria-labelledby="trust-nadpis">
        <div className="kp-trust-media">
          <img
            src="/section-1.webp"
            alt="Servisní dílna zahradní techniky — broušení a seřizování strojů"
            className="kp-trust-img"
          />
        </div>

        <div className="kp-trust-text">
          <p className="kp-eyebrow">Autorizovaný servis</p>
          <h2 className="kp-h2" id="trust-nadpis">
            Značku, kterou prodáme,<br />umíme i opravit
          </h2>
          <p className="kp-section-lead">
            Jsme autorizovaný prodej a servis — díly máme originální, technici prošli školením přímo
            u výrobců. Sekačku od nás nemusíte vozit přes půl republiky, když přijde čas na servis.
          </p>

          <ul className="kp-brandwall" aria-label="Značky, které prodáváme a servisujeme">
            {znacky.map((z) => (
              <li className="kp-brand" key={z}>{z}</li>
            ))}
          </ul>

          <div className="kp-figblock">
            <img
              src="/section-2.webp"
              alt="Vystavené zahradní stroje připravené k prodeji"
              className="kp-figblock-img"
            />
            <blockquote className="kp-quote">
              <p>
                „Přijeďte s tím, co potřebujete posekat, prořezat nebo uklidit. Poradíme stroj na míru
                pozemku — ne ten nejdražší z regálu.“
              </p>
              <footer>Tým prodejny Kostelecký · Pardubice</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}

function _unused(x: ReactNode) {
  return x;
}
