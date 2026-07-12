import React from "react";

export default function Page() {
  return (
    <main className="page">
      {/* HERO — postaveno na profilu zubů klíče */}
      <header className="hero">
        <div className="hero__bar">
          <a className="wordmark" href="#" aria-label="ABT Sezam, zámečnictví Brno">
            <span className="wordmark__abt">ABT</span>
            <span className="wordmark__sezam">SEZAM</span>
            <span className="wordmark__tag">zámečnictví · Brno</span>
          </a>
          <a className="hero__phone" href="tel:+420604548753">
            <span className="hero__phone-label">Nonstop otevírání</span>
            <span className="hero__phone-num">604&nbsp;548&nbsp;753</span>
          </a>
        </div>

        <div className="hero__grid">
          <div className="hero__text">
            <p className="eyebrow">Zaklaply se vám dveře?</p>
            <h1 className="hero__title">
              Otevřeme,<br />
              <span className="hero__title-em">aniž</span> je<br />
              rozbijeme.
            </h1>
            <p className="hero__lede">
              Nouzové otevírání zaklapnutých bytů, zámků a aut po Brně —
              šetrně, na počkání, bez vypáčené zárubně. Provozovna na
              Merhautově&nbsp177, od&nbsp600&nbsp;Kč&nbsp;+&nbsp;doprava.
            </p>
            <div className="hero__cta">
              <a className="btn btn--primary" href="tel:+420604548753">Zavolat zámečníka</a>
              <a className="btn btn--ghost" href="#sluzby">Co všechno umíme</a>
            </div>
            <ul className="hero__facts">
              <li><strong>Po–Pá 8–17</strong><span>provozovna Merhautova 177</span></li>
              <li><strong>Partner FAB</strong><span>autorizovaný prodej a servis</span></li>
              <li><strong>Hotovost</strong><span>platba na místě, bez karet</span></li>
            </ul>
          </div>

          <figure className="hero__figure">
            <img src="/hero.webp" alt="Zámečník při práci na cylindrické vložce a klíči" />
            <figcaption className="hero__figcap">Merhautova 177, Brno-Sever</figcaption>
          </figure>
        </div>

        {/* profil klíče jako dělicí prvek — signature */}
        <div className="keyline" aria-hidden="true">
          <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
            <path d="M0,28 L60,28 L60,12 L120,12 L120,28 L180,28 L180,20 L240,20 L240,10 L320,10 L320,28 L400,28 L400,16 L470,16 L470,28 L560,28 L560,8 L640,8 L640,28 L720,28 L720,18 L800,18 L800,28 L900,28 L900,14 L980,14 L980,28 L1060,28 L1060,20 L1140,20 L1140,28 L1200,28" />
          </svg>
        </div>
      </header>

      {/* SEKCE 1 — služby jako seznam řemesla */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Naše řemeslo</p>
          <h2 className="section-title" id="sluzby-h">Od jednoho klíče po celý dům pod jedním klíčem</h2>
        </div>

        <div className="sluzby__layout">
          <ol className="cuts">
            <li className="cut">
              <span className="cut__no">01</span>
              <h3>Nouzové otevírání</h3>
              <p>Zaklapnutý byt, zabouchnutý zámek nebo auto se ztraceným klíčem. Otevřeme šetrně a bez zbytečné škody — od 600&nbsp;Kč + doprava. Umíme i trezory.</p>
            </li>
            <li className="cut">
              <span className="cut__no">02</span>
              <h3>Výroba a kopírování klíčů</h3>
              <p>Patentní, dozické i trezorové klíče a autoklíče na počkání. Ztratili jste svazek? Přeskládáme vložku tak, aby už ztracený klíč neodemkl.</p>
            </li>
            <li className="cut">
              <span className="cut__no">03</span>
              <h3>Bezpečnostní zámky a kování</h3>
              <p>Montáž bezpečnostního kování, přídavných zámků a řetízků na vstupní dveře bytu i domu. Certifikované komponenty od FAB.</p>
            </li>
            <li className="cut">
              <span className="cut__no">04</span>
              <h3>Opravy vložek</h3>
              <p>Opravíme cylindrickou vložku i ji přeskládáme ke klíči. Navrhneme a zrealizujeme systém generálního, hlavního a skupinového klíče.</p>
            </li>
            <li className="cut">
              <span className="cut__no">05</span>
              <h3>Mříže a samozavírače</h3>
              <p>Výroba bezpečnostních mříží na míru a montáž samozavíračů dveří. Řešení pro chodby, sklepy i provozovny.</p>
            </li>
          </ol>

          <figure className="sluzby__figure">
            <img src="/section-1.webp" alt="Zámečnická dílna s klíči a cylindrickými vložkami FAB" />
            <figcaption>Klíče na počkání — patentní, dozické i trezorové.</figcaption>
          </figure>
        </div>
      </section>

      {/* SEKCE 2 — důvěra / o nás */}
      <section className="onas" aria-labelledby="onas-h">
        <div className="onas__grid">
          <figure className="onas__figure">
            <img src="/section-2.webp" alt="Bezpečnostní kování a cylindrická vložka namontovaná na dveřích" />
          </figure>

          <div className="onas__text">
            <p className="eyebrow">Proč zrovna my</p>
            <h2 className="section-title" id="onas-h">Autorizovaný partner FAB s dílnou na Merhautově</h2>
            <p className="onas__lede">
              Jsme brněnské zámečnictví, které dodává jen certifikované komponenty od
              renomovaných výrobců — žádné náhražky, které by ohrozily zabezpečení
              vašeho majetku. Jako autorizovaný partner FAB máme kompletní sortiment
              cylindrických vložek, kování a dveřních zavíračů skladem.
            </p>

            <dl className="contact">
              <div>
                <dt>Provozovna</dt>
                <dd>Merhautova 177, Brno 613&nbsp;00</dd>
              </div>
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá 8.00–17.00</dd>
              </div>
              <div>
                <dt>Provozovna tel.</dt>
                <dd><a href="tel:+420545571763">545&nbsp;571&nbsp;763</a></dd>
              </div>
              <div>
                <dt>Otevírání nonstop</dt>
                <dd><a href="tel:+420604548753">604&nbsp;548&nbsp;753</a></dd>
              </div>
              <div>
                <dt>E-mail</dt>
                <dd><a href="mailto:sezam.brno@volny.cz">sezam.brno@volny.cz</a></dd>
              </div>
              <div>
                <dt>Platba</dt>
                <dd>Hotově na místě (karty bohužel nepřijímáme)</dd>
              </div>
            </dl>

            <a className="btn btn--primary" href="tel:+420604548753">Zavolat 604&nbsp;548&nbsp;753</a>
          </div>
        </div>
      </section>
    </main>
  );
}
