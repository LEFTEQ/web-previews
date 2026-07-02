const ordinace = [
  {
    cislo: "Volba 4",
    nazev: "Praktický zubní lékař",
    popis:
      "Preventivní prohlídky dvakrát ročně, ošetření kazu, výplně v barvě zubu. Termín prohlídky vám pohlídáme a připomeneme SMS zprávou.",
    detail: "Prohlídka do 30 minut",
  },
  {
    cislo: "Volba 3",
    nazev: "Dentální hygiena",
    popis:
      "Odstranění zubního kamene ultrazvukem, airflow pískování a nácvik čištění na vašem vlastním chrupu. Odcházíte s plánem, který zvládnete doma.",
    detail: "60 minut i s instruktáží",
  },
  {
    cislo: "Volba 2",
    nazev: "RTG a diagnostika",
    popis:
      "Panoramatický snímek zhotovíme přímo na klinice v den návštěvy. Snímek vidíte na obrazovce u křesla a lékař vám ho vysvětlí bod po bodu.",
    detail: "Snímek na počkání",
  },
  {
    cislo: "Volba 1",
    nazev: "Akutní bolest",
    popis:
      "Pro pacienty s bolestí držíme každý všední den ranní okna od 6:00. Zavolejte hned ráno — ten den vás ošetříme.",
    detail: "Ošetření tentýž den",
  },
];

const oteviraciDoba = [
  { den: "Pondělí", cas: "6:00 – 18:00" },
  { den: "Úterý", cas: "6:00 – 18:00" },
  { den: "Středa", cas: "6:00 – 18:00" },
  { den: "Čtvrtek", cas: "6:00 – 18:00" },
  { den: "Pátek", cas: "6:00 – 18:00" },
];

const zasady = [
  {
    nazev: "Nejdřív vysvětlíme, pak vrtáme",
    popis:
      "Před každým zákrokem vám ukážeme snímek, řekneme cenu a počkáme na vaše ano. Žádné překvapení na recepci.",
  },
  {
    nazev: "Ceník před ošetřením, ne po něm",
    popis:
      "Plán ošetření dostanete písemně i s cenami hrazenými pojišťovnou a doplatky. Doma si ho v klidu projdete.",
  },
  {
    nazev: "Od šesti ráno, ať stihnete práci",
    popis:
      "Otevíráme v 6:00 — na prohlídku zajdete před směnou nebo cestou do kanceláře, bez dovolenky a bez omluvenky pro děti.",
  },
];

export default function Page() {
  return (
    <main className="zub">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-brand">
            <span className="wordmark">
              <span className="wordmark-euc">EUC</span>
              <span className="wordmark-dot" aria-hidden="true"></span>
              <span className="wordmark-sub">Zubní ordinace</span>
            </span>
            <span className="hero-city">České Budějovice · Matice školské 17</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Ordinujeme každý všední den od 6:00</p>
              <h1>
                Zuby v pořádku ještě{" "}
                <em>před ranní kávou.</em>
              </h1>
              <p className="hero-lead">
                Zubní ordinace EUC Kliniky v Českých Budějovicích. Prevence,
                dentální hygiena i akutní bolest — s panoramatickým rentgenem
                přímo v budově a cenou, kterou znáte předem.
              </p>
              <div className="hero-actions">
                <a className="btn btn-primary" href="tel:+420389109109">
                  Zavolat 389 109 109
                </a>
                <a className="btn btn-ghost" href="#ordinace">
                  Co ošetřujeme
                </a>
              </div>
              <p className="hero-note">
                Objednávání po–pá 6:00–18:00 · akutní bolest bereme tentýž den
              </p>
            </div>

            <figure className="hero-media">
              <img
                src="/hero.webp"
                alt="Zubní křeslo v ordinaci EUC Kliniky České Budějovice, ranní světlo v ošetřovně"
              />
              <figcaption className="hero-badge">
                <strong>6:00</strong>
                <span>první křeslo dne</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: ORDINACE / SLUŽBY ===== */}
      <section className="sluzby" id="ordinace" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Vytočte 389 109 109 a vyberte volbu</p>
            <h2 id="sluzby-h">
              Čtyři volby na telefonu.
              <br />
              Čtyři důvody, proč přijít.
            </h2>
            <p className="section-lead">
              Naše objednávková linka funguje jako rozcestník — a stejně je
              postavená i péče na klinice. Vyberte, co potřebujete, zbytek
              zařídíme my.
            </p>
          </div>

          <div className="sluzby-grid">
            <ol className="volby">
              {ordinace.map((s) => (
                <li key={s.cislo} className="volba">
                  <span className="volba-cislo">{s.cislo}</span>
                  <div className="volba-telo">
                    <h3>{s.nazev}</h3>
                    <p>{s.popis}</p>
                    <span className="volba-detail">{s.detail}</span>
                  </div>
                </li>
              ))}
            </ol>

            <figure className="sluzby-media">
              <img
                src="/section-1.webp"
                alt="Dentální hygienistka při ošetření pacienta ultrazvukem"
              />
              <figcaption>
                Dentální hygiena — nejčastější důvod, proč k nám pacienti
                chodí. A ten nejlevnější způsob, jak se vyhnout vrtačce.
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / KLINIKA ===== */}
      <section className="klinika" aria-labelledby="klinika-h">
        <div className="section-inner">
          <div className="klinika-grid">
            <div className="klinika-copy">
              <p className="eyebrow eyebrow-light">EUC Klinika České Budějovice</p>
              <h2 id="klinika-h">
                Zubař v budově, kde je i rentgen, laboratoř a lékárna.
              </h2>
              <p className="section-lead section-lead-light">
                Ordinujeme v EUC Klinice na Matici školské — pět minut pěšky od
                náměstí Přemysla Otakara II. Když je potřeba snímek, krevní
                odběr nebo recept, nikam nejezdíte. Všechno vyřídíte pod jednou
                střechou.
              </p>

              <ul className="zasady">
                {zasady.map((z) => (
                  <li key={z.nazev}>
                    <h3>{z.nazev}</h3>
                    <p>{z.popis}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="klinika-karta">
              <img
                src="/section-2.webp"
                alt="Recepce EUC Kliniky v Českých Budějovicích na Matici školské"
              />
              <div className="karta-telo">
                <h3>Kdy nás zastihnete</h3>
                <dl className="doba">
                  {oteviraciDoba.map((d) => (
                    <div className="doba-radek" key={d.den}>
                      <dt>{d.den}</dt>
                      <dd>{d.cas}</dd>
                    </div>
                  ))}
                </dl>
                <div className="karta-kontakt">
                  <p>
                    <span className="karta-label">Objednání</span>
                    <a href="tel:+420389109109">+420 389 109 109</a>
                  </p>
                  <p>
                    <span className="karta-label">Recepce</span>
                    <a href="tel:+420387730111">+420 387 730 111</a>
                  </p>
                  <p>
                    <span className="karta-label">E-mail</span>
                    <a href="mailto:recepce.ceskebudejovice@euc.cz">
                      recepce.ceskebudejovice@euc.cz
                    </a>
                  </p>
                  <p className="karta-adresa">
                    Matice školské 1786/17, 370 01 České Budějovice
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
