const sluzby = [
  {
    nazev: "Praní prádla",
    program: "60–90 °C",
    popis:
      "Ubrusy, ložní prádlo, pracovní oděvy i ručníky z kuchyňských provozů. Švýcarská chemie Bezema vypere mastnotu a odstraní zápach — i tam, kde běžný prášek nestačí.",
  },
  {
    nazev: "Mandlování",
    program: "kalandr",
    popis:
      "Ubrusy a povlečení projedou horkým válcem a vrátí se k vám hladké, složené a připravené na stůl. Pro restaurace, penziony a hotely v Plzni a okolí.",
  },
  {
    nazev: "Ruční žehlení",
    program: "kus po kuse",
    popis:
      "Košile, rondony, číšnické zástěry — co nesmí na mandl, žehlíme ručně. Každý kus zvlášť, žádná linka, žádný spěch.",
  },
  {
    nazev: "Odstranění skvrn",
    program: "peroxid H₂O₂",
    popis:
      "Víno na barevném ubrusu není konec. Šetrný peroxid vodíku skvrnu vytáhne a barvu nechá být. Když to nejde, řekneme vám to rovnou.",
  },
];

const duvody = [
  {
    cislo: "7+",
    text: "let pereme pro plzeňské restaurace, hotely a firmy. Víme, jak vypadá prádlo z kuchyně v pondělí ráno.",
  },
  {
    cislo: "0 Kč",
    text: "za dopravu. Prádlo u smluvních partnerů vyzvedneme a čisté přivezeme zpět — vy se nestaráte o nic.",
  },
  {
    cislo: "48 h",
    text: "běžný termín dodání. Když hoří termín před víkendovou akcí, domluvíme se — rychlé dodání držíme za každých okolností.",
  },
];

export default function Page() {
  return (
    <main className="hase">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            PRÁDELNA <b>HASE</b>
          </span>
          <span className="hero-lokalita">Plzeň · svoz zdarma</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Průmyslová prádelna pro gastro, hotely a firmy</p>
          <h1 className="hero-title">
            <span className="radek radek-1">Vypráno.</span>
            <span className="radek radek-2">Vymandlováno.</span>
            <span className="radek radek-3">Přivezeno zpět.</span>
          </h1>
          <p className="hero-perex">
            Ubrusy od vína, kuchyňské utěrky, povlečení i rondony. Vyzvedneme,
            vypereme při 60–90 °C, vymandlujeme dohladka a přivezeme — v Plzni
            s dopravou zdarma.
          </p>
          <div className="hero-akce">
            <a className="btn btn-plna" href="tel:+420777984994">
              Zavolat 777 984 994
            </a>
            <a className="btn btn-linka" href="mailto:kracman@pradelnahase.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* signature: pás mandlu — prádlo vyjíždí z horkého válce */}
        <div className="mandl" aria-hidden="true">
          <div className="mandl-valec">
            <span className="mandl-teplota">90&nbsp;°C</span>
          </div>
          <div className="mandl-pas">
            <span className="mandl-text">
              UBRUSY · POVLEČENÍ · UTĚRKY · RONDONY · UBRUSY · POVLEČENÍ · UTĚRKY · RONDONY ·
            </span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-nadpis">
        <div className="sekce-hlava">
          <h2 id="sluzby-nadpis">Co u nás projde válcem</h2>
          <p className="sekce-perex">
            Čtyři služby, jedna zásada: prádlo se vrací čisté, hladké a bez
            zápachu. Pereme chemií Bezema — šetrnou k látce, nemilosrdnou ke
            skvrnám.
          </p>
        </div>

        <ul className="sluzby-mrizka">
          {sluzby.map((s) => (
            <li key={s.nazev} className="sluzba">
              <div className="sluzba-hlava">
                <h3>{s.nazev}</h3>
                <span className="sluzba-program">{s.program}</span>
              </div>
              <p>{s.popis}</p>
            </li>
          ))}
        </ul>

        <p className="sluzby-pozn">
          Pereme pro smluvní partnery — restaurace, hotely, penziony, ordinace
          a firmy. Ceník vám pošleme podle objemu prádla, stačí zavolat.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-nadpis">
        <div className="sekce-hlava sekce-hlava-svetla">
          <h2 id="duvera-nadpis">Proč plzeňské kuchyně perou u nás</h2>
          <p className="sekce-perex">
            Prádelnu vede Ing. Miloslav Kračman. Malý provoz znamená, že vaše
            prádlo zná konkrétní člověk — ne linka s čárovým kódem.
          </p>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <div key={d.cislo} className="duvod">
              <span className="duvod-cislo">{d.cislo}</span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <blockquote className="citace">
          <p>
            „Utěrky z kuchyně po směně — mastnota, kouř, všechno. Vrátí se bílé
            a bez zápachu. Sedm let a ani jednou jsme nemuseli řešit reklamaci.“
          </p>
          <cite>— šéfkuchař restaurace v centru Plzně, smluvní partner</cite>
        </blockquote>
      </section>
    </main>
  );
}
