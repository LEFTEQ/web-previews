export default function Page() {
  const cars = [
    {
      name: "Škoda Octavia III 2.0 TDI",
      year: "2019",
      km: "128 000 km",
      fuel: "nafta",
      price: "329 000 Kč",
      note: "1. majitel, servisní knížka, po velkém servisu",
    },
    {
      name: "VW Golf VII 1.4 TSI",
      year: "2017",
      km: "96 500 km",
      fuel: "benzín",
      price: "269 000 Kč",
      note: "nehavarované, původ ČR, nové letní pneu",
    },
    {
      name: "Hyundai i30 kombi 1.6 CRDi",
      year: "2020",
      km: "84 200 km",
      fuel: "nafta",
      price: "345 000 Kč",
      note: "tovární záruka do 2025, tažné zařízení",
    },
    {
      name: "Dacia Duster 1.5 dCi 4×4",
      year: "2018",
      km: "112 000 km",
      fuel: "nafta",
      price: "289 000 Kč",
      note: "pravidelný servis, zimní sada kol v ceně",
    },
  ];

  const steps = [
    {
      k: "K1",
      title: "Prohlídka na místě",
      text: "Každé auto si u nás projdete na rampě. Zvedneme ho, posvítíme na podvozek, otevřete kapotu — nic neschováváme.",
    },
    {
      k: "K2",
      title: "Prověřená historie",
      text: "Ke každému vozu doložíme výpis z Cebia — stav tachometru, servisní záznamy, případné škody. Vytiskneme vám ho domů.",
    },
    {
      k: "K3",
      title: "Zkušební jízda po Plzni",
      text: "Klíčky dostanete do ruky. Projedete se po Košutce i po dálničním přivaděči, ať auto slyšíte v reálném provozu.",
    },
    {
      k: "K4",
      title: "Papíry vyřídíme za vás",
      text: "Přepis na registru, povinné ručení i financování domluvíme na počkání. Odjíždíte autem, které je už vaše.",
    },
  ];

  return (
    <main className="ga">
      {/* ===================== HERO ===================== */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Grand auto Košutka">
            <span className="wm-grand">GRAND</span>
            <span className="wm-auto">AUTO</span>
            <span className="wm-loc">KOŠUTKA · PLZEŇ</span>
          </div>
          <a className="hero-tel" href="tel:+420377000000">
            <span className="tel-label">Zavolejte nám</span>
            <span className="tel-num">377 000 000</span>
          </a>
        </div>

        <div className="hero-main">
          <p className="hero-eyebrow">Autobazar na severu Plzně — Košutka</p>
          <h1 className="hero-title">
            <span className="ht-line ht-1">Auto, které si</span>
            <span className="ht-line ht-2">
              proklepnete<span className="ht-dot">.</span>
            </span>
            <span className="ht-line ht-3">Pak teprve koupíte.</span>
          </h1>
          <p className="hero-sub">
            Prodáváme ojetá auta s doloženou historií a prohlídkou na rampě.
            Žádná auta z ciziny bez papírů, žádné stočené tachometry — jen vozy,
            za které se v Plzni můžeme podepsat.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="#nabidka">
              Prohlédnout nabídku
            </a>
            <a className="btn btn-ghost" href="tel:+420377000000">
              Zavolat: 377 000 000
            </a>
          </div>
        </div>

        {/* Signature: cenovka za sklem — velká „windshield tag" karta */}
        <div className="hero-tag" aria-hidden="true">
          <div className="tag-hole" />
          <div className="tag-row">
            <span>ROK</span>
            <strong>2019</strong>
          </div>
          <div className="tag-row">
            <span>NAJETO</span>
            <strong>128 000 km</strong>
          </div>
          <div className="tag-row">
            <span>PŮVOD</span>
            <strong>ČR · 1. majitel</strong>
          </div>
          <div className="tag-price">
            <span>CENA</span>
            <strong>329 000 Kč</strong>
          </div>
          <div className="tag-stamp">PROVĚŘENO CEBIA</div>
        </div>

        <div className="hero-strip" aria-hidden="true">
          <span>VÝKUP NA MÍSTĚ</span>
          <span className="strip-dot">●</span>
          <span>PROTIÚČET</span>
          <span className="strip-dot">●</span>
          <span>FINANCOVÁNÍ</span>
          <span className="strip-dot">●</span>
          <span>PŘEPIS ZDARMA</span>
          <span className="strip-dot">●</span>
          <span>ZKUŠEBNÍ JÍZDA</span>
        </div>
      </header>

      {/* ===================== NABÍDKA ===================== */}
      <section className="stock" id="nabidka" aria-labelledby="stock-h">
        <div className="section-head">
          <p className="section-eyebrow">Právě na place</p>
          <h2 id="stock-h">Vybíráme z aktuální nabídky</h2>
          <p className="section-lead">
            Každý vůz má u čelního skla cenovku se skutečným stavem — rok, nájezd,
            původ. To samé najdete tady. Přijeďte se podívat, auta stojí venku,
            klíčky máme v kanceláři.
          </p>
        </div>

        <div className="stock-grid">
          {cars.map((c) => (
            <article className="car" key={c.name}>
              <div className="car-plate" aria-hidden="true">
                <span className="plate-eu">CZ</span>
                <span className="plate-txt">P&nbsp;·&nbsp;KOŠUTKA</span>
              </div>
              <h3 className="car-name">{c.name}</h3>
              <dl className="car-specs">
                <div>
                  <dt>Rok</dt>
                  <dd>{c.year}</dd>
                </div>
                <div>
                  <dt>Najeto</dt>
                  <dd>{c.km}</dd>
                </div>
                <div>
                  <dt>Palivo</dt>
                  <dd>{c.fuel}</dd>
                </div>
              </dl>
              <p className="car-note">{c.note}</p>
              <div className="car-foot">
                <span className="car-price">{c.price}</span>
                <a className="car-call" href="tel:+420377000000">
                  Domluvit prohlídku
                </a>
              </div>
            </article>
          ))}
        </div>

        <p className="stock-more">
          Na place máme obvykle 40–60 vozů. Nabídka se mění každý týden —
          zavolejte, jestli hledáte něco konkrétního, a dáme vám vědět, až to přijede.
        </p>
      </section>

      {/* ===================== DŮVĚRA / JAK NAKUPUJETE ===================== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="section-head section-head--light">
          <p className="section-eyebrow">Proč u nás</p>
          <h2 id="trust-h">Koupě ojetiny bez rizika má čtyři kroky</h2>
          <p className="section-lead">
            Víme, čeho se lidé u autobazarů bojí. Proto u nás každá koupě probíhá
            stejně — otevřeně a s papíry na stole.
          </p>
        </div>

        <ol className="steps">
          {steps.map((s) => (
            <li className="step" key={s.k}>
              <span className="step-k" aria-hidden="true">
                {s.k}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="trust-refs">
          <figure className="ref">
            <blockquote>
              „Octavii jsem si přijel jen prohlédnout. Zvedli mi ji na rampě,
              ukázali podvozek a výpis z Cebie. Odjel jsem s ní ještě ten den.“
            </blockquote>
            <figcaption>— Martin H., Plzeň-Bolevec</figcaption>
          </figure>
          <figure className="ref">
            <blockquote>
              „Staré auto vzali na protiúčet a přepis vyřídili za mě. Celé to
              trvalo dvě hodiny včetně kávy.“
            </blockquote>
            <figcaption>— Jana K., Třemošná</figcaption>
          </figure>
          <figure className="ref">
            <blockquote>
              „Jasně řekli, co auto má a co ne. To jsem u jiných bazarů nezažil.
              Za rok jedu pro druhé auto zase sem.“
            </blockquote>
            <figcaption>— Petr V., Kaznějov</figcaption>
          </figure>
        </div>

        <div className="trust-place">
          <span className="place-pin" aria-hidden="true">
            ⌖
          </span>
          <p>
            <strong>Najdete nás na Košutce,</strong> u výjezdu na Karlovy Vary.
            Otevřeno po–pá 9–18, so 9–13. Parkování přímo na place.
          </p>
        </div>
      </section>
    </main>
  );
}
