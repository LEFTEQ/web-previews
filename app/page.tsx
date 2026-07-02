export const metadata = {
  title: "ICARO Consulting s.r.o. — daňové poradenství a účetnictví, České Budějovice",
  description:
    "Daňový poradce a vedení účetnictví v Českých Budějovicích. Od jednorázové konzultace po plný outsourcing daňové a účetní agendy vaší firmy.",
  openGraph: {
    title: "ICARO Consulting — daňový poradce, České Budějovice",
    description:
      "Souhrnná správa daní a účetnictví pro firmy i podnikatele z jižních Čech. Termíny hlídáme my, vy podnikáte.",
    type: "website",
    locale: "cs_CZ",
  },
};

const terminy = [
  { den: "25.", co: "přiznání k DPH a kontrolní hlášení", kdy: "každý měsíc" },
  { den: "20.", co: "odvody za zaměstnance — sociální a zdravotní", kdy: "každý měsíc" },
  { den: "1. 4.", co: "přiznání k dani z příjmů (bez poradce)", kdy: "ročně" },
  { den: "1. 7.", co: "přiznání k dani z příjmů — s námi jako poradcem", kdy: "ročně" },
];

const sluzby = [
  {
    paragraf: "§ DPH",
    nazev: "Daňové poradenství",
    popis:
      "Souhrnná správa vaší daňové problematiky: daň z příjmů, DPH, silniční daň, optimalizace v mezích zákona. Zastoupíme vás při jednání s finančním úřadem — včetně kontrol.",
    detail: "Jako váš daňový poradce posouváme termín přiznání až na 1. července.",
  },
  {
    paragraf: "MD / D",
    nazev: "Vedení účetnictví",
    popis:
      "Kompletní účetní agenda firmy: přijaté a vydané faktury, banka, pokladna, majetek, závěrka. Doklady předáte, my se postaráme o zbytek — papírově i elektronicky.",
    detail: "Měsíčně dostanete srozumitelný přehled, jak na tom firma skutečně je.",
  },
  {
    paragraf: "§ 38h",
    nazev: "Mzdy a personalistika",
    popis:
      "Mzdy pro zaměstnance i dohodáře, přihlášky a odhlášky na pojišťovnách, roční zúčtování daně. Vy schválíte podklady, my odešleme vše na úřady včas.",
    detail: "Diskrétně — mzdové údaje nevidí nikdo z vaší firmy, kdo nemá.",
  },
  {
    paragraf: "OSVČ",
    nazev: "Poradenství pro podnikatele",
    popis:
      "Daňová evidence, paušální daň, přehledy pro ČSSZ a zdravotní pojišťovnu. Poradíme, jestli se vám paušál vyplatí, a spočítáme to na vašich reálných číslech.",
    detail: "Jednorázová konzultace stačí — nemusíte se hned vázat.",
  },
];

const duvody = [
  {
    cislo: "25+",
    text: "let praxe v daních a účetnictví — firmu jsme založili, když se ještě účtovalo do knih.",
  },
  {
    cislo: "1. 7.",
    text: "na tento den vám jako registrovaný daňový poradce posuneme termín daňového přiznání.",
  },
  {
    cislo: "0",
    text: "pokut za pozdní podání u klientů, jejichž agendu vedeme kompletně. Termíny hlídáme my.",
  },
];

export default function Page() {
  return (
    <main className="ic">
      {/* ============ HERO ============ */}
      <header className="ic-hero">
        <div className="ic-hero-top">
          <div className="ic-wordmark" aria-label="ICARO Consulting">
            <span className="ic-wordmark-name">ICARO</span>
            <span className="ic-wordmark-sub">Consulting s.r.o.</span>
          </div>
          <p className="ic-hero-loc">České Budějovice · daňový poradce</p>
        </div>

        <div className="ic-hero-main">
          <h1 className="ic-hero-title">
            <span className="ic-line ic-line-1">Daně mají</span>
            <span className="ic-line ic-line-2">
              <em>svá čísla</em>
            </span>
            <span className="ic-line ic-line-3">a svá data.</span>
          </h1>
          <div className="ic-hero-side">
            <p className="ic-hero-lead">
              Vedeme daně, účetnictví a mzdy firmám i podnikatelům z Českých
              Budějovic a okolí. Od jedné konzultace po kompletní outsourcing —
              termíny hlídáme my, vy podnikáte.
            </p>
            <div className="ic-hero-cta">
              <a className="ic-btn" href="#sluzby">
                Co pro vás uděláme
              </a>
              <a className="ic-btn ic-btn-ghost" href="tel:+420387000000">
                Zavolat poradci
              </a>
            </div>
          </div>
        </div>

        {/* Signature: pás daňového kalendáře — hlavní kniha termínů */}
        <div className="ic-ledger" role="list" aria-label="Klíčové daňové termíny">
          {terminy.map((t) => (
            <div className="ic-ledger-row" role="listitem" key={t.co}>
              <span className="ic-ledger-day">{t.den}</span>
              <span className="ic-ledger-what">{t.co}</span>
              <span className="ic-ledger-when">{t.kdy}</span>
            </div>
          ))}
          <p className="ic-ledger-note">
            Tyhle termíny hlídáme za vás. Žádný z nich vám neuteče.
          </p>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="ic-sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="ic-section-head">
          <p className="ic-eyebrow">Služby</p>
          <h2 id="sluzby-h" className="ic-h2">
            Od jedné otázky po celou agendu
          </h2>
          <p className="ic-section-lead">
            Nemusíte brát všechno. Někomu stačí hodina konzultace před podáním
            přiznání, jiná firma nám předá kompletní účetnictví i mzdy. Obojí je
            v pořádku.
          </p>
        </div>

        <div className="ic-sluzby-grid">
          {sluzby.map((s) => (
            <article className="ic-karta" key={s.nazev}>
              <p className="ic-karta-par" aria-hidden="true">
                {s.paragraf}
              </p>
              <h3 className="ic-karta-h">{s.nazev}</h3>
              <p className="ic-karta-p">{s.popis}</p>
              <p className="ic-karta-detail">{s.detail}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA / O NÁS ============ */}
      <section className="ic-duvera" aria-labelledby="duvera-h">
        <div className="ic-duvera-inner">
          <div className="ic-duvera-text">
            <p className="ic-eyebrow ic-eyebrow-light">Proč ICARO</p>
            <h2 id="duvera-h" className="ic-h2 ic-h2-light">
              Poradce, který za svá čísla ručí
            </h2>
            <p className="ic-duvera-p">
              Daňový poradce není účetní software ani anonymní linka. Je to
              člověk zapsaný v Komoře daňových poradců ČR, který za svou práci
              nese odpovědnost — a je ze zákona pojištěný. Když vás zastupujeme,
              jednáme s finančním úřadem my, ne vy.
            </p>
            <p className="ic-duvera-p">
              Sídlíme v Českých Budějovicích a většinu klientů známe osobně —
              řemeslníky, s.r.o. i rodinné firmy z jižních Čech. Doklady si
              převezmeme u vás, nebo je pošlete elektronicky. Jak vám to vyhovuje.
            </p>
            <blockquote className="ic-citace">
              <p>
                „Přešli jsme k ICARO po kontrole z finančního úřadu, kterou náš
                předchozí účetní nezvládl. Od té doby klid — všechno podané
                včas a když se ptám, dostanu odpověď, které rozumím.“
              </p>
              <cite>— jednatel stavební firmy, České Budějovice</cite>
            </blockquote>
          </div>

          <div className="ic-duvera-cisla" role="list">
            {duvody.map((d) => (
              <div className="ic-cislo" role="listitem" key={d.cislo}>
                <span className="ic-cislo-num">{d.cislo}</span>
                <p className="ic-cislo-p">{d.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
