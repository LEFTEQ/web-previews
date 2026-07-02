export default function Page() {
  const cars = [
    {
      name: "Městské kára",
      desc: "Fabia, Octavia a spol. Na nákupy, na úřad, na víkend k rodině. Levné na benzín, snadné parkování v centru Ostravy.",
      price: "od 690 Kč / den",
      tag: "HATCHBACK",
    },
    {
      name: "Dodávky a stěhováky",
      desc: "Stěhujete byt v Porubě nebo vezete materiál na stavbu? Skříňové dodávky do 3,5 t — stačí řidičák B.",
      price: "od 1 190 Kč / den",
      tag: "DODÁVKA",
    },
    {
      name: "Hustý káry",
      desc: "Silné motory, pořádný zvuk. Na svatbu, na sraz, nebo prostě proto, že chcete. Rezervujte dopředu, mizí rychle.",
      price: "od 2 490 Kč / den",
      tag: "SPORT",
    },
    {
      name: "Rodinné kombíky a SUV",
      desc: "Dovolená s dětmi, kola na střeše, kufr plný. Sedm míst k dispozici, dětské sedačky půjčíme zdarma.",
      price: "od 990 Kč / den",
      tag: "KOMBI / SUV",
    },
  ];

  const steps = [
    {
      n: "1",
      title: "Zavoláte nebo napíšete",
      text: "Řeknete kdy, na jak dlouho a co potřebujete vozit. Do hodiny víte, které auto je volné a kolik zaplatíte. Žádné skryté poplatky v kilometrech.",
    },
    {
      n: "2",
      title: "Přijedete pro klíče",
      text: "Občanka, řidičák, vratná kauce. Auto společně obejdeme, nafotíme stav, ukážeme, kde co je. Za 15 minut sedíte za volantem.",
    },
    {
      n: "3",
      title: "Jezdíte, my hlídáme zbytek",
      text: "Plná nádrž, dálniční známka, povinné i havarijní pojištění v ceně. Kdyby cokoliv — voláte nám, ne pojišťovně.",
    },
  ];

  const trust = [
    { big: "24", small: "aut ve flotile — od Fabie po V8" },
    { big: "15 min", small: "trvá předání auta a papíry" },
    { big: "0 Kč", small: "za kilometry navíc po Moravskoslezském kraji" },
  ];

  return (
    <main className="hk">
      {/* ===== HERO ===== */}
      <header className="hk-hero">
        <div className="hk-hero-top">
          <div className="hk-wordmark" aria-label="Hustý káry, autopůjčovna Ostrava">
            <span className="hk-wordmark-line1">HUSTÝ</span>
            <span className="hk-wordmark-line2">KÁRY</span>
          </div>
          <div className="hk-hero-contact">
            <span className="hk-hero-city">Autopůjčovna · Ostrava</span>
            <a className="hk-btn hk-btn-solid" href="tel:+420777000000">
              Zavolat a rezervovat
            </a>
          </div>
        </div>

        <div className="hk-hero-media">
          <img
            src="/hero.webp"
            alt="Vozy autopůjčovny Hustý káry připravené k zapůjčení v Ostravě"
            className="hk-hero-img"
          />
          <div className="hk-hero-plate" aria-hidden="true">
            <span className="hk-plate-eu">CZ</span>
            <span className="hk-plate-text">OV · HUSTÝ · 24</span>
          </div>
        </div>

        <div className="hk-hero-claim">
          <h1>
            Půjčíme vám káru,
            <br />
            <em>ze které nebudete chtít vylézt.</em>
          </h1>
          <p className="hk-hero-sub">
            Autopůjčovna z Ostravy. Fabie na nákup, dodávka na stěhování i osmiválec
            na svatbu — plná nádrž, pojištění v ceně a klíče v ruce za 15 minut.
          </p>
          <div className="hk-hero-ctas">
            <a className="hk-btn hk-btn-solid" href="#flotila">
              Vybrat auto
            </a>
            <a className="hk-btn hk-btn-ghost" href="#jak">
              Jak půjčení funguje
            </a>
          </div>
        </div>

        <div className="hk-marquee" aria-hidden="true">
          <div className="hk-marquee-track">
            <span>PLNÁ NÁDRŽ ✦ POJIŠTĚNÍ V CENĚ ✦ NEOMEZENÉ KM PO KRAJI ✦ PŘEDÁNÍ ZA 15 MINUT ✦ OSTRAVA ✦&nbsp;</span>
            <span>PLNÁ NÁDRŽ ✦ POJIŠTĚNÍ V CENĚ ✦ NEOMEZENÉ KM PO KRAJI ✦ PŘEDÁNÍ ZA 15 MINUT ✦ OSTRAVA ✦&nbsp;</span>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: FLOTILA ===== */}
      <section className="hk-fleet" id="flotila">
        <div className="hk-section-head">
          <span className="hk-eyebrow">Flotila · 24 aut</span>
          <h2>Od Fabie po osmiválec</h2>
          <p>
            Každé auto před předáním projde servisem a mytím. Ceny jsou konečné —
            zahrnují pojištění, dálniční známku i kilometry po Moravskoslezském kraji.
          </p>
        </div>

        <div className="hk-fleet-grid">
          <figure className="hk-fleet-photo">
            <img
              src="/section-1.webp"
              alt="Část flotily autopůjčovny Hustý káry — osobní vozy a dodávky"
            />
            <figcaption>Auta parkují krytě v Ostravě — přebíráte je čistá a natankovaná.</figcaption>
          </figure>

          <ul className="hk-fleet-list">
            {cars.map((car) => (
              <li className="hk-car" key={car.name}>
                <div className="hk-car-tag">{car.tag}</div>
                <div className="hk-car-body">
                  <h3>{car.name}</h3>
                  <p>{car.desc}</p>
                </div>
                <div className="hk-car-price">{car.price}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== SEKCE 2: JAK TO FUNGUJE + DŮVĚRA ===== */}
      <section className="hk-how" id="jak">
        <div className="hk-section-head hk-section-head-dark">
          <span className="hk-eyebrow">Půjčení ve třech krocích</span>
          <h2>Klíče v ruce za 15 minut</h2>
        </div>

        <ol className="hk-steps">
          {steps.map((s) => (
            <li className="hk-step" key={s.n}>
              <span className="hk-step-n" aria-hidden="true">
                {s.n}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>

        <div className="hk-trust">
          <figure className="hk-trust-photo">
            <img
              src="/section-2.webp"
              alt="Předání klíčů od vozu zákazníkovi v autopůjčovně Hustý káry v Ostravě"
            />
          </figure>
          <div className="hk-trust-body">
            <h3>Jsme z Ostravy a je to poznat</h3>
            <p>
              Žádný call centrum robot. Když zavoláte, zvedne to člověk, který auta
              sám servisuje a ví, které zrovna stojí na dvoře. Půjčujeme lidem
              z Ostravy, Havířova i Frýdku — a většina se vrací, protože u nás
              nikdo nehledá kličky v drobném písmu.
            </p>
            <blockquote className="hk-quote">
              „Stěhoval jsem se v sobotu ráno, v pátek večer jsem volal. Dodávka
              stála připravená v osm ráno, plná nádrž. Tohle v Ostravě jinde nezažiješ.“
              <cite>— Marek Z., Ostrava-Jih</cite>
            </blockquote>
            <dl className="hk-trust-stats">
              {trust.map((t) => (
                <div className="hk-stat" key={t.big}>
                  <dt>{t.big}</dt>
                  <dd>{t.small}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </main>
  );
}
