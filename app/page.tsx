import type { CSSProperties } from "react";

export const metadata = {
  title: "TechnoStav CZ — fotovoltaika na míru | České Budějovice",
  description:
    "Prodej a montáž fotovoltaických systémů v Českých Budějovicích. Návrh, instalace i servis na klíč s měniči SOLAX. Zavolejte 770 117 373.",
  openGraph: {
    title: "TechnoStav CZ — fotovoltaika na míru",
    description:
      "Návrh, montáž a servis fotovoltaiky v Českých Budějovicích. Panely, měniče SOLAX a baterie na klíč.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp", width: 1200, height: 630, alt: "Fotovoltaická instalace TechnoStav CZ" }],
  },
};

type Krok = { c: string; nadpis: string; text: string };

const kroky: Krok[] = [
  {
    c: "01",
    nadpis: "Výjezd a zaměření",
    text: "Přijedeme k vám, zaměříme střechu, zjistíme spotřebu a orientaci. Bez zaměření žádný návrh nedává smysl.",
  },
  {
    c: "02",
    nadpis: "Návrh a výpočet",
    text: "Nakreslíme rozložení panelů, spočítáme výrobu na střeše i návratnost. Vidíte reálná čísla, ne odhad z tabulky.",
  },
  {
    c: "03",
    nadpis: "Montáž na klíč",
    text: "Konstrukce, panely, měnič SOLAX i baterie osadí náš tým. Elektro i připojení k distribuci řešíme za vás.",
  },
  {
    c: "04",
    nadpis: "Servis a dohled",
    text: "Po spuštění sledujeme výrobu na dálku. Když něco klesne, ozveme se dřív než vy. Servis po celé jižní Čechy.",
  },
];

type Fakt = { cislo: string; popis: string };

const fakta: Fakt[] = [
  { cislo: "SOLAX", popis: "Měniče a baterie od výrobce zastoupeného v 80+ zemích" },
  { cislo: "J. Čechy", popis: "Montujeme v Budějovicích a okolí — jsme u vás rychle" },
  { cislo: "na klíč", popis: "Od zaměření přes elektro až po připojení k síti" },
];

export default function Page() {
  return (
    <main className="ts-main">
      <header className="ts-nav" aria-label="Hlavní">
        <a className="ts-logo" href="#" aria-label="TechnoStav CZ — domů">
          <span className="ts-logo-mark" aria-hidden="true">
            <span className="ts-cell" />
            <span className="ts-cell" />
            <span className="ts-cell" />
            <span className="ts-cell" />
          </span>
          <span className="ts-logo-txt">
            Techno<span className="ts-logo-accent">Stav</span>
            <em className="ts-logo-sub">CZ · fotovoltaika</em>
          </span>
        </a>
        <a className="ts-nav-call" href="tel:+420770117373">
          <span className="ts-nav-call-lbl">Zavolat</span>
          770 117 373
        </a>
      </header>

      <section className="ts-hero" aria-labelledby="ts-hero-nadpis">
        <div className="ts-hero-media">
          <img
            src="/hero.webp"
            alt="Fotovoltaické panely namontované na střeše rodinného domu"
            className="ts-hero-img"
            width={1600}
            height={1000}
          />
        </div>
        <div className="ts-hero-inner">
          <p className="ts-eyebrow">
            <span className="ts-eyebrow-dot" aria-hidden="true" />
            České Budějovice · jižní Čechy
          </p>
          <h1 id="ts-hero-nadpis" className="ts-hero-nadpis">
            Slunce ze střechy
            <br />
            <span className="ts-hero-em">až do zásuvky.</span>
          </h1>
          <p className="ts-hero-text">
            Navrhneme, namontujeme a spustíme vaši fotovoltaiku — panely, měnič
            SOLAX i baterii. Řešíme papíry, elektro i připojení k distribuci.
            Vy jen sledujete, jak klesá účet za elektřinu.
          </p>
          <div className="ts-hero-akce">
            <a className="ts-btn ts-btn-primary" href="tel:+420770117373">
              Zavolat 770 117 373
            </a>
            <a className="ts-btn ts-btn-ghost" href="mailto:info@technostav.cz">
              Napsat e-mail
            </a>
          </div>
        </div>
      </section>

      <section className="ts-postup" aria-labelledby="ts-postup-nadpis">
        <div className="ts-sec-head">
          <p className="ts-eyebrow">
            <span className="ts-eyebrow-dot" aria-hidden="true" />
            Jak to u nás běží
          </p>
          <h2 id="ts-postup-nadpis" className="ts-sec-nadpis">
            Čtyři kroky od střechy k první vyrobené kilowatthodině.
          </h2>
        </div>
        <ol className="ts-kroky">
          {kroky.map((k) => (
            <li key={k.c} className="ts-krok">
              <span className="ts-krok-c" aria-hidden="true">
                {k.c}
              </span>
              <div className="ts-krok-body">
                <h3 className="ts-krok-nadpis">{k.nadpis}</h3>
                <p className="ts-krok-text">{k.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <figure className="ts-figure">
          <img
            src="/section-1.webp"
            alt="Technik TechnoStav CZ při montáži solárního panelu"
            className="ts-figure-img"
            width={1400}
            height={900}
          />
          <figcaption className="ts-figure-cap">
            Montáž řeší náš vlastní tým — od konstrukce po zapojení měniče.
          </figcaption>
        </figure>
      </section>

      <section className="ts-duvera" aria-labelledby="ts-duvera-nadpis">
        <div className="ts-duvera-grid">
          <div className="ts-duvera-text">
            <p className="ts-eyebrow ts-eyebrow-light">
              <span className="ts-eyebrow-dot" aria-hidden="true" />
              Proč TechnoStav
            </p>
            <h2 id="ts-duvera-nadpis" className="ts-sec-nadpis ts-sec-nadpis-light">
              Inženýři a technici, ne prodejci na telefonu.
            </h2>
            <p className="ts-duvera-p">
              Fotovoltaiku nestavíme jako katalogovou sestavu. Každou střechu
              zaměříme a spočítáme zvlášť — jinak vypadá návrh na sedlovou
              střechu v Budějovicích a jinak na halu za městem. Stavíme na
              měničích a bateriích SOLAX, protože je známe a umíme je servisovat.
            </p>
            <blockquote className="ts-cit">
              „Věříme, že naše práce pomůže rozvoji obnovitelných zdrojů. Pojďme
              společně posílit zelenou budoucnost.“
              <cite className="ts-cit-autor">Ondřej Terber · jednatel</cite>
            </blockquote>
            <dl className="ts-fakta">
              {fakta.map((f) => (
                <div key={f.cislo} className="ts-fakt">
                  <dt className="ts-fakt-c">{f.cislo}</dt>
                  <dd className="ts-fakt-p">{f.popis}</dd>
                </div>
              ))}
            </dl>
          </div>
          <figure className="ts-duvera-media">
            <img
              src="/section-2.webp"
              alt="Návrh fotovoltaického projektu na pracovním stole"
              className="ts-duvera-img"
              width={1200}
              height={1400}
            />
          </figure>
        </div>
      </section>
    </main>
  );
}
