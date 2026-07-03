export const metadata = {
  title: "RVTech s.r.o. — Fotovoltaika na míru, Plzeň",
  description:
    "Navrhujeme a instalujeme fotovoltaické elektrárny v Plzni a okolí. Návrh výkonu podle vaší reálné spotřeby, TIER1 panely, baterie, revize i vlastní dohledové centrum.",
  openGraph: {
    title: "RVTech — Fotovoltaika navržená podle vaší spotřeby",
    description:
      "FVE pro domácnosti i firmy v Plzni. Analýza spotřeby, TIER1 panely, bateriová úložiště, revize a nonstop dohled.",
    locale: "cs_CZ",
    type: "website",
  },
};

const kroky = [
  {
    cislo: "01",
    nazev: "Změříme vaši spotřebu",
    text: "Projdeme s vámi spotřebu domácnosti nebo firmy. Kde to jde, stáhneme průběhová data přímo z portálu distributora — návrh pak sedí na to, jak elektřinu opravdu používáte, ne na tabulkový odhad.",
  },
  {
    cislo: "02",
    nazev: "Navrhneme výkon a baterii",
    text: "Spočítáme adekvátní výkon panelů a velikost bateriového úložiště. Žádné předimenzované sestavy „aby to vypadalo“ — jen to, co se vám reálně vrátí.",
  },
  {
    cislo: "03",
    nazev: "Namontujeme a zapojíme",
    text: "Na střechu jdou certifikované konstrukce K2 nebo Sunfixing a TIER1 panely DAH Solar, Canadian Solar, Jinko či Longi. Střídače SOLAX, WATTSONIC a GOODWE do domácností; DEYE, HUAWEI, SUNGROW nebo SOLAREDGE pro firmy.",
  },
  {
    cislo: "04",
    nazev: "Zrevidujeme a hlídáme",
    text: "Vlastní revizní technik vystaví revizní zprávu k FVE i celé elektroinstalaci. Elektrárnu pak může nonstop sledovat naše dohledové centrum — o výpadku víme dřív než vy.",
  },
];

const duvody = [
  {
    stitek: "Revize",
    nazev: "Revizní technik v týmu",
    text: "Nové i periodické revizní zprávy k FVE, hromosvodu i celé elektroinstalaci děláme sami. Nečekáte na externistu a dokumentaci máte kompletní od jedné firmy.",
  },
  {
    stitek: "Dohled",
    nazev: "Dohledové centrum 24/7",
    text: "Vaši elektrárnu online sledujeme a při poklesu výroby nebo poruše reaguje náš servisní dispečink. Panel na střeše, který tři měsíce nevyrábí, u nás neprojde.",
  },
  {
    stitek: "Vývoj",
    nazev: "Elektronice rozumíme do detailu",
    text: "Sami vyvíjíme hardware pro energetiku a IoT — třeba senzory pro odečty elektřiny, plynu a vody. Když integrujeme střídač s chytrou domácností LOXONE, víme přesně, co se v něm děje.",
  },
  {
    stitek: "Plzeň",
    nazev: "Jsme odsud, z Doudlevec",
    text: "Sídlíme v Předenické ulici v Plzni. Na obhlídku střechy k vám dojedeme do druhého dne a servisní zásah neřešíme přes půl republiky.",
  },
];

export default function Page() {
  return (
    <main className="fv">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            RV<span className="wordmark-tech">tech</span>
            <span className="wordmark-dot" aria-hidden="true" />
          </span>
          <span className="hero-loc">Plzeň · Doudlevce</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Fotovoltaické elektrárny pro domy a firmy</p>
          <h1 className="hero-title">
            <span className="hero-line">Slunce svítí</span>
            <span className="hero-line hero-line-accent">zadarmo.</span>
            <span className="hero-line hero-line-small">My ho zapojíme do vaší zásuvky.</span>
          </h1>
          <p className="hero-sub">
            Nenabízíme katalogovou sestavu. Nejdřív změříme, kolik elektřiny
            opravdu spotřebujete, a teprve pak navrhneme panely a baterii, které
            se vám vrátí.
          </p>
          <div className="hero-cta-row">
            <a className="btn btn-solid" href="tel:+420702123173">
              Zavolat 702 123 173
            </a>
            <a className="btn btn-ghost" href="mailto:info@rvtech.cz">
              Napsat na info@rvtech.cz
            </a>
          </div>
        </div>

        {/* signature: stylizované pole FV panelů jako mřížka, jeden panel „svítí“ */}
        <div className="panel-field" aria-hidden="true">
          {Array.from({ length: 24 }).map((_, i) => (
            <span key={i} className={`cell${i === 14 ? " cell-sun" : ""}`} />
          ))}
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>TIER1 panely</span>
          <span className="strip-sep">◆</span>
          <span>Konstrukce K2 / Sunfixing</span>
          <span className="strip-sep">◆</span>
          <span>Střídače SOLAX · GOODWE · DEYE · HUAWEI</span>
          <span className="strip-sep">◆</span>
          <span>Vlastní revizní technik</span>
        </div>
      </header>

      {/* ===== SEKCE 1: JAK STAVÍME FVE ===== */}
      <section className="sekce sekce-kroky" aria-labelledby="kroky-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow">Od střechy po revizní zprávu</p>
          <h2 id="kroky-h" className="sekce-title">
            Jak u nás vzniká elektrárna
          </h2>
          <p className="sekce-perex">
            Čtyři kroky, jeden dodavatel. Návrh, montáž, revize i dohled děláme
            vlastními lidmi — nic nepřeprodáváme subdodavatelům.
          </p>
        </div>

        <ol className="kroky">
          {kroky.map((k) => (
            <li key={k.cislo} className="krok">
              <span className="krok-cislo" aria-hidden="true">
                {k.cislo}
              </span>
              <h3 className="krok-nazev">{k.nazev}</h3>
              <p className="krok-text">{k.text}</p>
            </li>
          ))}
        </ol>

        <div className="znacky" aria-label="Značky, se kterými pracujeme">
          <p className="znacky-popis">Montujeme prověřené značky:</p>
          <ul className="znacky-seznam">
            <li>DAH Solar</li>
            <li>Canadian Solar</li>
            <li>Jinko</li>
            <li>Longi</li>
            <li>SOLAX</li>
            <li>WATTSONIC</li>
            <li>GOODWE</li>
            <li>DEYE</li>
            <li>HUAWEI</li>
            <li>SUNGROW</li>
            <li>SOLAREDGE</li>
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: PROČ RVTECH ===== */}
      <section className="sekce sekce-duvera" aria-labelledby="duvera-h">
        <div className="sekce-hlava">
          <p className="sekce-eyebrow sekce-eyebrow-svetla">Proč zrovna my</p>
          <h2 id="duvera-h" className="sekce-title sekce-title-svetla">
            Elektrikáři, kteří umí i software
          </h2>
          <p className="sekce-perex sekce-perex-svetla">
            RVTech není montážní parta, která se k fotovoltaice přidala loni.
            Stavíme chytré elektroinstalace, vyvíjíme energetický hardware a
            provozujeme dohledové centrum — FVE je pro nás technologie, ne trend.
          </p>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <article key={d.nazev} className="duvod">
              <span className="duvod-stitek">{d.stitek}</span>
              <h3 className="duvod-nazev">{d.nazev}</h3>
              <p className="duvod-text">{d.text}</p>
            </article>
          ))}
        </div>

        <blockquote className="citace">
          <p className="citace-text">
            „Návrh IoT platformy pro 868/169 MHz jsme realizovali s podporou
            Plzeňských voucherů — město Plzeň sází na firmy, které tu opravdu
            něco vyvíjejí.“
          </p>
          <footer className="citace-zdroj">
            Projekt podpořený z rozpočtu statutárního města Plzně
          </footer>
        </blockquote>
      </section>
    </main>
  );
}
