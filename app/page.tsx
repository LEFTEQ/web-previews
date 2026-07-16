export default function Page() {
  const services = [
    {
      title: "Průmyslové tepelné izolace",
      desc: "Agregáty, potrubní trasy a technologická zařízení — od běžných provozů po ty nejnáročnější.",
      meta: "−150 °C → +500 °C",
    },
    {
      title: "Chladové izolace",
      desc: "Chladicí okruhy a potrubí chráníme proti kondenzaci i tepelným ziskům, aby chlad zůstal uvnitř.",
      meta: "chlad · kondenzace",
    },
    {
      title: "Izolace VZT",
      desc: "Opláštění a izolace vzduchotechniky pro výrobní haly i provozy s vysokými nároky na prostředí.",
      meta: "vzduchotechnika",
    },
    {
      title: "Izolace pro čistá prostředí",
      desc: "Speciální izolace s mimořádnými vlastnostmi pro zdravotnické interiéry a farmacii.",
      meta: "zdravotnictví · farmacie",
    },
    {
      title: "Střechy a vodotěsné izolace",
      desc: "Nové střechy, opravy, povlakové krytiny a hydroizolace — kompletně od podkladu po detail.",
      meta: "střechy · hydroizolace",
    },
    {
      title: "Stavební izolace a opláštění",
      desc: "Zateplení fasád, dodatečné opláštění budov i tepelné izolace jednotlivých místností.",
      meta: "fasády · zateplení",
    },
    {
      title: "Klempířské práce",
      desc: "Výroba a montáž oplechování a klempířských prvků ze zinku, mědi i hliníku.",
      meta: "Zn · Cu · Al",
    },
    {
      title: "Prodej izolačního materiálu",
      desc: "Dodáváme izolační materiál i pro vlastní realizace přímo z ostravského zázemí.",
      meta: "materiál skladem",
    },
  ];

  const refs = [
    { name: "VEOLIA Česká republika", sector: "Teplárenství a energetika" },
    { name: "Liberty Ostrava", sector: "Hutní výroba" },
    { name: "OKK Koksovny", sector: "Výroba koksu" },
    { name: "ČEZ", sector: "Energetika" },
    { name: "TAMEH Czech", sector: "Energetika hutních provozů" },
  ];

  return (
    <main className="pg">
      <section className="section hero">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Izolatérství · Ostrava · od roku 1990</p>
            <h1 className="wordmark">
              <span className="wordmark-in">ISORA</span>
            </h1>
            <p className="hero-lead">
              Balíme potrubí, agregáty a střechy do vrstvy, která drží teplotu
              tam, kde má být — v rozsahu od <strong>−150 °C do +500 °C</strong>.
              Řemeslo izolatéra z ostravských provozů, ne katalogové řešení.
            </p>
            <div className="hero-actions">
              <a className="cta-tel" href="tel:+420602734417">
                Zavolat technikovi · 602 734 417
              </a>
              <a className="cta-mail" href="mailto:isora@isora.cz">
                isora@isora.cz
              </a>
            </div>
            <p className="hero-place">
              Holečkova 2087/18, 710 00 Slezská Ostrava
            </p>
          </div>

          <div className="seal-stage" aria-hidden="true">
            <div className="seal">
              <span className="seal-jacket" />
              <span className="seal-band" />
              <span className="seal-buckle" />
              <span className="seal-wool" />
              <span className="seal-core" />
            </div>
            <p className="seal-caption">Řez izolovaným potrubím — ocel · minerální vlna · pozinkovaný plášť · bandáž</p>
          </div>
        </div>
      </section>

      <section className="section services" aria-labelledby="co-izolujeme">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow eyebrow--dark">Naše řemeslo</p>
            <h2 id="co-izolujeme" className="sec-title">Co u nás izolujeme</h2>
            <p className="sec-intro">
              Osm řemesel, jeden princip: mezi provoz a okolí dostat správnou
              vrstvu. Každou zakázku vede kvalifikovaný technik od návrhu po
              poslední bandáž.
            </p>
          </header>

          <ul className="catalog">
            {services.map((s) => (
              <li className="card" key={s.title}>
                <span className="ring" aria-hidden="true" />
                <div className="card-body">
                  <h3 className="card-title">{s.title}</h3>
                  <p className="card-desc">{s.desc}</p>
                  <span className="card-meta">{s.meta}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section trust" aria-labelledby="reference">
        <div className="wrap">
          <header className="sec-head">
            <p className="eyebrow">Kdo nám svěřil provoz</p>
            <h2 id="reference" className="sec-title sec-title--light">Reference z těžkého provozu</h2>
            <p className="sec-intro sec-intro--light">
              Firmu založil v roce 1990 Milan Raiskub, od roku 2000 pracujeme
              jako akciová společnost zapsaná v Ostravě. Za tu dobu jsme
              izolovali potrubí a technologie v největších energetických i
              hutních provozech kraje.
            </p>
          </header>

          <ul className="refgrid">
            {refs.map((r) => (
              <li className="refcard" key={r.name}>
                <span className="ring ring--corner" aria-hidden="true" />
                <h3 className="refname">{r.name}</h3>
                <p className="refsector">{r.sector}</p>
              </li>
            ))}
          </ul>

          <p className="trust-note">
            Naši technici za vámi přijedou, provoz obhlédnou na místě a připraví
            konkrétní cenovou nabídku. Bez šablon — podle toho, co skutečně
            izolujeme.
          </p>
        </div>
      </section>
    </main>
  );
}
