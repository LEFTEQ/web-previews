import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Veterinární klinika Sokolníky — psi, kočky i exoti, Praha",
  description:
    "Veterinární klinika v Praze pro psy, kočky, ptáky, drobné savce a plazy. Digitální RTG, SONO, inhalační anestezie. Objednejte se telefonicky nebo e-mailem.",
};

const pracoviste = [
  {
    misto: "Jesenice",
    adresa: "Budějovická 1116",
    orientace: "vedle Benziny",
  },
  {
    misto: "Bohnice",
    adresa: "Katovická 16",
    orientace: "vchod z ulice Lodžská",
  },
  {
    misto: "Uhříněves",
    adresa: "Lidického 14",
    orientace: "naproti EuroOil",
  },
];

const pacienti = [
  {
    druh: "Psi a kočky",
    popis:
      "Prevence, očkování, kastrace, stomatologie i chirurgie. Naše každodenní práce a domácí půda.",
  },
  {
    druh: "Ptáci",
    popis:
      "Papoušci i drobné okrasné druhy. Vyšetření, ošetření zobáku a peří, výživové poradenství.",
  },
  {
    druh: "Drobní savci",
    popis:
      "Králíci, morčata, fretky. Zubní problémy, kastrace a péče o citlivé miláčky s rychlým metabolismem.",
  },
  {
    druh: "Plazi a exoti",
    popis:
      "Ještěři, hadi, želvy. Terarijní poradenství a diagnostika opřená o praxi ze zoo i ze zahraničí.",
  },
];

const pristroje = [
  "Digitální RTG",
  "Intraorální RTG",
  "SONO a doppler",
  "EKG a zubní ultrazvuk",
  "Biochemický a hematologický analyzátor",
  "Inhalační anestezie s isofluranem",
  "Flexibilní gastroskop a endoskop",
  "Artroskop, mikroskop, tonopen",
];

export default function Page() {
  return (
    <main className="vet">
      <header className="vet-topbar">
        <a className="vet-wordmark" href="#uvod" aria-label="Veterinární klinika Sokolníky — domů">
          <span className="vet-wordmark__mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" width="40" height="40" role="presentation">
              <path
                d="M20 6c-4 0-6 3-6 3s-2-3-6-3S2 9 4 14c1.7 4.2 6.4 8 10 11 1.3 1.1 2.7 2 6 2s4.7-.9 6-2c3.6-3 8.3-6.8 10-11 2-5-1-8-4-8s-6 3-6 3-2-3-6-3z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="vet-wordmark__text">
            <span className="vet-wordmark__name">Sokolníky</span>
            <span className="vet-wordmark__sub">veterinární klinika · Praha</span>
          </span>
        </a>
        <a className="vet-call" href="tel:+420212345678">
          <span aria-hidden="true">☎</span> Zavolat na kliniku
        </a>
      </header>

      <section className="vet-hero" id="uvod">
        <div className="vet-hero__media">
          <img
            src="/hero.webp"
            alt="Veterinář v ordinaci kliniky Sokolníky vyšetřuje malé štěně"
            className="vet-hero__img"
          />
        </div>
        <div className="vet-hero__panel">
          <p className="vet-eyebrow">Praha · od psů po plazy</p>
          <h1 className="vet-hero__title">
            Vyšetříme každého,
            <br />
            kdo se vejde do dlaně
            <br />
            <span>i toho, kdo se nevejde.</span>
          </h1>
          <p className="vet-hero__lead">
            Klinika pro psy a kočky, kde umíme i papouška, fretku a leguána.
            Za diagnózou stojí dlouholetá praxe ze zoologické zahrady v Praze
            i ze zahraničí — a přístroje, které to unesou.
          </p>
          <div className="vet-hero__actions">
            <a className="vet-btn vet-btn--primary" href="tel:+420212345678">
              Objednat se telefonicky
            </a>
            <a className="vet-btn vet-btn--ghost" href="#pracoviste">
              Kde nás najdete
            </a>
          </div>
        </div>
      </section>

      <section className="vet-care" id="pacienti" aria-labelledby="pacienti-nadpis">
        <div className="vet-section-head">
          <p className="vet-eyebrow">Koho léčíme</p>
          <h2 id="pacienti-nadpis" className="vet-h2">
            Čtyři světy pacientů pod jednou střechou
          </h2>
          <p className="vet-section-lead">
            Ne každá ordinace umí sáhnout na leguána bez zaváhání. My ano —
            a přesto zůstáváme klinikou, kam ráno přivedete zlatého retrívra.
          </p>
        </div>

        <ol className="vet-species">
          {pacienti.map((p, i) => (
            <li className="vet-species__item" key={p.druh}>
              <span className="vet-species__index">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="vet-species__title">{p.druh}</h3>
              <p className="vet-species__text">{p.popis}</p>
            </li>
          ))}
        </ol>

        <div className="vet-gear">
          <div className="vet-gear__media">
            <img
              src="/section-1.webp"
              alt="Vybavení veterinární ordinace kliniky Sokolníky — přístroje pro vyšetření zvířat"
              className="vet-gear__img"
            />
          </div>
          <div className="vet-gear__body">
            <p className="vet-eyebrow">Vybavení ordinací</p>
            <h3 className="vet-h3">Diagnostika, která nehádá</h3>
            <p className="vet-gear__lead">
              Zvíře neřekne, kde ho to bolí. Proto máme přístroje, které to
              ukážou za něj — od digitálního RTG po inhalační anestezii
              s monitoringem po celou dobu zákroku.
            </p>
            <ul className="vet-gear__list">
              {pristroje.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="vet-trust" id="pracoviste" aria-labelledby="trust-nadpis">
        <div className="vet-trust__grid">
          <div className="vet-trust__intro">
            <p className="vet-eyebrow">O nás &amp; kde nás najdete</p>
            <h2 id="trust-nadpis" className="vet-h2">
              Za klinikou stojí praxe z výběhu, ne z brožury
            </h2>
            <p className="vet-section-lead">
              MVDr. Jaromír Svobodník léčil zvířata v pražské zoologické
              zahradě i v zahraničí. Ta zkušenost se nedá naučit z knihy —
              a promítá se do každé diagnózy, kterou u nás dostanete.
            </p>
            <div className="vet-trust__media">
              <img
                src="/section-2.webp"
                alt="Tým veterinární kliniky Sokolníky při péči o zvíře"
                className="vet-trust__img"
              />
            </div>
          </div>

          <div className="vet-trust__panel">
            <h3 className="vet-h3">Naše pracoviště v okolí Prahy</h3>
            <ul className="vet-branches">
              {pracoviste.map((p) => (
                <li className="vet-branch" key={p.misto}>
                  <span className="vet-branch__city">{p.misto}</span>
                  <span className="vet-branch__addr">{p.adresa}</span>
                  <span className="vet-branch__hint">{p.orientace}</span>
                </li>
              ))}
            </ul>
            <div className="vet-note">
              <h4 className="vet-note__title">Objednání na vyšetření</h4>
              <p>
                Přijímáme na objednání telefonicky nebo e-mailem — díky tomu
                na vás máme čas a vy nečekáte v čekárně s nervózním pacientem.
              </p>
              <a className="vet-btn vet-btn--primary" href="tel:+420212345678">
                Zavolat a domluvit termín
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
