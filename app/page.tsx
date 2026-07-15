import type { ReactNode } from "react";

type Service = { title: string; note: string; lead?: boolean };

const services: Service[] = [
  {
    title: "Železobetonové a monolitické konstrukce",
    note: "Bednění, výztuž, beton. Nosné monolity, které drží tvar i termín — naše hlavní řemeslo.",
    lead: true,
  },
  { title: "Rekonstrukce a modernizace", note: "Rodinné domy a byty od hrubé stavby po poslední detail." },
  { title: "Demolice a bourání", note: "Šetrné bourání i odvoz suti vlastní technikou." },
  { title: "Výkopy a terénní úpravy", note: "Základy, přípojky sítí a srovnání terénu." },
  { title: "Okna a dveře", note: "Montáž plastových, dřevěných i hliníkových výplní." },
  { title: "Sádrokartony", note: "Příčky a podhledy v občanských i průmyslových objektech." },
  { title: "Zednické práce", note: "Zdivo, omítky, přizdívky." },
  { title: "Obklady a dlažby", note: "Koupelny, terasy i velkoformát." },
  { title: "Podlahové pokládky", note: "Potěry a finální podlahy." },
  { title: "Tesařské práce", note: "Krovy, bednění, dřevěné konstrukce." },
];

type Fact = { k: string; l: string; d: string };

const facts: Fact[] = [
  { k: "2001", l: "Na trhu", d: "Začínali jsme jako fyzická osoba, od roku 2019 stavíme jako PerfectForm s.r.o." },
  { k: "40+", l: "Zaměstnanců", d: "Stálý tým — každá profese má u nás vlastní vyškolené specialisty." },
  { k: "Vlastní", l: "Technika", d: "Pracujeme vlastním vybavením a jen s osvědčenými subdodavateli." },
  { k: "DE", l: "Celé Německo", d: "Kompletní realizace stavebních zakázek po celém Německu, řízené z Ústí nad Labem." },
];

function Wordmark(): ReactNode {
  return (
    <span className="pf-mark" aria-label="PerfectForm s.r.o.">
      <span>Perfect</span>
      <span className="pf-mark__tie" aria-hidden="true" />
      <span>Form</span>
      <span className="pf-mark__sfx">s.r.o.</span>
    </span>
  );
}

export default function Page(): ReactNode {
  return (
    <main className="pf">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__concrete" aria-hidden="true" />
        <div className="hero__inner">
          <div className="hero__topbar">
            <Wordmark />
            <span className="hero__place">Ústí nad Labem → celé Německo</span>
          </div>

          <div className="hero__body">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Železobeton &amp; monolit · od roku 2001
            </p>

            <h1 id="hero-title" className="hero__title">
              Monolit,<br />
              který drží<br />
              <em>tvar.</em>
            </h1>

            <p className="hero__lead">
              Postavíme bednění, uvážeme výztuž a odlijeme nosné konstrukce, které po odbednění
              sedí na milimetr. Stavby a montáže po celém Německu.
            </p>

            <div className="hero__actions">
              <a className="btn btn--spray" href="tel:+420">Zavolat</a>
              <a className="btn btn--ghost" href="mailto:info@perfect-form.cz">Napsat e-mail</a>
              <span className="swap" aria-label="Stavby a montáže">
                <span className="swap__de" aria-hidden="true">Bau und Montage</span>
                <span className="swap__cz">Stavby a montáže</span>
              </span>
            </div>
          </div>
        </div>

        <div className="hero__shutter hero__shutter--l" aria-hidden="true" />
        <div className="hero__shutter hero__shutter--r" aria-hidden="true" />
      </section>

      <section className="band band--services" aria-labelledby="svc-title">
        <div className="wrap">
          <header className="band__head">
            <p className="eyebrow eyebrow--dark">
              <span className="eyebrow__dot" aria-hidden="true" />
              Co stavíme
            </p>
            <h2 id="svc-title" className="band__title">Kompletní služby ve stavebnictví</h2>
            <p className="band__sub">
              Vše zvládneme vlastními lidmi a technikou — od výkopu po předání hotové stavby.
            </p>
          </header>

          <ul className="svc-grid">
            {services.map((s) => (
              <li key={s.title} className={"svc" + (s.lead ? " svc--lead" : "")}>
                <span className="svc__edge" aria-hidden="true" />
                <span className="svc__tie" aria-hidden="true" />
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__note">{s.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="band band--about" aria-labelledby="about-title">
        <div className="wrap">
          <header className="band__head">
            <p className="eyebrow">
              <span className="eyebrow__dot" aria-hidden="true" />
              Proč právě my
            </p>
            <h2 id="about-title" className="band__title band__title--light">
              Přes dvacet let odléváme stavby, které vydrží
            </h2>
            <p className="band__sub band__sub--light">
              Předmětem naší činnosti jsou kompletní služby ve stavebnictví. Každou zakázku vedeme
              od začátku do konce — s vlastním technickým vybavením a stálým týmem.
            </p>
          </header>

          <dl className="facts">
            {facts.map((f) => (
              <div key={f.l} className="fact">
                <span className="fact__tie" aria-hidden="true" />
                <dt className="fact__k">{f.k}</dt>
                <p className="fact__l">{f.l}</p>
                <dd className="fact__d">{f.d}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </main>
  );
}
