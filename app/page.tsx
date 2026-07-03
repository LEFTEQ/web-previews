export default function Page() {
  return (
    <main className="zam-page">
      {/* ================= HERO ================= */}
      <header className="zam-hero">
        <div className="zam-hero-topbar">
          <div className="zam-wordmark" aria-label="VZH Ostrava">
            <span className="zam-wordmark-vzh">VZH</span>
            <span className="zam-wordmark-city">OSTRAVA</span>
          </div>
          <a className="zam-hero-phone" href="tel:+420596000000">
            <span className="zam-hero-phone-label">Zámečnická dílna</span>
            <span className="zam-hero-phone-num">Zavolejte nám</span>
          </a>
        </div>

        <div className="zam-hero-body">
          <p className="zam-hero-eyebrow">Zámečnictví · Ostrava · zakázková kovovýroba</p>
          <h1 className="zam-hero-title">
            <span className="zam-line zam-line-1">Ocel řežeme,</span>
            <span className="zam-line zam-line-2">svařujeme</span>
            <span className="zam-line zam-line-3">
              a stavíme <em>na míru.</em>
            </span>
          </h1>
          <p className="zam-hero-sub">
            Brány, zábradlí, ocelové konstrukce a schodiště z dílny v&nbsp;Ostravě.
            Přijedeme, zaměříme, vyrobíme a namontujeme — od první skici po poslední svár.
          </p>
          <div className="zam-hero-actions">
            <a className="zam-btn zam-btn-solid" href="#sluzby">Co vyrábíme</a>
            <a className="zam-btn zam-btn-line" href="#dilna">Jak pracujeme</a>
          </div>
        </div>

        {/* Signature: svarová housenka — stitched weld bead line */}
        <div className="zam-weld" aria-hidden="true">
          <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="zam-weld-svg">
            <path
              className="zam-weld-path"
              d="M0,30 Q15,10 30,30 Q45,50 60,30 Q75,10 90,30 Q105,50 120,30 Q135,10 150,30 Q165,50 180,30 Q195,10 210,30 Q225,50 240,30 Q255,10 270,30 Q285,50 300,30 Q315,10 330,30 Q345,50 360,30 Q375,10 390,30 Q405,50 420,30 Q435,10 450,30 Q465,50 480,30 Q495,10 510,30 Q525,50 540,30 Q555,10 570,30 Q585,50 600,30 Q615,10 630,30 Q645,50 660,30 Q675,10 690,30 Q705,50 720,30 Q735,10 750,30 Q765,50 780,30 Q795,10 810,30 Q825,50 840,30 Q855,10 870,30 Q885,50 900,30 Q915,10 930,30 Q945,50 960,30 Q975,10 990,30 Q1005,50 1020,30 Q1035,10 1050,30 Q1065,50 1080,30 Q1095,10 1110,30 Q1125,50 1140,30 Q1155,10 1170,30 Q1185,50 1200,30"
            />
          </svg>
          <span className="zam-weld-spark" />
        </div>

        <div className="zam-hero-strip" aria-hidden="true">
          <span>OCEL S235</span>
          <span>·</span>
          <span>NEREZ</span>
          <span>·</span>
          <span>HLINÍK</span>
          <span>·</span>
          <span>ŽÁROVÝ ZINEK</span>
          <span>·</span>
          <span>PRÁŠKOVÁ BARVA</span>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="zam-sluzby" id="sluzby" aria-labelledby="sluzby-title">
        <div className="zam-section-head">
          <h2 id="sluzby-title" className="zam-section-title">Co vám v&nbsp;dílně vyrobíme</h2>
          <p className="zam-section-lead">
            Každý kus děláme na míru podle vašeho pozemku, domu nebo haly.
            Žádné katalogové polotovary — zaměříme na místě a vyrobíme přesně.
          </p>
        </div>

        <div className="zam-grid">
          <article className="zam-card">
            <div className="zam-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="zam-icon">
                <rect x="6" y="10" width="36" height="28" rx="2" fill="none" strokeWidth="2.5" />
                <line x1="15" y1="10" x2="15" y2="38" strokeWidth="2.5" />
                <line x1="24" y1="10" x2="24" y2="38" strokeWidth="2.5" />
                <line x1="33" y1="10" x2="33" y2="38" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Brány a vrata</h3>
            <p>
              Posuvné i křídlové brány, vjezdová vrata s&nbsp;pohonem i&nbsp;bez.
              Zinkujeme a lakujeme, aby vydržely ostravské zimy bez rzi.
            </p>
            <p className="zam-card-detail">Vč. elektrického pohonu a dálkového ovládání</p>
          </article>

          <article className="zam-card">
            <div className="zam-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="zam-icon">
                <path d="M6 40 L18 40 L18 30 L30 30 L30 20 L42 20 L42 10" fill="none" strokeWidth="2.5" />
                <line x1="6" y1="34" x2="42" y2="6" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Schodiště a zábradlí</h3>
            <p>
              Ocelová a nerezová zábradlí na balkony, terasy i&nbsp;do interiéru.
              Točitá i&nbsp;přímá schodiště včetně dřevěných stupnic.
            </p>
            <p className="zam-card-detail">Splňují normu ČSN 74 3305</p>
          </article>

          <article className="zam-card">
            <div className="zam-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="zam-icon">
                <path d="M8 42 L8 14 L24 6 L40 14 L40 42" fill="none" strokeWidth="2.5" />
                <line x1="8" y1="22" x2="40" y2="22" strokeWidth="2.5" />
                <line x1="8" y1="32" x2="40" y2="32" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Ocelové konstrukce</h3>
            <p>
              Přístřešky na auta, pergoly, nosné rámy pro haly a&nbsp;drobné
              průmyslové konstrukce. Vlastní výroba i&nbsp;montáž jeřábem.
            </p>
            <p className="zam-card-detail">Statický návrh zajistíme</p>
          </article>

          <article className="zam-card">
            <div className="zam-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="zam-icon">
                <rect x="14" y="20" width="20" height="22" rx="2" fill="none" strokeWidth="2.5" />
                <path d="M18 20 L18 14 a6 6 0 0 1 12 0 L30 20" fill="none" strokeWidth="2.5" />
                <circle cx="24" cy="30" r="2.5" fill="currentColor" stroke="none" />
                <line x1="24" y1="32" x2="24" y2="37" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Mříže a zabezpečení</h3>
            <p>
              Okenní mříže, bezpečnostní dveře do sklepů a&nbsp;kočárkáren,
              zábrany pro provozovny. Pevné i&nbsp;otevírací provedení.
            </p>
            <p className="zam-card-detail">Pro byty, domy i firmy</p>
          </article>

          <article className="zam-card">
            <div className="zam-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="zam-icon">
                <circle cx="18" cy="18" r="9" fill="none" strokeWidth="2.5" />
                <path d="M24 24 L40 40" strokeWidth="2.5" />
                <path d="M33 33 L39 27" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Zakázková kovovýroba</h3>
            <p>
              Držáky, konzoly, rámy strojů, kotvicí prvky — kusová
              i&nbsp;malosériová výroba podle vašeho výkresu nebo náčrtu na papíře.
            </p>
            <p className="zam-card-detail">Řezání, ohýbání, vrtání, svařování MIG/TIG</p>
          </article>

          <article className="zam-card">
            <div className="zam-card-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" className="zam-icon">
                <path d="M10 38 L24 10 L38 38 Z" fill="none" strokeWidth="2.5" />
                <line x1="17" y1="30" x2="31" y2="30" strokeWidth="2.5" />
              </svg>
            </div>
            <h3>Opravy a servis</h3>
            <p>
              Nejde brána? Uvolněné zábradlí? Prasklý svár? Přijedeme po
              Ostravě a okolí, opravíme na místě nebo odvezeme do dílny.
            </p>
            <p className="zam-card-detail">Obvykle do 3 pracovních dnů</p>
          </article>
        </div>
      </section>

      {/* ================= DÍLNA / DŮVĚRA ================= */}
      <section className="zam-dilna" id="dilna" aria-labelledby="dilna-title">
        <div className="zam-dilna-inner">
          <div className="zam-dilna-text">
            <h2 id="dilna-title" className="zam-section-title zam-section-title-light">
              Dílna, ne kancelář
            </h2>
            <p className="zam-dilna-lead">
              VZH Ostrava je zámečnická firma z&nbsp;města, kde se s&nbsp;ocelí
              pracuje po generace. U&nbsp;nás mluvíte přímo s&nbsp;člověkem,
              který váš kus sám sváří — ne s&nbsp;obchodníkem u&nbsp;telefonu.
            </p>

            <ol className="zam-steps">
              <li className="zam-step">
                <span className="zam-step-num">1</span>
                <div>
                  <h3>Zaměření zdarma</h3>
                  <p>Přijedeme k&nbsp;vám po Ostravě a okolí do 30&nbsp;km, změříme a probereme, co potřebujete.</p>
                </div>
              </li>
              <li className="zam-step">
                <span className="zam-step-num">2</span>
                <div>
                  <h3>Cena předem, písemně</h3>
                  <p>Do týdne dostanete nabídku s&nbsp;konečnou cenou. Žádné vícepráce, na kterých se nedomluvíme.</p>
                </div>
              </li>
              <li className="zam-step">
                <span className="zam-step-num">3</span>
                <div>
                  <h3>Výroba a montáž</h3>
                  <p>Vyrobíme v&nbsp;naší dílně, namontujeme, uklidíme po sobě a&nbsp;dáme záruku 24&nbsp;měsíců na práci i&nbsp;materiál.</p>
                </div>
              </li>
            </ol>
          </div>

          <aside className="zam-dilna-facts">
            <div className="zam-fact">
              <span className="zam-fact-value">Ostrava</span>
              <span className="zam-fact-label">a okolí do 30 km — Havířov, Frýdek-Místek, Hlučín</span>
            </div>
            <div className="zam-fact">
              <span className="zam-fact-value">24 měsíců</span>
              <span className="zam-fact-label">záruka na každou zakázku, práci i materiál</span>
            </div>
            <div className="zam-fact">
              <span className="zam-fact-value">MIG / TIG</span>
              <span className="zam-fact-label">svařujeme ocel, nerez i hliník ve vlastní dílně</span>
            </div>
            <blockquote className="zam-quote">
              <p>
                „Posuvnou bránu nám udělali přesně podle svahu pozemku,
                kde to dva jiní zámečníci vzdali. Drží už třetí zimu.“
              </p>
              <cite>— rodinný dům, Ostrava-Poruba</cite>
            </blockquote>
          </aside>
        </div>
      </section>
    </main>
  );
}
