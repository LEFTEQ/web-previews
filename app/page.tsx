import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      no: "01",
      title: "Kuchyně na míru",
      body:
        "Linka přesně do vašeho půdorysu, i do panelákového bytu, kde se počítá každý centimetr. Vestavěné spotřebiče, indukční deska, vysouvací digestoř. Vodorovná léta dřeva probíhají plynule po celé délce.",
    },
    {
      no: "02",
      title: "Skříně a šatny",
      body:
        "Vestavěné a šatní skříně, které využijí každý výklenek. Posuvné dveře zajíždějící do rámu, inteligentní výklopné systémy, sedátko na obouvání v zádveří. Úložný prostor tam, kde jste ho nečekali.",
    },
    {
      no: "03",
      title: "Obývací stěny a knihovny",
      body:
        "Knihovny na míru, stolky pod televizi, obývací sestavy. Kombinujeme tmavší dřevo se světlejšími hranami tak, aby kus ladil s tím, co už doma máte — třeba s odhalenou cihlovou zdí.",
    },
    {
      no: "04",
      title: "Nábytek pro provoz",
      body:
        "Vybavení obchodů a provozoven. Kvalitní nábytek z lamina, dřevotřísky i masivu, navržený tak, aby vydržel denní provoz a dobře vypadal roky.",
    },
  ];

  return (
    <main className="page">
      <header className="top">
        <a className="mark" href="#" aria-label="Truhlářství Malének, domů">
          <span className="mark-line">TRUHLÁŘSTVÍ</span>
          <span className="mark-name">MALÉNEK</span>
        </a>
        <a className="top-tel" href="tel:+420605251377">
          <span className="top-tel-label">Zavolat</span>
          <span className="top-tel-num">605 251 377</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-grain" aria-hidden="true">
          {Array.from({ length: 9 }).map((_, i) => (
            <span key={i} style={{ "--i": i } as CSSProperties} />
          ))}
        </div>

        <p className="hero-eyebrow">
          <span className="dot" aria-hidden="true" /> Olomouc &middot; od roku 1990
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="line line-1">Nábytek</span>
          <span className="line line-2">řezaný</span>
          <span className="line line-3">
            na <em>míru</em>
          </span>
        </h1>

        <p className="hero-lead">
          Truhlárna, kde léta dřeva navazují a každý centimetr má svůj
          smysl. Kuchyně, skříně a obývací stěny navržené přesně do vašeho
          bytu — ne z katalogu, ale podle vašeho půdorysu.
        </p>

        <div className="hero-actions">
          <a className="btn btn-solid" href="tel:+420605251377">
            Zavolat truhláři
          </a>
          <a className="btn btn-line" href="#reference">
            Prohlédnout práci
          </a>
        </div>

        <dl className="hero-facts">
          <div>
            <dt>Dílna</dt>
            <dd>Nové sady, Olomouc</dd>
          </div>
          <div>
            <dt>Materiály</dt>
            <dd>lamino · dřevotříska · masiv</dd>
          </div>
          <div>
            <dt>Zkušenost</dt>
            <dd>přes 30 let u ponku</dd>
          </div>
        </dl>
      </section>

      <section className="services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="section-eyebrow">Co pro vás vyrobíme</p>
          <h2 id="services-title" className="section-title">
            Od kuchyně po zádveří — vše přesně do vašeho prostoru
          </h2>
        </div>

        <ol className="svc-list">
          {services.map((s) => (
            <li key={s.no} className="svc">
              <span className="svc-no">{s.no}</span>
              <div className="svc-body">
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-text">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="svc-figure">
          <img
            src="/section-1.webp"
            alt="Kuchyňská linka na míru s vestavěnými spotřebiči a plynulými vodorovnými léty dřeva"
            loading="lazy"
          />
          <figcaption>
            Kuchyňská linka do panelákového bytu — vestavěná lednice ve
            výklenku, dostatek pracovní plochy a dřez v desce o zvětšené
            hloubce.
          </figcaption>
        </figure>
      </section>

      <section className="trust" id="reference" aria-labelledby="trust-title">
        <div className="trust-inner">
          <div className="trust-copy">
            <p className="section-eyebrow light">O dílně</p>
            <h2 id="trust-title" className="section-title light">
              Truhlář z Olomouce, kterého najdete pořád na stejném místě
            </h2>
            <p className="trust-text">
              Truhlářství Malének stojí v Olomouci od roku 1990. Za ta léta
              jsme vybavili paneláky i rodinné domy, malé byty i obchody.
              Řešíme, co jiní odbydou: pračku schovanou v kuchyni, když se do
              koupelny nevešla, skříň, která je zároveň zástěnou, výsuvy tam,
              kde chybí místo.
            </p>
            <p className="trust-text">
              Nedělám nábytek na sklad. Přijedu se podívat, změřím, poradím
              s materiálem i řešením — a pak vyrobím kus, který sedí do vašeho
              bytu na milimetr.
            </p>

            <ul className="trust-contact">
              <li>
                <span className="tc-label">Dílna</span>
                <span className="tc-value">
                  Dolní Novosadská 85/5, Olomouc – Nové sady
                </span>
              </li>
              <li>
                <span className="tc-label">Telefon</span>
                <span className="tc-value">
                  <a href="tel:+420605251377">+420 605 251 377</a>
                </span>
              </li>
            </ul>
          </div>

          <figure className="trust-figure">
            <img
              src="/section-2.webp"
              alt="Vestavěná skříň na míru s posuvnými dveřmi a kombinací tmavého dřeva se světlými hranami"
              loading="lazy"
            />
            <figcaption>
              Vestavěná skříň s posuvnými dveřmi, které při zavření zajedou do
              rámu — každý centimetr v malém bytě využitý.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
