const services = [
  {
    no: "01",
    title: "Vstupní vyšetření a sondáž",
    desc: "Periodontální sondou změříme hloubku každé kapsy po celé čelisti — ne jen tam, kde to bolí. Uvidíte přesně, kde dásně krvácí a proč.",
  },
  {
    no: "02",
    title: "Odstranění zubního kamene",
    desc: "Šetrné odstranění plaku a kamene ultrazvukem i ručními nástroji, nad dásní i pod ní. Bez spěchu, s ohledem na citlivé krčky.",
  },
  {
    no: "03",
    title: "Air-flow pískování",
    desc: "Jemný prášek smyje pigmentace od kávy, čaje a cigaret. Zuby o odstín světlejší a hladké na dotek jazykem.",
  },
  {
    no: "04",
    title: "Fluoridace a nácvik čištění",
    desc: "Zpevníme sklovinu fluoridem a ukážeme techniku kartáčku i mezizubních kartáčků, která doma opravdu funguje.",
  },
];

const references = [
  {
    quote:
      "Poprvé mi někdo přesně ukázal, kde a proč krvácím. Za tři měsíce nula.",
    name: "Jana K.",
    place: "Liberec",
  },
  {
    quote:
      "Objednání i průběh bez zmatků. Věděla jsem, co se bude dít a kolik zaplatím.",
    name: "Petr M.",
    place: "Liberec",
  },
];

function ProbeScale({ hero = false, slim = false }: { hero?: boolean; slim?: boolean }) {
  const majors = new Set([0, 3, 5, 7, 10]);
  const ticks = Array.from({ length: 11 }, (_, mm) => mm);
  return (
    <div
      className={`scale${hero ? " scale--hero" : ""}${slim ? " scale--slim" : ""}`}
      aria-hidden="true"
    >
      <span className="scale__band" />
      <div className="scale__ticks">
        {ticks.map((mm) => {
          const major = majors.has(mm);
          return (
            <span key={mm} className={`scale__tick${major ? " is-major" : ""}`}>
              <i />
              {major && !slim && <em>{mm}</em>}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export default function Page() {
  return (
    <>
      <header className="topbar">
        <div className="wrap topbar__inner">
          <a className="brand" href="#top" aria-label="Dentální — dentální hygiena, Liberec">
            <span className="brand__word">Dentální</span>
            <span className="brand__mark" aria-hidden="true">
              <i /><i /><i className="is-red" /><i /><i />
            </span>
          </a>
          <p className="topbar__meta">dentální hygiena · Liberec</p>
        </div>
      </header>

      <main id="top">
        <section className="band hero" aria-labelledby="hero-title">
          <div className="wrap hero__inner">
            <p className="eyebrow hero__eyebrow">Dentální hygiena · Liberec</p>
            <h1 className="hero__title" id="hero-title">
              Zdraví vašich dásní
              <br />
              měříme na <span>milimetry</span>.
            </h1>
            <p className="hero__lead">
              Periodontální sondou zmapujeme každou kapsu, odstraníme plak i
              zubní kámen a ukážeme techniku, která doma funguje. Klidně, čistě,
              bez zmatků.
            </p>

            <div className="hero__scale">
              <ProbeScale hero />
            </div>
            <p className="scale-caption">hloubka dásňové kapsy — periodontální sonda (mm)</p>

            <div className="zones">
              <div className="zone">
                <span className="zone__mm">0–3&nbsp;mm</span>
                <span className="zone__lbl">zdravá dáseň</span>
              </div>
              <div className="zone zone--watch">
                <span className="zone__mm">3–5&nbsp;mm</span>
                <span className="zone__lbl">zánět, sledujeme</span>
              </div>
              <div className="zone">
                <span className="zone__mm">5–10&nbsp;mm</span>
                <span className="zone__lbl">parodontální kapsa</span>
              </div>
            </div>
          </div>
        </section>

        <div className="divider wrap" role="presentation">
          <ProbeScale />
        </div>

        <section className="band services" aria-labelledby="svc-title">
          <div className="wrap">
            <div className="band__head">
              <p className="eyebrow">Průběh návštěvy · 60 minut</p>
              <h2 id="svc-title">Čtyři kroky jedné návštěvy</h2>
              <p className="band__lead">
                Návštěva má pořadí a my ho dodržujeme. Od změření až po nácvik
                čištění — víte, co přijde a proč.
              </p>
            </div>

            <ol className="svc-grid">
              {services.map((s) => (
                <li className="svc" key={s.no}>
                  <span className="svc__no">{s.no}</span>
                  <h3 className="svc__title">{s.title}</h3>
                  <div className="svc__rule">
                    <ProbeScale slim />
                  </div>
                  <p className="svc__desc">{s.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <div className="divider wrap" role="presentation">
          <ProbeScale />
        </div>

        <section className="band band--dark trust" aria-labelledby="trust-title">
          <div className="wrap trust__grid">
            <div className="trust__intro">
              <p className="eyebrow">Proč právě my</p>
              <h2 id="trust-title">Přesnost, kterou ucítíte na dásních.</h2>
              <p className="band__lead">
                Dvě dentální hygienistky, jeden rukopis: klid, čas a přesná
                práce. Web, který se načte hned — a péče, která nikam nespěchá.
              </p>
              <ul className="trust__points">
                <li>60 minut na každou návštěvu — nikam vás neženeme.</li>
                <li>Sondáž po celé čelisti, ne jen tam, kde to bolí.</li>
                <li>Ukážeme vám záznam měření i plán na příště.</li>
              </ul>
            </div>

            <div className="trust__side">
              <div className="quotes">
                {references.map((r) => (
                  <blockquote className="quote" key={r.name}>
                    <p>„{r.quote}“</p>
                    <cite>
                      {r.name} <span>· {r.place}</span>
                    </cite>
                  </blockquote>
                ))}
              </div>

              <dl className="info">
                <div className="info__row">
                  <dt>Ordinační hodiny</dt>
                  <dd>Pondělí–pátek 7:30–17:00, jen po objednání</dd>
                </div>
                <div className="info__row">
                  <dt>Kde nás najdete</dt>
                  <dd>Ukázková 123, Liberec</dd>
                </div>
                <div className="info__row">
                  <dt>Objednání</dt>
                  <dd>
                    <a href="tel:+420777111222">+420 777 111 222</a>
                    <br />
                    <a href="mailto:info@example.cz">info@example.cz</a>
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
