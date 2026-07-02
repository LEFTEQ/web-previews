export default function Page() {
  return (
    <main className="ts-page">
      {/* ================= HERO ================= */}
      <section className="ts-hero" aria-label="Tesařství Pavel Škrabálek">
        <header className="ts-topbar">
          <div className="ts-wordmark">
            <span className="ts-wordmark-axe" aria-hidden="true">
              <svg viewBox="0 0 32 32" width="30" height="30" role="img" aria-hidden="true">
                <path d="M6 26 L20 12" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
                <path d="M17 5 C21 3, 27 3, 29 7 C27 12, 22 14, 18 13 Z" fill="currentColor" />
              </svg>
            </span>
            <span className="ts-wordmark-text">
              ŠKRABÁLEK<span className="ts-wordmark-sub">tesařství · Rokytnice n. Jizerou</span>
            </span>
          </div>
          <a className="ts-topbar-tel" href="tel:+420481523506">Zavolat tesaři</a>
        </header>

        <div className="ts-hero-body">
          <p className="ts-hero-eyebrow">Tesařské práce pod Kotlem a Lysou horou</p>
          <h1 className="ts-hero-title">
            <span className="ts-hero-line ts-hero-line-1">Krov,</span>
            <span className="ts-hero-line ts-hero-line-2">který přežije</span>
            <span className="ts-hero-line ts-hero-line-3">krkonošskou zimu.</span>
          </h1>
          <p className="ts-hero-lead">
            Vážeme krovy, stavíme pergoly a opravujeme roubenky v Rokytnici nad Jizerou
            a okolí. Smrk a modřín z hor, tradiční tesařské spoje, počítáno na sníh,
            který tu opravdu padá.
          </p>
          <div className="ts-hero-actions">
            <a className="ts-btn ts-btn-primary" href="tel:+420481523506">Zavolat: domluvit obhlídku</a>
            <a className="ts-btn ts-btn-ghost" href="#sluzby">Co stavíme</a>
          </div>
        </div>

        {/* Signature: řez krovem — vazba stojaté stolice jako čárová grafika */}
        <div className="ts-truss" aria-hidden="true">
          <svg viewBox="0 0 800 340" preserveAspectRatio="xMidYMax meet" role="img" aria-hidden="true">
            {/* pozednice */}
            <line className="ts-t ts-t1" x1="40" y1="320" x2="760" y2="320" />
            {/* krokve */}
            <line className="ts-t ts-t2" x1="60" y1="320" x2="400" y2="40" />
            <line className="ts-t ts-t3" x1="740" y1="320" x2="400" y2="40" />
            {/* hambalek */}
            <line className="ts-t ts-t4" x1="230" y1="180" x2="570" y2="180" />
            {/* sloupky stolice */}
            <line className="ts-t ts-t5" x1="260" y1="180" x2="260" y2="320" />
            <line className="ts-t ts-t5" x1="540" y1="180" x2="540" y2="320" />
            {/* pásky */}
            <line className="ts-t ts-t6" x1="260" y1="230" x2="330" y2="180" />
            <line className="ts-t ts-t6" x1="540" y1="230" x2="470" y2="180" />
            {/* kolíky ve spojích */}
            <circle className="ts-peg" cx="400" cy="52" r="5" />
            <circle className="ts-peg" cx="260" cy="180" r="5" />
            <circle className="ts-peg" cx="540" cy="180" r="5" />
            <circle className="ts-peg" cx="260" cy="320" r="5" />
            <circle className="ts-peg" cx="540" cy="320" r="5" />
          </svg>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="ts-section ts-services" id="sluzby" aria-labelledby="sluzby-title">
        <div className="ts-section-head">
          <h2 className="ts-section-title" id="sluzby-title">Co pro vás vyvážeme a postavíme</h2>
          <p className="ts-section-note">
            Každou zakázku začínáme obhlídkou na místě. Zaměříme, spočítáme zatížení
            sněhem a řekneme vám na rovinu, co dřevo v horách vydrží.
          </p>
        </div>

        <div className="ts-grid">
          <article className="ts-card">
            <div className="ts-card-joint" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <path d="M4 30 h18 v-12 h22" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M4 38 h26 v-12 h14" fill="none" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="ts-card-title">Krovy a střešní konstrukce</h3>
            <p className="ts-card-text">
              Nové krovy pro rodinné domy i horské chalupy, vaznicové i hambalkové
              soustavy. Dimenzujeme na sněhovou oblast VIII — v Rokytnici jinak nelze.
            </p>
            <p className="ts-card-meta">Novostavby · rekonstrukce · výměny vazeb</p>
          </article>

          <article className="ts-card">
            <div className="ts-card-joint" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <rect x="6" y="20" width="36" height="8" fill="none" stroke="currentColor" strokeWidth="3" />
                <path d="M18 20 l6 -10 l6 10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <path d="M18 28 l6 10 l6 -10" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="ts-card-title">Opravy roubenek a trámů</h3>
            <p className="ts-card-text">
              Výměna shnilých trámů, protézování pozednic, oprava roubení
              tradičními spoji — rybinou a čepem, ne ocelovými úhelníky navrch.
            </p>
            <p className="ts-card-meta">Roubenky · stodoly · památkové objekty</p>
          </article>

          <article className="ts-card">
            <div className="ts-card-joint" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <line x1="10" y1="42" x2="10" y2="14" stroke="currentColor" strokeWidth="3" />
                <line x1="38" y1="42" x2="38" y2="14" stroke="currentColor" strokeWidth="3" />
                <line x1="4" y1="14" x2="44" y2="14" stroke="currentColor" strokeWidth="3" />
                <line x1="10" y1="26" x2="20" y2="14" stroke="currentColor" strokeWidth="3" />
                <line x1="38" y1="26" x2="28" y2="14" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="ts-card-title">Pergoly, přístřešky, terasy</h3>
            <p className="ts-card-text">
              Pergoly na auto i posezení, přístřešky na dřevo, terasy z modřínu.
              Postavíme tak, aby unesly metr mokrého sněhu, ne jen letní grilování.
            </p>
            <p className="ts-card-meta">Modřín · smrk · dub na přání</p>
          </article>

          <article className="ts-card">
            <div className="ts-card-joint" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="44" height="44" aria-hidden="true">
                <path d="M6 40 L24 8 L42 40 Z" fill="none" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
                <line x1="15" y1="25" x2="33" y2="25" stroke="currentColor" strokeWidth="3" />
              </svg>
            </div>
            <h3 className="ts-card-title">Vikýře a podkroví</h3>
            <p className="ts-card-text">
              Sedlové i pultové vikýře, zesílení krovu pro obytné podkroví,
              příprava na střešní okna. Domluvíme s pokrývačem, ať na sebe práce navazuje.
            </p>
            <p className="ts-card-meta">Vikýře · nadkrokevní izolace · záklopy</p>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA / O NÁS ================= */}
      <section className="ts-section ts-about" aria-labelledby="onas-title">
        <div className="ts-about-inner">
          <div className="ts-about-copy">
            <h2 className="ts-section-title" id="onas-title">Tesařina z Dolní Rokytnice</h2>
            <p className="ts-about-text">
              Jsem Pavel Škrabálek a tesařinu dělám tady v Rokytnici nad Jizerou.
              Znám zdejší střechy — vím, co s krovem udělá vítr od Dvoraček
              a kolik sněhu se drží na severní straně. Proto stavím poctivě:
              přiznané spoje, dřevo s časem na vyschnutí, žádné zkratky.
            </p>
            <p className="ts-about-text">
              Jezdím po celém Podkrkonoší — Jablonec nad Jizerou, Harrachov,
              Vysoké nad Jizerou, Jilemnice. Na obhlídku přijedu zdarma,
              cenu řeknu předem a písemně.
            </p>
            <ul className="ts-vows">
              <li className="ts-vow">
                <span className="ts-vow-mark" aria-hidden="true">⌐</span>
                Obhlídka a zaměření na místě zdarma, do týdne od zavolání
              </li>
              <li className="ts-vow">
                <span className="ts-vow-mark" aria-hidden="true">⌐</span>
                Pevná cena v nabídce — co si plácneme, to platí
              </li>
              <li className="ts-vow">
                <span className="ts-vow-mark" aria-hidden="true">⌐</span>
                Dřevo od pil z Podkrkonoší, impregnace proti houbám a hmyzu v ceně
              </li>
              <li className="ts-vow">
                <span className="ts-vow-mark" aria-hidden="true">⌐</span>
                Po sobě uklidíme — staveniště předáme zametené
              </li>
            </ul>
          </div>

          <aside className="ts-refs" aria-label="Reference zákazníků">
            <h3 className="ts-refs-title">Co říkají sousedé</h3>
            <blockquote className="ts-quote">
              <p>
                „Krov na chalupě ve Františkově nám pan Škrabálek postavil za tři
                týdny. První zimu spadly skoro dva metry sněhu — ani nezavrzal.“
              </p>
              <footer className="ts-quote-by">— rodina Hanušova, Františkov</footer>
            </blockquote>
            <blockquote className="ts-quote">
              <p>
                „Vyměnil nám tři shnilé trámy v roubence z roku 1897 tak,
                že poznáte jen novější dřevo. Spoje jako od původního tesaře.“
              </p>
              <footer className="ts-quote-by">— p. Vodseďálek, Horní Rokytnice</footer>
            </blockquote>
            <div className="ts-refs-fact">
              <span className="ts-refs-fact-num">VIII.</span>
              <span className="ts-refs-fact-label">
                sněhová oblast — nejvyšší v ČR. Na to tady každý krov počítáme.
              </span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
