export default function Page() {
  const sluzby = [
    {
      kod: "D1",
      nazev: "Demolice objektů",
      popis:
        "Rodinné domy, haly, komíny i vícepodlažní budovy. Zbouráme celý objekt včetně základů a připravíme pozemek na novou stavbu.",
      detail: "Strojní i postupné bourání",
    },
    {
      kod: "D2",
      nazev: "Vyklizení a příprava",
      popis:
        "Před bouráním vyklidíme objekt, odpojíme sítě a zajistíme statické posouzení. Vy jen předáte klíče.",
      detail: "Včetně odpojení sítí",
    },
    {
      kod: "D3",
      nazev: "Recyklace suti",
      popis:
        "Beton a cihly nadrtíme přímo na místě. Recyklát můžete použít do podkladních vrstev — ušetříte za odvoz i nový materiál.",
      detail: "Mobilní drtič na stavbě",
    },
    {
      kod: "D4",
      nazev: "Odvoz a likvidace odpadu",
      popis:
        "Veškerou suť odvezeme a zlikvidujeme podle zákona. Ke každé zakázce dostanete doklady o uložení odpadu.",
      detail: "Evidence pro stavební úřad",
    },
  ];

  const kroky = [
    {
      krok: "Prohlídka zdarma",
      text: "Přijedeme na místo kdekoliv v Ostravě a okolí, objekt si projdeme a do tří dnů pošleme závaznou cenu.",
    },
    {
      krok: "Papíry vyřídíme za vás",
      text: "Ohlášení demolice na stavebním úřadě, plán odpadového hospodářství, zábor komunikace — známe úřady v Ostravě a víme, co chtějí.",
    },
    {
      krok: "Bouráme podle plánu",
      text: "Vlastní bagry s hydraulickými nůžkami a kladivy. Kropíme proti prachu, hlídáme hluk, sousedy informujeme předem.",
    },
    {
      krok: "Předáme čistý pozemek",
      text: "Srovnaný terén, odvezená suť, doklady o likvidaci odpadu v ruce. Můžete rovnou stavět.",
    },
  ];

  return (
    <main className="kks">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Koblovská komoditní společnost">
            <span className="wordmark-block">KKS</span>
            <span className="wordmark-text">
              Koblovská komoditní
              <br />
              společnost, s.r.o.
            </span>
          </div>
          <p className="hero-since">Bourací práce · Ostrava · od 1994</p>
        </div>

        <div className="hero-main">
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">CO STOJÍ,</span>
            <span className="hero-line hero-line-2">
              <span className="hero-strike">TO POLOŽÍME.</span>
            </span>
            <span className="hero-line hero-line-3">ČISTĚ A&nbsp;S&nbsp;PAPÍRY.</span>
          </h1>

          <div className="hero-rubble" aria-hidden="true">
            <span className="rub r1" />
            <span className="rub r2" />
            <span className="rub r3" />
            <span className="rub r4" />
            <span className="rub r5" />
            <span className="rub r6" />
            <span className="rub r7" />
          </div>

          <p className="hero-sub">
            Demolice domů, hal a komínů na Ostravsku. Vlastní technika, drcení
            suti přímo na místě a kompletní doklady o likvidaci odpadu pro
            stavební úřad.
          </p>

          <div className="hero-facts" role="list">
            <div className="fact" role="listitem">
              <strong>30&nbsp;let</strong>
              <span>bouráme na Ostravsku</span>
            </div>
            <div className="fact" role="listitem">
              <strong>Vlastní</strong>
              <span>bagry, nůžky, drtič</span>
            </div>
            <div className="fact" role="listitem">
              <strong>90&nbsp;%</strong>
              <span>suti vracíme do stavby</span>
            </div>
          </div>
        </div>

        <div className="hero-tape" aria-hidden="true">
          <div className="hero-tape-inner">
            <span>DEMOLICE&ensp;⟋&ensp;VYKLIZENÍ&ensp;⟋&ensp;RECYKLACE SUTI&ensp;⟋&ensp;OSTRAVA A OKOLÍ&ensp;⟋&ensp;</span>
            <span>DEMOLICE&ensp;⟋&ensp;VYKLIZENÍ&ensp;⟋&ensp;RECYKLACE SUTI&ensp;⟋&ensp;OSTRAVA A OKOLÍ&ensp;⟋&ensp;</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás zbouráme</p>
          <h2 id="sluzby-h">
            Od prvního úderu kladiva
            <br />
            po srovnaný pozemek
          </h2>
        </div>

        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.kod}>
              <div className="karta-head">
                <span className="karta-kod">{s.kod}</span>
                <span className="karta-detail">{s.detail}</span>
              </div>
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
            </article>
          ))}
        </div>

        <p className="sluzby-note">
          Bouráme i menší věci — garáže, ploty, příčky, betonové plochy. Žádná
          zakázka není malá, přijedeme i kvůli jedné zdi.
        </p>
      </section>

      {/* ================= JAK PRACUJEME ================= */}
      <section className="proces" aria-labelledby="proces-h">
        <div className="section-head section-head-light">
          <p className="eyebrow">Jak zakázka probíhá</p>
          <h2 id="proces-h">Čtyři kroky. Vy řešíte jen ten první.</h2>
        </div>

        <ol className="proces-list">
          {kroky.map((k, i) => (
            <li className="proces-item" key={k.krok}>
              <span className="proces-num" aria-hidden="true">
                {i + 1}
              </span>
              <div className="proces-body">
                <h3>{k.krok}</h3>
                <p>{k.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <blockquote className="reference">
          <p>
            „Zbourali nám starý statek v Koblově včetně sklepů za devět dní.
            Suť nadrtili na místě a použili jsme ji pod novou příjezdovku.
            Papíry pro úřad přišly poštou, ani jsme se o nic nestarali.“
          </p>
          <footer className="reference-autor">
            — rodina Kaločova, Ostrava-Koblov, demolice 2024
          </footer>
        </blockquote>
      </section>
    </main>
  );
}
