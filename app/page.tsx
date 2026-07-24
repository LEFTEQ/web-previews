import { AiImage } from "./_ui";

export default function Page() {
  return (
    <div className="wrap">
      <svg
        className="trasa"
        viewBox="0 0 100 1000"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="trasa-path"
          pathLength={1}
          vectorEffect="non-scaling-stroke"
          d="M50 0 L50 160 L30 200 L30 420 L70 460 L70 640 L40 680 L40 860 L60 900 L60 1000"
        />
      </svg>

      <header className="nav">
        <a className="mark" href="#hero" aria-label="STAVOKA Hradec Králové, úvod">
          <span className="mark-name">
            STAVOKA<i className="mark-node" aria-hidden="true" />
          </span>
          <span className="mark-sub">HRADEC&nbsp;KRÁLOVÉ · INŽENÝRSKÉ&nbsp;SÍTĚ</span>
        </a>
        <nav className="nav-links" aria-label="Hlavní">
          <a href="#sluzby">Co stavíme</a>
          <a href="#onas">Proč my</a>
        </nav>
        <a className="nav-tel" href="tel:+420777111222">777&nbsp;111&nbsp;222</a>
      </header>

      <section className="band hero" id="hero">
        <span className="node">
          <i className="dot" aria-hidden="true" />
          <span className="node-tag">STA 0+000 · ZAČÁTEK TRASY</span>
        </span>
        <div className="inner hero-inner">
          <div className="hero-text">
            <p className="eyebrow">Vodovody · kanalizace · ČOV · východní Čechy</p>
            <h1>
              Inženýrské sítě, které obec nevidí<span className="h1-em"> — a denně na ně spoléhá.</span>
            </h1>
            <p className="lead">
              STAVOKA Hradec Králové staví a opravuje vodovody, kanalizace a
              čistírny odpadních vod pro obce, města a vodárenské společnosti.
              Od zaměření po zásyp — s vlastní technikou a vlastním pískem
              z písníku v Bělči nad Orlicí.
            </p>
            <ul className="facts">
              <li>OD 1990</li>
              <li>VLASTNÍ TECHNIKA</li>
              <li>STAVBA ROKU KHK 2013</li>
            </ul>
          </div>
          <figure className="hero-media">
            <AiImage src="/hero.webp" alt="Výkopové práce na pokládce vodovodního řadu s technikou STAVOKA" />
          </figure>
        </div>
      </section>

      <section className="band sluzby" id="sluzby">
        <span className="node">
          <i className="dot" aria-hidden="true" />
          <span className="node-tag">STA 0+240 · DN 300</span>
        </span>
        <div className="inner">
          <p className="eyebrow">Co stavíme</p>
          <h2>Od zaměření po zásyp — celá síť z jedněch rukou.</h2>

          <div className="grid3">
            <article className="svc">
              <span className="svc-spec">DN 80–500 · litina / PE</span>
              <h3>Vodovody</h3>
              <p>
                Nové vodovodní řady i rekonstrukce pro obce, města a vodárny.
                Tvárná litina i PE, tlakové zkoušky, napojení domovních přípojek
                a osazení armatur.
              </p>
            </article>
            <article className="svc">
              <span className="svc-spec">splašková + dešťová · ČOV</span>
              <h3>Kanalizace</h3>
              <p>
                Gravitační i tlaková kanalizace, kanalizační přípojky a čistírny
                odpadních vod. Tam, kde nechcete rozkopat celou náves, sáhneme
                po bezvýkopové technologii.
              </p>
            </article>
            <article className="svc">
              <span className="svc-spec">rybníky · chodníky · osvětlení</span>
              <h3>Vodohospodářské a ostatní</h3>
              <p>
                Odbahnění a rekonstrukce rybníků a nádrží, výstavba chodníků,
                komunikací a veřejného osvětlení. Pro vaši obec kompletně,
                na klíč.
              </p>
            </article>
          </div>

          <figure className="svc-media">
            <AiImage src="/section-1.webp" alt="Pokládka nové kanalizace v otevřeném výkopu v obci" />
          </figure>
        </div>
      </section>

      <section className="band onas" id="onas">
        <span className="node">
          <i className="dot" aria-hidden="true" />
          <span className="node-tag">STA 0+520 · DN 500</span>
        </span>
        <div className="inner onas-inner">
          <div className="onas-text">
            <p className="eyebrow">Proč zrovna my</p>
            <h2>Třicet let v jednom kraji. Poznáte to na každém spoji.</h2>
            <p className="lead">
              Společnost STAVOKA Hradec Králové vznikla v roce 1997 a navázala
              na práci firmy STAVOKA, s.r.o., založené už v roce 1990. Naši
              lidé jsou kvalifikovaní a zkušení, s dlouholetou praxí ve
              stavebnictví — a techniku průběžně modernizujeme, abychom stavěli
              rychleji a čistěji.
            </p>

            <dl className="specs">
              <div>
                <dt>1990</dt>
                <dd>Kořeny firmy, souvislá zkušenost dodnes</dd>
              </div>
              <div>
                <dt>2013</dt>
                <dd>Stavba roku Královéhradeckého kraje — čestné uznání, dopravní stavby</dd>
              </div>
              <div>
                <dt>0–4&nbsp;mm</dt>
                <dd>Vlastní písek z písníku v Bělči nad Orlicí</dd>
              </div>
              <div>
                <dt>Divec</dt>
                <dd>Stavební pozemky pro rodinné domy — probíhá příprava</dd>
              </div>
            </dl>

            <div className="refs">
              <span className="refs-label">REFERENCE</span>
              <ul>
                <li>Vodovody</li>
                <li>Kanalizace</li>
                <li>Nádrže</li>
                <li>Ploty</li>
                <li>Chodníky</li>
              </ul>
            </div>
          </div>

          <figure className="onas-media">
            <AiImage src="/section-2.webp" alt="Tým STAVOKA a mechanizace na stavbě vodohospodářské stavby" />
          </figure>
        </div>
      </section>
    </div>
  );
}
