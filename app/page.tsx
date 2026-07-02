export default function Page() {
  const hloubky = [
    { m: "0 m", label: "Ornice a navážka", desc: "Zaměření vrtu, vytyčení sítí" },
    { m: "–8 m", label: "Jíly a hlíny", desc: "Pažení, ochrana proti povrchové vodě" },
    { m: "–22 m", label: "Zvětralý pískovec", desc: "První přítoky, měření vydatnosti" },
    { m: "–35 m", label: "Puklinová zvodeň", desc: "Hlavní zdroj vody, čerpací zkouška" },
  ];

  const sluzby = [
    {
      num: "Vrt",
      title: "Vrtaná studna na klíč",
      text: "Průzkum pozemku, vrt o průměru 152–254 mm, zapažení atestovanou PVC výpažnicí a obsyp praným kačírkem. Běžná hloubka na Ostravsku je 20–40 m — přesně vám ji řekneme po posouzení hydrogeologa.",
      meta: "152–254 mm · do 100 m",
    },
    {
      num: "Voda",
      title: "Připojení studny k domu",
      text: "Osadíme ponorné čerpadlo, tlakovou nádobu a přívod do domu včetně elektroinstalace. Studnu předáme funkční — otočíte kohoutkem a teče.",
      meta: "čerpadlo · rozvod · revize",
    },
    {
      num: "Papíry",
      title: "Legalizace a povolení",
      text: "Projekt studny, vyjádření hydrogeologa i stavební povolení vyřídíme za vás. Žádné obíhání úřadů — dostanete studnu se vším, co k ní ze zákona patří.",
      meta: "projekt · hydrogeolog · úřady",
    },
    {
      num: "Vrt+",
      title: "Vrty pro tepelná čerpadla",
      text: "Hlubinné vrty pro tepelná čerpadla země–voda, včetně osazení kolektoru a tlakové zkoušky. Topíte pak tím, co máte pod vlastním pozemkem.",
      meta: "do 150 m · tlaková zkouška",
    },
  ];

  const reference = [
    {
      quote: "Vrt 28 metrů v Krásném Poli. Za tři dny hotovo včetně čerpadla, na zahradě po nich zůstal pořádek. Voda teče dodnes bez problému.",
      who: "Rodinný dům, Ostrava-Krásné Pole",
      param: "28 m · 1,2 l/s",
    },
    {
      quote: "Měli jsme starou kopanou studnu, co v létě vysychala. Poradili vrt vedle ní, vyřídili povolení a teď zaléváme celé léto.",
      who: "Zahrada se závlahou, Vřesina",
      param: "32 m · vrt vedle kopané studny",
    },
    {
      quote: "Dva vrty pro tepelné čerpadlo, každý 120 metrů. Termín dodrželi na den přesně, tlakové zkoušky předali s protokolem.",
      who: "Novostavba, Klimkovice",
      param: "2× 120 m · TČ země–voda",
    },
  ];

  return (
    <main className="dt">
      {/* ============ HERO ============ */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brand" aria-label="Drilling Trade, Ostrava">
            <span className="brand-mark" aria-hidden="true">
              <svg viewBox="0 0 24 40" width="18" height="30" role="presentation" focusable="false">
                <path d="M4 0h16v6l-4 4v18l-4 12-4-12V10L4 6V0z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-name">Drilling&nbsp;Trade</span>
            <span className="brand-loc">Ostrava</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-eyebrow">Vrtané studny · Ostravsko a okolí</p>
              <h1 className="hero-title">
                <span className="line l1">Voda je</span>
                <span className="line l2">pod vaším</span>
                <span className="line l3">pozemkem.</span>
                <span className="line l4">Dovrtáme se k&nbsp;ní.</span>
              </h1>
              <p className="hero-sub">
                Vrtáme studny pro rodinné domy, zahrady a firmy. Od posouzení
                pozemku přes vrt až po povolení a první sklenici vlastní vody —
                všechno pod jednou firmou z&nbsp;Ostravy.
              </p>
              <div className="hero-cta">
                <a href="tel:+420596000000" className="btn btn-solid">Zavolat a domluvit posouzení</a>
                <p className="hero-note">Posouzení pozemku a cenový odhad zdarma.</p>
              </div>
            </div>

            {/* Signature: řez vrtem — vertikální profil hornin s hloubkovou stupnicí */}
            <div className="borehole" aria-label="Typický profil vrtu na Ostravsku, hloubka 35 metrů">
              <div className="borehole-rail" aria-hidden="true">
                <span className="rail-pipe"></span>
                <span className="rail-bit"></span>
              </div>
              <ol className="borehole-layers">
                {hloubky.map((v, i) => (
                  <li className="layer" key={v.m} style={{ animationDelay: `${0.35 + i * 0.18}s` }}>
                    <span className="layer-depth">{v.m}</span>
                    <span className="layer-body">
                      <span className="layer-name">{v.label}</span>
                      <span className="layer-desc">{v.desc}</span>
                    </span>
                  </li>
                ))}
              </ol>
              <p className="borehole-caption">Typický profil vrtu · Ostravsko</p>
            </div>
          </div>
        </div>
      </header>

      {/* ============ SLUŽBY ============ */}
      <section className="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás uděláme</h2>
          <p className="section-lead">
            Studna není jen díra v zemi. Je to vrt, technologie a povolení —
            a my dodáváme všechny tři věci najednou.
          </p>
        </div>
        <div className="sluzby-grid">
          {sluzby.map((s) => (
            <article className="karta" key={s.title}>
              <div className="karta-top">
                <span className="karta-tag">{s.num}</span>
                <span className="karta-meta">{s.meta}</span>
              </div>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </div>
      </section>

      {/* ============ DŮVĚRA / REFERENCE ============ */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="section-head">
          <h2 id="duvera-h">Vrtáme tam, kde bydlíte</h2>
          <p className="section-lead">
            Ostravsko známe do hloubky — doslova. Víme, kde čekat jíly, kde
            pískovec a v jaké hloubce bývá voda ve vaší obci.
          </p>
        </div>

        <div className="duvera-pruh" role="list" aria-label="Čísla o firmě">
          <div className="fakt" role="listitem">
            <strong>25+ let</strong>
            <span>vrtáme na Ostravsku</span>
          </div>
          <div className="fakt" role="listitem">
            <strong>do 150 m</strong>
            <span>hloubka našich vrtů</span>
          </div>
          <div className="fakt" role="listitem">
            <strong>3–5 dní</strong>
            <span>běžná studna od zaměření po vodu</span>
          </div>
          <div className="fakt" role="listitem">
            <strong>1 smlouva</strong>
            <span>vrt, technologie i povolení</span>
          </div>
        </div>

        <div className="reference-grid">
          {reference.map((r) => (
            <figure className="ref" key={r.who}>
              <blockquote>
                <p>„{r.quote}“</p>
              </blockquote>
              <figcaption>
                <span className="ref-who">{r.who}</span>
                <span className="ref-param">{r.param}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="duvera-pozn">
          Působíme v Ostravě a do 50 km okolo — Klimkovice, Vřesina, Hlučín,
          Frýdek-Místek, Bílovec i Opavsko. Na pozemek přijedeme, posoudíme
          podmínky a řekneme vám na rovinu, jestli se u vás vrtat vyplatí.
        </p>
      </section>
    </main>
  );
}
