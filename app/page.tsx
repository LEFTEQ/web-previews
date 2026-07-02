export default function Page() {
  return (
    <main className="st-main">
      {/* ===== HERO ===== */}
      <header className="st-hero">
        <div className="st-hero-inner">
          <div className="st-topbar">
            <span className="st-wordmark" aria-label="Stavosta Ostrava">
              STAVO<span className="st-wordmark-cut">STA</span>
              <span className="st-wordmark-city">OSTRAVA</span>
            </span>
            <a className="st-topbar-tel" href="tel:+420596000000">
              Zavolat: 596 000 000
            </a>
          </div>

          <div className="st-hero-grid">
            <div className="st-hero-copy">
              <p className="st-eyebrow">Fasády a zateplení · Ostrava a Moravskoslezský kraj</p>
              <h1 className="st-h1">
                <span className="st-h1-row st-h1-row-1">Fasáda drží</span>
                <span className="st-h1-row st-h1-row-2">teplo uvnitř.</span>
                <span className="st-h1-row st-h1-row-3">
                  My držíme <em>slovo.</em>
                </span>
              </h1>
              <p className="st-lede">
                Zateplujeme rodinné i panelové domy, opravujeme a natíráme fasády.
                Rozpočet zdarma, záruka 60 měsíců na práci i materiál — písemně,
                ne jen ústně na lešení.
              </p>
              <div className="st-hero-actions">
                <a className="st-btn st-btn-solid" href="tel:+420596000000">
                  Zavolat a domluvit obhlídku
                </a>
                <a className="st-btn st-btn-line" href="mailto:info@stavosta.cz">
                  Napsat e-mail
                </a>
              </div>
            </div>

            {/* Signature: řez zateplenou fasádou — vrstvy systému ETICS */}
            <div className="st-wall" role="img" aria-label="Schematický řez zateplenou fasádou: zdivo, lepidlo, izolant, stěrka s perlinkou, omítka">
              <div className="st-wall-layer st-wall-l1"><span>zdivo</span></div>
              <div className="st-wall-layer st-wall-l2"><span>lepidlo</span></div>
              <div className="st-wall-layer st-wall-l3"><span>izolant 160&nbsp;mm</span></div>
              <div className="st-wall-layer st-wall-l4"><span>stěrka + perlinka</span></div>
              <div className="st-wall-layer st-wall-l5"><span>omítka</span></div>
              <div className="st-wall-caption">Řez systémem ETICS — takhle vypadá fasáda, která ušetří až 40&nbsp;% za teplo.</div>
            </div>
          </div>
        </div>
      </header>

      {/* ===== SEKCE 1: CO DĚLÁME ===== */}
      <section className="st-section st-services" aria-labelledby="sluzby">
        <div className="st-section-inner">
          <div className="st-section-head">
            <h2 id="sluzby" className="st-h2">Co pro váš dům uděláme</h2>
            <p className="st-section-sub">
              Od první obhlídky po poslední nátěr — vlastní parta, vlastní lešení,
              certifikované materiály. Žádní překupníci práce.
            </p>
          </div>

          <div className="st-services-grid">
            <article className="st-card">
              <span className="st-card-mm">160 mm</span>
              <h3 className="st-h3">Zateplení fasády</h3>
              <p>
                Kontaktní zateplení polystyrenem nebo minerální vatou pro rodinné
                domy i celé panelové vchody. Pomůžeme vyřídit dotaci Nová zelená
                úsporám — papíry bereme na sebe.
              </p>
            </article>
            <article className="st-card">
              <span className="st-card-mm">3 mm</span>
              <h3 className="st-h3">Nová omítka a nátěr</h3>
              <p>
                Silikonové a silikátové omítky, které v ostravském ovzduší
                nezčernají po dvou zimách. Vzorník barev přivezeme přímo
                k vašemu domu — barva na stěně vypadá jinak než v katalogu.
              </p>
            </article>
            <article className="st-card">
              <span className="st-card-mm">0 mm</span>
              <h3 className="st-h3">Čištění a sanace fasád</h3>
              <p>
                Odstranění plísní, řas a starých nátěrů tlakovou vodou a biocidní
                sanací. Někdy fasáda nepotřebuje zateplit — jen důkladně umýt
                a znovu natřít. Řekneme vám to na rovinu.
              </p>
            </article>
            <article className="st-card">
              <span className="st-card-mm">± 60 měs.</span>
              <h3 className="st-h3">Okna, dveře a detaily</h3>
              <p>
                Výměna oken a dveří v jednom kroku se zateplením — parapety,
                špalety a napojení řešíme tak, aby nikde netáhlo a nevznikaly
                tepelné mosty. Na všechno záruka 60 měsíců.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SEKCE 2: DŮVĚRA / JAK PRACUJEME ===== */}
      <section className="st-section st-trust" aria-labelledby="duvera">
        <div className="st-section-inner">
          <div className="st-trust-grid">
            <figure className="st-trust-figure">
              <img
                src="/section-1.webp"
                alt="Fasádníci firmy Stavosta na lešení při zateplování bytového domu v Ostravě"
                className="st-trust-img"
              />
              <figcaption className="st-trust-figcap">
                Revitalizace bytového domu, Ostrava-Poruba
              </figcaption>
            </figure>

            <div className="st-trust-copy">
              <h2 id="duvera" className="st-h2">Stavíme v Ostravě od roku 2009</h2>
              <p className="st-trust-lede">
                Jsme místní firma — když se něco přihodí, nejedeme přes půl
                republiky. Většinu zakázek dostáváme na doporučení od sousedů
                domů, které jsme už zateplili.
              </p>

              <dl className="st-facts">
                <div className="st-fact">
                  <dt>Záruka na dílo</dt>
                  <dd>60 měsíců na práci i materiál, potvrzená ve smlouvě.</dd>
                </div>
                <div className="st-fact">
                  <dt>Certifikace</dt>
                  <dd>ISO 9001, ISO 14001 a OHSAS 18001 — kvalita, ekologie a bezpečnost práce.</dd>
                </div>
                <div className="st-fact">
                  <dt>Rozpočet zdarma</dt>
                  <dd>Přijedeme, změříme, spočítáme. Cena platí — bez položek „navíc“ na konci.</dd>
                </div>
                <div className="st-fact">
                  <dt>Kde pracujeme</dt>
                  <dd>Ostrava, Havířov, Frýdek-Místek, Opava a okolí. Větší zakázky po celé ČR.</dd>
                </div>
              </dl>

              <blockquote className="st-quote">
                <p>
                  „Panelák jsme měli hotový za šest týdnů včetně lodžií. Parta
                  po sobě každý den uklidila a předseda SVJ dostal fotky z každého
                  patra lešení.“
                </p>
                <cite>— výbor SVJ, Ostrava-Zábřeh, zateplení 2023</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
