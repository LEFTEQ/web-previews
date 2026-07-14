export default function Page() {
  return (
    <>
      <a className="skip-link" href="#obsah">Přeskočit na obsah</a>

      <header className="hero">
        <img
          className="hero-img"
          src="/hero.webp"
          alt="Komín na pražské střeše nad Vltavou za svítání, pohled kominíka na střechu"
        />
        <div className="hero-veil" aria-hidden="true"></div>
        <div className="hero-inner">
          <p className="hero-eyebrow">Kominictví Němec · Praha 9 – Vinoř</p>
          <h1 className="hero-wordmark">
            <span className="wm-line1">NĚMEC</span>
            <span className="wm-line2">KOMINICTVÍ</span>
          </h1>
          <p className="hero-claim">
            Na střechu vylezu za každého počasí. Čištění, revize a opravy komínů
            v Praze a Středních Čechách — po telefonu domluveno, na místě hotovo.
          </p>
          <div className="hero-cta-row">
            <a className="hero-phone" href="tel:+420775132921">
              <span className="phone-ico" aria-hidden="true">☎</span>
              <span>
                <span className="phone-label">Objednávky pouze telefonicky</span>
                <span className="phone-number">+420 775 132 921</span>
              </span>
            </a>
          </div>
        </div>
        <div className="hero-soot" aria-hidden="true"></div>
      </header>

      <main id="obsah">
        <section className="services" aria-labelledby="sluzby-h">
          <div className="section-head">
            <span className="eyebrow">Co děláme</span>
            <h2 id="sluzby-h">Tři obory, jeden žebřík</h2>
            <p className="section-lede">
              Kominictví, požární ochrana a servis plynových zařízení — vedeme si
              o každé zakázce záznam, takže víme, kdy je čas na další kontrolu.
            </p>
          </div>

          <div className="service-grid">
            <article className="service-card">
              <span className="service-mark" aria-hidden="true">01</span>
              <h3>Kominictví</h3>
              <ul>
                <li>Pravidelné kontroly a čištění</li>
                <li>Revize a posudky spalinových cest</li>
                <li>Pasportizace komínů</li>
                <li>Vložkování komínů</li>
                <li>Stavba nových komínů</li>
                <li>Návrhy spalinových cest a komínů</li>
                <li>Dopojení spotřebičů</li>
                <li>Veškeré opravy komínů</li>
              </ul>
            </article>

            <article className="service-card">
              <span className="service-mark" aria-hidden="true">02</span>
              <h3>Požární ochrana</h3>
              <ul>
                <li>Požární kontroly bytových domů</li>
                <li>Požární kontroly průmyslových objektů</li>
                <li>Revize hasicích přístrojů</li>
                <li>Revize hydrantů</li>
                <li>Kontroly požárních dveří, světlíků, ucpávek</li>
                <li>Návrhy protipožárních opatření</li>
              </ul>
            </article>

            <article className="service-card">
              <span className="service-mark" aria-hidden="true">03</span>
              <h3>Servis plynu</h3>
              <ul>
                <li>Kontroly plynových rozvodů</li>
                <li>Servis plynových spotřebičů</li>
              </ul>
              <p className="service-note">
                Krb nebo krbovou vložku nestavíme sami — na to doporučujeme
                osvědčeného kolegu Jiřího Plavecze, <span className="nowrap">krbari.cz</span>.
              </p>
            </article>
          </div>

          <div className="pricing">
            <div className="pricing-head">
              <span className="eyebrow">Ceník</span>
              <h3>Kolik to stojí</h3>
            </div>
            <table className="price-table">
              <caption className="visually-hidden">Přehled cen roční kontroly, revize spalinové cesty a dopravy</caption>
              <thead>
                <tr>
                  <th scope="col">Služba</th>
                  <th scope="col">Rozsah</th>
                  <th scope="col">Cena</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row" rowSpan={2}>Roční kontrola</th>
                  <td>1× průduch</td>
                  <td>880 Kč</td>
                </tr>
                <tr>
                  <td>2× průduch</td>
                  <td>1 180 Kč</td>
                </tr>
                <tr>
                  <td className="price-example" colSpan={2}>
                    Příklad: 1× plyn, 1× pevná paliva + čištění (u plynu se čištění neúčtuje)
                  </td>
                  <td>1 480 Kč</td>
                </tr>
                <tr>
                  <th scope="row" rowSpan={2}>
                    Revize spalinové cesty
                    <span className="price-sub">kolaudace, uvedení do provozu</span>
                  </th>
                  <td>1× průduch</td>
                  <td>1 980 Kč</td>
                </tr>
                <tr>
                  <td>2× průduch</td>
                  <td>3 200 Kč</td>
                </tr>
                <tr>
                  <th scope="row">Doprava</th>
                  <td>do 20 km od Vinoře</td>
                  <td>zdarma</td>
                </tr>
              </tbody>
            </table>
            <p className="pricing-note">
              Bytové domy, průmyslové objekty, opravy a realizace, požární kontroly
              i servis plynu — cena vždy podle prohlídky a domluvy.
            </p>
          </div>
        </section>

        <section className="trust" aria-labelledby="trust-h">
          <figure className="trust-figure">
            <img
              src="/section-1.webp"
              alt="Martin Němec při čištění komína na střeše, kominický kartáč a žebřík"
            />
          </figure>
          <div className="trust-text">
            <span className="eyebrow">Kdo leze na střechu</span>
            <h2 id="trust-h">Martin Němec, kominík na telefonu</h2>
            <p>
              Firmu vede a zakázky osobně vyřizuje Martin Němec — sídlo má
              v Praze 9 - Vinoři, pobočku v Dobronicích u Bechyně pro revize
              spalinových cest při kolaudaci nebo uvedení spotřebiče do provozu.
            </p>
            <p>
              Objednávky a konzultace probíhají výhradně na mobilu. Bez předchozí
              domluvy telefonem bohužel nestíháme odpovídat na SMS ani e-mail.
            </p>
            <dl className="contact-list">
              <div>
                <dt>Mobil</dt>
                <dd><a href="tel:+420775132921">+420 775 132 921</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:martnem@email.cz">martnem@email.cz</a></dd>
              </div>
              <div>
                <dt>Sídlo</dt>
                <dd>Mladoboleslavská 759, Praha 9 – Vinoř</dd>
              </div>
              <div>
                <dt>Pobočka</dt>
                <dd>Dobronice u Bechyně 44 <span className="contact-hint">(jen revize spalinových cest)</span></dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="gallery" aria-labelledby="gallery-h">
          <div className="section-head">
            <span className="eyebrow">Z práce</span>
            <h2 id="gallery-h">Jak to vypadá shora</h2>
          </div>
          <figure className="gallery-figure">
            <img
              src="/section-2.webp"
              alt="Pohled na komíny a střechy pražských domů z ptačí perspektivy"
            />
            <figcaption>
              Pohled, který znají jen kominíci a holubi — střechy Prahy 9 a okolí.
            </figcaption>
          </figure>
        </section>
      </main>
    </>
  );
}
