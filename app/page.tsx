import type { CSSProperties } from "react";

export const metadata = {
  title: "Ing. Romana Dlouhá — daňová poradkyně, Liberec",
  description:
    "Daňová poradkyně (ev. č. 2114) v Liberci. Daňová přiznání, optimalizace, zastupování před úřady i vedení účetnictví — s odkladem přiznání až o tři měsíce.",
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "§ 1",
    nazev: "Daňová přiznání",
    popis:
      "Zpracuji přiznání k dani z příjmů, DPH i silniční dani. Jako poradkyně vám navíc posunu termín podání i platby o tři měsíce.",
  },
  {
    cislo: "§ 2",
    nazev: "Daňová optimalizace",
    popis:
      "Projdu vaše čísla ještě před koncem roku a najdu, kde legálně platíte víc, než musíte — od odpisů po volbu daňového režimu.",
  },
  {
    cislo: "§ 3",
    nazev: "Zastupování před úřady",
    popis:
      "Na finanční úřad ani na kontrolu nemusíte. Jednám za vás na základě plné moci a nesu za podání odbornou odpovědnost.",
  },
  {
    cislo: "§ 4",
    nazev: "Vedení účetnictví",
    popis:
      "Zajistím zpracování účetnictví, přechod z daňové evidence na podvojné i rekonstrukci, když se papíry nakupily.",
  },
  {
    cislo: "§ 5",
    nazev: "Finanční analýza",
    popis:
      "Rozklíčuji hospodaření firmy do přehledu, kterému budete rozumět — a podle kterého se dá rozhodovat.",
  },
  {
    cislo: "§ 6",
    nazev: "Hotline pro klienty",
    popis:
      "Přišel dotaz z úřadu nebo pochybnost nad fakturou? Napište nebo zavolejte — na dotazy klientů reaguji tentýž den.",
  },
];

export default function Page() {
  return (
    <main className="rd-main">
      <header className="rd-topbar">
        <a className="rd-wordmark" href="#" aria-label="Ing. Romana Dlouhá, daňová poradkyně">
          <span className="rd-wordmark__name">Romana Dlouhá</span>
          <span className="rd-wordmark__role">daňová poradkyně · ev. č. 2114</span>
        </a>
        <a className="rd-topbar__phone" href="tel:+420608069406">
          608&nbsp;069&nbsp;406
        </a>
      </header>

      <section className="rd-hero" aria-labelledby="rd-hero-title">
        <div className="rd-hero__frame">
          <img
            className="rd-hero__img"
            src="/hero.webp"
            alt="Pracovní stůl daňové poradkyně s podklady k daňovému přiznání"
            width={1600}
            height={1100}
            loading="eager"
            decoding="async"
          />
        </div>

        <div className="rd-hero__panel">
          <p className="rd-hero__eyebrow">Daňový poradce · Liberec</p>
          <h1 id="rd-hero-title" className="rd-hero__title">
            Přiznání podám<br />
            <span className="rd-hero__accent">až o tři měsíce</span> později.
          </h1>
          <p className="rd-hero__lead">
            Odklad termínu není trik — je to zákonná výhoda daňové poradkyně.
            Získáte čas i klid a papíry předáte mně.
          </p>
          <div className="rd-hero__actions">
            <a className="rd-btn rd-btn--solid" href="tel:+420608069406">
              Zavolat 608&nbsp;069&nbsp;406
            </a>
            <a className="rd-btn rd-btn--ghost" href="mailto:dane@romana-dlouha.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <dl className="rd-hero__meta">
          <div className="rd-hero__metaItem">
            <dt>Termín přiznání</dt>
            <dd>do 1. 7.</dd>
          </div>
          <div className="rd-hero__metaItem">
            <dt>Evidenční číslo</dt>
            <dd>2114</dd>
          </div>
          <div className="rd-hero__metaItem">
            <dt>Kde</dt>
            <dd>Liberec 3</dd>
          </div>
        </dl>
      </section>

      <section className="rd-services" aria-labelledby="rd-services-title">
        <div className="rd-services__head">
          <p className="rd-eyebrow">Co pro vás udělám</p>
          <h2 id="rd-services-title" className="rd-section-title">
            Šest paragrafů, o které se nemusíte starat vy
          </h2>
          <p className="rd-section-lead">
            Od jednoho přiznání po celoroční vedení účetnictví. Vyberte, co
            potřebujete teď — zbytek přidáme, až to bude dávat smysl.
          </p>
        </div>

        <ol className="rd-services__grid">
          {sluzby.map((s) => (
            <li key={s.cislo} className="rd-card">
              <span className="rd-card__num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3 className="rd-card__title">{s.nazev}</h3>
              <p className="rd-card__text">{s.popis}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="rd-about" aria-labelledby="rd-about-title">
        <div className="rd-about__media">
          <img
            className="rd-about__img"
            src="/section-1.webp"
            alt="Ing. Romana Dlouhá při konzultaci s klientem nad daňovými podklady"
            width={1200}
            height={1400}
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="rd-about__body">
          <p className="rd-eyebrow">O mně</p>
          <h2 id="rd-about-title" className="rd-section-title">
            Jedna poradkyně, které dáte plnou moc — a máte pokoj
          </h2>
          <p className="rd-about__text">
            Jmenuji se Romana Dlouhá a jsem zapsaná daňová poradkyně v Komoře
            daňových poradců pod evidenčním číslem 2114. To znamená, že za
            každé podání ručím a mohu vás zastupovat před finančním úřadem na
            plnou moc.
          </p>
          <p className="rd-about__text">
            V Liberci pracuji s živnostníky, malými firmami i lidmi, kteří
            řeší daně jednou za rok a chtějí to mít z krku. Domluvíme se česky
            a bez zbytečných paragrafů — ty nechte na mně.
          </p>

          <ul className="rd-facts">
            <li className="rd-fact">
              <span className="rd-fact__k">Adresa kanceláře</span>
              <span className="rd-fact__v">Americká 685/68, Liberec&nbsp;3</span>
            </li>
            <li className="rd-fact">
              <span className="rd-fact__k">Telefon</span>
              <span className="rd-fact__v">
                <a href="tel:+420608069406">608&nbsp;069&nbsp;406</a>
              </span>
            </li>
            <li className="rd-fact">
              <span className="rd-fact__k">E-mail</span>
              <span className="rd-fact__v">
                <a href="mailto:dane@romana-dlouha.cz">dane@romana-dlouha.cz</a>
              </span>
            </li>
            <li className="rd-fact">
              <span className="rd-fact__k">IČ / DIČ</span>
              <span className="rd-fact__v">65629434 · CZ6951302567</span>
            </li>
          </ul>

          <figure className="rd-quote">
            <img
              className="rd-quote__img"
              src="/section-2.webp"
              alt="Detail razítka a podpisu daňové poradkyně na dokumentu"
              width={1200}
              height={800}
              loading="lazy"
              decoding="async"
            />
            <figcaption className="rd-quote__cap">
              Podepsané přiznání s razítkem poradce — vaše pojistka, že je vše
              podle zákona.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}

export const dynamic = "force-static";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _unused: CSSProperties = {};
