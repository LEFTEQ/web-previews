export default function Page() {
  return (
    <main className="atelier">
      {/* ================= HERO ================= */}
      <header className="hero" aria-label="Krejčovský ateliér Taille, České Budějovice">
        <div className="hero-topbar">
          <span className="wordmark">
            Taille<span className="wordmark-dot">·</span>
            <span className="wordmark-sub">ateliér Mileny Kubíčkové</span>
          </span>
          <span className="hero-city">České Budějovice</span>
        </div>

        <div className="hero-body">
          <p className="hero-eyebrow">
            <span className="stitch" aria-hidden="true"></span>
            zakázkové krejčovství — dámské i pánské
          </p>

          <h1 className="hero-title">
            <span className="line line-1">Šaty šité</span>
            <span className="line line-2">
              na <em className="chalk">vaši</em> míru,
            </span>
            <span className="line line-3">ne na velikost&nbsp;38.</span>
          </h1>

          <p className="hero-lead">
            Přijdete se svou představou — nebo jen s látkou, kterou máte ráda.
            Vezmeme míry, nakreslíme střih a ušijeme oděv, který sedí přesně
            vám. V ateliéru na jednom místě už přes dvacet let.
          </p>

          <div className="hero-actions">
            <a className="btn btn-solid" href="tel:+420387000000">
              Zavolat do ateliéru
            </a>
            <a className="btn btn-ghost" href="mailto:atelier@taille.cz">
              Napsat e-mail
            </a>
          </div>
        </div>

        {/* Signature: krejčovský metr jako svislé měřítko */}
        <div className="tape" aria-hidden="true">
          <div className="tape-inner">
            {Array.from({ length: 15 }, (_, i) => (
              <div className="tape-unit" key={i}>
                <span className="tape-num">{(i + 1) * 10}</span>
                <span className="tape-ticks"></span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero-hem" aria-hidden="true">
          <span className="hem-label">míry · střih · zkouška · hotový oděv</span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co pro vás ušijeme a spravíme</h2>
          <p className="section-note">
            Ceny řekneme předem, po první konzultaci. Menší opravy často
            zvládneme na počkání.
          </p>
        </div>

        <div className="service-grid">
          <article className="service-card">
            <span className="service-tag">na míru</span>
            <h3>Zakázkové šití</h3>
            <p>
              Společenské šaty, kostýmy, sukně, kalhoty i pánské košile.
              Střih vzniká podle vašich měr — na dvou zkouškách doladíme
              každý detail, od délky rukávu po posazení pasu.
            </p>
            <p className="service-meta">2 zkoušky v ceně · vlastní látka vítána</p>
          </article>

          <article className="service-card">
            <span className="service-tag">opravy a úpravy</span>
            <h3>Úpravy oděvů</h3>
            <p>
              Zkrácení kalhot a rukávů, výměna zipů a podšívek, zúžení
              po zhubnutí, úprava konfekce, aby seděla jako šitá. Přineste
              oděv, změříme přímo na vás.
            </p>
            <p className="service-meta">běžné opravy do 3 pracovních dnů</p>
          </article>

          <article className="service-card">
            <span className="service-tag">svatby a plesy</span>
            <h3>Šaty na velký den</h3>
            <p>
              Svatební a plesové šaty od návrhu po poslední steh. Pomůžeme
              vybrat látku i střih, který lichotí vaší postavě — a v den D
              nebudete řešit nic než úsměv.
            </p>
            <p className="service-meta">objednávejte 2–3 měsíce předem</p>
          </article>

          <article className="service-card">
            <span className="service-tag">poradenství</span>
            <h3>Návrhy a konzultace</h3>
            <p>
              Nevíte, jaký střih nebo materiál zvolit? Paní Kubíčková
              nakreslí návrh, poradí s látkou a řekne na rovinu, co vám
              bude slušet a co ne.
            </p>
            <p className="service-meta">konzultace zdarma k zakázce</p>
          </article>
        </div>
      </section>

      {/* ================= DŮVĚRA / ATELIÉR ================= */}
      <section className="trust" aria-labelledby="atelier-h">
        <div className="trust-inner">
          <div className="trust-text">
            <h2 id="atelier-h">Ateliér, kde vás znají jménem</h2>
            <p>
              Taille není salon s katalogem — je to krejčovská dílna
              v Českých Budějovicích, kde u stroje sedí sama majitelka.
              Každou zakázku šije Milena Kubíčková osobně: od prvního
              měření po závěrečné žehlení. Proto víte, s kým mluvíte
              a kdo za práci ručí.
            </p>
            <ul className="trust-list">
              <li>
                <strong>Osobní přístup.</strong> Míry bereme vždy naživo,
                ne podle tabulky. Změní‑li se postava mezi zkouškami,
                střih upravíme.
              </li>
              <li>
                <strong>Poctivé řemeslo.</strong> Ruční začišťování,
                kvalitní podšívky, švy, které vydrží roky nošení i praní.
              </li>
              <li>
                <strong>Domluvíte se lidsky.</strong> Termín i cenu víte
                předem. Žádné „uvidíme“ — řekneme přesně, kdy si oděv
                vyzvednete.
              </li>
            </ul>
          </div>

          <aside className="trust-quotes" aria-label="Reference zákaznic">
            <figure className="quote">
              <blockquote>
                „Kostým na dceřinu promoci seděl tak, že se mě všichni
                ptali, kde jsem ho koupila. Nekoupila — nechala ušít.“
              </blockquote>
              <figcaption>— paní Dvořáková, České Budějovice</figcaption>
            </figure>
            <figure className="quote">
              <blockquote>
                „Zkrácené kalhoty do druhého dne a zip vyměněný na počkání.
                Chodím sem už pátým rokem.“
              </blockquote>
              <figcaption>— pan Novák, Rudolfov</figcaption>
            </figure>
            <div className="trust-fact">
              <span className="fact-num">20+</span>
              <span className="fact-label">let řemesla na jednom místě</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
