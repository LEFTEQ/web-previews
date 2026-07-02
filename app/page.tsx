const sluzby = [
  {
    id: "odtah",
    nazev: "Odtah vozidla",
    popis:
      "Osobní, dodávky i nákladní vozy. Naložíme vás na místě nehody nebo poruchy a odvezeme, kam potřebujete — do servisu, domů, po celé Evropě.",
    detail: "Nonstop, celá Evropa",
  },
  {
    id: "servis",
    nazev: "Opravy a servis",
    popis:
      "Po odtahu nemusíte nikam. Vůz opravíme ve vlastní dílně v Sokolově — od výměny čerpadla po opravu po nehodě.",
    detail: "Vlastní dílna, Hornická 1613",
  },
  {
    id: "pujcovna",
    nazev: "Náhradní vozidlo",
    popis:
      "Než bude váš vůz zpátky na kolech, jezdíte naším. Půjčovnu máme na stejné adrese jako dílnu — přesednete na místě.",
    detail: "Přistavíme i k zásahu",
  },
  {
    id: "poskozeni",
    nazev: "Pomoc poškozeným",
    popis:
      "Nabourali vás? Vyřídíme za vás komunikaci s pojišťovnou a likvidaci pojistné události. Vy řešíte jen to, kdy si vyzvednete opravené auto.",
    detail: "Jednáme s pojišťovnou za vás",
  },
  {
    id: "myti",
    nazev: "Ruční mytí",
    popis:
      "Vůz vám vrátíme čistý. Ruční mytí karoserie i interiéru děláme i samostatně, bez odtahu a servisu.",
    detail: "Objednání na telefonu",
  },
];

const duvody = [
  {
    cislo: "1997",
    titulek: "Na silnici od roku 1997",
    text: "Přes 25 let tahů po okrese Sokolov, Karlovarském kraji i přes hranice. Známe každý kilometr D6 a víme, jak vytáhnout auto i z krajnice v lese.",
  },
  {
    cislo: "IZS",
    titulek: "Součást záchranného systému",
    text: "Jsme členem integrovaného záchranného systému a sdružení odtahových služeb SOS. K nehodám vyjíždíme společně s hasiči a policií.",
  },
  {
    cislo: "0 Kč",
    titulek: "Smlouvy s pojišťovnami",
    text: "Jsme smluvním partnerem všech významných asistenčních společností a pojišťoven. Máte-li asistenci v pojistce, odtah často neplatíte vůbec.",
  },
  {
    cislo: "24/7",
    titulek: "Dispečink, který to zvedne",
    text: "Vlastní dispečink drží službu ve dne v noci, o víkendech i o svátcích. Řeknete kde jste — my řekneme, za jak dlouho tam budeme.",
  },
];

export default function Page() {
  return (
    <main className="a3">
      {/* ===== HERO ===== */}
      <section className="hero" aria-label="Odtahová služba AUTO 3000 Sokolov">
        <div className="hero-hazard" aria-hidden="true" />

        <header className="hero-top">
          <div className="wordmark">
            <span className="wordmark-auto">AUTO</span>
            <span className="wordmark-num">3000</span>
          </div>
          <a className="hero-top-tel" href="tel:+420777727767">
            777 727 767
          </a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="blink-dot" aria-hidden="true" />
            Dispečink drží službu právě teď · Sokolov
          </p>

          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Stojíte?</span>
            <span className="hero-line hero-line-2">
              My už <em>jedeme.</em>
            </span>
          </h1>

          <p className="hero-sub">
            Odtahová služba nonstop, 24 hodin denně, 7 dní v týdnu. Pro osobní i
            nákladní vozidla, ze Sokolovska do celé Evropy. Nehoda nebo porucha —
            zavolejte a řekněte, kde stojíte.
          </p>

          <div className="hero-cta">
            <a className="btn-call" href="tel:+420777727767">
              <span className="btn-call-label">Zavolat odtah</span>
              <span className="btn-call-num">+420 777 727 767</span>
            </a>
            <p className="hero-cta-note">
              Číslo funguje nonstop. Na mobilu stačí klepnout — vytáčíme rovnou
              dispečink, žádnou ústřednu.
            </p>
          </div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>NONSTOP 24/7</span>
          <span className="strip-sep">◆</span>
          <span>CELÁ EVROPA</span>
          <span className="strip-sep">◆</span>
          <span>OSOBNÍ I NÁKLADNÍ</span>
          <span className="strip-sep">◆</span>
          <span>ČLEN IZS</span>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">Od krajnice až po umyté auto</p>
          <h2 id="sluzby-h" className="section-title">
            Jeden telefonát vyřeší celou nehodu
          </h2>
          <p className="section-lede">
            Většina odtahovek vás vyloží a tím to končí. My máme na jedné adrese
            odtah, dílnu, půjčovnu i likvidaci pojistky — takže od zavolání po
            vrácení klíčků jednáte pořád s jedněmi lidmi.
          </p>
        </div>

        <ol className="sluzby-list">
          {sluzby.map((s, i) => (
            <li key={s.id} className="sluzba">
              <span className="sluzba-marker" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="sluzba-obsah">
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
                <p className="sluzba-detail">{s.detail}</p>
              </div>
            </li>
          ))}
        </ol>
        <p className="sluzby-pozn">
          Kroky 1–5 jsou cesta vašeho auta po nehodě. Můžete si ale objednat
          kterýkoli zvlášť — třeba jen mytí nebo půjčení vozu.
        </p>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <p className="section-eyebrow section-eyebrow-inv">
            Proč volat právě nás
          </p>
          <h2 id="duvera-h" className="section-title section-title-inv">
            Když stojíte na D6 ve tři ráno, na jméně záleží
          </h2>
        </div>

        <div className="duvera-grid">
          {duvody.map((d) => (
            <article key={d.cislo} className="duvera-karta">
              <p className="duvera-cislo">{d.cislo}</p>
              <h3 className="duvera-titulek">{d.titulek}</h3>
              <p className="duvera-text">{d.text}</p>
            </article>
          ))}
        </div>

        <div className="zakladna">
          <p className="zakladna-label">Základna a dílna</p>
          <p className="zakladna-adresa">
            AUTO 3000 s.r.o. · Hornická 1613, 356 01 Sokolov
          </p>
          <p className="zakladna-pozn">
            Sem vezeme odtažená vozidla a tady si půjčíte náhradní vůz. Zavolat
            můžete kdykoli:{" "}
            <a className="zakladna-tel" href="tel:+420777727767">
              +420 777 727 767
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
