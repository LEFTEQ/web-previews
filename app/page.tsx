const sluzby = [
  {
    kod: "EMI",
    nazev: "Měření emisí",
    popis:
      "Benzin i diesel za 900 Kč — nejlevnější v Ostravě. Přijedete, změříme, protokol dostanete na počkání. Bez objednání to zvládneme obvykle do 30 minut.",
    cena: "900 Kč",
  },
  {
    kod: "DIA",
    nazev: "Diagnostika řídicích jednotek",
    popis:
      "Svítí vám kontrolka motoru? Připojíme diagnostiku, přečteme chybové kódy a řekneme vám srozumitelně, co se děje — a kolik bude oprava stát, než na ni kývnete.",
    cena: "od 400 Kč",
  },
  {
    kod: "SRV",
    nazev: "Servis vozů všech značek",
    popis:
      "Pravidelný servis, výměna oleje, brzdy, rozvody. Ke každému vozu vedeme dokumentaci — víte přesně, kdy a co jsme dělali, a máte to černé na bílém.",
    cena: "dle úkonu",
  },
  {
    kod: "POJ",
    nazev: "Pojistné události",
    popis:
      "Bourali jste? Vyřídíme za vás celou pojistnou událost — od nahlášení po finanční vyrovnání. Jsme smluvní autoservis UNIQA pojišťovny.",
    cena: "vyřídíme za vás",
  },
];

const fleet = [
  "AYVENS",
  "LeasePlan ČR",
  "Business Lease",
  "Český rozhlas",
  "UniCredit Fleet Management",
  "Delivery Hero Logistics",
];

export default function Page() {
  return (
    <main className="hc">
      {/* ============ HERO ============ */}
      <section className="hero" aria-label="HAS car — diagnostika vozidel Ostrava">
        <header className="hero-top">
          <span className="wordmark">
            HAS<span className="wordmark-dot" aria-hidden="true">•</span>car
          </span>
          <span className="hero-loc">Poděbradova 31, Moravská Ostrava</span>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Diagnostika vozidel &amp; servis všech značek</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Vaše auto</span>
            <span className="hero-line hero-line-2">
              mluví<span className="title-dot" aria-hidden="true">.</span>
            </span>
            <span className="hero-line hero-line-3">My mu rozumíme.</span>
          </h1>
          <p className="hero-sub">
            Připojíme diagnostiku, přečteme chybové kódy a řekneme vám lidsky, co
            vašemu vozu je — dřív, než utratíte korunu za opravu.
          </p>
        </div>

        {/* Signature: živý diagnostický záznam — křivka z OBD tesretu */}
        <div className="scope" aria-hidden="true">
          <svg
            className="scope-svg"
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            role="presentation"
          >
            <path
              className="scope-grid-line"
              d="M0 80 H1200"
              stroke="currentColor"
              strokeWidth="1"
              strokeDasharray="2 10"
              fill="none"
            />
            <path
              className="scope-path"
              d="M0 80 L120 80 L150 80 L165 30 L180 130 L195 80 L340 80 L360 62 L380 98 L400 80 L560 80 L575 20 L590 140 L605 80 L760 80 L790 70 L820 90 L850 80 L980 80 L995 38 L1010 122 L1025 80 L1200 80"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <div className="scope-labels">
            <span>OBD-II · CAN BUS</span>
            <span>SIGNÁL: OK</span>
          </div>
        </div>

        <div className="hero-facts">
          <div className="fact">
            <span className="fact-num">900&nbsp;Kč</span>
            <span className="fact-label">emise benzin i diesel — nejlevněji v Ostravě</span>
          </div>
          <div className="fact">
            <span className="fact-num">Všechny značky</span>
            <span className="fact-label">servisujeme bez rozdílu výrobce</span>
          </div>
          <div className="fact">
            <span className="fact-num">602&nbsp;733&nbsp;314</span>
            <span className="fact-label">zavolejte, poradíme hned</span>
          </div>
        </div>
      </section>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás vyřešíte</h2>
          <p className="section-lead">
            Ceny říkáme předem a držíme je. Žádné položky navíc na faktuře, žádné
            „ono se to nabalilo".
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li key={s.kod} className="karta">
              <div className="karta-head">
                <span className="karta-kod" aria-hidden="true">
                  {s.kod}
                </span>
                <span className="karta-cena">{s.cena}</span>
              </div>
              <h3 className="karta-nazev">{s.nazev}</h3>
              <p className="karta-popis">{s.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ============ DŮVĚRA ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Kdo nám svěřuje svá auta</h2>
            <p>
              Jsme partnerský servis sítě <strong>LKQ CZ</strong> a smluvní
              autoservis <strong>UNIQA pojišťovny</strong>. Naši mechanici
              procházejí pravidelnými školeními — ke každému vozu vedeme podrobnou
              dokumentaci, takže vždy víte, kdy a co jsme na něm dělali.
            </p>
            <p>
              Spravujeme také flotily firem na operativní leasing. Když nám firmy
              svěří desítky vozů, na kterých závisí jejich provoz, je to nejlepší
              reference, jakou můžeme dát i vám.
            </p>
          </div>

          <div className="duvera-fleet">
            <h3 className="fleet-title">Servisujeme flotily</h3>
            <ul className="fleet-list">
              {fleet.map((f) => (
                <li key={f} className="fleet-item">
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="duvera-kontakt">
          <div className="kontakt-radek">
            <span className="kontakt-label">Provozovna</span>
            <span className="kontakt-hodnota">Poděbradova 31, 702 00 Moravská Ostrava</span>
          </div>
          <div className="kontakt-radek">
            <span className="kontakt-label">Telefon</span>
            <a className="kontakt-hodnota kontakt-link" href="tel:+420602733314">
              602 733 314
            </a>
          </div>
          <div className="kontakt-radek">
            <span className="kontakt-label">Pevná linka</span>
            <a className="kontakt-hodnota kontakt-link" href="tel:+420596116204">
              596 116 204
            </a>
          </div>
          <div className="kontakt-radek">
            <span className="kontakt-label">E-mail</span>
            <a className="kontakt-hodnota kontakt-link" href="mailto:hascar@volny.cz">
              hascar@volny.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
