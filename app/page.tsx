// Studio Relax — masáže, Ostrava
// Náhledový návrh: hero + Nabídka masáží + Proč k nám / důvěra

const masaze = [
  {
    nazev: "Klasická masáž zad a šíje",
    doba: "30 min",
    cena: "450 Kč",
    popis:
      "Nejčastější volba, když vás po práci u počítače bolí mezi lopatkami. Uvolníme ztuhlé svaly zad, šíje a ramen.",
  },
  {
    nazev: "Celotělová relaxační masáž",
    doba: "60 min",
    cena: "800 Kč",
    popis:
      "Hodina jen pro vás. Pomalé, hluboké tahy od chodidel po šíji s teplým mandlovým olejem. Odejdete o pár kilo lehčí.",
  },
  {
    nazev: "Masáž lávovými kameny",
    doba: "75 min",
    cena: "950 Kč",
    popis:
      "Teplo z vulkanických kamenů prohřeje svaly do hloubky. Ideální v zimě a při dlouhodobém přetížení.",
  },
  {
    nazev: "Medová detoxikační masáž",
    doba: "45 min",
    cena: "650 Kč",
    popis:
      "Poctivá technika s pravým medem, která prokrví záda a podpoří látkovou výměnu. Trochu tahá — a stojí to za to.",
  },
  {
    nazev: "Sportovní a rekondiční masáž",
    doba: "45 min",
    cena: "700 Kč",
    popis:
      "Pro běžce, cyklisty i ty, kdo to v posilovně přehnali. Hlubší tlak, protažení a práce se spoušťovými body.",
  },
  {
    nazev: "Masáž hlavy a obličeje",
    doba: "30 min",
    cena: "400 Kč",
    popis:
      "Úleva při napětí, migrénách a únavě očí. Jemná technika, po které se vám bude chtít spát — a to je dobře.",
  },
];

const duvody = [
  {
    heslo: "Objednáte se na den dopředu",
    text: "Volné termíny máme obvykle do 24 hodin. Zavoláte, domluvíme čas, přijdete. Žádné čekání týdny.",
  },
  {
    heslo: "18 let praxe v Ostravě",
    text: "Masírujeme od roku 2006. Certifikované kurzy klasické, sportovní i lávové masáže — a hlavně tisíce spokojených zad.",
  },
  {
    heslo: "5 minut od centra",
    text: "Najdete nás v klidné ulici kousek od centra Ostravy. Tramvají i autem to máte pár minut, parkování před domem.",
  },
];

const reference = [
  {
    text: "Sedím osm hodin denně u počítače a jednou za měsíc si sem chodím ‚resetovat' záda. Paní masérka přesně ví, kde mě to tuhne.",
    jmeno: "Martina K., Ostrava-Poruba",
  },
  {
    text: "Po maratonu jsem sotva chodil. Sportovní masáž mě dala dohromady za dvě návštěvy. Doporučuju každému běžci.",
    jmeno: "Jakub S., Moravská Ostrava",
  },
];

export default function Page() {
  return (
    <main className="sr">
      {/* ===== HERO ===== */}
      <header className="sr-hero">
        <div className="sr-hero-inner">
          <p className="sr-wordmark" aria-label="Studio Relax">
            <span className="sr-wordmark-studio">studio</span>
            <span className="sr-wordmark-relax">relax</span>
          </p>

          <h1 className="sr-hero-title">
            <span className="sr-line sr-line-1">Hodina,</span>
            <span className="sr-line sr-line-2">kdy svět</span>
            <span className="sr-line sr-line-3">
              po<span className="sr-breath">čká</span>.
            </span>
          </h1>

          {/* Signature: dechová vlna — rytmus dlouhého masážního tahu */}
          <div className="sr-wave" aria-hidden="true">
            <svg viewBox="0 0 900 120" preserveAspectRatio="none">
              <path
                className="sr-wave-path"
                d="M0,60 C90,10 180,10 270,60 C360,110 450,110 540,60 C630,10 720,10 810,60 C855,85 878,85 900,72"
                fill="none"
              />
            </svg>
          </div>

          <p className="sr-hero-sub">
            Masáže v Ostravě — klasické, sportovní i lávovými kameny.
            Od roku 2006, pár minut od centra. Objednáte se jedním zavoláním.
          </p>

          <div className="sr-hero-cta">
            <a className="sr-btn sr-btn-primary" href="tel:+420605123456">
              Zavolat a objednat se
            </a>
            <a className="sr-btn sr-btn-ghost" href="#masaze">
              Ceník masáží
            </a>
          </div>

          <ul className="sr-hero-facts">
            <li>Po–Pá 9–19 h</li>
            <li>So po domluvě</li>
            <li>Platba kartou i hotově</li>
          </ul>
        </div>
      </header>

      {/* ===== NABÍDKA ===== */}
      <section className="sr-section" id="masaze" aria-labelledby="masaze-h">
        <div className="sr-section-head">
          <p className="sr-eyebrow">Ceník · platí od ledna 2025</p>
          <h2 id="masaze-h" className="sr-h2">
            Vyberte si masáž podle toho, co vás <em>opravdu</em> trápí
          </h2>
          <p className="sr-section-lead">
            Nevíte, která je pro vás? Zavolejte — poradíme podle toho, co vás
            bolí a kolik máte času. Ceny jsou konečné, bez příplatků.
          </p>
        </div>

        <ul className="sr-menu">
          {masaze.map((m) => (
            <li className="sr-menu-item" key={m.nazev}>
              <div className="sr-menu-top">
                <h3 className="sr-menu-name">{m.nazev}</h3>
                <p className="sr-menu-meta">
                  <span className="sr-menu-doba">{m.doba}</span>
                  <span className="sr-menu-cena">{m.cena}</span>
                </p>
              </div>
              <p className="sr-menu-popis">{m.popis}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="sr-section sr-section-alt" aria-labelledby="duvera-h">
        <div className="sr-section-head">
          <p className="sr-eyebrow">Proč Studio Relax</p>
          <h2 id="duvera-h" className="sr-h2">
            Masírujeme v Ostravě od roku 2006
          </h2>
        </div>

        <div className="sr-duvody">
          {duvody.map((d) => (
            <article className="sr-duvod" key={d.heslo}>
              <div className="sr-duvod-mark" aria-hidden="true">
                <svg viewBox="0 0 48 16">
                  <path
                    d="M2,8 C8,2 16,2 24,8 C32,14 40,14 46,8"
                    fill="none"
                  />
                </svg>
              </div>
              <h3 className="sr-duvod-heslo">{d.heslo}</h3>
              <p className="sr-duvod-text">{d.text}</p>
            </article>
          ))}
        </div>

        <div className="sr-reference">
          {reference.map((r) => (
            <blockquote className="sr-ref" key={r.jmeno}>
              <p className="sr-ref-text">„{r.text}“</p>
              <footer className="sr-ref-jmeno">— {r.jmeno}</footer>
            </blockquote>
          ))}
        </div>
      </section>
    </main>
  );
}
