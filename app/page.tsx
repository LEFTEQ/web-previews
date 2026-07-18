import { Reveal, Specimen } from "./motion";

const services = [
  {
    no: "01",
    title: "Generální dodávka staveb",
    body: "Průmyslové, občanské i bytové stavby pod jednou smlouvou, jedním rozpočtem a jedním termínem. Od vytyčení po kolaudaci.",
  },
  {
    no: "02",
    title: "Rekonstrukce a modernizace",
    body: "Adaptace a rekonstrukce stávajících objektů — od zásahu do nosné konstrukce po výměnu inženýrských sítí a zateplení.",
  },
  {
    no: "03",
    title: "Developerské projekty",
    body: "Jako investor připravujeme a stavíme vlastní bytové domy. Byty k prodeji, obchodní a nebytové prostory k pronájmu.",
  },
  {
    no: "04",
    title: "Inženýrské a ekologické sítě",
    body: "Přípojky, komunikace, vodní a ekologická řešení. Kompletní příprava území pro navazující výstavbu.",
  },
  {
    no: "05",
    title: "Prodej a pronájem prostor",
    body: "Správa a nabídka obchodních i nebytových prostor ve vlastních realizovaných projektech v Hradci a okolí.",
  },
];

const specimens = [
  {
    no: "01",
    name: "Bytový dům Stromovka",
    plate: "cihla",
    lokalita: "Hradec Králové",
    typ: "Bytový dům",
    role: "Generální dodavatel · investor",
    stav: "Dokončeno",
    live: false,
  },
  {
    no: "02",
    name: "Byty Slatina",
    plate: "ocel",
    lokalita: "Hradec Králové",
    typ: "Developerský projekt",
    role: "Investor · dodavatel",
    stav: "Ve výstavbě",
    live: true,
  },
  {
    no: "03",
    name: "Rezidence M-garden",
    plate: "beton",
    lokalita: "Nové Město nad Metují",
    typ: "Rezidence",
    role: "Generální dodavatel",
    stav: "Dokončeno",
    live: false,
  },
  {
    no: "04",
    name: "Rezidence Koruna",
    plate: "grafit",
    lokalita: "Kolín",
    typ: "Bytový dům",
    role: "Generální dodavatel",
    stav: "Dokončeno",
    live: false,
  },
  {
    no: "05",
    name: "Lůžkový hospic Stěžery",
    plate: "cihla",
    lokalita: "Stěžery, Hradecko",
    typ: "Občanská stavba",
    role: "Generální dodavatel",
    stav: "Dokončeno",
    live: false,
  },
  {
    no: "06",
    name: "Tělocvična ZŠ T. G. M.",
    plate: "ocel",
    lokalita: "Poděbrady",
    typ: "Občanská stavba",
    role: "Generální dodavatel",
    stav: "Dokončeno",
    live: false,
  },
];

export default function Page() {
  return (
    <div className="page">
      <header className="topbar">
        <div className="wrap topbar__inner">
          <div className="wordmark" aria-label="STAKO, společnost s ručením omezeným">
            <span className="wordmark__letters">S T A K O</span>
            <span className="wordmark__reg">s&nbsp;r.&nbsp;o.</span>
          </div>
          <p className="topbar__meta">Hradec Králové · pozemní stavby</p>
        </div>
      </header>

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="wrap">
            <div className="hero__frame">
              <div className="grid-bg" aria-hidden="true" />

              <span className="bubble bubble--top b-a" aria-hidden="true">A</span>
              <span className="bubble bubble--top b-b" aria-hidden="true">B</span>
              <span className="bubble bubble--top b-c" aria-hidden="true">C</span>
              <span className="bubble bubble--side b-1" aria-hidden="true">1</span>
              <span className="bubble bubble--side b-2" aria-hidden="true">2</span>
              <span className="bubble bubble--side b-3" aria-hidden="true">3</span>

              <span className="hero__stamp" aria-hidden="true">Vytyčeno · setting&nbsp;out</span>

              <div className="hero__body">
                <p className="eyebrow eyebrow--brick">Generální dodavatel staveb</p>
                <h1 id="hero-title" className="hero__title">
                  <span className="line"><span className="line__in l1">GENERÁLNÍ</span></span>
                  <span className="line"><span className="line__in l2">DODAVATEL</span></span>
                  <span className="line"><span className="line__in l3">STAVEB</span></span>
                </h1>
                <p className="hero__lede">
                  Průmyslové, občanské a bytové stavby v Hradci Králové a okolí —
                  od vytyčení první osy po předání klíčů. Stavíme jako generální
                  dodavatel i jako investor vlastních bytových projektů.
                </p>
              </div>

              <dl className="titleblock">
                <div className="titleblock__cell">
                  <dt>Obor</dt>
                  <dd>Pozemní stavby</dd>
                </div>
                <div className="titleblock__cell">
                  <dt>Působnost</dt>
                  <dd>Hradec Králové a okolí</dd>
                </div>
                <div className="titleblock__cell">
                  <dt>Role</dt>
                  <dd>Dodavatel · investor</dd>
                </div>
                <div className="titleblock__cell">
                  <dt>Stav výpisu</dt>
                  <dd>Aktualizováno 2025</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>

        <section className="band" aria-labelledby="sluzby-title">
          <div className="wrap">
            <div className="band__head">
              <span className="band__tick" aria-hidden="true" />
              <p className="eyebrow">Katalog výkonů — A</p>
              <h2 id="sluzby-title" className="band__title">Co pro vás postavíme</h2>
              <p className="band__intro">
                Pět okruhů, které umíme dodat jako jeden celek. Každou zakázku
                vedeme od projektu přes vytyčení až po kolaudaci — jeden
                zodpovědný dodavatel místo řetězce subdodávek.
              </p>
            </div>

            <ol className="catalog">
              {services.map((s) => (
                <Reveal key={s.no} as="li" className="catalog__row">
                  <span className="catalog__no">{s.no}</span>
                  <h3 className="catalog__title">{s.title}</h3>
                  <p className="catalog__body">{s.body}</p>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        <section className="band band--specimens" aria-labelledby="reference-title">
          <div className="wrap">
            <div className="band__head">
              <span className="band__tick" aria-hidden="true" />
              <p className="eyebrow">Rejstřík realizací — B</p>
              <h2 id="reference-title" className="band__title">Vzorník staveb</h2>
              <p className="band__intro">
                Od svých počátků stavíme průmyslové, občanské a bytové objekty;
                v posledních letech i jako investor vlastních developerských
                projektů. Každá realizace je zanesena do mřížky a opatřena
                technickým štítkem.
              </p>
            </div>

            <div className="specimens">
              {specimens.map((p, i) => (
                <Specimen key={p.no} index={i}>
                  <div className={`plate plate--${p.plate}`} aria-hidden="true">
                    <span className="plate__no">{p.no}</span>
                  </div>
                  <div className="label">
                    <h3 className="label__name">{p.name}</h3>
                    <dl className="label__specs">
                      <div className="label__spec">
                        <dt>Lokalita</dt>
                        <dd>{p.lokalita}</dd>
                      </div>
                      <div className="label__spec">
                        <dt>Typ</dt>
                        <dd>{p.typ}</dd>
                      </div>
                      <div className="label__spec">
                        <dt>Role</dt>
                        <dd>{p.role}</dd>
                      </div>
                      <div className="label__spec">
                        <dt>Stav</dt>
                        <dd>
                          <span className={`tag ${p.live ? "tag--live" : ""}`}>
                            {p.stav}
                          </span>
                        </dd>
                      </div>
                    </dl>
                  </div>
                </Specimen>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
