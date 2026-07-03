const zimniProhlidka = [
  { system: "CHLAZENÍ", ukony: ["Stav a těsnost vodních hadic", "Náplň chladicího systému, bod zámrazu", "Odkalení předchladiče"] },
  { system: "ELEKTRIKA", ukony: ["Hodnota dobíjení akumulátorů", "Hustota elektrolytu, zátěžový test AKU", "Napnutí klínových a drážkových řemenů"] },
  { system: "VZDUCH", ukony: ["Odkalení vzduchojemů, únik vzduchu", "Přípravek proti zamrzání", "Vysoušeč vzduchu, výměna patrony"] },
  { system: "KABINA", ukony: ["Stěrače a světlomety", "Vyhřívání a naklápění zrcátek", "Funkce nezávislého topení"] },
];

const sluzby = [
  {
    kod: "DGN",
    nazev: "Diagnostika závad",
    popis:
      "Napojíme tahač, návěs i dodávku na diagnostiku, přečteme chybové kódy a řekneme vám na rovinu, co je vážné a co počká. Žádné hádání — protokol dostanete do ruky.",
  },
  {
    kod: "SRV",
    nazev: "Opravy nákladních vozidel",
    popis:
      "Opravujeme tahače, návěsy, přívěsy a dodávky — Scania, Mercedes, MAN, Volvo. Brzdy, vzduchová soustava, chlazení, elektrika. Pracujeme na směny, aby vůz stál co nejkratší dobu.",
  },
  {
    kod: "SEZ",
    nazev: "Sezónní prohlídky",
    popis:
      "Zimní i letní prohlídka celé soupravy: dva mechanici, zhruba dvě hodiny, u dodávky hodina. Výsledek dostanete v protokolu. Prevence je vždy levnější než odtah v mrazu.",
  },
  {
    kod: "DÍL",
    nazev: "Náhradní díly a montáže",
    popis:
      "Prodáváme náhradní díly na zahraniční vozy. Montujeme přídavné elektrické zásuvky do kabin (Scania, Mercedes, MAN, Volvo) — např. pro jednotku MÝTO.CZ, od cca 1 000 Kč bez DPH včetně práce.",
  },
];

export default function Page() {
  return (
    <main className="nts">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="NTS — Nonstop Truck Servis">
            <span className="wordmark-nts">NTS</span>
            <span className="wordmark-sub">
              NONSTOP<br />TRUCK SERVIS
            </span>
          </div>
          <a className="hero-tel" href="tel:+420603280481">
            <span className="hero-tel-label">NONSTOP linka</span>
            <span className="hero-tel-num">603 280 481</span>
          </a>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Diagnostika a servis nákladních vozidel · Plzeň</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">KAMION</span>
            <span className="hero-line hero-line-2">STOJÍ?</span>
            <span className="hero-line hero-line-3">
              MY <em>NE.</em>
            </span>
          </h1>
          <p className="hero-lead">
            Připojíme diagnostiku, najdeme závadu a opravíme tahač, návěs i dodávku.
            Přes 20 let v Plzni, na zahraničních značkách — Scania, Mercedes, MAN, Volvo.
            Mimo pracovní dobu jedeme dál: nonstop telefon 603 280 481.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420603280481">Zavolat servis</a>
            <a className="btn btn-ghost" href="#prohlidka">Co kontrolujeme</a>
          </div>
        </div>

        {/* signature: diagnostický záznam — jízda datovou sběrnicí */}
        <div className="diag-strip" aria-hidden="true">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="diag-svg">
            <path
              className="diag-path"
              d="M0,60 L120,60 L140,20 L165,100 L190,60 L340,60 L360,35 L380,85 L400,60 L560,60 L575,10 L600,110 L625,60 L800,60 L820,40 L845,80 L870,60 L1020,60 L1040,25 L1065,95 L1090,60 L1200,60"
              fill="none"
            />
          </svg>
          <div className="diag-readout">
            <span>CAN-BUS · OK</span>
            <span>BRZDY · OK</span>
            <span>VZDUCH · OK</span>
            <span>AKU · 12,7 V</span>
            <span>ZÁMRZ · −28 °C</span>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p className="section-sub">
            Jedna adresa pro celou soupravu — od chybového kódu po výměnu dílu.
          </p>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="sluzba" key={s.kod}>
              <span className="sluzba-kod" aria-hidden="true">{s.kod}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <div className="prohlidka" id="prohlidka">
          <div className="prohlidka-head">
            <h3>Protokol sezónní prohlídky</h3>
            <p>
              Přesně tohle projdeme na vašem voze. Bez oprav trvá prohlídka soupravy
              zhruba dvě hodiny, u dodávky hodinu — a odjíždíte s protokolem v ruce.
            </p>
          </div>
          <div className="prohlidka-grid">
            {zimniProhlidka.map((blok) => (
              <div className="protokol" key={blok.system}>
                <h4>{blok.system}</h4>
                <ul>
                  {blok.ukony.map((u) => (
                    <li key={u}>{u}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ DŮVĚRA / O NÁS ============ */}
      <section className="onas" aria-labelledby="onas-h">
        <div className="onas-inner">
          <div className="onas-text">
            <h2 id="onas-h">Servis, který zná váš vůz déle než vy</h2>
            <p>
              Fungujeme v Plzni od roku 2000 — dřív pod jménem SKANSERVIS, dnes jako
              NTS ve skupině společností Milana Lišky. Za tu dobu nám prošly rukama
              stovky tahačů a souprav, které jezdí po celé Evropě.
            </p>
            <p>
              Víme, že stojící kamion prodělává každou hodinu. Proto pracujeme ve
              směnném provozu, díly držíme skladem a mimo pracovní dobu bere mechanik
              nonstop telefon. Dopravce nenecháme čekat do pondělí.
            </p>
            <a className="btn btn-primary" href="tel:+420604298790">
              Domluvit termín — 604 298 790
            </a>
          </div>

          <dl className="onas-fakta">
            <div className="fakt">
              <dt>Na trhu od roku</dt>
              <dd>2000</dd>
            </div>
            <div className="fakt">
              <dt>Dostupnost mimo pracovní dobu</dt>
              <dd>NONSTOP</dd>
            </div>
            <div className="fakt">
              <dt>Prohlídka soupravy (2 mechanici)</dt>
              <dd>~2 hod</dd>
            </div>
            <div className="fakt">
              <dt>Značky, na kterých pracujeme</dt>
              <dd>Scania · MB · MAN · Volvo</dd>
            </div>
          </dl>
        </div>

        <div className="skupina">
          <p className="skupina-label">Jsme součástí skupiny</p>
          <ul className="skupina-list">
            <li>
              <strong>NTS s.r.o.</strong>
              <span>opravy nákladních a dodávkových vozů</span>
            </li>
            <li>
              <strong>FOX CARGO s.r.o.</strong>
              <span>mezinárodní doprava</span>
            </li>
            <li>
              <strong>M. Liška s.r.o.</strong>
              <span>prodej vozidel Toyota a Subaru</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
