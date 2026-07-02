const sluzby = [
  {
    kod: "LPG",
    nazev: "Propan-butan a LPG",
    popis:
      "Dodávky propan-butanu v lahvích i velkoobjemově. Plníme lahve 2, 10 i 33 kg, zajistíme pravidelný závoz pro domácnosti, restaurace i stavby v Hradci Králové a okolí.",
    detail: "Lahve 2 / 10 / 33 kg · velkoobjemové dodávky",
  },
  {
    kod: "TECH",
    nazev: "Plyn pro řezání a sváření",
    popis:
      "Technické plyny pro dílny, zámečnictví a průmyslovou výrobu. Řezací směsi nové generace hoří stabilněji a čistěji než acetylén — ušetříte na spotřebě i na čase.",
    detail: "Řezací směsi · stabilní plamen · nižší spotřeba",
  },
  {
    kod: "ČS",
    nazev: "Čerpací stanice LPG",
    popis:
      "Provozujeme čerpací stanice LPG a stavíme nové na klíč. Od projektu přes technologii až po kolaudaci — vše z jedné ruky, s revizemi v ceně provozu.",
    detail: "Provoz · výstavba na klíč · technologie",
  },
  {
    kod: "REV",
    nazev: "Servis a revize čerpacích stanic",
    popis:
      "Pravidelné revize, tlakové zkoušky a servis výdejních stojanů. Hlídáme termíny za vás — před koncem platnosti revize se ozveme sami.",
    detail: "Revize · tlakové zkoušky · servis stojanů",
  },
  {
    kod: "DOP",
    nazev: "Doprava a logistika plynu",
    popis:
      "Vlastní cisterny a vozy pro rozvoz lahví po celých východních Čechách. U našeho areálu najdete i hlídané parkoviště pro kamiony.",
    detail: "Vlastní cisterny · parkoviště pro kamiony",
  },
];

const skupina = [
  { nazev: "Profer s.r.o.", role: "obchod s technickými plyny" },
  { nazev: "Profer Top s.r.o.", role: "velkoobchod LPG" },
  { nazev: "Profer Plus s.r.o.", role: "čerpací stanice a servis" },
  { nazev: "Profer Asistent s.r.o.", role: "doprava a logistika" },
  { nazev: "Tempo Gas a.s.", role: "distribuce propan-butanu" },
  { nazev: "Profer Gun s.r.o.", role: "řezací technika" },
];

export default function Page() {
  return (
    <main className="pf">
      {/* ===== HERO ===== */}
      <header className="pf-hero">
        <div className="pf-hero-top">
          <div className="pf-wordmark" aria-label="Profer Plus">
            <span className="pf-wordmark-main">PROFER</span>
            <span className="pf-wordmark-plus" aria-hidden="true">+</span>
            <span className="pf-wordmark-sub">plus · plynařství · Hradec Králové</span>
          </div>
          <a className="pf-hero-tel" href="tel:+420495000000">
            Zavolat dispečink
          </a>
        </div>

        <div className="pf-hero-body">
          <p className="pf-hero-eyebrow">
            <span className="pf-gauge" aria-hidden="true">
              <span className="pf-gauge-needle" />
            </span>
            Tlak držíme od roku 1994
          </p>

          <h1 className="pf-hero-title">
            <span className="pf-hero-line pf-hero-line-1">Plyn, který</span>
            <span className="pf-hero-line pf-hero-line-2">
              <em>řeže</em>, vaří
            </span>
            <span className="pf-hero-line pf-hero-line-3">i pohání.</span>
          </h1>

          <p className="pf-hero-sub">
            Propan-butan, technické plyny a čerpací stanice LPG pro východní
            Čechy. Lahev vám dovezeme, stanici postavíme, revizi pohlídáme.
          </p>

          <div className="pf-hero-cta">
            <a className="pf-btn pf-btn-flame" href="#sluzby">
              Co dodáváme
            </a>
            <a className="pf-btn pf-btn-ghost" href="tel:+420495000000">
              495 000 000
            </a>
          </div>
        </div>

        {/* signature: plamenová stupnice — od modrého jádra po žlutou špičku */}
        <div className="pf-flamebar" aria-hidden="true">
          <span className="pf-flamebar-seg s1" />
          <span className="pf-flamebar-seg s2" />
          <span className="pf-flamebar-seg s3" />
          <span className="pf-flamebar-seg s4" />
          <span className="pf-flamebar-seg s5" />
          <span className="pf-flamebar-label l1">jádro plamene · 3 100 °C</span>
          <span className="pf-flamebar-label l2">špička · 1 200 °C</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="pf-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="pf-section-head">
          <h2 id="sluzby-h">Co u nás natankujete, koupíte a objednáte</h2>
          <p>
            Pět věcí, které děláme každý den. Žádné zprostředkování — vlastní
            sklad, vlastní cisterny, vlastní technici.
          </p>
        </div>

        <ul className="pf-sluzby-grid">
          {sluzby.map((s) => (
            <li className="pf-karta" key={s.kod}>
              <span className="pf-karta-kod" aria-hidden="true">
                {s.kod}
              </span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="pf-karta-detail">{s.detail}</p>
            </li>
          ))}
          <li className="pf-karta pf-karta-cta">
            <h3>Nevíte, jaký plyn potřebujete?</h3>
            <p>
              Popište nám, co řežete, vaříte nebo pohaníte — poradíme směs i
              velikost lahve po telefonu.
            </p>
            <a className="pf-btn pf-btn-flame" href="tel:+420495000000">
              Poradit se zdarma
            </a>
          </li>
        </ul>
      </section>

      {/* ===== DŮVĚRA / SKUPINA ===== */}
      <section className="pf-skupina" aria-labelledby="skupina-h">
        <div className="pf-skupina-inner">
          <div className="pf-skupina-text">
            <h2 id="skupina-h">
              Šest firem, jedno řemeslo: <em>plyn</em>
            </h2>
            <p>
              Profer Plus je součástí skupiny PROFER GROUP z Hradce Králové.
              Od distribuce propan-butanu přes výstavbu čerpacích stanic až po
              řezací techniku — celý řetězec máme ve vlastních rukou. Když u
              nás objednáte lahev, veze ji náš řidič z našeho skladu.
            </p>
            <ul className="pf-fakta">
              <li>
                <strong>30 let</strong>
                <span>s plynem ve východních Čechách</span>
              </li>
              <li>
                <strong>6 firem</strong>
                <span>skupiny PROFER GROUP</span>
              </li>
              <li>
                <strong>1 areál</strong>
                <span>sklad, plnírna i parkoviště kamionů</span>
              </li>
            </ul>
            <p className="pf-eu">
              Projekty skupiny spolufinancuje EU — analýza rizik a
              energeticky úsporná opatření v areálu.
            </p>
          </div>

          <ol className="pf-skupina-list">
            {skupina.map((f) => (
              <li key={f.nazev} className={f.nazev.includes("Plus") ? "je-my" : undefined}>
                <span className="pf-skupina-nazev">{f.nazev}</span>
                <span className="pf-skupina-role">{f.role}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
