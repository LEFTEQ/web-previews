import type { CSSProperties } from "react";

export const metadata = {
  title: "KovoRekoStav — rekonstrukce bytů v Praze",
  description:
    "Rekonstrukce bytů na klíč v Praze. Rozsah, termín i cena ve smlouvě, bez záloh, dvouletá záruka. Předáme dílo včas, jinak sleva.",
};

type Service = {
  no: string;
  title: string;
  scope: string;
  detail: string;
};

const services: Service[] = [
  {
    no: "01",
    title: "Byt od základu",
    scope: "Bourání · zdivo · rozvody",
    detail:
      "Vezmeme byt v žalostném stavu a proměníme ho v místo pro život. Bourací a zednické práce, nové elektro, voda i topení — jedna parta, jedna zodpovědnost.",
  },
  {
    no: "02",
    title: "Návrh a 3D vizualizace",
    scope: "Dispozice · materiály · realizace",
    detail:
      "Nejdřív uvidíte svůj byt na obrazovce, pak v něm budete bydlet. Designérský návrh a vizualizaci děláme proto, abychom ji sami postavili — ne aby zůstala v šuplíku.",
  },
  {
    no: "03",
    title: "Fasáda a střecha",
    scope: "Opravy · renovace · výměna",
    detail:
      "Práce, které drží dům pohromadě zvenčí. Renovace a výměna fasád a střech, terasy, plot, vrata — od pozemku po hřeben.",
  },
];

type Promise = {
  label: string;
  claim: string;
  note: string;
};

const promises: Promise[] = [
  {
    label: "Smlouva",
    claim: "Rozsah, termín i cena písemně",
    note: "Žádné dohady po telefonu. Co je ve smlouvě, to platí.",
  },
  {
    label: "Bez záloh",
    claim: "Platíte za hotovou práci",
    note: "Nedáváte peníze dopředu. Platíte to, co je skutečně uděláno.",
  },
  {
    label: "Záruka",
    claim: "2 roky na veškeré práce",
    note: "Skrytou závadu odstraníme do 48 hodin, pokud není akutní.",
  },
  {
    label: "Termín",
    claim: "Předáme včas, jinak sleva",
    note: "Termín bereme jako závazek, ne jako přání.",
  },
];

type Review = {
  quote: string;
  name: string;
  place: string;
};

const reviews: Review[] = [
  {
    quote:
      "Z hnusného bytu nám udělali krásné místo pro život. Práce proběhla rychle, vše dle domluvy. Kvalita je nadstandardní.",
    name: "Petr Dušek",
    place: "Praha",
  },
  {
    quote:
      "Naprostá spokojenost. Profesionální přístup, rychlost provedení a orientace v problému. Skvělá spolupráce.",
    name: "Pavel Adam",
    place: "Praha",
  },
  {
    quote:
      "Poptali jsme rekonstrukci prostor pro naši organizaci. Rychlá reakce, milý přístup, hotovo v termínu.",
    name: "Petra Helebrantová",
    place: "Google Reviews",
  },
];

export default function Page() {
  return (
    <main className="krs">
      <header className="krs-nav" aria-label="Hlavní">
        <a className="krs-mark" href="#top" aria-label="KovoRekoStav, domů">
          <span className="krs-mark__kovo">Kovo</span>
          <span className="krs-mark__reko">Reko</span>
          <span className="krs-mark__stav">Stav</span>
        </a>
        <nav className="krs-nav__links">
          <a href="#sluzby">Co postavíme</a>
          <a href="#duvera">Proč my</a>
          <a className="krs-nav__cta" href="#poptavka">
            Nezávazná nabídka
          </a>
        </nav>
      </header>

      <section className="krs-hero" id="top">
        <div className="krs-hero__grid" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>

        <div className="krs-hero__inner">
          <p className="krs-eyebrow">
            <span className="krs-dot" aria-hidden="true" /> Rekonstrukce bytů · Praha
          </p>

          <h1 className="krs-hero__title">
            <span className="krs-line krs-line--a">Starý byt</span>
            <span className="krs-line krs-line--b">
              <span className="krs-strike">v žalostném stavu</span>
            </span>
            <span className="krs-line krs-line--c">na klíč.</span>
          </h1>

          <p className="krs-hero__lede">
            Jedna pražská parta od bourání po předávací protokol. Bez záloh,
            s termínem ve smlouvě a dvouletou zárukou. Nejdřív to uvidíte ve 3D,
            pak v tom budete bydlet.
          </p>

          <div className="krs-hero__actions">
            <a className="krs-btn krs-btn--solid" href="#poptavka">
              Získat nabídku zdarma
            </a>
            <a className="krs-btn krs-btn--ghost" href="#sluzby">
              Co všechno uděláme
            </a>
          </div>

          <dl className="krs-hero__facts">
            <div>
              <dt>Záruka</dt>
              <dd>2 roky</dd>
            </div>
            <div>
              <dt>Zálohy</dt>
              <dd>Žádné</dd>
            </div>
            <div>
              <dt>Zaměření</dt>
              <dd>Zdarma</dd>
            </div>
          </dl>
        </div>

        <div className="krs-hero__rule" aria-hidden="true">
          <span>Italská 1205/10, Praha 2</span>
          <span className="krs-hero__ruleline" />
          <span>IČO 08107921</span>
        </div>
      </section>

      <section className="krs-sec krs-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="krs-sec__head">
          <p className="krs-eyebrow krs-eyebrow--dark">Co postavíme</p>
          <h2 id="sluzby-h">
            Tři druhy práce.
            <br />
            Vždycky jedna zodpovědná parta.
          </h2>
          <p className="krs-sec__lede">
            Nepředáváme si štafetu mezi subdodavateli. Zednina, elektro, voda,
            topení i finální design řídíme pod jednou střechou — a pod jednou
            smlouvou.
          </p>
        </div>

        <ol className="krs-cards">
          {services.map((s) => (
            <li className="krs-card" key={s.no}>
              <span className="krs-card__no" aria-hidden="true">
                {s.no}
              </span>
              <h3 className="krs-card__title">{s.title}</h3>
              <p className="krs-card__scope">{s.scope}</p>
              <p className="krs-card__detail">{s.detail}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="krs-sec krs-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="krs-sec__head">
          <p className="krs-eyebrow">Proč právě my</p>
          <h2 id="duvera-h">Čtyři věci, které máte černé na bílém.</h2>
        </div>

        <ul className="krs-promises">
          {promises.map((p) => (
            <li className="krs-promise" key={p.label}>
              <span className="krs-promise__label">{p.label}</span>
              <span className="krs-promise__claim">{p.claim}</span>
              <span className="krs-promise__note">{p.note}</span>
            </li>
          ))}
        </ul>

        <div className="krs-reviews">
          <p className="krs-eyebrow">Řekli o nás</p>
          <div className="krs-reviews__row">
            {reviews.map((r) => (
              <figure className="krs-review" key={r.name}>
                <blockquote>{r.quote}</blockquote>
                <figcaption>
                  <span className="krs-review__name">{r.name}</span>
                  <span className="krs-review__place">{r.place}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
