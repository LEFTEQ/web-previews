export default function Page() {
  const jobs = [
    {
      code: "NÁKL·01",
      title: "Servis nákladních, přípojných a užitkových vozidel",
      desc: "Pravidelné prohlídky, oprava podvozků, náprav a řízení. Tahače, návěsy i lehčí užitkové vozy — vše na jednom místě, aby vůz nestál déle, než musí.",
    },
    {
      code: "BRZD·02",
      title: "Diagnostika brzd a odbrždění na válcové stolici",
      desc: "Měření účinku brzd na válcové stolici, seřízení a odbrždění. Přesně to, co potřebujete před STK i po delší cestě s naloženým vozem.",
    },
    {
      code: "HYDR·03",
      title: "Hydraulika, sklápěče a nástavby „walk floor“",
      desc: "Opravy a montáže hydraulických systémů, drobné opravy hydraulických čel i seřízení pohyblivých podlah. Rozumíme tomu, co vaše nástavba denně zvedá.",
    },
    {
      code: "TOPN·04",
      title: "Nezávislá topení Eberspächer a Webasto",
      desc: "Servis a opravy nezávislých topení, abyste v zimě nastartovali do tepla a nemuseli nechávat běžet motor přes noc.",
    },
    {
      code: "STK·05",
      title: "Příprava na STK včetně provedení",
      desc: "Vůz projdeme, srovnáme závady a technickou prohlídku pro vás rovnou vyřídíme. Vy dostanete auto zpět s razítkem.",
    },
    {
      code: "NÁST·06",
      title: "Nástavby, plachty, kontejnery a pevné konstrukce",
      desc: "Opravy nástaveb, plachtových konstrukcí, kontejnerů i pevných nástaveb. Svařování, výměny profilů a vše, co udrží náklad v suchu.",
    },
    {
      code: "NEHO·07",
      title: "Opravy po nehodě včetně pojistné události",
      desc: "Vůz opravíme a s pojišťovnou to vyjednáme za vás — od hlášení škody po výplatu. Míň papírování na vaší straně.",
    },
    {
      code: "OSOB·08",
      title: "Drobné opravy osobních vozidel",
      desc: "Když vedle náklaďáku potřebuje pozornost i firemní osobák, postaráme se i o něj.",
    },
  ];

  return (
    <>
      <header className="topbar">
        <div className="wrap topbar-inner">
          <div className="mark">
            <span style={{ margin: 0 }} aria-hidden="true" />
            <div style={{ display: "flex", alignItems: "baseline", gap: 2 }}>
              <b>DS</b>&nbsp;Auto
              <span>· dílna pro náklaďáky</span>
            </div>
          </div>
          <nav className="topnav" aria-label="Hlavní">
            <a className="navlink" href="#sluzby">Služby</a>
            <a className="navlink" href="#dilna">O dílně</a>
            <a className="call" href="tel:+420608770282">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              608 770 282
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="uvod">
        <img className="hero-img" src="/hero.webp" alt="Nákladní vozidla připravená k servisu v dílně DS Auto v Českých Budějovicích" />
        <div className="hero-shade" />
        <div className="wrap hero-inner">
          <p className="eyebrow reveal d1">Autoservis · České Budějovice, Okružní 544</p>
          <h1 className="reveal d2">
            Když stojí náklaďák,
            <em>stojí i vaše zakázka.</em>
          </h1>
          <p className="hero-lede reveal d3">
            Servis nákladních, přípojných a užitkových vozidel v Českých Budějovicích. Od brzd na válcové stolici přes hydrauliku sklápěčů až po STK — vozíme vás zpátky na silnici, ne do fronty.
          </p>
          <div className="hero-actions reveal d4">
            <a className="btn-hazard" href="tel:+420608770282">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              Zavolat Radkovi Křížovi
            </a>
            <a className="btn-ghost" href="#sluzby">Co v dílně opravíme →</a>
          </div>
        </div>
        <div className="hero-strip">
          <div className="wrap hero-strip-inner">
            <div className="stat"><b>Po–Pá 7:00–19:00</b><span>So 7:00–14:00</span></div>
            <div className="stat"><b>Válcová stolice na místě</b><span>Měření brzd &amp; odbrždění</span></div>
            <div className="stat"><b>STK vyřídíme za vás</b><span>Vč. jednání s pojišťovnou</span></div>
          </div>
        </div>
      </section>

      <section className="section" id="sluzby">
        <div className="wrap">
          <div className="section-head">
            <div>
              <p className="tag">Zakázky v dílně</p>
              <h2>Co u nás najede<br />na zvedák</h2>
            </div>
            <p>Osm věcí, se kterými k nám do Okružní jezdí dopravci z Budějovic i okolí. Nevíte, do které kolonky spadá vaše závada? Zavolejte, vejdeme se do řeči.</p>
          </div>
          <div className="ledger">
            {jobs.map((j) => (
              <article className="job" key={j.code}>
                <div className="job-code">{j.code}</div>
                <div>
                  <h3>{j.title}</h3>
                  <p>{j.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="trust" id="dilna">
        <div className="wrap section">
          <div className="trust-grid">
            <div className="trust-img-frame">
              <img src="/section-1.webp" alt="Mechanik při práci na nákladním vozidle v dílně DS Auto" />
              <span className="badge">Okružní 544 · Č. Budějovice</span>
            </div>
            <div>
              <p className="tag">O dílně</p>
              <h2>Malá dílna, která zvedne velké auto</h2>
              <p className="body">
                DS Auto vede Radek Kříž — a mluvit s ním budete rovnou vy, ne dispečink. Specializujeme se na náklaďáky, návěsy a užitkové vozy, protože víme, že každý den u nás na zvedáku je den, kdy vaše auto nevydělává.
              </p>
              <p className="body">
                Proto k opravě přistupujeme jako řidiči: nejdřív najít závadu, pak ji rovnou spravit a vůz vypravit ven. Brzdy měříme na vlastní válcové stolici, hydrauliku sklápěčů rozebereme do detailu a po nehodě za vás dořešíme i pojišťovnu.
              </p>
              <dl className="spec">
                <div className="spec-row"><dt>Kontakt</dt><dd>Radek Kříž</dd></div>
                <div className="spec-row"><dt>Telefon</dt><dd><a href="tel:+420608770282">608 770 282</a></dd></div>
                <div className="spec-row"><dt>E-mail</dt><dd><a href="mailto:ds-auto@seznam.cz">ds-auto@seznam.cz</a></dd></div>
                <div className="spec-row"><dt>Adresa</dt><dd>Okružní 544, 370 01 Č. Budějovice</dd></div>
                <div className="spec-row"><dt>Otevřeno</dt><dd>Po–Pá 7–19 · So 7–14</dd></div>
              </dl>
            </div>
          </div>
          <div className="trust-img-frame" style={{ marginTop: 40 }}>
            <img src="/section-2.webp" alt="Nákladní vozidla a technika v areálu servisu DS Auto" />
            <span className="badge">Náklaďáky · přívěsy · nástavby</span>
          </div>
        </div>
      </section>
    </>
  );
}
