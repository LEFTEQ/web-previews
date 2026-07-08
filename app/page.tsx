import type { CSSProperties } from "react";

export default function Page() {
  return (
    <main className="kmn">
      {/* ── HERO ───────────────────────────────────────────── */}
      <header className="kmn-top">
        <a className="kmn-mark" href="#uvod" aria-label="JJJ Krby – kamna, Pardubice">
          <span className="kmn-mark__jjj">JJJ</span>
          <span className="kmn-mark__rest">krby&nbsp;·&nbsp;kamna</span>
        </a>
        <nav className="kmn-nav" aria-label="Hlavní">
          <a href="#remesla">Řemesla</a>
          <a href="#duvera">O nás</a>
          <a className="kmn-nav__tel" href="tel:+420777649239">777&nbsp;649&nbsp;239</a>
        </nav>
      </header>

      <section className="kmn-hero" id="uvod">
        <div className="kmn-hero__img">
          <img
            src="/hero.webp"
            alt="Rozehřátý krb s krbovou vložkou postavený na klíč – práce kamnářů JJJ Krby"
            loading="eager"
          />
          <span className="kmn-hero__glow" aria-hidden="true" />
        </div>

        <div className="kmn-hero__text">
          <p className="kmn-eyebrow">Kamnářství · Pardubice &amp; Staré Hradiště</p>
          <h1 className="kmn-h1">
            Postavíme vám oheň,<br />
            u kterého se&nbsp;<em>chce</em> sedět.
          </h1>
          <p className="kmn-lede">
            Krby na klíč, krbová kamna, vložkování a čištění komínů i kamenické
            obklady. Dvanáct let řemesla, sedm krajů a stovky topení, která
            v zimě opravdu hřejí.
          </p>
          <div className="kmn-hero__cta">
            <a className="kmn-btn kmn-btn--fire" href="tel:+420777649239">Zavolat kamnáři</a>
            <a className="kmn-btn kmn-btn--ghost" href="#remesla">Co pro vás uděláme</a>
          </div>

          <dl className="kmn-facts">
            <div>
              <dt>Krbová vložka Dominant 570&nbsp;HP</dt>
              <dd>3–14&nbsp;kW · dodání do měsíce</dd>
            </div>
            <div>
              <dt>Prohlídka komínu</dt>
              <dd>350&nbsp;Kč · dopravu neúčtujeme</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* ── ŘEMESLA ────────────────────────────────────────── */}
      <section className="kmn-craft" id="remesla">
        <div className="kmn-craft__head">
          <p className="kmn-eyebrow kmn-eyebrow--dark">Tři živnosti pod jednou střechou</p>
          <h2 className="kmn-h2">Od cihly v komíně po žár v obýváku</h2>
          <p className="kmn-craft__intro">
            Nemusíte shánět tři firmy. Kamnářství, kominictví i kamenictví
            děláme sami – s platnými živnostenskými oprávněními a zárukou za
            odvedenou práci.
          </p>
        </div>

        <ol className="kmn-list">
          <li className="kmn-item">
            <span className="kmn-item__no" aria-hidden="true">01</span>
            <div className="kmn-item__body">
              <h3>Krby &amp; krbová kamna</h3>
              <p>
                Stavba krbů na klíč i rekonstrukce starších topenišť. Dodáme a
                odborně zapojíme krbové vložky Dominant, obestavíme je a
                rozvedeme teplý vzduch do dalších místností.
              </p>
              <p className="kmn-item__tag">Stavba na klíč · montáž vložek · poradenství</p>
            </div>
          </li>

          <li className="kmn-item">
            <span className="kmn-item__no" aria-hidden="true">02</span>
            <div className="kmn-item__body">
              <h3>Kominictví</h3>
              <p>
                Pravidelné prohlídky, čištění a revize komínů podle předpisů.
                Vyfrézujeme a vyvložkujeme starý komín nebo postavíme úplně
                nový. Dopravu k vám nepřipočítáváme.
              </p>
              <p className="kmn-item__tag">Revize · frézování · vložkování · nové komíny</p>
            </div>
          </li>

          <li className="kmn-item">
            <span className="kmn-item__no" aria-hidden="true">03</span>
            <div className="kmn-item__body">
              <h3>Kamenictví</h3>
              <p>
                Krbová obložení, stavební prvky z kamene, vybavení interiérů i
                zahradní architektura. Vyrobíme také pečicí a grilovací kameny,
                které vydrží generace.
              </p>
              <p className="kmn-item__tag">Obklady krbů · interiéry · zahrada · pecní kameny</p>
            </div>
          </li>
        </ol>

        <figure className="kmn-craft__figure">
          <img
            src="/section-1.webp"
            alt="Detail kamenického obkladu a stavby komínu z ověřeného materiálu"
            loading="lazy"
          />
          <figcaption>
            Používáme jen praxí ověřené materiály – žádné položky, kterými se
            uměle natahuje rozpočet.
          </figcaption>
        </figure>
      </section>

      {/* ── DŮVĚRA ─────────────────────────────────────────── */}
      <section className="kmn-trust" id="duvera">
        <figure className="kmn-trust__figure">
          <img
            src="/section-2.webp"
            alt="Kamnář JJJ Krby při práci na realizaci krbu v domácnosti"
            loading="lazy"
          />
        </figure>

        <div className="kmn-trust__text">
          <p className="kmn-eyebrow kmn-eyebrow--dark">Proč lidé volají zrovna nám</p>
          <h2 className="kmn-h2">Doporučení od stovek domácností nás živí už dvanáct let</h2>
          <p>
            Za víc než dvanáct let v řemesle nás oslovily stovky zákazníků.
            Jejich osobní doporučení nám dnes zajišťují stálou práci v sedmi
            krajích. Ručíme za kvalitu i za vaši bezpečnost.
          </p>

          <ul className="kmn-region" aria-label="Kraje, kde působíme">
            <li>Pardubický</li>
            <li>Královéhradecký</li>
            <li>Ústecký</li>
            <li>Středočeský</li>
            <li>Praha</li>
            <li>Jihočeský</li>
            <li>Vysočina</li>
          </ul>

          <div className="kmn-shops">
            <div className="kmn-shop">
              <h3>Prodejna Staré Hradiště</h3>
              <p>u Pardubic · Pardubický kraj</p>
            </div>
            <div className="kmn-shop">
              <h3>Prodejna Most</h3>
              <p>Ústecký kraj</p>
            </div>
          </div>

          <blockquote className="kmn-quote">
            „Dnes vám zkontrolujeme a vyčistíme komín, příště postavíme krb.
            Nikdy předem nevíte, co budete potřebovat – my se o to postaráme.“
            <cite>Jan Plášil, JJJ&nbsp;Krby – kamna, v.o.s.</cite>
          </blockquote>
        </div>
      </section>
    </main>
  );
}
