export default function Page() {
  return (
    <main className="wt">
      {/* ================= HERO ================= */}
      <header className="hero">
        <div className="hero-inner">
          <div className="brandline">
            <span className="wordmark">
              WOITHA<span className="wordmark-dot" aria-hidden="true">▪</span>
            </span>
            <span className="brand-sub">truhlářství · Liberec</span>
          </div>

          <div className="hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Ruční práce ze smrku a modřínu</p>
              <h1 className="hero-title">
                <span className="line line-1">Ptačí budky,</span>
                <span className="line line-2">krmítka</span>
                <span className="line line-3">a poctivá truhlařina.</span>
              </h1>
              <p className="hero-lead">
                Vyrábíme budky pro sýkorky, špačky i rehky, krmítka, která
                přežijí libereckou zimu, a k tomu brúsíme nože, dláta i řetězy
                motorových pil — drobné zakázky na počkání.
              </p>
              <div className="hero-actions">
                <a className="btn btn-solid" href="tel:482710759">Zavolat 482 710 759</a>
                <a className="btn btn-ghost" href="mailto:ptacibudky-krmitka@seznam.cz">Napsat e-mail</a>
              </div>
            </div>

            {/* Signature: typograficko-grafická ptačí budka složená z „prken“ */}
            <div className="hero-birdhouse" aria-hidden="true">
              <svg viewBox="0 0 320 400" className="birdhouse-svg" role="img" aria-hidden="true">
                {/* střecha */}
                <polygon className="bh bh-roof" points="20,140 160,20 300,140 276,140 160,42 44,140" />
                {/* prkna těla — každé se „přibije“ při načtení */}
                <rect className="bh bh-plank p1" x="56" y="150" width="208" height="38" rx="3" />
                <rect className="bh bh-plank p2" x="56" y="194" width="208" height="38" rx="3" />
                <rect className="bh bh-plank p3" x="56" y="238" width="208" height="38" rx="3" />
                <rect className="bh bh-plank p4" x="56" y="282" width="208" height="38" rx="3" />
                {/* vletový otvor — přesných 32 mm pro sýkorku */}
                <circle className="bh bh-hole" cx="160" cy="213" r="26" />
                {/* bidélko */}
                <rect className="bh bh-perch" x="152" y="258" width="16" height="46" rx="6" />
                {/* hřebíky */}
                <circle className="bh bh-nail n1" cx="70" cy="169" r="3.5" />
                <circle className="bh bh-nail n2" cx="250" cy="169" r="3.5" />
                <circle className="bh bh-nail n3" cx="70" cy="301" r="3.5" />
                <circle className="bh bh-nail n4" cx="250" cy="301" r="3.5" />
                {/* kóta — truhlářská míra otvoru */}
                <line className="bh bh-dim" x1="196" y1="213" x2="264" y2="213" />
                <text className="bh bh-dimtext" x="268" y="217">ø 32 mm</text>
              </svg>
              <p className="birdhouse-caption">Vletový otvor 32 mm — sýkora koňadra se vejde, špaček už ne.</p>
            </div>
          </div>
        </div>
        <div className="hero-baseline" aria-hidden="true">
          <span>smrk</span><span>▪</span><span>modřín</span><span>▪</span><span>dub</span><span>▪</span><span>lipové dřevo na opravy</span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-inner">
          <h2 id="sluzby-h" className="section-title">Co u nás pořídíte</h2>
          <p className="section-lead">
            Malá dílna, žádná velkovýroba. Každý kus projde rukama, ne linkou.
          </p>

          <div className="service-grid">
            <article className="service-card">
              <div className="card-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48"><polygon points="6,24 24,8 42,24" className="mk-roof"/><rect x="12" y="24" width="24" height="18" className="mk-body"/><circle cx="24" cy="31" r="4" className="mk-hole"/></svg>
              </div>
              <h3>Ptačí budky</h3>
              <p>
                Budky pro sýkorky, brhlíky, rehky, špačky i polobudky pro
                konipasy. Správné rozměry otvoru podle druhu, nehošované
                vnitřní stěny, odklopná střecha na jarní čištění.
              </p>
              <p className="card-note">Poradíme i s výškou a světovou stranou zavěšení.</p>
            </article>

            <article className="service-card">
              <div className="card-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48"><polygon points="4,20 24,6 44,20" className="mk-roof"/><rect x="8" y="22" width="32" height="4" className="mk-body"/><rect x="22" y="26" width="4" height="14" className="mk-body"/><rect x="12" y="40" width="24" height="3" className="mk-body"/></svg>
              </div>
              <h3>Krmítka</h3>
              <p>
                Závěsná i stojanová krmítka s přesahem střechy, aby zrní
                nezmoklo. Vydrží venku celý rok — na Liberecku to znamená
                sníh, vodu i vítr z Ještědu.
              </p>
              <p className="card-note">Prodej přímo z dílny, bez čekání.</p>
            </article>

            <article className="service-card">
              <div className="card-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48"><rect x="6" y="20" width="36" height="8" rx="2" className="mk-body"/><polygon points="6,28 12,36 18,28" className="mk-roof"/><rect x="30" y="10" width="6" height="10" className="mk-hole"/></svg>
              </div>
              <h3>Zakázkový nábytek a opravy</h3>
              <p>
                Drobná zakázková výroba nábytku a zařízení na míru — police,
                lavice, skříňky. Opravíme rozviklanou židli i šuplík, který
                už nejezdí.
              </p>
              <p className="card-note">Nejdřív se podíváme, pak řekneme cenu.</p>
            </article>

            <article className="service-card card-accent">
              <div className="card-mark" aria-hidden="true">
                <svg viewBox="0 0 48 48"><polygon points="8,34 34,8 40,14 14,40" className="mk-roof"/><rect x="6" y="36" width="12" height="6" rx="2" className="mk-body"/></svg>
              </div>
              <h3>Broušení nástrojů</h3>
              <p>
                Nože, nůžky, sekery, řetězy motorových pil, želízka do hoblíků,
                dláta. Nabroušeno tak, jak to potřebuje truhlář — tedy pořádně.
              </p>
              <p className="card-note badge">Drobné zakázky brousíme na počkání</p>
            </article>
          </div>
        </div>
      </section>

      {/* ================= DŮVĚRA / O NÁS ================= */}
      <section className="about" aria-labelledby="onas-h">
        <div className="section-inner about-grid">
          <div className="about-copy">
            <h2 id="onas-h" className="section-title">Dílna, kam se chodí roky</h2>
            <p>
              Truhlářství Františka Woithy je liberecká dílna staré školy:
              hoblice, dláta, brúsky a vůně smrkových hoblin. Žádný e-shop
              s dovozovým zbožím — co si odnesete, vzniklo tady.
            </p>
            <p>
              Budky a krmítka děláme podle zkušeností ornitologů i vlastních
              zim strávených pozorováním, co ptactvu na zahradě opravdu
              funguje. Proto mají správné rozměry, silná prkna a žádný lak,
              který by ptákům vadil.
            </p>
            <ul className="trust-list">
              <li>
                <strong>Masív, ne dřevotříska.</strong> Prkna 18–22 mm, která
                drží teplo a přežijí venku léta.
              </li>
              <li>
                <strong>Bez chemie uvnitř.</strong> Vnitřek budek necháváme
                surový — ptáci si nepotrpí na lazuru.
              </li>
              <li>
                <strong>Osobní domluva.</strong> Zavoláte, domluvíme se,
                přijdete si vyzvednout. Tak to tu funguje.
              </li>
            </ul>
          </div>

          <aside className="about-panel">
            <h3 className="panel-title">Kdy kterou budku věšet</h3>
            <dl className="season-list">
              <div className="season-row">
                <dt>Únor–březen</dt>
                <dd>Věší se budky — sýkory si vybírají byt brzy na jaře.</dd>
              </div>
              <div className="season-row">
                <dt>Říjen–listopad</dt>
                <dd>Čas na krmítko, než přijde první sníh.</dd>
              </div>
              <div className="season-row">
                <dt>Celý rok</dt>
                <dd>Broušení na počkání a opravy nábytku.</dd>
              </div>
            </dl>
            <div className="panel-contact">
              <p className="panel-contact-label">Domluvte se rovnou s panem Woithou</p>
              <a className="panel-phone" href="tel:482710759">482 710 759</a>
              <a className="panel-mail" href="mailto:ptacibudky-krmitka@seznam.cz">ptacibudky-krmitka@seznam.cz</a>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
