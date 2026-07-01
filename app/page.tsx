export default function Page() {
  return (
    <main className="ag">
      {/* ===== HERO ===== */}
      <header className="ag-hero">
        <div className="ag-hero-media" aria-hidden="true">
          <img src="/hero.webp" alt="" />
          <div className="ag-hero-tint" />
          <div className="ag-crack" aria-hidden="true">
            <svg viewBox="0 0 1200 800" preserveAspectRatio="xMidYMid slice" focusable="false">
              <g className="ag-crack-lines">
                <path d="M420 390 L120 180" />
                <path d="M420 390 L60 460" />
                <path d="M420 390 L260 760" />
                <path d="M420 390 L780 120" />
                <path d="M420 390 L1160 300" />
                <path d="M420 390 L1080 700" />
                <path d="M420 390 L640 800" />
                <path d="M300 305 L340 420" />
                <path d="M560 300 L610 430" />
                <path d="M330 500 L470 520" />
              </g>
              <circle className="ag-crack-hit" cx="420" cy="390" r="7" />
            </svg>
          </div>
        </div>

        <div className="ag-hero-inner">
          <div className="ag-topbar">
            <span className="ag-wordmark">
              AUTOSKLO<i>NB</i>
              <small>Nový Bor</small>
            </span>
            <a className="ag-topcall" href="tel:+420487726358">
              <span className="ag-topcall-dot" aria-hidden="true" />
              Zavolat hned
            </a>
          </div>

          <div className="ag-hero-copy">
            <p className="ag-eyebrow">Výměna a opravy autoskel · Autofólie · Nový Bor</p>
            <h1>
              Prasklina ve skle<br />
              <span className="ag-accent">nepočká.</span> My taky ne.
            </h1>
            <p className="ag-lead">
              Kamínek od náklaďáku, mráz, vloupání — čelní sklo vyměníme zpravidla do
              druhého dne. Menší odštěp od kamínku opravíme na počkání, často zdarma
              přes vaše povinné ručení.
            </p>
            <div className="ag-hero-actions">
              <a className="ag-btn ag-btn-primary" href="tel:+420487726358">
                Zavolat: 487&nbsp;726&nbsp;358
              </a>
              <a className="ag-btn ag-btn-ghost" href="mailto:info@autosklonb.cz">
                Napsat e‑mail
              </a>
            </div>
            <ul className="ag-hero-facts" aria-label="Rychlá fakta">
              <li><strong>Do 24 h</strong><span>běžná výměna čelního skla</span></li>
              <li><strong>0 Kč</strong><span>oprava odštěpu přes pojišťovnu</span></li>
              <li><strong>Lipová 824</strong><span>Arnultovice, Nový Bor</span></li>
            </ul>
          </div>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="ag-section ag-services" aria-labelledby="sluzby-h">
        <div className="ag-section-head">
          <p className="ag-eyebrow">Co u nás vyřešíte</p>
          <h2 id="sluzby-h">Od kamínku po kompletní sklo</h2>
          <p className="ag-section-lead">
            Ve městě skla se sklem umíme. Pracujeme se skly a fóliemi s certifikací
            pro provoz na silnici — žádné tržnicové polepy.
          </p>
        </div>

        <div className="ag-services-grid">
          <article className="ag-card">
            <span className="ag-card-tag">Nejčastější</span>
            <h3>Výměna čelního skla</h3>
            <p>
              Originální i kvalitní alternativní skla pro osobní vozy, dodávky
              i nákladní auta. Sklo objednáme, vyměníme a auto vám vrátíme
              zpravidla do 24 hodin.
            </p>
            <p className="ag-card-note">Zajistíme i seřízení kamer a senzorů za sklem.</p>
          </article>

          <article className="ag-card">
            <span className="ag-card-tag">Na počkání</span>
            <h3>Oprava odštěpu od kamínku</h3>
            <p>
              Ťuknutí menší než dvoukoruna zapravíme pryskyřicí za zhruba
              30&nbsp;minut. Prasklina se nešíří a sklo nemusíte měnit.
            </p>
            <p className="ag-card-note">Přes povinné ručení viníka obvykle zcela zdarma.</p>
          </article>

          <article className="ag-card">
            <span className="ag-card-tag">Komfort &amp; ochrana</span>
            <h3>Autofólie na míru</h3>
            <p>
              Tónování skel certifikovanými fóliemi: méně letního horka, až 99,5&nbsp;%
              UV záření venku, soukromí uvnitř a střepy, které při nehodě drží pohromadě.
            </p>
            <p className="ag-card-note">Fólie lepíme i na okna domů a provozoven.</p>
          </article>

          <article className="ag-card">
            <span className="ag-card-tag">Proti zlodějům</span>
            <h3>Značení skel CEBIA</h3>
            <p>
              Pískované bezpečnostní značení všech skel vozu s registrací v databázi
              CEBIA. Zloděje odradí a pojišťovny ho zohledňují ve slevách.
            </p>
            <p className="ag-card-note">Hotovo do hodiny, značení je trvalé.</p>
          </article>
        </div>

        <figure className="ag-figure">
          <img
            src="/section-1.webp"
            alt="Technik Autoskla NB usazuje nové čelní sklo do vozu v dílně v Novém Boru"
          />
          <figcaption>
            Lepíme na moderní polyuretanová lepidla — s autem vyjedete bezpečně už
            hodinu po výměně.
          </figcaption>
        </figure>
      </section>

      {/* ===== POJISTKA & DŮVĚRA ===== */}
      <section className="ag-section ag-trust" aria-labelledby="pojistka-h">
        <div className="ag-trust-grid">
          <div className="ag-trust-copy">
            <p className="ag-eyebrow">Pojistná událost bez papírování</p>
            <h2 id="pojistka-h">Škodu vyřídíme s pojišťovnou za vás</h2>
            <p className="ag-section-lead">
              Nemusíte nikam volat ani vyplňovat formuláře. Přijedete s prasklým
              sklem, odjedete s novým — zbytek je naše práce.
            </p>

            <ol className="ag-steps">
              <li>
                <strong>Zavoláte nebo přijedete.</strong>
                <span>Stačí velký techničák a číslo pojistky. Poradíme, jestli sklo
                stačí opravit, nebo je nutná výměna.</span>
              </li>
              <li>
                <strong>Nahlásíme škodu pojišťovně.</strong>
                <span>Fotodokumentaci, protokol i komunikaci s likvidátorem
                vyřídíme my. Spolupracujeme se všemi pojišťovnami v ČR.</span>
              </li>
              <li>
                <strong>Vyměníme a fakturujeme napřímo.</strong>
                <span>Máte-li připojištění skel, neplatíte nic nebo jen spoluúčast.
                Peníze od pojišťovny jdou rovnou nám.</span>
              </li>
            </ol>
          </div>

          <div className="ag-trust-side">
            <img
              src="/section-2.webp"
              alt="Detail opravy odštěpu na čelním skle — pryskyřice vyplňuje prasklinu od kamínku"
            />
            <blockquote className="ag-quote">
              <p>
                „Kamínek na dálnici, v pátek odpoledne. V pondělí ráno jsem měl nové
                sklo a s pojišťovnou jsem nemusel řešit vůbec nic.“
              </p>
              <cite>— pan Havránek, Škoda Octavia, Česká Lípa</cite>
            </blockquote>
            <div className="ag-since">
              <strong>Sklu rozumíme přes 20 let.</strong>
              <span>
                Najdete nás na adrese Lipová&nbsp;824, Arnultovice — hned u výpadovky
                na Cvikov. A okna vám při každé návštěvě umyjeme zdarma.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
