import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="page">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero__grid">
          <div className="hero__col">
            <div className="wordmark" aria-label="HALÓ AUTO — Drink taxi Brno">
              <span className="wordmark__halo">HALÓ</span>
              <span className="wordmark__auto">AUTO</span>
              <span className="wordmark__sub">drink taxi · Brno · od 2008</span>
            </div>

            <p className="hero__lead">
              Vypili jste? Necháte klíčky nám. Přijedeme za vámi,
              sedneme si do <strong>vašeho</strong> auta a odvezeme vás i vůz
              bezpečně domů — večer, v noci i k ránu.
            </p>

            <div className="hero__cta">
              <a className="btn btn--call" href="tel:+420721016016">
                <span className="btn__k">Zavolat řidiče</span>
                <span className="btn__num">721 016 016</span>
              </a>
              <p className="hero__note">Bereme telefon každý večer. 365 dní v roce.</p>
            </div>

            <dl className="meter" aria-label="Kdy jezdíme">
              <div className="meter__row">
                <dt>Po · Út · St · Čt</dt>
                <dd><span className="meter__on">19:00</span> — 4:00</dd>
              </div>
              <div className="meter__row meter__row--peak">
                <dt>Pá · So</dt>
                <dd><span className="meter__on">19:00</span> — 6:00</dd>
              </div>
              <div className="meter__row">
                <dt>Neděle</dt>
                <dd><span className="meter__on">19:00</span> — 2:00</dd>
              </div>
            </dl>
          </div>

          <figure className="hero__figure">
            <img
              className="hero__img"
              src="/hero.webp"
              alt="Řidič HALÓ AUTO připravený odvézt klienta i jeho vůz nočním Brnem"
              width={900}
              height={1100}
            />
            <figcaption className="hero__cap">
              <span className="dot" aria-hidden="true" /> Právě ve službě v Brně
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="svc" aria-labelledby="svc-title">
        <div className="section-head">
          <p className="eyebrow">Co pro vás uděláme</p>
          <h2 id="svc-title" className="section-title">Tři způsoby, jak se dostat domů</h2>
        </div>

        <ol className="svc__list">
          <li className="svc__item">
            <span className="svc__idx">01</span>
            <h3 className="svc__h">Drink &amp; drive</h3>
            <p className="svc__p">
              Zavoláte, my dorazíme. Řidič nasedne za volant vašeho auta
              a odveze vás i vůz domů. Ráno máte klíčky i řidičák v pořádku
              a auto stojí před domem.
            </p>
            <p className="svc__tag">Nejčastěji volané</p>
          </li>
          <li className="svc__item">
            <span className="svc__idx">02</span>
            <h3 className="svc__h">Pronájem osobního řidiče</h3>
            <p className="svc__p">
              Firemní večeře, náročný den nebo cesta, kterou nechcete řídit?
              Přidělíme vám řidiče na hodiny i na celý večer — jezdí ve vašem
              autě a čeká, kdy řeknete.
            </p>
            <p className="svc__tag">Na míru</p>
          </li>
          <li className="svc__item">
            <span className="svc__idx">03</span>
            <h3 className="svc__h">Smluvní přeprava osob</h3>
            <p className="svc__p">
              Pravidelné svozy pro firmy a stálé klienty za předem
              domluvenou cenu. Domluvíme trasu, časy i fakturaci —
              a držíme se jich.
            </p>
            <p className="svc__tag">Pro firmy</p>
          </li>
        </ol>

        <figure className="svc__figure">
          <img
            src="/section-1.webp"
            alt="Vůz HALÓ AUTO připravený k noční jízdě brněnskými ulicemi"
            width={1200}
            height={720}
          />
        </figure>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="trust" aria-labelledby="trust-title">
        <div className="trust__grid">
          <div className="trust__text">
            <p className="eyebrow eyebrow--dark">Kdo vás veze</p>
            <h2 id="trust-title" className="section-title section-title--dark">
              Brněnská firma, která jezdí od&nbsp;roku&nbsp;2008
            </h2>
            <p className="trust__p">
              HALÓ AUTO vede <strong>Marek Matoušek</strong> z Gorkého ulice
              v Brně. Za těch víc než patnáct let jsme odvezli tisíce lidí,
              kteří si po večeru s přáteli nechtěli sednout za volant. Naši
              řidiči se řídí interním kodexem a pravidelně je kontrolujeme —
              o vaše auto se u nás starají jako o svoje.
            </p>

            <ul className="pledge">
              <li><b>Zákazník první.</b> Ke každé jízdě přistupujeme zodpovědně a s péčí.</li>
              <li><b>Kvalita bez výmluv.</b> Prověření řidiči, kteří dodrží, co slíbí.</li>
              <li><b>Vracíte se k nám.</b> Klienti nás volají opakovaně a doporučují dál.</li>
            </ul>

            <address className="contact">
              <a className="contact__phone" href="tel:+420721016016">721&nbsp;016&nbsp;016</a>
              <a className="contact__mail" href="mailto:haloauto@seznam.cz">haloauto@seznam.cz</a>
              <span className="contact__addr">Gorkého 92/50, 602 00 Brno · IČO 66520754</span>
            </address>
          </div>

          <div className="trust__side">
            <figure className="trust__figure">
              <img
                src="/section-2.webp"
                alt="Marek Matoušek a vozový park HALÓ AUTO v Brně"
                width={900}
                height={900}
              />
            </figure>
            <div className="stat" style={{"--i":0} as CSSProperties}>
              <span className="stat__n">2008</span>
              <span className="stat__l">jezdíme od</span>
            </div>
            <div className="stat" style={{"--i":1} as CSSProperties}>
              <span className="stat__n">365</span>
              <span className="stat__l">dní v roce ve službě</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
