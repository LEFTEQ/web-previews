import type { CSSProperties } from "react";

export default function Page() {
  const services = [
    {
      code: "01",
      title: "Zateplení fasád",
      body: "Kontaktní zateplovací systémy na cihlu, panel i porobeton. Navrhneme skladbu, spočítáme úspory a odvedeme práci tak, aby fasáda držela desítky let.",
      tag: "ETICS · minerální i polystyren",
    },
    {
      code: "02",
      title: "Povrchové úpravy staveb",
      body: "Omítky, nátěry a probarvené finální vrstvy Tex-Color®. Odstín míchaný přesně podle vzorníku, aplikace na všechny běžné podklady.",
      tag: "Fasádní omítky · tónování na míru",
    },
    {
      code: "03",
      title: "Prodej materiálu a poradenství",
      body: "Kompletní sortiment pro zateplení i finální úpravu z našeho skladu ve Vrátě. Poradíme se skladbou, spotřebou i postupem — i když si stavíte sami.",
      tag: "ColorStudio · vzorník na prodejně",
    },
  ];

  const proof = [
    { k: "20+", v: "let na jihočeském trhu" },
    { k: "ISO", v: "9001 — řízená kvalita" },
    { k: "Cech", v: "pro zateplování budov" },
    { k: "TZÚS", v: "certifikáty A2, B1" },
  ];

  return (
    <main className="tc-main">
      <header className="tc-topbar">
        <a className="tc-wordmark" href="#" aria-label="TexColor České Budějovice">
          <span className="tc-wordmark-tex">Tex</span>
          <span className="tc-wordmark-color">Color</span>
          <span className="tc-wordmark-loc">České Budějovice</span>
        </a>
        <nav className="tc-nav" aria-label="Hlavní">
          <a href="#sluzby">Služby</a>
          <a href="#duvera">O nás</a>
          <a className="tc-nav-cta" href="tel:+420387432750">Zavolat</a>
        </nav>
      </header>

      <section className="tc-hero" aria-labelledby="tc-hero-title">
        <div className="tc-hero-swatches" aria-hidden="true">
          <span style={{ "--c": "#E4572E" } as CSSProperties} />
          <span style={{ "--c": "#F2A03D" } as CSSProperties} />
          <span style={{ "--c": "#3A6B5E" } as CSSProperties} />
          <span style={{ "--c": "#1F3A44" } as CSSProperties} />
          <span style={{ "--c": "#EDE6DA" } as CSSProperties} />
        </div>

        <div className="tc-hero-inner">
          <p className="tc-eyebrow">Fasády · zateplení · odstín na míru — od roku 2003</p>
          <h1 id="tc-hero-title" className="tc-hero-title">
            <span className="tc-line">Barva, která</span>
            <span className="tc-line tc-line-em">drží teplo</span>
            <span className="tc-line">na jihu Čech.</span>
          </h1>
          <p className="tc-hero-lead">
            Zateplíme dům, natáhneme fasádu a namícháme odstín přesně podle
            vzorníku. Jedna z nejstarších firem na povrchové úpravy staveb
            v jižních Čechách — z Vráta u Českých Budějovic.
          </p>
          <div className="tc-hero-actions">
            <a className="tc-btn tc-btn-solid" href="tel:+420777281156">Nezávazně poptat</a>
            <a className="tc-btn tc-btn-ghost" href="#sluzby">Co děláme</a>
          </div>
        </div>

        <p className="tc-hero-motto" aria-hidden="true">…šetřit energii nás baví…</p>
      </section>

      <section id="sluzby" className="tc-services" aria-labelledby="tc-services-title">
        <div className="tc-section-head">
          <span className="tc-section-kicker">Nabídka</span>
          <h2 id="tc-services-title">Tři vrstvy jedné práce</h2>
          <p className="tc-section-sub">
            Od zateplení přes finální omítku až po materiál pro vaši vlastní
            stavbu — vše z jednoho místa a s poradenstvím zdarma.
          </p>
        </div>

        <div className="tc-cards">
          {services.map((s) => (
            <article key={s.code} className="tc-card">
              <span className="tc-card-code" aria-hidden="true">{s.code}</span>
              <h3 className="tc-card-title">{s.title}</h3>
              <p className="tc-card-body">{s.body}</p>
              <p className="tc-card-tag">{s.tag}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="duvera" className="tc-trust" aria-labelledby="tc-trust-title">
        <div className="tc-trust-grid">
          <div className="tc-trust-text">
            <span className="tc-section-kicker tc-kicker-light">Proč zrovna my</span>
            <h2 id="tc-trust-title">Dvacet let se učíme na fasádách, ne na vaší.</h2>
            <p>
              Kvalita naší práce stojí na kvalitě toho, co nakupujeme. Materiály
              Tex-Color® jsou certifikované, ověřené v praxi a šetrné k prostředí
              — a máme je namíchané tak, aby vydržely jihočeské počasí.
            </p>
            <blockquote className="tc-quote">
              „Naše odbornost je garantována členstvím v Cechu pro zateplování
              budov.“
            </blockquote>

            <div className="tc-contact">
              <div>
                <span className="tc-contact-label">Obchodní úsek</span>
                <a href="tel:+420777281156">+420 777 281 156</a>
                <a href="mailto:obchod@cb.tex-color.cz">obchod@cb.tex-color.cz</a>
              </div>
              <div>
                <span className="tc-contact-label">Prodejna a sklad</span>
                <address>Vráto 87, 370 01 České Budějovice</address>
              </div>
            </div>
          </div>

          <ul className="tc-badges" aria-label="Certifikace a členství">
            {proof.map((p) => (
              <li key={p.k} className="tc-badge">
                <span className="tc-badge-k">{p.k}</span>
                <span className="tc-badge-v">{p.v}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
