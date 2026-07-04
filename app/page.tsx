import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MMM Auto — autobazar Praha | prověřená ojetá i nová auta",
  description:
    "Autobazar v Praze. Prověřená ojetá auta s garancí kilometrů a původu, nové vozy s českou zárukou, financování, pojištění i dlouhodobý pronájem. Vozy dodáváme na objednávku.",
  openGraph: {
    title: "MMM Auto — autobazar Praha",
    description:
      "Prověřená ojetá auta s garancí kilometrů a původu. Financování, pojištění a vozy na objednávku. Bezbariérový autobazar v Praze.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", alt: "Vozy autobazaru MMM Auto v Praze" }],
  },
};

const sluzby = [
  {
    kod: "VÝKUP",
    nazev: "Výkup a prodej ojetých",
    text: "Prověřená auta s garancí ujetých kilometrů a původu. Výkup na počkání, u nás nebo u vás. Vozy z velké části dodáváme na objednávku podle toho, co hledáte.",
  },
  {
    kod: "NOVÉ",
    nazev: "Nové vozy pro ČR",
    text: "Nové vozy za výhodné ceny, v úpravě pro Českou republiku, s platnou zárukou výrobce a českými SPZ. Vyřídíme registraci i přihlášení.",
  },
  {
    kod: "FIN",
    nazev: "Leasing a úvěr",
    text: "Leasing pro firmy a právnické osoby, úvěr na ojeté vozy pro fyzické osoby i firmy. Business manageři ušijí financování na míru přímo u nás.",
  },
  {
    kod: "POJ",
    nazev: "Pojištění a povinné ručení",
    text: "Vybereme optimální variantu a vše vyřídíme za vás při koupi vozu — na počkání, ve stejné kanceláři jako financování.",
  },
  {
    kod: "NÁJEM",
    nazev: "Dlouhodobý pronájem",
    text: "Široká flotila napříč značkami — nižší, střední i vyšší třída. Pronájem podle vašich požadavků, klidně na dlouho.",
  },
  {
    kod: "FLEET",
    nazev: "Správa vozového parku",
    text: "Fleet management: kompletní péče o firemní flotilu včetně pick-up servisu, kdy vůz vyzvedneme i přivezeme zpět.",
  },
];

const duvera = [
  {
    h: "Garance km a původu",
    p: "Každý vůz prověříme — kilometry i historii. To, co u auta uvidíte, u nás platí.",
  },
  {
    h: "Vše pod jednou střechou",
    p: "Prohlídka, financování, pojištění i přepis. Odjedete s hotovým autem, ne s hromadou papírů k vyřízení.",
  },
  {
    h: "Bezbariérový přístup",
    p: "Celá plocha je zpevněná a bezbariérová. Máme zkušenost i s úpravou vozu na ruční řízení pro vozíčkáře.",
  },
];

export default function Page() {
  return (
    <main className="mmm">
      <header className="mmm-nav">
        <a className="mmm-logo" href="#top" aria-label="MMM Auto, domů">
          <span className="mmm-logo-mark" aria-hidden="true">
            <b>M</b>
            <b>M</b>
            <b>M</b>
          </span>
          <span className="mmm-logo-word">Auto</span>
        </a>
        <a className="mmm-tel" href="tel:+420777688011">
          <span className="mmm-tel-dot" aria-hidden="true" />
          Zavolat +420 777 688 011
        </a>
      </header>

      <section className="mmm-hero" id="top">
        <div className="mmm-hero-media">
          <img
            src="/hero.webp"
            alt="Prověřené vozy připravené k prodeji v autobazaru MMM Auto v Praze"
            className="mmm-hero-img"
          />
          <span className="mmm-plate" aria-hidden="true">
            <span className="mmm-plate-eu">
              <span className="mmm-plate-stars" />
              CZ
            </span>
            <span className="mmm-plate-num">MMM · PHA</span>
          </span>
        </div>

        <div className="mmm-hero-copy">
          <p className="mmm-eyebrow">Autobazar · Praha</p>
          <h1 className="mmm-title">
            Auto, které projde
            <br />
            <em>naší</em> kontrolou dřív
            <br />
            než tou vaší.
          </h1>
          <p className="mmm-lead">
            Prověřená ojetá i nová auta s garancí kilometrů a původu.
            Financování, pojištění a přepis vyřídíme na počkání. Co
            nemáme na place, seženeme na objednávku.
          </p>
          <div className="mmm-hero-cta">
            <a className="mmm-btn" href="tel:+420777688011">
              Zavolat a domluvit prohlídku
            </a>
            <a className="mmm-btn mmm-btn-ghost" href="#nabidka">
              Co nabízíme
            </a>
          </div>
        </div>
      </section>

      <section className="mmm-sec" id="nabidka" aria-labelledby="nabidka-h">
        <div className="mmm-sec-head">
          <p className="mmm-eyebrow">Nabídka</p>
          <h2 id="nabidka-h" className="mmm-h2">
            Prodej, výkup i vše okolo — na jednom místě
          </h2>
          <p className="mmm-sub">
            Sledujeme, jak se prodej aut mění, a nové možnosti financování,
            pojištění i prověřování vozů rovnou zapojujeme do služeb bazaru.
          </p>
        </div>

        <ul className="mmm-grid">
          {sluzby.map((s) => (
            <li className="mmm-card" key={s.kod}>
              <span className="mmm-tag">{s.kod}</span>
              <h3 className="mmm-card-h">{s.nazev}</h3>
              <p className="mmm-card-p">{s.text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mmm-sec mmm-trust" aria-labelledby="onas-h">
        <div className="mmm-trust-media">
          <img
            src="/section-1.webp"
            alt="Prodejce autobazaru MMM Auto při předávání vozu zákazníkovi"
            className="mmm-trust-img"
          />
        </div>

        <div className="mmm-trust-body">
          <p className="mmm-eyebrow">Proč MMM Auto</p>
          <h2 id="onas-h" className="mmm-h2">
            Kvalifikovaný tým, který se vám opravdu věnuje
          </h2>
          <p className="mmm-sub">
            Naši prodejci najdou nejvhodnější řešení koupě i prodeje.
            Administrativu — financování a pojištění — má na starost tým
            business managerů. Proto se k nám zákazníci vracejí.
          </p>

          <dl className="mmm-facts">
            {duvera.map((d) => (
              <div className="mmm-fact" key={d.h}>
                <dt>{d.h}</dt>
                <dd>{d.p}</dd>
              </div>
            ))}
          </dl>

          <div className="mmm-trust-strip">
            <img
              src="/section-2.webp"
              alt="Vozy z aktuální nabídky autobazaru MMM Auto"
              className="mmm-strip-img"
            />
            <div className="mmm-trust-contact">
              <p className="mmm-contact-line">
                Volejte kdykoli přes den — poradíme i bez objednání.
              </p>
              <a className="mmm-btn" href="tel:+420222233363">
                Zavolat +420 222 233 363
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
