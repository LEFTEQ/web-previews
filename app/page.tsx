import type { CSSProperties } from "react";

export default function Page() {
  const slats = Array.from({ length: 22 });

  return (
    <main className="pg">
      {/* ---------- HERO ---------- */}
      <header className="hero">
        <div className="hero__slats" aria-hidden="true">
          {slats.map((_, i) => (
            <span key={i} style={{ ["--i" as keyof CSSProperties]: i } as CSSProperties} />
          ))}
        </div>

        <nav className="nav" aria-label="Hlavní">
          <a className="wordmark" href="#top">
            <span className="wordmark__name">RUBINEK</span>
            <span className="wordmark__sub">stínící technika · Brno</span>
          </a>
          <ul className="nav__links">
            <li><a href="#nabidka">Nabídka</a></li>
            <li><a href="#firma">O firmě</a></li>
            <li><a className="nav__tel" href="tel:+420722009003">722 009 003</a></li>
          </ul>
        </nav>

        <div className="hero__grid" id="top">
          <div className="hero__copy">
            <p className="eyebrow">Žaluzie &amp; rolety · na klíč od roku 1997</p>
            <h1 className="hero__title">
              Nastavte si,<br />
              kolik světla<br />
              <span className="hero__title-em">pustíte dovnitř.</span>
            </h1>
            <p className="hero__lead">
              Zaměříme, poradíme a namontujeme interiérové i venkovní stínění
              přímo u vás v Brně. Bez šablon — každé okno řešíme podle toho,
              kudy vám chodí slunce.
            </p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="tel:+420722009003">Zavolat 722 009 003</a>
              <a className="btn btn--ghost" href="#nabidka">Prohlédnout nabídku</a>
            </div>
          </div>

          <figure className="hero__figure">
            <img
              src="/hero.webp"
              alt="Interiérové žaluzie v obytné místnosti — lamely propouštějí odpolední světlo"
              className="hero__img"
              loading="eager"
              decoding="async"
            />
            <figcaption className="hero__caption">
              Horizontální žaluzie · zakázka Brno-Líšeň
            </figcaption>
          </figure>
        </div>
      </header>

      {/* ---------- NABÍDKA ---------- */}
      <section className="offer" id="nabidka" aria-labelledby="offer-h">
        <div className="section-head">
          <p className="eyebrow eyebrow--dark">Co u nás pořídíte</p>
          <h2 id="offer-h" className="section-title">Stínění na míru vašim oknům</h2>
          <p className="section-note">
            Od horizontálních žaluzií po markýzy — dodávka i montáž na klíč,
            záruční i pozáruční servis. Níže to nejžádanější.
          </p>
        </div>

        <div className="offer__grid">
          <article className="card card--wide">
            <img
              src="/section-1.webp"
              alt="Venkovní žaluzie a rolety na fasádě rodinného domu"
              className="card__img"
              loading="lazy"
              decoding="async"
            />
            <div className="card__body">
              <span className="card__tag">Venkovní stínění</span>
              <h3 className="card__title">Venkovní žaluzie &amp; rolety</h3>
              <p className="card__text">
                Zastaví horko dřív, než se dostane k oknu. Předokenní rolety
                a venkovní žaluzie s ovládáním na dálkové ovládání i do chytré
                domácnosti.
              </p>
            </div>
          </article>

          <article className="card card--wide">
            <img
              src="/section-2.webp"
              alt="Interiérové látkové rolety a plisé u okna"
              className="card__img"
              loading="lazy"
              decoding="async"
            />
            <div className="card__body">
              <span className="card__tag">Interiérové stínění</span>
              <h3 className="card__title">Roletky, plisé &amp; žaluzie</h3>
              <p className="card__text">
                Látkové roletky DEN / NOC, plisé i horizontální žaluzie do
                střešních oken. Vyladíme barvu i míru zatemnění podle místnosti.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="card__body card__body--full">
              <span className="card__tag">Sítě proti hmyzu</span>
              <h3 className="card__title">Okenní i dveřní sítě</h3>
              <p className="card__text">
                Otevřete okno a komáři zůstanou venku. Rámečkové, rolovací
                i dveřní plisé sítě na míru.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="card__body card__body--full">
              <span className="card__tag">Markýzy</span>
              <h3 className="card__title">Stínění nad terasu</h3>
              <p className="card__text">
                Vytáhnete stín přesně tam, kam potřebujete — nad terasu,
                balkon nebo předzahrádku.
              </p>
            </div>
          </article>

          <article className="card">
            <div className="card__body card__body--full">
              <span className="card__tag">Servis oken a dveří</span>
              <h3 className="card__title">Seřízení &amp; údržba</h3>
              <p className="card__text">
                Plastová, eurookna i hliníková. Seřídíme, doladíme netěsnosti,
                promažeme kování a vyměníme opotřebené díly.
              </p>
            </div>
          </article>
        </div>
      </section>

      {/* ---------- O FIRMĚ / DŮVĚRA ---------- */}
      <section className="trust" id="firma" aria-labelledby="trust-h">
        <div className="trust__inner">
          <div className="trust__lead">
            <p className="eyebrow">Jiří Rubinek &amp; Ludvík Koutný</p>
            <h2 id="trust-h" className="section-title section-title--light">
              Dva řemeslníci, kteří k vám přijdou osobně
            </h2>
            <p className="trust__text">
              Jsme rodinná brněnská firma na trhu od roku 1997. Přijedeme
              zaměřit, poradíme podle zkušeností — a když je potřeba, rozmluvíme
              vám nápad, který by se v praxi neosvědčil. Montujeme sami, takže
              za výsledkem stojíme jménem.
            </p>
            <p className="trust__place">
              Rolencova 875/88b, 620 00 Brno · <a href="mailto:info@rubinek.cz">info@rubinek.cz</a>
            </p>
          </div>

          <dl className="stats">
            <div className="stat">
              <dt className="stat__num">1997</dt>
              <dd className="stat__label">rok, kdy jsme začali stínit</dd>
            </div>
            <div className="stat">
              <dt className="stat__num">5,0<span>★</span></dt>
              <dd className="stat__label">průměr ze 75 recenzí na Google</dd>
            </div>
            <div className="stat">
              <dt className="stat__num">zdarma</dt>
              <dd className="stat__label">zaměření i konzultace u vás doma</dd>
            </div>
          </dl>
        </div>

        <figure className="review">
          <blockquote>
            „Napsal jsem e-mail o cenovou nabídku a obratem přišla i nabídka
            zaměření zdarma. Pan Rubinek přijel, všechno pečlivě zaměřil,
            rozmluvil mi můj nápad a doporučil osvědčené řešení. Za pár týdnů
            se montovalo — přijdu z práce a na oknech pět krásných rolet,
            precizně ukotvených, bez jediné chyby.“
          </blockquote>
          <figcaption>
            <span className="review__name">Ondra Baláš</span>
            <span className="review__src">ověřená recenze · Google</span>
          </figcaption>
        </figure>
      </section>
    </main>
  );
}
