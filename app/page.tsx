export const metadata = {
  title: "MUAL MOTO Brno — náhradní díly a příslušenství pro motocykly",
  description:
    "MUAL MOTO Brno: náhradní díly na Jawu, MZ, Korado, Simson i Babettu, díly na zahraniční motocykly, pneu, řetězy, oleje, přilby a oblečení. Kamenná prodejna v Brně, tel. 545 578 065.",
  openGraph: {
    title: "MUAL MOTO Brno — díly pro motocykly Jawa, MZ, Simson a další",
    description:
      "Kamenná prodejna náhradních dílů a příslušenství pro motocykly v Brně. Jawa, MZ, Korado, Simson, Babetta i zahraniční stroje.",
    locale: "cs_CZ",
    type: "website",
  },
};

const dily = [
  {
    stroj: "Jawa",
    detail: "250, 350, Pérák i Kývačka — písty, spojky, elektro, gufera",
  },
  {
    stroj: "MZ",
    detail: "ETZ a TS — válce, karburátory, těsnění, brzdové díly",
  },
  {
    stroj: "Korado / Pionýr",
    detail: "kompletní motorové díly, řetězy, blinkry, páčky",
  },
  {
    stroj: "Simson",
    detail: "S51, S50, Schwalbe — zapalování, výfuky, sedla",
  },
  {
    stroj: "Babetta",
    detail: "207 i 210 — variátory, membrány, dekly, kabeláž",
  },
  {
    stroj: "Zahraniční motocykly",
    detail: "díly na objednávku dle VIN — japonské i evropské stroje",
  },
];

const regaly = [
  { nazev: "Pneu a duše", pozn: "silniční i enduro, běžné rozměry skladem" },
  { nazev: "Řetězy a řetězové sady", pozn: "včetně spojek a rozet" },
  { nazev: "Oleje a filtry", pozn: "motorové, převodové, olejové i vzduchové filtry" },
  { nazev: "Svíčky a elektro", pozn: "svíčky, baterie, blinkry, zrcátka" },
  { nazev: "Spojkové a brzdové díly", pozn: "sady, lamely, páčky, destičky" },
  { nazev: "Přilby a oblečení", pozn: "právě probíhá doprodej — přilby, bundy, boty" },
];

export default function Page() {
  return (
    <main className="mm">
      {/* ===== HERO ===== */}
      <header className="hero" aria-label="MUAL MOTO Brno">
        <div className="hero-top">
          <span className="wordmark">
            MUAL<span className="wordmark-moto">MOTO</span>
          </span>
          <span className="hero-loc">Brno · prodejna dílů od r. 2005</span>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">Náhradní díly &amp; příslušenství pro motocykly</p>
          <h1 className="hero-title">
            <span className="line line-1">Díl na Jawu</span>
            <span className="line line-2">seženete tam,</span>
            <span className="line line-3">kde ho mají <em>v&nbsp;ruce</em>.</span>
          </h1>
          <p className="hero-sub">
            Kamenná prodejna v Brně s regály plnými dílů na Jawu, MZ, Korado,
            Simson i Babettu. Přijdete, popíšete, co vám chybí — a odejdete
            s dílem, ne s číslem objednávky.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420545578065">
              Zavolat 545 578 065
            </a>
            <a className="btn btn-ghost" href="#sklad">
              Co máme skladem
            </a>
          </div>
        </div>

        {/* signature: schematický řetěz jako řez strojem */}
        <div className="chain" aria-hidden="true">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="xMidYMid slice"
            focusable="false"
          >
            <g className="chain-links">
              {Array.from({ length: 16 }).map((_, i) => (
                <g key={i} transform={`translate(${i * 78} 0)`}>
                  <rect
                    x="6"
                    y="38"
                    width="66"
                    height="44"
                    rx="22"
                    className="chain-plate"
                  />
                  <circle cx="6" cy="60" r="11" className="chain-pin" />
                  <circle cx="84" cy="60" r="11" className="chain-pin" />
                  <circle cx="6" cy="60" r="4" className="chain-pin-core" />
                  <circle cx="84" cy="60" r="4" className="chain-pin-core" />
                </g>
              ))}
            </g>
          </svg>
        </div>

        <div className="hero-strip" role="note">
          <strong>Upozornění:</strong>&nbsp;prodejna bude uzavřena 29.&nbsp;6.&nbsp;–
          12.&nbsp;7.&nbsp;2026 a 24.&nbsp;8.&nbsp;– 30.&nbsp;8.&nbsp;2026.
        </div>
      </header>

      {/* ===== SEKCE 1: DÍLY PODLE STROJE ===== */}
      <section className="stroje" id="sklad" aria-labelledby="stroje-h">
        <div className="sec-head">
          <p className="sec-eyebrow">Podle stroje</p>
          <h2 id="stroje-h" className="sec-title">
            Řekněte, co máte v garáži.
          </h2>
          <p className="sec-lead">
            Neprodáváme „univerzální díly“. Skladujeme podle konkrétních strojů —
            hlavně těch, které v Brně a okolí opravdu jezdí.
          </p>
        </div>

        <ul className="stroje-grid" role="list">
          {dily.map((d) => (
            <li key={d.stroj} className="stroj-card">
              <h3 className="stroj-name">{d.stroj}</h3>
              <p className="stroj-detail">{d.detail}</p>
            </li>
          ))}
        </ul>

        <div className="stroje-note">
          <p>
            <strong>Nově i díly na osobní auta</strong> — nové a použité. Když
            vedle motorky opravujete i auto, ušetříte si cestu.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: REGÁLY + PRODEJNA ===== */}
      <section className="regaly" aria-labelledby="regaly-h">
        <div className="regaly-inner">
          <div className="regaly-col">
            <p className="sec-eyebrow sec-eyebrow-light">Regál po regálu</p>
            <h2 id="regaly-h" className="sec-title sec-title-light">
              Spotřební věci bereme rovnou z&nbsp;police.
            </h2>
            <ul className="regal-list" role="list">
              {regaly.map((r) => (
                <li key={r.nazev} className="regal-row">
                  <span className="regal-name">{r.nazev}</span>
                  <span className="regal-pozn">{r.pozn}</span>
                </li>
              ))}
            </ul>
          </div>

          <aside className="prodejna" aria-label="Prodejna v Brně">
            <h3 className="prodejna-title">Prodejna Brno</h3>
            <p className="prodejna-text">
              Za pultem stojí lidi, kteří dvoutakty sami jezdí. Přineste starý
              díl s sebou — porovnáme, poradíme, a když ho nemáme, objednáme.
            </p>
            <dl className="prodejna-dl">
              <div className="prodejna-item">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420545578065">545 578 065</a>
                </dd>
              </div>
              <div className="prodejna-item">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@mual.cz">info@mual.cz</a>
                </dd>
              </div>
              <div className="prodejna-item">
                <dt>Prodej</dt>
                <dd>osobně na prodejně — e-shop je momentálně mimo provoz</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>
    </main>
  );
}
