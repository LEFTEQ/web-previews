export const metadata = {
  title: "JR Stomatologie — Dentální hygiena Ústí nad Labem",
  description:
    "Profesionální dentální hygiena v Ústí nad Labem. Šetrné odstranění zubního kamene, airflow, nácvik techniky čištění a plán péče na míru. Objednejte se k hygienistce.",
  openGraph: {
    title: "JR Stomatologie — Dentální hygiena Ústí nad Labem",
    description:
      "Čisté zuby a zdravé dásně bez bolesti. Dentální hygiena v Ústí nad Labem — airflow, ultrazvuk, plán péče na míru.",
    type: "website",
    locale: "cs_CZ",
  },
};

const kroky = [
  {
    cislo: "1",
    nazev: "Vstupní vyšetření dásní",
    trvani: "prvních 15 minut",
    popis:
      "Hygienistka změří stav dásní parodontální sondou a zmapuje místa, kde se drží plak. Uvidíte to s námi na intraorální kameře — víte přesně, co se bude dít a proč.",
  },
  {
    cislo: "2",
    nazev: "Odstranění kamene a pigmentů",
    trvani: "jádro návštěvy",
    popis:
      "Ultrazvukem šetrně sundáme zubní kámen, airflow s jemným práškem odstraní pigmenty od kávy, čaje i kouření. Pracujeme pomalu a bez bolesti — citlivá místa řekneme dopředu.",
  },
  {
    cislo: "3",
    nazev: "Nácvik čištění na vlastních zubech",
    trvani: "posledních 20 minut",
    popis:
      "Ukážeme vám techniku přímo ve vašich ústech: správný sklon kartáčku, mezizubní kartáčky ve správné velikosti pro každou mezeru. Odcházíte s konkrétním plánem, ne s letáčkem.",
  },
];

const zasady = [
  {
    titul: "60 minut jen pro vás",
    text: "Na první návštěvu si vyhrazujeme celou hodinu. Nespěcháme — kvalitní hygiena se nedá stihnout za dvacet minut.",
  },
  {
    titul: "Bez bolesti, nebo řekneme proč",
    text: "U citlivých krčků nabídneme znecitlivění gelem. Když něco může být nepříjemné, dozvíte se to předem, ne během zákroku.",
  },
  {
    titul: "Recall, který si pohlídáme my",
    text: "Interval kontrol nastavíme podle stavu vašich dásní — obvykle po 6 měsících. Připomeneme se sami, vy nemusíte hlídat kalendář.",
  },
];

export default function Page() {
  return (
    <main className="jr">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="JR Stomatologie">
            <span className="wordmark-jr">JR</span>
            <span className="wordmark-rule" aria-hidden="true"></span>
            <span className="wordmark-sub">
              stomatologie
              <em>dentální hygiena</em>
            </span>
          </div>
          <p className="hero-loc">Ústí nad Labem</p>
        </div>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="hero-eyebrow">Ordinace dentální hygieny</p>
            <h1>
              Zdravé dásně jsou
              <br />
              <span className="hero-accent">půlka úsměvu.</span>
              <br />
              Tu druhou vás naučíme.
            </h1>
            <p className="hero-lead">
              Hodina u dentální hygienistky, po které odcházíte s čistými zuby,
              klidnými dásněmi — a hlavně s technikou čištění, která vám
              vydrží. V Ústí nad Labem, bez bolesti a bez poučování.
            </p>
            <div className="hero-facts" role="list">
              <div role="listitem">
                <strong>60 min</strong>
                <span>vstupní návštěva</span>
              </div>
              <div role="listitem">
                <strong>Airflow</strong>
                <span>šetrné pískování</span>
              </div>
              <div role="listitem">
                <strong>6 měsíců</strong>
                <span>běžný recall</span>
              </div>
            </div>
          </div>
          <figure className="hero-media">
            <img
              src="/hero.webp"
              alt="Ordinace dentální hygieny JR Stomatologie v Ústí nad Labem — křeslo a nástroje připravené k ošetření"
            />
            <figcaption>Ordinace na křesle nekončí — končí u vašeho kartáčku.</figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SEKCE: PRŮBĚH NÁVŠTĚVY ===== */}
      <section className="prubeh" aria-labelledby="prubeh-h">
        <div className="section-head">
          <p className="eyebrow">Jak probíhá hodina u nás</p>
          <h2 id="prubeh-h">Tři kroky, žádné překvapení</h2>
          <p className="section-lead">
            Návštěva dentální hygieny má u nás vždy stejnou stavbu. Víte, co
            přijde, kolik to zabere času a co si z toho odnesete domů.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li key={k.cislo} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <div className="krok-body">
                <p className="krok-trvani">{k.trvani}</p>
                <h3>{k.nazev}</h3>
                <p>{k.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="prubeh-media">
          <img
            src="/section-1.webp"
            alt="Dentální hygienistka při šetrném ošetření airflow — odstranění pigmentů z kávy a čaje"
          />
          <figcaption>
            Airflow: jemný prášek a voda místo škrábání. Pigmenty od kávy zmizí,
            sklovina zůstane.
          </figcaption>
        </figure>
      </section>

      {/* ===== SEKCE: PROČ K NÁM ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-grid">
          <figure className="duvera-media">
            <img
              src="/section-2.webp"
              alt="Mezizubní kartáčky a pomůcky, které pacient dostává s plánem domácí péče"
            />
            <figcaption>
              Každá mezera má svou velikost kartáčku. Vybereme je s vámi, ne za vás.
            </figcaption>
          </figure>

          <div className="duvera-copy">
            <p className="eyebrow">Proč pacienti zůstávají</p>
            <h2 id="duvera-h">Hygiena, která drží déle než do první kávy</h2>
            <p className="section-lead">
              Vyčistit zuby umí každá ordinace. My chceme, aby vám čisté
              vydržely — proto většinu druhé návštěvy poznáte podle toho, že
              už skoro není co dočišťovat.
            </p>

            <ul className="zasady">
              {zasady.map((z) => (
                <li key={z.titul}>
                  <h3>{z.titul}</h3>
                  <p>{z.text}</p>
                </li>
              ))}
            </ul>

            <blockquote className="reference">
              <p>
                „Poprvé mi někdo ukázal, jak mám doopravdy čistit — přímo na
                mých zubech, ne na modelu. Krvácení dásní zmizelo do měsíce.“
              </p>
              <cite>— pacientka z Ústí nad Labem, na hygieně od roku 2022</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
