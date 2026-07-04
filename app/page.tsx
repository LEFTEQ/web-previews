import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="mk">
      {/* ── HERO ─────────────────────────────────────────── */}
      <header className="mk-top">
        <a className="mk-mark" href="#" aria-label="Multi Klima, domů">
          <span className="mk-mark__multi">MULTI</span>
          <span className="mk-mark__klima">KLIMA</span>
          <span className="mk-mark__deg" aria-hidden="true">°C</span>
        </a>
        <a className="mk-phone" href="tel:+420257960032">+420 257 960 032</a>
      </header>

      <section className="mk-hero" aria-labelledby="hero-h">
        <div className="mk-hero__media">
          <img
            src="/hero.webp"
            alt="Nástěnná klimatizační jednotka nainstalovaná v čistém interiéru"
            className="mk-hero__img"
            width={1600}
            height={1200}
          />
        </div>

        <div className="mk-hero__panel">
          <p className="mk-eyebrow">Chlazení · větrání · vytápění — Praha a okolí</p>
          <h1 id="hero-h" className="mk-hero__h">
            Klid a <span className="mk-underline">stálých 22&nbsp;°C</span>,
            <br />
            ať venku mrzne nebo praží.
          </h1>
          <p className="mk-hero__lead">
            Navrhneme, nainstalujeme a udržíme klimatizaci nebo tepelné
            čerpadlo — od malého bytu na Vinohradech po halu v Rudné.
            Všechno z jedné ruky, včetně revizí a servisu.
          </p>
          <div className="mk-hero__cta">
            <a className="mk-btn mk-btn--solid" href="#kontakt">Nezávazně poptat instalaci</a>
            <a className="mk-btn mk-btn--ghost" href="#sluzby">Co všechno umíme</a>
          </div>
        </div>

        {/* Signature: teplotní stupnice jako datový proužek */}
        <div className="mk-scale" aria-label="Naše teplota komfortu je 22 stupňů">
          <span className="mk-scale__end">−15°</span>
          <div className="mk-scale__track" aria-hidden="true">
            <span className="mk-scale__set" style={{ "--pos": "58%" } as CSSProperties}>
              <b>22°</b>
            </span>
          </div>
          <span className="mk-scale__end">+40°</span>
        </div>
      </section>

      {/* ── SLUŽBY: cesta zakázky ────────────────────────── */}
      <section className="mk-serv" id="sluzby" aria-labelledby="serv-h">
        <div className="mk-serv__head">
          <p className="mk-eyebrow">Jak u nás vzniká zakázka</p>
          <h2 id="serv-h" className="mk-serv__h">
            Tři zastávky od dotazu ke stálému chladu
          </h2>
        </div>

        <ol className="mk-steps">
          <li className="mk-step">
            <span className="mk-step__no">01</span>
            <h3 className="mk-step__h">Konzultace a návrh</h3>
            <p className="mk-step__p">
              Přijedeme, změříme prostor a spočítáme potřebný výkon.
              Doporučíme systém i značku — Daikin, Panasonic — a s ní
              i žádost o dotaci Nová zelená úsporám.
            </p>
            <span className="mk-step__tag">tepelné ztráty · výběr jednotky · dotace</span>
          </li>
          <li className="mk-step">
            <span className="mk-step__no">02</span>
            <h3 className="mk-step__h">Odborná montáž</h3>
            <p className="mk-step__p">
              Vlastní technici, čistá práce a revize. Uvedeme do provozu,
              vysvětlíme ovládání a předáme protokol. Instalaci zvládneme
              většinou za jediný den.
            </p>
            <span className="mk-step__tag">instalace · revize · protokol</span>
          </li>
          <li className="mk-step">
            <span className="mk-step__no">03</span>
            <h3 className="mk-step__h">Servis a péče</h3>
            <p className="mk-step__p">
              Pravidelné čištění, kontrola chladiva a odladění výkonu.
              Staráme se i o zařízení, která jsme neinstalovali —
              pozáruční servis samozřejmostí.
            </p>
            <span className="mk-step__tag">čištění · kontrola · pozáruční servis</span>
          </li>
        </ol>

        <figure className="mk-serv__figure">
          <img
            src="/section-1.webp"
            alt="Technik Multi Klima při montáži venkovní klimatizační jednotky"
            className="mk-serv__img"
            width={1400}
            height={900}
            loading="lazy"
          />
          <figcaption className="mk-serv__cap">
            Montáž venkovní jednotky · bytový dům Praha 6
          </figcaption>
        </figure>
      </section>

      {/* ── DŮVĚRA / O NÁS ───────────────────────────────── */}
      <section className="mk-trust" id="kontakt" aria-labelledby="trust-h">
        <figure className="mk-trust__figure">
          <img
            src="/section-2.webp"
            alt="Tým Multi Klima a přehled dodávaných klimatizačních jednotek"
            className="mk-trust__img"
            width={1400}
            height={1000}
            loading="lazy"
          />
        </figure>

        <div className="mk-trust__body">
          <p className="mk-eyebrow">Proč zrovna my</p>
          <h2 id="trust-h" className="mk-trust__h">
            Dvacet let ladíme teplotu Pražanů
          </h2>
          <p className="mk-trust__p">
            Sídlíme ve Zbuzanech u Prahy-západ a za dvě desetiletí jsme
            vychladili byty, kanceláře, wellness i výrobní haly. Naučili
            jsme se, že spokojenost nestojí na katalogu, ale na lidech,
            kteří k vám přijedou.
          </p>

          <dl className="mk-facts">
            <div className="mk-fact">
              <dt>od 2005</dt>
              <dd>na trhu s klimatizacemi a tepelnými čerpadly</dd>
            </div>
            <div className="mk-fact">
              <dt>5 let</dt>
              <dd>záruka na jednotky instalované naším týmem</dd>
            </div>
            <div className="mk-fact">
              <dt>do 24 h</dt>
              <dd>odpovídáme na poptávky a cenové nabídky</dd>
            </div>
          </dl>

          <ul className="mk-brands" aria-label="Dodávané značky">
            <li>Daikin</li>
            <li>Panasonic</li>
            <li>Toshiba</li>
            <li>LG</li>
          </ul>

          <p className="mk-trust__note">
            Montujete sami? Máme i&nbsp;<strong>B2B ceny pro techniky a menší
            firmy</strong> — ozvěte se na {" "}
            <a href="tel:+420257960032">+420&nbsp;257&nbsp;960&nbsp;032</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
