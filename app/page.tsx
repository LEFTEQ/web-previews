import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSH Stav s.r.o. — rekonstrukce, průmyslové podlahy, sanace | Olomouc",
  description:
    "Stavební firma z Olomouce-Holice od roku 1997. Kompletní rekonstrukce budov, lité epoxidové průmyslové podlahy, sanace vlhkého zdiva a železobetonových konstrukcí. Cenová nabídka zdarma.",
  openGraph: {
    title: "HSH Stav s.r.o. — stavební práce v Olomouci od roku 1997",
    description:
      "Rekonstrukce, průmyslové podlahy, sanace vlhkého zdiva a ŽB konstrukcí. Certifikace ISO 9001 a 14001. Olomouc a okolí.",
    images: ["/hero.webp"],
    type: "website",
    locale: "cs_CZ",
  },
};

const sluzby = [
  {
    kod: "REK",
    nazev: "Kompletní rekonstrukce budov",
    popis:
      "Obnova průmyslových i občanských staveb, opravy fasád a zateplení kontaktním způsobem. Vezmeme dům od základů po střechu včetně řemesel — voda, topení, elektro, sádrokartony i střechy.",
    body: ["Opravy a zateplení fasád", "Kompletní dodávka řemesel", "Střechy a klempířina"],
  },
  {
    kod: "POD",
    nazev: "Průmyslové podlahy",
    popis:
      "Lité epoxidové stěrky a nátěry odolné chemikáliím i ropným produktům. Opravíme výtluky ve stávající podlaze i položíme antistatický systém do haly na klíč.",
    body: ["Epoxidové stěrky a nátěry", "Antistatické systémy", "Opravy výtluků"],
  },
  {
    kod: "ŽB",
    nazev: "Sanace a ochrana ŽB konstrukcí",
    popis:
      "Reprofilace železobetonu speciálními maltami, ochrana výztuže a uzavírací nátěry — i s atestem pro styk s pitnou vodou. Utěsňujeme spáry, praskliny a šachty.",
    body: ["Reprofilace a ochrana výztuže", "Nátěry pro pitnou vodu", "Dodatečná izolace šachet"],
  },
  {
    kod: "VLH",
    nazev: "Sanace vlhkého zdiva",
    popis:
      "Sušící mikroporézní omítky Hydroment a románská omítka Kemasan 590 pro historické budovy. Injektáž zdiva vytvoří bariéru proti vzlínající vlhkosti. Sanační materiály i prodáme.",
    body: ["Injektáž proti vlhkosti", "Omítky pro památky", "Prodej sanačních materiálů"],
  },
];

const realizace = [
  { misto: "Olomouc", nazev: "Vikárka" },
  { misto: "Olomouc", nazev: "Moravské divadlo" },
  { misto: "Uničov", nazev: "Muzeum vězeňství" },
  { misto: "Přerov", nazev: "Gymnázium" },
  { misto: "Bělotín–Nový Jičín", nazev: "Sanace tří mostů" },
  { misto: "Tabulový vrch", nazev: "Oprava vodojemu, SMV a.s." },
];

export default function Page() {
  return (
    <main className="hsh">
      <header className="hsh-topbar">
        <a className="hsh-wordmark" href="#" aria-label="HSH Stav, domů">
          <span className="hsh-wordmark__hsh">HSH</span>
          <span className="hsh-wordmark__stav">Stav</span>
          <span className="hsh-wordmark__year">od&nbsp;1997</span>
        </a>
        <a className="hsh-topbar__tel" href="tel:+420585150548">
          +420&nbsp;585&nbsp;150&nbsp;548
        </a>
      </header>

      <section className="hsh-hero" aria-labelledby="hero-title">
        <div className="hsh-hero__media">
          <img
            src="/hero.webp"
            alt="Rozestavěná budova s lešením — stavba HSH Stav v Olomouci"
            className="hsh-hero__img"
          />
          <div className="hsh-hero__scrim" aria-hidden="true" />
        </div>

        <div className="hsh-hero__grid" aria-hidden="true">
          <span>OL</span>
          <span>779&nbsp;00</span>
          <span>ISO&nbsp;9001</span>
          <span>ISO&nbsp;14001</span>
        </div>

        <div className="hsh-hero__content">
          <p className="hsh-eyebrow">Stavební firma · Olomouc – Holice</p>
          <h1 id="hero-title" className="hsh-hero__title">
            Postavíme, opravíme
            <br />
            a&nbsp;<span className="hsh-underline">vysušíme</span> to,
            <br />
            co jiní odepsali.
          </h1>
          <p className="hsh-hero__lede">
            Rekonstrukce budov, lité průmyslové podlahy a&nbsp;sanace vlhkého zdiva
            i&nbsp;železobetonu. Od&nbsp;výtluku v&nbsp;hale po&nbsp;historickou fasádu
            v&nbsp;Olomouci a&nbsp;okolí.
          </p>
          <div className="hsh-hero__actions">
            <a className="hsh-btn hsh-btn--primary" href="tel:+420585150548">
              Zavolat a domluvit prohlídku
            </a>
            <a className="hsh-btn hsh-btn--ghost" href="#sluzby">
              Co umíme
            </a>
          </div>
          <p className="hsh-hero__note">Cenovou nabídku uděláme zdarma.</p>
        </div>
      </section>

      <section className="hsh-services" id="sluzby" aria-labelledby="sluzby-title">
        <div className="hsh-section-head">
          <p className="hsh-eyebrow hsh-eyebrow--dark">Čtyři obory, jedna parta</p>
          <h2 id="sluzby-title" className="hsh-h2">Naše služby</h2>
          <p className="hsh-section-lede">
            Zvládneme dům komplet — nebo jen tu jednu věc, kterou nikdo jiný nechce
            řešit: mokrou zeď, popraskaný beton, olejem prosáklou podlahu.
          </p>
        </div>

        <div className="hsh-services__banner">
          <img
            src="/section-1.webp"
            alt="Detail lité epoxidové průmyslové podlahy a stavebního materiálu"
            className="hsh-services__img"
          />
        </div>

        <ol className="hsh-cards">
          {sluzby.map((s) => (
            <li className="hsh-card" key={s.kod}>
              <span className="hsh-card__code" aria-hidden="true">
                {s.kod}
              </span>
              <h3 className="hsh-card__title">{s.nazev}</h3>
              <p className="hsh-card__text">{s.popis}</p>
              <ul className="hsh-card__list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="hsh-about" id="o-firme" aria-labelledby="about-title">
        <div className="hsh-about__media">
          <img
            src="/section-2.webp"
            alt="Sanace zdiva a rekonstrukce historické stavby v Olomouci"
            className="hsh-about__img"
          />
        </div>

        <div className="hsh-about__body">
          <p className="hsh-eyebrow hsh-eyebrow--dark">O firmě</p>
          <h2 id="about-title" className="hsh-h2">
            V oboru od roku 1990,
            <br />s razítkem od roku 1997.
          </h2>
          <p className="hsh-about__text">
            HSH Stav s.r.o. založili v&nbsp;roce 1997 lidé, kteří ve&nbsp;stavebnictví
            dělali už jako sdružení od&nbsp;roku 1990. Za&nbsp;ta léta prošla našimi
            rukama divadla, muzea, mosty i&nbsp;vodojemy — a&nbsp;pořád nás baví
            odvádět práci, ke&nbsp;které se dá vrátit a&nbsp;ukázat ji.
          </p>
          <p className="hsh-about__text">
            Máme certifikát řízení jakosti a&nbsp;životního prostředí podle
            ČSN&nbsp;EN&nbsp;ISO&nbsp;9001 a&nbsp;ČSN&nbsp;EN&nbsp;ISO&nbsp;14001 —
            u&nbsp;nás to není samolepka na&nbsp;autě, ale způsob, jak vedeme každou
            zakázku.
          </p>

          <p className="hsh-about__label">Kde už jsme pracovali</p>
          <ul className="hsh-projects">
            {realizace.map((r) => (
              <li className="hsh-projects__item" key={r.nazev}>
                <span className="hsh-projects__name">{r.nazev}</span>
                <span className="hsh-projects__place">{r.misto}</span>
              </li>
            ))}
          </ul>

          <dl className="hsh-facts">
            <div className="hsh-fact">
              <dt>Jednatelé</dt>
              <dd>Zdeněk Suchý · Ladislav Hwozdecki · David Hildebrandt</dd>
            </div>
            <div className="hsh-fact">
              <dt>Sídlo</dt>
              <dd>Krokova 766/2c, 779 00 Olomouc – Holice</dd>
            </div>
            <div className="hsh-fact">
              <dt>Napište nám</dt>
              <dd>
                <a href="mailto:hshstav@hshstav.cz">hshstav@hshstav.cz</a>
              </dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
