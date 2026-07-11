import React from "react";

export default function Page() {
  return (
    <main className="as-page">
      {/* HERO — the crack itself is the thesis */}
      <header className="as-hero">
        <div className="as-hero-media">
          <img
            src="/hero.webp"
            alt="Technik při výměně čelního autoskla v servisu Autosklo Brno"
            className="as-hero-img"
          />
          <div className="as-hero-veil" aria-hidden="true" />
        </div>

        <div className="as-hero-top">
          <div className="as-wordmark" aria-label="Autosklo Brno">
            <span className="as-wm-1">AUTOSKLO</span>
            <span className="as-wm-2">BRNO</span>
          </div>
          <nav className="as-nav" aria-label="Hlavní">
            <a href="#sluzby">Služby</a>
            <a href="#duvera">O nás</a>
            <a className="as-nav-call" href="tel:+420777041043">777&nbsp;041&nbsp;043</a>
          </nav>
        </div>

        <div className="as-hero-body">
          <p className="as-eyebrow">Havránkova 30/11 &middot; Brno &middot; smluvní servis pojišťoven</p>
          <h1 className="as-h1">
            Prasklina se&nbsp;<span className="as-crack">nezastaví<span className="as-crack-line" aria-hidden="true" /></span>&nbsp;sama.
          </h1>
          <p className="as-lead">
            Odštípnutý kamínek dnes, trhlina přes celé čelní sklo zítra. Ozvěte se
            ráno a většinou máte auto ještě týž den zpátky — s originálním sklem,
            značkovým lepidlem a zkalibrovanými asistenty.
          </p>
          <div className="as-hero-cta">
            <a className="as-btn as-btn-primary" href="tel:+420777041043">Zavolat a domluvit termín</a>
            <a className="as-btn as-btn-ghost" href="#sluzby">Co u nás vyřídíte</a>
          </div>
        </div>

        <dl className="as-hero-facts">
          <div className="as-fact">
            <dt>Google</dt>
            <dd>4,9 <span>z hodnocení 50+ řidičů</span></dd>
          </div>
          <div className="as-fact">
            <dt>Pojistná událost</dt>
            <dd>vyřídíme <span>za vás, papírování bereme na sebe</span></dd>
          </div>
          <div className="as-fact">
            <dt>Areál</dt>
            <dd>24 h hlídaný <span>káva, Wi-Fi a posezení zdarma</span></dd>
          </div>
        </dl>
      </header>

      {/* SLUŽBY — the repair sequence */}
      <section id="sluzby" className="as-sec as-sec-services">
        <div className="as-sec-head">
          <p className="as-kicker">Jak to u nás proběhne</p>
          <h2 className="as-h2">Od kamínku po hotové auto ve třech krocích</h2>
        </div>

        <ol className="as-steps">
          <li className="as-step">
            <span className="as-step-no">01</span>
            <h3>Oprava, nebo výměna</h3>
            <p>
              Malý kamínek mimo výhled řidiče zvládneme opravit vyplněním pryskyřicí —
              rychle a levněji než celé sklo. Když je trhlina větší, měníme za nové
              čelní, boční i zadní sklo.
            </p>
          </li>
          <li className="as-step">
            <span className="as-step-no">02</span>
            <h3>Pojišťovnu vyřídíme</h3>
            <p>
              Jsme smluvní servis vybraných pojišťoven a s ostatními úzce
              spolupracujeme. Kompletní pojistnou událost sepíšeme za vás — i&nbsp;když
              svou pojišťovnu v seznamu nevidíte, ozvěte se.
            </p>
          </li>
          <li className="as-step">
            <span className="as-step-no">03</span>
            <h3>Kalibrace asistentů</h3>
            <p>
              Po výměně čelního skla přeměříme jízdní asistenty na kalibrační
              jednotce RCCS s proškoleným technikem. Kamera i radar pak vidí
              přesně tam, kam mají.
            </p>
          </li>
        </ol>

        <figure className="as-figure">
          <img
            src="/section-1.webp"
            alt="Kalibrace jízdních asistentů na měřicí jednotce RCCS po výměně čelního skla"
            className="as-figure-img"
          />
          <figcaption>
            Kalibrujeme na jednotce RCCS — bez ní hlásí spousta aut po výměně skla chybu asistentů.
          </figcaption>
        </figure>
      </section>

      {/* DŮVĚRA */}
      <section id="duvera" className="as-sec as-sec-trust">
        <div className="as-trust-grid">
          <div className="as-trust-copy">
            <p className="as-kicker as-kicker-light">Proč zrovna sem</p>
            <h2 className="as-h2">Specialista na spokojené zákazníky</h2>
            <p className="as-trust-lead">
              Autosklo děláme roky a s každým autem jednáme stejně — ať je
              čerstvé z autosalonu, nebo ho máte třicet let. Držíme se
              technologických postupů, používáme značková lepidla a přípravnou
              chemii a nic neřešíme narychlo.
            </p>

            <ul className="as-values">
              <li>
                <strong>Zkušený technik u&nbsp;vašeho auta</strong>
                Opravit, vyměnit, nebo jen probrat pojistku — věnuje se vám člověk
                s letitou praxí, ne obsluha přepážky.
              </li>
              <li>
                <strong>Počkáte u&nbsp;svého auta</strong>
                Uzavřený areál Mate hlídaný 24 hodin, posezení s Wi-Fi a šálek
                italské kávy Pavin zdarma. Čas výměny nemusíte trávit v čekárně.
              </li>
              <li>
                <strong>Individuální termín</strong>
                Domluvíme se na čase opravy i vyzvednutí. Po dohodě přijedeme
                i mimo běžnou otevírací dobu.
              </li>
            </ul>
          </div>

          <aside className="as-card">
            <img
              src="/section-2.webp"
              alt="Posezení s kávou a Wi-Fi v hlídaném areálu Autosklo Brno"
              className="as-card-img"
            />
            <div className="as-card-body">
              <p className="as-rating">
                <span className="as-rating-num">4,9</span>
                <span className="as-stars" aria-hidden="true">★★★★★</span>
                <span className="as-rating-note">Google, hodnotilo přes 50 řidičů</span>
              </p>
              <dl className="as-info">
                <div>
                  <dt>Kde nás najdete</dt>
                  <dd>Havránkova 30/11, 619&nbsp;00 Brno — areál Mate</dd>
                </div>
                <div>
                  <dt>Otevřeno</dt>
                  <dd>Po–Pá 8.00–16.00, po dohodě i mimo</dd>
                </div>
                <div>
                  <dt>Telefon</dt>
                  <dd><a href="tel:+420777041043">777&nbsp;041&nbsp;043</a></dd>
                </div>
                <div>
                  <dt>E-mail</dt>
                  <dd><a href="mailto:info@autosklobrno.com">info@autosklobrno.com</a></dd>
                </div>
              </dl>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
