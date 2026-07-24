import { AiImage } from "./_ui";
import { DispatchBoard } from "./motion";

const SLUZBY = [
  {
    code: "CN-01",
    title: "PŘEPRAVA",
    lead: "Kamionová mezinárodní doprava po České republice a celé EU — od expresních zásilek po velkoobjemové soupravy. Logistiku navrhneme přímo na váš náklad.",
    tags: ["potraviny", "papírové role · JOLODA", "stavební prvky"],
    spec: [
      ["NÁVĚS", "plachtový · izotermický · chladírenský"],
      ["REŽIM", "TIME-OUT pro automotive"],
      ["DOSAH", "ČR + EU"],
    ],
  },
  {
    code: "CN-02",
    title: "AUTOSERVIS",
    lead: "Vlastní servisní zázemí drží náš vozový park na silnici. Diagnostika, běžná i tlakem tlačená údržba tahačů a návěsů — bez čekání na cizí termíny.",
    tags: ["tahače", "návěsy", "pneuservis"],
    spec: [
      ["ZÁZEMÍ", "areál České Budějovice"],
      ["ROZSAH", "údržba i opravy"],
      ["CÍL", "minimální prostoje"],
    ],
  },
  {
    code: "CN-03",
    title: "SKLADOVÁNÍ",
    lead: "Temperovaný sklad ve stráženém areálu. Vykládka, nakládka, přeložení palet, přeštítkování, přebalení i komise — a navazující distribuce po ČR a Evropě.",
    tags: ["temperovaný sklad", "komise", "distribuce"],
    spec: [
      ["REŽIM", "temperovaný · střežený"],
      ["MANIPULACE", "palety · kontejnery"],
      ["NÁVAZNOST", "distribuce ČR + EU"],
    ],
  },
];

const DUVERA = [
  ["ISO 9001", "Systém řízení jakosti — každá zakázka projde stejnou odbornou péčí."],
  ["ČESKÉ BUDĚJOVICE", "Vlastní logistický areál v jižních Čechách, odkud vyjíždíme do celé EU."],
  ["TIME-OUT", "Přesné termínové okno pro automobilový průmysl i citlivé zásilky."],
  ["VOZOVÝ PARK", "Od skříňových dodávek po velkoobjemové soupravy — náklad naložíme, ať je jakýkoliv."],
];

export default function Page() {
  return (
    <main className="mf">
      <header className="mf-hero">
        <div className="mf-strap" aria-hidden="true" />
        <div className="mf-hero-inner">
          <p className="mf-eyebrow">
            <span className="mf-plate">BV</span>
            NÁKLADNÍ LIST · DISPEČINK ŽIVĚ
          </p>

          <h1 className="mf-h1">
            Autodoprava,<br />která vozí od potravin<br />po stavební prvky.
          </h1>

          <span className="mf-sr">
            Vozíme potraviny, papírové role i stavební prvky po celé České
            republice a Evropské unii.
          </span>

          <DispatchBoard />

          <p className="mf-sub">
            BV Spedice z Českých Budějovic — mezinárodní kamionová přeprava,
            vlastní autoservis a temperovaný sklad. Řešení na míru vašemu
            nákladu, ne obráceně.
          </p>

          <p className="mf-dispatch">Dispečink 24/7 · tel —</p>

          <div className="mf-hero-media">
            <AiImage
              src="/hero.webp"
              alt="Plachtový návěs BV Spedice připravený k nakládce"
              className="mf-hero-img"
            />
          </div>
        </div>
        <div className="mf-strap" aria-hidden="true" />
      </header>

      <section className="mf-services" aria-labelledby="sluzby-nadpis">
        <div className="mf-sec-head">
          <p className="mf-kicker">MANIFEST SLUŽEB · 3 POLOŽKY</p>
          <h2 id="sluzby-nadpis" className="mf-h2">Co naložíme na váš list</h2>
        </div>

        <div className="mf-grid">
          {SLUZBY.map((s) => (
            <article key={s.code} className="mf-card">
              <div className="mf-card-top">
                <span className="mf-code">{s.code}</span>
                <h3 className="mf-card-title">{s.title}</h3>
              </div>
              <p className="mf-card-lead">{s.lead}</p>
              <ul className="mf-tags">
                {s.tags.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
              <dl className="mf-spec">
                {s.spec.map(([k, v]) => (
                  <div key={k} className="mf-spec-row">
                    <dt>{k}</dt>
                    <dd>{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}
        </div>

        <div className="mf-services-media">
          <AiImage
            src="/section-1.webp"
            alt="Nakládka palet v logistickém areálu BV Spedice"
            className="mf-wide-img"
          />
        </div>
      </section>

      <section className="mf-trust" aria-labelledby="duvera-nadpis">
        <div className="mf-strap" aria-hidden="true" />
        <div className="mf-trust-inner">
          <div className="mf-trust-head">
            <p className="mf-kicker mf-kicker-amber">PROČ BV · ZÁRUKY NA LISTU</p>
            <h2 id="duvera-nadpis" className="mf-h2">
              Náklad předáte lidem, kteří ho vezou od roku, kdy jsme rozjeli
              první soupravu z jižních Čech.
            </h2>
          </div>

          <div className="mf-trust-body">
            <ul className="mf-facts">
              {DUVERA.map(([k, v]) => (
                <li key={k}>
                  <span className="mf-fact-key">{k}</span>
                  <span className="mf-fact-val">{v}</span>
                </li>
              ))}
            </ul>
            <div className="mf-trust-media">
              <AiImage
                src="/section-2.webp"
                alt="Souprava BV Spedice na dálnici mířící do EU"
                className="mf-trust-img"
              />
            </div>
          </div>
        </div>
        <div className="mf-strap" aria-hidden="true" />
      </section>
    </main>
  );
}
