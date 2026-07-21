import { AiImage } from "./_ui";
import { CountUp } from "./motion";

export default function Page() {
  return (
    <main className="page">
      {/* ============================ HERO ============================ */}
      <section className="sec hero">
        <div className="wrap">
          <div className="wordmark">
            <svg className="wm-mark" viewBox="0 0 32 32" aria-hidden="true">
              <path
                className="wm-trace"
                d="M3 22 L3 12 L16 12 L16 6 M16 12 L29 12"
                fill="none"
              />
              <rect className="wm-sq" x="1" y="20" width="4" height="4" />
              <rect className="wm-sq" x="14" y="4" width="4" height="4" />
              <circle className="wm-dot" cx="16" cy="12" r="2.6" />
              <circle className="wm-dot2" cx="29" cy="12" r="2" />
            </svg>
            <span className="wm-name">DELNET</span>
            <span className="wm-tag">s.r.o. — elektromontáže</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">
                <span className="node node-sq" aria-hidden="true" />
                ELEKTROMONTÁŽE · ČESKÉ BUDĚJOVICE · OD 1998
              </p>
              <h1 className="hero-h1">
                Zapojíme dům i&nbsp;halu —{" "}
                <span className="hl">od jističe po Loxone.</span>
              </h1>
              <p className="lede">
                Delnet je jihočeská elektromontážní firma. Dvacet let taháme
                kabely, oživujeme rozvaděče a&nbsp;stavíme chytré elektroinstalace
                pro rodinné domy i&nbsp;průmysl. Jako Loxone Gold Partner umíme
                dům nejen zapojit, ale i&nbsp;naučit myslet.
              </p>
              <dl className="hero-spec">
                <div>
                  <dt>Zázemí</dt>
                  <dd>Loxone Gold Partner</dd>
                </div>
                <div>
                  <dt>Působnost</dt>
                  <dd>Jihočeský kraj</dd>
                </div>
                <div>
                  <dt>Nástup k&nbsp;opravě</dt>
                  <dd>druhý pracovní den</dd>
                </div>
              </dl>
            </div>

            <figure className="hero-fig">
              <AiImage
                src="/hero.webp"
                alt="Rozvaděč a chytrá elektroinstalace Loxone od firmy Delnet"
                className="hero-img"
              />
              <figcaption className="fig-legend">
                <span className="lg-node" aria-hidden="true" />
                Rozvaděč rodinného domu — silová i&nbsp;datová část v&nbsp;jednom
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* ========================= SLUŽBY / DVA OKRUHY ========================= */}
      <section className="sec services">
        <div className="wrap">
          <div className="leg" aria-hidden="true">
            <span className="leg-node" />
          </div>

          <div className="sec-head">
            <p className="eyebrow">
              <span className="node node-sq" aria-hidden="true" />
              01 — DVA OKRUHY, JEDNA FIRMA
            </p>
            <h2 className="sec-h2">Co u&nbsp;nás zapojíte</h2>
            <p className="sec-lead">
              Průmyslová hala a&nbsp;rodinný dům potřebují jiný kabel, jinou
              revizi a&nbsp;jiný plán. U&nbsp;nás oba okruhy vede stejná parta —
              napojíme vás na ten správný.
            </p>
          </div>

          <figure className="band-fig">
            <AiImage
              src="/section-1.webp"
              alt="Technici Delnet při montáži elektroinstalace"
              className="band-img"
            />
          </figure>

          <div className="tracks">
            <div className="track track-a">
              <p className="track-head">
                <span className="node node-sq bus" aria-hidden="true" />
                <span className="track-tag">BUS&nbsp;A</span>
                Pro firmy, průmysl a&nbsp;bytové domy
              </p>
              <ul className="track-list">
                <li>Průmyslové elektroinstalace a&nbsp;stavba rozvaděčů</li>
                <li>Elektroinstalace škol a&nbsp;bytových domů</li>
                <li>Revize, opravy a&nbsp;pravidelná údržba</li>
                <li>Zabezpečení objektů a&nbsp;areálů</li>
              </ul>
            </div>

            <div className="track track-b">
              <p className="track-head">
                <span className="node node-sq bus" aria-hidden="true" />
                <span className="track-tag">BUS&nbsp;B</span>
                Pro rodinné domy a&nbsp;domácnosti
              </p>
              <ul className="track-list">
                <li>Kompletní elektroinstalace novostaveb</li>
                <li>Inteligentní elektroinstalace Loxone</li>
                <li>Elektrické podlahové vytápění na chytré řízení</li>
                <li>Zabezpečení domu i&nbsp;chaty proti zlodějům</li>
              </ul>
            </div>
          </div>

          <p className="converge">
            <span className="node node-dot big" aria-hidden="true" />
            Oba okruhy se sbíhají u&nbsp;jednoho rozvaděče — napíšeme vám, co
            přesně potřebujete.
          </p>
        </div>
      </section>

      {/* ========================= DŮVĚRA / PROČ DELNET ========================= */}
      <section className="sec trust">
        <div className="wrap">
          <div className="leg dark" aria-hidden="true">
            <span className="leg-node" />
          </div>

          <div className="sec-head">
            <p className="eyebrow light">
              <span className="node node-sq" aria-hidden="true" />
              02 — PROČ DELNET
            </p>
            <h2 className="sec-h2">Dvacet let bez záloh předem</h2>
          </div>

          <div className="trust-grid">
            <div className="stats">
              <div className="stat">
                <span className="stat-num">
                  <CountUp to={20} />
                </span>
                <span className="stat-lab">let na jihočeském trhu</span>
              </div>
              <div className="stat">
                <span className="stat-num">
                  <CountUp to={5} />
                </span>
                <span className="stat-lab">let záruka na provedené dílo</span>
              </div>
              <div className="stat">
                <span className="stat-num">
                  <CountUp to={2} suffix="." />
                </span>
                <span className="stat-lab">pracovní den — nástup k&nbsp;opravě</span>
              </div>

              <p className="live-badge">
                <span className="live-dot" aria-hidden="true" />
                0&nbsp;Kč předem — platíte až za hotové a&nbsp;odzkoušené dílo
              </p>
            </div>

            <figure className="trust-fig">
              <AiImage
                src="/section-2.webp"
                alt="Chytrá domácnost řízená inteligentní elektroinstalací Loxone"
                className="trust-img"
              />
              <figcaption className="fig-legend light">
                <span className="lg-node" aria-hidden="true" />
                Loxone Gold Partner — certifikovaná chytrá elektroinstalace
              </figcaption>
            </figure>
          </div>

          <blockquote className="quote">
            <p>
              „Kvalitně zpracovaný projekt zaručil bezproblémovou instalaci
              a&nbsp;hlavně funkčnost celého topného systému. S&nbsp;prací
              techniků jsem byl velmi spokojen a&nbsp;firmu mohu jedině
              doporučit.“
            </p>
            <cite>
              <span className="node node-dot" aria-hidden="true" />
              Majitel, Rezidence Horní Věstonice
            </cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
