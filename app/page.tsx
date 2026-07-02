export const metadata = {
  title: "POLIKLINIKA OLOMOUC — Rehabilitace v centru Olomouce",
  description:
    "Rehabilitační péče v Olomouci: fyzioterapie, léčebná tělesná výchova, fyzikální terapie a masáže. Objednejte se telefonicky, bereme pacienty na poukaz i samoplátce.",
  openGraph: {
    title: "POLIKLINIKA OLOMOUC — Rehabilitace",
    description:
      "Fyzioterapie, elektroléčba, ultrazvuk a léčebný tělocvik pod jednou střechou v Olomouci.",
    locale: "cs_CZ",
    type: "website",
  },
};

const sluzby = [
  {
    kod: "LTV",
    nazev: "Individuální fyzioterapie",
    popis:
      "Půlhodina jen pro vás a vašeho fyzioterapeuta. Cvičení na míru po operacích, úrazech i při dlouhodobých bolestech zad a kloubů.",
    delka: "30 min",
  },
  {
    kod: "MT",
    nazev: "Měkké a mobilizační techniky",
    popis:
      "Ruce terapeuta místo přístroje. Uvolnění ztuhlých svalů, fascií a kloubních blokád — nejčastěji krční páteř a bedra.",
    delka: "30 min",
  },
  {
    kod: "ET",
    nazev: "Elektroléčba a ultrazvuk",
    popis:
      "Fyzikální terapie na předpis: TENS, interferenční proudy, magnetoterapie a ultrazvuk pro tlumení bolesti a rychlejší hojení.",
    delka: "15–20 min",
  },
  {
    kod: "SKUP",
    nazev: "Skupinový léčebný tělocvik",
    popis:
      "Cvičení v malé skupině pod vedením fyzioterapeuta. Vhodné jako pokračování individuální terapie — abyste u pohybu vydrželi.",
    delka: "45 min",
  },
  {
    kod: "MAS",
    nazev: "Léčebné masáže",
    popis:
      "Klasická a reflexní masáž jako doplněk rehabilitace nebo pro samoplátce. Objednání bez poukazu od lékaře.",
    delka: "30–60 min",
  },
];

const kroky = [
  {
    krok: "Poukaz od lékaře",
    text: "Váš praktik, ortoped nebo neurolog vypíše poukaz FT. S ním je rehabilitace hrazená pojišťovnou.",
  },
  {
    krok: "Vstupní vyšetření",
    text: "Fyzioterapeut s vámi projde potíže, vyšetří pohyb a domluvíte si plán terapií — obvykle 6 až 10 návštěv.",
  },
  {
    krok: "Terapie a cvičení domů",
    text: "Na každé návštěvě pracujeme společně a odnesete si cviky na doma. Bez nich to nejde — a s nimi to jde rychleji.",
  },
];

export default function Page() {
  return (
    <main className="reha">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            <span className="wordmark-plus" aria-hidden="true">
              +
            </span>
            Poliklinika&nbsp;Olomouc
          </span>
          <a className="hero-tel" href="tel:+420585000000">
            585 000 000
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Rehabilitační oddělení · Olomouc</p>
          <h1 className="hero-title">
            Pohyb se dá
            <br />
            <em>vrátit.</em>
          </h1>
          <p className="hero-lead">
            Fyzioterapie, léčebný tělocvik a fyzikální terapie pod jednou
            střechou. Na poukaz od lékaře i bez něj — v centru Olomouce,
            bez čekání na chodbě.
          </p>
          <div className="hero-actions">
            <a className="btn-primary" href="tel:+420585000000">
              Objednat se telefonicky
            </a>
            <a className="btn-ghost" href="#sluzby">
              Co u nás cvičíme
            </a>
          </div>
        </div>

        {/* Signature: rozsahová stupnice — goniometr fyzioterapeuta */}
        <div className="rom" aria-hidden="true">
          <div className="rom-arc"></div>
          <div className="rom-ticks">
            {Array.from({ length: 19 }).map((_, i) => (
              <span
                key={i}
                className={`rom-tick${i % 3 === 0 ? " rom-tick-major" : ""}`}
                style={{ transform: `rotate(${i * 10 - 90}deg)` }}
              />
            ))}
          </div>
          <div className="rom-needle"></div>
          <div className="rom-labels">
            <span>0°</span>
            <span>90°</span>
            <span>180°</span>
          </div>
          <p className="rom-caption">rozsah pohybu — to, co spolu měříme a vracíme</p>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Terapie, které u nás najdete</h2>
          <p>
            Kódy znáte z poukazu od lékaře — u nás za nimi stojí konkrétní
            lidé a konkrétní půlhodina práce.
          </p>
        </div>

        <ul className="sluzby-list">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.kod}>
              <span className="sluzba-kod">{s.kod}</span>
              <div className="sluzba-text">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
              <span className="sluzba-delka">{s.delka}</span>
            </li>
          ))}
        </ul>

        <p className="sluzby-note">
          Terapie na poukaz hradí všechny běžné zdravotní pojišťovny.
          Masáže a cvičení navíc nabízíme i pro samoplátce.
        </p>
      </section>

      {/* ================= JAK TO PROBÍHÁ / DŮVĚRA ================= */}
      <section className="prubeh" aria-labelledby="prubeh-h">
        <div className="section-head section-head-inverse">
          <h2 id="prubeh-h">Jak rehabilitace probíhá</h2>
          <p>
            Tři kroky od poukazu k prvnímu cvičení. Většinu pacientů
            bereme do dvou týdnů od objednání.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k, i) => (
            <li className="krok" key={k.krok}>
              <span className="krok-cislo" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{k.krok}</h3>
              <p>{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="duvera">
          <div className="duvera-item">
            <strong>V centru Olomouce</strong>
            <span>
              Poliklinika s parkováním a zastávkou MHD před vchodem.
              Bezbariérový přístup až do tělocvičny.
            </span>
          </div>
          <div className="duvera-item">
            <strong>Tým fyzioterapeutů</strong>
            <span>
              Registrovaní fyzioterapeuti s atestací, průběžné kurzy
              (McKenzie, mobilizace, kinesiotaping).
            </span>
          </div>
          <div className="duvera-item">
            <strong>Ordinační hodiny</strong>
            <span>
              Po–Čt 7.00–18.00, Pá 7.00–14.00. Termíny brzy ráno i po
              práci — rehabilitace se dá stihnout před směnou.
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
