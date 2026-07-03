export default function Page() {
  const vrstvy = [
    { c: "Hydroizolační fólie / asfaltový pás", d: "mechanicky kotvená nebo natavená vrstva, která drží vodu venku" },
    { c: "Separační textilie", d: "chrání fólii před prodřením o tepelnou izolaci" },
    { c: "Tepelná izolace (EPS / minerální vata)", d: "spádové klíny odvedou vodu ke vpustem" },
    { c: "Parozábrana", d: "zastaví vlhkost z interiéru dřív, než se dostane do skladby" },
    { c: "Nosná konstrukce", d: "trapézový plech nebo beton — od ní se odvíjí celý návrh" },
  ];

  const sluzby = [
    {
      nazev: "Ploché střechy",
      popis:
        "Nové skladby i rekonstrukce střech, do kterých zatéká. Fóliové systémy (PVC, TPO) i asfaltové pásy, včetně spádování a kotevního plánu.",
      detail: "fólie PVC · TPO · asfaltové pásy",
    },
    {
      nazev: "Opláštění fasád",
      popis:
        "Opláštění průmyslových hal a budov sendvičovými panely a trapézovým plechem. Řešíme detaily kolem oken, vrat a atik, aby fasáda těsnila.",
      detail: "sendvičové panely · trapézový plech",
    },
    {
      nazev: "Pokrývačské a klempířské práce",
      popis:
        "Oplechování atik, parapetů a prostupů, žlaby a svody. Klempířina je to, co rozhoduje, jestli detail vydrží dvacet let, nebo dva.",
      detail: "atiky · žlaby · svody · lemování",
    },
    {
      nazev: "Světlíky a polykarbonát",
      popis:
        "Pásové i bodové světlíky, desky Makrolon, Lexan a Macrolux. Denní světlo do haly bez zatékání kolem rámu.",
      detail: "Makrolon · Lexan · Macrolux",
    },
    {
      nazev: "Jímky a nádrže",
      popis:
        "Izolace jímek, nádrží a záchytných van fólií odolnou vůči chemikáliím. Svařované spoje kontrolujeme jiskrovou zkouškou.",
      detail: "chemicky odolné fólie · zkouška těsnosti",
    },
    {
      nazev: "Terasy a balkony",
      popis:
        "Hydroizolace pochozích teras a balkonů bytových domů — skladba, která unese dlažbu i plzeňskou zimu.",
      detail: "pochozí skladby · balkony bytových domů",
    },
  ];

  return (
    <main className="nsk">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="hero-top">
            <div className="wordmark" aria-label="NSK Izolace">
              <span className="wm-nsk">NSK</span>
              <span className="wm-izolace">IZOLACE</span>
            </div>
            <p className="hero-loc">Plzeň · Klatovská tř. 1078/116</p>
          </div>

          <h1 className="hero-h1">
            <span className="h1-line h1-line-1">Střecha, kterou</span>
            <span className="h1-line h1-line-2">neuvidíte.</span>
            <span className="h1-line h1-line-3">Voda taky ne.</span>
          </h1>

          <p className="hero-sub">
            Izolujeme ploché střechy, fasády a nádrže průmyslových i bytových
            budov v Plzni a okolí. Od parozábrany po poslední svár fólie.
          </p>

          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420377420247">
              Zavolat 377 42 02 47
            </a>
            <a className="btn btn-line" href="mailto:nskizolace@nskizolace.cz">
              Napsat poptávku
            </a>
          </div>
        </div>

        {/* Signature: řez skladbou ploché střechy */}
        <div className="skladba" aria-hidden="false">
          <p className="skladba-label">Řez plochou střechou — takhle vypadá naše práce zevnitř</p>
          <ol className="skladba-list">
            {vrstvy.map((v, i) => (
              <li className={`vrstva vrstva-${i + 1}`} key={v.c}>
                <span className="vrstva-pruh" aria-hidden="true" />
                <span className="vrstva-text">
                  <strong>{v.c}</strong>
                  <em>{v.d}</em>
                </span>
              </li>
            ))}
          </ol>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="sekce-hlava">
          <h2 id="sluzby-h">Co u vás uděláme</h2>
          <p>
            Šest řemesel, jedna zodpovědnost: aby do budovy nezatékalo. Pracujeme
            jako subdodavatel pro stavební firmy i napřímo pro majitele objektů.
          </p>
        </div>

        <ul className="sluzby-grid">
          {sluzby.map((s) => (
            <li className="sluzba" key={s.nazev}>
              <span className="sluzba-svar" aria-hidden="true" />
              <h3>{s.nazev}</h3>
              <p>{s.popis}</p>
              <p className="sluzba-detail">{s.detail}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <h2 id="duvera-h">Plzeňská firma, na kterou se stavaři spoléhají</h2>
            <p>
              NSK IZOLACE s.r.o. sídlí na Klatovské třídě v Plzni a materiál i
              partu drží pohromadě od roku 2000. Většinu zakázek děláme jako
              subdodavatel — to znamená, že nás najímají stavební firmy, které si
              nemůžou dovolit reklamace. Dodáváme práci i materiál, včetně
              projekční a inženýrské činnosti.
            </p>
            <p>
              Každý svár fólie kontrolujeme, každý klempířský detail řešíme podle
              skladby konkrétní střechy. Když říkáme, že střecha těsní, máme za
              tím zkoušku, ne pocit.
            </p>
          </div>

          <dl className="duvera-fakta">
            <div className="fakt">
              <dt>Kde nás najdete</dt>
              <dd>
                Centrála: Klatovská tř. 1078/116, Plzeň — Jižní předměstí
                <br />
                Pobočka: areál CHKZ, Chlumčany
              </dd>
            </div>
            <div className="fakt">
              <dt>Pro koho pracujeme</dt>
              <dd>
                Stavební firmy, správci průmyslových areálů, SVJ a bytová
                družstva v Plzeňském kraji
              </dd>
            </div>
            <div className="fakt">
              <dt>Co dodáváme</dt>
              <dd>
                Práci i materiál — fólie, pásy, izolanty, klempířské prvky,
                světlíky. Jedna faktura, jedna zodpovědnost.
              </dd>
            </div>
            <div className="fakt">
              <dt>Rychlý kontakt</dt>
              <dd>
                <a href="tel:+420377420247">+420 377 42 02 47</a>
                <br />
                <a href="mailto:nskizolace@nskizolace.cz">
                  nskizolace@nskizolace.cz
                </a>
              </dd>
            </div>
          </dl>
        </div>

        <ul className="reference" aria-label="Typické zakázky">
          <li>
            <span className="ref-typ">Průmyslová hala</span>
            <p>
              Rekonstrukce 4 200 m² ploché střechy: stará skladba dolů, spádové
              klíny, PVC fólie, nové pásové světlíky.
            </p>
          </li>
          <li>
            <span className="ref-typ">Bytový dům</span>
            <p>
              Terasy a balkony po dvaceti letech zatékání — nová hydroizolace
              pod dlažbu, oplechování, žlaby.
            </p>
          </li>
          <li>
            <span className="ref-typ">Zemědělský provoz</span>
            <p>
              Izolace záchytné jímky chemicky odolnou fólií, svary ověřené
              jiskrovou zkouškou.
            </p>
          </li>
        </ul>
      </section>

      {/* Mobilní rychlý kontakt */}
      <a className="mobil-cta" href="tel:+420377420247" aria-label="Zavolat NSK Izolace">
        Zavolat
      </a>
    </main>
  );
}
