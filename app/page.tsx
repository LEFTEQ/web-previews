export default function Page() {
  const sluzby = [
    {
      no: "01",
      t: "Sádrokartonové konstrukce",
      d: "Příčky, podhledy, předsazené stěny a akustické konstrukce. Rovná deska, zatmelené spáry, připraveno pod malbu.",
    },
    {
      no: "02",
      t: "Úpravy interiérů",
      d: "Kompletní přestavby bytů i kanceláří — od zaměření po předání. Řešíme dispozici, světlo i vedení instalací.",
    },
    {
      no: "03",
      t: "Zateplení budov",
      d: "Kontaktní zateplovací systémy pro rodinné domy i bytové objekty. Nižší účty za topení, zdravější stěny.",
    },
    {
      no: "04",
      t: "Tepelné izolace",
      d: "Technické izolace potrubí, rozvodů a strojoven. Přesně podle projektu a norem, s protokolem o provedení.",
    },
    {
      no: "05",
      t: "Rekonstrukce a realizace staveb",
      d: "Rodinné domy na klíč i dílčí stavební práce. Jeden tým, jeden termín, jedna zodpovědnost.",
    },
    {
      no: "06",
      t: "Subdodávky pro firmy",
      d: "Kapacita 25–40 vyškolených montážníků. Naskočíme do většího projektu jako spolehlivý dodavatel SDK.",
    },
  ];

  return (
    <main>
      <div className="tk">
        <header className="rail">
          <div className="mark">
            TEP<b>KOM</b>
            <span className="co">spol. s r.o.</span>
          </div>
          <nav className="rail-meta" aria-label="Kontakt">
            <span>Praha 4 · Pod Pekařkou</span>
            <a href="tel:+420261226565">261 226 565</a>
            <a href="mailto:tepkom@tepkom.cz">tepkom@tepkom.cz</a>
          </nav>
        </header>
      </div>

      <section className="tk hero">
        <div className="hero-grid">
          <div>
            <p className="hero-eye">Sádrokartonáři · Praha</p>
            <h1 className="hero-h">
              Natáhneme <span className="snap">rovnou</span> čáru přes celou stavbu.
            </h1>
            <p className="hero-sub">
              Příčky, podhledy a interiéry, které lícují na milimetr — od zaměření
              po zatmelenou spáru připravenou pod štětec.
            </p>
            <div className="hero-actions">
              <a className="btn" href="tel:+420261226565">Zavolat na 261 226 565</a>
              <a className="btn-ghost" href="mailto:tepkom@tepkom.cz">Napsat poptávku</a>
            </div>
          </div>

          <figure className="hero-figure">
            <img
              src="/hero.webp"
              alt="Montáž sádrokartonové konstrukce na pražské stavbě"
              loading="eager"
            />
            <span className="snap-line" aria-hidden="true" />
            <figcaption className="fig-tag">Realizace · Praha 4</figcaption>
          </figure>
        </div>

        <div className="spec">
          <div>
            <div className="k">25–40</div>
            <div className="l">montážníků v týmu</div>
          </div>
          <div>
            <div className="k">ISO 9001</div>
            <div className="l">řízení jakosti</div>
          </div>
          <div>
            <div className="k">6</div>
            <div className="l">specializací pod jednou firmou</div>
          </div>
          <div>
            <div className="k">Praha</div>
            <div className="l">a okolí · rychlý výjezd</div>
          </div>
        </div>
      </section>

      <section className="tk block" aria-labelledby="sluzby-h">
        <div className="sec-head">
          <span className="sec-num">§ 01</span>
          <div>
            <h2 className="sec-title" id="sluzby-h">Co u nás objednáte</h2>
          </div>
        </div>
        <p className="sec-lead">
          Kompletní služby pro koncového zákazníka i subdodávky pro stavební firmy.
          Vyberte konstrukci — ozveme se s termínem a cenou.
        </p>

        <div className="sheets">
          {sluzby.map((s) => (
            <article className="sheet rv" key={s.no} tabIndex={0}>
              <span className="edge" aria-hidden="true" />
              <span className="no">{s.no}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="tk block" aria-labelledby="ofirme-h">
        <div className="sec-head">
          <span className="sec-num">§ 02</span>
          <div>
            <h2 className="sec-title" id="ofirme-h">Proč Tepkom</h2>
          </div>
        </div>

        <div className="about">
          <figure className="about-fig">
            <img
              src="/section-1.webp"
              alt="Hotový sádrokartonový podhled s rovnými spárami připravený pod malbu"
              loading="lazy"
            />
          </figure>

          <div className="about-body">
            <p>
              Tepkom je pražská stavební realizační společnost. Děláme sádrokartony,
              úpravy interiérů, zateplení a tepelné izolace — od menších bytových
              přestaveb po rodinné domy na klíč.
            </p>
            <p>
              Naši montážníky průběžně školíme přímo u výrobců systémů, takže víme,
              jak se který profil chová. Kde slíbíme rovinu, tam rovina bude.
            </p>

            <div className="cert">
              <div className="badge">
                ISO<br /><span>9001</span>
              </div>
              <div className="txt">
                <b>Certifikát QMS-2819/2010</b>
                Systém řízení jakosti dle ISO 9001, certifikováno u STAVCERT s.r.o.
              </div>
            </div>

            <div className="jobs">
              <div className="lab">Hledáme do party</div>
              <ul>
                <li>Montážník SDK — dlouhodobá spolupráce</li>
                <li>Řidič skupiny C1/C</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
