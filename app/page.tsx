export default function Page() {
  return (
    <main className="vg">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media" aria-hidden="true">
          <img
            src="/hero.webp"
            alt=""
            className="hero-img"
          />
          <div className="hero-shade" />
        </div>

        <div className="hero-inner">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* wordmark: trubka + kolena jako iniciály VG */}
              <svg viewBox="0 0 56 56" width="44" height="44" role="img" aria-label="Značka VG">
                <path d="M8 10 L20 40 L32 10" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M48 18 a12 12 0 1 0 0 20 v-8 h-9" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <span className="brand-text">
              <strong>Gajdušek</strong>
              <em>vodoinstalatérství · Hradec Králové</em>
            </span>
          </div>

          <div className="hero-copy">
            <p className="hero-eyebrow">Instalatér s praxí od roku 1989</p>
            <h1 className="hero-title">
              Voda má téct tam,
              <br />
              kam <span className="tick">má</span>.
              <br />
              O zbytek se postarám.
            </h1>
            <p className="hero-lead">
              Opravy vodovodů, kanalizace a bojlerů v Hradci Králové a okolí.
              Přijedu, změřím, opravím — a řeknu vám cenu předem.
            </p>
            <div className="hero-actions">
              <a className="btn btn-solid" href="tel:+420495000000">
                Zavolat instalatérovi
              </a>
              <a className="btn btn-line" href="mailto:info@instalater-gajdusek.cz">
                Napsat e-mail
              </a>
            </div>
            <ul className="hero-facts" aria-label="Základní fakta">
              <li><b>35+ let</b> praxe v oboru</li>
              <li><b>HK a okolí</b> + Pardubice</li>
              <li><b>Havárie</b> řeším přednostně</li>
            </ul>
          </div>
        </div>

        {/* signature: měřicí páska tlaku — vodoznak řemesla */}
        <div className="gauge-strip" aria-hidden="true">
          <span>0,1 MPa</span><i /><span>0,2</span><i /><span>0,3</span><i /><span>0,4</span><i /><span>0,5</span><i /><span>0,6 MPa · tlaková zkouška OK</span>
        </div>
      </header>

      {/* ===== SLUŽBY ===== */}
      <section className="services" aria-labelledby="sluzby-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás udělám</p>
          <h2 id="sluzby-h">Od kapajícího kohoutku po celý rozvod</h2>
          <p className="section-lead">
            Menší opravy i rekonstrukce malého rozsahu. Materiál dodám od
            ověřených výrobců, nebo klidně pracuji s tím, co si přinesete sami.
          </p>
        </div>

        <div className="services-grid">
          <article className="card">
            <h3><span className="card-glyph" aria-hidden="true">⌖</span> Vnitřní vodovod</h3>
            <p>
              Opravy, úpravy a montáže rozvodů studené i teplé vody v bytech,
              domech a menších provozech. Včetně tlakové zkoušky potrubí.
            </p>
          </article>
          <article className="card">
            <h3><span className="card-glyph" aria-hidden="true">⌖</span> Kanalizace a odpady</h3>
            <p>
              Vnitřní kanalizace, výměny sifonů a odpadních trubek, napojení
              nových zařizovacích předmětů bez zbytečného bourání.
            </p>
          </article>
          <article className="card">
            <h3><span className="card-glyph" aria-hidden="true">⌖</span> Bojlery a ohřívače</h3>
            <p>
              Dodám, vyměním a zapojím ohřívač vody. Poradím s velikostí, aby
              teplá voda vystačila celé rodině a zbytečně netopila peníze.
            </p>
          </article>
          <article className="card">
            <h3><span className="card-glyph" aria-hidden="true">⌖</span> Baterie, WC, umyvadla</h3>
            <p>
              Výměny baterií, splachovačů, van a umyvadel. Připojím pračku i
              myčku tak, aby nikde nekapalo — teď ani za pět let.
            </p>
          </article>
          <article className="card">
            <h3><span className="card-glyph" aria-hidden="true">⌖</span> Vodoměry a vodárny</h3>
            <p>
              Montáž a výměna měřičů vody, servis domácích vodáren a požárních
              vodovodů pro bytové domy i firmy.
            </p>
          </article>
          <article className="card card-emergency">
            <h3><span className="card-glyph" aria-hidden="true">⚠</span> Havárie a prasklé potrubí</h3>
            <p>
              Teče vám do bytu nebo k sousedům? Volejte hned — havárie beru
              přednostně a poradím po telefonu, kde zavřít hlavní uzávěr.
            </p>
            <a className="card-call" href="tel:+420495000000">Zavolat hned</a>
          </article>
        </div>

        <figure className="services-figure">
          <img
            src="/section-1.webp"
            alt="Instalatérské nářadí a měděné trubky připravené k montáži"
            loading="lazy"
          />
          <figcaption>
            Pracuji s mědí, plastem i pozinkem — podle toho, co váš dům potřebuje.
          </figcaption>
        </figure>
      </section>

      {/* ===== DŮVĚRA / O MNĚ ===== */}
      <section className="about" aria-labelledby="omne-h">
        <div className="about-grid">
          <figure className="about-figure">
            <img
              src="/section-2.webp"
              alt="Vladimír Gajdušek při opravě vodovodní přípojky"
              loading="lazy"
            />
            <figcaption className="about-stamp" aria-hidden="true">
              <b>1989</b>
              <span>rok založení</span>
            </figcaption>
          </figure>

          <div className="about-copy">
            <p className="eyebrow">Proč právě já</p>
            <h2 id="omne-h">Jedno jméno, jedna odpovědnost</h2>
            <p>
              Jmenuji se Vladimír Gajdušek a instalatérem jsem od roku 1989.
              Ke každé zakázce jezdím sám — takže ten, kdo vám zvedne telefon,
              je ten samý člověk, který u vás bude klečet u stoupačky.
            </p>
            <p>
              Dělám údržbu veřejných i soukromých objektů, subdodávky pro
              stavební firmy i drobné opravy pro domácnosti. Náročné požadavky
              mě nezaskočí — za třicet pět let jsem viděl skoro všechno.
            </p>

            <ul className="trust-list">
              <li>
                <b>Cena předem.</b> Před zásahem řeknu, kolik to bude stát.
                Žádné překvapení na faktuře.
              </li>
              <li>
                <b>Bezbariérové koupelny.</b> Invalidní program — madla, sedátka
                a úpravy pro pohodlné a bezpečné používání.
              </li>
              <li>
                <b>Kvalitní materiál.</b> Dodávám od renomovaných výrobců,
                ale umím pracovat i s materiálem od vás.
              </li>
              <li>
                <b>Hradec Králové a okolí.</b> Případně Pardubice; vzdálenější
                zakázky po domluvě.
              </li>
            </ul>

            <blockquote className="ref">
              <p>
                „Pan Gajdušek nám vyměnil stoupačku v paneláku na Moravském
                Předměstí za jediný den. Sousedi ani nepoznali, že tekla voda.“
              </p>
              <cite>— paní Horáková, Hradec Králové</cite>
            </blockquote>
          </div>
        </div>
      </section>
    </main>
  );
}
