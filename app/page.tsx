// Sonepar České Budějovice — velkoobchod elektroinstalačním materiálem
// Návrh: typografické hero postavené na motivu vodičů (fázový L / nulový N / ochranný PE)
// a schématických značek z elektroinstalace. Bez fotek, bez šablon.

const lide = [
  { jmeno: "Jan Kučera", role: "Vedoucí pobočky", tel: "387 001 164", mobil: "702 230 642", mail: "kucera.j@sonepar.cz" },
  { jmeno: "Martin Schwarz", role: "Obchodní reprezentant", tel: "387 001 161", mobil: "607 121 247", mail: "schwarz.m@sonepar.cz" },
  { jmeno: "Luděk Kyrian", role: "Odborný prodejce", tel: "387 001 161", mobil: "602 307 363", mail: "kyrian@sonepar.cz" },
  { jmeno: "Marie Žuczkowská", role: "Odborná prodejkyně", tel: "387 001 160", mobil: null, mail: "zuczkowska.m@sonepar.cz" },
  { jmeno: "Jaroslav Florián", role: "Odborný prodejce", tel: "387 001 163", mobil: "602 307 304", mail: "florian.j@sonepar.cz" },
  { jmeno: "Vratislav Šimek", role: "Odborný prodejce", tel: "387 001 162", mobil: "601 085 564", mail: "simek.v@sonepar.cz" },
];

const sortiment = [
  {
    kod: "CYKY",
    nazev: "Kabely a vodiče",
    popis: "CYKY, CYSY, ohebné šňůry i datové kabely. Střiháme na metry přímo na pobočce — odvezete si přesně tolik, kolik na stavbu potřebujete.",
  },
  {
    kod: "RCD",
    nazev: "Jištění a rozvaděče",
    popis: "Jističe, proudové chrániče, přepěťové ochrany a rozvodnice skladem. Poradíme s osazením rozvaděče podle projektu.",
  },
  {
    kod: "IP44",
    nazev: "Vypínače a zásuvky",
    popis: "Kompletní řady domovních přístrojů — od základních bílých po designové. Do koupelny, dílny i na fasádu.",
  },
  {
    kod: "LED",
    nazev: "Světelná technika",
    popis: "LED panely, průmyslová svítidla, nouzové osvětlení i venkovní reflektory. Pomůžeme spočítat osvětlení haly či kanceláře.",
  },
  {
    kod: "PV",
    nazev: "Fotovoltaika",
    popis: "Panely, střídače, konstrukce a jištění DC strany. Materiál pro celou instalaci od jednoho dodavatele, s dostupností na dotaz do 24 hodin.",
  },
  {
    kod: "EPD",
    nazev: "Nářadí a úložný materiál",
    popis: "Lišty, trubky, krabice, stahovací pásky, vruty — i to drobné, kvůli čemu se jinak jezdí třikrát. Máme to na jednom místě.",
  },
];

function VlnaSVG() {
  return (
    <svg
      className="hero-cable"
      viewBox="0 0 1200 320"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="none"
    >
      {/* Tři vodiče: L (hnědá→červená v paletě jako signální), N (modrá), PE (žlutozelená) */}
      <path
        className="cable cable-l"
        d="M-10 200 C 180 200, 220 90, 400 90 S 620 230, 800 230 S 1020 70, 1210 70"
        stroke="#E63329"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        className="cable cable-n"
        d="M-10 230 C 180 230, 220 120, 400 120 S 620 260, 800 260 S 1020 100, 1210 100"
        stroke="#2E6FE8"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        className="cable cable-pe"
        d="M-10 260 C 180 260, 220 150, 400 150 S 620 290, 800 290 S 1020 130, 1210 130"
        stroke="#B7C400"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray="26 14"
      />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="snp">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <a className="wordmark" href="#" aria-label="Sonepar České Budějovice — úvod">
            <span className="wordmark-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="30" height="30" fill="none">
                <path d="M19 3 7 18h7l-2 11L25 13h-7l1-10Z" fill="#E63329" />
              </svg>
            </span>
            <span className="wordmark-text">
              SONEPAR<span className="wordmark-city">/ České Budějovice</span>
            </span>
          </a>
          <p className="hero-status">
            <span className="status-dot" aria-hidden="true"></span>
            Dnes otevřeno od 7:00
          </p>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Velkoobchod elektroinstalačním materiálem · K. Světlé 6</p>
          <h1 className="hero-title">
            <span className="line line-1">Kabel, jistič,</span>
            <span className="line line-2">svítidlo.</span>
            <span className="line line-3">
              <em>Skladem v Budějovicích,</em>
            </span>
            <span className="line line-4">
              <em>ráno v sedm na pultě.</em>
            </span>
          </h1>
          <p className="hero-sub">
            Zásobujeme elektrikáře, firmy i stavby v jižních Čechách. Co nemáme na pobočce,
            přivezeme z 27 skladů po celé ČR — obvykle do druhého dne.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420387001161">
              Zavolat pobočce — 387 001 161
            </a>
            <a className="btn btn-ghost" href="#sortiment">
              Co držíme skladem
            </a>
          </div>
        </div>

        <VlnaSVG />

        <dl className="hero-facts" aria-label="Základní údaje o pobočce">
          <div className="fact">
            <dt>Otevírací doba</dt>
            <dd>Po–Čt 7:00–16:00 · Pá 7:00–15:00</dd>
          </div>
          <div className="fact">
            <dt>Kde nás najdete</dt>
            <dd>K. Světlé 6, České Budějovice — u výpadovky na Plzeň</dd>
          </div>
          <div className="fact">
            <dt>Pro registrované</dt>
            <dd>Individuální ceny a objednávky přes e-shop i mobilní aplikaci</dd>
          </div>
        </dl>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="sortiment" id="sortiment" aria-labelledby="sortiment-h">
        <div className="section-head">
          <h2 id="sortiment-h">Co odvezete ještě dnes</h2>
          <p>
            Přes 10 000 položek skladem přímo na pobočce. Štítky u karet odpovídají tomu,
            co znáte z praxe — žádný marketing, jen sortiment.
          </p>
        </div>

        <ul className="kategorie" role="list">
          {sortiment.map((k) => (
            <li className="karta" key={k.kod}>
              <span className="karta-kod" aria-hidden="true">
                {k.kod}
              </span>
              <h3>{k.nazev}</h3>
              <p>{k.popis}</p>
            </li>
          ))}
        </ul>

        <p className="sortiment-note">
          <strong>Fakturace na IČO, výdej ze skladu na počkání.</strong> Větší objednávky
          připravíme dopředu — stačí zavolat den předem a materiál na vás počká u výdeje.
        </p>
      </section>

      {/* ===== LIDÉ NA POBOČCE ===== */}
      <section className="lide" aria-labelledby="lide-h">
        <div className="section-head section-head--invert">
          <h2 id="lide-h">U pultu stojí lidé, kteří elektru rozumí</h2>
          <p>
            Nemusíte vědět přesné objednací číslo. Řeknete, co stavíte, a náš tým vám
            poskládá materiál podle projektu — včetně alternativ, když něco zrovna chybí.
          </p>
        </div>

        <ul className="tym" role="list">
          {lide.map((o) => (
            <li className="osoba" key={o.mail}>
              <span className="osoba-terminal" aria-hidden="true"></span>
              <div className="osoba-info">
                <h3>{o.jmeno}</h3>
                <p className="osoba-role">{o.role}</p>
                <p className="osoba-kontakt">
                  <a href={`tel:+420${o.tel.replace(/ /g, "")}`}>{o.tel}</a>
                  {o.mobil && (
                    <>
                      {" · "}
                      <a href={`tel:+420${o.mobil.replace(/ /g, "")}`}>{o.mobil}</a>
                    </>
                  )}
                </p>
                <p className="osoba-mail">
                  <a href={`mailto:${o.mail}`}>{o.mail}</a>
                </p>
              </div>
            </li>
          ))}
        </ul>

        <div className="duvera">
          <p className="duvera-cislo">27</p>
          <p className="duvera-text">
            poboček po celé ČR za námi stojí jako záloha. Jsme součástí skupiny Sonepar —
            největšího distributora elektroinstalačního materiálu na světě. V Budějovicích
            ale zůstáváme pobočkou, kde vás znají jménem.
          </p>
        </div>
      </section>
    </main>
  );
}
