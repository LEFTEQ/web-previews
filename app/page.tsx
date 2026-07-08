import type { CSSProperties } from "react";

export default function Page() {
  const rozvadece = [
    {
      code: "NN / VN",
      title: "Rozváděče na míru",
      body: "Silové rozváděče do 4000 A, kompenzační, okruhové i staveništní. Elektroměrové a měřicí rozváděče SM, bytové rozvodnice pro obchodní centra i technologické skříně pro stroje.",
    },
    {
      code: "TS",
      title: "Trafostanice",
      body: "Provozování, revize a kontroly trafostanic a energetických zařízení. Prodej a servis kioskových trafostanic Marbeton — od dodávky až po pravidelný dohled.",
    },
    {
      code: "Fe",
      title: "Zámečnická výroba",
      body: "Atypické skříně z oceli, nerezu i aluzinku. Nosné konstrukce pro energetiku, brány, branky, zábradlí a ploty. Střih a ohyb plechu do 5 mm.",
    },
    {
      code: "Ø",
      title: "Servis a měření",
      body: "Revize elektrických zařízení a spotřebičů, elektromontáže. Dálkové měření oteplení laserovým teploměrem a monitoring zařízení přes GSM.",
    },
  ];

  const specs = [
    { k: "4000 A", v: "nejvyšší proud silových rozváděčů" },
    { k: "5 mm", v: "tloušťka plechu na střih a ohyb" },
    { k: "Marbeton", v: "servis kioskových trafostanic" },
    { k: "FVE · BPS", v: "dispečerské řízení a připojení" },
  ];

  return (
    <main className="pe">
      <header className="pe-top">
        <a className="pe-mark" href="#" aria-label="Pro Energo servis — úvod">
          <span className="pe-mark-a">PRO&nbsp;ENERGO</span>
          <span className="pe-mark-b">servis · Plzeň</span>
        </a>
        <nav className="pe-nav" aria-label="Hlavní">
          <a href="#produkce">Produkce</a>
          <a href="#duvera">O nás</a>
          <a className="pe-tel" href="tel:+420602157928">+420&nbsp;602&nbsp;157&nbsp;928</a>
        </nav>
      </header>

      <section className="pe-hero" aria-labelledby="pe-hero-h">
        <div className="pe-hero-grid">
          <div className="pe-hero-text">
            <p className="pe-eyebrow">Výroba rozváděčů NN a VN · Plzeň-Černice</p>
            <h1 id="pe-hero-h">
              Rozváděče, co
              <br />
              <span className="pe-hl">unesou napětí.</span>
            </h1>
            <p className="pe-lead">
              Ve dílně v Černicích stavíme silové rozváděče do 4000 A, elektroměrové skříně
              i atypické konstrukce z nerezu. K tomu provozujeme trafostanice a děláme revize —
              od projektu po pravidelný servis.
            </p>
            <div className="pe-hero-cta">
              <a className="pe-btn" href="tel:+420602157928">Zavolat do dílny</a>
              <a className="pe-btn pe-btn-ghost" href="mailto:obchod@elektrom.cz">Poslat poptávku</a>
            </div>
          </div>
          <figure className="pe-hero-fig">
            <img src="/hero.webp" alt="Silový rozváděč vyrobený v dílně Pro Energo servis" loading="eager" />
            <figcaption>Silový rozváděč · dílna Černice</figcaption>
          </figure>
        </div>

        <dl className="pe-specs" aria-label="Parametry">
          {specs.map((s) => (
            <div className="pe-spec" key={s.k}>
              <dt>{s.k}</dt>
              <dd>{s.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="pe-sec" id="produkce" aria-labelledby="pe-prod-h">
        <div className="pe-sec-head">
          <p className="pe-eyebrow">Co u nás vzniká</p>
          <h2 id="pe-prod-h">Čtyři dílny pod jednou střechou</h2>
        </div>
        <div className="pe-prod">
          <figure className="pe-prod-fig">
            <img src="/section-1.webp" alt="Výroba a montáž rozváděčů v dílně Pro Energo servis" loading="lazy" />
          </figure>
          <ul className="pe-cards">
            {rozvadece.map((r) => (
              <li className="pe-card" key={r.title}>
                <span className="pe-card-code" aria-hidden="true">{r.code}</span>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="pe-sec pe-sec-alt" id="duvera" aria-labelledby="pe-about-h">
        <div className="pe-about">
          <figure className="pe-about-fig">
            <img src="/section-2.webp" alt="Trafostanice a energetické zařízení ve správě Pro Energo servis" loading="lazy" />
          </figure>
          <div className="pe-about-text">
            <p className="pe-eyebrow">Proč Pro Energo servis</p>
            <h2 id="pe-about-h">Od návrhu po revizi to zůstává u jednoho stolu</h2>
            <p className="pe-para">
              Rozváděč nakreslíme, vyrobíme, zapojíme a pak ho i provozujeme. Díky vlastní zámečnické
              dílně nejsme závislí na dodavatelích skříní — atypický kus z nerezu nebo aluzinku
              uděláme přesně na míru vašeho zařízení.
            </p>
            <ul className="pe-list">
              <li><strong>Silnoproud i technologie.</strong> Rozváděče pro stroje, budovy, stavby i energetiku.</li>
              <li><strong>Provoz a dohled.</strong> Revize, kontroly a monitoring zařízení přes GSM.</li>
              <li><strong>Fotovoltaika a bioplyn.</strong> Dispečerské řízení FVE a BPS včetně připojení na dispečink.</li>
            </ul>
            <div className="pe-contact">
              <div>
                <span className="pe-contact-l">Dílna a kancelář</span>
                <span>K Cihelnám 101/72, 326 00 Plzeň-Černice</span>
              </div>
              <div>
                <span className="pe-contact-l">Obchod</span>
                <a href="mailto:obchod@elektrom.cz">obchod@elektrom.cz</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
