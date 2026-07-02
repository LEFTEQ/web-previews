export default function Page() {
  return (
    <main className="an-page">
      {/* ===== HLAVIČKA ===== */}
      <header className="an-header">
        <a href="#" className="an-wordmark" aria-label="Antico, stavební firma">
          <span className="an-wordmark-main">ANTICO</span>
          <span className="an-wordmark-sub">stavební firma · České Budějovice</span>
        </a>
        <nav className="an-nav" aria-label="Hlavní navigace">
          <a href="#sluzby">Co stavíme</a>
          <a href="#reference">Reference</a>
          <a href="tel:+420387000000" className="an-nav-tel">387 000 000</a>
        </nav>
      </header>

      {/* ===== HERO ===== */}
      <section className="an-hero" aria-label="Úvod">
        {/* Signature: řez zdivem — spárořez historické fasády jako grafický motiv */}
        <div className="an-bond" aria-hidden="true">
          <div className="an-bond-row r1"><i /><i /><i /><i /><i /><i /></div>
          <div className="an-bond-row r2"><i /><i /><i /><i /><i /><i /></div>
          <div className="an-bond-row r3"><i /><i /><i /><i /><i /><i /></div>
          <div className="an-bond-row r4"><i /><i /><i /><i /><i /><i /></div>
          <div className="an-bond-row r5"><i /><i /><i /><i /><i /><i /></div>
        </div>

        <div className="an-hero-inner">
          <p className="an-hero-eyebrow">Pozemní stavitelství · jižní Čechy · od roku 1992</p>
          <h1 className="an-hero-title">
            <span className="an-hero-line">Vracíme život</span>
            <span className="an-hero-line an-hero-accent">starým domům.</span>
            <span className="an-hero-line">A stavíme nové.</span>
          </h1>
          <p className="an-hero-lead">
            Opravujeme památkové objekty, rekonstruujeme domy a stavíme novostavby
            na klíč. Sídlíme v Českých Budějovicích a pracujeme po celém Jihočeském kraji —
            od měšťanských domů na náměstí po rodinné domy za městem.
          </p>
          <div className="an-hero-actions">
            <a className="an-btn an-btn-solid" href="tel:+420387000000">Zavolat: 387 000 000</a>
            <a className="an-btn an-btn-ghost" href="mailto:info@antico-cb.cz">Napsat e‑mail</a>
          </div>
          <dl className="an-hero-facts">
            <div>
              <dt>Památky</dt>
              <dd>opravy pod dohledem památkové péče</dd>
            </div>
            <div>
              <dt>Rekonstrukce</dt>
              <dd>od krovu po sklep, včetně statiky</dd>
            </div>
            <div>
              <dt>Novostavby</dt>
              <dd>rodinné a bytové domy na klíč</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ===== SLUŽBY ===== */}
      <section className="an-services" id="sluzby" aria-label="Naše práce">
        <div className="an-section-head">
          <h2>Tři řemesla, jedna firma</h2>
          <p>
            Každá zakázka je jiná — barokní fasáda potřebuje jiné ruce než novostavba.
            Proto máme party zvlášť na památky, rekonstrukce i novou výstavbu.
          </p>
        </div>

        <div className="an-service-grid">
          <article className="an-service">
            <div className="an-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48">
                <path d="M8 44V22L24 8l16 14v22" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M18 44V30h12v14" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M24 8V4M20 6h8" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Opravy památek</h3>
            <p>
              Restaurování fasád, výměny krovů, sanace vlhkého zdiva historických budov.
              Umíme vápenné omítky, ruční štuky i jednání s památkáři — papírování
              vyřídíme za vás.
            </p>
            <ul className="an-service-list">
              <li>Vápenné a štukové omítky</li>
              <li>Tesařské opravy krovů</li>
              <li>Sanace vlhkosti a statiky</li>
            </ul>
          </article>

          <article className="an-service">
            <div className="an-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48">
                <rect x="8" y="14" width="32" height="30" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M8 24h32M8 34h32M20 14v10M28 24v10M20 34v10" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M14 14V6l6 4V6" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Rekonstrukce domů</h3>
            <p>
              Kompletní přestavby bytů a domů — nové dispozice, rozvody, koupelny,
              podlahy. Jeden stavbyvedoucí od zaměření po předání klíčů, žádné
              přehazování mezi subdodavateli.
            </p>
            <ul className="an-service-list">
              <li>Rekonstrukce bytů a domů na klíč</li>
              <li>Nové rozvody vody a elektřiny</li>
              <li>Půdní vestavby a nástavby</li>
            </ul>
          </article>

          <article className="an-service">
            <div className="an-service-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="48" height="48">
                <path d="M6 44h36M10 44V20l14-10 14 10v24" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="20" y="32" width="8" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="15" y="22" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <rect x="27" y="22" width="6" height="6" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Novostavby na klíč</h3>
            <p>
              Rodinné a bytové domy od základové desky po kolaudaci. Pevný rozpočet
              před podpisem smlouvy, termín ve smlouvě — a stavbu vám kdykoli
              ukážeme osobně.
            </p>
            <ul className="an-service-list">
              <li>Rodinné domy na klíč</li>
              <li>Bytové domy a menší developerské projekty</li>
              <li>Hrubé stavby a základové desky</li>
            </ul>
          </article>
        </div>
      </section>

      {/* ===== REFERENCE / DŮVĚRA ===== */}
      <section className="an-trust" id="reference" aria-label="Reference a o firmě">
        <div className="an-trust-inner">
          <div className="an-trust-copy">
            <h2>Jihočeské stavby, které za námi mluví</h2>
            <p>
              Antico spol. s r.o. staví a opravuje v jižních Čechách přes třicet let.
              Většina zakázek k nám přichází na doporučení — od majitelů domů, farností
              i městských úřadů, kterým jsme už jednou stavbu předali včas.
            </p>
            <ul className="an-trust-points">
              <li>
                <strong>Certifikovaná firma.</strong> Držíme certifikace pro pozemní
                stavby a práce na kulturních památkách.
              </li>
              <li>
                <strong>Vlastní řemeslníci.</strong> Zedníky, tesaře a štukatéry
                zaměstnáváme sami — víte, kdo vám na stavbě pracuje.
              </li>
              <li>
                <strong>Celý Jihočeský kraj.</strong> České Budějovice, Český Krumlov,
                Třeboň, Písek i menší obce — na stavbu to máme vždy blízko.
              </li>
            </ul>
          </div>

          <div className="an-refs">
            <article className="an-ref">
              <p className="an-ref-type">Oprava památky</p>
              <h3>Měšťanský dům, České Budějovice</h3>
              <p>
                Kompletní obnova fasády do náměstí — vápenné omítky, repase oken,
                nové klempířské prvky. Vše odsouhlaseno památkovou péčí.
              </p>
            </article>
            <article className="an-ref">
              <p className="an-ref-type">Rekonstrukce</p>
              <h3>Rodinný dům, Třeboňsko</h3>
              <p>
                Přestavba statku ze 30. let: nový krov, sanace vlhkého zdiva,
                moderní dispozice při zachování původního rázu.
              </p>
            </article>
            <article className="an-ref">
              <p className="an-ref-type">Novostavba</p>
              <h3>Bytový dům, České Budějovice</h3>
              <p>
                Novostavba se šesti byty na klíč — od základové desky po kolaudaci
                za 14 měsíců, předáno v termínu podle smlouvy.
              </p>
            </article>
            <article className="an-ref">
              <p className="an-ref-type">Oprava památky</p>
              <h3>Kostelní věž, Českokrumlovsko</h3>
              <p>
                Tesařská oprava krovu věže a nová šindelová krytina. Práce ve výšce,
                lešení i jeřáb jsme zajistili vlastními silami.
              </p>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
