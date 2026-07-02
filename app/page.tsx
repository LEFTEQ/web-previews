export default function Page() {
  return (
    <main className="op">
      {/* ===================== HERO ===================== */}
      <section className="hero" aria-labelledby="hero-h">
        <header className="hero-top">
          <div className="wordmark" aria-label="Optika – zdravotnické potřeby, Olomouc">
            <span className="wordmark-o" aria-hidden="true">
              <svg viewBox="0 0 64 32" width="52" height="26" role="img" aria-hidden="true">
                <circle cx="16" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <circle cx="48" cy="16" r="11" fill="none" stroke="currentColor" strokeWidth="2.5" />
                <path d="M27 13 q5 -5 10 0" fill="none" stroke="currentColor" strokeWidth="2.5" />
              </svg>
            </span>
            <span className="wordmark-text">
              OPTIKA<em>Olomouc</em>
            </span>
          </div>
          <a className="hero-tel" href="tel:+420585222444">585 222 444</a>
        </header>

        <div className="hero-body">
          <p className="hero-eyebrow">Oční optika &amp; zdravotnické potřeby · centrum Olomouce</p>
          <h1 id="hero-h">
            <span className="h1-line l1">Vidět ostře</span>
            <span className="h1-line l2">
              je detail<span className="h1-dot" aria-hidden="true">.</span>
            </span>
            <span className="h1-line l3">Ten náš.</span>
          </h1>
          <p className="hero-sub">
            Změříme vám zrak, poradíme s výběrem obruby a brýle zabrousíme přímo u
            nás v dílně. Většinu oprav uděláme na počkání — a s poukazem od lékaře
            vám vyřídíme i příspěvek pojišťovny.
          </p>
          <div className="hero-cta">
            <a className="btn btn-solid" href="tel:+420585222444">Zavolat a objednat se</a>
            <a className="btn btn-ghost" href="mailto:optika@optikaolomouc.cz">Napsat e‑mail</a>
          </div>
        </div>

        {/* Signature: optotyp — Snellenova tabule z písmen, které zná každý z měření zraku */}
        <div className="optotype" aria-hidden="true">
          <span className="row r1">E</span>
          <span className="row r2">F P</span>
          <span className="row r3">T O Z</span>
          <span className="row r4">L P E D</span>
          <span className="row r5">P E C F D</span>
          <span className="row r6">E D F C Z P</span>
          <span className="row r7">F E L O P Z D</span>
        </div>

        <div className="hero-strip" role="list" aria-label="Ve zkratce">
          <span role="listitem">Měření zraku bez čekání</span>
          <span role="listitem" aria-hidden="true" className="strip-dot">●</span>
          <span role="listitem">Vlastní brusírna skel</span>
          <span role="listitem" aria-hidden="true" className="strip-dot">●</span>
          <span role="listitem">Smlouvy se zdravotními pojišťovnami</span>
        </div>
      </section>

      {/* ===================== SLUŽBY ===================== */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <h2 id="sluzby-h">Co u nás vyřídíte</h2>
          <p>
            Od změření dioptrií po hotové brýle — všechno pod jednou střechou,
            bez posílání skel jinam.
          </p>
        </div>

        <div className="svc-grid">
          <article className="svc">
            <div className="svc-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <circle cx="24" cy="24" r="15" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="24" cy="24" r="5" fill="currentColor" />
                <path d="M24 4v6M24 38v6M4 24h6M38 24h6" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Měření zraku</h3>
            <p>
              Kompletní refrakce na přístrojích, ne jen tabulka na zdi. Výsledek
              dostanete rovnou jako podklad pro nové brýle. Objednat se můžete
              telefonicky, obvykle na tentýž týden.
            </p>
          </article>

          <article className="svc">
            <div className="svc-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <circle cx="14" cy="27" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="34" cy="27" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M23 25q1 -4 2 0M5 25 2 20M43 25l3 -5" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Dioptrické a sluneční brýle</h3>
            <p>
              Obruby od dostupných po značkové, skla podle vašeho receptu —
              tenčená, s antireflexem i samozabarvovací. Sluneční brýle vám
              zhotovíme také v dioptrické verzi.
            </p>
          </article>

          <article className="svc">
            <div className="svc-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <path d="M10 38 30 18l6 6L16 44l-8 2z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="37" cy="11" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Opravy a servis na počkání</h3>
            <p>
              Vypadlé sklo, povolený šroubek, ohnuté nožičky — drobné opravy
              uděláme na místě, zatímco počkáte. Seřízení brýlí koupených u nás
              máte vždy zdarma.
            </p>
          </article>

          <article className="svc">
            <div className="svc-mark" aria-hidden="true">
              <svg viewBox="0 0 48 48" width="40" height="40">
                <rect x="8" y="10" width="32" height="28" rx="3" fill="none" stroke="currentColor" strokeWidth="2" />
                <path d="M24 17v14M17 24h14" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <h3>Poukazy a pojišťovny</h3>
            <p>
              Přineste poukaz od očního lékaře a příspěvek pojišťovny odečteme
              rovnou z ceny — papírování vyřídíme za vás. Máme smlouvy se všemi
              běžnými zdravotními pojišťovnami.
            </p>
          </article>
        </div>
      </section>

      {/* ===================== DŮVĚRA / O NÁS ===================== */}
      <section className="trust" aria-labelledby="onas-h">
        <div className="trust-inner">
          <div className="trust-copy">
            <h2 id="onas-h">Optika, kam se v Olomouci vrací celé rodiny</h2>
            <p>
              Nejsme řetězec. Brýle vám vybírá a zabrušuje stejný optik, který si
              vás bude pamatovat, i když přijdete za rok jen dotáhnout šroubek.
              Najdete nás v centru Olomouce, pár minut pěšky od Horního náměstí —
              zastavit se můžete i bez objednání.
            </p>
            <ul className="trust-list">
              <li>
                <strong>Vlastní dílna v zázemí prodejny.</strong> Skla brousíme u
                nás, ne v centrálním skladu — hotové brýle míváme i do týdne.
              </li>
              <li>
                <strong>Poradíme podle tvaru obličeje i receptu.</strong> Neprodáme
                vám nejdražší obrubu, ale tu, ve které budete opravdu vidět a
                kterou unesete od rána do večera.
              </li>
              <li>
                <strong>Zdravotnické potřeby na jednom místě.</strong> Kromě brýlí
                u nás pořídíte lupy, pouzdra, roztoky na čočky a další drobné
                pomůcky.
              </li>
            </ul>
          </div>

          <aside className="trust-card" aria-label="Reference zákazníků">
            <blockquote>
              <p>
                „Prasklá obruba v pátek odpoledne — a v sobotu ráno jsem odcházel
                s opravenými brýlemi. Nikde jinde v Olomouci by mi to takhle
                nevyřešili.“
              </p>
              <footer>— pan Novotný, Olomouc‑Nová Ulice</footer>
            </blockquote>
            <blockquote>
              <p>
                „Paní optička se mnou strávila půl hodiny výběrem obruby a
                výsledek stojí za to. Poprvé mám multifokály, na které jsem si
                zvykla za dva dny.“
              </p>
              <footer>— paní Křížová, Olomouc</footer>
            </blockquote>
            <div className="trust-badge">
              <span className="badge-num">30&nbsp;let</span>
              <span className="badge-label">péče o oči Olomoučanů na stejné adrese</span>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
