// LANEX Olomouc s.r.o. — stavební firma, komplexní regenerace panelových a cihlových domů
// Design: "Panelový rastr" — signature prvek odvozený z fasády panelového domu.
// Server komponenta, žádné knihovny, žádný footer (dodá studio).

const sluzby = [
  {
    krok: "Rozvaha",
    nazev: "Cenová rozvaha a financování",
    popis:
      "Spočítáme, kolik bude regenerace vašeho domu stát, a pomůžeme zajistit úvěr — včetně zvýhodněného financování z programu IROP. Výbor SVJ dostane podklady, kterým porozumí i bez stavaře.",
  },
  {
    krok: "Projekt",
    nazev: "Projektová dokumentace a povolení",
    popis:
      "Zajistíme projekt, energetický audit a štítek, statické výpočty i návrh architektonického řešení. Stavební povolení a všechny formality vyřídíme za vás.",
  },
  {
    krok: "Stavba",
    nazev: "Zateplení a regenerace domu",
    popis:
      "Zateplení fasády, sanace balkonů a lodžií, výměna oken, oprava střechy. Stavíme za provozu domu — obyvatelé vědí dopředu, co se kdy děje.",
  },
  {
    krok: "Kolaudace",
    nazev: "Předání a kolaudace",
    popis:
      "Zakázku dotáhneme až po kolaudaci. Předáme kompletní dokumentaci skutečného provedení a záruky. Dům je hotový, když je hotový úředně i lidsky.",
  },
];

const certifikace = [
  { rok: "1992", text: "Založení firmy v Olomouci" },
  { rok: "2002", text: "ISO 9001 — systém řízení kvality" },
  { rok: "2009", text: "ISO 14001 — environmentální management" },
  { rok: "2010", text: "ISO 45001 — bezpečnost a ochrana zdraví při práci" },
];

const podpora = [
  "Nadace Rakovina věc veřejná Olomouc — výzkum v Laboratoři experimentální medicíny",
  "SPOLU Olomouc — integrace dětí s mentálním a kombinovaným postižením",
  "JITRO Olomouc — komplexní péče o zdravotně postižené děti",
  "Junák — svaz skautů, TK Olymp a kulturní akce města Olomouce",
];

export default function Page() {
  return (
    <main className="lx">
      {/* ===== HLAVIČKA ===== */}
      <header className="lx-top">
        <a className="lx-wordmark" href="#" aria-label="LANEX Olomouc — úvod">
          <span className="lx-wordmark-lanex">LANEX</span>
          <span className="lx-wordmark-ol">Olomouc</span>
        </a>
        <nav className="lx-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Jak stavíme</a>
          <a href="#duvera">Proč nám věřit</a>
          <a className="lx-nav-tel" href="tel:+420585000000">
            Zavolat
          </a>
        </nav>
      </header>

      {/* ===== HERO — panelový rastr ===== */}
      <section className="lx-hero" aria-labelledby="hero-title">
        <div className="lx-hero-grid" aria-hidden="true">
          {/* Fasáda panelového domu: rastr "panelů", několik z nich zateplených (barevných) */}
          <div className="lx-panel" />
          <div className="lx-panel lx-panel--okno" />
          <div className="lx-panel" />
          <div className="lx-panel lx-panel--teplo" />
          <div className="lx-panel lx-panel--okno" />
          <div className="lx-panel lx-panel--teplo" />
          <div className="lx-panel" />
          <div className="lx-panel lx-panel--okno" />
          <div className="lx-panel lx-panel--teplo" />
          <div className="lx-panel lx-panel--okno" />
          <div className="lx-panel lx-panel--teplo" />
          <div className="lx-panel lx-panel--teplo" />
        </div>

        <div className="lx-hero-text">
          <p className="lx-hero-eyebrow">Stavební firma · Olomouc · od roku 1992</p>
          <h1 id="hero-title" className="lx-hero-title">
            Váš panelák.
            <br />
            <em>Zateplený, opravený,</em>
            <br />
            zkolaudovaný.
          </h1>
          <p className="lx-hero-sub">
            Regenerujeme panelové a cihlové domy po celé Moravě — od cenové
            rozvahy a úvěru přes stavební povolení až po kolaudaci. Jedna firma,
            jedna odpovědnost, přes 30 let praxe.
          </p>
          <div className="lx-hero-cta">
            <a className="lx-btn lx-btn--plna" href="tel:+420585000000">
              Zavolat: 585 000 000
            </a>
            <a className="lx-btn lx-btn--linka" href="#sluzby">
              Jak probíhá regenerace
            </a>
          </div>
          <p className="lx-hero-adresa">Brněnská 462/47, 779 00 Olomouc</p>
        </div>
      </section>

      {/* ===== SEKCE 1 — SLUŽBY / POSTUP ===== */}
      <section className="lx-sekce" id="sluzby" aria-labelledby="sluzby-title">
        <div className="lx-sekce-hlava">
          <p className="lx-eyebrow">Od rozvahy po kolaudaci</p>
          <h2 id="sluzby-title">
            Celou regeneraci vedeme my. Výbor domu podepisuje, ne obíhá úřady.
          </h2>
        </div>

        <ol className="lx-postup">
          {sluzby.map((s, i) => (
            <li className="lx-krok" key={s.krok}>
              <div className="lx-krok-znacka" aria-hidden="true">
                <span className="lx-krok-cislo">{i + 1}</span>
                <span className="lx-krok-jmeno">{s.krok}</span>
              </div>
              <div className="lx-krok-telo">
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </div>
            </li>
          ))}
        </ol>

        <p className="lx-postup-pozn">
          Vedle stavební činnosti poskytujeme i odborné konzultace a finanční
          poradenství — přijdeme na schůzi SVJ nebo družstva a vysvětlíme, co
          dům čeká a kolik to bude stát.
        </p>
      </section>

      {/* ===== SEKCE 2 — DŮVĚRA ===== */}
      <section className="lx-sekce lx-sekce--duvera" id="duvera" aria-labelledby="duvera-title">
        <div className="lx-sekce-hlava">
          <p className="lx-eyebrow">Proč LANEX</p>
          <h2 id="duvera-title">
            Firma z Olomouce, která tu staví — a žije — přes třicet let.
          </h2>
        </div>

        <div className="lx-duvera-mriz">
          <div className="lx-duvera-blok">
            <h3>Tři certifikace ISO, roky praxe</h3>
            <ul className="lx-milniky">
              {certifikace.map((c) => (
                <li key={c.rok}>
                  <span className="lx-milnik-rok">{c.rok}</span>
                  <span className="lx-milnik-text">{c.text}</span>
                </li>
              ))}
            </ul>
            <p className="lx-duvera-pozn">
              Kvalitu, ekologii i bezpečnost práce hlídají nezávislé audity —
              ne jen naše slovo.
            </p>
          </div>

          <div className="lx-duvera-blok">
            <h3>Peníze vracíme do Olomouce</h3>
            <p>
              Nejsme anonymní dodavatel. Dlouhodobě podporujeme olomoucké
              organizace, které pomáhají dětem a mladým lidem:
            </p>
            <ul className="lx-podpora">
              {podpora.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lx-duvera-pasy" aria-hidden="true">
          <span className="lx-pas lx-pas--seda" />
          <span className="lx-pas lx-pas--okr" />
          <span className="lx-pas lx-pas--modra" />
        </div>
      </section>
    </main>
  );
}
