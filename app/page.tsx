import { RotatingLabel, Settle } from "./motion";

const SORTIMENT = [
  { name: "Okrasné dřeviny", lat: "Acer · Buxus · Hydrangea" },
  { name: "Ovocné stromky", lat: "Malus · Prunus · Ribes" },
  { name: "Trvalky", lat: "Hosta · Salvia · Echinacea" },
  { name: "Řezané květiny", lat: "vazby · kytice · dekorace" },
];

const SLUZBY = [
  {
    title: "Dárkové poukazy",
    cap: "300 · 500 · 1000 Kč",
    body:
      "Praktický dárek, se kterým neuděláte chybu. Koupíte ho na kterékoli pokladně a obdarovaný si vybere přesně to, co jeho zahrada potřebuje.",
  },
  {
    title: "Doprava až domů",
    cap: "Olomouc a okolí",
    body:
      "Nakupujte v klidu. Po domluvě vám zakoupené rostliny i vybavení přivezeme až ke dveřím — spolehlivě, rychle a s úsměvem.",
  },
  {
    title: "Kavárna v zeleni",
    cap: "espresso · domácí zákusky",
    body:
      "Uprostřed zahradního centra na vás čeká kavárna. Dejte si prvotřídní kávu a domácí zákusek a načerpejte energii mezi rozkvetlými rostlinami.",
  },
];

const DUVODY = [
  {
    title: "Z vlastní produkce",
    cap: "pěstováno u nás",
    body:
      "Zdravé a odolné rostliny přímo od pěstitelů — z naší vlastní produkce i od prověřených dodavatelů. Víme, odkud každá rostlina pochází.",
  },
  {
    title: "Nejširší sortiment v regionu",
    cap: "od semínka po dekoraci",
    body:
      "Okrasné i ovocné rostliny, trvalky, zahradní vybavení i stylové dekorace. Vše pod jednou střechou, ať proměníte zahradu v oázu klidu.",
  },
  {
    title: "Poradenství od zahradníků",
    cap: "na míru vaší zahradě",
    body:
      "Naši zkušení zahradníci vám ochotně poradí s výběrem, pěstováním i péčí a doporučí nejlepší řešení právě pro váš pozemek.",
  },
];

const POBOCKY = [
  { name: "Zahradní centrum", role: "prodejna a poradenství", tel: "777 111 222", mail: "info@example.cz" },
  { name: "Okrasná zahrada", role: "stromky, dřeviny a trvalky", tel: "777 111 222", mail: "info@example.cz" },
  { name: "Řezané květiny", role: "svatební i smuteční vazby", tel: "777 111 222", mail: "info@example.cz" },
];

export default function Page() {
  return (
    <main className="page">
      {/* HERO */}
      <header className="band hero">
        <div className="band-inner hero-inner">
          <div className="wordmark" aria-label="Florcenter">
            <span className="wordmark-flor">Flor</span>
            <span className="wordmark-center">center</span>
            <span className="wordmark-note">Olomouc · od pěstitelů</span>
          </div>

          <p className="hero-eyebrow">Zahradní centrum &amp; velkoobchod</p>

          <h1 className="hero-h1">
            <span className="hero-h1-lead">U nás najdete</span>
            <RotatingLabel />
          </h1>

          <p className="hero-sub">
            Rostliny z vlastní produkce, poradenství od zahradníků a kavárna
            uprostřed zeleně. Špičková kvalita přímo v srdci Olomouce.
          </p>

          <div className="hero-cta">
            <a className="btn btn-primary" href="tel:+420777111222">Zavolat 777&nbsp;111&nbsp;222</a>
            <a className="btn btn-ghost" href="mailto:info@example.cz">Napsat e-mail</a>
          </div>
        </div>
      </header>

      {/* SLUŽBY */}
      <section className="band band-paper" aria-labelledby="sluzby-nadpis">
        <div className="band-inner">
          <div className="band-head">
            <span className="eyebrow-tag">Co u nás pořídíte</span>
            <h2 id="sluzby-nadpis" className="band-h2">Nákup, který si užijete</h2>
          </div>

          <ul className="chip-row" aria-label="Sortiment">
            {SORTIMENT.map((s) => (
              <li key={s.name} className="chip">{s.name}</li>
            ))}
          </ul>

          <div className="tag-grid">
            {SLUZBY.map((s, i) => (
              <Settle key={s.title} className="tag-cell" delay={i * 0.08}>
                <article className="tag tag-dark">
                  <span className="tag-hole" aria-hidden />
                  <p className="tag-cap">{s.cap}</p>
                  <h3 className="tag-title">{s.title}</h3>
                  <p className="tag-body">{s.body}</p>
                </article>
              </Settle>
            ))}
          </div>
        </div>
      </section>

      {/* O NÁS / DŮVĚRA */}
      <section className="band band-green" aria-labelledby="onas-nadpis">
        <div className="band-inner">
          <div className="band-head">
            <span className="eyebrow-tag eyebrow-tag-light">Proč Florcenter</span>
            <h2 id="onas-nadpis" className="band-h2 band-h2-light">Vítejte ve Florcentru</h2>
          </div>

          <div className="tag-grid">
            {DUVODY.map((d, i) => (
              <Settle key={d.title} className="tag-cell" delay={i * 0.08}>
                <article className="tag tag-light">
                  <span className="tag-hole tag-hole-onpaper" aria-hidden />
                  <p className="tag-cap tag-cap-alt">{d.cap}</p>
                  <h3 className="tag-title">{d.title}</h3>
                  <p className="tag-body">{d.body}</p>
                </article>
              </Settle>
            ))}
          </div>

          <div className="pobocky">
            <p className="pobocky-lead">Nevíte si rady? Ozvěte se na správné oddělení.</p>
            <ul className="pobocky-list">
              {POBOCKY.map((p) => (
                <li key={p.name} className="pobocka">
                  <span className="pobocka-name">{p.name}</span>
                  <span className="pobocka-role">{p.role}</span>
                  <a className="pobocka-tel" href="tel:+420777111222">{p.tel}</a>
                  <a className="pobocka-mail" href="mailto:info@example.cz">{p.mail}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
