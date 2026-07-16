import { Coat } from "./motion";

type Chip = {
  code: string;
  name: string;
  service: string;
  color: string;
  bare?: boolean;
  ink: "light" | "dark";
  desc: string;
  specs: string;
};

const services: Chip[] = [
  {
    code: "RAL 5010",
    name: "Enciánová modrá",
    service: "Práškové lakování · KOMAXIT",
    color: "#1c4f86",
    ink: "light",
    desc:
      "Elektrostatický nástřik práškem a vytvrzení v peci. Odstíny RAL, RAL Design i NCS, struktury od hladké po hadí kůži, na přání tři vrstvy.",
    specs: "tloušťka 80 µm · mřížka GT0 · lesk 90",
  },
  {
    code: "RAL 2009",
    name: "Dopravní oranžová",
    service: "Mokré lakování · krycí nátěry",
    color: "#e0531d",
    ink: "light",
    desc:
      "Kapalné nátěrové hmoty předních značek pro korozní prostředí C1 až C5. Alkydy, polyuretany, vinyly, latexy i vodou ředitelné barvy.",
    specs: "tloušťka 120 µm · třída C5 · protokol ✓",
  },
  {
    code: "Sa 2,5",
    name: "Otryskaný kov",
    service: "Tryskání · příprava povrchu",
    color: "#6d747b",
    bare: true,
    ink: "light",
    desc:
      "Očištění abrazivem od koroze a starých nátěrů, sjednocení povrchu až do kvality Sa 2,5 dle ČSN ISO 8501‑1. Holý kov připravený pod lak.",
    specs: "čistota Sa 2,5 · bez laku · připraveno pod nástřik",
  },
  {
    code: "RAL 9005",
    name: "Hluboká čerň",
    service: "Renovace disků kol",
    color: "#17191c",
    ink: "light",
    desc:
      "Chemické odlakování, pískování jemným abrazivem, nový povrch. Čtyři fáze, kolo za kolem — disk odchází jako z výroby.",
    specs: "4 fáze · disk po disku · nový lak",
  },
  {
    code: "RAL 7016",
    name: "Antracitová šedá",
    service: "Lakování na místě u zákazníka",
    color: "#2b3138",
    ink: "light",
    desc:
      "Postavíme lakovací stan přímo u vás — haly, mosty, stroje i velké konstrukce. Nástřiky i nátěry tam, kde díl nejde převézt.",
    specs: "stan u vás · haly a mosty · nástřik i nátěr",
  },
];

const steps = [
  {
    n: "01",
    t: "Odmaštění",
    d: "Třístupňové vysokotlaké odmaštění na velkoobjemovém zařízení. Bez dokonale čistého kovu nedrží žádný lak.",
  },
  {
    n: "02",
    t: "Nástřik",
    d: "Prášek nebo mokrý nátěr v požadovaném odstínu, struktuře a lesku. Vytvrzení v peci, kde barva získá své vlastnosti.",
  },
  {
    n: "03",
    t: "Protokol",
    d: "Změříme tloušťku vrstvy, uděláme mřížkovou zkoušku a k dílu přiložíme protokol o měření. Doklad, ne slib.",
  },
];

const guarantees = [
  "100% kvalita povrchu, doložená životnost a trvanlivost",
  "Nejkvalitnější barvy a moderní, ověřené postupy",
  "Krátké dodací lhůty a vlastní doprava dílů",
  "Množstevní slevy a fixace cen pro stálé zákazníky",
  "Bezplatné poradenství k povrchovým úpravám",
];

const refs = [
  "VŠB‑TU Ostrava",
  "Organica",
  "DPMO",
  "Mobiliář města Ostravy",
  "CineStar",
  "Ostravská obchodní centra",
];

const sizes = [
  { t: "Práškové lakování", d: "1700 × 1400 × 2750 mm", w: "do 110 kg" },
  { t: "Mokré nátěry", d: "2000 × 2000 × 4000 mm", w: "do 800 kg" },
  { t: "Tryskání", d: "700 × 700 × 1000 mm", w: "do 100 kg" },
];

function ChipCard({ c, hero = false }: { c: Chip; hero?: boolean }) {
  return (
    <article className={hero ? "chip chip--hero" : "chip"}>
      <div className="chip-field" data-ink={c.ink}>
        <Coat color={c.color} bare={c.bare} />
        <span className="chip-punch" aria-hidden="true" />
        <span className="chip-code">{c.code}</span>
      </div>
      <div className="chip-strip">
        <p className="chip-service">{c.service}</p>
        <h3 className="chip-name">{c.name}</h3>
        <p className="chip-desc">{c.desc}</p>
        <p className="chip-specs">{c.specs}</p>
      </div>
    </article>
  );
}

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#top">
            <span className="brand-mark" aria-hidden="true" />
            <span className="brand-name">
              Moravská <b>Lakovna</b>
            </span>
          </a>
          <span className="loc">Ostrava · lakovna &amp; tryskání</span>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="wrap hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" /> Vzorník s protokolem o
              měření
            </p>
            <h1 className="hero-title">
              Kov,
              <br />
              který má
              <br />
              <span className="hl">svůj protokol.</span>
            </h1>
            <p className="hero-sub">
              Práškové lakování KOMAXIT, mokré nátěry a tryskání v Ostravě. Každý
              díl měříme na tloušťku vrstvy, děláme mřížkovou zkoušku a odchází se
              vzorkovým štítkem — jako odstín, který si osaháte.
            </p>
            <div className="hero-actions">
              <a className="btn btn--primary" href="#nabizime">
                Prohlédnout odstíny
              </a>
              <a className="btn btn--ghost" href="#jak">
                Jak to probíhá
              </a>
            </div>
            <dl className="hero-stats">
              <div>
                <dt>Korozní odolnost</dt>
                <dd>C1–C5</dd>
              </div>
              <div>
                <dt>Čistota tryskání</dt>
                <dd>Sa 2,5</dd>
              </div>
              <div>
                <dt>Odstíny</dt>
                <dd>RAL · NCS</dd>
              </div>
            </dl>
          </div>
          <div className="hero-chip">
            <ChipCard
              hero
              c={{
                code: "RAL 5010",
                name: "Enciánová modrá",
                service: "Práškové lakování · KOMAXIT",
                color: "#1c4f86",
                ink: "light",
                desc:
                  "Vzorový štítek, jaký přiložíme k vašemu dílu: odstín, tloušťka vrstvy a výsledek mřížkové zkoušky.",
                specs: "tloušťka 80 µm · mřížka GT0 · lesk 90",
              }}
            />
          </div>
        </div>
      </section>

      <section className="section section--paper" id="nabizime">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow eyebrow--dark">
              <span className="dot" aria-hidden="true" /> Nabízíme
            </p>
            <h2 className="sec-title">Specimen sheet služeb</h2>
            <p className="sec-lead">
              Pět povrchů, které u nás díl může projít. Každý štítek se nabarví
              tak, jak projde stříkací kabinou — zleva doprava, jedním nástřikem.
            </p>
          </div>
          <div className="chip-grid">
            {services.map((c) => (
              <ChipCard key={c.code + c.name} c={c} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section--coal" id="jak">
        <div className="wrap">
          <div className="sec-head">
            <p className="eyebrow">
              <span className="dot" aria-hidden="true" /> Jak to probíhá &amp; komu
              věříme
            </p>
            <h2 className="sec-title sec-title--light">
              Tři kroky. Na konci doklad.
            </h2>
            <p className="sec-lead sec-lead--light">
              Odmaštění, nástřik, protokol. Stejná logika, jakou vidíte na
              štítcích výše — jen popsaná slovy.
            </p>
          </div>

          <ol className="steps">
            {steps.map((s) => (
              <li className="step" key={s.n}>
                <span className="step-n">{s.n}</span>
                <h3 className="step-t">{s.t}</h3>
                <p className="step-d">{s.d}</p>
              </li>
            ))}
          </ol>

          <div className="trust-grid">
            <div className="panel">
              <h3 className="panel-h">Co garantujeme</h3>
              <ul className="gua">
                {guarantees.map((g) => (
                  <li key={g}>
                    <span className="gua-dot" aria-hidden="true" />
                    {g}
                  </li>
                ))}
              </ul>
              <p className="eko">
                Velkoobjemové odmašťování, které jsme sami navrhli, šetří 50 %
                energie a chemie. Jsme aktivním členem systému EKO‑KOM.
              </p>
            </div>

            <div className="panel panel--sizes">
              <h3 className="panel-h">Největší díl, který u nás projde</h3>
              <dl className="sizes">
                {sizes.map((s) => (
                  <div className="size-row" key={s.t}>
                    <dt>{s.t}</dt>
                    <dd>
                      <span>{s.d}</span>
                      <span className="size-w">{s.w}</span>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="refs">
            <p className="refs-h">Partneři, kteří nám svěřili povrch</p>
            <ul className="refs-list">
              {refs.map((r) => (
                <li key={r} className="ref-tag">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
