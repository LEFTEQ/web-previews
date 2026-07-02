export default function Page() {
  return (
    <main className="sdk">
      {/* ===== HERO ===== */}
      <header className="hero">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a href="#sluzby" className="wordmark" aria-label="Holina sádrokartony, úvod">
            <span className="wordmark-holina">HOLINA</span>
            <span className="wordmark-sub">sádrokartony · Liberec</span>
          </a>
          <a href="tel:+420602000000" className="topbar-tel">
            <span className="topbar-tel-label">Zavolejte</span>
            <span className="topbar-tel-num">602 000 000</span>
          </a>
        </nav>

        <div className="hero-grid" aria-hidden="true">
          {/* CD/UD profilová mřížka – rastr nosné konstrukce podhledu */}
          <span className="rail rail-v rv1" />
          <span className="rail rail-v rv2" />
          <span className="rail rail-v rv3" />
          <span className="rail rail-h rh1" />
          <span className="rail rail-h rh2" />
          <span className="screw s1" />
          <span className="screw s2" />
          <span className="screw s3" />
          <span className="screw s4" />
          <span className="screw s5" />
          <span className="screw s6" />
        </div>

        <div className="hero-inner">
          <p className="hero-eyebrow">
            <span className="eyebrow-tick" aria-hidden="true" />
            Sádrokartonářské práce od roku 1998
          </p>
          <h1 className="hero-title">
            <span className="line line-1">Rovná stěna.</span>
            <span className="line line-2">Tichý strop.</span>
            <span className="line line-3">
              Hotovo <em>na první</em> tmelení.
            </span>
          </h1>
          <p className="hero-text">
            Montujeme sádrokartonové příčky, podhledy a podkroví v Liberci
            a okolí. Systémy Knauf a Rigips, dodržené technologické postupy
            a 27 let praxe — proto se k nám stavební firmy vracejí.
          </p>
          <div className="hero-actions">
            <a href="tel:+420602000000" className="btn btn-primary">
              Zavolat a domluvit prohlídku
            </a>
            <a href="#sluzby" className="btn btn-ghost">
              Co všechno montujeme
            </a>
          </div>
          <ul className="hero-facts" aria-label="Základní fakta o firmě">
            <li>
              <strong>1998</strong>
              <span>rok založení firmy</span>
            </li>
            <li>
              <strong>Knauf · Rigips</strong>
              <span>certifikované systémy</span>
            </li>
            <li>
              <strong>Liberecko</strong>
              <span>dojezd do 30 km</span>
            </li>
          </ul>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="sluzby" id="sluzby" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="section-eyebrow">
            <span className="eyebrow-tick" aria-hidden="true" />
            Naše práce
          </p>
          <h2 id="sluzby-h">
            Od holé konstrukce po stěnu připravenou k malování
          </h2>
        </div>

        <div className="sluzby-list">
          <article className="sluzba">
            <div className="sluzba-marker" aria-hidden="true">
              <span className="marker-profile">CW</span>
            </div>
            <div className="sluzba-body">
              <h3>Příčky a předstěny</h3>
              <p>
                Rozdělíme byt, kancelář i ordinaci přesně podle projektu.
                Do příček schováme rozvody, izolaci proti hluku a nachystáme
                otvory na zárubně. Stěna je rovná na dvoumetrovou lať.
              </p>
              <p className="sluzba-tag">Akustická izolace · protipožární desky · vlhku odolné desky do koupelen</p>
            </div>
          </article>

          <article className="sluzba">
            <div className="sluzba-marker" aria-hidden="true">
              <span className="marker-profile">CD</span>
            </div>
            <div className="sluzba-body">
              <h3>Podhledy a stropy</h3>
              <p>
                Snížíme strop, schováme kabely a vzduchotechniku, připravíme
                otvory pro bodová světla. Montujeme i kazetové minerální
                podhledy do kanceláří a prodejen.
              </p>
              <p className="sluzba-tag">Snížené podhledy · minerální kazety · osvětlení na míru</p>
            </div>
          </article>

          <article className="sluzba">
            <div className="sluzba-marker" aria-hidden="true">
              <span className="marker-profile">UD</span>
            </div>
            <div className="sluzba-body">
              <h3>Podkroví na klíč</h3>
              <p>
                Z půdy uděláme pokoj: parozábrana, izolace mezi krokvemi,
                záklop, tmelení a broušení. Odevzdáváme povrch v kvalitě Q2,
                na přání Q3 — připravený rovnou pro malíře.
              </p>
              <p className="sluzba-tag">Zateplení · parozábrana · šikminy a nadezdívky</p>
            </div>
          </article>

          <article className="sluzba">
            <div className="sluzba-marker" aria-hidden="true">
              <span className="marker-profile">Q2</span>
            </div>
            <div className="sluzba-body">
              <h3>Rekonstrukce a adaptace</h3>
              <p>
                Adaptace bytů i nebytových prostor pro přímé investory
                a stavební firmy. Domluvíme se na dodávce na klíč, nebo
                uděláme jen tu část, kterou potřebujete.
              </p>
              <p className="sluzba-tag">Byty · kanceláře · ordinace · prodejny</p>
            </div>
          </article>
        </div>
      </section>

      {/* ===== DŮVĚRA / O NÁS ===== */}
      <section className="duvera" aria-labelledby="duvera-h">
        <div className="duvera-inner">
          <div className="duvera-text">
            <p className="section-eyebrow section-eyebrow-light">
              <span className="eyebrow-tick eyebrow-tick-light" aria-hidden="true" />
              Proč Holina
            </p>
            <h2 id="duvera-h">
              Sádrokarton děláme od roku 1998. Pořád stejně poctivě.
            </h2>
            <p>
              Firma Pavla Holiny vznikla v Liberci před sedmadvaceti lety
              a od té doby dělá jedno řemeslo. Neuhýbáme z technologických
              postupů výrobců — proto naše příčky nepraskají ve spárách
              a podhledy drží roky.
            </p>
            <p>
              Než začneme, přijedeme se podívat. Řekneme vám, co má smysl,
              čeho se vyvarovat a kde se dá ušetřit bez rizika. Konzultace
              a zaměření jsou zdarma a nezávazné — cenu znáte předem,
              položku po položce.
            </p>
          </div>

          <ol className="postup" aria-label="Jak zakázka probíhá">
            <li>
              <span className="postup-num" aria-hidden="true">1</span>
              <div>
                <h3>Zavoláte, přijedeme</h3>
                <p>Prohlídka a zaměření na místě, obvykle do týdne. Zdarma a nezávazně.</p>
              </div>
            </li>
            <li>
              <span className="postup-num" aria-hidden="true">2</span>
              <div>
                <h3>Dostanete rozpočet</h3>
                <p>Položkový rozpočet s materiálem i prací. Žádné doplatky na konci.</p>
              </div>
            </li>
            <li>
              <span className="postup-num" aria-hidden="true">3</span>
              <div>
                <h3>Montujeme a uklidíme</h3>
                <p>Přesný termín, čistý postup, odvoz odřezků. Předáme povrch v domluvené kvalitě.</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="reference" aria-label="Reference zákazníků">
          <figure>
            <blockquote>
              „Podkroví za tři týdny včetně izolace. Spáry po dvou zimách bez
              jediné prasklinky.“
            </blockquote>
            <figcaption>rodinný dům, Vratislavice nad Nisou</figcaption>
          </figure>
          <figure>
            <blockquote>
              „Předstěny a podhledy ve čtyřech bytech. Rovné tak, že malíř
              nemusel nic vyrovnávat.“
            </blockquote>
            <figcaption>rekonstrukce bytů, Liberec — Ruprechtice</figcaption>
          </figure>
          <figure>
            <blockquote>
              „Kazetový podhled v prodejně přes noc, ráno jsme normálně
              otevřeli. Profesionálové.“
            </blockquote>
            <figcaption>prodejna, centrum Liberce</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
