import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dostaf — stavby a rekonstrukce, České Budějovice",
  description:
    "Dostaf s.r.o. staví a rekonstruuje domy i byty na Českobudějovicku. Jeden člověk, který to vede od návrhu po předání klíčů. Čistá stavba, dodržené termíny.",
};

const etapy = [
  {
    faze: "F1",
    stav: "základ",
    title: "Stavba domu na klíč",
    text: "Od výkopu po kolaudaci. Hlídáme rozpočet, řemeslníky i papíry — včetně vyřízení dotací, pokud jsou zrovna vypsané.",
    doba: "6–12 měsíců",
  },
  {
    faze: "F2",
    stav: "hrubá",
    title: "Rekonstrukce domu",
    text: "Od návrhu po předání. Rozbouráme, co překáží, a postavíme to tak, jak by mělo být napoprvé. Bydlíte v čistém.",
    doba: "3–8 měsíců",
  },
  {
    faze: "F3",
    stav: "dokončení",
    title: "Rekonstrukce bytu",
    text: "Jádro, elektrika, podlahy, malby. Dokončovací práce do posledního detailu — domov připravený k nastěhování.",
    doba: "4–10 týdnů",
  },
  {
    faze: "F4",
    stav: "papíry",
    title: "Dotace a administrativa",
    text: "Pošlete poptávku a ozveme se, jakmile bude dotace aktuální. Vyřídíme celý proces za vás — od žádosti po vyúčtování.",
    doba: "dle programu",
  },
];

const hodnoty = [
  {
    n: "01",
    title: "Čistá stavba na předání",
    text: "Uklízíme za sebou průběžně. Předáváme tak, jak bychom to sami chtěli přebírat — bez nepořádku a chaosu.",
  },
  {
    n: "02",
    title: "Jeden člověk po celou dobu",
    text: "Komunikujete pořád se stejným člověkem. Nikdo vás nepřehazuje jak horký brambor mezi odděleními.",
  },
  {
    n: "03",
    title: "Precizní řemeslo",
    text: "Stavíme váš domov, jako by byl náš vlastní. Za každý projekt dáme ruku do ohně.",
  },
  {
    n: "04",
    title: "Garance a termíny",
    text: "Garantujeme svoji práci a držíme dohodnuté termíny. Zkušenosti ze zahraničí nás naučily dělat věci pořádně.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Dostaf, úvodní stránka">
          <span className="wordmark-do">Dostaf</span>
          <span className="wordmark-dot" aria-hidden="true">.</span>
        </a>
        <a className="topbar-tel" href="tel:+420774515545">
          774 515 545
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grid" aria-hidden="true">
          <span className="level" />
        </div>

        <p className="hero-eyebrow">
          <span>Stavební firma</span>
          <span className="dot-sep" aria-hidden="true" />
          <span>České Budějovice</span>
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="hero-line hero-line-1">S námi</span>
          <span className="hero-line hero-line-2">to</span>
          <span className="hero-line hero-line-3">
            dosta<span className="hero-cursor">víte</span>
            <span className="hero-period">.</span>
          </span>
        </h1>

        <p className="hero-lede">
          Svěřte svůj domov lidem, kteří ho dotáhnou do konce. Kompletní vyřízení
          staveb a rekonstrukcí na Českobudějovicku — bez zbytečného čekání,
          nepořádku a chaosu.
        </p>

        <div className="hero-actions">
          <a className="btn btn-solid" href="#sluzby">
            Co dokážeme
          </a>
          <a className="btn btn-line" href="tel:+420774515545">
            Zavolat 774 515 545
          </a>
        </div>
      </section>

      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="section-eyebrow">Etapy práce</p>
          <h2 id="sluzby-title" className="section-title">
            Dodáme, doděláme a&nbsp;dostavíme
          </h2>
          <p className="section-note">
            Čtyři fáze, kterými váš projekt provedeme. Každou hlídá stejný člověk
            od poptávky po předání klíčů.
          </p>
        </div>

        <ol className="etapy">
          {etapy.map((e) => (
            <li className="etapa" key={e.faze}>
              <div className="etapa-marker" aria-hidden="true">
                <span className="etapa-faze">{e.faze}</span>
                <span className="etapa-stav">{e.stav}</span>
              </div>
              <div className="etapa-body">
                <h3 className="etapa-title">{e.title}</h3>
                <p className="etapa-text">{e.text}</p>
                <p className="etapa-doba">
                  <span className="etapa-doba-label">obvyklá doba</span>
                  <span className="etapa-doba-val">{e.doba}</span>
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="duvera" id="proc" aria-labelledby="duvera-title">
        <div className="section-head">
          <p className="section-eyebrow">Proč právě Dostaf</p>
          <h2 id="duvera-title" className="section-title">
            Dost dobré důvody
          </h2>
          <p className="section-note">
            Mladá firma, která roste. Zkušenosti ze zahraničí, řemeslo doma na
            jihu Čech. Vážíme si práce ostatních řemeslníků — i té vlastní.
          </p>
        </div>

        <ul className="hodnoty">
          {hodnoty.map((h) => (
            <li className="hodnota" key={h.n}>
              <span className="hodnota-n" aria-hidden="true">
                {h.n}
              </span>
              <h3 className="hodnota-title">{h.title}</h3>
              <p className="hodnota-text">{h.text}</p>
            </li>
          ))}
        </ul>

        <aside className="kontakt-karta" aria-label="Kontakt na Dostaf">
          <div className="kk-col">
            <p className="kk-label">Sídlo</p>
            <p className="kk-val">
              Plzeňská 2311
              <br />
              370 04 České Budějovice
            </p>
          </div>
          <div className="kk-col">
            <p className="kk-label">Napište nám</p>
            <a className="kk-val kk-link" href="mailto:info@dostaf.cz">
              info@dostaf.cz
            </a>
          </div>
          <div className="kk-col">
            <p className="kk-label">Zavolejte</p>
            <a className="kk-val kk-link" href="tel:+420774515545">
              +420 774 515 545
            </a>
          </div>
        </aside>
      </section>
    </main>
  );
}
