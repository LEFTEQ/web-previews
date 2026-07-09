import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pool">
      {/* HERO — the lamella slat is the thesis */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Bazén se zataženým lamelovým zakrytím Safepool v barvě antracit"
            className="hero-img"
          />
          <div className="hero-scrim" aria-hidden="true" />
        </div>

        <div className="hero-top">
          <a className="wordmark" href="#top" id="top">
            <span className="wordmark-slats" aria-hidden="true">
              <i /><i /><i />
            </span>
            <span className="wordmark-text">
              TP&nbsp;plus&nbsp;CL
              <em>lamelové zakrytí bazénů</em>
            </span>
          </a>
          <a className="hero-call" href="tel:+420777646062">
            <span>Zavolat</span> +420 777 646 062
          </a>
        </div>

        <div className="hero-body">
          <p className="eyebrow">Výroba a montáž na klíč · Úštěk od roku 2008</p>
          <h1 className="hero-title">
            Lamela po lamele<br />
            zakryjeme<br />
            <span className="accented">váš&nbsp;bazén.</span>
          </h1>
          <p className="hero-lead">
            Vyrábíme a montujeme lamelová zakrytí Safepool přímo od výrobce.
            Voda zůstává teplá a čistá, děti a mazlíčci v bezpečí a koupací
            sezóna se protáhne o týdny.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href="tel:+420777646062">
              Zavolat a poradit se
            </a>
            <a className="btn btn-ghost" href="mailto:bazeny.cl@gmail.com">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* the physical slat rolling up — a cross-section legend */}
        <div className="hero-spec" aria-label="Profil lamely">
          <div className="spec-code">PCTR 60 × 14</div>
          <div className="spec-name">Antracit</div>
          <div className="spec-note">plovoucí profil · UV stabilní</div>
        </div>
      </header>

      {/* SECTION 1 — four reasons, framed as what the slats do */}
      <section className="reasons" aria-labelledby="reasons-h">
        <div className="section-head">
          <p className="eyebrow">Co lamely umí</p>
          <h2 id="reasons-h">Jedno zakrytí, čtyři starosti méně</h2>
        </div>

        <ol className="reason-grid">
          <li className="reason">
            <span className="reason-num">01</span>
            <h3>Bezpečno nad hladinou</h3>
            <p>
              Zatažené lamely unesou váhu — dítě ani pes se přes ně
              nedostanou do vody. Ovládáte je klíčem nebo automaticky.
            </p>
          </li>
          <li className="reason">
            <span className="reason-num">02</span>
            <h3>Teplo, které neuteče</h3>
            <p>
              Uzavřená hladina drží teplo přes noc. Nižší náklady na ohřev
              a voda příjemná i po chladnějším dni.
            </p>
          </li>
          <li className="reason">
            <span className="reason-num">03</span>
            <h3>Čistá voda bez práce</h3>
            <p>
              Listí, prach ani hmyz se do bazénu nedostanou. Méně chemie,
              méně vysávání, delší koupací sezóna.
            </p>
          </li>
          <li className="reason">
            <span className="reason-num">04</span>
            <h3>Vypadá to dobře</h3>
            <p>
              Lamely v barvě antracit srolují do kompaktního válce.
              Žádná plachta, žádné shrnování — jen čistá linka u bazénu.
            </p>
          </li>
        </ol>

        <figure className="reasons-figure">
          <img
            src="/section-1.webp"
            alt="Detail lamelového zakrytí bazénu při zatahování"
            className="figure-img"
          />
          <figcaption>
            Zakrytí Safepool na míru rozměru vašeho bazénu — obdélník,
            řecký tvar i oblouk.
          </figcaption>
        </figure>
      </section>

      {/* SECTION 2 — trust: workshop, references, place */}
      <section className="about" aria-labelledby="about-h">
        <figure className="about-figure">
          <img
            src="/section-2.webp"
            alt="Realizace lamelového zakrytí bazénu od TP plus CL"
            className="figure-img"
          />
        </figure>

        <div className="about-body">
          <p className="eyebrow">O nás · Úštěk</p>
          <h2 id="about-h">
            Od roku 2008 stavíme zakrytí, která vydrží
          </h2>
          <p className="about-lead">
            Nejsme přeprodejci. Lamely Safepool vyrábíme a montujeme sami —
            od zaměření bazénu přes výrobu profilů až po nastavení pohonu.
            Přijedeme, změříme a odejdeme, až všechno funguje.
          </p>

          <dl className="facts">
            <div className="fact">
              <dt>Zakázky</dt>
              <dd>na míru každému bazénu — nic z katalogu na sílu</dd>
            </div>
            <div className="fact">
              <dt>Normy</dt>
              <dd>splňujeme bezpečnostní normy pro zakrytí bazénů</dd>
            </div>
            <div className="fact">
              <dt>Servis</dt>
              <dd>montáž i pozdější údržbu řešíme sami, do telefonu</dd>
            </div>
          </dl>

          <ul className="quotes">
            <li>
              <p>„Ušetřili nám spoustu času i peněz — bazén se čistí sám.“</p>
              <span>Zákazník, rodinný dům</span>
            </li>
            <li>
              <p>„Perfektní ochrana bazénu, montáž během jednoho dne.“</p>
              <span>Zákazník, Litoměřicko</span>
            </li>
          </ul>

          <address className="place">
            <strong>TP plus CL, s.r.o.</strong>
            Úštěk 12, 411&nbsp;45 Úštěk<br />
            <a href="tel:+420777646062">+420 777 646 062</a> ·{" "}
            <a href="mailto:bazeny.cl@gmail.com">bazeny.cl@gmail.com</a>
          </address>
        </div>
      </section>
    </main>
  );
}
