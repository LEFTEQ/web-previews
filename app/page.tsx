import type { ReactNode } from "react";

type Swatch = { vlt: string; use: string; tone: string };

const LADDER: Swatch[] = [
  { vlt: "70", use: "Čelní a přední boční", tone: "s70" },
  { vlt: "50", use: "Komfort proti oslnění", tone: "s50" },
  { vlt: "35", use: "Decentní tón", tone: "s35" },
  { vlt: "20", use: "Zadní část vozu", tone: "s20" },
  { vlt: "05", use: "Blackout, soukromí", tone: "s05" },
];

function Ladder({ label }: { label?: string }): ReactNode {
  return (
    <div className="rv-ladder" role="img" aria-label="Vzorník tmavosti fólie od 70 % do 5 % propustnosti světla">
      {label ? <span className="rv-ladder-label">{label}</span> : null}
      <div className="rv-strip">
        {LADDER.map((s) => (
          <div key={s.vlt} className={`rv-swatch rv-${s.tone}`}>
            <span className="rv-swatch-vlt">{s.vlt}%</span>
            <span className="rv-swatch-use">{s.use}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

const SERVICES = [
  {
    vlt: "70",
    tone: "s70",
    title: "Atestované fólie na přední skla",
    body: "Čelní a přední boční skla tónujeme jen fóliemi s atestem, které splňují zákonnou propustnost. Projdete technickou i silniční kontrolou.",
  },
  {
    vlt: "35",
    tone: "s35",
    title: "Tónování bočních a zadních skel",
    body: "Řezané na míru karoserie a natažené bez demontáže skel i čalounění. Vyberete si tmavost, my ji přesně dodržíme přes celou plochu.",
  },
  {
    vlt: "20",
    tone: "s20",
    title: "Okenní fólie pro domy a provozovny",
    body: "Protisluneční, bezpečnostní i pohledové fólie na okna budov. Sníží přehřívání místností a oslnění monitorů, aniž byste zatemnili.",
  },
  {
    vlt: "05",
    tone: "s05",
    title: "Odstranění staré fólie a přetónování",
    body: "Sundáme popraskanou nebo zežloutlou fólii, skla vyčistíme do čista a natáhneme novou. Poradíme i s bublinami po jiné dílně.",
  },
];

const PRICES = [
  { vlt: "70", tone: "s70", item: "Čelní protisluneční pruh", price: "od 600 Kč" },
  { vlt: "50", tone: "s50", item: "Přední boční skla (pár)", price: "od 1 200 Kč" },
  { vlt: "20", tone: "s20", item: "Kompletní zadní část vozu (5 skel)", price: "od 2 900 Kč" },
  { vlt: "05", tone: "s05", item: "Okenní fólie na budovy", price: "od 690 Kč/m²" },
];

export default function Page(): ReactNode {
  return (
    <main className="rv">
      <header className="rv-top">
        <a className="rv-wordmark" href="#hero" aria-label="REVENA, autofólie Brno">
          <span className="rv-wordmark-name">REVENA</span>
          <span className="rv-wordmark-sub">autofólie&nbsp;·&nbsp;Brno</span>
        </a>
        <nav className="rv-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#cenik">Ceník</a>
          <a href="#firma">O nás</a>
          <a className="rv-nav-call" href="tel:+420602183704">Zavolat</a>
        </nav>
      </header>

      <section className="rv-hero" id="hero">
        <div className="rv-hero-copy">
          <p className="rv-eyebrow">Tónování autoskel · Brno-Židenice · od roku 1994</p>
          <h1 className="rv-h1">
            Vyberte&nbsp;si,
            <br />
            kolik světla
            <br />
            <span className="rv-h1-accent">pustíte dovnitř.</span>
          </h1>
          <p className="rv-lede">
            Řezané autofólie natahujeme bez demontáže skel i čalounění. Od atestovaného
            odstínu na čelní sklo až po blackout na zadní část — tmavost si určíte vy,
            přesnost dodáme my.
          </p>
          <div className="rv-actions">
            <a className="rv-btn" href="tel:+420602183704">Zavolat 602&nbsp;183&nbsp;704</a>
            <a className="rv-btn rv-btn-ghost" href="#cenik">Prohlédnout ceník</a>
          </div>
        </div>

        <div className="rv-hero-glass" aria-hidden="true">
          <div className="rv-pane">
            <div className="rv-film" />
            <div className="rv-squeegee" />
            <div className="rv-vlt-read">
              <span className="rv-vlt-num">20%</span>
              <span className="rv-vlt-cap">VLT · propustnost světla</span>
            </div>
          </div>
          <p className="rv-pane-cap">Squeegee ladí fólii z denního světla do kouřového tónu.</p>
        </div>
      </section>

      <Ladder label="Vzorník tmavosti — od denního světla po blackout" />

      <section className="rv-section" id="sluzby">
        <div className="rv-section-head">
          <p className="rv-eyebrow">Co u nás vyřešíte</p>
          <h2 className="rv-h2">Čtyři práce, jedno řemeslo</h2>
          <p className="rv-section-note">
            Každou službu čteme na stupnici tmavosti fólie — od průhledných 70&nbsp;%
            po neprůhledných 5&nbsp;%. Číslo VLT vlevo je zároveň odstín, který dostanete.
          </p>
        </div>
        <ul className="rv-services">
          {SERVICES.map((s) => (
            <li key={s.vlt} className="rv-service">
              <span className={`rv-chip rv-${s.tone}`}>{s.vlt}%</span>
              <div className="rv-service-body">
                <h3 className="rv-service-title">{s.title}</h3>
                <p>{s.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="rv-section rv-section-dark" id="cenik">
        <div className="rv-section-head">
          <p className="rv-eyebrow rv-eyebrow-amber">Orientační ceník</p>
          <h2 className="rv-h2">Cena podle vozu a odstínu</h2>
          <p className="rv-section-note">
            Přesnou cenu řekneme po prohlídce vozu — záleží na počtu skel, tvaru
            oken a zvolené tmavosti. Tady je, od čeho se odpíchnout.
          </p>
        </div>
        <div className="rv-price-table">
          {PRICES.map((p) => (
            <div key={p.item} className="rv-price-row">
              <span className={`rv-chip rv-${p.tone}`}>{p.vlt}%</span>
              <span className="rv-price-item">{p.item}</span>
              <span className="rv-price-value">{p.price}</span>
            </div>
          ))}
        </div>
        <p className="rv-price-foot">
          Ceny jsou orientační a včetně materiálu i práce. Fólie i montáž se zárukou.
        </p>
      </section>

      <section className="rv-section" id="firma">
        <div className="rv-firma">
          <div className="rv-firma-copy">
            <p className="rv-eyebrow">O firmě REVENA</p>
            <h2 className="rv-h2">Rodinná dílna, 30 let u jedné fólie</h2>
            <p className="rv-firma-lede">
              Autofólie v Brně-Židenicích táhneme od roku 1994. Za tu dobu jsme
              vychytali detaily, na kterých práce stojí: čisté hrany kolem těsnění,
              žádné bubliny a odstín, který drží roky bez zežloutnutí.
            </p>
            <ul className="rv-facts">
              <li>
                <span className="rv-fact-k">Bez demontáže</span>
                <span className="rv-fact-v">Skla ani čalounění nerozebíráme.</span>
              </li>
              <li>
                <span className="rv-fact-k">S atestem</span>
                <span className="rv-fact-v">Certifikované fólie pro přední skla.</span>
              </li>
              <li>
                <span className="rv-fact-k">Se zárukou</span>
                <span className="rv-fact-v">Na fólii i na provedenou montáž.</span>
              </li>
            </ul>
          </div>
          <aside className="rv-card" aria-label="Kontakt na dílnu">
            <p className="rv-card-eyebrow">Dílna a objednání</p>
            <address className="rv-card-addr">
              Šámalova&nbsp;89
              <br />
              615&nbsp;00 Brno-Židenice
            </address>
            <a className="rv-card-tel" href="tel:+420602183704">602&nbsp;183&nbsp;704</a>
            <a className="rv-card-tel rv-card-tel-alt" href="tel:+420602262915">602&nbsp;262&nbsp;915</a>
            <a className="rv-card-mail" href="mailto:autofoliebrno@seznam.cz">autofoliebrno@seznam.cz</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
