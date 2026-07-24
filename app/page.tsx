import { AiImage } from "./_ui";
import { Grid, Tile } from "./motion";

const projects = [
  { n: "01", name: "Parkhotel Congress Center", place: "Plzeň" },
  { n: "02", name: "Ubytovna", place: "Bor u Tachova" },
  { n: "03", name: "Mateřská škola", place: "Mukařov" },
  { n: "04", name: "Pandora", place: "Plzeň" },
];

export default function Page() {
  return (
    <>
      <header className="masthead">
        <div className="wrap masthead-inner">
          <a className="wordmark" href="#" aria-label="Interiéry koupelen, Plzeň — domů">
            <span className="wm-a">INTERIÉRY</span>
            <span className="wm-b">KOUPELEN</span>
            <span className="wm-c">Plzeň · s.r.o.</span>
          </a>
          <nav className="topnav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#realizace">Realizace</a>
            <a href="#showroom">Showroom</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO — the wall itself */}
        <section className="band" aria-labelledby="hero-title">
          <div className="wrap">
            <Grid className="grout hero-grid">
              <Tile className="cell cell-slate h-head">
                <p className="eyebrow">Rekonstrukce koupelen — Plzeň a okolí</p>
                <h1 id="hero-title" className="display">
                  Spára, která<br />sedí na milimetr.
                </h1>
                <p className="lede">
                  Vezmeme koupelnu od vybouraného bytového jádra až po poslední
                  srovnanou spáru — jedna parta, jedna odpovědnost, čistý výsledek.
                </p>
                <div className="actions">
                  <a className="btn btn-primary" href="#realizace">Prohlédnout realizace</a>
                  <a className="btn btn-ghost" href="#showroom">Navštívit showroom</a>
                </div>
              </Tile>

              <Tile className="cell cell-photo h-photo">
                <AiImage className="media" src="/hero.webp" alt="Dokončená koupelna s velkoformátovým obkladem a srovnanými spárami" />
              </Tile>

              <Tile className="cell cell-chrome h-stat">
                <span className="stat-num">18</span>
                <span className="stat-label">let na plzeňských stavbách</span>
              </Tile>

              <Tile className="cell cell-aqua h-loc">
                <span className="aqua-eyebrow">Plná vana čisté vody</span>
                <span className="aqua-big">Děláme v Plzni</span>
              </Tile>
            </Grid>
          </div>
        </section>

        {/* SLUŽBY */}
        <section id="sluzby" className="band" aria-labelledby="svc-title">
          <div className="wrap">
            <Grid className="grout svc-grid">
              <Tile className="cell cell-slate s-title">
                <p className="eyebrow eyebrow-light">Co u nás objednáte</p>
                <h2 id="svc-title" className="heading">Naše služby</h2>
              </Tile>

              <Tile className="cell cell-white s-1">
                <span className="svc-idx">Kompletní rekonstrukce</span>
                <p className="svc-text">Od vybourání jádra po revizi. Vedeme celou stavbu — nemusíte shánět jednotlivé řemesla.</p>
              </Tile>

              <Tile className="cell cell-white s-2">
                <span className="svc-idx">Obklad a velkoformát</span>
                <p className="svc-text">Klademe obklad i velké formáty s jednotnou, přesně srovnanou spárou po celé stěně.</p>
              </Tile>

              <Tile className="cell cell-photo s-photo">
                <AiImage className="media" src="/section-1.webp" alt="Kladení obkladu se srovnanými spárami při rekonstrukci koupelny" />
              </Tile>

              <Tile className="cell cell-white s-3">
                <span className="svc-idx">Voda, odpady, sanita</span>
                <p className="svc-text">Nové rozvody, závěsné WC, sprchové kouty i vany. Připojíme baterie a odzkoušíme těsnost.</p>
              </Tile>

              <Tile className="cell cell-white s-4">
                <span className="svc-idx">Hydroizolace a spárování</span>
                <p className="svc-text">Poctivá izolace pod obklad a čisté vyspárování — koupelna, která drží roky.</p>
              </Tile>

              <Tile className="cell cell-aqua s-show" id="showroom">
                <span className="aqua-eyebrow">Showroom Plzeň</span>
                <p className="svc-text svc-text-inv">Vyberte si obklady, dlažbu a baterie osobně u nás. Poradíme s formátem i spárou.</p>
              </Tile>
            </Grid>
          </div>
        </section>

        {/* REALIZACE / REFERENCE */}
        <section id="realizace" className="band" aria-labelledby="ref-title">
          <div className="wrap">
            <Grid className="grout ref-grid">
              <Tile className="cell cell-slate r-title">
                <p className="eyebrow eyebrow-light">Významné reference</p>
                <h2 id="ref-title" className="heading">Realizace</h2>
                <p className="lede lede-light">Vybráno z dokončených staveb v Plzni a okolí.</p>
              </Tile>

              <Tile className="cell cell-photo r-photo">
                <AiImage className="media" src="/section-2.webp" alt="Realizace koupelny v bytovém domě — obklad, sanita a srovnané spáry" />
              </Tile>

              {projects.map((p, i) => (
                <Tile key={p.n} className={`cell cell-white r-proj r-p${i + 1}`}>
                  <span className="proj-idx"><span className="proj-n">{p.n}</span> / 05</span>
                  <span className="proj-name">{p.name}</span>
                  <span className="proj-place">{p.place}</span>
                </Tile>
              ))}

              <Tile className="cell cell-aqua r-p5">
                <span className="proj-idx proj-idx-inv"><span className="proj-n proj-n-inv">05</span> / 05</span>
                <span className="proj-name proj-name-inv">Bytový dům Revoluční 41</span>
                <span className="proj-place proj-place-inv">Plzeň · kompletní rekonstrukce koupelen</span>
              </Tile>
            </Grid>
          </div>
        </section>
      </main>
    </>
  );
}
