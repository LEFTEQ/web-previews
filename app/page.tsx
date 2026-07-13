export default function Page() {
  const materialGroups = [
    {
      title: "Profily",
      items: "I, IPE, U, UPE, HEA, HEB, L a uzavřené profily JÄKL",
    },
    {
      title: "Ocel a trubky",
      items: "Plochá, kruhová, hlazená, čtvercová a betonářská ocel, černé trubky",
    },
    {
      title: "Plošný materiál",
      items: "Černé a trapézové plechy, KARI sítě, rošty a schodišťové stupně",
    },
    {
      title: "Pro stavbu",
      items: "Pletiva, distanční prvky a třmínky",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Připravíme řezný plán",
      text: "Rozměry a počty převedeme do přehledného plánu s co nejmenším odpadem materiálu.",
    },
    {
      number: "02",
      title: "Ocel upravíme",
      text: "Profily řežeme na pásové pile, včetně úhlových řezů. Zajistíme také vrtání a svařování.",
    },
    {
      number: "03",
      title: "Zakázku dopravíme",
      text: "Hotový materiál připravíme k odběru nebo domluvíme odvoz na vaši dílnu či stavbu.",
    },
  ];

  return (
    <>
      <title>KYSELA – hutní materiál a zpracování oceli v Českých Budějovicích</title>
      <meta
        name="description"
        content="Hutní materiál, řezné plány, dělení profilů a doprava v Českých Budějovicích. KYSELA dodává ocel s atestovou dokumentací od roku 1990."
      />
      <meta property="og:title" content="KYSELA – ocel připravená na vaši zakázku" />
      <meta
        property="og:description"
        content="Hutní materiál a kompletní servis pro dílny, zámečníky i stavby v jižních Čechách."
      />
      <meta property="og:type" content="website" />
      <meta property="og:image" content="/hero.webp" />

      <main className="kyselaPage">
        <header className="siteHeader" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="KYSELA – na úvod stránky">
            <span className="wordmarkMain">KYSELA</span>
            <span className="wordmarkSub">ocel &amp; servis</span>
          </a>

          <nav className="mainNav" aria-label="Navigace na stránce">
            <a href="#sortiment">Sortiment</a>
            <a href="#zpracovani">Zpracování</a>
          </nav>

          <a className="headerPhone" href="tel:+420736480022">
            <span>Po–Pá 7:30–15:30</span>
            736 480 022
          </a>
        </header>

        <section className="hero" id="uvod" aria-labelledby="hero-title">
          <img
            className="heroImage"
            src="/hero.webp"
            alt="Svazky ocelových profilů v areálu hutního materiálu KYSELA"
          />
          <div className="heroShade" aria-hidden="true" />

          <div className="heroContent">
            <p className="eyebrow">Hutní materiál · České Budějovice</p>
            <h1 id="hero-title">
              Ocel připravená
              <span>na vaši zakázku.</span>
            </h1>
            <p className="heroLead">
              Materiál nejen prodáme. Připravíme řezný plán, profily nadělíme,
              upravíme a dopravíme tam, kde je potřebujete.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="mailto:OBJEDNAVKY@KYSELA.CZ">
                Poslat poptávku
                <span aria-hidden="true">↗</span>
              </a>
              <a className="secondaryButton" href="tel:+420736480022">
                Zavolat 736 480 022
              </a>
            </div>
          </div>

          <div className="stockTicket" aria-label="Informace o nabídce">
            <span className="ticketNotch" aria-hidden="true" />
            <span className="ticketLabel">Materiálový list</span>
            <strong>OCEL / ČB</strong>
            <dl>
              <div>
                <dt>Původ</dt>
                <dd>Doložen atestem</dd>
              </div>
              <div>
                <dt>Servis</dt>
                <dd>Od řezu po odvoz</dd>
              </div>
            </dl>
          </div>

          <div className="measureRail" aria-hidden="true">
            <span>6 000</span>
            <span>3 000</span>
            <span>0 mm</span>
          </div>
        </section>

        <section className="sortimentSection" id="sortiment" aria-labelledby="sortiment-title">
          <div className="sectionIntro">
            <p className="sectionKicker">Skladem i na objednávku</p>
            <h2 id="sortiment-title">Od nosníku po poslední třmínek.</h2>
            <p>
              Pomůžeme vybrat vhodný rozměr i provedení. Konkrétní cenu a termín
              dodání potvrdíme podle množství a požadovaných úprav.
            </p>
          </div>

          <div className="sortimentImageFrame">
            <img
              src="/section-1.webp"
              alt="Uložené ocelové profily, jäkly a tyčový materiál v provozu KYSELA"
            />
            <span className="imageCaption">Rudolfovská 109 · České Budějovice</span>
          </div>

          <div className="materialList">
            {materialGroups.map((group) => (
              <article className="materialRow" key={group.title}>
                <h3>{group.title}</h3>
                <p>{group.items}</p>
                <span aria-hidden="true">—</span>
              </article>
            ))}
            <a className="textLink" href="mailto:OBJEDNAVKY@KYSELA.CZ?subject=Poptávka%20hutního%20materiálu">
              Napsat rozměry a množství <span aria-hidden="true">→</span>
            </a>
          </div>
        </section>

        <section className="serviceSection" id="zpracovani" aria-labelledby="service-title">
          <div className="serviceHeading">
            <p className="sectionKicker">Kompletní servis zakázky</p>
            <h2 id="service-title">Materiál od nás odjíždí připravený do práce.</h2>
          </div>

          <div className="serviceImageFrame">
            <img
              src="/section-2.webp"
              alt="Přesné dělení ocelového profilu na pásové pile v dílně KYSELA"
            />
            <div className="sinceBadge">
              <span>Tradice v regionu</span>
              <strong>od 1990</strong>
            </div>
          </div>

          <div className="serviceSteps" aria-label="Průběh zpracování zakázky">
            {services.map((service) => (
              <article className="serviceStep" key={service.number}>
                <span className="stepNumber">{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </article>
            ))}
          </div>

          <aside className="trustNote">
            <p>
              <strong>Jasný původ materiálu.</strong> Atestová dokumentace je
              samozřejmou součástí dodávky. Spolupracujeme s předními českými i
              zahraničními výrobci.
            </p>
            <span>Informace aktualizovány 07 / 2026</span>
          </aside>
        </section>
      </main>
    </>
  );
}
