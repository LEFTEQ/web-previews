export default function Page() {
  const sluzby = [
    {
      nazev: "Rekonstrukce bytů a domů",
      popis:
        "Kompletní rekonstrukce od bourání po finální malbu. Byt v paneláku i chalupa na Šumavě — vše pod jednou partou, jeden odpovědný stavbyvedoucí.",
      stitek: "HSV",
    },
    {
      nazev: "Elektroinstalace",
      popis:
        "Nové rozvody, rozvaděče, revize. Elektriku vám nezadáváme přes tři subdodavatele — máme vlastní elektrikáře, kteří znají zbytek stavby.",
      stitek: "Elektro",
    },
    {
      nazev: "Voda, odpady, topení",
      popis:
        "Výměna stoupaček, nové koupelny, kotelny i podlahové topení. Rozvody navrhneme tak, aby se k nim šlo za deset let dostat.",
      stitek: "ZTI",
    },
    {
      nazev: "Obklady a dlažby",
      popis:
        "Koupelny, kuchyně, terasy. Rovina do dvou milimetrů na dvoumetrové lati — spáru poznáte podle toho, že si jí nevšimnete.",
      stitek: "Obklady",
    },
    {
      nazev: "Novostavby",
      popis:
        "Rodinné domy na klíč od základové desky. Stavíme klasicky zděné domy — v jižních Čechách víme, co vydrží.",
      stitek: "Stavby",
    },
    {
      nazev: "Servis a údržba",
      popis:
        "Drobné opravy, havárie, údržba bytových domů pro SVJ. Přijedeme i na práci, na kterou se velkým firmám nechce.",
      stitek: "Servis",
    },
  ];

  return (
    <main className="rv">
      {/* ===== HERO ===== */}
      <header className="rv-hero">
        <div className="rv-hero-inner">
          <div className="rv-topbar">
            <span className="rv-wordmark" aria-label="Revoss CB">
              REVOSS<span className="rv-wordmark-cb">/CB</span>
            </span>
            <a className="rv-topbar-tel" href="tel:+420775576742">
              775 576 742
            </a>
          </div>

          <h1 className="rv-hero-title">
            <span className="rv-line rv-line-1">Zedník,</span>
            <span className="rv-line rv-line-2">elektrikář</span>
            <span className="rv-line rv-line-3">
              i&nbsp;instalatér.
              <span className="rv-hero-mark" aria-hidden="true"></span>
            </span>
            <span className="rv-line rv-line-4 rv-hero-sub">Jedna parta z&nbsp;Budějovic.</span>
          </h1>

          <p className="rv-hero-text">
            Stavební firma REVOSS CB vede vaši rekonstrukci nebo stavbu jako
            celek — žádné přehazování mezi řemesly, žádné „to není naše
            práce“. Působíme v&nbsp;Českých Budějovicích a&nbsp;okolí od
            roku&nbsp;2002.
          </p>

          <div className="rv-hero-cta">
            <a className="rv-btn" href="tel:+420775576742">
              Zavolat 775 576 742
            </a>
            <a className="rv-btn rv-btn-ghost" href="mailto:info@revosscb.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: zdicí vazba — běhounová vazba cihel jako grafický základ */}
        <div className="rv-brickwall" aria-hidden="true">
          <div className="rv-brickrow rv-br-a"></div>
          <div className="rv-brickrow rv-br-b"></div>
          <div className="rv-brickrow rv-br-a"></div>
          <div className="rv-brickrow rv-br-b"></div>
          <div className="rv-brickrow rv-br-a"></div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="rv-sluzby" aria-labelledby="sluzby-h">
        <div className="rv-section-head">
          <p className="rv-eyebrow">Šest řemesel pod jednou střechou</p>
          <h2 id="sluzby-h" className="rv-h2">
            Co pro vás postavíme a&nbsp;opravíme
          </h2>
          <p className="rv-section-lead">
            Každé řemeslo děláme vlastními lidmi. Na stavbě se tak nikdo na
            nikoho nečeká — elektrikář ví, kudy povede voda, obkladač ví, kde
            skončila omítka.
          </p>
        </div>

        <div className="rv-grid">
          {sluzby.map((s) => (
            <article className="rv-card" key={s.nazev}>
              <span className="rv-card-tag">{s.stitek}</span>
              <h3 className="rv-card-title">{s.nazev}</h3>
              <p className="rv-card-text">{s.popis}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="rv-duvera" aria-labelledby="duvera-h">
        <div className="rv-duvera-inner">
          <div className="rv-duvera-text">
            <p className="rv-eyebrow rv-eyebrow-light">Proč REVOSS CB</p>
            <h2 id="duvera-h" className="rv-h2 rv-h2-light">
              Stavíme v&nbsp;Budějovicích, kde nás každý zákazník může
              zkontrolovat
            </h2>
            <p className="rv-duvera-p">
              Sídlíme v&nbsp;ulici Boženy Němcové, pět minut od centra. Naše
              rekonstruované byty najdete na sídlištích Máj i&nbsp;Vltava,
              koupelny v&nbsp;domech na Pražském předměstí, novostavby
              v&nbsp;obcích kolem Budějovic. Když se chcete podívat na hotovou
              práci, domluvíme prohlídku u&nbsp;spokojeného zákazníka.
            </p>
            <p className="rv-duvera-p">
              Před podpisem dostanete položkový rozpočet — víte, co platíte za
              materiál a&nbsp;co za práci. Vícepráce odsouhlasíte předem,
              písemně. A&nbsp;pomůžeme vám i&nbsp;s&nbsp;financováním stavby,
              pokud řešíte úvěr nebo dotaci.
            </p>

            <dl className="rv-fakta">
              <div className="rv-fakt">
                <dt>Na trhu</dt>
                <dd>od r.&nbsp;2002</dd>
              </div>
              <div className="rv-fakt">
                <dt>Působnost</dt>
                <dd>ČB a&nbsp;okolí do 30&nbsp;km</dd>
              </div>
              <div className="rv-fakt">
                <dt>Rozpočet</dt>
                <dd>položkový, předem</dd>
              </div>
              <div className="rv-fakt">
                <dt>Záruka</dt>
                <dd>písemně ve smlouvě</dd>
              </div>
            </dl>
          </div>

          <aside className="rv-reference" aria-label="Reference zákazníků">
            <blockquote className="rv-quote">
              <p>
                „Rekonstrukce bytu 3+1 na Máji za šest týdnů, jak slíbili.
                Elektrika, voda, koupelna, podlahy — všechno jedna firma,
                jeden telefon.“
              </p>
              <footer>— manželé Novotní, České Budějovice</footer>
            </blockquote>
            <blockquote className="rv-quote">
              <p>
                „Pro naše SVJ dělají údržbu třetím rokem. Havárii vody řešili
                ještě ten den, kdy jsme volali.“
              </p>
              <footer>— výbor SVJ, sídliště Vltava</footer>
            </blockquote>
            <p className="rv-adresa">
              REVOSS CB s.r.o. · B.&nbsp;Němcové 741/55, 370&nbsp;01 České
              Budějovice · IČ&nbsp;26040999
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
