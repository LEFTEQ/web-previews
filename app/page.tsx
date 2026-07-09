import React from "react";

export default function Page() {
  return (
    <main className="tk">
      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="tk-top">
        <a className="tk-mark" href="#top" aria-label="TOPR KLIMA — úvod">
          <span className="tk-mark__word">TOPR</span>
          <span className="tk-mark__word tk-mark__word--alt">KLIMA</span>
          <span className="tk-mark__cop" aria-hidden="true">COP&nbsp;5,2</span>
        </a>
        <nav className="tk-nav" aria-label="Hlavní">
          <a href="#cerpadla">Čerpadla</a>
          <a href="#provoz">Provozovna</a>
          <a className="tk-nav__cta" href="tel:+420739624901">Zavolat</a>
        </nav>
      </header>

      <section className="tk-hero" id="top">
        <div className="tk-hero__grid">
          <div className="tk-hero__copy">
            <p className="tk-eyebrow">Tepelná čerpadla &middot; Brno, Zeleného 48</p>
            <h1 className="tk-hero__title">
              Z jedné kilowatty<br />
              <span className="tk-hero__accent">až pět tepla.</span>
            </h1>
            <p className="tk-hero__lead">
              Navrhneme, dodáme a spustíme tepelné čerpadlo přesně na váš dům
              — od zaměření po topnou křivku. Bez prodejních řečí, s poctivým
              výpočtem a servisem, který zvednete i po záruce.
            </p>
            <div className="tk-hero__actions">
              <a className="tk-btn" href="tel:+420739624901">Zavolat 739&nbsp;624&nbsp;901</a>
              <a className="tk-btn tk-btn--ghost" href="#cerpadla">Co pro vás uděláme</a>
            </div>

            {/* Sazba COP — signature: teplotní stupnice, ne velké číslo */}
            <dl className="tk-cop" aria-label="Topný faktor podle venkovní teploty">
              <div className="tk-cop__item">
                <dt>+7&nbsp;°C</dt>
                <dd><span style={{ ["--v" as any]: 0.92 }} className="tk-cop__bar"></span><b>5,2</b></dd>
              </div>
              <div className="tk-cop__item">
                <dt>+2&nbsp;°C</dt>
                <dd><span style={{ ["--v" as any]: 0.72 }} className="tk-cop__bar"></span><b>4,1</b></dd>
              </div>
              <div className="tk-cop__item">
                <dt>&minus;7&nbsp;°C</dt>
                <dd><span style={{ ["--v" as any]: 0.52 }} className="tk-cop__bar"></span><b>3,0</b></dd>
              </div>
              <div className="tk-cop__item">
                <dt>&minus;15&nbsp;°C</dt>
                <dd><span style={{ ["--v" as any]: 0.4 }} className="tk-cop__bar"></span><b>2,3</b></dd>
              </div>
              <p className="tk-cop__note">
                Topný faktor (COP) reálného zapojení — kolik tepla dostanete
                z jedné kilowatty elektřiny. Klesá s venkovní teplotou; proto
                počítáme na brněnskou zimu, ne na katalog.
              </p>
            </dl>
          </div>

          <figure className="tk-hero__media">
            <img
              src="/hero.webp"
              alt="Venkovní jednotka tepelného čerpadla instalovaná u rodinného domu"
              className="tk-hero__img"
              width={880}
              height={1100}
            />
            <figcaption className="tk-hero__cap">
              Instalace vzduch–voda, rodinný dům na okraji Brna
            </figcaption>
          </figure>
        </div>
      </section>

      {/* ── SEKCE 1: Cesta od telefonu k teplu ───────────── */}
      <section className="tk-flow" id="cerpadla">
        <div className="tk-sec__head">
          <h2 className="tk-sec__title">Od telefonu k teplu ve čtyřech krocích</h2>
          <p className="tk-sec__intro">
            Kompletní dílo na klíč: byty, rodinné domy, kanceláře i komerční
            provozy. Každý krok má jasného člověka a jasný výstup — víte, co
            se děje a proč.
          </p>
        </div>

        <ol className="tk-steps">
          <li className="tk-step">
            <span className="tk-step__num">01</span>
            <h3>Zaměření a výpočet</h3>
            <p>
              Přijedeme, změříme tepelné ztráty a otopnou soustavu. Dostanete
              výkon dimenzovaný na váš dům — ne o číslo větší „pro jistotu“.
            </p>
          </li>
          <li className="tk-step">
            <span className="tk-step__num">02</span>
            <h3>Nabídka bez hvězdiček</h3>
            <p>
              Cena za dodávku i montáž, s vysvětlením, proč eshopová cena
              nesedí. Poradíme i s dotací Nová zelená úsporám.
            </p>
          </li>
          <li className="tk-step">
            <span className="tk-step__num">03</span>
            <h3>Montáž a spuštění</h3>
            <p>
              Osadíme jednotku, propojíme, napustíme a nastavíme topnou
              křivku. Předáme dům vytopený, ne jen zapojený.
            </p>
          </li>
          <li className="tk-step">
            <span className="tk-step__num">04</span>
            <h3>Servis, který zvedne telefon</h3>
            <p>
              Pravidelné prohlídky i pohotovost při poruše. Poprodejní péči
              bereme jako součást díla, ne jako přílepek.
            </p>
          </li>
        </ol>

        <div className="tk-more">
          <p className="tk-more__lead">Vedle čerpadel děláme i zbytek techniky pro tepelnou pohodu:</p>
          <ul className="tk-tags">
            <li>Klimatizace</li>
            <li>Vzduchotechnika</li>
            <li>Průmyslové chlazení</li>
            <li>Opravy &amp; poradenství</li>
          </ul>
        </div>
      </section>

      {/* ── SEKCE 2: Provozovna / důvěra ─────────────────── */}
      <section className="tk-trust" id="provoz">
        <div className="tk-trust__grid">
          <figure className="tk-trust__media">
            <img
              src="/section-1.webp"
              alt="Showroom TOPR KLIMA na ulici Zeleného 48 v Brně s vystavenou technikou"
              width={840}
              height={620}
            />
          </figure>

          <div className="tk-trust__copy">
            <h2 className="tk-sec__title">Přijďte si to osahat do Brna</h2>
            <p>
              Provozovna a showroom na ulici <b>Zeleného 48</b>. Prohlédnete
              si vybranou techniku naživo, společně vymyslíme řešení na míru
              a zodpovíme dotazy — v klidu a bez čekání.
            </p>
            <dl className="tk-facts">
              <div>
                <dt>Otevřeno</dt>
                <dd>Po–Pá&nbsp;&nbsp;7:00–16:00</dd>
              </div>
              <div>
                <dt>Schůzka</dt>
                <dd>Domluvíme i mimo pracovní dobu</dd>
              </div>
              <div>
                <dt>Kde</dt>
                <dd>Zeleného 48, Brno</dd>
              </div>
            </dl>
            <p className="tk-trust__meet">
              Rádi se vám budeme věnovat osobně — kvůli tomu prosíme o
              sjednání schůzky předem.
            </p>
            <a className="tk-btn" href="mailto:obchod@topr-klima.cz">Domluvit schůzku e-mailem</a>
          </div>
        </div>

        <div className="tk-who">
          <img
            src="/section-2.webp"
            alt="Technik TOPR KLIMA při montáži tepelného čerpadla"
            className="tk-who__img"
            width={900}
            height={560}
          />
          <blockquote className="tk-who__quote">
            <p>
              „Seriózní dodavatel se zázemím, historií a postavením na trhu.
              Přátelské jednání, kvalifikace a zkušenost. Kompletní dílo na
              klíč a dlouholetá péče po předání.“
            </p>
            <cite>— tak si nás vybírá náročná klientela</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
