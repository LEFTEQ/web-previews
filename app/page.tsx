import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "F.01",
      title: "Fyzická ostraha",
      desc: "Střežíme areály, recepce i vstupy — od jednoho pracoviště po celé pobočkové sítě. Ostrahu vždy stavíme na místní znalosti a jasném plánu zásahu.",
    },
    {
      code: "T.02",
      title: "Technologie a slaboproudé systémy",
      desc: "EZS, EPS, CCTV, přístupové a docházkové systémy. Navrhujeme, instalujeme i servisujeme — jeden dodavatel, jedna zodpovědnost.",
    },
    {
      code: "P.03",
      title: "Pult centralizované ochrany",
      desc: "Váš objekt hlídá náš vlastní dispečink 24/7. Signál z čidla vyhodnotíme a vyšleme zásahové vozidlo — v Ostravě i v okolí do několika minut.",
    },
    {
      code: "C.04",
      title: "Bezpečnost osob a transport cenin",
      desc: "VIP doprovody, ochrana při akcích a bezpečná přeprava hotovosti i cenností ve spolupráci s PČR a složkami IZS.",
    },
    {
      code: "M.05",
      title: "Facility a property management",
      desc: "Správa a údržba objektů tam, kde ostraha nekončí u dveří. Provoz budovy držíme v chodu a pod kontrolou.",
    },
  ];

  const segments = [
    "Obchodní centra a retail",
    "Výroba a průmyslové areály",
    "Banky a finanční instituce",
    "Státní a veřejné instituce",
    "Zdravotnická zařízení",
    "Bydlení a rekreační objekty",
  ];

  return (
    <main className="pg">
      <header className="nav" aria-label="Hlavní navigace">
        <a className="wordmark" href="#" aria-label="ABAS IPS Management, domů">
          <span className="wordmark__a">ABAS</span>
          <span className="wordmark__sep" aria-hidden="true" />
          <span className="wordmark__ips">IPS</span>
        </a>
        <nav className="nav__links">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="nav__cta" href="tel:+420724621603">Nonstop dispečink</a>
        </nav>
      </header>

      <section className="hero">
        <div className="hero__media">
          <img
            src="/hero.webp"
            alt="Dispečink pultu centralizované ochrany ABAS IPS v Ostravě, operátoři u monitorovacích stěn"
            className="hero__img"
          />
          <div className="hero__scan" aria-hidden="true" />
        </div>

        <div className="hero__panel">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Dispečink střeží — Ostrava, Českobratrská 692/15
          </p>
          <h1 className="hero__title">
            Ve chvíli, kdy se něco stane,
            <br />
            <span className="hero__accent">už tam jedeme.</span>
          </h1>
          <p className="hero__lead">
            Bezpečnostní agentura ABAS IPS Management. Od roku 1992 spojujeme
            fyzickou ostrahu, techniku a vlastní pult centralizované ochrany do
            jednoho celku — pro retail, výrobu, banky i domácnosti napříč střední Evropou.
          </p>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#sluzby">
              Co pro vás zajistíme
            </a>
            <a className="btn btn--ghost" href="tel:+420724621603">
              +420 724 621 603
            </a>
          </div>
        </div>

        <dl className="statusbar" aria-label="Provozní ukazatele">
          <div className="status">
            <dt>Dispečink</dt>
            <dd><span className="status__pulse" aria-hidden="true" />24/7 v provozu</dd>
          </div>
          <div className="status">
            <dt>Ve službě</dt>
            <dd>1 150+ lidí ve 4 zemích</dd>
          </div>
          <div className="status">
            <dt>Zkušenost</dt>
            <dd>od roku 1992</dd>
          </div>
        </dl>
      </section>

      <section id="sluzby" className="services" aria-labelledby="services-h">
        <div className="section-head">
          <p className="eyebrow">
            <span className="eyebrow__dot" aria-hidden="true" />
            Pět vrstev, jeden systém
          </p>
          <h2 id="services-h" className="section-head__title">
            Ostraha, technika a dohled, které spolu mluví
          </h2>
          <p className="section-head__lead">
            Nedodáváme jen strážného nebo jen kameru. Skládáme vrstvy, které se
            navzájem doplňují — čidlo, kamera, dispečink a zásah fungují jako
            jeden řetěz. Kód u každé služby odpovídá jejímu místu v tom řetězu.
          </p>
        </div>

        <ol className="svc-list">
          {services.map((s) => (
            <li key={s.code} className="svc">
              <span className="svc__code">{s.code}</span>
              <div className="svc__body">
                <h3 className="svc__title">{s.title}</h3>
                <p className="svc__desc">{s.desc}</p>
              </div>
            </li>
          ))}
        </ol>

        <figure className="svc-figure">
          <img
            src="/section-1.webp"
            alt="Zásahové vozidlo a technik ABAS IPS u zabezpečeného objektu"
            className="svc-figure__img"
          />
          <figcaption className="svc-figure__cap">
            Výjezd z ostravského dispečinku — od signálu k prověrce na místě.
          </figcaption>
        </figure>
      </section>

      <section id="duvera" className="trust" aria-labelledby="trust-h">
        <div className="trust__grid">
          <div className="trust__text">
            <p className="eyebrow eyebrow--light">
              <span className="eyebrow__dot" aria-hidden="true" />
              Kdo za tím stojí
            </p>
            <h2 id="trust-h" className="trust__title">
              Přes třicet let hlídáme,
              <br />co je pro klienty důležité
            </h2>
            <p className="trust__lead">
              ABAS IPS Management vznikl v roce 1992 a dnes patří mezi lídry
              bezpečnostních technologií a fyzické ostrahy v Česku, na Slovensku,
              v Polsku a Maďarsku. Chráníme majetek, osoby i provozní kontinuitu —
              od banky přes nemocnici až po rodinný dům.
            </p>

            <ul className="trust__stats">
              <li>
                <span className="stat__num">1 150+</span>
                <span className="stat__label">lidí ve službě napříč EU</span>
              </li>
              <li>
                <span className="stat__num">4</span>
                <span className="stat__label">země, kde působíme</span>
              </li>
              <li>
                <span className="stat__num">1992</span>
                <span className="stat__label">rok založení v regionu</span>
              </li>
            </ul>

            <p className="trust__seg-intro">Segmenty, které známe do detailu:</p>
            <ul className="trust__segments">
              {segments.map((seg) => (
                <li key={seg}>{seg}</li>
              ))}
            </ul>

            <a className="btn btn--primary" href="mailto:obchod@abasco.cz">
              Napište nám na obchod@abasco.cz
            </a>
          </div>

          <figure className="trust__figure">
            <img
              src="/section-2.webp"
              alt="Strážný ABAS IPS na obchůzce střeženého areálu"
              className="trust__img"
            />
            <figcaption className="trust__cap">
              <span className="trust__cap-k">Sídlo</span>
              Českobratrská 692/15, Ostrava
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
