import type { CSSProperties } from "react";

export default function Page() {
  const sluzby = [
    {
      cislo: "01",
      nazev: "Kadeřnictví",
      popis:
        "Střih, barva a styling na míru tvaru vaší hlavy i typu vlasů. Pracujeme s L’Oréal Professionnel a Kérastase, radíme s odstínem podle pleti i sezóny.",
      detail: "Střih · barvení · melír · balayage · styling",
    },
    {
      cislo: "02",
      nazev: "Kosmetika",
      popis:
        "Ošetření pleti podle její aktuální kondice — čištění, hydratace, regenerace. Odcházíte rozjasněná a odpočatá, s viditelným výsledkem.",
      detail: "Čištění · hydratace · regenerace · úprava obočí",
    },
    {
      cislo: "03",
      nazev: "Manikúra",
      popis:
        "Přirozeně upravené nehty pro každý den i výjimečné chvíle. Elegantní odstíny CND a poctivá péče o nehtovou pokožku.",
      detail: "Manikúra · gel lak · péče o nehty",
    },
  ];

  const cenik = [
    { delka: "Krátké vlasy", cena: "900 Kč" },
    { delka: "Polodlouhé vlasy", cena: "1 200 Kč" },
    { delka: "Dlouhé vlasy", cena: "1 550 Kč" },
  ];

  return (
    <main className="su">
      {/* HERO */}
      <section className="su-hero" aria-labelledby="su-hero-title">
        <header className="su-nav">
          <a href="#" className="su-wordmark" aria-label="Salon Unique, úvod">
            <span className="su-wordmark-salon">Salon</span>
            <span className="su-wordmark-unique">Unique</span>
          </a>
          <nav className="su-nav-links" aria-label="Hlavní">
            <a href="#sluzby">Služby &amp; ceník</a>
            <a href="#salon">O salonu</a>
            <a href="#kontakt" className="su-nav-cta">Rezervace</a>
          </nav>
        </header>

        <div className="su-hero-grid">
          <p className="su-eyebrow">Kadeřnictví v centru Prahy · od roku 2000</p>
          <h1 id="su-hero-title" className="su-hero-title">
            <span className="su-line su-line-1">Střih,</span>
            <span className="su-line su-line-2">který sedne</span>
            <span className="su-line su-line-3">vaší <em>osobnosti</em></span>
          </h1>
          <p className="su-hero-lead">
            Pár kroků od Národní třídy stříháme, barvíme a stylujeme s klidem
            a s prémiovými značkami. Domluvíme se plynule i anglicky.
          </p>
          <div className="su-hero-actions">
            <a href="#kontakt" className="su-btn su-btn-primary">Objednat termín</a>
            <a href="#sluzby" className="su-btn su-btn-ghost">Prohlédnout ceník</a>
          </div>
        </div>

        <div className="su-hero-strand" aria-hidden="true">
          <svg viewBox="0 0 200 900" preserveAspectRatio="xMidYMid slice">
            <g fill="none" strokeLinecap="round">
              <path className="su-str su-str-a" d="M60 -20 C 20 150, 120 260, 70 430 C 30 600, 130 700, 80 920" />
              <path className="su-str su-str-b" d="M100 -20 C 70 160, 160 250, 110 440 C 70 620, 160 710, 120 920" />
              <path className="su-str su-str-c" d="M140 -20 C 110 150, 190 270, 150 430 C 110 590, 200 700, 160 920" />
            </g>
          </svg>
        </div>
      </section>

      {/* SLUŽBY & CENÍK */}
      <section id="sluzby" className="su-sluzby" aria-labelledby="su-sluzby-title">
        <div className="su-section-head">
          <p className="su-eyebrow su-eyebrow-dark">Naše služby</p>
          <h2 id="su-sluzby-title">Od vlasů až po nehty — v rukou profesionálů</h2>
        </div>

        <div className="su-sluzby-grid">
          <ul className="su-sluzby-list">
            {sluzby.map((s) => (
              <li key={s.cislo} className="su-sluzba">
                <span className="su-sluzba-num">{s.cislo}</span>
                <div className="su-sluzba-body">
                  <h3>{s.nazev}</h3>
                  <p>{s.popis}</p>
                  <p className="su-sluzba-detail">{s.detail}</p>
                </div>
              </li>
            ))}
          </ul>

          <aside className="su-cenik" aria-label="Ceník střihu a barvy">
            <img
              src="/section-1.webp"
              alt="Interiér Salonu Unique — kadeřnické křeslo a zrcadlo"
              className="su-cenik-img"
              loading="lazy"
            />
            <div className="su-cenik-card">
              <p className="su-cenik-akce">Sleva 30 % na Malibu C ke střihu i barvě</p>
              <h3>Střih &amp; barva</h3>
              <dl className="su-cenik-list">
                {cenik.map((c) => (
                  <div key={c.delka} className="su-cenik-row">
                    <dt>{c.delka}</dt>
                    <dd>{c.cena}</dd>
                  </div>
                ))}
              </dl>
              <p className="su-cenik-note">
                Dárkový certifikát v libovolné částce od 500 Kč — pošleme PDF
                e-mailem nebo připravíme k vyzvednutí v salonu.
              </p>
            </div>
          </aside>
        </div>
      </section>

      {/* O SALONU / DŮVĚRA */}
      <section id="salon" className="su-salon" aria-labelledby="su-salon-title">
        <div className="su-salon-grid">
          <div className="su-salon-media">
            <img
              src="/section-2.webp"
              alt="Zuzana, majitelka a top stylistka Salonu Unique, při práci"
              loading="lazy"
            />
            <span className="su-salon-since">od roku 2000</span>
          </div>

          <div className="su-salon-text">
            <p className="su-eyebrow su-eyebrow-dark">O salonu Unique</p>
            <h2 id="su-salon-title">
              Historické centrum Prahy, útulno a čas jen pro vás
            </h2>
            <p>
              Najdete nás v klidné Konviktské ulici, pár kroků od Národní
              třídy. Spojujeme kreativitu s individuální péčí — chceme, abyste
              odcházeli s účesem, který podtrhne vaši osobnost a dodá vám
              sebevědomí. Zázemí připravujeme pro české klientky i pro
              návštěvníky ze zahraničí.
            </p>

            <blockquote className="su-quote">
              <p>
                „Nechte se unést do světa krásy a pojďme společně vytvořit
                jedinečný styl, který respektuje vaši osobnost.“
              </p>
              <footer>
                <strong>Zuzana</strong> · majitelka &amp; top stylistka
              </footer>
            </blockquote>

            <ul className="su-znacky" aria-label="Značky, se kterými pracujeme">
              <li>L’Oréal Professionnel</li>
              <li>Kérastase</li>
              <li>CND</li>
              <li>Carelika</li>
            </ul>

            <div className="su-reference">
              <div className="su-hodnoceni">
                <span className="su-stars" aria-hidden="true">★★★★★</span>
                <span className="su-hodnoceni-num">4,6</span>
                <span className="su-hodnoceni-src">Google hodnocení</span>
              </div>
              <p className="su-reference-text">
                Mezi dlouholeté klientky patří i herečka Zuzana Vejvodová —
                oceňuje osobní přístup, preciznost a přirozený styl.
              </p>
            </div>
          </div>
        </div>

        <div id="kontakt" className="su-kontakt">
          <div className="su-kontakt-col">
            <p className="su-eyebrow su-eyebrow-dark">Najdete nás</p>
            <p className="su-adresa">Konviktská 24, Praha 1</p>
            <p className="su-otevreno">
              Po–Pá 8–20 h · So 9–14 h
            </p>
          </div>
          <div className="su-kontakt-col">
            <a className="su-tel" href="tel:+420733601770">+420 733 601 770</a>
            <a className="su-mail" href="mailto:info@salonunique.cz">
              info@salonunique.cz
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
