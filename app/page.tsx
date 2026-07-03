export default function Page() {
  const zones = [
    { name: "Centrum + Klíše", time: "do 30 min", fee: "rozvoz zdarma od 350 Kč" },
    { name: "Severní Terasa + Střekov", time: "do 40 min", fee: "rozvoz 39 Kč" },
    { name: "Krásné Březno + Bukov", time: "do 40 min", fee: "rozvoz 39 Kč" },
    { name: "Trmice + Chabařovice", time: "do 55 min", fee: "rozvoz 59 Kč" },
  ];

  const menu = [
    {
      tag: "TACOS",
      name: "Tacos al pastor",
      desc: "Tři kukuřičné tortilly, marinované vepřové, ananas, cibule, koriandr. Balíme těsně před výjezdem, dorazí teplé a nerozmočené.",
      price: "189 Kč",
    },
    {
      tag: "BURRITOS",
      name: "Burrito con carne",
      desc: "Půlkilové burrito s trhaným hovězím, rýží, černými fazolemi a pico de gallo. Jedno stačí na oběd i večeři.",
      price: "219 Kč",
    },
    {
      tag: "QUESADILLAS",
      name: "Quesadilla de pollo",
      desc: "Grilované kuře, tavený sýr, jalapeños. Krájíme na čtvrtky, jí se rukama — ubrousky přibalíme.",
      price: "179 Kč",
    },
    {
      tag: "NACHOS",
      name: "Nachos grande",
      desc: "Kukuřičné chipsy, cheddar, guacamole, zakysaná smetana, pikantní salsa roja. Porce pro dva, sledování filmu doporučeno.",
      price: "199 Kč",
    },
    {
      tag: "BOWLS",
      name: "Burrito bowl vegetariana",
      desc: "Vše z burrita bez tortilly: rýže, fazole, grilovaná zelenina, kukuřice, guacamole. Bez masa, ne bez chuti.",
      price: "189 Kč",
    },
    {
      tag: "POSTRE",
      name: "Churros s čokoládou",
      desc: "Osm kusů, skořicový cukr, hustá čokoládová omáčka zvlášť, aby churros zůstaly křupavé i po cestě přes město.",
      price: "119 Kč",
    },
  ];

  const promises = [
    {
      k: "CALIENTE",
      t: "Teplé, nebo znovu",
      d: "Jídlo vozíme v termoboxech a plánujeme trasy po Ústí tak, aby žádná objednávka nečekala. Když dorazí studené, uděláme ho znovu a přivezeme zdarma.",
    },
    {
      k: "FRESCO",
      t: "Salsy mícháme každé ráno",
      d: "Guacamole, pico de gallo i salsa verde vznikají denně v kuchyni na Mírovém náměstí. Co ráno nenamícháme, večer neprodáváme.",
    },
    {
      k: "RÁPIDO",
      t: "Víme, kde jsme",
      d: "Naši řidiči jezdí jen po Ústí a okolí — znají zkratky přes Klíši i večerní kolony na Střekovském mostě. Proto si troufáme slibovat časy dojezdu.",
    },
  ];

  return (
    <main className="pl">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="nav" aria-label="Hlavní navigace">
          <a href="#" className="wordmark" aria-label="Pepe Lopez — úvod">
            <span className="wordmark-pepe">PEPE</span>
            <span className="wordmark-lopez">LOPEZ</span>
          </a>
          <div className="nav-links">
            <a href="#menu">Menu</a>
            <a href="#rozvoz">Rozvoz</a>
            <a href="tel:+420475000111" className="nav-call">475 000 111</a>
          </div>
        </nav>

        <div className="hero-inner">
          <p className="hero-eyebrow">
            <span className="chile" aria-hidden="true">🌶</span> Mexická kuchyně · rozvoz po Ústí nad Labem
          </p>
          <h1 className="hero-title">
            <span className="line line-1">TACOS</span>
            <span className="line line-2">K&nbsp;VAŠIM</span>
            <span className="line line-3">DVEŘÍM</span>
          </h1>
          <p className="hero-sub">
            Vaříme na Mírovém náměstí, vozíme do celého Ústí. Objednáte do telefonu,
            za třicet minut zvoníme — a burrito je pořád horké.
          </p>
          <div className="hero-actions">
            <a href="tel:+420475000111" className="btn btn-solid">Zavolat a objednat</a>
            <a href="#menu" className="btn btn-ghost">Prohlédnout menu</a>
          </div>
          <p className="hero-hours">Rozvážíme denně 11.00–22.00 · minimální objednávka 250 Kč</p>
        </div>

        {/* signature: papel picado – vystřihovaný lem mezi hero a obsahem */}
        <div className="picado" aria-hidden="true">
          <svg viewBox="0 0 1200 56" preserveAspectRatio="none" focusable="false">
            <path
              d="M0,0 L1200,0 L1200,20 L1180,20 L1170,44 L1160,20 L1120,20 L1110,44 L1100,20 L1060,20 L1050,44 L1040,20 L1000,20 L990,44 L980,20 L940,20 L930,44 L920,20 L880,20 L870,44 L860,20 L820,20 L810,44 L800,20 L760,20 L750,44 L740,20 L700,20 L690,44 L680,20 L640,20 L630,44 L620,20 L580,20 L570,44 L560,20 L520,20 L510,44 L500,20 L460,20 L450,44 L440,20 L400,20 L390,44 L380,20 L340,20 L330,44 L320,20 L280,20 L270,44 L260,20 L220,20 L210,44 L200,20 L160,20 L150,44 L140,20 L100,20 L90,44 L80,20 L40,20 L30,44 L20,20 L0,20 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </header>

      {/* ===== MENU ===== */}
      <section id="menu" className="section menu" aria-labelledby="menu-h">
        <div className="section-head">
          <p className="eyebrow">La carta · co dnes vezeme</p>
          <h2 id="menu-h">Nejobjednávanější jídla</h2>
          <p className="section-lead">
            Kompletní menu s alergeny vám nadiktujeme do telefonu. Tohle je šest věcí,
            které si Ústí objednává nejčastěji.
          </p>
        </div>

        <ul className="menu-grid">
          {menu.map((m) => (
            <li key={m.name} className="dish">
              <p className="dish-tag">{m.tag}</p>
              <h3 className="dish-name">{m.name}</h3>
              <p className="dish-desc">{m.desc}</p>
              <p className="dish-price">{m.price}</p>
            </li>
          ))}
        </ul>

        <p className="menu-note">
          Ke každé objednávce nad 500 Kč přibalíme domácí limonádu agua de jamaica zdarma.
        </p>
      </section>

      {/* ===== ROZVOZ + DŮVĚRA ===== */}
      <section id="rozvoz" className="section delivery" aria-labelledby="rozvoz-h">
        <div className="section-head">
          <p className="eyebrow eyebrow-light">El reparto · kam a za kolik</p>
          <h2 id="rozvoz-h">Rozvážíme po celém Ústí</h2>
          <p className="section-lead section-lead-light">
            Časy dojezdu měříme od potvrzení objednávky. V pátek a v sobotu večer
            počítejte s deseti minutami navíc.
          </p>
        </div>

        <table className="zones">
          <caption className="visually-hidden">Rozvozové zóny, časy dojezdu a cena rozvozu</caption>
          <thead>
            <tr>
              <th scope="col">Čtvrť</th>
              <th scope="col">Dojezd</th>
              <th scope="col">Cena rozvozu</th>
            </tr>
          </thead>
          <tbody>
            {zones.map((z) => (
              <tr key={z.name}>
                <td>{z.name}</td>
                <td>{z.time}</td>
                <td>{z.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="promises">
          {promises.map((p) => (
            <article key={p.k} className="promise">
              <p className="promise-k">{p.k}</p>
              <h3>{p.t}</h3>
              <p>{p.d}</p>
            </article>
          ))}
        </div>

        <blockquote className="quote">
          <p>
            „Objednáváme každý pátek pro celou kancelář na Klíši. Za rok se nestalo,
            že by burrita dorazila pozdě nebo studená.“
          </p>
          <cite>— Marek, stálý zákazník ze Severní Terasy</cite>
        </blockquote>
      </section>
    </main>
  );
}
