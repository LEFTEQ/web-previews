import type { CSSProperties } from "react";

export default function Page() {
  const suroviny = [
    {
      cislo: "01",
      nazev: "Humnový slad",
      popis:
        "Podlahově klíčený slad z domácího ječmene. Pomalejší, poctivější cesta ke sladu s plným tělem a jemnou obilnou sladkostí.",
      obraz: "Základ várky",
    },
    {
      cislo: "02",
      nazev: "Chmel z Tršické oblasti",
      popis:
        "Tuzemské odrůdy přímo od lokálních pěstitelů. Doplníme Žatec, Úštěk i zahraniční odrůdy podle receptu vašeho piva.",
      obraz: "Aroma a hořkost",
    },
    {
      cislo: "03",
      nazev: "Kvasnice",
      popis:
        "Pivovarské kmeny pro spodní i svrchní kvašení. Vyberete profil, my zajistíme spolehlivou vitalitu do každé fáze.",
      obraz: "Kvašení",
    },
    {
      cislo: "04",
      nazev: "Filtrační média CLARCEL",
      popis:
        "Křemelina od výrobce, pro kterého jsme exkluzivním distributorem. Čiré pivo bez kompromisu v chuti.",
      obraz: "Filtrace",
    },
  ];

  return (
    <main className="rt">
      <header className="rt-top">
        <a className="rt-brand" href="#" aria-label="Raven Trading, minipivovar a dodavatel surovin, Olomouc">
          <span className="rt-brand-mark" aria-hidden="true">R</span>
          <span className="rt-brand-word">
            Raven<span className="rt-brand-thin">Trading</span>
          </span>
        </a>
        <nav className="rt-nav" aria-label="Hlavní">
          <a href="#suroviny">Suroviny</a>
          <a href="#filtrace">Filtrace</a>
          <a href="#pivovar">O nás</a>
        </nav>
        <a className="rt-nav-cta" href="#suroviny">Poptat suroviny</a>
      </header>

      <section className="rt-hero" aria-labelledby="rt-hero-title">
        <img
          className="rt-hero-img"
          src="/hero.webp"
          alt="Detail sladu a chmele připraveného pro várku piva"
        />
        <div className="rt-hero-scrim" aria-hidden="true" />
        <div className="rt-hero-inner">
          <p className="rt-eyebrow">Minipivovar &amp; dodavatel surovin · Olomouc</p>
          <h1 id="rt-hero-title" className="rt-hero-title">
            Od zrna<br />
            po čiré pivo<br />
            <span className="rt-hero-accent">bez zkratek.</span>
          </h1>
          <p className="rt-hero-lead">
            Přes dvacet let filtrujeme pivo a dodáváme slad, chmel, kvasnice
            i filtrační křemelinu CLARCEL. Vaříme vlastní várky a pomáháme
            uvařit ty vaše.
          </p>
          <div className="rt-hero-actions">
            <a className="rt-btn" href="#suroviny">Prohlédnout suroviny</a>
            <a className="rt-btn rt-btn-ghost" href="#pivovar">Náš pivovar</a>
          </div>
        </div>
        <dl className="rt-hero-facts">
          <div>
            <dt>Zkušenost</dt>
            <dd>20+ let filtrace piva</dd>
          </div>
          <div>
            <dt>Chmel</dt>
            <dd>Tršická oblast</dd>
          </div>
          <div>
            <dt>Křemelina</dt>
            <dd>Exkluzivně CLARCEL</dd>
          </div>
        </dl>
      </section>

      <section className="rt-suroviny" id="suroviny" aria-labelledby="rt-suroviny-title">
        <div className="rt-sec-head">
          <p className="rt-eyebrow rt-eyebrow-dark">Nabídka</p>
          <h2 id="rt-suroviny-title">Čtyři suroviny, ze kterých stavíme várku</h2>
          <p className="rt-sec-lead">
            Sladovna, chmelnice, laboratoř i filtrace na jednom místě.
            Poradíme s recepturou a dodáme přesně to, co vaše pivo potřebuje.
          </p>
        </div>

        <ol className="rt-list">
          {suroviny.map((s) => (
            <li className="rt-item" key={s.cislo}>
              <span className="rt-item-num" aria-hidden="true">
                {s.cislo}
              </span>
              <div className="rt-item-body">
                <p className="rt-item-tag">{s.obraz}</p>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="rt-suroviny-fig">
          <img
            src="/section-1.webp"
            alt="Suroviny pro vaření piva — slad, chmel a kvasnice připravené k várce"
          />
          <figcaption>
            Humnový slad a tuzemský chmel — základ, na kterém stavíme každou dodávku.
          </figcaption>
        </figure>
      </section>

      <section className="rt-pivovar" id="pivovar" aria-labelledby="rt-pivovar-title">
        <figure className="rt-pivovar-fig">
          <img
            src="/section-2.webp"
            alt="Provoz Záhlinického pivovaru při filtraci a stáčení piva"
          />
        </figure>
        <div className="rt-pivovar-text">
          <p className="rt-eyebrow">O nás &amp; filtrace</p>
          <h2 id="rt-pivovar-title" className="rt-pivovar-title">
            Filtraci piva rozumíme z první ruky
          </h2>
          <p>
            Dvacet let filtrujeme tekutiny, a hlavně pivo. Spolupracujeme
            s předními výrobci filtračních zařízení a s pivovary všech
            velikostí — od domácích várečníků po zavedené značky. Ty
            zkušenosti vkládáme do každé rady i každé dodávky.
          </p>
          <ul className="rt-checks" id="filtrace">
            <li>Exkluzivní distribuce filtračních křemelin CLARCEL</li>
            <li>Vlastní várky v Záhlinickém pivovaru</li>
            <li>Laboratorní kontrola kvality surovin</li>
            <li>Chmel přímo od pěstitelů z Tršické oblasti</li>
          </ul>
          <blockquote className="rt-quote">
            „Poskytneme vám vše potřebné pro úspěch vašeho piva.“
            <cite>Raven Trading, Olomouc</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
