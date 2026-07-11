import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SATKE — dovoz aut z Německa a servis Opel v Brně",
  description:
    "Autobazar SATKE v Brně: dovezeme a přihlásíme vůz z Německa na české značky, zajistíme STK, povinné ručení i servis vozů Opel. 30 let za volantem oboru.",
  openGraph: {
    title: "SATKE — dovoz aut z Německa a servis Opel v Brně",
    description:
      "Dovezeme, přihlásíme a předáme vůz z Německa připravený k jízdě. Servis Opel, oceňování a řešení pojistných událostí. Křižíkova, Brno.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Vůz připravený k předání v autobazaru SATKE Brno" }]
  }
};

const kroky = [
  {
    cislo: "01",
    stitek: "Poptávka",
    nadpis: "Řeknete, jaké auto hledáte",
    text: "Značka, rozpočet, výbava, kolik najeto. Podle toho hledáme na německém trhu konkrétní kusy — ne to, co zbylo na dvoře."
  },
  {
    cislo: "02",
    stitek: "Dovoz",
    nadpis: "Dovezeme vůz z Německa",
    text: "Vybraný vůz prohlédneme, převezeme a zkontrolujeme historii. Bez skrytých přeprodejů — víte, odkud auto přijelo."
  },
  {
    cislo: "03",
    stitek: "Papíry",
    nadpis: "Přihlásíme a pojistíme",
    text: "Přepis na české značky, povinné ručení, STK. Vyřídíme úřady za vás a předáme vůz připravený k jízdě."
  },
  {
    cislo: "04",
    stitek: "Servis",
    nadpis: "Postaráme se dál",
    text: "Servis vozů Opel jako o vlastní: pravidelné prohlídky, kontrola před STK, řešení pojistných událostí i oceňování."
  }
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="SATKE — úvod">
          <span className="wordmark__name">SATKE</span>
          <span className="wordmark__plate" aria-hidden="true">BRNO · CZ</span>
        </a>
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#nabidka">Co umíme</a>
          <a href="#tym">O nás</a>
          <a className="nav__call" href="tel:+420777009300">Zavolat</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Vůz připravený k předání na parkovišti autobazaru SATKE v Brně"
            className="hero__img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="hero__panel">
          <p className="hero__eyebrow">Autobazar &amp; servis · Křižíkova, Brno</p>
          <h1 className="hero__title">
            Auto z Německa,
            <br />
            <span className="hero__accent">na značkách</span> a připravené k jízdě.
          </h1>
          <p className="hero__lede">
            Vybereme konkrétní vůz podle vašeho zadání, dovezeme ho, přihlásíme na
            české značky a předáme po STK. Bez papírování a bez překvapení na dvoře.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="tel:+420777009300">Zavolat +420 777 009 300</a>
            <a className="btn btn--ghost" href="#nabidka">Jak dovoz probíhá</a>
          </div>
          <dl className="hero__facts">
            <div>
              <dt>V oboru od</dt>
              <dd>1994</dd>
            </div>
            <div>
              <dt>Specializace servisu</dt>
              <dd>Opel</dd>
            </div>
            <div>
              <dt>Vozy dovážíme z</dt>
              <dd>Německa</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nabidka" id="nabidka" aria-labelledby="nabidka-nadpis">
        <div className="section-head">
          <p className="section-head__eyebrow">Od poptávky po klíče</p>
          <h2 className="section-head__title" id="nabidka-nadpis">
            Čtyři kroky, kterými projede každé auto
          </h2>
          <p className="section-head__text">
            Nekupujete jen vůz, ale i papíry a klid. Proto vedeme každý dovoz stejnou
            cestou — a co slíbíme na začátku, dotáhneme až do servisu.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li className="krok" key={k.cislo}>
              <span className="krok__cislo" aria-hidden="true">{k.cislo}</span>
              <div className="krok__body">
                <span className="krok__stitek">{k.stitek}</span>
                <h3 className="krok__nadpis">{k.nadpis}</h3>
                <p className="krok__text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="nabidka__media">
          <img
            src="/section-1.webp"
            alt="Detail vozu při přípravě a kontrole před předáním zákazníkovi"
            width={1400}
            height={900}
          />
          <figcaption>
            Každý vůz projde před předáním kontrolou i přípravou na STK.
          </figcaption>
        </figure>
      </section>

      <section className="tym" id="tym" aria-labelledby="tym-nadpis">
        <div className="tym__grid">
          <figure className="tym__media">
            <img
              src="/section-2.webp"
              alt="Servis vozů značky Opel v dílně autobazaru SATKE"
              width={1200}
              height={1500}
            />
          </figure>
          <div className="tym__text">
            <p className="section-head__eyebrow">Kdo se o auto stará</p>
            <h2 className="section-head__title" id="tym-nadpis">
              Ing. Petr Satke
            </h2>
            <p className="tym__role">Ředitel firmy a diagnostik závad</p>
            <p className="tym__odstavec">
              Auta studoval na střední i vysoké škole, vystudoval odhady a znalectví
              vozidel a dnes je učí na střední škole. Ve firmě je hlavní mozek i motor —
              závadu, kterou jiní hledají hodiny, uslyší po pár metrech.
            </p>
            <p className="tym__odstavec">
              „O váš vůz se postaráme jako o vlastní.“ Není to fráze do letáku — je to
              důvod, proč se zákazníci pro další auto vracejí.
            </p>
            <ul className="sluzby">
              <li>Dovoz automobilů z Německa</li>
              <li>Přihlášení na české značky</li>
              <li>Povinné ručení</li>
              <li>Servis vozů Opel</li>
              <li>Kontrola před STK</li>
              <li>Oceňování &amp; znalecké odhady</li>
              <li>Řešení pojistných událostí</li>
            </ul>

            <div className="kontakt-karta">
              <div className="kontakt-karta__radek">
                <span className="kontakt-karta__label">Kde nás najdete</span>
                <span>Křižíkova, parkoviště U tunýlku, 612 00 Brno</span>
              </div>
              <div className="kontakt-karta__radek">
                <span className="kontakt-karta__label">Otevřeno</span>
                <span>Po–Pá 9:00–17:00, sobota po domluvě</span>
              </div>
              <div className="kontakt-karta__radek">
                <span className="kontakt-karta__label">Telefon</span>
                <span>
                  <a href="tel:+420777009300">777 009 300</a> ·{" "}
                  <a href="tel:+420775261094">775 261 094</a>
                </span>
              </div>
              <p className="kontakt-karta__tip">Nejlépe po telefonické domluvě — víme pak, že na vás budeme mít čas.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
