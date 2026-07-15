export default function Page() {
  return (
    <main className="console">
      {/* ===== HERO : the arming readout ===== */}
      <header className="hero">
        <div className="sensor" aria-hidden="true">
          <span className="sensor-eye" />
        </div>

        <div className="wrap hero-inner">
          <p className="readout" aria-label="E-tech, systém střežen">
            <b>E-TECH · SYSTÉM STŘEŽEN</b>
          </p>

          <div className="leds hero-leds" role="img" aria-label="Stav systému: střeženo">
            <span className="led led-red" />
            <span className="led arming" />
            <span className="led led-idle" />
          </div>

          <h1 className="hero-title">
            Zabezpečení, které je
            <span className="hl"> celou noc vzhůru.</span>
          </h1>

          <p className="lede">
            Montujeme a servisujeme alarmy <strong>JABLOTRON</strong>, kamerové
            a požární systémy pro byty, domy i firmy na Plzeňsku. Certifikovaný
            partner &mdash; návrh, instalace i střežení objektu na míru.
          </p>

          <div className="hero-cta">
            <a className="btn btn-go" href="tel:+420606658539">
              Zavolat 606&nbsp;658&nbsp;539
            </a>
            <a className="btn btn-ghost" href="mailto:info@etechcz.com">
              Napsat poptávku
            </a>
          </div>

          <p className="hero-loc mono">PLZEŇ · PLZEŇSKÝ KRAJ · SERVIS DO 24&nbsp;HODIN</p>
        </div>
      </header>

      {/* ===== SECTION 1 : co střežíme ===== */}
      <section className="section" aria-labelledby="s1">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">01 &mdash; Co pro vás hlídáme</span>
            <h2 id="s1" className="section-title">Produkty a služby</h2>
            <p className="section-sub">
              Systém JABLOTRON je modulární &mdash; návrh přizpůsobíme přesně
              tomu, co chcete chránit. Vyberte zónu.
            </p>
          </div>

          <div className="grid">
            <article className="card">
              <span className="node" aria-hidden="true" />
              <span className="zone mono">ZÓNA · OBJEKT</span>
              <h3 className="card-title">Alarmy a chytré ovládání</h3>
              <p className="card-text">
                Zabezpečení bytu, domu i firmy s ovládáním z mobilu.
                Otevřená okna, pohyb, kouř &mdash; víte o všem hned, ať jste kdekoli.
              </p>
              <p className="card-meta mono">MyJABLOTRON · vzdálená správa</p>
            </article>

            <article className="card">
              <span className="node" aria-hidden="true" />
              <span className="zone mono">ZÓNA · VOZIDLO</span>
              <h3 className="card-title">Střežení a monitoring vozidel</h3>
              <p className="card-text">
                Autoalarm a logistická jednotka: auto najdete tam, kde jste ho
                nechali. Zajistíte ho na dálku, sledujete polohu i knihu jízd.
              </p>
              <p className="card-meta mono">GPS · dálkové zajištění</p>
            </article>

            <article className="card">
              <span className="node" aria-hidden="true" />
              <span className="zone mono">ZÓNA · SLUŽBA</span>
              <h3 className="card-title">Bezpečnostní služby</h3>
              <p className="card-text">
                K novému alarmu JABLOTRON získáte střežení objektu na 3&nbsp;měsíce
                zdarma a bez závazků. Vyzkoušíte si opravdový pocit bezpečí.
              </p>
              <p className="card-meta mono">3 měsíce zdarma · bez závazku</p>
            </article>

            <article className="card">
              <span className="node" aria-hidden="true" />
              <span className="zone mono">ZÓNA · KLIMA</span>
              <h3 className="card-title">Řízené větrání s rekuperací</h3>
              <p className="card-text">
                Čerstvý vzduch bez otevírání oken, stálé vnitřní klima a nižší
                účty za teplo. Komfortní bydlení šetrné k peněžence i přírodě.
              </p>
              <p className="card-meta mono">rekuperace · úspora tepla</p>
            </article>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2 : důvěra / o nás ===== */}
      <section className="section section-trust" aria-labelledby="s2">
        <div className="wrap">
          <div className="section-head">
            <span className="eyebrow mono">02 &mdash; Proč právě my</span>
            <h2 id="s2" className="section-title">Autorizovaný velkoobchod JABLOTRON</h2>
            <p className="section-sub">
              Zabezpečujeme rodiny a majetek v našem regionu &mdash; a montážním
              partnerům dodáváme komponenty, konzultace a osobní přístup.
            </p>
          </div>

          <dl className="stats" aria-label="E-tech v číslech">
            <div className="stat">
              <dt className="stat-label mono">Zkušenosti</dt>
              <dd className="stat-num">30+</dd>
              <p className="stat-note">let s alarmy</p>
            </div>
            <div className="stat">
              <dt className="stat-label mono">Servis</dt>
              <dd className="stat-num">7</dd>
              <p className="stat-note">let podpory</p>
            </div>
            <div className="stat">
              <dt className="stat-label mono">E-shop</dt>
              <dd className="stat-num">300+</dd>
              <p className="stat-note">stálých zákazníků</p>
            </div>
            <div className="stat">
              <dt className="stat-label mono">Pokrytí</dt>
              <dd className="stat-num">5</dd>
              <p className="stat-note">krajů</p>
            </div>
          </dl>

          <div className="trust-body">
            <ul className="checks">
              <li>Bezplatné profesionální poradenství se sortimentem JABLOTRON</li>
              <li>Prodloužená záruka a servis výměnným způsobem</li>
              <li>Většinu zboží máme skladem, komponenty si prohlédnete v showroomu</li>
              <li>Certifikační školení &mdash; montujeme podle nejnovějších postupů</li>
            </ul>

            <aside className="panel">
              <div className="leds" aria-hidden="true">
                <span className="led led-armed" />
                <span className="led led-ok" />
                <span className="led led-ok" />
              </div>
              <p className="panel-label mono">PŮSOBÍME</p>
              <p className="panel-regions">
                Plzeňský · Karlovarský · Jihočeský kraj · Praha · Vysočina
              </p>
              <p className="panel-contact mono">
                <a href="tel:+420606658539">606 658 539</a> &nbsp;·&nbsp;
                <a href="mailto:info@etechcz.com">info@etechcz.com</a>
              </p>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
