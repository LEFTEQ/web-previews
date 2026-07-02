export default function Page() {
  return (
    <main className="mst">
      {/* ===== HERO ===== */}
      <header className="hero">
        <div className="hero-media">
          <img
            src="/hero.webp"
            alt="Truhlář Jaroslav Morgenstern hobluje dubovou desku ve své plzeňské dílně"
          />
        </div>

        <div className="hero-panel">
          <div className="brand">
            <span className="brand-mark" aria-hidden="true">
              {/* dovetail — rybinový spoj jako značka */}
              <svg viewBox="0 0 48 24" width="48" height="24" role="img" aria-label="">
                <path d="M0 0h10l6 24H0zM22 0h10l-6 24H16zM38 0h10v24H32z" fill="currentColor" />
              </svg>
            </span>
            <span className="brand-word">
              MORGEN<b>STERN</b>
              <small>truhlářství · Plzeň</small>
            </span>
          </div>

          <h1>
            Nábytek, který se<br />
            <em>rýsuje tužkou</em><br />
            a spojuje rybinou.
          </h1>

          <p className="hero-lead">
            Zakázkové truhlářství v Plzni. Masiv i dýha, kuchyně, vestavěné
            skříně a dveře — od zaměření u vás doma po montáž na milimetr.
          </p>

          <div className="hero-acts">
            <a className="btn btn-solid" href="tel:+420602111222">Zavolat truhláři</a>
            <a className="btn btn-line" href="mailto:dilna@morgenstern-truhlarstvi.cz">Poslat poptávku</a>
          </div>

          <dl className="hero-facts">
            <div><dt>Dílna</dt><dd>Plzeň-Skvrňany</dd></div>
            <div><dt>Řemeslu se věnuji</dt><dd>od roku 1998</dd></div>
            <div><dt>Zaměření</dt><dd>zdarma po Plzni</dd></div>
          </dl>
        </div>
      </header>

      {/* ===== SLUŽBY — pořadí zakázky ===== */}
      <section className="work" aria-labelledby="work-h">
        <div className="section-head">
          <p className="eyebrow">Co pro vás vyrobím</p>
          <h2 id="work-h">Každý kus začíná deskou dřeva<br />a končí montáží u vás.</h2>
        </div>

        <div className="work-grid">
          <figure className="work-photo">
            <img
              src="/section-1.webp"
              alt="Rozpracovaná dubová kuchyňská linka v dílně — korpusy, dvířka a rybinové spoje zásuvek"
            />
            <figcaption>Dubová kuchyně před montáží — zásuvky na rybinu, fronty z jednoho kmene.</figcaption>
          </figure>

          <ul className="work-list">
            <li>
              <span className="work-dim" aria-hidden="true">kuchyně</span>
              <h3>Kuchyně na míru</h3>
              <p>
                Korpusy z laťovky nebo překližky, fronty z masivu či dýhy.
                Zásuvky skládám na rybinu — vydrží desítky let otvírání.
              </p>
            </li>
            <li>
              <span className="work-dim" aria-hidden="true">skříně</span>
              <h3>Vestavěné skříně a knihovny</h3>
              <p>
                Na milimetr do niky, pod šikminu i kolem komína. Vnitřek
                rozvrhneme podle toho, co skutečně ukládáte.
              </p>
            </li>
            <li>
              <span className="work-dim" aria-hidden="true">stoly</span>
              <h3>Stoly a masivní desky</h3>
              <p>
                Jídelní stoly z dubu, jasanu nebo ořechu. Desku vybíráte
                v dílně — uvidíte kresbu dřeva, ne katalogový vzorek.
              </p>
            </li>
            <li>
              <span className="work-dim" aria-hidden="true">dveře</span>
              <h3>Dveře a opravy</h3>
              <p>
                Interiérové dveře včetně zárubní. Opravím i starý kus po
                babičce — často stačí nové čepy a povrch olejem.
              </p>
            </li>
          </ul>
        </div>

        <ol className="steps" aria-label="Jak zakázka probíhá">
          <li><b>Zaměření</b><span>Přijedu k vám, změřím a poslechnu si, co potřebujete.</span></li>
          <li><b>Nákres a cena</b><span>Do týdne máte nákres tužkou a pevnou cenu. Bez záloh na vzduch.</span></li>
          <li><b>Výroba v dílně</b><span>Řežu, hobluji, spojuji. Můžete se přijít podívat, jak kus roste.</span></li>
          <li><b>Montáž</b><span>Usadím, seřídím, uklidím po sobě. Hotovo za jeden den.</span></li>
        </ol>
      </section>

      {/* ===== O DÍLNĚ / DŮVĚRA ===== */}
      <section className="trust" aria-labelledby="trust-h">
        <div className="trust-grid">
          <div className="trust-text">
            <p className="eyebrow">Kdo vám to vyrobí</p>
            <h2 id="trust-h">Jedna dílna, jeden truhlář,<br />jedno jméno na výrobku.</h2>
            <p>
              Jmenuji se Jaroslav Morgenstern a truhlařím v Plzni přes
              pětadvacet let. Nemám showroom ani obchodníky — máte přímo mě,
              od prvního telefonátu po poslední seřízený pant. Dřevo beru od
              pil na Plzeňsku a nechávám ho v dílně vyschnout, než se ho
              dotkne pila.
            </p>
            <p>
              Na každý kus, který dílnu opustí, dávám <strong>pět let záruky</strong>.
              A protože vím, kde bydlí — vyrobil jsem ho — přijedu ho i po
              letech seřídit.
            </p>

            <ul className="quotes">
              <li>
                <blockquote>
                  „Kuchyň do starého bytu na Slovanech, žádná stěna rovná.
                  Pan Morgenstern to zaměřil dvakrát a sedlo to napoprvé.“
                </blockquote>
                <cite>— rodina Hrubých, Plzeň-Slovany</cite>
              </li>
              <li>
                <blockquote>
                  „Jasanový stůl pro šest lidí. Vybírali jsme desku přímo
                  v dílně a je to nejhezčí věc, co doma máme.“
                </blockquote>
                <cite>— Marek V., Starý Plzenec</cite>
              </li>
            </ul>
          </div>

          <figure className="trust-photo">
            <img
              src="/section-2.webp"
              alt="Jaroslav Morgenstern ve své dílně mezi hoblicí, ručními hoblíky a vyschlými fošnami"
            />
            <figcaption>Dílna ve Skvrňanech — hoblice po dědovi, fošny schnou dva roky.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
