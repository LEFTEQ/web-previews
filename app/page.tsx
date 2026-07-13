export default function Page() {
  const procedures = [
    {
      title: "Vyšetření pohybu",
      text: "Nejdřív společně pojmenujeme, kde a při čem vás tělo omezuje. Terapie pak vychází z konkrétního nálezu, ne z univerzálního postupu.",
    },
    {
      title: "Cílená terapie",
      text: "Práce s měkkými tkáněmi, mobilizace a aktivní cvičení volíme podle aktuálního stavu i toho, kam se potřebujete vrátit.",
    },
    {
      title: "Pohyb na doma",
      text: "Odcházíte s krátkým, srozumitelným plánem. Budete vědět, co cvičit, jak často a podle čeho poznat správné provedení.",
    },
  ];

  return (
    <main className="rh-page">
      <header className="rh-hero">
        <nav className="rh-nav" aria-label="Hlavní navigace">
          <a className="rh-wordmark" href="#zacatek" aria-label="Studio Zuzana – úvod">
            <span>studio</span>
            <strong>ZUZANA</strong>
          </a>

          <div className="rh-navLinks">
            <a href="#procedury">Rehabilitace</a>
            <a href="#prubeh">První návštěva</a>
          </div>
        </nav>

        <div className="rh-heroGrid" id="zacatek">
          <div className="rh-heroCopy">
            <p className="rh-eyebrow">Rehabilitace · Ostrava</p>
            <h1>
              Zpátky
              <span>do pohybu.</span>
            </h1>
            <p className="rh-lead">
              Když bolest mění každý krok, začneme tím, co potřebujete zvládnout právě vy. Ve Studiu Zuzana hledáme cestu k jistějšímu pohybu bez zbytečného spěchu.
            </p>
            <div className="rh-heroAction">
              <a className="rh-button" href="#prubeh">Zjistit, co mě čeká</a>
              <p><strong>200 Kč</strong><span>vstupní administrativní poplatek</span></p>
            </div>
          </div>

          <figure className="rh-heroVisual">
            <div className="rh-photoFrame">
              <img
                src="/hero.webp"
                alt="Individuální rehabilitační péče ve Studiu Zuzana v Ostravě"
                width="1200"
                height="1500"
                fetchPriority="high"
              />
              <span className="rh-tape" aria-hidden="true" />
            </div>
            <figcaption>Individuální péče podle toho, jak se vaše tělo skutečně hýbe.</figcaption>
          </figure>
        </div>
      </header>

      <section className="rh-services" id="procedury" aria-labelledby="procedury-title">
        <div className="rh-sectionIntro">
          <p className="rh-eyebrow">Co spolu řešíme</p>
          <h2 id="procedury-title">Ne jen místo, které bolí. Celý pohyb.</h2>
          <p>Každá návštěva má jasný důvod a navazuje na to, co vaše tělo zvládlo minule.</p>
        </div>

        <div className="rh-servicesGrid">
          <div className="rh-servicePhoto">
            <img
              src="/section-1.webp"
              alt="Fyzioterapeutická práce s pohybovým aparátem klienta"
              width="1200"
              height="900"
              loading="lazy"
            />
          </div>

          <div className="rh-serviceList">
            {procedures.map((procedure) => (
              <article className="rh-service" key={procedure.title}>
                <span className="rh-joint" aria-hidden="true" />
                <div>
                  <h3>{procedure.title}</h3>
                  <p>{procedure.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="rh-visit" id="prubeh" aria-labelledby="prubeh-title">
        <div className="rh-visitImage">
          <img
            src="/section-2.webp"
            alt="Klidné prostředí rehabilitačního Studia Zuzana v Ostravě"
            width="1200"
            height="1400"
            loading="lazy"
          />
          <p><span>Ostrava</span> Péče v soukromí a bez spěchu</p>
        </div>

        <div className="rh-visitContent">
          <p className="rh-eyebrow">První návštěva</p>
          <h2 id="prubeh-title">Přijdete s potížemi. Odejdete s plánem.</h2>

          <ol className="rh-steps">
            <li>
              <span>01</span>
              <div>
                <h3>Řeknete, co vás omezuje</h3>
                <p>Zajímají nás běžné situace: chůze do schodů, práce, sport, spánek nebo návrat po zákroku.</p>
              </div>
            </li>
            <li>
              <span>02</span>
              <div>
                <h3>Podíváme se na pohyb</h3>
                <p>Vyšetření ukáže souvislosti a pomůže vybrat postup, který odpovídá vašemu aktuálnímu stavu.</p>
              </div>
            </li>
            <li>
              <span>03</span>
              <div>
                <h3>Domluvíme další krok</h3>
                <p>Vysvětlíme terapii i domácí cvičení tak, abyste přesně věděli, co dělat mezi návštěvami.</p>
              </div>
            </li>
          </ol>

          <aside className="rh-fee" aria-label="Informace o vstupním poplatku">
            <strong>Vstupní poplatek 200 Kč</strong>
            <p>Počítejte s jednorázovým administrativním poplatkem při zahájení rehabilitace.</p>
          </aside>
        </div>
      </section>
    </main>
  );
}
