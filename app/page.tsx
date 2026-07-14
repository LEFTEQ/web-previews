export default function Page() {
  return (
    <main className="blm-page">
      <section className="blm-hero" id="uvod" aria-labelledby="hero-title">
        <header className="blm-header">
          <a className="blm-wordmark" href="#uvod" aria-label="BLM účetnictví – úvod">
            <span className="blm-wordmark-main">BLM</span>
            <span className="blm-wordmark-sub">účetnictví</span>
          </a>

          <nav className="blm-nav" aria-label="Hlavní navigace">
            <a href="#sluzby">Služby</a>
            <a href="#jistota">O kanceláři</a>
            <a className="blm-nav-call" href="tel:+420723949249">Zavolat</a>
          </nav>
        </header>

        <div className="blm-hero-layout">
          <div className="blm-hero-copy">
            <p className="blm-eyebrow">Účetní kancelář · České Budějovice</p>
            <h1 id="hero-title">
              Účetnictví,
              <span>které sedí.</span>
            </h1>
            <p className="blm-lead">
              Vedeme účetnictví a daňovou evidenci živnostníkům, firmám i neziskovým organizacím. Vy víte, co je potřeba zaplatit a dodat — bez dohledávání a nejistoty.
            </p>

            <div className="blm-actions" aria-label="Kontaktní možnosti">
              <a className="blm-button blm-button-primary" href="tel:+420723949249">
                Zavolat Bronislavě
                <span aria-hidden="true">↗</span>
              </a>
              <a className="blm-button blm-button-secondary" href="mailto:info@blmucetnictvi.cz">
                Napsat e-mail
              </a>
            </div>

            <p className="blm-contact-note">
              Kancelář: Dobrovodská 2054/53a, České Budějovice
            </p>
          </div>

          <figure className="blm-hero-visual">
            <img
              src="/hero.webp"
              alt="Účetní podklady a pracovní prostředí kanceláře BLM účetnictví"
            />
            <div className="blm-stamp" aria-label="Zkontrolováno, sedí">
              <small>Zkontrolováno</small>
              <strong>SEDÍ</strong>
              <span>BLM · ČB</span>
            </div>
            <figcaption>
              <span>BLM účetnictví</span>
              <span>České Budějovice</span>
            </figcaption>
          </figure>
        </div>

        <div className="blm-ledger-line" aria-label="Hlavní zaměření kanceláře">
          <span>Účetnictví</span>
          <span>Daňová evidence</span>
          <span>DPH</span>
          <span>Mzdy</span>
        </div>
      </section>

      <section className="blm-services" id="sluzby" aria-labelledby="services-title">
        <div className="blm-section-heading">
          <p className="blm-eyebrow">Co za vás převezmeme</p>
          <h2 id="services-title">Pořádek v dokladech.<br />Přehled v termínech.</h2>
          <p>
            Rozsah spolupráce nastavíme podle vašeho podnikání. Můžeme převzít kompletní agendu, nebo navázat tam, kde vám vlastní kapacita nestačí.
          </p>
        </div>

        <div className="blm-services-layout">
          <figure className="blm-section-image blm-section-image-ledger">
            <img
              src="/section-1.webp"
              alt="Pečlivé zpracování účetních dokladů v kanceláři BLM"
            />
            <figcaption>
              <span>Účtujeme v programu</span>
              <strong>POHODA</strong>
            </figcaption>
          </figure>

          <div className="blm-service-list">
            <article>
              <h3>Vedení účetnictví</h3>
              <p>Průběžně zpracujeme doklady, banku, pokladnu i závazky. Dostanete jasné informace, ne jen hotové tabulky.</p>
              <span>pro společnosti a organizace</span>
            </article>
            <article>
              <h3>Daňová evidence</h3>
              <p>Pohlídáme příjmy, výdaje, majetek a podklady pro přiznání tak, aby vám evidence dávala smysl po celý rok.</p>
              <span>pro živnostníky a svobodná povolání</span>
            </article>
            <article>
              <h3>DPH a daňové podklady</h3>
              <p>Připravíme přiznání, kontrolní hlášení a včas vás upozorníme, co dodat nebo uhradit.</p>
              <span>pro plátce i neplátce DPH</span>
            </article>
            <article>
              <h3>Mzdy a zaměstnanci</h3>
              <p>Zpracujeme mzdy a související podklady, aby byly povinnosti vůči zaměstnancům i úřadům v pořádku.</p>
              <span>pravidelná měsíční agenda</span>
            </article>
          </div>
        </div>
      </section>

      <section className="blm-trust" id="jistota" aria-labelledby="trust-title">
        <div className="blm-trust-layout">
          <div className="blm-trust-copy">
            <p className="blm-eyebrow">Kdo drží vaše čísla pohromadě</p>
            <h2 id="trust-title">Dvě účetní.<br />Jedna odpovědnost.</h2>
            <p className="blm-trust-intro">
              BLM účetnictví je kvalifikovaná českobudějovická kancelář s důrazem na detail a kvalitu odvedené práce. Na druhé straně telefonu je konkrétní člověk, který zná vaši agendu.
            </p>

            <div className="blm-people" aria-label="Kontaktní osoby">
              <div>
                <span>Ing.</span>
                <h3>Bronislava Kopecká</h3>
                <a href="tel:+420723949249">+420 723 949 249</a>
              </div>
              <div>
                <span>Bc.</span>
                <h3>Lenka Hromadová</h3>
                <a href="tel:+420724921508">+420 724 921 508</a>
              </div>
            </div>

            <dl className="blm-facts">
              <div>
                <dt>IČO</dt>
                <dd>17183421</dd>
              </div>
              <div>
                <dt>DIČ</dt>
                <dd>CZ17183421</dd>
              </div>
              <div>
                <dt>Spisová značka</dt>
                <dd>C 32230 / KSCB</dd>
              </div>
              <div>
                <dt>Profesní rozvoj</dt>
                <dd>Videolektor</dd>
              </div>
            </dl>
          </div>

          <figure className="blm-section-image blm-trust-image">
            <img
              src="/section-2.webp"
              alt="Osobní konzultace v účetní kanceláři BLM v Českých Budějovicích"
            />
            <figcaption>
              <span>Sídlo společnosti</span>
              <strong>Korandova 25/19<br />České Budějovice 4</strong>
            </figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
