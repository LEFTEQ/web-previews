const sluzby = [
  {
    nazev: "Koupelna a WC na klíč",
    popis:
      "Kompletní rekonstrukce od bourání po poslední spáru. Obklady, dlažba, sanita, sprchový kout nebo vana — vše od jedné party řemeslníků.",
    stitek: "Nejčastější zakázka",
  },
  {
    nazev: "Bytové jádro — i bez bourání",
    popis:
      "Umakartové jádro v panelovém bytě umíme přezdít, nebo renovovat bez bourání. Poradíme, která cesta dává u vašeho bytu smysl.",
    stitek: "Panelové domy Brno",
  },
  {
    nazev: "3D vizualizace předem",
    popis:
      "Než sáhneme na jedinou dlaždici, uvidíte svoji novou koupelnu ve 3D. Barvy, obklady i rozmístění si odsouhlasíte dopředu.",
    stitek: "Zdarma k nabídce",
  },
  {
    nazev: "Instalace a revize",
    popis:
      "Voda, plyn, topení, elektro — včetně revizních zpráv. Rozvody v jádru vyměníme kompletně, ne jen to, co je vidět.",
    stitek: "Vlastní řemeslníci",
  },
  {
    nazev: "Obkladačské práce",
    popis:
      "Velkoformátové dlažby, mozaiky, obklady do roviny a se spárou na milimetr. Obkladač je u nás řemeslo, ne subdodávka.",
    stitek: "Srdce firmy",
  },
  {
    nazev: "Kuchyně a nábytek na míru",
    popis:
      "Když už rekonstruujete, vyřešíme i kuchyňskou linku nebo vestavěný nábytek. Jedna firma, jeden termín, jedna odpovědnost.",
    stitek: "Navazující práce",
  },
];

const postup = [
  {
    krok: "Poptávka",
    text: "Zavoláte nebo napíšete. Ozveme se do dvou pracovních dnů a domluvíme si termín.",
  },
  {
    krok: "Konzultace u vás",
    text: "Přijedeme, změříme a probereme, co chcete. V okruhu 10 km od Brna zdarma.",
  },
  {
    krok: "Cena a vizualizace",
    text: "Dostanete položkový rozpočet zdarma a 3D návrh nové koupelny. Žádné odhady od boku.",
  },
  {
    krok: "Smlouva o dílo",
    text: "Pevná cena, pevný termín, vše na papíře. Vyberete si obklady, dlažbu a vybavení.",
  },
  {
    krok: "Realizace a předání",
    text: "Bouráme, stavíme, obkládáme. Suť odvezeme, uklidíme a předáme hotovou koupelnu.",
  },
];

export default function Page() {
  return (
    <main className="kv">
      {/* ================= HERO ================= */}
      <section className="hero" aria-labelledby="hero-heading">
        <div className="hero-inner">
          <header className="hero-top">
            <span className="wordmark">
              KOUPELNY<em>VÍDENSKÝ</em>
            </span>
            <span className="hero-loc">Brno · rodinná firma od r. 1991</span>
          </header>

          <div className="hero-main">
            <p className="hero-eyebrow">Rekonstrukce koupelen a bytových jader</p>
            <h1 id="hero-heading" className="hero-title">
              <span className="t-line t-1">Nová koupelna</span>
              <span className="t-line t-2">
                spára <span className="t-accent">po spáře</span>,
              </span>
              <span className="t-line t-3">na klíč.</span>
            </h1>
            <p className="hero-sub">
              Přes třicet let bouráme umakart a obkládáme koupelny po celém Brně.
              Od 3D návrhu přes rozvody až po poslední lištu — jedna firma, jedna
              smlouva, pevná cena.
            </p>
            <div className="hero-cta">
              <a className="btn btn-solid" href="tel:+420545214869">
                Zavolat 545 214 869
              </a>
              <a className="btn btn-line" href="mailto:koupelny-vidensky@centrum.cz">
                Napsat e‑mail
              </a>
            </div>
            <p className="hero-note">
              Konzultace u vás doma zdarma v okruhu 10 km od Brna. Položkový
              rozpočet zdarma.
            </p>
          </div>
        </div>

        {/* Signature: kachličková stěna se spárořezem */}
        <div className="tiles" aria-hidden="true">
          <div className="tiles-grid">
            {Array.from({ length: 24 }).map((_, i) => (
              <span key={i} className={`tile tile-${i % 24}`} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="sekce sluzby" aria-labelledby="sluzby-heading">
        <div className="sekce-inner">
          <div className="sekce-head">
            <h2 id="sluzby-heading">Co pro vás uděláme</h2>
            <p>
              Koupelny máme v názvu i v rukou. Ale protože rekonstrukce nikdy
              nekončí u dveří koupelny, zvládneme celý byt.
            </p>
          </div>
          <ul className="karty" role="list">
            {sluzby.map((s) => (
              <li key={s.nazev} className="karta">
                <span className="karta-stitek">{s.stitek}</span>
                <h3>{s.nazev}</h3>
                <p>{s.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================= POSTUP / DŮVĚRA ================= */}
      <section className="sekce postup" aria-labelledby="postup-heading">
        <div className="sekce-inner">
          <div className="sekce-head sekce-head-light">
            <h2 id="postup-heading">Jak u nás rekonstrukce probíhá</h2>
            <p>
              Žádné překvapení v půlce stavby. Postupujeme vždy stejně — krok za
              krokem, jako když se lepí obklad: od podkladu k poslední spáře.
            </p>
          </div>

          <ol className="kroky" role="list">
            {postup.map((p, i) => (
              <li key={p.krok} className="krok">
                <span className="krok-cislo" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="krok-text">
                  <h3>{p.krok}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="duvera">
            <blockquote className="citace">
              <p>
                „Jádro v paneláku na Lesné nám předělali za tři týdny. Každý den
                uklizeno, cena přesně podle rozpočtu. Po třiceti letech konečně
                koupelna, do které se chce chodit.“
              </p>
              <footer>— zákazníci z Brna‑Lesné, rekonstrukce bytového jádra</footer>
            </blockquote>
            <dl className="fakta">
              <div className="fakt">
                <dt>Na trhu</dt>
                <dd>30+ let</dd>
              </div>
              <div className="fakt">
                <dt>Firma</dt>
                <dd>Rodinná, brněnská</dd>
              </div>
              <div className="fakt">
                <dt>Rozpočet</dt>
                <dd>Položkový, zdarma</dd>
              </div>
              <div className="fakt">
                <dt>Konzultace</dt>
                <dd>U vás doma zdarma*</dd>
              </div>
            </dl>
            <p className="fakta-pozn">* v okruhu 10 km od Brna</p>
          </div>
        </div>
      </section>
    </main>
  );
}
