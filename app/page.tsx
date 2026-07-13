export default function Page() {
  const services = [
    {
      title: "Hotely a penziony",
      text: "Ložní prádlo, ručníky i restaurační textil vypereme, usušíme, složíme a připravíme rovnou do provozu.",
      meta: "Pravidelný svoz podle obsazenosti",
    },
    {
      title: "Zdravotnická zařízení",
      text: "Zpracujeme zdravotnické a operační prádlo i pracovní oděvy s využitím účinných dezinfekčních programů.",
      meta: "Certifikované dezinfekční programy",
    },
    {
      title: "Lázně a provozy",
      text: "Pro lázeňská a průmyslová zařízení nastavíme praní, balení i oběh prádla podle skutečných potřeb provozu.",
      meta: "Individuální režim zakázky",
    },
  ];

  return (
    <main>
      <section className="hero" id="uvod" aria-labelledby="hero-title">
        <nav className="topbar" aria-label="Hlavní navigace">
          <a className="wordmark" href="#uvod" aria-label="BSB Prádelny, úvod">
            <span className="wordmarkMark" aria-hidden="true">B</span>
            <span>BSB <strong>prádelny</strong></span>
          </a>
          <div className="navLinks">
            <a href="#sluzby">Co pereme</a>
            <a href="#jistota">Jak pracujeme</a>
          </div>
          <a className="phoneLink" href="tel:+420607097749">Zavolat <span>607 097 749</span></a>
        </nav>

        <div className="heroGrid">
          <div className="heroCopy">
            <p className="eyebrow">Profesionální prádelna · Olomouc–Holice</p>
            <h1 id="hero-title">Prádlo, které se vrací <em>do provozu.</em></h1>
            <p className="heroLead">
              Pereme pro hotely, zdravotnictví, lázně i průmysl. Čisté, složené a připravené přesně na směnu, pokoj nebo oddělení.
            </p>
            <div className="heroActions">
              <a className="primaryButton" href="tel:+420607097749">Domluvit svoz</a>
              <p>Svoz po Olomouci a okolí zdarma<br />podle dohodnutého harmonogramu.</p>
            </div>
          </div>

          <div className="heroVisual">
            <img src="/hero.webp" alt="Čisté profesionálně složené prádlo v olomoucké prádelně BSB" />
            <div className="dispatchTag" aria-label="Zakázka připravená k rozvozu">
              <span className="tagTop">BSB / výstupní kontrola</span>
              <strong>ČISTÉ<br />A SLOŽENÉ</strong>
              <span className="tagBottom">Olomouc → váš provoz</span>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby" aria-labelledby="services-title">
        <header className="sectionHeading">
          <p className="eyebrow">Co u nás můžete nechat vyprat</p>
          <h2 id="services-title">Jeden oběh prádla.<br />Méně starostí v provozu.</h2>
          <p>Zakázku nastavíme podle druhu textilu, požadované hygieny i rytmu vašeho zařízení.</p>
        </header>

        <div className="serviceLayout">
          <figure className="serviceImage">
            <img src="/section-1.webp" alt="Průmyslové pračky používané pro profesionální praní prádla" />
            <figcaption>Technologie Miele · kvalitní prací prostředky Procter &amp; Gamble</figcaption>
          </figure>

          <div className="serviceList">
            {services.map((service) => (
              <article className="serviceItem" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.meta}</span>
              </article>
            ))}
          </div>
        </div>

        <div className="extras" aria-label="Doplňkové prádelenské služby">
          <span>Balení do perforovaných fólií</span>
          <span>Opravy prádla po dohodě</span>
          <span>Svoz a rozvoz podle harmonogramu</span>
        </div>
      </section>

      <section className="trust" id="jistota" aria-labelledby="trust-title">
        <div className="trustImage">
          <img src="/section-2.webp" alt="Kontrola čistého prádla před zabalením a rozvozem zákazníkovi" />
          <div className="imageNote">Každá zakázka projde výstupní kontrolou před zabalením.</div>
        </div>

        <div className="trustCopy">
          <p className="eyebrow">Jistota pro citlivé provozy</p>
          <h2 id="trust-title">Čistota není dojem. Je to postup.</h2>
          <p className="trustLead">
            Od převzetí po rozvoz držíme prádlo v domluveném režimu. Víte, kdy odjíždí, jak se zpracuje a kdy se vrátí.
          </p>

          <dl className="proofList">
            <div>
              <dt>Hygiena</dt>
              <dd>K zakázce automaticky poskytujeme certifikát účinnosti používaných dezinfekčních programů.</dd>
            </div>
            <div>
              <dt>Péče o textil</dt>
              <dd>Program a prostředky volíme podle materiálu, aby prádlo zůstalo čisté, příjemné a déle sloužilo.</dd>
            </div>
            <div>
              <dt>Olomouc a okolí</dt>
              <dd>Pravidelný svoz i rozvoz sladíme s provozem zařízení, ne naopak.</dd>
            </div>
          </dl>

          <div className="contactLine">
            <div>
              <span>Prádelna</span>
              <strong>Nový Dvůr 138, Olomouc–Holice</strong>
            </div>
            <a href="mailto:info@bsb-pradelny.cz">Napsat poptávku</a>
          </div>
        </div>
      </section>
    </main>
  );
}
