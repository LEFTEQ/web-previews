import { AiImage } from "./_ui";

const categories = [
  {
    name: "Čtyřhranné pletivo",
    tag: "Pletivo",
    desc: "Pozinkovaný a poplastovaný drát, oko 55×55 mm. Nejoblíbenější a nejlevnější způsob, jak oplotit zahradu.",
    spec: "2,5 mm · ZN+PVC antracit · role 25 m",
    price: "od 1 087 Kč bez DPH",
  },
  {
    name: "Panelový systém 2D",
    tag: "Panely",
    desc: "Svařované ploché panely s dvojitým vodorovným drátem. Pevné, rovné a moderní oplocení.",
    spec: "6/5/6 mm · oko 50×200 mm · šířka 250 cm",
    price: "od 717 Kč bez DPH",
  },
  {
    name: "Podhrabové desky",
    tag: "Beton",
    desc: "Betonová náhrada podezdívky se zkosenou horní hranou. Plot drží tvar i po dešti a nezarůstá.",
    spec: "200×50×2950 mm · zkosená hrana",
    price: "540 Kč bez DPH",
  },
  {
    name: "Brány a branky",
    tag: "Vjezd",
    desc: "Zinek + komaxit, celovýplet nebo psaníčko. Zámek FAB a kování jsou součástí dodávky.",
    spec: "branka 100 cm / brána 360 cm · antracit",
    price: "od 2 896 Kč bez DPH",
  },
  {
    name: "Betonový plot",
    tag: "Beton",
    desc: "Jednostranná deska ve vzoru štípaný kámen. Plná vizuální i zvuková bariéra kolem pozemku.",
    spec: "200×50×4 cm · přírodní",
    price: "od 508 Kč bez DPH",
  },
  {
    name: "Stínící tkanina",
    tag: "Doplněk",
    desc: "Zastínění 90 %. Rychle zvýší soukromí u pletivového i panelového plotu, bez zednických prací.",
    spec: "role 10 m · zelená",
    price: "od 317 Kč bez DPH",
  },
];

const steps = [
  {
    n: "01",
    title: "Kalkulace zdarma",
    desc: "Řeknete nám rozměry pozemku. Spočítáme materiál i montáž předem — cenu znáte, než se cokoli objedná.",
  },
  {
    n: "02",
    title: "Materiál na míru",
    desc: "Vybereme pletivo, panely nebo beton podle svahu, podloží a rozpočtu. Poradíme, co dává smysl.",
  },
  {
    n: "03",
    title: "Montáž na klíč",
    desc: "Osadíme sloupky, napneme pletivo, usadíme vzpěry a zavěsíme brány. Přijedeme s vlastní partou.",
  },
  {
    n: "04",
    title: "Předání a servis",
    desc: "Doprava po celé ČR. Necháme vám návody, a kdyby bylo potřeba něco dotáhnout, vrátíme se.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Boppe s.r.o., ploty a oplocení">
          <span className="wordmark__mark" aria-hidden="true" />
          <span className="wordmark__name">Boppe</span>
          <span className="wordmark__sfx">s.r.o.</span>
        </a>
        <span className="topbar__loc">Praha 9 — Horní Počernice</span>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__mesh" aria-hidden="true" />
        <div className="wrap hero__inner">
          <p className="eyebrow">Ploty a oplocení na klíč</p>
          <h1 id="hero-title" className="hero__title">
            Celý plot na klíč —<br />od <em>pletiva</em> po bránu.
          </h1>
          <p className="hero__lead">
            Boppe staví ploty v Praze a po celé republice. Poradíme s materiálem,
            spočítáme cenu předem a přijedeme s montáží. Bez skrytých položek.
          </p>
          <ul className="hero__specs" aria-label="Co u nás dostanete">
            <li><span>Kalkulace</span>zdarma</li>
            <li><span>Doprava</span>po celé ČR</li>
            <li><span>Montáž</span>na klíč</li>
          </ul>
        </div>
      </section>

      <section className="section catalog" aria-labelledby="cat-title">
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow eyebrow--dark">Katalog oplocení</p>
            <h2 id="cat-title" className="section__title">Z čeho plot postavíme</h2>
            <p className="section__intro">
              Šest stavebních dílů, ze kterých skládáme každou zakázku. Ceny jsou
              orientační bez DPH — přesnou nabídku dostanete z kalkulace.
            </p>
          </div>

          <ul className="grid">
            {categories.map((c) => (
              <li key={c.name} className="card">
                <span className="card__chip">{c.tag}</span>
                <h3 className="card__name">{c.name}</h3>
                <p className="card__desc">{c.desc}</p>
                <p className="card__spec">{c.spec}</p>
                <p className="card__price">{c.price}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section build" aria-labelledby="build-title">
        <div className="build__mesh" aria-hidden="true" />
        <div className="wrap">
          <div className="section__head">
            <p className="eyebrow eyebrow--light">Jak to u nás chodí</p>
            <h2 id="build-title" className="section__title section__title--light">
              Od rozměrů po hotový plot
            </h2>
            <p className="section__intro section__intro--light">
              Sídlíme ve Žlíbku v Horních Počernicích a ploty stavíme po celé ČR.
              Řemeslo, kterým se živíme přes deset let — a postup, který znáte předem.
            </p>
          </div>

          <ol className="steps">
            {steps.map((s) => (
              <li key={s.n} className="step">
                <span className="step__n">{s.n}</span>
                <div className="step__body">
                  <h3 className="step__title">{s.title}</h3>
                  <p className="step__desc">{s.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}
