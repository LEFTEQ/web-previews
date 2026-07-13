export default function Page() {
  const services = [
    {
      title: "Vedení účetnictví",
      text: "Doklady, DPH, kontrolní hlášení i závěrku zpracuje vaše přidělená účetní. Termíny hlídáme za vás.",
      tag: "Každý měsíc včas",
    },
    {
      title: "Mzdy a personalistika",
      text: "Připravíme mzdy, odvody i podklady pro zaměstnance. Vy jen potvrdíte změny v přehledném portálu.",
      tag: "Pro malé i větší týmy",
    },
    {
      title: "Daně a úřady",
      text: "Daňoví poradci zkontrolují podklady, připraví přiznání a zastoupí vás při jednání s úřady.",
      tag: "S odborným dohledem",
    },
  ];

  return (
    <main>
      <header className="siteHeader">
        <a className="wordmark" href="#top" aria-label="Trivi – zpět nahoru">
          tri<span>vi</span><i aria-hidden="true">✓</i>
        </a>
        <nav aria-label="Hlavní navigace">
          <a href="#sluzby">Služby</a>
          <a href="#zkusenost">Proč Trivi</a>
          <a className="clientLink" href="mailto:obchod@trivi.com">Klientská zóna ↗</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="heroCopy">
          <p className="eyebrow"><span>Účetní tým z Liberce</span><span>Online pro celé Česko</span></p>
          <h1>Vaše doklady.<br />Naše <em>starost.</em></h1>
          <p className="heroLead">Účetnictví, daně a mzdy převezme skutečný člověk. Vy máte v aplikaci pořádek a v podnikání klid.</p>
          <div className="heroActions">
            <a className="primaryButton" href="mailto:obchod@trivi.com?subject=Chci%20spočítat%20cenu%20účetnictví">Spočítat cenu</a>
            <a className="phoneLink" href="tel:+420800806040"><small>Bezplatná linka</small>800 80 60 40</a>
          </div>
          <p className="transitionNote">Přechod od současné účetní vyřídíme společně, bez výpadku a chaosu.</p>
        </div>

        <div className="heroVisual">
          <img src="/hero.webp" alt="Účetní specialistka Trivi pracuje s digitálními doklady" />
          <div className="ledgerCard" aria-label="Ukázka zpracování dokladů">
            <div className="ledgerTop"><span>ČERVENEC / DOKLADY</span><strong>12 z 12</strong></div>
            <div className="ledgerRow"><span>Faktury přijaté</span><b>Zaúčtováno</b></div>
            <div className="ledgerRow"><span>Bankovní pohyby</span><b>Spárováno</b></div>
            <div className="ledgerRow"><span>DPH</span><b>Termín hlídáme</b></div>
            <div className="ledgerStamp">VŠE SEDÍ <span>✓</span></div>
          </div>
        </div>
      </section>

      <section className="services" id="sluzby">
        <div className="sectionIntro">
          <p className="sectionLabel">Co převezmeme</p>
          <h2>Účetní oddělení,<br />které nemusíte stavět.</h2>
          <p>Jedna účetní zná vaše podnikání. Za ní stojí tým specialistů a online nástroje, ve kterých najdete vše podstatné 24/7.</p>
        </div>

        <div className="servicesImage">
          <img src="/section-1.webp" alt="Online účetní portál Trivi s přehledem firemních dokladů" />
          <span>Doklady bezpečně v cloudu</span>
        </div>

        <div className="serviceList">
          {services.map((service) => (
            <article className="serviceItem" key={service.title}>
              <div className="check" aria-hidden="true">✓</div>
              <div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span>{service.tag}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="trust" id="zkusenost">
        <div className="trustPhoto">
          <img src="/section-2.webp" alt="Tým zkušených účetních Trivi v liberecké kanceláři" />
          <div className="liberecTag"><span>50°46′ N</span><strong>LIBEREC</strong></div>
        </div>

        <div className="trustContent">
          <p className="sectionLabel">O koho se opíráte</p>
          <h2>Portál počítá.<br />Lidé přemýšlejí.</h2>
          <p className="trustLead">Samouky u nás nehledejte. Vaše podklady zpracují vyškolené účetní a na složitější případy dohlédnou daňoví poradci.</p>

          <blockquote>
            <div className="stars" aria-label="Hodnocení pět z pěti">★★★★★</div>
            <p>„Odpovědi přicházejí rychleji než ranní káva. V portálu najdeme vše potřebné a máme jistotu, že je účetnictví v pořádku.“</p>
            <footer><strong>Matěj Mach</strong><span>jednatel, DALUMA s.r.o.</span></footer>
          </blockquote>

          <div className="proofLine">
            <span><strong>1 000+</strong> podnikatelů po celé ČR</span>
            <span><strong>24/7</strong> přístup k vlastní agendě</span>
            <span><strong>0 Kč</strong> za aplikaci k účetním službám</span>
          </div>
        </div>
      </section>
    </main>
  );
}
