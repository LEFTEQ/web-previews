import React from "react";

const obor = [
  {
    kod: "EZS",
    nazev: "Zabezpečovací systémy",
    popis:
      "Ústředna, klávesnice, detektory pohybu, siréna a GSM komunikátor. Když někdo vnikne do objektu, systém to pozná a okamžitě vám dá vědět na telefon — ať jste doma nebo na druhém konci republiky.",
  },
  {
    kod: "CCTV",
    nazev: "Kamerové systémy",
    popis:
      "Pevné i otočné kamery se záznamem na server. Obraz se ukládá na několik dní zpět, takže pachatele identifikujete i zpětně. Navrhneme rozmístění tak, aby žádné slepé místo nezůstalo.",
  },
  {
    kod: "VDT",
    nazev: "Videotelefony",
    popis:
      "Po zazvonění uvidíte na monitoru, kdo stojí za dveřmi — a rozhodnete, jestli otevřete. Osoba přede dveřmi netuší, že ji vidíte. Ovládání zámku na dálku, bezpečně.",
  },
  {
    kod: "NET",
    nazev: "Strukturovaná kabeláž",
    popis:
      "Metalické i optické rozvody pro firemní i domácí sítě. Kroucené páry, přípojné body i tam, kde je zatím nepotřebujete. Postaveno na dlouhou životnost — jako zbytek vaší infrastruktury.",
  },
];

const dalsi = [
  {
    nazev: "Hromosvody",
    popis:
      "Umělá vodivá cesta, která svede bleskový výboj bezpečně do země. Ochrana budovy před požárem i mechanickým poškozením.",
  },
  {
    nazev: "Silnoproud",
    popis:
      "Zásuvkové a světelné okruhy, osazení rozvaděčů. Kompletní elektroinstalace pro domy, byty i firemní budovy.",
  },
  {
    nazev: "Výroba rozvaděčů",
    popis:
      "Rozvaděče nízkého napětí s výrobkovými certifikáty. Ke každému protokol o kusové zkoušce — osvědčení o jakosti a shodě.",
  },
  {
    nazev: "Revize",
    popis:
      "Vyhrazená elektrická zařízení do i nad 1000 V, hromosvody, rozvaděče, spotřebiče i ruční nářadí. Školy, haly, byty i rekreační objekty.",
  },
  {
    nazev: "FVE na klíč",
    popis:
      "Fotovoltaika pro domy i firmy. Zařídíme dotaci až 50 % nákladů, projekt, povolení, realizaci i připojení do sítě.",
  },
  {
    nazev: "Zkoušky §19",
    popis:
      "Příprava a zkoušky odborné způsobilosti v elektrotechnice (dříve vyhl. 50/78 Sb.) pro odborníky i laiky. Dnes dle §19 zák. 250/2021 Sb.",
  },
];

export default function Page() {
  return (
    <main className="eb">
      <header className="eb-nav" aria-label="Hlavní">
        <a className="eb-mark" href="#" aria-label="ELEKTROBOSS, montáž zabezpečení Brno">
          <span className="eb-mark-bolt" aria-hidden="true">
            <svg viewBox="0 0 24 24" width="18" height="18">
              <path d="M13 2 4 14h6l-1 8 9-12h-6z" fill="currentColor" />
            </svg>
          </span>
          <span className="eb-mark-text">
            ELEKTRO<strong>BOSS</strong>
          </span>
        </a>
        <a className="eb-callpill" href="tel:+420720144544">
          <span className="eb-callpill-dot" aria-hidden="true" />
          720&nbsp;144&nbsp;544
        </a>
      </header>

      <section className="eb-hero">
        <div className="eb-hero-media">
          <img
            src="/hero.webp"
            alt="Technik ELEKTROBOSS při montáži zabezpečovacího systému"
            className="eb-hero-img"
          />
          <div className="eb-hero-scrim" aria-hidden="true" />
        </div>

        <div className="eb-hero-inner">
          <p className="eb-eyebrow">
            <span className="eb-status" aria-hidden="true" />
            Střežíme Brno a okolí — nepřetržitě
          </p>
          <h1 className="eb-title">
            Váš dům hlídá
            <br />
            <span className="eb-title-accent">chytrá elektro&shy;instalace.</span>
          </h1>
          <p className="eb-lede">
            Montujeme zabezpečení, kamery a videotelefony — a taháme za tím i celý
            silnoproud, rozvaděče a revize. Jedna parta na všechno, co ve vaší
            budově potřebuje proud i ostrahu.
          </p>
          <div className="eb-hero-cta">
            <a className="eb-btn eb-btn-primary" href="tel:+420720144544">
              Zavolat technikovi
            </a>
            <a className="eb-btn eb-btn-ghost" href="mailto:horak@elektroboss.cz">
              Napsat na e-mail
            </a>
          </div>
        </div>

        <ul className="eb-hero-meta">
          <li>
            <span className="eb-meta-k">EZS · CCTV</span>
            <span className="eb-meta-v">systémy na míru</span>
          </li>
          <li>
            <span className="eb-meta-k">do i nad 1000 V</span>
            <span className="eb-meta-v">revize vyhrazených zařízení</span>
          </li>
          <li>
            <span className="eb-meta-k">Brno</span>
            <span className="eb-meta-v">a okolí, výjezd k vám</span>
          </li>
        </ul>
      </section>

      <section className="eb-sec eb-services" aria-labelledby="h-strez">
        <div className="eb-sec-head">
          <p className="eb-kicker">Ostraha objektu</p>
          <h2 id="h-strez" className="eb-h2">
            Čtyři vrstvy, kterými dům ohlídáme
          </h2>
          <p className="eb-sec-sub">
            Prvním úkolem je zloděje odradit. Když to nestačí, systém ho zachytí a
            předá vám informaci dřív, než stačí zmizet. Poskládáme to od ústředny
            po poslední detektor.
          </p>
        </div>

        <div className="eb-grid-wrap">
          <img
            src="/section-1.webp"
            alt="Instalované kamery a zabezpečovací technika od ELEKTROBOSS"
            className="eb-sec-img"
          />
          <ol className="eb-cards">
            {obor.map((s) => (
              <li className="eb-card" key={s.kod}>
                <span className="eb-card-code">{s.kod}</span>
                <h3 className="eb-card-title">{s.nazev}</h3>
                <p className="eb-card-text">{s.popis}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="eb-sec eb-about" aria-labelledby="h-onas">
        <div className="eb-about-media">
          <img
            src="/section-2.webp"
            alt="Elektrikář ELEKTROBOSS při práci na rozvaděči"
            className="eb-about-img"
          />
        </div>

        <div className="eb-about-body">
          <p className="eb-kicker">Kdo to montuje</p>
          <h2 id="h-onas" className="eb-h2">
            Elektro i zabezpečení pod jednou střechou
          </h2>
          <p className="eb-sec-sub">
            Nejsme jen montéři alarmů. Umíme celý elektro řetězec — od silnoproudu
            a výroby certifikovaných rozvaděčů po hromosvody, fotovoltaiku a
            revize. Díky tomu vám zabezpečení nasadíme tak, aby sedělo do zbytku
            instalace, ne vedle ní.
          </p>

          <ul className="eb-more">
            {dalsi.map((d) => (
              <li className="eb-more-item" key={d.nazev}>
                <span className="eb-more-plus" aria-hidden="true">
                  +
                </span>
                <div>
                  <h3 className="eb-more-title">{d.nazev}</h3>
                  <p className="eb-more-text">{d.popis}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="eb-contact">
            <p className="eb-contact-line">
              Rovnou k panu Horákovi:{" "}
              <a href="tel:+420720144544">720&nbsp;144&nbsp;544</a> ·{" "}
              <a href="mailto:horak@elektroboss.cz">horak@elektroboss.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
