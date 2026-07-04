import type { CSSProperties } from "react";

export default function Page() {
  const capabilities = [
    {
      no: "01",
      title: "Soustružené dílce",
      body: "Rotační součásti na konvenčních soustruzích i CNC — od jednotlivých kusů po malé série. Přesnost, kterou žádá strojírenství i automotive.",
    },
    {
      no: "02",
      title: "Frézované dílce",
      body: "CNC frézování složitějších geometrií z oceli, nerezu i hliníku. Držíme tolerance, které vaše montáž potřebuje.",
    },
    {
      no: "03",
      title: "Kovové konstrukce",
      body: "Menší svařované konstrukce a kovářské práce na míru. Kus, který má sedět a vydržet, ne jen vypadat.",
    },
  ];

  return (
    <main className="forge">
      <header className="forge-nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#uvod" aria-label="Kovoartip, domů">
          <span className="wordmark-kovo">KOVO</span>
          <span className="wordmark-artip">ARTIP</span>
          <span className="wordmark-since">od 1993</span>
        </a>
        <nav className="forge-links">
          <a href="#vyroba">Výroba</a>
          <a href="#firma">O dílně</a>
        </nav>
      </header>

      <section className="hero" id="uvod">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Rozžhavená ocel na kovadlině v dílně Kovoartip v Českých Budějovicích"
            className="hero-img"
          />
          <div className="hero-grain" aria-hidden="true" />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Kovárna &amp; obrábění · České Budějovice</p>
          <h1 className="hero-title">
            Studená ocel,
            <br />
            <span className="hot">rozžhavená</span> do tvaru.
          </h1>
          <p className="hero-lead">
            Soustružíme, frézujeme a kujeme dílce od roku 1993. Jeden kus i malá
            série — přesně na rozměr, s tolerancí, na kterou se spolehnete.
          </p>
          <div className="hero-cta">
            <a className="btn btn-primary" href="#vyroba">
              Co u nás vyrobíme
            </a>
            <a className="btn btn-ghost" href="tel:+420380000000">
              Zavolat do dílny
            </a>
          </div>
        </div>

        <dl className="hero-meta">
          <div>
            <dt>Kováme od</dt>
            <dd>1993</dd>
          </div>
          <div>
            <dt>Materiály</dt>
            <dd>Ocel · nerez · hliník</dd>
          </div>
          <div>
            <dt>Zákazníci v</dt>
            <dd>ČR i EU</dd>
          </div>
        </dl>
      </section>

      <section className="vyroba" id="vyroba">
        <div className="section-head">
          <p className="eyebrow eyebrow-dark">Výrobní možnosti</p>
          <h2 className="section-title">Tři věci, které umíme pořádně.</h2>
        </div>

        <ol className="cap-list">
          {capabilities.map((c) => (
            <li className="cap" key={c.no} style={{ "--i": c.no } as CSSProperties}>
              <span className="cap-no" aria-hidden="true">
                {c.no}
              </span>
              <h3 className="cap-title">{c.title}</h3>
              <p className="cap-body">{c.body}</p>
            </li>
          ))}
        </ol>

        <figure className="vyroba-figure">
          <img
            src="/section-1.webp"
            alt="Detail obráběného kovového dílce upnutého ve stroji"
          />
          <figcaption>
            Konvenční stroje i CNC pod jednou střechou — vybereme technologii
            podle toho, co dílec potřebuje, ne naopak.
          </figcaption>
        </figure>
      </section>

      <section className="firma" id="firma">
        <figure className="firma-figure">
          <img
            src="/section-2.webp"
            alt="Kovář při práci v dílně Kovoartip v Českých Budějovicích"
          />
        </figure>

        <div className="firma-copy">
          <p className="eyebrow eyebrow-dark">O dílně</p>
          <h2 className="section-title">
            Rodinná dílna, která ví, co drží.
          </h2>
          <p className="firma-lead">
            Začínali jsme v roce 1993 jako ARTIP — rotační a frézované dílce na
            konvenčních strojích a menší kovové konstrukce. Postupně jsme
            přidali CNC obrábění a v roce 2006 se z nás stal Kovoartip s.r.o.
            Řemeslo ale zůstalo stejné: udělat kus tak, aby vydržel.
          </p>

          <ul className="firma-facts">
            <li>
              <span className="fact-year">1993</span>
              <span className="fact-text">Založení pod názvem ARTIP</span>
            </li>
            <li>
              <span className="fact-year">2006</span>
              <span className="fact-text">Přechod na Kovoartip s.r.o.</span>
            </li>
            <li>
              <span className="fact-year">dnes</span>
              <span className="fact-text">
                Dodáváme napříč průmyslem v ČR i EU
              </span>
            </li>
          </ul>

          <p className="firma-note">
            Dílna sídlí v Českých Budějovicích. Přineste výkres nebo jen náčrt —
            zbytek vymyslíme spolu.
          </p>
        </div>
      </section>
    </main>
  );
}
