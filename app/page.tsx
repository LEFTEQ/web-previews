import { AiImage } from "./_ui";

const specimens = [
  {
    id: "01",
    title: "Šikmé střechy",
    body:
      "Pracujeme se širokou řadou pokrývačských materiálů — pálená i betonová taška, plech, břidlice. Střechu složíme přesně podle vašich představ a sklonu domu.",
    specs: [
      ["Materiál", "pálená / betonová taška"],
      ["Výrobce", "Bramac, Iko"],
      ["Záruka", "až 30 let"],
    ],
  },
  {
    id: "02",
    title: "Ploché střechy",
    body:
      "Rekonstrukce plochých střech nejmodernějšími postupy — kotvený systém z modifikovaných asfaltových pásů SOLO, natavené a zaválcované spoje.",
    specs: [
      ["Materiál", "modifik. asf. pás SOLO"],
      ["Systém", "mechanicky kotvený"],
      ["Záruka", "15 let na skladbu"],
    ],
  },
  {
    id: "03",
    title: "Střešní okna",
    body:
      "Střešní okna namontujeme přesně podle standardů výrobce — s napojením na parozábranu i podstřešní fólii, aby okolo rámu nikde nezateklo.",
    specs: [
      ["Výrobce", "Velux, Roto, Prima fenestra"],
      ["Montáž", "dle standardu výrobce"],
      ["Napojení", "lemování + fólie"],
    ],
  },
  {
    id: "04",
    title: "Vzduchotechnika",
    body:
      "Výroba a montáž vzduchotechnických zařízení pro průmyslové, užitné i obytné prostory — návrh trasy, výroba dílů, osazení a odzkoušení.",
    specs: [
      ["Obor", "průmysl / obytné"],
      ["Rozsah", "výroba + montáž"],
      ["Zázemí", "vlastní dílna"],
    ],
  },
  {
    id: "05",
    title: "Klempířství & zámečnictví",
    body:
      "Klempířská a drobná zámečnická výroba ve vlastních prostorách — žlaby, svody, oplechování komínů, atik a parapetů na míru střeše.",
    specs: [
      ["Práce", "žlaby, svody, oplechování"],
      ["Plech", "titanzinek, měď"],
      ["Kapacita", "vlastní prostory"],
    ],
  },
];

const skoleni = [
  "Bramac",
  "Velux",
  "Roto",
  "Iko",
  "Isola",
  "Vedag",
  "Dektrade",
];

function RoofMark() {
  return (
    <svg className="mark-glyph" viewBox="0 0 52 34" aria-hidden="true">
      <path d="M3 32 L26 5 L49 32" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinejoin="round" />
      <path d="M17 32 L26 21 M26 32 L26 12 M35 32 L26 21" fill="none" stroke="currentColor" strokeWidth="1.4" opacity="0.7" />
    </svg>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="mark" href="#top" aria-label="Střechy Reiner — Liberec">
          <RoofMark />
          <span className="mark-text">
            <span className="mark-name">
              Střechy <strong>Reiner</strong>
            </span>
            <span className="mark-sub">Pokrývačství · Liberec</span>
          </span>
        </a>
        <nav className="topnav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">Reference</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-media">
          <AiImage
            src="/hero.webp"
            alt="Střecha historické liberecké vily s měděnou patinou a falcovaným plechem"
            className="hero-img"
          />
        </div>
        <div className="hero-body">
          <p className="eyebrow">Pokrývačství &amp; klempířství — Liberec</p>
          <h1 className="hero-title">
            Klademe střechu tak,
            <br /> jak se má — kurs po kursu.
          </h1>
          <p className="hero-lead">
            Šikmé i ploché střechy, střešní okna a klempířina. Desítky realizací
            v Liberci a okolí a každoroční školení u&nbsp;Bramacu, Veluxu i&nbsp;Rota — každý
            detail sedí na milimetr.
          </p>
        </div>
      </section>

      <section className="band band--services" id="sluzby">
        <div className="wrap">
          <div className="band-head">
            <p className="eyebrow eyebrow--patina">Vzorník řemesla · 05 položek</p>
            <h2 className="band-title">Co pro vaši střechu uděláme</h2>
            <p className="band-note">
              Každá služba je jako vzorek na pokrývačské desce — kladený přes
              spodní kus, se štítkem materiálu, výrobce a záruky.
            </p>
          </div>

          <ol className="board">
            {specimens.map((s, i) => (
              <li
                key={s.id}
                className="specimen"
                style={{ zIndex: specimens.length - i }}
              >
                <span className="spec-fold" aria-hidden="true" />
                <div className="spec-inner">
                  <div className="spec-top">
                    <span className="spec-index">Vzorek {s.id}</span>
                    <h3 className="spec-title">{s.title}</h3>
                  </div>
                  <p className="spec-body">{s.body}</p>
                  <dl className="spec-label">
                    {s.specs.map(([k, v]) => (
                      <div className="spec-row" key={k}>
                        <dt>{k}</dt>
                        <dd>{v}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band band--trust" id="duvera">
        <div className="wrap">
          <div className="band-head">
            <p className="eyebrow eyebrow--patina">Záruka kvality</p>
            <h2 className="band-title">Roky práce nad libereckými střechami</h2>
            <p className="band-note">
              Kompletní realizace všech druhů střech z nejkvalitnějších materiálů
              a nejmodernějšími technologiemi. Za tu dobu jsme jich pokryli desítky
              v Liberci a okolí — a stále se učíme nové postupy.
            </p>
          </div>

          <div className="trust-grid">
            <figure className="trust-figure trust-figure--wide">
              <AiImage
                src="/section-1.webp"
                alt="Realizace šikmé střechy s taškovou krytinou v Liberci"
                className="trust-img"
              />
              <figcaption>Realizace v regionu Liberec</figcaption>
            </figure>

            <div className="cert">
              <h3 className="cert-title">Každý rok chodíme na školení</h3>
              <p className="cert-note">
                Aby krytina i klempířina sedla přesně podle výrobce, procházíme
                každoročně technickými školeními těchto firem:
              </p>
              <ul className="cert-chips">
                {skoleni.map((z) => (
                  <li key={z}>{z}</li>
                ))}
              </ul>
              <p className="cert-cech">
                Jsme členy <strong>Cechu klempířů, pokrývačů a tesařů ČR</strong>.
              </p>
            </div>

            <figure className="trust-figure">
              <AiImage
                src="/section-2.webp"
                alt="Detail klempířské práce — falcovaný plech a oplechování komína"
                className="trust-img"
              />
              <figcaption>Klempířina na míru</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
