export default function Page() {
  return (
    <main className="ck-page">
      {/* ================= HERO ================= */}
      <section className="ck-hero" aria-labelledby="ck-hero-title">
        <div className="ck-hero-inner">
          <header className="ck-topbar">
            <div className="ck-wordmark" aria-label="CERTIS Klimatizace">
              <span className="ck-wordmark-main">CERTIS</span>
              <span className="ck-wordmark-sub">klimatizace &middot; vzduchotechnika</span>
            </div>
            <p className="ck-topbar-note">Praha a okol&iacute; &middot; mont&aacute;&#382;e od roku 2003</p>
          </header>

          <div className="ck-hero-grid">
            <div className="ck-hero-copy">
              <p className="ck-eyebrow">
                <span className="ck-eyebrow-dot" aria-hidden="true"></span>
                Vzduchotechnika a klimatizace pro byty, kancel&aacute;&#345;e i provozy
              </p>
              <h1 id="ck-hero-title" className="ck-hero-title">
                Vzduch, kter&yacute;
                <br />
                <em>nen&iacute; c&iacute;tit</em>
                <br />
                ani sly&scaron;et.
              </h1>
              <p className="ck-hero-lead">
                Navrhneme, namontujeme a servisujeme klimatizaci nebo vzduchotechniku
                p&#345;esn&#283; pro v&aacute;&scaron; prostor. V l&eacute;t&#283; 24&nbsp;&deg;C v lo&#382;nici,
                v z&aacute;&#345;&iacute; &#269;erstv&yacute; vzduch v zasedac&iacute; m&iacute;stnosti — bez pr&#367;vanu
                a bez hluku.
              </p>
              <div className="ck-hero-actions">
                <a className="ck-btn ck-btn-primary" href="#sluzby">
                  Co v&aacute;m nainstalujeme
                </a>
                <a className="ck-btn ck-btn-ghost" href="#duvera">
                  Jak pracujeme
                </a>
              </div>
            </div>

            {/* Signature: vzduchotechnická mřížka — lamely výdechu jako grafický prvek */}
            <div className="ck-vent" aria-hidden="true">
              <div className="ck-vent-frame">
                <span className="ck-lamela l1"></span>
                <span className="ck-lamela l2"></span>
                <span className="ck-lamela l3"></span>
                <span className="ck-lamela l4"></span>
                <span className="ck-lamela l5"></span>
                <span className="ck-lamela l6"></span>
                <span className="ck-lamela l7"></span>
              </div>
              <div className="ck-vent-readout">
                <div className="ck-readout-row">
                  <span className="ck-readout-label">P&#345;&iacute;vod</span>
                  <span className="ck-readout-value">24,0&nbsp;&deg;C</span>
                </div>
                <div className="ck-readout-row">
                  <span className="ck-readout-label">Pr&#367;tok</span>
                  <span className="ck-readout-value">350&nbsp;m&sup3;/h</span>
                </div>
                <div className="ck-readout-row">
                  <span className="ck-readout-label">Hluk</span>
                  <span className="ck-readout-value">21&nbsp;dB(A)</span>
                </div>
              </div>
            </div>
          </div>

          <ul className="ck-hero-facts">
            <li>
              <strong>20+ let</strong>
              <span>mont&aacute;&#382;&iacute; v Praze a St&#345;edo&#269;esk&eacute;m kraji</span>
            </li>
            <li>
              <strong>Do 48 hodin</strong>
              <span>p&#345;ijedeme na nez&aacute;vaznou prohl&iacute;dku</span>
            </li>
            <li>
              <strong>Certifikace F-plyny</strong>
              <span>chladiva &#345;e&scaron;&iacute;me podle p&#345;edpis&#367;, ne „po sv&eacute;m“</span>
            </li>
          </ul>
        </div>
      </section>

      {/* ================= SLUŽBY ================= */}
      <section className="ck-section ck-services" id="sluzby" aria-labelledby="ck-services-title">
        <div className="ck-section-inner">
          <div className="ck-section-head">
            <h2 id="ck-services-title" className="ck-section-title">
              Od n&aacute;vrhu po servis.
              <br />
              Jedna firma, jedna odpov&#283;dnost.
            </h2>
            <p className="ck-section-lead">
              Nejsme p&#345;eprod&aacute;vaj&iacute;c&iacute; e-shop. Ka&#382;dou zak&aacute;zku za&#269;&iacute;n&aacute;me
              prohl&iacute;dkou prostoru — teprve pak &#345;ekneme, jak&aacute; jednotka a kudy povede rozvod.
            </p>
          </div>

          <div className="ck-services-grid">
            <article className="ck-card">
              <div className="ck-card-mark" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <h3>Klimatizace do bytu a domu</h3>
              <p>
                Splitov&eacute; a multisplitov&eacute; jednotky s tich&yacute;m chodem — do lo&#382;nice
                vyb&iacute;r&aacute;me modely pod 22&nbsp;dB. Venkovn&iacute; jednotku um&iacute;st&iacute;me tak,
                aby neru&scaron;ila v&aacute;s ani sousedy, a pom&#367;&#382;eme s povolen&iacute;m od SVJ.
              </p>
              <p className="ck-card-note">Mont&aacute;&#382; b&#283;&#382;n&#283; za 1 den, v&#269;etn&#283; &uacute;klidu.</p>
            </article>

            <article className="ck-card">
              <div className="ck-card-mark" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <h3>Vzduchotechnika pro firmy</h3>
              <p>
                V&#283;tr&aacute;n&iacute; kancel&aacute;&#345;&iacute;, ordinac&iacute;, restaurac&iacute; a v&yacute;robn&iacute;ch
                prostor v&#269;etn&#283; rekuperace tepla. Navrhneme rozvody, dod&aacute;me jednotku,
                zaregulujeme pr&#367;toky a p&#345;ed&aacute;me protokol o m&#283;&#345;en&iacute;.
              </p>
              <p className="ck-card-note">Projek&#269;n&iacute; podklady p&#345;iprav&iacute;me i pro stavebn&iacute; &#345;&iacute;zen&iacute;.</p>
            </article>

            <article className="ck-card">
              <div className="ck-card-mark" aria-hidden="true">
                <span></span><span></span><span></span>
              </div>
              <h3>Servis a &#269;i&scaron;t&#283;n&iacute;</h3>
              <p>
                Pravideln&aacute; &uacute;dr&#382;ba prodlu&#382;uje &#382;ivotnost jednotky o roky: kontrola chladiva,
                dezinfekce v&yacute;m&#283;n&iacute;ku, &#269;i&scaron;t&#283;n&iacute; filtr&#367; a kondenz&aacute;tu.
                Servisujeme i klimatizace, kter&eacute; jsme nemontovali my.
              </p>
              <p className="ck-card-note">Servisn&iacute; smlouva = p&#345;ednostn&iacute; term&iacute;ny v sezon&#283;.</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA ================= */}
      <section className="ck-section ck-trust" id="duvera" aria-labelledby="ck-trust-title">
        <div className="ck-section-inner">
          <div className="ck-trust-grid">
            <div className="ck-trust-copy">
              <h2 id="ck-trust-title" className="ck-section-title">
                Mont&aacute;&#382;n&iacute; firma,
                <br />
                ne obchodn&iacute; z&aacute;stupce.
              </h2>
              <p className="ck-section-lead">
                CERTIS Klimatizace p&#367;sob&iacute; v Praze od roku 2003. Za tu dobu jsme se nau&#269;ili
                jednu v&#283;c: dob&#345;e navr&#382;en&aacute; vzduchotechnika je ta, o kter&eacute; po mont&aacute;&#382;i
                u&#382; nev&iacute;te. Proto m&#283;&#345;&iacute;me, ne&#382; vrt&aacute;me.
              </p>

              <ol className="ck-steps">
                <li>
                  <span className="ck-step-num">1</span>
                  <div>
                    <h3>Prohl&iacute;dka na m&iacute;st&#283;</h3>
                    <p>Zm&#283;&#345;&iacute;me prostor, tepeln&eacute; z&aacute;t&#283;&#382;e a mo&#382;nosti veden&iacute; rozvod&#367;. Zdarma a bez z&aacute;vazku.</p>
                  </div>
                </li>
                <li>
                  <span className="ck-step-num">2</span>
                  <div>
                    <h3>Nab&iacute;dka s pevnou cenou</h3>
                    <p>Konkr&eacute;tn&iacute; jednotka, trasa rozvod&#367;, term&iacute;n a cena, kter&aacute; se b&#283;hem mont&aacute;&#382;e nem&#283;n&iacute;.</p>
                  </div>
                </li>
                <li>
                  <span className="ck-step-num">3</span>
                  <div>
                    <h3>Mont&aacute;&#382; a p&#345;ed&aacute;n&iacute;</h3>
                    <p>&#268;ist&aacute; mont&aacute;&#382;, tlakov&aacute; zkou&scaron;ka, zaregulov&aacute;n&iacute; a z&aacute;znam do evidence chladiv. Uk&aacute;&#382;eme v&aacute;m, jak jednotku ovl&aacute;dat.</p>
                  </div>
                </li>
              </ol>
            </div>

            <aside className="ck-trust-aside">
              <figure className="ck-quote">
                <blockquote>
                  „V lo&#382;nici v pod-krov&iacute; b&yacute;valo v l&eacute;t&#283; 32 stup&#328;&#367;. Mont&eacute;&#345;i CERTISu
                  vedli rozvod p&#367;dou, tak&#382;e na fas&aacute;d&#283; nen&iacute; nic vid&#283;t. Te&#271; sp&iacute;me
                  p&#345;i 23 a jednotku nesly&scaron;&iacute;me.“
                </blockquote>
                <figcaption>rodinn&yacute; d&#367;m, Praha 6 &mdash; B&#345;evnov</figcaption>
              </figure>
              <figure className="ck-quote">
                <blockquote>
                  „Rekuperace pro na&scaron;i ordinaci v&#269;etn&#283; protokol&#367; pro hygienu.
                  Term&iacute;n dodr&#382;eli na den p&#345;esn&#283;.“
                </blockquote>
                <figcaption>zubn&iacute; ordinace, Praha 4 &mdash; Pankr&aacute;c</figcaption>
              </figure>

              <dl className="ck-trust-facts">
                <div>
                  <dt>P&#367;sobnost</dt>
                  <dd>Praha a do 40 km od n&iacute;</dd>
                </div>
                <div>
                  <dt>Z&aacute;ruka na mont&aacute;&#382;</dt>
                  <dd>3 roky p&iacute;semn&#283;</dd>
                </div>
                <div>
                  <dt>Zna&#269;ky, kter&eacute; mont&aacute;&#382;ujeme</dt>
                  <dd>Daikin, Mitsubishi Electric, LG, Sinclair</dd>
                </div>
              </dl>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
