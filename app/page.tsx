const bazenyKroky = [
  {
    krok: "Forma",
    nazev: "Vana z jednoho kusu",
    text: "Bazén laminujeme na dokonale vyleštěné formě jako monolit. Žádné svařované plastové desky, žádné lepené fólie — jeden kus sklolaminátu s povrchem hladkým jako sklo.",
  },
  {
    krok: "Materiál",
    nazev: "Kompozit ScottBader",
    text: "Polyesterový kompozit od britského dodavatele ScottBader odolává povětrnosti i agresivnímu chlóru. Předpokládaná životnost až 200 let, záruka na nepropustnost 10 let.",
  },
  {
    krok: "Izolace",
    nazev: "Polyuretanový sendvič",
    text: "Termoizolaci laminujeme přímo ve výrobě: pásy polyuretanu obalí 100 % vany a každý pás je přilaminován ke stěně. Vznikne extrémně pevný sendvič — ne pouhý nástřik pěny.",
  },
  {
    krok: "Usazení",
    nazev: "Na zahradě za den",
    text: "Hotovou vanu přivezeme a usadíme. Vy jen napíšete rozměr, technologii a typ zastřešení — my vypracujeme osobní kalkulaci na míru vaší zahradě.",
  },
];

const nabidka = [
  {
    nazev: "Bazény na míru",
    popis:
      "Skimmerová filtrace snižuje hladinu o 10–15 cm pod hranu. Proto radíme hloubku 1,5 m — hladina 1,35–1,40 m je příjemná pro plavání a bezpečnější pro skákající děti. Rozměr, barvu i schodiště přizpůsobíme vám.",
    stitek: "Hloubka 1,5 m doporučujeme",
  },
  {
    nazev: "Zastřešení bazénů",
    popis:
      "Zastřešení prodlouží sezónu o měsíce, udrží vodu čistou a teplou a sníží náklady na chemii i ohřev. Nízké, střední i vysoké varianty podle toho, jak bazén používáte.",
    stitek: "Delší sezóna, méně chemie",
  },
  {
    nazev: "Vířivky a skluzavky",
    popis:
      "Vířivky ze stejného kompozitu jako naše bazény a laminátové skluzavky, které vydrží generace dětí. Vše z jednoho kusu, bez spár, kde by se držela špína.",
    stitek: "Monolit bez spár",
  },
  {
    nazev: "Zakázkové laminování",
    popis:
      "Zábrany proti povodni, polaminování starých van, atypické výrobky. Máme formy, dílnu i třicet let zkušeností s kompozitem — přineste nápad, odvezete si hotový kus.",
    stitek: "I atypické tvary",
  },
];

export default function Page() {
  return (
    <main className="vb">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-brand">
            <span className="wordmark">
              VIP<span className="wordmark-tilde">~</span>bazény
            </span>
            <span className="hero-loc">Okrouhlo u Prahy · výroba a montáž</span>
          </div>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Bazén z jednoho</span>
            <span className="hero-line hero-line-2">
              kusu <em>laminátu.</em>
            </span>
          </h1>

          <p className="hero-sub">
            Vany laminujeme jako monolit na vyleštěných formách — bez svarů, bez
            lepených fólií, s povrchem hladkým jako sklo. Vyrobíme, přivezeme a
            usadíme na vaší zahradě.
          </p>

          <dl className="hero-facts" aria-label="Klíčová fakta">
            <div className="fact">
              <dt>Životnost kompozitu</dt>
              <dd>až 200 let</dd>
            </div>
            <div className="fact">
              <dt>Záruka na nepropustnost</dt>
              <dd>10 let</dd>
            </div>
            <div className="fact">
              <dt>Materiál</dt>
              <dd>ScottBader, UK</dd>
            </div>
          </dl>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420602323373">
              Zavolat 602 323 373
            </a>
            <a className="btn btn-ghost" href="mailto:info@abazeny.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* Signature: vodní hladina — vrstvené vlny hladiny bazénu */}
        <div className="hero-water" aria-hidden="true">
          <svg
            className="water-svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              className="wave wave-1"
              d="M0,96 C240,160 480,32 720,80 C960,128 1200,48 1440,96 L1440,320 L0,320 Z"
            />
            <path
              className="wave wave-2"
              d="M0,144 C240,96 480,192 720,144 C960,96 1200,176 1440,128 L1440,320 L0,320 Z"
            />
            <path
              className="wave wave-3"
              d="M0,208 C240,256 480,160 720,208 C960,256 1200,176 1440,224 L1440,320 L0,320 Z"
            />
          </svg>
          <div className="water-depth">
            <span className="depth-mark">— 1,10 m · hladina skimmeru</span>
            <span className="depth-mark">— 1,35 m · příjemné plavání</span>
            <span className="depth-mark depth-mark-deep">
              — 1,50 m · naše doporučená hloubka
            </span>
          </div>
        </div>
      </header>

      {/* ===================== SEKCE 1: JAK VZNIKÁ ===================== */}
      <section className="sekce sekce-vyroba" aria-labelledby="vyroba-h">
        <div className="sekce-inner">
          <p className="eyebrow">Od formy po vaši zahradu</p>
          <h2 id="vyroba-h" className="sekce-title">
            Jak vzniká bazén, který přežije dům
          </h2>
          <p className="sekce-perex">
            Každý náš výrobek začíná na formě — u nás jí říkáme kopyto. Právě
            proto drží tvar, těsní bez svarů a odolá chlóru i mrazu.
          </p>

          <ol className="kroky">
            {bazenyKroky.map((k, i) => (
              <li className="krok" key={k.krok}>
                <span className="krok-cislo" aria-hidden="true">
                  {i + 1}
                </span>
                <span className="krok-stitek">{k.krok}</span>
                <h3 className="krok-nazev">{k.nazev}</h3>
                <p className="krok-text">{k.text}</p>
              </li>
            ))}
          </ol>

          <aside className="pozn">
            <p>
              <strong>Poctivá rada z dílny:</strong> hlubší bazén se vyplatí.
              U hloubky 1,25 m zbyde po odečtení skimmeru hladina jen kolem
              1,10 m — na plavání málo. My stavíme na 1,5 m.
            </p>
          </aside>
        </div>
      </section>

      {/* ===================== SEKCE 2: NABÍDKA ===================== */}
      <section className="sekce sekce-nabidka" aria-labelledby="nabidka-h">
        <div className="sekce-inner">
          <p className="eyebrow eyebrow-light">Co vyrábíme v Okrouhle</p>
          <h2 id="nabidka-h" className="sekce-title sekce-title-light">
            Všechno kolem vody — z jedné dílny
          </h2>

          <div className="nabidka-grid">
            {nabidka.map((n) => (
              <article className="karta" key={n.nazev}>
                <span className="karta-stitek">{n.stitek}</span>
                <h3 className="karta-nazev">{n.nazev}</h3>
                <p className="karta-text">{n.popis}</p>
              </article>
            ))}
          </div>

          <div className="kalkulace">
            <h3 className="kalkulace-title">Osobní kalkulace zdarma</h3>
            <p className="kalkulace-text">
              Napište nám tři věci: <strong>rozměr bazénu</strong>,{" "}
              <strong>technologické vybavení</strong> a{" "}
              <strong>typ zastřešení</strong>. Do pár dnů vám pošleme cenově
              velmi zajímavou kalkulaci šitou na míru.
            </p>
            <a className="btn btn-solid" href="mailto:info@abazeny.cz?subject=Popt%C3%A1vka%20baz%C3%A9nu">
              Poslat tři údaje e-mailem
            </a>
            <p className="kalkulace-adresa">
              VIP bazény s.r.o. · Okrouhlo 146, 254 01 Okrouhlo ·{" "}
              <a href="tel:+420602323373">+420 602 323 373</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
