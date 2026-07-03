export default function Page() {
  const sluzby = [
    {
      kod: "PS",
      nazev: "Ploché střechy",
      popis:
        "Fóliové i asfaltové střechy, střechy přitížené kamenivem, plechové krytiny a TR plechy. Součástí dodávky jsou klempířské prvky a záchytný systém proti pádu — střechu předáváme kompletní a bezpečnou.",
      polozky: ["Fóliové hydroizolace (PVC, TPO)", "Asfaltové pásy", "Přitížení kamenivem", "Klempířské prvky a záchytný systém"],
    },
    {
      kod: "OD",
      nazev: "Okna a dveře",
      popis:
        "Hliníkové systémy oken a dveří pro rodinné domy, průmyslové haly i administrativní budovy. Vybíráme systém podle provozu a rozpočtu — hliník vydrží desítky let bez údržby.",
      polozky: ["Hliníková okna", "Vstupní a interiérové dveře", "Prosklené stěny", "Vrata a portály pro haly"],
    },
    {
      kod: "FA",
      nazev: "Fasády a opláštění",
      popis:
        "Sendvičové panely, skládané pláště, ocelové konstrukce i celoprosklené fasády. Montujeme s kvalifikovanými pracovníky podle platných předpisů a norem — plášť budovy je vizitka i izolace zároveň.",
      polozky: ["Sendvičové panely", "Skládané pláště", "Ocelové konstrukce", "Prosklené fasády"],
    },
  ];

  const fakta = [
    { cislo: "1991", text: "rok založení firmy — na plzeňském trhu stavíme přes třicet let" },
    { cislo: "50", text: "zaměstnanců ve vlastních montážních partách, bez přeprodávání zakázek" },
    { cislo: "200 mil. Kč", text: "roční obrat — finanční stabilita, která unese i velké průmyslové zakázky" },
    { cislo: "ISO 9001 + 14001", text: "certifikovaný systém kvality a environmentálního managementu" },
  ];

  return (
    <main className="fk">
      {/* ===== HERO ===== */}
      <header className="fk-hero">
        <div className="fk-hero-top">
          <div className="fk-wordmark" aria-label="FALK, spol. s r. o.">
            <span className="fk-wordmark-name">FALK</span>
            <span className="fk-wordmark-sub">spol. s r. o. · Plzeň</span>
          </div>
          <p className="fk-hero-contact">
            <a href="tel:+420601227250">601 227 250</a>
          </p>
        </div>

        {/* Signature: vrstvy střešního souvrství */}
        <div className="fk-hero-body">
          <p className="fk-hero-eyebrow">Pokrývačství a opláštění budov · od roku 1991</p>
          <h1 className="fk-hero-title">
            <span className="fk-line fk-line-1">Plochá střecha</span>
            <span className="fk-line fk-line-2">se skládá po vrstvách.</span>
            <span className="fk-line fk-line-3">My taky.</span>
          </h1>

          <div className="fk-souvrstvi" role="img" aria-label="Schéma souvrství ploché střechy: hydroizolace, tepelná izolace, parozábrana, nosná konstrukce">
            <div className="fk-vrstva fk-vrstva-1">
              <span className="fk-vrstva-cislo">4</span>
              <span className="fk-vrstva-nazev">Hydroizolace — fólie / asfalt</span>
            </div>
            <div className="fk-vrstva fk-vrstva-2">
              <span className="fk-vrstva-cislo">3</span>
              <span className="fk-vrstva-nazev">Tepelná izolace</span>
            </div>
            <div className="fk-vrstva fk-vrstva-3">
              <span className="fk-vrstva-cislo">2</span>
              <span className="fk-vrstva-nazev">Parozábrana</span>
            </div>
            <div className="fk-vrstva fk-vrstva-4">
              <span className="fk-vrstva-cislo">1</span>
              <span className="fk-vrstva-nazev">Nosná konstrukce — beton / TR plech</span>
            </div>
          </div>

          <p className="fk-hero-lead">
            Ploché střechy, hliníková okna a dveře, fasádní pláště. Kompletní dodávka a montáž
            pro bytové, administrativní i průmyslové budovy — v Plzni a po celé republice.
          </p>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="fk-sluzby" aria-labelledby="sluzby-h">
        <div className="fk-section-head">
          <h2 id="sluzby-h">Tři řemesla, jedna firma</h2>
          <p>
            Střecha, otvory, plášť — všechno, co dělí interiér budovy od počasí.
            Držíme to pohromadě, protože detaily napojení rozhodují o tom, jestli poteče.
          </p>
        </div>

        <div className="fk-sluzby-grid">
          {sluzby.map((s) => (
            <article className="fk-karta" key={s.kod}>
              <div className="fk-karta-hlava">
                <span className="fk-karta-kod" aria-hidden="true">{s.kod}</span>
                <h3>{s.nazev}</h3>
              </div>
              <p className="fk-karta-popis">{s.popis}</p>
              <ul className="fk-karta-seznam">
                {s.polozky.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="fk-duvera" aria-labelledby="duvera-h">
        <div className="fk-duvera-inner">
          <div className="fk-duvera-text">
            <h2 id="duvera-h">Střecha je záruka na desítky let. Firma za ní musí vydržet stejně dlouho.</h2>
            <p>
              Falk staví od roku 1991. Za tu dobu jsme v Plzni a okolí zakryli bytové domy,
              průmyslové haly i administrativní budovy — a u většiny z nich pořád držíme záruky.
              Vlastní technické vybavení a stálí kvalifikovaní zaměstnanci znamenají, že práci
              nepředáváme dál a za detail plníme my, ne subdodavatel.
            </p>
            <p>
              Sídlíme na Radobyčické 9 v Plzni. Schůzku si domluvíte telefonicky nebo e-mailem —
              na střechu se přijedeme podívat osobně, nabídku neděláme od stolu.
            </p>
          </div>

          <dl className="fk-fakta">
            {fakta.map((f) => (
              <div className="fk-fakt" key={f.cislo}>
                <dt>{f.cislo}</dt>
                <dd>{f.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
