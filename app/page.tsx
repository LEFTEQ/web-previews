import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nářadí Veselý Brno — půjčovna, servis a prodej elektronářadí",
  description:
    "Brněnská prodejna elektronářadí s vlastní půjčovnou a servisem. Přes 100 značek, poradíme profíkům i kutilům. Po–Pá 7–17, So 8–12, parkování u dveří.",
  openGraph: {
    title: "Nářadí Veselý Brno — půjčovna, servis a prodej",
    description:
      "Vyzkoušejte stroj dřív, než ho koupíte. Půjčovna, servis a poradna pod jednou střechou v Brně.",
    type: "website",
    locale: "cs_CZ",
    images: [{ url: "/hero.webp" }],
  },
};

const pujcovna = [
  {
    znacka: "MILWAUKEE",
    stroj: "Aku vrtací kladivo M18",
    detail: "Na příchytky, hmoždinky i betonové zdi.",
    cena: "od 290 Kč / den",
  },
  {
    znacka: "BOSCH",
    stroj: "Úhlová bruska 230 mm",
    detail: "Řezání dlažby, oceli a betonu na stavbě.",
    cena: "od 220 Kč / den",
  },
  {
    znacka: "MAKITA",
    stroj: "Ponorná pila s vodicí lištou",
    detail: "Přesné řezy do dřeva a laminátu bez třísek.",
    cena: "od 340 Kč / den",
  },
];

const duvody = [
  {
    cislo: "01",
    titul: "Nejdřív zkusit, pak koupit",
    text: "Nevíte, jestli se vám drahý stroj vyplatí? Půjčíte si ho na den, na víkend, na celou rekonstrukci. Když se rozhodnete koupit, půjčovné vám odečteme.",
  },
  {
    cislo: "02",
    titul: "Servis, který věci opraví",
    text: "Kotouč, uhlíky, ložisko i baterie — máme dílnu přímo na prodejně. Vezmeme do ruky nářadí od nás i od jinud a řekneme rovnou, jestli se oprava vyplatí.",
  },
  {
    cislo: "03",
    titul: "Poradí vám člověk od fochu",
    text: "Naši lidé s nářadím sami pracovali. Poznají rozdíl mezi profi strojem a hračkou a doporučí to, co skutečně unese vaši práci — ne to nejdražší.",
  },
];

const reference = [
  {
    text: "Určitě bych si znovu objednal, když budu něco potřebovat. Spokojenost, děkuji.",
    kdo: "Ověřený zákazník",
    datum: "červen 2025",
  },
  {
    text: "Velký výběr, dobré ceny, vše okamžitě vyřízeno.",
    kdo: "Ověřený zákazník",
    datum: "červen 2025",
  },
  {
    text: "Rychlé dodání, dobrá cena, díky.",
    kdo: "Ověřený zákazník",
    datum: "květen 2025",
  },
];

export default function Page() {
  return (
    <main className="nv">
      <header className="nv-top">
        <a className="nv-logo" href="#" aria-label="Nářadí Veselý Brno — domů">
          <span className="nv-logo-mark" aria-hidden="true">
            <span className="nv-logo-slot" />
          </span>
          <span className="nv-logo-word">
            Nářadí <em>Veselý</em>
            <span className="nv-logo-city">Brno</span>
          </span>
        </a>
        <nav className="nv-nav" aria-label="Hlavní">
          <a href="#pujcovna">Půjčovna</a>
          <a href="#servis">Servis</a>
          <a href="#prodejna">Prodejna</a>
        </nav>
        <a className="nv-call" href="tel:+420548422555">
          <span className="nv-call-dot" aria-hidden="true" />
          548 422 555
        </a>
      </header>

      <section className="nv-hero" aria-labelledby="nv-hero-h">
        <div className="nv-hero-media">
          <img
            src="/hero.webp"
            alt="Regály plné elektronářadí a příslušenství na prodejně Nářadí Veselý v Brně"
            className="nv-hero-img"
            width={1600}
            height={1100}
          />
          <div className="nv-hero-scrim" aria-hidden="true" />
        </div>

        <div className="nv-hero-body">
          <p className="nv-eyebrow">
            <span className="nv-eyebrow-tick">Brno</span>
            Prodejna · Půjčovna · Servis
          </p>
          <h1 id="nv-hero-h">
            Nářadí je náš svět.
            <span className="nv-hero-accent">Rádi do něj zasvětíme i vás.</span>
          </h1>
          <p className="nv-hero-lead">
            Profi stroj si u nás nejdřív půjčíte a vyzkoušíte, teprve pak
            řešíte, jestli ho koupit. K tomu vlastní servisní dílna a lidé,
            kteří s nářadím opravdu pracovali. Vybereme s vámi to pravé.
          </p>
          <div className="nv-hero-cta">
            <a className="nv-btn nv-btn-primary" href="#pujcovna">
              Půjčit si stroj
            </a>
            <a className="nv-btn nv-btn-ghost" href="tel:+420548422555">
              Zavolat na prodejnu
            </a>
          </div>
          <dl className="nv-hero-facts">
            <div>
              <dt>Značek v nabídce</dt>
              <dd>100+</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 7–17</dd>
            </div>
            <div>
              <dt>U prodejny</dt>
              <dd>Parkování &amp; MHD</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="nv-sec nv-pujcovna" id="pujcovna" aria-labelledby="nv-p-h">
        <div className="nv-sec-head">
          <p className="nv-sec-kicker">Půjčovna</p>
          <h2 id="nv-p-h">Než sáhnete po peněžence, sáhněte po stroji.</h2>
          <p className="nv-sec-intro">
            Vybrané profi stroje si odvezete na den nebo na celou
            rekonstrukci. Rozhodnete-li se pak koupit, půjčovné odečteme
            z ceny. Tady jsou tři, které lidé chtějí nejčastěji.
          </p>
        </div>

        <ul className="nv-cards">
          {pujcovna.map((p) => (
            <li className="nv-card" key={p.stroj}>
              <span className="nv-card-brand">{p.znacka}</span>
              <h3 className="nv-card-title">{p.stroj}</h3>
              <p className="nv-card-detail">{p.detail}</p>
              <p className="nv-card-price">{p.cena}</p>
              <a className="nv-card-link" href="tel:+420548422565">
                Rezervovat v půjčovně →
              </a>
            </li>
          ))}
        </ul>

        <div className="nv-strip">
          <img
            src="/section-1.webp"
            alt="Detail profesionálního elektronářadí připraveného k zapůjčení"
            className="nv-strip-img"
            width={1400}
            height={800}
          />
          <div className="nv-strip-note">
            <p className="nv-sec-kicker">Půjčovna Brno</p>
            <p>
              Rezervace na <a href="tel:+420548422565">548 422 565</a> nebo{" "}
              <a href="mailto:pujcovna@naradi-vesely.cz">
                pujcovna@naradi-vesely.cz
              </a>
              . Stroj připravíme na vámi zvolený den.
            </p>
          </div>
        </div>
      </section>

      <section className="nv-sec nv-oduvod" id="servis" aria-labelledby="nv-o-h">
        <div className="nv-oduvod-grid">
          <div className="nv-oduvod-copy">
            <p className="nv-sec-kicker">Proč zrovna k nám</p>
            <h2 id="nv-o-h">
              Průkopníci prodeje elektronářadí v Česku.
            </h2>
            <p className="nv-sec-intro">
              Důvěřují nám profíci i hobby kutilové. Poradíme s výběrem,
              ukážeme, jak se stroj používá, a když se pokazí, opravíme ho
              na místě.
            </p>

            <ol className="nv-reasons">
              {duvody.map((d) => (
                <li key={d.cislo}>
                  <span className="nv-reason-num">{d.cislo}</span>
                  <div>
                    <h3>{d.titul}</h3>
                    <p>{d.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <aside className="nv-oduvod-side" id="prodejna">
            <img
              src="/section-2.webp"
              alt="Prodejna Nářadí Veselý v Brně s poradcem u pultu"
              className="nv-side-img"
              width={900}
              height={1100}
            />
            <div className="nv-quotes">
              {reference.map((r) => (
                <figure className="nv-quote" key={r.text}>
                  <blockquote>„{r.text}“</blockquote>
                  <figcaption>
                    {r.kdo} · <span>{r.datum}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
            <div className="nv-visit">
              <p className="nv-visit-h">Stavte se na prodejnu</p>
              <p>Po–Pá 7–17 · So 8–12 · parkování u dveří</p>
              <a className="nv-btn nv-btn-primary" href="tel:+420548422555">
                Zavolat: 548 422 555
              </a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
