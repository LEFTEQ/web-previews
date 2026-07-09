import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      kod: "01",
      nazev: "Výměna čelního skla",
      popis:
        "Lepené čelní sklo, kalibrace kamer a senzorů asistenčních systémů. Vůz je připraven k odjezdu podle typu lepidla — u rychlolepících tmelů i do dvou hodin.",
      cas: "od 2 hodin",
    },
    {
      kod: "02",
      nazev: "Oprava odštěpku",
      popis:
        "Když kamínek udělá do skla jen malý kráter, nemusí se hned měnit celé sklo. Vyplníme prasklinku pryskyřicí, než se rozjede přes celý zorný úhel řidiče.",
      cas: "do 45 minut",
    },
    {
      kod: "03",
      nazev: "Boční a zadní skla",
      popis:
        "Vysazování a vysklívání dveřních, trojúhelníkových i zadních vyhřívaných skel. Odsajeme střepy z čalounění a zkontrolujeme těsnění i mechaniku oken.",
      cas: "tentýž den",
    },
    {
      kod: "04",
      nazev: "Pojistná událost za vás",
      popis:
        "Máte-li připojištění skel, vyřídíme hlášení i komunikaci s pojišťovnou. Vy platíte nanejvýš spoluúčast, papírování necháte na nás.",
      cas: "bez záloh",
    },
  ];

  const znacky = [
    "Škoda",
    "Volkswagen",
    "Mercedes-Benz",
    "BMW",
    "Porsche",
    "Maserati",
    "Ford",
    "Toyota",
  ];

  return (
    <main className="ap">
      <header className="ap-nav" aria-label="Hlavní">
        <a className="ap-brand" href="#top" aria-label="Auto Perfekt Praha — úvod">
          <span className="ap-brand-mark" aria-hidden="true">
            <span className="ap-crack" />
          </span>
          <span className="ap-brand-text">
            <span className="ap-brand-name">Auto&nbsp;Perfekt</span>
            <span className="ap-brand-sub">Autosklo · Praha 9</span>
          </span>
        </a>
        <a className="ap-nav-cta" href="tel:+420283840970">
          Zavolat 283&nbsp;840&nbsp;970
        </a>
      </header>

      <section className="ap-hero" id="top">
        <div className="ap-hero-media">
          <img
            src="/hero.webp"
            alt="Technik vysazuje čelní sklo osobního vozu v pražské dílně Auto Perfekt"
            className="ap-hero-img"
          />
          <div className="ap-hero-scrim" aria-hidden="true" />
        </div>
        <div className="ap-hero-inner">
          <p className="ap-eyebrow">Autosklo · Spojovací 41, Praha 9 · od roku 1992</p>
          <h1 className="ap-hero-title">
            Prasklo vám sklo?
            <span className="ap-hero-line">Vyměníme ho ještě dnes.</span>
          </h1>
          <p className="ap-hero-lede">
            Přijeďte s odštěpkem od kamínku i s rozbitým čelním sklem. Lepíme
            originální i kvalitní neoriginální skla pro všechny značky a
            zkalibrujeme kamery asistentů, aby vůz zase &bdquo;viděl&ldquo;.
          </p>
          <div className="ap-hero-actions">
            <a className="ap-btn ap-btn-primary" href="tel:+420603551252">
              Objednat na 603&nbsp;551&nbsp;252
            </a>
            <a className="ap-btn ap-btn-ghost" href="#sluzby">
              Co u nás vyřešíte
            </a>
          </div>
          <dl className="ap-hero-facts">
            <div>
              <dt>Odštěpek</dt>
              <dd>opravíme do 45&nbsp;min</dd>
            </div>
            <div>
              <dt>Pojistná událost</dt>
              <dd>vyřídíme za vás</dd>
            </div>
            <div>
              <dt>Všechny značky</dt>
              <dd>od Škody po Maserati</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="ap-services" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="ap-section-head">
          <p className="ap-eyebrow ap-eyebrow-dark">Kde vám pomůžeme</p>
          <h2 id="sluzby-nadpis" className="ap-h2">
            Od malého kamínku po celé čelní sklo
          </h2>
          <p className="ap-section-lede">
            Skla řešíme každý den — víme, kdy stačí prasklinku zalít pryskyřicí
            a kdy je čas na výměnu. Poradíme rovnou u vozu, bez zbytečného
            objednávání dokola.
          </p>
        </div>

        <ol className="ap-service-grid">
          {sluzby.map((s) => (
            <li className="ap-service" key={s.kod}>
              <span className="ap-service-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="ap-service-nazev">{s.nazev}</h3>
              <p className="ap-service-popis">{s.popis}</p>
              <span className="ap-service-cas">{s.cas}</span>
            </li>
          ))}
        </ol>

        <figure className="ap-service-figure">
          <img
            src="/section-1.webp"
            alt="Detail nanášení lepicího tmelu na okraj nového čelního skla"
            className="ap-service-figure-img"
          />
          <figcaption>
            Sklo lepíme tmelem s předepsanou dobou tuhnutí — proto vám vždy
            řekneme přesnou hodinu, kdy s vozem můžete bezpečně vyjet.
          </figcaption>
        </figure>
      </section>

      <section className="ap-trust" aria-labelledby="onas-nadpis">
        <div className="ap-trust-media">
          <img
            src="/section-2.webp"
            alt="Dílna Auto Perfekt v pražských Vysočanech s připravenými skly"
            className="ap-trust-img"
          />
        </div>
        <div className="ap-trust-body">
          <p className="ap-eyebrow ap-eyebrow-dark">O nás</p>
          <h2 id="onas-nadpis" className="ap-h2">
            Skla měníme v Praze 9 od roku 1992
          </h2>
          <p className="ap-trust-text">
            Auto Perfekt je rodinný pražský servis ve Vysočanech. Za tři
            desetiletí nám rukama prošla čelní skla od městských Škodovek přes
            firemní dodávky až po Porsche a veterány, kterým se dnes originál
            shání jen těžko. Poznáme rozdíl mezi sklem, které stačí opravit, a
            tím, které je bezpečnější rovnou vyměnit — a řekneme vám to na
            rovinu.
          </p>
          <ul className="ap-trust-list">
            <li>Kalibrace kamer a radarů asistenčních systémů po výměně skla</li>
            <li>Originální i prověřená neoriginální skla — vyberete podle ceny</li>
            <li>Odsátí střepů, kontrola těsnění a stěračů zdarma k výměně</li>
          </ul>

          <div className="ap-marks" aria-label="Značky, pro které skla běžně měníme">
            <span className="ap-marks-label">Sklo vyměníme pro:</span>
            <ul className="ap-marks-list">
              {znacky.map((z) => (
                <li key={z}>{z}</li>
              ))}
            </ul>
          </div>

          <address className="ap-address">
            <strong>AUTO PERFEKT PRAHA s.r.o.</strong>
            <span>Spojovací 783/41, 190&nbsp;00 Praha 9 — Vysočany</span>
            <span>
              <a href="tel:+420283840970">283&nbsp;840&nbsp;970</a> ·{" "}
              <a href="mailto:autosklo@auto-perfekt.cz">
                autosklo@auto-perfekt.cz
              </a>
            </span>
          </address>
        </div>
      </section>
    </main>
  );
}
