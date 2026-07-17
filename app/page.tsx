const katalog = [
  {
    code: "EN ISO 13688",
    title: "Pracovní oděvy",
    desc: "Blůzy, kalhoty, montérky a bundy CXS pro dílnu, stavbu i sklad. Střihy pánské, dámské i unisex.",
  },
  {
    code: "EN ISO 20345 · S3",
    title: "Pracovní obuv",
    desc: "Od letních sandálů S1 po zateplené kotníkové boty S3 s ocelovou špicí a protiskluzovou podešví.",
  },
  {
    code: "EN 388 · 4X42",
    title: "Pracovní rukavice",
    desc: "Mechanická ochrana, práce s chemií, chladem i teplem. Velikosti 7 až 11, skladem po tuctech.",
  },
  {
    code: "EN ISO 20471 · CL 2",
    title: "Výstražné oděvy",
    desc: "Vysoká viditelnost s reflexními pruhy pro práci u silnice a za snížené viditelnosti.",
  },
  {
    code: "EN 397",
    title: "Ochranné pomůcky",
    desc: "Přilby, ochranné brýle, chrániče sluchu a respirátory FFP2 i FFP3 pro celou směnu.",
  },
  {
    code: "NA MÍRU",
    title: "Výšivka a zakázkové šití",
    desc: "Firemní logo, jmenovky a úpravy střihu přímo v Plzni. Výšivka zdarma při větší objednávce.",
  },
];

const reference = [
  {
    text: "Osadili jsme celou partu do hi-vis kompletů. Sedlo to na první dobrou a reflexní pruhy drží i po padesáti praních.",
    who: "Stavební čety Plzeňsko",
    where: "stavební firma",
  },
  {
    text: "Boty S3 nosíme v provozu denně. Poradili nám velikosti podle profesí a výměna reklamace proběhla bez řečí.",
    who: "Autoservis na Borech",
    where: "servis vozidel",
  },
  {
    text: "Jmenovky a logo na blůzách vyšili do tří dnů. Údržba obce má konečně jednotný a čitelný oděv.",
    who: "Technické služby",
    where: "obec u Plzně",
  },
];

const label = [
  { k: "VELIKOST", v: "S · M · L · XL · 2XL · 3XL · 4XL" },
  { k: "NORMA", v: "EN ISO 20471" },
  { k: "TŘÍDA VIDITELNOSTI", v: "CL 2" },
  { k: "MATERIÁL", v: "65 % PES · 35 % BA" },
  { k: "GRAMÁŽ", v: "245 g/m²" },
  { k: "PÉČE", v: "max 60 °C · reflexní pruhy nežehlit" },
];

export default function Page() {
  return (
    <main className="cs">
      <header className="cs-hero">
        <div className="cs-wrap">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">
              CANIS<span className="brand-thin">SAFETY</span>
            </span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="mono kicker">PRACOVNÍ ODĚVY A OCHRANA · PLZEŇ · OD 1992</p>
              <h1 className="hero-title">
                Oblečení, které<br />
                vydrží celou<br />
                <span className="hl">směnu.</span>
              </h1>
              <p className="hero-sub">
                Pracovní oděvy, obuv, rukavice a ochranné pomůcky s platnou
                certifikací EN. Vše skladem v Plzni — s výšivkou a potiskem
                na míru.
              </p>
              <div className="hero-cta">
                <a href="#katalog" className="btn btn-primary">Prohlédnout katalog</a>
                <a href="#onas" className="btn btn-ghost">Proč Canis</a>
              </div>
            </div>

            <div className="plate sheen" aria-label="Ukázka certifikačního štítku výstražné bundy">
              <div className="plate-stripe hazard" aria-hidden="true" />
              <p className="mono plate-head">SPEC · VÝSTRAŽNÁ BUNDA</p>
              <dl className="plate-rows">
                {label.map((r) => (
                  <div className="plate-row" key={r.k}>
                    <dt className="mono">{r.k}</dt>
                    <dd className="mono">{r.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mono plate-foot">MADE FOR WORK · PLZEŇ CZ</p>
            </div>
          </div>
        </div>
      </header>

      <section className="cs-section sec-catalog" id="katalog">
        <div className="cs-wrap">
          <div className="head">
            <p className="mono kicker dark">KATALOG</p>
            <h2 className="sec-title">Co u nás pořídíte</h2>
            <div className="hazard rule sheen" aria-hidden="true" />
          </div>

          <div className="tags">
            {katalog.map((item) => (
              <article className="tag" key={item.title}>
                <span className="mono code">{item.code}</span>
                <h3 className="tag-title">{item.title}</h3>
                <p className="tag-desc">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="cs-section sec-trust" id="onas">
        <div className="cs-wrap">
          <div className="head">
            <p className="mono kicker">O SPOLEČNOSTI · PLZEŇ</p>
            <h2 className="sec-title">Vystrojíme jednotlivce i celé směny</h2>
            <div className="hazard rule sheen" aria-hidden="true" />
          </div>

          <div className="trust-grid">
            <div className="trust-lead">
              <p>
                Lidi do práce oblékáme od roku 1992. Sklad, prodejnu i vlastní
                šicí a vyšívací dílnu máme v Plzni na adrese Ukázková 123 —
                co je skladem, expedujeme týž den.
              </p>
              <p>
                Poradíme s normou, velikostí i certifikací. Vysvětlíme rozdíl
                mezi S1 a S3, doporučíme třídu viditelnosti pro práci u silnice
                a nachystáme velikostní sadu na vyzkoušení.
              </p>
              <ul className="certs">
                <li className="mono">OEKO-TEX STANDARD 100</li>
                <li className="mono">ISO 9001</li>
                <li className="mono">EN ISO 20471</li>
              </ul>
            </div>

            <div className="refs">
              {reference.map((r) => (
                <figure className="ref" key={r.who}>
                  <blockquote>„{r.text}“</blockquote>
                  <figcaption>
                    <span className="ref-who">{r.who}</span>
                    <span className="mono ref-where">{r.where}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
