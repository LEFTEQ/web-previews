import { SeasonalHeadline, PressCard, TagString } from "./motion";

type Bloom = {
  code: string;
  cz: string;
  latin: string;
  season: string;
  from: number;
  to: number;
  note: string;
};

const BLOOMS: Bloom[] = [
  {
    code: "FL·01",
    cz: "Pivoňka",
    latin: "Paeonia lactiflora",
    season: "KVĚTEN–ČERVEN",
    from: 5,
    to: 6,
    note: "Řežeme ji v pevném poupěti — teplá voda ji doma rozvine. Vydrží 7 až 10 dní.",
  },
  {
    code: "FL·02",
    cz: "Tulipán",
    latin: "Tulipa gesneriana",
    season: "ÚNOR–DUBEN",
    from: 2,
    to: 4,
    note: "Ve váze ještě dorůstá o pár centimetrů. Studená voda, stonek každý den nakrátko.",
  },
  {
    code: "FL·03",
    cz: "Narcis",
    latin: "Narcissus poeticus",
    season: "ÚNOR–BŘEZEN",
    from: 2,
    to: 3,
    note: "První den nechte stát samostatně — pouští sliz, který ostatním květinám škodí.",
  },
  {
    code: "FL·04",
    cz: "Ranunkulus",
    latin: "Ranunculus asiaticus",
    season: "BŘEZEN–KVĚTEN",
    from: 3,
    to: 5,
    note: "Tenké stonky mají rády čistou vázu a chládek. Poupata se otevírají postupně.",
  },
  {
    code: "FL·05",
    cz: "Hortenzie",
    latin: "Hydrangea macrophylla",
    season: "ČERVEN–ZÁŘÍ",
    from: 6,
    to: 9,
    note: "Pije i lístky. Když povadne, ponořte celý květ na chvíli pod vodu — obživne.",
  },
  {
    code: "FL·06",
    cz: "Chryzantéma",
    latin: "Chrysanthemum morifolium",
    season: "ZÁŘÍ–LISTOPAD",
    from: 9,
    to: 11,
    note: "Vytrvalá do kytice i věnce. Spodní listy pod hladinou odstraňte, ať voda vydrží.",
  },
];

const SERVICES = [
  { code: "S·01", name: "Sezónní kytice na počkání", desc: "Uvážeme z toho, co je právě čerstvé — dnes, před vámi, na pultě." },
  { code: "S·02", name: "Svatební floristika", desc: "Kytice, korsáže i výzdoba obřadu. Ladíme na vzorku, ne od stolu." },
  { code: "S·03", name: "Smuteční kytice a věnce", desc: "Vazba s citem, připravená na čas obřadu. Domluvíme i dopravu." },
  { code: "S·04", name: "Rozvoz po Hradci Králové", desc: "Doručíme kytici do ruky po celém městě i do okolních obcí." },
  { code: "S·05", name: "Květinové předplatné", desc: "Čerstvá vazba do kanceláře nebo provozovny každý týden." },
];

function MonthBand({ from, to }: { from: number; to: number }) {
  const months = ["L", "Ú", "B", "D", "K", "Č", "Č", "S", "Z", "Ř", "L", "P"];
  return (
    <div className="band12" role="img" aria-label={`Sezóna měsíc ${from} až ${to}`}>
      {months.map((m, i) => {
        const n = i + 1;
        const on = n >= from && n <= to;
        return (
          <span key={i} className={on ? "band12__c band12__c--on" : "band12__c"}>
            {m}
          </span>
        );
      })}
    </div>
  );
}

export default function Page() {
  return (
    <main className="page">
      {/* ————— HERO ————— */}
      <header className="hero band">
        <div className="wrap">
          <div className="masthead">
            <span className="mark">
              <span className="mark__f">Flamengo</span>
              <span className="mark__k">květiny · Hradec Králové</span>
            </span>
            <span className="mark__code">HERBÁŘ ČERSTVÝCH KVĚTIN — sešit 2026</span>
          </div>

          <p className="hero__eyebrow">
            <span className="seal seal--sm">VÁZÁNO FLORISTY</span>
            <span>Katalog toho, co právě kvete</span>
          </p>

          <h1 className="hero__title">
            <span className="hero__lead">Právě kvetou</span>
            <SeasonalHeadline />
          </h1>

          <p className="hero__sub">
            Malé květinářství, kde každou kytici někdo uváže rukama. Bereme jen
            to, co má svou sezónu — a na tag vám napíšeme, jak to doma udržet co
            nejdéle živé.
          </p>

          <dl className="hero__facts">
            <div>
              <dt>Prodejna</dt>
              <dd>Ukázková 123, Hradec Králové</dd>
            </div>
            <div>
              <dt>Vazba</dt>
              <dd>ručně, na počkání</dd>
            </div>
            <div>
              <dt>Rozvoz</dt>
              <dd>po celém městě</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* ————— SEKCE 1 · KATALOG ————— */}
      <section className="catalog band" aria-labelledby="cat-h">
        <div className="wrap">
          <div className="sechead">
            <span className="sechead__no">I</span>
            <div>
              <h2 id="cat-h" className="sechead__title">
                Herbář sezóny
              </h2>
              <p className="sechead__lead">
                Šest květin, ze kterých teď vážeme. Každý list má svůj kód, pásmo
                sezóny a poznámku k péči — přesně jak visí na kytici od nás.
              </p>
            </div>
          </div>

          <div className="grid">
            {BLOOMS.map((b) => (
              <PressCard key={b.code} className="spec">
                <TagString>
                  <svg
                    className="spec__string"
                    viewBox="0 0 26 26"
                    aria-hidden="true"
                  >
                    <path
                      d="M13 3 C 4 8, 4 17, 13 20 C 22 17, 22 8, 13 3 Z"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.4"
                    />
                  </svg>
                  <span className="spec__tag">
                    <span className="spec__hole" aria-hidden="true" />
                    <span className="seal seal--tag">VÁZÁNO\nFLORISTY</span>
                  </span>
                </TagString>

                <div className="spec__code">{b.code}</div>
                <p className="spec__latin">{b.latin}</p>
                <h3 className="spec__name">{b.cz}</h3>
                <div className="spec__season">
                  <span>SEZÓNA</span>
                  <MonthBand from={b.from} to={b.to} />
                </div>
                <p className="spec__meta">{b.season}</p>
                <p className="spec__note">{b.note}</p>
              </PressCard>
            ))}
          </div>
        </div>
      </section>

      {/* ————— SEKCE 2 · DŮVĚRA + SLUŽBY ————— */}
      <section className="trust band" aria-labelledby="trust-h">
        <div className="wrap">
          <div className="sechead sechead--light">
            <span className="sechead__no">II</span>
            <div>
              <h2 id="trust-h" className="sechead__title">
                Proč k nám pro květiny
              </h2>
              <p className="sechead__lead">
                Tři věci, které u nás platí vždycky — a rejstřík toho, co pro vás
                uvážeme.
              </p>
            </div>
          </div>

          <div className="guarantees">
            <article className="guar">
              <span className="guar__no">01</span>
              <h3>Vždy čerstvé</h3>
              <p>
                Nabíráme jen sezónní květiny a co se za pár dní neprodá, do kytice
                nedáme. Radši menší výběr, ale živý.
              </p>
            </article>
            <article className="guar">
              <span className="guar__no">02</span>
              <h3>Vázáno floristy</h3>
              <p>
                Žádné hotové kytice z lednice. Každou vazbu skládá floristka před
                vámi a podle toho, komu je určená.
              </p>
            </article>
            <article className="guar">
              <span className="guar__no">03</span>
              <h3>Záruka kvality</h3>
              <p>
                Kdyby kytice nevydržela, jak má, ozvěte se do dvou dnů — domluvíme
                se, ať máte doma zase radost.
              </p>
            </article>
          </div>

          <div className="index">
            <div className="index__head">
              <span className="seal seal--sm seal--light">REJSTŘÍK SLUŽEB</span>
            </div>
            <ul className="index__list">
              {SERVICES.map((s) => (
                <li key={s.code} className="row">
                  <span className="row__code">{s.code}</span>
                  <span className="row__name">{s.name}</span>
                  <span className="row__desc">{s.desc}</span>
                </li>
              ))}
            </ul>
          </div>

          <figure className="quote">
            <blockquote>
              „Přišla jsem si pro jednu kytici na poslední chvíli a odešla s
              vazbou, kterou si maminka schovala vylisovanou v knize. Přesně tohle
              od květinářství chci.“
            </blockquote>
            <figcaption>— Petra H., zákaznice z Hradce Králové</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
