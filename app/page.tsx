// PH SERVIS s.r.o. — autorizovaný elektroservis, Praha-Modřany
// Design koncept: „Servisní protokol" — vizuální svět opravárenské dílny:
// diagnostická vlnovka (sinusoida napětí) jako signature prvek, štítky zakázek,
// stavové kontrolky. Paleta: hluboká servisní modř + signální oranž měřicích
// přístrojů na světlém technickém podkladu.

const opravujeme = [
  {
    kod: "KV",
    nazev: "Kávovary a espressa",
    detail:
      "Odvápnění, výměna těsnění, spařovací jednotky, mlýnky. Placené opravy DeLonghi, Krups i Philips/Saeco.",
  },
  {
    kod: "HS",
    nazev: "Holicí strojky a péče o vlasy",
    detail:
      "Výměna planžet, břitů a akumulátorů. Autorizovaný servis Philips pro péči o tělo.",
  },
  {
    kod: "VY",
    nazev: "Vysavače a domácnost",
    detail:
      "Motory, filtrace, elektronika ručních i robotických vysavačů. Originální díly skladem.",
  },
  {
    kod: "KR",
    nazev: "Kuchyňské roboty",
    detail:
      "Převodovky, šlehací metly, nádoby a příslušenství. Kenwood, Braun, Tefal, Moulinex.",
  },
  {
    kod: "UH",
    nazev: "Ústní hygiena",
    detail:
      "Sonické i oscilační kartáčky — akumulátory, nabíjecí základny, těsnost.",
  },
  {
    kod: "TV",
    nazev: "Televize Philips",
    detail:
      "Záruční i pozáruční opravy televizorů Philips (TPV). Panely, zdroje, software.",
  },
];

const postup = [
  {
    krok: "Příjem",
    text: "Spotřebič přinesete na Darwinovu 1808/5, pošlete přepravní službou, nebo objednáte svoz na zakazky@phservis.cz.",
  },
  {
    krok: "Diagnostika",
    text: "Technik závadu změří a ozve se vám s cenou opravy dřív, než se do ní pustí. Bez souhlasu nic neúčtujeme.",
  },
  {
    krok: "Oprava",
    text: "Opravujeme s originálními díly, které máme skladem přímo v dílně. Většinu zakázek vyřídíme do týdne.",
  },
  {
    krok: "Výdej",
    text: "Stav zakázky sledujete online podle čísla protokolu. Hotový spotřebič si vyzvednete, nebo ho pošleme zpět.",
  },
];

export default function Page() {
  return (
    <main className="ph">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="PH Servis">
            <span className="wordmark-ph">PH</span>
            <span className="wordmark-servis">SERVIS</span>
            <span className="wordmark-dot" aria-hidden="true" />
          </div>
          <p className="hero-locality">
            Autorizovaný elektroservis · Praha-Modřany
          </p>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="led" aria-hidden="true" />
            Dílna v provozu · Po–Pá 8.00–16.30
          </p>
          <h1 className="hero-title">
            Rozbilo se?
            <br />
            <em>Změříme. Opravíme.</em>
          </h1>
          <p className="hero-sub">
            Kávovar, holicí strojek, vysavač i televize Philips — autorizovaný
            servis domácí elektroniky s vlastní dílnou a díly skladem.
            Darwinova 1808/5, Praha 12.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420228880895">
              Zavolat dílně — 228 880 895
            </a>
            <a className="btn btn-ghost" href="mailto:zakazky@phservis.cz">
              Objednat svoz spotřebiče
            </a>
          </div>
        </div>

        {/* Signature: diagnostická sinusoida — puls změřeného spotřebiče */}
        <div className="scope" aria-hidden="true">
          <svg
            className="scope-svg"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
          >
            <path
              className="scope-grid-line"
              d="M0 80 H1200"
              stroke="currentColor"
            />
            <path
              className="scope-wave scope-wave-back"
              d="M0 80 Q 60 20 120 80 T 240 80 T 360 80 T 480 80 T 600 80 T 720 80 T 840 80 T 960 80 T 1080 80 T 1200 80"
            />
            <path
              className="scope-wave scope-wave-front"
              d="M0 80 Q 60 140 120 80 T 240 80 T 360 80 T 480 80 T 600 80 T 720 80 T 840 80 T 960 80 T 1080 80 T 1200 80"
            />
          </svg>
          <div className="scope-readout">
            <span>230 V ~ 50 Hz</span>
            <span>DIAG OK</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: CO OPRAVUJEME ===== */}
      <section className="section section-repairs" aria-labelledby="opravujeme">
        <div className="section-head">
          <p className="section-eyebrow">Servisní katalog</p>
          <h2 id="opravujeme" className="section-title">
            Co vám v dílně opravíme
          </h2>
          <p className="section-note">
            Dvoupísmenný kód je značení kategorie na vašem servisním protokolu
            — podle něj zakázku dohledáte online.
          </p>
        </div>

        <ul className="repair-grid">
          {opravujeme.map((o) => (
            <li className="repair-card" key={o.kod}>
              <span className="repair-kod" aria-hidden="true">
                {o.kod}
              </span>
              <h3 className="repair-nazev">{o.nazev}</h3>
              <p className="repair-detail">{o.detail}</p>
            </li>
          ))}
        </ul>

        <div className="repair-notice" role="note">
          <strong>Na rovinu:</strong> kávovary Nespresso Krups neopravujeme a u
          značek DeLonghi, Kenwood, Braun (kuchyně) a Ariete přijímáme jen
          placené opravy, ne záruční. Náhradní díly těchto značek u nás ale
          koupíte dál.
        </div>
      </section>

      {/* ===== SEKCE 2: JAK OPRAVA PROBÍHÁ + DŮVĚRA ===== */}
      <section className="section section-trust" aria-labelledby="postup">
        <div className="section-head">
          <p className="section-eyebrow section-eyebrow-light">
            Servisní protokol
          </p>
          <h2 id="postup" className="section-title section-title-light">
            Od příjmu k výdeji — čtyři kroky
          </h2>
        </div>

        <ol className="steps">
          {postup.map((p, i) => (
            <li className="step" key={p.krok}>
              <span className="step-num" aria-hidden="true">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="step-krok">{p.krok}</h3>
              <p className="step-text">{p.text}</p>
            </li>
          ))}
        </ol>

        <div className="trust-strip">
          <div className="trust-item">
            <span className="trust-big">Philips</span>
            <span className="trust-small">
              autorizovaný servis — spotřebiče, péče o tělo i televize
            </span>
          </div>
          <div className="trust-item">
            <span className="trust-big">Darwinova 1808/5</span>
            <span className="trust-small">
              kamenná dílna v Praze-Modřanech, Po–Pá 8.00–16.30
            </span>
          </div>
          <div className="trust-item">
            <span className="trust-big">Díly skladem</span>
            <span className="trust-small">
              originální náhradní díly a příslušenství přímo v servisu
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
