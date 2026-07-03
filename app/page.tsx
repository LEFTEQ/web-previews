export default function Page() {
  const sluzby = [
    {
      kod: "DN 80–1200",
      nazev: "Vodovody",
      popis:
        "Pokládka a rekonstrukce vodovodních řadů z tvárné litiny, PE a PVC. Přípojky, vodoměrné šachty, tlakové zkoušky a desinfekce potrubí před předáním.",
    },
    {
      kod: "DN 250–2000",
      nazev: "Kanalizace",
      popis:
        "Gravitační i tlakové kanalizační stoky, revizní šachty, odlehčovací komory. Kamerové zkoušky těsnosti jsou u nás standard, ne příplatek.",
    },
    {
      kod: "ČOV / ÚV",
      nazev: "Čistírny a úpravny vod",
      popis:
        "Výstavba a intenzifikace čistíren odpadních vod a úpraven pitné vody pro obce od 500 do 20 000 obyvatel. Včetně technologie a zkušebního provozu.",
    },
    {
      kod: "HTÚ",
      nazev: "Zemní práce a komunikace",
      popis:
        "Výkopy v paženém i nepaženém provedení, obnova povrchů po překopech, opravy místních komunikací. Vlastní strojní park — bagry, nakladače, hutnicí technika.",
    },
  ];

  const reference = [
    {
      rok: "2023",
      misto: "Boršov nad Vltavou",
      stavba: "Rekonstrukce vodovodu a kanalizace, ul. Na Návsi",
      detail: "1 240 m řadů, 38 přípojek, obnova asfaltových povrchů",
    },
    {
      rok: "2022",
      misto: "Hluboká nad Vltavou",
      stavba: "Intenzifikace ČOV na 8 500 EO",
      detail: "dostavba biologické linky za plného provozu čistírny",
    },
    {
      rok: "2022",
      misto: "České Budějovice — Rožnov",
      stavba: "Kanalizační sběrač DN 800",
      detail: "620 m stoky v hloubce až 5,2 m, pažení, přeložky sítí",
    },
    {
      rok: "2021",
      misto: "Kamenný Újezd",
      stavba: "Vodovodní přivaděč a vodojem 2× 150 m³",
      detail: "3,1 km přivaděče PE d225, armaturní komora, ATS",
    },
  ];

  return (
    <main className="vhs">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="VHS — Vodohospodářské stavby, České Budějovice">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 40 40" width="40" height="40" role="presentation" focusable="false">
                <circle cx="20" cy="20" r="17" fill="none" stroke="currentColor" strokeWidth="3.5" />
                <path d="M8 24c4-3.5 8 3.5 12 0s8 3.5 12 0" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </span>
            <span className="brand-word">
              VHS<span className="brand-sub">Vodohospodářské stavby · České Budějovice</span>
            </span>
          </div>

          <h1 className="hero-title">
            <span className="ht-row ht-1">Voda teče,</span>
            <span className="ht-row ht-2">protože ji někdo</span>
            <span className="ht-row ht-3">
              položil <em>do země.</em>
            </span>
          </h1>

          <p className="hero-lead">
            Stavíme vodovody, kanalizace a čistírny odpadních vod v jižních Čechách
            od roku 1992. Od výkopu po tlakovou zkoušku — vlastními lidmi a vlastními stroji.
          </p>

          <div className="hero-ctas">
            <a className="btn btn-solid" href="tel:+420387203611">
              Zavolat: 387 203 611
            </a>
            <a className="btn btn-ghost" href="mailto:info@vhs-cb.cz">
              Napsat e‑mail
            </a>
          </div>

          <dl className="hero-facts">
            <div className="fact">
              <dt>Působíme od</dt>
              <dd>1992</dd>
            </div>
            <div className="fact">
              <dt>Profily potrubí</dt>
              <dd>DN 80 — DN 2000</dd>
            </div>
            <div className="fact">
              <dt>Dojezd ze základny</dt>
              <dd>celý Jihočeský kraj</dd>
            </div>
          </dl>
        </div>

        {/* Signature: řez výkopem s uloženým potrubím — profil trubky jako kóta stavby */}
        <div className="trench" aria-hidden="true">
          <div className="trench-grid">
            <span className="tg-label tg-terrain">±0,000 · terén</span>
            <span className="tg-label tg-pipe">−2,400 · osa potrubí DN 800</span>
            <span className="tg-label tg-bed">−3,000 · pískové lože</span>
          </div>
          <svg
            className="trench-svg"
            viewBox="0 0 1200 260"
            preserveAspectRatio="none"
            role="presentation"
            focusable="false"
          >
            {/* terén */}
            <line className="t-terrain" x1="0" y1="20" x2="1200" y2="20" />
            {/* stěny výkopu */}
            <path className="t-wall" d="M420 20 L470 190 M780 20 L730 190" />
            {/* lože */}
            <line className="t-bed" x1="470" y1="190" x2="730" y2="190" />
            {/* trubka v řezu */}
            <circle className="t-pipe-outer" cx="600" cy="140" r="48" />
            <circle className="t-pipe-inner" cx="600" cy="140" r="36" />
            {/* hladina vody v trubce */}
            <path className="t-water" d="M570 152c10-7 20 7 30 0s20 7 30 0" />
            {/* osa potrubí – čerchovaná kóta doleva i doprava */}
            <line className="t-axis" x1="0" y1="140" x2="552" y2="140" />
            <line className="t-axis" x1="648" y1="140" x2="1200" y2="140" />
          </svg>
        </div>
      </header>

      {/* ---------- SLUŽBY ---------- */}
      <section className="sec sec-sluzby" aria-labelledby="sluzby-h">
        <div className="sec-inner">
          <p className="eyebrow">Co pro vás postavíme</p>
          <h2 id="sluzby-h" className="sec-title">
            Čtyři řemesla, jedna firma
          </h2>
          <p className="sec-lead">
            Obce, města i soukromí investoři u nás dostanou celou stavbu z jedné ruky —
            bez přehazování odpovědnosti mezi subdodavateli.
          </p>

          <ul className="sluzby-grid">
            {sluzby.map((s) => (
              <li key={s.nazev} className="sluzba">
                <span className="sluzba-kod">{s.kod}</span>
                <h3 className="sluzba-nazev">{s.nazev}</h3>
                <p className="sluzba-popis">{s.popis}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- REFERENCE ---------- */}
      <section className="sec sec-reference" aria-labelledby="ref-h">
        <div className="sec-inner">
          <p className="eyebrow eyebrow-light">Referenční stavby</p>
          <h2 id="ref-h" className="sec-title sec-title-light">
            Poznáte nás podle vodojemů, ne podle billboardů
          </h2>
          <p className="sec-lead sec-lead-light">
            Většina naší práce je pod zemí. Tady je pár staveb z posledních let,
            u kterých se můžete zeptat starostů, jak to s námi šlo.
          </p>

          <ol className="ref-list">
            {reference.map((r) => (
              <li key={r.stavba} className="ref-item">
                <span className="ref-rok">{r.rok}</span>
                <div className="ref-body">
                  <h3 className="ref-stavba">{r.stavba}</h3>
                  <p className="ref-misto">{r.misto}</p>
                  <p className="ref-detail">{r.detail}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="ref-zaruky">
            <p className="zaruka">
              <strong>ČSN EN ISO 9001</strong>
              <span>certifikovaný systém řízení kvality staveb</span>
            </p>
            <p className="zaruka">
              <strong>Zkoušky u každé stavby</strong>
              <span>tlakové zkoušky, kamerové prohlídky, protokoly k předání</span>
            </p>
            <p className="zaruka">
              <strong>Vlastní strojní park</strong>
              <span>nečekáte na cizí bagr — termíny držíme svou technikou</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
