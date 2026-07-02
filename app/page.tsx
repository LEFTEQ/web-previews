export default function Page() {
  return (
    <main className="bf">
      {/* ===== HERO ===== */}
      <header className="bf-hero">
        <div className="bf-hero-top">
          <div className="bf-wordmark" aria-label="Bohemia FR Systems">
            <span className="bf-wordmark-main">BOHEMIA</span>
            <span className="bf-wordmark-sub">FR&nbsp;SYSTEMS</span>
          </div>
          <nav className="bf-hero-nav" aria-label="Rychlý kontakt">
            <a className="bf-tel" href="tel:+420495212802">495 212 802</a>
            <span className="bf-hero-loc">Hradec Králové</span>
          </nav>
        </div>

        <div className="bf-hero-body">
          <p className="bf-hero-eyebrow">Hydroizolace a tepelné izolace plochých střech</p>
          <h1 className="bf-hero-title">
            <span className="bf-line bf-line-1">Střecha je souvrství.</span>
            <span className="bf-line bf-line-2">My dodáváme každou vrstvu.</span>
          </h1>
          <p className="bf-hero-lead">
            Asfaltové pásy PLUVITEC a BOHEMIATEC, fólie z mPVC a TPO,
            tepelné izolace a kompletní doplňky. Dovážíme, skladujeme
            a poradíme se skladbou — od roku 2010.
          </p>
          <div className="bf-hero-cta">
            <a className="bf-btn bf-btn-solid" href="tel:+420495212802">Zavolat: 495 212 802</a>
            <a className="bf-btn bf-btn-ghost" href="mailto:info@pluvitec.cz">Napsat e-mail</a>
          </div>
        </div>

        {/* Signature: řez střešním souvrstvím — vrstvy pojmenované tak, jak leží na střeše */}
        <div className="bf-strata" aria-hidden="true">
          <div className="bf-stratum bf-s1"><span>hydroizolační pás · vrchní</span></div>
          <div className="bf-stratum bf-s2"><span>hydroizolační pás · podkladní</span></div>
          <div className="bf-stratum bf-s3"><span>tepelná izolace</span></div>
          <div className="bf-stratum bf-s4"><span>parozábrana</span></div>
          <div className="bf-stratum bf-s5"><span>nosná konstrukce</span></div>
        </div>
      </header>

      {/* ===== SORTIMENT ===== */}
      <section className="bf-section bf-sortiment" aria-labelledby="sortiment-h">
        <div className="bf-section-head">
          <h2 id="sortiment-h">Co u nás pořídíte</h2>
          <p className="bf-section-note">
            Vše, co ploché střeše chybí mezi betonem a nebem. Sortiment držíme
            skladem v Hradci Králové a v konsignačním skladu v Brně.
          </p>
        </div>

        <div className="bf-grid">
          <article className="bf-card">
            <div className="bf-card-tag">Asfaltové pásy</div>
            <h3>PLUVITEC &amp; BOHEMIATEC</h3>
            <p>
              Modifikované asfaltové pásy pro nové střechy i rekonstrukce.
              Včetně pásu TECH 3000 ANTIRADICE proti prorůstání kořenů —
              pro střešní zahrady, parkoviště a podzemní stavby, s požární
              klasifikací B<sub>roof</sub>(t3).
            </p>
          </article>

          <article className="bf-card">
            <div className="bf-card-tag">Fólie mPVC</div>
            <h3>ARMOURPLAN (IKO)</h3>
            <p>
              Prémiový fóliový systém z měkčeného PVC, který dovážíme
              už od roku 2012. Osvědčená volba pro mechanicky kotvené
              i přitížené skladby plochých střech.
            </p>
          </article>

          <article className="bf-card">
            <div className="bf-card-tag">Fólie TPO</div>
            <h3>SINTOFOIL (IMPER)</h3>
            <p>
              Fóliový systém z TPO s dlouhou životností a bez změkčovadel.
              Do Česka jej vozíme od roku 2010 — víme přesně, jak se chová
              na střeše i po letech.
            </p>
          </article>

          <article className="bf-card">
            <div className="bf-card-tag">Izolace a doplňky</div>
            <h3>Tepelné izolace + kompletní příslušenství</h3>
            <p>
              Ke každému střešnímu systému dodáme tepelnou izolaci,
              parozábrany, kotvení, tvarovky a detaily. Jedna objednávka,
              celé souvrství, žádné dohánění chybějících položek.
            </p>
          </article>
        </div>

        <aside className="bf-fve">
          <div className="bf-fve-mark" aria-hidden="true">☀</div>
          <div>
            <h3>Chystáte fotovoltaiku na plochou střechu?</h3>
            <p>
              Před umístěním panelů se vyplatí posoudit stav střešního pláště —
              po instalaci už se k hydroizolaci dostanete jen složitě.
              Poradíme, jak plášť zhodnotit a na co si dát pozor.
            </p>
          </div>
        </aside>
      </section>

      {/* ===== DŮVĚRA ===== */}
      <section className="bf-section bf-trust" aria-labelledby="trust-h">
        <div className="bf-section-head">
          <h2 id="trust-h">Firma, za kterou stojí tři inženýři a patnáct sezón</h2>
          <p className="bf-section-note">
            Bohemia FR Systems vedou Ing. Jiří Klofanda, Ing. Miloslav Paroubek
            a Ing. Michal Malý. Materiály, které prodáváme, známe z technických
            listů i ze střech.
          </p>
        </div>

        <div className="bf-trust-grid">
          <div className="bf-fact">
            <div className="bf-fact-key">Referenční realizace</div>
            <h3>MEPHARED II — Kampus UK a FN Hradec Králové</h3>
            <p>
              Hydroizolace spodní stavby na jedné z největších staveb
              v kraji, zima 2023/24. Když materiál obstojí pod univerzitním
              kampusem, obstojí i na vaší střeše.
            </p>
          </div>

          <div className="bf-fact">
            <div className="bf-fact-key">Odkud dodáváme</div>
            <h3>Hradec Králové + konsignační sklad Brno</h3>
            <p>
              Sídlo a sklad: Kydlinovská 161/27, Hradec Králové.
              Pro Moravu vydáváme zboží v Brně‑Řečkovicích
              (areál Pharma Park, budova 33), výdej 6–8 hod,
              jindy po telefonické domluvě.
            </p>
          </div>

          <div className="bf-fact">
            <div className="bf-fact-key">Jak pracujeme</div>
            <h3>Poradíme se skladbou, ne jen s cenou</h3>
            <p>
              Navrhneme skladbu souvrství pro váš objekt, dodáme technické
              listy a pohlídáme, aby spolu vrstvy fungovaly. Realizačním
              firmám i investorům jsme partnerem, ne jen velkoobchodem.
            </p>
          </div>
        </div>

        <div className="bf-timeline" role="list" aria-label="Milníky firmy">
          <div className="bf-tl-item" role="listitem">
            <span className="bf-tl-year">2010</span>
            <span className="bf-tl-text">Začínáme dovážet TPO fólie SINTOFOIL</span>
          </div>
          <div className="bf-tl-item" role="listitem">
            <span className="bf-tl-year">2012</span>
            <span className="bf-tl-text">Do sortimentu přibývá mPVC ARMOURPLAN</span>
          </div>
          <div className="bf-tl-item" role="listitem">
            <span className="bf-tl-year">2021</span>
            <span className="bf-tl-text">Otevíráme konsignační sklad v Brně</span>
          </div>
          <div className="bf-tl-item" role="listitem">
            <span className="bf-tl-year">2024</span>
            <span className="bf-tl-text">Hydroizolace spodní stavby kampusu UK v HK</span>
          </div>
        </div>
      </section>
    </main>
  );
}
