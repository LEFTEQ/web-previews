export default function Page() {
  const services = [
    {
      n: "01",
      t: "Vedení účetnictví",
      d: "Kompletní účetnictví a daňová evidence pro liberecké firmy. Co jde, zaúčtujeme automatizovaně a online — šetříme vaše náklady i čas.",
    },
    {
      n: "02",
      t: "Mzdy a personalistika",
      d: "Mzdová agenda, odvody a přihlášky se zpracují v rámci online účetnictví. Vy jen schválíte, my hlídáme termíny.",
    },
    {
      n: "03",
      t: "DPH a daňové přiznání",
      d: "Připravíme a podáme všechny podklady k DPH. Plná podpora při plnění daňových povinností — bez pokut z nedopatření.",
    },
    {
      n: "04",
      t: "Fakturace z mobilu",
      d: "Doklad vystavíte na pár kliknutí, klidně z telefonu. Platby a faktury běží automaticky, přehled máte pořád u sebe.",
    },
    {
      n: "05",
      t: "Reporting a přehledy",
      d: "Neustálý přehled o hospodaření, úhradách faktur, splatnosti dokladů a stavu banky. Vidíte čísla dřív, než je potřebujete.",
    },
    {
      n: "06",
      t: "Zastoupení na úřadech",
      d: "Zastoupíme vás na úřadech i při kontrolách v Liberci a okolí. Individuální přístup a jistota, že je vše včas a správně.",
    },
  ];

  const quotes = [
    {
      q: "Příprava nižších stovek dokladů měsíčně byla velká zátěž. Účtio nám šetří čas nejen při přípravě, ale i při dohledávání starších dokumentů.",
      who: "Martin Tryzna",
      role: "CEO, UX Fans s.r.o.",
    },
    {
      q: "Spolehlivé účetnictví beru jako samozřejmost. Online reporty, které Účtio dává, ale ve světě účetnictví samozřejmé zdaleka nejsou.",
      who: "Rudolf Krejcar",
      role: "Zakladatel, UXF Ventures s.r.o.",
    },
    {
      q: "U startupu v plenkách je pro mě nejdůležitější se o účetnictví a mzdy vůbec nestarat. A to Účtio splňuje dokonale.",
      who: "Tomáš Dragon",
      role: "Jednatel, LocalAdvert s.r.o.",
    },
  ];

  return (
    <>
      <header className="bar">
        <div className="wrap">
          <a className="mark" href="#top" aria-label="Účtio.cz — účetnictví Liberec">
            Účt<b>io</b><span className="dot">.cz</span>
          </a>
          <nav className="nav" aria-label="Hlavní navigace">
            <a href="#sluzby">služby</a>
            <a href="#cenik">ceník</a>
            <a href="#reference">reference</a>
            <a href="#kontakt">kontakt</a>
          </nav>
          <a className="bar-cta" href="tel:+420732267499">Zavolat 732 267 499</a>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap">
          <div className="hero-left">
            <p className="hero-eyebrow">Účetnictví · Liberec · online</p>
            <h1>
              Vaše čísla<br />sedí <em>na haléř</em>.<br />Vy je řešit nemusíte.
            </h1>
            <p className="lead">
              Tým zkušených účetních v Liberci vede vaše účetnictví, mzdy i DPH — automatizovaně a online. Přehled máte pořád u sebe, starosti necháte nám.
            </p>
            <div className="hero-actions">
              <a className="btn-primary" href="#cenik">Nezávazně vyzkoušet</a>
              <a className="btn-ghost" href="tel:+420732267499">Zavolat účetní →</a>
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-photo">
              <img src="/hero.webp" alt="Účetní tým Účtio.cz při zpracování dokladů v kanceláři v Liberci" />
            </div>
            <div className="ledger" role="img" aria-label="Ukázková účetní rozvaha: příjmy, náklady, mzdy a DPH s výsledným zůstatkem.">
              <div className="ledger-head">
                <span>Rozvaha · duben</span>
                <span>zaúčtováno ✓</span>
              </div>
              <div className="ledger-row"><span className="lbl">Tržby z faktur</span><span className="amt pos">+ 428 500</span></div>
              <div className="ledger-row"><span className="lbl">Mzdy a odvody</span><span className="amt neg">− 176 200</span></div>
              <div className="ledger-row"><span className="lbl">Provozní náklady</span><span className="amt neg">− 61 340</span></div>
              <div className="ledger-row"><span className="lbl">DPH k odvodu</span><span className="amt neg">− 39 900</span></div>
              <div className="ledger-total"><span>Zůstatek na účtu</span><span className="amt">+ 151 060 Kč</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <p className="kicker">Co pro vás vedeme</p>
            <h2>Komplexní účetnictví, mzdy a daně — pod jednou střechou.</h2>
            <p>Postaráme se o vše, co jde zpracovat automatizovaně a online. Ušetříme tak nejen vaše náklady, ale při papírování i pár stromů navíc.</p>
          </div>

          <div className="svc-grid">
            {services.map((s) => (
              <article className="svc" key={s.n}>
                <span className="svc-num">{s.n} /</span>
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </div>

          <div className="prices" id="cenik">
            <div className="price">
              <span className="tier">Začínáme</span>
              <p className="desc">Pro začínající firmy s menším počtem dokladů.</p>
              <span className="amt">3 000 Kč <small>/ měsíc</small></span>
              <ul>
                <li><span>Zaúčtování 25 dokladů</span><span>v ceně</span></li>
                <li><span>Jeden bankovní účet</span><span>✓</span></li>
                <li><span>Nadlimitní doklad</span><span>75 Kč/ks</span></li>
                <li><span>Mzda za zaměstnance</span><span>270 Kč</span></li>
              </ul>
            </div>
            <div className="price feat">
              <span className="tier">Standard</span>
              <p className="desc">Pro firmy s desítkami dokladů měsíčně.</p>
              <span className="amt">8 500 Kč <small>/ měsíc</small></span>
              <ul>
                <li><span>Zaúčtování 50 dokladů</span><span>v ceně</span></li>
                <li><span>Více bankovních účtů</span><span>✓</span></li>
                <li><span>Nadlimitní doklad</span><span>50 Kč/ks</span></li>
                <li><span>Správa datové schránky</span><span>400 Kč</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="trust" id="reference">
        <div className="wrap">
          <div className="trust-top">
            <img src="/section-1.webp" alt="Účetní z Účtio.cz konzultuje online přehled hospodaření s klientem" />
            <div className="txt">
              <p className="kicker">Kdo jsme</p>
              <h2>Liberečtí účetní, které máte jako experty na telefonu.</h2>
              <p>Vaše data neleží u nikoho v počítači — používáme aktuální technologie a přístup k dokladům má jen ten, kdo vám účetnictví zpracovává.</p>
              <p>Důvěřují nám malé i středně velké firmy. Začít můžete kdykoliv: vyplníte krátký formulář a ozveme se s konkrétní cenovou nabídkou.</p>
              <span className="local" id="kontakt">Sovova 584/2, Liberec 14 · tryznova@uctio.cz · 732 267 499</span>
            </div>
          </div>

          <p className="kicker">Řekli o nás klienti</p>
          <div className="quotes">
            {quotes.map((c) => (
              <blockquote className="quote" key={c.who}>
                <p>„{c.q}“</p>
                <div className="who"><b>{c.who}</b><span>{c.role}</span></div>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
