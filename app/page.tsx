import { ArmRotator } from "./motion";

const ARMS = [
  {
    tag: "Zámečnictví",
    lead: "Klíče, zámky a zabezpečení",
    items: [
      {
        h: "Výroba a prodej klíčů",
        d: "Cylindrické, bezpečnostní, kartové, autoklíče, dozické, skříňové i trezorové. Většinu zvládneme na počkání, včetně sjednocení na jeden klíč.",
      },
      {
        h: "Mechanické zabezpečení",
        d: "Zámky, vložky, kování, dveře, samozavírače, čipové systémy a systémy generálního klíče pro byty, firmy i hotely.",
      },
      {
        h: "Služby a montáže",
        d: "Opravy vložek a zámků, montáže a seřízení, sjednocení vložek, poradenství i konzultace přímo na místě.",
      },
    ],
  },
  {
    tag: "Rytecké centrum",
    lead: "Gravírování a razítka",
    items: [
      {
        h: "Rytectví na míru",
        d: "Dveřní štítky, psí známky, firemní cedule, hotelové klíčenky i dárkové předměty. Gravírujeme na kov, plast, dřevo i sklo.",
      },
      {
        h: "Razítka",
        d: "Samonamáčecí, dřevěná, datumová i jednořádková. Vyměníme náhradní štočky i vysušené polštářky.",
      },
    ],
  },
  {
    tag: "Svět nožů",
    lead: "Nožířství a broušení",
    items: [
      {
        h: "Prodej nožířského zboží",
        d: "Zavírací nože, dýky, mačety, nůžky i manikúrní sady od prověřených dodavatelů. Vybere si každý.",
      },
      {
        h: "Broušení nástrojů",
        d: "Nabrousíme nože i nástroje na přesných strojích, které si v našem parku sami hlídáme.",
      },
    ],
  },
];

const REASONS = [
  {
    h: "Garance spokojenosti",
    d: "Každou zakázku řešíme systematicky a individuálně. Nejdřív poradíme, teprve pak vrtáme.",
  },
  {
    h: "Kvalitní sortiment a stroje",
    d: "Strojový park stavíme na elektronických strojích s vysokou přesností a rychlostí. Materiál bereme jen od léty prověřených dodavatelů.",
  },
  {
    h: "Proškolení lidé",
    d: "Zaměstnanci se stále učí novým věcem, aby vám nabídli aktuální řešení zabezpečení bytu, domu, kanceláře i chaty.",
  },
  {
    h: "Velmi široká nabídka",
    d: "Klíče umíme téměř všechny, k tomu vložky, visací zámky, kování, nože, rytectví i broušení — vše pod jednou střechou.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#top">
          <span className="wordmark-over">Zámečnictví</span>
          <span className="wordmark-main">PEČENÝ</span>
          <span className="wordmark-tag">Liberec · pod nemocnicí</span>
        </a>
        <div className="topbar-hours" aria-label="Otevírací doba">
          <span className="hours-k">Otevřeno</span>
          <span className="hours-v">Po–Pá 8:00–17:00</span>
        </div>
      </header>

      <section id="top" className="band band--steel hero">
        <div className="container">
          <p className="eyebrow">
            5. května, centrum Liberce — rodinná dílna přes 50 let na stejné adrese
          </p>

          <div className="hero-cut">
            <h1 className="hero-title">
              Tradiční liberecké
              <br />
              zámečnictví
            </h1>
            <span className="hero-tooth" aria-hidden="true" />
            <span className="hero-cutter" aria-hidden="true" />
          </div>

          <p className="hero-verb">
            <span className="hero-verb-prefix">Tři dílny, jedno řemeslo:</span>{" "}
            <ArmRotator />
          </p>

          <p className="hero-lede">
            Vyrobíme klíč na počkání, spravíme zaseknutý zámek, vygravírujeme
            štítek i psí známku a poradíme se zabezpečením. Přijďte do kamenné
            prodejny, nebo zavolejte pohotovost.
          </p>

          <div className="hero-row">
            <a className="btn btn--brass" href="#sluzby">
              Prohlédnout služby
            </a>
            <a
              className="btn btn--ghost"
              href="https://www.svet-gravirovani.cz"
              rel="noopener"
            >
              E-shop Svět gravírování
            </a>
          </div>

          <aside className="pohotovost" aria-label="Zámečnická pohotovost">
            <span className="pohotovost-k">Zámečnická pohotovost</span>
            <a className="pohotovost-num" href="tel:+420777111222">
              777 111 222
            </a>
            <span className="pohotovost-note">
              Zůstali jste přede dveřmi? Volejte, přijedeme otevřít.
            </span>
          </aside>
        </div>
      </section>

      <div className="tooth-seam" aria-hidden="true" />

      <section id="sluzby" className="band band--nickel">
        <div className="container">
          <div className="section-head">
            <span className="tooth-glyph" aria-hidden="true" />
            <h2 className="section-title">Co u nás pořídíte</h2>
            <p className="section-sub">
              Nabídka se drží tří dílen, které pod jednou adresou fungují společně.
            </p>
          </div>

          <div className="arms">
            {ARMS.map((arm) => (
              <div className="arm" key={arm.tag}>
                <div className="arm-plate">
                  <span className="arm-plate-name">{arm.tag}</span>
                  <span className="arm-plate-lead">{arm.lead}</span>
                </div>
                <ul className="arm-list">
                  {arm.items.map((it) => (
                    <li className="arm-item" key={it.h}>
                      <h3 className="arm-item-h">{it.h}</h3>
                      <p className="arm-item-d">{it.d}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="tooth-seam" aria-hidden="true" />

      <section id="o-nas" className="band band--steel">
        <div className="container about">
          <div className="about-lead">
            <span className="tooth-glyph" aria-hidden="true" />
            <h2 className="section-title">
              Rodinné zámečnictví, které Liberec zná přes 50 let
            </h2>
            <p className="about-text">
              Jsme rodinná firma s dobrým kolektivem spolehlivých lidí. Za víc
              než padesát let jsme kolem klíčové služby postavili nožířství i
              rytecké centrum. Kamenná prodejna stojí pořád na stejné adrese v
              centru Liberce pod nemocnicí — přijďte se podívat a vybrat ze
              širokého sortimentu.
            </p>
            <p className="about-stat">
              <span className="about-stat-num">50+</span>
              <span className="about-stat-lab">let na stejné adrese</span>
            </p>
          </div>

          <div className="reasons">
            {REASONS.map((r) => (
              <div className="reason" key={r.h}>
                <h3 className="reason-h">{r.h}</h3>
                <p className="reason-d">{r.d}</p>
              </div>
            ))}
          </div>

          <div className="visit">
            <div className="visit-block">
              <span className="visit-k">Kamenná prodejna</span>
              <span className="visit-v">Ukázková 123, Liberec</span>
            </div>
            <div className="visit-block">
              <span className="visit-k">Otevřeno</span>
              <span className="visit-v">Po–Pá 8:00–17:00</span>
              <span className="visit-note">So, Ne, svátky: zavřeno</span>
            </div>
            <div className="visit-block">
              <span className="visit-k">Rytecké centrum</span>
              <span className="visit-v">Po–Pá 8:00–12:00 · 12:30–16:00</span>
            </div>
            <div className="visit-block">
              <span className="visit-k">Napište nám</span>
              <span className="visit-v">info@example.cz</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
