// Pekárna Crocus — Brno
// Koncept: „Krokus na mouce" — teplé pekařské tóny (kůrka, mouka, kvásek)
// + šafránově-fialový akcent odvozený z názvu (crocus = krokus, šafrán).
// Signature: velká typografická kompozice hero s rytmem „řádků na sázecím plátně"
// a kvásková křivka (SVG) jako podpis řemesla.

const nabidka = [
  {
    cas: "od 5.30",
    nazev: "Kváskový chléb Crocus",
    popis:
      "Žitno-pšeničný, 48 hodin vedený kvas, pečený na kameni. Kůrka praská, střída drží vláhu tři dny.",
    vaha: "900 g / 600 g",
  },
  {
    cas: "od 6.00",
    nazev: "Máslové pečivo",
    popis:
      "Croissanty, loupáky a plundry z českého másla. Vrstvíme ručně, den předem, pečeme až ráno.",
    vaha: "kus 55–90 g",
  },
  {
    cas: "od 6.00",
    nazev: "Rohlíky a housky",
    popis:
      "Poctivé pšeničné těsto bez zlepšovadel. Rohlík, jaký si pamatujete z dětství — jen čerstvější.",
    vaha: "kus 43 g",
  },
  {
    cas: "od 7.30",
    nazev: "Koláče a šafránové věnce",
    popis:
      "Tvarohové, makové, povidlové. V sobotu pečeme šafránový věnec — náš podpis, podle kterého nás poznáte.",
    vaha: "na kusy i na plech",
  },
];

const duvody = [
  {
    cislo: "3 dny",
    text: "tak dlouho vydrží náš kváskový chléb čerstvý. Bez konzervantů — jen mouka, voda, sůl a čas.",
  },
  {
    cislo: "4.00",
    text: "v tuhle hodinu už u nás hoří pec. Do otevření projde rukama pekařů přes 400 bochníků.",
  },
  {
    cislo: "12 km",
    text: "nejdál to má k nám mlýn, ze kterého bereme mouku. Jižní Morava, žádné anonymní silo.",
  },
];

const reference = [
  {
    text: "Chleba od Crocusu kupuju každou sobotu cestou z Zelňáku. Kůrka, co zvoní, když na ni ťuknete. Jinam už nechodím.",
    autor: "Marie K., Brno-střed",
  },
  {
    text: "Croissanty jak z Lyonu, ale s frontou, kde se mluví hantecem. Šafránový věnec berte hned ráno, po deváté už nebývá.",
    autor: "Tomáš H., Královo Pole",
  },
];

export default function Page() {
  return (
    <main className="pk">
      {/* ================= HERO ================= */}
      <header className="hero" aria-label="Pekárna Crocus, řemeslná pekárna v Brně">
        <div className="hero-top">
          <div className="wordmark" aria-label="Pekárna Crocus">
            <span className="wordmark-pek">Pekárna</span>
            <span className="wordmark-crocus">Crocus</span>
          </div>
          <p className="hero-meta">
            Brno · pečeme denně od 4.00 · otevřeno po–so od 6.00
          </p>
        </div>

        <h1 className="hero-title">
          <span className="line line-1">Chléb z kvásku,</span>
          <span className="line line-2">
            kůrka <em>co&nbsp;zvoní</em>,
          </span>
          <span className="line line-3">a vůně, kterou v&nbsp;Brně</span>
          <span className="line line-4 accent">poznáte po&nbsp;čichu.</span>
        </h1>

        {/* Kvásková křivka — signature prvek: linie kynutí těsta */}
        <div className="hero-curve" aria-hidden="true">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none" focusable="false">
            <path
              className="curve-dough"
              d="M0,150 C150,150 220,60 400,55 C560,50 620,120 780,110 C940,100 1010,30 1200,25 L1200,160 L0,160 Z"
            />
            <path
              className="curve-line"
              d="M0,150 C150,150 220,60 400,55 C560,50 620,120 780,110 C940,100 1010,30 1200,25"
              fill="none"
            />
            <circle className="curve-dot" cx="400" cy="55" r="6" />
            <circle className="curve-dot" cx="780" cy="110" r="6" />
          </svg>
          <div className="curve-labels">
            <span>21.00 — zadělání kvasu</span>
            <span>4.00 — sázení do pece</span>
            <span>6.00 — první bochník na pultu</span>
          </div>
        </div>

        <div className="hero-actions">
          <a className="btn btn-full" href="#nabidka">
            Co dnes pečeme
          </a>
          <a className="btn btn-line" href="#pekarna">
            Proč kvásek
          </a>
        </div>
      </header>

      {/* ================= NABÍDKA ================= */}
      <section className="section nabidka" id="nabidka" aria-labelledby="nabidka-h">
        <div className="section-head">
          <p className="eyebrow">Z pece na pult — pořadí, v jakém ráno pečeme</p>
          <h2 id="nabidka-h">Dnešní pečení</h2>
        </div>

        <ol className="pult">
          {nabidka.map((p) => (
            <li className="pult-item" key={p.nazev}>
              <span className="pult-cas">{p.cas}</span>
              <div className="pult-body">
                <h3>{p.nazev}</h3>
                <p>{p.popis}</p>
              </div>
              <span className="pult-vaha">{p.vaha}</span>
            </li>
          ))}
        </ol>

        <p className="nabidka-note">
          Pečeme v&nbsp;omezeném množství. Větší objednávku — na oslavu, do kanceláře,
          na svatbu — nám zavolejte den předem a&nbsp;bochníky vám odložíme.
        </p>
      </section>

      {/* ================= PEKÁRNA / DŮVĚRA ================= */}
      <section className="section pekarna" id="pekarna" aria-labelledby="pekarna-h">
        <div className="section-head section-head-light">
          <p className="eyebrow">Řemeslo, ne provoz</p>
          <h2 id="pekarna-h">Proč u&nbsp;nás voní celá ulice</h2>
        </div>

        <div className="duvody">
          {duvody.map((d) => (
            <div className="duvod" key={d.cislo}>
              <span className="duvod-cislo">{d.cislo}</span>
              <p>{d.text}</p>
            </div>
          ))}
        </div>

        <div className="reference" aria-label="Co říkají zákazníci">
          {reference.map((r) => (
            <figure className="ref" key={r.autor}>
              <blockquote>
                <p>„{r.text}“</p>
              </blockquote>
              <figcaption>— {r.autor}</figcaption>
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
}
