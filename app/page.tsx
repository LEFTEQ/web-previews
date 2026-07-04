import type { CSSProperties } from "react";

const sluzby = [
  {
    kod: "K.01",
    nazev: "Otevírání a nouzový výjezd",
    popis: "Zabouchnuté nebo zamčené dveře otevřeme bez poškození. Přijedeme rychle, ať jde o byt, firmu nebo společné prostory SVJ.",
    body: ["Otevření zabouchnutých dveří", "Otevření po ztrátě klíče", "Výjezd po vloupání a zajištění vstupu"],
  },
  {
    kod: "K.02",
    nazev: "Zámky a zabezpečení",
    popis: "Vyměníme vložky, osadíme samozamykací zámky a navrhneme, jak dům nebo provozovnu skutečně zabezpečit.",
    body: ["Výměny zámků a vložek", "Samozamykací zámky", "Přístupové systémy a schránky"],
  },
  {
    kod: "K.03",
    nazev: "Systém generálního klíče",
    popis: "Jeden klíč od vchodu, sklepa i schránky. Navrhneme hierarchii vložek na míru domu a připravíme přesně tolik klíčů, kolik potřebujete.",
    body: ["Návrh hlavního a generálního klíče", "Sjednocení a sestavení vložek", "Kopírování a značení klíčů"],
  },
  {
    kod: "K.04",
    nazev: "Kovovýroba na míru",
    popis: "Mříže, zábradlí, vrata i ocelové konstrukce svaříme podle rozměrů na místě. Kov ohnutý přesně tam, kde ho potřebujete.",
    body: ["Mříže, vrata a zábradlí", "Bezpečnostní zábrany", "Bezbariérové nájezdy a plotové díly"],
  },
  {
    kod: "K.05",
    nazev: "Servis oken a kování",
    popis: "Aby okna zase těsnila a lehce se zavírala. Seřídíme kování, vyměníme těsnění i poškozené díly.",
    body: ["Opravy a seřízení kování", "Výměna těsnění", "Výměna skel"],
  },
  {
    kod: "K.06",
    nazev: "Údržba domu a hodinový manžel",
    popis: "Drobné opravy kolem domu i firmy, které nikdo jiný neřeší. Od výškových prací po zábrany proti holubům.",
    body: ["Opravy kolem budov a firem", "Výškové práce", "Hroty a sítě proti holubům"],
  },
];

const cisla = [
  { hodnota: "1000+", popis: "dokončených zakázek v Plzni a okolí" },
  { hodnota: "15 let", popis: "denně u dveří, zámků a kování" },
  { hodnota: "200+", popis: "oprav a zajištění po vloupání" },
];

const reference = [
  {
    text: "Zabouchla jsem si klíče v bytě a do 20 minut byl technik na místě. Dveře otevřel bez poškození a poradil, jak předejít podobným problémům. Skvělý přístup a férová cena.",
    kdo: "Petra K.",
    role: "Plzeň",
  },
  {
    text: "Nechali jsme si namontovat přístupový systém a vyměnit několik zámků. Vše proběhlo rychle a čistě. Oceňuji komunikaci i to, že nám doporučili lepší řešení, než jsme původně chtěli.",
    kdo: "Martin S.",
    role: "správce SVJ",
  },
  {
    text: "Po nepříjemném vloupání dorazili během pár hodin, opravili dveře, vyměnili zámek a poradili s dalším zabezpečením. Cítila jsem se zase bezpečně. Určitě doporučuji.",
    kdo: "Petr L.",
    role: "Plzeň",
  },
];

export default function Page() {
  return (
    <main className="fs">
      <header className="fs-topbar">
        <a className="fs-brand" href="#" aria-label="FŠ Servis Plzeň — domovská stránka">
          <span className="fs-brand-mark" aria-hidden="true">
            <span className="fs-bit" />
          </span>
          <span className="fs-brand-word">
            <span className="fs-brand-fs">FŠ</span>
            <span className="fs-brand-rest">Servis Plzeň</span>
          </span>
        </a>
        <a className="fs-call" href="tel:+420731802977">
          <span className="fs-call-label">Nonstop výjezd</span>
          <span className="fs-call-num">+420 731 802 977</span>
        </a>
      </header>

      <section className="fs-hero" aria-labelledby="fs-hero-title">
        <div className="fs-hero-grid" aria-hidden="true">
          <div className="fs-key">
            <div className="fs-key-bow" />
            <div className="fs-key-blade">
              <span className="fs-tooth" style={{ "--h": "52%" } as CSSProperties} />
              <span className="fs-tooth" style={{ "--h": "28%" } as CSSProperties} />
              <span className="fs-tooth" style={{ "--h": "66%" } as CSSProperties} />
              <span className="fs-tooth" style={{ "--h": "40%" } as CSSProperties} />
              <span className="fs-tooth" style={{ "--h": "74%" } as CSSProperties} />
              <span className="fs-tooth" style={{ "--h": "34%" } as CSSProperties} />
            </div>
          </div>
        </div>

        <div className="fs-hero-inner">
          <p className="fs-eyebrow">
            <span className="fs-eyebrow-dot" aria-hidden="true" />
            Zámečnictví · Plzeň, Nad Nádrží
          </p>
          <h1 id="fs-hero-title" className="fs-hero-title">
            Když se dveře <em>nezavřou</em>,<br />
            zavolejte dřív, než&nbsp;lámete.
          </h1>
          <p className="fs-hero-lead">
            Zabouchnuté dveře, vylomený zámek nebo okno, které netěsní.
            Přijedeme, otevřeme bez škody a spravíme to pořádně — pro
            domácnosti, SVJ i firmy po celé Plzni.
          </p>
          <div className="fs-hero-actions">
            <a className="fs-btn fs-btn-primary" href="tel:+420731802977">Zavolat zámečníkovi</a>
            <a className="fs-btn fs-btn-ghost" href="#sluzby">Co umíme</a>
          </div>
        </div>
      </section>

      <section className="fs-services" id="sluzby" aria-labelledby="fs-services-title">
        <div className="fs-section-head">
          <p className="fs-eyebrow">Otisk klíče — šest zubů, šest oborů</p>
          <h2 id="fs-services-title" className="fs-section-title">
            Jeden svářeč, jedno auto plné nářadí, celé řemeslo.
          </h2>
          <p className="fs-section-lead">
            Nesejmeme jen zabouchnuté dveře a odjedeme. Zvládneme zámek,
            kování, mříž na míru i drobnou opravu, kterou nikdo jiný nechce
            řešit. Vyberte, o co jde.
          </p>
        </div>

        <ul className="fs-cards">
          {sluzby.map((s) => (
            <li className="fs-card" key={s.kod}>
              <span className="fs-card-kod" aria-hidden="true">{s.kod}</span>
              <h3 className="fs-card-title">{s.nazev}</h3>
              <p className="fs-card-desc">{s.popis}</p>
              <ul className="fs-card-list">
                {s.body.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="fs-trust" aria-labelledby="fs-trust-title">
        <div className="fs-trust-head">
          <p className="fs-eyebrow fs-eyebrow-light">O nás · reference</p>
          <h2 id="fs-trust-title" className="fs-section-title">
            15 let stojíme na správné straně dveří.
          </h2>
        </div>

        <div className="fs-numbers">
          {cisla.map((c) => (
            <div className="fs-number" key={c.hodnota}>
              <span className="fs-number-val">{c.hodnota}</span>
              <span className="fs-number-desc">{c.popis}</span>
            </div>
          ))}
        </div>

        <ul className="fs-quotes">
          {reference.map((r) => (
            <li className="fs-quote" key={r.kdo}>
              <p className="fs-quote-text">{r.text}</p>
              <p className="fs-quote-who">
                <span className="fs-quote-name">{r.kdo}</span>
                <span className="fs-quote-role">{r.role}</span>
              </p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
