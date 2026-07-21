import { AiImage } from "./_ui";

const disciplines = [
  {
    n: "01",
    name: "Ploché střechy",
    system: "Fatrafol · Dekplan",
    scope: "Výrobní a skladové haly, bytové domy, školy",
    desc: "Horkovzdušně svařená fólie odvede vodu i ze střech s minimálním spádem. Žádné lepené přesahy, které po zimě povolí — jen svařené spoje po celé ploše.",
    img: true,
  },
  {
    n: "02",
    name: "Terasy",
    system: "Sikaplan",
    scope: "Pochozí izolace pod dlažbu i na terče",
    desc: "Souvislá vrstva pod pochozím povrchem, spoje svařené na horký vzduch. Drží i po letech střídání mrazu a slunce.",
    img: false,
  },
  {
    n: "03",
    name: "Balkony",
    system: "Dekplan",
    scope: "Detaily u zdí, prahů a odtoků",
    desc: "Balkony nejčastěji zatékají v koutech a u vpustí. Právě tyto detaily řešíme jako první — přesně vytvarovaná fólie a svařený lem.",
    img: false,
  },
  {
    n: "04",
    name: "Spodní stavby",
    system: "Fatrafol",
    scope: "Proti tlakové vodě i radonu",
    desc: "Ochranná bariéra pod základovou deskou a na svislých stěnách. Voda ani radon se do domu nedostanou.",
    img: false,
  },
  {
    n: "05",
    name: "Zahradní jezírka",
    system: "Sikaplan",
    scope: "Tvarově složité dno bez skrytých spojů",
    desc: "Fólie vytvarovaná přesně podle břehů, zdravotně nezávadná pro ryby i rostliny. Jezírko drží hladinu, ne kaluž pod ním.",
    img: false,
  },
];

export default function Page() {
  return (
    <main className="iz">
      <header className="hero" aria-label="Úvod">
        <div className="hero-media" aria-hidden="true">
          <AiImage
            src="/hero.webp"
            alt="Horkovzdušné svařování fóliové hydroizolace na ploché střeše"
            className="hero-img"
          />
          <div className="hero-scrim" />
        </div>

        <div className="wrap hero-inner">
          <a className="wordmark" href="#" aria-label="Izoplast Plzeň, úvod">
            <span className="wordmark-name">IZOPLAST</span>
            <span className="wordmark-tag">Plzeň · fóliové hydroizolace</span>
          </a>

          <p className="eyebrow">Fatrafol · Dekplan · Sikaplan — certifikovaný aplikátor</p>

          <h1 className="hero-title">
            Střecha, která<br />
            <span className="hl">nezatéká.</span>
          </h1>

          <p className="hero-lead">
            Hydroizolace a zateplení plochých střech, teras, balkonů, spodních
            staveb i zahradních jezírek. Pracujeme s fóliemi, které se nelepí,
            ale svařují — spoj drží vodu venku po desítky let. Plzeň a celá ČR.
          </p>

          <div className="actions">
            <a className="btn btn-primary" href="tel:+420777111222">
              Zavolat 777 111 222
            </a>
            <a className="btn btn-ghost" href="mailto:info@example.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        <div className="weld" aria-hidden="true">
          <div className="weld-panel weld-left" />
          <div className="weld-panel weld-right" />
          <div className="weld-seam" />
          <div className="weld-bead" />
          <span className="weld-label">horkovzdušně svařený spoj — vodotěsný</span>
        </div>
      </header>

      <section className="band board" aria-labelledby="catalog-title">
        <div className="wrap">
          <div className="band-head">
            <p className="eyebrow eyebrow-dark">Pět disciplín · vzorník</p>
            <h2 id="catalog-title" className="band-title">
              Každá plocha je jiná fólie
            </h2>
            <p className="band-sub">
              Vyberte podle stavby. Ke každé disciplíně patří systém fólie, se
              kterým ji děláme — jako vzorek materiálu na spec-desce.
            </p>
          </div>

          <ol className="sheets">
            {disciplines.map((d) => (
              <li className={"sheet" + (d.img ? " sheet-feature" : "")} key={d.n}>
                <div className="sheet-face">
                  <div className="sheet-top">
                    <span className="sheet-n">{d.n}</span>
                    <span className="sheet-system">{d.system}</span>
                  </div>
                  <h3 className="sheet-name">{d.name}</h3>
                  <p className="sheet-scope">{d.scope}</p>
                  <p className="sheet-desc">{d.desc}</p>
                </div>
                {d.img ? (
                  <div className="sheet-media">
                    <AiImage
                      src="/section-1.webp"
                      alt="Realizace fóliové hydroizolace ploché střechy haly"
                      className="sheet-img"
                    />
                  </div>
                ) : null}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="band trust" aria-labelledby="trust-title">
        <div className="wrap trust-grid">
          <div className="trust-media">
            <AiImage
              src="/section-2.webp"
              alt="Detail svařeného přesahu hydroizolační fólie na ploché střeše"
              className="trust-img"
            />
          </div>

          <div className="trust-body">
            <p className="eyebrow">Kdo to dělá</p>
            <h2 id="trust-title" className="trust-title">
              Specialisté na fólii, ne na všechno
            </h2>
            <p className="trust-lead">
              Izoplast Plzeň dělá jedno řemeslo pořádně: fóliové hydroizolace.
              Provozovnu máme v plzeňském areálu Škoda Karlov a jezdíme za prací
              po celé republice. Neděláme všechno okolo stavby — děláme tu
              vrstvu, na které záleží, jestli vám bude pršet do haly.
            </p>

            <dl className="specs">
              <div className="spec">
                <dt>Systémy fólií</dt>
                <dd>Fatrafol · Dekplan · Sikaplan</dd>
              </div>
              <div className="spec">
                <dt>Spoje</dt>
                <dd>Horkovzdušně svařené, ne lepené</dd>
              </div>
              <div className="spec">
                <dt>Působnost</dt>
                <dd>Plzeňský kraj i celá ČR</dd>
              </div>
              <div className="spec">
                <dt>Objekty</dt>
                <dd>Haly, bytové i rodinné domy, školy</dd>
              </div>
            </dl>

            <div className="actions">
              <a className="btn btn-primary" href="tel:+420777111222">
                Zavolat 777 111 222
              </a>
              <a className="btn btn-ghost btn-ghost-dark" href="mailto:info@example.cz">
                info@example.cz
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
