import { BrandLockup } from "./motion";

const services = [
  {
    title: "Pravidelný servis a údržba",
    body: "Prohlídky přesně podle servisních intervalů Mitsubishi, výměny oleje i provozních kapalin. Každý úkon zapíšeme do elektronické servisní knížky, takže historie vozu zůstane úplná.",
  },
  {
    title: "Renovace filtru pevných částic (DPF)",
    body: "Místo drahé výměny filtr komplexně vyčistíme a repasujeme. Tepelně nebo mechanicky poškozenou vložku nahradíme při zachování původních vlastností — za výhodnou cenu.",
  },
  {
    title: "Originální díly a příslušenství",
    body: "Náhradní díly Mitsubishi skladem i na objednávku, sezonní přezutí, pneumatiky a doplňky vybrané přesně pro váš model. Žádné náhražky, jen originál.",
  },
  {
    title: "Butik Mitsubishi",
    body: "Kolekce, sběratelské modely a dárkové předměty se značkou tří diamantů. Zastavte se u nás osobně nebo se na kus zeptejte rovnou v servisu.",
  },
];

const specs = [
  { k: "Autorizace", v: "Mitsubishi Motors" },
  { k: "Záruka výrobce", v: "až 8 let" },
  { k: "Servisní pohotovost", v: "24 hodin denně" },
  { k: "Kde nás najdete", v: "Plzeň" },
];

export default function Page() {
  return (
    <main className="page">
      <section className="band hero" aria-labelledby="hero-h">
        <div className="wrap hero-grid">
          <BrandLockup />
          <p className="eyebrow">Autorizovaný servis Mitsubishi&nbsp;·&nbsp;Plzeň</p>
          <h1 id="hero-h" className="hero-title">
            <span>Diagnostika, díly</span>
            <span>a servis Mitsubishi</span>
            <span className="hero-title-red">pod jednou střechou.</span>
          </h1>
          <p className="lead">
            Držíme se továrních postupů, montujeme jen originální díly a servisní
            historii vám vedeme v elektronické knížce MOJE Mitsubishi. Přesná
            práce, kterou značka tří diamantů vyžaduje — v Plzni.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="#servis">Objednat servis online</a>
            <a className="btn btn-ghost" href="#servis">Co u nás vyřídíte</a>
          </div>
        </div>
      </section>

      <section id="servis" className="band svc" aria-labelledby="svc-h">
        <div className="wrap">
          <div className="sec-head reveal">
            <p className="eyebrow eyebrow-dark">Servis · Butik · Příslušenství</p>
            <h2 id="svc-h" className="sec-title">Co u nás vyřídíte</h2>
          </div>
          <ul className="cards">
            {services.map((s) => (
              <li key={s.title} className="card reveal">
                <span className="card-facet" aria-hidden="true" />
                <h3 className="card-title">{s.title}</h3>
                <p className="card-body">{s.body}</p>
              </li>
            ))}
          </ul>
          <div className="portal reveal">
            <span className="portal-facet" aria-hidden="true" />
            <div className="portal-text">
              <h3 className="portal-title">MOJE Mitsubishi — servis v telefonu</h3>
              <p className="portal-body">
                Elektronická servisní knížka, přehled nákladů, blížící se
                intervaly, záruky i svolávací akce. Vše přehledně v zákaznickém
                portálu — bez papírů a bez čekání na pobočce.
              </p>
            </div>
            <a className="btn btn-primary portal-cta" href="#servis">Objednat servis online</a>
          </div>
        </div>
      </section>

      <section className="band trust" aria-labelledby="trust-h">
        <div className="wrap trust-grid">
          <div className="trust-copy reveal">
            <p className="eyebrow">O nás</p>
            <h2 id="trust-h" className="sec-title sec-title-light">
              V Plzni servisujeme Mitsubishi podle&nbsp;továrních standardů.
            </h2>
            <p className="trust-body">
              Mitsubishi Motors získalo v silné evropské konkurenci 1. místo za
              zákaznickou spokojenost a 1. místo za kvalitu poprodejních služeb.
              Stejnou laťku držíme i tady, u nás v servisu — od převzetí vozu
              až po předání s vyřízenou dokumentací.
            </p>
            <p className="trust-note">
              Kontakt (telefon —, e-mail —, adresa —) doplníme při spuštění
              webu. Zatím platí: přijeďte, ukažte problém, domluvíme termín.
            </p>
          </div>
          <dl className="spec reveal">
            {specs.map((row) => (
              <div key={row.k} className="spec-row">
                <dt className="spec-k">{row.k}</dt>
                <dd className="spec-v">{row.v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
