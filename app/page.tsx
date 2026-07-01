export default function Page() {
  return (
    <main className="pk">
      {/* ===== HERO ===== */}
      <header className="pk-hero">
        <div className="pk-hero__media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="pk-hero__img"
          />
          <div className="pk-hero__scrim" />
        </div>

        <div className="pk-hero__inner">
          <div className="pk-topbar">
            <div className="pk-wordmark">
              <span className="pk-wordmark__hotel">Hotel</span>
              <span className="pk-wordmark__name">Stará Pekárna</span>
              <span className="pk-wordmark__place">Liberec · od r. 2017 v domě bývalé zámecké pekárny</span>
            </div>
            <div className="pk-topbar__contact">
              <a href="tel:+420773317097" className="pk-contact-link">+420 773 317 097</a>
              <a href="mailto:rezervace@stara-pekarna.cz" className="pk-contact-link pk-contact-link--mail">rezervace@stara-pekarna.cz</a>
            </div>
          </div>

          <div className="pk-hero__content">
            <p className="pk-hero__eyebrow">Privátní wellness · vířivka a sauna jen pro vás</p>
            <h1 className="pk-hero__title">
              <span className="pk-hero__line pk-hero__line--1">Kde se kdysi</span>
              <span className="pk-hero__line pk-hero__line--2">peklo pro zámek,</span>
              <span className="pk-hero__line pk-hero__line--3">dnes hřeje <em>sauna.</em></span>
            </h1>
            <p className="pk-hero__lead">
              Stará Pekárna stojí pár kroků od libereckého zámku. Teplo zůstalo —
              jen už ho nedává pec, ale privátní vířivka a sauna, které máte
              celé pro sebe.
            </p>
            <div className="pk-hero__actions">
              <a href="tel:+420773317097" className="pk-btn pk-btn--fill">Zavolat a rezervovat</a>
              <a href="mailto:rezervace@stara-pekarna.cz" className="pk-btn pk-btn--line">Napsat e-mail</a>
            </div>
            <p className="pk-hero__code">
              Kód <strong>LETO26</strong> při rezervaci = 10 % sleva na pobyt a 60 minut vířivky zdarma.
            </p>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: WELLNESS & NABÍDKA ===== */}
      <section className="pk-section pk-warmth" aria-labelledby="warmth-title">
        <div className="pk-section__head">
          <p className="pk-eyebrow">Co vás čeká</p>
          <h2 id="warmth-title" className="pk-h2">Tři teploty Staré Pekárny</h2>
          <p className="pk-section__lead">
            V pekárně se vždy pracovalo s teplem. My s ním pracujeme dál — jen jinak.
          </p>
        </div>

        <div className="pk-degrees">
          <article className="pk-degree">
            <p className="pk-degree__temp">37 °C</p>
            <p className="pk-degree__label">vířivka</p>
            <h3 className="pk-degree__title">Privátní vířivka</h3>
            <p className="pk-degree__text">
              Žádné sdílené wellness s cizími lidmi. Rezervujete si svůj čas a
              vířivka patří jen vám dvěma. Hosté hotelu mají 30 % slevu na každý vstup.
            </p>
          </article>

          <article className="pk-degree">
            <p className="pk-degree__temp">90 °C</p>
            <p className="pk-degree__label">sauna</p>
            <h3 className="pk-degree__title">Finští pomocníci</h3>
            <p className="pk-degree__text">
              Sauna hned vedle vířivky, ručníky a odpočívárna v ceně. Po dni na
              Ještědu nebo v Jizerkách není lepší návrat.
            </p>
          </article>

          <article className="pk-degree">
            <p className="pk-degree__temp">180 °C</p>
            <p className="pk-degree__label">snídaně</p>
            <h3 className="pk-degree__title">Domácí snídaně</h3>
            <p className="pk-degree__text">
              Ráno voní dům čerstvým pečivem — jak se na bývalou pekárnu sluší.
              Snídaně připravujeme domácí, ne z krabice.
            </p>
          </article>
        </div>

        <div className="pk-offers">
          <article className="pk-offer">
            <h3 className="pk-offer__title">Pobytové balíčky pro páry</h3>
            <p className="pk-offer__text">
              Romantický víkend s privátním wellness, sníaní do postele a
              tipy na výlety po Liberci a okolí. Stačí napsat, kdy chcete přijet.
            </p>
            <a href="mailto:rezervace@stara-pekarna.cz?subject=Pobytov%C3%BD%20bal%C3%AD%C4%8Dek%20pro%20dva" className="pk-offer__link">Poptat balíček pro dva</a>
          </article>
          <article className="pk-offer">
            <h3 className="pk-offer__title">Večeře v Barvírně</h3>
            <p className="pk-offer__text">
              Kousek od hotelu vaří craftová restaurace Barvírna. Jako naši
              hosté dostanete voucher na 10 % slevu — rezervaci stolu zařídíme.
            </p>
            <a href="mailto:rezervace@stara-pekarna.cz?subject=Rezervace%20stolu%20v%20Barv%C3%ADrn%C4%9B" className="pk-offer__link">Rezervovat stůl</a>
          </article>
          <article className="pk-offer">
            <h3 className="pk-offer__title">Parkování a pejsci</h3>
            <p className="pk-offer__text">
              Zaparkujete přímo u hotelu — v centru Liberce vzácnost. A
              čtyřnohé parťáky vítáme, stačí dát vědět předem.
            </p>
            <a href="tel:+420773317097" className="pk-offer__link">Zavolat a domluvit detaily</a>
          </article>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮM & LOKALITA ===== */}
      <section className="pk-section pk-house" aria-labelledby="house-title">
        <div className="pk-house__grid">
          <figure className="pk-house__figure">
            <img
              src="/section-2.webp"
              alt="Interiér Hotelu Stará Pekárna — klidné ubytování v historickém domě v centru Liberce"
              className="pk-house__img"
            />
            <figcaption className="pk-house__caption">
              Náměstí Českých bratří 26/13 — dům bývalé zámecké pekárny
            </figcaption>
          </figure>

          <div className="pk-house__body">
            <p className="pk-eyebrow">O domě</p>
            <h2 id="house-title" className="pk-h2">Spal byste v pekárně? Tady ano.</h2>
            <p className="pk-house__text">
              Kdysi se odsud nosil chléb na liberecký zámek. Dnes tu najdete
              útulné pokoje se silnými zdmi, které drží klid i teplo — a přitom
              jste dvě minuty pěšky od radnice, zámku i divadla.
            </p>

            <dl className="pk-walks">
              <div className="pk-walk">
                <dt className="pk-walk__time">2 min</dt>
                <dd className="pk-walk__dest">pěšky k libereckému zámku</dd>
              </div>
              <div className="pk-walk">
                <dt className="pk-walk__time">5 min</dt>
                <dd className="pk-walk__dest">na náměstí před radnicí</dd>
              </div>
              <div className="pk-walk">
                <dt className="pk-walk__time">20 min</dt>
                <dd className="pk-walk__dest">tramvají pod Ještěd</dd>
              </div>
              <div className="pk-walk">
                <dt className="pk-walk__time">30 min</dt>
                <dd className="pk-walk__dest">autem do Jizerských hor</dd>
              </div>
            </dl>

            <blockquote className="pk-quote">
              <p>
                „Vířivku jsme měli jen pro sebe, ráno vonělo čerstvé pečivo
                a všude jsme došli pěšky. Příští zimu jedeme zas.“
              </p>
              <cite>— Markéta a Jan, víkendový pobyt v únoru</cite>
            </blockquote>

            <p className="pk-house__contactline">
              Chcete se na něco zeptat? Volejte <a href="tel:+420773317097" className="pk-inline-link">+420 773 317 097</a> nebo
              pište na <a href="mailto:rezervace@stara-pekarna.cz" className="pk-inline-link">rezervace@stara-pekarna.cz</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
