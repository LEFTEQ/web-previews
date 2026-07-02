// Generali Česká pojišťovna — pojišťovací poradce, Pardubice
// Návrhový koncept: „Krytí" — vizuální jazyk odvozený z podstaty pojištění:
// vrstvy ochrany znázorněné soustřednými oblouky (deštník/štít bez klišé ikony),
// paleta z reálné identity Generali ČP (červená #C21B17, tmavá modř, šedobílá).
// Signature prvek: velké soustředné oblouky krytí v heru + „polička rizik",
// kde každé riziko má svou vrstvu. Typografie: úzký grotesk pro display
// (pojistka = dokument, přesnost), humanistický sans pro tělo.

const rizika = [
  {
    vrstva: "Vrstva 1",
    nazev: "Auto",
    popis:
      "Povinné ručení a havarijko bez zbytečností. Projdeme spolu, co reálně jezdíte a kde parkujete — podle toho nastavíme limity, ne podle tabulky.",
    detail: "POV · HAV · asistence 24/7",
  },
  {
    vrstva: "Vrstva 2",
    nazev: "Bydlení",
    popis:
      "Dům, byt i domácnost v Pardubicích a okolí. Zkontrolujeme pojistné částky, aby po škodě nechyběla třetina hodnoty — nejčastější chyba starých smluv.",
    detail: "nemovitost · domácnost · odpovědnost",
  },
  {
    vrstva: "Vrstva 3",
    nazev: "Život a zdraví",
    popis:
      "Životní pojištění postavené na vašich číslech: hypotéka, příjem, děti. Kryjeme to, co by rodinu skutečně položilo, ne drobnosti.",
    detail: "invalidita · vážné nemoci · úraz",
  },
  {
    vrstva: "Vrstva 4",
    nazev: "Podnikání",
    popis:
      "Pro živnostníky a menší firmy z Pardubicka. Odpovědnost, majetek, přerušení provozu — smlouvy srozumitelné natolik, že jim rozumíte i vy.",
    detail: "odpovědnost · majetek firmy · flotily",
  },
];

const kroky = [
  {
    kdo: "Vy",
    co: "Přinesete stávající smlouvy — klidně i ty, co leží léta v šuplíku.",
  },
  {
    kdo: "My",
    co: "Do 48 hodin dostanete revizi: co vás kryje, co ne a za co platíte zbytečně.",
  },
  {
    kdo: "Spolu",
    co: "Rozhodnete se sami. Žádný tlak — návrh platí, i když si ho necháte měsíc rozležet.",
  },
];

export default function Page() {
  return (
    <main className="gp">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-top">
          <span className="wordmark">
            <span className="wordmark-lion" aria-hidden="true" />
            Generali Česká<em>pojišťovna · Pardubice</em>
          </span>
          <a className="hero-tel" href="tel:241114114">
            241 114 114
          </a>
        </div>

        <div className="hero-body">
          {/* Signature: soustředné oblouky krytí */}
          <svg
            className="kryti"
            viewBox="0 0 800 420"
            aria-hidden="true"
            focusable="false"
          >
            <path className="kryti-arc a1" d="M 40 420 A 360 360 0 0 1 760 420" />
            <path className="kryti-arc a2" d="M 120 420 A 280 280 0 0 1 680 420" />
            <path className="kryti-arc a3" d="M 200 420 A 200 200 0 0 1 600 420" />
            <path className="kryti-arc a4" d="M 280 420 A 120 120 0 0 1 520 420" />
            <circle className="kryti-vy" cx="400" cy="420" r="14" />
          </svg>

          <p className="hero-eyebrow">Pojišťovací poradce · Pardubice</p>
          <h1 className="hero-title">
            <span className="line l1">Čtyři vrstvy krytí.</span>
            <span className="line l2">
              Uprostřed <strong>vy</strong>.
            </span>
          </h1>
          <p className="hero-sub">
            Auto, bydlení, život, podnikání — nastavíme každou vrstvu na vaši
            situaci, ne podle šablony. Osobně v Pardubicích, srozumitelně a bez
            drobného písma, které nikdo nečte.
          </p>
          <div className="hero-cta">
            <a className="btn btn-red" href="tel:241114114">
              Zavolat poradci
            </a>
            <a className="btn btn-ghost" href="#revize">
              Nechat si zkontrolovat smlouvy
            </a>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>revize smluv zdarma</span>
          <span className="dot" />
          <span>hlášení škod pomůžeme vyřídit</span>
          <span className="dot" />
          <span>kancelář v centru Pardubic</span>
        </div>
      </header>

      {/* ============ SEKCE 1: VRSTVY KRYTÍ ============ */}
      <section className="vrstvy" aria-labelledby="vrstvy-h">
        <div className="sec-head">
          <h2 id="vrstvy-h">Co pojišťujeme</h2>
          <p>
            Každá vrstva kryje jiné riziko. Většina klientů začíná jednou —
            revizí toho, co už platí — a zbytek doladíme postupně.
          </p>
        </div>

        <div className="vrstvy-grid">
          {rizika.map((r, i) => (
            <article className="karta" key={r.nazev} style={{ ['--i' as string]: i }}>
              <span className="karta-vrstva">{r.vrstva}</span>
              <h3>{r.nazev}</h3>
              <p>{r.popis}</p>
              <span className="karta-detail">{r.detail}</span>
              <span className="karta-arc" aria-hidden="true" />
            </article>
          ))}
        </div>
      </section>

      {/* ============ SEKCE 2: REVIZE / DŮVĚRA ============ */}
      <section className="revize" id="revize" aria-labelledby="revize-h">
        <div className="revize-inner">
          <div className="revize-text">
            <h2 id="revize-h">
              Revize smluv do 48 hodin.
              <br />
              Zdarma a bez závazku.
            </h2>
            <p className="revize-lead">
              Průměrná domácnost v Pardubicích platí za pojištění to, co
              podepsala před osmi lety. Ceny nemovitostí i aut se od té doby
              změnily — smlouvy většinou ne. Přesně tohle napravujeme.
            </p>

            <ol className="kroky">
              {kroky.map((k) => (
                <li key={k.kdo}>
                  <span className="krok-kdo">{k.kdo}</span>
                  <span className="krok-co">{k.co}</span>
                </li>
              ))}
            </ol>
          </div>

          <aside className="revize-karta">
            <blockquote>
              <p>
                „Po vichřici jsme volali poradci, ne na infolinku. Do týdne
                byly peníze za střechu na účtu a papíry vyřídil za nás.“
              </p>
              <footer>— rodina Vackova, Pardubice-Polabiny</footer>
            </blockquote>
            <blockquote>
              <p>
                „Revize nám ukázala, že byt máme pojištěný na půlku ceny.
                Doplatili jsme pár korun měsíčně a spíme klidně.“
              </p>
              <footer>— paní Marešová, Svítkov</footer>
            </blockquote>
            <p className="revize-pozn">
              Škody hlásíte nám, ne formuláři. Když hoří, nechcete číst
              nápovědu.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
