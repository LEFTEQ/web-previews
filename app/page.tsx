import React from 'react';

export default function Page() {
  return (
    <main className="pn">
      {/* HERO */}
      <header className="pn-hero">
        <div className="pn-nav">
          <a className="pn-mark" href="#top" aria-label="Prokop Nábytek, domů">
            <span className="pn-mark-p">Prokop</span>
            <span className="pn-mark-n">Nábytek</span>
            <span className="pn-mark-since">Karlovy Vary · od 1989</span>
          </a>
          <nav className="pn-nav-links" aria-label="Hlavní">
            <a href="#skrine">Skříně na míru</a>
            <a href="#dilna">Dílna &amp; postup</a>
            <a href="#prijezd" className="pn-nav-cta">Zaměření zdarma</a>
          </nav>
        </div>

        <div className="pn-hero-grid">
          <div className="pn-hero-copy">
            <p className="pn-eyebrow">Vestavěné skříně na míru · Karlovy Vary</p>
            <h1 className="pn-h1">
              Skříň, která sedne<br />
              <span className="pn-h1-em">do centimetru</span>
            </h1>
            <p className="pn-lead">
              Zaměříme váš prostor, navrhneme rozvržení polic a šatních tyčí
              přesně podle vašich věcí a vyrobíme skříň, která vypadá, jako by
              tam patřila od začátku. Truhlářina z Rybář, ne z katalogu.
            </p>
            <div className="pn-hero-actions">
              <a href="#prijezd" className="pn-btn pn-btn-solid">Domluvit zaměření</a>
              <a href="tel:+420353228866" className="pn-btn pn-btn-ghost">353 228 866</a>
            </div>
            <dl className="pn-facts">
              <div><dt>V dílně od</dt><dd>1989</dd></div>
              <div><dt>Kam přijedeme</dt><dd>Karlovarsko</dd></div>
              <div><dt>Parkování u prodejny</dt><dd>zdarma</dd></div>
            </dl>
          </div>

          <figure className="pn-hero-figure">
            <img src="/hero.webp" alt="Vestavěná skříň na míru s posuvnými dveřmi ve zpracování dílny Prokop Nábytek" className="pn-hero-img" />
            <figcaption className="pn-hero-tag">Vestavěná skříň s posuvnými dveřmi na míru šikmé stěny</figcaption>
          </figure>
        </div>
      </header>

      {/* SEKCE 1 — SLUŽBY / CO UMÍME */}
      <section id="skrine" className="pn-section pn-services" aria-labelledby="skrine-t">
        <div className="pn-section-head">
          <p className="pn-eyebrow">Co pro vás postavíme</p>
          <h2 id="skrine-t" className="pn-h2">Každý kout má svoje řešení</h2>
          <p className="pn-section-lead">
            Nejčastěji řešíme místa, kde běžná skříň z obchodu selže — šikmé
            stropy, výklenky, chodby a předsíně. Tady je, co u nás lidé
            objednávají nejvíc.
          </p>
        </div>

        <div className="pn-services-grid">
          <article className="pn-card">
            <span className="pn-card-idx">01</span>
            <h3>Šatní skříně s posuvnými dveřmi</h3>
            <p>Od podlahy ke stropu, bez ztraceného místa nahoře. Vnitřek
            rozvrhneme podle toho, co věšíte a co skládáte.</p>
          </article>
          <article className="pn-card">
            <span className="pn-card-idx">02</span>
            <h3>Skříně do šikmin a podkroví</h3>
            <p>Přesně kopírují sklon stropu i nároží. Využijeme i nízké části,
            kam se nic jiného nevejde.</p>
          </article>
          <article className="pn-card">
            <span className="pn-card-idx">03</span>
            <h3>Předsíně a botníky na míru</h3>
            <p>Věšák, zrcadlo, uzavřený botník a police v jednom celku, sladěné
            s dveřmi i podlahou.</p>
          </article>
          <article className="pn-card">
            <span className="pn-card-idx">04</span>
            <h3>Vestavěné úložné stěny</h3>
            <p>Do obývacího pokoje i dětského pokoje — skříň, poličky a schované
            dveře splynou se stěnou.</p>
          </article>
        </div>

        <figure className="pn-wide">
          <img src="/section-1.webp" alt="Detail vnitřního uspořádání vestavěné skříně na míru — police, šuplíky a šatní tyč" className="pn-wide-img" />
          <figcaption>Vnitřek navrhujeme podle vašich věcí — police, šuplíky a šatní tyče tam, kde je potřebujete.</figcaption>
        </figure>
      </section>

      {/* SEKCE 2 — DŮVĚRA / POSTUP */}
      <section id="dilna" className="pn-section pn-trust" aria-labelledby="dilna-t">
        <div className="pn-trust-grid">
          <figure className="pn-trust-figure">
            <img src="/section-2.webp" alt="Truhlářská dílna Prokop Nábytek v Karlových Varech při výrobě nábytku na míru" className="pn-trust-img" />
          </figure>

          <div className="pn-trust-copy">
            <p className="pn-eyebrow">Jak to u nás chodí</p>
            <h2 id="dilna-t" className="pn-h2">Od zaměření po montáž máte jednoho truhláře</h2>
            <ol className="pn-steps">
              <li>
                <span className="pn-step-n">1</span>
                <div>
                  <h3>Přijedeme zaměřit</h3>
                  <p>Na Karlovarsku u vás doma. Změříme prostor, probereme, co
                  do skříně přijde, a poradíme s materiálem.</p>
                </div>
              </li>
              <li>
                <span className="pn-step-n">2</span>
                <div>
                  <h3>Navrhneme a naceníme</h3>
                  <p>Ukážeme rozvržení i dekory dvířek. Cenu znáte předem,
                  bez překvapení na konci.</p>
                </div>
              </li>
              <li>
                <span className="pn-step-n">3</span>
                <div>
                  <h3>Vyrobíme ve vlastní dílně</h3>
                  <p>Řežeme, olepujeme a kompletujeme u nás v Rybářích —
                  vidíme každý díl, než odjede k vám.</p>
                </div>
              </li>
              <li>
                <span className="pn-step-n">4</span>
                <div>
                  <h3>Smontujeme na místě</h3>
                  <p>Skříň postavíme, seřídíme dveře a uklidíme po sobě.
                  Předáme hotové a připravené k použití.</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div id="prijezd" className="pn-visit">
          <div className="pn-visit-copy">
            <p className="pn-eyebrow">Prodejna a příjem zakázek</p>
            <h2 className="pn-h2 pn-h2-light">Zastavte se za námi do Rybář</h2>
            <p className="pn-visit-lead">
              Vzorky materiálů i dvířka si u nás osaháte na místě. Přijeďte
              autem — parkování u prodejny je zdarma, nebo autobusem č. 12.
            </p>
          </div>
          <dl className="pn-visit-facts">
            <div>
              <dt>Adresa</dt>
              <dd>Čankovská 59A, Rybáře<br />360 05 Karlovy Vary</dd>
            </div>
            <div>
              <dt>Otevřeno</dt>
              <dd>Po–Pá 9.00–17.00</dd>
            </div>
            <div>
              <dt>Telefon</dt>
              <dd><a href="tel:+420353228866">353 228 866</a><br /><a href="tel:+420775281180">775 281 180</a></dd>
            </div>
            <div>
              <dt>E-mail</dt>
              <dd><a href="mailto:info@prokopnabytek.cz">info@prokopnabytek.cz</a></dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
