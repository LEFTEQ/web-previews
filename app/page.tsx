export default function Page() {
  return (
    <main className="pd-page">
      {/* ================= HERO ================= */}
      <header className="pd-hero">
        <nav className="pd-nav" aria-label="Hlavní navigace">
          <a href="#" className="pd-wordmark" aria-label="PeckaDesign, úvod">
            pecka<span className="pd-wordmark-accent">design</span>
            <span className="pd-wordmark-dot" aria-hidden="true">.</span>
          </a>
          <ul className="pd-nav-links">
            <li><a href="#sluzby">Služby</a></li>
            <li><a href="#reference">Reference</a></li>
          </ul>
        </nav>

        <div className="pd-hero-grid">
          <div className="pd-hero-copy">
            <p className="pd-eyebrow">
              <span className="pd-eyebrow-tag">e‑commerce studio</span>
              <span className="pd-eyebrow-loc">Brno · od roku 2000</span>
            </p>
            <h1 className="pd-hero-title">
              Stavíme e‑shopy,
              <br />
              <em>které unesou</em>
              <br />
              <span className="pd-hero-highlight">velké hráče.</span>
            </h1>
            <p className="pd-hero-lead">
              25 let děláme rozsáhlé e‑commerce projekty pro leadery českého
              a slovenského trhu. Od návrhu přes vývoj po dlouhodobý rozvoj —
              všechno pod jednou střechou v Brně.
            </p>
            <div className="pd-hero-actions">
              <a href="#sluzby" className="pd-btn pd-btn-primary">Co umíme</a>
              <a href="#reference" className="pd-btn pd-btn-ghost">Prohlédnout reference</a>
            </div>
          </div>

          <figure className="pd-hero-visual">
            <img
              src="/hero.webp"
              alt="Tým PeckaDesign při práci na návrhu e‑shopu v brněnském studiu"
              className="pd-hero-img"
            />
            <figcaption className="pd-hero-ticker" aria-hidden="true">
              <span>e‑shop na míru</span>
              <span>UX výzkum</span>
              <span>vlastní platforma</span>
              <span>dlouhodobý rozvoj</span>
            </figcaption>
          </figure>
        </div>

        <div className="pd-hero-strip" role="list" aria-label="Klíčová čísla studia">
          <div role="listitem" className="pd-strip-item">
            <strong>25 let</strong>
            <span>na e‑commerce trhu</span>
          </div>
          <div role="listitem" className="pd-strip-item">
            <strong>+33 %</strong>
            <span>růst e‑shopu Super zoo po redesignu</span>
          </div>
          <div role="listitem" className="pd-strip-item">
            <strong>1 platforma</strong>
            <span>vlastní e‑commerce řešení pro velké objemy</span>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="pd-section pd-services" id="sluzby" aria-labelledby="sluzby-h">
        <div className="pd-section-head">
          <p className="pd-eyebrow"><span className="pd-eyebrow-tag">služby</span></p>
          <h2 id="sluzby-h" className="pd-section-title">
            Od první skici po e‑shop,
            <br />který roste s vaším byznysem
          </h2>
        </div>

        <div className="pd-services-grid">
          <figure className="pd-services-visual">
            <img
              src="/section-1.webp"
              alt="Wireframy a návrhy obrazovek e‑shopu na stole designéra"
              className="pd-img"
            />
          </figure>

          <ul className="pd-services-list">
            <li className="pd-service">
              <h3>E‑shop na míru</h3>
              <p>
                Když krabicové řešení nestačí. Navrhneme a postavíme e‑shop
                přesně podle toho, jak nakupují vaši zákazníci — od katalogu
                po pokladnu.
              </p>
            </li>
            <li className="pd-service">
              <h3>Vlastní e‑commerce platforma</h3>
              <p>
                Naše platforma zvládá tisíce objednávek denně a napojení na
                sklady, ERP i platební brány. Ověřená u největších českých
                a slovenských prodejců.
              </p>
            </li>
            <li className="pd-service">
              <h3>UX výzkum a design</h3>
              <p>
                Testujeme s reálnými zákazníky, ne od stolu. Každou změnu
                v košíku nebo na detailu produktu měříme a dokládáme čísly.
              </p>
            </li>
            <li className="pd-service">
              <h3>Dlouhodobý rozvoj</h3>
              <p>
                E‑shop nekončí spuštěním. Zůstáváme u projektu roky — sledujeme
                data, zlepšujeme konverze a připravujeme e‑shop na sezónní špičky.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= REFERENCE ================= */}
      <section className="pd-section pd-proof" id="reference" aria-labelledby="reference-h">
        <div className="pd-section-head">
          <p className="pd-eyebrow"><span className="pd-eyebrow-tag">reference</span></p>
          <h2 id="reference-h" className="pd-section-title">
            Výsledky, které si klienti
            <br />můžou přepočítat na tržby
          </h2>
        </div>

        <article className="pd-case">
          <figure className="pd-case-visual">
            <img
              src="/section-2.webp"
              alt="Nový e‑shop Super zoo na notebooku a mobilu"
              className="pd-img"
            />
          </figure>
          <div className="pd-case-copy">
            <p className="pd-case-label">Případová studie</p>
            <h3 className="pd-case-title">Super zoo: nový e‑shop vyrostl o třetinu</h3>
            <p>
              Pro největšího prodejce chovatelských potřeb jsme přestavěli celý
              e‑shop — od informační architektury po nový košík. Výsledek:
              o třetinu vyšší online prodeje a rychlejší cesta k objednávce
              na mobilu, kde nakupuje většina zákazníků.
            </p>
            <dl className="pd-case-stats">
              <div>
                <dt>Růst e‑shopu</dt>
                <dd>+33 %</dd>
              </div>
              <div>
                <dt>Nákup na mobilu</dt>
                <dd>rychlejší košík</dd>
              </div>
            </dl>
          </div>
        </article>

        <div className="pd-quotes">
          <blockquote className="pd-quote">
            <p>
              „Nepotřebovali jsme agenturu na jeden redesign, ale partnera,
              který s námi e‑shop dlouhodobě rozvíjí. Přesně to Pecka dělá.“
            </p>
            <footer>e‑commerce manažer, retailový klient</footer>
          </blockquote>
          <blockquote className="pd-quote">
            <p>
              „Každý návrh podložili daty z testování. Když jsme měnili košík,
              věděli jsme předem, co to udělá s konverzí.“
            </p>
            <footer>produktový ředitel, klient z oblasti chovatelských potřeb</footer>
          </blockquote>
        </div>

        <p className="pd-proof-note">
          Sídlíme v Brně, projekty vedeme osobně — na schůzku k nám dojedete,
          nebo přijedeme my za vámi.
        </p>
      </section>
    </main>
  );
}
