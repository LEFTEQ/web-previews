const steps = [
  {
    n: "01",
    title: "Vinylové schody a nášlapy",
    dim: "SPC · tl. 5,5 mm",
    desc: "SPC vinyl RIGID nové generace — snese každodenní provoz, boty i kolečka židle. Nášlapy vyrobíme na míru vašim stupňům.",
  },
  {
    n: "02",
    title: "Schodišťové profily a lišty",
    dim: "hrana 40 mm",
    desc: "Schodové a přechodové lišty, které schovají hranu stupně a spojí schodiště s podlahou v jednom dekoru.",
  },
  {
    n: "03",
    title: "Interiérové a bezfalcové dveře",
    dim: "výška až 2100 mm",
    desc: "PORTA, DRE, VERTE i skryté zárubně. Bezfalcové a reverzní dveře do moderního bydlení.",
  },
  {
    n: "04",
    title: "Vinylové a laminátové podlahy",
    dim: "od 540 Kč/m²",
    desc: "FATRA, TARKETT, GERFLOR i EXPONA. Vybereme dekor, který sedne k vašim schodům i dveřím.",
  },
];

const facts = [
  {
    k: "Skladem v Ostravě",
    v: "Většinu profilů, lišt a dveří máte ihned k odběru — nečekáte týdny na dodání.",
  },
  {
    k: "12 značek pod jednou střechou",
    v: "PORTA, DRE, VERTE, INVADO, FATRA, TARKETT, GERFLOR, EXPONA a další.",
  },
  {
    k: "Sladíme schody, podlahu i dveře",
    v: "Poradíme s mírou i dekorem, aby stupně, podlaha a zárubně ladily dohromady.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="head">
        <a className="brand" href="#top" aria-label="IRISS Ostrava — domů">
          <span className="mark" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
          </span>
          <span className="brand-name">IRISS</span>
          <span className="brand-tag">schodiště · dveře · podlahy</span>
        </a>
        <nav className="nav" aria-label="Hlavní">
          <a href="#nabidka">Nabídka</a>
          <a href="#reference">Proč IRISS</a>
          <a className="nav-call" href="tel:+420604158952">
            604&nbsp;158&nbsp;952
          </a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow reveal d0">Velkoobchod se schodišti · Ostrava</p>
          <h1 className="reveal d1">
            Od prvního schodu<br />k celému patru.
          </h1>
          <p className="lede reveal d2">
            Vinylové schody, nášlapy a schodišťové profily, které sladíme s
            vaší podlahou i dveřmi. Přijďte si je osahat do vzorkovny v
            Ostravě — poradíme s mírou i dekorem.
          </p>
          <div className="actions reveal d3">
            <a className="btn btn-primary" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn-ghost" href="tel:+420604158952">
              Zavolat 604 158 952
            </a>
          </div>
        </div>
        <div className="hero-media reveal d2">
          <img
            src="/hero.webp"
            alt="Vinylové schodiště se světlými dřevěnými nášlapy v interiéru"
            width={880}
            height={1040}
            loading="eager"
          />
        </div>
      </section>

      <section className="band" aria-label="Míry schodiště">
        <div className="stair" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span
              key={i}
              style={{
                height: `${((i + 1) / 9) * 100}%`,
                animationDelay: `${0.15 + i * 0.07}s`,
              }}
            />
          ))}
        </div>
        <p className="band-caption">
          <span>Stoupání 36°</span>
          <span>Výška stupně 180 mm</span>
          <span>Hloubka 250 mm</span>
          <span className="band-sig">IRISS · Ostrava</span>
        </p>
      </section>

      <section className="nabidka" id="nabidka">
        <div className="sec-head">
          <p className="eyebrow">Co u nás vyberete</p>
          <h2>
            Schodiště skládáme<br />ze čtyř věcí.
          </h2>
          <p className="sec-note">
            Každý stupeň má svou míru. Postupně od nášlapu přes lišty až po
            dveře a podlahu, do které schodiště ústí.
          </p>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.n}>
              <span className="step-n">{s.n}</span>
              <div className="step-body">
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
              <span className="step-dim">{s.dim}</span>
            </li>
          ))}
        </ol>

        <figure className="sec-figure">
          <img
            src="/section-1.webp"
            alt="Detail vinylového nášlapu schodu a přechodové lišty"
            width={1200}
            height={720}
            loading="lazy"
          />
          <figcaption>
            Nášlap, lišta a hrana stupně v jednom dekoru — tak, aby schodiště
            navazovalo na podlahu bez viditelného přechodu.
          </figcaption>
        </figure>
      </section>

      <section className="reference" id="reference">
        <div className="ref-grid">
          <div className="ref-media">
            <img
              src="/section-2.webp"
              alt="Vzorkovna IRISS v Ostravě s ukázkami dveří a podlah"
              width={1040}
              height={1200}
              loading="lazy"
            />
          </div>
          <div className="ref-copy">
            <p className="eyebrow">Proč lidé jezdí do IRISS</p>
            <h2>Řemeslo, ne hobbymarket.</h2>
            <p className="sec-note">
              Jsme velkoobchod se schodišti, dveřmi a podlahami v Ostravě.
              Prodáváme dřevěné podlahy BECO i vinyl nové generace RIGID a k
              tomu všechno, co ke schodišti patří — od profilů po skryté
              zárubně.
            </p>

            <dl className="facts">
              {facts.map((f) => (
                <div className="fact" key={f.k}>
                  <dt>{f.k}</dt>
                  <dd>{f.v}</dd>
                </div>
              ))}
            </dl>

            <blockquote className="quote">
              <p>
                „Schody nám seděly na milimetr k vinylu v obýváku. Ve
                vzorkovně poradili víc než v marketu za celý den.“
              </p>
              <cite>Rodina H. — rekonstrukce bytu, Ostrava-Poruba</cite>
            </blockquote>

            <p className="ref-contact">
              <a href="tel:+420604158952">604 158 952</a>
              <span aria-hidden="true">·</span>
              <a href="tel:+420775391541">775 391 541</a>
              <span aria-hidden="true">·</span>
              <a href="mailto:iriss.nemeth@seznam.cz">iriss.nemeth@seznam.cz</a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
