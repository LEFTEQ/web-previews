import { AiImage } from "./_ui";

type Chip = { code: string; name: string; hex: string };

const wall: Chip[] = [
  { code: "RAL 5010", name: "Enciánová modrá", hex: "#004f7c" },
  { code: "RAL 1023", name: "Dopravní žlutá", hex: "#fad201" },
  { code: "RAL 3020", name: "Dopravní červená", hex: "#bb1f11" },
  { code: "RAL 6005", name: "Mechová zelená", hex: "#0f4336" },
  { code: "RAL 9016", name: "Dopravní bílá", hex: "#f1f0ea" },
  { code: "RAL 7016", name: "Antracitová šedá", hex: "#293133" },
  { code: "RAL 5015", name: "Nebeská modrá", hex: "#1761ab" },
  { code: "RAL 2004", name: "Čistá oranžová", hex: "#e75b12" },
  { code: "RAL 4008", name: "Signální fialová", hex: "#924e7d" },
  { code: "RAL 8017", name: "Čokoládově hnědá", hex: "#442f29" },
  { code: "RAL 7035", name: "Světle šedá", hex: "#c5c7c4" },
  { code: "RAL 6018", name: "Žlutozelená", hex: "#57a639" },
  { code: "RAL 3005", name: "Vínově červená", hex: "#4c1c24" },
  { code: "RAL 5017", name: "Dopravní modrá", hex: "#063971" },
  { code: "RAL 1003", name: "Signální žlutá", hex: "#f9a800" },
  { code: "RAL 7024", name: "Grafitová šedá", hex: "#474a51" },
  { code: "RAL 3003", name: "Rubínová", hex: "#9b111e" },
  { code: "RAL 6029", name: "Mátová zelená", hex: "#007243" },
  { code: "RAL 5002", name: "Ultramarín", hex: "#20214f" },
  { code: "RAL 1018", name: "Zinková žlutá", hex: "#f8de3a" },
  { code: "RAL 9006", name: "Bílý hliník", hex: "#a5a8a6" },
  { code: "RAL 3000", name: "Ohnivě červená", hex: "#af2b1e" },
  { code: "RAL 5024", name: "Pastelová modrá", hex: "#5d9b9b" },
  { code: "RAL 9005", name: "Černá hluboká", hex: "#0e0e10" },
];

const COLS = 6;

type Service = {
  tag: string;
  chip: string;
  title: string;
  text: string;
  spec: string;
};

const services: Service[] = [
  {
    tag: "Předúprava",
    chip: "#474a51",
    title: "Pískování kovů",
    text: "Otryskání ocelovým abrazivem pod vysokým tlakem. Sundá rez, okuje i starý nátěr a vytvoří drsný podklad, na kterém lak opravdu drží.",
    spec: "Podklad Sa 2½",
  },
  {
    tag: "Předúprava",
    chip: "#9198a0",
    title: "Fosfátování kovů",
    text: "Dokonalé odmaštění a fosfátový povlak, který výrazně zvýší přilnavost laku k povrchu. Základ dlouhé životnosti nátěru.",
    spec: "Lázeň ~90 °C",
  },
  {
    tag: "Povrchové zpracování",
    chip: "#1a54c0",
    title: "Práškové lakování",
    text: "Elektrostatický nástřik práškové barvy vytvrzený v peci. Ekologické, bez rozpouštědel, odolné proti oděru i počasí.",
    spec: "Vytvrzení ~180 °C",
  },
  {
    tag: "Povrchové zpracování",
    chip: "#f4c11f",
    title: "Mokré lakování",
    text: "Vodouředitelné, syntetické, polyuretanové i epoxidové barvy. Jakýkoli odstín a struktura na ocel, nerez, hliník, zinek, mosaz, měď i litinu.",
    spec: "Odstín dle RAL",
  },
];

type Step = { n: string; title: string; text: string };

const steps: Step[] = [
  { n: "01", title: "Poradíme", text: "Doporučíme vhodnou úpravu a spolu vybereme odstín. U náročných dílů řešíme nátěrový systém s technology." },
  { n: "02", title: "Předúprava", text: "Odmastíme, a je-li potřeba, zajistíme i odlakování starého nátěru." },
  { n: "03", title: "Tryskání", text: "Zdrsníme povrch, odstraníme rez a okuje a připravíme dokonalý podklad pro lak." },
  { n: "04", title: "Maskování", text: "Chráníme závity a plochy podle přání zákazníka — samozřejmost." },
  { n: "05", title: "Lakování", text: "Naneseme barvu a po celou dobu dodržíme technologický postup." },
  { n: "06", title: "Kontrola a balení", text: "Hotový výrobek zkontrolujeme a vhodně zabalíme na cestu." },
];

const reasons: string[] = [
  "Dlouholetá tradice a zkušenosti",
  "Osobní přístup ke každé zakázce",
  "Spolehlivost a flexibilita",
  "Návrh vhodného nátěrového systému",
  "Kvalitní antikorozní ochrana",
  "Krátké dodací termíny",
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <div className="brand">
          <span className="brand__chip" aria-hidden="true" />
          <span className="brand__word">TURLAK</span>
          <span className="brand__sub">Lakovna · Brno</span>
        </div>
        <a className="topbar__tel" href="tel:777111222">
          <span className="topbar__tel-label">Zavolat</span>
          <span className="topbar__tel-num">777 111 222</span>
        </a>
      </header>

      <section className="hero band" aria-labelledby="hero-title">
        <div className="hero__inner">
          <div className="hero__copy">
            <p className="eyebrow">Práškové &amp; mokré lakování · Brno</p>
            <h1 id="hero-title" className="hero__title">
              Záplava barev pro vaše výrobky
            </h1>
            <p className="hero__lead">
              Vyberte si odstín ze vzorníku RAL — my zajistíme předúpravu,
              nástřik i vytvrzení. Od jednoho dílu po celé série, na ocel,
              nerez, hliník i litinu.
            </p>
            <dl className="hero__spec">
              <div className="spectag">
                <dt>Vytvrzení prášku</dt>
                <dd>~180 °C</dd>
              </div>
              <div className="spectag">
                <dt>Fosfátování</dt>
                <dd>~90 °C</dd>
              </div>
              <div className="spectag">
                <dt>Vzorník</dt>
                <dd>RAL</dd>
              </div>
            </dl>
          </div>

          <div
            className="hero__wall"
            role="img"
            aria-label="Stěna vzorků práškových barev podle vzorníku RAL"
          >
            {wall.map((c, i) => {
              const col = i % COLS;
              const row = Math.floor(i / COLS);
              const delay = (col + row) * 45;
              return (
                <div
                  key={c.code}
                  className="chip"
                  style={{ background: c.hex, animationDelay: `${delay}ms` }}
                  title={`${c.code} — ${c.name}`}
                >
                  <span className="chip__grain" aria-hidden="true" />
                  <span className="chip__corner" aria-hidden="true" />
                  <span className="chip__code">{c.code}</span>
                </div>
              );
            })}
          </div>
        </div>

        <figure className="hero__banner">
          <AiImage
            className="hero__banner-img"
            src="/hero.webp"
            alt="Kovové díly po práškovém lakování v lakovací hale"
          />
          <figcaption>
            Lakovací hala u Brna — od návrhu odstínu po zabalený, vytvrzený díl.
          </figcaption>
        </figure>
      </section>

      <section className="services band" aria-labelledby="services-title">
        <div className="sec-head">
          <p className="eyebrow eyebrow--dark">Co pro vás uděláme</p>
          <h2 id="services-title" className="sec-title">
            Od holého kovu po hotový odstín
          </h2>
          <p className="sec-intro">
            Předúpravu i lakování zvládneme pod jednou střechou. Nemusíte vozit
            díly na tři místa — přivezete kov, odvezete hotový výrobek.
          </p>
        </div>

        <div className="services__grid">
          <figure className="services__lead">
            <AiImage
              className="services__lead-img"
              src="/section-1.webp"
              alt="Nástřik práškové barvy elektrostatickou pistolí"
            />
            <figcaption>Elektrostatický nástřik prášku — bez rozpouštědel.</figcaption>
          </figure>

          {services.map((s) => (
            <article key={s.title} className="svc">
              <div className="svc__label">
                <span
                  className="chip chip--inline"
                  style={{ background: s.chip }}
                >
                  <span className="chip__grain" aria-hidden="true" />
                  <span className="chip__corner" aria-hidden="true" />
                </span>
                <span className="svc__tag">{s.tag}</span>
              </div>
              <h3 className="svc__title">{s.title}</h3>
              <p className="svc__text">{s.text}</p>
              <p className="svc__spec">{s.spec}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="trust band" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__intro">
            <p className="eyebrow eyebrow--dark">Jak to u nás chodí</p>
            <h2 id="trust-title" className="sec-title">
              Šest kroků k odolnému povrchu
            </h2>
            <p className="sec-intro">
              Každou zakázku vedeme stejně pečlivě — ať jde o zábradlí, rám
              stroje nebo jeden zakázkový díl.
            </p>

            <figure className="trust__figure">
              <AiImage
                className="trust__img"
                src="/section-2.webp"
                alt="Hotové nalakované kovové díly připravené k expedici"
              />
              <figcaption>Kontrola a balení — díl odchází připravený k montáži.</figcaption>
            </figure>
          </div>

          <ol className="steps">
            {steps.map((st) => (
              <li key={st.n} className="step">
                <span className="step__n">{st.n}</span>
                <div className="step__body">
                  <h3 className="step__title">{st.title}</h3>
                  <p className="step__text">{st.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        <div className="reasons">
          <h3 className="reasons__title">Proč lidé vozí kov právě k nám</h3>
          <ul className="reasons__list">
            {reasons.map((r) => (
              <li key={r} className="reasons__item">
                <span className="reasons__mark" aria-hidden="true" />
                {r}
              </li>
            ))}
          </ul>
          <p className="reasons__where">
            Najdete nás na adrese Ukázková 123, Brno. Zavolejte na 777 111 222 a
            domluvíme termín i odstín.
          </p>
        </div>
      </section>
    </main>
  );
}
