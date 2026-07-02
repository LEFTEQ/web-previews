export default function Page() {
  return (
    <main className="reha">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero-top">
          <div className="wordmark" aria-label="Ortopedie Liberec">
            <span className="wordmark-orto">ORTOPEDIE</span>
            <span className="wordmark-lbc">Liberec</span>
          </div>
          <nav className="hero-nav" aria-label="Rychlé odkazy">
            <a href="#rehabilitace">Rehabilitace</a>
            <a href="#tym">Náš tým</a>
            <a className="hero-nav-tel" href="tel:+420485100100">485 100 100</a>
          </nav>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">Rehabilitační péče · Liberec</p>
          <h1 className="hero-title">
            <span className="hero-line hero-line-1">Rozhýbeme,</span>
            <span className="hero-line hero-line-2">co&nbsp;bolí.</span>
          </h1>
          <p className="hero-lead">
            Fyzioterapie po&nbsp;úrazech, operacích kloubů a&nbsp;při chronických bolestech zad.
            Od&nbsp;dubna 2026 nás najdete v&nbsp;nové budově kliniky <strong>Movela</strong> —
            stejní terapeuti, stejná čísla, víc prostoru pro&nbsp;vaše cvičení.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420485100100">Zavolat a&nbsp;objednat se</a>
            <a className="btn btn-ghost" href="mailto:objednani@ortopedie-liberec.cz">Napsat e-mail</a>
          </div>
        </div>

        {/* Signature: rozsahoměr — goniometrická stupnice fyzioterapeuta */}
        <div className="gonio" aria-hidden="true">
          <svg viewBox="0 0 560 560" className="gonio-svg">
            <g className="gonio-ticks">
              <line x1="560" y1="560" x2="560" y2="40" />
              <line x1="560" y1="560" x2="459" y2="57" />
              <line x1="560" y1="560" x2="365" y2="107" />
              <line x1="560" y1="560" x2="284" y2="186" />
              <line x1="560" y1="560" x2="221" y2="290" />
              <line x1="560" y1="560" x2="181" y2="409" />
              <line x1="560" y1="560" x2="167" y2="535" />
            </g>
            <path className="gonio-arc gonio-arc-1" d="M 560 160 A 400 400 0 0 0 216 358" />
            <path className="gonio-arc gonio-arc-2" d="M 560 280 A 280 280 0 0 0 319 419" />
            <path className="gonio-arc gonio-arc-3" d="M 560 400 A 160 160 0 0 0 422 480" />
            <line className="gonio-arm" x1="560" y1="560" x2="120" y2="330" />
            <circle className="gonio-pivot" cx="560" cy="560" r="14" />
            <circle className="gonio-dot" cx="120" cy="330" r="9" />
          </svg>
          <p className="gonio-label">flexe 0–120° · týden po týdnu</p>
        </div>

        <div className="hero-notice">
          <span className="hero-notice-badge">Stěhujeme se</span>
          <p>
            Do&nbsp;31.&nbsp;3.&nbsp;2026 ordinujeme na&nbsp;stávajících adresách.
            Nové termíny na&nbsp;klinice Movela objednáváme od&nbsp;druhé poloviny dubna.
          </p>
        </div>
      </header>

      {/* ---------- SEKCE: REHABILITACE ---------- */}
      <section className="care" id="rehabilitace">
        <div className="section-head">
          <h2>S&nbsp;čím vám pomůžeme</h2>
          <p>
            Každá terapie začíná vyšetřením a&nbsp;změřením rozsahu pohybu.
            Plán cvičení dostanete na&nbsp;papíře i&nbsp;do&nbsp;telefonu — víte přesně, co&nbsp;doma dělat.
          </p>
        </div>

        <div className="care-grid">
          <article className="care-card">
            <div className="care-deg">0–90°</div>
            <h3>Po operaci kolene a&nbsp;kyčle</h3>
            <p>
              Návrat k&nbsp;chůzi po&nbsp;endoprotéze nebo plastice vazu. První týdny vedeme
              rozsah pohybu opatrně, pak přidáváme sílu a&nbsp;stabilitu.
            </p>
            <p className="care-meta">obvykle 8–12 týdnů · 2× týdně</p>
          </article>

          <article className="care-card">
            <div className="care-deg">0–180°</div>
            <h3>Rameno po&nbsp;úrazu</h3>
            <p>
              Ztuhlé rameno po&nbsp;zlomenině, vykloubení či&nbsp;artroskopii. Mobilizace,
              měkké techniky a&nbsp;cvičení s&nbsp;therabandem, dokud ruku nezvednete bez&nbsp;bolesti.
            </p>
            <p className="care-meta">obvykle 6–10 týdnů · 1–2× týdně</p>
          </article>

          <article className="care-card">
            <div className="care-deg">každý den</div>
            <h3>Bolesti zad a&nbsp;krční páteře</h3>
            <p>
              Sedavá práce, blokády, vystřelování do&nbsp;nohy. Najdeme příčinu,
              uvolníme svalové napětí a&nbsp;naučíme vás tři cviky, které skutečně zvládnete.
            </p>
            <p className="care-meta">první úleva často po&nbsp;3–4 návštěvách</p>
          </article>

          <article className="care-card">
            <div className="care-deg">na&nbsp;míru</div>
            <h3>Fyzikální terapie</h3>
            <p>
              Ultrazvuk, elektroléčba, magnetoterapie a&nbsp;laser jako doplněk cvičení.
              V&nbsp;nové budově Movela vše na&nbsp;jednom patře, bez&nbsp;přebíhání.
            </p>
            <p className="care-meta">na&nbsp;doporučení lékaře i&nbsp;bez&nbsp;něj</p>
          </article>
        </div>
      </section>

      {/* ---------- SEKCE: TÝM / DŮVĚRA ---------- */}
      <section className="trust" id="tym">
        <div className="trust-inner">
          <div className="trust-text">
            <h2>Stejný tým, nová klinika</h2>
            <p>
              Rehabilitaci v&nbsp;Ortopedii Liberec vedou fyzioterapeuti, kteří s&nbsp;našimi
              ortopedy spolupracují roky. Operatér a&nbsp;terapeut si o&nbsp;vašem koleni
              řeknou osobně — ne&nbsp;přes tři razítka.
            </p>
            <p>
              Od&nbsp;dubna 2026 se celá péče stěhuje do&nbsp;nové budovy kliniky
              <strong> Movela</strong> v&nbsp;Liberci: větší tělocvična, moderní přístroje
              a&nbsp;ordinace, čekárna, kde se dá&nbsp;dýchat.
            </p>
            <ul className="trust-list">
              <li><span>25+ let</span> ortopedické a&nbsp;rehabilitační praxe v&nbsp;Liberci</li>
              <li><span>Návaznost</span> na&nbsp;operativu — terapeut zná váš operační protokol</li>
              <li><span>Smlouvy</span> se&nbsp;všemi hlavními zdravotními pojišťovnami</li>
            </ul>
          </div>

          <div className="trust-quotes">
            <figure className="quote">
              <blockquote>
                „Po&nbsp;výměně kyčle jsem se bál každého schodu. Za&nbsp;deset týdnů jsem
                vyšel na&nbsp;Ještěd. Pěšky.“
              </blockquote>
              <figcaption>pan Miroslav, 64&nbsp;let, Liberec-Ruprechtice</figcaption>
            </figure>
            <figure className="quote">
              <blockquote>
                „Konečně mi někdo neřekl jen ‚cvičte‘, ale ukázal jak. Cviky mám
                v&nbsp;telefonu a&nbsp;záda drží.“
              </blockquote>
              <figcaption>paní Jana, 41&nbsp;let, Vratislavice</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
