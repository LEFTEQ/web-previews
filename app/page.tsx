const sluzby = [
  {
    id: "ODTAH",
    nazev: "Odtah osobních i nákladních vozidel",
    popis:
      "Nabouraný nebo nepojízdný vůz naložíme a odvezeme kamkoli po Evropě. Osobní auta, dodávky i nákladní vozy — máme techniku na všechno.",
    detail: "Celá Evropa · všechna vozidla",
  },
  {
    id: "SERVIS",
    nazev: "Opravy & servis",
    popis:
      "Po odtahu auto nemusí nikam dál. Opravíme ho přímo u nás v Sokolově — od drobné poruchy po škody po nehodě.",
    detail: "Chebská 2096, Sokolov",
  },
  {
    id: "PŮJČOVNA",
    nazev: "Náhradní vozidlo",
    popis:
      "Než bude váš vůz zpátky na silnici, půjčíme vám náhradní. U nehody, kterou jste nezavinili, ho často hradí pojišťovna viníka.",
    detail: "Přistavíme k zásahu",
  },
  {
    id: "POŠKOZENÍ",
    nazev: "Pomoc poškozeným",
    popis:
      "Naboural do vás někdo jiný? Vyřídíme za vás pojišťovnu, likvidaci škody i papírování. Vy řešíte jen to, kdy si vyzvednete opravené auto.",
    detail: "Likvidace pojistných událostí",
  },
  {
    id: "MYTÍ",
    nazev: "Ruční mytí",
    popis:
      "Auto vracíme čisté. Ruční mytí karoserie i interiéru — samostatně, nebo jako tečka za servisem.",
    detail: "Bez kartáčů, ručně",
  },
];

const duvody = [
  {
    rok: "1997",
    text: "Vyjíždíme k nehodám a poruchám na Sokolovsku už přes čtvrt století. Karlovarský kraj známe silnici po silnici.",
  },
  {
    rok: "24/7",
    text: "Dispečink nespí. Půlnoc na dálnici D6, neděle ráno na okresce — dovoláte se vždycky a vyjíždíme hned.",
  },
  {
    rok: "IZS",
    text: "Jsme součástí integrovaného záchranného systému a členem sdružení odtahových služeb SOS. K nehodám nás volá i policie.",
  },
  {
    rok: "0 Kč",
    text: "Smluvní partner všech významných asistenčních společností a pojišťoven. Máte-li asistenci v pojistce, odtah často neplatíte vůbec.",
  },
];

export default function Page() {
  return (
    <main className="a3-main">
      {/* ===== HERO ===== */}
      <header className="a3-hero">
        <div className="a3-hero-top">
          <span className="a3-wordmark">
            AUTO<em>3000</em>
          </span>
          <span className="a3-hero-loc">Sokolov · Chebská 2096</span>
        </div>

        <div className="a3-hero-body">
          <p className="a3-hero-eyebrow" aria-hidden="true">
            ▸▸▸ odtahová služba ▸▸▸ nonstop ▸▸▸ celá Evropa
          </p>
          <h1 className="a3-hero-title">
            <span className="a3-line a3-line-1">Stojíte?</span>
            <span className="a3-line a3-line-2">
              Jedeme <b>pro&nbsp;vás.</b>
            </span>
          </h1>
          <p className="a3-hero-sub">
            Nonstop odtahová služba ze Sokolova. Porucha, nehoda, defekt —
            naložíme každé vozidlo a odvezeme ho kamkoli po Evropě.
            Voláte, vyjíždíme.
          </p>

          <div className="a3-hero-cta">
            <a href="tel:+420777727767" className="a3-call">
              <span className="a3-call-label">Volejte nonstop</span>
              <span className="a3-call-number">+420 777 727 767</span>
            </a>
            <p className="a3-call-note">
              Kliknutím na mobilu rovnou voláte. Dispečink 24 hodin, 7 dní v týdnu.
            </p>
          </div>
        </div>

        {/* signature: výstražný šrafovaný pruh jako na odtahovce */}
        <div className="a3-chevrons" aria-hidden="true">
          <div className="a3-chevrons-strip" />
          <div className="a3-chevrons-meta">
            <span>NONSTOP 24/7</span>
            <span>SOKOLOV → EVROPA</span>
            <span>OSOBNÍ · DODÁVKY · NÁKLADNÍ</span>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="a3-sluzby" aria-labelledby="sluzby-h">
        <div className="a3-section-head">
          <h2 id="sluzby-h">Od krajnice až po klíčky v ruce</h2>
          <p>
            Odtahem to u nás nekončí. Auto odvezeme, opravíme, umyjeme a mezitím
            vám půjčíme náhradní — všechno na jednom místě v Sokolově.
          </p>
        </div>

        <ul className="a3-sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.id} className="a3-karta">
              <span className="a3-karta-tag">{s.id}</span>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <span className="a3-karta-detail">{s.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="a3-duvera" aria-labelledby="duvera-h">
        <div className="a3-section-head a3-section-head-dark">
          <h2 id="duvera-h">Proč nám volá i policie</h2>
          <p>
            Když se na Sokolovsku něco stane, jsme obvykle první, komu se vytáčí
            číslo. Tady je proč.
          </p>
        </div>

        <div className="a3-duvera-grid">
          {duvody.map((d) => (
            <article key={d.rok} className="a3-duvod">
              <span className="a3-duvod-cislo">{d.rok}</span>
              <p>{d.text}</p>
            </article>
          ))}
        </div>

        <div className="a3-duvera-pruh" aria-hidden="true" />

        <blockquote className="a3-citace">
          <p>
            „Cíl máme od roku 1997 pořád stejný: aby motorista, který zůstal stát,
            čekal co nejkratší dobu — a o zbytek se už nemusel starat.“
          </p>
          <cite>— dispečink Auto 3000, Sokolov</cite>
        </blockquote>
      </section>
    </main>
  );
}
