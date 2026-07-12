export default function Page() {
  const routes = [
    {
      no: "01",
      title: "Kusové zásilky po ČR",
      text: "Od jedné palety po částečný náklad. Svezeme, přeložíme a druhý den doručíme — s avízem řidiče a číslem, podle kterého zásilku vidíte celou cestu.",
      lane: "OLOMOUC → CZ",
    },
    {
      no: "02",
      title: "Kusové zásilky po Evropě",
      text: "Pravidelné linky do Německa, Rakouska, Polska a Beneluxu. Konsolidujeme na našem překladišti, takže platíte jen za místo, které opravdu zaberete.",
      lane: "CZ → EU",
    },
    {
      no: "03",
      title: "Celovozová přeprava",
      text: "Plachta, box i chlazení. Jeden náklad, jeden řidič, přímá jízda z rampy na rampu — bez překládek a bez zdržení.",
      lane: "FTL · CELÝ VŮZ",
    },
    {
      no: "04",
      title: "Skladování a spedice",
      text: "Uskladníme, zabalíme a odbavíme papíry za vás. Naši spedici řídí lidé v Olomouci, kterým můžete zavolat a hned se domluvit.",
      lane: "SKLAD · CLO",
    },
  ];

  const miles = [
    { n: "1996", l: "Vozíme od roku" },
    { n: "27", l: "Zemí v pravidelných linkách", em: true },
    { n: "24h", l: "Doručení v rámci ČR" },
    { n: "ADR", l: "Nebezpečný náklad" },
  ];

  return (
    <main>
      <header className="nav">
        <div className="wrap">
          <a className="mark" href="#" aria-label="KD Transport, domovská stránka">
            <span className="kd">KD</span>
            <span className="rest">TRANSPORT · SPEDICE</span>
          </a>
          <nav className="nav-links" aria-label="Hlavní navigace">
            <a href="#sluzby">Přeprava</a>
            <a href="#o-nas">O firmě</a>
            <a className="nav-tel" href="tel:+420587301311">+420 587 301 311</a>
          </nav>
        </div>
      </header>

      <section className="hero">
        <div className="hero-media">
          <img src="/hero.webp" alt="Kamion KD Transport na silnici u Olomouce za soumraku" />
        </div>
        <div className="wrap">
          <div className="hero-inner">
            <p className="hero-eyebrow rise d1">Mezinárodní zasilatelství · Olomouc</p>
            <h1 className="rise d2">
              Naložíme dnes, <em>doručíme</em> <span className="stroke">včas.</span>
            </h1>
            <p className="lead rise d3">
              Rodinná olomoucká spedice, která už skoro tři dekády vozí
              zboží českých firem po Evropě. Žádné odbavení přes cizí
              call-centrum — telefon zvedne dispečer, který váš náklad zná.
            </p>
            <div className="hero-cta rise d4">
              <a className="btn btn-primary" href="tel:+420587301311">Zavolat dispečink</a>
              <a className="btn btn-ghost" href="#sluzby">Prohlédnout přepravu</a>
            </div>
          </div>
        </div>
        <div className="mileage">
          <div className="wrap">
            {miles.map((m) => (
              <div className="mile" key={m.l}>
                <b>{m.em ? <em>{m.n}</em> : m.n}</b>
                <span>{m.l}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light" id="sluzby">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-tag">Co pro vás vozíme</p>
              <h2>Čtyři směry,<br />jedna dispečerka</h2>
            </div>
          </div>

          <div className="routes">
            {routes.map((r) => (
              <article className="route" key={r.no}>
                <div className="route-no">{r.no}</div>
                <div className="route-body">
                  <h3>{r.title}</h3>
                  <p>{r.text}</p>
                </div>
                <div className="route-lane">{r.lane}</div>
              </article>
            ))}
          </div>

          <div className="routes-grid">
            <img
              src="/section-1.webp"
              alt="Nakládka palet do návěsu KD Transport na překladišti"
            />
            <img
              src="/section-2.webp"
              alt="Řidič KD Transport kontroluje náklad před odjezdem"
            />
          </div>
        </div>
      </section>

      <section className="section" id="o-nas">
        <div className="wrap">
          <div className="sec-head">
            <div>
              <p className="sec-tag">Proč zrovna my</p>
              <h2>Vůz najdete,<br />člověka taky</h2>
            </div>
          </div>

          <div className="trust-grid">
            <div className="trust-media">
              <img
                src="/section-2.webp"
                alt="Vozový park KD Transport na dvoře firmy v Olomouci"
              />
              <div className="stamp">
                <b>28 let</b>
                na cestách z Olomouce
              </div>
            </div>
            <div className="trust-copy">
              <p className="big">
                Jsme <strong>KD Transport</strong> — česká spedice, která vlastní
                svá auta, zná svoje řidiče a za každou zásilku ručí jménem, ne
                jen razítkem na faktuře.
              </p>
              <p className="small">
                Zákazník u nás nezůstane viset v e-mailové frontě. Dispečink
                v Olomouci má přehled o každém voze v reálném čase, takže když
                zavoláte, hned víme, kde vaše paleta právě je.
              </p>
              <p className="small">
                Vozíme běžné zboží i nebezpečné náklady v režimu ADR, zajistíme
                celní odbavení a v případě potřeby zboží uskladníme, než pro něj
                dozraje ten správný termín.
              </p>

              <div className="certs">
                <span className="cert">ADR · nebezpečný náklad</span>
                <span className="cert">Pojištění CMR</span>
                <span className="cert">Celní odbavení EU</span>
                <span className="cert">Sledování zásilek 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
