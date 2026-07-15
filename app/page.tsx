import type { CSSProperties } from "react";

// Abstrahovaná Ještědská hyperboloida — jeden tenký tah.
// Silueta věže/hotelu Karla Hubáčka: hrot-anténa nahoře, tělo se rozevírá k patě.
const JESTED_D =
  "M18 118 C 32 78 45 60 49 28 L50 4 L51 28 C 55 60 68 78 82 118";

function Jested({
  className,
  draw = false,
  style,
}: {
  className?: string;
  draw?: boolean;
  style?: CSSProperties;
}) {
  return (
    <svg
      className={className}
      style={style}
      viewBox="0 0 100 120"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        className={draw ? "pb-arc-path" : undefined}
        d={JESTED_D}
        stroke="currentColor"
        strokeWidth={draw ? 1.4 : 3}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

const services = [
  {
    n: "01",
    title: "Prodej a pronájem nemovitostí",
    body: "Kompletní zprostředkování nákupu, prodeje i pronájmu všech typů nemovitostí — od bytu po komerční prostory.",
  },
  {
    n: "02",
    title: "Znalecké a tržní posudky",
    body: "Posudky pro dědické řízení, financování hypotékou i pojištění. Víme, co má v Liberci jakou cenu.",
  },
  {
    n: "03",
    title: "Výkup nemovitostí",
    body: "Když nechcete nebo nemůžete čekat na peníze — třeba kvůli exekuci — najdeme rychlé a férové řešení.",
  },
  {
    n: "04",
    title: "Profesionální prezentace",
    body: "Vaši nemovitost nafotíme a natočíme a představíme na největších realitních portálech i sociálních sítích.",
  },
  {
    n: "05",
    title: "Energetické průkazy",
    body: "Zpracování průkazu energetické náročnosti budovy dle zákona č. 406/2000 Sb. za výhodnou cenu.",
  },
  {
    n: "06",
    title: "Krátkodobé ubytování",
    body: "Ubytování v Liberci na pár nocí i na delší pobyt — pro klienty, kteří jsou zrovna mezi domovy.",
  },
];

export default function Page() {
  return (
    <main className="pb">
      <header className="pb-masthead">
        <a className="pb-wordmark" href="#" aria-label="Probyt — realitní agentura Liberec">
          <Jested className="pb-wordmark-arc" />
          <span className="pb-wordmark-name">
            PROBYT
            <span className="pb-wordmark-sub">realitní agentura · Liberec</span>
          </span>
        </a>
        <a className="pb-masthead-tel" href="tel:+420608300152">
          +420 608 300 152
        </a>
      </header>

      <section className="pb-hero" aria-labelledby="pb-hero-title">
        <div className="pb-hero-rules" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
          <span />
        </div>

        <Jested className="pb-hero-arc" draw />

        <div className="pb-hero-inner">
          <p className="pb-eyebrow">Správa &amp; prodej nemovitostí — Liberec, od roku 1994</p>

          <h1 id="pb-hero-title" className="pb-hero-title">
            <span className="pb-word">Rodinná</span>{" "}
            <span className="pb-word">liberecká</span>{" "}
            <span className="pb-word">agentura.</span>
          </h1>

          <p className="pb-hero-lead">
            Tři desítky let bydlíme pod Ještědem a staráme se o cizí střechy jako
            o vlastní. Od ohodnocení až po podpis smlouvy vás vede jeden člověk,
            kterého znáte jménem.
          </p>

          <dl className="pb-proof">
            <div className="pb-proof-item">
              <dd className="pb-proof-num">30</dd>
              <dt className="pb-proof-label">let na libereckém trhu</dt>
            </div>
            <div className="pb-proof-item">
              <dd className="pb-proof-num">7 000</dd>
              <dt className="pb-proof-label">spokojených klientů</dt>
            </div>
          </dl>

          <div className="pb-hero-cta">
            <a className="pb-btn" href="tel:+420608300152">
              Chci prodat nebo pronajmout
            </a>
            <span className="pb-hero-cta-note">
              Zavolejte — často jsme v terénu, návštěvu si rádi domluvíme dopředu.
            </span>
          </div>
        </div>
      </section>

      <section className="pb-services" aria-labelledby="pb-services-title">
        <div className="pb-section-head">
          <p className="pb-section-index">Sekce 01 — Co pro vás uděláme</p>
          <h2 id="pb-services-title" className="pb-section-title">
            Kompletní servis pod jednou střechou
          </h2>
          <p className="pb-section-sub">
            U prodeje ani pronájmu nezůstáváte na nic sami. Šest služeb, které do
            sebe zapadají — vezmeme to od začátku do konce.
          </p>
        </div>

        <ol className="pb-grid">
          {services.map((s) => (
            <li className="pb-cell" key={s.n}>
              <span className="pb-cell-mark" aria-hidden="true">
                <Jested className="pb-cell-arc" />
                <span className="pb-cell-num">{s.n}</span>
              </span>
              <h3 className="pb-cell-title">{s.title}</h3>
              <p className="pb-cell-body">{s.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="pb-about" aria-labelledby="pb-about-title">
        <div className="pb-about-grid">
          <div className="pb-about-text">
            <p className="pb-section-index">Sekce 02 — Kdo jsme</p>
            <h2 id="pb-about-title" className="pb-section-title">
              Jedna rodina, tři generace klientů
            </h2>
            <p className="pb-about-body">
              Jsme rodinná liberecká realitní agentura s více než třiceti lety
              zkušeností. Individuální přístup bereme jako samozřejmost — naším
              cílem je najít vhodné řešení pro každého, ať prodáváte panelák na
              sídlišti, nebo řešíte chalupu v Jizerkách.
            </p>
            <p className="pb-about-body">
              Za tu dobu nám dalo důvěru přes 7 000 spokojených klientů. Řadu
              domů jsme prodávali dvakrát — nejdřív rodičům, pak jejich dětem.
              To je zpětná vazba, kterou si nekoupíte.
            </p>
          </div>

          <aside className="pb-card" aria-label="Kontakt a otevírací doba">
            <Jested className="pb-card-arc" aria-hidden="true" />
            <h3 className="pb-card-title">Ozvěte se nám</h3>
            <dl className="pb-contact">
              <div className="pb-contact-row">
                <dt>Telefon</dt>
                <dd>
                  <a href="tel:+420608300152">+420 608 300 152</a>
                </dd>
              </div>
              <div className="pb-contact-row">
                <dt>E-mail</dt>
                <dd>
                  <a href="mailto:info@agenturaprobyt.cz">
                    info@agenturaprobyt.cz
                  </a>
                </dd>
              </div>
              <div className="pb-contact-row">
                <dt>Kancelář</dt>
                <dd>Na Okruhu 907/13, 460 01 Liberec</dd>
              </div>
              <div className="pb-contact-row">
                <dt>IČO</dt>
                <dd>25414488</dd>
              </div>
            </dl>
            <p className="pb-card-note">
              Velmi často býváme v terénu. Chcete-li nás zastihnout osobně,
              domluvme si schůzku předem telefonicky nebo e-mailem.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
