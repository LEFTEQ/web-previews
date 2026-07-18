import { AiImage } from "./_ui";

const products = [
  {
    tag: "PP",
    name: "Bazény",
    desc: "Hranaté bazény svařené z polypropylenových desek. S vestavěnými schody, přelivem i zastřešením — rozměr podle vaší zahrady, ne podle katalogu.",
    fill: 56,
    art: (
      <path d="M10 20 L90 20 L90 58 L10 58 M10 46 L22 46 L22 52 L34 52 L34 58" />
    ),
  },
  {
    tag: "PE",
    name: "Zahradní jezírka",
    desc: "Fóliová i tvarovaná jezírka s hydroizolací, která drží. Přírodní tvar i pravidelný obrys — jak si přejete.",
    fill: 44,
    art: (
      <path d="M20 40 C15 25 40 16 56 23 C76 31 86 36 78 50 C70 62 34 64 25 55 Z" />
    ),
  },
  {
    tag: "PP / PE",
    name: "Nádrže a jímky",
    desc: "Na dešťovou, pitnou i odpadní vodu. Septiky, akumulace, nádrže na chemikálie — jednoplášťové i dvouplášťové bezpečnostní.",
    fill: 70,
    art: (
      <g>
        <rect x="26" y="12" width="48" height="55" rx="8" />
        <path d="M26 25 L74 25" />
      </g>
    ),
  },
  {
    tag: "PP",
    name: "Plastové šachty",
    desc: "Vodoměrné a kanalizační šachty, zhlaví vrtaných studní. Přesně na hloubku i na potrubí, které do nich vede.",
    fill: 78,
    art: (
      <g>
        <ellipse cx="50" cy="15" rx="20" ry="6" />
        <path d="M30 15 L30 60" />
        <path d="M70 15 L70 60" />
        <ellipse cx="50" cy="60" rx="20" ry="6" />
      </g>
    ),
  },
  {
    tag: "PP",
    name: "Domovní ČOV",
    desc: "Čistírny odpadních vod pro rodinné domy i chaty. Kompaktní, vyrobené z jednoho svařence, připravené k osazení.",
    fill: 50,
    art: (
      <g>
        <rect x="12" y="22" width="76" height="40" rx="4" />
        <path d="M38 22 L38 62" />
        <path d="M62 22 L62 62" />
      </g>
    ),
  },
  {
    tag: "DLE VÝKRESU",
    name: "Zakázková výroba",
    desc: "Odlučovače tuků a ropných látek, odsavače agresivních par, dvouplášťové nádrže — i pramice pro rybáře a vodáky. Uděláme přesně to, co je na výkrese.",
    fill: 40,
    art: (
      <g>
        <rect x="14" y="18" width="72" height="48" rx="2" />
        <path d="M14 31 L86 31 M14 44 L86 44" />
        <circle cx="29" cy="55" r="4" />
      </g>
    ),
  },
];

const steps = [
  {
    n: "01",
    t: "Výkres",
    d: "Sejmeme míry přímo u vás, nebo vyjdeme z vaší výkresové dokumentace. Rozměr, hloubka, umístění nátrubků — vše na papíře, než se řeže.",
  },
  {
    n: "02",
    t: "Řez",
    d: "Z polypropylenových a polyetylenových desek nařežeme jednotlivé díly přesně na míru zakázky.",
  },
  {
    n: "03",
    t: "Svar",
    d: "Díly spojíme extruzním svarem — týž vodotěsný spoj, který pak drží vodu v bazénu i v nádrži.",
  },
  {
    n: "04",
    t: "Osazení",
    d: "Hotový výrobek dovezeme a osadíme na připravené místo. Bez prostředníků, od výkresu po zeminu.",
  },
];

export default function Page() {
  return (
    <main>
      <header className="hero">
        <div className="masthead">
          <a className="wordmark" href="#vyrobky">
            <span className="wordmark-main">RENOPLAST</span>
            <span className="wordmark-tag">Plzeň · s.r.o.</span>
          </a>
          <p className="masthead-meta">Plastové výrobky · Chotíkov u Plzně · od 1995</p>
        </div>

        <div className="hero-inner">
          <div className="hero-copy">
            <p className="eyebrow">
              Rodinná dílna na vodu
              <span className="waterline draw" aria-hidden="true" />
            </p>
            <h1 className="hero-title">
              Bazén, který vznikne
              <br />z desky, ne z formy.
            </h1>
            <p className="hero-lede">
              Bazény, jímky, šachty a nádrže z polypropylenu a polyetylenu.
              Každý kus svaříme na míru podle výkresu — přesně tam, kde ho
              potřebujete mít.
            </p>
            <dl className="hero-specs">
              <div>
                <dt>Materiál</dt>
                <dd>PP + PE deska</dd>
              </div>
              <div>
                <dt>Spoj</dt>
                <dd>Extruzní svar</dd>
              </div>
              <div>
                <dt>Od roku</dt>
                <dd>1995</dd>
              </div>
            </dl>
          </div>

          <div className="basin" aria-hidden="true">
            <div className="basin-fill" />
            <span className="basin-mark basin-mark--l">hl. 1,2 m</span>
            <span className="basin-mark basin-mark--r">6 × 3 m</span>
          </div>
        </div>
      </header>

      <section className="section" id="vyrobky">
        <div className="wrap">
          <div className="section-head">
            <p className="label">
              Výrobky
              <span className="waterline draw" aria-hidden="true" />
            </p>
            <p className="section-note">
              Sériové i zakázkové. Barevný pruh v každém dílu ukazuje hladinu —
              stejnou čáru, kterou v dílně svaříme mezi dvě desky.
            </p>
          </div>

          <ul className="catalog">
            {products.map((p) => (
              <li className="cell" key={p.name}>
                <div
                  className="thumb"
                  style={{ ["--fill" as string]: `${p.fill}%` }}
                >
                  <div className="thumb-fill" />
                  <svg
                    className="thumb-art"
                    viewBox="0 0 100 75"
                    fill="none"
                    aria-hidden="true"
                  >
                    {p.art}
                  </svg>
                </div>
                <div className="cell-body">
                  <span className="mat-tag">{p.tag}</span>
                  <h3 className="cell-name">{p.name}</h3>
                  <p className="cell-desc">{p.desc}</p>
                </div>
                <span className="waterline waterline--cell draw" aria-hidden="true" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--dark" id="o-nas">
        <div className="wrap">
          <div className="section-head">
            <p className="label label--light">
              O nás
              <span className="waterline draw" aria-hidden="true" />
            </p>
            <p className="section-note section-note--light">
              Rodinná firma z Chotíkova u Plzně. Vyrábíme plastové výrobky
              od roku 1995 a pořád na stejném principu — poctivý svar a rozměr
              přesně na míru.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-text">
              <h2 className="about-title">
                Uděláme přesně to, co je na výkrese.
              </h2>
              <p>
                Kromě standardních výrobků z polypropylenu a polyetylenu —
                bazénů, jímek, septiků, vodoměrných a kanalizačních šachet —
                vyrábíme velké množství věcí na zakázku. Podle vašeho přání
                nebo přímo podle výkresové dokumentace.
              </p>
              <p>
                Dbáme na rychlost vyřízení zakázky, na kvalitu zpracování
                a na to, aby se na každého z nás dalo spolehnout. Žádný
                prostředník — od prvního náčrtu po osazení jsme to my.
              </p>
            </div>

            <ol className="steps">
              {steps.map((s) => (
                <li className="step" key={s.n}>
                  <span className="step-n">{s.n}</span>
                  <div>
                    <h3 className="step-t">{s.t}</h3>
                    <p className="step-d">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <ul className="facts">
            <li>
              <strong>1995</strong>
              <span>rok, kdy jsme začali svařovat</span>
            </li>
            <li>
              <strong>PP + PE</strong>
              <span>polypropylen a polyetylen</span>
            </li>
            <li>
              <strong>Na míru</strong>
              <span>dle výkresové dokumentace</span>
            </li>
            <li>
              <strong>Chotíkov</strong>
              <span>dílna kousek od Plzně</span>
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
