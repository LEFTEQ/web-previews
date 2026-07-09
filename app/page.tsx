import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      name: "Lash lifting",
      desc: "Zvednutí a natočení vašich vlastních řas od kořínků. Efekt jako po natočení kulmou, ale přírodně a šetrně — vydrží 6–8 týdnů.",
      time: "60 min",
      price: "890 Kč"
    },
    {
      no: "02",
      name: "Prodlužování řas — klasika",
      desc: "Jedna umělá řasa na jednu vlastní. Decentní zahuštění pro ty, kdo chtějí vypadat svěže i bez řasenky.",
      time: "120 min",
      price: "1 190 Kč"
    },
    {
      no: "03",
      name: "Objemové řasy 2D–5D",
      desc: "Ručně vázané trsy z jemných vláken. Plný, naš-not-fake objem uzpůsobený tvaru vašeho oka.",
      time: "150 min",
      price: "1 490 Kč"
    },
    {
      no: "04",
      name: "Lash brow — úprava obočí",
      desc: "Barvení, laminace a tvarování obočí podle rysů obličeje. Odcházíte s obočím, které drží celý den bez gelu.",
      time: "45 min",
      price: "690 Kč"
    }
  ];

  const trust = [
    { k: "9", l: "let praxe s řasami a obočím" },
    { k: "6–8", l: "týdnů výdrž lash liftingu" },
    { k: "0,05", l: "mm nejjemnější vlákno v ateliéru" }
  ];

  return (
    <main className="bg">
      {/* HERO */}
      <header className="nav">
        <a className="brand" href="#" aria-label="Beauty Garden, Praha">
          <span className="brand-mark" aria-hidden="true">✿</span>
          <span className="brand-word">
            Beauty<span className="brand-word-2">Garden</span>
          </span>
        </a>
        <nav className="nav-links" aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O ateliéru</a>
          <a className="nav-cta" href="#objednat">Objednat se</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">Lash &amp; brow ateliér · Praha 2, Záhořanského 8</p>
          <h1 id="hero-title">
            Otevřete oči.
            <span className="hero-em">Zbytek uděláme za vás.</span>
          </h1>
          <p className="hero-lead">
            Řasa po řase, natočená přesně do tvaru vašeho oka. Žádné těžké
            trsy ani lepený efekt — jen pohled, který vydrží týdny a vypadá
            jako váš vlastní, jen probuzený.
          </p>
          <div className="hero-actions">
            <a className="btn" href="#objednat">Rezervovat termín</a>
            <a className="btn btn-ghost" href="#sluzby">Prohlédnout služby</a>
          </div>
        </div>
        <figure className="hero-figure">
          <img
            src="/hero.webp"
            alt="Detail oka s prodlouženými řasami po ošetření v ateliéru Beauty Garden"
            className="hero-img"
            width={760}
            height={900}
          />
          <figcaption className="hero-tag">
            Objemové řasy 4D · práce našeho ateliéru
          </figcaption>
        </figure>
      </section>

      {/* SLUŽBY */}
      <section id="sluzby" className="section" aria-labelledby="sluzby-title">
        <div className="section-head">
          <p className="eyebrow">Ceník ateliéru</p>
          <h2 id="sluzby-title">Co pro vaše oči umíme</h2>
          <p className="section-sub">
            Před každou aplikací si spolu vyladíme délku, prohnutí i objem.
            Ceny jsou konečné — bez skrytých příplatků za odstranění staré aplikace.
          </p>
        </div>

        <div className="services">
          <ul className="service-list">
            {services.map((s) => (
              <li key={s.no} className="service">
                <span className="service-no" aria-hidden="true">{s.no}</span>
                <div className="service-body">
                  <h3>{s.name}</h3>
                  <p>{s.desc}</p>
                </div>
                <div className="service-meta">
                  <span className="service-time">{s.time}</span>
                  <span className="service-price">{s.price}</span>
                </div>
              </li>
            ))}
          </ul>
          <figure className="service-figure">
            <img
              src="/section-1.webp"
              alt="Lash technička nanáší jednotlivé řasy klientce v ateliéru Beauty Garden"
              width={620}
              height={760}
            />
            <figcaption>
              Aplikace probíhá vleže, oči zavřené — většina klientek u nás usne.
            </figcaption>
          </figure>
        </div>
      </section>

      {/* DŮVĚRA / O NÁS */}
      <section id="duvera" className="section section-dark" aria-labelledby="duvera-title">
        <figure className="about-figure">
          <img
            src="/section-2.webp"
            alt="Pracovní stůl v ateliéru Beauty Garden s pinzetami a paletou řas"
            width={620}
            height={720}
          />
        </figure>
        <div className="about-copy">
          <p className="eyebrow eyebrow-light">O ateliéru</p>
          <h2 id="duvera-title">Malý ateliér, kde má vaše oko čas</h2>
          <p>
            Beauty Garden je klidný lash &amp; brow ateliér kousek od Karlova
            náměstí. Bereme jen jednu klientku najednou — žádný spěch, žádné
            přebíhání mezi křesly. Pracujeme s hypoalergenním lepidlem
            a vlákny, která šetří vaše vlastní řasy, takže si je můžete nechat
            doplňovat roky.
          </p>
          <p className="about-sign">
            Objednáváme se telefonicky nebo online — a když si nejste jistá,
            co vašim očím sedne, poradíme ještě před rezervací.
          </p>

          <dl className="stats">
            {trust.map((t) => (
              <div className="stat" key={t.l}>
                <dt style={{ "--i": 0 } as CSSProperties}>{t.k}</dt>
                <dd>{t.l}</dd>
              </div>
            ))}
          </dl>

          <div id="objednat" className="about-actions">
            <a className="btn btn-light" href="tel:+420212345678">Zavolat do ateliéru</a>
            <span className="about-addr">Záhořanského 8, Praha 2 · po–so 9–19</span>
          </div>
        </div>
      </section>
    </main>
  );
}
