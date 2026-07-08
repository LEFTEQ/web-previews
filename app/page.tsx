import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="pr">
      {/* HERO */}
      <header className="pr-hero">
        <div className="pr-hero__frame">
          <img
            className="pr-hero__img"
            src="/hero.webp"
            alt="Zděný bytový dům s terasami s výhledem do parku se stoletými lípami v centru Liberce"
            width={1600}
            height={1000}
          />
          <div className="pr-hero__plate">
            <span className="pr-plate__key">Objekt</span>
            <span className="pr-plate__val">Svatoplukova · Liberec-Perštýn</span>
          </div>
        </div>

        <div className="pr-hero__body">
          <a className="pr-wordmark" href="#" aria-label="Proctus Real, správa nemovitostí Liberec">
            <span className="pr-wordmark__main">Proctus</span>
            <span className="pr-wordmark__sub">Real · správa nemovitostí</span>
          </a>

          <p className="pr-eyebrow">Bytové domy ve vyšším standardu · Liberec a okolí</p>
          <h1 className="pr-hero__title">
            Postavili jsme ho. <br />
            Teď se o něj <em>staráme</em> dál.
          </h1>
          <p className="pr-hero__lead">
            Od nízkoenergetického domu s tepelnými čerpadly ve Svatoplukově ulici až po
            garážový dům v Rochlicích — spravujeme domy, které jsme sami připravovali od
            výběru lokality po kolaudaci. Znáte technika, který zvedá telefon.
          </p>

          <div className="pr-hero__actions">
            <a className="pr-btn" href="tel:+420480000000">Zavolat správci</a>
            <a className="pr-btn pr-btn--ghost" href="#nabidka">Co spravujeme</a>
          </div>

          <dl className="pr-facts">
            <div className="pr-fact">
              <dt>Vytápění</dt>
              <dd>tepelná čerpadla, 4&nbsp;400&nbsp;m² bytové plochy</dd>
            </div>
            <div className="pr-fact">
              <dt>Od roku</dt>
              <dd>2001 stavíme, dnes hlavně pečujeme</dd>
            </div>
            <div className="pr-fact">
              <dt>Kde</dt>
              <dd>Liberec, Jablonec, Praha 4</dd>
            </div>
          </dl>
        </div>
      </header>

      {/* SEKCE 1 — SPRÁVA */}
      <section className="pr-care" id="nabidka" aria-labelledby="care-h">
        <div className="pr-care__head">
          <p className="pr-eyebrow pr-eyebrow--dark">Správa nemovitostí</p>
          <h2 className="pr-h2" id="care-h">Co pro váš dům reálně děláme</h2>
          <p className="pr-care__intro">
            Ne obecné „kompletní služby“. Tohle jsou konkrétní věci, které řešíme na
            domech ve Svatoplukově, na Dvorské v Jablonci i v garážovém domě v Ježkově
            ulici.
          </p>
        </div>

        <ol className="pr-services">
          <li className="pr-service">
            <span className="pr-service__num">01</span>
            <h3 className="pr-service__title">Technika a kotelna</h3>
            <p className="pr-service__text">
              Servis tepelných čerpadel, kontrola rozvodů a revize. Topnou sezónu
              plánujeme dopředu, ne až když někdo zavolá, že netopí.
            </p>
          </li>
          <li className="pr-service">
            <span className="pr-service__num">02</span>
            <h3 className="pr-service__title">Peníze společenství</h3>
            <p className="pr-service__text">
              Vyúčtování služeb, fond oprav a rozpočet SVJ tak, aby jim rozuměl každý
              vlastník. Finanční toky pod kontrolou — to děláme od začátku.
            </p>
          </li>
          <li className="pr-service">
            <span className="pr-service__num">03</span>
            <h3 className="pr-service__title">Dům a jeho okolí</h3>
            <p className="pr-service__text">
              Úklid společných prostor, výtahy, zeleň i park se stoletými lípami pod
              okny. Garážová stání a vjezdy udržujeme průjezdné celý rok.
            </p>
          </li>
          <li className="pr-service">
            <span className="pr-service__num">04</span>
            <h3 className="pr-service__title">Havárie a telefon</h3>
            <p className="pr-service__text">
              Prasklá voda o víkendu má jasný postup a jedno číslo. Řemeslníky v
              Liberci a Jablonci známe jménem, nedohledáváme je narychlo.
            </p>
          </li>
        </ol>
      </section>

      {/* SEKCE 2 — REFERENCE / O NÁS */}
      <section className="pr-trust" aria-labelledby="trust-h">
        <div className="pr-trust__media">
          <img
            src="/section-1.webp"
            alt="Polyfunkční dům Dvorská v Jablonci nad Nisou od společnosti Proctus"
            width={1000}
            height={1200}
          />
        </div>

        <div className="pr-trust__body">
          <p className="pr-eyebrow pr-eyebrow--dark">Domy, které známe zevnitř</p>
          <h2 className="pr-h2" id="trust-h">Spravujeme to, co jsme sami postavili</h2>
          <p className="pr-trust__lead">
            Skupina Proctus začala v roce 2001 výstavbou menších bytových domů ve vyšším
            standardu. Každý projekt jsme připravovali od výběru lokality přes financování
            s bankou až po kolaudaci. Proto při správě nehádáme, kde vede potrubí — máme
            výkresy a byli jsme u toho.
          </p>

          <ul className="pr-refs">
            <li>
              <span className="pr-ref__place">Liberec-Perštýn</span>
              <span className="pr-ref__name">Bytový dům Svatoplukova — 53 bytů, tepelná čerpadla, výhled do parku</span>
            </li>
            <li>
              <span className="pr-ref__place">Jablonec n. N.</span>
              <span className="pr-ref__name">Polyfunkční dům Dvorská</span>
            </li>
            <li>
              <span className="pr-ref__place">Liberec-Rochlice</span>
              <span className="pr-ref__name">Garážový dům s prodejnou, Ježkova ulice</span>
            </li>
            <li>
              <span className="pr-ref__place">Praha 4-Spořilov</span>
              <span className="pr-ref__name">Bytové domy Choceradská I a II s prodejnou potravin</span>
            </li>
          </ul>

          <figure className="pr-trust__second">
            <img
              src="/section-2.webp"
              alt="Garážový dům s prodejnou v Liberci-Rochlicích, Ježkova ulice"
              width={1000}
              height={640}
            />
            <figcaption>
              Garážový dům v Rochlicích řešil dopravu v klidu i služby v lokalitě —
              dnes o něj pečujeme stejně jako o byty nad ním.
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
