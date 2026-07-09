import type { CSSProperties } from "react";

export default function Page() {
  const plochy = [
    {
      kod: "BB",
      nazev: "Billboardy",
      rozmer: "5,1 × 2,4 m",
      popis:
        "Klasická velkoformátová plocha u výpadovek a frekventovaných tříd. Vidí ji řidič i chodec, den i noc.",
    },
    {
      kod: "ŠT",
      nazev: "Štíty domů",
      rozmer: "od 20 do 200 m²",
      popis:
        "Malované i tištěné plachty na štítech budov v centru Budějovic. Nepřehlédnutelná dominanta na křižovatce.",
    },
    {
      kod: "BC",
      nazev: "Backboardy",
      rozmer: "3,0 × 1,5 m",
      popis:
        "Plochy zády k silnici, natočené na kolonu ve směru do města. Zabírají čas strávený v koloně.",
    },
    {
      kod: "MM",
      nazev: "Městský mobiliář",
      rozmer: "CLV 118 × 175 cm",
      popis:
        "Prosvětlené vitríny na zastávkách a chodnících. Reklama v úrovni očí tam, kde lidé stojí a čekají.",
    },
    {
      kod: "OS",
      nazev: "Orientační systémy",
      rozmer: "na míru",
      popis:
        "Navigační cedule, které dovedou zákazníka až ke dveřím. Od výroby po montáž na místě.",
    },
  ];

  const reference = [
    { klient: "Engel", akce: "Backboardy, Kaplicko", rok: "2021" },
    { klient: "Spektrum", akce: "Bike navigace", rok: "2021" },
    { klient: "CityCar", akce: "Navigace k autosalonu", rok: "2021" },
    { klient: "Agrozet", akce: "Kampaň jižní Čechy", rok: "2021" },
  ];

  return (
    <main className="nx">
      <header className="nx-top">
        <a className="nx-brand" href="#" aria-label="Namax – venkovní reklama">
          <span className="nx-brand-mark" aria-hidden="true">
            <span className="nx-brand-frame" />
          </span>
          <span className="nx-brand-word">
            Namax<span className="nx-brand-dot">.</span>
          </span>
          <span className="nx-brand-sub">venkovní reklama · České Budějovice</span>
        </a>
        <nav className="nx-nav" aria-label="Hlavní">
          <a href="#plochy">Plochy</a>
          <a href="#agentura">Agentura</a>
          <a className="nx-nav-cta" href="tel:+420387330440">387 330 440</a>
        </nav>
      </header>

      {/* HERO */}
      <section className="nx-hero" aria-labelledby="hero-nadpis">
        <div className="nx-hero-copy">
          <p className="nx-eyebrow">
            <span className="nx-blink" aria-hidden="true" /> Nyní volné plochy
          </p>
          <h1 id="hero-nadpis">
            Vaše sdělení
            <br />
            <span className="nx-outline">ve výšce</span> celého
            <br />
            města.
          </h1>
          <p className="nx-lead">
            Pronajímáme billboardy, štíty a městský mobiliář v Českých
            Budějovicích a po celých jižních Čechách. Vybereme plochu podle
            toho, kudy jezdí a chodí právě vaši zákazníci — a vylepíme ji.
          </p>
          <div className="nx-hero-actions">
            <a className="nx-btn" href="#plochy">
              Zobrazit plochy
            </a>
            <a className="nx-btn nx-btn-ghost" href="tel:+420387330440">
              Zavolat: 387 330 440
            </a>
          </div>
          <dl className="nx-stats">
            <div>
              <dt>Na trhu od</dt>
              <dd>2003</dd>
            </div>
            <div>
              <dt>Formáty</dt>
              <dd>5 typů</dd>
            </div>
            <div>
              <dt>Sídlo</dt>
              <dd>Č. Budějovice</dd>
            </div>
          </dl>
        </div>
        <figure className="nx-hero-media">
          <img
            src="/hero.webp"
            alt="Reklamní billboard Namax nad silnicí v Českých Budějovicích"
            width={960}
            height={1200}
          />
          <figcaption className="nx-hero-tag">
            <span>Plocha č. B-33</span>
            <span>České Budějovice</span>
          </figcaption>
        </figure>
      </section>

      {/* PLOCHY */}
      <section className="nx-section" id="plochy" aria-labelledby="plochy-nadpis">
        <div className="nx-section-head">
          <p className="nx-eyebrow nx-eyebrow-dark">Nabídka ploch</p>
          <h2 id="plochy-nadpis">Vyberte formát, my zajistíme zbytek</h2>
          <p className="nx-section-lead">
            Od výběru umístění přes grafiku a tisk až po výlep a údržbu. Nad
            každou reklamou přemýšlíme individuálně — kdo kolem projede, kam se
            dívá a co si má odnést.
          </p>
        </div>

        <ul className="nx-plochy">
          {plochy.map((p) => (
            <li className="nx-plocha" key={p.kod}>
              <span className="nx-plocha-kod" aria-hidden="true">
                {p.kod}
              </span>
              <div className="nx-plocha-body">
                <h3>{p.nazev}</h3>
                <p className="nx-plocha-rozmer">{p.rozmer}</p>
                <p>{p.popis}</p>
              </div>
            </li>
          ))}
          <li className="nx-plocha nx-plocha-media">
            <img
              src="/section-1.webp"
              alt="Realizace městského mobiliáře od agentury Namax"
              width={720}
              height={520}
            />
          </li>
        </ul>
      </section>

      {/* AGENTURA */}
      <section
        className="nx-section nx-section-dark"
        id="agentura"
        aria-labelledby="agentura-nadpis"
      >
        <div className="nx-agentura">
          <div className="nx-agentura-copy">
            <p className="nx-eyebrow">O agentuře</p>
            <h2 id="agentura-nadpis">
              Jižní Čechy známe
              <br />
              plochu po ploše.
            </h2>
            <p>
              Namax — venkovní reklama je českobudějovická agentura, která od
              roku 2003 pronajímá a realizuje outdoorové plochy. Díky kontaktům
              vám domluvíme i vybrané plochy konkurenčních agentur, abyste
              řešili kampaň na jednom místě.
            </p>
            <p>
              Sídlíme v Průběžné ulici v Českých Budějovicích. Přijedeme se na
              místo podívat, poradíme s vizuálem a postaráme se o výlep i o to,
              aby plocha po celou dobu vypadala tak, jak má.
            </p>
            <div className="nx-kontakt">
              <a href="tel:+420387330440">387 330 440</a>
              <a href="mailto:info@namax.cz">info@namax.cz</a>
              <span>Průběžná 44, České Budějovice</span>
            </div>
          </div>
          <figure className="nx-agentura-media">
            <img
              src="/section-2.webp"
              alt="Realizace reklamní plochy Namax v jižních Čechách"
              width={720}
              height={560}
            />
          </figure>
        </div>

        <div className="nx-reference">
          <p className="nx-eyebrow">Vybrané realizace</p>
          <ul>
            {reference.map((r) => (
              <li key={r.klient}>
                <span className="nx-ref-klient">{r.klient}</span>
                <span className="nx-ref-akce">{r.akce}</span>
                <span className="nx-ref-rok">{r.rok}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
