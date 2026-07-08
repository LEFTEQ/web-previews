import type { CSSProperties } from "react";

export const metadata = {
  title: "Dobrá Uklízečka — mytí oken Olomouc",
  description:
    "Mytí oken, výloh a žaluzií v Olomouci. Čisté sklo bez šmouh, teleskopická technika i lezecký přístup. Domluvte si termín.",
};

type Sluzba = {
  cislo: string;
  nazev: string;
  popis: string;
  detail: string;
};

const sluzby: Sluzba[] = [
  {
    cislo: "01",
    nazev: "Okna bytů a domů",
    popis:
      "Rámy, sklo i parapety. Umyjeme i ta okna, na která zvenku nedosáhnete — od panelákových lodžií po půdní vikýře.",
    detail: "od 25 Kč / m²",
  },
  {
    cislo: "02",
    nazev: "Výlohy a prosklené vstupy",
    popis:
      "Pravidelné mytí výloh na Horním i Dolním náměstí. Přijedeme brzy ráno, než otevřete zákazníkům.",
    detail: "pravidelně i jednorázově",
  },
  {
    cislo: "03",
    nazev: "Žaluzie a rolety",
    popis:
      "Lamela po lamele. Sundáme, umyjeme, vrátíme zpět — bez zaschlých kapek a bez poškrábaných plastů.",
    detail: "venkovní i vnitřní",
  },
  {
    cislo: "04",
    nazev: "Výškové a nedostupné plochy",
    popis:
      "Teleskopická tyč s čistou vodou do 12 metrů, u vyšších budov lezecký přístup s jištěním. Vše pojištěno.",
    detail: "prosklené fasády, atria",
  },
];

const reference = [
  {
    text: "Nechávám si pravidelně umývat okna a jsem s jejich prací velice spokojena. Mohu jen doporučit.",
    jmeno: "Eva Kopecká",
  },
  {
    text: "Skvělá komunikace, rychlá domluva a perfektně odvedená práce. Vždy naprostá spokojenost.",
    jmeno: "Barbora Mertová",
  },
  {
    text: "Kvalitní práce, příjemné chování, všem vřele doporučuji.",
    jmeno: "Pavlína Lugrová",
  },
];

const duvody = [
  {
    st: "Bez šmouh, nebo znovu",
    text: "Sklo kontrolujeme proti světlu. Když najdete šmouhu, vrátíme se a doděláme to.",
  },
  {
    st: "Pojištěno do 5 mil. Kč",
    text: "Pracujeme ve výškách i nad hlavami kolemjdoucích. Kdyby se něco stalo, jste krytí.",
  },
  {
    st: "Přijedeme po Olomouci",
    text: "Slavonín, Nová Ulice, Neředín, centrum i okolní obce. Termín obvykle do týdne.",
  },
];

export default function Page() {
  return (
    <main className="uk">
      <header className="uk-top">
        <a className="uk-brand" href="#" aria-label="Dobrá Uklízečka, domů">
          <span className="uk-brand-mark" aria-hidden="true">
            <span className="uk-squeegee" />
          </span>
          <span className="uk-brand-word">
            Dobrá <em>Uklízečka</em>
          </span>
        </a>
        <nav className="uk-nav" aria-label="Hlavní">
          <a href="#sluzby">Mytí oken</a>
          <a href="#duvera">Reference</a>
          <a className="uk-nav-tel" href="tel:+420602551834">
            602 551 834
          </a>
        </nav>
      </header>

      <section className="uk-hero" aria-labelledby="hero-nadpis">
        <div className="uk-hero-copy">
          <p className="uk-eyebrow">Mytí oken v Olomouci · od roku 2001</p>
          <h1 id="hero-nadpis">
            Díváte se ven
            <span className="uk-hero-line">
              <span className="uk-swipe" aria-hidden="true" />
              přes naše sklo.
            </span>
          </h1>
          <p className="uk-hero-lead">
            Umyjeme okna, výlohy i žaluzie tak, že sklo skoro zmizí. Stěrka,
            čistá voda a světlo proti oknu — žádné šmouhy, žádné kapky na
            parapetu.
          </p>
          <div className="uk-hero-cta">
            <a className="uk-btn uk-btn-primary" href="tel:+420602551834">
              Zavolat 602 551 834
            </a>
            <a className="uk-btn uk-btn-ghost" href="#sluzby">
              Co umyjeme
            </a>
          </div>
          <dl className="uk-hero-facts">
            <div>
              <dt>Dosah</dt>
              <dd>až 12 m ze země</dd>
            </div>
            <div>
              <dt>Termín</dt>
              <dd>obvykle do týdne</dd>
            </div>
            <div>
              <dt>Kde</dt>
              <dd>Olomouc a okolí</dd>
            </div>
          </dl>
        </div>
        <figure className="uk-hero-media">
          <img
            src="/hero.webp"
            alt="Umyté okno s čistým sklem a odrazem oblohy"
            width={900}
            height={1100}
          />
          <figcaption className="uk-hero-badge">
            <span className="uk-hero-badge-big">0</span>
            <span className="uk-hero-badge-small">šmouh po utření</span>
          </figcaption>
        </figure>
      </section>

      <section className="uk-sluzby" id="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="uk-sec-head">
          <p className="uk-eyebrow">Co pro vás umyjeme</p>
          <h2 id="sluzby-nadpis">Od panelákového okna po prosklenou fasádu</h2>
          <p className="uk-sec-lead">
            Specializujeme se na sklo. Řekněte nám, kolik oken máte a v jakém
            patře — spočítáme cenu a domluvíme termín.
          </p>
        </div>
        <ol className="uk-grid">
          {sluzby.map((s) => (
            <li className="uk-card" key={s.cislo}>
              <span className="uk-card-num" aria-hidden="true">
                {s.cislo}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="uk-card-tag">{s.detail}</span>
            </li>
          ))}
        </ol>
        <figure className="uk-strip">
          <img
            src="/section-1.webp"
            alt="Mytí velké prosklené plochy stěrkou"
            width={1400}
            height={700}
          />
        </figure>
      </section>

      <section className="uk-duvera" id="duvera" aria-labelledby="duvera-nadpis">
        <div className="uk-duvera-inner">
          <div className="uk-duvera-copy">
            <p className="uk-eyebrow">Proč zrovna my</p>
            <h2 id="duvera-nadpis">
              Olomoucká firma, která bere okna vážně od roku 2001
            </h2>
            <p className="uk-sec-lead">
              Jsme malý sehraný tým. Přijedeme včas, obujeme návleky, zakryjeme
              parapety a po sobě uklidíme. Nejste první, komu myjeme okna
              pravidelně.
            </p>
            <ul className="uk-duvody">
              {duvody.map((d) => (
                <li key={d.st}>
                  <strong>{d.st}</strong>
                  <span>{d.text}</span>
                </li>
              ))}
            </ul>
          </div>
          <figure className="uk-duvera-media">
            <img
              src="/section-2.webp"
              alt="Pracovnice firmy Dobrá Uklízečka při mytí okna"
              width={900}
              height={1000}
            />
          </figure>
        </div>

        <ul className="uk-ref" aria-label="Reference zákazníků">
          {reference.map((r) => (
            <li key={r.jmeno} className="uk-ref-item">
              <span className="uk-quote" aria-hidden="true">
                &#8220;
              </span>
              <p>{r.text}</p>
              <cite>{r.jmeno}</cite>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
