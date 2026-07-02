export default function Page() {
  const rituals = [
    {
      tag: "Pleť",
      title: "Péče o pleť",
      plant: "Aloe vera & sedmikráska",
      desc: "Denní a noční krémy, séra proti vráskám i rozjasňující péče na kruhy pod očima. Poradíme, co sedne právě vaší pleti.",
      note: "od 114 Kč",
    },
    {
      tag: "Vlasy",
      title: "Péče o vlasy",
      plant: "Rozmarýn & jojoba",
      desc: "Šampony a kondicionéry bez silikonů — detoxikační, hydratační i pro barvené vlasy. Tuhé varianty vydrží až 60 mytí.",
      note: "tuhé i tekuté",
    },
    {
      tag: "Tělo",
      title: "Péče o tělo",
      plant: "Oliva & petit grain",
      desc: "Sprchové gely, tělová mléka a parfémované spreje na tělo a vlasy. Vůně, které si vozíte z dovolené — v lahvičce.",
      note: "letní řada skladem",
    },
    {
      tag: "Líčení",
      title: "Líčení",
      plant: "Rouge Botanique",
      desc: "Matné rtěnky, řasenky a make-upy s rostlinnými pigmenty. V prodejně si vše vyzkoušíte na místě, ne přes obrazovku.",
      note: "testery na prodejně",
    },
    {
      tag: "Vůně",
      title: "Vůně",
      plant: "Verte Envolée",
      desc: "Parfémové vody komponované z rostlin z vlastních polí v bretaňském La Gacilly. Přijďte si přivonět — vůně se nedá poslat mailem.",
      note: "dárkové sady",
    },
    {
      tag: "Slunce",
      title: "Péče na opalování",
      plant: "Monoi & buriti",
      desc: "Spreje s SPF 50+ i péče po opalování. Ochrana, která nezatěžuje pokožku ani moře.",
      note: "nyní −50 %",
    },
  ];

  const promises = [
    {
      title: "Rostliny místo chemie",
      desc: "Přes 250 druhů rostlin pěstujeme agroekologicky na vlastních polích. Do receptur jde to, co vyroste — ne to, co se namíchá v laboratoři z ropy.",
    },
    {
      title: "Poradíme osobně",
      desc: "Na prodejně v Českých Budějovicích vám pleť posoudí vyškolená kosmetička. Odejdete s tím, co potřebujete — ne s tím, co je zrovna v akci.",
    },
    {
      title: "Věrnostní klub se vyplatí",
      desc: "Za každý nákup sbíráte okvětní lístky. Dárky k nákupu, narozeninová sleva a přednostní přístup k novinkám — bez háčků.",
    },
    {
      title: "Garance spokojenosti",
      desc: "Nesedla vám vůně nebo odstín? Vrátíte, vyměníme. Doprava zdarma nad 990 Kč, bezpečná platba, vrácení bez otázek.",
    },
  ];

  const reviews = [
    {
      text: "Denní vyhlazující péči používám třetím rokem. V akci ji beru vždycky do zásoby — za tu cenu nemá konkurenci.",
      name: "Hodnocení 4,8 · 23 recenzí",
      product: "Denní vyhlazující péče proti vráskám",
    },
    {
      text: "Péče na kruhy pod očima je jediná, která u mě opravdu funguje. A paní na prodejně mi rovnou ukázala, jak ji správně nanášet.",
      name: "Hodnocení 4,5 · 266 recenzí",
      product: "Rozjasňující péče na oční okolí",
    },
    {
      text: "Verte Envolée nosím na doporučení kamarádky. Svěží, zelená, nikde jinde jsem nic podobného nenašla.",
      name: "Hodnocení 4,6 · 465 recenzí",
      product: "Parfémová voda Verte Envolée",
    },
  ];

  return (
    <main className="yr">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-inner">
          <div className="topbar">
            <span className="wordmark" aria-label="Yves Rocher České Budějovice">
              <span className="wordmark-leaf" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="22" height="22" role="presentation" focusable="false">
                  <path d="M12 2C7 7 4 11 4 15a8 8 0 0 0 16 0c0-4-3-8-8-13Z" fill="none" stroke="currentColor" strokeWidth="1.6" />
                  <path d="M12 7v13M12 12l-3.5-2.5M12 15l3.5-2.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                </svg>
              </span>
              Yves&nbsp;Rocher
              <span className="wordmark-city">České Budějovice</span>
            </span>
            <a className="topbar-phone" href="tel:+420490522512">+420 490 522 512</a>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Rostlinná kosmetika z bretaňských polí · prodejna v Českých Budějovicích</p>
              <h1 className="hero-title">
                <span className="hero-line hero-line-1">Kosmetika,</span>
                <span className="hero-line hero-line-2">která napřed</span>
                <span className="hero-line hero-line-3"><em>vyrostla</em>.</span>
              </h1>
              <p className="hero-lead">
                Než se z rostliny stane krém, roste na našich polích v La Gacilly.
                Aloe, rozmarýn, sedmikráska — od semínka po lahvičku, bez prostředníků.
                Přijďte si přivonět do prodejny, nebo objednejte domů.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="#pece">Prohlédnout péči</a>
                <a className="btn btn-ghost" href="tel:+420490522512">Zavolat na prodejnu</a>
              </div>
              <p className="hero-promo">
                <strong>Letní výprodej:</strong> −50 % na vybranou péči o pleť, vlasy i opalování.
              </p>
            </div>

            <div className="hero-botany" aria-hidden="true">
              {/* Signature: herbarium plate — botanical line drawing on a specimen card */}
              <div className="herbarium">
                <svg className="herb-svg" viewBox="0 0 320 420" role="presentation" focusable="false">
                  {/* stem */}
                  <path className="herb-stroke herb-stem" d="M160 400 C158 320, 165 240, 160 160 C157 110, 162 70, 160 30" />
                  {/* leaves */}
                  <path className="herb-stroke herb-leaf" d="M160 330 C120 320, 90 290, 88 250 C130 255, 155 290, 160 330 Z" />
                  <path className="herb-stroke herb-leaf" d="M160 290 C200 282, 228 254, 232 216 C192 220, 166 252, 160 290 Z" />
                  <path className="herb-stroke herb-leaf" d="M160 220 C126 212, 102 188, 100 154 C136 158, 156 186, 160 220 Z" />
                  <path className="herb-stroke herb-leaf" d="M160 170 C192 162, 214 140, 217 110 C185 114, 165 140, 160 170 Z" />
                  {/* leaf veins */}
                  <path className="herb-stroke herb-vein" d="M160 330 C140 305, 118 280, 96 258" />
                  <path className="herb-stroke herb-vein" d="M160 290 C182 268, 206 244, 226 224" />
                  <path className="herb-stroke herb-vein" d="M160 220 C142 200, 122 180, 106 162" />
                  <path className="herb-stroke herb-vein" d="M160 170 C176 152, 196 132, 211 118" />
                  {/* flower */}
                  <circle className="herb-stroke herb-bloom" cx="160" cy="26" r="6" />
                  <path className="herb-stroke herb-bloom" d="M160 8 C166 14, 166 20, 160 26 C154 20, 154 14, 160 8 Z" />
                  <path className="herb-stroke herb-bloom" d="M178 26 C172 32, 166 32, 160 26 C166 20, 172 20, 178 26 Z" />
                  <path className="herb-stroke herb-bloom" d="M160 44 C154 38, 154 32, 160 26 C166 32, 166 38, 160 44 Z" />
                  <path className="herb-stroke herb-bloom" d="M142 26 C148 20, 154 20, 160 26 C154 32, 148 32, 142 26 Z" />
                </svg>
                <div className="herb-plate">
                  <span className="herb-plate-no">Herbář č. 250</span>
                  <span className="herb-plate-name">Bellis perennis — sedmikráska</span>
                  <span className="herb-plate-meta">sklizeň La Gacilly · pole č. 4 · bez pesticidů</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: PÉČE ===== */}
      <section className="section section-care" id="pece" aria-labelledby="pece-h">
        <div className="section-inner">
          <div className="section-head">
            <p className="eyebrow">Od kořene po korunu</p>
            <h2 id="pece-h" className="section-title">Co u nás najdete</h2>
            <p className="section-lead">
              Každá řada stojí na jedné rostlině. Píšeme ji ke každé kategorii —
              ať víte, co si mažete na pleť.
            </p>
          </div>

          <ul className="care-grid">
            {rituals.map((r) => (
              <li className="care-card" key={r.title}>
                <div className="care-top">
                  <span className="care-tag">{r.tag}</span>
                  <span className="care-note">{r.note}</span>
                </div>
                <h3 className="care-title">{r.title}</h3>
                <p className="care-plant">{r.plant}</p>
                <p className="care-desc">{r.desc}</p>
              </li>
            ))}
          </ul>

          <p className="care-foot">
            Nevíte, kde začít? Zavolejte nám na <a href="tel:+420490522512">490 522 512</a> (Po–Pá 9–17)
            — poradíme podle typu pleti, ne podle akce.
          </p>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA ===== */}
      <section className="section section-trust" aria-labelledby="duvera-h">
        <div className="section-inner">
          <div className="trust-grid">
            <div className="trust-intro">
              <p className="eyebrow eyebrow-light">Proč Yves Rocher</p>
              <h2 id="duvera-h" className="section-title section-title-light">
                Značka, která si své rostliny pěstuje sama
              </h2>
              <p className="trust-lead">
                Od roku 1959 děláme kosmetiku z rostlin, které známe od semínka.
                Vlastní pole, vlastní výroba, vlastní prodejny — i ta naše
                v Českých Budějovicích.
              </p>
              <dl className="trust-stats">
                <div>
                  <dt>druhů rostlin na vlastních polích</dt>
                  <dd>250+</dd>
                </div>
                <div>
                  <dt>let botanické expertizy</dt>
                  <dd>65</dd>
                </div>
                <div>
                  <dt>stromů vysazeno nadací Yves Rocher</dt>
                  <dd>135 mil.</dd>
                </div>
              </dl>
            </div>

            <ul className="promise-list">
              {promises.map((p) => (
                <li className="promise" key={p.title}>
                  <h3 className="promise-title">{p.title}</h3>
                  <p className="promise-desc">{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="reviews">
            <h3 className="reviews-title">Co říkají zákaznice</h3>
            <ul className="reviews-grid">
              {reviews.map((r) => (
                <li className="review" key={r.product}>
                  <p className="review-text">„{r.text}“</p>
                  <p className="review-meta">
                    <span className="review-product">{r.product}</span>
                    <span className="review-rating">{r.name}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
