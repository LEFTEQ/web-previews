import React from "react";

export default function Page() {
  return (
    <main className="sol">
      {/* HERO */}
      <header className="sol-hero">
        <nav className="sol-nav" aria-label="Hlavní navigace">
          <a className="sol-brand" href="#top" aria-label="Solárium Timpo Olomouc">
            <span className="sol-brand-mark" aria-hidden="true">☀</span>
            <span className="sol-brand-name">
              Solárium <em>Timpo</em>
            </span>
          </a>
          <ul className="sol-navlinks">
            <li><a href="#nabidka">Trubice &amp; ceník</a></li>
            <li><a href="#duvera">Otevírací doba</a></li>
            <li><a href="#kontakt">Kde nás najdete</a></li>
          </ul>
          <a className="sol-cta-nav" href="tel:+420585414250">585 414 250</a>
        </nav>

        <div className="sol-hero-grid" id="top">
          <div className="sol-hero-copy">
            <p className="sol-eyebrow">Solárium v O.D. Timpo · Olomouc-Neředín</p>
            <h1 className="sol-title">
              Deset minut,<br />
              a máš léto<br />
              <span className="sol-title-accent">i&nbsp;v&nbsp;listopadu.</span>
            </h1>
            <p className="sol-lead">
              Výkonné trubice, čerstvě proměněné lampy a klidná kabina hned
              vedle fitka. Přijdeš, lehneš si, odejdeš opálená. Bez objednání,
              minutu od tramvaje.
            </p>
            <div className="sol-hero-actions">
              <a className="sol-btn" href="tel:+420585414250">Zavolat a přijít</a>
              <a className="sol-btn sol-btn-ghost" href="#nabidka">Kolik stojí minuta</a>
            </div>
            <dl className="sol-facts">
              <div>
                <dt>Minuta opalování</dt>
                <dd>od 7 Kč</dd>
              </div>
              <div>
                <dt>Lampy měníme</dt>
                <dd>po 600 hod.</dd>
              </div>
              <div>
                <dt>Multisport</dt>
                <dd>bereme</dd>
              </div>
            </dl>
          </div>

          <figure className="sol-hero-media">
            <img
              src="/hero.webp"
              alt="Rozsvícená solární kabina se svisle uspořádanými UV trubicemi"
              width={880}
              height={1040}
            />
            <figcaption>Kabina Ergoline · svislé i lehací opalování</figcaption>
          </figure>
        </div>
      </header>

      {/* NABÍDKA / CENÍK */}
      <section className="sol-section" id="nabidka" aria-labelledby="nabidka-h">
        <div className="sol-section-head">
          <p className="sol-eyebrow sol-eyebrow--dark">Ceník podle minut</p>
          <h2 id="nabidka-h" className="sol-h2">
            Platíš jen čas pod lampou
          </h2>
          <p className="sol-section-sub">
            Žádné balíčky, které nevyužiješ. Nastavíme minutáž podle tvého typu
            pleti a poradíme, kdy přidat a kdy ubrat.
          </p>
        </div>

        <div className="sol-cards">
          <article className="sol-card">
            <span className="sol-card-num" aria-hidden="true">1–5</span>
            <h3>Rozjezd</h3>
            <p className="sol-price">7 Kč <span>/ minuta</span></p>
            <p className="sol-card-text">
              Krátké minuty na první návštěvy a světlou pleť. Pleť zvykáme
              postupně, ať se neuvaříš hned první den.
            </p>
          </article>
          <article className="sol-card sol-card--hot">
            <span className="sol-card-num" aria-hidden="true">6–12</span>
            <h3>Klasika</h3>
            <p className="sol-price">6 Kč <span>/ minuta</span></p>
            <p className="sol-card-text">
              Nejčastější volba. Deset minut dvakrát týdně a za tři návštěvy
              je poznat rozdíl. Sem míří permanentky.
            </p>
          </article>
          <article className="sol-card">
            <span className="sol-card-num" aria-hidden="true">15+</span>
            <h3>Před dovolenou</h3>
            <p className="sol-price">5 Kč <span>/ minuta</span></p>
            <p className="sol-card-text">
              Základ, se kterým na pláži nezčervenáš hned první poledne.
              Delší minuty výhodněji, permanentka se vyplatí.
            </p>
          </article>
        </div>

        <div className="sol-media-strip">
          <img
            src="/section-1.webp"
            alt="Detail zapnutých UV trubic solária s teplým září"
            width={1200}
            height={620}
          />
          <div className="sol-media-note">
            <p className="sol-eyebrow sol-eyebrow--dark">Poctivé lampy</p>
            <p>
              Trubice hlídáme na hodiny a měníme po 600 hodinách provozu —
              vyčerpaná lampa neopálí, jen zbytečně spálí a připraví o čas.
              U nás víš, že svítí naplno.
            </p>
            <p className="sol-note-small">
              Kosmetika na opalování a hydratace k dostání u obsluhy ve fitness
              baru hned vedle.
            </p>
          </div>
        </div>
      </section>

      {/* DŮVĚRA / OTEVÍRAČKA / KONTAKT */}
      <section className="sol-trust" id="duvera" aria-labelledby="duvera-h">
        <div className="sol-trust-grid">
          <figure className="sol-trust-media">
            <img
              src="/section-2.webp"
              alt="Recepce solária a fitness baru v O.D. Timpo v Olomouci"
              width={860}
              height={720}
            />
          </figure>

          <div className="sol-trust-copy">
            <p className="sol-eyebrow">Přijdeš bez objednání</p>
            <h2 id="duvera-h" className="sol-h2 sol-h2--light">
              Máme otevřeno, když máš čas ty
            </h2>
            <p className="sol-trust-lead">
              Solárium najdeš v O.D. Timpo v Olomouci-Neředíně, hned u fitka.
              Zastavíš se ráno cestou do práce nebo večer po tréninku —
              obsluha ti nastaví minuty a poradí.
            </p>

            <table className="sol-hours">
              <caption className="sol-visually-hidden">Otevírací doba solária</caption>
              <tbody>
                <tr>
                  <th scope="row">Pondělí–pátek</th>
                  <td>6:00–21:00</td>
                </tr>
                <tr>
                  <th scope="row">Sobota</th>
                  <td>9:00–12:00</td>
                </tr>
                <tr>
                  <th scope="row">Neděle</th>
                  <td>9:00–12:00 · 17:00–20:00</td>
                </tr>
              </tbody>
            </table>

            <ul className="sol-perks">
              <li>Vstup i na kartu Multisport</li>
              <li>Uzamykatelná kóje na kolo pod schody</li>
              <li>Fitness bar a pitný režim na dosah</li>
            </ul>
          </div>
        </div>

        <div className="sol-contact" id="kontakt">
          <div className="sol-contact-item">
            <p className="sol-eyebrow">Kde</p>
            <p className="sol-contact-big">Tř. Svornosti 57</p>
            <p>O.D. Timpo · 779 00 Olomouc-Neředín</p>
          </div>
          <div className="sol-contact-item">
            <p className="sol-eyebrow">Zavolej</p>
            <p className="sol-contact-big">
              <a href="tel:+420585414250">585 414 250</a>
            </p>
            <p>Rádi ti řekneme, kolik minut pro tebe.</p>
          </div>
          <div className="sol-contact-item">
            <p className="sol-eyebrow">Napiš</p>
            <p className="sol-contact-big">
              <a href="mailto:fitnesstimpo@seznam.cz">fitnesstimpo@seznam.cz</a>
            </p>
            <p>Fitnessgym Timpo Olomouc na Facebooku</p>
          </div>
        </div>
      </section>
    </main>
  );
}
