import { WordSwap } from "./motion";

function CropFrame({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`crop ${className}`}>
      <span className="cm cm-tl" aria-hidden="true" />
      <span className="cm cm-tr" aria-hidden="true" />
      <span className="cm cm-bl" aria-hidden="true" />
      <span className="cm cm-br" aria-hidden="true" />
      {children}
    </div>
  );
}

function Reg() {
  return <span className="reg" aria-hidden="true" />;
}

const services = [
  {
    tab: "CI",
    tone: "magenta",
    title: "Corporate identity",
    body: "Jednotný vizuální styl, který drží od vizitky až po výlohu. Logomanuál, barevnost, typografie a jasná pravidla — aby značka vypadala všude stejně.",
  },
  {
    tab: "LOGA",
    tone: "cyan",
    title: "Návrh loga",
    body: "Značka, kterou lidé poznají na první pohled. Logo včetně variant pro web, tisk i malý formát, předané ve všech formátech, které budete potřebovat.",
  },
  {
    tab: "PACKAGING",
    tone: "magenta",
    title: "Obaly a packaging",
    body: "Obaly, které prodávají přímo na regále. Od konceptu přes dielinu a výsek až po tiskovou přípravu a dohled u tiskaře.",
  },
  {
    tab: "BANNERY",
    tone: "cyan",
    title: "Bannery a reklama",
    body: "Online i tištěná reklama v jednom stylu. Bannerové sady, letáky, plakáty i polepy — připravené do tisku i na web.",
  },
];

export default function Page() {
  return (
    <main className="page">
      <header className="topbar">
        <a className="wordmark" href="#" aria-label="Gradesi — grafické studio">
          GRADE<span className="wm-dot">S</span>I
        </a>
        <a className="topphone" href="tel:+420608136479">
          +420 608 136 479
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow hero-eyebrow">
          <Reg />
          GRAFICKÉ STUDIO · PRAHA 9 — VYSOČANY
        </p>

        <h1 id="hero-title" className="hero-title">
          <span className="line l1">TVOŘÍME</span>
          <span className="line l2">
            <CropFrame className="hero-word">
              <span className="hero-word-clip">
                <WordSwap />
              </span>
            </CropFrame>
          </span>
          <span className="line l3">PRO VÁŠ BUSINESS</span>
        </h1>

        <p className="hero-sub">
          Postaráme se o vizuální stránku vaší značky. Od prvního nápadu až po
          hotový tisk.
        </p>

        <div className="chips" role="list" aria-label="Naše disciplíny">
          <span role="listitem" className="chip">CI</span>
          <span role="listitem" className="chip">LOGA</span>
          <span role="listitem" className="chip">PACKAGING</span>
          <span role="listitem" className="chip">BANNERY</span>
        </div>

        <a className="cta hero-cta" href="mailto:info@gradesi.cz">
          Oslovte nás — připravujete tendr?
        </a>
      </section>

      <section className="section services" aria-labelledby="services-title">
        <div className="section-head">
          <p className="eyebrow">
            <Reg />
            SLUŽBY · CO PRO VÁS UDĚLÁME
          </p>
          <h2 id="services-title" className="section-title">
            Čtyři řemesla, jedna tisková příprava
          </h2>
        </div>

        <ul className="grid">
          {services.map((s) => (
            <li key={s.tab}>
              <CropFrame className="tile">
                <span className={`tab tab-${s.tone}`}>{s.tab}</span>
                <h3 className="tile-title">{s.title}</h3>
                <p className="tile-body">{s.body}</p>
              </CropFrame>
            </li>
          ))}
        </ul>
      </section>

      <section className="section about" aria-labelledby="about-title">
        <div className="about-grid">
          <div className="about-copy">
            <p className="eyebrow">
              <Reg />
              O STUDIU
            </p>
            <h2 id="about-title" className="section-title">
              Grafické studio z Vysočan. Od nápadu po realizaci.
            </h2>
            <p className="about-lead">
              Jsme Gradesi — pražské grafické studio. Navrhneme, doladíme a
              připravíme vaši značku do tisku. U každé zakázky hlídáme, aby
              výsledek fungoval na obrazovce i na papíře.
            </p>
            <ul className="points">
              <li>
                <strong>Pod jednou střechou.</strong> Koncept, návrh, tisková
                příprava i dohled u tiskaře — nemusíte nic řešit s pěti
                dodavateli.
              </li>
              <li>
                <strong>Připravujete tendr?</strong> Ozvěte se a rádi vám
                zpracujeme nabídku i podklady do výběrového řízení.
              </li>
            </ul>
          </div>

          <CropFrame className="contact-card">
            <p className="card-label">KONTAKT — OZVĚTE SE</p>
            <a className="card-line big" href="tel:+420608136479">
              +420 608 136 479
            </a>
            <a className="card-line big" href="mailto:info@gradesi.cz">
              info@gradesi.cz
            </a>
            <div className="card-addr">
              <p className="card-addr-label">PROVOZOVNA</p>
              <p>
                Business centrum, Lisabonská 799/8
                <br />
                190 00 Praha 9 — Vysočany
              </p>
            </div>
            <a className="cta card-cta" href="mailto:info@gradesi.cz">
              Napište nám
            </a>
          </CropFrame>
        </div>
      </section>
    </main>
  );
}
