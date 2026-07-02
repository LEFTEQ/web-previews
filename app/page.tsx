export default function Page() {
  return (
    <main className="kb">
      {/* ===== HERO ===== */}
      <header className="kb-hero">
        <div className="kb-hero-inner">
          <div className="kb-brandline">
            <span className="kb-wordmark">
              Kolbaba<span className="kb-wordmark-dot">.</span>
            </span>
            <span className="kb-brand-tag">cukrárna · Brno</span>
          </div>

          <h1 className="kb-hero-title">
            <span className="kb-line kb-line-1">Dortová</span>
            <span className="kb-line kb-line-2">pohotovost</span>
            <span className="kb-line kb-line-3">
              <em>drží službu.</em>
            </span>
          </h1>

          <p className="kb-hero-lead">
            Zapomněli jste na narozeniny? Přijede návštěva a doma není nic
            sladkého? V Brně napečeme, naplníme a nazdobíme —
            <strong> dort i chlebíčky do druhého dne</strong>, expresně klidně
            ještě dnes.
          </p>

          <div className="kb-hero-cta">
            <a className="kb-btn kb-btn-solid" href="tel:+420">
              Zavolat pohotovost
            </a>
            <a className="kb-btn kb-btn-line" href="#nabidka">
              Co dnes pečeme
            </a>
          </div>

          <p className="kb-hero-note">
            Objednávky přijímáme denně do 17.00 — na zítřek jistota, na dnešek
            se domluvíme po telefonu.
          </p>
        </div>

        {/* Signature: piping line — cukrářská linka ze zdobicího sáčku */}
        <div className="kb-piping" aria-hidden="true">
          <svg
            viewBox="0 0 1200 160"
            preserveAspectRatio="none"
            className="kb-piping-svg"
          >
            <path
              className="kb-piping-path"
              d="M -10 120 Q 40 40 90 120 T 190 120 T 290 120 T 390 120 T 490 120 T 590 120 T 690 120 T 790 120 T 890 120 T 990 120 T 1090 120 T 1210 120"
              fill="none"
            />
            <path
              className="kb-piping-path kb-piping-path-thin"
              d="M -10 138 Q 40 78 90 138 T 190 138 T 290 138 T 390 138 T 490 138 T 590 138 T 690 138 T 790 138 T 890 138 T 990 138 T 1090 138 T 1210 138"
              fill="none"
            />
          </svg>
        </div>
      </header>

      {/* ===== NABÍDKA ===== */}
      <section className="kb-section kb-menu" id="nabidka" aria-labelledby="nabidka-h">
        <div className="kb-section-inner">
          <p className="kb-eyebrow">Pohotovostní nabídka</p>
          <h2 className="kb-h2" id="nabidka-h">
            Dvě věci umíme rychle.
            <br />A pořádně.
          </h2>

          <div className="kb-menu-grid">
            <article className="kb-card kb-card-dort">
              <div className="kb-card-head">
                <h3 className="kb-card-title">Dort</h3>
                <span className="kb-card-time">do 24 h</span>
              </div>
              <p className="kb-card-text">
                Klasické korpusy, poctivé krémy — žádný fondán přes celý dort,
                pokud si ho výslovně nepřejete. Nápis a jednoduchou dekoraci
                zvládneme i na počkání.
              </p>
              <ul className="kb-card-list">
                <li>
                  <span>Šlehačkový s ovocem</span>
                  <span className="kb-price">od 590 Kč</span>
                </li>
                <li>
                  <span>Čokoládový pařížský</span>
                  <span className="kb-price">od 690 Kč</span>
                </li>
                <li>
                  <span>Máslový s nápisem na přání</span>
                  <span className="kb-price">od 650 Kč</span>
                </li>
                <li>
                  <span>Dětský s figurkou</span>
                  <span className="kb-price">od 790 Kč</span>
                </li>
              </ul>
              <p className="kb-card-foot">
                Velikosti od 12 do 40 porcí. Bezlepkový korpus po domluvě den
                předem.
              </p>
            </article>

            <article className="kb-card kb-card-chleb">
              <div className="kb-card-head">
                <h3 className="kb-card-title">Chlebíčky</h3>
                <span className="kb-card-time">do 3 h</span>
              </div>
              <p className="kb-card-text">
                Na oslavu, poradu i pohřební hostinu. Mažeme na čerstvou veku,
                obkládáme ráno — chlebíček od nás vydrží pěkný celý den.
              </p>
              <ul className="kb-card-list">
                <li>
                  <span>Šunkový s bramborovým salátem</span>
                  <span className="kb-price">32 Kč</span>
                </li>
                <li>
                  <span>Sýrový s vejcem</span>
                  <span className="kb-price">30 Kč</span>
                </li>
                <li>
                  <span>Herkulesový s okurkou</span>
                  <span className="kb-price">34 Kč</span>
                </li>
                <li>
                  <span>Lososový s křenovou pěnou</span>
                  <span className="kb-price">42 Kč</span>
                </li>
              </ul>
              <p className="kb-card-foot">
                Objednávka od 10 kusů. Nad 50 kusů rozvezeme po Brně zdarma.
              </p>
            </article>
          </div>

          <div className="kb-express">
            <p className="kb-express-label">Expresní režim</p>
            <p className="kb-express-text">
              Hoří to? Zavolejte do 11.00 a hotový šlehačkový dort s nápisem si
              vyzvednete <strong>tentýž den odpoledne</strong>. Příplatek 200 Kč
              — a máte po starostech.
            </p>
          </div>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="kb-section kb-trust" aria-labelledby="trust-h">
        <div className="kb-section-inner">
          <p className="kb-eyebrow kb-eyebrow-light">Proč Kolbaba</p>
          <h2 className="kb-h2 kb-h2-light" id="trust-h">
            Cukrárna, kam Brno chodí,
            <br />
            když nesmí nic zkazit.
          </h2>

          <div className="kb-trust-grid">
            <div className="kb-trust-item">
              <p className="kb-trust-num">6.30</p>
              <p className="kb-trust-desc">
                Ráno zapínáme trouby. Co si odpoledne odnesete, se peklo ten
                den — ne včera, ne z mrazáku.
              </p>
            </div>
            <div className="kb-trust-item">
              <p className="kb-trust-num">3 suroviny</p>
              <p className="kb-trust-desc">
                Máslo, smetana, vejce. Základ, ze kterého se nedá šidit — proto
                naše krémy chutnají jako od babičky.
              </p>
            </div>
            <div className="kb-trust-item">
              <p className="kb-trust-num">Brno-střed</p>
              <p className="kb-trust-desc">
                Vyzvednete cestou z práce, nebo dovezeme až ke dveřím po celém
                Brně a okolí do 20 km.
              </p>
            </div>
          </div>

          <div className="kb-quotes">
            <figure className="kb-quote">
              <blockquote>
                „Ve čtvrtek večer jsem zjistila, že máma slaví v pátek
                sedmdesátiny. V poledne jsem si odnášela dort s marcipánovou
                růží. Zachránili mi rodinnou pověst.“
              </blockquote>
              <figcaption>— Jana K., Brno-Žabovřesky</figcaption>
            </figure>
            <figure className="kb-quote">
              <blockquote>
                „Chlebíčky na firemní vánoční večírek pro 80 lidí. Přivezli
                přesně, vypadaly stejně dobře v šest večer jako v poledne.
                Objednáváme každý rok.“
              </blockquote>
              <figcaption>— Petr M., kancelář na Veveří</figcaption>
            </figure>
          </div>
        </div>
      </section>
    </main>
  );
}
